import '../css/main.css'
import { useEffect } from "react";

const Productos=()=>{
    useEffect(() =>{
        if (!document.querySelector("script[src='/js/main.js']")) {
            const sc = document.createElement("script")
            sc.src = "/js/main.js"
            sc.async = true
            document.body.appendChild(sc)
            console.log("script cargado...")
        } else {
            console.log("script No Cargado")
        }
        if (!document.querySelector("script[src='/js/main.js']")) {
        const sc = document.createElement("script")
        sc.src = "/js/main.js"
        sc.async = true
        document.body.appendChild(sc)
        console.log("script cargado...")
        sc.onload = () =>{
            if(window.cargarProductos()){
                window.cargarProductos()
            }
            
        }
    } else {
        console.log("script No Cargado")
    }
    })
    return(
        <div className="wrapper">
        <aside>
            <header>
                <h1 className="logo">Pasteleria Mil Sabores</h1>
            </header>
            <nav>
                <ul className="menu">
                    <li>
                        <button id="home" className="boton-menu boton-categoria"><i className="bi bi-caret-right-fill"></i><a href="/"> menu</a></button>
                    </li>
                    <li>
                        <button id="todos" className="boton-menu boton-categoria active"><i className="bi bi-caret-right-fill"></i><a href="/Productos"> Productos</a></button>
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
        <h2 id="titulo-principal" className="titulo-principal">Todos Los Productos</h2>
        <div className="contenedor-login">
            <button id="login" className="boton-login "><i></i><a href="./login.html">Login</a></button>
        </div>
        <div id="contenedor-productos" className="contenedor-productos">
        </div>
        </main>

        <footer>
                <p className="texto-footer">©PasteleriaMilSabores</p>
        </footer>
        </div>
    
)}
export default Productos;