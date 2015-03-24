(ns gooraphreads.views.graphs
  (:use compojure.core
        hiccup.core
        hiccup.form-helpers
        hiccup.page-helpers
        [c2.core :as unify]
        c2.scale)
  (:require [c2.scale :as scale]
            [gooraphreads.views.common :as common-views]
            [gooraphreads.helpers :as gooraphreads-helpers]))

(defn graphs-layout [file]
  (common-views/main-layout
    [:div {:class "mainGraphContainer"}
	    (let [keys (keys (gooraphreads-helpers/extract-data-by-month file))
	          keys-vector (into [] (doall keys))
            js-keys (clojure.string/join "," (map #(get gooraphreads-helpers/months-map %) keys-vector))]
	      [:div {:id "date-read-month-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-month file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
        [:div {:id "date-read-month-values" :style "display:none;"} (str js-values)])
	    [:h3 "Peak Months"]
	    [:canvas {:id "byMonthChart" :width "400" :height "400"} ""]]
      
    [:div {:class "mainGraphContainer"}
      (let [keys (keys (gooraphreads-helpers/extract-data-by-year file))
	          keys-vector (into [] (doall keys))
            js-keys (clojure.string/join "," (map #(str \" % \") keys-vector))]
	      [:div {:id "date-read-year-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-year file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
        [:div {:id "date-read-year-values" :style "display:none;"} (str js-values)])  
      [:h3 "Books Read by Year"]
	    [:canvas {:id "byYearChart" :width "400" :height "400"}]]

    [:div {:class "mainGraphContainer"}
      (let [keys (keys (gooraphreads-helpers/extract-data-by-author file))
	          keys-vector (into [] (doall keys))
	          js-keys (clojure.string/join "," (map #(str %) keys-vector))]
        [:div {:id "date-read-author-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-author file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
        [:div {:id "date-read-author-values" :style "display:none;"} (str js-values)])
      [:h3 "Your Top Authors"]
	    [:canvas {:id "byAuthorChart" :width "500" :height "400"}]]

    [:div {:class "mainGraphContainer"}
	    (let [keys (keys (gooraphreads-helpers/extract-data-by-shelf file))
	          keys-vector (into [] (doall keys))
	          js-keys (clojure.string/join "!@#" (map #(str %) keys-vector))]
	      [:div {:id "date-read-shelf-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-shelf file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
	      [:div {:id "date-read-shelf-values" :style "display:none;"} (str js-values)])  
      [:h3 "Your Top Shelves"]
	    [:canvas {:id "byShelfChart" :width "600" :height "600"}]]
      
    [:div {:class "mainGraphContainer"}
      (let [keys (keys (gooraphreads-helpers/extract-data-by-publisher file))
	          keys-vector (into [] (doall keys))
	          js-keys (clojure.string/join "," (map #(str %) keys-vector))]
        [:div {:id "date-read-publisher-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-publisher file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
        [:div {:id "date-read-publisher-values" :style "display:none;"} (str js-values)])
      [:h3 "Your Top Publishers"]
	    [:canvas {:id "byPublisherChart" :width "600" :height "400"}]]

    [:div {:class "mainGraphContainer"}
	    (let [keys (keys (gooraphreads-helpers/extract-data-by-published-year file))
	          keys-vector (into [] (doall keys))
	          js-keys (clojure.string/join "," (map #(str \" % \") keys-vector))]
	      [:div {:id "date-read-published-year-keys" :style "display:none;"} (str js-keys)])
	    (let [values (vals (gooraphreads-helpers/extract-data-by-published-year file))
	          values-vector (into [] (doall values))
	          js-values (clojure.string/join "," (map #(str %) values-vector))]
	      [:div {:id "date-read-published-year-values" :style "display:none;"} (str js-values)])
      [:h3 "Most Read Published Years"]
	    [:canvas {:id "byPublishedYearChart" :width "600" :height "400"}]]))