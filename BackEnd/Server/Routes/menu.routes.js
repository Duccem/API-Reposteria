const express = require('express');
const router = express.Router();
const menu = require('../Controllers/menu.controller');

router.get('/', menu.getAllMenus);
router.get('/filter/:price',menu.getMenus);
router.post('/create',menu.createMenu);
router.get('/menu/:name',menu.getMenu);
router.put('/:id',menu.editMenu);
router.delete('/:id',menu.deleteMenu);

module.exports = router;
