const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');
// get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'});
  }
});
// create a new thought
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(201).json(thought);
  } catch (err) {
    console.error(err);
    res.statusCode(500).json({message: 'Server Error'});
  }
});
// update a thought
router.put('/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body {
    new: true,    
    });
    if (!thought) {
        return res.status(404).json({message: 'Thought not found'});
    }
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'});
  }
});
// delete a thought
router.delete('/:id', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
        return res.status(404).json({message: 'Thought not found'});
    }
    res.json({message: 'Thought deleted'});
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'});
  }
});

module.exports = router;
