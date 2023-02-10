class StoreItem {
  constructor(id, name, price, desc, ingredients, images, thumbnail) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.ingredients = ingredients;
    this.images = images;
    this.thumbnail = thumbnail;
  }
}
class StoreCategory {
  constructor(name, items, background) {
    this.name = name;
    this.items = items;
    this.background = background;
  }
}
class CartItem {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
}

let storeItems = [
  new StoreCategory(
    "Cupcakes",
    [
      new StoreItem(
        1,
        "Red Velvet Cupcakes",
        24.9,
        `One of BagarBasses’s oldest and best-selling desserts, our classic-style red velvet cupcake is a crimson-colored, chocolate-flavored cake topped with whipped vanilla icing.`,
        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Cider Vinegar, Vanilla Extract, Food Dye, AP Flour",
        ["images/1-1.webp", "images/1-2.webp"],
        "images/1-thumb.webp"
      ),
      new StoreItem(
        2,
        "Classic Vanilla Mini Cupcakes",
        22,
        "Our world-famous vanilla cupcakes, sized down to one (or two!) bites: light and butter vanilla cake topped with a signature swirl of vanilla buttercream.",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        ["images/2-1.webp"],
        "images/2-1.webp"
      ),
      new StoreItem(
        3,
        "Classic Chocolate Mini Cupcakes",
        22.0,
        "Small in size, huge in flavor: Our mini chocolate cupcakes are made with our light and moist cake batter and topped with vanilla or chocolate buttercream.",

        "AP Flour, Granulated Sugar, Canola oil, Cocoa Powder, Baking Powder, Baking Soda, Salt, Milk, Eggs, Vanilla Extract, Chocolate Callets 65%, Confectionary Sugar, Sprinkles",
        ["images/3-1.webp"],
        "images/3-1.webp"
      ),
      new StoreItem(
        4,
        "The Carrie Cupcakes",
        24.9,
        "Reenact our favorite SATC scene with a crush-worthy vanilla cupcake topped with pink vanilla buttercream and a daisy",

        "Cake Flour, Granulated Sugar, Butter, Baking Powder, Baking Soda, Salt, Milk, Sour Cream, Egg Whites, Vanilla Extract, Confectionary Sugar, Food Dye, Sprinkles",
        ["images/4-1.webp", "images/4-2.webp"],
        "images/4-1.webp"
      ),
      new StoreItem(
        5,
        "Confetti Cupcake Assortment",
        24.9,
        "Nothing says celebration like confetti, inside and out. Our classic vanilla cupcakes are loaded with confetti, topped with vanilla buttercream and showered with more confetti!",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Chocolate Callets 65%, Confectionary Sugar, Sprinkles, Egg Whites, Food Dye",
        ["images/5-1.webp"],
        "images/5-1.webp"
      ),
      new StoreItem(
        6,
        "Classic Chocolate Cupcakes",
        24.9,
        "An assortment of BagarBasses’s celebrated chocolate cupcakes: light-as-a-feather chocolate cake topped with vanilla or chocolate buttercream and assorted sprinkles.",

        "Granulated Sugar, AP Flour, Cocoa Powder, Baking Powder, Baking Soda, Salt, Eggs, Milk, Vanilla Extract, Canola Oil, Water, Confectionary Sugar, Milk, Sprinkles, Food Dye",
        ["images/6-1.webp"],
        "images/6-1.webp"
      ),
      new StoreItem(
        7,
        "Chocolate Lovers' Cupcake Assortment",
        58.0,
        "Love chocolate? We made a cupcake assortment just for you. Enjoy four Devil’s Food cupcakes with chocolate mocha buttercream, four Chocolate Truffle cupcakes filled with white chocolate ganache and dipped in chocolate ganache, and four Chocolate cupcakes with a creamy peanut butter buttercream and topped with chopped peanuts.",

        "Butter, All Purpose Flour, Egg, Salt, Sugar, Vanilla, Canola Oil, Milk, Coca Powder, Baking Powder, Confectioner’S Sugar, Peanut Butter, Peanuts, Heavy Cream",
        [
          "images/7-1.webp",
          "images/7-2.webp",
          "images/7-3.webp",
          "images/7-4.webp",
          "images/7-5.webp",
        ],
        "images/7-1.webp"
      ),
      new StoreItem(
        8,
        "Classic Vanilla Cupcakes",
        24.9,
        "What makes our vanilla cupcake a best-seller? An irresistibly light and buttery crumb topped with vanilla or chocolate buttercream, always in our signature swirl.",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Chocolate Callets 65%, Confectionary Sugar, Sprinkles, Egg Whites, Food Dye",
        ["images/8-1.webp", "images/8-2.webp", "images/8-3.webp"],
        "images/8-1.webp"
      ),
    ],
    ""
  ),
  new StoreCategory(
    "♥ Alla hjärtans dag ♥",
    [
      new StoreItem(
        10,
        "Heart Sugar Cookies",
        8.0,
        "Share your feelings with three heart-shaped cut-out cookies, covered in red, white, and pink sugar.",

        "Flour, Salt, Baking Soda, Butter, Sugar, Eggs, Vanilla Extract, Sanding Sugar, Food Dye",
        ["images/10-1.webp"],
        "images/10-1.webp"
      ),
      new StoreItem(
        14,
        "Little Bits of Love Mini Cupcake Assortment",
        100,
        "Share the love with our world-famous mini chocolate and vanilla cupcakes all topped with an assortment of our vanilla and chocolate buttercream and Valentine's Day decorations.",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        ["images/14-1.webp", "images/14-2.webp", "images/14-3.webp"],
        "images/14-1.webp"
      ),
      new StoreItem(
        15,
        "Valentine's Day Cake",
        55.0,
        'Our classic confetti cake turns pink for Valentine\'s Day, decorated with heart quins and inscribed with "Be Mine" on top.',

        "Sugar, Butter, Vanilla, Cake Flour, Baking Powder, Baking Soda, Salt, Milk, Sour Cream, Egg Whites, Confetti, Food Dye, Confectioner's Sugar",
        ["images/15-1.webp", "images/15-2.webp"],
        "images/15-1.webp"
      ),
      new StoreItem(
        16,
        "Rose Cupcakes",
        35.7,
        "Our classic vanilla, chocolate, and red velvet cupcakes topped with beautiful floral designs made with red, white or pink vanilla buttercream – the perfect Valentine's Day gift!",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        ["images/16-1.webp"],
        "images/16-1.webp"
      ),
    ],
    "bg-pastel-pink"
  ),
  new StoreCategory(
    "Kakor",
    [
      new StoreItem(
        9,
        "Banana Pudding Cookies",
        25.0,
        `That's right – we turned our famous Banana Pudding into a soon-to-be-famous cookie. Our Banana Pudding Cookie is a soft and sweet treat packed with white chocolate chips, vanilla wafers and our world-famous Banana Pudding mix. Enjoy 6 cookies in every pack - enough to share!`,

        "Vanilla wafers, bananas, butter, all purpose flour, egg, salt, sugar, vanilla, milk powder, baking soda, brown sugar, white chocolate chips",
        ["images/9-1.webp", "images/9-2.webp"],
        "images/9-1.webp"
      ),
      new StoreItem(
        11,
        "Red Velvet Banana Pudding Cookies",
        25.0,
        "This cookie features our soft-baked, Banana Pudding-packed cookies with a delicious twist - our famous Red Velvet cake!",

        "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        ["images/11-1.webp", "images/11-2.webp"],
        "images/11-1.webp"
      ),
      new StoreItem(
        12,
        "Chocolate Chunk Cookies",
        18.0,
        "Our soft and chewy take on the classic chocolate chip cookie—but make it chunky!",

        "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%",
        ["images/12-1.webp", "images/12-2.webp", "images/12-3.webp"],
        "images/12-1.webp"
      ),
      new StoreItem(
        13,
        "Cookie Assortment",
        45.0,
        "Fill up your cookie jar with two of our favorite classics: one dozen each of our chocolate chunk and oatmeal raisin cookies.",

        "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%, Cinnamon, Oats, Raisins",
        ["images/13-1.webp"],
        "images/13-1.webp"
      ),
    ],
    ""
  ),
  new StoreCategory(
    "Tårtor",
    [
      new StoreItem(
        17,
        "Confetti Cake",
        58.0,
        `We make our buttery, beloved vanilla cake extra festive with confetti folded into each layer, then cover the cake with buttercream and adorn it with more confetti outside.`,

        "Cake Flour, Granulated Sugar, Butter, Baking Powder, Baking Soda, Salt, Milk, Sour Cream, Egg Whites, Vanilla Extract, Confectionary Sugar, Chocolate Callets 65%, Sprinkles",
        [
          "images/17-1.webp",
          "images/17-2.webp",
          "images/17-3.webp",
          "images/17-4.webp",
        ],
        "images/17-1.webp"
      ),
      new StoreItem(
        18,
        "Hummingbird Cake",
        55.0,
        "The unique combination of banana, pineapple, and pecans flavor this classic Southern layer cake, which has a texture similar to our extra-moist carrot cake. We finish this bestseller with cream cheese icing and a sprinkling of pecans.",

        "AP Flour, Baking Soda, Salt, Cinnamon, Bananas, Eggs, Granulated Sugar, Canola Oil, Pineapple, Vanilla Extract, Pecans, Cream Cheese, Confectionary Sugar",
        ["images/18-1.webp", "images/18-2.webp"],
        "images/18-1.webp"
      ),
      new StoreItem(
        19,
        "Chocolate Cake",
        53.0,
        "Three layers of super-rich chocolate cake and silky chocolate buttercream means pure, indulgent bliss.",

        "AP Flour, Granulated Sugar, Canola oil, Cocoa Powder, Baking Powder, Baking Soda, Salt, Milk, Eggs, Vanilla Extract, Confectionary Sugar, Food Dye, Sprinkles",
        ["images/19-1.webp", "images/19-2.webp", "images/19-3.webp"],
        "images/19-1.webp"
      ),
      new StoreItem(
        20,
        "Carrot Cake",
        45.0,
        "We load our super-moist carrot cake with freshly grated carrots, juicy pineapple, shredded coconut, raisins, and walnuts, then top it with tangy cream cheese frosting and more chopped nuts.",

        "AP Flour, Cinnamon, Baking Powder, Baking Soda, Salt, Eggs, Granulated Sugar, Canola Oil, Carrots, Pineapple, Raisins, Coconut Sweetened, Walnuts, Cream Cheese",
        ["images/20-1.webp", "images/20-2.webp", "images/20-3.webp"],
        "images/20-1.webp"
      ),
    ],
    "bg-pastel-yellow"
  ),
  new StoreCategory(
    "Cheesecake",
    [
      new StoreItem(
        21,
        "Caramel Pecan Cheesecake",
        8.25,
        `How do you improve upon our classic vanilla bean cheesecake? Top it with buttery caramel and toasted pecans!`,

        "Cream Cheese, Granulated Sugar, Vanilla Extract, Eggs, Lemon Juice, Heavy Cream, Milk, Graham Cracker, Butter, Caramel, Pecans",
        ["images/21-1.webp"],
        "images/21-1.webp"
      ),
      new StoreItem(
        22,
        "Vanilla Bean Cheesecake",
        8.25,
        "Flavored with top-shelf vanilla beans atop a graham cracker crust, this rich cheesecake is a classic for a deliciously good reason.",

        "Cream Cheese, Granulated Sugar, Vanilla Extract, Eggs, Lemon Juice, Heavy Cream, Milk, Graham Cracker, Butter",
        ["images/22-1.webp"],
        "images/22-1.webp"
      ),
      new StoreItem(
        23,
        "Key Lime Cheesecake",
        8.25,
        "Taste the sweetness of summer all year long with our key lime cheesecake, flavored with fresh key lime juice and finished with a graham cracker crust and a dollop of whipped cream.",

        "Cream Cheese, Granulated Sugar, Vanilla Extract, Eggs, Lemon Juice, Heavy Cream, Graham Cracker, Butter, Salt, Key Lime Juice",
        ["images/23-1.webp"],
        "images/23-1.webp"
      ),
      new StoreItem(
        24,
        "Blueberry Cheesecake",
        8.25,
        "Juicy blueberries top our timeless vanilla bean-infused cheesecake, finished with a graham cracker crust.",

        "Cream Cheese, Granulated Sugar, Vanilla Extract, Eggs, Lemon Juice, Heavy Cream, Milk, Graham Cracker, Butter, Blueberries, Lemon Zest, Cornstarch, Water, Brown Sugar",
        ["images/24-1.webp"],
        "images/24-1.webp"
      ),
    ],
    ""
  ),
];

let cart = JSON.parse(localStorage.getItem("cart-items")) || [];

document.addEventListener("visibilitychange", function (ev) {
  if (document.visibilityState === "visible" && document.body.id === "cart") {
    generateCart();
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
      break;
    case "cart":
      generateCart();
      break;
    case "recipes":
      initRecipes();
      break;
    default:
  }
  updateTotalCartItems();
}

function generateStore() {
  let storeContainer = document.querySelector(".store-container");
  let modals = document.querySelector(".modals-container");

  const storeCategoryTemplate = document.querySelector(
    "template#store-category-template"
  );
  const storeItemTemplate = document.querySelector(
    "template#store-item-template"
  );
  const modalTemplate = document.querySelector(
    "template#store-item-modal-template"
  );

  let generatedModals = "";

  for (let i = 0; i < storeItems.length; i++) {
    const category = storeItems[i];
    let categoryContainer = storeCategoryTemplate.content.cloneNode(true);
    categoryContainer.querySelector(".category-title").textContent =
      category.name;

    if (category.background !== "") {
      categoryContainer
        .querySelector(".category-container")
        .classList.add(category.background);
    }

    for (const item of category.items) {
      const storeItem = storeItemTemplate.content.cloneNode(true);
      const storeItemModal = modalTemplate.content.cloneNode(true);
      //Store
      storeItem
        .querySelector(".store-item")
        .classList.add(`store-item-${item.id}`);
      storeItem.querySelector(".store-item-title").innerText = item.name;
      storeItem.querySelector(".store-item-desc").innerText = item.desc;
      storeItem.querySelector(".store-item-image").src = item.thumbnail;

      categoryContainer.querySelector(".store-items").append(storeItem);

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
      storeItemModal.querySelector(
        ".store-item-price"
      ).textContent = `${item.price.toFixed(2)} kr`;
      storeItemModal.querySelector(".store-item-ingredients").innerText =
        item.ingredients;

      storeItemModal
        .querySelector(".store-item-quantity-input")
        .classList.add(`quantity-input-${item.id}`);
      storeItemModal
        .querySelector(".store-item-quantity-input")
        .addEventListener("change", quantityChanged);

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

        carouselImageImg.setAttribute("src", item.images[i]);
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
      categoryContainer.querySelector(`.store-item-${item.id}`).onclick =
        () => {
          const itemModal = new bootstrap.Modal(
            document.getElementById(`modal-${item.id}`)
          );
          itemModal.show();
          console.log("HEJ");
        };
    }
    storeContainer.append(categoryContainer);
  }
  document.querySelector(".footer-container").classList.remove("d-none");
}
function generateCart() {
  loadCart();

  const cartElement = document.querySelector(".shopping-cart-items");
  removeAllChildNodes(cartElement);

  const template = document.querySelector("template#cart-item-template");
  let total = 0;

  if (cart.length !== 0) {
    for (const cartItem of cart) {
      const itemElement = template.content.cloneNode(true);
      let itemInfo = getStoreItem(cartItem.id);

      itemElement.querySelector("tr").id = `cart-item-${cartItem.id}`;
      itemElement
        .querySelector("tr")
        .setAttribute("store-item-id", cartItem.id);
      itemElement.querySelector(".cart-item-image").src = itemInfo.thumbnail;
      itemElement.querySelector(".cart-item-title").innerText = itemInfo.name;
      itemElement.querySelector(
        ".cart-item-price"
      ).innerText = `${itemInfo.price.toFixed(2)} kr`;
      itemElement.querySelector(".cart-item-quantity-input").value =
        cartItem.amount;
      itemElement
        .querySelector(".cart-item-quantity-input")
        .addEventListener("change", quantityChanged);
      itemElement.querySelector(".delete-cart-item").onclick = () => {
        removeCartItem(cartItem.id);
      };

      cartElement.append(itemElement);

      total += cartItem.amount * itemInfo.price;
    }
  } else {
    cartElement.innerHTML = "<tr><td>Din kundvagn är tom<td></tr>"; //TODO
  }

  if (total === 0) {
    document.querySelector(".checkout-button").setAttribute("disabled", "");
  }

  document.querySelector(".checkout-button").onclick = checkout;
  document.querySelector(".cart-total-price").innerText =
    total.toFixed(2) + " kr";

  //updateCartTotal();
}
function initRecipes() {
  document.querySelector(".search-button").onclick = searchRecipes;
}
async function searchRecipes() {
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
    console.log("För kort sökord");
  }
}
function addRecipe(id, title, image) {
  const template = document
    .querySelector("template#recipe-template")
    .content.cloneNode(true);
  const recipesDiv = document.querySelector(".recipes");

  template.querySelector(".recipe-item").onclick = () => {
    showRecipe(id);
  };
  template.querySelector(".recipe-item-image").src = image;
  template.querySelector(".recipe-item-title").textContent = title;
  recipesDiv.append(template);
}
async function showRecipe(id) {
  const url = new URL(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=a4dd2ff7b76f417da04827b30d8f360e&includeNutrition=false`
  );

  const response = await fetch(url);

  if (response.status === 200) {
    const jsonResponse = await response.json();
    const modal = document.querySelector("#recipe-modal");
    const ingredients = document.querySelector(".ingredient-list");
    const instructions = document.querySelector(".instruction-list");
    removeAllChildNodes(ingredients);
    removeAllChildNodes(instructions);
    modal.querySelector(".recipe-title").textContent = jsonResponse.title;
    modal.querySelector(".recipe-image").src = jsonResponse.image;

    for (const ingredient of jsonResponse.extendedIngredients) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = ingredient.original;
      ingredients.append(listItem);
    }
    for (const step of jsonResponse.analyzedInstructions[0].steps) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = step.step;
      instructions.append(listItem);
    }
  }
  const modal = new bootstrap.Modal(document.getElementById("recipe-modal"));
  modal.show();
}

function checkout() {
  cart = [];

  saveCart();
  generateCart();
  updateTotalCartItems();

  document.querySelector(".cart-container").classList.add("d-none");
  document.querySelector(".checkout-container").classList.remove("d-none");
}

function removeCartItem(id) {
  const itemElement = document.querySelector(`tr#cart-item-${id}`);
  itemElement.remove();

  cart = cart.filter((item) => item.id !== id);

  saveCart();
  //updateCartTotal();
  updateTotalCartItems();
  generateCart();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  if (document.body.id === "cart") {
    const itemId = input.closest("tr").getAttribute("store-item-id");
    let cartItem = cart.find((x) => x.id == itemId);
    cartItem.amount = parseInt(input.value);
    saveCart();
    updateTotalCartItems();
    generateCart();
  }
}

function addItemToCart(id) {
  loadCart();
  let search = cart.find((x) => x.id === id);
  let amount = parseInt(document.querySelector(`.quantity-input-${id}`).value);

  if (search === undefined) {
    cart.push(new CartItem(id, amount));
  } else {
    search.amount += amount;
  }

  document.querySelector(`.quantity-input-${id}`).value = 1;
  saveCart();
  updateTotalCartItems();
}

function updateTotalCartItems() {
  let total = 0;
  for (const cartItem of cart) {
    total += cartItem.amount;
  }
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
