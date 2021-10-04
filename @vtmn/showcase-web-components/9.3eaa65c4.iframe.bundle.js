(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"vtmn_button",(function(){return VtmnButton}));__webpack_require__(367);var _index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(267);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var VtmnButton=function(){function VtmnButton(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,VtmnButton),Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,hostRef),this.variant="primary",this.size="medium"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(VtmnButton,[{key:"render",value:function render(){return Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.c)("button",{class:"vtmn-btn vtmn-btn_variant--"+this.variant+" vtmn-btn_size--"+this.size+"\n        "+(!this.iconAlone&&this.iconLeft?"vtmn-btn--icon-left":"")+" "+(!this.iconAlone&&this.iconRight?"vtmn-btn--icon-right":"")+" "+(this.iconAlone?"vtmn-btn--icon-alone":""),type:"button"},this.iconLeft&&Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.c)("span",{class:"vtmx-"+this.iconLeft}),this.iconAlone?Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.c)("span",{class:"vtmx-"+this.iconAlone}):Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.c)("slot",null),this.iconRight&&Object(_index_decf7f6a_js__WEBPACK_IMPORTED_MODULE_1__.c)("span",{class:"vtmx-"+this.iconRight}))}}]),VtmnButton}();VtmnButton.style=".vtmn-btn{box-shadow:inset 0 0 0 0.125rem transparent;font-size:var(--vtmn-typo_text-2-font-size);min-height:3rem;max-width:100%;padding:0.875rem 1.5rem;line-height:1.25;letter-spacing:0.03125rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:var(--vtmn-semantic-color_background-brand-primary);color:var(--vtmn-semantic-color_content-primary-reversed);fill:var(--vtmn-semantic-color_content-primary-reversed);border:none;border-radius:0.25rem;display:inline-block;font-family:var(--vtmn-typo_font-family);font-weight:var(--vtmn-typo_font-weight--bold);position:relative;text-align:center}.vtmn-btn:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-brand);cursor:pointer}.vtmn-btn:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-brand)}.vtmn-btn:disabled{cursor:not-allowed;opacity:var(--vtmn-opacity_disabled-state)}.vtmn-btn:not(:disabled):focus-visible{outline:none;box-shadow:0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn:not(:disabled){outline:none}.vtmn-btn svg{display:inline-block;vertical-align:text-top}.vtmn-btn span[class^='vtmx-']{display:inline-block}.vtmn-btn_variant--primary{box-shadow:inset 0 0 0 0.125rem transparent;background-color:var(--vtmn-semantic-color_background-brand-primary);color:var(--vtmn-semantic-color_content-primary-reversed);fill:var(--vtmn-semantic-color_content-primary-reversed)}.vtmn-btn_variant--primary:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-brand)}.vtmn-btn_variant--primary:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-brand)}.vtmn-btn_variant--primary:not(:disabled):focus-visible{outline:none;box-shadow:0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn_variant--primary-reversed{box-shadow:inset 0 0 0 0.125rem transparent;background-color:var(\n    --vtmn-semantic-color_background-brand-primary-reversed\n  );color:var(--vtmn-semantic-color_content-primary);fill:var(--vtmn-semantic-color_content-primary)}.vtmn-btn_variant--primary-reversed:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-brand-reversed-transparent);box-shadow:inset 0 0 0 0.125rem\n    var(--vtmn-semantic-color_border-primary-reversed)}.vtmn-btn_variant--primary-reversed:not(:disabled):active{background-color:var(\n    --vtmn-semantic-color_active-brand-reversed-transparent\n  );box-shadow:inset 0 0 0 0.125rem\n    var(--vtmn-semantic-color_border-primary-reversed)}.vtmn-btn_variant--primary-reversed:not(:disabled):focus-visible{outline:none;box-shadow:inset 0 0 0 0.125rem\n      var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.25rem var(--vtmn-semantic-color_border-primary),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary-reversed)}.vtmn-btn_variant--secondary{background-color:var(--vtmn-semantic-color_background-primary);box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-secondary);color:var(--vtmn-semantic-color_content-action);fill:var(--vtmn-semantic-color_content-action)}.vtmn-btn_variant--secondary:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-primary)}.vtmn-btn_variant--secondary:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-primary)}.vtmn-btn_variant--secondary:not(:disabled):focus-visible{outline:none;box-shadow:inset 0 0 0 0.125rem var(--vtmn-semantic-color_border-secondary),\n    0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn_variant--tertiary{background-color:var(--vtmn-semantic-color_background-brand-secondary);color:var(--vtmn-semantic-color_content-action);fill:var(--vtmn-semantic-color_content-action)}.vtmn-btn_variant--tertiary:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-tertiary)}.vtmn-btn_variant--tertiary:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-tertiary)}.vtmn-btn_variant--tertiary:not(:disabled):focus-visible{outline:none;box-shadow:0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn_variant--conversion{box-shadow:inset 0 0 0 0.125rem transparent;background-color:var(--vtmn-semantic-color_background-accent);color:var(--vtmn-semantic-color_content-accent);fill:var(--vtmn-semantic-color_content-accent)}.vtmn-btn_variant--conversion:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-accent)}.vtmn-btn_variant--conversion:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-accent)}.vtmn-btn_variant--conversion:not(:disabled):focus-visible{outline:none;box-shadow:inset 0 0 0 0.125rem transparent,\n    0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn_variant--ghost{background-color:transparent;box-shadow:inset 0 0 0 0.125rem transparent;color:var(--vtmn-semantic-color_content-action);fill:var(--vtmn-semantic-color_content-action)}.vtmn-btn_variant--ghost:not(:disabled):hover{background-color:var(--vtmn-semantic-color_hover-primary)}.vtmn-btn_variant--ghost:not(:disabled):active{background-color:var(--vtmn-semantic-color_active-primary)}.vtmn-btn_variant--ghost:not(:disabled):focus-visible{outline:none;box-shadow:inset 0 0 0 0.125rem transparent,\n    0 0 0 0.25rem var(--vtmn-semantic-color_border-primary-reversed),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary)}.vtmn-btn_variant--ghost-reversed{background-color:transparent;color:var(--vtmn-semantic-color_content-action-reversed);fill:var(--vtmn-semantic-color_content-action-reversed)}.vtmn-btn_variant--ghost-reversed:not(:disabled):hover{background-color:var(\n    --vtmn-semantic-color_hover-primary-reversed-transparent\n  )}.vtmn-btn_variant--ghost-reversed:not(:disabled):active{background-color:var(\n    --vtmn-semantic-color_active-primary-reversed-transparent\n  )}.vtmn-btn_variant--ghost-reversed:not(:disabled):focus-visible{outline:none;box-shadow:0 0 0 0.25rem var(--vtmn-semantic-color_border-primary),\n    0 0 0 0.375rem var(--vtmn-semantic-color_border-primary-reversed)}.vtmn-btn_size--small{font-size:0.875rem;padding:0.5rem 1rem;line-height:calc(16 / 14);min-height:2rem}.vtmn-btn_size--medium{font-size:1rem;padding:0.875rem 1.5rem;line-height:1.25;min-height:3rem}.vtmn-btn_size--large{font-size:1.25rem;padding:1.25rem 2.5rem;line-height:1.2;min-height:4rem}.vtmn-btn_size--stretched{width:100%}.vtmn-btn--icon-alone{width:3rem;height:3rem;padding:0.875rem}.vtmn-btn--icon-alone span[class^='vtmx-']{font-size:var(--vtmn-typo_text-2-font-size);transform:translateY(0.125rem)}.vtmn-btn--icon-alone svg{width:1rem;display:block}.vtmn-btn_size--small svg{width:0.875rem}.vtmn-btn_size--medium svg{width:1rem}.vtmn-btn_size--large svg{width:1.25rem}.vtmn-btn_size--small.vtmn-btn--icon-alone{width:2rem;height:2rem;padding:0.5rem}.vtmn-btn_size--small.vtmn-btn--icon-alone span[class^='vtmx-']{font-size:var(--vtmn-typo_text-3-font-size);transform:translateY(0.125rem)}.vtmn-btn_size--medium.vtmn-btn--icon-alone{width:3rem;height:3rem;padding:0.875rem}.vtmn-btn_size--medium.vtmn-btn--icon-alone span[class^='vtmx-']{font-size:var(--vtmn-typo_text-2-font-size)}.vtmn-btn_size--large.vtmn-btn--icon-alone{width:4rem;height:4rem;padding:1.25rem}.vtmn-btn_size--large.vtmn-btn--icon-alone span[class^='vtmx-']{font-size:var(--vtmn-typo_title-5-font-size)}.vtmn-btn--icon-left span[class^='vtmx-']{padding-right:0.5rem;transform:translateY(0.125rem)}.vtmn-btn--icon-right span[class^='vtmx-']{padding-left:0.5rem;transform:translateY(0.125rem)}.vtmn-btn_size--small.vtmn-btn--icon-left span[class^='vtmx-']{padding-right:0.375rem}.vtmn-btn_size--small.vtmn-btn--icon-right span[class^='vtmx-']{padding-left:0.375rem}.vtmn-btn_size--small.vtmn-btn--icon-left svg{margin-right:0.375rem}.vtmn-btn_size--small.vtmn-btn--icon-right svg{margin-left:0.375rem}.vtmn-btn_size--medium.vtmn-btn--icon-left span[class^='vtmx-']{padding-right:0.5rem}.vtmn-btn_size--medium.vtmn-btn--icon-right span[class^='vtmx-']{padding-left:0.5rem}.vtmn-btn_size--medium.vtmn-btn--icon-left svg{margin-right:0.5rem}.vtmn-btn_size--medium.vtmn-btn--icon-right svg{margin-left:0.5rem}.vtmn-btn_size--large.vtmn-btn--icon-left span[class^='vtmx-']{padding-right:0.75rem}.vtmn-btn_size--large.vtmn-btn--icon-right span[class^='vtmx-']{padding-left:0.75rem}.vtmn-btn_size--large.vtmn-btn--icon-left svg{margin-right:0.75rem}.vtmn-btn_size--large.vtmn-btn--icon-right svg{margin-left:0.75rem}.vtmn-btn--multiline{white-space:normal}.vtmn-btn_variant--secondary-reversed{background-color:transparent;box-shadow:inset 0 0 0 0.125rem var(--vtmn-base-color_white);color:var(--vtmn-base-color_white);fill:var(--vtmn-base-color_white)}.vtmn-btn_variant--secondary-reversed:not(:disabled):hover{background-color:hsla(0, 0%, 100%, 0.2)}.vtmn-btn_variant--secondary-reversed:not(:disabled):active{background-color:hsla(0, 0%, 100%, 0.4)}"}}]);