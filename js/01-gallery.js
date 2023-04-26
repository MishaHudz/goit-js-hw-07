import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listLink = document.querySelector(".gallery");
listLink.insertAdjacentHTML("afterbegin", createGalary(galleryItems));

function createGalary(photosInformArr) {
  return photosInformArr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

listLink.addEventListener("click", onlistLinkClick);

function onlistLinkClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const originalPhoto = evt.target.dataset.source;
  createModal(originalPhoto);
}

function createModal(originalPhoto) {
  const instance = basicLightbox.create(`
        <img src="${originalPhoto}" width="100%" height="100%">
    `);
  instance.show();
}
