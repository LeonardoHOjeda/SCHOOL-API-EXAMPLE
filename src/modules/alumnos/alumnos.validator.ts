import { bodyValidator } from '@src/middlewares/validator'
import { check } from 'express-validator';

export const storeValidators = [bodyValidator];

export const updateValidators = [bodyValidator];