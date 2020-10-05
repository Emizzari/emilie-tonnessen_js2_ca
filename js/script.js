import displayMessage from "./components/displayMessage.js";

const baseURL = 'http://localhost:1337/';
const productsURL = baseURL + "products/";

async function fetchAPI() {
    try {
        const response = await fetch(productsURL);
        const json = await response.json();
        const products = json;

        console.log(products);
        createProductList(products);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");   
    }
}

fetchAPI();

function createProductList(products) {
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
}