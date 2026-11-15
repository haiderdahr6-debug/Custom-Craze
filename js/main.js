const WHATSAPP_NUMBER = "923042798721";

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".order-wa-btn[data-product]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const product = btn.getAttribute("data-product") || "this item";
      const price = btn.getAttribute("data-price") || "";

      const message =
        "Hello Custom Craze! I want to order:\n" +
        "Product: " + product + "\n" +
        (price ? "Price: " + price + "\n" : "") +
        "Payment: Cash on Delivery\n\n" +
        "My name:\nMy phone:\nMy full address:";

      openWhatsApp(message);
    });
  });

  const orderForm = document.getElementById("orderForm");

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("ofName").value.trim();
      const phone = document.getElementById("ofPhone").value.trim();
      const address = document.getElementById("ofAddress").value.trim();
      const city = document.getElementById("ofCity").value.trim();
      const product = document.getElementById("ofProduct").value;
      const qty = document.getElementById("ofQty").value.trim() || "1";
      const notes = document.getElementById("ofNotes").value.trim();

      if (!name || !phone || !address || !city) {
        alert("Please fill all required fields.");
        return;
      }

      const message =
        "NEW ORDER - Custom Craze\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address + "\n" +
        "City: " + city + "\n" +
        "Product: " + product + "\n" +
        "Quantity: " + qty + "\n" +
        "Notes: " + notes;

      openWhatsApp(message);
    });
  }

  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});

function openWhatsApp(message) {
  const url = "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
