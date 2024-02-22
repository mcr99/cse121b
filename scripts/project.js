// Project

const employeeInfo = document.getElementById("Employees");
let employeesList = null;

// first name, last name, birth date, address, 

const displayEmployee = (employees) => {
    employees.forEach(employee => {
        const employeeArticle = document.createElement("article");

        const employeeName = document.createElement("h1");
        const employeeBirthDate = document.createElement("h3");
        const employeeAddress = document.createElement("h5");

        employeeName.textContent = `${employee.firstname} ${employee.lastname}`;
        employeeBirthDate.textContent = `Birth Date: ${employee.birthDate}`;
        employeeAddress.textContent = `Address: ${employee.address.street} ${employee.address.suite} ${employee.address.city} ${employee.address.zipcode}` ;

        employeeArticle.appendChild(employeeName);
        employeeArticle.appendChild(employeeBirthDate);
        employeeArticle.appendChild(employeeAddress);
        employeeInfo.appendChild(employeeArticle);

    });
}

const getEmployeeInfo = async () => {
    const response = await fetch("https://jsonplaceholder.org/users");
    employeesList = await response.json();
    displayEmployee(employeesList);
}

function reset() {
    employeeInfo.innerHTML = "";
}


// first filter drop down 
function filterEmployeeInfo(employees){
    reset();
    let filter = document.getElementById("employeefilter").value;
    switch (filter) {
        case "suite":
            displayEmployee(employees.filter(employee => employee.address.suite.toLowerCase().includes("suite")));
            break;

        case "apt":
            displayEmployee(employees.filter(employee => employee.address.suite.toLowerCase().includes("apt")));
            break;

        case "older":
            displayEmployee(employees.filter(employee => new Date(employee.birthDate) < new Date(2000, 0, 1)));
            break;
        
        case "younger":
            displayEmployee(employees.filter(employee => new Date(employee.birthDate) > new Date(2000, 0, 1)));
            break;

        case "all":
            displayEmployee(employees.filter(employee => employee));
    }    
}


// key word filter for first name
function filterEmployeeFirstName(employees){
    reset();
    let filter = document.getElementById("firstName").value.toLowerCase();
    displayEmployee(employees.filter(employee => employee.firstname.toLowerCase().includes(filter)));
    
}


// key word filter for last name
function filterEmployeeLastName(employees){
    reset();
    let filter = document.getElementById("lastName").value.toLowerCase();
    displayEmployee(employees.filter(employee => employee.lastname.toLowerCase().includes(filter)));
}

getEmployeeInfo();

document.querySelector("#employeefilter").addEventListener("change", () => {filterEmployeeInfo(employeesList)});
document.querySelector("#firstName").addEventListener("input", () => {filterEmployeeFirstName(employeesList)});
document.querySelector("#lastName").addEventListener("input", () => {filterEmployeeLastName(employeesList)});