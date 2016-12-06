var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;
var pageData;

exports.loaded = function(args) {
    var Everlive = require('everlive-sdk');
    var el = new Everlive({
        appId: 'vp5xxkeb34dhj029',
        scheme: 'https'
    });
    var data = el.data('students');
    var query = new Everlive.Query();
    query.order('name');
    data.get(query)
        .then(function(data){
            output = data.result;

            var studentData = [];
            for (var i = 0; i < output.length; i++) {
                var temp = {};
                temp.name = output[i].name;
                temp.units = output[i].unit;
                temp.englishProficiency = output[i].proficiency;
                temp.nativeLanguage = output[i].nativeLanguage;
                temp.nationality = output[i].nationality;
                studentData.push(temp);
            }
            pageData = new observableModule.Observable();
            pageData.set('students', studentData);

            page = args.object;
            var gotData = page.navigationContext;

            if (page.ios) {
                var navigationBar = frameModule.topmost().ios.controller.navigationBar;
                navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
            }
            page.bindingContext = pageData;

        });
};

exports.goHome = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
}

exports.add = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/add/add");
}

exports.listViewItemTap = function (args) {
    var navigationOptions= {
        moduleName:'views/student/student',
        context:{param1: args.index}
    }
    var topmost = frameModule.topmost().navigate(navigationOptions)
}
