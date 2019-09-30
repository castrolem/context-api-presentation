import React from 'react'
import { render } from '@testing-library/react'

import { Provider as HeaderTitleProvider } from '../Components/Header/Provider'

const AllTheProviders = ({ children }) => {
  return <HeaderTitleProvider>{children}</HeaderTitleProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
