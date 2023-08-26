"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames3=_interopRequireDefault(require("../helpers/classNames")),_eventsMixin=_interopRequireDefault(require("../helpers/eventsMixin")),_styleToCssString=_interopRequireDefault(require("../helpers/styleToCssString"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var defaultEvents={onChange:function(){},onFocus:function(){},onBlur:function(){},onConfirm:function(){},onClear:function(){},onError:function(){}};(0,_baseComponent.default)({behaviors:[(0,_eventsMixin.default)({defaultEvents:defaultEvents})],relations:{"../field/index":{type:"ancestor"}},properties:{prefixCls:{type:String,value:"wux-input"},label:{type:String,value:""},extra:{type:String,value:""},defaultValue:{type:String,value:""},value:{type:String,value:"",observer:function(e){this.data.controlled&&this.updated(e)}},controlled:{type:Boolean,value:!1},type:{type:String,value:"text"},password:{type:Boolean,value:!1},placeholder:{type:String,value:""},placeholderStyle:{type:[String,Object],value:"",observer:function(e){this.setData({extStyle:(0,_styleToCssString.default)(e)})}},placeholderClass:{type:String,value:"input-placeholder"},disabled:{type:Boolean,value:!1},maxlength:{type:Number,value:140},cursorSpacing:{type:Number,value:11},focus:{type:Boolean,value:!1},confirmType:{type:String,value:"done"},confirmHold:{type:Boolean,value:!1},cursor:{type:Number,value:-1},selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},clear:{type:Boolean,value:!1},error:{type:Boolean,value:!1},labelWrap:{type:Boolean,value:!1},requiredMark:{type:Boolean,value:!1}},data:{inputValue:"",inputFocus:!1,extStyle:""},computed:{classes:["prefixCls, disabled, inputFocus, error, labelWrap, requiredMark",function(e,t,a,r,n,i){var o,l;return{wrap:(0,_classNames3.default)(e,(_defineProperty(o={},"".concat(e,"--focus"),a),_defineProperty(o,"".concat(e,"--disabled"),t),_defineProperty(o,"".concat(e,"--error"),r),o)),label:(0,_classNames3.default)("".concat(e,"__label"),(_defineProperty(l={},"".concat(e,"__label--wrap"),n),_defineProperty(l,"".concat(e,"__label--required"),i),l)),control:"".concat(e,"__control"),item:"".concat(e,"__item"),clear:"".concat(e,"__clear"),error:"".concat(e,"__error"),extra:"".concat(e,"__extra")}}]},methods:{updated:function(e){this.hasFieldDecorator||this.data.inputValue!==e&&this.setData({inputValue:e})},onChange:function(e){var t=e.detail.value;this.data.controlled||this.updated(t),this.triggerEvent("change",e.detail)},onFocus:function(e){this.clearTimer(),this.setData({inputFocus:!0}),this.triggerEvent("focus",e.detail)},onBlur:function(e){this.setTimer(),this.triggerEvent("blur",e.detail)},onConfirm:function(e){this.triggerEvent("confirm",e.detail)},onClear:function(e){var t={value:""};this.data.controlled||this.updated(t.value),this.triggerEvent("change",t),this.triggerEvent("clear",t)},onError:function(){var e=this.data.inputValue;this.triggerEvent("error",{value:e})},setTimer:function(){var e=this;this.clearTimer(),this.timeout=setTimeout(function(){e.setData({inputFocus:!1})},200)},clearTimer:function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},attached:function(){var e=this.data,t=e.defaultValue,a=e.value,r=e.controlled?a:t;this.updated(r)}});