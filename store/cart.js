export const state = () => ({
  items: [
    {
      id: 1,
      productImage:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      productName: 'Basic Tee',
      productPrice: '£24.00 GBP'
    },
    {
      id: 2,
      productImage:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      productName: 'Basic Tee',
      productPrice: '£24.00 GBP'
    },
    {
      id: 3,
      productImage:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      productName: 'Basic Tee',
      productPrice: '£24.00 GBP'
    },
    {
      id: 4,
      productImage:
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      productName: 'Basic Tee',
      productPrice: '£24.00 GBP'
    }
  ],
  cartItems: []
})

export const mutations = {
  SET_CART_ITEMS (state, payload) {
    Object.keys(payload).length
      ? (state.cartItems = [...state.cartItems, payload])
      : (state.cartItems = [...state.cartItems, {}])
  },
  DELETE_CART_ITEM (state, payload) {
    const i = state.cartItems.map(item => item.id).indexOf(payload.id)
    state.cartItems.splice(i, 1)
  }
}

// contains your actions
export const actions = {
  AddItemToCart ({ state, commit }, product) {
    commit('SET_CART_ITEMS', product.payload)
  },
  // DeleteItem(state, { item }) {
  //   state.list.splice(state.list.indexOf(item), 1);
  // },
  DeleteItemFromCart ({ state, commit }, product) {
    console.log(product.item, '')
    commit('DELETE_CART_ITEM', product.item)
  }
}
