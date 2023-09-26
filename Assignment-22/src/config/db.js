const mongoose = require('mongoose');
const { databaseUrl } = require('../../secret');

const databaseConnect = async () => {
    try {
        mongoose.connect(databaseUrl)
        console.log("Database are Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    databaseConnect
}
