// Your code here
function createEmployeeRecord(array) {
    const newObj = {
        firstName: "",
        familyName: "",
        title: "",
        payPerHour: "",
        timeInEvents: "",
        timeOutEvents: ""
    };
    newObj.firstName = array[0];
    newObj.familyName = array[1];
    newObj.title = array[2];
    newObj.payPerHour = array[3];
    newObj.timeInEvents = [];
    newObj.timeOutEvents = [];
    console.log(newObj.timeOutEvents);
    return newObj;
}

function createEmployeeRecords(arrayOfArrays) {
    const newArray = arrayOfArrays.map(x => createEmployeeRecord(x));
    return newArray;
}

function createTimeInEvent(object, dateStamp) {
    const timeInObj = {
        type: "TimeIn",
        hour: "",
        date: ""
    };
    object.timeInEvents.push(timeInObj);
    const timeInTime = dateStamp.split(" ");
    timeInObj.hour = parseInt(timeInTime[1]);
    timeInObj.date = timeInTime[0];
    return object;
}

function createTimeOutEvent(object, dateStamp) {
    const timeOutObj = {
        type: "TimeOut",
        hour: "",
        date: ""
    };
    object.timeOutEvents.push(timeOutObj);
    const timeOutTime = dateStamp.split(" ");
    timeOutObj.hour = parseInt(timeOutTime[1]);
    timeOutObj.date = timeOutTime[0];
    return object;
}

function hoursWorkedOnDate(employeeObject, dateForm) {
    employeeObject[5].forEach(object => {
        if (object.date === dateForm) {
            const timeInHour = object.hour;
            console.log(timeInHour);
            employeeObject[6].forEach(object => {
                if (object.date === dateForm) {
                    const timeOutHour = object.hour;
                    return (timeOutHour - timeInHour);
                }
            })
        }
    })
}
