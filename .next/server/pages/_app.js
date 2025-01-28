/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/skin/skin-2.css */ \"./css/skin/skin-2.css\");\n/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"D:\\\\workfiles\\\\package-20230715T113025Z-001\\\\package\\\\package2\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //import Slider from \"react-rangeslider\";\n//import \"react-rangeslider/lib/index.css\";\n\n\n //import {useScrollPosition} from \"@n8tb1t/use-scroll-position\";\n//import \"../css/skin/skin-1.css\";\n//import \"../css/skin/skin-3.css\";\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: layout,\n    1: setLayout\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"wide\");\n  const {\n    0: header,\n    1: setHeader\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fixed\");\n  const {\n    0: header_,\n    1: setHeader_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: sliderValu,\n    1: setSliderValu\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setbody_(document.querySelector(\"body\"));\n    setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n  }, []); //let scrollPosition = useScrollPosition();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const backGroundImage = value => {\n    body_.style.backgroundImage = `url(${value})`;\n    body_.style.backgroundSize = \"auto\";\n  };\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === \"fixed\") {\n      header_[0].classList.add(\"sticky-header\");\n      header_[0].classList.remove(\"sticky-no\");\n    } else {\n      header_[0].classList.add(\"sticky-no\");\n      header_[0].classList.remove(\"sticky-header\");\n      header_[0].classList.remove(\"is-fixed\");\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + \"px\";\n  };\n  /*  header === \"fixed\" && scrollPosition > 10\r\n     ? header_ && header_[0].classList.add(\"is-fixed\")\r\n     : header_ && header_[0].classList.remove(\"is-fixed\"); */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Samar - React Template\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/images/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxPQUF4QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFLGVBS0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVsQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQW9DRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbWFyLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbi8vaW1wb3J0IFwicmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbi8vaW1wb3J0IHt1c2VTY3JvbGxQb3NpdGlvbn0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG4vL2ltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMS5jc3NcIjtcclxuLy9pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0yLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3RvZ2dsZTEsIHNldFRvZ2dsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib2R5Xywgc2V0Ym9keV9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbGF5b3V0LCBzZXRMYXlvdXRdID0gdXNlU3RhdGUoXCJ3aWRlXCIpO1xyXG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShcImZpeGVkXCIpO1xyXG4gIGNvbnN0IFtoZWFkZXJfLCBzZXRIZWFkZXJfXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NsaWRlclZhbHUsIHNldFNsaWRlclZhbHVdID0gdXNlU3RhdGUoMjApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Ym9keV8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpO1xyXG4gICAgc2V0SGVhZGVyXyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1iYXItd3JhcGVyXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vbGV0IHNjcm9sbFBvc2l0aW9uID0gdXNlU2Nyb2xsUG9zaXRpb24oKTtcclxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICBzZXRUb2dnbGUxKCF0b2dnbGUxKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJhY2tHcm91bmRJbWFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgYm9keV8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3ZhbHVlfSlgO1xyXG4gICAgYm9keV8uc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImF1dG9cIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFnZUhlYWRlciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SGVhZGVyKHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ub1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcInN0aWNreS1ub1wiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNsaWRlclZhbHUodmFsdWUpO1xyXG4gICAgYm9keV8uc3R5bGUucGFkZGluZyA9IHZhbHVlICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gLyogIGhlYWRlciA9PT0gXCJmaXhlZFwiICYmIHNjcm9sbFBvc2l0aW9uID4gMTBcclxuICAgID8gaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJpcy1maXhlZFwiKVxyXG4gICAgOiBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpOyAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+U2FtYXIgLSBSZWFjdCBUZW1wbGF0ZTwvdGl0bGU+XHJcblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cdFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2NhcnQvY29uZmlndXJlX2JlZm9yZV9hZGRpbmcvMzI5NTA3NDIvP2xpY2Vuc2U9cmVndWxhclwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJidC1idXktbm93IHRoZW1lLWJ0blwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1zaG9wcGluZy1jYXJ0XCIgLz5cclxuICAgICAgICA8c3Bhbj5CdXkgTm93PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vc3VwcG9ydC53M2l0ZXhwZXJ0cy5jb21cIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnQtc3VwcG9ydC1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLWhlYWRwaG9uZS1hbHRcIiAvPlxyXG4gICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XHJcbiAgICAgIDwvYT4gKi99XHJcbiAgICAgIHsvKiA8YSBocmVmPVwiI3RvcFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sdG9wIGljb24tdXBcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2E+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRvZ2dsZTEiLCJzZXRUb2dnbGUxIiwiYm9keV8iLCJzZXRib2R5XyIsImxheW91dCIsInNldExheW91dCIsImhlYWRlciIsInNldEhlYWRlciIsImhlYWRlcl8iLCJzZXRIZWFkZXJfIiwic2xpZGVyVmFsdSIsInNldFNsaWRlclZhbHUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwiYmFja0dyb3VuZEltYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-2.css":
/*!*****************************!*\
  !*** ./css/skin/skin-2.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();