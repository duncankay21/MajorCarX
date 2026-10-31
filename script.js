document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-img, img");
    
    if (galleryImages.length > 0) {
        // Create lightbox container dynamically
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.cssText = "display:none; position:fixed; z-index:999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); text-align:center; justify-content:center; align-items:center;";
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width:90%; max-height:90%; border:2px solid #fff; box-shadow:0 0 20px rgba(0,0,0,0.5);";
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        galleryImages.forEach(img => {
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
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop form from submitting instantly to allow validation
            
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
                alert("Thank you! Your enquiry has been successfully validated and sent.");
                contactForm.reset();
            }
        });
    }
});