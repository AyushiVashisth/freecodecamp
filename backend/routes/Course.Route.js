const express = require("express");
const CourseModel = require("../models/Course.Model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { course, duration, icon_id } = req.body;
    const existingCourse = await CourseModel.findOne({ course });

    if (existingCourse) {
      return res.status(400).json({ error: "Course already exists" });
    }

    const post = new CourseModel({ course, duration, icon_id });
    await post.save();

    return res.status(200).json({ message: "Course Successfully created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
