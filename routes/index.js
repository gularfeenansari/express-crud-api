const router = require('express').Router();  // importing express router
const db = require('../database/databaseConnection') // importing database connection from database folder


//Get method to get data
router.get('/student',async (req,res)=>{
    await db.query('select * from student').then((data)=>{
        res.send(data[0]);
    }).catch((error)=>{
        console.log(error);
    })
})

//Get method to get data with specific id
router.get('/student/:id',async (req,res)=>{
    await db.query('select * from student where id=?;',[req.params.id]).then((data)=>{
        res.send(data[0]);
    }).catch((error)=>{
        console.log(error);
    })
})


//Post method to to create new entry
router.post('/student/create',async(req,res)=>{
    let {firstname, lastname, standard, dob, gender,address} = req.body;

    await db.query("insert into student(firstName,lastName,standard,dob,gender,address) values(?,?,?,?,?,?);",[firstname,lastname,standard,dob,gender,address]).then((data)=>{
        res.send(req.body);
    }).catch((error)=>{
        res.send(error);
    })
})

//Patch method to update existing record
router.patch('/student/update/:id',async(req,res)=>{
    let {firstname, lastname, standard,address} = req.body;

    await db.query("update student set firstname = ?,lastname = ?, standard=?, address=?",[firstname,lastname,standard,address]).then((data)=>{
        res.send("Updated");
    }).catch((error)=>{
        res.send(error);
    })
})


// Delete method to delete existing record with an id
router.delete('/student/delete/:id',async(req,res)=>{

    await db.query("delete from student where id = ?;",[req.params.id]).then((data)=>{
        res.send('Record deleted');
    }).catch((error)=>{
        res.send(error);
    })
})


module.exports = router //exporting router
