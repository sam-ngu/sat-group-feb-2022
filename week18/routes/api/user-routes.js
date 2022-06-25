const User = require('../../models/User');

const router = require('express').Router();


// CRUD

router.get('/api/users', (req, res) => {
  // get all users
  User.find({})
    .populate('thoughts')
    .populate('friends')
    .then((users) => {
      res.json(users);
    });
});

router.get('/api/users/:id', (req, res) => {
  // get user by id
});


router.post('/api/users', (req, res) => {
  // create user
});


router.put('/api/users/:id', (req, res) => {
  // update user
});

router.delete('/api/users/:id', (req, res) => {
  // delete user


});



module.exports = router;