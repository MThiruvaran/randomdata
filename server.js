const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomTemperature = (min, max) => {
  let temperature = Math.random() * (max - min) + min;
  return temperature.toFixed(2);
};

const medDataNormal = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(80, 120),
  respiration: randomNumber(12, 16),
  glucose: randomNumber(72, 140),
  heartRate: randomNumber(60, 100),
  oxygenSaturation: randomNumber(95, 100),
  cholesterol: randomNumber(125, 200),
};

const medDataCHD = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(12, 16),
  glucose: randomNumber(72, 140),
  heartRate: randomNumber(45, 60),
  oxygenSaturation: randomNumber(95, 100),
  cholesterol: randomNumber(200, 270),
};

const medDataBronchiectasis = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(40, 60),
  glucose: randomNumber(72, 140),
  heartRate: randomNumber(60, 100),
  oxygenSaturation: randomNumber(95, 100),
  cholesterol: randomNumber(125, 200),
};

const medDataHypoxemia = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(12, 16),
  glucose: randomNumber(72, 140),
  heartRate: randomNumber(60, 100),
  oxygenSaturation: randomNumber(50, 96),
  cholesterol: randomNumber(125, 200),
};

const medDataDiabetes = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(12, 16),
  glucose: randomNumber(200, 600),
  heartRate: randomNumber(60, 100),
  oxygenSaturation: randomNumber(95, 100),
  cholesterol: randomNumber(125, 200),
};

const medDataPreDiabetes = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(12, 16),
  glucose: randomNumber(140, 199),
  heartRate: randomNumber(60, 100),
  oxygenSaturation: randomNumber(95, 100),
  cholesterol: randomNumber(125, 200),
};

const medDataModerateAcuteAsthma = {
  bodyTemperature: randomTemperature(35.5, 37.5),
  bloodPressure: randomNumber(90, 120),
  respiration: randomNumber(20, 30),
  glucose: randomNumber(72, 140),
  heartRate: randomNumber(100, 125),
  oxygenSaturation: randomNumber(92, 95),
  cholesterol: randomNumber(125, 200),
};

app.get("/api/normal", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataNormal,
  });
});

app.get("/api/diabetes", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataDiabetes,
  });
});

app.get("/api/prediabetes", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataPreDiabetes,
  });
});

app.get("/api/moderateacuteasthma", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataModerateAcuteAsthma,
  });
});

app.get("/api/hypoxemia", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataHypoxemia,
  });
});

app.get("/api/bronchiectasis", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataBronchiectasis,
  });
});

app.get("/api/chd", (req, res) => {
  res.status(200).json({
    status: "success",
    data: medDataCHD,
  });
});

app.listen(port, () => console.log("server listening to the port: ", port));
