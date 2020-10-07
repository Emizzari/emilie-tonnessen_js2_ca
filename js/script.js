import { productsURL } from "./settings/api.js";
import { createHTML } from "./components/html/createHTML.js";
import displayMessage from "./components/messages/displayMessage.js";
import { searchProducts } from "./components/search/searchProducts.js";



async function fetchAPI() {
    try {
        const response = await fetch(productsURL);
        const json = await response.json();
        const product = json;

        createHTML(product);
        searchProducts(product);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");   
    }
}

fetchAPI();