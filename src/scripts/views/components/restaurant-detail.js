/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      pictureId, name, city, rating, description, address, categories, menus, customerReviews,
    } = this._restaurant;

    this.innerHTML = `
    <div class="detail-content">
        <h3 tabindex="0" class="detail-rest-item__title">${name}</h3>
        <div class="detail-article">
            <div class="detail-article__img">
                <img tabindex="0" class="detail-rest-item__thumbnail" 
                src="${CONFIG.BASE_IMAGE_URL + pictureId}"
                alt="Gambar restoran ${name}, ${city}">
            </div>
            <div class="detail-article__info">
                <h4 tabindex="0">Information</h4>
                <h5 tabindex="0">City</h5>
                <p tabindex="0">${city}</p>
                <h5 tabindex="0">Rating</h5>
                <p tabindex="0">⭐️ <span>${rating}</span></p>
                <h5 tabindex="0">Address</h5>
                <p tabindex="0">${address}</p>
            </div>
            <div class="category-list">
                <h5 tabindex="0">Categories</h5>
                <p tabindex="0">${categories.map((category) => category.name).join(' - ')}</p>
            </div>
            <div class="food-list">
                <h5 tabindex="0">Foods</h5>
                <ul>
                    ${menus.foods.map((food) => `<li tabindex="0">- ${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="drink-list">
                <h5 tabindex="0">Drinks</h5>
                <ul>
                    ${menus.drinks.map((drink) => `<li tabindex="0">- ${drink.name}</li>`).join('')}
                </ul>
            </div>
            <div class="description-detail">
                <h5 tabindex="0">Description</h5>
                <p tabindex="0" class="detail-rest-item__description">${description}</p>
            </div>
            <div class="costumerReviews">
                <h5 tabindex="0">Reviews :</h5>
                ${customerReviews.map((review) => `
                    <div class="costumerReview">
                        <h6 tabindex="0">${review.name}</h6>
                        <p tabindex="0" class="date-review">${review.date}</p>
                        <p tabindex="0">${review.review}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define('restaurant-detail', RestaurantDetail);
