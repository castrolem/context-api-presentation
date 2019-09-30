import React, { useState } from 'react'
import faker from 'faker'
import { User } from './User'

const USERS = Array.from(Array(5), () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  id: faker.random.uuid()
}))

export const Users = () => {
  const [selectedUser, selectUser] = useState(USERS[0])

  return (
    <>
      <div className='content'>
        <nav>
          {USERS.map(user => (
            <button key={user.id} onClick={() => selectUser(user)}>
              {user.name}
            </button>
          ))}
        </nav>
      </div>
      <User {...selectedUser} />
    </>
  )
}
