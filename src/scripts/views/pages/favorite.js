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
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestoIdb.getAllRestos();
      const restaurantsContainer = document.querySelector('#resto');
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('card-restaurant');
        restaurantItem.restaurant = restaurant;
        restaurantsContainer.appendChild(restaurantItem);
      });
    } catch (error) {
      const contentMain = document.querySelector('.content-rest');
      const errorMessage = document.createElement('error-message');
      contentMain.appendChild(errorMessage);
    }
  },
};

export default Favorite;
