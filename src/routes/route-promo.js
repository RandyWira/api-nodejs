const router = require('express').Router();
const { promo } = require('../controllers')

router.get('/promo', promo.getPromo);
router.get('/promo/:id', promo.getPromoByID);
router.post('/promo/add', promo.addPromo);
router.post('/promo/edit', promo.editPromo);
router.post('/promo/delete/', promo.deletePromo);

module.exports = router;