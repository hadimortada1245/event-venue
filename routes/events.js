
const express=require('express');
const router=express.Router();
const eventsController=require('../controllers/events');
router.post('/add',eventsController.add);
router.get("/",eventsController.getAll);
router.get("/getOneById/:id",eventsController.getOneById);
router.delete('/deleteById/:id',eventsController.deleteOne);
router.put('/update/:id',eventsController.update);
module.exports=router;