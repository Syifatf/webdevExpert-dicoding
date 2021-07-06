import API_ENDPOINT from '../globals/api-endpoint';
 
class RestoSource {
  static async homeResto() {
    const response = await fetch(API_ENDPOINT.HOME_RESTO);
    const responseJson = await response.json();
    return responseJson.results;
  }
 
//   static async upcomingMovies() {
//     const response = await fetch(API_ENDPOINT.UPCOMING);
//     const responseJson = await response.json();
//     return responseJson.results;
//   }
 
  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview() {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW);
    return response.json();
  }

  static async search() {
    const response = await fetch(API_ENDPOINT.SEARCH);
    const responseJson = await response.json();
    return responseJson.results;
  }
}
 
export default RestoSource;