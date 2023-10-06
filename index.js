AOS.init();
const DataProduct = {
  icon: {
    logo: "Assets/Icon/logo.png",
    intro: "Assets/Icon/Vidio-brand.mp4",
  },

  rising: {
    mainPage: "Assets/Image/88Rising/main-page-88rising.jpg",
    hoodie88Chrome: {
      imageFront: "Assets/Image/88Rising/88Chrome-Hoodie-Front.webp",
      imageBack: "Assets/Image/88Rising/88Chrome-Hoodie-Back.webp",
      productName: "PROJECT88 #2 - PURPLE CHROME HOODIE",
      price: "$56.00",
    },
    earthdayHoodie: {
      imageFront: "Assets/Image/88Rising/earthday-hoodie-front.webp",
      imageBack: "Assets/Image/88Rising/earthday-hoodie-back.webp",
      productName: "PROJECT88 #4 - BROWN EARTH DAY HOODIE",
      price: "$56.00",
    },
    gue88Jacket: {
      imageFront: "Assets/Image/88Rising/GUE88-UNIVERSITY-GREEN-LETTERMAN-JACKET-FRONT.webp",
      imageBack: "Assets/Image/88Rising/GUE88-UNIVERSITY-GREEN-LETTERMAN-JACKET-BACK.webp",
      productName: "GUE88 UNIVERSITY GREEN LETTERMAN JACKET",
      price: "$249.00",
    },
    gue88Hoodie: {
      imageFront: "Assets/Image/88Rising/GUE88-UNIVERSITY-OFF-WHITE-HOODIE-Front.webp",
      imageBack: "Assets/Image/88Rising/GUE88-UNIVERSITY-OFF-WHITE-HOODIE-Back.webp",
      productName: "GUE88 UNIVERSITY OFF WHITE HOODIE",
      price: "$89.00",
    },
    hitcLaHoodie: {
      imageFront: "Assets/Image/88Rising/HITCLA-black-zip-hoodie-front.webp",
      imageBack: "Assets/Image/88Rising/HITCLA-black-zip-hoodie-back.webp",
      productName: "HITC LA 2023 BLACK ZIP HOODIE",
      price: "$75.00",
    },
    doubleHappinesHoodie: {
      imageFront: "Assets/Image/88Rising/HOODIE-BLUE-FRONT.webp",
      imageBack: "Assets/Image/88Rising/HOODIE-BLUE-BACK.webp",
      productName: "88RISING DOUBLE HAPPINESS FRENCH TERRY HOODIE - DUSTY BLUE",
      price: "$140.00",
    },
    Project88Jacket: {
      imageFront: "Assets/Image/88Rising/Spring-Ecomm-Coaches-Jacket-Front.webp",
      imageBack: "Assets/Image/88Rising/Spring-Ecomm-Coaches-Jacket-Back.webp",
      productName: "PROJECT88 #3 - NAVY COACH JACKET",
      price: "$90.00",
    },
    warrenHoodie: {
      imageFront: "Assets/Image/88Rising/Warren-HITC-Black-Hoodie-Front.webp",
      imageBack: "Assets/Image/88Rising/Warren-HITC-Black-Hoodie-Back.webp",
      productName: " WARREN HUE PREMIUM BLACK HOODIE",
      price: "$80.00",
    },
  },

  igloo: {
    mainPage: "Assets/Image/Igloo/main-page-igloo.jpg",

    blackTee: {
      imageFront: "Assets/Image/Igloo/black-igloo-front.jpg",
      imageBack: "Assets/Image/Igloo/black-igloo-back.jpg",
      productName: "BLACK IGLOO TEE",
      price: "$45.00",
    },
    blackHoodie: {
      imageFront: "Assets/Image/Igloo/black-igloo-hoodie-front.jpg",
      imageBack: "Assets/Image/Igloo/black-igloo-hoodie-back.jpg",
      productName: "BLACK IGLOO HOODIE",
      price: "$69.00",
    },
    cremeTee: {
      imageFront: "Assets/Image/Igloo/creme-igloo-embroidery-tee-front.jpg",
      imageBack: "Assets/Image/Igloo/creme-igloo-embroidery-tee-back.jpg",
      productName: "CREME IGLOO EMBROIDERY TEE *LIMITED EDITION",
      price: "$60.00",
    },
    cremeHoodie: {
      imageFront: "Assets/Image/Igloo/creme-igloo-hoodie-front.jpg",
      imageBack: "Assets/Image/Igloo/creme-igloo-hoodie-back.jpg",
      productName: "CREME IGLOO HOODIE",
      price: "$69.00",
    },
    iceBlueTee: {
      imageFront: "Assets/Image/Igloo/ice-blue-igloo-tee-front.jpg",
      imageBack: "Assets/Image/Igloo/ice-blue-igloo-tee-back.jpg",
      productName: "ICE BLUE IGLOO TEE",
      price: "$45.00",
    },
    iceHeartShirt: {
      imageFront: "Assets/Image/Igloo/ice-hearts-shirt-front.jpg",
      imageBack: "Assets/Image/Igloo/ice-hearts-shirt-back.jpg",
      productName: "ICE HEARTS SHIRT",
      price: "$95.00",
    },
    nycHoodie: {
      imageFront: "Assets/Image/Igloo/nyc-exclusive-green-front.jpg",
      imageBack: "Assets/Image/Igloo/nyc-exclusive-green-back.jpg",
      productName: "NYC EXCLUSIVE GREEN IGLOO HOODIE",
      price: "$69.00",
    },
    varsityJacket: {
      imageFront: "Assets/Image/Igloo/varsity-jacket-in-creme-front.jpg",
      imageBack: "Assets/Image/Igloo/varsity-jacket-in-creme-back.jpg",
      productName: "VARSITY JACKET IN CREME",
      price: "$450.00",
    },
  },

  gallery: {
    gallery88Rising1: "Assets/Image/Gallery/gallery-88rising-1.jpg",
    gallery88Rising2: "Assets/Image/Gallery/gallery-88rising-2.jpg",
    gallery88Rising3: "Assets/Image/Gallery/gallery-88rising-3.jpg",

    galleryIgloo1: "Assets/Image/Gallery/gallery-igloo-1.jpg",
    galleryIgloo2: "Assets/Image/Gallery/gallery-igloo-2.jpg",
  },
};

function showVidio() {
  const vidio = document.querySelector("#vid");
  vidio.src = DataProduct.icon.intro;
}
showVidio();

function showBrand(brandId, productId, cardNumber) {
  const image = document.querySelector(`#${cardNumber} img`);
  const productName = document.querySelector(` #${cardNumber} h5`);
  const price = document.querySelector(`#${cardNumber} p`);

  if (DataProduct.hasOwnProperty(brandId) && DataProduct[brandId].hasOwnProperty(productId)) {
    const productData = DataProduct[brandId][productId];

    image.src = productData.imageFront;
    image.addEventListener("mouseover", () => {
      image.src = productData.imageBack;
    });
    image.addEventListener("mouseout", () => {
      image.src = productData.imageFront;
    });
    productName.textContent = productData.productName;
    price.textContent = productData.price;
  }
}

showBrand("rising", "gue88Jacket", "card-one");
showBrand("rising", "warrenHoodie", "card-two");
showBrand("igloo", "varsityJacket", "card-three");
showBrand("igloo", "nycHoodie", "card-four");

function mainImage() {
  const image1 = document.querySelector(".gallery.one img");
  image1.src = DataProduct.rising.mainPage;

  const image2 = document.querySelector(".gallery.two img");
  image2.src = DataProduct.igloo.mainPage;
}
mainImage();

function slider() {
  const img = document.querySelectorAll(".slide-track img");
  img[0].src = DataProduct.gallery.gallery88Rising1;
  img[1].src = DataProduct.gallery.gallery88Rising2;
  img[2].src = DataProduct.gallery.gallery88Rising3;
  img[3].src = DataProduct.gallery.galleryIgloo1;
  img[4].src = DataProduct.gallery.galleryIgloo2;
  img[5].src = DataProduct.gallery.gallery88Rising1;
  img[6].src = DataProduct.gallery.gallery88Rising2;
  img[7].src = DataProduct.gallery.gallery88Rising3;
  img[8].src = DataProduct.gallery.galleryIgloo1;
  img[9].src = DataProduct.gallery.galleryIgloo2;
  img[10].src = DataProduct.gallery.gallery88Rising1;
  img[11].src = DataProduct.gallery.gallery88Rising2;
}
slider();
