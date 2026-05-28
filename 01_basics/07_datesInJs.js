// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateddate = new Date(2023, 0, 23)
// let myCreateddate = new Date(2023, 0, 23, 5, 3)
let myCreateddate = new Date("2023-01-14")
//console.log(myCreateddate);
//console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in JS months start from 0
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    
})