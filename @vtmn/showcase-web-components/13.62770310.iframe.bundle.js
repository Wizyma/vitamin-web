(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"vtmn_text_input",(function(){return VtmnTextInput}));__webpack_require__(64),__webpack_require__(59),__webpack_require__(367);var _index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(267);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var VtmnTextInput=function(){function VtmnTextInput(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,VtmnTextInput),Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.e)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(VtmnTextInput,[{key:"render",value:function render(){return[Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("label",{class:"vtmn-text-input_label",htmlFor:this.identifier},this.labelText),this.multiline?[Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("textarea",{class:["vtmn-text-input",this.error&&"vtmn-text-input--error",this.valid&&"vtmn-text-input--valid"].filter(Boolean).join(" "),id:this.identifier,placeholder:this.placeholder,disabled:this.disabled}),Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("p",{class:["vtmn-text-input_helper-text",this.error&&"vtmn-text-input_helper-text--error"].filter(Boolean).join(" ")},this.helperText)]:[Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("div",{class:"vtmn-text-input_container"},Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("input",{type:"text",class:["vtmn-text-input",this.valid&&"vtmn-text-input--valid",this.error&&"vtmn-text-input--error"].filter(Boolean).join(" "),id:this.identifier,placeholder:this.placeholder,disabled:this.disabled}),this.icon?Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("span",{class:"vtmx-"+this.icon}):null),Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_3__.c)("p",{class:["vtmn-text-input_helper-text",this.error&&"vtmn-text-input_helper-text--error"].filter(Boolean).join(" ")},this.helperText)]]}}]),VtmnTextInput}();VtmnTextInput.style=".vtmn-text-input_label,.vtmn-text-input,.vtmn-text-input_helper-text{font-family:var(--vtmn-typo_font-family)}.vtmn-text-input,.vtmn-text-input::before,.vtmn-text-input::after{box-sizing:border-box}.vtmn-text-input{box-shadow:inset 0 0 0 0.0625rem var(--vtmn-semantic-color_border-inactive);border:none;background-color:var(--vtmn-semantic-color_background-primary);border-radius:0.25rem;display:block;font-weight:var(--vtmn-typo_font-weight--regular);font-size:1rem;line-height:1;margin-bottom:0.25rem;margin-top:0.25rem;padding:0.75rem 2.25rem 0.75rem 0.75rem;color:var(--vtmn-semantic-color_content-primary);min-height:3rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea.vtmn-text-input{min-width:3rem;resize:both}.vtmn-text-input:not(:disabled):not(:focus):not(textarea):hover{box-shadow:inset 0 0 0 0.0625rem var(--vtmn-semantic-color_border-active)}.vtmn-text-input:not(:disabled):focus-visible{outline:none;box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-active)}.vtmn-text-input:not(:disabled):focus{outline:none;box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-active)}.vtmn-text-input::-moz-placeholder{color:var(--vtmn-semantic-color_content-secondary)}.vtmn-text-input:-ms-input-placeholder{color:var(--vtmn-semantic-color_content-secondary)}.vtmn-text-input::placeholder{color:var(--vtmn-semantic-color_content-secondary)}.vtmn-text-input_label{color:var(--vtmn-semantic-color_content-primary);font-size:1rem;line-height:1;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.vtmn-text-input_container{position:relative;display:inline-block}.vtmn-text-input+span[class^='vtmx-'],.vtmn-text-input+svg{position:absolute;font-size:var(--vtmn-typo_title-5-font-size);right:0.6875rem;bottom:1.1875rem;color:var(--vtmn-semantic-color_content-primary)}.vtmn-text-input:disabled,.vtmn-text-input:disabled+span[class^='vtmx-'],.vtmn-text-input:disabled+svg,.vtmn-text-input:disabled+.vtmn-text-input_helper-text,.vtmn-text-input:disabled+.vtmn-text-input_counter{opacity:var(--vtmn-opacity_disabled-state);cursor:not-allowed}.vtmn-text-input_helper-text{color:var(--vtmn-semantic-color_content-secondary);font-size:0.875rem;line-height:1;margin-top:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.vtmn-text-input_helper-text--error{color:var(--vtmn-semantic-color_content-primary);margin-top:-0.125rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.vtmn-text-input_helper-text--error::before{position:relative;content:'';-webkit-mask:url(\"data:image/svg+xml;charset=utf-8, <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.333 8a6.667 6.667 0 1 0 13.333 0A6.667 6.667 0 0 0 1.333 8zm12 0A5.333 5.333 0 1 1 2.667 8a5.333 5.333 0 0 1 10.666 0zm-4.666 2v1.333H7.333V10h1.334zm0-1.333v-4H7.333v4h1.334z'/></svg>\");mask:url(\"data:image/svg+xml;charset=utf-8, <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.333 8a6.667 6.667 0 1 0 13.333 0A6.667 6.667 0 0 0 1.333 8zm12 0A5.333 5.333 0 1 1 2.667 8a5.333 5.333 0 0 1 10.666 0zm-4.666 2v1.333H7.333V10h1.334zm0-1.333v-4H7.333v4h1.334z'/></svg>\");-webkit-mask-size:cover;mask-size:cover;display:inline-block;background-color:var(--vtmn-semantic-color_content-negative);height:0.875rem;width:0.875rem;top:0.125rem;margin-right:0.3125rem}.vtmn-text-input--valid{box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-positive)}.vtmn-text-input--valid+span[class^='vtmx-'],.vtmn-text-input--valid+svg{color:var(--vtmn-semantic-color_content-positive);fill:var(--vtmn-semantic-color_content-positive)}.vtmn-text-input--error{box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-negative)}.vtmn-text-input--error+span[class^='vtmx-'],.vtmn-text-input--error+svg{color:var(--vtmn-semantic-color_content-primary);fill:var(--vtmn-semantic-color_content-primary)}textarea.vtmn-text-input+.vtmn-text-input_counter{color:var(--vtmn-semantic-color_content-secondary);font-size:0.875rem;line-height:1}.vtmn-text-input:not(:disabled):focus-visible+.vtmn-text-input_counter,.vtmn-text-input--error:not(:disabled)+.vtmn-text-input_counter{color:var(--vtmn-semantic-color_content-primary)}"}}]);