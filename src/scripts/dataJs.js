import {restaurants} from '../DATA.json';

function restoTemplate(rt) {
    return `
        <article class="post-item">
            <img class="post-item__thumbnail" src="${rt.pictureId}" alt=" ">
            
            <div class="post-item__content">
            <div class="rating">
                <input type="radio" name="star" id="star1"><label for="star1"></label>
                <input type="radio" name="star" id="star2"><label for="star2"></label>
                <input type="radio" name="star" id="star3"><label for="star3"></label>
                <input type="radio" name="star" id="star4"><label for="star4"></label>
                <input type="radio" name="star" id="star5"><label for="star5"></label>
            </div>        

            <span class="number-rating">${rt.rating}</span>

                <h1 class="post-item__title"><a id="ha" href="#">&#128609; ${rt.name} &#128611;</a></h1>
                <p class="post-item__date">
                  <a href="#" class="post-item__date__author">${rt.city}</a>
                </p>
                <p class="post-item__description">${rt.description}</p>
            </div>
        </article>
    `
}

document.getElementById("resto").innerHTML = ` 
${restaurants.map(restoTemplate).join("")}
<div>
<p class="jml"> Restory: ${restaurants.length}</p>
</div>`

// data.restaurants.map((restaurant) => {
//     console.log(restaurant);
// })
