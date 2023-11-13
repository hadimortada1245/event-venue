
const express=require('express');
const router=express.Router();
const reservationsController=require('../controllers/reservations');
router.post('/add',reservationsController.add);
router.get("/",reservationsController.getReservations);
router.get("/getAllByUserId/:id",reservationsController.getAllByUserId);
router.get("/getAllByVenueId/:id",reservationsController.getAllByVenueId);
router.delete('/deleteById/:id',reservationsController.deleteReservationById);
router.put('/update/:id',reservationsController.updateReservation);
module.exports=router;