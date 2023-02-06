let cart = JSON.parse(localStorage.getItem("cart-items")) || [];

document.addEventListener("visibilitychange", function (ev) {
  if (document.visibilityState === "visible" && document.body.id === "cart") {
    generateCart();
    console.log("Laddar");
  }
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  switch (document.body.id) {
    case "store":
      generateStore();
      addStoreListeners();
      break;
    case "cart":
      generateCart();
      addCartListeners();
      break;
    case "recipes":
      initRecipes();
      break;
    default:
  }
  updateTotalCartItems();
}

function generateStore() {
  let store = document.querySelector(".store-items");
  removeAllChildNodes(store);
  let modals = document.querySelector(".modals-container");

  const storeItemTemplate = document.querySelector(
    "template#store-item-template"
  );
  const modalTemplate = document.querySelector(
    "template#store-item-modal-template"
  );

  let generatedModals = "";

  for (const category of storeItems) {
    for (const item of category.items) {
      const storeItem = storeItemTemplate.content.cloneNode(true);
      const storeItemModal = modalTemplate.content.cloneNode(true);
      //Store
      storeItem.querySelector(".store-item-title").innerText = item.name;
      storeItem.querySelector(".store-item-desc").innerText = item.desc;
      storeItem.querySelector(".store-item-image").src = item.thumbnail;
      storeItem
        .querySelector(".store-item-modal-button")
        .setAttribute("data-bs-target", `#modal-${item.id}`);
      storeItem.querySelector(".shop-item-add-to-cart").onclick = () => {
        addItemToCart(item.id);
      };

      store.append(storeItem);

      //Modal
      storeItemModal.querySelector(".store-item-modal").id = `modal-${item.id}`;
      storeItemModal
        .querySelector(".store-item-modal")
        .setAttribute("aria-labelledby", `modal-${item.id}-label`);
      storeItemModal.querySelector(
        ".store-item-title"
      ).id = `modal-${item.id}-label`;

      storeItemModal.querySelector(".store-item-title").innerText = item.name;
      storeItemModal.querySelector(".store-item-desc").innerText = item.desc;
      storeItemModal.querySelector(".store-item-ingredients").innerText =
        item.ingredients;

      storeItemModal
        .querySelector(".store-item-quantity-input")
        .classList.add(`quantity-input-${item.id}`);
      storeItemModal.querySelector(".shop-item-add-to-cart").onclick = () => {
        addItemToCart(item.id);
      };
      storeItemModal.querySelector(".shop-item-close").onclick = () => {
        document.querySelector(`.quantity-input-${item.id}`).value = 1;
      };

      const imageCarousel = storeItemModal.querySelector(".carousel");
      imageCarousel.id = `item-${item.id}-carousel`;
      imageCarousel
        .querySelector(".carousel-control-prev")
        .setAttribute("data-bs-target", `#item-${item.id}-carousel`);

      imageCarousel
        .querySelector(".carousel-control-next")
        .setAttribute("data-bs-target", `#item-${item.id}-carousel`);

      for (let i = 0; i < item.images.length; i++) {
        const carouselIndicator = document.createElement("button");
        carouselIndicator.setAttribute("type", "button");
        carouselIndicator.setAttribute(
          "data-bs-target",
          `#item-${item.id}-carouselIndicators`
        );
        carouselIndicator.setAttribute("data-bs-slide-to", `${i}`);
        carouselIndicator.setAttribute("aria-label", `Slide ${i + 1}`);

        const carouselImageDiv = document.createElement("div");
        carouselImageDiv.classList.add("carousel-item");
        const carouselImageImg = document.createElement("img");
        carouselImageDiv.append(carouselImageImg);

        carouselImageImg.setAttribute("src", item.images[i].image);
        carouselImageImg.classList.add("d-block", "w-100");

        if (i == 0) {
          carouselIndicator.setAttribute("class", "active");
          carouselIndicator.setAttribute("aria-current", "true");

          carouselImageDiv.classList.add("active");
        }

        imageCarousel
          .querySelector(".carousel-indicators")
          .append(carouselIndicator);

        imageCarousel.querySelector(".carousel-inner").append(carouselImageDiv);
      }
      modals.append(storeItemModal);
    }
  }
}
function addStoreListeners() {
  let addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  let quantityInputs = document.getElementsByClassName(
    "store-item-quantity-input"
  );
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}
function generateCart() {
  loadCart();

  const cartElement = document.querySelector(".shopping-cart-items");
  removeAllChildNodes(cartElement);

  const template = document.querySelector("template#cart-item-template");

  if (cart.length !== 0) {
    for (const cartItem of cart) {
      const itemElement = template.content.cloneNode(true);
      let itemInfo = getStoreItem(cartItem.id);

      itemElement.querySelector("tr").id = `cart-item-${cartItem.id}`;
      itemElement.querySelector(".cart-item-image").src = itemInfo.thumbnail;
      itemElement.querySelector(".cart-item-title").innerText = itemInfo.name;
      itemElement.querySelector(".cart-item-price").innerText = itemInfo.price;
      itemElement.querySelector(".cart-item-quantity-input").value =
        cartItem.amount;
      itemElement.querySelector(".delete-cart-item").onclick = () => {
        removeCartItem(cartItem.id);
      };

      cartElement.append(itemElement);
    }
  } else {
    cartElement.innerHTML = "<tr><td>Din kundvagn är tom!<td></tr>"; //TODO
  }

  updateCartTotal();
}
function initRecipes() {
  document.querySelector(".search-button").onclick = fetchRecipes;
}
async function fetchRecipes() {
  const searchBox = document.querySelector(".search-box");
  const searchString = searchBox.value;

  if (searchString.length > 3) {
    const apiKey = "a4dd2ff7b76f417da04827b30d8f360e";
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    let recipes = [];
    url.searchParams.append("apiKey", apiKey);
    url.searchParams.append("type", "dessert, bread");
    url.searchParams.append("query", searchString);

    const response = await fetch(url);

    if (response.status === 200) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      removeAllChildNodes(document.querySelector(".recipes"));
      for (const result of jsonResponse.results) {
        addRecipe(result.id, result.title, result.image);
      }
    }
  } else {
    console.log("För kort");
  }
}
function addRecipe(id, title, image) {
  const template = document
    .querySelector("template#recipe-template")
    .content.cloneNode(true);
  const recipesDiv = document.querySelector(".recipes");
  template.querySelector(".recipe-item-image").src = image;
  template.querySelector(".recipe-item-title").textContent = title;
  recipesDiv.append(template);
}

function addCartListeners() {
  // let removeCartItemButtons =
  //   document.getElementsByClassName("delete-cart-item");
  // for (let i = 0; i < removeCartItemButtons.length; i++) {
  //   let button = removeCartItemButtons[i];
  //   button.addEventListener("click", removeCartItem);
  // }

  let quantityInputs = document.getElementsByClassName(
    "cart-item-quantity-input"
  );
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  document
    .getElementsByClassName("checkout-button")[0]
    .addEventListener("click", checkoutClicked);
}

function checkoutClicked() {
  alert("Thank you for your purchase");
  let cartItems = document.getElementsByClassName("shopping-cart-items")[0];

  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  updateCartTotal();
}

function removeCartItem(id) {
  const itemElement = document.querySelector(`tr#cart-item-${id}`);
  itemElement.remove();

  cart = cart.filter((item) => item.id !== id);

  saveCart();
  updateCartTotal();
  updateTotalCartItems();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  if (document.body.id === "cart") {
    updateCartTotal();
  }
}

function addItemToCart(id) {
  loadCart();
  let search = cart.find((x) => x.id === id);
  let amount = parseInt(document.querySelector(`.quantity-input-${id}`).value);

  if (search === undefined) {
    cart.push({
      id: id,
      amount: amount,
    });
  } else {
    search.amount += amount;
  }

  document.querySelector(`.quantity-input-${id}`).value = 1;
  saveCart();
  updateTotalCartItems();
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName(
    "shopping-cart-items"
  )[0];
  let cartRows = cartItemContainer.getElementsByClassName("shopping-cart-item");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-item-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText);
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total + " kr";
}
function updateTotalCartItems() {
  let total = 0;
  for (const cartItem of cart) {
    total += cartItem.amount;
  }
  console.log(total);
  document.querySelector(".cart-amount").textContent = total;
}
function getStoreItem(id) {
  return (
    storeItems
      .find((c) =>
        c.items.some((i) => {
          return i.id === id;
        })
      )
      .items.find((i) => i.id === id) || []
  );
}
function saveCart() {
  localStorage.setItem("cart-items", JSON.stringify(cart));
}
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart-items")) || [];
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
