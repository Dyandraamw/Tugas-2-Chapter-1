let payroll = new Object();
var sum = 0;

payroll = {
    marketing: [
        {
            name: "Budi",
            salary: 5000000,
        },
        {
            name: "Agus",
            salary: 4500000,
        },
    ],
    engineer: {
        frontend: [
            {
                name: "Suci",
                salary: 8500000,
            },
            {
                name: "Lukito",
                salary: 7000000,
            },
        ],
        backend: [
            {
                name: "Bustomi",
                salary: 9500000,
            },
        ],
        devops: [
            {
                name: "Paul",
                salary: 9000000,
            },
        ],
    },
};

function sumSalary(obj){
    //cari property di object
    for(key in obj){
        if(key == "salary"){
            sum+=obj[key];
        }else if(typeof obj[key] == "object"){
            //recursive buat nested object
            sumSalary(obj[key]);
        }
    }
}

sumSalary(payroll);

console.log('Total Salary = ',sum);

