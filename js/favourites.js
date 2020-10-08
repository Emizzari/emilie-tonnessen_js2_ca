import { getExistingFavs } from "./components/storage/existingFavs.js";

function createFavList (){
    const favourites = getExistingFavs();

    const productContainer = document.querySelector(".product-container");

    if (favourites.length === 0) {
        productContainer.innerHTML = "No favourites found";
    }

    favourites.forEach((favourite) => {
        productContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="${favourite.image}" alt="${favourite.name}" class="product__img">
                <h4>${favourite.name}</h4>
                <p>${favourite.price} €</p>
                <p>${favourite.description}</p>
                <i class="fa fa-heart" data-id="${favourite.id}" data-name="${favourite.name}"></i>
            </div>
        `;
    });
}

createFavList();

// Clear localStorage
document
  .querySelector(".clear-storage button")
  .addEventListener("click", handleClearBtnClick);

function handleClearBtnClick() {
    localStorage.clear();
    createFavList();
}