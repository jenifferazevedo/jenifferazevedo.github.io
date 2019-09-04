module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componentes/Fotos.js":
/*!******************************!*\
  !*** ./componentes/Fotos.js ***!
  \******************************/
/*! exports provided: FotoPerfil, Imagemretangular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoPerfil", function() { return FotoPerfil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imagemretangular", function() { return Imagemretangular; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Fotos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Photo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 100%;
height: 100vh;
position: relative;
z-index: 1;
padding-top: ${props => props.top};
padding-left: ${props => props.left};
@media (max-width: 768px) {
    height:300px;
}
@media (max-width: 568px) {
    padding-top: 10%;
    padding-left: 30%;
    width: 250px;
    height: 300px;
}
`;
const PhotoRet = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 100%;
height: 100vh;
position: relative;
z-index: 1;
padding-top: ${props => props.top};
padding-left: ${props => props.left};
@media (max-width: 768px) {
    height:500px;
    padding-top: 20%;
}
@media (max-width: 568px) {
    height: 50vh;
    padding-top: 0%;
}
`;
const MolduraRedonda1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
height: 50%;
background-color: ${({
  theme
}) => theme.colors.pink}; 
border-radius: 100%;
position: absolute;
opacity: 80%;
z-index: 2;
`;
const MolduraRedonda2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
height: 50%;
background-color: ${({
  theme
}) => theme.colors.moldurayellow}; 
border-radius: 100%;
position: absolute;
margin-left: 10%;
opacity: 80%;
z-index: 3;
`;
const MolduraRedonda3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
height: 50%;
background-color: ${({
  theme
}) => theme.colors.lightblue}; 
border-radius: 100%;
position: absolute;
margin-top: 10%;
`;
const MolduraRedonda4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
height: 50%;
background-color:${({
  theme
}) => theme.colors.purple};
border-radius: 100%;
position: absolute;
margin-top: 10%;
margin-left: 10%;
`;
const Moldurafoto = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
height: 50%;
border-radius: 100%;
position: absolute;
overflow: hidden;
margin-top: 5%;
margin-left: 5%;
z-index: 4;
img{
    width: 100%;
    height: 105%;
}
`;
const MolduraRet1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 50%;
height: 70%;
background-color: ${({
  theme
}) => theme.colors.pink}; 
position: absolute;
opacity: 80%;
z-index: 2;
margin-top: 7.5%;
margin-left: 5%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`;
const MolduraRet2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 50%;
height: 70%;
background-color: ${({
  theme
}) => theme.colors.moldurayellow}; 
position: absolute;
margin-left: 7.5%;
opacity: 80%;
z-index: 3;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`;
const MolduraRet3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 50%;
height: 70%;
background-color: ${({
  theme
}) => theme.colors.lightblue}; 
position: absolute;
margin-top: 10%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`;
const MolduraRet4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 50%;
height: 70%;
background-color:${({
  theme
}) => theme.colors.purple};
position: absolute;
margin-top: 2.5%;
margin-left: 2.5%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`;
const Molduraimagemret = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 50%;
height: 70%;
position: absolute;
overflow: hidden;
margin-top: 5%;
margin-left: 5%;
z-index: 4;
img{
    height: 100%;
}
@media (max-width: 568px) {
    height: 50%;
}
`;
function FotoPerfil(props) {
  return __jsx(Photo, {
    top: "20%",
    left: "15%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(MolduraRedonda1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(MolduraRedonda2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(MolduraRedonda3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(MolduraRedonda4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), __jsx(Moldurafoto, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("img", {
    src: ".\\static\\0.jpg",
    alt: "myimageperfil",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })));
}
function Imagemretangular(props) {
  return __jsx(PhotoRet, {
    top: "10%",
    left: "30%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(MolduraRet1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(MolduraRet2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(MolduraRet3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), __jsx(MolduraRet4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx(Molduraimagemret, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("img", {
    src: ".\\static\\developer_meme.jpg",
    alt: "meme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })));
}

/***/ }),

/***/ "./componentes/Icons.js":
/*!******************************!*\
  !*** ./componentes/Icons.js ***!
  \******************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Icons.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const Icone = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
position: fixed;
z-index: 5;
bottom: 0;
right: 0;
font-size: 3em;
line-height: 0;
padding-right:0.5%;
@media (max-width: 768px) {
    top:0;
}
@media (max-width: 568px) {
    top:0;
    font-size: 2em;
}
div {
    padding: 10% 0%;
    :hover {
    .anticon svg {
    fill: ${({
  theme
}) => theme.colors.lightblue};
    }
}
}
.anticon svg {
    fill: ${({
  theme
}) => theme.colors.purple};
}
`;
function Icons(props) {
  return __jsx(Icone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/jeniffer-de-azevedo-6b567070/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: props.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/jenifferazevedo",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: props.social1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.behance.net/jenifferazevedo",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: props.social2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./componentes/Mybutton.js":
/*!*********************************!*\
  !*** ./componentes/Mybutton.js ***!
  \*********************************/
/*! exports provided: Vejamais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vejamais", function() { return Vejamais; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Mybutton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Primarybutton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
width: 15%;
font-size: 2em;
margin-left: 42.5%;
margin-right: 42.5%;
margin-top: 2%;
text-align: center;
font-family: 'Arial Narrow';
text-transform: uppercase;
color: ${({
  theme
}) => theme.colors.white};
border: 4px solid ${({
  theme
}) => theme.colors.white};
border-radius: 5px;
background: none;
display:  ${props => props.click ? 'none' : 'block'};
transition: display 1s;
:hover{
    border-color: ${({
  theme
}) => theme.colors.yellow2};
    background: ${({
  theme
}) => theme.colors.backgroundbutton};
    box-shadow: 0px 0px 4px 2px  ${({
  theme
}) => theme.colors.boxshadowescuro};
}
`;
const Morebutton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
width: 25%;
font-size: 1em;
text-align: center;
background-color: ${({
  theme
}) => theme.colors.lightblue};
border: 3px solid ${({
  theme
}) => theme.colors.white};
border-radius: 5px;
padding: 1%;
position: absolute;
right: 0;
h4{
    font-size: 1vw;
    padding: 0%;
    margin: 0%;
    color: ${({
  theme
}) => theme.colors.white};
}
:hover{
    border-color: ${({
  theme
}) => theme.colors.yellow2};
    background: ${({
  theme
}) => theme.colors.backgroundbutton};
    box-shadow: 0px 0px 10px 1px  ${({
  theme
}) => theme.colors.boxshadowescuro};
    h4 {
        color: ${({
  theme
}) => theme.colors.yellow2};
    }
}
`;
function Vejamais(props) {
  return __jsx(Morebutton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.buttontext));
}

/***/ }),

/***/ "./componentes/Page.js":
/*!*****************************!*\
  !*** ./componentes/Page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Texts */ "./componentes/Texts.js");
/* harmony import */ var _Mybutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mybutton */ "./componentes/Mybutton.js");
/* harmony import */ var _Fotos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fotos */ "./componentes/Fotos.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Icons */ "./componentes/Icons.js");
/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Portfolio */ "./componentes/Portfolio.js");




var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







const Background1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 100%;
`;
const Sectiongradiente = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 100%;
height: 100vh;
background: ${({
  theme
}) => theme.colors.background1};
overflow: hidden;
@media (max-width: 768px) {
    height: 300px;
}
@media (max-width: 568px) {
    height: 768px;
}
`;
const Sectiongradiente1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 100%;
height: 100vh;
background: ${({
  theme
}) => theme.colors.background2};
overflow: hidden;
@media (max-width: 768px) {
    height: 768px;
}
@media (max-width: 568px) {
    height: 550px;
}
`;
const Sectionywhite = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 100%;
height: 100vh;
background: ${({
  theme
}) => theme.colors.white};
overflow: hidden;
@media (max-width: 768px) {
    height: 520px;
}
@media (max-width: 568px) {
    height: 720px;
}
`;
const Sectionpurple = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 100%;
height: 20vh;
background: ${({
  theme
}) => theme.colors.lightblue};
overflow: hidden;
@media (max-width: 768px) {
    height: 120px;
}
@media (max-width: 568px) {
    height: 80px;
}
`;
const Detalhetext = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 40%;
height: 0.5vh;
background-color: ${({
  theme
}) => theme.colors.lightblue};
margin-left: ${props => props.left};
@media (max-width: 568px) {
    margin-left: ${props => props.leftmobile}
}
`;
function Page(props) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  return __jsx(Background1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(Sectiongradiente, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 9,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_Fotos__WEBPACK_IMPORTED_MODULE_8__["FotoPerfil"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 13,
    md: 14,
    sm: 22,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Firstsectiontext"], {
    tablettextsize: "5vw",
    mobilesize: "7.5vw",
    firsttitle: "jeniffer de azevedo",
    secondtitle: "web designer & front-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(Detalhetext, {
    leftmobile: "10%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Textperfil"], {
    textp1: "Ol\xE1! Meu nome \xE9 Jeniffer.  Amo a tecnologia e o design!",
    textp2: "Tenho experiencia e conhecimento em: \r Photoshop, Illustrator, Adobe XD, GitHub, HTML, CSS, Bootstrap, Javascript, React.js, Next.js. \r Estou sempre a aprender e me atualizar nas novas tecnologias para melhorar cada projeto!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 2,
    md: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_9__["Icons"], {
    social: "linkedin",
    social1: "github",
    social2: "behance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), __jsx(Sectionywhite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 11,
    md: 11,
    sm: 20,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Texttitles"], {
    title: "mais sobre mim",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["PalavrasColoridas"], {
    word1: "design",
    word2: "psicologia",
    word3: "web design",
    word4: "front-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 11,
    md: 11,
    sm: 20,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Texto"], {
    tablettextsize: "1.8vw",
    mobilesize: "3.2vw",
    paddingTop: "15%",
    fontsize: "1.4vw",
    textp1: "Sou brasileira/portuguesa, tenho 25 anos, casada, natural do Rio de Janeiro/Brasil, mas atualmente minha morada \xE9\r em Vila Nova de Gaia/ Porto. Desde a adolesc\xEAncia eu amo desenhar e usar o computador, ent\xE3o comecei a trabalhar com Design Gr\xE1fico \r para ajudar na empresa da minha fam\xEDlia no Brasil. Por mais que amasse a \xE1rea, n\xE3o havia muitas oportunidades na cidade onde morava, \r ent\xE3o continuei os estudos em Psicologia, que exerci durante alguns anos.",
    textp2: "No entanto, por n\xE3o estar satisfeita e tendo mais experiencia decidi voltar \xE0 \xE1rea de Design. Fiz um curso para me atualizar,\r mas acabei por me redescobrir na arte da Tatuagem e do Web Design. Segui para outros cursos de Front-end developer, e continuei a \r estudar Tatuagem como um hobbie. A cada novo conhecimento, eu vejo mais um desafio que me motiva a continuar e a me aprimorar sempre!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), __jsx(Sectiongradiente1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Subtitles"], {
    firsttitle: "alguns trabalhos recentes",
    fontsize: "3vw",
    mobilesize: "4vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(Detalhetext, {
    left: "30%",
    leftmobile: "30%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_Portfolio__WEBPACK_IMPORTED_MODULE_10__["Portfolio"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })))), __jsx(Sectionywhite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 11,
    md: 12,
    sm: 22,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Texttitles"], {
    title: "autocriticas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Texto"], {
    tablettextsize: "1.6vw",
    paddingTop: "5%",
    fontsize: "1.2vw",
    mobilesize: "3vw",
    textp1: "Sou perfeccionista ao ponto de n\xE3o conseguir parar um projeto ou come\xE7ar outra tarefa antes de achar que est\xE1 tudo \r \"perfeito\". Depois de dois anos de terapia consegui melhorar isso e hoje virou uma \"intensa persist\xEAncia\" (ok, as vezes ainda sonho \r com projetos que n\xE3o est\xE3o do meu jeito)",
    textp2: "Tendo a pensar sempre de um jeito mais complicado, o que pode me fazer n\xE3o chegar a \r uma solu\xE7\xE3o. O lado positivo \xE9 que depois considero os benef\xEDcios entre os tipos de solu\xE7\xF5es e escolho com base na qualidade.\r As vezes dou \"bug\" e fico olhando para o nada, se me ver olhando para voc\xEA e eu n\xE3o responder, provavelmente \xE9 um desses momentos, \r n\xE3o se assuste... estou apenas reiniciando.",
    textp3: "Quando estou relaxada no ambiente de trabalho, posso falar muito... realmente muito \r (quando n\xE3o estou focada em uma tarefa), sou simplesmente extrovertida.",
    textp4: "Posso ficar frustrada algumas vezes, seja trabalhando \r sozinha ou em grupo... me d\xEA um espa\xE7o de 5 minutos e volto a ser um amor de pessoa.",
    textp5: "Estou sempre a melhorar minhas atitudes em \r todos os aspectos da minha vida, assim como a tecnologia!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 11,
    md: 10,
    sm: 22,
    xs: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(_Fotos__WEBPACK_IMPORTED_MODULE_8__["Imagemretangular"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }))), __jsx(Sectionpurple, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["Subtitles"], {
    tablettextsize: "2vw",
    mobilesize: "3.5vw",
    firsttitle: "JENIFFER DE AZEVEDO, VILA NOVA DE GAIA - PORTUGAL",
    secondtitle: "+351 930 516 249  //  JENIQF@GMAIL.COM",
    fontsize: "1.2vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))));
}

/***/ }),

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
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Texts */ "./componentes/Texts.js");




var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Portfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



const MolduraPort = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 85%;
height: 20vh;
border-radius: 5px;
background: ${({
  theme
}) => theme.colors.white};
overflow: hidden;
margin-top: ${props => props.margintop};
margin-left: ${props => props.marginleft};
img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
}
:hover {
    box-shadow: 0px 0px 5px 1px ${({
  theme
}) => theme.colors.boxshadowescuro};
}
@media (max-width: 768px) {
    height: 100px;
    z-index: 3;
    margin-top: 10%;
    img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
    }
}
@media (max-width: 568px) {
    height: 80px;
    z-index: 3;
    margin-top: 10%;
    background: ${({
  theme
}) => theme.colors.purple};
    img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
    }
}
`;
const Carouselcard = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
width: 90%;
height: 60vh;
margin-top: 10%;
margin-left: 10%;
border-radius: 10px;
overflow: hidden;
img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
}
@media (max-width: 768px) {
    margin-top: 0;
    width: 90%;
    height: 300px;
    img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
    }
}
@media (max-width: 568px) {
    height: 220px;
    img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
    }
}
`;
const Links = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h2`
padding-left: 10%;
padding-top: 2.5%;
font-size: 1.5vw;
color: ${({
  theme
}) => theme.colors.yellow};
a {
    text-decoration: none;
    color: ${({
  theme
}) => theme.colors.yellow};
}
`;
const Base = "../static/Cantinhodasflores.png";
const Github = "https://github.com/jenifferazevedo";
function Portfolio(props) {
  const {
    0: photo,
    1: setPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 12,
    md: 22,
    sm: 22,
    xs: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "25%",
    margintop: "30%",
    marginleftimg: "-30%",
    onClick: () => setPhoto("../static/Cantinhodasflores.png") & setLink("https://youthful-ptolemy-a12c07.netlify.com/#formulariodecadastro"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: "..\\static\\Cantinhodasflores.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "20%",
    margintop: "30%",
    marginleftimg: "-30%",
    onClick: () => setPhoto("../static/Pokedex.png") & setLink("https://pokedexjeniffer.herokuapp.com/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("img", {
    src: "..\\static\\Pokedex.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "15%",
    margintop: "30%",
    marginleftimg: "-30%",
    onClick: () => setPhoto("../static/Dashboard.jpg") & setLink("https://github.com/jenifferazevedo/Dashboard_Ui"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("img", {
    src: "..\\static\\Dashboard.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(MolduraPort, {
    marginleft: "25%",
    margintop: "10%",
    marginleftimg: "0%",
    onClick: () => setPhoto("../static/Graphic.jpg") & setLink("https://www.behance.net/jenifferazevedo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("img", {
    src: "..\\static\\Graphic.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_Texts__WEBPACK_IMPORTED_MODULE_6__["PalavraAzul"], {
    word1: "Em constru\xE7\xE3o...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    lg: 12,
    md: 22,
    sm: 22,
    xs: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(Carouselcard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("img", {
    src: photo || Base,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), __jsx(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("a", {
    href: link || Github,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Veja o projeto! Clique aqui."))))));
}

/***/ }),

/***/ "./componentes/Texts.js":
/*!******************************!*\
  !*** ./componentes/Texts.js ***!
  \******************************/
/*! exports provided: Firstsectiontext, Subtitles, Textperfil, Texto, Texttitles, PalavrasColoridas, PalavraAzul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Firstsectiontext", function() { return Firstsectiontext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitles", function() { return Subtitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textperfil", function() { return Textperfil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texto", function() { return Texto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texttitles", function() { return Texttitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavrasColoridas", function() { return PalavrasColoridas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalavraAzul", function() { return PalavraAzul; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\componentes\\Texts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FirstTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.white};
text-align: ${props => props.align};
text-transform: uppercase;
font-family: 'Arial Narrow';
padding-top: ${props => props.top};
margin-bottom: 0px;
@media (max-width: 768px) {
   padding-top: 5%;
   font-size: ${props => props.sizemediatablet}
}
@media (max-width: 568px) {
    padding-left: ${props => props.leftmediamobile};
    padding-top: ${props => props.topmediamobile};
    font-size: ${props => props.sizemediamobile}
}
`;
const SecondTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
font-size: 3vw;
color: ${({
  theme
}) => theme.colors.white};
text-align: left;
text-transform:uppercase;
font-family: 'Arial Narrow';
margin-bottom: 1%;
span {
    font-size: 2.5vw;
}
@media (max-width: 568px) {
    padding-left: 10%;
    padding-top: 0;
    font-size: 4.5vw;
    span{
        font-size: 3vw;
    }
}
`;
const Text1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: 1.8vw;
color: ${({
  theme
}) => theme.colors.white};
text-align: left;
text-transform: initial;
font-family: 'Helvetica';
padding-top: 4%;
@media (max-width: 568px) {
    padding-left: 10%;
    padding-top: 10%;
    font-size: 4vw;
}
`;
const Text2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.purpleblack};
line-height: 1.7;
text-align: justify;
text-transform: initial;
font-family: 'Helvetica';
padding-top: ${props => props.top};
padding-left: 10%;
@media (max-width: 768px) {
   font-size: ${props => props.sizemediatablet};
}
@media (max-width: 568px) {
    font-size: ${props => props.sizemediamobile};
    padding-top: 5%;
}
`;
const Titles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
width: 60%;
font-size: 3vw;
color: ${({
  theme
}) => theme.colors.white};
background: ${({
  theme
}) => theme.colors.backtitles};
text-align: center;
text-transform: uppercase;
font-family: 'Arial Narrow';
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
margin-top: 5%;
@media (max-width: 568px) {
    font-size: 5vw;
}
`;
const Palavraazul = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.lightblue};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-top: 12.5%;
padding-left: ${props => props.left};
margin:0;
line-height: 0.8;
@media (max-width: 768px) {
   padding-top: 20%;
}
@media (max-width: 568px) {
    padding-top: 5%;
    padding-left: 30%;
}
`;
const Palavraroxa = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.purple};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 50%;
}
`;
const Palavraamarela = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.yellow};
text-align: ${props => props.align};
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
padding-top: ${props => props.top};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 30%;
}
`;
const Palavrarosa = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
font-size: ${props => props.size};
color: ${({
  theme
}) => theme.colors.pink};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 50%;
}
`;
function Firstsectiontext(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(FirstTitle, {
    sizemediatablet: props.tablettextsize,
    sizemediamobile: props.mobilesize,
    topmediamobile: "0%",
    leftmediamobile: "10%",
    align: "left",
    top: "10%",
    size: "4.5vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, props.firsttitle), __jsx(SecondTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "by:"), props.secondtitle));
}
function Subtitles(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(FirstTitle, {
    sizemediatablet: props.tablettextsize,
    sizemediamobile: props.mobilesize,
    topmediamobile: "5%",
    leftmediamobile: "0%",
    align: "center",
    top: "3%",
    size: props.fontsize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, props.firsttitle, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), props.secondtitle));
}
function Textperfil(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(Text1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, props.textp1, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), props.textp2));
}
function Texto(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(Text2, {
    top: props.paddingTop,
    size: props.fontsize,
    sizemediatablet: props.tablettextsize,
    sizemediamobile: props.mobilesize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, props.textp1, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), props.textp2, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), props.textp3, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), props.textp4, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), props.textp5));
}
function Texttitles(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(Titles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, props.title));
}
function PalavrasColoridas(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(Palavraazul, {
    size: "5vw",
    left: "10%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, props.word1), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx(Palavraroxa, {
    size: "5.3vw",
    left: "25%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, props.word2), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx(Palavraamarela, {
    size: "5.8vw",
    left: "10%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, props.word3), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), __jsx(Palavrarosa, {
    size: "6.2vw",
    left: "25%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, props.word4));
}
function PalavraAzul(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(Palavraamarela, {
    size: "2.5vw",
    align: "right",
    top: "5%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, props.word1), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }));
}

/***/ }),

/***/ "./node_modules/antd/lib/col/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/col/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/grid/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/grid/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/icon/style/index.css");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/icon/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/row/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/css */ "./node_modules/antd/lib/grid/style/css.js");
//# sourceMappingURL=css.js.map


/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componentes_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/Page */ "./componentes/Page.js");
var _jsxFileName = "C:\\Web Design\\jenifferazevedo.github.io\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_componentes_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Web Design\jenifferazevedo.github.io\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map