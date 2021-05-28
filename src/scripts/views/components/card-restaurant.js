/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class CardRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id, pictureId, name, city, rating, description,
    } = this._restaurant;

    this.innerHTML = `
    <div class="rest-item">
        <img tabindex="0" class="rest-item__thumbnail" 
            src="${CONFIG.BASE_IMAGE_URL + pictureId}"
            alt="Gambar restoran ${name}, ${city}">
            <p tabindex="0" class="rest-item__city">${city}</p>
        <div class="rest-item__content">
            <p tabindex="0" class="rest-item__rating">⭐️ ${rating}</p>
            <h3 class="rest-item__title">${name}</h3>
            <p tabindex="0" class="rest-item__description">${description}</p>
            <div class="btn-modal">
              <a href="${`/#/detail/${id}`}" class="modal__button">Details</a>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('card-restaurant', CardRestaurant);
