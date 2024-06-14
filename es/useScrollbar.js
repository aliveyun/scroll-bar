import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useRef, useState } from 'react';
import { useResizeObserver } from "./hooks";
import ThumbBar from "./ThumbBar";
import { computeRatio, handleExtractSize, updateScrollElementStyle, updateScrollPosition } from "./utils";
import { useCreation, useDebounceFn, useEventListener, useUpdateEffect } from 'ahooks';
import { jsx as _jsx } from "react/jsx-runtime";
var initialSize = {
  clientWidth: 0,
  scrollWidth: 0,
  clientHeight: 0,
  scrollHeight: 0,
  paddingTop: 0,
  paddingLeft: 0
};
var initialAction = {
  isPressX: false,
  isPressY: false,
  lastScrollTop: 0,
  lastScrollLeft: 0,
  pressStartX: 0,
  pressStartY: 0
};
export default function useScrollbar(_ref) {
  var _containerRef$current, _containerRef$current2;
  var scrollBox = _ref.scrollBox,
    minThumbSize = _ref.minThumbSize;
  var isWindow = scrollBox === window;
  var containerRef = useCreation(function () {
    if (isWindow) {
      return {
        current: document.documentElement
      };
    }
    return scrollBox;
  }, [isWindow, scrollBox]);
  var horizontalRef = useRef(null);
  var verticalRef = useRef(null);
  var _useState = useState(initialSize),
    _useState2 = _slicedToArray(_useState, 2),
    boxSize = _useState2[0],
    updateBoxSize = _useState2[1];
  var clientWidth = boxSize.clientWidth,
    scrollWidth = boxSize.scrollWidth,
    clientHeight = boxSize.clientHeight,
    scrollHeight = boxSize.scrollHeight;
  var _useState3 = useState(initialAction),
    _useState4 = _slicedToArray(_useState3, 2),
    action = _useState4[0],
    updateAction = _useState4[1];
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    barVisible = _useState6[0],
    updateBarVisible = _useState6[1];
  var _useDebounceFn = useDebounceFn(function () {
      return updateBarVisible(false);
    }, {
      wait: 1000
    }),
    delayHideScrollbar = _useDebounceFn.run;
  var _useDebounceFn2 = useDebounceFn(function () {
      updateBarVisible(true);
      delayHideScrollbar();
      updateScrollElementStyle(containerRef.current, horizontalRef.current, verticalRef.current, minThumbSize);
    }, {
      wait: 8,
      leading: true
    }),
    updateLayerThrottle = _useDebounceFn2.run;
  var _useDebounceFn3 = useDebounceFn(function () {
      if (containerRef.current) {
        updateBoxSize(handleExtractSize(containerRef.current));
        updateLayerThrottle();
      }
    }, {
      wait: 8,
      leading: true
    }),
    updateLayerNow = _useDebounceFn3.run;
  useEventListener('mousemove', function (evt) {
    if (action.isPressX) {
      var horizontalRatio = computeRatio(scrollWidth, clientWidth, minThumbSize).ratio;
      updateScrollPosition(containerRef.current, Math.floor((evt.clientX - action.pressStartX) * (1 / horizontalRatio) + action.lastScrollLeft), true);
    }
    if (action.isPressY) {
      var verticalRatio = computeRatio(scrollHeight, clientHeight, minThumbSize).ratio;
      updateScrollPosition(containerRef.current, Math.floor((evt.clientY - action.pressStartY) * (1 / verticalRatio) + action.lastScrollTop));
    }
  });
  useEventListener('mouseup', function () {
    return updateAction(initialAction);
  });
  useResizeObserver(containerRef, updateLayerNow);
  useUpdateEffect(function () {
    updateLayerNow();
  }, [containerRef, (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollWidth, (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.scrollHeight]);
  var horizontalBar = scrollWidth - clientWidth > 0 && /*#__PURE__*/_jsx(ThumbBar, {
    visible: barVisible,
    isWindow: isWindow,
    minThumbSize: minThumbSize,
    horizontal: true,
    isPress: action.isPressX,
    grooveRef: horizontalRef,
    boxSize: boxSize,
    updateAction: updateAction
  });
  var verticalBar = scrollHeight - clientHeight > 0 && /*#__PURE__*/_jsx(ThumbBar, {
    visible: barVisible,
    isWindow: isWindow,
    minThumbSize: minThumbSize,
    isPress: action.isPressY,
    grooveRef: verticalRef,
    boxSize: boxSize,
    updateAction: updateAction
  });
  return {
    updateLayerThrottle: updateLayerThrottle,
    updateLayerNow: updateLayerNow,
    horizontalBar: horizontalBar,
    verticalBar: verticalBar,
    updateBarVisible: updateBarVisible
  };
}