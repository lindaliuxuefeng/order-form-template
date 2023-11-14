cartItems = [];


function initializeCart() {
  loadCartFromSessionStorage();
  loadCart();
  displayCartItems1();
}

function addToCart(product) {
  alert("Item added to cart successfully. If you need multiple items of the same type, repeat the action until you have the desired amount in your cart.");
  cartItems.push(product);
  var myItem = document.getElementById("inCartIndicatorProd"+product);
  myItem.style.display = "block";
  alert("Cart:"+cartItems);
  document.getElementById("inCartIndicatorProd"+product).innerHTML = checkCartForItem(product)+" in cart";
  document.getElementById("viewCartButton").innerHTML = "View Cart 🛒("+cartItems.length+")";
}

function checkCartForItem(itemId) {
  var instances = 0;
  for (var item of cartItems) {
    if (item === itemId) {
      instances += 1;
    }
  }
  return instances;
}

function loadCart() {
  for (var item of cartItems) {
    displayCartItems(item);
  }
}

function displayCartItems(product) {
  var myItem = document.getElementById("inCartIndicatorProd" + product);
  if (myItem) {
    myItem.style.display = "block";
    document.getElementById("inCartIndicatorProd" + product).innerHTML = checkCartForItem(product) + " in cart";
    document.getElementById("viewCartButton").innerHTML = "View Cart 🛒(" + cartItems.length + ")";
  } else {
    console.error("Element not found for product: ", product);
  }
}

function saveCartToSessionStorage() {
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function loadCartFromSessionStorage() {
  var storedCartItems = sessionStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
  }
  document.getElementById("cartItemQuantity").innerHTML = "Cart ("+cartItems.length +")";
  loadCartItems();
}

function getProductName(ItemId) {
  var itemNames = {
    1 : "Example Item 1",
    2 : "Example Item 2",
    3 : "Example Item 3",
  };
  return itemNames.ItemId;
}

function getProductPrice(ItemId) {
  var itemPrices = {
    1 : 2.00,
    2 : 3.00,
    3 : 1.50,
  };
  return itemPrices.ItemId;
}

function displayCartItems1() {
  var cartContainer = document.getElementById("cartContainer");
  alert("Cart Container: " + cartContainer);

  // Clear existing content in case you are dynamically updating the cart
  cartContainer.innerHTML = "";

  // Loop through each item in the cartItems array
  for (var i = 0; i < cartItems.length; i++) {
    // Create a new element (e.g., a div) for each item
    var itemElement = document.createElement("div");

    // Get the name and price of the item
    var itemName = getProductName(cartItems[i]);
    var itemPrice = getProductPrice(cartItems[i]);

    // Set the content of the element to the item information
    itemElement.textContent = itemName + " - $" + itemPrice.toFixed(2); // Assuming prices are floats

    // Append the item element to the container
    cartContainer.appendChild(itemElement);
    
    alert("Item added to cart: ", itemName);
  }
  alert(cartItems);
}


cartItems = [1, 2, 3];  // Replace with actual IDs
displayCartItems1();
