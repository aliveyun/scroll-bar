import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "onScroll", "onMouseEnter", "onMouseLeave", "innerRef", "children", "minThumbSize", "ghost", "suppressScrollX", "suppressScrollY", "theme", "Wrapper"];
import React, { useRef } from 'react';
import { useSyncRef } from "./hooks";
import useScrollbar from "./useScrollbar";
import { classNames } from "./utils";
import "./style/Scrollbar.less";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ScrollBar(_ref) {
  var className = _ref.className,
    onScroll = _ref.onScroll,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    innerRef = _ref.innerRef,
    children = _ref.children,
    minThumbSize = _ref.minThumbSize,
    ghost = _ref.ghost,
    suppressScrollX = _ref.suppressScrollX,
    suppressScrollY = _ref.suppressScrollY,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'white' : _ref$theme,
    Wrapper = _ref.Wrapper,
    props = _objectWithoutProperties(_ref, _excluded);
  var scrollBoxRef = useRef(null);
  useSyncRef(innerRef, scrollBoxRef);
  var _useScrollbar = useScrollbar({
      scrollBox: scrollBoxRef,
      minThumbSize: minThumbSize
    }),
    updateLayerThrottle = _useScrollbar.updateLayerThrottle,
    updateLayerNow = _useScrollbar.updateLayerNow,
    horizontalBar = _useScrollbar.horizontalBar,
    verticalBar = _useScrollbar.verticalBar,
    updateBarVisible = _useScrollbar.updateBarVisible;
  function handleScroll(evt) {
    if (onScroll) {
      onScroll(evt);
    }
    updateLayerThrottle();
  }
  function handleMouseEnter(evt) {
    if (onMouseEnter) {
      onMouseEnter(evt);
    }
    updateLayerNow();
  }
  function handleMouseLeave(evt) {
    if (onMouseLeave) {
      onMouseLeave(evt);
    }
    updateBarVisible(false);
  }
  return /*#__PURE__*/_jsxs(Wrapper, _objectSpread(_objectSpread({
    className: classNames('aliveyun-container', className),
    ref: scrollBoxRef,
    onScroll: handleScroll,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, props), {}, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: classNames('aliveyun-track-box', "aliveyun-theme-".concat(theme), ghost ? 'aliveyun-ghost' : ''),
      children: [!suppressScrollX && horizontalBar, !suppressScrollY && verticalBar]
    }), children]
  }));
}