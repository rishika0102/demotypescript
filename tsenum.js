var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fir"] = 4] = "fir";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.log(whichDay);
