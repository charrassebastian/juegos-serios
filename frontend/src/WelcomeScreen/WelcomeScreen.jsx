import { GameList } from '../GameList/GameList'
// import Game from '../types/Game'
import axios from 'axios'
import { baseUrl } from '../constants/url'
import { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'

export const WelcomeScreen = () => {
    const getGames = value => axios.get(baseUrl + 'games', { params: { value }}).then(res => res.data);
    const [games, setGames] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const onSearchValueChange = (value) => {
        setSearchValue(value)
    }

    const onSearch = async () => {
        const tempGames = await getGames(searchValue)
        console.log(tempGames)
        setGames(tempGames.games)
    }

    // If data.games contains games, display them using GameList
    return (
        <>
            <Navbar />
            <section className="gradient-background vh-100 home">
                <div className="container col-xxl-8 px-3 px-md5 " >
                    <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="" className="d-block mx-lg-auto img-fluid" alt="" height="200" loading="lazy" />
                        </div>
                        <div className="col-lg-6 px-3 px-md5">
                            <h1 className="display-1 fw-bold text-body-emphasis bs-light lh-1 mb-3">Juegos Serios</h1>
                            <br />
                            <h2>Encontra el juego que estas buscando.</h2>
                            <br />
                            <p>Ingresa el nombre del juego que estes buscando y luego hace click en el boton Buscar.</p>
                        </div>
                        <form className="d-flex d-grid gap-3 d-md-flex justify-content-md-start" role="search">
                            <input
                                className="form-control me-"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchValue}
                                onChange={(e) => onSearchValueChange(e.target.value)}
                            />
                            <button type="button" className="btn btn-light btn-lg px-4" onClick={onSearch}> Buscar </button>
                            <button type="button" className="btn btn-outline-dark btn-lg px-4"> Limpiar</button>
                        </form>
                    </div>
                </div>
            </section>
            <section id="features">
                <div className="container mt-5">
                    <div className="container px-4 py-5" id="hanging-icons">
                        <h2 id="Features-h1">Features</h2>
                        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div className="col d-flex align-items-start">

                                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                    <img className="icon" src="./images/easy-to-use.png" alt="Easy to use" height="180" />
                                </div>
                                <div>
                                    <h3 className="fs-2 features-h3"> Fácil de usar</h3>
                                    <p className="features-p-2">Estan fácil de usar que hasta tu gato puede usarlo.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                    <img className="icon" src="./images/crown.png" alt="Easy to use" height="180" />
                                </div>
                                <div>
                                    <h3 className="fs-2 features-h3">Clientes Elite</h3>
                                    <p className="features-p-2">Gamers de todo el mundo utilizan el motor de busqueda.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                    <img className="icon" src="./images/best-seller.png" alt="Thumb up" height="180" />
                                </div>
                                <div>
                                    <h3 className="fs-2 features-h3">Busqueda Garantizada</h3>
                                    <p className="features-p">Encontras lo que buscas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GameList games={games} />
            <footer className="py-4 gradient-background ">
                <ul className="nav justify-content-center border-bottom mb-3">
                    <a className="img-footer" href="./index.html"><img src="./images/mobile-game.png" alt="A mobile game" height="100" /></a>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-dark">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-dark">Buscar</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-dark">Creado por INSPT-UTN</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-dark">Licencias</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-4 text-dark">Acerca de</a></li>
                </ul>
                <p className="text-center text-dark">Juegos Serios © 2023 </p>
            </footer>
        </>
    )
}