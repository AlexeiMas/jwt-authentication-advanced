import { Link, useNavigate } from "react-router-dom"
import { ERoute } from "@/routes/constants"
import { useLogoutMutation } from "@/entities/user/api/userApi"

const Header = () => {
  const navigate = useNavigate()

  const [logout] = useLogoutMutation()

  const onLogout = () => {
    logout().then(() => {
      navigate(ERoute.LoginPage)
    })
  }

  return (
    <header className="sticky top-0 left-0 right-0 flex justify-between items-center px-4 py-2 shadow-md mb-4">
      <Link to={ERoute.PostsPage}>HOME</Link>
      <button
        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
        onClick={onLogout}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Logout
        </span>
      </button>
    </header>
  )
}

export default Header
