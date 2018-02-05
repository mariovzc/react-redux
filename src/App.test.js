import React from 'react'
import App from './App'
import {shallow, render} from 'enzyme'
import { Provider } from 'react-redux'
import store from './store'
it('renders without crashing', () => {
  shallow(<App />)
})

it('render using redux ', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
