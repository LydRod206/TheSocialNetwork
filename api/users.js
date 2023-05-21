const express = require('express');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      user.name = name;
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      users.splice(userIndex, 1);
      res.json({ message: 'User deleted' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
