enum Status {
    Authorized = "Authorized",
    UnAuthorized = "UnAuthorized",
    Success = "Success",
    AttemptFailed = "AttemptFailed"
}

const printEnum = (msg: Status) => {
    if (msg == Status.Authorized) {
        console.log("Welcome To Enum")
    } else if (msg == Status.AttemptFailed) {
        console.log("nice try diddy")
    }
}

printEnum(Status.AttemptFailed)