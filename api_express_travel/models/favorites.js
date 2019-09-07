const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  birthDate: Date,
  department: String,
  annualSalary: String
});

module.exports = mongoose.model('Employee', employeeSchema);
