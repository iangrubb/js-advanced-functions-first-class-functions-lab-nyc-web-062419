// Code your solution in this file!
const returnFirstTwoDrivers = (drivers => drivers.slice(0,2))

const returnLastTwoDrivers = (drivers => drivers.slice(drivers.length - 2,drivers.length))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return (fare => fare * integer)
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}



