// ==============================
// GESTIÓN DE BOLETAS 
// ==============================

// ✅ Eliminamos DOMContentLoaded porque React ya montó el HTML
// Esto se ejecutará cuando el script cargue desde React
(function () {
    const contenedor = document.querySelector("#boletas-container");
    const botonBorrarTodas = document.querySelector("#borrar-todas");

    if (!contenedor || !botonBorrarTodas) return; // Evita errores si el componente no está montado

    /**
     * Carga y renderiza todas las boletas almacenadas en localStorage
     */
    function cargarBoletas() {
        contenedor.innerHTML = "";
        const boletas = JSON.parse(localStorage.getItem("boletasGuardadas")) || [];

        if (boletas.length === 0) {
            contenedor.innerHTML = "<p>No hay boletas registradas.</p>";
            botonBorrarTodas.style.display = "none";
            return;
        }

        botonBorrarTodas.style.display = "inline-block";

        boletas.forEach((b, index) => {
            const div = document.createElement("div");
            div.classList.add("boleta-container");

            div.innerHTML = `
                <div class="boleta-header">
                    <h3>Boleta #${b.id}</h3>
                    <button class="boleta-acciones-borrar" data-index="${index}">Eliminar</button>
                </div>
                <p class="boletas_letras"><strong>Fecha:</strong> ${b.fecha}</p>

                <table class="boleta-tabla">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody class="body-boleta">
                        ${b.productos
                            .map(
                                (p) => `
                            <tr>
                                <td>${p.titulo}</td>
                                <td>${p.cantidad}</td>
                                <td>$${p.precio.toLocaleString()}</td>
                                <td>$${(p.precio * p.cantidad).toLocaleString()}</td>
                            </tr>
                            `
                            )
                            .join("")}
                    </tbody>
                </table>
                <p class="boleta-total"><strong>Total:</strong> $${b.total.toLocaleString()}</p>
            `;

            contenedor.append(div);
        });

        // ✅ Se corrige la clase (antes estaba mal escrita "boleta-acciones-eliminar")
        document.querySelectorAll(".boleta-acciones-borrar").forEach((boton) => {
            boton.addEventListener("click", eliminarBoleta);
        });
    }

    /**
     * Elimina una boleta específica según su índice
     */
    function eliminarBoleta(e) {
        const index = e.target.dataset.index;
        const boletas = JSON.parse(localStorage.getItem("boletasGuardadas")) || [];
        const confirmar = confirm(`¿Eliminar la Boleta #${boletas[index].id}?`);

        if (confirmar) {
            boletas.splice(index, 1);
            localStorage.setItem("boletasGuardadas", JSON.stringify(boletas));
            cargarBoletas();
        }
    }

    /**
     * Borra todas las boletas del almacenamiento
     */
    botonBorrarTodas.addEventListener("click", () => {
        const confirmar = confirm("¿Seguro que deseas borrar todas las boletas?");
        if (confirmar) {
            localStorage.removeItem("boletasGuardadas");
            cargarBoletas();
        }
    });

    // Inicializar
    cargarBoletas();
})();
