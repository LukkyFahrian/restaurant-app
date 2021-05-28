/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb';
import LikeButtonInitiator from '../../utils/like-button-initiator';

// components
import '../components/restaurant-detail';
import '../components/pre-loader';
import '../components/error-message';

const Detail = {
  async render() {
    return `
        <pre-loader></pre-loader>
        <div id="resto" class="resto">
          <div id="contentMain" class="detail-resto">
            <h5 tabindex="0" class="content__title">Detail Restaurant</h5>
          </div>
        </div>
        <div id="reviewSend" class="review-send detail-content">
        <h6 tabindex="0" class="review-send__title">Send Review :</h6>
          <label for="reviewerName">Nama :</label>
          <input type="text" id="reviewerName" name="name" class="review-send__name">
          <label for="reviewerDescription">Review :</label>
          <input type="text" id="reviewerDescription" name="name" class="review-send__description">
          <input type="submit" id="submitReview" value="Submit" class="review-send__submit">
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#resto');
    const btnsubmitReview = document.querySelector('#submitReview');
    const reviewName = document.querySelector('#reviewerName');
    const reviewDesc = document.querySelector('#reviewerDescription');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      const restaurantDetail = document.createElement('restaurant-detail');
      restaurantDetail.restaurant = restaurants.restaurant;
      restoContainer.appendChild(restaurantDetail);

      // Like Button
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurants.restaurant.id,
          pictureId: restaurants.restaurant.pictureId,
          city: restaurants.restaurant.city,
          name: restaurants.restaurant.name,
          rating: restaurants.restaurant.rating,
          description: restaurants.restaurant.description,
        },
      });

      // Button submit review
      btnsubmitReview.addEventListener('click', () => {
        const constumerReview = {
          id: url.id,
          name: reviewName.value,
          review: reviewDesc.value,
        };
        RestaurantDbSource.addConstumerReview(constumerReview);
        window.location.reload();
      });
    } catch (error) {
      const errorMessage = document.createElement('error-message');
      restoContainer.appendChild(errorMessage);
    }
  },
};

export default Detail;
