const addItem = () =>{
    const nameField = document.getElementById('item-name')
    const name = nameField.value

    displayItem(name);

    addItemToCart(name)

    nameField.value = '';
}

const displayItem = name => {
    const ul = document.getElementById('items')
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () =>{
  const cart = localStorage.getItem('cart');
  let cartObj;
  if(cart){
      cartObj = JSON.parse(cart)
  }

  else {
      cartObj = {};
  }
  return cartObj;
}

const addItemToCart = name => {

    const cart = getCart();
    cart[name] = 1;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart' , cartString);
}

