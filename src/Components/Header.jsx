import React from 'react'

export const Header = ({ children, value = '<Page Name>' }) => {
  return (
    <header>
      <h1>{value}</h1>
      {children}
    </header>
  )
}
