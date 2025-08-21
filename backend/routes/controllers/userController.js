import User from "../../models/User.js";

import bcrypt from 'bcrypt';
import { uploadImage,deleteImage } from "../../utils/cloudinary.js";



export default class UserController {

    // Get all users
    static getAllUsers = async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get user by ID
    static getUserById = async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Create user with optional profile image
    static createUser = async (req, res) => {
        try {
            const { name, email, phone, password, latitude, longitude } = req.body;

            // Hash the password before storing
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user first
            const newUser = await User.create({
                name, email, phone, password: hashedPassword, latitude, longitude
            });

            // Handle profile image if uploaded
            if (req.file) {

                const cloudUrl = await uploadImage(req.file.buffer, `user-${newUser.id}`);
                await newUser.update({ profile: cloudUrl });
            }

            res.status(201).json({ msg: "User created successfully", user: newUser });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // update phone number
    static ChangeNumber = async (req,res)=>{
        try {
            const {phone} =req.body;
            const id = req.params.id;
            const [ans] = await User.update(
                {phone},
                {where: {id : id}}
            );
            if (ans === 0){
                return res.status(404).json({error:"Usre not found || Phone not changed"});
            }
            res.json({msg:"Phone number changed"})
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }

    // delete a user
    static DeleteUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({error:"User not found"});

        // delete image on Cloudinary if profile exists
        if (user.profile) {
            await deleteImage(`user-${id}`);
        }

        await User.destroy({where: {id}});
        res.json({msg:"Record deleted successfully"});
    } catch (err) {
        res.status(500).json({Error:err.message})
    }
    }

}
