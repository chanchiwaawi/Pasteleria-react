import '../css/main.css'

function Navbar(){
    return(
        <div className="wrapper">
        <aside>
            <header>
                <h1 className="logo">Pasteleria Mil Sabores</h1>
            </header>
            <nav>
                <ul className="menu">
                    <li>
                        <button id="todos" className="boton-menu boton-categoria active"><i className="bi bi-caret-right-fill"></i><a href="/"> menu</a></button>
                    </li>
                    <li>
                        <button id="todos" className="boton-menu boton-categoria"><i className="bi bi-caret-right-fill"></i> <a href="/productos"> Productos </a></button>
                    </li>
                    <li>
                        <button id="torta" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> Tortas</button>
                    </li>
                    <li>
                        <button id="alternativos" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> Productos Alternativos</button>
                    </li>
                    <li>
                        <button id="individuales" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> Individuales</button>
                    </li>
                    <li>
                        <button id="especiales" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> Especiales</button>
                    </li>
                    <li>
                        <button id="nostros" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/nosotros">Nosotros</a></button>
                    </li>
                    <li>
                        <button id="contacto" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/contacto">Contacto</a></button>
                    </li>
                    <li>
                        <button id="noticias" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/blogs">Noticias</a></button>
                    </li>
                    <li>
                        <a className="boton-menu boton-carrito" href="/carrito">
                            <i className="bi bi-cart-fill"></i> Carrito <span id="numerito" className="numerito">0</span></a>
                    </li>
                </ul>
            </nav>
            <footer>
                <p className="texto-footer">©PasteleriaMilSabores</p>
            </footer>
        </aside>
        
    </div>
    )
}
export default Navbar;