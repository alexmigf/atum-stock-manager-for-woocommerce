(()=>{"use strict";var t={1669:t=>{t.exports=jQuery}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const n=Swal;var i=o.n(n),r=o(1669),a=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function c(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,c)}s((n=n.apply(t,e||[])).next())}))},c=function(t,e){var o,n,i,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(r=0)),r;)try{if(o=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,n=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){r=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(6===c[0]&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(t){c=[6,t],n=0}finally{o=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};const s=function(){function t(t){this.settings=t,this.key="",(!window.hasOwnProperty("atum")||window.hasOwnProperty("atum")&&!window.atum.hasOwnProperty("AdminModal"))&&this.getPopupInfo()}return t.prototype.getPopupInfo=function(){var t=this;r.ajax({url:window.ajaxurl,dataType:"json",method:"post",data:{action:"atum_get_marketing_popup_info",security:this.settings.get("nonce")},success:function(e){return a(t,void 0,void 0,(function(){var t,o,n,a,s,l,u,p,d,f,g,h,y,w,b,v,x,_,m,k,P=this;return c(this,(function(c){switch(c.label){case 0:return!0!==e.success?[3,2]:(t=e.data,o=t.description.text_color?"color:".concat(t.description.text_color,";"):"",n=t.description.text_size?"font-size:".concat(t.description.text_size,";"):"",a=t.description.text_align?"text-align:".concat(t.description.text_align,";"):"",s=t.description.padding?"padding:".concat(t.description.padding,";"):"",l='<p style="'.concat(o+n+a+s,'">').concat(t.description.text,"</p>"),u=t.title.text_color?"color:".concat(t.title.text_color,";"):"",p=t.title.text_size?"font-size:".concat(t.title.text_size,";"):"",d=t.title.text_align?"text-align:".concat(t.title.text_align,";"):"",f=t.hoverButtons||"",g=t.images.top_left,h=t.footerNotice.bg_color?' style="background-color:'.concat(t.footerNotice.bg_color,';"'):"",y=t.footerNotice.text?'<div class="footer-notice"'.concat(h,">").concat(t.footerNotice.text,"</div>"):"",this.key=t.transient_key,w='<img class="mp-logo" src="'.concat(t.images.logo,'">'),b="",v="",x="",_="",t.images.hasOwnProperty("logo_css")&&t.images.logo_css&&(w=w.replace(">",' style="'.concat(t.images.logo_css,'">'))),t.version&&Object.keys(t.version).length&&t.version.text&&(b=t.version.text_color?"color:".concat(t.version.text_color,";"):"",v=t.version.background?"background:".concat(t.version.background,";"):"",x='<span class="version" style="'.concat(v+b,'">').concat(t.version.text,"</span>")),m=t.title.text?'<h1 style="'.concat(u+p+d,'"><span>').concat(t.title.text+x,"</span></h1>"):"",k=t.additionalClass?" ".concat(t.additionalClass):"",t.buttons&&t.buttons.length&&(f&&r(f).appendTo("body"),t.buttons.forEach((function(t){_+='<button data-url="'.concat(t.url,'" class="').concat(t.class,' popup-button" style="').concat(t.css,'">').concat(t.text,"</button>")}))),r("body").on("click",".swal2-container button[data-url]",(function(t){t.preventDefault(),window.open(r(t.currentTarget).data("url"),"_blank"),i().close(),P.hideMarketingPopup()})),[4,i().fire({width:520,padding:null,customClass:{popup:"marketing-popup".concat(k)},background:t.background,showCloseButton:!0,showConfirmButton:!1,html:w+m+l+_+y,imageUrl:g,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1}).then((function(){P.hideMarketingPopup()}))]);case 1:c.sent(),c.label=2;case 2:return[2]}}))}))}})},t.prototype.hideMarketingPopup=function(){r.ajax({url:window.ajaxurl,dataType:"json",method:"post",data:{action:"atum_hide_marketing_popup",security:this.settings.get("nonce"),transientKey:this.key}})},t}();const l=function(){function t(t,e){void 0===e&&(e={}),this.varName=t,this.defaults=e,this.settings={};var o=void 0!==window[t]?window[t]:{};Object.assign(this.settings,e,o)}return t.prototype.get=function(t){if(void 0!==this.settings[t])return this.settings[t]},t.prototype.getAll=function(){return this.settings},t.prototype.delete=function(t){this.settings.hasOwnProperty(t)&&delete this.settings[t]},t}();o(1669)((function(t){var e=new l("atumMarketingPopupVars");new s(e)}))})();