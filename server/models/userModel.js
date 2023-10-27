import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is a required field"]
        },
        email: {
            type: String,
            required: [true, "Email is a required field"],
            validate: [validator.isEmail, "Please enter email in correct format"]
        },
        password: {
            type: String,
            required: [true, "Password is a required field"],
            minLength: [6, "Password must be atleast 6 characters long"],
            select: false
        },
        photo: {
            public_id: {
                type: String
            },
            secure_url: {
                type: String
            }
        },
        role: {
            type: String,
            default: "user"
        },
        forgetPasswordToken: {
            type: String
        },
        forgetPasswordExpiry: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.isPasswordValidated = async function (userPassword) {
    return bcrypt.compare(userPassword, this.password);
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRESIN
    });
}

userSchema.methods.getForgetPasswordToken = function () {
    const forgetPasswordToken = crypto.randomBytes(20).toString("hex");
    this.forgetPasswordToken = crypto.createHash("sha256").update(forgetPasswordToken).digest("hex");
    this.forgetPasswordExpiry = Date.now() + 10 * 60 * 1000;
    return forgetPasswordToken;
}

const User = mongoose.model("User", userSchema);
export default User; 