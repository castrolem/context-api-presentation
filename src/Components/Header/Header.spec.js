import React from 'react'
import faker from 'faker'
import { render as rtlRender, within } from '@testing-library/react'

import { Provider } from './Provider'
import { Header } from './'

const render = (title = faker.random.words(4)) => {
  const wrapper = rtlRender(
    <Provider value={{ title }}>
      <Header />
    </Provider>
  )
  return { ...wrapper, title }
}

test('contains a context title', () => {
  const { getByTestId, title: expectedText } = render()
  const { getByText } = within(getByTestId('title'))
  expect(getByText(new RegExp(expectedText, 'i'))).toBeTruthy()
})
