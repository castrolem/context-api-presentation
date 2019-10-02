import React from 'react'
import { useNotifications } from './Provider'

export const Notifications = () => {
  const { notifications } = useNotifications()
  return (
    <div className='notifications'>
      {notifications.length === 0 && (
        <div className='notifications-empty'>No new notification sent</div>
      )}
      {notifications.map(notification => (
        <div key={notification.id} className='notification'>
          {notification.description}
        </div>
      ))}
    </div>
  )
}
