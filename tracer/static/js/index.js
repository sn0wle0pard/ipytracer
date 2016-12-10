module.exports = {};

var loadedModules = [];

for(var i in loadedModules) {
    if(loadedModules.hasOwnProperty(i)) {
        var loadedModule = loadedModules[i];
        for(var target_name in loadedModule) {
            if(loadedModules.hasOwnProperty(target_name)) {
                module.exports[target_name] = loadedModule[target_name];
            }
        }
    }
}