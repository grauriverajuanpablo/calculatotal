//precio = 400000

//precioSpan = document.querySelector(".precio-inicial");
//precioSpan.innerHTML = precio

const precioInicial = document.querySelector(".precio-inicial");
        const cantidad = document.querySelector(".cantidad");
        const valorTotal = document.querySelector(".valor-total");

        precioInicial.innerHTML = "400000";
        cantidad.innerHTML = "0";
        valorTotal.innerHTML = "0";

        const botonMas = document.querySelector(".card button:first-of-type");
        botonMas.addEventListener("click", function() {
          cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
          const nuevoValorTotal = parseInt(cantidad.innerHTML) * parseInt(precioInicial.innerHTML);
          valorTotal.innerHTML = nuevoValorTotal;
        });

        const botonMenos = document.querySelector(".card button:last-of-type");
        botonMenos.addEventListener("click", function() {
          cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1;
          if (parseInt(cantidad.innerHTML) < 0) {
            cantidad.innerHTML = 0;
          }
          const nuevoValorTotal = parseInt(cantidad.innerHTML) * parseInt(precioInicial.innerHTML);
          valorTotal.innerHTML = nuevoValorTotal;
        });