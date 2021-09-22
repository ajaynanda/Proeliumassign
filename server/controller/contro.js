var Userdb = require("../model/models")

//create and save new user
exports.create=(req,res)=>{
if(!req.body){
    res.status(400).send({message:"Content cannot be empty"})
    return;
}

const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    role:req.body.role,
    department:req.body.department
})
//save user in datatbase

 user
 .save(user)
 .then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "some error occured"})
})
}

//reading  user data

exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found the userwith id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"error occured"})
        })
    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
        res.status(500).send({message:err.message || "Some error while reading user information"})
        })
        }
    }



//update user

exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to updated cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:"cannot update the user with ${id}"})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Found error on updating the user"})
})
}
//delete user

exports.delete=(req,res)=>{
        const id =req.params.id
        Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`cannot delete with id ${id} Maybe wrong id`})
            }else{
                res.send({message:"user id was deleted"})
            }
        })

.catch(err=>{
res.status(500).send({message:"could not delete user with id"+id})
})
}