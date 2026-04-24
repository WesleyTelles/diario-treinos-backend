const mongoose = require('mongoose');

const workoutEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      enum: ['Musculação', 'Cardio', 'HIIT', 'Funcional', 'Crossfit', 'Yoga', 'Natação', 'Outro']
    },
    duration: {
      type: Number,
      required: true,
      min: 1
    },
    intensity: {
      type: String,
      required: true,
      enum: ['Leve', 'Moderada', 'Intensa', 'Máxima']
    },
    exercises: {
      type: String,
      trim: true,
      default: ''
    },
    notes: {
      type: String,
      trim: true,
      default: ''
    },
    happenedAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('WorkoutEntry', workoutEntrySchema);
