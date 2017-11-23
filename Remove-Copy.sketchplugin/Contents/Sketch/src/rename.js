@import "../lib/utils.js"

// remove copy in duplicated layers
var removeCopy = function(context){
  utils.init(context);
  utils.call.pageLayers(function(layer){
    var layerName = [layer name];
    var copyRange = [layerName rangeOfString:" Copy"];
    if (copyRange.length > 0) { // hack to simulate NSNotFound
      // ignore the automatically named groups (rect copy2 + oval + foo copy)
      var plusRange = [layerName rangeOfString:" + "];
      if (plusRange.length > 0 && plusRange.location > copyRange.location) {
        log("encountered automatic group name, ignoring");
      } else {
        var newRange = NSMakeRange(0, copyRange.location);
        var newName = [layerName substringWithRange:newRange];
        log("renaming - " + layerName + " - to - " + newName);
        [layer setName:newName];
      }
    };
  });
}