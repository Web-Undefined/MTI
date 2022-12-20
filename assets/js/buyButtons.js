// Tool 2

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7307735826607",
                node: document.getElementById(
                    "product-component-1657210554328"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            button: false,
                            buttonWithQuantity: true
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Tool 1

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7307735826607",
                node: document.getElementById(
                    "product-component-1657209980173"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            button: false,
                            buttonWithQuantity: true
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Feb AZ 2

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7417407275183",
                node: document.getElementById(
                    "product-component-1670352970313"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            button: false,
                            buttonWithQuantity: true
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Feb AZ

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7417407275183",
                node: document.getElementById(
                    "product-component-1670352409460"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            button: false,
                            buttonWithQuantity: true
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Cryo 1

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425427472559",
                node: document.getElementById(
                    "product-component-1671563007072"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Cryo 2

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425428226223",
                node: document.getElementById(
                    "product-component-1671563387646"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Cryo 3

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425429242031",
                node: document.getElementById(
                    "product-component-1671563972706"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Cryo 4

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425429471407",
                node: document.getElementById(
                    "product-component-1671564093249"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// Cryo 5

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425429536943",
                node: document.getElementById(
                    "product-component-1671564171404"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// IASTM 1

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425429766319",
                node: document.getElementById(
                    "product-component-1671564332770"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();

// IASTM 2

(function () {
    var scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: "themusculartherapyinstitute.myshopify.com",
            storefrontAccessToken: "681e6e10352c494bac00c142e1794b3c"
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: "7425430749359",
                node: document.getElementById(
                    "product-component-1671564425029"
                ),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: {
                    product: {
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        contents: {
                            img: false,
                            button: false,
                            buttonWithQuantity: true,
                            title: false,
                            price: false
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    productSet: {
                        styles: {
                            products: {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    modalProduct: {
                        contents: {
                            img: false,
                            imgWithCarousel: true,
                            button: false,
                            buttonWithQuantity: true
                        },
                        styles: {
                            product: {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            button: "Add to cart"
                        }
                    },
                    option: {},
                    cart: {
                        styles: {
                            button: {
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                "background-color": "#30a2cc",
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        },
                        text: {
                            total: "Subtotal",
                            button: "Checkout"
                        }
                    },
                    toggle: {
                        styles: {
                            toggle: {
                                "background-color": "#30a2cc",
                                ":hover": {
                                    "background-color": "#2b92b8"
                                },
                                ":focus": {
                                    "background-color": "#2b92b8"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();
