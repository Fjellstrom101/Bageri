let cart = JSON.parse(localStorage.getItem("cart-items")) || [];

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
  }
}

function generateStore() {
  let store = document.getElementsByClassName("store-items")[0];
  let modals = document.getElementsByClassName("modals-container")[0];

  let generatedHTML = "";
  let generatedModals = "";

  for (const category of storeItems) {
    for (const item of category.items) {
      generatedHTML += `<div class="col">
      <div class="card border-0">
        <img class="card-img-top rounded-4" width="100%"  aria-label="Product Image" src="${item.thumbnail}" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-title">${item.name}</h6>
          <p class="card-text">${item.desc}</p>
          <div class="d-flex justify-content-end align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modal-${item.id}">Mer info</button>
              <button type="button" class="btn btn-primary btn-sm ">Lägg i varukorg</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

      generatedModals += `<div
      class="modal fade"
      id="modal-${item.id}"
      tabindex="-1"
      aria-labelledby="modal-${item.id}-label"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5>${item.name}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div id="item-${item.id}-carousel" class="carousel slide rounded-top">
              <div class="carousel-indicators">
              <button
                  type="button"
                  data-bs-target="#item-${item.id}-carouselIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>`;

      for (let i = 1; i < item.images.length; i++) {
        generatedModals += `<button
                type="button"
                data-bs-target="#item-${item.id}-carouselIndicators"
                data-bs-slide-to="${i}"
                aria-label="Slide ${i + 1}"
              ></button>`;
      }

      generatedModals += `</div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${item.images[0].image}" class="d-block w-100" alt="" />
                </div>
                `;

      for (let i = 1; i < item.images.length; i++) {
        generatedModals += `<div class="carousel-item">
        <img src="${item.images[i].image}" class="d-block w-100" alt="" />
      </div>`;
      }
      generatedModals += `
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#item-${item.id}-carousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#item-${item.id}-carousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <h5 class="m-3">Beskrivning:</h5>
            <p class="m-3 mt-0">
            ${item.desc}
            </p>
            <h5 class="m-3">Ingredienser:</h5>
            <p class="m-3 mt-0">
            ${item.ingredients}
            </p>
          </div>

          <div class="modal-footer">
            <input
              type="number"
              class="form-control text-center store-item-quantity-input quantity-input-${item.id} border-1"
              value="1"
              aria-label="Item amount"
            />
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick="addItemToCart(${item.id})">
              Lägg till i varukorg
            </button>
          </div>
        </div>
      </div>
    </div>`;
    }
  }

  store.innerHTML = generatedHTML;
  modals.innerHTML = generatedModals;
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
  let cartElement = document.getElementsByClassName("shopping-cart-items")[0];
  let generatedCart = "<div></div>";
  if (cart.length !== 0) {
    for (const cartItem of cart) {
      let item =
        storeItems
          .find((c) =>
            c.items.some((i) => {
              return i.id === cartItem.id;
            })
          )
          .items.find((i) => i.id === cartItem.id) || [];

      generatedCart += `<tr class="shopping-cart-item">
      <td data-th="Product">
        <div class="row">
          <div class="col-md-3 text-start">
            <img
              src="${item.thumbnail}"
              alt=""
              class="img-fluid d-none d-md-block rounded mb-2 shadow"
            />
          </div>
          <div class="col-md-9 text-start mt-sm-2">
            <h4>${item.name}</h4>
            <p class="font-weight-light">Brand &amp; Name</p>
          </div>
        </div>
      </td>
      <td data-th="Price" class="cart-item-price">${item.price}</td>
      <td data-th="Quantity">
        <input
          type="number"
          class="form-control form-control-lg text-center cart-item-quantity-input"
          value="${cartItem.amount}"
          aria-label="Item amount"
        />
      </td>
      <td class="actions" data-th="">
        <div class="text-end">
          <button
            class="btn btn-white border-secondary bg-white btn-md mb-2"
            aria-label="Update cart item"
          >
            <i class="fas fa-sync"></i>
          </button>
          <button
            class="btn btn-white border-secondary bg-white btn-md mb-2 delete-cart-item"
            aria-label="Delete cart item"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>`;
    }
  } else {
    generatedCart = "<tr><td>Din kundvagn är tom!<td></tr>";
  }
  cartElement.innerHTML = generatedCart;
  updateCartTotal();
}

function addCartListeners() {
  let removeCartItemButtons =
    document.getElementsByClassName("delete-cart-item");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

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

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.closest("tr").remove();

  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(id) {
  let search = cart.find((x) => x.id === id);
  let amount = parseInt(
    document.getElementsByClassName(`quantity-input-${id}`)[0].value
  );

  if (search === undefined) {
    cart.push({
      id: id,
      amount: amount,
    });
  } else {
    search.amount += amount;
  }

  document.getElementsByClassName(`quantity-input-${id}`)[0].value = 1;
  localStorage.setItem("cart-items", JSON.stringify(cart));
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
}
