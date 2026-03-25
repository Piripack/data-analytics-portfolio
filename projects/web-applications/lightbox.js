document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  if (!images.length) return;

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

  const viewer = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");
  const close = () => {
    lightbox.classList.remove("open");
    viewer.removeAttribute("src");
    viewer.alt = "";
    caption.textContent = "";
  };

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const figure = image.closest("figure");
      const figcaption = figure ? figure.querySelector(".caption") : null;
      viewer.src = image.src;
      viewer.alt = image.alt || "";
      caption.textContent = figcaption ? figcaption.textContent : "";
      lightbox.classList.add("open");
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) close();
  });
});
