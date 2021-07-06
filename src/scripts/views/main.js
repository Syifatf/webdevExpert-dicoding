function main() {

   const baseUrl = "https://restaurant-api.dicoding.dev";

   const getResto = () => {
       // membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           if(responseJson.error) {
               showResponseMessage(responseJson.message);
           } else {
               renderAllrestaurants(responseJson.restaurants);
           }
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat GET request dan menetapkan target URL
       xhr.open("GET", `${baseUrl}/list`);
       // Mengirimkan request
       xhr.send();
   };


   const insertReview = (restaurant) => {
       // Membuat instance dari XMLHttpRequest
       const xhr = new XMLHttpRequest();

       //menetapkan callback jika response sukses dan error
       xhr.onload = function() {
           const responseJson = JSON.parse(this.responseText);
           console.log(responseJson);
           showResponseMessage(responseJson.message);
           getResto();
       };

       xhr.onerror = function() {
           showResponseMessage();
       };

       // Membuat POST request dan menetapkan target URL
       xhr.open("POST", `${baseUrl}/add`);

       // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
       xhr.setRequestHeader("Content-Type", "application/json");
       xhr.setRequestHeader("X-Auth-Token", "12345");

       // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
       xhr.send(JSON.stringify(restaurant));
   };


   const getDetailResto = (restaurant) => {
    // membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //menetapkan callback jika response sukses dan error
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText);
        if(responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            renderAllrestaurants(responseJson.restaurants);
        }
    };

    xhr.onerror = function() {
        showResponseMessage();
    };

    // Membuat GET request dan menetapkan target URL
    xhr.open("GET", `${baseUrl}/detail/${restaurant.id}`);
    // Mengirimkan request
    xhr.send();
};


   /*
       jangan ubah kode di bawah ini ya!
   */

   const renderAllrestaurants = (restaurants) => {
       const listrestaurantElement = document.querySelector("#resto");
       listrestaurantElement.innerHTML = "";

       restaurants.forEach(restaurant => {
           listrestaurantElement.innerHTML += `
               <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                   <div class="card">
                       <div class="card-body">
                           <h5>(${restaurant.id}) ${restaurant.title}</h5>
                           <p>${restaurant.author}</p>
                           <button type="button" class="btn btn-danger button-delete" id="${restaurant.id}">Hapus</button>
                       </div>
                   </div>
               </div>
           `;
       });

       const buttons = document.querySelectorAll(".button-delete");
       buttons.forEach(button => {
           button.addEventListener("click", event => {
               const restaurantId = event.target.id;
               removeBook(restaurantId);
           })
       })
   };

   const showResponseMessage = (message = "Check your internet connection") => {
       alert(message);
   };

   document.addEventListener("DOMContentLoaded", () => {

       const inputBookId = document.querySelector("#inputBookId");
       const inputBookTitle = document.querySelector("#inputBookTitle");
       const inputBookAuthor = document.querySelector("#inputBookAuthor");
       const buttonSave = document.querySelector("#buttonSave");
       const buttonUpdate = document.querySelector("#buttonUpdate");

       buttonSave.addEventListener("click", function () {
           const book = {
               id: Number.parseInt(inputBookId.value),
               title: inputBookTitle.value,
               author: inputBookAuthor.value
           };
           insertReview(restaurant)
       });

       buttonUpdate.addEventListener("click", function () {
           const book = {
               id: Number.parseInt(inputBookId.value),
               title: inputBookTitle.value,
               author: inputBookAuthor.value
           };

           getDetailResto(restaurant)
       });
       getResto();
   });
}

export default main;