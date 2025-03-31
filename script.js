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

        document.addEventListener('DOMContentLoaded', function () {
    // Page 3 : Récapitulatif de la commande
    if (window.location.href.includes('page3.html')) {
        // Récupérer les informations du localStorage
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");
        const email = localStorage.getItem("email");
        const address = localStorage.getItem("address");
        const boxSize = localStorage.getItem("boxSize");
        const insuranceType = localStorage.getItem("insuranceType");

        // Afficher le récapitulatif
        document.getElementById("full-name").textContent = `${firstName} ${lastName}`;
        document.getElementById("email-summary").textContent = email;
        document.getElementById("address-summary").textContent = address;
        document.getElementById("box-summary").textContent = boxSize === "15" ? "15 m² - 90€" : "30 m² - 120€";
        document.getElementById("insurance-summary").textContent = insuranceType;

        // Calculer le montant total
        let totalAmount = (boxSize === "15" ? 90 : 120);
        if (insuranceType === "simple") totalAmount += 10;
        if (insuranceType === "moyenne") totalAmount += 20;
        if (insuranceType === "premium") totalAmount += 30;
        document.getElementById("total-summary").textContent = totalAmount;
    }
});

