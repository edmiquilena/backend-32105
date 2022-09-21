"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numeros = void 0;

var _constants = _interopRequireDefault(require("./constants"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var numeros = [1, 2, 3, 4, 5, 6];
exports.numeros = numeros;
console.log("esta registrado: ".concat(_constants["default"].registrado));
numeros.map(function (n) {
  return n * 2;
});
