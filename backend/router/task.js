const router = require("express").Router();
const pool = require('../db/pool');
const express = require('express');
const moment = require('moment');
const checkInput = require('../check/checkInput');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use("/", checkInput);

router.get("/", (req, res) => {
    const text = 'SELECT * FROM task order by _id';
    pool.query(text, function(error, results) {
        if (error) {
            //throw error
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                error: error,
            });
            return;
        }
        console.log(results);

        results.rows.map((row) => {
            row.duedate = row.duedate === null ? "" : moment(row.duedate).format("DD/MM/YYYY");
        });
        // when success, return json
        res.status(200).json(results.rows);
    });
});

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
            id: result.rows[0].id
        });
    });
});

router.put("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    res.status(200).json({
        task_id: taskId,
        message: "update success"
    })
});

router.delete("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    res.status(200).json({
        task_id: taskId,
        message: "delete success"
    })
});

router.patch("/:task_id", (req, res) => {
    const taskId = `${req.params.task_id}`;
    res.status(200).json({
        task_id: taskId,
        message: "success"
    })
});

module.exports = router;