// package main

// import (
// 	"fmt"
// 	"html/template"
// 	"log"
// 	"net/http"
// )

// var apiRequestDuration = prometheus.NewHistogramVec(
// 	prometheus.HistogramOpts{
// 		Name:    "api_request_duration_seconds",
// 		Help:    "Histogram for the request duration of the public API, partitioned by status class.",
// 		Buckets: prometheus.ExponentialBuckets(0.1, 1.5, 5),
// 	},
// 	[]string{"status_class"},
// )

// func handler_homepage(w http.ResponseWriter, r *http.Request) {

// 	tmpl := template.Must(template.ParseFiles("../../index.html"))
// 	tmpl.Execute(w, nil)

// //указываем путь к нужному файлу
// path := filepath.Join("../../index.html")
// //создаем html-шаблон
// tmp, err := template.ParseFiles(path)
// if err != nil {
// 	http.Error(w, err.Error(), 400)
// 	return
// }
// //выводим шаблон клиенту в браузер
// err = tmp.Execute(w, nil)
// if err != nil {
// 	http.Error(w, err.Error(), 400)
// 	return
// }
// ================================================================= //
// status := http.StatusOK

// timer := prometheus.NewTimer(prometheus.ObserverFunc(func(v float64) {
// 	switch {
// 	case status >= 500: // Server Error
// 		apiRequestDuration.WithLabelValues("5xx").Observe(v)
// 	case status >= 400: // Client Error
// 		apiRequestDuration.WithLabelValues("4xx").Observe(v)
// 	case status >= 300: // Redirect
// 		apiRequestDuration.WithLabelValues("3xx").Observe(v)
// 	case status >= 200: // OK
// 		apiRequestDuration.WithLabelValues("2xx").Observe(v)
// 	case status >= 100: // INFO
// 		apiRequestDuration.WithLabelValues("1xx").Observe(v)

// 	}
// }))
// defer timer.ObserveDuration()

// }

// func main() {
// 	http.HandleFunc("/", handler_homepage)
// 	log.Fatal(http.ListenAndServe(":8000", nil))
// }
