"use strict";

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const email = $("#email_address");
  const phone = $("#phone");

  const terms = $("#terms");
  const comments = $("#comments");
  // create array for error messages
  const msgs = [];

  // check user entries for validity
  if (email.value == "") {
    msgs[msgs.length] = "Please enter an email address.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      msgs[msgs.length] = "Please enter a valid email address.";
    }
  }

  if (phone.value == "") {
    msgs[msgs.length] = "Please enter a mobile phone number.";
  } else {
    const phoneRegex = /^\d{3}[-.]?\d{3}[-.]?\d{4}$|^\d{1}[(]\d{3}[)]\d{3}[-.]?\d{4}$/;
    if (!phoneRegex.test(phone.value)) {
      msgs[msgs.length] =
        "Please enter a valid phone number. Ex: 444-444-4444 or 1(111)111-1111";
    }
  }

  if (terms.checked == false) {
    msgs[msgs.length] = "You must agree to the terms of service.";
  }
  if (comments.value == "") {
    msgs[msgs.length] = "You must enter a comment.";
  }

  // submit the form or notify user of errors
  if (msgs.length == 0) {
    // no error messages
    $("form").submit();
  } else {
    alert(msgs.join("\n"));
  }
};

const resetForm = () => {
  $("form").reset();

  $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#register").addEventListener("click", processEntries);
  $("#reset_form").addEventListener("click", resetForm);
  $("#email_address").focus();
});
