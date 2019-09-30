import React from 'react'

export const User = ({ id, name, email }) => (
  <div className='content'>
    <p>
      <b>Name:</b> {name}
    </p>
    <p>
      <b>Email:</b> {email}
    </p>
  </div>
)
