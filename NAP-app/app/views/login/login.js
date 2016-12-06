var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var utilityModule = require("utils/utils");
var UserViewModel = require("../../shared/view-models/user-view-model");

var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var pageData;
var user = new UserViewModel();

exports.loaded = function(args) {
    var page = args.object;

    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
    pageData = new observableModule.Observable();
    page.bindingContext = pageData;
};

exports.goHome = function(args) {
    global.password = pageData.get('password');
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
}

exports.eula = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/eula/eula");
}

exports.about = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/about/about");
}

exports.donate = function(args) {
    utilityModule.openUrl("https://donatenow.networkforgood.org/NewAmericanPathways");
}