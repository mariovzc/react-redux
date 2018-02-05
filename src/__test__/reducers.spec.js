import { products, cart } from '../reducers'
import { ProductList } from '../components/ProductList';

describe('products', () => {
  it('returns the initial state', () => { // this validates when the produc in empty 
    expect(products(undefined, {})).toEqual([])
  })

  it('receives products', () => {
    const ProductList = [
      { id: 1, name: 'Product 1', price: 100, image: '' }
    ]
    expect(
      products([], {type: 'REPLACE_PRODUCTS', products: ProductList})
    ).toEqual(ProductList)

  })

})
