!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=91)}({0:function(t,n){t.exports=jQuery},1:function(t,n){t.exports=Swal},5:function(t,n,e){"use strict";var o=function(){function t(t,n){void 0===n&&(n={}),this.varName=t,this.defaults=n,this.settings={};var e=void 0!==window[t]?window[t]:{};Object.assign(this.settings,n,e)}return t.prototype.get=function(t){if(void 0!==this.settings[t])return this.settings[t]},t.prototype.getAll=function(){return this.settings},t.prototype.delete=function(t){this.settings.hasOwnProperty(t)&&delete this.settings[t]},t}();n.a=o},51:function(t,n,e){"use strict";(function(t){var o=e(1),r=e.n(o),i=function(){return(i=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},s=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}u((o=o.apply(t,n||[])).next())}))},a=function(t,n){var e,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=function(){function n(t){this.settings=t,this.defaultSwalOptions={icon:"info",confirmButtonColor:"#00B8DB",focusConfirm:!1,showCloseButton:!0},this.swalConfigs={},this.swalConfigs=this.settings.get("swal_configs"),window.hasOwnProperty("atum")||(window.atum={}),window.atum.AdminModal=this,this.showModal()}return n.prototype.showModal=function(){return s(this,void 0,void 0,(function(){var t,n,e,o,s,u,l,c,f,h,p,d,w=this;return a(this,(function(y){switch(y.label){case 0:if(t=i({},this.defaultSwalOptions),(n=Object.keys(this.swalConfigs).length)>1){for(e=[],o=1;o<=n;o++)e.push(o.toString());t.progressSteps=e,t.showClass={backdrop:"swal2-noanimation"},t.hideClass={backdrop:"swal2-noanimation"}}for(h in s=r.a.mixin(this.defaultSwalOptions),u=1,l=function(t){return a(this,(function(n){switch(n.label){case 0:return[4,s.fire(i({currentProgressStep:u.toString()},c.swalConfigs[t])).then((function(){return w.hideModal(t)}))];case 1:return n.sent(),u++,[2]}}))},c=this,f=[],this.swalConfigs)f.push(h);p=0,y.label=1;case 1:return p<f.length?(d=f[p],[5,l(d)]):[3,4];case 2:y.sent(),y.label=3;case 3:return p++,[3,1];case 4:return[2]}}))}))},n.prototype.hideModal=function(n){t.ajax({url:window.ajaxurl,dataType:"json",method:"post",data:{action:"atum_hide_atum_admin_modal",security:this.settings.get("nonce"),key:n}})},n}();n.a=u}).call(this,e(0))},91:function(t,n,e){"use strict";e.r(n),function(t){var n=e(5),o=e(51);t((function(t){var e=new n.a("atumAdminModalVars");new o.a(e)}))}.call(this,e(0))}});