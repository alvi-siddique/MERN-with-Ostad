const mongoose = require('mongoose');

const deleteUserAssociations = async function (next) {
    try {
        await mongoose.model('CartItems').deleteMany({ user: this._id });

        await mongoose.model('Orders').deleteMany({ user: this._id });

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = deleteUserAssociations;
