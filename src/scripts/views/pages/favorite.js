/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import '../components/card-restaurant';
import '../components/hero-element';
import '../components/pre-loader';

const Favorite = {
  async render() {
    return `
    <pre-loader></pre-loader>
    <hero-element></hero-element>
    <div id="contentMain" class="content-rest">
        <h2 tabindex="0" class="content__title">Favorites Kuliner</h2>
        <div id="resto" class="rest-list"></div>
        <div id="noFavoriteContainer" class="no-favorite__container"></div>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestoIdb.getAllRestos();
      const restaurantsContainer = document.querySelector('#resto');
      const noFavoriteContainer = document.querySelector('#noFavoriteContainer');
      console.log(restaurants.length);
      if (restaurants.length === 0) {
        const noFavorite = document.createElement('no-favorite');
        noFavoriteContainer.appendChild(noFavorite);
        noFavorite.innerHTML = `
        <div class="error-container__favorite">
          <h2 tabindex="0" class="error-message">No Favorite Restaurant</h2>
        </div>
        `;
      } else {
        restaurants.forEach((restaurant) => {
          const restaurantItem = document.createElement('card-restaurant');
          restaurantItem.restaurant = restaurant;
          restaurantsContainer.appendChild(restaurantItem);
        });
      }
    } catch (error) {
      const contentMain = document.querySelector('.content-rest');
      const errorMessage = document.createElement('error-message');
      contentMain.appendChild(errorMessage);
    }
  },
};

export default Favorite;
