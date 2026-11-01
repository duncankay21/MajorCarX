document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LIGHTBOX (Gallery & Service Page Images)
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

    // 2. FORM VALIDATION (Contact & Enquiry Pages)
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameInput = document.querySelector("#name, input[name='name']");
            const emailInput = document.querySelector("#email, input[name='email']");
            const messageInput = document.querySelector("textarea");
            
            let isValid = true;
            let errorMessage = "";

            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please enter your name.\n";
            }

            if (emailInput && (emailInput.value.trim() === "" || !emailInput.value.includes("@"))) {
                isValid = false;
                errorMessage += "Please enter a valid email address.\n";
            }

            if (messageInput && messageInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please enter a message or enquiry details.\n";
            }

            if (!isValid) {
                alert(errorMessage);
            } else {
                alert("Thank you! Your submission has been successfully validated and sent.");
                contactForm.reset();
            }
        });
    }

    // 3. DYNAMIC SEARCH FILTER (Service Page)
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