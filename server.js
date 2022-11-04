const express = require('express')
const app = express();
const fs = require('fs');
const cors = require('cors')
const port = 3001;

app.use(cors());

app.get('/employees/all', function (req, res) {
  const rawdata = fs.readFileSync('./public/employees.json');
  const employees = JSON.parse(rawdata);
  res.send(employees);
});

app.get('/employees/search/:name', function (req, res) {
  const rawdata = fs.readFileSync('./public/employees.json');
  const employeeData = JSON.parse(rawdata);
  const result = employeeData.employees.filter((employee) => {
    return employee.name.toLowerCase().includes(req.params.name.toLowerCase())
  });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
