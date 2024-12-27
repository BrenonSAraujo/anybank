import styled from "styled-components"
import { Outlet } from "react-router"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../app/context/AuthContext";
import { Header } from "../presentation/Header";

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 1200px;
  margin: 24px auto;
`

const RootLayout = () => {

    return (
        <AuthProvider>
            <ToastContainer />
            <Header />
            <Container>
                <Outlet />
            </Container>
        </AuthProvider>
    )
}

export default RootLayout
