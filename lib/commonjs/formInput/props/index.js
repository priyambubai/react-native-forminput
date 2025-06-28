"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _formInputProps = require("./formInputProps");
Object.keys(_formInputProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formInputProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formInputProps[key];
    }
  });
});
//# sourceMappingURL=index.js.map