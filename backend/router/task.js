const router = require("express").Router();
const pool = require('../db/pool');
const express = require('express');
const moment = require('moment');
const checkInput = require('../check/checkInput');
var cors = require('cors');


router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// use it before all route definitions
//router.use(cors({origin: `http://localhost:${process.env.PORT_FRONT}`}));
router.use(cors({origin: `http://localhost:3001`}));

router.use("/", checkInput);

/** GET Request for /task (search) */
router.get("/", (req, res) => {
    let keyword = "%"; //req.keyword === null ? "%" : `%${keyword}%`
    if(req.query.keyword) {
        keyword = `%${req.query.keyword}%`;
    }
    const text = 'SELECT * FROM task WHERE description like $1 order by _id';
    const values = [ keyword ];
    pool.query(text, values, function(error, results) {
        if (error) {
            //throw error
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }

        results.rows.map((row) => {
            row.duedate = row.duedate === null ? "" : moment(row.duedate).format("DD/MM/YYYY");
        });
        // when success, return json
        res.status(200).json(results.rows);
    });
});

/** POST Request for /task (insert) */
router.post("/", (req, res) => {
    const inputTask = req.body;
    const text = 'INSERT INTO task(description, duedate, done, hide) VALUES($1, $2, false, false) RETURNING *';
    const values = [ inputTask.description, inputTask.duedate ];
    pool.query(text, values, function(error, result) {
        if (error) {
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }

        // when success, return json
        res.status(200).json({
            item: result.rows[0],
            message: "insert success"
        });
    });
});

/** PUT Request for /task/[id] (update) */
router.put("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    const inputTask = req.body;
    const text = 'UPDATE task SET description = $2, duedate = $3 WHERE _id = $1 RETURNING *';
    const values = [ taskId, inputTask.description, inputTask.duedate ];
    pool.query(text, values, function(error, result) {
        if (error) {
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }

        // when success, return json
        res.status(200).json({
            item: result.rows[0],
            message: "update success"
        });
    });
});

/** DELETE Request for /task/[id] (delete) */
router.delete("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    const text = 'DELETE FROM task WHERE _id = $1 RETURNING *';
    const values = [ taskId ];
    pool.query(text, values, function(error, result) {
        if (error) {
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }

        // when success, return json
        res.status(200).json({
            id: result.rows[0]._id,
            message: "delete success"
        });
    });
});

/** PATCH Request for /task/[id] (update partial) */
router.patch("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    const inputTask = req.body;
    const text = 'UPDATE task SET done = $2, hide = $3 WHERE _id = $1 RETURNING *';
    const values = [ taskId, inputTask.done, inputTask.hide ];
    pool.query(text, values, function(error, result) {
        if (error) {
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }

        // when success, return json
        res.status(200).json({
            item: result.rows[0],
            message: "partial update success"
        });
    });
});

module.exports = router;