var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

var Everlive = require('everlive-sdk');
var el = new Everlive({
    appId: 'vp5xxkeb34dhj029',
    scheme: 'https'
});
var data = el.data('documents');
var output;

exports.loaded = function(args) {
    var noSortUnit = [];
    data.get()
        .then(function(data){
            output = data.result;
            for (var i = 0; i < output.length; i++) {
                noSortUnit.push(Number(output[i].unit));
            }

            noSortUnit = noSortUnit.sort(function(a, b){return a-b});
            newUnits = [];
            for (var i = 0; i < noSortUnit.length; i++) {
                if (newUnits.indexOf(noSortUnit[i]) == -1) {
                    newUnits.push(noSortUnit[i].toString());
                }
            }

            var newArr = newUnits.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            })

            newArr = pairArray(newArr);

            function pairArray(a) {
                var temp = a.slice();
                var arr = [];

                while (temp.length) {
                    arr.push(temp.splice(0,2));
                }

                return arr;
            }
            var pageUnits = [];
            for (var i = 0; i < newArr.length; i++) {
                var temp = {};
                temp.value1 = newArr[i][0];
                if (newArr[i][1]) {
                    temp.value2 = newArr[i][1];
                }
                pageUnits.push(temp);
            }

            var pageData = new observableModule.Observable();
            pageData.set('units', pageUnits);
            if (global.password == "vol@nap2017!") {
                pageData.set('password', true);
            }
            else {
                pageData.set('password', false)
            }
            console.log(global.password);

            page = args.object;
            var gotData = page.navigationContext;

            if (page.ios) {
                var navigationBar = frameModule.topmost().ios.controller.navigationBar;
                navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
            }
            page.bindingContext = pageData;

        });
    // page = args.object;
    // var gotData = page.navigationContext;

    // if (page.ios) {
    //     var navigationBar = frameModule.topmost().ios.controller.navigationBar;
    //     navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    // }
    // page.bindingContext = pageData;
};

exports.toHelp = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/help/help");
}

exports.students = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/students/students");
}

exports.goSubmit = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate("views/submit/submit");
}

exports.goToUnit = function(args) {
    var tappedItem = args.object.id;
    var navigationOptions={
        moduleName:'views/unit/unit',
        context:{param1: tappedItem}
    }
    var topmost = frameModule.topmost().navigate(navigationOptions)
}