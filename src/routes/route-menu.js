const router = require('express').Router();
const { menu } = require('../controllers')

router.get('/menu', menu.getDataMenu);
router.get('/menu/:id', menu.getDataMenuByID);
router.post('/menu/add', menu.addDataMenu);
router.post('/menu/edit', menu.editDataMenu);
router.post('/menu/delete/', menu.deleteDataMenu);

module.exports = router;