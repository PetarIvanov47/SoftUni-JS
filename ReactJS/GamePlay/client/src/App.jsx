import CatalogPage from "./components/catalog-page/CatalogPage"
import CreateGame from "./components/game-create/CreateGame"
import EditGame from "./components/game-edit/EditGame"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"
import LoginPage from "./components/authentication/LoginPage"
import RegisterPage from "./components/authentication/RegisterPage"
import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"
function App() {

    return (
        <>
            <div id="box">

                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game/create" element={<CreateGame />} />
                        <Route path="/details/:gameId" element={<GameDetails />} />
                        <Route path="/games" element={<CatalogPage />} />
                        <Route path="/game/edit/:gameId" element={<EditGame />} />
                    </Routes>


                    {/* <LoginPage />

                    <RegisterPage />

                    <EditPage />

                    <GameDetails />
                    <CatalogPage /> */}

                </main>
            </div>
        </>
    )
}

export default App
