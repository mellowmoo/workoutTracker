// Create routes for public files
const router = require('express').Router();
const path = require('path');

// homepage route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public.index.html'));
})

// stats route
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

// new addition route
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

module.exports = router;