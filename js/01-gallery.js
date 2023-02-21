import { galleryItems } from "./gallery-items.js";
// Change code below this line

// import * as basicLightbox from "./basicLightbox.js";
const galleryEl = document.querySelector(".gallery");
const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("beforeEnd", createGallery);
const onModal = function (e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
          <img src="${e.target.dataset.source}" width="800" height="600">
      `);
  instance.show();
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
};
galleryEl.addEventListener("click", onModal);
