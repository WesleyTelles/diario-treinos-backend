const WorkoutEntry = require('../models/WorkoutEntry');

exports.listWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutEntry.find().sort({ happenedAt: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar treinos.', error: err.message });
  }
};

exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await WorkoutEntry.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar treino.', error: err.message });
  }
};

exports.createWorkout = async (req, res) => {
  try {
    const workout = await WorkoutEntry.create(req.body);
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar treino.', error: err.message });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await WorkoutEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!workout) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json(workout);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar treino.', error: err.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await WorkoutEntry.findByIdAndDelete(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json({ message: 'Treino removido com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir treino.', error: err.message });
  }
};
