const express = require('express');
const router = express.Router();
const departmentCtrl = require('../controllers/department.controller.js');
router.get('/', departmentCtrl.findAll);
router.delete('/',departmentCtrl.deleteAll);
router.post('/',departmentCtrl.addDepartment);
router.get('/:item',departmentCtrl.getDepartment);
router.get('/search/',departmentCtrl.searchDepartments);
router.get('/filter/',departmentCtrl.filter);
router.put('/deleteDepartment/',departmentCtrl.deleteDepartment);
router.put('/:departmentId',departmentCtrl.updateDepartment);
router.put('/update/',departmentCtrl.updateDepartments);
router.put('/updateOccupied/',departmentCtrl.updateOccupied);

module.exports = router;