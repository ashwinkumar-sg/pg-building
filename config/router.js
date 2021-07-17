const express = require('express')
const router = express.Router()
const buildingController = require('../app/controllers/buildinControllers')
const roomsController = require('../app/controllers/roomsController')
const tenantControllers = require('../app/controllers/tenantControllers')

router.get('/buildings',buildingController.list)
router.post('/buildings',buildingController.create)
router.get('/buildings/:id',buildingController.show)
router.put('/buildings/:id',buildingController.update)
router.delete('/buildings',buildingController.destroy)

router.get('/rooms',roomsController.list)
router.post('/rooms',roomsController.create)
router.get('/rooms/:id',roomsController.show)
router.put('/rooms/:id',roomsController.update)
router.delete('/rooms/:id',roomsController.destroy)


router.get('/tenants',tenantControllers.list)
router.post('/tenants',tenantControllers.create)
router.get('/tenants/:id',tenantControllers.show)
router.put('/tenants/:id',tenantControllers.update)
router.delete('/tenants',tenantControllers.destroy)


module.exports = router
