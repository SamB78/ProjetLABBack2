const express = require('express');
const router = express.Router();

const PersonnelCtrl = require('../controllers/personnel');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, PersonnelCtrl.createPersonnel);
router.put('/:id', auth, multer, PersonnelCtrl.modifyPersonnel);
router.get('/:id', auth, PersonnelCtrl.getOnePersonnel);
router.delete('/:id', auth, PersonnelCtrl.deletePersonnel );
router.get('/', auth, PersonnelCtrl.getAllPersonnel );

module.exports = router;