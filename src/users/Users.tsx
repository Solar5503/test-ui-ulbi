import axios from 'axios'
import { useEffect, useState } from 'react'
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
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  )
}

export default Users
