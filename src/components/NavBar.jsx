import CardWidget from "./CartWidget";
import harmonyLogo from '../assets/img/logo.png'

function NavBar() {
    return (
        <nav className="navbar max-content navbar-expand-md ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={harmonyLogo} alt="Imagen del Logo de Harmony" width={180}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasMd" aria-controls="navbarOffcanvasMd" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end container-navbar" tabIndex="-1" id="navbarOffcanvasMd" aria-labelledby="navbarOffcanvasMdLabel">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cursos
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Platos
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Cuencos y Bowls
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Tazas y Sets de Té
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Vajillas completas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
                <CardWidget></CardWidget>
            </div>
        </nav> 
    );
}

export default NavBar;