import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listLink = document.querySelector(".gallery");

function createGalary(photosInformArr) {
  return photosInformArr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
listLink.insertAdjacentHTML("afterbegin", createGalary(galleryItems));

let gallery = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
