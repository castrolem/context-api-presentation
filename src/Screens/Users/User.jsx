import React from 'react'
import faker from 'faker'

import { useHeaderTitle } from '../../Components/Header/Provider'
import { useNotifications } from '../../Components/Notifications/Provider'

export const User = ({ id, name, email }) => {
  const { setTitle } = useHeaderTitle()
  const { pushNotification } = useNotifications()

  setTitle(`${name}`)

  const notifyUser = () =>
    pushNotification({
      id: faker.random.uuid(),
      description: `${name} will receive: ${faker.random.words(6)}`
    })

  return (
    <div className='content'>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <button onClick={notifyUser}>Notify User!</button>
    </div>
  )
}
