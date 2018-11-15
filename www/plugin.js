/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback) {
        cordova.exec(successCallback, null, "deeplinks", "greet", [name]);
    }
};
