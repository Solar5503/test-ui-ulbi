import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
interface IUser {
  id: number
  name: string
}

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(resp.data)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  )
}

export default Users
