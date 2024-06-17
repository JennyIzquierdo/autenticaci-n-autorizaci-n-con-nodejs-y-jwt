const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const UsuarioEquipoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        required: [true, 'Email requerido'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    },
    rol: {
        type: String,
        required: [true, 'Rol requerido'],
        enum: ['Administrador', 'Docente']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

// Middleware para cifrar la contraseña antes de guardarla en la base de Datos
UsuarioEquipoSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
        next();
    } catch (err) {
        next(err)
    }
});

module.exports = model('UsuarioEquipo', UsuarioEquipoSchema)
