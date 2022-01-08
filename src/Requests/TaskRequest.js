import { check } from 'express-validator';


export const generateValidators =  [
    check('title')
    .not()
    .isEmpty()
    .trim()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!'),

    check('description')
    .not()
    .isEmpty()
    .trim()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!'),
];