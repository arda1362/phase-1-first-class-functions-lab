const returnFirstTwoDrivers = function(){
   let returnFirstTwoDrivers = (['Antonia', 'Nuru'])
return returnFirstTwoDrivers;
}
const returnLastTwoDrivers = function() {
    let returnLastTwoDrivers = (['Amari', 'Mo'])
    return returnLastTwoDrivers;
}
const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(integer) {
    return function (fare) {
    return integer * fare;
    };
}
const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}
const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
}
let Scuber = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function selectDifferentDrivers(Scuber,returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(Scuber);
}









