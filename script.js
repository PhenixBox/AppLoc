document.addEventListener('DOMContentLoaded', function () {
    const postalCodeInput = document.getElementById("postal-code");
    const citySelect = document.getElementById("city");

    // Ajouter un événement sur le code postal pour récupérer les villes correspondantes
    postalCodeInput.addEventListener('input', function () {
        const postalCode = postalCodeInput.value;

        // Vérifier si le code postal est valide (5 chiffres)
        if (postalCode.length === 5) {
            fetchCities(postalCode);
        } else {
            citySelect.innerHTML = '<option value="">Sélectionnez votre ville</option>';
        }
    });

    // Fonction pour récupérer les villes en fonction du code postal
    function fetchCities(postalCode) {
        // Utilisation de l'API Zippopotam pour récupérer les villes
        fetch(`https://api.zippopotam.us/fr/${postalCode}`)
            .then(response => response.json())
            .then(data => {
                // Effacer les anciennes options
                citySelect.innerHTML = '<option value="">Sélectionnez votre ville</option>';
                
                if (data.places && data.places.length > 0) {
                    // Ajouter les villes correspondantes dans le select
                    data.places.forEach(place => {
                        const option = document.createElement("option");
                        option.value = place["place name"];
                        option.textContent = place["place name"];
                        citySelect.appendChild(option);
                    });
                } else {
                    citySelect.innerHTML = '<option value="">Aucune ville trouvée</option>';
                }
            })
            .catch(err => {
                console.error('Erreur lors de la récupération des villes', err);
                citySelect.innerHTML = '<option value="">Erreur de récupération</option>';
            });
    }

    // Gestion du formulaire
    const form = document.getElementById("rental-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérer les informations du formulaire
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const streetNumber = document.getElementById("street-number").value;
        const streetName = document.getElementById("street-name").value;
        const postalCode = document.getElementById("postal-code").value;
        const city = document.getElementById("city").value;
        const boxSize = document.getElementById("box-size").value;
        const insuranceType = document.getElementById("insurance-type").value;

        // Stocker les informations dans localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("streetNumber", streetNumber);
        localStorage.setItem("streetName", streetName);
        localStorage.setItem("postalCode", postalCode);
        localStorage.setItem("city", city);
        localStorage.setItem("boxSize", boxSize);
        localStorage.setItem("insuranceType", insuranceType);

        // Rediriger vers la page suivante
        window.location.href = "page2.html"; // Redirection vers la page 2
    });
});
