"use strict";class t{constructor(t){const n=[..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",..."0123456789",..."+-*/()[]{}^%$!@.,_<>?:;",..."αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",..."абвгдеёжзийклмнопрстуфхцчшщыэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩъЫьЭЮЯ"];this.availableChars=n.filter(n=>!t.includes(n)),this.index=0}getNextChar(){const t=this.availableChars[this.index]||String.fromCharCode(192+this.index);return this.index++,t}}function n(t,n){var e;return`O=${n=(e=n).split('"').length>=e.split("'").length?`'${e.replace(/'/g,"\\'")}'`:`"${e.replace(/"/g,'\\"')}"`};for(o of'${t.map(t=>t.to).reverse().join("")}')with(O.split(o))O=join(pop());eval(O)`}var e;function r(t,n){let r=[],s=0,o=!1;for(let i=2;!o;i++){let h=!1;for(let o=0;o<t.length-i;o++){const a=t.substring(o,o+i),c=(l=a,t.split(l).length-1);if(c>1){h=!0,r=r.filter(t=>-1===a.indexOf(t.word)||t.wordOccurences>c);const t=c*i-(c+i+2);t>0&&t>=s*(n===e.NONE?1:.8)&&r.push({word:a,wordOccurences:c,savings:t}),s=Math.max(s,t)}}h||(o=!0)}var l;return r.sort((t,n)=>n.savings-t.savings)}!function(t){t[t.NONE=0]="NONE",t[t.MAX=1]="MAX",t[t.MIN=2]="MIN"}(e||(e={})),module.exports=function(s){return[e.NONE,e.MAX,e.MIN].map(o=>function(s,o){const l=new t(s);let i=[],h=s,a=null,c=!1;for(;!c;){const t=l.getNextChar(),s=r(h,o);if(0===s.length)break;const g=s[0].savings,f=s.filter(t=>t.savings>=.8*g);let u;if(o===e.NONE&&(u=0),o===e.MAX){let t=0;f.forEach((n,e)=>{n.word.length>t&&(u=e,t=n.word.length)})}if(o===e.MIN){let t=1/0;f.forEach((n,e)=>{n.word.length<t&&(u=e,t=n.word.length)})}const d=s[u].word,N=h.split(d).join(t)+t+d,p=[...i];p.push({from:d,to:t});const v=n(p,N);null===a||a.length>v.length?(a=v,h=N,i=p):c=!0}const g=n(i,h);return s.length<g.length?s:g}(s,o)).sort((t,n)=>t.length-n.length)[0]};
