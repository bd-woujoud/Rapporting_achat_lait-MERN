const IndicateurModel = require("../models/IndicateurModel");
const NoteModel = require("../models/NoteModel");
const note = require("../models/NoteModel");

module.exports = {

    createnote: function (req, res) {
        note.create({
            note: req.body.note,
            observation: req.body.observation,
            isValid: true,
            ferme: req.body.ferme,
            achetteur: req.body.achetteur,
            module: req.body.module,
            indicateurs: req.body.indicateurs

        }, function (err, note) {




            if (err) {
                res.status(500).json({
                    message: 'error adding new note',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'note successfuly added',
                    success: true,
                    data: note
                })
            }
        })
    },
    deletenote: function (req, res) {

        note.deleteOne({ _id: req.params.id }, function (err, note) {

            if (err) {
                res.status(500).json({
                    message: 'error delete note',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'delete successfuly',
                    success: true,
                    data: note
                })
            }

        })

    },
    updatenote: function (req, res) {

        note.updateOne({ _id: req.params.id }, req.body, { new: true }, function (err, note) {

            if (err) {
                res.status(500).json({
                    message: 'error update note',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'update successfuly',
                    success: true,
                    data: note
                })
            }

        })

    },
    getByIdnote: function (req, res) {

        note.findById({ _id: req.params.id }, function (err, note) {

            if (err) {
                res.status(500).json({
                    message: 'error  get note',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'note found',
                    success: true,
                    data: note
                })
            }

        })

    },

    getScoreIndicateurs: async (req, res) => {

        const indicateurs = (await IndicateurModel.find({})).length
        console.log(indicateurs, "indicateurs");
        const notes = await NoteModel.find({ achetteur: req.body.achetteur, ferme: req.body.ferme, module: req.body.module })
        let result = notes.map(a => a.note);
        let somme = result.reduce((a, b) => a + b, 0) * 100
        let score = (somme / indicateurs).toString()
        let scores = score.substring(0, 2)
        console.log(scores, "somme");

        res.status(201).json({
            message: 'note found',
            success: true,
            data: scores
        })

    },



    getAllScoreBymodule: async (req, res) => {

        const indicateurs = (await IndicateurModel.find({})).length
        console.log(indicateurs, "indicateurs");
        const notes = await note.find({ achetteur: req.body.achetteur, ferme: req.body.ferme })
        console.log(notes.length);

        let result = notes.map(({ note, module }) => ({ note, module:module.toString() }));
      
        console.log(result,'result');
        
        let op = result.reduce((out,inp)=>{

            if(out[inp.module]){
              
             out[inp.module].note+= inp.note
            //  var score= ((somme*100/indicateurs).toString()).substring(0, 2)
            
           //  console.log(   out[inp.module].note+= (inp.note)*100,"ttttttttttttttt")
            } else {
              out[inp.module] = inp
            }
            return out
         
          },{})

         var sommes=Object.values(op);

          console.log("trieeeeeeeee",sommes)

    //     let somme = result.reduce((a, b) => a + b, 0) * 100
    //     let score = (somme / indicateurs).toString()
    //     let scores = score.substring(0, 2)
    //  console.log(result, "somme");


        res.status(201).json({
            message: 'note found',
            length: note.length,
            success: true,
            data: op

        })

    },

    getNoteValid: async (req, res) => {

        const notes = await NoteModel.find({ achetteur: req.body.achetteur, module: req.body.module, ferme: req.body.ferme })

        res.status(201).json({
            message: 'note found',
            success: true,
            data: notes
        })

    },


    getNotebyFerme: function (req, res) {
        NoteModel.find({ achetteur: req.body.achetteur }).populate("indicateurs").exec((err, note) => {

            if (err) {
                res.status(500).json({
                    message: 'error  get All note',
                    success: false,
                    errors: err
                })
            } else {
                res.status(201).json({
                    message: 'note found',
                    success: true,
                    data: note
                })
            }

        })
    },



}




