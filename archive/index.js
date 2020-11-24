const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const appendFileAsync = util.promisify(fs.appendFile);
// inquirer
//     .prompt([

//     ])



  const lockbox1 = new Lockbox("01756628", true, "Matoax", 90, 200);
  console.log(lockbox1);


function Lockbox(serial, deployed, location, battery, asset) {
  this.serial = serial;
  this.deployed = deployed;
  this.location = location;
  this.battery = battery;
  this.asset = asset;
}
