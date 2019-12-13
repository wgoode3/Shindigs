const mongoose = require('mongoose');
const Party = mongoose.model('Party');

class PartyController {
    getAll(req, res) {
        Party.find({}).sort({"theme": -1, 'when': 1}).exec()
            .then(all_partys => res.json(all_partys))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        Party.findOne({_id: req.params._id})
            .then(one_party => res.json(one_party))
            .catch(err => res.json(err));
    }

    create(req, res) {
        let party = new Party(req.body);
        party.save()
            .then(() => res.json({'msg': 'party time!'}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        Party.remove({_id: req.params._id})
            .then(() => res.json({'msg': 'parties over :('}))
            .catch(err => res.json(err));
    }

    rsvp(req, res) {
        Party.findOneAndUpdate({_id: req.params._id}, {$push : {participants: req.body}})
            .then(() => res.json({'msg': 'party time!'}))
            .catch(err => res.json(err));
    }

}

module.exports = new PartyController();