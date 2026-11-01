document.addEventListener("DOMContentLoaded", () => {
   
    const popUpImages = document.querySelectorAll(".gallery-grid img, .gallery-img, .card-grid img");
    
    if (popUpImages.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.cssText = "display:none; position:fixed; z-index:999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); text-align:center; justify-content:center; align-items:center;";
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width:90%; max-height:90%; border:2px solid #fff; box-shadow:0 0 20px rgba(0,0,0,0.5); object-fit:contain;";
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        popUpImages.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }

    const activeForm = document.querySelector("form");

    if (activeForm) {
        activeForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.querySelector("#name, input[name='name']");
            const email = document.querySelector("#email, input[name='email']");
            const phone = document.querySelector("#phone, input[name='phone']");
            const message = document.querySelector("textarea");

            let errors = [];

            if (name && name.value.trim() === "") {
                errors.push("Full Name is required.");
            }

            if (email && (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes("."))) {
                errors.push("A valid Email Address is required.");
            }

            if (phone && phone.value.trim().length < 7) {
                errors.push("Please enter a valid phone number (at least 7 digits).");
            }

            if (message && message.value.trim() === "") {
                errors.push("Message/Enquiry details cannot be left blank.");
            }

            if (errors.length > 0) {
                alert("Validation Errors:\n\n" + errors.join("\n"));
            } else {
                alert("Success! Your enquiry has been validated and sent.");
                activeForm.reset();
            }
        });
    }

    const searchInput = document.getElementById("serviceSearch");
    
    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
            }
        });

        searchInput.addEventListener("input", () => {
            const filterValue = searchInput.value.toLowerCase().trim();
            const serviceCards = document.querySelectorAll(".card-grid .card");

            serviceCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(filterValue)) {
                    card.style.display = ""; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }
});