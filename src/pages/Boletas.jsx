
import { useEffect } from "react";

function Boleta() {
    useEffect(() => {
    // Evitar duplicar el script si ya está cargado
    if (!document.querySelector("script[src='/js/boletas.js']")) {
        const script = document.createElement("script");
      script.src = "/js/boletas.js"; // Ruta desde /public
        script.async = true;
        document.body.appendChild(script);
    }

}, []);

    return (
    <main>
        <div className="contenedor-titulo">
            <h2 className="titulo-principal">Historial de Boletas</h2>
            <button id="borrar-todas" className="boleta-borrar-todas">Borrar todas</button>
        </div>

        <section id="boletas-container" className="contenedor-boletas"></section>
    </main>
    );
}

export default Boleta;
