import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
  const [users, setUsers] = useState([])
  const getusers = () => {

  axios.get("https://jsonplaceholder.typicode.com/users")
   .then((response) => {
    setUsers(response.data)
   })
    .catch((error) => {
      console.log('error')
    })
  }
  useEffect(() => { 
 getusers()
  }, [])

  
  return (
    <div>{users.map(user => (
      <div key={user.id}>
      <h1 >{user.name}</h1>
      <p>{user.email}</p>
      </div>
    ))}</div> 
  )
}

export default User