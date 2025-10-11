
const Nosotros=()=>{
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
        <main>
            <h2 id="titulo-principal" class="titulo-principal">Mas Sobre Pasteleria Mil Sabores</h2>
            
                <p class="info-pasteleria">En Pastelería 1000 Sabores celebramos con orgullo nuestros 50 años de historia siendo un verdadero referente en la repostería chilena. Desde nuestros inicios, en 1975, hemos trabajado con dedicación para entregar productos frescos, de calidad y con el sabor casero que nos caracteriza.</p>
                <p class="info-pasteleria">Nuestro nombre se hizo conocido a nivel internacional en 1995, cuando formamos parte de un récord Guinness al colaborar en la creación de la torta más grande del mundo, un hito que marcó nuestra trayectoria y reafirmó nuestro compromiso con la innovación y la pasión por la pastelería.</p>
                <p class="info-pasteleria">A lo largo de estas cinco décadas hemos acompañado a generaciones de familias chilenas en sus celebraciones más importantes: cumpleaños, matrimonios, bautizos y todo tipo de eventos donde un buen trozo de torta se convierte en el centro de la alegría.</p>
                <p class="info-pasteleria">Hoy, mirando hacia el futuro, queremos mantener viva nuestra tradición mientras nos adaptamos a los nuevos tiempos. Por eso, estamos renovando nuestro sistema de ventas online, con el objetivo de brindar a nuestros clientes una experiencia de compra moderna, rápida y accesible, sin perder el toque artesanal que siempre nos ha distinguido.</p>
                <p class="info-pasteleria">En Pastelería 1000 Sabores seguimos trabajando con la misma pasión de hace 50 años, porque creemos que un buen postre no solo endulza el paladar, sino también la vida.</p>
            
        </main>
        <footer>
                <p className="texto-footer">©PasteleriaMilSabores</p>
        </footer>
        </div>
        
    )
}
export default Nosotros;