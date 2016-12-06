var email = require("nativescript-email");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page,pageData;


exports.loaded = function(args) {
    page = args.object;

    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }

    pageData = new observableModule.Observable();
    pageData.set('items', ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]);

    page.bindingContext = pageData;

};

function doneTap(args) {
    var myTextField = args.object;
    myTextField.dismissSoftInput();
}

exports.doneTap = doneTap

exports.goBack = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/home/home");
}

exports.submit = function(args) {

    var text = 

        "Teacher's Name: " + pageData.get('teacherName') + 
        "\n\nMonth: " + pageData.get('month') + 
        "\n\nStudent's Name: " + pageData.get('studentName') + 
        "\n\nTotal Number of Sessions: " + pageData.get('sessionNumber') + 
        "\n\nTotal Hours: " + pageData.get('hours') + 
        "\n\nBriefly describe subjects covered: " + pageData.get('subjectsCovered') + 
        "\n\nHas your student made progress? Please explain: " + pageData.get('progress') + 
        "\n\nIs there anything the English at Home team can provide to make you more effective? " + pageData.get('englishAtHome') + 
        "\n\nMiles Traveled: " + pageData.get('milesTraveled') +
        "\n\nOther Notes: " + pageData.get('notes') +
        "\n\nFeedback on app: " + pageData.get('feedback')

      email.compose({
          subject: "Monthly Verification Email",
          body: text,
          to: ['englishathomeapp@newamericanpathways.org'],
          appPickerTitle: 'Compose with..'
      }).then(function() {
          console.log("Email composer closed");
      });
    // var topmost = frameModule.topmost();
    // topmost.navigate("views/home/home");
}