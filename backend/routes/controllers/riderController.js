import Rider from "../../models/Rider.js";

import bcrypt from 'bcrypt';
import { uploadImage,deleteImage } from "../../utils/cloudinary.js";
import Applicant from "../../models/Applicant.js";
import Application from "../../models/Application.js";
import { application } from "express";



export default class RiderController {

    // Get all users
    static getAllRiders = async (req, res) => {
       // "status","rating","deliveryCount", "latitude","longitude" | applicant|application. "rider_name","vehicle_type"
        try {
            const users = await Rider.findAll({
                attributes:[
                    "status",
                    "rating",
                    "deliveryCount",
                    "latitude",
                    "longitude"
                ],
                include:[{
                    model: Applicant,
                    as: "applicant",

                    include:[{
                        model: Application,
                        as: "application",
                          attributes:[
                    "rider_name",
                    "vehicle_type"
                    ],
                    }]
                }]
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static getRider = async (req, res) => {
        try {
            const users = await Rider.findAll({
                where: {id: req.params.id}
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static getAllApplicants = async (req, res) => {
      // rider_name,vehicle_type, email,phone
        try {
            const users = await Applicant.findAll({
                include:[{
                        model: Application,
                        as: "application",
                          attributes:[
                    "rider_name",
                    "vehicle_type",
                    "email",
                    "phone"
                    ],
                    }]
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // // Get user by ID
    // static getUserById = async (req, res) => {
    //     try {
    //         const user = await User.findByPk(req.params.id);
    //         if (!user) return res.status(404).json({ error: "User not found" });
    //         res.json(user);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }

    // Create user with optional profile image
    static RidersApplication = async (req, res) => {
        try {
            const { rider_name, vehicle_type, email, phone} = req.body;

            const newApplication = await Application.create({
                rider_name, vehicle_type, email, phone
            });

            const newApplicant = await Applicant.create({ // profile
                application_id: newApplication.id,
                status: "pending"
            });

            res.status(201).json({ msg: "applicant submitted successfully", application: newApplication,Applicant: newApplicant });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    static ApplicationResponse = async (req, res) => {
    try {
        const { status, reason } = req.body;
        const applicant = await Applicant.findByPk(req.params.id);

        if (!applicant) {
        return res.status(404).json({ error: "Applicant not found" });
        }

        const updatedApplicant = await applicant.update({ status, reason });

        res.status(200).json({
        msg: "Application response recorded successfully",
        applicant: {
            status: updatedApplicant.status,
            reason: updatedApplicant.reason,
        },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };


    static RidersRegister = async (req, res) => {
        try {
            const {prefered_payment,password} = req.body;
            const applicant_id = req.params.applicant_id


            console.log("password:",password);
            const hashedPassword = await bcrypt.hash(password, 10);

            const newApplication = await Rider.create({
                applicant_id,prefered_payment,password: hashedPassword
            });


            res.status(201).json({ msg: "applicant submitted successfully", application: newApplication});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static RiderProfile = async (req,res) =>{
        try{
            const rider = await Rider.findByPk(req.params.id);
            const applicant = await Applicant.findByPk(rider.applicant_id);
            if (req.file) {
                const cloudUrl = await uploadImage(req.file.buffer, `rider-${rider.id}`);
                await applicant.update({ profile: cloudUrl });
            }
            res.status(201).json({msg:"image changed successfully"});
        }catch(err){
            res.status(500).json({Error:err.message})
        }
    }



    // // update phone number
    // static ChangeNumber = async (req,res)=>{
    //     try {
    //         const {phone} =req.body;
    //         const id = req.params.id;
    //         const [ans] = await User.update(
    //             {phone},
    //             {where: {id : id}}
    //         );
    //         if (ans === 0){
    //             return res.status(404).json({error:"Usre not found || Phone not changed"});
    //         }
    //         res.json({msg:"Phone number changed"})
    //     } catch (err) {
    //         res.status(500).json({Error:err.message})
    //     }
    // }

    static Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the Rider where the nested Application email matches
        const Rider1 = await Rider.findOne({
        include: [{
            model: Applicant,
            as: "applicant",
            include: [{
            model: Application,
            as: "application"
            }]
        }],
        where: {
            '$applicant.application.email$': email
        }
        });

        if (!Rider1) {
        return res.status(401).json({ error: "Invalid email" });
        }

        // Compare the provided password with the stored hashed password
        const match = await bcrypt.compare(password, Rider1.password);
        if (!match) {
        return res.status(401).json({ error: "Invalid password" });
        }

        res.json({
        msg: "Logged in successfully",
        user: {
            id: Rider1.id,
            email: Rider1.applicant.application.email
        }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };


    // delete a user
    static DeleteRider = async (req,res)=>{
        try {
            const id = req.params.id;
            const user = await Rider.findByPk(id);
            if (!user) return res.status(404).json({error:"Rider not found"});

            // delete image on Cloudinary if profile exists
            if (user.profile) {
                await deleteImage(`rider-${id}`);
            }

            await Rider.destroy({where: {id}});
            res.json({msg:"Record deleted successfully"});
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }

    static DeleteApplicant = async (req,res)=>{
        try {
            const applicant = await Applicant.findByPk(req.params.id);
            if (!applicant) return res.status(404).json({error:"Applicant not found"});

            // delete image on Cloudinary if profile exists
            if (applicant.profile) {
                await deleteImage(`rider-${id}`);
            }
            await Applicant.destroy({where: {id: req.params.id}});
            res.json({msg:"Record deleted successfully"});
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }
    static DeleteApplicantion = async (req,res)=>{
        try {

            await Application.destroy({where: {id: req.params.id}});
            res.json({msg:"Record deleted successfully"});
        } catch (err) {
            res.status(500).json({Error:err.message})
        }
    }

}
