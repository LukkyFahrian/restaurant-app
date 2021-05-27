/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async recommendRestaurant() {
    const response = await fetch(API_ENDPOINT.RECOMMEND);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addConstumerReview(constumerReview) {
    const reviewRespond = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(constumerReview),
    });
    return reviewRespond;
  }
}

export default RestaurantDbSource;
