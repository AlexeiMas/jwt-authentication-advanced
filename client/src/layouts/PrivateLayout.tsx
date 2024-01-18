import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { useRefreshMutation } from "@/entities/user/api/userApi"
import { useEffect } from "react"
import { ERoute } from "@/routes/constants"
import Header from "@/components/Header"

const PrivateLayout = () => {
  const isAuth = useAuth()
  const navigate = useNavigate()
  const [refresh] = useRefreshMutation()

  useEffect(() => {
    if (!isAuth) {
      refresh()
        .then((res) => {
          if (res.hasOwnProperty("error")) {
            navigate(ERoute.LoginPage)
          }
        })
        .catch(() => navigate(ERoute.LoginPage))
    }
  }, [isAuth, refresh, navigate])

  return (
    <div>
      <Header />
      {isAuth ? <Outlet /> : <div>Loading...</div>}
    </div>
  )
}

export default PrivateLayout
