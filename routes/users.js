const express=require('express');
const router=express.Router();
const userController=require('../controllers/users');
router.post('/registre',userController.add);
router.post('/login',userController.login);
router.get("/",userController.getUsers);
router.get("/getUserById/:id",userController.getUserById);
router.delete('/deleteUserById/:id',userController.deleteOneById);
router.put('/updateUserById/:id',userController.updateUserById);
router.get('/getUserByRole/:role',userController.getUserByRole);
module.exports=router;