// Get the modal
const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// Get all images with class="item-image"
const images = document.getElementsByClassName("item-image");
// Get the modal content image
const modalImg = document.getElementById("modalImg");

// Function to open the modal and set image source
function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Loop through all images and add onclick event listeners
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        if (modal.style.display === "block" && modalImg.src === this.src) {
            closeModal();
        } else {
            openModal(this.src);
        }
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal();
};

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Function to handle "Place Order" button click
function placeOrder() {
    alert("Your order has been placed!");
}

// Function to handle "Pre-order" button click
function preOrder() {
    alert("Thank you for your pre-order! We will contact you shortly.");
}

// Function to handle "Notify Me" button click
function notifyMe() {
    alert("You will be notified when this item is back in stock.");
}

// Add event listeners to "Place Order" buttons
const placeOrderButtons = document.querySelectorAll('.place-order-btn');
placeOrderButtons.forEach(function (button) {
    button.addEventListener('click', placeOrder);
});

// Add event listeners to "Pre-order" buttons
const preOrderButtons = document.querySelectorAll('.preorder-btn');
preOrderButtons.forEach(function (button) {
    button.addEventListener('click', preOrder);
});

// Add event listeners to "Notify Me" buttons
const notifyButtons = document.querySelectorAll('.notify-btn');
notifyButtons.forEach(function (button) {
    button.addEventListener('click', notifyMe);
});