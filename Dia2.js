/// Ejercicio 1
// La misma operacion, pero legible como codigo sincrono
async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await response.json()
  console.log("Dia 2, Ejercicio 1: Usuario:"+id+":"+user.name)
  return user
}

// Llamar la funcion
getUser(1)
getUser(2)

// Ejercicio 2: Manejo de errores
// Probar con ID valido e invalido

async function getUserSafe(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }

    const user = await response.json()
    console.log('Usuario encontrado:', user.name)
    return user
  } catch (error) {
    console.error('Error al obtener usuario: ID:' + id + ' Mensaje Error:', error.message)
    return null
  }
}

// Probar con ID valido e invalido
await getUserSafe(1)   // Usuario encontrado: Leanne Graham
await getUserSafe(999) // Error o usuario no encontrado


// Ejercicio 3: GET y POST con async/await

// GET - Obtener datos
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log(`Se encontraron ${users.length} usuarios`)
  return users
}

// POST - Enviar datos
async function createUser(userData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  const newUser = await response.json()
  console.log('Usuario creado:', newUser)
  return newUser
}