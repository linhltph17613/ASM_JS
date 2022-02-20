let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);

    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQuantity = (id, next) => {
    const currentProduct = cart.find(item => item.id == id);
    currentProduct.quantity++;
    let priceInt = +currentProduct.price;
    currentProduct.total += priceInt;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find(item => item.id == id);
    currentProduct.quantity--;
    let priceInt = +currentProduct.price;
    currentProduct.total -= priceInt;

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Do you want to delete? ");
        if (confirm) {
            cart = cart.filter(item => item.id != id);
        } else {
            currentProduct.quantity = 1;
            currentProduct.total = priceInt;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};


export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Do you want do delete?");
    if (confirm) {
        cart = cart.filter(item => item.id != id);

    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};