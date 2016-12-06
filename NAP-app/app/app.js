var applicationModule = require("application");
global.password = '';
global.count = 0;
applicationModule.start({ moduleName: "views/login/login" });