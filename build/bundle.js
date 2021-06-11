(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeSbgnStylesheet"] = factory();
	else
		root["cytoscapeSbgnStylesheet"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnDataHandler = {
  isMultimer: function isMultimer(node) {
    return node.data('class').includes('multimer');
  },
  hasClonemarker: function hasClonemarker(node) {
    return node.data('clonemarker');
  },
  getStateVars: function getStateVars(node) {
    return node.data('stateVariables');
  },
  getUnitInfos: function getUnitInfos(node) {
    return node.data('unitsOfInformation');
  },
  hasAuxItems: function hasAuxItems(node) {
    return node.data('stateVariables').length + node.data('unitsOfInformation').length > 0;
  },
  sbgnClass: function sbgnClass(element) {
    return element.data('class');
  },
  sbgnLabel: function sbgnLabel(element) {
    return element.data('label');
  },
  stateVarLabel: function stateVarLabel(stateVar) {
    var variable = stateVar.state.variable;
    var value = stateVar.state.value;
    if (value && variable) {
      return value + '@' + variable;
    }
    if (value) {
      return value;
    }

    if (variable) {
      return variable;
    }
    return '';
  }
};

module.exports = sbgnDataHandler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var styleMap2Str = function styleMap2Str(styleMap) {
  if (!styleMap) {
    return '';
  }

  var s = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = styleMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var k = _ref2[0];
      var v = _ref2[1];

      s += k + '=' + '"' + v + '"' + ' ';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return s;
};

var svg = function svg(svgStr) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  var parser = new DOMParser();
  var svgText = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg><svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' width=\'' + width + '\' height=\'' + height + '\'>' + svgStr + '</svg>';
  return parser.parseFromString(svgText, 'text/xml').documentElement;
};

var svgStr = function svgStr(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight) {
  var s = svg(svgText, viewPortWidth, viewPortHeight, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight);

  // base64
  // let data = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

  // uri component string
  var data = 'data:image/svg+xml;utf8,' + encodeURIComponent(s.outerHTML);

  return data;
};

module.exports = {
  svgStr: svgStr,
  styleMap2Str: styleMap2Str
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styleMap2Str = __webpack_require__(1).styleMap2Str;

var baseRectangle = function baseRectangle(x, y, w, h, r1, r2, r3, r4, styleMap) {
  return '\n  <path ' + styleMap2Str(styleMap) + ' d=\'\n    M ' + (x + r1) + ' ' + y + '\n    L ' + (x + w - r2) + ' ' + y + ' Q ' + (x + w) + ' ' + y + ' ' + (x + w) + ' ' + (y + r2) + '\n    L ' + (x + w) + ' ' + (y + h - r3) + ' Q ' + (x + w) + ' ' + (y + h) + ' ' + (x + w - r3) + ' ' + (y + h) + '\n    L ' + (x + r4) + ' ' + (y + h) + ' Q ' + x + ' ' + (y + h) + ' ' + x + ' ' + (y + h - r4) + '\n    L ' + x + ' ' + (y + r1) + ' Q ' + x + ' ' + y + ' ' + (x + r1) + ' ' + y + '\n    Z\'\n  />\n  ';
};

var baseShapes = {
  barrel: function barrel(x, y, width, height, styleMap) {
    return '\n\n    <g ' + styleMap2Str(styleMap) + '>\n      <path d="M ' + (0 * width + x) + ' ' + (.03 * height + y) + ' L ' + (0 * width + x) + ' ' + (.97 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (height + y) + ' ' + (0.25 * width + x) + ' ' + (height + y) + '"/>\n\n      <path d="M ' + (0.25 * width + x) + ' ' + (height + y) + ' L ' + (0.75 * width + x) + ' ' + (height + y) + ' Q ' + (0.95 * width + x) + ' ' + (height + y) + ' ' + (width + x) + ' ' + (0.95 * height + y) + '"/>\n\n      <path d="M ' + (width + x) + ' ' + (.95 * height + y) + ' L ' + (width + x) + ' ' + (0.05 * height + y) + ' Q ' + (width + x) + ' ' + (0 * height + y) + ' ' + (0.75 * width + x) + ' ' + (0 * height + y) + '"/>\n\n      <path d="M ' + (0.75 * width + x) + ' ' + (0 * height + y) + ' L ' + (0.25 * width + x) + ' ' + (0 * height + y) + ' Q ' + (0.06 * width + x) + ' ' + (0 * height + y) + ' ' + (0 * width + x) + ' ' + (0.03 * height + y) + '"/>\n    </g>\n\n    ';
  },
  circle: function circle(cx, cy, r, styleMap) {
    return '<circle cx=\'' + cx + '\' cy=\'' + cy + '\' r=\'' + r + '\' ' + styleMap2Str(styleMap) + ' />';
  },
  clipPath: function clipPath(id, baseShapeFn, baseShapeFnArgs, styleMap) {
    return '\n      <defs>\n        <clipPath id=\'' + id + '\' ' + styleMap2Str(styleMap) + '>\n        ' + baseShapeFn.apply(undefined, _toConsumableArray(baseShapeFnArgs)) + '\n        </clipPath>\n      </defs>\n    ';
  },
  concaveHexagon: function concaveHexagon(x, y, width, height, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0) + ', ' + (x + width) + ', ' + (y + 0) + ', ' + (x + 0.85 * width) + ', ' + (y + 0.5 * height) + ', ' + (x + width) + ', ' + (y + height) + ', ' + (x + 0) + ', ' + (y + height) + ', ' + (x + 0.15 * width) + ', ' + (y + 0.5 * height) + '\'\n    />';
  },
  cutRectangle: function cutRectangle(x, y, width, height, cornerLength, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'\n      ' + (x + 0 * width) + ' ' + (y + cornerLength) + ' ' + (x + cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width - cornerLength) + ' ' + (y + 0 * height) + ' ' + (x + width) + ' ' + (y + cornerLength) + '\n      ' + (x + width) + ' ' + (y + height - cornerLength) + ' ' + (x + width - cornerLength) + ' ' + (y + height) + ' ' + (x + cornerLength) + ' ' + (y + height) + ' ' + (x + 0 * width) + ' ' + (y + height - cornerLength) + '\n      \'\n    />\n    ';
  },
  ellipse: function ellipse(cx, cy, rx, ry, styleMap) {
    return '\n      <ellipse cx=\'' + cx + '\' cy=\'' + cy + '\' rx=\'' + rx + '\' ry=\'' + ry + '\' ' + styleMap2Str(styleMap) + ' />\n    ';
  },
  hexagon: function hexagon(x, y, width, height, styleMap) {
    return '\n    <polygon ' + styleMap2Str(styleMap) + '\n      points=\'' + (x + 0) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.25 * width) + ', ' + (y + 0 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + 0 * height) + ', ' + (x + width) + ', ' + (y + 0.5 * height) + ', ' + (x + 0.75 * width) + ', ' + (y + height) + ', ' + (x + 0.25 * width) + ', ' + (y + height) + '\'\n    />';
  },
  line: function line(x1, y1, x2, y2, styleMap) {
    return '<line x1=\'' + x1 + '\' y1=\'' + y1 + '\' x2=\'' + x2 + '\' y2=\'' + y2 + '\' ' + styleMap2Str(styleMap) + ' />';
  },
  rectangle: function rectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, 0, 0, styleMap);
  },
  roundBottomRectangle: function roundBottomRectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, 0, 0, .3 * height, .3 * height, styleMap);
  },
  roundRectangle: function roundRectangle(x, y, width, height, styleMap) {
    return baseRectangle(x, y, width, height, .04 * width, .04 * width, .04 * width, .04 * width, styleMap);
  },
  stadium: function stadium(x, y, width, height, styleMap) {
    var radiusRatio = .24 * Math.max(width, height);
    return baseRectangle(x, y, width, height, radiusRatio, radiusRatio, radiusRatio, radiusRatio, styleMap);
  },
  square: function square(x, y, length, styleMap) {
    return baseRectangle(x, y, length, length, 0, 0, 0, 0, styleMap);
  },
  text: function text(t, x, y, styleMap) {
    return '<text x=\'' + x + '\' y=\'' + y + '\' ' + styleMap2Str(styleMap) + '>' + t + '</text>';
  }
};

module.exports = baseShapes;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnData = __webpack_require__(0);

var sbgnStyle = new Map().set('unspecified entity', { w: 32, h: 32, shape: 'ellipse' }).set('simple chemical', { w: 48, h: 48, shape: 'ellipse' }).set('simple chemical multimer', { w: 48, h: 48, shape: 'ellipse' }).set('macromolecule', { w: 96, h: 48, shape: 'roundrectangle' }).set('macromolecule multimer', { w: 96, h: 48, shape: 'roundrectangle' }).set('nucleic acid feature', { w: 88, h: 56, shape: 'bottomroundrectangle' }).set('nucleic acid feature multimer', { w: 88, h: 52, shape: 'bottomroundrectangle' }).set('complex', { w: 10, h: 10, shape: 'cutrectangle' }).set('complex multimer', { w: 10, h: 10, shape: 'cutrectangle' }).set('source and sink', { w: 60, h: 60, shape: 'polygon' }).set('perturbing agent', { w: 140, h: 60, shape: 'concavehexagon' }).set('phenotype', { w: 140, h: 60, shape: 'hexagon' }).set('process', { w: 25, h: 25, shape: 'square' }).set('uncertain process', { w: 25, h: 25, shape: 'square' }).set('omitted process', { w: 25, h: 25, shape: 'square' }).set('association', { w: 25, h: 25, shape: 'ellipse' }).set('dissociation', { w: 25, h: 25, shape: 'ellipse' }).set('compartment', { w: 50, h: 50, shape: 'barrel' }).set('tag', { w: 100, h: 65, shape: 'tag' }).set('and', { w: 40, h: 40, shape: 'ellipse' }).set('or', { w: 40, h: 40, shape: 'ellipse' }).set('not', { w: 40, h: 40, shape: 'ellipse' });

var sbgnArrowMap = new Map().set('necessary stimulation', 'triangle-cross').set('inhibition', 'tee').set('catalysis', 'circle').set('stimulation', 'triangle').set('production', 'triangle').set('modulation', 'diamond');

var elementStyle = {
  sbgnShape: function sbgnShape(node) {
    var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    var style = sbgnStyle.get(sbgnClass);
    return style ? style.shape : 'ellipse';
  },
  sbgnArrowShape: function sbgnArrowShape(edge) {
    var sbgnClass = sbgnData.sbgnClass(edge);
    var shape = sbgnArrowMap.get(sbgnClass);
    return shape ? shape : 'none';
  },
  sbgnContent: function sbgnContent(node) {
    var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
    var content = sbgnData.sbgnLabel(node);

    if (sbgnClass == 'and') {
      content = 'AND';
    }
    if (sbgnClass == 'or') {
      content = 'OR';
    }
    if (sbgnClass == 'not') {
      content = 'NOT';
    }
    if (sbgnClass == 'omitted process') {
      content = '\\\\';
    }
    if (sbgnClass == 'uncertain process') {
      content = '?';
    }

    return content;
  },
  dimensions: function dimensions(node) {
    var sbgnClass = sbgnData.sbgnClass(node);
    var dim = sbgnStyle.get(sbgnClass);
    if (dim == null) {
      throw new TypeError(sbgnClass + ' does not have a default width / height');
    }
    return dim;
  },
  width: function width(node) {
    return this.dimensions(node).w;
  },
  height: function height(node) {
    return this.dimensions(node).h;
  },
  bgColor: function bgColor(node, bgColors) {
    if (bgColors.length == 2) {
      return bgColors[0];
    } else if (bgColors.length == 3) {
      var sbgnClass = sbgnData.sbgnClass(node);
      if (sbgnClass == 'unspecified entity' || sbgnClass == 'simple chemical' || sbgnClass == 'simple chemical multimer' || sbgnClass == 'macromolecule' || sbgnClass == 'macromolecule multimer' || sbgnClass == 'nucleic acid feature' || sbgnClass == 'nucleic acid feature multimer' || sbgnClass == 'perturbing agent' || sbgnClass == 'source and sink' || sbgnClass == 'phenotype' || sbgnClass == 'tag') {
        return bgColors[2];
      }
      if (sbgnClass == 'complex' || sbgnClass == 'complex multimer') {
        return bgColors[1];
      }
      if (sbgnClass == 'compartment') {
        return bgColors[0];
      }
      return "#ffffff";
    } else if (bgColors.length == 5) {
      var _sbgnClass = sbgnData.sbgnClass(node);
      if (_sbgnClass == 'unspecified entity' || _sbgnClass == 'perturbing agent' || _sbgnClass == 'source and sink' || _sbgnClass == 'phenotype' || _sbgnClass == 'tag' || _sbgnClass == 'compartment') {
        return bgColors[2];
      }
      if (_sbgnClass == 'simple chemical' || _sbgnClass == 'simple chemical multimer') {
        return bgColors[1];
      }
      if (_sbgnClass == 'macromolecule' || _sbgnClass == 'macromolecule multimer') {
        return bgColors[4];
      }
      if (_sbgnClass == 'nucleic acid feature' || _sbgnClass == 'nucleic acid feature multimer') {
        return bgColors[0];
      }
      if (_sbgnClass == 'complex' || _sbgnClass == 'complex multimer') {
        return bgColors[3];
      }
      return "#ffffff";
    }
  }
};

module.exports = elementStyle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var textWidth = __webpack_require__(11);

var baseShapes = __webpack_require__(2);
var sbgnData = __webpack_require__(0);

var auxiliaryItems = {
  multiImgCloneMarker: function multiImgCloneMarker(x, y, width, height) {

    var cloneStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1').set('fill', '#D2D2D2');

    return baseShapes.rectangle(x, y, width, height, cloneStyle);
  },
  multiImgUnitOfInformation: function multiImgUnitOfInformation(x, y, width, height, uInfo) {
    var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
    var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;

    var text = uInfo.label.text;
    var uinfoRectStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

    var uInfoWidth = textWidth(text, { family: textStyle.get('font-family'), size: fontSize }) + 5;

    var unitOfInformationSvg = '\n      ' + baseShapes.roundRectangle(x, y, uInfoWidth, height, uinfoRectStyle) + '\n      ' + baseShapes.text(text, x + uInfoWidth / 2, y + height / 2, textStyle) + '\n    ';

    return unitOfInformationSvg;
  },
  multiImgStateVar: function multiImgStateVar(x, y, width, height, stateVar) {
    var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;
    var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 14;


    var stateVarStyle = new Map().set('stroke', '#555555').set('stroke-width', '' + borderWidth).set('fill', 'white').set('fill-opacity', 1);

    var textStyle = new Map().set('alignment-baseline', 'middle').set('font-size', fontSize + 'px').set('font-family', 'Helvetica Neue, Helvetica, sans-serif').set('text-anchor', 'middle');

    var tw = textWidth(sbgnData.stateVarLabel(stateVar), { family: textStyle.get('font-family'), size: fontSize }) + 10;
    var w = Math.max(tw, 30);
    var statevariableSvg = '\n      ' + baseShapes.stadium(x, y, w, height, stateVarStyle) + '\n      ' + baseShapes.text(sbgnData.stateVarLabel(stateVar), x + w / 2, y + height / 2, textStyle) + '\n    ';

    return statevariableSvg;
  },
  cloneMarker: function cloneMarker(nodeWidth, nodeHeight, shapeFn, shapeFnArgs) {
    var clipId = 'clonemarker';

    var cloneMarkerStyle = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1.5').set('clip-path', 'url(#' + clipId + ')').set('fill', '#D2D2D2');

    var cloneMarkerSvg = '\n      ' + baseShapes.clipPath(clipId, baseShapes.rectangle, [0, 3 * nodeHeight / 4, nodeWidth, nodeHeight, new Map()]) + '\n      ' + shapeFn.apply(undefined, _toConsumableArray(shapeFnArgs).concat([cloneMarkerStyle])) + '\n    ';

    return cloneMarkerSvg;
  }
};

module.exports = auxiliaryItems;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sbgnStyleSheet = __webpack_require__(7);

var defaultOptions = {};

module.exports = function (cytoscape, colorScheme) {
  return sbgnStyleSheet(cytoscape, colorScheme);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elementStyle = __webpack_require__(3);
var sbgnsvg = __webpack_require__(8);

var sbgnStyleSheet = function sbgnStyleSheet(cytoscape, colorScheme) {

  var bgColors = [];
  if (colorScheme == "greyscale") {
    bgColors = ['#f0f0f0', '#d9d9d9', '#bdbdbd'];
  } else if (colorScheme == "bluescale") {
    bgColors = ['#eff3ff', '#c6dbef', '#9ecae1'];
  } else if (colorScheme == "red_blue") {
    bgColors = ['#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de'];
  } else if (colorScheme == "green_brown") {
    bgColors = ['#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1'];
  } else if (colorScheme == "purple_brown") {
    bgColors = ['#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2'];
  } else if (colorScheme == "purple_green") {
    bgColors = ['#a6dba0', '#d9f0d3', '#f7f7f7', '#e7d4e8', '#c2a5cf'];
  } else if (colorScheme == "grey_red") {
    bgColors = ['#bababa', '#e0e0e0', '#ffffff', '#fddbc7', '#f4a582'];
  } else {
    bgColors = ['#ffffff', '#000000'];
  }

  return cytoscape.stylesheet()
  // general node style
  .selector('node').css({
    'shape': function shape(node) {
      return elementStyle.sbgnShape(node);
    },
    'content': function content(node) {
      return elementStyle.sbgnContent(node);
    },
    'font-size': 20,
    'width': function width(node) {
      return elementStyle.width(node);
    },
    'height': function height(node) {
      return elementStyle.height(node);
    },
    'text-valign': 'center',
    'text-halign': 'center',
    'border-width': 1.5,
    'border-color': '#555',
    'background-color': function backgroundColor(node) {
      return elementStyle.bgColor(node, bgColors);
    },
    'text-opacity': 1,
    'opacity': 1,
    'text-outline-color': 'white',
    'text-outline-opacity': 1,
    'text-outline-width': 0.75
  }).selector('node:selected').css({
    'background-color': '#d67614',
    'target-arrow-color': '#000',
    'text-outline-color': '#000'
  }).selector('node:active').css({
    'overlay-color': '#d67614',
    'overlay-padding': '14'
  })

  // draw sbgn specific styling (auxiliary items, clonemarker, etc.)
  .selector('\n          node[class="unspecified entity"],\n          node[class="simple chemical"], node[class="simple chemical multimer"],\n          node[class="macromolecule"], node[class="macromolecule multimer"],\n          node[class="nucleic acid feature"], node[class="nucleic acid feature multimer"],\n          node[class="perturbing agent"],\n          node[class="phenotype"],\n          node[class="complex"], node[class="complex multimer"], node[class="compartment"]\n        ').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node).bgImage;
    },
    'background-width': function backgroundWidth(node) {
      return sbgnsvg.draw(node).bgWidth;
    },
    'background-position-x': function backgroundPositionX(node) {
      return sbgnsvg.draw(node).bgPosX;
    },
    'background-position-y': function backgroundPositionY(node) {
      return sbgnsvg.draw(node).bgPosY;
    },
    'background-fit': function backgroundFit(node) {
      return sbgnsvg.draw(node).bgFit;
    },
    'background-clip': function backgroundClip(node) {
      return sbgnsvg.draw(node).bgClip;
    },
    'padding': function padding(node) {
      return sbgnsvg.draw(node).padding;
    },
    'border-width': function borderWidth(node) {
      return sbgnsvg.draw(node).borderWidth;
    }
  }).selector('\n          node[class="simple chemical multimer"],\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"],\n          node[class="complex multimer"]\n        ').css({
    'ghost': 'yes',
    'ghost-opacity': 1
  }).selector('\n          node[class="macromolecule multimer"],\n          node[class="nucleic acid feature multimer"]\n        ').css({
    'ghost-offset-x': 12,
    'ghost-offset-y': 12
  }).selector('\n          node[class="simple chemical multimer"]\n        ').css({
    'ghost-offset-x': 5,
    'ghost-offset-y': 5
  }).selector('\n          node[class="complex multimer"]\n        ').css({
    'ghost-offset-x': 16,
    'ghost-offset-y': 16
  })

  // compound node specific style
  .selector('node[class="complex"], node[class="complex multimer"], node[class="compartment"]').css({
    'compound-sizing-wrt-labels': 'exclude',
    'text-valign': 'bottom',
    'text-halign': 'center'
  })

  // process node specific style
  .selector('node[class="association"], node[class="dissociation"]').css({
    'background-opacity': 1
  }).selector('node[class="association"]').css({
    'background-color': '#6B6B6B'
  })

  // source and sink and dissociation are drawn differently because
  // of their unique shape
  .selector('node[class="source and sink"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node);
    },
    'background-fit': 'none',
    'background-width': '100%',
    'background-height': '100%',
    'background-clip': 'none',
    'background-repeat': 'no-repeat',
    'border-width': 0,
    'shape-polygon-points': '-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0'
  })

  // source and sink and dissociation are drawn differently because
  // of their unique shape
  .selector('node[class="dissociation"]').css({
    'background-image': function backgroundImage(node) {
      return sbgnsvg.draw(node);
    },
    'background-fit': 'none',
    'background-width': '100%',
    'background-height': '100%',
    'background-clip': 'none',
    'background-repeat': 'no-repeat',
    'border-width': 0
  })

  // edge styling
  .selector('edge').css({
    'arrow-scale': 1.75,
    'curve-style': 'bezier',
    'line-color': '#555',
    'target-arrow-fill': 'hollow',
    'source-arrow-fill': 'hollow',
    'width': 1.5,
    'target-arrow-color': '#555',
    'source-arrow-color': '#555',
    'text-border-color': '#555',
    'color': '#555'
  }).selector('edge:selected').css({
    'color': '#d67614',
    'line-color': '#d67614',
    'text-border-color': '#d67614',
    'source-arrow-color': '#d67614',
    'target-arrow-color': '#d67614'
  }).selector('edge:active').css({
    'background-opacity': 0.7, 'overlay-color': '#d67614',
    'overlay-padding': '8'
  }).selector('edge[cardinality > 0]').css({
    'text-background-shape': 'rectangle',
    'text-border-opacity': '1',
    'text-border-width': '1',
    'text-background-color': 'white',
    'text-background-opacity': '1'
  }).selector('edge[class="consumption"][cardinality > 0], edge[class="production"][cardinality > 0]').css({
    'source-label': function sourceLabel(edge) {
      return '' + edge.data('cardinality');
    },
    'source-text-offset': 10
  }).selector('edge[class]').css({
    'target-arrow-shape': function targetArrowShape(edge) {
      return elementStyle.sbgnArrowShape(edge);
    },
    'source-arrow-shape': 'none'
  }).selector('edge[class="inhibition"]').css({
    'target-arrow-fill': 'filled'
  }).selector('edge[class="production"]').css({
    'target-arrow-fill': 'filled'
  })

  // core
  .selector('core').css({
    'selection-box-color': '#d67614',
    'selection-box-opacity': '0.2', 'selection-box-border-color': '#d67614'
  });
};

module.exports = sbgnStyleSheet;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(5);

var containerNodes = __webpack_require__(10);
var entityPoolNodes = __webpack_require__(17);
var processNodes = __webpack_require__(18);

var sbgnData = __webpack_require__(0);

var cacheKeyFn = function cacheKeyFn(node) {
  return '' + JSON.stringify(node.id());
};

var sbgnNodeShapeMap = new Map()
// process nodes
.set('dissociation', memoize(processNodes.dissociation, cacheKeyFn)).set('phenotype', memoize(processNodes.phenotype, cacheKeyFn))

// entity pool nodes
.set('source and sink', memoize(entityPoolNodes.sourceAndSink, cacheKeyFn)).set('unspecified entity', memoize(entityPoolNodes.unspecifiedEntity, cacheKeyFn)).set('simple chemical', memoize(entityPoolNodes.simpleChemical, cacheKeyFn)).set('macromolecule', memoize(entityPoolNodes.macromolecule, cacheKeyFn)).set('nucleic acid feature', memoize(entityPoolNodes.nucleicAcidFeature, cacheKeyFn)).set('complex', memoize(entityPoolNodes.complex, cacheKeyFn)).set('perturbing agent', memoize(entityPoolNodes.perturbingAgent, cacheKeyFn))

// container nodes
.set('compartment', memoize(containerNodes.compartment, cacheKeyFn));

var draw = function draw(node) {
  var sbgnClass = sbgnData.sbgnClass(node).replace(' multimer', '');
  var shapeFn = sbgnNodeShapeMap.get(sbgnClass);
  if (shapeFn == null) {
    throw new TypeError(sbgnClass + ' does not have a shape implementation');
  }
  return shapeFn(node);
};

module.exports = {
  draw: draw
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var svgStr = __webpack_require__(1).svgStr;
var sbgnData = __webpack_require__(0);
var memoize = __webpack_require__(5);

var auxiliaryItems = __webpack_require__(4);
var baseShapes = __webpack_require__(2);

var containerNodes = {
  compartment: function compartment(node) {
    var auxItemWidth = 60;
    var auxItemHeight = 40;
    var uInfos = sbgnData.getUnitInfos(node);

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0]) : '', auxItemWidth, auxItemHeight);

    var lineSvg = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [lineSvg, uInfoSvg],
      bgWidth: ['100%'],
      bgPosX: ['0%', '25%'],
      bgPosY: ['19px', '0%'],
      bgFit: ['contain', 'none'],
      bgClip: 'node',
      padding: '38px',
      borderWidth: '4'
    };
  }
};

module.exports = containerNodes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var extend = __webpack_require__(16);

var supported = function() {
	if(typeof document === 'undefined' || typeof document.createElement !== 'function') return false;

	var canvas = document.createElement('canvas');
	if(typeof canvas.getContext !== 'function') return false;

	var context = canvas.getContext('2d');
	return !!context && (typeof context.measureText === 'function');
};

var initialize = function() {
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	var width = function(str, options) {
		options = extend({
			style: 'normal',
			variant: 'normal',
			weight: 'normal',
			size: 'medium',
			family: 'sans-serif',
			align: 'start',
			baseline: 'alphabetic'
		}, options);

		var size = options.size;
		if(typeof size === 'number') size = size + 'px';

		context.font = util.format('%s %s %s %s %s',
			options.style,
			options.variant,
			options.weight,
			size,
			options.family);
		context.textAlign = options.align;
		context.textBaseline = options.baseline;

		return context.measureText(str).width;
	};

	width.supported = true;
	return width;
};

module.exports = supported() ? initialize() : (function() {
	var width = function() {
		return 0;
	};

	width.supported = false;
	return width;
}());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(14);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(15);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseShapes = __webpack_require__(2);
var auxiliaryItems = __webpack_require__(4);

var svgStr = __webpack_require__(1).svgStr;
var getUnitInfos = __webpack_require__(0).getUnitInfos;
var getStateVars = __webpack_require__(0).getStateVars;
var hasClonemarker = __webpack_require__(0).hasClonemarker;

var element = __webpack_require__(3);

var entityPoolNodes = {
  unspecifiedEntity: function unspecifiedEntity(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);
    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '32px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  simpleChemical: function simpleChemical(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '12px'],
      bgPosY: ['52px', '8px', '48px', '0px'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  macromolecule: function macromolecule(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length + sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '52px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  nucleicAcidFeature: function nucleicAcidFeature(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var sVarSvg = svgStr(sVars.length > 0 ? auxiliaryItems.multiImgStateVar(2, 0, auxItemWidth - 5, auxItemHeight - 3, sVars[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(sVars.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg, sVarSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px', '40px'],
      bgPosY: ['52px', '8px', '52px', '44px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  },
  complex: function complex(node) {
    var itemW = 60;
    var itemH = 24;
    var uInfos = getUnitInfos(node);
    var sVars = getStateVars(node);

    var images = [];
    var bgWidth = [];
    var bgHeight = [];
    var bgPosX = [];
    var bgPosY = [];
    var bgFit = [];

    var style = new Map().set('stroke', '#555555').set('stroke-width', '6');

    // order of svg image generation matters
    if (uInfos.length + sVars.length > 0) {
      var topLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
      images.push(topLineSvg);
      bgWidth.push('100%');
      bgPosX.push('0%');
      bgPosY.push('11px');
      bgFit.push('none');
    }

    if (hasClonemarker(node)) {
      var bottomLineSvg = svgStr(baseShapes.line(0, 0, itemW, 0, style), itemW, itemH);
      images.push(bottomLineSvg);
      bgWidth.push('100%');
      bgPosX.push('0%');
      bgPosY.push('100%');
      bgFit.push('none');
    }

    if (hasClonemarker(node)) {
      var cloneSvg = svgStr(auxiliaryItems.multiImgCloneMarker(0, 2, itemW, itemH - 3), itemW, itemH);
      images.push(cloneSvg);
      bgWidth.push('100%');
      bgPosX.push('0%');
      bgPosY.push('100%');
      bgFit.push('none');
    }

    if (uInfos.length > 0) {
      var uInfoSvg = svgStr(auxiliaryItems.multiImgUnitOfInformation(2, 0, itemW - 5, itemH - 3, uInfos[0]), itemW, itemH);
      images.push(uInfoSvg);
      bgPosX.push('25%');
      bgPosY.push('0%');
      bgFit.push('none');
    }

    if (sVars.length > 0) {
      var sVarSvg = svgStr(auxiliaryItems.multiImgStateVar(2, 0, itemW - 5, itemH - 3, sVars[0]), itemW, itemH);
      images.push(sVarSvg);
      bgPosX.push('88%');
      bgPosY.push('0%');
      bgFit.push('none');
    }

    return {
      bgImage: images,
      bgWidth: bgWidth,
      bgPosX: bgPosX,
      bgPosY: bgPosY,
      bgFit: bgFit,
      bgClip: 'node',
      padding: '22px',
      borderWidth: 4
    };
  },
  sourceAndSink: function sourceAndSink(node) {
    var _element$dimensions = element.dimensions(node),
        nw = _element$dimensions.w,
        nh = _element$dimensions.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var radius = (nw - 2) / 2;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-linecap', 'square').set('stroke-width', '1.5').set('fill', 'none');

    var shapeArgs = [centerX, centerY, radius];

    var sourceAndSinkSvg = '\n      ' + baseShapes.circle.apply(baseShapes, shapeArgs.concat([styleMap])) + '\n      ' + (hasClonemarker(node) ? auxiliaryItems.cloneMarker(nw, nh, baseShapes.circle, shapeArgs) : '') + '\n      ' + baseShapes.line(0, nh, nw, 0, styleMap) + '\n    ';

    return svgStr(sourceAndSinkSvg, nw, nh, 0, 0, nw, nh);
  },
  perturbingAgent: function perturbingAgent(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;
    var borderWidth = 2;
    var fontSize = 10;
    var uInfos = getUnitInfos(node);

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight);

    var uInfoSvg = svgStr(uInfos.length > 0 ? auxiliaryItems.multiImgUnitOfInformation(2, 0, auxItemWidth - 5, auxItemHeight - 3, uInfos[0], borderWidth, fontSize) : '', auxItemWidth, auxItemHeight);

    var topLine = svgStr(uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) || uInfos.length > 0 ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, topLine, cloneMarkerSvg, uInfoSvg],
      bgWidth: ['100%', '100%', '100%'],
      bgPosX: ['0%', '0%', '0%', '20px'],
      bgPosY: ['56px', '8px', '56px', '0%'],
      bgFit: ['cover', 'cover', 'none', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  }
};

module.exports = entityPoolNodes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseShapes = __webpack_require__(2);
var auxiliaryItems = __webpack_require__(4);

var svgStr = __webpack_require__(1).svgStr;
var hasClonemarker = __webpack_require__(0).hasClonemarker;

var element = __webpack_require__(3);

var processNodes = {
  dissociation: function dissociation(node) {
    var _element$dimensions = element.dimensions(node),
        nw = _element$dimensions.w,
        nh = _element$dimensions.h;

    var centerX = nw / 2;
    var centerY = nh / 2;
    var outerRadius = (Math.min(nw, nh) - 2) / 2;
    var innerRadius = (Math.min(nw, nh) - 2) / 3;

    var styleMap = new Map().set('stroke', '#6A6A6A').set('stroke-width', '2').set('fill', 'none');

    var dissociationSvg = '\n      ' + baseShapes.circle(centerX, centerY, outerRadius, styleMap) + '\n      ' + baseShapes.circle(centerX, centerY, innerRadius, styleMap) + '\n    ';
    return svgStr(dissociationSvg, nw, nh);
  },
  phenotype: function phenotype(node) {
    var auxItemWidth = 100;
    var auxItemHeight = 20;

    var style = new Map().set('stroke', '#6A6A6A').set('stroke-width', '1');

    var cloneMarkerSvg = svgStr(hasClonemarker(node) ? auxiliaryItems.multiImgCloneMarker(0, 2, auxItemWidth, auxItemHeight - 3) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    var bottomLine = svgStr(hasClonemarker(node) ? baseShapes.line(0, 0, auxItemWidth, 0, style) : '', auxItemWidth, auxItemHeight, 0, 0, auxItemWidth, auxItemHeight);

    return {
      bgImage: [bottomLine, cloneMarkerSvg],
      bgWidth: ['100%', '100%'],
      bgPosX: ['0%', '0%'],
      bgPosY: ['56px', '56px'],
      bgFit: ['cover', 'none'],
      bgClip: 'node',
      padding: '8px',
      borderWidth: 2
    };
  }
};

module.exports = processNodes;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOWUzNTc1NmMwNmJhMzY5MzdmNSIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiXSwibmFtZXMiOlsic2JnbkRhdGFIYW5kbGVyIiwiaXNNdWx0aW1lciIsIm5vZGUiLCJkYXRhIiwiaW5jbHVkZXMiLCJoYXNDbG9uZW1hcmtlciIsImdldFN0YXRlVmFycyIsImdldFVuaXRJbmZvcyIsImhhc0F1eEl0ZW1zIiwibGVuZ3RoIiwic2JnbkNsYXNzIiwiZWxlbWVudCIsInNiZ25MYWJlbCIsInN0YXRlVmFyTGFiZWwiLCJzdGF0ZVZhciIsInZhcmlhYmxlIiwic3RhdGUiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZU1hcDJTdHIiLCJzdHlsZU1hcCIsInMiLCJrIiwidiIsInN2ZyIsInN2Z1N0ciIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwic3ZnVGV4dCIsInBhcnNlRnJvbVN0cmluZyIsImRvY3VtZW50RWxlbWVudCIsInZpZXdQb3J0V2lkdGgiLCJ2aWV3UG9ydEhlaWdodCIsInZpZXdCb3hYIiwidmlld0JveFkiLCJ2aWV3Qm94V2lkdGgiLCJ2aWV3Qm94SGVpZ2h0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3V0ZXJIVE1MIiwicmVxdWlyZSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJjbGlwUGF0aCIsImlkIiwiYmFzZVNoYXBlRm4iLCJiYXNlU2hhcGVGbkFyZ3MiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInN0eWxlIiwiZ2V0Iiwic2JnbkFycm93U2hhcGUiLCJlZGdlIiwic2JnbkNvbnRlbnQiLCJjb250ZW50IiwiZGltZW5zaW9ucyIsImRpbSIsIlR5cGVFcnJvciIsImJnQ29sb3IiLCJiZ0NvbG9ycyIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwibXVsdGlJbWdDbG9uZU1hcmtlciIsImNsb25lU3R5bGUiLCJtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uIiwidUluZm8iLCJib3JkZXJXaWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJtdWx0aUltZ1N0YXRlVmFyIiwic3RhdGVWYXJTdHlsZSIsInR3Iiwic3RhdGV2YXJpYWJsZVN2ZyIsImNsb25lTWFya2VyIiwibm9kZVdpZHRoIiwibm9kZUhlaWdodCIsInNoYXBlRm4iLCJzaGFwZUZuQXJncyIsImNsaXBJZCIsImNsb25lTWFya2VyU3R5bGUiLCJjbG9uZU1hcmtlclN2ZyIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJjeXRvc2NhcGUiLCJjb2xvclNjaGVtZSIsInNiZ25zdmciLCJzdHlsZXNoZWV0Iiwic2VsZWN0b3IiLCJjc3MiLCJkcmF3IiwiYmdJbWFnZSIsImJnV2lkdGgiLCJiZ1Bvc1giLCJiZ1Bvc1kiLCJiZ0ZpdCIsImJnQ2xpcCIsInBhZGRpbmciLCJtZW1vaXplIiwiY29udGFpbmVyTm9kZXMiLCJlbnRpdHlQb29sTm9kZXMiLCJwcm9jZXNzTm9kZXMiLCJjYWNoZUtleUZuIiwiSlNPTiIsInN0cmluZ2lmeSIsInNiZ25Ob2RlU2hhcGVNYXAiLCJkaXNzb2NpYXRpb24iLCJwaGVub3R5cGUiLCJzb3VyY2VBbmRTaW5rIiwidW5zcGVjaWZpZWRFbnRpdHkiLCJzaW1wbGVDaGVtaWNhbCIsIm1hY3JvbW9sZWN1bGUiLCJudWNsZWljQWNpZEZlYXR1cmUiLCJjb21wbGV4IiwicGVydHVyYmluZ0FnZW50IiwiY29tcGFydG1lbnQiLCJhdXhJdGVtV2lkdGgiLCJhdXhJdGVtSGVpZ2h0IiwidUluZm9zIiwidUluZm9TdmciLCJsaW5lU3ZnIiwic1ZhcnMiLCJzVmFyU3ZnIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpdGVtVyIsIml0ZW1IIiwiaW1hZ2VzIiwiYmdIZWlnaHQiLCJ0b3BMaW5lU3ZnIiwicHVzaCIsImJvdHRvbUxpbmVTdmciLCJjbG9uZVN2ZyIsIm53IiwibmgiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1cyIsInNoYXBlQXJncyIsInNvdXJjZUFuZFNpbmtTdmciLCJvdXRlclJhZGl1cyIsIm1pbiIsImlubmVyUmFkaXVzIiwiZGlzc29jaWF0aW9uU3ZnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7O0FDN0RBLElBQU1BLGtCQUFrQjtBQUN0QkMsWUFEc0Isc0JBQ1ZDLElBRFUsRUFDSjtBQUNoQixXQUFPQSxLQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQkMsUUFBbkIsQ0FBNEIsVUFBNUIsQ0FBUDtBQUNELEdBSHFCO0FBSXRCQyxnQkFKc0IsMEJBSU5ILElBSk0sRUFJQTtBQUNwQixXQUFPQSxLQUFLQyxJQUFMLENBQVUsYUFBVixDQUFQO0FBQ0QsR0FOcUI7QUFPdEJHLGNBUHNCLHdCQU9SSixJQVBRLEVBT0Y7QUFDbEIsV0FBT0EsS0FBS0MsSUFBTCxDQUFVLGdCQUFWLENBQVA7QUFDRCxHQVRxQjtBQVV0QkksY0FWc0Isd0JBVVJMLElBVlEsRUFVRjtBQUNsQixXQUFPQSxLQUFLQyxJQUFMLENBQVUsb0JBQVYsQ0FBUDtBQUNELEdBWnFCO0FBYXRCSyxhQWJzQix1QkFhVE4sSUFiUyxFQWFIO0FBQ2pCLFdBQVFBLEtBQUtDLElBQUwsQ0FBVSxnQkFBVixFQUE0Qk0sTUFBNUIsR0FBcUNQLEtBQUtDLElBQUwsQ0FBVSxvQkFBVixFQUFnQ00sTUFBckUsR0FBOEUsQ0FBdEY7QUFDRCxHQWZxQjtBQWdCdEJDLFdBaEJzQixxQkFnQlhDLE9BaEJXLEVBZ0JGO0FBQ2xCLFdBQU9BLFFBQVFSLElBQVIsQ0FBYSxPQUFiLENBQVA7QUFDRCxHQWxCcUI7QUFtQnRCUyxXQW5Cc0IscUJBbUJYRCxPQW5CVyxFQW1CRjtBQUNsQixXQUFPQSxRQUFRUixJQUFSLENBQWEsT0FBYixDQUFQO0FBQ0QsR0FyQnFCO0FBc0J0QlUsZUF0QnNCLHlCQXNCUEMsUUF0Qk8sRUFzQkc7QUFDdkIsUUFBTUMsV0FBV0QsU0FBU0UsS0FBVCxDQUFlRCxRQUFoQztBQUNBLFFBQU1FLFFBQVFILFNBQVNFLEtBQVQsQ0FBZUMsS0FBN0I7QUFDQSxRQUFJQSxTQUFTRixRQUFiLEVBQXVCO0FBQ3JCLGFBQVVFLEtBQVYsU0FBbUJGLFFBQW5CO0FBQ0Q7QUFDRCxRQUFJRSxLQUFKLEVBQVc7QUFDVCxhQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsUUFBSUYsUUFBSixFQUFjO0FBQ1osYUFBT0EsUUFBUDtBQUNEO0FBQ0QsV0FBTyxFQUFQO0FBQ0Q7QUFwQ3FCLENBQXhCOztBQXVDQUcsT0FBT0MsT0FBUCxHQUFpQm5CLGVBQWpCLEM7Ozs7Ozs7Ozs7O0FDdkNBLElBQU1vQixlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsSUFBSSxFQUFSOztBQUxpQztBQUFBO0FBQUE7O0FBQUE7QUFPakMseUJBQW1CRCxRQUFuQiw4SEFBNkI7QUFBQTs7QUFBQTs7QUFBQSxVQUFuQkUsQ0FBbUI7QUFBQSxVQUFoQkMsQ0FBZ0I7O0FBQzNCRixXQUFLQyxJQUFJLEdBQUosR0FBVSxHQUFWLEdBQWdCQyxDQUFoQixHQUFvQixHQUFwQixHQUEwQixHQUEvQjtBQUNEO0FBVGdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2pDLFNBQU9GLENBQVA7QUFDRCxDQVpEOztBQWNBLElBQU1HLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxNQUFELEVBQXVDO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QixHQUFzQjtBQUFBLE1BQWpCQyxNQUFpQix1RUFBUixHQUFROztBQUNqRCxNQUFNQyxTQUFTLElBQUlDLFNBQUosRUFBZjtBQUNBLE1BQUlDLHFJQUNnSEosS0FEaEgsb0JBQ2tJQyxNQURsSSxXQUM2SUYsTUFEN0ksV0FBSjtBQUVBLFNBQU9HLE9BQU9HLGVBQVAsQ0FBdUJELE9BQXZCLEVBQWdDLFVBQWhDLEVBQTRDRSxlQUFuRDtBQUNELENBTEQ7O0FBT0EsSUFBTVAsU0FBUyxTQUFUQSxNQUFTLENBQUNLLE9BQUQsRUFBVUcsYUFBVixFQUF5QkMsY0FBekIsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsWUFBN0QsRUFBMkVDLGFBQTNFLEVBQTZGO0FBQzFHLE1BQUlqQixJQUFJRyxJQUFJTSxPQUFKLEVBQWFHLGFBQWIsRUFBNEJDLGNBQTVCLEVBQTRDQyxRQUE1QyxFQUFzREMsUUFBdEQsRUFBZ0VDLFlBQWhFLEVBQThFQyxhQUE5RSxDQUFSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFJcEMsT0FBTyw2QkFBNkJxQyxtQkFBbUJsQixFQUFFbUIsU0FBckIsQ0FBeEM7O0FBRUEsU0FBT3RDLElBQVA7QUFDRCxDQVZEOztBQVlBZSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZPLFVBQVFBLE1BRE87QUFFZk4sZ0JBQWNBO0FBRkMsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNqQ0EsSUFBTUEsZUFBZXNCLG1CQUFPQSxDQUFDLENBQVIsRUFBMEJ0QixZQUEvQzs7QUFFQSxJQUFJdUIsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCQyxFQUE5QixFQUFrQ0MsRUFBbEMsRUFBc0M5QixRQUF0QyxFQUFnRDtBQUNsRSx3QkFDUUQsYUFBYUMsUUFBYixDQURSLHNCQUVNdUIsSUFBSUksRUFGVixVQUVnQkgsQ0FGaEIsaUJBR01ELElBQUlFLENBQUosR0FBUUcsRUFIZCxVQUdvQkosQ0FIcEIsWUFHMkJELElBQUlFLENBSC9CLFVBR29DRCxDQUhwQyxVQUd5Q0QsSUFBSUUsQ0FIN0MsV0FHa0RELElBQUlJLEVBSHRELGtCQUlNTCxJQUFJRSxDQUpWLFdBSWdCRCxJQUFJRSxDQUFKLEdBQVFHLEVBSnhCLGFBSWdDTixJQUFJRSxDQUpwQyxXQUl5Q0QsSUFBSUUsQ0FKN0MsV0FJa0RILElBQUlFLENBQUosR0FBUUksRUFKMUQsV0FJZ0VMLElBQUlFLENBSnBFLGtCQUtNSCxJQUFJTyxFQUxWLFdBS2dCTixJQUFJRSxDQUxwQixZQUsyQkgsQ0FMM0IsVUFLZ0NDLElBQUlFLENBTHBDLFVBS3lDSCxDQUx6QyxVQUs4Q0MsSUFBSUUsQ0FBSixHQUFRSSxFQUx0RCxpQkFNTVAsQ0FOTixVQU1XQyxJQUFJRyxFQU5mLFlBTXVCSixDQU52QixTQU00QkMsQ0FONUIsVUFNaUNELElBQUlJLEVBTnJDLFVBTTJDSCxDQU4zQztBQVVELENBWEQ7O0FBYUEsSUFBTU8sYUFBYTtBQUNqQkMsUUFEaUIsa0JBQ1RULENBRFMsRUFDTkMsQ0FETSxFQUNIbEIsS0FERyxFQUNJQyxNQURKLEVBQ1lQLFFBRFosRUFDc0I7QUFDckMsMkJBRUtELGFBQWFDLFFBQWIsQ0FGTCw2QkFHZSxJQUFFTSxLQUFGLEdBQVVpQixDQUh6QixXQUc4QixNQUFJaEIsTUFBSixHQUFhaUIsQ0FIM0MsYUFHa0QsSUFBRWxCLEtBQUYsR0FBVWlCLENBSDVELFdBR2lFLE1BQUloQixNQUFKLEdBQWFpQixDQUg5RSxhQUdxRixPQUFLbEIsS0FBTCxHQUFhaUIsQ0FIbEcsV0FHdUdoQixTQUFTaUIsQ0FIaEgsV0FHcUgsT0FBS2xCLEtBQUwsR0FBYWlCLENBSGxJLFdBR3VJaEIsU0FBU2lCLENBSGhKLGtDQUtlLE9BQUtsQixLQUFMLEdBQWFpQixDQUw1QixXQUtpQ2hCLFNBQVNpQixDQUwxQyxhQUtpRCxPQUFLbEIsS0FBTCxHQUFhaUIsQ0FMOUQsV0FLbUVoQixTQUFTaUIsQ0FMNUUsYUFLbUYsT0FBS2xCLEtBQUwsR0FBYWlCLENBTGhHLFdBS3FHaEIsU0FBU2lCLENBTDlHLFdBS21IbEIsUUFBUWlCLENBTDNILFdBS2dJLE9BQUtoQixNQUFMLEdBQWNpQixDQUw5SSxrQ0FPZWxCLFFBQVFpQixDQVB2QixXQU80QixNQUFJaEIsTUFBSixHQUFhaUIsQ0FQekMsYUFPZ0RsQixRQUFRaUIsQ0FQeEQsV0FPNkQsT0FBS2hCLE1BQUwsR0FBY2lCLENBUDNFLGFBT2tGbEIsUUFBUWlCLENBUDFGLFdBTytGLElBQUVoQixNQUFGLEdBQVdpQixDQVAxRyxXQU8rRyxPQUFLbEIsS0FBTCxHQUFhaUIsQ0FQNUgsV0FPaUksSUFBRWhCLE1BQUYsR0FBV2lCLENBUDVJLGtDQVNlLE9BQUtsQixLQUFMLEdBQWFpQixDQVQ1QixXQVNpQyxJQUFFaEIsTUFBRixHQUFXaUIsQ0FUNUMsYUFTbUQsT0FBS2xCLEtBQUwsR0FBYWlCLENBVGhFLFdBU3FFLElBQUVoQixNQUFGLEdBQVdpQixDQVRoRixhQVN1RixPQUFLbEIsS0FBTCxHQUFhaUIsQ0FUcEcsV0FTeUcsSUFBRWhCLE1BQUYsR0FBV2lCLENBVHBILFdBU3lILElBQUVsQixLQUFGLEdBQVVpQixDQVRuSSxXQVN3SSxPQUFLaEIsTUFBTCxHQUFjaUIsQ0FUdEo7QUFhRCxHQWZnQjtBQWlCakJTLFFBakJpQixrQkFpQlRDLEVBakJTLEVBaUJMQyxFQWpCSyxFQWlCREMsQ0FqQkMsRUFpQkVwQyxRQWpCRixFQWlCWTtBQUMzQiw2QkFBc0JrQyxFQUF0QixnQkFBaUNDLEVBQWpDLGVBQTJDQyxDQUEzQyxXQUFpRHJDLGFBQWFDLFFBQWIsQ0FBakQ7QUFDRCxHQW5CZ0I7QUFxQmpCcUMsVUFyQmlCLG9CQXFCUEMsRUFyQk8sRUFxQkhDLFdBckJHLEVBcUJVQyxlQXJCVixFQXFCMkJ4QyxRQXJCM0IsRUFxQnFDO0FBQ3BELHVEQUVvQnNDLEVBRnBCLFdBRTJCdkMsYUFBYUMsUUFBYixDQUYzQixtQkFHTXVDLGdEQUFlQyxlQUFmLEVBSE47QUFPRCxHQTdCZ0I7QUErQmpCQyxnQkEvQmlCLDBCQStCRGxCLENBL0JDLEVBK0JFQyxDQS9CRixFQStCS2xCLEtBL0JMLEVBK0JZQyxNQS9CWixFQStCb0JQLFFBL0JwQixFQStCOEI7QUFDN0MsK0JBQ1dELGFBQWFDLFFBQWIsQ0FEWCwwQkFFWXVCLElBQUksQ0FGaEIsWUFFc0JDLElBQUksQ0FGMUIsWUFFZ0NELElBQUlqQixLQUZwQyxZQUU4Q2tCLElBQUksQ0FGbEQsWUFFd0RELElBQUksT0FBS2pCLEtBRmpFLFlBRTJFa0IsSUFBSSxNQUFJakIsTUFGbkYsWUFFOEZnQixJQUFJakIsS0FGbEcsWUFFNEdrQixJQUFJakIsTUFGaEgsWUFFMkhnQixJQUFJLENBRi9ILFlBRXFJQyxJQUFJakIsTUFGekksWUFFcUpnQixJQUFJLE9BQUtqQixLQUY5SixZQUV3S2tCLElBQUksTUFBSWpCLE1BRmhMO0FBSUQsR0FwQ2dCO0FBc0NqQm1DLGNBdENpQix3QkFzQ0huQixDQXRDRyxFQXNDQUMsQ0F0Q0EsRUFzQ0dsQixLQXRDSCxFQXNDVUMsTUF0Q1YsRUFzQ2tCb0MsWUF0Q2xCLEVBc0NnQzNDLFFBdENoQyxFQXNDMEM7QUFDekQsK0JBQ1dELGFBQWFDLFFBQWIsQ0FEWCxrQ0FHSXVCLElBQUksSUFBRWpCLEtBSFYsV0FHbUJrQixJQUFJbUIsWUFIdkIsV0FHdUNwQixJQUFJb0IsWUFIM0MsV0FHMkRuQixJQUFJLElBQUVqQixNQUhqRSxXQUcyRWdCLElBQUlqQixLQUFKLEdBQVlxQyxZQUh2RixXQUd1R25CLElBQUksSUFBRWpCLE1BSDdHLFdBR3VIZ0IsSUFBSWpCLEtBSDNILFdBR29Ja0IsSUFBSW1CLFlBSHhJLGtCQUlJcEIsSUFBSWpCLEtBSlIsV0FJaUJrQixJQUFJakIsTUFBSixHQUFhb0MsWUFKOUIsV0FJOENwQixJQUFJakIsS0FBSixHQUFZcUMsWUFKMUQsV0FJMEVuQixJQUFJakIsTUFKOUUsV0FJd0ZnQixJQUFJb0IsWUFKNUYsV0FJNEduQixJQUFJakIsTUFKaEgsV0FJMEhnQixJQUFJLElBQUVqQixLQUpoSSxXQUl5SWtCLElBQUlqQixNQUFKLEdBQWFvQyxZQUp0SjtBQVFELEdBL0NnQjtBQWlEakJDLFNBakRpQixtQkFpRFJWLEVBakRRLEVBaURKQyxFQWpESSxFQWlEQVUsRUFqREEsRUFpRElDLEVBakRKLEVBaURROUMsUUFqRFIsRUFpRGtCO0FBQ2pDLHNDQUNpQmtDLEVBRGpCLGdCQUM0QkMsRUFENUIsZ0JBQ3VDVSxFQUR2QyxnQkFDa0RDLEVBRGxELFdBQ3lEL0MsYUFBYUMsUUFBYixDQUR6RDtBQUdELEdBckRnQjtBQXVEakIrQyxTQXZEaUIsbUJBdURSeEIsQ0F2RFEsRUF1RExDLENBdkRLLEVBdURGbEIsS0F2REUsRUF1REtDLE1BdkRMLEVBdURhUCxRQXZEYixFQXVEdUI7QUFDdEMsK0JBQ1dELGFBQWFDLFFBQWIsQ0FEWCwwQkFFWXVCLElBQUksQ0FGaEIsWUFFc0JDLElBQUksTUFBSWpCLE1BRjlCLFlBRXlDZ0IsSUFBSSxPQUFLakIsS0FGbEQsWUFFNERrQixJQUFJLElBQUVqQixNQUZsRSxZQUU2RWdCLElBQUksT0FBS2pCLEtBRnRGLFlBRWdHa0IsSUFBSSxJQUFFakIsTUFGdEcsWUFFaUhnQixJQUFJakIsS0FGckgsWUFFK0hrQixJQUFJLE1BQUlqQixNQUZ2SSxZQUVrSmdCLElBQUksT0FBS2pCLEtBRjNKLFlBRXFLa0IsSUFBSWpCLE1BRnpLLFlBRW9MZ0IsSUFBSSxPQUFLakIsS0FGN0wsWUFFdU1rQixJQUFJakIsTUFGM007QUFJRCxHQTVEZ0I7QUE4RGpCeUMsTUE5RGlCLGdCQThEWEMsRUE5RFcsRUE4RFBDLEVBOURPLEVBOERIQyxFQTlERyxFQThEQ0MsRUE5REQsRUE4REtwRCxRQTlETCxFQThEZTtBQUM5QiwyQkFBb0JpRCxFQUFwQixnQkFBK0JDLEVBQS9CLGdCQUEwQ0MsRUFBMUMsZ0JBQXFEQyxFQUFyRCxXQUE0RHJELGFBQWFDLFFBQWIsQ0FBNUQ7QUFDRCxHQWhFZ0I7QUFrRWpCcUQsV0FsRWlCLHFCQWtFTjlCLENBbEVNLEVBa0VIQyxDQWxFRyxFQWtFQWxCLEtBbEVBLEVBa0VPQyxNQWxFUCxFQWtFZVAsUUFsRWYsRUFrRXlCO0FBQ3hDLFdBQU9zQixjQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQmxCLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QyxFQUE0QyxDQUE1QyxFQUErQ1AsUUFBL0MsQ0FBUDtBQUNELEdBcEVnQjtBQXNFakJzRCxzQkF0RWlCLGdDQXNFSy9CLENBdEVMLEVBc0VRQyxDQXRFUixFQXNFV2xCLEtBdEVYLEVBc0VrQkMsTUF0RWxCLEVBc0UwQlAsUUF0RTFCLEVBc0VvQztBQUNuRCxXQUFPc0IsY0FBY0MsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0JsQixLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUMsS0FBR0EsTUFBNUMsRUFBb0QsS0FBR0EsTUFBdkQsRUFBK0RQLFFBQS9ELENBQVA7QUFDRCxHQXhFZ0I7QUEwRWpCdUQsZ0JBMUVpQiwwQkEwRURoQyxDQTFFQyxFQTBFRUMsQ0ExRUYsRUEwRUtsQixLQTFFTCxFQTBFWUMsTUExRVosRUEwRW9CUCxRQTFFcEIsRUEwRThCO0FBQzdDLFdBQU9zQixjQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQmxCLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQyxNQUFJRCxLQUF2QyxFQUE4QyxNQUFJQSxLQUFsRCxFQUF5RCxNQUFJQSxLQUE3RCxFQUFvRSxNQUFJQSxLQUF4RSxFQUErRU4sUUFBL0UsQ0FBUDtBQUNELEdBNUVnQjtBQThFakJ3RCxTQTlFaUIsbUJBOEVSakMsQ0E5RVEsRUE4RUxDLENBOUVLLEVBOEVGbEIsS0E5RUUsRUE4RUtDLE1BOUVMLEVBOEVhUCxRQTlFYixFQThFdUI7QUFDdEMsUUFBTXlELGNBQWMsTUFBTUMsS0FBS0MsR0FBTCxDQUFTckQsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBMUI7QUFDQSxXQUFPZSxjQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQmxCLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQ2tELFdBQW5DLEVBQWdEQSxXQUFoRCxFQUE2REEsV0FBN0QsRUFBMEVBLFdBQTFFLEVBQXVGekQsUUFBdkYsQ0FBUDtBQUNELEdBakZnQjtBQW1GakI0RCxRQW5GaUIsa0JBbUZUckMsQ0FuRlMsRUFtRk5DLENBbkZNLEVBbUZIcEMsTUFuRkcsRUFtRktZLFFBbkZMLEVBbUZlO0FBQzlCLFdBQU9zQixjQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQnBDLE1BQXBCLEVBQTRCQSxNQUE1QixFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxFQUEwQyxDQUExQyxFQUE2QyxDQUE3QyxFQUFnRFksUUFBaEQsQ0FBUDtBQUNELEdBckZnQjtBQXVGakI2RCxNQXZGaUIsZ0JBdUZYQyxDQXZGVyxFQXVGUnZDLENBdkZRLEVBdUZMQyxDQXZGSyxFQXVGRnhCLFFBdkZFLEVBdUZRO0FBQ3ZCLDBCQUFtQnVCLENBQW5CLGVBQTRCQyxDQUE1QixXQUFrQ3pCLGFBQWFDLFFBQWIsQ0FBbEMsU0FBNEQ4RCxDQUE1RDtBQUNEO0FBekZnQixDQUFuQjs7QUE4RkFqRSxPQUFPQyxPQUFQLEdBQWlCaUMsVUFBakIsQzs7Ozs7Ozs7O0FDN0dBLElBQU1nQyxXQUFXMUMsbUJBQU9BLENBQUMsQ0FBUixDQUFqQjs7QUFFQSxJQUFNMkMsWUFBWSxJQUFJQyxHQUFKLEdBQ2pCQyxHQURpQixDQUNiLG9CQURhLEVBQ1MsRUFBQ3pDLEdBQUcsRUFBSixFQUFRQyxHQUFHLEVBQVgsRUFBZXlDLE9BQU8sU0FBdEIsRUFEVCxFQUVqQkQsR0FGaUIsQ0FFYixpQkFGYSxFQUVNLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLFNBQXRCLEVBRk4sRUFHakJELEdBSGlCLENBR2IsMEJBSGEsRUFHZSxFQUFDekMsR0FBRyxFQUFKLEVBQVFDLEdBQUcsRUFBWCxFQUFleUMsT0FBTyxTQUF0QixFQUhmLEVBSWpCRCxHQUppQixDQUliLGVBSmEsRUFJSSxFQUFDekMsR0FBRyxFQUFKLEVBQVFDLEdBQUcsRUFBWCxFQUFleUMsT0FBTyxnQkFBdEIsRUFKSixFQUtqQkQsR0FMaUIsQ0FLYix3QkFMYSxFQUthLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLGdCQUF0QixFQUxiLEVBTWpCRCxHQU5pQixDQU1iLHNCQU5hLEVBTVcsRUFBQ3pDLEdBQUcsRUFBSixFQUFRQyxHQUFHLEVBQVgsRUFBZXlDLE9BQU8sc0JBQXRCLEVBTlgsRUFPakJELEdBUGlCLENBT2IsK0JBUGEsRUFPb0IsRUFBQ3pDLEdBQUcsRUFBSixFQUFRQyxHQUFHLEVBQVgsRUFBZXlDLE9BQU8sc0JBQXRCLEVBUHBCLEVBUWpCRCxHQVJpQixDQVFiLFNBUmEsRUFRRixFQUFDekMsR0FBRyxFQUFKLEVBQVFDLEdBQUcsRUFBWCxFQUFleUMsT0FBTyxjQUF0QixFQVJFLEVBU2pCRCxHQVRpQixDQVNiLGtCQVRhLEVBU08sRUFBQ3pDLEdBQUcsRUFBSixFQUFRQyxHQUFHLEVBQVgsRUFBZXlDLE9BQU8sY0FBdEIsRUFUUCxFQVVqQkQsR0FWaUIsQ0FVYixpQkFWYSxFQVVNLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLFNBQXRCLEVBVk4sRUFXakJELEdBWGlCLENBV2Isa0JBWGEsRUFXTyxFQUFDekMsR0FBRyxHQUFKLEVBQVNDLEdBQUcsRUFBWixFQUFnQnlDLE9BQU8sZ0JBQXZCLEVBWFAsRUFhakJELEdBYmlCLENBYWIsV0FiYSxFQWFBLEVBQUN6QyxHQUFHLEdBQUosRUFBU0MsR0FBRyxFQUFaLEVBQWdCeUMsT0FBTyxTQUF2QixFQWJBLEVBY2pCRCxHQWRpQixDQWNiLFNBZGEsRUFjRixFQUFDekMsR0FBRSxFQUFILEVBQU9DLEdBQUcsRUFBVixFQUFjeUMsT0FBTyxRQUFyQixFQWRFLEVBZWpCRCxHQWZpQixDQWViLG1CQWZhLEVBZVEsRUFBQ3pDLEdBQUUsRUFBSCxFQUFPQyxHQUFHLEVBQVYsRUFBY3lDLE9BQU8sUUFBckIsRUFmUixFQWdCakJELEdBaEJpQixDQWdCYixpQkFoQmEsRUFnQk0sRUFBQ3pDLEdBQUUsRUFBSCxFQUFPQyxHQUFHLEVBQVYsRUFBY3lDLE9BQU8sUUFBckIsRUFoQk4sRUFpQmpCRCxHQWpCaUIsQ0FpQmIsYUFqQmEsRUFpQkUsRUFBQ3pDLEdBQUUsRUFBSCxFQUFPQyxHQUFHLEVBQVYsRUFBY3lDLE9BQU8sU0FBckIsRUFqQkYsRUFrQmpCRCxHQWxCaUIsQ0FrQmIsY0FsQmEsRUFrQkcsRUFBQ3pDLEdBQUUsRUFBSCxFQUFPQyxHQUFHLEVBQVYsRUFBY3lDLE9BQU8sU0FBckIsRUFsQkgsRUFvQmpCRCxHQXBCaUIsQ0FvQmIsYUFwQmEsRUFvQkUsRUFBQ3pDLEdBQUcsRUFBSixFQUFRQyxHQUFHLEVBQVgsRUFBZXlDLE9BQU8sUUFBdEIsRUFwQkYsRUFzQmpCRCxHQXRCaUIsQ0FzQmIsS0F0QmEsRUFzQk4sRUFBQ3pDLEdBQUcsR0FBSixFQUFTQyxHQUFHLEVBQVosRUFBZ0J5QyxPQUFPLEtBQXZCLEVBdEJNLEVBdUJqQkQsR0F2QmlCLENBdUJiLEtBdkJhLEVBdUJOLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLFNBQXRCLEVBdkJNLEVBd0JqQkQsR0F4QmlCLENBd0JiLElBeEJhLEVBd0JQLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLFNBQXRCLEVBeEJPLEVBeUJqQkQsR0F6QmlCLENBeUJiLEtBekJhLEVBeUJOLEVBQUN6QyxHQUFHLEVBQUosRUFBUUMsR0FBRyxFQUFYLEVBQWV5QyxPQUFPLFNBQXRCLEVBekJNLENBQWxCOztBQTJCQSxJQUFNQyxlQUFlLElBQUlILEdBQUosR0FDcEJDLEdBRG9CLENBQ2hCLHVCQURnQixFQUNTLGdCQURULEVBRXBCQSxHQUZvQixDQUVoQixZQUZnQixFQUVGLEtBRkUsRUFHcEJBLEdBSG9CLENBR2hCLFdBSGdCLEVBR0gsUUFIRyxFQUlwQkEsR0FKb0IsQ0FJaEIsYUFKZ0IsRUFJRCxVQUpDLEVBS3BCQSxHQUxvQixDQUtoQixZQUxnQixFQUtGLFVBTEUsRUFNcEJBLEdBTm9CLENBTWhCLFlBTmdCLEVBTUYsU0FORSxDQUFyQjs7QUFRQSxJQUFNRyxlQUFlO0FBQ25CQyxXQURtQixxQkFDUnpGLElBRFEsRUFDRjtBQUNmLFFBQU1RLFlBQVkwRSxTQUFTMUUsU0FBVCxDQUFtQlIsSUFBbkIsRUFBeUIwRixPQUF6QixDQUFpQyxXQUFqQyxFQUE4QyxFQUE5QyxDQUFsQjtBQUNBLFFBQU1DLFFBQVFSLFVBQVVTLEdBQVYsQ0FBY3BGLFNBQWQsQ0FBZDtBQUNBLFdBQU9tRixRQUFRQSxNQUFNTCxLQUFkLEdBQXNCLFNBQTdCO0FBQ0QsR0FMa0I7QUFPbkJPLGdCQVBtQiwwQkFPSEMsSUFQRyxFQU9HO0FBQ3BCLFFBQU10RixZQUFZMEUsU0FBUzFFLFNBQVQsQ0FBbUJzRixJQUFuQixDQUFsQjtBQUNBLFFBQU1SLFFBQVFDLGFBQWFLLEdBQWIsQ0FBaUJwRixTQUFqQixDQUFkO0FBQ0EsV0FBTzhFLFFBQVFBLEtBQVIsR0FBZ0IsTUFBdkI7QUFDRCxHQVhrQjtBQWFuQlMsYUFibUIsdUJBYU4vRixJQWJNLEVBYUE7QUFDakIsUUFBTVEsWUFBWTBFLFNBQVMxRSxTQUFULENBQW1CUixJQUFuQixFQUF5QjBGLE9BQXpCLENBQWlDLFdBQWpDLEVBQThDLEVBQTlDLENBQWxCO0FBQ0EsUUFBSU0sVUFBVWQsU0FBU3hFLFNBQVQsQ0FBbUJWLElBQW5CLENBQWQ7O0FBRUEsUUFBSVEsYUFBYSxLQUFqQixFQUF3QjtBQUN0QndGLGdCQUFVLEtBQVY7QUFDRDtBQUNELFFBQUl4RixhQUFhLElBQWpCLEVBQXVCO0FBQ3JCd0YsZ0JBQVUsSUFBVjtBQUNEO0FBQ0QsUUFBSXhGLGFBQWEsS0FBakIsRUFBd0I7QUFDdEJ3RixnQkFBVSxLQUFWO0FBQ0Q7QUFDRCxRQUFJeEYsYUFBYSxpQkFBakIsRUFBb0M7QUFDbEN3RixnQkFBVSxNQUFWO0FBQ0Q7QUFDRCxRQUFJeEYsYUFBYSxtQkFBakIsRUFBc0M7QUFDcEN3RixnQkFBVSxHQUFWO0FBQ0Q7O0FBRUQsV0FBT0EsT0FBUDtBQUNELEdBbENrQjtBQW9DbkJDLFlBcENtQixzQkFvQ1BqRyxJQXBDTyxFQW9DRDtBQUNoQixRQUFNUSxZQUFZMEUsU0FBUzFFLFNBQVQsQ0FBbUJSLElBQW5CLENBQWxCO0FBQ0EsUUFBTWtHLE1BQU1mLFVBQVVTLEdBQVYsQ0FBY3BGLFNBQWQsQ0FBWjtBQUNBLFFBQUkwRixPQUFPLElBQVgsRUFBaUI7QUFDZixZQUFNLElBQUlDLFNBQUosQ0FBaUIzRixTQUFqQiw2Q0FBTjtBQUNEO0FBQ0QsV0FBTzBGLEdBQVA7QUFDRCxHQTNDa0I7QUE2Q25CekUsT0E3Q21CLGlCQTZDWnpCLElBN0NZLEVBNkNOO0FBQ1gsV0FBTyxLQUFLaUcsVUFBTCxDQUFnQmpHLElBQWhCLEVBQXNCNEMsQ0FBN0I7QUFDRCxHQS9Da0I7QUFpRG5CbEIsUUFqRG1CLGtCQWlEWDFCLElBakRXLEVBaURMO0FBQ1osV0FBTyxLQUFLaUcsVUFBTCxDQUFnQmpHLElBQWhCLEVBQXNCNkMsQ0FBN0I7QUFDRCxHQW5Ea0I7QUFxRG5CdUQsU0FyRG1CLG1CQXFEVnBHLElBckRVLEVBcURKcUcsUUFyREksRUFxRE07QUFDdkIsUUFBR0EsU0FBUzlGLE1BQVQsSUFBbUIsQ0FBdEIsRUFBeUI7QUFDdkIsYUFBTzhGLFNBQVMsQ0FBVCxDQUFQO0FBQ0QsS0FGRCxNQUdLLElBQUdBLFNBQVM5RixNQUFULElBQW1CLENBQXRCLEVBQXlCO0FBQzVCLFVBQU1DLFlBQVkwRSxTQUFTMUUsU0FBVCxDQUFtQlIsSUFBbkIsQ0FBbEI7QUFDQSxVQUFJUSxhQUFhLG9CQUFiLElBQXFDQSxhQUFhLGlCQUFsRCxJQUF1RUEsYUFBYSwwQkFBcEYsSUFBa0hBLGFBQWEsZUFBL0gsSUFBa0pBLGFBQWEsd0JBQS9KLElBQ09BLGFBQWEsc0JBRHBCLElBQzhDQSxhQUFhLCtCQUQzRCxJQUM4RkEsYUFBYSxrQkFEM0csSUFDaUlBLGFBQWEsaUJBRDlJLElBRU9BLGFBQWEsV0FGcEIsSUFFbUNBLGFBQWEsS0FGcEQsRUFFMkQ7QUFDekQsZUFBTzZGLFNBQVMsQ0FBVCxDQUFQO0FBQ0Q7QUFDRCxVQUFJN0YsYUFBYSxTQUFiLElBQTBCQSxhQUFhLGtCQUEzQyxFQUErRDtBQUM3RCxlQUFPNkYsU0FBUyxDQUFULENBQVA7QUFDRDtBQUNELFVBQUk3RixhQUFhLGFBQWpCLEVBQWdDO0FBQzlCLGVBQU82RixTQUFTLENBQVQsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxTQUFQO0FBQ0QsS0FkSSxNQWVBLElBQUdBLFNBQVM5RixNQUFULElBQW1CLENBQXRCLEVBQXlCO0FBQzVCLFVBQU1DLGFBQVkwRSxTQUFTMUUsU0FBVCxDQUFtQlIsSUFBbkIsQ0FBbEI7QUFDQSxVQUFJUSxjQUFhLG9CQUFiLElBQXFDQSxjQUFhLGtCQUFsRCxJQUF3RUEsY0FBYSxpQkFBckYsSUFDT0EsY0FBYSxXQURwQixJQUNtQ0EsY0FBYSxLQURoRCxJQUMwREEsY0FBYSxhQUQzRSxFQUMwRjtBQUN4RixlQUFPNkYsU0FBUyxDQUFULENBQVA7QUFDRDtBQUNELFVBQUk3RixjQUFhLGlCQUFiLElBQWtDQSxjQUFhLDBCQUFuRCxFQUErRTtBQUM3RSxlQUFPNkYsU0FBUyxDQUFULENBQVA7QUFDRDtBQUNELFVBQUk3RixjQUFhLGVBQWIsSUFBZ0NBLGNBQWEsd0JBQWpELEVBQTJFO0FBQ3pFLGVBQU82RixTQUFTLENBQVQsQ0FBUDtBQUNEO0FBQ0QsVUFBSTdGLGNBQWEsc0JBQWIsSUFBdUNBLGNBQWEsK0JBQXhELEVBQXlGO0FBQ3ZGLGVBQU82RixTQUFTLENBQVQsQ0FBUDtBQUNEO0FBQ0QsVUFBSTdGLGNBQWEsU0FBYixJQUEwQkEsY0FBYSxrQkFBM0MsRUFBK0Q7QUFDN0QsZUFBTzZGLFNBQVMsQ0FBVCxDQUFQO0FBQ0Q7QUFDRCxhQUFPLFNBQVA7QUFDRDtBQUNGO0FBNUZrQixDQUFyQjs7QUErRkFyRixPQUFPQyxPQUFQLEdBQWlCdUUsWUFBakIsQzs7Ozs7Ozs7Ozs7QUNwSUEsSUFBTWMsWUFBWTlELG1CQUFPQSxDQUFDLEVBQVIsQ0FBbEI7O0FBRUEsSUFBTVUsYUFBYVYsbUJBQU9BLENBQUMsQ0FBUixDQUFuQjtBQUNBLElBQU0wQyxXQUFXMUMsbUJBQU9BLENBQUMsQ0FBUixDQUFqQjs7QUFFQSxJQUFNK0QsaUJBQWlCO0FBRXJCQyxxQkFGcUIsK0JBRUE5RCxDQUZBLEVBRUdDLENBRkgsRUFFTWxCLEtBRk4sRUFFYUMsTUFGYixFQUVxQjs7QUFFeEMsUUFBTStFLGFBQWEsSUFBSXJCLEdBQUosR0FDbEJDLEdBRGtCLENBQ2QsUUFEYyxFQUNKLFNBREksRUFFbEJBLEdBRmtCLENBRWQsY0FGYyxFQUVFLEdBRkYsRUFHbEJBLEdBSGtCLENBR2QsTUFIYyxFQUdOLFNBSE0sQ0FBbkI7O0FBS0EsV0FBT25DLFdBQVdzQixTQUFYLENBQXFCOUIsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCbEIsS0FBM0IsRUFBa0NDLE1BQWxDLEVBQTBDK0UsVUFBMUMsQ0FBUDtBQUNELEdBVm9CO0FBWXJCQywyQkFacUIscUNBWU1oRSxDQVpOLEVBWVNDLENBWlQsRUFZWWxCLEtBWlosRUFZbUJDLE1BWm5CLEVBWTJCaUYsS0FaM0IsRUFZOEQ7QUFBQSxRQUE1QkMsV0FBNEIsdUVBQWhCLENBQWdCO0FBQUEsUUFBYkMsUUFBYSx1RUFBSixFQUFJOztBQUNqRixRQUFNN0IsT0FBTzJCLE1BQU1HLEtBQU4sQ0FBWTlCLElBQXpCO0FBQ0EsUUFBTStCLGlCQUFpQixJQUFJM0IsR0FBSixHQUN0QkMsR0FEc0IsQ0FDbEIsUUFEa0IsRUFDUixTQURRLEVBRXRCQSxHQUZzQixDQUVsQixjQUZrQixPQUVDdUIsV0FGRCxFQUd0QnZCLEdBSHNCLENBR2xCLE1BSGtCLEVBR1YsT0FIVSxFQUl0QkEsR0FKc0IsQ0FJbEIsY0FKa0IsRUFJRixDQUpFLENBQXZCOztBQU9BLFFBQU0yQixZQUFZLElBQUk1QixHQUFKLEdBQ2pCQyxHQURpQixDQUNiLG9CQURhLEVBQ1MsUUFEVCxFQUVqQkEsR0FGaUIsQ0FFYixXQUZhLEVBRUd3QixRQUZILFNBR2pCeEIsR0FIaUIsQ0FHYixhQUhhLEVBR0UsdUNBSEYsRUFJakJBLEdBSmlCLENBSWIsYUFKYSxFQUlFLFFBSkYsQ0FBbEI7O0FBTUEsUUFBTTRCLGFBQWFYLFVBQVV0QixJQUFWLEVBQWdCLEVBQUVrQyxRQUFRRixVQUFVcEIsR0FBVixDQUFjLGFBQWQsQ0FBVixFQUF3Q3VCLE1BQU1OLFFBQTlDLEVBQWhCLElBQTJFLENBQTlGOztBQUVBLFFBQU1PLG9DQUVGbEUsV0FBV3dCLGNBQVgsQ0FBMEJoQyxDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NzRSxVQUFoQyxFQUE0Q3ZGLE1BQTVDLEVBQW9EcUYsY0FBcEQsQ0FGRSxnQkFHRjdELFdBQVc4QixJQUFYLENBQWdCQSxJQUFoQixFQUFzQnRDLElBQUt1RSxhQUFhLENBQXhDLEVBQTRDdEUsSUFBTWpCLFNBQVMsQ0FBM0QsRUFBZ0VzRixTQUFoRSxDQUhFLFdBQU47O0FBTUEsV0FBT0ksb0JBQVA7QUFDRCxHQXBDb0I7QUFzQ3JCQyxrQkF0Q3FCLDRCQXNDSDNFLENBdENHLEVBc0NBQyxDQXRDQSxFQXNDR2xCLEtBdENILEVBc0NVQyxNQXRDVixFQXNDa0JkLFFBdENsQixFQXNDd0Q7QUFBQSxRQUE1QmdHLFdBQTRCLHVFQUFoQixDQUFnQjtBQUFBLFFBQWJDLFFBQWEsdUVBQUosRUFBSTs7O0FBRTNFLFFBQU1TLGdCQUFnQixJQUFJbEMsR0FBSixHQUNyQkMsR0FEcUIsQ0FDakIsUUFEaUIsRUFDUCxTQURPLEVBRXJCQSxHQUZxQixDQUVqQixjQUZpQixPQUVFdUIsV0FGRixFQUdyQnZCLEdBSHFCLENBR2pCLE1BSGlCLEVBR1QsT0FIUyxFQUlyQkEsR0FKcUIsQ0FJakIsY0FKaUIsRUFJRCxDQUpDLENBQXRCOztBQU1BLFFBQU0yQixZQUFZLElBQUk1QixHQUFKLEdBQ2pCQyxHQURpQixDQUNiLG9CQURhLEVBQ1MsUUFEVCxFQUVqQkEsR0FGaUIsQ0FFYixXQUZhLEVBRUd3QixRQUZILFNBR2pCeEIsR0FIaUIsQ0FHYixhQUhhLEVBR0UsdUNBSEYsRUFJakJBLEdBSmlCLENBSWIsYUFKYSxFQUlFLFFBSkYsQ0FBbEI7O0FBTUEsUUFBTWtDLEtBQUtqQixVQUFVcEIsU0FBU3ZFLGFBQVQsQ0FBdUJDLFFBQXZCLENBQVYsRUFBNEMsRUFBRXNHLFFBQVFGLFVBQVVwQixHQUFWLENBQWMsYUFBZCxDQUFWLEVBQXdDdUIsTUFBTU4sUUFBOUMsRUFBNUMsSUFBdUcsRUFBbEg7QUFDQSxRQUFNakUsSUFBSWlDLEtBQUtDLEdBQUwsQ0FBU3lDLEVBQVQsRUFBYSxFQUFiLENBQVY7QUFDQSxRQUFNQyxnQ0FFRnRFLFdBQVd5QixPQUFYLENBQW1CakMsQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QmxCLE1BQTVCLEVBQW9DNEYsYUFBcEMsQ0FGRSxnQkFHRnBFLFdBQVc4QixJQUFYLENBQWdCRSxTQUFTdkUsYUFBVCxDQUF1QkMsUUFBdkIsQ0FBaEIsRUFBa0Q4QixJQUFNRSxJQUFJLENBQTVELEVBQWlFRCxJQUFJakIsU0FBUyxDQUE5RSxFQUFpRnNGLFNBQWpGLENBSEUsV0FBTjs7QUFNQSxXQUFPUSxnQkFBUDtBQUNELEdBN0RvQjtBQStEckJDLGFBL0RxQix1QkErRFJDLFNBL0RRLEVBK0RHQyxVQS9ESCxFQStEZUMsT0EvRGYsRUErRHdCQyxXQS9EeEIsRUErRHFDO0FBQ3hELFFBQU1DLFNBQVMsYUFBZjs7QUFFQSxRQUFNQyxtQkFBbUIsSUFBSTNDLEdBQUosR0FDeEJDLEdBRHdCLENBQ3BCLFFBRG9CLEVBQ1YsU0FEVSxFQUV4QkEsR0FGd0IsQ0FFcEIsY0FGb0IsRUFFSixLQUZJLEVBR3hCQSxHQUh3QixDQUdwQixXQUhvQixZQUdDeUMsTUFIRCxRQUl4QnpDLEdBSndCLENBSXBCLE1BSm9CLEVBSVosU0FKWSxDQUF6Qjs7QUFNQSxRQUFNMkMsOEJBRUY5RSxXQUFXTSxRQUFYLENBQW9Cc0UsTUFBcEIsRUFBNEI1RSxXQUFXc0IsU0FBdkMsRUFBbUQsQ0FBQyxDQUFELEVBQUksSUFBSW1ELFVBQUosR0FBaUIsQ0FBckIsRUFBd0JELFNBQXhCLEVBQW1DQyxVQUFuQyxFQUErQyxJQUFJdkMsR0FBSixFQUEvQyxDQUFuRCxDQUZFLGdCQUdGd0MsNENBQVdDLFdBQVgsVUFBd0JFLGdCQUF4QixHQUhFLFdBQU47O0FBTUEsV0FBT0MsY0FBUDtBQUNEO0FBL0VvQixDQUF2Qjs7QUFrRkFoSCxPQUFPQyxPQUFQLEdBQWlCc0YsY0FBakIsQzs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdB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O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsbURBQW1EO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5ckJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0Es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QUFLTEMsYUFBTyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBTEY7QUFNTEMsY0FBUSxNQU5IO0FBT0xDLGVBQVMsS0FQSjtBQVFMcEMsbUJBQWE7QUFSUixLQUFQO0FBVUQ7QUFuRGtCLENBQXJCOztBQXNEQTVGLE9BQU9DLE9BQVAsR0FBaUJtSSxZQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM5ZTM1NzU2YzA2YmEzNjkzN2Y1IiwiY29uc3Qgc2JnbkRhdGFIYW5kbGVyID0ge1xuICBpc011bHRpbWVyIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xhc3MnKS5pbmNsdWRlcygnbXVsdGltZXInKTtcbiAgfSxcbiAgaGFzQ2xvbmVtYXJrZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbG9uZW1hcmtlcicpO1xuICB9LFxuICBnZXRTdGF0ZVZhcnMgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpO1xuICB9LFxuICBnZXRVbml0SW5mb3MgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKTtcbiAgfSxcbiAgaGFzQXV4SXRlbXMgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKS5sZW5ndGggKyBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpLmxlbmd0aCA+IDApO1xuICB9LFxuICBzYmduQ2xhc3MgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdjbGFzcycpO1xuICB9LFxuICBzYmduTGFiZWwgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdsYWJlbCcpO1xuICB9LFxuICBzdGF0ZVZhckxhYmVsIChzdGF0ZVZhcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gc3RhdGVWYXIuc3RhdGUudmFyaWFibGU7XG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVZhci5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdmFyaWFibGUpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1AJHt2YXJpYWJsZX1gO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25EYXRhSGFuZGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XG4gIGlmKCAhc3R5bGVNYXAgKXtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcyA9ICcnO1xuXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xuICAgIHMgKz0gayArICc9JyArICdcIicgKyB2ICsgJ1wiJyArICcgJztcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxuY29uc3Qgc3ZnID0gKHN2Z1N0ciwgd2lkdGggPSAxMDAsIGhlaWdodCA9IDEwMCkgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBzdmdUZXh0ID1cbiAgYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PjwhRE9DVFlQRSBzdmc+PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JyR7d2lkdGh9JyBoZWlnaHQ9JyR7aGVpZ2h0fSc+JHtzdmdTdHJ9PC9zdmc+YDtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xuICBsZXQgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xuXG4gIC8vIGJhc2U2NFxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcblxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xuICBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdTdHI6IHN2Z1N0cixcbiAgc3R5bGVNYXAyU3RyOiBzdHlsZU1hcDJTdHJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcuanMnKS5zdHlsZU1hcDJTdHI7XG5cbmxldCBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIxLCByMiwgcjMsIHI0LCBzdHlsZU1hcCkge1xuICByZXR1cm4gYFxuICA8cGF0aCAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IGQ9J1xuICAgIE0gJHt4ICsgcjF9ICR7eX1cbiAgICBMICR7eCArIHcgLSByMn0gJHt5fSBRICR7eCArIHd9ICR7eX0gJHt4ICsgd30gJHt5ICsgcjJ9XG4gICAgTCAke3ggKyB3IH0gJHt5ICsgaCAtIHIzfSBRICR7eCArIHd9ICR7eSArIGh9ICR7eCArIHcgLSByM30gJHt5ICsgaH1cbiAgICBMICR7eCArIHI0fSAke3kgKyBofSBRICR7eH0gJHt5ICsgaH0gJHt4fSAke3kgKyBoIC0gcjR9XG4gICAgTCAke3h9ICR7eSArIHIxfSBRICR7eH0gJHt5fSAke3ggKyByMX0gJHt5fVxuICAgIFonXG4gIC8+XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU2hhcGVzID0ge1xuICBiYXJyZWwgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcblxuICAgIDxnICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICA8cGF0aCBkPVwiTSAkezAqd2lkdGggKyB4fSAkey4wMypoZWlnaHQgKyB5fSBMICR7MCp3aWR0aCArIHh9ICR7Ljk3KmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IEwgJHswLjc1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBRICR7MC45NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHt3aWR0aCArIHh9ICR7MC45NSpoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHt3aWR0aCArIHh9ICR7Ljk1KmhlaWdodCArIHl9IEwgJHt3aWR0aCArIHh9ICR7MC4wNSpoZWlnaHQgKyB5fSBRICR7d2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gTCAkezAuMjUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswKndpZHRoICsgeH0gJHswLjAzKmhlaWdodCArIHl9XCIvPlxuICAgIDwvZz5cblxuICAgIGA7XG4gIH0sXG5cbiAgY2lyY2xlIChjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8Y2lyY2xlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByPScke3J9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICBjbGlwUGF0aCAoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9JyR7aWR9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxuICAgICAgICAke2Jhc2VTaGFwZUZuKC4uLmJhc2VTaGFwZUZuQXJncyl9XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgYDtcbiAgfSxcblxuICBjb25jYXZlSGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDB9LCAke3ggKyB3aWR0aH0sICR7eSArIDB9LCAke3ggKyAwLjg1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMH0sICR7eSArIGhlaWdodH0sICR7IHggKyAwLjE1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGN1dFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPSdcbiAgICAgICR7eCArIDAqd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofVxuICAgICAgJHt4ICsgd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIDAqd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH1cbiAgICAgICdcbiAgICAvPlxuICAgIGA7XG4gIH0sXG5cbiAgZWxsaXBzZSAoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxlbGxpcHNlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByeD0nJHtyeH0nIHJ5PScke3J5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPlxuICAgIGA7XG4gIH0sXG5cbiAgaGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIGhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGxpbmUgKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPGxpbmUgeDE9JyR7eDF9JyB5MT0nJHt5MX0nIHgyPScke3gyfScgeTI9JyR7eTJ9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICByZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHJvdW5kQm90dG9tUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIC4zKmhlaWdodCwgLjMqaGVpZ2h0LCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3RhZGl1bSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IC4yNCAqIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3F1YXJlICh4LCB5LCBsZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcblxuICB0ZXh0ICh0LCB4LCB5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPHRleHQgeD0nJHt4fScgeT0nJHt5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT4ke3R9PC90ZXh0PmA7XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaGFwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2Jhc2VTaGFwZXMuanMiLCJjb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IHNiZ25TdHlsZSA9IG5ldyBNYXAoKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5Jywge3c6IDMyLCBoOiAzMiwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIHt3OiA4OCwgaDogNTYsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyJywge3c6IDg4LCBoOiA1Miwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnY29tcGxleCcsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXG4uc2V0KCdjb21wbGV4IG11bHRpbWVyJywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbid9KVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJ30pXG5cbi5zZXQoJ3BoZW5vdHlwZScsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2hleGFnb24nfSlcbi5zZXQoJ3Byb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ2Fzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXG5cbi5zZXQoJ2NvbXBhcnRtZW50Jywge3c6IDUwLCBoOiA1MCwgc2hhcGU6ICdiYXJyZWwnfSlcblxuLnNldCgndGFnJywge3c6IDEwMCwgaDogNjUsIHNoYXBlOiAndGFnJ30pXG4uc2V0KCdhbmQnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ29yJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdub3QnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSk7XG5cbmNvbnN0IHNiZ25BcnJvd01hcCA9IG5ldyBNYXAoKVxuLnNldCgnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJywgJ3RyaWFuZ2xlLWNyb3NzJylcbi5zZXQoJ2luaGliaXRpb24nLCAndGVlJylcbi5zZXQoJ2NhdGFseXNpcycsICdjaXJjbGUnKVxuLnNldCgnc3RpbXVsYXRpb24nLCAndHJpYW5nbGUnKVxuLnNldCgncHJvZHVjdGlvbicsICd0cmlhbmdsZScpXG4uc2V0KCdtb2R1bGF0aW9uJywgJ2RpYW1vbmQnKTtcblxuY29uc3QgZWxlbWVudFN0eWxlID0ge1xuICBzYmduU2hhcGUgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIGNvbnN0IHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xuICB9LFxuXG4gIHNiZ25BcnJvd1NoYXBlIChlZGdlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKGVkZ2UpO1xuICAgIGNvbnN0IHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xuICB9LFxuXG4gIHNiZ25Db250ZW50IChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICBsZXQgY29udGVudCA9IHNiZ25EYXRhLnNiZ25MYWJlbChub2RlKTtcblxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ2FuZCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnQU5EJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb3InKSB7XG4gICAgICBjb250ZW50ID0gJ09SJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnbm90Jykge1xuICAgICAgY29udGVudCA9ICdOT1QnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvbWl0dGVkIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAndW5jZXJ0YWluIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJz8nO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuXG4gIGRpbWVuc2lvbnMgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgY29uc3QgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XG4gICAgfVxuICAgIHJldHVybiBkaW07XG4gIH0sXG5cbiAgd2lkdGggKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLnc7XG4gIH0sXG5cbiAgaGVpZ2h0IChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xuICB9LFxuICBcbiAgYmdDb2xvciAobm9kZSwgYmdDb2xvcnMpIHtcbiAgICBpZihiZ0NvbG9ycy5sZW5ndGggPT0gMikge1xuICAgICAgcmV0dXJuIGJnQ29sb3JzWzBdO1xuICAgIH1cbiAgICBlbHNlIGlmKGJnQ29sb3JzLmxlbmd0aCA9PSAzKSB7XG4gICAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgICBpZiAoc2JnbkNsYXNzID09ICd1bnNwZWNpZmllZCBlbnRpdHknIHx8IHNiZ25DbGFzcyA9PSAnc2ltcGxlIGNoZW1pY2FsJyB8fCBzYmduQ2xhc3MgPT0gJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicgfHwgc2JnbkNsYXNzID09ICdtYWNyb21vbGVjdWxlJyB8fCBzYmduQ2xhc3MgPT0gJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInXG4gICAgICAgICAgICAgIHx8IHNiZ25DbGFzcyA9PSAnbnVjbGVpYyBhY2lkIGZlYXR1cmUnIHx8IHNiZ25DbGFzcyA9PSAnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInIHx8IHNiZ25DbGFzcyA9PSAncGVydHVyYmluZyBhZ2VudCcgfHwgc2JnbkNsYXNzID09ICdzb3VyY2UgYW5kIHNpbmsnIFxuICAgICAgICAgICAgICB8fCBzYmduQ2xhc3MgPT0gJ3BoZW5vdHlwZScgfHwgc2JnbkNsYXNzID09ICd0YWcnKSB7XG4gICAgICAgIHJldHVybiBiZ0NvbG9yc1syXTtcbiAgICAgIH1cbiAgICAgIGlmIChzYmduQ2xhc3MgPT0gJ2NvbXBsZXgnIHx8IHNiZ25DbGFzcyA9PSAnY29tcGxleCBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzFdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnY29tcGFydG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBiZ0NvbG9yc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIiNmZmZmZmZcIjtcbiAgICB9XG4gICAgZWxzZSBpZihiZ0NvbG9ycy5sZW5ndGggPT0gNSkge1xuICAgICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAndW5zcGVjaWZpZWQgZW50aXR5JyB8fCBzYmduQ2xhc3MgPT0gJ3BlcnR1cmJpbmcgYWdlbnQnIHx8IHNiZ25DbGFzcyA9PSAnc291cmNlIGFuZCBzaW5rJyBcbiAgICAgICAgICAgICAgfHwgc2JnbkNsYXNzID09ICdwaGVub3R5cGUnIHx8IHNiZ25DbGFzcyA9PSAndGFnJyAgfHwgc2JnbkNsYXNzID09ICdjb21wYXJ0bWVudCcpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzJdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnc2ltcGxlIGNoZW1pY2FsJyB8fCBzYmduQ2xhc3MgPT0gJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzFdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnbWFjcm9tb2xlY3VsZScgfHwgc2JnbkNsYXNzID09ICdtYWNyb21vbGVjdWxlIG11bHRpbWVyJykge1xuICAgICAgICByZXR1cm4gYmdDb2xvcnNbNF07XG4gICAgICB9XG4gICAgICBpZiAoc2JnbkNsYXNzID09ICdudWNsZWljIGFjaWQgZmVhdHVyZScgfHwgc2JnbkNsYXNzID09ICdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzBdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnY29tcGxleCcgfHwgc2JnbkNsYXNzID09ICdjb21wbGV4IG11bHRpbWVyJykge1xuICAgICAgICByZXR1cm4gYmdDb2xvcnNbM107XG4gICAgICB9XG4gICAgICByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsImNvbnN0IHRleHRXaWR0aCA9IHJlcXVpcmUoJ3RleHQtd2lkdGgnKTtcblxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcy5qcycpO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XG5cbiAgbXVsdGlJbWdDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG5cbiAgbXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8sIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDU7XG5cbiAgICBjb25zdCB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpfVxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArICh1SW5mb1dpZHRoIC8gMiksIHkgKyAoIGhlaWdodCAvIDIpLCAgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHVuaXRPZkluZm9ybWF0aW9uU3ZnO1xuICB9LFxuXG4gIG11bHRpSW1nU3RhdGVWYXIgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXRlVmFyLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xuXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgMTA7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KHR3LCAzMCk7XG4gICAgY29uc3Qgc3RhdGV2YXJpYWJsZVN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKX1cbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgKCB3IC8gMiApLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG5cbiAgY2xvbmVNYXJrZXIgKG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcbiAgICBjb25zdCBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYClcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2xpcFBhdGgoY2xpcElkLCBiYXNlU2hhcGVzLnJlY3RhbmdsZSwgIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgbmV3IE1hcCgpXSl9XG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIGNsb25lTWFya2VyU3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBzYmduU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc2JnblN0eWxlLycpO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSwgY29sb3JTY2hlbWUpe1xuICByZXR1cm4gc2JnblN0eWxlU2hlZXQoY3l0b3NjYXBlLCBjb2xvclNjaGVtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgZWxlbWVudFN0eWxlID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5jb25zdCBzYmduc3ZnID0gcmVxdWlyZSgnLi9nbHlwaCcpO1xuXG5jb25zdCBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUsIGNvbG9yU2NoZW1lKSB7XG4gIFxuICBsZXQgYmdDb2xvcnMgPSBbXTtcbiAgaWYoY29sb3JTY2hlbWUgPT0gXCJncmV5c2NhbGVcIikge1xuICAgIGJnQ29sb3JzID0gWycjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJibHVlc2NhbGVcIikge1xuICAgIGJnQ29sb3JzID0gWycjZWZmM2ZmJywgJyNjNmRiZWYnLCAnIzllY2FlMSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJyZWRfYmx1ZVwiKSB7XG4gICAgYmdDb2xvcnMgPSBbJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJncmVlbl9icm93blwiKSB7XG4gICAgYmdDb2xvcnMgPSBbJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJwdXJwbGVfYnJvd25cIikge1xuICAgIGJnQ29sb3JzID0gWycjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInXTtcbiAgfVxuICBlbHNlIGlmKGNvbG9yU2NoZW1lID09IFwicHVycGxlX2dyZWVuXCIpIHtcbiAgICBiZ0NvbG9ycyA9IFsnI2E2ZGJhMCcsICcjZDlmMGQzJywgJyNmN2Y3ZjcnLCAnI2U3ZDRlOCcsICcjYzJhNWNmJ107XG4gIH1cbiAgZWxzZSBpZihjb2xvclNjaGVtZSA9PSBcImdyZXlfcmVkXCIpIHtcbiAgICBiZ0NvbG9ycyA9IFsnI2JhYmFiYScsICcjZTBlMGUwJywgJyNmZmZmZmYnLCAnI2ZkZGJjNycsICcjZjRhNTgyJ107XG4gIH1cbiAgZWxzZSB7XG4gICAgYmdDb2xvcnMgPSBbJyNmZmZmZmYnLCAnIzAwMDAwMCddO1xuICB9XG5cbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzaGFwZSc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnblNoYXBlKG5vZGUpLFxuICAgICAgICAgICdjb250ZW50JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKSxcbiAgICAgICAgICAnZm9udC1zaXplJzogMjAsXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEuNSxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5iZ0NvbG9yKG5vZGUsIGJnQ29sb3JzKSxcbiAgICAgICAgICAndGV4dC1vcGFjaXR5JzogMSxcbiAgICAgICAgICAnb3BhY2l0eSc6IDEsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICd3aGl0ZScsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1vcGFjaXR5JzogMSxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLXdpZHRoJzogMC43NVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6c2VsZWN0ZWQnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyMwMDAnLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnIzAwMCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlOmFjdGl2ZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdvdmVybGF5LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiAnMTQnXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZHJhdyBzYmduIHNwZWNpZmljIHN0eWxpbmcgKGF1eGlsaWFyeSBpdGVtcywgY2xvbmVtYXJrZXIsIGV0Yy4pXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInVuc3BlY2lmaWVkIGVudGl0eVwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsXCJdLCBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlXCJdLCBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmVcIl0sIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGVydHVyYmluZyBhZ2VudFwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwicGhlbm90eXBlXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4XCJdLCBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXSwgbm9kZVtjbGFzcz1cImNvbXBhcnRtZW50XCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ltYWdlLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1dpZHRoLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbi15JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ1Bvc1ksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0ZpdCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5iZ0NsaXAsXG4gICAgICAgICAgJ3BhZGRpbmcnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLnBhZGRpbmcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYm9yZGVyV2lkdGhcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdnaG9zdCc6ICd5ZXMnLFxuICAgICAgICAgICdnaG9zdC1vcGFjaXR5JzogMVxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDEyLFxuICAgICAgICAgICdnaG9zdC1vZmZzZXQteSc6IDEyXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwic2ltcGxlIGNoZW1pY2FsIG11bHRpbWVyXCJdXG4gICAgICAgIGApXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdnaG9zdC1vZmZzZXQteCc6IDUsXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogNVxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTYsXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTZcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb21wb3VuZCBub2RlIHNwZWNpZmljIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnY29tcG91bmQtc2l6aW5nLXdydC1sYWJlbHMnOiAnZXhjbHVkZScsXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2JvdHRvbScsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gcHJvY2VzcyBub2RlIHNwZWNpZmljIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cImFzc29jaWF0aW9uXCJdLCBub2RlW2NsYXNzPVwiZGlzc29jaWF0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtb3BhY2l0eSc6IDFcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNkI2QjZCJ1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJzb3VyY2UgYW5kIHNpbmtcIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxuICAgICAgICAgICdzaGFwZS1wb2x5Z29uLXBvaW50cyc6ICctMC44NiwgMC41LCAtMC43NSwgMC42NSwgLTEsIDAuOTUsIC0wLjk1LCAxLCAtMC42NSwgMC43NSwgLTAuNSwgMC44NiwgMCwgMSwgMC41LCAwLjg2LCAwLjcxLCAwLjcxLCAwLjg2LCAwLjUsIDEsIDAsIDAuODYsIC0wLjUsIDAuNzUsIC0wLjY1LCAxLCAtMC45NSwgMC45NSwgLTEsIDAuNjUsIC0wLjc1LCAwLjUsIC0wLjg2LCAwLCAtMSwgLTAuNSwgLTAuODYsIC0wLjcxLCAtMC43MSwgLTAuODYsIC0wLjUsIC0xLCAwJyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBzb3VyY2UgYW5kIHNpbmsgYW5kIGRpc3NvY2lhdGlvbiBhcmUgZHJhd24gZGlmZmVyZW50bHkgYmVjYXVzZVxuICAgICAgICAvLyBvZiB0aGVpciB1bmlxdWUgc2hhcGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiZGlzc29jaWF0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWZpdCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC13aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1oZWlnaHQnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY2xpcCc6ICdub25lJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMCxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBlZGdlIHN0eWxpbmdcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2Fycm93LXNjYWxlJzogMS43NSxcbiAgICAgICAgICAnY3VydmUtc3R5bGUnOiAnYmV6aWVyJyxcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnaG9sbG93JyxcbiAgICAgICAgICAnc291cmNlLWFycm93LWZpbGwnOiAnaG9sbG93JyxcbiAgICAgICAgICAnd2lkdGgnOiAxLjUsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyM1NTUnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAnY29sb3InOiAnIzU1NSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlOnNlbGVjdGVkJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2NvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnI2Q2NzYxNCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlOmFjdGl2ZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLW9wYWNpdHknOiAwLjcsICdvdmVybGF5LWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiAnOCdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NhcmRpbmFsaXR5ID4gMF0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLXNoYXBlJzogJ3JlY3RhbmdsZScsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLW9wYWNpdHknOiAnMScsXG4gICAgICAgICAgJ3RleHQtYm9yZGVyLXdpZHRoJzogJzEnLFxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtY29sb3InOiAnd2hpdGUnLFxuICAgICAgICAgICd0ZXh0LWJhY2tncm91bmQtb3BhY2l0eSc6ICcxJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJjb25zdW1wdGlvblwiXVtjYXJkaW5hbGl0eSA+IDBdLCBlZGdlW2NsYXNzPVwicHJvZHVjdGlvblwiXVtjYXJkaW5hbGl0eSA+IDBdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NvdXJjZS1sYWJlbCc6IChlZGdlKSA9PiAnJyArIGVkZ2UuZGF0YSgnY2FyZGluYWxpdHknKSxcbiAgICAgICAgICAnc291cmNlLXRleHQtb2Zmc2V0JzogMTBcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAoZWRnZSkgPT4gZWxlbWVudFN0eWxlLnNiZ25BcnJvd1NoYXBlKGVkZ2UpLFxuICAgICAgICAgICdzb3VyY2UtYXJyb3ctc2hhcGUnOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiaW5oaWJpdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd0YXJnZXQtYXJyb3ctZmlsbCc6ICdmaWxsZWQnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gY29yZVxuICAgICAgICAuc2VsZWN0b3IoJ2NvcmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnc2VsZWN0aW9uLWJveC1vcGFjaXR5JzogJzAuMicsICdzZWxlY3Rpb24tYm94LWJvcmRlci1jb2xvcic6ICcjZDY3NjE0J1xuICAgICAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2JnblN0eWxlU2hlZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2luZGV4LmpzIiwiY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XG5cbmNvbnN0IGNvbnRhaW5lck5vZGVzID0gcmVxdWlyZSgnLi9jb250YWluZXJOb2Rlcy5qcycpO1xuY29uc3QgZW50aXR5UG9vbE5vZGVzID0gcmVxdWlyZSgnLi9lbnRpdHlQb29sTm9kZXMuanMnKTtcbmNvbnN0IHByb2Nlc3NOb2RlcyA9IHJlcXVpcmUoJy4vcHJvY2Vzc05vZGVzLmpzJyk7XG5cbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IGNhY2hlS2V5Rm4gPSAobm9kZSkgPT4gJycgKyBKU09OLnN0cmluZ2lmeShub2RlLmlkKCkpO1xuXG5jb25zdCBzYmduTm9kZVNoYXBlTWFwID0gbmV3IE1hcCgpXG4vLyBwcm9jZXNzIG5vZGVzXG4uc2V0KCdkaXNzb2NpYXRpb24nLCBtZW1vaXplKHByb2Nlc3NOb2Rlcy5kaXNzb2NpYXRpb24sIGNhY2hlS2V5Rm4pKVxuLnNldCgncGhlbm90eXBlJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMucGhlbm90eXBlLCBjYWNoZUtleUZuKSlcblxuLy8gZW50aXR5IHBvb2wgbm9kZXNcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNvdXJjZUFuZFNpbmssIGNhY2hlS2V5Rm4pKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5JywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMudW5zcGVjaWZpZWRFbnRpdHksIGNhY2hlS2V5Rm4pKVxuLnNldCgnc2ltcGxlIGNoZW1pY2FsJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMuc2ltcGxlQ2hlbWljYWwsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLm1hY3JvbW9sZWN1bGUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnbnVjbGVpYyBhY2lkIGZlYXR1cmUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5udWNsZWljQWNpZEZlYXR1cmUsIGNhY2hlS2V5Rm4pKVxuLnNldCgnY29tcGxleCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLmNvbXBsZXgsIGNhY2hlS2V5Rm4pKVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnBlcnR1cmJpbmdBZ2VudCwgY2FjaGVLZXlGbikpXG5cbi8vIGNvbnRhaW5lciBub2Rlc1xuLnNldCgnY29tcGFydG1lbnQnLCBtZW1vaXplKGNvbnRhaW5lck5vZGVzLmNvbXBhcnRtZW50LCBjYWNoZUtleUZuKSk7XG5cblxuY29uc3QgZHJhdyA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHNiZ25DbGFzcyA9IHNiZ25EYXRhLnNiZ25DbGFzcyhub2RlKS5yZXBsYWNlKCcgbXVsdGltZXInLCAnJyk7XG4gIGxldCBzaGFwZUZuID0gc2Jnbk5vZGVTaGFwZU1hcC5nZXQoc2JnbkNsYXNzKTtcbiAgaWYgKHNoYXBlRm4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7c2JnbkNsYXNzfSBkb2VzIG5vdCBoYXZlIGEgc2hhcGUgaW1wbGVtZW50YXRpb25gKTtcbiAgfVxuICByZXR1cm4gc2hhcGVGbihub2RlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkcmF3OiBkcmF3XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IHNiZ25EYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJyk7XG5jb25zdCBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoLm1lbW9pemUnKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5jb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5cbmNvbnN0IGNvbnRhaW5lck5vZGVzID0ge1xuXG4gIGNvbXBhcnRtZW50IChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gNjA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDQwO1xuICAgIGNvbnN0IHVJbmZvcyA9IHNiZ25EYXRhLmdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGxldCBsaW5lU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2xpbmVTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzI1JSddLFxuICAgICAgYmdQb3NZOiBbJzE5cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvbnRhaW4nLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnMzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogJzQnXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJOb2RlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgc3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG5cdGlmKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGlmKHR5cGVvZiBjYW52YXMuZ2V0Q29udGV4dCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdHJldHVybiAhIWNvbnRleHQgJiYgKHR5cGVvZiBjb250ZXh0Lm1lYXN1cmVUZXh0ID09PSAnZnVuY3Rpb24nKTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHR2YXIgd2lkdGggPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gZXh0ZW5kKHtcblx0XHRcdHN0eWxlOiAnbm9ybWFsJyxcblx0XHRcdHZhcmlhbnQ6ICdub3JtYWwnLFxuXHRcdFx0d2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0ZmFtaWx5OiAnc2Fucy1zZXJpZicsXG5cdFx0XHRhbGlnbjogJ3N0YXJ0Jyxcblx0XHRcdGJhc2VsaW5lOiAnYWxwaGFiZXRpYydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHZhciBzaXplID0gb3B0aW9ucy5zaXplO1xuXHRcdGlmKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgc2l6ZSA9IHNpemUgKyAncHgnO1xuXG5cdFx0Y29udGV4dC5mb250ID0gdXRpbC5mb3JtYXQoJyVzICVzICVzICVzICVzJyxcblx0XHRcdG9wdGlvbnMuc3R5bGUsXG5cdFx0XHRvcHRpb25zLnZhcmlhbnQsXG5cdFx0XHRvcHRpb25zLndlaWdodCxcblx0XHRcdHNpemUsXG5cdFx0XHRvcHRpb25zLmZhbWlseSk7XG5cdFx0Y29udGV4dC50ZXh0QWxpZ24gPSBvcHRpb25zLmFsaWduO1xuXHRcdGNvbnRleHQudGV4dEJhc2VsaW5lID0gb3B0aW9ucy5iYXNlbGluZTtcblxuXHRcdHJldHVybiBjb250ZXh0Lm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gdHJ1ZTtcblx0cmV0dXJuIHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0ZWQoKSA/IGluaXRpYWxpemUoKSA6IChmdW5jdGlvbigpIHtcblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0d2lkdGguc3VwcG9ydGVkID0gZmFsc2U7XG5cdHJldHVybiB3aWR0aDtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90ZXh0LXdpZHRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBiYXNlU2hhcGVzID0gcmVxdWlyZSgnLi9iYXNlU2hhcGVzJyk7XG5jb25zdCBhdXhpbGlhcnlJdGVtcyA9IHJlcXVpcmUoJy4vYXV4aWxpYXJ5SXRlbXMnKTtcblxuY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBnZXRVbml0SW5mb3MgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRVbml0SW5mb3M7XG5jb25zdCBnZXRTdGF0ZVZhcnMgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5nZXRTdGF0ZVZhcnM7XG5jb25zdCBoYXNDbG9uZW1hcmtlciA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpLmhhc0Nsb25lbWFya2VyO1xuXG5jb25zdCBlbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5cbmNvbnN0IGVudGl0eVBvb2xOb2RlcyA9IHtcblxuICB1bnNwZWNpZmllZEVudGl0eSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzMycHgnLCAnNDRweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuXG4gIH0sXG5cbiAgc2ltcGxlQ2hlbWljYWwgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMTJweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzQ4cHgnLCAnMHB4J10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH0sXG5cbiAgbWFjcm9tb2xlY3VsZShub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTsgIH0sXG5cbiAgbnVjbGVpY0FjaWRGZWF0dXJlIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG4gICAgY29uc3Qgc1ZhcnMgPSBnZXRTdGF0ZVZhcnMobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihcbiAgICAgIHNWYXJzLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCBzVmFyc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmcsIHNWYXJTdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzIwcHgnLCAnNDBweCddLFxuICAgICAgYmdQb3NZOiBbJzUycHgnLCAnOHB4JywgJzUycHgnLCAnNDRweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBsZXggKG5vZGUpIHtcbiAgICBjb25zdCBpdGVtVyA9IDYwO1xuICAgIGNvbnN0IGl0ZW1IID0gMjQ7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3QgaW1hZ2VzID0gW107XG4gICAgY29uc3QgYmdXaWR0aCA9IFtdO1xuICAgIGNvbnN0IGJnSGVpZ2h0ID0gW107XG4gICAgY29uc3QgYmdQb3NYID0gW107XG4gICAgY29uc3QgYmdQb3NZID0gW107XG4gICAgY29uc3QgYmdGaXQgPSBbXTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM1NTU1NTUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICc2Jyk7XG5cbiAgICAvLyBvcmRlciBvZiBzdmcgaW1hZ2UgZ2VuZXJhdGlvbiBtYXR0ZXJzXG4gICAgaWYgKHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3BMaW5lU3ZnID0gc3ZnU3RyKGJhc2VTaGFwZXMubGluZSgwLCAwLCBpdGVtVywgMCwgc3R5bGUpLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2godG9wTGluZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzExcHgnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQ2xvbmVtYXJrZXIobm9kZSkpIHtcbiAgICAgIGNvbnN0IGJvdHRvbUxpbmVTdmcgPSBzdmdTdHIoYmFzZVNoYXBlcy5saW5lKDAsIDAsIGl0ZW1XLCAwLCBzdHlsZSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChib3R0b21MaW5lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChoYXNDbG9uZW1hcmtlcihub2RlKSkge1xuICAgICAgY29uc3QgY2xvbmVTdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBpdGVtVywgaXRlbUggLSAzKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKGNsb25lU3ZnKTtcbiAgICAgIGJnV2lkdGgucHVzaCgnMTAwJScpO1xuICAgICAgYmdQb3NYLnB1c2goJzAlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMTAwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmICh1SW5mb3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBpdGVtVyAtIDUsIGl0ZW1IIC0gMywgdUluZm9zWzBdKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHVJbmZvU3ZnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcyNSUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIGlmIChzVmFycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHNWYXJzWzBdKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHNWYXJTdmcpO1xuICAgICAgYmdQb3NYLnB1c2goJzg4JScpO1xuICAgICAgYmdQb3NZLnB1c2goJzAlJyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IGltYWdlcyxcbiAgICAgIGJnV2lkdGg6IGJnV2lkdGgsXG4gICAgICBiZ1Bvc1g6IGJnUG9zWCxcbiAgICAgIGJnUG9zWTogYmdQb3NZLFxuICAgICAgYmdGaXQ6IGJnRml0LFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnMjJweCcsXG4gICAgICBib3JkZXJXaWR0aDogNFxuICAgIH07XG4gIH0sXG5cbiAgc291cmNlQW5kU2luayAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xuXG4gICAgY29uc3QgY2VudGVyWCA9IG53IC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xuICAgIGNvbnN0IHJhZGl1cyA9IChudyAtIDIpIC8gMjtcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS1saW5lY2FwJywgJ3NxdWFyZScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBjb25zdCBzaGFwZUFyZ3MgPSBbY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzXTtcblxuICAgIGNvbnN0IHNvdXJjZUFuZFNpbmtTdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoLi4uc2hhcGVBcmdzLCBzdHlsZU1hcCl9XG4gICAgICAke2hhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMuY2xvbmVNYXJrZXIobncsIG5oLCBiYXNlU2hhcGVzLmNpcmNsZSwgc2hhcGVBcmdzKSA6ICcnfVxuICAgICAgJHtiYXNlU2hhcGVzLmxpbmUoMCwgbmgsIG53LCAwLCBzdHlsZU1hcCl9XG4gICAgYDtcblxuICAgIHJldHVybiBzdmdTdHIoc291cmNlQW5kU2lua1N2ZywgbncsIG5oLCAwLCAwLCBudywgbmgpO1xuICB9LFxuXG4gIHBlcnR1cmJpbmdBZ2VudCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHRvcExpbmUgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTZweCcsICc4cHgnLCAnNTZweCcsICcwJSddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudGl0eVBvb2xOb2RlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvZW50aXR5UG9vbE5vZGVzLmpzIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgcHJvY2Vzc05vZGVzID0ge1xuXG4gIGRpc3NvY2lhdGlvbiAobm9kZSkge1xuICAgIGNvbnN0IHt3OiBudywgaDogbmh9ID0gZWxlbWVudC5kaW1lbnNpb25zKG5vZGUpO1xuXG4gICAgY29uc3QgY2VudGVyWCA9IG53IC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gbmggLyAyO1xuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDI7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSAoTWF0aC5taW4obncsIG5oKSAtIDIpIC8gMztcblxuICAgIGNvbnN0IHN0eWxlTWFwID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcyJylcbiAgICAuc2V0KCdmaWxsJywgJ25vbmUnKTtcblxuICAgIGNvbnN0IGRpc3NvY2lhdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBvdXRlclJhZGl1cywgc3R5bGVNYXApfVxuICAgICAgJHtiYXNlU2hhcGVzLmNpcmNsZShjZW50ZXJYLCBjZW50ZXJZLCBpbm5lclJhZGl1cywgc3R5bGVNYXApfVxuICAgIGA7XG4gICAgcmV0dXJuIHN2Z1N0cihkaXNzb2NpYXRpb25TdmcsIG53LCBuaCk7XG4gIH0sXG5cbiAgcGhlbm90eXBlIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQsIDAsIDAsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIGNsb25lTWFya2VyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnXSxcbiAgICAgIGJnUG9zWTogWyc1NnB4JywgJzU2cHgnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzc05vZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiXSwic291cmNlUm9vdCI6IiJ9