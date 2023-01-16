import express,{Router} from 'express';
import {addUser} from '../controller/user-controller.js';
const router=express.Router();


router.post('/adduser',addUser);
export default router;