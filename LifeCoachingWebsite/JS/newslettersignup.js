"use strict";

const form = document.getElementById("newsletter-form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate the date entered by the user
const isValidDate = (date) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(date);
};

// Format the date entered by the user in a user-friendly format
const getFormattedDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateText = month + "/" + day + "/" + year;
  return dateText;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const confirmEmail = form.elements["confirm-email"].value;
  const firstName = form.elements["first-name"].value;
  const date = form.elements["date-time"].value;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else if (email !== confirmEmail) {
    alert("Emails do not match. Please enter the same email in both fields.");
  } else if (!email || !confirmEmail || !firstName || !isValidDate(date)) {
    alert(
      "Please fill out all fields correctly before submitting. The date field format should be MM/DD/YYYY"
    );
  } else {
    const formattedDate = getFormattedDate(new Date(date));
    form.elements["date-time"].value = formattedDate;
    window.location.href = "confirmation.html";
  }
});
