"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@chakra-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ChakraUIRenderer() {
  function getCoreProps(props) {
    return props["data-sourcepos"] ? {
      "data-sourcepos": props["data-sourcepos"]
    } : {};
  }

  return {
    paragraph: function paragraph(props) {
      var children = props.children;
      return _react.default.createElement(_core.Text, {
        mb: 2
      }, children);
    },
    emphasis: function emphasis(props) {
      var children = props.children;
      return _react.default.createElement(_core.Text, {
        as: "em"
      }, children);
    },
    blockquote: function blockquote(props) {
      var children = props.children;
      return _react.default.createElement(_core.Code, {
        p: 2
      }, children);
    },
    code: function code(props) {
      var language = props.language,
          value = props.value;
      var className = language && "language-".concat(language);
      return _react.default.createElement("pre", getCoreProps(props), _react.default.createElement(_core.Code, {
        p: 2,
        className: className || null
      }, value));
    },
    delete: function _delete(props) {
      var children = props.children;
      return _react.default.createElement(_core.Text, {
        as: "del"
      }, children);
    },
    thematicBreak: _core.Divider,
    link: _core.Link,
    img: _core.Image,
    linkReference: _core.Link,
    imageReference: _core.Image,
    text: function text(props) {
      var children = props.children;
      return _react.default.createElement(_core.Text, {
        as: "span"
      }, children);
    },
    list: function list(props) {
      var start = props.start,
          ordered = props.ordered,
          children = props.children,
          depth = props.depth;
      var attrs = getCoreProps(props);

      if (start !== null && start !== 1 && start !== undefined) {
        attrs.start = start.toString();
      }

      var styleType = "disc";
      if (ordered) styleType = "decimal";
      if (depth === 1) styleType = "circle";
      return _react.default.createElement(_core.List, _extends({
        spacing: 24,
        as: ordered ? "ol" : "ul",
        styleType: styleType,
        pl: 4
      }, attrs), children);
    },
    listItem: function listItem(props) {
      var children = props.children,
          checked = props.checked;
      var checkbox = null;

      if (checked !== null && checked !== undefined) {
        checkbox = _react.default.createElement(_core.Checkbox, {
          isChecked: checked,
          isReadOnly: true
        }, children);
      }

      return _react.default.createElement(_core.ListItem, _extends({}, getCoreProps(props), {
        listStyleType: checked !== null ? "none" : "inherit"
      }), checkbox || children);
    },
    definition: function definition() {
      return null;
    },
    heading: function heading(props) {
      var level = props.level,
          children = props.children;
      var sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
      return _react.default.createElement(_core.Heading, _extends({
        my: 4,
        as: "h".concat(level),
        size: sizes["".concat(level - 1)]
      }, getCoreProps(props)), children);
    },
    inlineCode: function inlineCode(props) {
      var children = props.children;
      return _react.default.createElement(_core.Code, getCoreProps(props), children);
    }
  };
}

var _default = ChakraUIRenderer;
exports.default = _default;