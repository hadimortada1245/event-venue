const express=require('express');
const router=express.Router();
const venuesController=require('../controllers/venues');
router.post('/add',venuesController.add);
router.get("/",venuesController.getAll);
router.get("/getOneById/:id",venuesController.getOneById);
router.delete('/deleteById/:id',venuesController.deleteOne);
router.put('/update/:id',venuesController.update);
module.exports=router;