import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user1 = await User.findOne({ email });
    if (user1) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully",user:{
      _id: createdUser._id,
      fullname: createdUser.fullname,
      email: createdUser.email,
    } });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user2 = await User.findOne({ email });

    // User nahi mila
    if (!user2) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Password check
    const isMatch = await bcrypt.compare(
      password,
      user2.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Login successful
    return res.status(200).json({
      message: "Login successful",
      user2: {
        _id: user2._id,
        fullname: user2.fullname,
        email: user2.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
