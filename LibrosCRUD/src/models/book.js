import mongoose from 'mongoose';

const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    fechaPublicacion: {
        type: Date,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});

const Libro = mongoose.model('Libro', libroSchema);

export default Libro;