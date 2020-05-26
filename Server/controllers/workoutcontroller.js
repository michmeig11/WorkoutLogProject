const router = require('express').Router()
// ^const express = require('express');
// ^const router = express.Router();

const WorkOutLog = require('../db').import('../models/workoutlog');
// Get
router.get('/', (req, res) => {
    WorkOutLog.findAll()
        .then(workoutlog => res.status(200).json({
            workoutlog: workoutlog
        }))
        .catch(err => res.status(500).json({
            error:err
        }))
})

// post

router.post('/', (req, res) => {
    const WOLFromRequest = {
        Owner_id: req.body.Owner_id,
        Description: req.body.Description,
        Definition: req.body.Definition,
        Result: req.body.Result,
        
    }

    
    WorkOutLog.create(WOLFromRequest)
        .then(workoutlog => res.status(200).json({
            workoutlog: workoutlog
        }))
        .catch(err => res.status(500).json({
            error: err
        }))

})

router.get('/:id', (req, res) => {
    WorkOutLog.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(workoutlog => res.status(200).json({
           workoutlog: workoutlog
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})
//update
router.put('/:id', (req, res) => {
    WorkOutLog.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(workoutlog => res.status(200).json({
            workoutlog: workoutlog
        }))
        .catch (err => res.status(500).json({
            error: err
        }))
})


//delete

router.delete('/:id', (req,res) => {
    WorkOutLog.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(workoutlog => res.status(200).json ({
        workoutlog: workoutlog
    }))
    .catch (err => res.status(500).json({
        error: err
    }))
})

module.exports = router;