document.addEventListener('DOMContentLoaded', function () {
    // Page 1 : Collecte des informations personnelles
    const form = document.getElementById("rental-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérer les données du formulaire
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const boxSize = document.getElementById("box-size").value;
        const insuranceType = document.getElementById("insurance-type").value;

        // Stocker les informations dans le localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("boxSize", boxSize);
        localStorage.setItem("insuranceType", insuranceType);

        // Rediriger vers la page 2
        window.location.href = "page2.html"; // Redirection vers la page 2
    });
});


    // Page 2 : Collecte des informations bancaires
    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Logique pour traiter les informations bancaires via Stripe
        window.location.href = "page3.html";
