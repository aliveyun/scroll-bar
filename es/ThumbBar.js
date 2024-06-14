import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { memo } from 'react';
import { classNames, computeRatio, trackSize, updateScrollPosition } from "./utils";
import "./style/ThumbBar.less";
import { jsx as _jsx } from "react/jsx-runtime";
function ThumbBar(_ref) {
  var _ref4;
  var visible = _ref.visible,
    isWindow = _ref.isWindow,
    minThumbSize = _ref.minThumbSize,
    horizontal = _ref.horizontal,
    isPress = _ref.isPress,
    grooveRef = _ref.grooveRef,
    boxSize = _ref.boxSize,
    updateAction = _ref.updateAction;
  var clientWidth = boxSize.clientWidth,
    clientHeight = boxSize.clientHeight,
    paddingTop = boxSize.paddingTop,
    paddingLeft = boxSize.paddingLeft,
    scrollWidth = boxSize.scrollWidth,
    scrollHeight = boxSize.scrollHeight;
  var _ref2 = horizontal ? ['width', clientWidth, scrollWidth] : ['height', clientHeight, scrollHeight],
    _ref3 = _slicedToArray(_ref2, 3),
    sizeKey = _ref3[0],
    offsetSize = _ref3[1],
    scrollSize = _ref3[2];
  var getContainerBox = function getContainerBox() {
    var _grooveRef$current;
    var targetNode = (_grooveRef$current = grooveRef.current) === null || _grooveRef$current === void 0 || (_grooveRef$current = _grooveRef$current.parentNode) === null || _grooveRef$current === void 0 ? void 0 : _grooveRef$current.parentNode;
    return targetNode === document.body ? document.documentElement : targetNode;
  };
  var handleThumbBarClick = function handleThumbBarClick(e) {
    var containerBox = getContainerBox();
    var scrollLeft = containerBox.scrollLeft,
      scrollTop = containerBox.scrollTop;
    var scrollPosition = horizontal ? scrollLeft : scrollTop;
    var rect = e.target.getBoundingClientRect();
    var clickPosition = horizontal ? (e.clientX - rect.left) / rect.width : (e.clientY - rect.top) / rect.height;
    var scrollRatio = scrollPosition / scrollSize;
    var position = clickPosition > scrollRatio ? Math.min(scrollSize, scrollPosition + offsetSize) : Math.max(0, scrollPosition - offsetSize);
    updateScrollPosition(containerBox, position, horizontal);
  };
  var handleStart = function handleStart(e) {
    e.stopPropagation();
    var _getContainerBox = getContainerBox(),
      scrollLeft = _getContainerBox.scrollLeft,
      scrollTop = _getContainerBox.scrollTop;
    updateAction({
      isPressX: horizontal,
      isPressY: !horizontal,
      lastScrollTop: scrollTop,
      lastScrollLeft: scrollLeft,
      pressStartX: e.clientX,
      pressStartY: e.clientY
    });
  };
  var style = isWindow ? {
    position: 'fixed'
  } : (_ref4 = {}, _defineProperty(_ref4, sizeKey, offsetSize), _defineProperty(_ref4, "top", (horizontal ? clientHeight - trackSize : 0) - paddingTop), _defineProperty(_ref4, "left", (horizontal ? 0 : clientWidth - trackSize) - paddingLeft), _ref4);
  return /*#__PURE__*/_jsx("div", {
    className: classNames('infore-track', horizontal ? 'infore-x' : 'infore-y', {
      'infore-active': isPress,
      'infore-track-show': visible
    }),
    onClick: handleThumbBarClick,
    ref: grooveRef,
    style: style,
    children: /*#__PURE__*/_jsx("div", {
      className: "infore-thumb",
      onMouseDown: handleStart,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: _defineProperty({}, sizeKey, computeRatio(scrollSize, offsetSize, minThumbSize).thumbSize)
    })
  });
}
export default /*#__PURE__*/memo(ThumbBar);