const Personnel = require('../models/Personnel.js');

exports.createPersonnel2 = (req, res, next) => {
    const personnelObject = JSON.parse(req.body.personnel);
    delete personnelObject._id;
    const personnel = new Personnel({
      ...personnelObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    personnel.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };


  exports.createPersonnel = (req, res, next) => {
    delete req._id;
    const personnel = new Personnel({
      ...req.body,
    });
    personnel.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.modifyPersonnel = (req,res,next)=>{
    const personnelObject = req.file ?
    {
        ...JSON.parse(req.body.personnel),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
     } : {...req.body};
    Personnel.updateOne({_id: req.params.id}, {...personnelObject, _id:req.params.id})
    .then(()=> res.status(200).json({message: 'Objet modifié!'}))
    .catch(error => res.status(400).json({error}));
}


exports.getOnePersonnel = (req, res, next)=>{
    Personnel.findOne({_id: req.params.id})
    .then(personnel=> res.status(200).json(personnel))
    .catch(error=>res.status(404).json({error}));
}

exports.deletePersonnel = (req, res, next)=>{
    Personnel.deleteOne({_id: req.params.id})
    .then(()=> res.status(200).json({message: 'Objet supprimé !'}))
    .catch(error=>res.status(404).json({error}));
}

exports.getAllPersonnel = (req, res, next) => {
    Personnel.find()
    .then(personnels => res.status(200).json(personnels))
    .catch(error => res.status(400).json({error}));
    }
