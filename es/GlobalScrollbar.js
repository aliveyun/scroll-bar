import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["suppressMacOS"];
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useInitial } from "./hooks";
import useScrollbar from "./useScrollbar";
import { isEnableScrollbar } from "./utils";
import { useEventListener } from 'ahooks';
import "./style/Scrollbar.less";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function GlobalScrollbarInject(_ref) {
  var _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'white' : _ref$theme,
    minThumbSize = _ref.minThumbSize,
    ghost = _ref.ghost;
  var wrapper = useInitial(function () {
    return document.createElement('div');
  });
  useEffect(function () {
    wrapper.classList.add("aliveyun-theme-".concat(theme));
    if (ghost) {
      wrapper.classList.add("aliveyun-ghost");
    }
    document.documentElement.classList.add('aliveyun-container');
    document.body.append(wrapper);
    return function () {
      document.documentElement.classList.remove('aliveyun-container');
      document.body.removeChild(wrapper);
    };
  }, [wrapper, theme, ghost]);
  var _useScrollbar = useScrollbar({
      scrollBox: window,
      minThumbSize: minThumbSize
    }),
    updateLayerThrottle = _useScrollbar.updateLayerThrottle,
    horizontalBar = _useScrollbar.horizontalBar,
    verticalBar = _useScrollbar.verticalBar;
  useEventListener('scroll', updateLayerThrottle);
  return /*#__PURE__*/createPortal( /*#__PURE__*/_jsxs(_Fragment, {
    children: [horizontalBar, verticalBar]
  }), wrapper);
}
function GlobalScrollbar(_ref2) {
  var _ref2$suppressMacOS = _ref2.suppressMacOS,
    suppressMacOS = _ref2$suppressMacOS === void 0 ? true : _ref2$suppressMacOS,
    props = _objectWithoutProperties(_ref2, _excluded);
  if (!isEnableScrollbar(suppressMacOS)) return null;
  return /*#__PURE__*/_jsx(GlobalScrollbarInject, _objectSpread({}, props));
}
export default GlobalScrollbar;