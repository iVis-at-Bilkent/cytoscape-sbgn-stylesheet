let sbgnStyleSheet = require('./sbgnStyle/');

let defaultOptions = {
};

module.exports = function(cytoscape, colorScheme){
  return sbgnStyleSheet(cytoscape, colorScheme);
};
