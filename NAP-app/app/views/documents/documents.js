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
    global.count = 0;
    page = args.object;
    var gotData = page.navigationContext;
    var Everlive = require('everlive-sdk');
    var el = new Everlive({
        appId: 'vp5xxkeb34dhj029',
        scheme: 'https'
    });
    var data = el.data('documents');
    var query = new Everlive.Query();
    query.order('name').where().eq('unit', gotData.param1).ne('type', 'video');
    data.get(query)
        .then(function(data){
            output = data.result;
            var documentData = [];
            for (var i = 0; i < output.length; i++) {
                var temp = {};
                temp.title = output[i].name;
                documentData.push(temp);
            }
            pageData = new observableModule.Observable();
            pageData.set('documents', documentData);

            if (page.ios) {
                var navigationBar = frameModule.topmost().ios.controller.navigationBar;
                navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
            }
            page.bindingContext = pageData;

        });
};

exports.listViewItemTap = function (args) {
    var navigationOptions= {
        moduleName:'views/document/document',
        context:{param1: page.navigationContext.param1, param2: args.index}
    }
    var topmost = frameModule.topmost().navigate(navigationOptions)
}
