const jwt = require('jsonwebtoken')

const generarJWT = (usuarioEquipo) => {
    const payload = { 
        _id: usuarioEquipo._id, 
        nombre: usuarioEquipo.nombre, 
        email: usuarioEquipo.email, 
        rol: usuarioEquipo.rol, 
        contraseña: usuarioEquipo.contraseña }
    const token = jwt.sign(payload, '123456', { expiresIn: '2h' })
    return token
}

module.exports = {
    generarJWT
}