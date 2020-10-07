// import { getExistingFavs } from "./components/storage/existingFavs.js";
import { productsURL } from "./settings/api.js";
// import { createHTML } from "./components/html/createHTML.js";
import displayMessage from "./components/messages/displayMessage.js";
import { searchProducts } from "./components/search/searchProducts.js";



async function fetchAPI() {
    try {
        const response = await fetch(productsURL);
        const json = await response.json();
        const product = json;

        console.log(product);
        createHTML(product);
        searchProducts(product);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");   
    }
}

fetchAPI();

// Temporarly solution:
function createHTML(products) {
  const productContainer = document.querySelector(".product-container");

  productContainer.innerHTML = "";

  if (products.length === 0) {
    displayMessage("", emptyFilter, ".product-container");
  }

  // const favourites = getExistingFavs();

  products.forEach(function (product) {
    /* let cssClass = "far";

    const doesObjectExist = favourites.find(function (fav) {
      console.log(fav);

      return parseInt(fav.id) === product.id;
    });

    if (doesObjectExist) {
      cssClass = "fa";
    } */

    productContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.name}" class="product__img">
                <h4>${product.name}</h4>
                <p>${product.price} €</p>
                <p>${product.description} €</p>
                
                <i class="far fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                
            </div>
        `;
  });
}


// Favourites:
const favButtons = document.querySelectorAll(".product i");

console.log(favButtons);

/*favButtons.forEach((button) => {
    button.addEventListener("click", handleFavClick);
});

 function handleFavClick() {
    console.log(event);

    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, name: name };
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
} */