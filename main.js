
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

const ceras = [ "Ilusion wax", "Extrem detail", "Cherry quick", "Lava crush" ]

const rev_interiores = [ "Uva shake", "Fruty cream", "Mango go", "Creme look", "Holy gloss" ]

const rev_exteriores = [ "Hells", "Blue magic", "New tyre", "Dark fluid", "Ntp" ]

const limpiadores =  [ "Bug remover", "water spot", "Clean vision", "Inferno gel", "Alcaline wheels" ]

let carrito = []

let total = 0


while (true) {

    let opc = Number(prompt('Ingrese el numero del producto que quiera comprar: \n\ 1- Shampoo \n\ 2- Cera rapida \n\ 3- Revividor interior \n\ 4- Revividor exterior \n\ 5- Limpiadores'))

    if (opc == 1) {

        while (true) {
            let opc_shampoo = Number(prompt(`Seleccione que shampoo desea añadir al carrito: \n\ 1- Elite $6.900 \n\ 2- Banana $5.400 \n\ 3- Wax $6.000 \n\ 4- Hyper black $7.200`))

            if (opc_shampoo == 1) {
                alert('Tu producto fue añadido correctamente')
                carrito.push('Elite')
                total = total + (shampoos[0].precio)

            } else {
                alert('Volviendo al menu princiapl')
                break
            }
        }
    }
    if (confirm('Aceptar para salir del sistema')) {
        break
    }
}

function añadido() {
    alert('Tu producto fue añadido correctamente...')
    carrito.push('')
}