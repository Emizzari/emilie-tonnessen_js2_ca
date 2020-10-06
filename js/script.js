import { productsURL } from "./settings/api.js";
import { createHTML } from "./components/html/createHTML.js";
import displayMessage from "./components/messages/displayMessage.js";

async function fetchAPI() {
    try {
        const response = await fetch(productsURL);
        const json = await response.json();
        const product = json;

        console.log(product);
        createHTML(product);
        // searchProducts(product);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");   
    }
}

fetchAPI();




/* function createHTML(products) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("", emptyFilter, ".product-container");
    }

    products.forEach(function (product) {
        productContainer.innerHTML += `
            <div class="product col">
                <img src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.name}" class="product__img">
                <h4>${product.name}</h4>
                <p>${product.price} €</p>
                <p>${product.description} €</p>

                <button class="btn">
                    Add to favourites
                    <i class="far fa-heart"></i>
                </button>
            </div>
        `;
    });
}  */