function sendWebMessage(msg) {
  parent.postMessage(JSON.stringify(msg), "*")
}