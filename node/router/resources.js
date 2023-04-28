const express = require('express');
const router = express.Router()
const { staticList, recommond, slide, tabTile,order } = require('../router_info/resource_info');
router.get('/resize', staticList)
router.get('/wrap', recommond)
router.get('/exposal', slide)
router.get('/ptable', tabTile)
router.get('/order',order)
module.exports = router