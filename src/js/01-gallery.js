import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';




// console.log(SimpleLightbox);

const gallery = document.querySelector(`.gallery`)

const markup = galleryItems.map(({
    description, 
    original, 
    preview
}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join(``);


gallery.innerHTML = markup;


gallery.addEventListener(`click`, onClick);

function onClick(evt) {
   
    evt.preventDefault();
    
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
});

