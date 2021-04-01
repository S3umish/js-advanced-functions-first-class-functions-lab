// Code your solution in this file!


const drivers = ["Tom", "Mat", "Don", "Jake", "Craig"]

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');

    function returnFirstTwoDrivers(drivers) {
        console.log(drivers.slice(0,2))
        return drivers.slice(0,2)   
    }


    function returnLastTwoDrivers(drivers){
        console.log(drivers.slice(-2))
        return drivers.slice(-2)
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
    const createFareMultiplier = function(multiplyValue){

        return function(value){
            console.log (multiplyValue * value)
            return multiplyValue * value
        }   
    }

    const fareDoubler = createFareMultiplier(2)

    const fareTripler = createFareMultiplier(3)

    const selectDifferentDrivers = function(drivers,newSet) {
        return newSet(drivers)
    }

        

    returnLastTwoDrivers(drivers)
    returnFirstTwoDrivers(drivers)
    createFareMultiplier()


// });
