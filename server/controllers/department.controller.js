const departmentCtrl = {};
const Department = require('../models/department')


departmentCtrl.findAll = (req,res) => {
    Department.find((err,department) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!department) return res.status(404).send({message: 'No hay departamentos'})
    res.status(200).send({ department })
    });
}


departmentCtrl.getDepartment=(req, res) => {
    let departmentId= req.params.departmentId
    Department.find(item,(err,department) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición : ${err}`})
        if (!department) return res.status(404).send({message: 'El departamento no existe'})
    res.status(200).send({ department })
        });
};

departmentCtrl.searchDepartments=(req, res) => {
    var query={}
    var city=req.query.city
    var checkin=new Date(req.query.checkin)
    var checkout=new Date(req.query.checkout)
    var guests=req.query.guests
    query.guests=guests

    Department.find({ $and : [query,{$nor:[{$and:[{"occupied.checkin":{$lte:checkin}},{"occupied.checkout":{$gte:checkin }}]},
        {$and:[{"occupied.checkin":{$lte:checkout}},{"occupied.checkout":{$gte: checkout}}]},
        {$and:[{"occupied.checkin":{$lte:checkin}},{"occupied.checkout":{$gte: checkout}}]},
        {$and:[{"occupied.checkin":{$gte:checkin}},{"occupied.checkout":{$lte:checkout }}]}]
        }]},(err,department) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición : ${err}`})
        res.status(200).send({ department })  
        });
};

departmentCtrl.filter=(req, res) =>{
    var query={}
    var query2={}
    var item=req.query.item
    var beds=parseInt(req.query.beds)
    var baths=parseInt(req.query.baths)
    var guests=parseInt(req.query.guests)
    var type=req.query.type
    var price=parseInt(req.query.price)
    var city=req.query.city
    var amenities=req.query.amenities
    
    if (item) {
        query.item=item
    }
    if (beds) {
        query.beds=beds
    }
    if (baths) {
        query.baths=baths
    }
    if (guests) {
        query.guests=guests
    }
    if (type) {
        query.type=type
    }
    if (price) {
        query.price=price
    }
    if (city) {
        query.city=city
    }
    
    if (amenities) {
        query2.amenities=amenities
        Department.find({ $and : [query,{amenities:{$all:query2.amenities}}]},(err,department) => {
            if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        res.status(200).send({ department })
        })
    }
    Department.find(query,(err,department) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        res.status(200).send({department})
    });
};

departmentCtrl.deleteDepartment=(req, res) =>{
    let id= req.query._id
	Department.findById(id,(err,department) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición : ${err}`})
        if (department){
        department.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el departamento: ${err}`})
            res.status(200).send({message: 'El departamento ha sido eliminado'})})
        }
        else
        res.send({message: 'El departamento no existe'});
	});

};

departmentCtrl.deleteAll=(req, res) =>{
Department.deleteMany((err,department) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})

        res.status(200).send({message: 'Todos los departamentos han sido eliminados'})
    })
};

departmentCtrl.addDepartment=(req, res)=>{
    let department = new Department()
    department.item = req.body.item
    department.guests=req.body.guests
    department.beds=req.body.beds
    department.baths=req.body.baths
    department.amenities=req.body.amenities
    department.type=req.body.type
    department.price=req.body.price
    department.city=req.body.city
    department.occupied=req.body.occupied
    department.checkin=req.body.checkin
    department.checkout=req.body.checkout

    department.save((err,departmentStored) => 
    {if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
        res.status(200).send({department: departmentStored})
    });
};
departmentCtrl.updateDepartment=(req, res)=>{
    let departmentId = req.params.departmentId
    let update = req.body
    
    Department.findByIdAndUpdate(departmentId, update, (err,departmentUpdated) => {
        if (err) res.status(500).send({message: `Error al actualzar: ${err}`})
    res.status(200).send({department: departmentUpdated})
    });
};
departmentCtrl.updateDepartments=(req, res)=>{
    var query=req.query
    Department.updateMany(query, req.body, (err,departmentUpdated) => {
        if (err) res.status(500).send({message: `Error al actualzar: ${err}`})
    res.status(200).send({department: departmentUpdated})
    });
};
departmentCtrl.updateOccupied=(req, res)=>{
    var query=req.query
    Department.updateMany(query, {"$push":req.body}, (err,departmentUpdated) => {
        if (err) res.status(500).send({message: `Error al actualzar: ${err}`})
    res.status(200).send({department: departmentUpdated})
    });
};

departmentCtrl.removeOccupied=(req,res)=>{
    var query=req.query
    Department.updateMany(query, {"$pull":req.body}, (err,departmentUpdated) => {
        if (err) res.status(500).send({message: `Error al actualzar: ${err}`})
    res.status(200).send({department: departmentUpdated})
    });
}

module.exports = departmentCtrl;

