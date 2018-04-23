import React from 'react'
import { mountComponentWithRedux } from '../../testHelper'
import App from './app'

describe('Components::App', () => {
  let component

  beforeEach(() => {
    component = mountComponentWithRedux(App)
  })

  it('renders', () => {
    expect(component.exists()).toBe(true)
  })
})
