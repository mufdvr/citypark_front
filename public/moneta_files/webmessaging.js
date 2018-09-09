var regexp_domain = new RegExp("^(?:https?://)?(?:[^@/\n]+@)?(?:www.)?([^:/\n]+)");
var regexp_class = new RegExp("([^A-Za-z0-9-_])");
var originDomain = "";
if (document.referrer || !/^\s*$/.test(document.referrer)) {
  originDomain = document.referrer.match(regexp_domain)[0]
}
var assistantState = 0;
var assistantStates = ["none", "success", "fail", "inprogress", "return"];

function setStatus(state) {
  assistantState = assistantStates.indexOf(state);
  var msg = {
    m_type: "status",
    status: assistantStates[assistantState]
  };
  sendWebMessage(msg)
}

function sendGlobalError(errorText) {
  var msg = {
    m_type: "globalError",
    type: errorText
  };
  sendWebMessage(msg)
}

function sendWebMessage(msg) {
  parent.postMessage(JSON.stringify(msg), "*")
}
if (window.addEventListener) {
  window.addEventListener("message", listener, false)
} else {
  window.attachEvent("onmessage", listener)
}

function listener(event) {
  var msg = JSON.parse(event.data);
  switch (msg.m_type) {
    case "request":
      if (msg.m_val == "status") {
        parent.postMessage(assistantStates[assistantState], "*");
        setStatus(assistantStates[assistantState])
      }
      if (msg.m_val == "submitForm") {
        var submitInput = document.getElementsByName("form")[0].querySelectorAll('input[type="submit"]')[0];
        if (submitInput != undefined) {
          document.getElementsByName("form")[0].querySelectorAll('input[type="submit"]')[0].click()
        } else {
          var response = {
            m_type: "submitForm",
            m_val: "error"
          };
          sendWebMessage(response)
        }
      }
      if (msg.m_val == "widgetSize") {
        var body = $("body");
        var response = {
          m_type: "widgetSize",
          width: body.outerWidth(true).toString(),
          height: body.outerHeight(true).toString()
        };
        sendWebMessage(response)
      }
      break;
    case "bodyClass":
      var response = {
        m_type: "bodyClass",
        result: "error",
        comment: ""
      };
      if (!regexp_class.test(msg.m_val)) {
        var bd = document.getElementsByTagName("body")[0];
        if (!classExist(bd, msg.m_val)) {
          document.getElementsByTagName("body")[0].classList.add(msg.m_val);
          sendSize()
        } else {
          response.comment = "Class already exists";
          sendWebMessage(response)
        }
      } else {
        response.comment = "Wrong class name";
        sendWebMessage(response)
      }
      break;
    case "setFormFieldValue":
      var fieldName = msg.formFieldName;
      var response = {
        m_type: "setFormFieldValue",
        result: "error"
      };
      var formElement = document.forms[0].elements[fieldName];
      if (!!formElement) {
        formElement.value = msg.formFieldValue
      } else {
        response.result = "noFieldFound"
      }
      if (formElement.value === msg.formFieldValue) {
        response.result = "success"
      }
      sendWebMessage(response);
      break
  }
}

function sendSize() {
  var body = $("body");
  var size = {
    m_type: "widgetSize",
    width: body.outerWidth(true).toString(),
    height: (body.outerHeight(true) + 10).toString()
  };
  sendWebMessage(size)
}
window.onload = widgetLoad;

function widgetLoad() {
  sendSize()
}

function classExist(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1
};