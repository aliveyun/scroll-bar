import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
export var trackSize = 16;
export function isEnableScrollbar(suppressMacOS) {
  if (typeof navigator === 'undefined') {
    return false;
  }
  if (navigator.userAgent.includes('Mac OS X')) {
    return !suppressMacOS;
  }
  // Windows/Linux
  return navigator.userAgent.includes('Windows NT') || navigator.userAgent.includes('X11;');
}
export function updateRef(innerRef, scrollBoxElement) {
  if (!innerRef) {
    return;
  }
  if (typeof innerRef === 'function') {
    innerRef(scrollBoxElement);
    return;
  }
  // @ts-ignore
  innerRef.current = scrollBoxElement;
}
export function handleExtractSize(target) {
  var clientWidth = target.clientWidth,
    scrollWidth = target.scrollWidth,
    clientHeight = target.clientHeight,
    scrollHeight = target.scrollHeight;
  var _window$getComputedSt = window.getComputedStyle(target),
    paddingTop = _window$getComputedSt.paddingTop,
    paddingLeft = _window$getComputedSt.paddingLeft;
  return {
    clientWidth: clientWidth,
    scrollWidth: scrollWidth,
    clientHeight: clientHeight,
    scrollHeight: scrollHeight,
    paddingTop: parseInt(paddingTop, 10),
    paddingLeft: parseInt(paddingLeft, 10)
  };
}
export function isEnableStyle(disabled) {
  return disabled ? 'hidden' : 'auto';
}
export function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var classes = args.flatMap(function (item) {
    return _typeof(item) === 'object' ? Object.keys(item).reduce(function (prev, curr) {
      if (item[curr]) {
        prev.push(curr);
      }
      return prev;
    }, []) : item;
  });
  return classes.length > 1 ? classes.join(' ') : classes[0];
}
export function updateElementStyle(element, obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // @ts-ignore
      element.style[key] = "".concat(obj[key], "px");
    }
  }
}
export function computeRatio(scrollSize, clientSize) {
  var minThumbSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  var realThumbSize = clientSize / scrollSize * clientSize;
  var thumbSize = Math.max(minThumbSize, realThumbSize);
  var remaining = clientSize - thumbSize;
  var distance = scrollSize - clientSize;
  return {
    thumbSize: thumbSize,
    ratio: remaining / distance
  };
}
export function updateScrollPosition(element, position, horizontal) {
  if (!element) {
    return;
  }
  if (horizontal) {
    element.scrollLeft = position;
    return;
  }
  element.scrollTop = position;
}
export function updateScrollElementStyle(containerElement, horizontalElement, verticalElement, minThumbSize) {
  if (!containerElement) {
    return;
  }
  var scrollTop = containerElement.scrollTop,
    scrollLeft = containerElement.scrollLeft,
    scrollWidth = containerElement.scrollWidth,
    scrollHeight = containerElement.scrollHeight,
    clientWidth = containerElement.clientWidth,
    clientHeight = containerElement.clientHeight;
  if (horizontalElement) {
    updateThumbStyle(horizontalElement.firstChild, scrollWidth, clientWidth, scrollLeft, 'left', minThumbSize);
  }
  if (verticalElement) {
    updateThumbStyle(verticalElement.firstChild, scrollHeight, clientHeight, scrollTop, 'top', minThumbSize);
  }
}
export function updateThumbStyle(thumbElement, scrollSize, clientSize, scrollPosition, direction, minThumbSize) {
  var _computeRatio = computeRatio(scrollSize, clientSize, minThumbSize),
    ratio = _computeRatio.ratio;
  updateElementStyle(thumbElement, _defineProperty({}, direction, scrollPosition * ratio));
}