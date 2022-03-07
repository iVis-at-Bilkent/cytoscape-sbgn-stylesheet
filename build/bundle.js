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
    'text-wrap': 'wrap',
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

  // to highlight query result (source, target and path nodes)
  .selector('node.source').css({
    'underlay-color': function underlayColor(node) {
      return node.data('highlightColor') ? node.data('highlightColor') : "#00ff00";
    },
    'underlay-padding': function underlayPadding(node) {
      return node.data('highlightWidth') ? node.data('highlightWidth') : "10px";
    },
    'underlay-opacity': 0.5
  }).selector('node.target').css({
    'underlay-color': function underlayColor(node) {
      console.log(node.data('highlightColor'));
      return node.data('highlightColor') ? node.data('highlightColor') : "#ff0000";
    },
    'underlay-padding': function underlayPadding(node) {
      return node.data('highlightWidth') ? node.data('highlightWidth') : "10px";
    },
    'underlay-opacity': 0.5
  }).selector('node.path').css({
    'underlay-color': function underlayColor(node) {
      return node.data('highlightColor') ? node.data('highlightColor') : "#ffff00";
    },
    'underlay-padding': function underlayPadding(node) {
      return node.data('highlightWidth') ? node.data('highlightWidth') : "10px";
    },
    'underlay-opacity': 0.5
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

  // to highlight edges in query result
  .selector('edge.path').css({
    'overlay-color': function overlayColor(edge) {
      return edge.data('highlightColor') ? edge.data('highlightColor') : "#ffff00";
    },
    'overlay-padding': function overlayPadding(edge) {
      return edge.data('highlightWidth') ? edge.data('highlightWidth') : "10px";
    },
    'overlay-opacity': 0.5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYWFmM2M1NDlkMDBlYTIxOWNmMiIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc2Jnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvYmFzZVNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2JnblN0eWxlL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9hdXhpbGlhcnlJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLm1lbW9pemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zYmduU3R5bGUvZ2x5cGgvY29udGFpbmVyTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtd2lkdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9lbnRpdHlQb29sTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NiZ25TdHlsZS9nbHlwaC9wcm9jZXNzTm9kZXMuanMiXSwibmFtZXMiOlsic2JnbkRhdGFIYW5kbGVyIiwiaXNNdWx0aW1lciIsIm5vZGUiLCJkYXRhIiwiaW5jbHVkZXMiLCJoYXNDbG9uZW1hcmtlciIsImdldFN0YXRlVmFycyIsImdldFVuaXRJbmZvcyIsImhhc0F1eEl0ZW1zIiwibGVuZ3RoIiwic2JnbkNsYXNzIiwiZWxlbWVudCIsInNiZ25MYWJlbCIsInN0YXRlVmFyTGFiZWwiLCJzdGF0ZVZhciIsInZhcmlhYmxlIiwic3RhdGUiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZU1hcDJTdHIiLCJzdHlsZU1hcCIsInMiLCJrIiwidiIsInN2ZyIsInN2Z1N0ciIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwic3ZnVGV4dCIsInBhcnNlRnJvbVN0cmluZyIsImRvY3VtZW50RWxlbWVudCIsInZpZXdQb3J0V2lkdGgiLCJ2aWV3UG9ydEhlaWdodCIsInZpZXdCb3hYIiwidmlld0JveFkiLCJ2aWV3Qm94V2lkdGgiLCJ2aWV3Qm94SGVpZ2h0IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3V0ZXJIVE1MIiwicmVxdWlyZSIsImJhc2VSZWN0YW5nbGUiLCJ4IiwieSIsInciLCJoIiwicjEiLCJyMiIsInIzIiwicjQiLCJiYXNlU2hhcGVzIiwiYmFycmVsIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJjbGlwUGF0aCIsImlkIiwiYmFzZVNoYXBlRm4iLCJiYXNlU2hhcGVGbkFyZ3MiLCJjb25jYXZlSGV4YWdvbiIsImN1dFJlY3RhbmdsZSIsImNvcm5lckxlbmd0aCIsImVsbGlwc2UiLCJyeCIsInJ5IiwiaGV4YWdvbiIsImxpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInJlY3RhbmdsZSIsInJvdW5kQm90dG9tUmVjdGFuZ2xlIiwicm91bmRSZWN0YW5nbGUiLCJzdGFkaXVtIiwicmFkaXVzUmF0aW8iLCJNYXRoIiwibWF4Iiwic3F1YXJlIiwidGV4dCIsInQiLCJzYmduRGF0YSIsInNiZ25TdHlsZSIsIk1hcCIsInNldCIsInNoYXBlIiwic2JnbkFycm93TWFwIiwiZWxlbWVudFN0eWxlIiwic2JnblNoYXBlIiwicmVwbGFjZSIsInN0eWxlIiwiZ2V0Iiwic2JnbkFycm93U2hhcGUiLCJlZGdlIiwic2JnbkNvbnRlbnQiLCJjb250ZW50IiwiZGltZW5zaW9ucyIsImRpbSIsIlR5cGVFcnJvciIsImJnQ29sb3IiLCJiZ0NvbG9ycyIsInRleHRXaWR0aCIsImF1eGlsaWFyeUl0ZW1zIiwibXVsdGlJbWdDbG9uZU1hcmtlciIsImNsb25lU3R5bGUiLCJtdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uIiwidUluZm8iLCJib3JkZXJXaWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJ1aW5mb1JlY3RTdHlsZSIsInRleHRTdHlsZSIsInVJbmZvV2lkdGgiLCJmYW1pbHkiLCJzaXplIiwidW5pdE9mSW5mb3JtYXRpb25TdmciLCJtdWx0aUltZ1N0YXRlVmFyIiwic3RhdGVWYXJTdHlsZSIsInR3Iiwic3RhdGV2YXJpYWJsZVN2ZyIsImNsb25lTWFya2VyIiwibm9kZVdpZHRoIiwibm9kZUhlaWdodCIsInNoYXBlRm4iLCJzaGFwZUZuQXJncyIsImNsaXBJZCIsImNsb25lTWFya2VyU3R5bGUiLCJjbG9uZU1hcmtlclN2ZyIsInNiZ25TdHlsZVNoZWV0IiwiZGVmYXVsdE9wdGlvbnMiLCJjeXRvc2NhcGUiLCJjb2xvclNjaGVtZSIsInNiZ25zdmciLCJzdHlsZXNoZWV0Iiwic2VsZWN0b3IiLCJjc3MiLCJkcmF3IiwiYmdJbWFnZSIsImJnV2lkdGgiLCJiZ1Bvc1giLCJiZ1Bvc1kiLCJiZ0ZpdCIsImJnQ2xpcCIsInBhZGRpbmciLCJjb25zb2xlIiwibG9nIiwibWVtb2l6ZSIsImNvbnRhaW5lck5vZGVzIiwiZW50aXR5UG9vbE5vZGVzIiwicHJvY2Vzc05vZGVzIiwiY2FjaGVLZXlGbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYmduTm9kZVNoYXBlTWFwIiwiZGlzc29jaWF0aW9uIiwicGhlbm90eXBlIiwic291cmNlQW5kU2luayIsInVuc3BlY2lmaWVkRW50aXR5Iiwic2ltcGxlQ2hlbWljYWwiLCJtYWNyb21vbGVjdWxlIiwibnVjbGVpY0FjaWRGZWF0dXJlIiwiY29tcGxleCIsInBlcnR1cmJpbmdBZ2VudCIsImNvbXBhcnRtZW50IiwiYXV4SXRlbVdpZHRoIiwiYXV4SXRlbUhlaWdodCIsInVJbmZvcyIsInVJbmZvU3ZnIiwibGluZVN2ZyIsInNWYXJzIiwic1ZhclN2ZyIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXRlbVciLCJpdGVtSCIsImltYWdlcyIsImJnSGVpZ2h0IiwidG9wTGluZVN2ZyIsInB1c2giLCJib3R0b21MaW5lU3ZnIiwiY2xvbmVTdmciLCJudyIsIm5oIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJzaGFwZUFyZ3MiLCJzb3VyY2VBbmRTaW5rU3ZnIiwib3V0ZXJSYWRpdXMiLCJtaW4iLCJpbm5lclJhZGl1cyIsImRpc3NvY2lhdGlvblN2ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsRUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsbURBQW1EO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5ckJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RyxFQUQ5RSxFQUVyQkQsWUFGcUIsRUFFUEMsYUFGTyxFQUVRLENBRlIsRUFFVyxDQUZYLEVBRWNELFlBRmQsRUFFNEJDLGFBRjVCLENBQXZCOztBQUtBLFFBQU1PLGFBQWFySixPQUNqQnJCLGVBQWVILElBQWYsSUFBdUJrRCxXQUFXaUIsSUFBWCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQmtHLFlBQXRCLEVBQW9DLENBQXBDLEVBQXVDMUUsS0FBdkMsQ0FBdkIsR0FBdUUsRUFEdEQsRUFFakIwRSxZQUZpQixFQUVIQyxhQUZHLEVBRVksQ0FGWixFQUVlLENBRmYsRUFFa0JELFlBRmxCLEVBRWdDQyxhQUZoQyxDQUFuQjs7QUFLQSxXQUFPO0FBQ0w1QixlQUFTLENBQUNtQyxVQUFELEVBQWE3QyxjQUFiLENBREo7QUFFTFcsZUFBUyxDQUFDLE1BQUQsRUFBUyxNQUFULENBRko7QUFHTEMsY0FBUSxDQUFDLElBQUQsRUFBTyxJQUFQLENBSEg7QUFJTEMsY0FBUSxDQUFDLE1BQUQsRUFBUyxNQUFULENBSkg7QUFLTEMsYUFBTyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBTEY7QUFNTEMsY0FBUSxNQU5IO0FBT0xDLGVBQVMsS0FQSjtBQVFMcEMsbUJBQWE7QUFSUixLQUFQO0FBVUQ7QUFuRGtCLENBQXJCOztBQXNEQTVGLE9BQU9DLE9BQVAsR0FBaUJxSSxZQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlU2JnblN0eWxlc2hlZXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRhYWYzYzU0OWQwMGVhMjE5Y2YyIiwiY29uc3Qgc2JnbkRhdGFIYW5kbGVyID0ge1xuICBpc011bHRpbWVyIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuZGF0YSgnY2xhc3MnKS5pbmNsdWRlcygnbXVsdGltZXInKTtcbiAgfSxcbiAgaGFzQ2xvbmVtYXJrZXIgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdjbG9uZW1hcmtlcicpO1xuICB9LFxuICBnZXRTdGF0ZVZhcnMgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCdzdGF0ZVZhcmlhYmxlcycpO1xuICB9LFxuICBnZXRVbml0SW5mb3MgKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5kYXRhKCd1bml0c09mSW5mb3JtYXRpb24nKTtcbiAgfSxcbiAgaGFzQXV4SXRlbXMgKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUuZGF0YSgnc3RhdGVWYXJpYWJsZXMnKS5sZW5ndGggKyBub2RlLmRhdGEoJ3VuaXRzT2ZJbmZvcm1hdGlvbicpLmxlbmd0aCA+IDApO1xuICB9LFxuICBzYmduQ2xhc3MgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdjbGFzcycpO1xuICB9LFxuICBzYmduTGFiZWwgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhKCdsYWJlbCcpO1xuICB9LFxuICBzdGF0ZVZhckxhYmVsIChzdGF0ZVZhcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gc3RhdGVWYXIuc3RhdGUudmFyaWFibGU7XG4gICAgY29uc3QgdmFsdWUgPSBzdGF0ZVZhci5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdmFyaWFibGUpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1AJHt2YXJpYWJsZX1gO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25EYXRhSGFuZGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvdXRpbC9zYmduLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gKHN0eWxlTWFwKSA9PiB7XG4gIGlmKCAhc3R5bGVNYXAgKXtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcyA9ICcnO1xuXG4gIGZvciggbGV0IFtrLCB2XSBvZiBzdHlsZU1hcCApe1xuICAgIHMgKz0gayArICc9JyArICdcIicgKyB2ICsgJ1wiJyArICcgJztcbiAgfVxuXG4gIHJldHVybiBzO1xufTtcblxuY29uc3Qgc3ZnID0gKHN2Z1N0ciwgd2lkdGggPSAxMDAsIGhlaWdodCA9IDEwMCkgPT4ge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCBzdmdUZXh0ID1cbiAgYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PjwhRE9DVFlQRSBzdmc+PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JyR7d2lkdGh9JyBoZWlnaHQ9JyR7aGVpZ2h0fSc+JHtzdmdTdHJ9PC9zdmc+YDtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnVGV4dCwgJ3RleHQveG1sJykuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3Qgc3ZnU3RyID0gKHN2Z1RleHQsIHZpZXdQb3J0V2lkdGgsIHZpZXdQb3J0SGVpZ2h0LCB2aWV3Qm94WCwgdmlld0JveFksIHZpZXdCb3hXaWR0aCwgdmlld0JveEhlaWdodCkgPT4ge1xuICBsZXQgcyA9IHN2ZyhzdmdUZXh0LCB2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld0JveFgsIHZpZXdCb3hZLCB2aWV3Qm94V2lkdGgsIHZpZXdCb3hIZWlnaHQpO1xuXG4gIC8vIGJhc2U2NFxuICAvLyBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyBidG9hKHMub3V0ZXJIVE1MKTtcblxuICAvLyB1cmkgY29tcG9uZW50IHN0cmluZ1xuICBsZXQgZGF0YSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHMub3V0ZXJIVE1MKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdTdHI6IHN2Z1N0cixcbiAgc3R5bGVNYXAyU3RyOiBzdHlsZU1hcDJTdHJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL3V0aWwvc3ZnLmpzIiwiY29uc3Qgc3R5bGVNYXAyU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcuanMnKS5zdHlsZU1hcDJTdHI7XG5cbmxldCBiYXNlUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIxLCByMiwgcjMsIHI0LCBzdHlsZU1hcCkge1xuICByZXR1cm4gYFxuICA8cGF0aCAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IGQ9J1xuICAgIE0gJHt4ICsgcjF9ICR7eX1cbiAgICBMICR7eCArIHcgLSByMn0gJHt5fSBRICR7eCArIHd9ICR7eX0gJHt4ICsgd30gJHt5ICsgcjJ9XG4gICAgTCAke3ggKyB3IH0gJHt5ICsgaCAtIHIzfSBRICR7eCArIHd9ICR7eSArIGh9ICR7eCArIHcgLSByM30gJHt5ICsgaH1cbiAgICBMICR7eCArIHI0fSAke3kgKyBofSBRICR7eH0gJHt5ICsgaH0gJHt4fSAke3kgKyBoIC0gcjR9XG4gICAgTCAke3h9ICR7eSArIHIxfSBRICR7eH0gJHt5fSAke3ggKyByMX0gJHt5fVxuICAgIFonXG4gIC8+XG4gIGA7XG59O1xuXG5jb25zdCBiYXNlU2hhcGVzID0ge1xuICBiYXJyZWwgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcblxuICAgIDxnICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX0+XG4gICAgICA8cGF0aCBkPVwiTSAkezAqd2lkdGggKyB4fSAkey4wMypoZWlnaHQgKyB5fSBMICR7MCp3aWR0aCArIHh9ICR7Ljk3KmhlaWdodCArIHl9IFEgJHswLjA2KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuMjUqd2lkdGggKyB4fSAke2hlaWdodCArIHl9IEwgJHswLjc1KndpZHRoICsgeH0gJHtoZWlnaHQgKyB5fSBRICR7MC45NSp3aWR0aCArIHh9ICR7aGVpZ2h0ICsgeX0gJHt3aWR0aCArIHh9ICR7MC45NSpoZWlnaHQgKyB5fVwiLz5cblxuICAgICAgPHBhdGggZD1cIk0gJHt3aWR0aCArIHh9ICR7Ljk1KmhlaWdodCArIHl9IEwgJHt3aWR0aCArIHh9ICR7MC4wNSpoZWlnaHQgKyB5fSBRICR7d2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswLjc1KndpZHRoICsgeH0gJHswKmhlaWdodCArIHl9XCIvPlxuXG4gICAgICA8cGF0aCBkPVwiTSAkezAuNzUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gTCAkezAuMjUqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gUSAkezAuMDYqd2lkdGggKyB4fSAkezAqaGVpZ2h0ICsgeX0gJHswKndpZHRoICsgeH0gJHswLjAzKmhlaWdodCArIHl9XCIvPlxuICAgIDwvZz5cblxuICAgIGA7XG4gIH0sXG5cbiAgY2lyY2xlIChjeCwgY3ksIHIsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGA8Y2lyY2xlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByPScke3J9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICBjbGlwUGF0aCAoaWQsIGJhc2VTaGFwZUZuLCBiYXNlU2hhcGVGbkFyZ3MsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9JyR7aWR9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9PlxuICAgICAgICAke2Jhc2VTaGFwZUZuKC4uLmJhc2VTaGFwZUZuQXJncyl9XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgYDtcbiAgfSxcblxuICBjb25jYXZlSGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDB9LCAke3ggKyB3aWR0aH0sICR7eSArIDB9LCAke3ggKyAwLjg1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0sICR7eCArIHdpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMH0sICR7eSArIGhlaWdodH0sICR7IHggKyAwLjE1KndpZHRofSwgJHt5ICsgMC41KmhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGN1dFJlY3RhbmdsZSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29ybmVyTGVuZ3RoLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgXG4gICAgPHBvbHlnb24gJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfVxuICAgICAgcG9pbnRzPSdcbiAgICAgICR7eCArIDAqd2lkdGh9ICR7eSArIGNvcm5lckxlbmd0aH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyAwKmhlaWdodH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIDAqaGVpZ2h0fSAke3ggKyB3aWR0aH0gJHt5ICsgY29ybmVyTGVuZ3RofVxuICAgICAgJHt4ICsgd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH0gJHt4ICsgd2lkdGggLSBjb3JuZXJMZW5ndGh9ICR7eSArIGhlaWdodH0gJHt4ICsgY29ybmVyTGVuZ3RofSAke3kgKyBoZWlnaHR9ICR7eCArIDAqd2lkdGh9ICR7eSArIGhlaWdodCAtIGNvcm5lckxlbmd0aH1cbiAgICAgICdcbiAgICAvPlxuICAgIGA7XG4gIH0sXG5cbiAgZWxsaXBzZSAoY3gsIGN5LCByeCwgcnksIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxlbGxpcHNlIGN4PScke2N4fScgY3k9JyR7Y3l9JyByeD0nJHtyeH0nIHJ5PScke3J5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfSAvPlxuICAgIGA7XG4gIH0sXG5cbiAgaGV4YWdvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICByZXR1cm4gYFxuICAgIDxwb2x5Z29uICR7c3R5bGVNYXAyU3RyKHN0eWxlTWFwKX1cbiAgICAgIHBvaW50cz0nJHt4ICsgMH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjI1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgMCpoZWlnaHR9LCAke3ggKyB3aWR0aH0sICR7eSArIDAuNSpoZWlnaHR9LCAke3ggKyAwLjc1KndpZHRofSwgJHt5ICsgaGVpZ2h0fSwgJHt4ICsgMC4yNSp3aWR0aH0sICR7eSArIGhlaWdodH0nXG4gICAgLz5gO1xuICB9LFxuXG4gIGxpbmUgKHgxLCB5MSwgeDIsIHkyLCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPGxpbmUgeDE9JyR7eDF9JyB5MT0nJHt5MX0nIHgyPScke3gyfScgeTI9JyR7eTJ9JyAke3N0eWxlTWFwMlN0cihzdHlsZU1hcCl9IC8+YDtcbiAgfSxcblxuICByZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgMCwgMCwgc3R5bGVNYXApO1xuICB9LFxuXG4gIHJvdW5kQm90dG9tUmVjdGFuZ2xlICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIDAsIC4zKmhlaWdodCwgLjMqaGVpZ2h0LCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgcm91bmRSZWN0YW5nbGUgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgLjA0KndpZHRoLCAuMDQqd2lkdGgsIC4wNCp3aWR0aCwgLjA0KndpZHRoLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3RhZGl1bSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3R5bGVNYXApIHtcbiAgICBjb25zdCByYWRpdXNSYXRpbyA9IC4yNCAqIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiBiYXNlUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1c1JhdGlvLCByYWRpdXNSYXRpbywgcmFkaXVzUmF0aW8sIHJhZGl1c1JhdGlvLCBzdHlsZU1hcCk7XG4gIH0sXG5cbiAgc3F1YXJlICh4LCB5LCBsZW5ndGgsIHN0eWxlTWFwKSB7XG4gICAgcmV0dXJuIGJhc2VSZWN0YW5nbGUoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIDAsIDAsIDAsIDAsIHN0eWxlTWFwKTtcbiAgfSxcblxuICB0ZXh0ICh0LCB4LCB5LCBzdHlsZU1hcCkge1xuICAgIHJldHVybiBgPHRleHQgeD0nJHt4fScgeT0nJHt5fScgJHtzdHlsZU1hcDJTdHIoc3R5bGVNYXApfT4ke3R9PC90ZXh0PmA7XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaGFwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2Jhc2VTaGFwZXMuanMiLCJjb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4vdXRpbC9zYmduLmpzJyk7XG5cbmNvbnN0IHNiZ25TdHlsZSA9IG5ldyBNYXAoKVxuLnNldCgndW5zcGVjaWZpZWQgZW50aXR5Jywge3c6IDMyLCBoOiAzMiwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdzaW1wbGUgY2hlbWljYWwnLCB7dzogNDgsIGg6IDQ4LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicsIHt3OiA0OCwgaDogNDgsIHNoYXBlOiAnZWxsaXBzZSd9KVxuLnNldCgnbWFjcm9tb2xlY3VsZScsIHt3OiA5NiwgaDogNDgsIHNoYXBlOiAncm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInLCB7dzogOTYsIGg6IDQ4LCBzaGFwZTogJ3JvdW5kcmVjdGFuZ2xlJ30pXG4uc2V0KCdudWNsZWljIGFjaWQgZmVhdHVyZScsIHt3OiA4OCwgaDogNTYsIHNoYXBlOiAnYm90dG9tcm91bmRyZWN0YW5nbGUnfSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyJywge3c6IDg4LCBoOiA1Miwgc2hhcGU6ICdib3R0b21yb3VuZHJlY3RhbmdsZSd9KVxuLnNldCgnY29tcGxleCcsIHt3OiAxMCwgaDogMTAsIHNoYXBlOiAnY3V0cmVjdGFuZ2xlJ30pXG4uc2V0KCdjb21wbGV4IG11bHRpbWVyJywge3c6IDEwLCBoOiAxMCwgc2hhcGU6ICdjdXRyZWN0YW5nbGUnfSlcbi5zZXQoJ3NvdXJjZSBhbmQgc2luaycsIHt3OiA2MCwgaDogNjAsIHNoYXBlOiAncG9seWdvbid9KVxuLnNldCgncGVydHVyYmluZyBhZ2VudCcsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2NvbmNhdmVoZXhhZ29uJ30pXG5cbi5zZXQoJ3BoZW5vdHlwZScsIHt3OiAxNDAsIGg6IDYwLCBzaGFwZTogJ2hleGFnb24nfSlcbi5zZXQoJ3Byb2Nlc3MnLCB7dzoyNSwgaDogMjUsIHNoYXBlOiAnc3F1YXJlJ30pXG4uc2V0KCd1bmNlcnRhaW4gcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ29taXR0ZWQgcHJvY2VzcycsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdzcXVhcmUnfSlcbi5zZXQoJ2Fzc29jaWF0aW9uJywge3c6MjUsIGg6IDI1LCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ2Rpc3NvY2lhdGlvbicsIHt3OjI1LCBoOiAyNSwgc2hhcGU6ICdlbGxpcHNlJ30pXG5cbi5zZXQoJ2NvbXBhcnRtZW50Jywge3c6IDUwLCBoOiA1MCwgc2hhcGU6ICdiYXJyZWwnfSlcblxuLnNldCgndGFnJywge3c6IDEwMCwgaDogNjUsIHNoYXBlOiAndGFnJ30pXG4uc2V0KCdhbmQnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSlcbi5zZXQoJ29yJywge3c6IDQwLCBoOiA0MCwgc2hhcGU6ICdlbGxpcHNlJ30pXG4uc2V0KCdub3QnLCB7dzogNDAsIGg6IDQwLCBzaGFwZTogJ2VsbGlwc2UnfSk7XG5cbmNvbnN0IHNiZ25BcnJvd01hcCA9IG5ldyBNYXAoKVxuLnNldCgnbmVjZXNzYXJ5IHN0aW11bGF0aW9uJywgJ3RyaWFuZ2xlLWNyb3NzJylcbi5zZXQoJ2luaGliaXRpb24nLCAndGVlJylcbi5zZXQoJ2NhdGFseXNpcycsICdjaXJjbGUnKVxuLnNldCgnc3RpbXVsYXRpb24nLCAndHJpYW5nbGUnKVxuLnNldCgncHJvZHVjdGlvbicsICd0cmlhbmdsZScpXG4uc2V0KCdtb2R1bGF0aW9uJywgJ2RpYW1vbmQnKTtcblxuY29uc3QgZWxlbWVudFN0eWxlID0ge1xuICBzYmduU2hhcGUgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICAgIGNvbnN0IHN0eWxlID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzdHlsZSA/IHN0eWxlLnNoYXBlIDogJ2VsbGlwc2UnO1xuICB9LFxuXG4gIHNiZ25BcnJvd1NoYXBlIChlZGdlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKGVkZ2UpO1xuICAgIGNvbnN0IHNoYXBlID0gc2JnbkFycm93TWFwLmdldChzYmduQ2xhc3MpO1xuICAgIHJldHVybiBzaGFwZSA/IHNoYXBlIDogJ25vbmUnO1xuICB9LFxuXG4gIHNiZ25Db250ZW50IChub2RlKSB7XG4gICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpLnJlcGxhY2UoJyBtdWx0aW1lcicsICcnKTtcbiAgICBsZXQgY29udGVudCA9IHNiZ25EYXRhLnNiZ25MYWJlbChub2RlKTtcblxuICAgIGlmIChzYmduQ2xhc3MgPT0gJ2FuZCcpIHtcbiAgICAgIGNvbnRlbnQgPSAnQU5EJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnb3InKSB7XG4gICAgICBjb250ZW50ID0gJ09SJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAnbm90Jykge1xuICAgICAgY29udGVudCA9ICdOT1QnO1xuICAgIH1cbiAgICBpZiAoc2JnbkNsYXNzID09ICdvbWl0dGVkIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJ1xcXFxcXFxcJztcbiAgICB9XG4gICAgaWYgKHNiZ25DbGFzcyA9PSAndW5jZXJ0YWluIHByb2Nlc3MnKSB7XG4gICAgICBjb250ZW50ID0gJz8nO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuXG4gIGRpbWVuc2lvbnMgKG5vZGUpIHtcbiAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgY29uc3QgZGltID0gc2JnblN0eWxlLmdldChzYmduQ2xhc3MpO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtzYmduQ2xhc3N9IGRvZXMgbm90IGhhdmUgYSBkZWZhdWx0IHdpZHRoIC8gaGVpZ2h0YCk7XG4gICAgfVxuICAgIHJldHVybiBkaW07XG4gIH0sXG5cbiAgd2lkdGggKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5kaW1lbnNpb25zKG5vZGUpLnc7XG4gIH0sXG5cbiAgaGVpZ2h0IChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9ucyhub2RlKS5oO1xuICB9LFxuICBcbiAgYmdDb2xvciAobm9kZSwgYmdDb2xvcnMpIHtcbiAgICBpZihiZ0NvbG9ycy5sZW5ndGggPT0gMikge1xuICAgICAgcmV0dXJuIGJnQ29sb3JzWzBdO1xuICAgIH1cbiAgICBlbHNlIGlmKGJnQ29sb3JzLmxlbmd0aCA9PSAzKSB7XG4gICAgICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSk7XG4gICAgICBpZiAoc2JnbkNsYXNzID09ICd1bnNwZWNpZmllZCBlbnRpdHknIHx8IHNiZ25DbGFzcyA9PSAnc2ltcGxlIGNoZW1pY2FsJyB8fCBzYmduQ2xhc3MgPT0gJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicgfHwgc2JnbkNsYXNzID09ICdtYWNyb21vbGVjdWxlJyB8fCBzYmduQ2xhc3MgPT0gJ21hY3JvbW9sZWN1bGUgbXVsdGltZXInXG4gICAgICAgICAgICAgIHx8IHNiZ25DbGFzcyA9PSAnbnVjbGVpYyBhY2lkIGZlYXR1cmUnIHx8IHNiZ25DbGFzcyA9PSAnbnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXInIHx8IHNiZ25DbGFzcyA9PSAncGVydHVyYmluZyBhZ2VudCcgfHwgc2JnbkNsYXNzID09ICdzb3VyY2UgYW5kIHNpbmsnIFxuICAgICAgICAgICAgICB8fCBzYmduQ2xhc3MgPT0gJ3BoZW5vdHlwZScgfHwgc2JnbkNsYXNzID09ICd0YWcnKSB7XG4gICAgICAgIHJldHVybiBiZ0NvbG9yc1syXTtcbiAgICAgIH1cbiAgICAgIGlmIChzYmduQ2xhc3MgPT0gJ2NvbXBsZXgnIHx8IHNiZ25DbGFzcyA9PSAnY29tcGxleCBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzFdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnY29tcGFydG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBiZ0NvbG9yc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIiNmZmZmZmZcIjtcbiAgICB9XG4gICAgZWxzZSBpZihiZ0NvbG9ycy5sZW5ndGggPT0gNSkge1xuICAgICAgY29uc3Qgc2JnbkNsYXNzID0gc2JnbkRhdGEuc2JnbkNsYXNzKG5vZGUpO1xuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAndW5zcGVjaWZpZWQgZW50aXR5JyB8fCBzYmduQ2xhc3MgPT0gJ3BlcnR1cmJpbmcgYWdlbnQnIHx8IHNiZ25DbGFzcyA9PSAnc291cmNlIGFuZCBzaW5rJyBcbiAgICAgICAgICAgICAgfHwgc2JnbkNsYXNzID09ICdwaGVub3R5cGUnIHx8IHNiZ25DbGFzcyA9PSAndGFnJyAgfHwgc2JnbkNsYXNzID09ICdjb21wYXJ0bWVudCcpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzJdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnc2ltcGxlIGNoZW1pY2FsJyB8fCBzYmduQ2xhc3MgPT0gJ3NpbXBsZSBjaGVtaWNhbCBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzFdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnbWFjcm9tb2xlY3VsZScgfHwgc2JnbkNsYXNzID09ICdtYWNyb21vbGVjdWxlIG11bHRpbWVyJykge1xuICAgICAgICByZXR1cm4gYmdDb2xvcnNbNF07XG4gICAgICB9XG4gICAgICBpZiAoc2JnbkNsYXNzID09ICdudWNsZWljIGFjaWQgZmVhdHVyZScgfHwgc2JnbkNsYXNzID09ICdudWNsZWljIGFjaWQgZmVhdHVyZSBtdWx0aW1lcicpIHtcbiAgICAgICAgcmV0dXJuIGJnQ29sb3JzWzBdO1xuICAgICAgfVxuICAgICAgaWYgKHNiZ25DbGFzcyA9PSAnY29tcGxleCcgfHwgc2JnbkNsYXNzID09ICdjb21wbGV4IG11bHRpbWVyJykge1xuICAgICAgICByZXR1cm4gYmdDb2xvcnNbM107XG4gICAgICB9XG4gICAgICByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRTdHlsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZWxlbWVudC5qcyIsImNvbnN0IHRleHRXaWR0aCA9IHJlcXVpcmUoJ3RleHQtd2lkdGgnKTtcblxuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcy5qcycpO1xuY29uc3Qgc2JnbkRhdGEgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKTtcblxuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSB7XG5cbiAgbXVsdGlJbWdDbG9uZU1hcmtlciAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuXG4gICAgY29uc3QgY2xvbmVTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpXG4gICAgLnNldCgnZmlsbCcsICcjRDJEMkQyJyk7XG5cbiAgICByZXR1cm4gYmFzZVNoYXBlcy5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY2xvbmVTdHlsZSk7XG4gIH0sXG5cbiAgbXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdUluZm8sIGJvcmRlcldpZHRoPTMsIGZvbnRTaXplPTE0KSB7XG4gICAgY29uc3QgdGV4dCA9IHVJbmZvLmxhYmVsLnRleHQ7XG4gICAgY29uc3QgdWluZm9SZWN0U3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzU1NTU1NScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgYCR7Ym9yZGVyV2lkdGh9YClcbiAgICAuc2V0KCdmaWxsJywgJ3doaXRlJylcbiAgICAuc2V0KCdmaWxsLW9wYWNpdHknLCAxKTtcblxuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdUluZm9XaWR0aCA9IHRleHRXaWR0aCh0ZXh0LCB7IGZhbWlseTogdGV4dFN0eWxlLmdldCgnZm9udC1mYW1pbHknKSwgc2l6ZTogZm9udFNpemV9KSArIDU7XG5cbiAgICBjb25zdCB1bml0T2ZJbmZvcm1hdGlvblN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnJvdW5kUmVjdGFuZ2xlKHgsIHksIHVJbmZvV2lkdGgsIGhlaWdodCwgdWluZm9SZWN0U3R5bGUpfVxuICAgICAgJHtiYXNlU2hhcGVzLnRleHQodGV4dCwgeCArICh1SW5mb1dpZHRoIC8gMiksIHkgKyAoIGhlaWdodCAvIDIpLCAgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHVuaXRPZkluZm9ybWF0aW9uU3ZnO1xuICB9LFxuXG4gIG11bHRpSW1nU3RhdGVWYXIgKHgsIHksIHdpZHRoLCBoZWlnaHQsIHN0YXRlVmFyLCBib3JkZXJXaWR0aD0zLCBmb250U2l6ZT0xNCkge1xuXG4gICAgY29uc3Qgc3RhdGVWYXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCBgJHtib3JkZXJXaWR0aH1gKVxuICAgIC5zZXQoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgIC5zZXQoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpXG4gICAgLnNldCgnZm9udC1zaXplJywgYCR7Zm9udFNpemV9cHhgKVxuICAgIC5zZXQoJ2ZvbnQtZmFtaWx5JywgJ0hlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuICAgIC5zZXQoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgY29uc3QgdHcgPSB0ZXh0V2lkdGgoc2JnbkRhdGEuc3RhdGVWYXJMYWJlbChzdGF0ZVZhciksIHsgZmFtaWx5OiB0ZXh0U3R5bGUuZ2V0KCdmb250LWZhbWlseScpLCBzaXplOiBmb250U2l6ZX0pICsgMTA7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KHR3LCAzMCk7XG4gICAgY29uc3Qgc3RhdGV2YXJpYWJsZVN2ZyA9XG4gICAgYFxuICAgICAgJHtiYXNlU2hhcGVzLnN0YWRpdW0oeCwgeSwgdywgaGVpZ2h0LCBzdGF0ZVZhclN0eWxlKX1cbiAgICAgICR7YmFzZVNoYXBlcy50ZXh0KHNiZ25EYXRhLnN0YXRlVmFyTGFiZWwoc3RhdGVWYXIpLCB4ICsgKCB3IC8gMiApLCB5ICsgaGVpZ2h0IC8gMiwgdGV4dFN0eWxlKX1cbiAgICBgO1xuXG4gICAgcmV0dXJuIHN0YXRldmFyaWFibGVTdmc7XG4gIH0sXG5cbiAgY2xvbmVNYXJrZXIgKG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgc2hhcGVGbiwgc2hhcGVGbkFyZ3MpIHtcbiAgICBjb25zdCBjbGlwSWQgPSAnY2xvbmVtYXJrZXInO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAuc2V0KCdjbGlwLXBhdGgnLCBgdXJsKCMke2NsaXBJZH0pYClcbiAgICAuc2V0KCdmaWxsJywgJyNEMkQyRDInKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2xpcFBhdGgoY2xpcElkLCBiYXNlU2hhcGVzLnJlY3RhbmdsZSwgIFswLCAzICogbm9kZUhlaWdodCAvIDQsIG5vZGVXaWR0aCwgbm9kZUhlaWdodCwgbmV3IE1hcCgpXSl9XG4gICAgICAke3NoYXBlRm4oLi4uc2hhcGVGbkFyZ3MsIGNsb25lTWFya2VyU3R5bGUpfVxuICAgIGA7XG5cbiAgICByZXR1cm4gY2xvbmVNYXJrZXJTdmc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXV4aWxpYXJ5SXRlbXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2F1eGlsaWFyeUl0ZW1zLmpzIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC5tZW1vaXplL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBzYmduU3R5bGVTaGVldCA9IHJlcXVpcmUoJy4vc2JnblN0eWxlLycpO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGN5dG9zY2FwZSwgY29sb3JTY2hlbWUpe1xuICByZXR1cm4gc2JnblN0eWxlU2hlZXQoY3l0b3NjYXBlLCBjb2xvclNjaGVtZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgZWxlbWVudFN0eWxlID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5jb25zdCBzYmduc3ZnID0gcmVxdWlyZSgnLi9nbHlwaCcpO1xuXG5jb25zdCBzYmduU3R5bGVTaGVldCA9IGZ1bmN0aW9uIChjeXRvc2NhcGUsIGNvbG9yU2NoZW1lKSB7XG4gIFxuICBsZXQgYmdDb2xvcnMgPSBbXTtcbiAgaWYoY29sb3JTY2hlbWUgPT0gXCJncmV5c2NhbGVcIikge1xuICAgIGJnQ29sb3JzID0gWycjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJibHVlc2NhbGVcIikge1xuICAgIGJnQ29sb3JzID0gWycjZWZmM2ZmJywgJyNjNmRiZWYnLCAnIzllY2FlMSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJyZWRfYmx1ZVwiKSB7XG4gICAgYmdDb2xvcnMgPSBbJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJncmVlbl9icm93blwiKSB7XG4gICAgYmdDb2xvcnMgPSBbJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMSddO1xuICB9XG4gIGVsc2UgaWYoY29sb3JTY2hlbWUgPT0gXCJwdXJwbGVfYnJvd25cIikge1xuICAgIGJnQ29sb3JzID0gWycjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInXTtcbiAgfVxuICBlbHNlIGlmKGNvbG9yU2NoZW1lID09IFwicHVycGxlX2dyZWVuXCIpIHtcbiAgICBiZ0NvbG9ycyA9IFsnI2E2ZGJhMCcsICcjZDlmMGQzJywgJyNmN2Y3ZjcnLCAnI2U3ZDRlOCcsICcjYzJhNWNmJ107XG4gIH1cbiAgZWxzZSBpZihjb2xvclNjaGVtZSA9PSBcImdyZXlfcmVkXCIpIHtcbiAgICBiZ0NvbG9ycyA9IFsnI2JhYmFiYScsICcjZTBlMGUwJywgJyNmZmZmZmYnLCAnI2ZkZGJjNycsICcjZjRhNTgyJ107XG4gIH1cbiAgZWxzZSB7XG4gICAgYmdDb2xvcnMgPSBbJyNmZmZmZmYnLCAnIzAwMDAwMCddO1xuICB9XG5cbiAgcmV0dXJuIGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAgLy8gZ2VuZXJhbCBub2RlIHN0eWxlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzaGFwZSc6IChub2RlKSA9PiBlbGVtZW50U3R5bGUuc2JnblNoYXBlKG5vZGUpLFxuICAgICAgICAgICdjb250ZW50JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5zYmduQ29udGVudChub2RlKSxcbiAgICAgICAgICAnZm9udC1zaXplJzogMjAsXG4gICAgICAgICAgJ3dpZHRoJzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS53aWR0aChub2RlKSxcbiAgICAgICAgICAnaGVpZ2h0JzogKG5vZGUpID0+IGVsZW1lbnRTdHlsZS5oZWlnaHQobm9kZSksXG4gICAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtaGFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgJ3RleHQtd3JhcCc6ICd3cmFwJyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogMS41LFxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAobm9kZSkgPT4gZWxlbWVudFN0eWxlLmJnQ29sb3Iobm9kZSwgYmdDb2xvcnMpLFxuICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAxLFxuICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1vdXRsaW5lLW9wYWNpdHknOiAxLFxuICAgICAgICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiAwLjc1XG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNkNjc2MTQnLFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzAwMCcsXG4gICAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjMDAwJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGU6YWN0aXZlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ292ZXJsYXktY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ292ZXJsYXktcGFkZGluZyc6ICcxNCdcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBkcmF3IHNiZ24gc3BlY2lmaWMgc3R5bGluZyAoYXV4aWxpYXJ5IGl0ZW1zLCBjbG9uZW1hcmtlciwgZXRjLilcbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwidW5zcGVjaWZpZWQgZW50aXR5XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWxcIl0sIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cIm1hY3JvbW9sZWN1bGVcIl0sIG5vZGVbY2xhc3M9XCJtYWNyb21vbGVjdWxlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJudWNsZWljIGFjaWQgZmVhdHVyZVwiXSwgbm9kZVtjbGFzcz1cIm51Y2xlaWMgYWNpZCBmZWF0dXJlIG11bHRpbWVyXCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwZXJ0dXJiaW5nIGFnZW50XCJdLFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJwaGVub3R5cGVcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXhcIl0sIG5vZGVbY2xhc3M9XCJjb21wbGV4IG11bHRpbWVyXCJdLCBub2RlW2NsYXNzPVwiY29tcGFydG1lbnRcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnSW1hZ2UsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnV2lkdGgsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24teCc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkuYmdQb3NYLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnUG9zWSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnRml0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAobm9kZSkgPT4gc2JnbnN2Zy5kcmF3KG5vZGUpLmJnQ2xpcCxcbiAgICAgICAgICAncGFkZGluZyc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSkucGFkZGluZyxcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKS5ib3JkZXJXaWR0aFxuICAgICAgICB9KVxuXG4gICAgICAgIC5zZWxlY3RvcihgXG4gICAgICAgICAgbm9kZVtjbGFzcz1cInNpbXBsZSBjaGVtaWNhbCBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl0sXG4gICAgICAgICAgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0JzogJ3llcycsXG4gICAgICAgICAgJ2dob3N0LW9wYWNpdHknOiAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwibWFjcm9tb2xlY3VsZSBtdWx0aW1lclwiXSxcbiAgICAgICAgICBub2RlW2NsYXNzPVwibnVjbGVpYyBhY2lkIGZlYXR1cmUgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogMTIsXG4gICAgICAgICAgJ2dob3N0LW9mZnNldC15JzogMTJcbiAgICAgICAgfSlcblxuICAgICAgICAuc2VsZWN0b3IoYFxuICAgICAgICAgIG5vZGVbY2xhc3M9XCJzaW1wbGUgY2hlbWljYWwgbXVsdGltZXJcIl1cbiAgICAgICAgYClcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ2dob3N0LW9mZnNldC14JzogNSxcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiA1XG4gICAgICAgIH0pXG5cbiAgICAgICAgLnNlbGVjdG9yKGBcbiAgICAgICAgICBub2RlW2NsYXNzPVwiY29tcGxleCBtdWx0aW1lclwiXVxuICAgICAgICBgKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXgnOiAxNixcbiAgICAgICAgICAnZ2hvc3Qtb2Zmc2V0LXknOiAxNlxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbXBvdW5kIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiY29tcGxleFwiXSwgbm9kZVtjbGFzcz1cImNvbXBsZXggbXVsdGltZXJcIl0sIG5vZGVbY2xhc3M9XCJjb21wYXJ0bWVudFwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb21wb3VuZC1zaXppbmctd3J0LWxhYmVscyc6ICdleGNsdWRlJyxcbiAgICAgICAgICAndGV4dC12YWxpZ24nOiAnYm90dG9tJyxcbiAgICAgICAgICAndGV4dC1oYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBwcm9jZXNzIG5vZGUgc3BlY2lmaWMgc3R5bGVcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlW2NsYXNzPVwiYXNzb2NpYXRpb25cIl0sIG5vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJhc3NvY2lhdGlvblwiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM2QjZCNkInXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gc291cmNlIGFuZCBzaW5rIGFuZCBkaXNzb2NpYXRpb24gYXJlIGRyYXduIGRpZmZlcmVudGx5IGJlY2F1c2VcbiAgICAgICAgLy8gb2YgdGhlaXIgdW5pcXVlIHNoYXBlXG4gICAgICAgIC5zZWxlY3Rvcignbm9kZVtjbGFzcz1cInNvdXJjZSBhbmQgc2lua1wiXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogKG5vZGUpID0+IHNiZ25zdmcuZHJhdyhub2RlKSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1maXQnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNsaXAnOiAnbm9uZScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgJ2JvcmRlci13aWR0aCc6IDAsXG4gICAgICAgICAgJ3NoYXBlLXBvbHlnb24tcG9pbnRzJzogJy0wLjg2LCAwLjUsIC0wLjc1LCAwLjY1LCAtMSwgMC45NSwgLTAuOTUsIDEsIC0wLjY1LCAwLjc1LCAtMC41LCAwLjg2LCAwLCAxLCAwLjUsIDAuODYsIDAuNzEsIDAuNzEsIDAuODYsIDAuNSwgMSwgMCwgMC44NiwgLTAuNSwgMC43NSwgLTAuNjUsIDEsIC0wLjk1LCAwLjk1LCAtMSwgMC42NSwgLTAuNzUsIDAuNSwgLTAuODYsIDAsIC0xLCAtMC41LCAtMC44NiwgLTAuNzEsIC0wLjcxLCAtMC44NiwgLTAuNSwgLTEsIDAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHNvdXJjZSBhbmQgc2luayBhbmQgZGlzc29jaWF0aW9uIGFyZSBkcmF3biBkaWZmZXJlbnRseSBiZWNhdXNlXG4gICAgICAgIC8vIG9mIHRoZWlyIHVuaXF1ZSBzaGFwZVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGVbY2xhc3M9XCJkaXNzb2NpYXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChub2RlKSA9PiBzYmduc3ZnLmRyYXcobm9kZSksXG4gICAgICAgICAgJ2JhY2tncm91bmQtZml0JzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXdpZHRoJzogJzEwMCUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWhlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jbGlwJzogJ25vbmUnLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICdib3JkZXItd2lkdGgnOiAwLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIHRvIGhpZ2hsaWdodCBxdWVyeSByZXN1bHQgKHNvdXJjZSwgdGFyZ2V0IGFuZCBwYXRoIG5vZGVzKVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGUuc291cmNlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3VuZGVybGF5LWNvbG9yJzogZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5kYXRhKCdoaWdobGlnaHRDb2xvcicpID8gbm9kZS5kYXRhKCdoaWdobGlnaHRDb2xvcicpIDogXCIjMDBmZjAwXCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAndW5kZXJsYXktcGFkZGluZyc6IGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZGF0YSgnaGlnaGxpZ2h0V2lkdGgnKSA/IG5vZGUuZGF0YSgnaGlnaGxpZ2h0V2lkdGgnKSA6IFwiMTBweFwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3VuZGVybGF5LW9wYWNpdHknOiAwLjVcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdub2RlLnRhcmdldCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd1bmRlcmxheS1jb2xvcic6IGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhKCdoaWdobGlnaHRDb2xvcicpKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmRhdGEoJ2hpZ2hsaWdodENvbG9yJykgPyBub2RlLmRhdGEoJ2hpZ2hsaWdodENvbG9yJykgOiBcIiNmZjAwMDBcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgICd1bmRlcmxheS1wYWRkaW5nJzogZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5kYXRhKCdoaWdobGlnaHRXaWR0aCcpID8gbm9kZS5kYXRhKCdoaWdobGlnaHRXaWR0aCcpIDogXCIxMHB4XCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAndW5kZXJsYXktb3BhY2l0eSc6IDAuNVxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ25vZGUucGF0aCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICd1bmRlcmxheS1jb2xvcic6IGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZGF0YSgnaGlnaGxpZ2h0Q29sb3InKSA/IG5vZGUuZGF0YSgnaGlnaGxpZ2h0Q29sb3InKSA6IFwiI2ZmZmYwMFwiO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3VuZGVybGF5LXBhZGRpbmcnOiBmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmRhdGEoJ2hpZ2hsaWdodFdpZHRoJykgPyBub2RlLmRhdGEoJ2hpZ2hsaWdodFdpZHRoJykgOiBcIjEwcHhcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgICd1bmRlcmxheS1vcGFjaXR5JzogMC41XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gZWRnZSBzdHlsaW5nXG4gICAgICAgIC5zZWxlY3RvcignZWRnZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdhcnJvdy1zY2FsZSc6IDEuNzUsXG4gICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXG4gICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1maWxsJzogJ2hvbGxvdycsXG4gICAgICAgICAgJ3dpZHRoJzogMS41LFxuICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjNTU1JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnIzU1NScsXG4gICAgICAgICAgJ2NvbG9yJzogJyM1NTUnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTpzZWxlY3RlZCcpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdjb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGV4dC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkNjc2MTQnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZTphY3RpdmUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMC43LCAnb3ZlcmxheS1jb2xvcic6ICcjZDY3NjE0JyxcbiAgICAgICAgICAnb3ZlcmxheS1wYWRkaW5nJzogJzgnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjYXJkaW5hbGl0eSA+IDBdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RleHQtYmFja2dyb3VuZC1zaGFwZSc6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci1vcGFjaXR5JzogJzEnLFxuICAgICAgICAgICd0ZXh0LWJvcmRlci13aWR0aCc6ICcxJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAndGV4dC1iYWNrZ3JvdW5kLW9wYWNpdHknOiAnMSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCdlZGdlW2NsYXNzPVwiY29uc3VtcHRpb25cIl1bY2FyZGluYWxpdHkgPiAwXSwgZWRnZVtjbGFzcz1cInByb2R1Y3Rpb25cIl1bY2FyZGluYWxpdHkgPiAwXScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdzb3VyY2UtbGFiZWwnOiAoZWRnZSkgPT4gJycgKyBlZGdlLmRhdGEoJ2NhcmRpbmFsaXR5JyksXG4gICAgICAgICAgJ3NvdXJjZS10ZXh0LW9mZnNldCc6IDEwXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzc10nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogKGVkZ2UpID0+IGVsZW1lbnRTdHlsZS5zYmduQXJyb3dTaGFwZShlZGdlKSxcbiAgICAgICAgICAnc291cmNlLWFycm93LXNoYXBlJzogJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIC5zZWxlY3RvcignZWRnZVtjbGFzcz1cImluaGliaXRpb25cIl0nKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAndGFyZ2V0LWFycm93LWZpbGwnOiAnZmlsbGVkJ1xuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJ2VkZ2VbY2xhc3M9XCJwcm9kdWN0aW9uXCJdJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3RhcmdldC1hcnJvdy1maWxsJzogJ2ZpbGxlZCdcbiAgICAgICAgfSlcblxuICAgICAgICAvLyB0byBoaWdobGlnaHQgZWRnZXMgaW4gcXVlcnkgcmVzdWx0XG4gICAgICAgIC5zZWxlY3RvcignZWRnZS5wYXRoJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ292ZXJsYXktY29sb3InOiBmdW5jdGlvbihlZGdlKXtcbiAgICAgICAgICAgIHJldHVybiBlZGdlLmRhdGEoJ2hpZ2hsaWdodENvbG9yJykgPyBlZGdlLmRhdGEoJ2hpZ2hsaWdodENvbG9yJykgOiBcIiNmZmZmMDBcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdvdmVybGF5LXBhZGRpbmcnOiBmdW5jdGlvbihlZGdlKXtcbiAgICAgICAgICAgIHJldHVybiBlZGdlLmRhdGEoJ2hpZ2hsaWdodFdpZHRoJykgPyBlZGdlLmRhdGEoJ2hpZ2hsaWdodFdpZHRoJykgOiBcIjEwcHhcIjtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdvdmVybGF5LW9wYWNpdHknOiAwLjVcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8vIGNvcmVcbiAgICAgICAgLnNlbGVjdG9yKCdjb3JlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtY29sb3InOiAnI2Q2NzYxNCcsXG4gICAgICAgICAgJ3NlbGVjdGlvbi1ib3gtb3BhY2l0eSc6ICcwLjInLCAnc2VsZWN0aW9uLWJveC1ib3JkZXItY29sb3InOiAnI2Q2NzYxNCdcbiAgICAgICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNiZ25TdHlsZVNoZWV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NiZ25TdHlsZS9pbmRleC5qcyIsImNvbnN0IG1lbW9pemUgPSByZXF1aXJlKCdsb2Rhc2gubWVtb2l6ZScpO1xuXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHJlcXVpcmUoJy4vY29udGFpbmVyTm9kZXMuanMnKTtcbmNvbnN0IGVudGl0eVBvb2xOb2RlcyA9IHJlcXVpcmUoJy4vZW50aXR5UG9vbE5vZGVzLmpzJyk7XG5jb25zdCBwcm9jZXNzTm9kZXMgPSByZXF1aXJlKCcuL3Byb2Nlc3NOb2Rlcy5qcycpO1xuXG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2Jnbi5qcycpO1xuXG5jb25zdCBjYWNoZUtleUZuID0gKG5vZGUpID0+ICcnICsgSlNPTi5zdHJpbmdpZnkobm9kZS5pZCgpKTtcblxuY29uc3Qgc2Jnbk5vZGVTaGFwZU1hcCA9IG5ldyBNYXAoKVxuLy8gcHJvY2VzcyBub2Rlc1xuLnNldCgnZGlzc29jaWF0aW9uJywgbWVtb2l6ZShwcm9jZXNzTm9kZXMuZGlzc29jaWF0aW9uLCBjYWNoZUtleUZuKSlcbi5zZXQoJ3BoZW5vdHlwZScsIG1lbW9pemUocHJvY2Vzc05vZGVzLnBoZW5vdHlwZSwgY2FjaGVLZXlGbikpXG5cbi8vIGVudGl0eSBwb29sIG5vZGVzXG4uc2V0KCdzb3VyY2UgYW5kIHNpbmsnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5zb3VyY2VBbmRTaW5rLCBjYWNoZUtleUZuKSlcbi5zZXQoJ3Vuc3BlY2lmaWVkIGVudGl0eScsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnVuc3BlY2lmaWVkRW50aXR5LCBjYWNoZUtleUZuKSlcbi5zZXQoJ3NpbXBsZSBjaGVtaWNhbCcsIG1lbW9pemUoZW50aXR5UG9vbE5vZGVzLnNpbXBsZUNoZW1pY2FsLCBjYWNoZUtleUZuKSlcbi5zZXQoJ21hY3JvbW9sZWN1bGUnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5tYWNyb21vbGVjdWxlLCBjYWNoZUtleUZuKSlcbi5zZXQoJ251Y2xlaWMgYWNpZCBmZWF0dXJlJywgbWVtb2l6ZShlbnRpdHlQb29sTm9kZXMubnVjbGVpY0FjaWRGZWF0dXJlLCBjYWNoZUtleUZuKSlcbi5zZXQoJ2NvbXBsZXgnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5jb21wbGV4LCBjYWNoZUtleUZuKSlcbi5zZXQoJ3BlcnR1cmJpbmcgYWdlbnQnLCBtZW1vaXplKGVudGl0eVBvb2xOb2Rlcy5wZXJ0dXJiaW5nQWdlbnQsIGNhY2hlS2V5Rm4pKVxuXG4vLyBjb250YWluZXIgbm9kZXNcbi5zZXQoJ2NvbXBhcnRtZW50JywgbWVtb2l6ZShjb250YWluZXJOb2Rlcy5jb21wYXJ0bWVudCwgY2FjaGVLZXlGbikpO1xuXG5cbmNvbnN0IGRyYXcgPSAobm9kZSkgPT4ge1xuICBjb25zdCBzYmduQ2xhc3MgPSBzYmduRGF0YS5zYmduQ2xhc3Mobm9kZSkucmVwbGFjZSgnIG11bHRpbWVyJywgJycpO1xuICBsZXQgc2hhcGVGbiA9IHNiZ25Ob2RlU2hhcGVNYXAuZ2V0KHNiZ25DbGFzcyk7XG4gIGlmIChzaGFwZUZuID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke3NiZ25DbGFzc30gZG9lcyBub3QgaGF2ZSBhIHNoYXBlIGltcGxlbWVudGF0aW9uYCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlRm4obm9kZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZHJhdzogZHJhd1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgc3ZnU3RyID0gcmVxdWlyZSgnLi4vdXRpbC9zdmcnKS5zdmdTdHI7XG5jb25zdCBzYmduRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvc2JnbicpO1xuY29uc3QgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZW1vaXplJyk7XG5cbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuXG5jb25zdCBjb250YWluZXJOb2RlcyA9IHtcblxuICBjb21wYXJ0bWVudCAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDYwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSA0MDtcbiAgICBjb25zdCB1SW5mb3MgPSBzYmduRGF0YS5nZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBsZXQgbGluZVN2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtsaW5lU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcyNSUnXSxcbiAgICAgIGJnUG9zWTogWycxOXB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb250YWluJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzM4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6ICc0J1xuICAgIH07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVyTm9kZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2NvbnRhaW5lck5vZGVzLmpzIiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIHN1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRpZih0eXBlb2YgY2FudmFzLmdldENvbnRleHQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRyZXR1cm4gISFjb250ZXh0ICYmICh0eXBlb2YgY29udGV4dC5tZWFzdXJlVGV4dCA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0dmFyIHdpZHRoID0gZnVuY3Rpb24oc3RyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9IGV4dGVuZCh7XG5cdFx0XHRzdHlsZTogJ25vcm1hbCcsXG5cdFx0XHR2YXJpYW50OiAnbm9ybWFsJyxcblx0XHRcdHdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdGZhbWlseTogJ3NhbnMtc2VyaWYnLFxuXHRcdFx0YWxpZ246ICdzdGFydCcsXG5cdFx0XHRiYXNlbGluZTogJ2FscGhhYmV0aWMnXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHR2YXIgc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblx0XHRpZih0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHNpemUgPSBzaXplICsgJ3B4JztcblxuXHRcdGNvbnRleHQuZm9udCA9IHV0aWwuZm9ybWF0KCclcyAlcyAlcyAlcyAlcycsXG5cdFx0XHRvcHRpb25zLnN0eWxlLFxuXHRcdFx0b3B0aW9ucy52YXJpYW50LFxuXHRcdFx0b3B0aW9ucy53ZWlnaHQsXG5cdFx0XHRzaXplLFxuXHRcdFx0b3B0aW9ucy5mYW1pbHkpO1xuXHRcdGNvbnRleHQudGV4dEFsaWduID0gb3B0aW9ucy5hbGlnbjtcblx0XHRjb250ZXh0LnRleHRCYXNlbGluZSA9IG9wdGlvbnMuYmFzZWxpbmU7XG5cblx0XHRyZXR1cm4gY29udGV4dC5tZWFzdXJlVGV4dChzdHIpLndpZHRoO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IHRydWU7XG5cdHJldHVybiB3aWR0aDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydGVkKCkgPyBpbml0aWFsaXplKCkgOiAoZnVuY3Rpb24oKSB7XG5cdHZhciB3aWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHdpZHRoLnN1cHBvcnRlZCA9IGZhbHNlO1xuXHRyZXR1cm4gd2lkdGg7XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGV4dC13aWR0aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgYmFzZVNoYXBlcyA9IHJlcXVpcmUoJy4vYmFzZVNoYXBlcycpO1xuY29uc3QgYXV4aWxpYXJ5SXRlbXMgPSByZXF1aXJlKCcuL2F1eGlsaWFyeUl0ZW1zJyk7XG5cbmNvbnN0IHN2Z1N0ciA9IHJlcXVpcmUoJy4uL3V0aWwvc3ZnJykuc3ZnU3RyO1xuY29uc3QgZ2V0VW5pdEluZm9zID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0VW5pdEluZm9zO1xuY29uc3QgZ2V0U3RhdGVWYXJzID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuZ2V0U3RhdGVWYXJzO1xuY29uc3QgaGFzQ2xvbmVtYXJrZXIgPSByZXF1aXJlKCcuLi91dGlsL3NiZ24nKS5oYXNDbG9uZW1hcmtlcjtcblxuY29uc3QgZWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuXG5jb25zdCBlbnRpdHlQb29sTm9kZXMgPSB7XG5cbiAgdW5zcGVjaWZpZWRFbnRpdHkgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBzVmFyU3ZnID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nU3RhdGVWYXIoMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHNWYXJzWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggKyBzVmFycy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICczMnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcblxuICB9LFxuXG4gIHNpbXBsZUNoZW1pY2FsIChub2RlKSB7XG4gICAgY29uc3QgYXV4SXRlbVdpZHRoID0gMTAwO1xuICAgIGNvbnN0IGF1eEl0ZW1IZWlnaHQgPSAyMDtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDI7XG4gICAgY29uc3QgZm9udFNpemUgPSAxMDtcbiAgICBjb25zdCB1SW5mb3MgPSBnZXRVbml0SW5mb3Mobm9kZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB1SW5mb1N2ZyA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdVbml0T2ZJbmZvcm1hdGlvbigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgdUluZm9zWzBdLCBib3JkZXJXaWR0aCwgZm9udFNpemUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdG9wTGluZSA9IHN2Z1N0cihcbiAgICAgIHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgYm90dG9tTGluZSA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpIHx8IHVJbmZvcy5sZW5ndGggPiAwID8gYmFzZVNoYXBlcy5saW5lKDAsIDAsIGF1eEl0ZW1XaWR0aCwgMCwgc3R5bGUpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCB0b3BMaW5lLCBjbG9uZU1hcmtlclN2ZywgdUluZm9TdmddLFxuICAgICAgYmdXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJywgJzAlJywgJzEycHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc0OHB4JywgJzBweCddLFxuICAgICAgYmdGaXQ6IFsnY292ZXInLCAnY292ZXInLCAnbm9uZScsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9LFxuXG4gIG1hY3JvbW9sZWN1bGUobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCArIHNWYXJzLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Zywgc1ZhclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCcsICc0MHB4J10sXG4gICAgICBiZ1Bvc1k6IFsnNTJweCcsICc4cHgnLCAnNTJweCcsICc0NHB4JywgJzAlJ10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdjb3ZlcicsICdub25lJywgJ25vbmUnXSxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICBib3JkZXJXaWR0aDogMlxuICAgIH07ICB9LFxuXG4gIG51Y2xlaWNBY2lkRmVhdHVyZSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSAyO1xuICAgIGNvbnN0IGZvbnRTaXplID0gMTA7XG4gICAgY29uc3QgdUluZm9zID0gZ2V0VW5pdEluZm9zKG5vZGUpO1xuICAgIGNvbnN0IHNWYXJzID0gZ2V0U3RhdGVWYXJzKG5vZGUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFwKClcbiAgICAuc2V0KCdzdHJva2UnLCAnIzZBNkE2QScpXG4gICAgLnNldCgnc3Ryb2tlLXdpZHRoJywgJzEnKTtcblxuICAgIGNvbnN0IGNsb25lTWFya2VyU3ZnID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ0Nsb25lTWFya2VyKDAsIDIsIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCAtIDMpIDogJycsXG4gICAgICBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgdUluZm9TdmcgPSBzdmdTdHIoXG4gICAgICB1SW5mb3MubGVuZ3RoID4gMCA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgYXV4SXRlbVdpZHRoIC0gNSwgYXV4SXRlbUhlaWdodCAtIDMsIHVJbmZvc1swXSwgYm9yZGVyV2lkdGgsIGZvbnRTaXplKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHNWYXJTdmcgPSBzdmdTdHIoXG4gICAgICBzVmFycy5sZW5ndGggPiAwID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdTdGF0ZVZhcigyLCAwLCBhdXhJdGVtV2lkdGggLSA1LCBhdXhJdGVtSGVpZ2h0IC0gMywgc1ZhcnNbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgc1ZhcnMubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSB8fCB1SW5mb3MubGVuZ3RoID4gMCA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBbYm90dG9tTGluZSwgdG9wTGluZSwgY2xvbmVNYXJrZXJTdmcsIHVJbmZvU3ZnLCBzVmFyU3ZnXSxcbiAgICAgIGJnV2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgIGJnUG9zWDogWycwJScsICcwJScsICcwJScsICcyMHB4JywgJzQwcHgnXSxcbiAgICAgIGJnUG9zWTogWyc1MnB4JywgJzhweCcsICc1MnB4JywgJzQ0cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfSxcblxuICBjb21wbGV4IChub2RlKSB7XG4gICAgY29uc3QgaXRlbVcgPSA2MDtcbiAgICBjb25zdCBpdGVtSCA9IDI0O1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcbiAgICBjb25zdCBzVmFycyA9IGdldFN0YXRlVmFycyhub2RlKTtcblxuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xuICAgIGNvbnN0IGJnV2lkdGggPSBbXTtcbiAgICBjb25zdCBiZ0hlaWdodCA9IFtdO1xuICAgIGNvbnN0IGJnUG9zWCA9IFtdO1xuICAgIGNvbnN0IGJnUG9zWSA9IFtdO1xuICAgIGNvbnN0IGJnRml0ID0gW107XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNTU1NTU1JylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnNicpO1xuXG4gICAgLy8gb3JkZXIgb2Ygc3ZnIGltYWdlIGdlbmVyYXRpb24gbWF0dGVyc1xuICAgIGlmICh1SW5mb3MubGVuZ3RoICsgc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wTGluZVN2ZyA9IHN2Z1N0cihiYXNlU2hhcGVzLmxpbmUoMCwgMCwgaXRlbVcsIDAsIHN0eWxlKSwgaXRlbVcsIGl0ZW1IKTtcbiAgICAgIGltYWdlcy5wdXNoKHRvcExpbmVTdmcpO1xuICAgICAgYmdXaWR0aC5wdXNoKCcxMDAlJyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcxMXB4Jyk7XG4gICAgICBiZ0ZpdC5wdXNoKCdub25lJyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Nsb25lbWFya2VyKG5vZGUpKSB7XG4gICAgICBjb25zdCBib3R0b21MaW5lU3ZnID0gc3ZnU3RyKGJhc2VTaGFwZXMubGluZSgwLCAwLCBpdGVtVywgMCwgc3R5bGUpLCBpdGVtVywgaXRlbUgpO1xuICAgICAgaW1hZ2VzLnB1c2goYm90dG9tTGluZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQ2xvbmVtYXJrZXIobm9kZSkpIHtcbiAgICAgIGNvbnN0IGNsb25lU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgaXRlbVcsIGl0ZW1IIC0gMyksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChjbG9uZVN2Zyk7XG4gICAgICBiZ1dpZHRoLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCcwJScpO1xuICAgICAgYmdQb3NZLnB1c2goJzEwMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAodUluZm9zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nVW5pdE9mSW5mb3JtYXRpb24oMiwgMCwgaXRlbVcgLSA1LCBpdGVtSCAtIDMsIHVJbmZvc1swXSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaCh1SW5mb1N2Zyk7XG4gICAgICBiZ1Bvc1gucHVzaCgnMjUlJyk7XG4gICAgICBiZ1Bvc1kucHVzaCgnMCUnKTtcbiAgICAgIGJnRml0LnB1c2goJ25vbmUnKTtcbiAgICB9XG5cbiAgICBpZiAoc1ZhcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc1ZhclN2ZyA9IHN2Z1N0cihhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1N0YXRlVmFyKDIsIDAsIGl0ZW1XIC0gNSwgaXRlbUggLSAzLCBzVmFyc1swXSksIGl0ZW1XLCBpdGVtSCk7XG4gICAgICBpbWFnZXMucHVzaChzVmFyU3ZnKTtcbiAgICAgIGJnUG9zWC5wdXNoKCc4OCUnKTtcbiAgICAgIGJnUG9zWS5wdXNoKCcwJScpO1xuICAgICAgYmdGaXQucHVzaCgnbm9uZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBiZ0ltYWdlOiBpbWFnZXMsXG4gICAgICBiZ1dpZHRoOiBiZ1dpZHRoLFxuICAgICAgYmdQb3NYOiBiZ1Bvc1gsXG4gICAgICBiZ1Bvc1k6IGJnUG9zWSxcbiAgICAgIGJnRml0OiBiZ0ZpdCxcbiAgICAgIGJnQ2xpcDogJ25vZGUnLFxuICAgICAgcGFkZGluZzogJzIycHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDRcbiAgICB9O1xuICB9LFxuXG4gIHNvdXJjZUFuZFNpbmsgKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKTtcblxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcbiAgICBjb25zdCByYWRpdXMgPSAobncgLSAyKSAvIDI7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2UtbGluZWNhcCcsICdzcXVhcmUnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxLjUnKVxuICAgIC5zZXQoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gICAgY29uc3Qgc2hhcGVBcmdzID0gW2NlbnRlclgsIGNlbnRlclksIHJhZGl1c107XG5cbiAgICBjb25zdCBzb3VyY2VBbmRTaW5rU3ZnID1cbiAgICBgXG4gICAgICAke2Jhc2VTaGFwZXMuY2lyY2xlKC4uLnNoYXBlQXJncywgc3R5bGVNYXApfVxuICAgICAgJHtoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLmNsb25lTWFya2VyKG53LCBuaCwgYmFzZVNoYXBlcy5jaXJjbGUsIHNoYXBlQXJncykgOiAnJ31cbiAgICAgICR7YmFzZVNoYXBlcy5saW5lKDAsIG5oLCBudywgMCwgc3R5bGVNYXApfVxuICAgIGA7XG5cbiAgICByZXR1cm4gc3ZnU3RyKHNvdXJjZUFuZFNpbmtTdmcsIG53LCBuaCwgMCwgMCwgbncsIG5oKTtcbiAgfSxcblxuICBwZXJ0dXJiaW5nQWdlbnQgKG5vZGUpIHtcbiAgICBjb25zdCBhdXhJdGVtV2lkdGggPSAxMDA7XG4gICAgY29uc3QgYXV4SXRlbUhlaWdodCA9IDIwO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjtcbiAgICBjb25zdCBmb250U2l6ZSA9IDEwO1xuICAgIGNvbnN0IHVJbmZvcyA9IGdldFVuaXRJbmZvcyhub2RlKTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcCgpXG4gICAgLnNldCgnc3Ryb2tlJywgJyM2QTZBNkEnKVxuICAgIC5zZXQoJ3N0cm9rZS13aWR0aCcsICcxJyk7XG5cbiAgICBjb25zdCBjbG9uZU1hcmtlclN2ZyA9IHN2Z1N0cihcbiAgICAgIGhhc0Nsb25lbWFya2VyKG5vZGUpID8gYXV4aWxpYXJ5SXRlbXMubXVsdGlJbWdDbG9uZU1hcmtlcigwLCAyLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHQgLSAzKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IHVJbmZvU3ZnID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBhdXhpbGlhcnlJdGVtcy5tdWx0aUltZ1VuaXRPZkluZm9ybWF0aW9uKDIsIDAsIGF1eEl0ZW1XaWR0aCAtIDUsIGF1eEl0ZW1IZWlnaHQgLSAzLCB1SW5mb3NbMF0sIGJvcmRlcldpZHRoLCBmb250U2l6ZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCB0b3BMaW5lID0gc3ZnU3RyKFxuICAgICAgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBib3R0b21MaW5lID0gc3ZnU3RyKFxuICAgICAgaGFzQ2xvbmVtYXJrZXIobm9kZSkgfHwgdUluZm9zLmxlbmd0aCA+IDAgPyBiYXNlU2hhcGVzLmxpbmUoMCwgMCwgYXV4SXRlbVdpZHRoLCAwLCBzdHlsZSkgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYmdJbWFnZTogW2JvdHRvbUxpbmUsIHRvcExpbmUsIGNsb25lTWFya2VyU3ZnLCB1SW5mb1N2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICBiZ1Bvc1g6IFsnMCUnLCAnMCUnLCAnMCUnLCAnMjBweCddLFxuICAgICAgYmdQb3NZOiBbJzU2cHgnLCAnOHB4JywgJzU2cHgnLCAnMCUnXSxcbiAgICAgIGJnRml0OiBbJ2NvdmVyJywgJ2NvdmVyJywgJ25vbmUnLCAnbm9uZSddLFxuICAgICAgYmdDbGlwOiAnbm9kZScsXG4gICAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRpdHlQb29sTm9kZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2JnblN0eWxlL2dseXBoL2VudGl0eVBvb2xOb2Rlcy5qcyIsImNvbnN0IGJhc2VTaGFwZXMgPSByZXF1aXJlKCcuL2Jhc2VTaGFwZXMnKTtcbmNvbnN0IGF1eGlsaWFyeUl0ZW1zID0gcmVxdWlyZSgnLi9hdXhpbGlhcnlJdGVtcycpO1xuXG5jb25zdCBzdmdTdHIgPSByZXF1aXJlKCcuLi91dGlsL3N2ZycpLnN2Z1N0cjtcbmNvbnN0IGhhc0Nsb25lbWFya2VyID0gcmVxdWlyZSgnLi4vdXRpbC9zYmduJykuaGFzQ2xvbmVtYXJrZXI7XG5cbmNvbnN0IGVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNvbnN0IHByb2Nlc3NOb2RlcyA9IHtcblxuICBkaXNzb2NpYXRpb24gKG5vZGUpIHtcbiAgICBjb25zdCB7dzogbncsIGg6IG5ofSA9IGVsZW1lbnQuZGltZW5zaW9ucyhub2RlKTtcblxuICAgIGNvbnN0IGNlbnRlclggPSBudyAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9IG5oIC8gMjtcbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IChNYXRoLm1pbihudywgbmgpIC0gMikgLyAyO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gKE1hdGgubWluKG53LCBuaCkgLSAyKSAvIDM7XG5cbiAgICBjb25zdCBzdHlsZU1hcCA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgLnNldCgnZmlsbCcsICdub25lJyk7XG5cbiAgICBjb25zdCBkaXNzb2NpYXRpb25TdmcgPVxuICAgIGBcbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgb3V0ZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICAgICR7YmFzZVNoYXBlcy5jaXJjbGUoY2VudGVyWCwgY2VudGVyWSwgaW5uZXJSYWRpdXMsIHN0eWxlTWFwKX1cbiAgICBgO1xuICAgIHJldHVybiBzdmdTdHIoZGlzc29jaWF0aW9uU3ZnLCBudywgbmgpO1xuICB9LFxuXG4gIHBoZW5vdHlwZSAobm9kZSkge1xuICAgIGNvbnN0IGF1eEl0ZW1XaWR0aCA9IDEwMDtcbiAgICBjb25zdCBhdXhJdGVtSGVpZ2h0ID0gMjA7XG5cbiAgICBjb25zdCBzdHlsZSA9IG5ldyBNYXAoKVxuICAgIC5zZXQoJ3N0cm9rZScsICcjNkE2QTZBJylcbiAgICAuc2V0KCdzdHJva2Utd2lkdGgnLCAnMScpO1xuXG4gICAgY29uc3QgY2xvbmVNYXJrZXJTdmcgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGF1eGlsaWFyeUl0ZW1zLm11bHRpSW1nQ2xvbmVNYXJrZXIoMCwgMiwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0IC0gMykgOiAnJyxcbiAgICAgIGF1eEl0ZW1XaWR0aCwgYXV4SXRlbUhlaWdodCwgMCwgMCwgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGJvdHRvbUxpbmUgPSBzdmdTdHIoXG4gICAgICBoYXNDbG9uZW1hcmtlcihub2RlKSA/IGJhc2VTaGFwZXMubGluZSgwLCAwLCBhdXhJdGVtV2lkdGgsIDAsIHN0eWxlKSA6ICcnLFxuICAgICAgYXV4SXRlbVdpZHRoLCBhdXhJdGVtSGVpZ2h0LCAwLCAwLCBhdXhJdGVtV2lkdGgsIGF1eEl0ZW1IZWlnaHRcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJnSW1hZ2U6IFtib3R0b21MaW5lLCBjbG9uZU1hcmtlclN2Z10sXG4gICAgICBiZ1dpZHRoOiBbJzEwMCUnLCAnMTAwJSddLFxuICAgICAgYmdQb3NYOiBbJzAlJywgJzAlJ10sXG4gICAgICBiZ1Bvc1k6IFsnNTZweCcsICc1NnB4J10sXG4gICAgICBiZ0ZpdDogWydjb3ZlcicsICdub25lJ10sXG4gICAgICBiZ0NsaXA6ICdub2RlJyxcbiAgICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3NOb2RlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYmduU3R5bGUvZ2x5cGgvcHJvY2Vzc05vZGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==