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
        isLength: {
            options: { min: 10, max: 10 }
        },
        exists: true,
        custom: {
            
        }
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
            console.log("value " + value);
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
    console.log("update taskId " + taskId);

    
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
    console.log("delete taskId " + taskId);

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
    console.log("patch taskId " + taskId);
    console.log("done " + done);
    console.log("hide " + hide);

    next();
});

module.exports = router;