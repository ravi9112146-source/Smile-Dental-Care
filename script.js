document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointment-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const appointment = {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                service: document.getElementById("service").value,
                date: document.getElementById("date").value
            };

            sessionStorage.setItem(
                "appointment",
                JSON.stringify(appointment)
            );

            window.location.href = "success.html";
        });
    }

});