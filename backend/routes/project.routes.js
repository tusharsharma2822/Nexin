import { Router } from 'express';
import * as projectController from '../controllers/project.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';
import { body } from 'express-validator';

const router = Router();

router.post('/create', 
    authMiddleware.authUser,
    body('name').isString().withMessage('Name is required'),
    projectController.createProjectController
);

router.get('/all',
    authMiddleware.authUser,
    projectController.getAllProject
)

router.put('/add-user',
    authMiddleware.authUser,
    body('projectId').isString().withMessage('Project ID is required'),
    body('users').isArray({ min: 1 }).withMessage('Users must be an array with at least one user').bail()
        .custom((users) => users.every(user => typeof user === 'string')).withMessage('Each user must be a string'),
    projectController.addUserToProject
)

export default router;