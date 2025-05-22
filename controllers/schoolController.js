const db = require("../db");
require('dotenv').config();
const { calculateDistance } = require("../utils/distance");

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  try {
    await db.execute(
      `INSERT INTO ${process.env.DB_TABLE} (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`,
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: "School added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude: userLat, longitude: userLng } = req.query;

  if (!userLat || !userLng) {
    return res.status(400).json({ error: "Latitude and Longitude are required" });
  }

  try {
    const [schools] = await db.execute(`SELECT * FROM ${process.env.DB_TABLE}`);

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          parseFloat(userLat),
          parseFloat(userLng),
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
