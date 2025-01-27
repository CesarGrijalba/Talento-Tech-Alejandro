import express, { application } from 'express';
import Tarea from '../models/tarea.js'; 

const router = express.Router();

// Ruta para crear una nueva tarea (POST)
router.post('/', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(500).json({ message: error.message });       
    }
});

// Ruta para obtener todas las tareas (GET)
router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para actualizar una tarea específica (PUT)
router.put('/:id', async (req, res) => {
    try {
        const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(tareaActualizada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar una tarea específica (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export default router;