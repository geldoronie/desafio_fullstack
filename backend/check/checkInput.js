const router = require("express").Router();
const { check, checkSchema, validationResult } = require('express-validator');
const moment = require('moment');

checkSchema({
    task_id: {
        in: ['params'],
        isInt: true,
        exists: true
    },
    description: {
        in: ['body'],
        isLength: {
            options: { min: 1, max: 100 }
        },
    },
    duedate: {
        in: ['body'],
        isLength: {
            options: { min: 10, max: 10 }
        },
        exists: true,
        custom: true
    },
    done: {
        in: ['body'],
        isBoolean: true
    },
    hide: {
        in: ['body'],
        isBoolean: true
    }
});

router.post('/', [
    check('description')
        .optional({nullable: false})
        .isLength({ min: 1, max: 100 }),
    check('duedate')
        .optional({nullable: false})
        .isLength({ min: 10, max: 10 })
        .custom(value => {
            return moment(value, "DD/MM/YYYY").isValid();
        }),
], (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // Validation error
        return res.status(422).json({ errors: errors.array() });
    }
    /** No error */ 
    next();
});

router.put('/:task_id', [
    check('task_id')
        .optional({nullable: false})
        .isInt(),
    check('description')
        .optional({nullable: false})
        .isLength({ min: 1, max: 100 }),
    check('duedate')
        .optional({nullable: false})
        .isLength({ min: 10, max: 10 })
        .custom(value => {
            return moment(value, "DD/MM/YYYY").isValid();
        }),
], function(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // Validation error
        return res.status(422).json({ errors: errors.array() });
    }

    const taskId = `${req.params.task_id}`;
    
    next();
});

router.delete('/:task_id', [
    check('task_id')
        .isInt()
], function (req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // Validation error
        return res.status(422).json({ errors: errors.array() });
    }

    const taskId = `${req.params.task_id}`;

    next();
});

router.patch('/:task_id', [
    check('task_id')
        .optional({nullable: false})
        .isInt(),
    check('done')
        .isBoolean(),
    check('hide')
        .isBoolean(),
], function (req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // Validation error
        return res.status(422).json({ errors: errors.array() });
    }

    const taskId = `${req.params.task_id}`;
    const done = `${req.body.done}`;
    const hide = `${req.body.hide}`;

    next();
});

module.exports = router;