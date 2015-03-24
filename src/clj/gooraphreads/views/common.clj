(ns gooraphreads.views.common
  (use hiccup.core
       hiccup.page-helpers))

(defmacro defpartial
  "Create a function that returns html use hiccup. The function is callable with the given name."
  [fname params & body]
    `(defn ~fname ~params
      (html
        ~@body)))

(defpartial build-head [incls]
	[:head
	  (html
	    [:meta {:name "description" :content "View your goodreads data in style!"}]
	    [:meta {:name "keywords" :content "goodreads,visualize,graphs,data,read-a-holic,clojure,clojurescript,Chart.js"}]
	    [:meta {:name "author" :content "Nicholas Quirk"}]
	    [:meta {:http-equiv "content-type" :content "text/html;charset=UTF-8"}])
	    [:title "gooraphreads"]
	    (include-js "Chart.js")
	    (include-js "gooraphreads.js")
	    (include-css "gooraphreads.css")])

(defpartial main-layout [& content]
  (html5
    (build-head [])
     [:body
      [:div#wrapper
        [:div.content
              content]]
      (include-js "graphs.js")]))

(defpartial page-not-found []
  (html5
    (build-head [:default])
      [:body
        [:h1.center "Page Not Found :^("]]))