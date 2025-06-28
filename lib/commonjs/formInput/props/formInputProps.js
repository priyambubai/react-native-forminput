"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _styleProps = require("./types/styleProps");
Object.keys(_styleProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _styleProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _styleProps[key];
    }
  });
});
var _textProps = require("./types/textProps");
Object.keys(_textProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _textProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _textProps[key];
    }
  });
});
var _iconProps = require("./types/iconProps");
Object.keys(_iconProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _iconProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iconProps[key];
    }
  });
});
var _datePickerProps = require("./types/datePickerProps");
Object.keys(_datePickerProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _datePickerProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _datePickerProps[key];
    }
  });
});
var _coreProps = require("./types/coreProps");
Object.keys(_coreProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _coreProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _coreProps[key];
    }
  });
});
var _componentProps = require("./types/componentProps");
Object.keys(_componentProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _componentProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _componentProps[key];
    }
  });
});
//# sourceMappingURL=formInputProps.js.map