const addToCart = product  => {
  return {
    type: 'ADD_TO_CART',
    product // is equals to product: product
  }
}

const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product // is equals to product: product
  }
}

export {addToCart, removeFromCart}