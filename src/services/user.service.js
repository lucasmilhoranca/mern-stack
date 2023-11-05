const user = require("../models/User");

const create = (body) => user.create(body);

module.exports = {
    create,
};