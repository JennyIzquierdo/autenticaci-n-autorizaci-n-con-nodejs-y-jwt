// Controlador de autenticación que comparA la contraseña ingresada con la contraseña encriptada.

const bcrypt = require('bcryptjs')
const UsuarioEquipo = require('../models/usuarioEquipo')
const { generarJWT } = require('../helpers/jwt')

const loginUsuario = async (req = request, res = response) => {
    const { email, password } = req.body

    try {
        const usuario = await UsuarioEquipo.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos'
            })
        }

        const isMatch = await bcrypt.compare(password, usuario.password)

        if (!isMatch) {
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos'
            })
        }

        // Generar token
        const token = generarJWT(usuario)

        // Generar token o realizar otras acciones de autenticación
        return res.json({
            msg: 'Login exitoso',
            usuario,
            token
        })
    } catch (e) {
        return res.status(500).json({
            msg: e.message
        })
    }
}

module.exports = {loginUsuario}