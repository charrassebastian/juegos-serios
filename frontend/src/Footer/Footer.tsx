export function Footer(){
    return (
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
    )
}