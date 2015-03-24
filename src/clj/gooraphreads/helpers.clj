(ns gooraphreads.helpers
  (:use clojure.java.io
        clojure.data.csv
        [clj-time.core :only [default-time-zone]]
        [clj-time.format :as time-format]))

(def months-map {1 "January"
                 2 "February"
                 3 "March"
                 4 "April"
                 5 "May"
                 6 "June"
                 7 "July"
                 8 "August"
                 9 "September"
                 10 "October"
                 11 "November"
                 12 "December"})

;; Define date parsers.
(def month-parser (time-format/formatter (default-time-zone) "MM" "YYYY/MM/dd"))
(def year-parser (time-format/formatter (default-time-zone) "YYYY" "YYYY/MM/dd"))

;; Aggregate the data.
(defn count-data [coll]
  (reduce
    (fn [m x]
      (assoc m x (inc (m x 0)))) {} coll))

(defn sort-my-by-value [results]
  (into (sorted-map-by
          (fn [key1 key2]
            (compare
              [(get results key2) key2]
              [(get results key1) key1])))
        results))

(defn sort-my-map-by-key [results]
  (into (sorted-map-by
          (fn [key1 key2]
            (compare
              [key1 (get results key1)]
              [key2 (get results key2)])))
        results))

;; Basic way to extract data from CSV.
;; What's returned is a map with the column data as the key
;; and a count for the value.
(defn extract-data [file column]
  (with-open [in-file (reader (:tempfile file))]
    (let [my-data (into [] (doall (read-csv in-file)))
          headers (first my-data)
          book-data (rest my-data)
          assoc-data (into [] (doall (map #(zipmap headers %) book-data)))
          column-data (into [] (doall (map #(get % column) assoc-data)))]
      (count-data column-data))))

;; Associate headers with each book entry, extract then zip.
(defn extract-zip-data [file column]
  (with-open [in-file (reader (:tempfile file))]
    (let [my-data (into [] (doall (read-csv in-file)))
          headers (first my-data)
          book-data (rest my-data)
          assoc-data (into [] (doall (map #(zipmap headers %) book-data)))]
      (into [] (doall (map #(get % column) assoc-data))))))

;; Extract and aggregate months of reading. The 'Date Read' column must be parsed.
(defn extract-data-by-month [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Date Read")
          column-data-filter (filter #(> (.length %) 0) column-data)
          column-data-filter-month (into [] (doall (map #(Integer/parseInt (unparse month-parser (parse month-parser %))) column-data-filter)))]
     (count-data column-data-filter-month))))

;; Extract and aggregate years of reading. The 'Date Read' column must be parsed.
(defn extract-data-by-year [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Date Read")
          column-data-filter (filter #(> (.length %) 0) column-data)
          column-data-filter-year (into [] (doall (map #(Integer/parseInt (unparse year-parser (parse year-parser %))) column-data-filter)))]
     (count-data column-data-filter-year))))

(defn extract-data-by-author [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Author")
          column-data-filter (filter #(> (.length %) 0) column-data)
          aggr-data (count-data column-data-filter)]
     (into {} (take 10 (sort-my-by-value aggr-data))))))

(defn extract-data-by-shelf [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Bookshelves")
          column-data-filter (filter #(> (.length %) 0) column-data)
          aggr-data (count-data column-data-filter)]
     (into {} (take 10 (sort-my-by-value aggr-data))))))

(defn extract-data-by-publisher [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Publisher")
          column-data-filter (filter #(> (.length %) 0) column-data)
          aggr-data (count-data column-data-filter)]
     (into {} (take 10 (sort-my-by-value aggr-data))))))

(defn extract-data-by-published-year [file]
  (with-open [in-file (reader (:tempfile file))]
    (let [column-data (extract-zip-data file "Original Publication Year")
          column-data-filter (filter #(> (.length %) 0) column-data)
          aggr-data (count-data column-data-filter)]
     (sort-my-map-by-key (into {} (take 10 (sort-my-by-value aggr-data)))))))