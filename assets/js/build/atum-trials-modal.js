!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=104)}({0:function(t,e){t.exports=jQuery},1:function(t,e){t.exports=Swal},104:function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),i=n(34);t((function(t){var n=new e.a("atumTrialAddons");new i.a(n)}))}.call(this,n(0))},34:function(t,e,n){"use strict";(function(t){var i=n(1),o=n.n(i),r=function(){function e(t,e){this.settings=t,this.successCallback=e,this.bindEvents()}return e.prototype.bindEvents=function(){var e=this;t("body").on("click",".extend-atum-trial",(function(n){n.preventDefault(),n.stopImmediatePropagation();var i=t(n.currentTarget);e.extendTrialConfirmation(i.closest(".atum-addon").data("addon"),i.data("key"))}))},e.prototype.extendTrialConfirmation=function(t,e){var n=this;o.a.fire({title:this.settings.get("trialExtension"),text:this.settings.get("trialWillExtend"),icon:"info",showCancelButton:!0,confirmButtonText:this.settings.get("extend"),cancelButtonText:this.settings.get("cancel"),showCloseButton:!0,allowEnterKey:!1,reverseButtons:!0,showLoaderOnConfirm:!0,preConfirm:function(){return n.extendTrial(t,e,!0,(function(t){t.success?o.a.fire({title:n.settings.get("success"),html:t.data,icon:"success",confirmButtonText:n.settings.get("ok")}).then((function(t){n.successCallback&&t.isConfirmed&&n.successCallback()})):o.a.showValidationMessage(t.data)}))}})},e.prototype.extendTrial=function(e,n,i,o){var r=this;return void 0===i&&(i=!1),void 0===o&&(o=null),new Promise((function(i){t.ajax({url:window.ajaxurl,method:"POST",dataType:"json",data:{action:"atum_extend_trial",security:r.settings.get("nonce"),addon:e,key:n},success:function(t){o&&o(t),i()}})}))},e}();e.a=r}).call(this,n(0))},4:function(t,e,n){"use strict";var i=function(){function t(t,e){void 0===e&&(e={}),this.varName=t,this.defaults=e,this.settings={};var n=void 0!==window[t]?window[t]:{};Object.assign(this.settings,e,n)}return t.prototype.get=function(t){if(void 0!==this.settings[t])return this.settings[t]},t.prototype.getAll=function(){return this.settings},t.prototype.delete=function(t){this.settings.hasOwnProperty(t)&&delete this.settings[t]},t}();e.a=i}});