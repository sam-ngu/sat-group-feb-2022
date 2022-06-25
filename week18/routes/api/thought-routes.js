const Thought = require('../../models/Thought');
const User = require('../../models/User');

const router = require('express').Router();


// CRUD

router.get('/api/thoughts', (req, res) => {
  // get all thoughts

});

router.get('/api/thoughts/:id', (req, res) => {
  // get thought by id
});


/**
 * req.body:
 * {
 *  text: "My thoughtsss",
 *  user_id: "abc12345",
 * 
 * }
 * 
 */

router.post('/api/thoughts', (req, res) => {

  // create thought
  Thought.create({
    text: req.body.text,
  })
  .then((thought) => {
    User.findByIdAndUpdate(req.body.user_id, {
      $push: {
        thoughts: thought._id
      }
    }, {new: true})
    .then((updated) => {

    })

    // demo to add thought reaction
    Thought.findByIdAndUpdate(req.body.thought_id, {
      $push: {
        reactions: {
          body: req.body.body
        }
      }
    })

  })
});


router.put('/api/thoughts/:id', (req, res) => {
  // update thought
});

router.delete('/api/thoughts/:id', (req, res) => {
  // delete thought


});



module.exports = router;