// weeeeeeeeeeee

function receivesAFunction(callbackFunction) {
    callbackFunction();
    return "yeer";
}

function returnsANamedFunction() {
    return function funk() {
        return "hi";
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        return "howdee";
    };
}