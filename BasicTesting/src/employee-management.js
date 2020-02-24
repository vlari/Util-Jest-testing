const Manager = require("./manager");
const Clerk = require("./clerk");

function createEmployee(type) {
  let employee = null;
  if (type === "manager") {
    employee = new Manager("john", "Doe", 64, "Sales", "Sales", 20);
  } else if (type === "clerk") {
    employee = new Clerk("Amanda", "holiday", 22, "Customer Service", 100, 12);
  }

  return employee;
}

module.exports = createEmployee;
