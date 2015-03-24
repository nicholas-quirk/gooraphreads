(ns gooraphreads.views.error
  (:use compojure.core
        hiccup.core
        hiccup.form-helpers
        hiccup.page-helpers)
  (:require [gooraphreads.views.common :as common-views]))

(defn error-layout []
  (common-views/main-layout
    [:h1 "Error!"]))