import CatalogPage from "./components/CatalogPage"
import CreatePage from "./components/CreatePage"
import EditPage from "./components/EditPage"
import GameDetails from "./components/GameDetails"
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import WelcomeWorld from "./components/WelcomeWorld"

function App() {

    return (
        <>
            <div id="box">

                <Header />

                {/* <!-- Main Content --> */}
                <main id="main-content">

                </main>

                {/* <!--Home Page--> */ }
                <WelcomeWorld />

                {/* <!-- Login Page ( Only for Guest users ) --> */}
                <LoginPage />

                {/* <!-- Register Page ( Only for Guest users ) --> */}
                <RegisterPage />

                {/* <!-- Create Page ( Only for logged-in users ) --> */}
                <CreatePage />

                {/* <!-- Edit Page ( Only for the creator )--> */}
                <EditPage />

                {/* <!--Details Page--> */}
                <GameDetails />

                {/* <!-- Catalogue --> */}
                <CatalogPage />
            </div>
        </>
    )
}

export default App
