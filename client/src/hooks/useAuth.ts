import { useAppSelector } from "@/app/hooks"

export const useAuth = (): boolean => {
  const { accessToken } = useAppSelector((state) => state.auth)

  return !!accessToken
}
