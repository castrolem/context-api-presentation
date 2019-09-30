import React from 'react'
import { useHeaderTitle } from './Provider'

export const Header = ({ children }) => {
  const { title } = useHeaderTitle()
  return (
    <header>
      <h1 data-testid='title'>{title}</h1>
      {children}
    </header>
  )
}
