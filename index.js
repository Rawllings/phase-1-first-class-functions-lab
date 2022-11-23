// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers () {
return drivers.slice(0,2);
}

console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers () {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 


function createFareMultiplier() {
    return createFareMultiplier; 
}
const fareMultiplier = createFareMultiplier() * createFareMultiplier;



function fareDoubler(fare) {
    return fare * 2;
}


function fareTripler (fare) {
    return fare * 3;
}

function selectDifferentDrivers () {
    return returnFirstTwoDrivers();
}