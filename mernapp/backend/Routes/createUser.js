const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "d39b72c4c2f4e8d12aa248a1e3f7a9d8b87e4622c8f0719f3d28f05bbf12c4f9"


router.post("/createuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 4 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt)

        try {
            const user = await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            });
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })
router.post("/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 4 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try correct email" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try correct password" });
            }
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true,authToken });
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })

module.exports = router;