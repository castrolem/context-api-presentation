import React, { useState, useMemo, useContext, createContext } from 'react'

const HeaderTitleContext = createContext({})

function useHeaderTitle () {
  const store = useContext(HeaderTitleContext)
  if (!store) {
    throw new Error(
      'Cannot use `useHeaderTitle` outside of a `HeaderTitleContext`'
    )
  }
  return store
}

function Provider (props) {
  const [title, setTitle] = useState('Page Title')
  const store = useMemo(() => ({ setTitle, title }), [title])
  return <HeaderTitleContext.Provider value={store} {...props} />
}

export { Provider, useHeaderTitle }
