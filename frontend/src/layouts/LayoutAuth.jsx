import { Outlet } from "react-router-dom"
import Header from "../components/Header"
export default function LayoutAuth() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
