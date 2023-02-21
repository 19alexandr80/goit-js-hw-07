import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// import SimpleLightbox from "./simple-lightbox.js";
const galleryEl = document.querySelector(".gallery");
const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("beforeEnd", createGallery);
const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
