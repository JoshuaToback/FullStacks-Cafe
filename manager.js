const inquirer = require("inquirer");
const mysql = require('mysql');
const consoleTable = require('console.table');
const util = require('util');
const chalk = require('chalk');
const figlet = require('figlet');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'FullStackCafe'
});

connection.query = util.promisify(connection.query);


// Startup Message
console.log(
    chalk.yellow(
     figlet.textSync('FullStacks Cafe', {horizontalLayout: 'full'})
    )
 );

inquirer
    .prompt([
        {
            name: 'secret',
            type: 'password',
            message: 'Please input manager password:'
    },
    ])
    .then(answers => {
        if (answers.secret !== 'password') {
            console.log("Incorrect password")
        }
        else {
       // Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    initPrompt();
})
}});






// Home Menu - Initial Question Prompt
const initPrompt = async () => {
     try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Most Recent Order',
                'View All Orders from Today',
                'View All Orders (All Time)',
                'View Order by Order Number', 
                'Modify Order',                             
                'View Menu',
                'Add Menu Item',                               
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Most Recent Order':
                recentOrder();
                break;

            case 'View All Orders from Today':
                todayOrder();
                break

            case 'View All Orders (All Time)':
                allTimeOrders();
                break

            case 'View Order by Order Number':
                orderNumberView();
                break;

            case 'Modify Order':
                orderMod();
                break

            case 'View Menu':
                menuView();
                break;
         
            case 'Add Menu Item':
                menuAdd();
                break

                          

            

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View Most Recent Order
const recentOrder = async () => {
    console.log('Most Recent Order');
    try {
        let query = 'SELECT * FROM order_details';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let orderArray = [];
            res.forEach(order_details => orderArray.push(order_details));
            console.table(orderArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View All Today's Orders
const todayOrder = async () => {
    console.log('All Orders from Today');
    try {
        let query = 'SELECT * FROM FullStackCafe';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View All Orders from All Time
const allTimeOrders = async () => {
    console.log('View All Orders (All Time)');
    try {
        let query = 'SELECT * FROM FullStackCafe';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View Order by Order Number
const orderNumberView = async () => {
    console.log('View Order By Order Number');
    try {
        let query = 'SELECT * FROM FullStackCafe';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View Menu
const menuView = async () => {
    console.log('View Menu');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}


//Add New Menu Item
const menuAdd = async () => {
    try {
        console.log('Add New Menu Item');

        let roles = await connection.query("SELECT * FROM role");

        let departments = await connection.query("SELECT * FROM department");

        let managers = await connection.query("SELECT * FROM employee");

        let answer = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of this Dish?'
            },
            {
                name: 'price',
                type: 'input',
                message: 'What is the price of this Dish?'
            }
          
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            name: answer.name,
            price: answer.price
           
        });

        console.log(`${answer.name} added successfully.\n`);
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// // Add New Dapartment
// const departmentAdd = async () => {
//     try {
//         console.log('Department Add');

//         let answer = await inquirer.prompt([
//             {
//                 name: 'deptName',
//                 type: 'input',
//                 message: 'What is the name of your new department?'
//             }
//         ]);

//         let result = await connection.query("INSERT INTO department SET ?", {
//             department_name: answer.deptName
//         });

//         console.log(`${answer.deptName} added successfully to departments.\n`)
//         initPrompt();

//     } catch (err) {
//         console.log(err);
//         initPrompt();
//     };
// }

// Add New Role
// const roleAdd = async () => {
//     try {
//         console.log('Role Add');

//         let departments = await connection.query("SELECT * FROM department")

//         let answer = await inquirer.prompt([
//             {
//                 name: 'title',
//                 type: 'input',
//                 message: 'What is the name of your new role?'
//             },
//             {
//                 name: 'salary',
//                 type: 'input',
//                 message: 'What salary will this role provide?'
//             },
//             {
//                 name: 'departmentId',
//                 type: 'list',
//                 choices: departments.map((departmentId) => {
//                     return {
//                         name: departmentId.department_name,
//                         // value: departmentId.id
//                     }
//                 }),
//                 message: 'What department includes this role?',
//             }
//         ]);
        
//         let chosenDepartment;
//         for (i = 0; i < departments.length; i++) {
//             if(departments[i].department_id === answer.choice) {
//                 chosenDepartment = departments[i];
//             };
//         }
//         let result = await connection.query("INSERT INTO role SET ?", {
//             title: answer.title,
//             salary: answer.salary,
//             department: answer.departmentId
//         })

//         console.log(`${answer.title} role added successfully.\n`)
//         initPrompt();

//     } catch (err) {
//         console.log(err);
//         initPrompt();
//     };
// }

// Modify Order
const orderMod = async () => {
    try {
        console.log('Modify Order');
        
        let employees = await connection.query("SELECT * FROM employee");

        let employeeSelection = await inquirer.prompt([
            {
                name: 'employee',
                type: 'list',
                choices: employees.map((employeeName) => {
                    return {
                        name: employeeName.first_name + " " + employeeName.last_name,
                        value: employeeName.id
                    }
                }),
                message: 'Please choose an employee to update.'
            }
        ]);

        let roles = await connection.query("SELECT * FROM role");

        let roleSelection = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                choices: roles.map((roleName) => {
                    return {
                        name: roleName.title,
                        // value: roleName.id
                    }
                }),
                message: 'Please select the role to update the employee with.'
            }
        ]);

        let result = await connection.query("UPDATE employee SET ? WHERE ?", [{ title: roleSelection.role }, { id: employeeSelection.employee }]);

        console.log(`The role was successfully updated.\n`);
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}