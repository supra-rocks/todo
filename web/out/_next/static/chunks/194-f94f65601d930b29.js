(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{2846:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Experimental_CssVarsProvider:()=>ez,StyledEngineProvider:()=>eo.A,THEME_ID:()=>n.A,ThemeProvider:()=>er,adaptV4Theme:()=>u,alpha:()=>v,createMuiTheme:()=>j.D,createStyles:()=>I,createTheme:()=>j.A,css:()=>w.AH,darken:()=>C,decomposeColor:()=>p,duration:()=>_.p0,easing:()=>_.cz,emphasize:()=>x,experimentalStyled:()=>z.Ay,experimental_extendTheme:()=>eP,experimental_sx:()=>eU,getContrastRatio:()=>A,getInitColorSchemeScript:()=>eR,getLuminance:()=>b,getOverlayAlpha:()=>eT.A,hexToRgb:()=>h,hslToRgb:()=>S,keyframes:()=>w.i7,lighten:()=>k,makeStyles:()=>en,private_createMixins:()=>eG.A,private_createTypography:()=>eO.A,private_excludeVariablesFromRoot:()=>eD,recomposeColor:()=>f,responsiveFontSizes:()=>N,rgbToHex:()=>y,shouldSkipGeneratingVar:()=>ej,styled:()=>z.Ay,unstable_createMuiStrictModeTheme:()=>B,unstable_getUnit:()=>F,unstable_toUnitless:()=>M,useColorScheme:()=>eH,useTheme:()=>P.A,useThemeProps:()=>V,withStyles:()=>ea,withTheme:()=>el});var o=r(7165),n=r(6366),a=r(5407),l=r(160),i=r(5269),c=r(8044);let s=["defaultProps","mixins","overrides","palette","props","styleOverrides"],d=["type","mode"];function u(e){let{defaultProps:t={},mixins:r={},overrides:o={},palette:n={},props:u={},styleOverrides:m={}}=e,g=(0,l.A)(e,s),h=(0,a.A)({},g,{components:{}});Object.keys(t).forEach(e=>{let r=h.components[e]||{};r.defaultProps=t[e],h.components[e]=r}),Object.keys(u).forEach(e=>{let t=h.components[e]||{};t.defaultProps=u[e],h.components[e]=t}),Object.keys(m).forEach(e=>{let t=h.components[e]||{};t.styleOverrides=m[e],h.components[e]=t}),Object.keys(o).forEach(e=>{let t=h.components[e]||{};t.styleOverrides=o[e],h.components[e]=t}),h.spacing=(0,i.A)(e.spacing);let p=(0,c.A)(e.breakpoints||{}),f=h.spacing;h.mixins=(0,a.A)({gutters:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.A)({paddingLeft:f(2),paddingRight:f(2)},e,{[p.up("sm")]:(0,a.A)({paddingLeft:f(3),paddingRight:f(3)},e[p.up("sm")])})}},r);let{type:y,mode:S}=n,b=(0,l.A)(n,d),A=S||y||"light";return h.palette=(0,a.A)({text:{hint:"dark"===A?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.38)"},mode:A,type:A},b),h}var m=r(6693);function g(e,t=0,r=1){return(0,m.A)(e,t,r)}function h(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function p(e){let t;if(e.type)return e;if("#"===e.charAt(0))return p(h(e));let r=e.indexOf("("),n=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw Error((0,o.A)(9,e));let a=e.substring(r+1,e.length-1);if("color"===n){if(t=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,o.A)(10,t))}else a=a.split(",");return{type:n,values:a=a.map(e=>parseFloat(e)),colorSpace:t}}function f(e){let{type:t,colorSpace:r}=e,{values:o}=e;return -1!==t.indexOf("rgb")?o=o.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),o=-1!==t.indexOf("color")?`${r} ${o.join(" ")}`:`${o.join(", ")}`,`${t}(${o})`}function y(e){if(0===e.indexOf("#"))return e;let{values:t}=p(e);return`#${t.map((e,t)=>(function(e){let t=e.toString(16);return 1===t.length?`0${t}`:t})(3===t?Math.round(255*e):e)).join("")}`}function S(e){let{values:t}=e=p(e),r=t[0],o=t[1]/100,n=t[2]/100,a=o*Math.min(n,1-n),l=(e,t=(e+r/30)%12)=>n-a*Math.max(Math.min(t-3,9-t,1),-1),i="rgb",c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(i+="a",c.push(t[3])),f({type:i,values:c})}function b(e){let t="hsl"===(e=p(e)).type||"hsla"===e.type?p(S(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function A(e,t){let r=b(e),o=b(t);return(Math.max(r,o)+.05)/(Math.min(r,o)+.05)}function v(e,t){return e=p(e),t=g(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,f(e)}function C(e,t){if(e=p(e),t=g(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return f(e)}function k(e,t){if(e=p(e),t=g(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return f(e)}function x(e,t=.15){return b(e)>.5?C(e,t):k(e,t)}var w=r(1987),j=r(6169),T=r(2181);function B(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return(0,j.A)((0,T.A)({unstable_strictMode:!0},e),...r)}let $=!1;function I(e){return $||(console.warn("MUI: createStyles from @mui/material/styles is deprecated.\nPlease use @mui/styles/createStyles"),$=!0),e}function E(e){return String(parseFloat(e)).length===String(e).length}function F(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function M(e){return parseFloat(e)}function N(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:n=["sm","md","lg"],disableAlign:l=!1,factor:i=2,variants:c=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=r,s=(0,a.A)({},e);s.typography=(0,a.A)({},s.typography);let d=s.typography,u=(t=d.htmlFontSize,(e,r)=>{let o=F(e);if(o===r)return e;let n=M(e);"px"!==o&&("em"===o?n=M(e)*M(t):"rem"===o&&(n=M(e)*M(t)));let a=n;if("px"!==r){if("em"===r)a=n/M(t);else{if("rem"!==r)return e;a=n/M(t)}}return parseFloat(a.toFixed(5))+r}),m=n.map(e=>s.breakpoints.values[e]);return c.forEach(e=>{let t=d[e];if(!t)return;let r=parseFloat(u(t.fontSize,"rem"));if(r<=1)return;let{lineHeight:n}=t;if(!E(n)&&!l)throw Error((0,o.A)(6));E(n)||(n=parseFloat(u(n,"rem"))/parseFloat(r));let c=null;l||(c=e=>(function(e){let{size:t,grid:r}=e,o=t-t%r,n=o+r;return t-o<n-t?o:n})({size:e,grid:function(e){let{lineHeight:t,pixels:r,htmlFontSize:o}=e;return r/(t*o)}({pixels:4,lineHeight:n,htmlFontSize:d.htmlFontSize})})),d[e]=(0,a.A)({},t,function(e){let{cssProperty:t,min:r,max:o,unit:n="rem",breakpoints:a=[600,900,1200],transform:l=null}=e,i={[t]:"".concat(r).concat(n)},c=(o-r)/a[a.length-1];return a.forEach(e=>{let o=r+c*e;null!==l&&(o=l(o)),i["@media (min-width:".concat(e,"px)")]={[t]:"".concat(Math.round(1e4*o)/1e4).concat(n)}}),i}({cssProperty:"fontSize",min:1+(r-1)/i,max:r,unit:"rem",breakpoints:m,transform:c}))}),s}var _=r(5255),P=r(5761),O=r(4151),D=r(3182),L=r(2739);function V(e){let{props:t,name:r}=e;return function(e){let{props:t,name:r,defaultTheme:o,themeId:n}=e,a=(0,D.A)(o);return n&&(a=a[n]||a),function(e){let{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,O.A)(t.components[r].defaultProps,o):o}({theme:a,name:r,props:t})}({props:t,name:r,defaultTheme:L.A,themeId:n.A})}var z=r(9142),H=r(2115);let K=H.createContext(null);function R(){return H.useContext(K)}let G="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var U=r(5155);let W=function(e){let{children:t,theme:r}=e,o=R(),n=H.useMemo(()=>{let e=null===o?r:"function"==typeof r?r(o):(0,a.A)({},o,r);return null!=e&&(e[G]=null!==o),e},[r,o]);return(0,U.jsx)(K.Provider,{value:n,children:t})};var Y=r(896),q=r(4763),J=r(3194),Q=r(1087);let X={};function Z(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return H.useMemo(()=>{let n=e&&t[e]||t;if("function"==typeof r){let l=r(n),i=e?(0,a.A)({},t,{[e]:l}):l;return o?()=>i:i}return e?(0,a.A)({},t,{[e]:r}):(0,a.A)({},t,r)},[e,t,r,o])}let ee=function(e){let{children:t,theme:r,themeId:o}=e,n=(0,q.A)(X),a=R()||X,l=Z(o,n,r),i=Z(o,a,r,!0),c="rtl"===l.direction;return(0,U.jsx)(W,{theme:i,children:(0,U.jsx)(Y.T.Provider,{value:l,children:(0,U.jsx)(J.A,{value:c,children:(0,U.jsx)(Q.A,{value:null==l?void 0:l.components,children:t})})})})},et=["theme"];function er(e){let{theme:t}=e,r=(0,l.A)(e,et),o=t[n.A];return(0,U.jsx)(ee,(0,a.A)({},r,{themeId:o?n.A:void 0,theme:o||t}))}var eo=r(2806);function en(){throw Error((0,o.A)(14))}function ea(){throw Error((0,o.A)(15))}function el(){throw Error((0,o.A)(16))}var ei=r(2884);let ec="mode",es="color-scheme",ed="data-color-scheme";function eu(e){if("undefined"!=typeof window&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function em(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function eg(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let eh=["colorSchemes","components","generateCssVars","cssVarPrefix"];var ep=r(1157);function ef(e){return(ef="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ey(e){var t=function(e,t){if("object"!=ef(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=ef(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ef(t)?t:t+""}let eS=(e,t,r,o=[])=>{let n=e;t.forEach((e,a)=>{a===t.length-1?Array.isArray(n)?n[Number(e)]=r:n&&"object"==typeof n&&(n[e]=r):n&&"object"==typeof n&&(n[e]||(n[e]=o.includes(e)?[]:{}),n=n[e])})},eb=(e,t,r)=>{!function e(o,n=[],a=[]){Object.entries(o).forEach(([o,l])=>{r&&(!r||r([...n,o]))||null==l||("object"==typeof l&&Object.keys(l).length>0?e(l,[...n,o],Array.isArray(l)?[...a,o]:a):t([...n,o],l,a))})}(e)},eA=(e,t)=>"number"==typeof t?["lineHeight","fontWeight","opacity","zIndex"].some(t=>e.includes(t))||e[e.length-1].toLowerCase().indexOf("opacity")>=0?t:`${t}px`:t;function ev(e,t){let{prefix:r,shouldSkipGeneratingVar:o}=t||{},n={},a={},l={};return eb(e,(e,t,i)=>{if(("string"==typeof t||"number"==typeof t)&&(!o||!o(e,t))){let o=`--${r?`${r}-`:""}${e.join("-")}`;Object.assign(n,{[o]:eA(e,t)}),eS(a,e,`var(${o})`,i),eS(l,e,`var(${o}, ${t})`,i)}},e=>"vars"===e[0]),{css:n,vars:a,varsWithDefaults:l}}let eC=["colorSchemes","components","defaultColorScheme"],ek=function(e,t){let{colorSchemes:r={},defaultColorScheme:o="light"}=e,{vars:n,css:i,varsWithDefaults:c}=ev((0,l.A)(e,eC),t),s=c,d={},{[o]:u}=r;if(Object.entries((0,l.A)(r,[o].map(ey))||{}).forEach(([e,r])=>{let{vars:o,css:n,varsWithDefaults:a}=ev(r,t);s=(0,T.A)(s,a),d[e]={css:n,vars:o}}),u){let{css:e,vars:r,varsWithDefaults:n}=ev(u,t);s=(0,T.A)(s,n),d[o]={css:e,vars:r}}return{vars:s,generateCssVars:e=>{var r,o;if(!e){let r=(0,a.A)({},i);return{css:r,vars:n,selector:(null==t||null==(o=t.getSelector)?void 0:o.call(t,e,r))||":root"}}let l=(0,a.A)({},d[e].css);return{css:l,vars:d[e].vars,selector:(null==t||null==(r=t.getSelector)?void 0:r.call(t,e,l))||":root"}}}};var ex=r(8664),ew=r(683);function ej(e){var t;return!!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||"palette"===e[0]&&!!(null!=(t=e[1])&&t.match(/(mode|contrastThreshold|tonalOffset)/))}var eT=r(3255);let eB=["colorSchemes","cssVarPrefix","shouldSkipGeneratingVar"],e$=["palette"],eI=[...Array(25)].map((e,t)=>{if(0===t)return;let r=(0,eT.A)(t);return"linear-gradient(rgba(255 255 255 / ".concat(r,"), rgba(255 255 255 / ").concat(r,"))")});function eE(e,t,r){!e[t]&&r&&(e[t]=r)}function eF(e){return e&&e.startsWith("hsl")?(0,ew.YL)(e):e}function eM(e,t){"".concat(t,"Channel")in e||(e["".concat(t,"Channel")]=(0,ew.Me)(eF(e[t]),"MUI: Can't create `palette.".concat(t,"Channel` because `palette.").concat(t,"` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().")+"\n"+"To suppress this warning, you need to explicitly provide the `palette.".concat(t,'Channel` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.')))}let eN=e=>{try{return e()}catch(e){}},e_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mui";return function(e=""){return(t,...r)=>`var(--${e?`${e}-`:""}${t}${function t(...r){if(!r.length)return"";let o=r[0];return"string"!=typeof o||o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${o}`:`, var(--${e?`${e}-`:""}${o}${t(...r.slice(1))})`}(...r)})`}(e)};function eP(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t,r,o,n,i,c,s=arguments.length,d=Array(s>1?s-1:0),u=1;u<s;u++)d[u-1]=arguments[u];let{colorSchemes:m={},cssVarPrefix:g="mui",shouldSkipGeneratingVar:h=ej}=e,p=(0,l.A)(e,eB),f=e_(g),y=(0,j.A)((0,a.A)({},p,m.light&&{palette:null==(t=m.light)?void 0:t.palette})),{palette:S}=y,b=(0,l.A)(y,e$),{palette:A}=(0,j.A)({palette:(0,a.A)({mode:"dark"},null==(r=m.dark)?void 0:r.palette)}),v=(0,a.A)({},b,{cssVarPrefix:g,getCssVar:f,colorSchemes:(0,a.A)({},m,{light:(0,a.A)({},m.light,{palette:S,opacity:(0,a.A)({inputPlaceholder:.42,inputUnderline:.42,switchTrackDisabled:.12,switchTrack:.38},null==(o=m.light)?void 0:o.opacity),overlays:(null==(n=m.light)?void 0:n.overlays)||[]}),dark:(0,a.A)({},m.dark,{palette:A,opacity:(0,a.A)({inputPlaceholder:.5,inputUnderline:.7,switchTrackDisabled:.2,switchTrack:.3},null==(i=m.dark)?void 0:i.opacity),overlays:(null==(c=m.dark)?void 0:c.overlays)||eI})})});Object.keys(v.colorSchemes).forEach(e=>{let t=v.colorSchemes[e].palette,r=e=>{let r=e.split("-"),o=r[1],n=r[2];return f(e,t[o][n])};if("light"===e?(eE(t.common,"background","#fff"),eE(t.common,"onBackground","#000")):(eE(t.common,"background","#000"),eE(t.common,"onBackground","#fff")),function(e,t){t.forEach(t=>{e[t]||(e[t]={})})}(t,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),"light"===e){eE(t.Alert,"errorColor",(0,ew.Nd)(t.error.light,.6)),eE(t.Alert,"infoColor",(0,ew.Nd)(t.info.light,.6)),eE(t.Alert,"successColor",(0,ew.Nd)(t.success.light,.6)),eE(t.Alert,"warningColor",(0,ew.Nd)(t.warning.light,.6)),eE(t.Alert,"errorFilledBg",r("palette-error-main")),eE(t.Alert,"infoFilledBg",r("palette-info-main")),eE(t.Alert,"successFilledBg",r("palette-success-main")),eE(t.Alert,"warningFilledBg",r("palette-warning-main")),eE(t.Alert,"errorFilledColor",eN(()=>S.getContrastText(t.error.main))),eE(t.Alert,"infoFilledColor",eN(()=>S.getContrastText(t.info.main))),eE(t.Alert,"successFilledColor",eN(()=>S.getContrastText(t.success.main))),eE(t.Alert,"warningFilledColor",eN(()=>S.getContrastText(t.warning.main))),eE(t.Alert,"errorStandardBg",(0,ew.j4)(t.error.light,.9)),eE(t.Alert,"infoStandardBg",(0,ew.j4)(t.info.light,.9)),eE(t.Alert,"successStandardBg",(0,ew.j4)(t.success.light,.9)),eE(t.Alert,"warningStandardBg",(0,ew.j4)(t.warning.light,.9)),eE(t.Alert,"errorIconColor",r("palette-error-main")),eE(t.Alert,"infoIconColor",r("palette-info-main")),eE(t.Alert,"successIconColor",r("palette-success-main")),eE(t.Alert,"warningIconColor",r("palette-warning-main")),eE(t.AppBar,"defaultBg",r("palette-grey-100")),eE(t.Avatar,"defaultBg",r("palette-grey-400")),eE(t.Button,"inheritContainedBg",r("palette-grey-300")),eE(t.Button,"inheritContainedHoverBg",r("palette-grey-A100")),eE(t.Chip,"defaultBorder",r("palette-grey-400")),eE(t.Chip,"defaultAvatarColor",r("palette-grey-700")),eE(t.Chip,"defaultIconColor",r("palette-grey-700")),eE(t.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),eE(t.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),eE(t.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),eE(t.LinearProgress,"primaryBg",(0,ew.j4)(t.primary.main,.62)),eE(t.LinearProgress,"secondaryBg",(0,ew.j4)(t.secondary.main,.62)),eE(t.LinearProgress,"errorBg",(0,ew.j4)(t.error.main,.62)),eE(t.LinearProgress,"infoBg",(0,ew.j4)(t.info.main,.62)),eE(t.LinearProgress,"successBg",(0,ew.j4)(t.success.main,.62)),eE(t.LinearProgress,"warningBg",(0,ew.j4)(t.warning.main,.62)),eE(t.Skeleton,"bg","rgba(".concat(r("palette-text-primaryChannel")," / 0.11)")),eE(t.Slider,"primaryTrack",(0,ew.j4)(t.primary.main,.62)),eE(t.Slider,"secondaryTrack",(0,ew.j4)(t.secondary.main,.62)),eE(t.Slider,"errorTrack",(0,ew.j4)(t.error.main,.62)),eE(t.Slider,"infoTrack",(0,ew.j4)(t.info.main,.62)),eE(t.Slider,"successTrack",(0,ew.j4)(t.success.main,.62)),eE(t.Slider,"warningTrack",(0,ew.j4)(t.warning.main,.62));let e=(0,ew.Y9)(t.background.default,.8);eE(t.SnackbarContent,"bg",e),eE(t.SnackbarContent,"color",eN(()=>S.getContrastText(e))),eE(t.SpeedDialAction,"fabHoverBg",(0,ew.Y9)(t.background.paper,.15)),eE(t.StepConnector,"border",r("palette-grey-400")),eE(t.StepContent,"border",r("palette-grey-400")),eE(t.Switch,"defaultColor",r("palette-common-white")),eE(t.Switch,"defaultDisabledColor",r("palette-grey-100")),eE(t.Switch,"primaryDisabledColor",(0,ew.j4)(t.primary.main,.62)),eE(t.Switch,"secondaryDisabledColor",(0,ew.j4)(t.secondary.main,.62)),eE(t.Switch,"errorDisabledColor",(0,ew.j4)(t.error.main,.62)),eE(t.Switch,"infoDisabledColor",(0,ew.j4)(t.info.main,.62)),eE(t.Switch,"successDisabledColor",(0,ew.j4)(t.success.main,.62)),eE(t.Switch,"warningDisabledColor",(0,ew.j4)(t.warning.main,.62)),eE(t.TableCell,"border",(0,ew.j4)((0,ew.Cg)(t.divider,1),.88)),eE(t.Tooltip,"bg",(0,ew.Cg)(t.grey[700],.92))}else{eE(t.Alert,"errorColor",(0,ew.j4)(t.error.light,.6)),eE(t.Alert,"infoColor",(0,ew.j4)(t.info.light,.6)),eE(t.Alert,"successColor",(0,ew.j4)(t.success.light,.6)),eE(t.Alert,"warningColor",(0,ew.j4)(t.warning.light,.6)),eE(t.Alert,"errorFilledBg",r("palette-error-dark")),eE(t.Alert,"infoFilledBg",r("palette-info-dark")),eE(t.Alert,"successFilledBg",r("palette-success-dark")),eE(t.Alert,"warningFilledBg",r("palette-warning-dark")),eE(t.Alert,"errorFilledColor",eN(()=>A.getContrastText(t.error.dark))),eE(t.Alert,"infoFilledColor",eN(()=>A.getContrastText(t.info.dark))),eE(t.Alert,"successFilledColor",eN(()=>A.getContrastText(t.success.dark))),eE(t.Alert,"warningFilledColor",eN(()=>A.getContrastText(t.warning.dark))),eE(t.Alert,"errorStandardBg",(0,ew.Nd)(t.error.light,.9)),eE(t.Alert,"infoStandardBg",(0,ew.Nd)(t.info.light,.9)),eE(t.Alert,"successStandardBg",(0,ew.Nd)(t.success.light,.9)),eE(t.Alert,"warningStandardBg",(0,ew.Nd)(t.warning.light,.9)),eE(t.Alert,"errorIconColor",r("palette-error-main")),eE(t.Alert,"infoIconColor",r("palette-info-main")),eE(t.Alert,"successIconColor",r("palette-success-main")),eE(t.Alert,"warningIconColor",r("palette-warning-main")),eE(t.AppBar,"defaultBg",r("palette-grey-900")),eE(t.AppBar,"darkBg",r("palette-background-paper")),eE(t.AppBar,"darkColor",r("palette-text-primary")),eE(t.Avatar,"defaultBg",r("palette-grey-600")),eE(t.Button,"inheritContainedBg",r("palette-grey-800")),eE(t.Button,"inheritContainedHoverBg",r("palette-grey-700")),eE(t.Chip,"defaultBorder",r("palette-grey-700")),eE(t.Chip,"defaultAvatarColor",r("palette-grey-300")),eE(t.Chip,"defaultIconColor",r("palette-grey-300")),eE(t.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),eE(t.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),eE(t.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),eE(t.LinearProgress,"primaryBg",(0,ew.Nd)(t.primary.main,.5)),eE(t.LinearProgress,"secondaryBg",(0,ew.Nd)(t.secondary.main,.5)),eE(t.LinearProgress,"errorBg",(0,ew.Nd)(t.error.main,.5)),eE(t.LinearProgress,"infoBg",(0,ew.Nd)(t.info.main,.5)),eE(t.LinearProgress,"successBg",(0,ew.Nd)(t.success.main,.5)),eE(t.LinearProgress,"warningBg",(0,ew.Nd)(t.warning.main,.5)),eE(t.Skeleton,"bg","rgba(".concat(r("palette-text-primaryChannel")," / 0.13)")),eE(t.Slider,"primaryTrack",(0,ew.Nd)(t.primary.main,.5)),eE(t.Slider,"secondaryTrack",(0,ew.Nd)(t.secondary.main,.5)),eE(t.Slider,"errorTrack",(0,ew.Nd)(t.error.main,.5)),eE(t.Slider,"infoTrack",(0,ew.Nd)(t.info.main,.5)),eE(t.Slider,"successTrack",(0,ew.Nd)(t.success.main,.5)),eE(t.Slider,"warningTrack",(0,ew.Nd)(t.warning.main,.5));let e=(0,ew.Y9)(t.background.default,.98);eE(t.SnackbarContent,"bg",e),eE(t.SnackbarContent,"color",eN(()=>A.getContrastText(e))),eE(t.SpeedDialAction,"fabHoverBg",(0,ew.Y9)(t.background.paper,.15)),eE(t.StepConnector,"border",r("palette-grey-600")),eE(t.StepContent,"border",r("palette-grey-600")),eE(t.Switch,"defaultColor",r("palette-grey-300")),eE(t.Switch,"defaultDisabledColor",r("palette-grey-600")),eE(t.Switch,"primaryDisabledColor",(0,ew.Nd)(t.primary.main,.55)),eE(t.Switch,"secondaryDisabledColor",(0,ew.Nd)(t.secondary.main,.55)),eE(t.Switch,"errorDisabledColor",(0,ew.Nd)(t.error.main,.55)),eE(t.Switch,"infoDisabledColor",(0,ew.Nd)(t.info.main,.55)),eE(t.Switch,"successDisabledColor",(0,ew.Nd)(t.success.main,.55)),eE(t.Switch,"warningDisabledColor",(0,ew.Nd)(t.warning.main,.55)),eE(t.TableCell,"border",(0,ew.Nd)((0,ew.Cg)(t.divider,1),.68)),eE(t.Tooltip,"bg",(0,ew.Cg)(t.grey[700],.92))}eM(t.background,"default"),eM(t.background,"paper"),eM(t.common,"background"),eM(t.common,"onBackground"),eM(t,"divider"),Object.keys(t).forEach(e=>{let r=t[e];r&&"object"==typeof r&&(r.main&&eE(t[e],"mainChannel",(0,ew.Me)(eF(r.main))),r.light&&eE(t[e],"lightChannel",(0,ew.Me)(eF(r.light))),r.dark&&eE(t[e],"darkChannel",(0,ew.Me)(eF(r.dark))),r.contrastText&&eE(t[e],"contrastTextChannel",(0,ew.Me)(eF(r.contrastText))),"text"===e&&(eM(t[e],"primary"),eM(t[e],"secondary")),"action"===e&&(r.active&&eM(t[e],"active"),r.selected&&eM(t[e],"selected")))})});let{vars:C,generateCssVars:k}=ek(v=d.reduce((e,t)=>(0,T.A)(e,t),v),{prefix:g,shouldSkipGeneratingVar:h});return v.vars=C,v.generateCssVars=k,v.shouldSkipGeneratingVar=h,v.unstable_sxConfig=(0,a.A)({},ex.A,null==p?void 0:p.unstable_sxConfig),v.unstable_sx=function(e){return(0,ep.A)({sx:e,theme:this})},v}var eO=r(3048);let eD=e=>[...[...Array(24)].map((t,r)=>"--".concat(e?"".concat(e,"-"):"","overlays-").concat(r+1)),"--".concat(e?"".concat(e,"-"):"","palette-AppBar-darkBg"),"--".concat(e?"".concat(e,"-"):"","palette-AppBar-darkColor")],eL={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},eV=eP(),{CssVarsProvider:ez,useColorScheme:eH,getInitColorSchemeScript:eK}=function(e){let{themeId:t,theme:r={},attribute:n=ed,modeStorageKey:i=ec,colorSchemeStorageKey:c=es,defaultMode:s="light",defaultColorScheme:d,disableTransitionOnChange:u=!1,resolveTheme:m,excludeVariablesFromRoot:g}=e;r.colorSchemes&&("string"!=typeof d||r.colorSchemes[d])&&("object"!=typeof d||r.colorSchemes[null==d?void 0:d.light])&&("object"!=typeof d||r.colorSchemes[null==d?void 0:d.dark])||console.error(`MUI: \`${d}\` does not exist in \`theme.colorSchemes\`.`);let h=H.createContext(void 0),p="string"==typeof d?d:d.light,f="string"==typeof d?d:d.dark;return{CssVarsProvider:function(e){let{children:o,theme:p=r,modeStorageKey:f=i,colorSchemeStorageKey:y=c,attribute:S=n,defaultMode:b=s,defaultColorScheme:A=d,disableTransitionOnChange:v=u,storageWindow:C="undefined"==typeof window?void 0:window,documentNode:k="undefined"==typeof document?void 0:document,colorSchemeNode:x="undefined"==typeof document?void 0:document.documentElement,colorSchemeSelector:w=":root",disableNestedContext:j=!1,disableStyleSheetGeneration:B=!1}=e,$=H.useRef(!1),I=R(),E=H.useContext(h),F=!!E&&!j,M=p[t],N=M||p,{colorSchemes:_={},components:P={},generateCssVars:O=()=>({vars:{},css:{}}),cssVarPrefix:D}=N,L=(0,l.A)(N,eh),V=Object.keys(_),z="string"==typeof A?A:A.light,K="string"==typeof A?A:A.dark,{mode:G,setMode:W,systemMode:Y,lightColorScheme:q,darkColorScheme:J,colorScheme:Q,setColorScheme:X}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:o,supportedColorSchemes:n=[],modeStorageKey:l=ec,colorSchemeStorageKey:i=es,storageWindow:c="undefined"==typeof window?void 0:window}=e,s=n.join(","),[d,u]=H.useState(()=>{let e=eg(l,t),n=eg("".concat(i,"-light"),r),a=eg("".concat(i,"-dark"),o);return{mode:e,systemMode:eu(e),lightColorScheme:n,darkColorScheme:a}}),m=em(d,e=>"light"===e?d.lightColorScheme:"dark"===e?d.darkColorScheme:void 0),g=H.useCallback(e=>{u(r=>{if(e===r.mode)return r;let o=null!=e?e:t;try{localStorage.setItem(l,o)}catch(e){}return(0,a.A)({},r,{mode:o,systemMode:eu(o)})})},[l,t]),h=H.useCallback(e=>{e?"string"==typeof e?e&&!s.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):u(t=>{let r=(0,a.A)({},t);return em(t,t=>{try{localStorage.setItem("".concat(i,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):u(t=>{let n=(0,a.A)({},t),l=null===e.light?r:e.light,c=null===e.dark?o:e.dark;if(l){if(s.includes(l)){n.lightColorScheme=l;try{localStorage.setItem("".concat(i,"-light"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}if(c){if(s.includes(c)){n.darkColorScheme=c;try{localStorage.setItem("".concat(i,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return n}):u(e=>{try{localStorage.setItem("".concat(i,"-light"),r),localStorage.setItem("".concat(i,"-dark"),o)}catch(e){}return(0,a.A)({},e,{lightColorScheme:r,darkColorScheme:o})})},[s,i,r,o]),p=H.useCallback(e=>{"system"===d.mode&&u(t=>{let r=null!=e&&e.matches?"dark":"light";return t.systemMode===r?t:(0,a.A)({},t,{systemMode:r})})},[d.mode]),f=H.useRef(p);return f.current=p,H.useEffect(()=>{let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return f.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[]),H.useEffect(()=>{if(c){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(i)&&(!r||s.match(r))&&(e.key.endsWith("light")&&h({light:r}),e.key.endsWith("dark")&&h({dark:r})),e.key===l&&(!r||["light","dark","system"].includes(r))&&g(r||t)};return c.addEventListener("storage",e),()=>{c.removeEventListener("storage",e)}}},[h,g,l,i,s,t,c]),(0,a.A)({},d,{colorScheme:m,setMode:g,setColorScheme:h})}({supportedColorSchemes:V,defaultLightColorScheme:z,defaultDarkColorScheme:K,modeStorageKey:f,colorSchemeStorageKey:y,defaultMode:b,storageWindow:C}),Z=G,et=Q;F&&(Z=E.mode,et=E.colorScheme);let er=Z||("system"===b?s:b),eo=et||("dark"===er?K:z),{css:en,vars:ea}=O(),el=(0,a.A)({},L,{components:P,colorSchemes:_,cssVarPrefix:D,vars:ea,getColorSchemeSelector:e=>`[${S}="${e}"] &`}),ed={},ep={};Object.entries(_).forEach(([e,t])=>{let{css:r,vars:o}=O(e);if(el.vars=(0,T.A)(el.vars,o),e===eo&&(Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?el[e]=(0,a.A)({},el[e],t[e]):el[e]=t[e]}),el.palette&&(el.palette.colorScheme=e)),e===("string"==typeof A?A:"dark"===b?A.dark:A.light)){if(g){let t={};g(D).forEach(e=>{t[e]=r[e],delete r[e]}),ed[`[${S}="${e}"]`]=t}ed[`${w}, [${S}="${e}"]`]=r}else ep[`${":root"===w?"":w}[${S}="${e}"]`]=r}),el.vars=(0,T.A)(el.vars,ea),H.useEffect(()=>{et&&x&&x.setAttribute(S,et)},[et,S,x]),H.useEffect(()=>{let e;if(v&&$.current&&k){let t=k.createElement("style");t.appendChild(k.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),k.head.appendChild(t),window.getComputedStyle(k.body),e=setTimeout(()=>{k.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[et,v,k]),H.useEffect(()=>($.current=!0,()=>{$.current=!1}),[]);let ef=H.useMemo(()=>({allColorSchemes:V,colorScheme:et,darkColorScheme:J,lightColorScheme:q,mode:Z,setColorScheme:X,setMode:W,systemMode:Y}),[V,et,J,q,Z,X,W,Y]),ey=!0;(B||F&&(null==I?void 0:I.cssVarPrefix)===D)&&(ey=!1);let eS=(0,U.jsxs)(H.Fragment,{children:[ey&&(0,U.jsxs)(H.Fragment,{children:[(0,U.jsx)(ei.A,{styles:{[w]:en}}),(0,U.jsx)(ei.A,{styles:ed}),(0,U.jsx)(ei.A,{styles:ep})]}),(0,U.jsx)(ee,{themeId:M?t:void 0,theme:m?m(el):el,children:o})]});return F?eS:(0,U.jsx)(h.Provider,{value:ef,children:eS})},useColorScheme:()=>{let e=H.useContext(h);if(!e)throw Error((0,o.A)(19));return e},getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="light",defaultLightColorScheme:r="light",defaultDarkColorScheme:o="dark",modeStorageKey:n=ec,colorSchemeStorageKey:a=es,attribute:l=ed,colorSchemeNode:i="document.documentElement",nonce:c}=e||{};return(0,U.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${n}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${a}-dark') || '${o}';
    } else {
      colorScheme = localStorage.getItem('${a}-light') || '${r}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${a}-light') || '${r}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${a}-dark') || '${o}';
  }
  if (colorScheme) {
    ${i}.setAttribute('${l}', colorScheme);
  }
} catch(e){}})();`}},"mui-color-scheme-init")})((0,a.A)({attribute:n,colorSchemeStorageKey:c,defaultMode:s,defaultLightColorScheme:p,defaultDarkColorScheme:f,modeStorageKey:i},e))}}({themeId:n.A,theme:eV,attribute:eL.attribute,colorSchemeStorageKey:eL.colorSchemeStorageKey,modeStorageKey:eL.modeStorageKey,defaultColorScheme:{light:eL.defaultLightColorScheme,dark:eL.defaultDarkColorScheme},resolveTheme:e=>{let t=(0,a.A)({},e,{typography:(0,eO.A)(e.palette,e.typography)});return t.unstable_sx=function(e){return(0,ep.A)({sx:e,theme:this})},t},excludeVariablesFromRoot:eD}),eR=eK;var eG=r(1003);function eU(){throw Error((0,o.A)(20))}},5688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7051:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}}]);