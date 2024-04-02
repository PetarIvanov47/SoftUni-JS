function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const sortedEmployees = (employees) => {
         const result = employees.sort((a, b) => b['salary'] - a['salary']);
         return result
      };

      const textAreaElement = document.querySelector('#inputs textarea').value;
      const outputBestRestourantElement = document.querySelector('#bestRestaurant p');
      const outputBestRestourantWorkersElement = document.querySelector('#workers p');

      const pattern = /"([^"]*)"/g;
      const inputText = Array.from(textAreaElement.matchAll(pattern)).map(x => x[1]);
      if(!inputText){
         return
      }

      const restourants = inputText.reduce((acc, info) => {
         const restourantInfo = info.split(' - ');
         const name = restourantInfo.shift();
         let employees = restourantInfo[0].split(', ')
            .map(employeeInfo => {
               const [employeeName, employeeSalary] = employeeInfo.split(' ');
               const employee = { name: employeeName, salary: Number(employeeSalary) };

               return employee
            })

         if (!acc[name]) {
            acc[name] = [];
         }

         acc[name] = acc[name].concat(...employees);
         acc[name] = sortedEmployees(acc[name]);

         return acc

      }, {});

      let highestAverageSalary = 0;
      let bestRestourant = '';

      for (let restourant in restourants) {
         let averageSalary = restourants[restourant].reduce((acc, employee) => acc + employee['salary'], 0) / restourants[restourant].length;

         if (averageSalary > highestAverageSalary) {
            highestAverageSalary = averageSalary;
            bestRestourant = restourant;
         }
      }

      const bestSalary = restourants[bestRestourant][0]['salary'].toFixed(2);

      outputBestRestourantElement.textContent = `Name: ${bestRestourant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${bestSalary}`
      outputBestRestourantWorkersElement.textContent = restourants[bestRestourant]
         .map(worker => `Name: ${worker['name']} With Salary: ${worker['salary']}`)
         .join(' ');
   }
}
