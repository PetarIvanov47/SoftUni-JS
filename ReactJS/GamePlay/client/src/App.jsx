import CatalogPage from "./components/catalog-page/CatalogPage"
import CreateGame from "./components/game-create/CreateGame"
import EditGame from "./components/game-edit/EditGame"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"

import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"
import RegisterPage from "./components/Register/RegisterPage"
import LoginPage from "./components/LogIn/LoginPage"
import { AuthContextProvider } from "./components/context/AuthContext"
import Logout from "./components/logout/LogOut"


function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/game/create" element={<CreateGame />} />
                        <Route path="/details/:gameId" element={<GameDetails />} />
                        <Route path="/games" element={<CatalogPage />} />
                        <Route path="/game/edit/:gameId" element={<EditGame />} />
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>

    )
}


export default App

