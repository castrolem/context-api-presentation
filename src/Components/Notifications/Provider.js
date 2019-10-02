import React, {
  useState,
  useMemo,
  useContext,
  createContext,
  useCallback
} from 'react'

const NotificationsContext = createContext({})

function useNotifications () {
  const store = useContext(NotificationsContext)
  if (!store) {
    throw new Error(
      'Cannot use `useNotifications` outside of a `NotificationsContext`'
    )
  }
  return store
}

function Provider (props) {
  const [notifications, setNotifications] = useState([])

  const pushNotification = useCallback(
    notification => {
      setNotifications([...notifications, notification])
    },
    [notifications]
  )

  const store = useMemo(() => ({ pushNotification, notifications }), [
    notifications
  ])
  return <NotificationsContext.Provider value={store} {...props} />
}

export { Provider, useNotifications }
