import { IUser } from './UsersForTest'

interface IUserProps {
  user: IUser
  onDelete: (id: number) => void
}

const User = ({ user, onDelete }: IUserProps) => {
  return (
    <div>
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  )
}

export default User
