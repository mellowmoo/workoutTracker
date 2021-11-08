const router = require('express').Router();
const { Workout } = require('../models');

// get last workout
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {$addFields: {
            totalDuration: {
                // Add all exercises
                $sum: '$exercises.duration'
            }
        }}
    ])
    .then (data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Add exercise then push it into the exercise array
router.put('/api/workouts/:id', (req, res) => {
    console.log(req.body);
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {
            // return updated object
            new:true,
            runValidators: true
        }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// create workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// get the workouts in range
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {$addFields: {
            totalDuration: {
                // add all the exercises
                $sum: '$exercises.duration'
            }
        }}
    ])
    // sort by id descending
    .sort({_id: -1 })
    // limit last 7 workouts
    .limit(7)
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});