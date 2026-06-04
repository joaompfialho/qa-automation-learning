function addToCart(cartCount) {
  if (cartCount > 0) {
    console.log("Proceed to checkout");
  } else if (cartCount === 0) {
    console.log("Cart is empty");
  } else {
    console.log("Invalid count");
  }
}

addToCart();
addToCart(3);
addToCart(-1);
addToCart(0);
addToCart("two");
