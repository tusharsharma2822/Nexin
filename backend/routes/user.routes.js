import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validator';
import * as authMiddleware from "../middleware/auth.middleware.js"

const router = Router();

router.post('/register',
    body('email').isEmail().withMessage("Email must be atleast 3 characters long"),
    body('password').isLength({min:3}).withMessage("Password must be atleast 3 Characters Long"),
    userController.createUserController
)

router.post('/login',
    body('email').isEmail().withMessage("Email must be atleast 3 characters long"),
    body('password').isLength({min:3}).withMessage("Password must be atleast 3 Characters Long"),
    userController.userLoginController
)

router.get('/profile',
    authMiddleware.authUser,
    userController.profileController
)

router.get('/logout',
    authMiddleware.authUser,
    userController.logoutController
)

router.get('/all',
    authMiddleware.authUser,
    userController.getAllUsersControllers
)

export default router;