var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page, pageData;

var Everlive = require('everlive-sdk');
var el = new Everlive({
    appId: 'vp5xxkeb34dhj029',
    scheme: 'https'
});

exports.loaded = function(args) {
    page = args.object;

    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }

    pageData = new observableModule.Observable();

    page.bindingContext = pageData;
};

function doneTap(args) {
    var myTextField = args.object;
    myTextField.dismissSoftInput();
}

exports.doneTap = doneTap

exports.goBack = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/students/students");
}

exports.submit = function(args) {
  var data = el.data('students');
  data.create({ 
      'unit' : pageData.get("units"),  
      'proficiency': pageData.get("proficiency"),
      'nativeLanguage': pageData.get("language"),
      'nationality': pageData.get("nationality"),
      'name': pageData.get("name")});
  alert("Student Added");
}