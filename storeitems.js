let storeItems = [
  {
    name: "Cupcakes",
    items: [
      {
        id: 1,
        name: "Red Velvet Cupcakes",
        price: 24.9,
        desc: `One of Magnolia Bakery’s oldest and best-selling desserts, our classic-style red velvet cupcake is a crimson-colored, chocolate-flavored cake topped with whipped vanilla icing.`,
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Cider Vinegar, Vanilla Extract, Food Dye, AP Flour",
        images: [{ image: "images/1-1.webp" }, { image: "images/1-2.webp" }],
        thumbnail: "images/1-1.webp",
      },
      {
        id: 2,
        name: "Little Bits of Love Mini Cupcake Assortment",
        price: 100,
        desc: "Share the love with our world-famous mini chocolate and vanilla cupcakes all topped with an assortment of our vanilla and chocolate buttercream and Valentine's Day decorations.",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        images: [
          { image: "images/2-1.webp" },
          { image: "images/2-2.webp" },
          { image: "images/2-3.webp" },
        ],
        thumbnail: "images/2-1.webp",
      },
      {
        id: 3,
        name: "Rose Cupcakes",
        price: 35.7,
        desc: "Our classic vanilla, chocolate, and red velvet cupcakes topped with beautiful floral designs made with red, white or pink vanilla buttercream – the perfect Valentine's Day gift!",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        images: [{ image: "images/3-1.webp" }],
        thumbnail: "images/3-1.webp",
      },
      {
        id: 4,
        name: "The Carrie Cupcakes",
        price: 24.9,
        desc: "Reenact our favorite SATC scene with a crush-worthy vanilla cupcake topped with pink vanilla buttercream and a daisy",
        ingredients:
          "Cake Flour, Granulated Sugar, Butter, Baking Powder, Baking Soda, Salt, Milk, Sour Cream, Egg Whites, Vanilla Extract, Confectionary Sugar, Food Dye, Sprinkles",
        images: [{ image: "images/4-1.webp" }, { image: "images/4-2.webp" }],
        thumbnail: "images/4-1.webp",
      },
      {
        id: 5,
        name: "Confetti Cupcake Assortment",
        price: 24.9,
        desc: "Nothing says celebration like confetti, inside and out. Our classic vanilla cupcakes are loaded with confetti, topped with vanilla buttercream and showered with more confetti!",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Chocolate Callets 65%, Confectionary Sugar, Sprinkles, Egg Whites, Food Dye",
        images: [{ image: "images/5-1.webp" }],
        thumbnail: "images/5-1.webp",
      },
      {
        id: 6,
        name: "Classic Chocolate Cupcakes",
        price: 24.9,
        desc: "An assortment of Magnolia Bakery’s celebrated chocolate cupcakes: light-as-a-feather chocolate cake topped with vanilla or chocolate buttercream and assorted sprinkles.",
        ingredients:
          "Granulated Sugar, AP Flour, Cocoa Powder, Baking Powder, Baking Soda, Salt, Eggs, Milk, Vanilla Extract, Canola Oil, Water, Confectionary Sugar, Milk, Sprinkles, Food Dye",
        images: [{ image: "images/6-1.webp" }],
        thumbnail: "images/6-1.webp",
      },
      {
        id: 7,
        name: "Chocolate Lovers' Cupcake Assortment",
        price: 58.0,
        desc: "Love chocolate? We made a cupcake assortment just for you. Enjoy four Devil’s Food cupcakes with chocolate mocha buttercream, four Chocolate Truffle cupcakes filled with white chocolate ganache and dipped in chocolate ganache, and four Chocolate cupcakes with a creamy peanut butter buttercream and topped with chopped peanuts.",
        ingredients:
          "Butter, All Purpose Flour, Egg, Salt, Sugar, Vanilla, Canola Oil, Milk, Coca Powder, Baking Powder, Confectioner’S Sugar, Peanut Butter, Peanuts, Heavy Cream",
        images: [
          { image: "images/7-1.webp" },
          { image: "images/7-2.webp" },
          { image: "images/7-3.webp" },
          { image: "images/7-4.webp" },
          { image: "images/7-5.webp" },
        ],
        thumbnail: "images/7-1.webp",
      },
      {
        id: 8,
        name: "Classic Vanilla Cupcakes",
        price: 24.9,
        desc: "What makes our vanilla cupcake a best-seller? An irresistibly light and buttery crumb topped with vanilla or chocolate buttercream, always in our signature swirl.",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Chocolate Callets 65%, Confectionary Sugar, Sprinkles, Egg Whites, Food Dye",
        images: [
          { image: "images/8-1.webp" },
          { image: "images/8-2.webp" },
          { image: "images/8-3.webp" },
        ],
        thumbnail: "images/8-1.webp",
      },
    ],
  },
  {
    name: "Kakor",
    items: [
      {
        id: 9,
        name: "Banana Pudding Cookies",
        price: 25.0,
        desc: `That's right – we turned our famous Banana Pudding into a soon-to-be-famous cookie. Our Banana Pudding Cookie is a soft and sweet treat packed with white chocolate chips, vanilla wafers and our world-famous Banana Pudding mix. Enjoy 6 cookies in every pack - enough to share!`,
        ingredients:
          "Vanilla wafers, bananas, butter, all purpose flour, egg, salt, sugar, vanilla, milk powder, baking soda, brown sugar, white chocolate chips",
        images: [{ image: "images/9-1.webp" }, { image: "images/9-2.webp" }],
        thumbnail: "images/9-1.webp",
      },
      {
        id: 10,
        name: "Heart Sugar Cookies",
        price: 8.0,
        desc: "Share your feelings with three heart-shaped cut-out cookies, covered in red, white, and pink sugar.",
        ingredients:
          "Flour, Salt, Baking Soda, Butter, Sugar, Eggs, Vanilla Extract, Sanding Sugar, Food Dye",
        images: [{ image: "images/10-1.webp" }],
        thumbnail: "images/10-1.webp",
      },
      {
        id: 11,
        name: "Red Velvet Banana Pudding Cookies",
        price: 25.0,
        desc: "This cookie features our soft-baked, Banana Pudding-packed cookies with a delicious twist - our famous Red Velvet cake!",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        images: [{ image: "images/11-1.webp" }, { image: "images/11-2.webp" }],
        thumbnail: "images/11-1.webp",
      },
      {
        id: 12,
        name: "Chocolate Chunk Cookies",
        price: 18.0,
        desc: "Our soft and chewy take on the classic chocolate chip cookie—but make it chunky!",
        ingredients:
          "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%",
        images: [
          { image: "images/12-1.webp" },
          { image: "images/12-2.webp" },
          { image: "images/12-3.webp" },
        ],
        thumbnail: "images/12-1.webp",
      },
      {
        id: 13,
        name: "Cookie Assortment",
        price: 45.0,
        desc: "Fill up your cookie jar with two of our favorite classics: one dozen each of our chocolate chunk and oatmeal raisin cookies.",
        ingredients:
          "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%, Cinnamon, Oats, Raisins",
        images: [{ image: "images/13-1.webp" }],
        thumbnail: "images/13-1.webp",
      },
    ],
  },
  {
    name: "Kakor",
    items: [
      {
        id: 9,
        name: "Banana Pudding Cookies",
        price: 25.0,
        desc: `That's right – we turned our famous Banana Pudding into a soon-to-be-famous cookie. Our Banana Pudding Cookie is a soft and sweet treat packed with white chocolate chips, vanilla wafers and our world-famous Banana Pudding mix. Enjoy 6 cookies in every pack - enough to share!`,
        ingredients:
          "Vanilla wafers, bananas, butter, all purpose flour, egg, salt, sugar, vanilla, milk powder, baking soda, brown sugar, white chocolate chips",
        images: [{ image: "images/9-1.webp" }, { image: "images/9-2.webp" }],
        thumbnail: "images/9-1.webp",
      },
      {
        id: 10,
        name: "Heart Sugar Cookies",
        price: 8.0,
        desc: "Share your feelings with three heart-shaped cut-out cookies, covered in red, white, and pink sugar.",
        ingredients:
          "Flour, Salt, Baking Soda, Butter, Sugar, Eggs, Vanilla Extract, Sanding Sugar, Food Dye",
        images: [{ image: "images/10-1.webp" }],
        thumbnail: "images/10-1.webp",
      },
      {
        id: 11,
        name: "Red Velvet Banana Pudding Cookies",
        price: 25.0,
        desc: "This cookie features our soft-baked, Banana Pudding-packed cookies with a delicious twist - our famous Red Velvet cake!",
        ingredients:
          "Granulated Sugar, Cocoa Powder, Cake Flour, Baking Soda, Salt, Butter, Eggs, Milk, Sour Cream, Vanilla Extract, Food Dye, AP Flour, Canola Oil, Cocoa Powder, Baking Powder, Confectionary Sugar, Sprinkles, Egg Whites",
        images: [{ image: "images/11-1.webp" }, { image: "images/11-2.webp" }],
        thumbnail: "images/11-1.webp",
      },
      {
        id: 12,
        name: "Chocolate Chunk Cookies",
        price: 18.0,
        desc: "Our soft and chewy take on the classic chocolate chip cookie—but make it chunky!",
        ingredients:
          "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%",
        images: [
          { image: "images/12-1.webp" },
          { image: "images/12-2.webp" },
          { image: "images/12-3.webp" },
        ],
        thumbnail: "images/12-1.webp",
      },
      {
        id: 13,
        name: "Cookie Assortment",
        price: 45.0,
        desc: "Fill up your cookie jar with two of our favorite classics: one dozen each of our chocolate chunk and oatmeal raisin cookies.",
        ingredients:
          "AP Flour, Baking Soda, Salt, Butter, Granulated Sugar, Brown Sugar, Vanilla Extract, Eggs, Chocolate Callets 65%, Cinnamon, Oats, Raisins",
        images: [{ image: "images/13-1.webp" }],
        thumbnail: "images/13-1.webp",
      },
    ],
  },
];
