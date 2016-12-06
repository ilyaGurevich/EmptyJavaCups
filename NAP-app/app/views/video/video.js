var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
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
    var videoNumber = gotData.param2;
    var Everlive = require('everlive-sdk');
    var el = new Everlive({
        appId: 'vp5xxkeb34dhj029',
        scheme: 'https'
    });
    var data = el.data('videos');
    var query = new Everlive.Query();
    query.order('name').where().eq('unit', gotData.param1);
    data.get(query)
        .then(function(data){
            output = data.result;
            url = output[videoNumber].url;
            url = url.replace('watch?v=', 'embed/');
            console.log(url);
            url = "<iframe width='100%' height='250' src='" + url + "'></iframe>";

            pageData = new observableModule.Observable();
            pageData.set('url', url);

            if (page.ios) {
                var navigationBar = frameModule.topmost().ios.controller.navigationBar;
                navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
            }
            page.bindingContext = pageData;

        });
};