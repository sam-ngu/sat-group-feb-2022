const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


const dbPath = path.join(__dirname, '..', 'db', 'db.json');


function getNotes(){
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  
}



router.get('/api/notes', (req, res) => {
  

  res.json(getNotes())


});







module.exports = router;