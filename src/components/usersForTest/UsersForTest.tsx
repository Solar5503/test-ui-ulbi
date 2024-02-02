import { useEffect, useState } from 'react'
import User from './User'

export interface IUser {
  id: number
  name: string
}

const UsersForTest = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setUsers(json)
          setIsLoading(false)
        }, 1000)
      })
  }, [])

  const deleteHandler = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      {isLoading && <h1 id="users-loading">Loading...</h1>}
      {users.length > 0 && (
        <div id="users-list">
          {users.map((user) => (
            <User key={user.id} user={user} onDelete={deleteHandler} />
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersForTest
