
/* PROGRAMA DE VENTA DE PRODUCTOS DE ESTETICA AUTOMOTRIZ */


const shampoos = [ 
    {
        nombre: 'Elite', 
        precio: 6900
    },
    {
        nombre: 'Banana',
        precio: 5400
    },
    {
        nombre: 'Wax',
        precio: 6000
    },
    {
        nombre: 'Hyper black',
        precio: 7200
    }
]

const ceras = [ 
    {
        nombre: 'Ilusion wax', 
        precio: 8100
    },
    {
        nombre: 'Extrem detail', 
        precio: 6300
    },
    {
        nombre: 'Cherry quick', 
        precio: 6000
    },
    {
        nombre: 'Lava crush',
        precio: 8300
    }
]

const rev_interiores = [
    {
        nombre: 'Uva shake',
        precio: 10300
    },
    {
        nombre: 'Fruty cream',
        precio: 10300
    },
    {
        nombre: 'Mango go',
        precio: 9900
    },
    {
        nombre: 'creme look',
        precio: 10300
    },
    {
        nombre: 'Holy golss',
        precio: 10300
    }
]

const rev_exteriores = [
    {
        nombre: 'Hells',
        precio: 16200
    },
    {
        nombre: 'Blue magic',
        precio: 19500
    },
    {
        nombre: 'New tyre',
        precio: 13200
    },
    {
        nombre: 'Dark fluid',
        precio: 5800
    },
    {
        nombre: 'Ntp',
        precio: 11900
    }
]

let total = 0
let carrito = []

while (true) {
    
    let opc = Number(prompt('Ingrese el numero del producto que quiera comprar: \n\ 1- Shampoo \n\ 2- Cera rapida \n\ 3- Revividor interior \n\ 4- Revividor exterior \n\ Ingrese "5" para ver el carrito \n\ Ingrese "0" para abandonar el sistema '))

    if (opc == 1) {

        while (true) {
            let opc_shampoo = Number(prompt(`Seleccione que shampoo desea añadir al carrito: \n\ 1- Elite $6.900 \n\ 2- Banana $5.400 \n\ 3- Wax $6.000 \n\ 4- Hyper black $7.200 \n\ Ingrese 0 para volver al menu principal`))

            if (opc_shampoo == 1) {
                alert('Tu producto fue añadido correctamente')
                carrito.push('elite')
                total = total + (shampoos[0].precio)

            } else if (opc_shampoo == 2) {
                alert('Tu producto fue añadido correctamente')
                carrito.push('banana')
                total = total + (shampoos[1].precio)

            } else if (opc_shampoo == 3) {
                alert('Tu producto fue añadido correctamente')
                carrito.push('wax')
                total = total + (shampoos[2].precio)

            } else if (opc_shampoo == 4) {
                alert('Tu producto fue añadido correctamente')
                carrito.push('hyper black')
                total = total + (shampoos[3].precio)

            } else {
                break
            }
        }
    } else if (opc == 2) {

        while (true) {
            let opc_cera = Number(prompt(`Seleccione que shampoo desea añadir al carrito: \n\ 1- Ilusion wax $8.100 \n\ 2- Extreme detail $6.300 \n\ 3- Cherry quick $6.000 \n\ 4- Lava crush $8.300 \n\ Ingrese 0 para volver al menu principal`))

            if (opc_cera == 1) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' ilusion wax')
                total = total + (ceras[0].precio)

            } else if (opc_cera == 2) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' extreme detail')
                total = total + (ceras[1].precio)

            } else if (opc_cera == 3) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' cherry quick')
                total = total + (ceras[2].precio)

            } else if (opc_cera == 4) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' lava crush')
                total = total + (ceras[3].precio)

            } else {
                break
            }
        }
    } else if (opc == 3) {

        while (true) {
            let opc_rev_interior = Number(prompt(`Seleccione que shampoo desea añadir al carrito: \n\ 1- Uva shake $10.300 \n\ 2- Fruty cream $10.300 \n\ 3- Mango go $9.900 \n\ 4- Creme look $10.300 \n\ 5- Holy gloss $10.300 \n\ Ingrese 0 para volver al menu principal`))

            if (opc_rev_interior == 1) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' uva shake')
                total = total + (rev_interiores[0].precio)

            } else if (opc_rev_interior == 2) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' fruty cream')
                total = total + (rev_interiores[1].precio)

            } else if (opc_rev_interior == 3) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' mango go')
                total = total + (rev_interiores[2].precio)

            } else if (opc_rev_interior == 4) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' creme look')
                total = total + (rev_interiores[3].precio)

            } else if (opc_rev_interior == 5) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' holy gloss')
                total = total + (rev_interiores[4].precio)

            } else {
                break
            }
        }
    } else if (opc == 4) {

        while (true) {
            let opc_rev_exterior = Number(prompt(`Seleccione que shampoo desea añadir al carrito: \n\ 1- Hells $16.200 \n\ 2- Blue magic $19.500 \n\ 3- New tyre $13.200 \n\ 4- Dark fluid $5.800 \n\ 5- Ntp $11.900 \n\ Ingrese 0 para volver al menu principal`))

            if (opc_rev_exterior == 1) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' hells')
                total = total + (rev_exteriores[0].precio)

            } else if (opc_rev_exterior == 2) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' blue magic')
                total = total + (rev_exteriores[1].precio)

            } else if (opc_rev_exterior == 3) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' new tyre')
                total = total + (rev_exteriores[2].precio)

            } else if (opc_rev_exterior == 4) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' dark fluid')
                total = total + (rev_exteriores[3].precio)

            } else if (opc_rev_exterior == 5) {
                alert('Tu producto fue añadido correctamente')
                carrito.push(' ntp')
                total = total + (rev_exteriores[4].precio)

            } else {
                break
            }
        }
    } else if (opc == 5) {
        let prod_eliminado = prompt('Este es tu carrito: ' + carrito + '. Escriba abajo el nombre del producto que desea quitar')
        prod_eliminado = prod_eliminado.toLowerCase()
        if (carrito.includes(prod_eliminado)) {
            alert('Producto eliminado correctamente')
            let indice_prod_eliminar = carrito.indexOf(prod_eliminado)
            carrito.splice(indice_prod_eliminar, 1)
        } else {
            alert('Ese producto no se encuentra en el carrito')
        }

    }
    else if (opc == 0 ('Saliedno del sistema')) {
        let compras = carrito.join(' ')
        alert('Compraste estos productos: ' + compras + ' y el total fue de: ' + total + 'Gracias por confiar...')
        break
    }
}