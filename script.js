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