import '../css/main.css'


const Home=()=>{
    return(
        <div className="wrapper">
        <aside>
            <header>
                <h1 className="logo">Pasteleria Mil Sabores</h1>
            </header>
            <nav>
                <ul className="menu">
                    <li>
                        <button id="home" className="boton-menu boton-categoria active"><i className="bi bi-caret-right-fill"></i><a href="/"> menu</a></button>
                    </li>
                    <li>
                        <button id="todos" className="boton-menu boton-categoria"><i className="bi bi-caret-right-fill"></i><a href="/Productos"> Productos</a></button>
                    </li>
                    <li>
                        <button id="torta" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/Productos"> Tortas </a></button>
                    </li>
                    <li>
                        <button id="alternativos" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/Productos">Productos Alternativos</a></button>
                    </li>
                    <li>
                        <button id="individuales" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> <a href="/Productos">Individuales</a></button>
                    </li>
                    <li>
                        <button id="especiales" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i> <a href="/Productos">Especiales</a></button>
                    </li>
                    <li>
                        <button id="nostros" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/Nosotros">Nostros</a></button>
                    </li>
                    <li>
                        <button id="contacto" className="boton-menu boton-categoria"><i className="bi bi-caret-right"></i><a href="/Contacto">Contacto</a></button>
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
        </aside>
        <footer>
                <p className="texto-footer">©PasteleriaMilSabores</p>
        </footer>
        </div>
    )
    
}
export default Home;