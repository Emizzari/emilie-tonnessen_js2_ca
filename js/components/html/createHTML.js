import displayMessage from "../messages/displayMessage.js";
import { emptyFilter } from "../messages/message.js";
import { getExistingFavs } from "../storage/existingFavs.js";

export function createHTML(products) {
    const productContainer = document.querySelector(".product-container");

    productContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("", emptyFilter, ".product-container");
    }

    const favourites = getExistingFavs();

    products.forEach(function (product) {
        let cssClass = "far";

        const doesObjectExist = favourites.find(function (fav) {
            return parseInt(fav.id) === product.id;
        });

        if (doesObjectExist) {
            cssClass = "fa";
        }

        productContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="http://localhost:1337${product.image.formats.medium.url}" alt="${product.name}" class="product__img">
                <h4>${product.name}</h4>
                <p>${product.price} €</p>
                <p>${product.description}</p>
                <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}" data-description="${product.description}" data-image="http://localhost:1337${product.image.formats.medium.url}" data-price="${product.price}"></i>
            </div>
        `;
    });

    // Favourites:
    const favButtons = document.querySelectorAll(".product i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleFavClick);
    });

    function handleFavClick() {
        this.classList.toggle("fa");
        this.classList.toggle("far");

        const id = this.dataset.id;
        const name = this.dataset.name;
        const price = this.dataset.price;
        const image = this.dataset.image;
        const description = this.dataset.description;

        const currentFavs = getExistingFavs();

        const productExists = currentFavs.find(function (fav) {
            return fav.id === id;
        });

        if (productExists === undefined) {
            const product = {
                id: id,
                name: name,
                price: price,
                image: image,
                description: description
            };

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
}