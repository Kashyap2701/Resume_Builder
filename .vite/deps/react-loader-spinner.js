import {
  We,
  styled_components_browser_esm_default
} from "./chunk-QGZ3F2LX.js";
import "./chunk-Y2PWDZCF.js";
import "./chunk-XYLSUGT6.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/react-loader-spinner/dist/esm/loader/Audio.js
var import_react = __toESM(require_react());

// node_modules/react-loader-spinner/dist/esm/helpers.js
var getDefaultStyle = function(visible) {
  return {
    display: visible ? "flex" : "none"
  };
};

// node_modules/react-loader-spinner/dist/esm/type.js
var DEFAULT_COLOR = "#4fa94d";
var DEFAULT_WAI_ARIA_ATTRIBUTE = {
  "aria-busy": true,
  role: "status"
};

// node_modules/react-loader-spinner/dist/esm/loader/Audio.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var Audio = function(_a) {
  var _b = _a.height, height = _b === void 0 ? "100" : _b, _c = _a.width, width = _c === void 0 ? "100" : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "audio-loading" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react.default.createElement(
    "div",
    __assign({ style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "audio-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react.default.createElement(
      "svg",
      { height: "".concat(height), width: "".concat(width), fill: color, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg", "data-testid": "audio-svg" },
      import_react.default.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 80)" },
        import_react.default.createElement(
          "rect",
          { width: "10", height: "20", rx: "3" },
          import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "4.3s", values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite" })
        ),
        import_react.default.createElement(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite" })
        ),
        import_react.default.createElement(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "1.4s", values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite" })
        ),
        import_react.default.createElement(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite" })
        )
      )
    )
  );
};
var Audio_default = Audio;

// node_modules/react-loader-spinner/dist/esm/loader/BallTriangle.js
var import_react2 = __toESM(require_react());
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var BallTriangle = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 100 : _b, _c = _a.width, width = _c === void 0 ? 100 : _c, _d = _a.radius, radius = _d === void 0 ? 5 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "ball-triangle-loading" : _f, wrapperClass = _a.wrapperClass, wrapperStyle = _a.wrapperStyle, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react2.default.createElement(
    "div",
    __assign2({ style: __assign2(__assign2({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "ball-triangle-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react2.default.createElement(
      "svg",
      { height, width, stroke: color, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", "data-testid": "ball-triangle-svg" },
      import_react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        import_react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          import_react2.default.createElement(
            "circle",
            { cx: "5", cy: "50", r: radius },
            import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite" }),
            import_react2.default.createElement("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite" })
          ),
          import_react2.default.createElement(
            "circle",
            { cx: "27", cy: "5", r: radius },
            import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", from: "5", to: "5", values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite" }),
            import_react2.default.createElement("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", from: "27", to: "27", values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite" })
          ),
          import_react2.default.createElement(
            "circle",
            { cx: "49", cy: "50", r: radius },
            import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite" }),
            import_react2.default.createElement("animate", { attributeName: "cx", from: "49", to: "49", begin: "0s", dur: "2.2s", values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite" })
          )
        )
      )
    )
  );
};
var BallTriangle_default = BallTriangle;

// node_modules/react-loader-spinner/dist/esm/loader/Bars.js
var import_react3 = __toESM(require_react());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var Bars = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "bars-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
  return import_react3.default.createElement(
    "div",
    __assign3({ style: __assign3(__assign3({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "bars-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react3.default.createElement(
      "svg",
      { width, height, fill: color, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", "data-testid": "bars-svg" },
      import_react3.default.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        import_react3.default.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
        import_react3.default.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react3.default.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        import_react3.default.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
        import_react3.default.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react3.default.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        import_react3.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
        import_react3.default.createElement("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react3.default.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        import_react3.default.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
        import_react3.default.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react3.default.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        import_react3.default.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
        import_react3.default.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
};
var Bars_default = Bars;

// node_modules/react-loader-spinner/dist/esm/loader/Circles.js
var import_react4 = __toESM(require_react());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var Circles = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "circles-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
  return import_react4.default.createElement(
    "div",
    __assign4({ style: __assign4(__assign4({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "aria-label": ariaLabel, "data-testid": "circles-loading" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react4.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 135 135", xmlns: "http://www.w3.org/2000/svg", fill: color, "data-testid": "circles-svg" },
      import_react4.default.createElement(
        "path",
        { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
        import_react4.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "-360 67 67", dur: "2.5s", repeatCount: "indefinite" })
      ),
      import_react4.default.createElement(
        "path",
        { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
        import_react4.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "360 67 67", dur: "8s", repeatCount: "indefinite" })
      )
    )
  );
};
var Circles_default = Circles;

// node_modules/react-loader-spinner/dist/esm/loader/CirclesWithBar.js
var import_react5 = __toESM(require_react());
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var CirclesWithBar = function(_a) {
  var _b = _a.wrapperStyle, wrapperStyle = _b === void 0 ? {} : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.wrapperClass, wrapperClass = _d === void 0 ? "" : _d, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.color, color = _g === void 0 ? DEFAULT_COLOR : _g, outerCircleColor = _a.outerCircleColor, innerCircleColor = _a.innerCircleColor, barColor = _a.barColor, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? "circles-with-bar-loading" : _h;
  return import_react5.default.createElement(
    "div",
    __assign5({ style: __assign5(__assign5({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE, { "data-testid": "circles-with-bar-wrapper" }),
    import_react5.default.createElement(
      "svg",
      { version: "1.1", id: "L1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", height: "".concat(height), width: "".concat(width), viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", xmlSpace: "preserve", "data-testid": "circles-with-bar-svg" },
      import_react5.default.createElement(
        "circle",
        { fill: "none", stroke: "".concat(outerCircleColor || color), strokeWidth: "6", strokeMiterlimit: "15", strokeDasharray: "14.2472,14.2472", cx: "50", cy: "50", r: "47" },
        import_react5.default.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "5s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })
      ),
      import_react5.default.createElement(
        "circle",
        { fill: "none", stroke: "".concat(innerCircleColor || color), strokeWidth: "1", strokeMiterlimit: "10", strokeDasharray: "10,10", cx: "50", cy: "50", r: "39" },
        import_react5.default.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "5s", from: "0 50 50", to: "-360 50 50", repeatCount: "indefinite" })
      ),
      import_react5.default.createElement(
        "g",
        { fill: "".concat(barColor || color), "data-testid": "circles-with-bar-svg-bar" },
        import_react5.default.createElement(
          "rect",
          { x: "30", y: "35", width: "5", height: "30" },
          import_react5.default.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.1" })
        ),
        import_react5.default.createElement(
          "rect",
          { x: "40", y: "35", width: "5", height: "30" },
          import_react5.default.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.2" })
        ),
        import_react5.default.createElement(
          "rect",
          { x: "50", y: "35", width: "5", height: "30" },
          import_react5.default.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.3" })
        ),
        import_react5.default.createElement(
          "rect",
          { x: "60", y: "35", width: "5", height: "30" },
          import_react5.default.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.4" })
        ),
        import_react5.default.createElement(
          "rect",
          { x: "70", y: "35", width: "5", height: "30" },
          import_react5.default.createElement("animateTransform", { attributeName: "transform", dur: "1s", type: "translate", values: "0 5 ; 0 -5; 0 5", repeatCount: "indefinite", begin: "0.5" })
        )
      )
    )
  );
};
var CirclesWithBar_default = CirclesWithBar;

// node_modules/react-loader-spinner/dist/esm/loader/Grid.js
var import_react6 = __toESM(require_react());
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var Grid = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 12.5 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "grid-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react6.default.createElement(
    "div",
    __assign6({ style: __assign6(__assign6({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "grid-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react6.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 105 105", fill: color, "data-testid": "grid-svg" },
      import_react6.default.createElement(
        "circle",
        { cx: "12.5", cy: "12.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "12.5", cy: "52.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "100ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "52.5", cy: "12.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "300ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "52.5", cy: "52.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "600ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "92.5", cy: "12.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "800ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "92.5", cy: "52.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "400ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "12.5", cy: "92.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "700ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "52.5", cy: "92.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "500ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react6.default.createElement(
        "circle",
        { cx: "92.5", cy: "92.5", r: "".concat(radius) },
        import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "200ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
};
var Grid_default = Grid;

// node_modules/react-loader-spinner/dist/esm/loader/Hearts.js
var import_react7 = __toESM(require_react());
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var Hearts = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "hearts-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
  return import_react7.default.createElement(
    "div",
    __assign7({ style: __assign7(__assign7({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "hearts-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react7.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg", fill: color, "data-testid": "hearts-svg" },
      import_react7.default.createElement(
        "path",
        { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", attributeName: "fill-opacity", from: "0", to: ".5" },
        import_react7.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react7.default.createElement(
        "path",
        { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", attributeName: "fill-opacity", from: "0", to: ".5" },
        import_react7.default.createElement("animate", { attributeName: "fill-opacity", begin: "0.7s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react7.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
    )
  );
};
var Hearts_default = Hearts;

// node_modules/react-loader-spinner/dist/esm/loader/InfinitySpin.js
var import_react8 = __toESM(require_react());
var __makeTemplateObject = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var len = 242.776657104492;
var time = 1.6;
var anim = We(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"], ["\n  12.5% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  43.75% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n  100% {\n    stroke-dasharray: ", "px, ", "px;\n    stroke-dashoffset: -", "px;\n  }\n"])), len * 0.14, len, len * 0.11, len * 0.35, len, len * 0.35, len * 0.01, len, len * 0.99);
var Path = styled_components_browser_esm_default.path(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"], ["\n  stroke-dasharray: ", "px, ", ";\n  stroke-dashoffset: 0;\n  animation: ", " ", "s linear infinite;\n"])), len * 0.01, len, anim, time);
var InfinitySpin = function(_a) {
  var _b = _a.color, color = _b === void 0 ? DEFAULT_COLOR : _b, _c = _a.width, width = _c === void 0 ? "200" : _c;
  return import_react8.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "".concat(width), height: "".concat(Number(width) * 0.5), viewBox: "0 0 ".concat(width, " ").concat(Number(200 * 0.5)), "data-testid": "infinity-spin" },
    import_react8.default.createElement(Path, { "data-testid": "infinity-spin-path-1", stroke: color, fill: "none", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" }),
    import_react8.default.createElement("path", { "data-testid": "infinity-spin-path-2", opacity: "0.07", fill: "none", stroke: color, strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" })
  );
};
var InfinitySpin_default = InfinitySpin;
var templateObject_1;
var templateObject_2;

// node_modules/react-loader-spinner/dist/esm/loader/LineWave.js
var import_react9 = __toESM(require_react());
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var LineWave = function(_a) {
  var _b = _a.wrapperStyle, wrapperStyle = _b === void 0 ? {} : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.wrapperClass, wrapperClass = _d === void 0 ? "" : _d, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.color, color = _g === void 0 ? DEFAULT_COLOR : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? "line-wave-loading" : _h, firstLineColor = _a.firstLineColor, middleLineColor = _a.middleLineColor, lastLineColor = _a.lastLineColor;
  return import_react9.default.createElement(
    "div",
    __assign8({ style: __assign8(__assign8({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "line-wave-wrapper", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react9.default.createElement(
      "svg",
      { version: "1.1", height: "".concat(height), width: "".concat(width), xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 100 100", enableBackground: "new 0 0 0 0", xmlSpace: "preserve", "data-testid": "line-wave-svg" },
      import_react9.default.createElement(
        "rect",
        { x: "20", y: "50", width: "4", height: "10", fill: firstLineColor || color },
        import_react9.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0", dur: "0.6s", repeatCount: "indefinite" })
      ),
      import_react9.default.createElement(
        "rect",
        { x: "30", y: "50", width: "4", height: "10", fill: middleLineColor || color },
        import_react9.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0.2s", dur: "0.6s", repeatCount: "indefinite" })
      ),
      import_react9.default.createElement(
        "rect",
        { x: "40", y: "50", width: "4", height: "10", fill: lastLineColor || color },
        import_react9.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0.4s", dur: "0.6s", repeatCount: "indefinite" })
      )
    )
  );
};
var LineWave_default = LineWave;

// node_modules/react-loader-spinner/dist/esm/loader/MutatingDots.js
var import_react10 = __toESM(require_react());
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var MutatingDots = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 90 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 12.5 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.secondaryColor, secondaryColor = _f === void 0 ? DEFAULT_COLOR : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "mutating-dots-loading" : _g, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _h = _a.visible, visible = _h === void 0 ? true : _h;
  return import_react10.default.createElement(
    "div",
    __assign9({ style: __assign9(__assign9({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "mutating-dots-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react10.default.createElement(
      "svg",
      { id: "goo-loader", width, height, "data-testid": "mutating-dots-svg" },
      import_react10.default.createElement(
        "filter",
        { id: "fancy-goo" },
        import_react10.default.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "6", result: "blur" }),
        import_react10.default.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", result: "goo" }),
        import_react10.default.createElement("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" })
      ),
      import_react10.default.createElement(
        "g",
        { filter: "url(#fancy-goo)" },
        import_react10.default.createElement("animateTransform", { id: "mainAnim", attributeName: "transform", attributeType: "XML", type: "rotate", from: "0 50 50", to: "359 50 50", dur: "1.2s", repeatCount: "indefinite" }),
        import_react10.default.createElement(
          "circle",
          { cx: "50%", cy: "40", r: radius, fill: color },
          import_react10.default.createElement("animate", { id: "cAnim1", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0;cAnim1.end+0.2s", calcMode: "spline", values: "40;20;40", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" })
        ),
        import_react10.default.createElement(
          "circle",
          { cx: "50%", cy: "60", r: radius, fill: secondaryColor },
          import_react10.default.createElement("animate", { id: "cAnim2", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0.4s;cAnim2.end+0.2s", calcMode: "spline", values: "60;80;60", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" })
        )
      )
    )
  );
};
var MutatingDots_default = MutatingDots;

// node_modules/react-loader-spinner/dist/esm/loader/Oval.js
var import_react11 = __toESM(require_react());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var RADIUS = 20;
var getPath = function(radius) {
  return ["M" + radius + " 0c0-9.94-8.06", radius, radius, radius].join("-");
};
var getViewBoxSize = function(strokeWidth, secondaryStrokeWidth, radius) {
  var maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
  var startingPoint = -radius - maxStrokeWidth / 2 + 1;
  var endpoint = radius * 2 + maxStrokeWidth;
  return [startingPoint, startingPoint, endpoint, endpoint].join(" ");
};
var Oval = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.secondaryColor, secondaryColor = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "oval-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g, _h = _a.strokeWidth, strokeWidth = _h === void 0 ? 2 : _h, strokeWidthSecondary = _a.strokeWidthSecondary;
  return import_react11.default.createElement(
    "div",
    __assign10({ style: __assign10(__assign10(__assign10({}, getDefaultStyle(visible)), wrapperStyle), { padding: 3 }), className: wrapperClass, "data-testid": "oval-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react11.default.createElement(
      "svg",
      { width, height, viewBox: getViewBoxSize(Number(strokeWidth), Number(strokeWidthSecondary || strokeWidth), RADIUS), xmlns: "http://www.w3.org/2000/svg", stroke: color, "data-testid": "oval-svg" },
      import_react11.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        import_react11.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: Number(strokeWidthSecondary || strokeWidth), "data-testid": "oval-secondary-group" },
          import_react11.default.createElement("circle", { strokeOpacity: ".5", cx: "0", cy: "0", r: RADIUS, stroke: secondaryColor, strokeWidth }),
          import_react11.default.createElement(
            "path",
            { d: getPath(RADIUS) },
            import_react11.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 0 0", to: "360 0 0", dur: "1s", repeatCount: "indefinite" })
          )
        )
      )
    )
  );
};
var Oval_default = Oval;

// node_modules/react-loader-spinner/dist/esm/loader/Puff.js
var import_react12 = __toESM(require_react());
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var Puff = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 1 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "puff-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react12.default.createElement(
    "div",
    __assign11({ style: __assign11(__assign11({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "puff-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react12.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: color, "data-testid": "puff-svg" },
      import_react12.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
        import_react12.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: radius },
          import_react12.default.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
          import_react12.default.createElement("animate", { attributeName: "strokeOpacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })
        ),
        import_react12.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: radius },
          import_react12.default.createElement("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
          import_react12.default.createElement("animate", { attributeName: "strokeOpacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })
        )
      )
    )
  );
};
var Puff_default = Puff;

// node_modules/react-loader-spinner/dist/esm/loader/RevolvingDot.js
var import_react13 = __toESM(require_react());
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var RevolvingDot = function(_a) {
  var _b = _a.radius, radius = _b === void 0 ? 45 : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? 5 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, secondaryColor = _a.secondaryColor, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "revolving-dot-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
  return import_react13.default.createElement(
    "div",
    __assign12({ style: __assign12(__assign12({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "aria-label": ariaLabel, "data-testid": "revolving-dot-loading" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react13.default.createElement(
      "svg",
      { version: "1.1", width: "calc(".concat(radius, " * 2.5)"), height: "calc(".concat(radius, " * 2.5)"), xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", "data-testid": "revolving-dot-svg" },
      import_react13.default.createElement("circle", { fill: "none", stroke: secondaryColor || color, strokeWidth, cx: "calc(".concat(radius, " * 1.28)"), cy: "calc(".concat(radius, " * 1.28)"), r: radius, style: { opacity: 0.5 } }),
      import_react13.default.createElement(
        "circle",
        { fill: color, stroke: color, strokeWidth: "3", cx: "calc(".concat(radius, " * 1.28)"), cy: "calc(".concat(radius, " / 3.5)"), r: "calc(".concat(radius, " / 5)"), style: { transformOrigin: "50% 50%" } },
        import_react13.default.createElement("animateTransform", { attributeName: "transform", dur: "2s", type: "rotate", from: "0", to: "360", repeatCount: "indefinite" })
      )
    )
  );
};
var RevolvingDot_default = RevolvingDot;

// node_modules/react-loader-spinner/dist/esm/loader/Rings.js
var import_react14 = __toESM(require_react());
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var Rings = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 6 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "rings-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react14.default.createElement(
    "div",
    __assign13({ style: __assign13(__assign13({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "rings-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react14.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg", stroke: color, "data-testid": "rings-svg" },
      import_react14.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        import_react14.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: radius, strokeOpacity: "0" },
          import_react14.default.createElement("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
          import_react14.default.createElement("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
          import_react14.default.createElement("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })
        ),
        import_react14.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: radius, strokeOpacity: "0" },
          import_react14.default.createElement("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
          import_react14.default.createElement("animate", { attributeName: "strokeOpacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
          import_react14.default.createElement("animate", { attributeName: "strokeWidth", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })
        ),
        import_react14.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: Number(radius) + 2 },
          import_react14.default.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })
        )
      )
    )
  );
};
var Rings_default = Rings;

// node_modules/react-loader-spinner/dist/esm/loader/RotatingSquare.js
var import_react15 = __toESM(require_react());
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var RotatingSquare = function(_a) {
  var _b = _a.wrapperClass, wrapperClass = _b === void 0 ? "" : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, _d = _a.height, height = _d === void 0 ? 100 : _d, _e = _a.width, width = _e === void 0 ? 100 : _e, _f = _a.strokeWidth, strokeWidth = _f === void 0 ? 4 : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "rotating-square-loading" : _g, _h = _a.wrapperStyle, wrapperStyle = _h === void 0 ? {} : _h, _j = _a.visible, visible = _j === void 0 ? true : _j;
  return import_react15.default.createElement(
    "div",
    __assign14({ style: __assign14(__assign14({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "rotating-square-wrapper", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react15.default.createElement(
      "svg",
      { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", height: "".concat(height), width: "".concat(width), "data-testid": "rotating-square-svg", xmlSpace: "preserve" },
      import_react15.default.createElement(
        "rect",
        { fill: "none", stroke: color, strokeWidth, x: "25", y: "25", width: "50", height: "50" },
        import_react15.default.createElement("animateTransform", { attributeName: "transform", dur: "0.5s", from: "0 50 50", to: "180 50 50", type: "rotate", id: "strokeBox", attributeType: "XML", begin: "rectBox.end" })
      ),
      import_react15.default.createElement(
        "rect",
        { x: "27", y: "27", fill: color, width: "46", height: "50" },
        import_react15.default.createElement("animate", { attributeName: "height", dur: "1.3s", attributeType: "XML", from: "50", to: "0", id: "rectBox", fill: "freeze", begin: "0s;strokeBox.end" })
      )
    )
  );
};
var RotatingSquare_default = RotatingSquare;

// node_modules/react-loader-spinner/dist/esm/loader/RotatingLines.js
var import_react16 = __toESM(require_react());

// node_modules/styled-tools/dist/es/prop.js
var prop = function prop2(path, defaultValue) {
  return function() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof props[path] !== "undefined") {
      return props[path];
    }
    if (path && path.indexOf(".") > 0) {
      var paths = path.split(".");
      var length = paths.length;
      var object = props[paths[0]];
      var index = 1;
      while (object != null && index < length) {
        object = object[paths[index]];
        index += 1;
      }
      if (typeof object !== "undefined") {
        return object;
      }
    }
    return defaultValue;
  };
};
var prop_default = prop;

// node_modules/react-loader-spinner/dist/esm/loader/RotatingLines.js
var __makeTemplateObject2 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var spin = We(templateObject_12 || (templateObject_12 = __makeTemplateObject2(["\n to {\n    transform: rotate(360deg);\n  }\n"], ["\n to {\n    transform: rotate(360deg);\n  }\n"])));
var POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
var Svg = styled_components_browser_esm_default.svg(templateObject_22 || (templateObject_22 = __makeTemplateObject2(["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"], ["\n  animation: ", " 0.75s steps(12, end) infinite;\n  animation-duration: ", "s;\n"])), spin, prop_default("speed", "0.75"));
var Polyline = styled_components_browser_esm_default.polyline(templateObject_3 || (templateObject_3 = __makeTemplateObject2(["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"], ["\n  stroke-width: ", "px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])), function(props) {
  return props.width;
});
function RotatingLines(_a) {
  var _b = _a.strokeColor, strokeColor = _b === void 0 ? DEFAULT_COLOR : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? "5" : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? "0.75" : _d, _e = _a.width, width = _e === void 0 ? "96" : _e, _f = _a.visible, visible = _f === void 0 ? true : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "rotating-lines-loading" : _g;
  var lines = (0, import_react16.useCallback)(function() {
    return POINTS.map(function(point) {
      return import_react16.default.createElement(Polyline, { key: point, points: "24,12 24,4", width: strokeWidth, transform: "rotate(".concat(point, ", 24, 24)") });
    });
  }, [strokeWidth]);
  return !visible ? null : import_react16.default.createElement(Svg, __assign15({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width, stroke: strokeColor, speed: animationDuration, "data-testid": "rotating-lines-svg", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE), lines());
}
var templateObject_12;
var templateObject_22;
var templateObject_3;

// node_modules/react-loader-spinner/dist/esm/loader/TailSpin.js
var import_react17 = __toESM(require_react());
var __assign16 = function() {
  __assign16 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign16.apply(this, arguments);
};
var TailSpin = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 1 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "tail-spin-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react17.default.createElement(
    "div",
    __assign16({ style: __assign16(__assign16({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "tail-spin-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react17.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", "data-testid": "tail-spin-svg" },
      import_react17.default.createElement(
        "defs",
        null,
        import_react17.default.createElement(
          "linearGradient",
          { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
          import_react17.default.createElement("stop", { stopColor: color, stopOpacity: "0", offset: "0%" }),
          import_react17.default.createElement("stop", { stopColor: color, stopOpacity: ".631", offset: "63.146%" }),
          import_react17.default.createElement("stop", { stopColor: color, offset: "100%" })
        )
      ),
      import_react17.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        import_react17.default.createElement(
          "g",
          { transform: "translate(1 1)" },
          import_react17.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: color, strokeWidth: "2" },
            import_react17.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })
          ),
          import_react17.default.createElement(
            "circle",
            { fill: "#fff", cx: "36", cy: "18", r: radius },
            import_react17.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })
          )
        )
      )
    )
  );
};
var TailSpin_default = TailSpin;

// node_modules/react-loader-spinner/dist/esm/loader/ThreeCircles.js
var import_react18 = __toESM(require_react());
var __assign17 = function() {
  __assign17 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign17.apply(this, arguments);
};
var ThreeCircles = function(_a) {
  var _b = _a.wrapperStyle, wrapperStyle = _b === void 0 ? {} : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.wrapperClass, wrapperClass = _d === void 0 ? "" : _d, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.color, color = _g === void 0 ? DEFAULT_COLOR : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? "three-circles-loading" : _h, outerCircleColor = _a.outerCircleColor, innerCircleColor = _a.innerCircleColor, middleCircleColor = _a.middleCircleColor;
  return import_react18.default.createElement(
    "div",
    __assign17({ style: __assign17(__assign17({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "three-circles-wrapper", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react18.default.createElement(
      "svg",
      { version: "1.1", height: "".concat(height), width: "".concat(width), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", xmlSpace: "preserve", "data-testid": "three-circles-svg" },
      import_react18.default.createElement(
        "path",
        { fill: outerCircleColor || color, d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z" },
        import_react18.default.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "2s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })
      ),
      import_react18.default.createElement(
        "path",
        { fill: middleCircleColor || color, d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z" },
        import_react18.default.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "1s", from: "0 50 50", to: "-360 50 50", repeatCount: "indefinite" })
      ),
      import_react18.default.createElement(
        "path",
        { fill: innerCircleColor || color, d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n  L82,35.7z" },
        import_react18.default.createElement("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "2s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })
      )
    )
  );
};
var ThreeCircles_default = ThreeCircles;

// node_modules/react-loader-spinner/dist/esm/loader/ThreeDots.js
var import_react19 = __toESM(require_react());
var __assign18 = function() {
  __assign18 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign18.apply(this, arguments);
};
var ThreeDots = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 9 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "three-dots-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react19.default.createElement(
    "div",
    __assign18({ style: __assign18(__assign18({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "three-dots-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react19.default.createElement(
      "svg",
      { width, height, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: color, "data-testid": "three-dots-svg" },
      import_react19.default.createElement(
        "circle",
        { cx: "15", cy: "15", r: Number(radius) + 6 },
        import_react19.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        import_react19.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react19.default.createElement(
        "circle",
        { cx: "60", cy: "15", r: radius, attributeName: "fill-opacity", from: "1", to: "0.3" },
        import_react19.default.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
        import_react19.default.createElement("animate", { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react19.default.createElement(
        "circle",
        { cx: "105", cy: "15", r: Number(radius) + 6 },
        import_react19.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
        import_react19.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
};
var ThreeDots_default = ThreeDots;

// node_modules/react-loader-spinner/dist/esm/loader/Triangle.js
var import_react20 = __toESM(require_react());
var __makeTemplateObject3 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign19 = function() {
  __assign19 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign19.apply(this, arguments);
};
var dash = We(templateObject_13 || (templateObject_13 = __makeTemplateObject3(["\n to {\n    stroke-dashoffset: 136;\n  }\n"], ["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));
var Polygon = styled_components_browser_esm_default.polygon(templateObject_23 || (templateObject_23 = __makeTemplateObject3(["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"], ["\n  stroke-dasharray: 17;\n  animation: ", " 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])), dash);
var SVG = styled_components_browser_esm_default.svg(templateObject_32 || (templateObject_32 = __makeTemplateObject3(["\n  transform-origin: 50% 65%;\n"], ["\n  transform-origin: 50% 65%;\n"])));
var Triangle = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "triangle-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
  return import_react20.default.createElement(
    "div",
    __assign19({ style: __assign19(__assign19({}, getDefaultStyle(visible)), wrapperStyle), className: "".concat(wrapperClass), "data-testid": "triangle-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react20.default.createElement(
      SVG,
      { id: "triangle", width, height, viewBox: "-3 -4 39 39", "data-testid": "triangle-svg" },
      import_react20.default.createElement(Polygon, { fill: "transparent", stroke: color, strokeWidth: "1", points: "16,0 32,32 0,32" })
    )
  );
};
var Triangle_default = Triangle;
var templateObject_13;
var templateObject_23;
var templateObject_32;

// node_modules/react-loader-spinner/dist/esm/loader/Watch.js
var import_react21 = __toESM(require_react());
var __assign20 = function() {
  __assign20 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign20.apply(this, arguments);
};
var Watch = function(_a) {
  var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 48 : _d, _e = _a.color, color = _e === void 0 ? DEFAULT_COLOR : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? "watch-loading" : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
  return import_react21.default.createElement(
    "div",
    __assign20({ style: __assign20(__assign20({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "watch-loading", "aria-label": ariaLabel }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react21.default.createElement(
      "svg",
      { width, height, version: "1.1", id: "L2", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", xmlSpace: "preserve", "data-testid": "watch-svg" },
      import_react21.default.createElement("circle", { fill: "none", stroke: color, strokeWidth: "4", strokeMiterlimit: "10", cx: "50", cy: "50", r: radius }),
      import_react21.default.createElement(
        "line",
        { fill: "none", strokeLinecap: "round", stroke: color, strokeWidth: "4", strokeMiterlimit: "10", x1: "50", y1: "50", x2: "85", y2: "50.5" },
        import_react21.default.createElement("animateTransform", { attributeName: "transform", dur: "2s", type: "rotate", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })
      ),
      import_react21.default.createElement(
        "line",
        { fill: "none", strokeLinecap: "round", stroke: color, strokeWidth: "4", strokeMiterlimit: "10", x1: "50", y1: "50", x2: "49.5", y2: "74" },
        import_react21.default.createElement("animateTransform", { attributeName: "transform", dur: "15s", type: "rotate", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })
      )
    )
  );
};
var Watch_default = Watch;

// node_modules/react-loader-spinner/dist/esm/loader/FallingLines.js
var import_react22 = __toESM(require_react());
var __assign21 = function() {
  __assign21 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign21.apply(this, arguments);
};
var FallingLines = function(_a) {
  var _b = _a.color, color = _b === void 0 ? DEFAULT_COLOR : _b, _c = _a.width, width = _c === void 0 ? "100" : _c, _d = _a.visible, visible = _d === void 0 ? true : _d;
  return visible ? import_react22.default.createElement(
    "svg",
    __assign21({ xmlns: "http://www.w3.org/2000/svg", width, height: width, viewBox: "0 0 100 100", "data-testid": "falling-lines" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react22.default.createElement(
      "rect",
      { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color, "data-testid": "falling-lines-rect-1" },
      import_react22.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", repeatCount: "indefinite" })
    ),
    import_react22.default.createElement(
      "rect",
      { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color },
      import_react22.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", begin: "0.4s", repeatCount: "indefinite" })
    ),
    import_react22.default.createElement(
      "rect",
      { y: "25", width: "10", height: "50", rx: "4", ry: "4", fill: color, "data-testid": "falling-lines-rect-2" },
      import_react22.default.createElement("animate", { attributeName: "x", values: "10;100", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 10 70", to: "-60 100 70", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" }),
      import_react22.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "1.2s", begin: "0.8s", repeatCount: "indefinite" })
    )
  ) : null;
};
var FallingLines_default = FallingLines;

// node_modules/react-loader-spinner/dist/esm/loader/Vortex.js
var import_react23 = __toESM(require_react());
var __assign22 = function() {
  __assign22 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign22.apply(this, arguments);
};
var Vortex = function(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.width, width = _d === void 0 ? "80" : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? "vortex-loading" : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.colors, colors = _f === void 0 ? ["#1B5299", "#EF8354", "#DB5461", "#1B5299", "#EF8354", "#DB5461"] : _f;
  return !visible ? null : import_react23.default.createElement(
    "svg",
    __assign22({ height, width, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", "data-testid": "vortex-svg", "aria-label": ariaLabel, style: wrapperStyle, className: wrapperClass }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react23.default.createElement(
      "g",
      { transform: "translate(50,50)" },
      import_react23.default.createElement(
        "g",
        { transform: "scale(0.7)" },
        import_react23.default.createElement(
          "g",
          { transform: "translate(-50,-50)" },
          import_react23.default.createElement(
            "g",
            { transform: "rotate(137.831 50 50)" },
            import_react23.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", values: "360 50 50;0 50 50", keyTimes: "0;1", dur: "1", keySplines: "0.5 0.5 0.5 0.5", calcMode: "spline" }),
            import_react23.default.createElement("path", { fill: colors[0], d: "M30.4,9.7c-7.4,10.9-11.8,23.8-12.3,37.9c0.2,1,0.5,1.9,0.7,2.8c1.4-5.2,3.4-10.3,6.2-15.1 c2.6-4.4,5.6-8.4,9-12c0.7-0.7,1.4-1.4,2.1-2.1c7.4-7,16.4-12,26-14.6C51.5,3.6,40.2,4.9,30.4,9.7z" }),
            import_react23.default.createElement("path", { fill: colors[1], d: "M24.8,64.2c-2.6-4.4-4.5-9.1-5.9-13.8c-0.3-0.9-0.5-1.9-0.7-2.8c-2.4-9.9-2.2-20.2,0.4-29.8 C10.6,25.5,6,36,5.3,46.8C11,58.6,20,68.9,31.9,76.3c0.9,0.3,1.9,0.5,2.8,0.8C31,73.3,27.6,69,24.8,64.2z" }),
            import_react23.default.createElement("path", { fill: colors[2], d: "M49.6,78.9c-5.1,0-10.1-0.6-14.9-1.8c-1-0.2-1.9-0.5-2.8-0.8c-9.8-2.9-18.5-8.2-25.6-15.2 c2.8,10.8,9.5,20,18.5,26c13.1,0.9,26.6-1.7,38.9-8.3c0.7-0.7,1.4-1.4,2.1-2.1C60.7,78.2,55.3,78.9,49.6,78.9z" }),
            import_react23.default.createElement("path", { fill: colors[3], d: "M81.1,49.6c-1.4,5.2-3.4,10.3-6.2,15.1c-2.6,4.4-5.6,8.4-9,12c-0.7,0.7-1.4,1.4-2.1,2.1 c-7.4,7-16.4,12-26,14.6c10.7,3,22.1,1.7,31.8-3.1c7.4-10.9,11.8-23.8,12.3-37.9C81.6,51.5,81.4,50.6,81.1,49.6z" }),
            import_react23.default.createElement("path", { fill: colors[4], d: "M75.2,12.9c-13.1-0.9-26.6,1.7-38.9,8.3c-0.7,0.7-1.4,1.4-2.1,2.1c5.2-1.4,10.6-2.2,16.2-2.2 c5.1,0,10.1,0.6,14.9,1.8c1,0.2,1.9,0.5,2.8,0.8c9.8,2.9,18.5,8.2,25.6,15.2C90.9,28.1,84.2,18.9,75.2,12.9z" }),
            import_react23.default.createElement("path", { fill: colors[5], d: "M94.7,53.2C89,41.4,80,31.1,68.1,23.7c-0.9-0.3-1.9-0.5-2.8-0.8c3.8,3.8,7.2,8.1,10,13 c2.6,4.4,4.5,9.1,5.9,13.8c0.3,0.9,0.5,1.9,0.7,2.8c2.4,9.9,2.2,20.2-0.4,29.8C89.4,74.5,94,64,94.7,53.2z" })
          )
        )
      )
    )
  );
};
var Vortex_default = Vortex;

// node_modules/react-loader-spinner/dist/esm/loader/RotatingTriangles.js
var import_react24 = __toESM(require_react());
var __assign23 = function() {
  __assign23 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign23.apply(this, arguments);
};
function RotatingTriangles(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.width, width = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "rotating-triangle-loading" : _g, _h = _a.colors, colors = _h === void 0 ? ["#1B5299", "#EF8354", "#DB5461"] : _h;
  return !visible ? null : import_react24.default.createElement(
    "svg",
    __assign23({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "rotating-triangle-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react24.default.createElement(
      "g",
      { transform: "translate(50,42)" },
      import_react24.default.createElement(
        "g",
        { transform: "scale(0.8)" },
        import_react24.default.createElement(
          "g",
          { transform: "translate(-50,-50)" },
          import_react24.default.createElement(
            "polygon",
            { "ng-attr-fill": "{{config.c1}}", points: "72.5,50 50,11 27.5,50 50,50", fill: colors[0], transform: "rotate(186 50 38.5)" },
            import_react24.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 38.5;360 50 38.5", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })
          ),
          import_react24.default.createElement(
            "polygon",
            { "ng-attr-fill": "{{config.c2}}", points: "5,89 50,89 27.5,50", fill: colors[1], transform: "rotate(186 27.5 77.5)" },
            import_react24.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 27.5 77.5;360 27.5 77.5", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })
          ),
          import_react24.default.createElement(
            "polygon",
            { "ng-attr-fill": "{{config.c3}}", points: "72.5,50 50,89 95,89", fill: colors[2], transform: "rotate(186 72.2417 77.5)" },
            import_react24.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 72.5 77.5;360 72 77.5", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })
          )
        )
      )
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/Radio.js
var import_react25 = __toESM(require_react());
var __assign24 = function() {
  __assign24 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign24.apply(this, arguments);
};
function Radio(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.width, width = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "radio-loading" : _g, _h = _a.colors, colors = _h === void 0 ? [DEFAULT_COLOR, DEFAULT_COLOR, DEFAULT_COLOR] : _h;
  return !visible ? null : import_react25.default.createElement(
    "svg",
    __assign24({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "radio-bar-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react25.default.createElement(
      "circle",
      { cx: "28", cy: "75", r: "11", "ng-attr-fill": "{{config.c1}}", fill: colors[0] },
      import_react25.default.createElement("animate", { attributeName: "fill-opacity", calcMode: "linear", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1", begin: "0s", repeatCount: "indefinite" })
    ),
    import_react25.default.createElement(
      "path",
      { d: "M28 47A28 28 0 0 1 56 75", fill: "none", "ng-attr-stroke": "{{config.c2}}", strokeWidth: "10", stroke: colors[1] },
      import_react25.default.createElement("animate", { attributeName: "stroke-opacity", calcMode: "linear", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1", begin: "0.1s", repeatCount: "indefinite" })
    ),
    import_react25.default.createElement(
      "path",
      { d: "M28 25A50 50 0 0 1 78 75", fill: "none", "ng-attr-stroke": "{{config.c3}}", strokeWidth: "10", stroke: colors[2] },
      import_react25.default.createElement("animate", { attributeName: "stroke-opacity", calcMode: "linear", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1", begin: "0.2s", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/ProgressBar.js
var import_react26 = __toESM(require_react());
var __assign25 = function() {
  __assign25 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign25.apply(this, arguments);
};
function ProgressBar(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.width, width = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "progress-bar-loading" : _g, _h = _a.borderColor, borderColor = _h === void 0 ? "#F4442E" : _h, _j = _a.barColor, barColor = _j === void 0 ? "#51E5FF" : _j;
  return !visible ? null : import_react26.default.createElement(
    "svg",
    __assign25({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "progress-bar-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react26.default.createElement(
      "defs",
      null,
      import_react26.default.createElement(
        "clipPath",
        { "ng-attr-id": "{{config.cpid}}", x: "0", y: "0", width: "100", height: "100", id: "lds-progress-cpid-5009611b8a418" },
        import_react26.default.createElement(
          "rect",
          { x: "0", y: "0", width: "66.6667", height: "100" },
          import_react26.default.createElement("animate", { attributeName: "width", calcMode: "linear", values: "0;100;100", keyTimes: "0;0.5;1", dur: "1", begin: "0s", repeatCount: "indefinite" }),
          import_react26.default.createElement("animate", { attributeName: "x", calcMode: "linear", values: "0;0;100", keyTimes: "0;0.5;1", dur: "1", begin: "0s", repeatCount: "indefinite" })
        )
      )
    ),
    import_react26.default.createElement("path", { fill: "none", "ng-attr-stroke": "{{config.c1}}", strokeWidth: "2.7928", d: "M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z", stroke: borderColor }),
    import_react26.default.createElement("path", { "ng-attr-fill": "{{config.c2}}", "ng-attr-clip-path": "url(#{{config.cpid}})", d: "M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z", fill: barColor, clipPath: "url(#lds-progress-cpid-5009611b8a418)" })
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/MagnifyingGlass.js
var import_react27 = __toESM(require_react());
var __assign26 = function() {
  __assign26 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign26.apply(this, arguments);
};
function MagnifyingGlass(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.width, width = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "magnifying-glass-loading" : _g, _h = _a.glassColor, glassColor = _h === void 0 ? "#c0efff" : _h, _j = _a.color, color = _j === void 0 ? "#e15b64" : _j;
  return !visible ? null : import_react27.default.createElement(
    "svg",
    __assign26({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "magnifying-glass-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react27.default.createElement(
      "g",
      { transform: "translate(50,50)" },
      import_react27.default.createElement(
        "g",
        { "ng-attr-transform": "scale({{config.scale}})", transform: "scale(0.82)" },
        import_react27.default.createElement(
          "g",
          { transform: "translate(-50,-50)" },
          import_react27.default.createElement(
            "g",
            { transform: "translate(16.3636 -20)" },
            import_react27.default.createElement("animateTransform", { attributeName: "transform", type: "translate", calcMode: "linear", values: "-20 -20;20 -20;0 20;-20 -20", keyTimes: "0;0.33;0.66;1", dur: "1s", begin: "0s", repeatCount: "indefinite" }),
            import_react27.default.createElement("path", { "ng-attr-fill": "{{config.glass}}", d: "M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z", fill: glassColor }),
            import_react27.default.createElement("path", { "ng-attr-fill": "{{config.frame}}", d: "M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z", fill: color })
          )
        )
      )
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/FidgetSpinner.js
var import_react28 = __toESM(require_react());
var __assign27 = function() {
  __assign27 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign27.apply(this, arguments);
};
function FidgetSpinner(_a) {
  var _b = _a.width, width = _b === void 0 ? "80" : _b, _c = _a.height, height = _c === void 0 ? "80" : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? DEFAULT_COLOR : _d, _e = _a.ballColors, ballColors = _e === void 0 ? ["#fc636b", "#6a67ce", "#ffb900"] : _e, _f = _a.wrapperClass, wrapperClass = _f === void 0 ? "" : _f, _g = _a.wrapperStyle, wrapperStyle = _g === void 0 ? {} : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? "fidget-spinner-loader" : _h, _j = _a.visible, visible = _j === void 0 ? true : _j;
  return !visible ? null : import_react28.default.createElement(
    "svg",
    __assign27({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "fidget-spinner-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react28.default.createElement(
      "g",
      { transform: "rotate(6 50 50)" },
      import_react28.default.createElement(
        "g",
        { transform: "translate(50 50)" },
        import_react28.default.createElement(
          "g",
          { "ng-attr-transform": "scale({{config.r}})", transform: "scale(0.9)" },
          import_react28.default.createElement(
            "g",
            { transform: "translate(-50 -58)" },
            import_react28.default.createElement("path", { "ng-attr-fill": "{{config.c2}}", d: "M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z", fill: ballColors[0] }),
            import_react28.default.createElement("path", { "ng-attr-fill": "{{config.c3}}", d: "M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z", fill: ballColors[1] }),
            import_react28.default.createElement("circle", { "ng-attr-fill": "{{config.c4}}", cx: "50", cy: "27", r: "7.4", fill: ballColors[2] }),
            import_react28.default.createElement("path", { "ng-attr-fill": "{{config.c1}}", d: "M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z", fill: backgroundColor })
          )
        )
      ),
      import_react28.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/Dna.js
var import_react29 = __toESM(require_react());
var __assign28 = function() {
  __assign28 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign28.apply(this, arguments);
};
function DNA(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "80" : _c, _d = _a.height, height = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "dna-loading" : _g;
  return !visible ? null : import_react29.default.createElement(
    "svg",
    __assign28({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width, height, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "dna-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react29.default.createElement(
      "circle",
      { cx: "6.451612903225806", cy: "60.6229", r: "3.41988", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-0.5s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "0s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-0.5s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "6.451612903225806", cy: "39.3771", r: "2.58012", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.5s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-0.5s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "16.129032258064512", cy: "68.1552", r: "3.17988", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-0.7s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-0.2s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-0.7s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "16.129032258064512", cy: "31.8448", r: "2.82012", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.7s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.2s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-0.7s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "25.806451612903224", cy: "69.3634", r: "2.93988", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-0.9s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-0.4s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-0.9s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "25.806451612903224", cy: "30.6366", r: "3.06012", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.9s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.4s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-0.9s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "35.48387096774193", cy: "65.3666", r: "2.69988", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.1s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-0.6s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-1.1s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "35.48387096774193", cy: "34.6334", r: "3.30012", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.1s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.6s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-1.1s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "45.16129032258064", cy: "53.8474", r: "2.45988", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.3s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-0.8s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-1.3s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "45.16129032258064", cy: "46.1526", r: "3.54012", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.3s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.8s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-1.3s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "54.838709677419345", cy: "39.3771", r: "2.58012", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.5s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-1.5s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "54.838709677419345", cy: "60.6229", r: "3.41988", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.5s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-2s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-1.5s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "64.51612903225805", cy: "31.8448", r: "2.82012", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.7s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.2s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-1.7s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "64.51612903225805", cy: "68.1552", r: "3.17988", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.7s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-2.2s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-1.7s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "74.19354838709677", cy: "30.6366", r: "3.06012", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-1.9s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.4s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-1.9s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "74.19354838709677", cy: "69.3634", r: "2.93988", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.9s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-2.4s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-1.9s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "83.87096774193547", cy: "34.6334", r: "3.30012", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.1s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.6s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-2.1s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "83.87096774193547", cy: "65.3666", r: "2.69988", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-3.1s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-2.6s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-2.1s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "93.54838709677418", cy: "46.1526", r: "3.54012", fill: "rgba(233, 12, 89, 0.5125806451612902)" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-2.3s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-1.8s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)", dur: "2s", repeatCount: "indefinite", begin: "-2.3s" })
    ),
    import_react29.default.createElement(
      "circle",
      { cx: "93.54838709677418", cy: "53.8474", r: "2.45988", fill: "#46dff0" },
      import_react29.default.createElement("animate", { attributeName: "r", keyTimes: "0;0.5;1", values: "2.4000000000000004;3.5999999999999996;2.4000000000000004", dur: "2s", repeatCount: "indefinite", begin: "-3.3s" }),
      import_react29.default.createElement("animate", { attributeName: "cy", keyTimes: "0;0.5;1", values: "30.5;69.5;30.5", dur: "2s", repeatCount: "indefinite", begin: "-2.8s", keySplines: "0.5 0 0.5 1;0.5 0 0.5 1", calcMode: "spline" }),
      import_react29.default.createElement("animate", { attributeName: "fill", keyTimes: "0;0.5;1", values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0", dur: "2s", repeatCount: "indefinite", begin: "-2.3s" })
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/Discuss.js
var import_react30 = __toESM(require_react());
var __assign29 = function() {
  __assign29 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign29.apply(this, arguments);
};
function Discuss(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "80" : _c, _d = _a.height, height = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "discuss-loading" : _g, _h = _a.colors, colors = _h === void 0 ? ["#ff727d", "#ff727d"] : _h;
  return !visible ? null : import_react30.default.createElement(
    "svg",
    __assign29({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "discuss-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react30.default.createElement("path", { "ng-attr-d": "{{config.d}}", "ng-attr-stroke-width": "{{config.width}}", "ng-attr-stroke": "{{config.stroke}}", fill: "none", d: "M82 50A32 32 0 1 1 23.533421623214014 32.01333190873183 L21.71572875253809 21.7157287525381 L32.013331908731814 23.53342162321403 A32 32 0 0 1 82 50", strokeWidth: "5", stroke: colors[0] }),
    import_react30.default.createElement(
      "circle",
      { cx: "50", cy: "50", "ng-attr-r": "{{config.radius2}}", "ng-attr-stroke-width": "{{config.width}}", "ng-attr-stroke": "{{config.stroke}}", "ng-attr-stroke-dasharray": "{{config.dasharray}}", fill: "none", strokeLinecap: "round", r: "20", strokeWidth: "5", stroke: colors[1], strokeDasharray: "31.41592653589793 31.41592653589793", transform: "rotate(96 50 50)" },
      import_react30.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/ColorRing.js
var import_react31 = __toESM(require_react());
var __assign30 = function() {
  __assign30 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign30.apply(this, arguments);
};
function ColorRing(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "80" : _c, _d = _a.height, height = _d === void 0 ? "80" : _d, _e = _a.colors, colors = _e === void 0 ? ["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"] : _e, _f = _a.wrapperClass, wrapperClass = _f === void 0 ? "" : _f, _g = _a.wrapperStyle, wrapperStyle = _g === void 0 ? {} : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? "color-ring-loading" : _h;
  return !visible ? null : import_react31.default.createElement(
    "svg",
    __assign30({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width, height, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "color-ring-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react31.default.createElement(
      "defs",
      null,
      import_react31.default.createElement(
        "mask",
        { id: "ldio-4offds5dlws-mask" },
        import_react31.default.createElement(
          "circle",
          { cx: "50", cy: "50", r: "26", stroke: "#fff", strokeLinecap: "round", strokeDasharray: "122.52211349000194 40.840704496667314", strokeWidth: "9", transform: "rotate(198.018 50 50)" },
          import_react31.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", repeatCount: "indefinite" })
        )
      )
    ),
    import_react31.default.createElement(
      "g",
      { mask: "url(#ldio-4offds5dlws-mask)" },
      import_react31.default.createElement(
        "rect",
        { x: "14.5", y: "0", width: "15", height: "100", fill: colors[0] },
        import_react31.default.createElement("animate", { attributeName: "fill", values: colors.join(";").toString(), keyTimes: "0;0.25;0.5;0.75;1", dur: "1s", repeatCount: "indefinite", begin: "-0.8s" })
      ),
      import_react31.default.createElement(
        "rect",
        { x: "28.5", y: "0", width: "15", height: "100", fill: colors[1] },
        import_react31.default.createElement("animate", { attributeName: "fill", values: colors.join(";").toString(), keyTimes: "0;0.25;0.5;0.75;1", dur: "1s", repeatCount: "indefinite", begin: "-0.6s" })
      ),
      import_react31.default.createElement(
        "rect",
        { x: "42.5", y: "0", width: "15", height: "100", fill: colors[2] },
        import_react31.default.createElement("animate", { attributeName: "fill", values: colors.join(";").toString(), keyTimes: "0;0.25;0.5;0.75;1", dur: "1s", repeatCount: "indefinite", begin: "-0.4s" })
      ),
      import_react31.default.createElement(
        "rect",
        { x: "56.5", y: "0", width: "15", height: "100", fill: colors[3] },
        import_react31.default.createElement("animate", { attributeName: "fill", values: colors.join(";").toString(), keyTimes: "0;0.25;0.5;0.75;1", dur: "1s", repeatCount: "indefinite", begin: "-0.2s" })
      ),
      import_react31.default.createElement(
        "rect",
        { x: "70.5", y: "0", width: "15", height: "100", fill: colors[4] },
        import_react31.default.createElement("animate", { attributeName: "fill", values: colors.join(";").toString(), keyTimes: "0;0.25;0.5;0.75;1", dur: "1s", repeatCount: "indefinite", begin: "0s" })
      )
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/Comment.js
var import_react32 = __toESM(require_react());
var __assign31 = function() {
  __assign31 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign31.apply(this, arguments);
};
function Comment(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "80" : _c, _d = _a.height, height = _d === void 0 ? "80" : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? "#ff6d00" : _e, _f = _a.color, color = _f === void 0 ? "#fff" : _f, _g = _a.wrapperClass, wrapperClass = _g === void 0 ? "" : _g, _h = _a.wrapperStyle, wrapperStyle = _h === void 0 ? {} : _h, _j = _a.ariaLabel, ariaLabel = _j === void 0 ? "comment-loading" : _j;
  return !visible ? null : import_react32.default.createElement(
    "svg",
    __assign31({ width, height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: wrapperClass, style: wrapperStyle, "aria-label": ariaLabel, "data-testid": "comment-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react32.default.createElement("path", { d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z", "ng-attr-fill": "{{config.c1}}", fill: backgroundColor }),
    import_react32.default.createElement(
      "circle",
      { cx: "30", cy: "47", r: "5", "ng-attr-fill": "{{config.c2}}", fill: color },
      import_react32.default.createElement("animate", { attributeName: "opacity", calcMode: "linear", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1", begin: "0s", repeatCount: "indefinite" })
    ),
    import_react32.default.createElement(
      "circle",
      { cx: "50", cy: "47", r: "5", "ng-attr-fill": "{{config.c3}}", fill: color },
      import_react32.default.createElement("animate", { attributeName: "opacity", calcMode: "linear", values: "0;0;1;1", keyTimes: "0;0.2;0.4;1", dur: "1", begin: "0s", repeatCount: "indefinite" })
    ),
    import_react32.default.createElement(
      "circle",
      { cx: "70", cy: "47", r: "5", "ng-attr-fill": "{{config.c4}}", fill: color },
      import_react32.default.createElement("animate", { attributeName: "opacity", calcMode: "linear", values: "0;0;1;1", keyTimes: "0;0.4;0.6;1", dur: "1", begin: "0s", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loader-spinner/dist/esm/loader/Blocks.js
var import_react33 = __toESM(require_react());
var __assign32 = function() {
  __assign32 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign32.apply(this, arguments);
};
function Blocks(_a) {
  var _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "80" : _c, _d = _a.height, height = _d === void 0 ? "80" : _d, _e = _a.wrapperClass, wrapperClass = _e === void 0 ? "" : _e, _f = _a.wrapperStyle, wrapperStyle = _f === void 0 ? {} : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? "blocks-loading" : _g;
  return !visible ? null : import_react33.default.createElement(
    "svg",
    __assign32({ width, height, className: wrapperClass, style: wrapperStyle, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", "aria-label": ariaLabel, "data-testid": "blocks-svg" }, DEFAULT_WAI_ARIA_ATTRIBUTE),
    import_react33.default.createElement(
      "rect",
      { x: "17", y: "17", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "40", y: "17", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.125s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "63", y: "17", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.25s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "17", y: "40", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.875s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "63", y: "40", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.375s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "17", y: "63", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.75s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "40", y: "63", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.625s", calcMode: "discrete" })
    ),
    import_react33.default.createElement(
      "rect",
      { x: "63", y: "63", width: "20", height: "20", fill: "#577c9b" },
      import_react33.default.createElement("animate", { attributeName: "fill", values: "#0dceff;#577c9b;#577c9b", keyTimes: "0;0.125;1", dur: "1s", repeatCount: "indefinite", begin: "0.5s", calcMode: "discrete" })
    )
  );
}
export {
  Audio_default as Audio,
  BallTriangle_default as BallTriangle,
  Bars_default as Bars,
  Blocks,
  Circles_default as Circles,
  CirclesWithBar_default as CirclesWithBar,
  ColorRing,
  Comment,
  Discuss,
  DNA as Dna,
  FallingLines_default as FallingLines,
  FidgetSpinner,
  Grid_default as Grid,
  Hearts_default as Hearts,
  InfinitySpin_default as InfinitySpin,
  LineWave_default as LineWave,
  MagnifyingGlass,
  MutatingDots_default as MutatingDots,
  Oval_default as Oval,
  ProgressBar,
  Puff_default as Puff,
  Radio,
  RevolvingDot_default as RevolvingDot,
  Rings_default as Rings,
  RotatingLines,
  RotatingSquare_default as RotatingSquare,
  RotatingTriangles,
  TailSpin_default as TailSpin,
  ThreeCircles_default as ThreeCircles,
  ThreeDots_default as ThreeDots,
  Triangle_default as Triangle,
  Vortex_default as Vortex,
  Watch_default as Watch
};
//# sourceMappingURL=react-loader-spinner.js.map
