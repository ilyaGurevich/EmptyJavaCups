var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var utilityModule = require("utils/utils");
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();
var imageSource = require("image-source");

var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;
var pageData;

exports.loaded = function(args) {
    page = args.object;
    var gotData = page.navigationContext;
    var unitNumber = gotData.param1;
    var imageNumber = gotData.param2;
    var Everlive = require('everlive-sdk');
    var el = new Everlive({
        appId: 'vp5xxkeb34dhj029',
        scheme: 'https'
    });
    var data = el.data('documents');
    var query = new Everlive.Query();
    query.order('name').where().eq('unit', gotData.param1);
    data.get(query)
        .then(function(data){
            output = data.result;
            url = output[imageNumber].url;  
            if (output[imageNumber].type == "gif") {
                if (global.count == 0) {
                    utilityModule.openUrl(url);
                    global.count = 1;
                }
                pageData = new observableModule.Observable();
                pageData.set('url', '');
            } else {
                pageData = new observableModule.Observable();
                pageData.set('url', url);
            }

            if (page.ios) {
                var navigationBar = frameModule.topmost().ios.controller.navigationBar;
                navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
            }
            page.bindingContext = pageData;
            
        });
};