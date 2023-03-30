// Definir variables
let camisetas = 1000
let pantalones = 800
let accesorios = 1500
let carritoCamisetas = 0
let carritoPantalones = 0
let carritoAccesorios = 0
let totalCompra = 0
let seguirComprando = true
let primerCompra = true // Nueva variable

// Función para obtener el precio de un producto
function obtenerPrecio(producto) {
  let precio
  switch (producto) {
    case "camiseta":
      precio = 50
      break
    case "pantalón":
      precio = 80
      break
    case "accesorios":
      precio = 30
      break
    default:
      precio = 0
      break
  }
  return precio
}

// Función para comprar un producto
function comprarProducto() {
  let producto = prompt("¿Qué producto deseas comprar? (camiseta, pantalón o accesorios)")
  let cantidad = parseFloat(prompt("¿Cuántos deseas comprar?"))
  
  let precio = obtenerPrecio(producto)
  if (precio === 0) {
    alert("Lo siento, el producto es inválido.")
    return
  }
  
  let cantidadDisponible
  switch (producto) {
    case "camiseta":
      cantidadDisponible = camisetas
      break
    case "pantalón":
      cantidadDisponible = pantalones
      break
    case "accesorios":
      cantidadDisponible = accesorios
      break
    default:
      cantidadDisponible = 0
      break
  }
  
  if (cantidad > 0 && cantidad <= cantidadDisponible) {
    switch (producto) {
      case "camiseta":
        camisetas -= cantidad
        carritoCamisetas += cantidad
        break
      case "pantalón":
        pantalones -= cantidad
        carritoPantalones += cantidad
        break
      case "accesorios":
        accesorios -= cantidad
        carritoAccesorios += cantidad
        break
    }
    alert("Has comprado " + cantidad + " " + producto + "s.")
    totalCompra += cantidad * precio
    primerCompra = false
  } else {
    alert("Lo siento, la cantidad es inválida.")
  }
  
  seguirComprando = confirm("¿Deseas seguir comprando?")
}

// Loop principal
while (seguirComprando) {
    let accion = prompt("¿Qué deseas hacer? (comprar/salir)")
    
    switch (accion) {
      case "comprar":
        comprarProducto()
        break
      case "salir":
        alert("Gracias por utilizar el simulador.")
        seguirComprando = false
        break
      default:
        alert("Lo siento, la acción es inválida. Intenta de nuevo.")
        break
    }
    
    if (!seguirComprando) { // si se ha salido del loop, mostrar el total
      alert("Gracias! Tu monto total es de: " + totalCompra + ".")
    }
  }