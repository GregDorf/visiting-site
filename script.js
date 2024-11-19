document.getElementById("menuButton").addEventListener("click", function() {
    document.getElementById("sideMenu").style.display = "block";
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("sideMenu").style.display = "none";
});

// Открытие модального окна
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("orderModal").style.display = "block";
});

// Закрытие модального окна при нажатии на "X"
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("orderModal").style.display = "none";
});

// Закрытие модального окна при нажатии на кнопку "Отмена"
document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("orderModal").style.display = "none";
});

// Закрытие модального окна при клике вне окна
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("orderModal")) {
        document.getElementById("orderModal").style.display = "none";
    }
});