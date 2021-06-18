/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputField\": function() { return /* binding */ InputField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/form-control */ \"@chakra-ui/form-control\");\n/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/rrahul/Projects/LIREDDIT/web/src/components/InputField.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n// '' => false\n// 'error message stuff' => true\nconst InputField = (_ref) => {\n  let {\n    label,\n    size: _\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"label\", \"size\"]);\n\n  const [field, {\n    error\n  }] = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useField)(props);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n    isInvalid: !!error,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n      htmlFor: field.name,\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, _objectSpread(_objectSpread(_objectSpread({}, field), props), {}, {\n      id: field.name,\n      placeholder: props.placeholder\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 16\n    }, undefined) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9jb21wb25lbnRzL0lucHV0RmllbGQudHN4P2M5MmQiXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsImxhYmVsIiwic2l6ZSIsIl8iLCJwcm9wcyIsImZpZWxkIiwiZXJyb3IiLCJ1c2VGaWVsZCIsIm5hbWUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRU8sTUFBTUEsVUFBcUMsR0FBRyxVQUkvQztBQUFBLE1BSmdEO0FBQ3BEQyxTQURvRDtBQUVwREMsUUFBSSxFQUFFQztBQUY4QyxHQUloRDtBQUFBLE1BRERDLEtBQ0M7O0FBQ0osUUFBTSxDQUFDQyxLQUFELEVBQVE7QUFBRUM7QUFBRixHQUFSLElBQXFCQyxnREFBUSxDQUFDSCxLQUFELENBQW5DO0FBRUEsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBYSxhQUFTLEVBQUUsQ0FBQyxDQUFDRSxLQUExQjtBQUFBLDRCQUNFLDhEQUFDLDhEQUFEO0FBQVcsYUFBTyxFQUFFRCxLQUFLLENBQUNHLElBQTFCO0FBQUEsZ0JBQWlDUDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbURBQUQsZ0RBQ01JLEtBRE4sR0FFTUQsS0FGTjtBQUdFLFFBQUUsRUFBRUMsS0FBSyxDQUFDRyxJQUhaO0FBSUUsaUJBQVcsRUFBRUosS0FBSyxDQUFDSztBQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBUUdILEtBQUssZ0JBQUcsOERBQUMscUVBQUQ7QUFBQSxnQkFBbUJBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FBa0QsSUFSMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQW5CTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0lucHV0RmllbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIEZvcm1MYWJlbCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG4vLyAnJyA9PiBmYWxzZVxuLy8gJ2Vycm9yIG1lc3NhZ2Ugc3R1ZmYnID0+IHRydWVcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgc2l6ZTogXyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17ISFlcnJvcn0+XG4gICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9PntsYWJlbH08L0Zvcm1MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgIC8+XG4gICAgICB7ZXJyb3IgPyA8Rm9ybUVycm9yTWVzc2FnZT57ZXJyb3J9PC9Gb3JtRXJyb3JNZXNzYWdlPiA6IG51bGx9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/InputField.tsx\n");

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ \"@chakra-ui/layout\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/rrahul/Projects/LIREDDIT/web/src/components/Wrapper.tsx\";\n\n\nconst Wrapper = ({\n  children,\n  variant = 'regular'\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    mt: 8,\n    mx: \"auto\",\n    maxW: variant === 'regular' ? \"800px\" : \"400px\",\n    w: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9jb21wb25lbnRzL1dyYXBwZXIudHN4P2I4N2IiXSwibmFtZXMiOlsiV3JhcHBlciIsImNoaWxkcmVuIiwidmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1PLE1BQU1BLE9BQStCLEdBQUcsQ0FBQztBQUFDQyxVQUFEO0FBQVdDLFNBQU8sR0FBQztBQUFuQixDQUFELEtBQW1DO0FBQzlFLHNCQUNJLDhEQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUMsTUFBZjtBQUFzQixRQUFJLEVBQUVBLE9BQU8sS0FBSyxTQUFaLEdBQXdCLE9BQXhCLEdBQWtDLE9BQTlEO0FBQXVFLEtBQUMsRUFBQyxNQUF6RTtBQUFBLGNBQWlGRDtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQUpNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgICB2YXJpYW50PzogJ3NtYWxsJyB8ICdyZWd1bGFyJ1xufVxuXG5leHBvcnQgY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8V3JhcHBlclByb3BzPiA9ICh7Y2hpbGRyZW4sIHZhcmlhbnQ9J3JlZ3VsYXInfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggbXQ9ezh9IG14PVwiYXV0b1wiIG1heFc9e3ZhcmlhbnQgPT09ICdyZWd1bGFyJyA/IFwiODAwcHhcIiA6IFwiNDAwcHhcIn0gdz1cIjEwMCVcIj57Y2hpbGRyZW59PC9Cb3g+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Wrapper.tsx\n");

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterDocument\": function() { return /* binding */ RegisterDocument; },\n/* harmony export */   \"useRegisterMutation\": function() { return /* binding */ useRegisterMutation; }\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst RegisterDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\n    mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n    `;\nfunction useRegisterMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__.useMutation(RegisterDocument);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbC50c3g/YTQ3YyJdLCJuYW1lcyI6WyJSZWdpc3RlckRvY3VtZW50IiwiZ3FsIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlVycWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFxSE8sTUFBTUEsZ0JBQWdCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYk87QUFlQSxTQUFTQyxtQkFBVCxHQUErQjtBQUNwQyxTQUFPQyw2Q0FBQSxDQUE4REgsZ0JBQTlELENBQVA7QUFDRDtBQUFBIiwiZmlsZSI6Ii4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBjcmVhdGVQb3N0OiBQb3N0O1xuICB1cGRhdGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIGRlbGV0ZVBvc3Q6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVQb3N0QXJncyA9IHtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlUG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgX190eXBlbmFtZT86ICdQb3N0JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczoge3VzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmR9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/generated/graphql.tsx\n");

/***/ }),

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/toErrorMap */ \"./src/utils/toErrorMap.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/Users/rrahul/Projects/LIREDDIT/web/src/pages/register.tsx\";\n\n\n\n\n\n\n\n\n\nconst Register = ({}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n  const [, register] = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_6__.useRegisterMutation)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n    variant: \"small\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n      initialValues: {\n        username: \"\",\n        password: \"\"\n      },\n      onSubmit: async (values, {\n        setErrors\n      }) => {\n        var _response$data, _response$data2;\n\n        const response = await register(values);\n\n        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.register.errors) {\n          setErrors((0,_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__.toErrorMap)(response.data.register.errors));\n        } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.register.user) {\n          router.push('/');\n        }\n      },\n      children: ({\n        isSubmitting\n      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {\n          name: \"username\",\n          placeholder: \"username\",\n          label: \"Username\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          mt: 4,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {\n            name: \"password\",\n            placeholder: \"password\",\n            label: \"Password\",\n            type: \"password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n          mt: 4,\n          type: \"submit\",\n          colorScheme: \"teal\",\n          isLoading: isSubmitting,\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3g/YTY3ZiJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvcnMiLCJ0b0Vycm9yTWFwIiwidXNlciIsInB1c2giLCJpc1N1Ym1pdHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxRQUFpQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQ2hELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNLEdBQUdDLFFBQUgsSUFBZUMsdUVBQW1CLEVBQXhDO0FBQ0Esc0JBQ0UsOERBQUMsd0RBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBQSwyQkFDRSw4REFBQywwQ0FBRDtBQUNFLG1CQUFhLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxnQkFBUSxFQUFFO0FBQTFCLE9BRGpCO0FBRUUsY0FBUSxFQUFFLE9BQU9DLE1BQVAsRUFBZTtBQUFDQztBQUFELE9BQWYsS0FBK0I7QUFBQTs7QUFDdkMsY0FBTUMsUUFBUSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ0ksTUFBRCxDQUEvQjs7QUFDQSw4QkFBR0UsUUFBUSxDQUFDQyxJQUFaLDJDQUFHLGVBQWVQLFFBQWYsQ0FBd0JRLE1BQTNCLEVBQW1DO0FBQ2pDSCxtQkFBUyxDQUFDSSw2REFBVSxDQUFDSCxRQUFRLENBQUNDLElBQVQsQ0FBY1AsUUFBZCxDQUF1QlEsTUFBeEIsQ0FBWCxDQUFUO0FBQ0QsU0FGRCxNQUVPLHVCQUFHRixRQUFRLENBQUNDLElBQVosNENBQUcsZ0JBQWVQLFFBQWYsQ0FBd0JVLElBQTNCLEVBQWlDO0FBQ3RDWixnQkFBTSxDQUFDYSxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsT0FUSDtBQUFBLGdCQVdHLENBQUM7QUFBRUM7QUFBRixPQUFELGtCQUNDLDhEQUFDLHdDQUFEO0FBQUEsZ0NBQ0UsOERBQUMsOERBQUQ7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLHFCQUFXLEVBQUMsVUFGZDtBQUdFLGVBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRSw4REFBQyxpREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQUEsaUNBQ0UsOERBQUMsOERBQUQ7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxpQkFBSyxFQUFDLFVBSFI7QUFJRSxnQkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFjRSw4REFBQyxvREFBRDtBQUNFLFlBQUUsRUFBRSxDQUROO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxxQkFBVyxFQUFDLE1BSGQ7QUFJRSxtQkFBUyxFQUFFQSxZQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5Q0QsQ0E1Q0Q7O0FBOENBLCtEQUFlZixRQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUVycm9yTWVzc2FnZSxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCIuLi91dGlscy90b0Vycm9yTWFwXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7fVxuXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHtzZXRFcnJvcnN9KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3Rlcih2YWx1ZXMpO1xuICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xuICAgICAgICAgICAgc2V0RXJyb3JzKHRvRXJyb3JNYXAocmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIudXNlcikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBtdD17NH1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ }),

/***/ "./src/utils/toErrorMap.ts":
/*!*********************************!*\
  !*** ./src/utils/toErrorMap.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toErrorMap\": function() { return /* binding */ toErrorMap; }\n/* harmony export */ });\nconst toErrorMap = errors => {\n  const errorMap = {};\n  errors.forEach(({\n    field,\n    message\n  }) => {\n    errorMap[field] = message;\n  });\n  return errorMap;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy91dGlscy90b0Vycm9yTWFwLnRzP2UwZDIiXSwibmFtZXMiOlsidG9FcnJvck1hcCIsImVycm9ycyIsImVycm9yTWFwIiwiZm9yRWFjaCIsImZpZWxkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLFVBQVUsR0FBSUMsTUFBRCxJQUEwQjtBQUNoRCxRQUFNQyxRQUErQixHQUFHLEVBQXhDO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQUM7QUFBQ0MsU0FBRDtBQUFRQztBQUFSLEdBQUQsS0FBc0I7QUFDakNILFlBQVEsQ0FBQ0UsS0FBRCxDQUFSLEdBQWtCQyxPQUFsQjtBQUNILEdBRkQ7QUFJQSxTQUFPSCxRQUFQO0FBQ0gsQ0FQTSIsImZpbGUiOiIuL3NyYy91dGlscy90b0Vycm9yTWFwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRFcnJvciB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiXG5cbmV4cG9ydCBjb25zdCB0b0Vycm9yTWFwID0gKGVycm9yczogRmllbGRFcnJvcltdKSA9PiB7XG4gICAgY29uc3QgZXJyb3JNYXA6IFJlY29yZDxzdHJpbmcsc3RyaW5nPiA9IHt9O1xuICAgIGVycm9ycy5mb3JFYWNoKCh7ZmllbGQsIG1lc3NhZ2V9KSA9PiB7XG4gICAgICAgIGVycm9yTWFwW2ZpZWxkXSA9IG1lc3NhZ2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXJyb3JNYXA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/toErrorMap.ts\n");

/***/ }),

/***/ "@chakra-ui/form-control":
/*!******************************************!*\
  !*** external "@chakra-ui/form-control" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/form-control");;

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/layout");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("urql");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/register.tsx"));
module.exports = __webpack_exports__;

})();