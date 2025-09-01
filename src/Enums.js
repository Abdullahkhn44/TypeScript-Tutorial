var Status;
(function (Status) {
    Status["Authorized"] = "Authorized";
    Status["UnAuthorized"] = "UnAuthorized";
    Status["Success"] = "Success";
    Status["AttemptFailed"] = "AttemptFailed";
})(Status || (Status = {}));
var printEnum = function (msg) {
    if (msg == Status.Authorized) {
        console.log("Welcome To Enum");
    }
    else if (msg == Status.AttemptFailed) {
        console.log("nice try diddy");
    }
};
printEnum(Status.AttemptFailed);
