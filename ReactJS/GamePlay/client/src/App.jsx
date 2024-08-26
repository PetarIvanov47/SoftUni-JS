import CatalogPage from "./components/CatalogPage"
import CreatePage from "./components/CreatePage"
import EditPage from "./components/EditPage"
import GameDetails from "./components/GameDetails"
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import WelcomeWorld from "./components/WelcomeWorld"
import { Routes, Route } from "react-router-dom"
function App() {

    return (
        <>
            <div id="box">

                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<WelcomeWorld />} />
                        <Route path="/createPage" element={<CreatePage />} />
                        <Route path="/details/:gameId" element={<GameDetails />} />
                        <Route path="/catalogPage" element={<CatalogPage />} />
                        <Route path="/editPage/:gameId" element={<EditPage />} />
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
