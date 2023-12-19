import { useParams } from 'react-router-dom'

const UserDetailsPage = () => {
  const { id } = useParams()
  return <div data-testid="user-page">User Details Page {id}</div>
}

export default UserDetailsPage
