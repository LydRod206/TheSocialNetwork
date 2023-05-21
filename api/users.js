const express = require('express');
const router = express.Router();

const users = [
{ id: 1, username: 'stanmarsh', email: 'stan.marsh@example.com' },
{ id: 2, username: 'kylebroflovski', email: 'kyle.broflovski@example.com' },
{ id: 3, username: 'ericcartman', email: 'eric.cartman@example.com' },
{ id: 4, username: 'kennymccormick', email: 'kenny.mccormick@example.com' }];

// Get all users
router.get('/', async (req, res) => {
  try {
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
// GET a single user by its _id and populated thought and friend data
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('thoughts').populate('friends');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
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
// add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const friend = await User.findById(friendId);
    if (!friend) {
      return res.status(404).json({ message: 'Friend not found' });
    }
    const isFriendAlreadyAdded = user.friends.includes(friendId);
    if (isFriendAlreadyAdded) {
      return res.status(400).json({ message: 'Friend already added' });
    }
    user.friends.push(friendId);
    await user.save();
    res.json({ message: 'Friend added' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});
// delete a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isFriendInList = user.friends.includes(friendId);
    if (!isFriendInList) {
      return res.status(400).json({ message: 'Friend not found in the user\'s friend list' });
    }
    user.friends = user.friends.filter((friend) => friend !== friendId);
    await user.save();
    res.json({ message: 'Friend removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
