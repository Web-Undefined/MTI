// Tool 1

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7307735826607",
//                 node: document.getElementById(
//                     "product-component-1657210554328"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Tool 2

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7307735826607",
//                 node: document.getElementById(
//                     "product-component-1657209980173"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// Week 1

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899731951791",
//                 node: document.getElementById(
//                     "product-component-1715651863580"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 1 - Networking Week

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899735752879",
//                 node: document.getElementById(
//                     "product-component-1715652106039"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 2

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899742273711",
//                 node: document.getElementById(
//                     "product-component-1715652441541"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 2 - Networking Week

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899743191215",
//                 node: document.getElementById(
//                     "product-component-1715652515102"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 3

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899757543599",
//                 node: document.getElementById(
//                     "product-component-1715653615708"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 4

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899758428335",
//                 node: document.getElementById(
//                     "product-component-1722281547168"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 4 - Networking Week

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899758887087",
//                 node: document.getElementById(
//                     "product-component-1715654255387"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 5

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899759411375",
//                 node: document.getElementById(
//                     "product-component-1715653892222"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 5 - Networking Week

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899759902895",
//                 node: document.getElementById(
//                     "product-component-1715653966021"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 6

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899760230575",
//                 node: document.getElementById(
//                     "product-component-1715654027218"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 7 - ADVANCED

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899760656559",
//                 node: document.getElementById(
//                     "product-component-1715654087643"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 7 - Networking Week

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899760918703",
//                 node: document.getElementById(
//                     "product-component-1715654143160"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// // Week 8

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7899761967279",
//                 node: document.getElementById(
//                     "product-component-1715654362847"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();

// Sept 2024 IASTM

// (function () {
//     var scriptURL =
//         "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//     if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//             ShopifyBuyInit();
//         } else {
//             loadScript();
//         }
//     } else {
//         loadScript();
//     }
//     function loadScript() {
//         var script = document.createElement("script");
//         script.async = true;
//         script.src = scriptURL;
//         (
//             document.getElementsByTagName("head")[0] ||
//             document.getElementsByTagName("body")[0]
//         ).appendChild(script);
//         script.onload = ShopifyBuyInit;
//     }
//     function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//             domain: "themusculartherapyinstitute.myshopify.com",
//             storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
//         });
//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//             ui.createComponent("product", {
//                 id: "7707559461039",
//                 node: document.getElementById(
//                     "product-component-1724002648540"
//                 ),
//                 moneyFormat: "%24%7B%7Bamount%7D%7D",
//                 options: {
//                     product: {
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "calc(25% - 20px)",
//                                     "margin-left": "20px",
//                                     "margin-bottom": "50px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         contents: {
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     productSet: {
//                         styles: {
//                             products: {
//                                 "@media (min-width: 601px)": {
//                                     "margin-left": "-20px"
//                                 }
//                             }
//                         }
//                     },
//                     modalProduct: {
//                         contents: {
//                             img: false,
//                             imgWithCarousel: true,
//                             button: false,
//                             buttonWithQuantity: true
//                         },
//                         styles: {
//                             product: {
//                                 "@media (min-width: 601px)": {
//                                     "max-width": "100%",
//                                     "margin-left": "0px",
//                                     "margin-bottom": "0px"
//                                 }
//                             },
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             button: "Add to cart"
//                         }
//                     },
//                     option: {},
//                     cart: {
//                         styles: {
//                             button: {
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 "background-color": "#30a2cc",
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         },
//                         text: {
//                             total: "Subtotal",
//                             button: "Checkout"
//                         }
//                     },
//                     toggle: {
//                         styles: {
//                             toggle: {
//                                 "background-color": "#30a2cc",
//                                 ":hover": {
//                                     "background-color": "#2b92b8"
//                                 },
//                                 ":focus": {
//                                     "background-color": "#2b92b8"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }
// })();
