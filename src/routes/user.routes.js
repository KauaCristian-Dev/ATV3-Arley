const express = require("express")

const {listUsers, createUser, deleteUser} = require("../database/users")

const router = express.Router();

//curl -X get http://localhost:3003/users
router.get("/", async function(_req,res){
    const users = await listUsers();
    res.status(200).json(users)
})

//curl -X POST http://localhost:3003/users -H "Content-type: application/json" -d "{\"name\":\"Thiago\",:\"tiago@teste.com\"}"
router.post("/", async function(req,res){
    const{name, email} = req.body;
    const users = await createUser(name, email);
    res.status(201).json(users);
})

// http://localhost:3003/users/2
// curl -X DELETE http://localhost:3003/users/3
router.delete("/:id", async function(req,res){
    const id = req.params.id;
    const users = await deleteUser(id);
    if(user.message){
        res.status(404).json(users);
    } else {
    res.status(200).json(users);
    };
});
 
module.exports = router;