const user = require("../models/User");

const createService = (body) => user.create(body);

const findAllService = () => user.find();

const findByIdService = (id) => user.findById(id);

module.exports = {
    createService,
    findAllService,
    findByIdService
};