import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    completado: {
        type: Boolean,
        default: false
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;