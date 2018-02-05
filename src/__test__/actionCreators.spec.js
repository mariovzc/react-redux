import {
  loadProducts,
  addToCart
} from '../actionCreators'
import configureStore from 'redux-mock-store'
import { thunk } from 'redux-thunk'
import moxios from 'moxios'

const mockStore = configureStore(thunk)

beforeEach(() => moxios.install())
afterEach(() => moxios.uninstall())

// it('loads products', () => {
//   const store = mockStore({ products: [] })
//   moxios.stubRequest('http://localhost:3001/products', {
//     status: 200,
//     response: [
//       {id: 1, name: 'Product 1', price: 100, image: ''},
//       {id: 2, name: 'Product 2', price: 400, image: ''}
//     ]
//   })

//   store.dispatch(loadProducts())
//     .then(() => {
//       const actions = store.getActions()
//       expect(actions.length).toBe(1)
//       expect(actions[0].type).toBe('REPLACE_PRODUCTS')
//       expect(actions[0].products).not.toBenNull
//       expect(actions[0].products.length).toBe(2)
//     })
// })

it('adds to cart', () => { // sync action
  const store = mockStore({ cart: [] })

  const product = { id: 1, name: 'product 1', price: 100, image: '' }
  store.dispatch(addToCart(product))

  const actions = store.getActions()
  expect(actions.length).toBe(1)
  expect(actions[0].type).toBe('ADD_TO_CART')
  expect(actions[0].product).not.toBenNull
  expect(actions[0].product.id).toBe(1)
})
