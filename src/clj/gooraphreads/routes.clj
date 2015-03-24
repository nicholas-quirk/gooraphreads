(ns gooraphreads.routes
  (:use compojure.core
        hiccup.core
        hiccup.form-helpers
        hiccup.page-helpers
        clojure.java.io
        clojure.data.csv)
  (:require [compojure.route :as route]
            [ring.middleware.multipart-params :as mp]
            [ring.util.response :as response]
            [gooraphreads.views.graphs :as graphs-views]
            [gooraphreads.views.error :as error-views]))

(defn handle-upload [file]
  (try
    (with-open [in-file (reader (:tempfile file))]
      (let [test-data (into [] (doall (read-csv in-file)))]
        (graphs-views/graphs-layout file)))
    (catch Exception e (error-views/error-layout))))

(defroutes main-routes
  (GET "/" [] (response/file-response "index.html" {:root "resources/public"}))
  (mp/wrap-multipart-params
    (POST "/upload" {params :params} (handle-upload (get params "file"))))
  (route/resources "/"))
