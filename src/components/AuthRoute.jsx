import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({children}) {
    const token = getToken(); // 获取本地存储的token
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace />
    }
}