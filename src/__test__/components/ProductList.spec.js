import React from 'react'
import { shallow } from 'enzyme'
import { ProductList } from '../../components/ProductList'

it('renders no products when store is empty', () => {
  const wrapper = shallow(<ProductList products={[]} />)
  expect(wrapper.find('product').length).toBe(0)
})