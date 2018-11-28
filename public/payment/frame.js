function sendWebMessage(msg) {
  parent.postMessage(JSON.stringify(msg), "*")
}

(function() {
  sendWebMessage({ m_type: 'finish' })
}).call(this);