const router = require('express').Router();

const {catModel} = require("../db")

const cats = [];

router.get('/getAll', async(req, res, next) => {
    //res.json(cats)
    try {
        const get = await catModel.find()
        res.status(200).json(get)
    } catch (error) {
        return next({
            status:500, msg:"00ps"
        })
    }
})

router.post('/create', async(req, res, next) => {
    // const newCat = req.body;
    // cats.push(newCat);
    // res.status(201).json(cats[cats.length - 1])

    try {
    const created = await catModel.create(req.body);
    res.status(201).json(created);
    } catch (error) {
        return next({
            status:500, msg:"oops"
        });
    }
})

router.delete('/remove/:id', async(req, res, next) => {
    // const {id} = req.params;
    // const removed = cats.splice(id, 1);
    // res.json(removed);

    try {
        const del = await catModel.deleteOne(req.body)
        res.status(200).json(del)
    } catch (error) {
        return next({
            status:500, msg:"oops"
        });
    }

});

router.patch('/update/:id', async(req, res, next) => {
    const {id} = req.params;
    // const {name} = req.query;

    // if (id >= cats.length){
    //     return next({msg: "ID out of bounds", status: 404})
    // }

    // const catToUpdate = cats[id];
    // catToUpdate.name = name;
    // res.json(catToUpdate);

    try {
        const get = await catModel.findByIdAndUpdate(id, req.query)
        res.status(200).json(get)
    } catch ({message}) {
        return next({
            status:500, msg: message
        });
    }

});

module.exports = router;