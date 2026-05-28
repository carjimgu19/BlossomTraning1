// Ejercicio 1: Dado un array de precios, calcular el total
const precios = [29.99, 49.99, 9.99, 199.99]
const total = precios.reduce((sum, precio) => sum + precio, 0)
console.log(`Total: $${total.toFixed(2)}`)

// Ejercicio 2: Dado un array de productos, encontrar los que cuestan mas de $20
const productos = [
  { nombre: 'Camiseta', precio: 29.99 },
  { nombre: 'Sticker', precio: 2.99 },
  { nombre: 'Taza', precio: 12.99 },
  { nombre: 'Sudadera', precio: 59.99 },
]
const caros = productos.filter((p) => p.precio > 20)
console.log('Productos > $20:', caros)

// Ejercicio 3: Convertir nombres a mayusculas
const nombres = ['ana', 'carlos', 'maria']
const mayusculas = nombres.map((n) => n.toUpperCase())
console.log(mayusculas) // ['ANA', 'CARLOS', 'MARIA']