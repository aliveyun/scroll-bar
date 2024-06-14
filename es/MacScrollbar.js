import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["suppressScrollX", "suppressScrollY", "suppressMacOS", "as", "style", "children"];
import { forwardRef } from 'react';
import Scrollbar from "./Scrollbar";
import { isEnableScrollbar, isEnableStyle } from "./utils";
import { jsx as _jsx } from "react/jsx-runtime";
var MacScrollbar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var suppressScrollX = _ref.suppressScrollX,
    suppressScrollY = _ref.suppressScrollY,
    _ref$suppressMacOS = _ref.suppressMacOS,
    suppressMacOS = _ref$suppressMacOS === void 0 ? true : _ref$suppressMacOS,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'div' : _ref$as,
    style = _ref.style,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var currentStyle = _objectSpread({
    overflowX: isEnableStyle(suppressScrollX),
    overflowY: isEnableStyle(suppressScrollY)
  }, style);
  var Wrapper = as;
  if (!isEnableScrollbar(suppressMacOS)) {
    return /*#__PURE__*/_jsx(Wrapper, _objectSpread(_objectSpread({
      style: currentStyle,
      ref: ref
    }, props), {}, {
      children: children
    }));
  }
  return /*#__PURE__*/_jsx(Scrollbar, _objectSpread(_objectSpread({
    style: currentStyle,
    innerRef: ref,
    suppressScrollX: suppressScrollX,
    suppressScrollY: suppressScrollY,
    Wrapper: Wrapper
  }, props), {}, {
    children: children
  }));
});
export default MacScrollbar;