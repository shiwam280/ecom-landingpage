let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

document.addEventListener("DOMContentLoaded", function () {
  const addToCartLinks = document.querySelectorAll(".add-to-cart");

  addToCartLinks.forEach((link) => {
    link.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    event.preventDefault();

    const notification = document.createElement("div");
    notification.textContent = "Item added to cart!";
    notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #4CAF50;
          color: white;
          padding: 15px;
          border-radius: 5px;
          z-index: 1000;
      `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
