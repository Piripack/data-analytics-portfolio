document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");
  if (!galleryImages.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">Close</button>
    <div class="lightbox-inner">
      <img alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  const close = () => {
    lightbox.classList.remove("open");
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    lightboxCaption.textContent = "";
  };

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      const figure = image.closest("figure");
      const caption = figure ? figure.querySelector(".caption") : null;
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || "";
      lightboxCaption.textContent = caption ? caption.textContent : "";
      lightbox.classList.add("open");
    });
  });

  closeButton.addEventListener("click", close);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      close();
    }
  });
});
