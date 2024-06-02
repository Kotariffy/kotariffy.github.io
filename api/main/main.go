package main

import (
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "index.html")
}

func main() {
	http.HandleFunc("/", index)

	http.ListenAndServe(":80", nil)
}
