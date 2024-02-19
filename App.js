// add to cart

const cart = [];
// Empty cart array

// Localstorage only stores strings so it has to be stringify before storing it
localStorage.setItem("cart", JSON.stringify(cart));

// Defining the function (the function is an action, addToCart is the action taken, ..)
function addToCart(
  productId,
  productName,
  productPrice,
  productCategory,
  productSeller,
  qtyInCart
)

// Create a new cart (object) of a new item to be added
{
  const newCart = {
    productId: productId,
    productName: productName,
    productPrice: productPrice,
    productCategory: productCategory,
    productSeller: productSeller,
    qtyInCart: qtyInCart,
    };
    
// In order to be able to add a new cart to the local storage, name the variable "cartInTheLocalStorage" and parse it to an array
  const cartInTheLocalStorage = JSON.parse(localStorage.getItem("cart"));

// Push to add newCart to the cartInTheLocalStorage
  cartInTheLocalStorage.push(newCart);

// stringify the cartInTheLocalStorage to store it in localstorage
  localStorage.setItem("cart", JSON.stringify(cartInTheLocalStorage));
}

// And this is now the action being performed
addToCart(20, "Gucci Bag", 300, "Handbag", "Dammy", 15);
addToCart(5, "Brazillian Hair", 2700, "Human Hair", "Amina", 10)



const product = []

localStorage.setItem()
