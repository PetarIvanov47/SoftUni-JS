import CatalogPage from "./components/catalog-page/CatalogPage"
import CreateGame from "./components/game-create/CreateGame"
import EditGame from "./components/game-edit/EditGame"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"
import LoginPage from "./components/authentication/LoginPage"
import RegisterPage from "./components/authentication/RegisterPage"
import Home from "./components/home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"
import ProfileContext from "./components/context/profileContext"
import { useFetch } from "./hooks/useFetch"
import urls from "./api/urls"


function App() {
    const [userProfile, setUserProfile] = useState({});
    const [isLogedIn, setIsLogedIn] = useState(false);
    const navigate = useNavigate();

    const {
        data: profiles,
        isFetching
    } = useFetch(urls.profilesUrl, {});

    const login = ({ username, password}) => {
    
        const profile = Object
        .values(profiles)
        .filter(profile => profile.username === username && profile.password === password);

        if(profile.length === 1){
            navigate("/");
            setUserProfile(profile);
        };

    };

    return (
        <ProfileContext.Provider value={{ profile: userProfile, isLogedIn, login }}>
            <div id="box">

                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/game/create" element={<CreateGame />} />
                        <Route path="/details/:gameId" element={<GameDetails />} />
                        <Route path="/games" element={<CatalogPage />} />
                        <Route path="/game/edit/:gameId" element={<EditGame />} />
                    </Routes>
                </main>
            </div>
        </ProfileContext.Provider>
    )
}


export default App

