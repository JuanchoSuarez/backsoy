import { User } from "../models/Users.js";

//get all users
export const getUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
}

//create new user
export const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    return res.json(newUser);
}

//update user by id
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    try {
    await user.update(req.body);
    } catch (error) {
    console.log(error);
}
    return res.json(user);
};

//delete user by id
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.sendStatus(204);
}
