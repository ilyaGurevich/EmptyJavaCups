var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;


exports.loaded = function(args) {
    page = args.object;
    var gotData = page.navigationContext;

    var unit = gotData.param1;

    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }

    var pageData = new observableModule.Observable();
    pageData.set("unit", unit);

    page.bindingContext = pageData;
};

exports.goBack = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
}

exports.goVideo = function(args) {
    var navigationOptions= {
        moduleName:'views/videos/videos',
        context:{param1: page.navigationContext.param1}
    }
    var topmost = frameModule.topmost().navigate(navigationOptions)
}

exports.goDocs = function(args) {
    var navigationOptions= {
        moduleName:'views/documents/documents',
        context:{param1: page.navigationContext.param1}
    }
    var topmost = frameModule.topmost().navigate(navigationOptions)
}