const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the Schema
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true,
            min: 0
        },
        // 3 categories for resistance type workouts only
        weight: {
            type: Number,
            min: 0
        },
        reps: {
            type: Number,
            min: 0
        },
        sets: {
            type: Number,
            min: 0
        },
        // category for cardio only
        distance: {
            type: Number,
            min: 0
        }

    }]
});

// connect the schema to the workout model
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;