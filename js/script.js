import { getExistingFavs } from "./components/storage/existingFavs.js";
import { productsURL } from "./settings/api.js";
import { createHTML } from "./components/html/createHTML.js";
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


// Favourites:
const favButtons = document.querySelectorAll(".heart-icon i");

favButtons.forEach((button) => {
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
}