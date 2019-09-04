webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Portfolio.js":
/*!**********************************!*\
  !*** ./componentes/Portfolio.js ***!
  \**********************************/
/*! exports provided: Portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\Web Design\\mysite_test\\with-ant-design-app\\componentes\\Portfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\nwidth: 100%;\nheight: 60vh;\nmargin-top: 10%;\nborder-radius: 10px;\nmargin-left: 10%;\noverflow: hidden;\nposition: relative;\nz-index: 1;\nimg {\n    height:100%;\n    width: auto;\n    position: absolute;\n    right: 50%;\n    transform: translateX(50%);\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\nwidth: 85%;\nheight: 20vh;\nborder-radius: 5px;\nbackground: ", ";\noverflow: hidden;\nmargin-top: ", ";\nmargin-left: ", ";\nz-index: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var MolduraPort = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (props) {
  return props.margintop;
}, function (props) {
  return props.marginleft;
});
var Carouselcard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var Base = "../static/carrosel2.jpg";
function Portfolio(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      photo = _useState2[0],
      setPhoto = _useState2[1];

  var image = "";
  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "20%",
    margintop: "15%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "15%",
    margintop: "15%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "10%",
    margintop: "15%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "20%",
    margintop: "10%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "15%",
    margintop: "10%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "10%",
    margintop: "10%",
    onClick: function onClick() {
      return setPhoto("../static/carrosel1.jpg");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("img", {
    src: "../static/carrosel1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Carouselcard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("img", {
    src: photo || Base,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.c3c3458445141646cfc5.hot-update.js.map