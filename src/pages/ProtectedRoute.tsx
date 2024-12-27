import { Outlet, useNavigate } from "react-router"
import { useAuthContext } from "../app/hooks/useAuthContext"
import { useEffect } from "react"

export const ProtectedRoute = () => {
    const { session } = useAuthContext()
    const navigate = useNavigate()
    useEffect(() => {
        if (!session) {
            navigate('/auth/login')
        }
    }, [session, navigate])
    return <Outlet />
}