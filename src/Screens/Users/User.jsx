import React from 'react'

export const User = ({ id, name, email }) => (
  <div className='content'>
    <h1>{name}</h1>
    <p>
      <b>Email:</b> {email}
    </p>
  </div>
)
