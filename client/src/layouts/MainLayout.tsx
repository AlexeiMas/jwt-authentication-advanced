import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks"
import { useRefreshMutation } from "@/entities/user/api/userApi"
import { useEffect, useState } from "react"
import { ERoute } from "@/routes/constants"

const MainLayout = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const isAuth = useAuth()
  const navigate = useNavigate()
  const [refresh] = useRefreshMutation()

  useEffect(() => {
    if (!isAuth) {
      refresh()
        .then((res) => {
          if (res.hasOwnProperty("data")) {
            navigate(ERoute.PostsPage)
          }
        })
        .finally(() => setIsMounted(true))
    }
  }, [isAuth, refresh, navigate])

  return <div>{!isAuth && isMounted ? <Outlet /> : <div>Loading...</div>}</div>
}

export default MainLayout
