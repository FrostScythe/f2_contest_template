let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

// 1. Print developers using .map
function PrintDeveloperbyMap() {
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 2. Print developers using .forEach
function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 3. Add new employee data
function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

// 4. Remove employee with profession admin
function removeAdmin() {
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

// 5. Concatenate with another array
function ConcatinateArray() {
  let newArray = [
    { id: 5, name: "alex", age: "22", profession: "manager" },
    { id: 6, name: "emma", age: "23", profession: "designer" },
    { id: 7, name: "mike", age: "21", profession: "tester" }
  ];

  let combinedArray = employees.concat(newArray);
  console.log(combinedArray);
}
