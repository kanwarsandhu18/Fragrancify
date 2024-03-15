function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const featuredItems = [
  {
    id: 1,
    name: "YSL Y",
    price: "$50.00",
    image: require("../assets/yslY.jpeg"),
  },
  {
    id: 2,
    name: "Paco Rabbane 1 Million",
    price: "$40.00",
    image: require("../assets/pacorabbne1million.jpeg"),
  },
  {
    id: 3,
    name: "Stronger with you",
    price: "$60.00",
    image: require("../assets/strongerwithyou.jpeg"),
  },
  {
    id: 4,
    name: "Spice Bomb",
    price: "$55.00",
    image: require("../assets/spicebomb.jpeg"),
  },
  {
    id: 5,
    name: "Jean Paul Gaultier",
    price: "$60.00",
    image: require("../assets/jeanpaulgaultier.jpeg"),
  },
  {
    id: 6,
    name: "Azzaro Most Wanted",
    price: "$49.00",
    image: require("../assets/azzaromostwanted.jpeg"),
  },
];

export const NewsFeedItems = [
  require("../assets/frontpage_banner.webp"),
  require("../assets/landingimage2.webp"),
  require("../assets/landingitem3.png"),
];

export const menFragrancesLightStrength = [
  {
    id: 1,
    name: "Acqua di Gio by Giorgio Armani",
    image: "https://www.armani.com/variants/images/1647597287635012/F/w400.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 2,
    name: "Light Blue Pour Homme by Dolce & Gabbana",
    image: "https://i.ebayimg.com/images/g/H4gAAOSwiRRkOTVQ/s-l1200.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 3,
    name: "Issey Miyake L'Eau d'Issey Pour Homme",
    image:
      "https://www.thefragranceshop.ca/image/cache/catalog/products/men/issey-miyake/Issey%20Miyake%20L'Eau%20D'issey%20Pour%20Homme%20IGO-500x500.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 4,
    name: "Chanel Allure Homme Sport",
    image: "https://i.ebayimg.com/images/g/5REAAOSwF6djJtH0/s-l1200.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 5,
    name: "Dior Homme Cologne by Christian Dior",
    image:
      "https://static.beautytocare.com/media/catalog/product/d/i/dior-dior-homme-cologne-125ml.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 6,
    name: "Cool Water by Davidoff",
    image:
      "https://static.beautytocare.com/media/catalog/product/d/a/davidoff-cool-water-eau-de-toilette-200ml_1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 7,
    name: "Nautica Voyage by Nautica",
    image:
      "https://m.media-amazon.com/images/I/51dp6BGML8L._AC_UF1000,1000_QL80_.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 8,
    name: "Versace Man Eau Fraiche",
    image:
      "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwa1d4bc10/original/90_R500008-R050MLS_RNUL_22_Eau~Frache~EDT~50~ml--Versace-online-store_0_0.jpg?sw=1200&q=85&strip=true",
    price: getRandomPrice(30, 200),
  },
  {
    id: 9,
    name: "CK One by Calvin Klein",
    image:
      "https://static.beautytocare.com/media/catalog/product/c/a/calvin-klein-ck-one-eau-de-toilette-200ml.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 10,
    name: "Bvlgari Pour Homme",
    image:
      "https://www.thefragranceshop.ca/image/cache/catalog/products/men/bvlgari/bvlgari-pour-homme-extreme-edt-for-him-100ml-500x500.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 11,
    name: "Hugo Boss Bottled Sport",
    image:
      "https://d3pllp7nz3wmw5.cloudfront.net/product_images/02050534305_XL.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 12,
    name: "Lacoste L.12.12 Blanc",
    image:
      "https://www.advfragrance.com/cdn/shop/products/LACOSTE_L.12.12_BLANC_PURE_B1800_1024x1024.jpg?v=1538119906",
    price: getRandomPrice(30, 200),
  },
  {
    id: 13,
    name: "Yves Saint Laurent L'Homme",
    image:
      "https://www.sephora.com/productimages/sku/s2582484-main-zoom.jpg?imwidth=315",
    price: getRandomPrice(30, 200),
  },
  {
    id: 14,
    name: "Mont Blanc Legend",
    image:
      "https://m.media-amazon.com/images/I/51cxZObk+XL._AC_UF1000,1000_QL80_.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 15,
    name: "Azzaro Chrome",
    image:
      "https://www.canadianstarlineshipping.com/wp-content/uploads/2020/12/9330383814686.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 16,
    name: "Ralph Lauren Polo Blue",
    image: "https://m.media-amazon.com/images/I/71SJV53taYL.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 17,
    name: "Jo Malone London Wood Sage & Sea Salt",
    image: "https://www.sephora.com/productimages/sku/s2678001-av-13-zoom.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 18,
    name: "Prada Luna Rossa",
    image:
      "https://www.thefragranceshop.ca/image/cache/catalog/products/men/prada/Prada%20Luna%20Rossa%20Ocean%20EDT%20For%20Him%2050ml%20%201.6oz-500x500.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 19,
    name: "Burberry Brit for Men",
    image: "https://www.sephora.com/productimages/sku/s790295-main-zoom.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 20,
    name: "Hermes Terre d'Hermes",
    image: "https://www.sephora.com/productimages/sku/s1231869-main-zoom.jpg",
    price: getRandomPrice(30, 200),
  },
];

export const menFragrancesMediumStrength = [
  {
    id: 21,
    name: "Versace Pour Homme",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 22,
    name: "Giorgio Armani Code",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 23,
    name: "Dolce & Gabbana The One for Men",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 24,
    name: "Calvin Klein Eternity for Men",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 25,
    name: "Paco Rabanne 1 Million",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 26,
    name: "Tom Ford Noir",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 27,
    name: "Yves Saint Laurent La Nuit de L'Homme",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 28,
    name: "Bleu de Chanel",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 29,
    name: "Viktor & Rolf Spicebomb",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 30,
    name: "Hugo Boss The Scent",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 31,
    name: "Mont Blanc Explorer",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 32,
    name: "Ralph Lauren Polo Red",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 33,
    name: "Prada Luna Rossa Carbon",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 34,
    name: "Bvlgari Man in Black",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 35,
    name: "Issey Miyake Nuit d'Issey",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 36,
    name: "John Varvatos Artisan",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 37,
    name: "Azzaro Wanted",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 38,
    name: "Armani Exchange AX Blue",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 39,
    name: "Davidoff Cool Water Intense",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 40,
    name: "Dior Sauvage",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
];
export const menFragrancesStrongStrength = [
  {
    id: 41,
    name: "Amouage Interlude Man",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 42,
    name: "Xerjoff Nio",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 43,
    name: "Roja Parfums Enigma Pour Homme",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 44,
    name: "Creed Aventus",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 45,
    name: "Tom Ford Tobacco Vanille",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 46,
    name: "Dior Fahrenheit",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 47,
    name: "Yves Saint Laurent Kouros",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 48,
    name: "Nasomatto Black Afgano",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 49,
    name: "Histoires de Parfums 1828",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 50,
    name: "Clive Christian No.1 for Men",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 51,
    name: "Mancera Cedrat Boise",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 52,
    name: "By Kilian Black Phantom",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 53,
    name: "L'Artisan Parfumeur Timbuktu",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 54,
    name: "Puredistance M",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 55,
    name: "Guerlain Habit Rouge",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 56,
    name: "Bond No. 9 New York Oud",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 57,
    name: "Amouage Jubilation XXV",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 58,
    name: "Serge Lutens Chergui",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 59,
    name: "Frederic Malle Musc Ravageur",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 60,
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
];

export const womenFragrancesLightStrength = [
  {
    id: 1,
    name: "Marc Jacobs Daisy",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 2,
    name: "Chanel Chance Eau Tendre",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 3,
    name: "Dolce & Gabbana Light Blue",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 4,
    name: "Clinique Happy",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 5,
    name: "Gucci Bloom",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 6,
    name: "Jo Malone London English Pear & Freesia",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 7,
    name: "Prada Candy",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 8,
    name: "Bvlgari Omnia Crystalline",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 9,
    name: "Viktor & Rolf Flowerbomb Dew",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 10,
    name: "Issey Miyake L'Eau d'Issey Florale",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 11,
    name: "Dior J'adore Infinissime",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 12,
    name: "Marc Jacobs Decadence",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 13,
    name: "Chloe Love Story",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 14,
    name: "Tiffany & Co. Sheer",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 15,
    name: "Michael Kors Wonderlust",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 16,
    name: "Estée Lauder Beautiful Belle",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 17,
    name: "Yves Saint Laurent Mon Paris",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 18,
    name: "Calvin Klein Eternity Moment",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 19,
    name: "Burberry Her",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 20,
    name: "Kenzo Flower",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
];
export const womenFragrancesMediumStrength = [
  {
    id: 21,
    name: "Chanel Coco Mademoiselle",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 22,
    name: "Dior Miss Dior Blooming Bouquet",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 23,
    name: "Marc Jacobs Daisy Eau So Fresh",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 24,
    name: "Gucci Guilty",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 25,
    name: "Viktor & Rolf Flowerbomb",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 26,
    name: "Prada Infusion d'Iris",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 27,
    name: "Yves Saint Laurent Black Opium",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 28,
    name: "Bvlgari Rose Goldea",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 29,
    name: "Coach Floral",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 30,
    name: "Jo Malone London Peony & Blush Suede",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 31,
    name: "Tom Ford Black Orchid",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 32,
    name: "Michael Kors Sexy Amber",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 33,
    name: "Dolce & Gabbana The One",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 34,
    name: "Calvin Klein Euphoria",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 35,
    name: "Elizabeth Arden Red Door",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 36,
    name: "Kenzo Flower In The Air",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 37,
    name: "Versace Bright Crystal",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 38,
    name: "Burberry My Burberry",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 39,
    name: "Givenchy Live Irresistible",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 40,
    name: "Issey Miyake L'Eau d'Issey",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
];

export const womenFragrancesStrongStrength = [
  {
    id: 41,
    name: "Tom Ford Black Orchid",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 42,
    name: "Yves Saint Laurent Black Opium",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 43,
    name: "Chanel Coco Noir",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 44,
    name: "Dior Hypnotic Poison",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 45,
    name: "Viktor & Rolf Flowerbomb Nectar",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 46,
    name: "By Kilian Good Girl Gone Bad",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 47,
    name: "Gucci Guilty Absolute Pour Femme",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 48,
    name: "Roja Parfums Scandal",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 49,
    name: "Amouage Honour Woman",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 50,
    name: "Tom Ford Velvet Orchid",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 51,
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 52,
    name: "Creed Aventus for Her",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 53,
    name: "Dolce & Gabbana The Only One",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 54,
    name: "Christian Dior J'adore",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 55,
    name: "Guerlain Shalimar",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 56,
    name: "Estée Lauder Modern Muse",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 57,
    name: "Prada La Femme Intense",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 58,
    name: "Givenchy Ange ou Démon Le Secret",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 59,
    name: "Mugler Alien",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
  {
    id: 60,
    name: "Paco Rabanne Lady Million",
    image:
      "https://p.turbosquid.com/ts-thumb/0k/aJYbfH/q5LlqkL4/perfume_bottle_generic_360/jpg/1508787384/1920x1080/turn_fit_q99/c92c604796ef1ececde0cdb1c3da651e1b340e9f/perfume_bottle_generic_360-1.jpg",
    price: getRandomPrice(30, 200),
  },
];
