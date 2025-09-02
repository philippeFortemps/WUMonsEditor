/**
 * @license
 * Copyright 2025 UMONS (for the application to WUKONG 2040)
 * SPDX-License-Identifier: Apache-2.0
 */
 
python.pythonGenerator.finish = function(code) {
  // Convert definitions_ object to sorted array
  var imports = [];
  var connects = [];
  var defs = [];
  var others = [];

  for (var name in Blockly.Python.definitions_) {
    var def = python.pythonGenerator.definitions_[name];
    if (name.startsWith('import') || def.startsWith('from')) {
      imports.push(def);
    } else if (name.startsWith('connect')) {
      connects.push(def);
    } else if (def.startsWith('def')) {
      defs.push(def);
    } 
    else {
      others.push(def);
    }
  }

  // Sort the import lines
  imports.sort();

  // Assemble final code
  var allDefs = imports.concat(connects).concat("").concat(defs).concat("").concat(others).join('\n');
  return allDefs + '\n\n' + code;
};
