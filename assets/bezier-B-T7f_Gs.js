import{f as defineComponent,m as watch,q as ref,s as onMounted,u as onUnmounted,o as openBlock,c as createElementBlock,b as createBaseVNode,_ as _export_sfc,e as createVNode,x as unref,d as createTextVNode,j as withDirectives,v as vModelText,y as isRef}from"./index-D8z2FZUJ.js";var isNumeric=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,mathceil=Math.ceil,mathfloor=Math.floor,bignumberError="[BigNumber Error] ",tooManyDigits=bignumberError+"Number primitive has more than 15 significant digits: ",BASE=1e14,LOG_BASE=14,MAX_SAFE_INTEGER=9007199254740991,POWS_TEN=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],SQRT_BASE=1e7,MAX=1e9;function clone(_){var E,B,T,d=h.prototype={constructor:h,toString:null,valueOf:null},y=new h(1),N=20,v=4,G=-7,m=21,L=-1e7,k=1e7,b=!1,C=1,D=0,W={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",q=!0;function h(e,n){var i,c,l,s,u,r,t,f,o=this;if(!(o instanceof h))return new h(e,n);if(n==null){if(e&&e._isBigNumber===!0){o.s=e.s,!e.c||e.e>k?o.c=o.e=null:e.e<L?o.c=[o.e=0]:(o.e=e.e,o.c=e.c.slice());return}if((r=typeof e=="number")&&e*0==0){if(o.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,u=e;u>=10;u/=10,s++);s>k?o.c=o.e=null:(o.e=s,o.c=[e]);return}f=String(e)}else{if(!isNumeric.test(f=String(e)))return T(o,f,r);o.s=f.charCodeAt(0)==45?(f=f.slice(1),-1):1}(s=f.indexOf("."))>-1&&(f=f.replace(".","")),(u=f.search(/e/i))>0?(s<0&&(s=u),s+=+f.slice(u+1),f=f.substring(0,u)):s<0&&(s=f.length)}else{if(intCheck(n,2,I.length,"Base"),n==10&&q)return o=new h(e),R(o,N+o.e+1,v);if(f=String(e),r=typeof e=="number"){if(e*0!=0)return T(o,f,r,n);if(o.s=1/e<0?(f=f.slice(1),-1):1,h.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(tooManyDigits+e)}else o.s=f.charCodeAt(0)===45?(f=f.slice(1),-1):1;for(i=I.slice(0,n),s=u=0,t=f.length;u<t;u++)if(i.indexOf(c=f.charAt(u))<0){if(c=="."){if(u>s){s=t;continue}}else if(!l&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){l=!0,u=-1,s=0;continue}return T(o,String(e),r,n)}r=!1,f=B(f,n,10,o.s),(s=f.indexOf("."))>-1?f=f.replace(".",""):s=f.length}for(u=0;f.charCodeAt(u)===48;u++);for(t=f.length;f.charCodeAt(--t)===48;);if(f=f.slice(u,++t)){if(t-=u,r&&h.DEBUG&&t>15&&(e>MAX_SAFE_INTEGER||e!==mathfloor(e)))throw Error(tooManyDigits+o.s*e);if((s=s-u-1)>k)o.c=o.e=null;else if(s<L)o.c=[o.e=0];else{if(o.e=s,o.c=[],u=(s+1)%LOG_BASE,s<0&&(u+=LOG_BASE),u<t){for(u&&o.c.push(+f.slice(0,u)),t-=LOG_BASE;u<t;)o.c.push(+f.slice(u,u+=LOG_BASE));u=LOG_BASE-(f=f.slice(u)).length}else u-=t;for(;u--;f+="0");o.c.push(+f)}}else o.c=[o.e=0]}h.clone=clone,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var n,i;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(i=e[n],intCheck(i,0,MAX,n),N=i),e.hasOwnProperty(n="ROUNDING_MODE")&&(i=e[n],intCheck(i,0,8,n),v=i),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(i=e[n],i&&i.pop?(intCheck(i[0],-MAX,0,n),intCheck(i[1],0,MAX,n),G=i[0],m=i[1]):(intCheck(i,-MAX,MAX,n),G=-(m=i<0?-i:i))),e.hasOwnProperty(n="RANGE"))if(i=e[n],i&&i.pop)intCheck(i[0],-MAX,-1,n),intCheck(i[1],1,MAX,n),L=i[0],k=i[1];else if(intCheck(i,-MAX,MAX,n),i)L=-(k=i<0?-i:i);else throw Error(bignumberError+n+" cannot be zero: "+i);if(e.hasOwnProperty(n="CRYPTO"))if(i=e[n],i===!!i)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))b=i;else throw b=!i,Error(bignumberError+"crypto unavailable");else b=i;else throw Error(bignumberError+n+" not true or false: "+i);if(e.hasOwnProperty(n="MODULO_MODE")&&(i=e[n],intCheck(i,0,9,n),C=i),e.hasOwnProperty(n="POW_PRECISION")&&(i=e[n],intCheck(i,0,MAX,n),D=i),e.hasOwnProperty(n="FORMAT"))if(i=e[n],typeof i=="object")W=i;else throw Error(bignumberError+n+" not an object: "+i);if(e.hasOwnProperty(n="ALPHABET"))if(i=e[n],typeof i=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(i))q=i.slice(0,10)=="0123456789",I=i;else throw Error(bignumberError+n+" invalid: "+i)}else throw Error(bignumberError+"Object expected: "+e);return{DECIMAL_PLACES:N,ROUNDING_MODE:v,EXPONENTIAL_AT:[G,m],RANGE:[L,k],CRYPTO:b,MODULO_MODE:C,POW_PRECISION:D,FORMAT:W,ALPHABET:I}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var n,i,c=e.c,l=e.e,s=e.s;e:if({}.toString.call(c)=="[object Array]"){if((s===1||s===-1)&&l>=-MAX&&l<=MAX&&l===mathfloor(l)){if(c[0]===0){if(l===0&&c.length===1)return!0;break e}if(n=(l+1)%LOG_BASE,n<1&&(n+=LOG_BASE),String(c[0]).length==n){for(n=0;n<c.length;n++)if(i=c[n],i<0||i>=BASE||i!==mathfloor(i))break e;if(i!==0)return!0}}}else if(c===null&&l===null&&(s===null||s===1||s===-1))return!0;throw Error(bignumberError+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return Y(arguments,-1)},h.minimum=h.min=function(){return Y(arguments,1)},h.random=function(){var e=9007199254740992,n=Math.random()*e&2097151?function(){return mathfloor(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(i){var c,l,s,u,r,t=0,f=[],o=new h(y);if(i==null?i=N:intCheck(i,0,MAX),u=mathceil(i/LOG_BASE),b)if(crypto.getRandomValues){for(c=crypto.getRandomValues(new Uint32Array(u*=2));t<u;)r=c[t]*131072+(c[t+1]>>>11),r>=9e15?(l=crypto.getRandomValues(new Uint32Array(2)),c[t]=l[0],c[t+1]=l[1]):(f.push(r%1e14),t+=2);t=u/2}else if(crypto.randomBytes){for(c=crypto.randomBytes(u*=7);t<u;)r=(c[t]&31)*281474976710656+c[t+1]*1099511627776+c[t+2]*4294967296+c[t+3]*16777216+(c[t+4]<<16)+(c[t+5]<<8)+c[t+6],r>=9e15?crypto.randomBytes(7).copy(c,t):(f.push(r%1e14),t+=7);t=u/7}else throw b=!1,Error(bignumberError+"crypto unavailable");if(!b)for(;t<u;)r=n(),r<9e15&&(f[t++]=r%1e14);for(u=f[--t],i%=LOG_BASE,u&&i&&(r=POWS_TEN[LOG_BASE-i],f[t]=mathfloor(u/r)*r);f[t]===0;f.pop(),t--);if(t<0)f=[s=0];else{for(s=-1;f[0]===0;f.splice(0,1),s-=LOG_BASE);for(t=1,r=f[0];r>=10;r/=10,t++);t<LOG_BASE&&(s-=LOG_BASE-t)}return o.e=s,o.c=f,o}}(),h.sum=function(){for(var e=1,n=arguments,i=new h(n[0]);e<n.length;)i=i.plus(n[e++]);return i},B=function(){var e="0123456789";function n(i,c,l,s){for(var u,r=[0],t,f=0,o=i.length;f<o;){for(t=r.length;t--;r[t]*=c);for(r[0]+=s.indexOf(i.charAt(f++)),u=0;u<r.length;u++)r[u]>l-1&&(r[u+1]==null&&(r[u+1]=0),r[u+1]+=r[u]/l|0,r[u]%=l)}return r.reverse()}return function(i,c,l,s,u){var r,t,f,o,a,g,p,A,S=i.indexOf("."),O=N,w=v;for(S>=0&&(o=D,D=0,i=i.replace(".",""),A=new h(c),g=A.pow(i.length-S),D=o,A.c=n(toFixedPoint(coeffToString(g.c),g.e,"0"),10,l,e),A.e=A.c.length),p=n(i,c,l,u?(r=I,e):(r=e,I)),f=o=p.length;p[--o]==0;p.pop());if(!p[0])return r.charAt(0);if(S<0?--f:(g.c=p,g.e=f,g.s=s,g=E(g,A,O,w,l),p=g.c,a=g.r,f=g.e),t=f+O+1,S=p[t],o=l/2,a=a||t<0||p[t+1]!=null,a=w<4?(S!=null||a)&&(w==0||w==(g.s<0?3:2)):S>o||S==o&&(w==4||a||w==6&&p[t-1]&1||w==(g.s<0?8:7)),t<1||!p[0])i=a?toFixedPoint(r.charAt(1),-O,r.charAt(0)):r.charAt(0);else{if(p.length=t,a)for(--l;++p[--t]>l;)p[t]=0,t||(++f,p=[1].concat(p));for(o=p.length;!p[--o];);for(S=0,i="";S<=o;i+=r.charAt(p[S++]));i=toFixedPoint(i,f,r.charAt(0))}return i}}(),E=function(){function e(c,l,s){var u,r,t,f,o=0,a=c.length,g=l%SQRT_BASE,p=l/SQRT_BASE|0;for(c=c.slice();a--;)t=c[a]%SQRT_BASE,f=c[a]/SQRT_BASE|0,u=p*t+f*g,r=g*t+u%SQRT_BASE*SQRT_BASE+o,o=(r/s|0)+(u/SQRT_BASE|0)+p*f,c[a]=r%s;return o&&(c=[o].concat(c)),c}function n(c,l,s,u){var r,t;if(s!=u)t=s>u?1:-1;else for(r=t=0;r<s;r++)if(c[r]!=l[r]){t=c[r]>l[r]?1:-1;break}return t}function i(c,l,s,u){for(var r=0;s--;)c[s]-=r,r=c[s]<l[s]?1:0,c[s]=r*u+c[s]-l[s];for(;!c[0]&&c.length>1;c.splice(0,1));}return function(c,l,s,u,r){var t,f,o,a,g,p,A,S,O,w,x,F,Q,J,Z,z,$,X=c.s==l.s?1:-1,P=c.c,M=l.c;if(!P||!P[0]||!M||!M[0])return new h(!c.s||!l.s||(P?M&&P[0]==M[0]:!M)?NaN:P&&P[0]==0||!M?X*0:X/0);for(S=new h(X),O=S.c=[],f=c.e-l.e,X=s+f+1,r||(r=BASE,f=bitFloor(c.e/LOG_BASE)-bitFloor(l.e/LOG_BASE),X=X/LOG_BASE|0),o=0;M[o]==(P[o]||0);o++);if(M[o]>(P[o]||0)&&f--,X<0)O.push(1),a=!0;else{for(J=P.length,z=M.length,o=0,X+=2,g=mathfloor(r/(M[0]+1)),g>1&&(M=e(M,g,r),P=e(P,g,r),z=M.length,J=P.length),Q=z,w=P.slice(0,z),x=w.length;x<z;w[x++]=0);$=M.slice(),$=[0].concat($),Z=M[0],M[1]>=r/2&&Z++;do{if(g=0,t=n(M,w,z,x),t<0){if(F=w[0],z!=x&&(F=F*r+(w[1]||0)),g=mathfloor(F/Z),g>1)for(g>=r&&(g=r-1),p=e(M,g,r),A=p.length,x=w.length;n(p,w,A,x)==1;)g--,i(p,z<A?$:M,A,r),A=p.length,t=1;else g==0&&(t=g=1),p=M.slice(),A=p.length;if(A<x&&(p=[0].concat(p)),i(w,p,x,r),x=w.length,t==-1)for(;n(M,w,z,x)<1;)g++,i(w,z<x?$:M,x,r),x=w.length}else t===0&&(g++,w=[0]);O[o++]=g,w[0]?w[x++]=P[Q]||0:(w=[P[Q]],x=1)}while((Q++<J||w[0]!=null)&&X--);a=w[0]!=null,O[0]||O.splice(0,1)}if(r==BASE){for(o=1,X=O[0];X>=10;X/=10,o++);R(S,s+(S.e=o+f*LOG_BASE-1)+1,u,a)}else S.e=f,S.r=+a;return S}}();function H(e,n,i,c){var l,s,u,r,t;if(i==null?i=v:intCheck(i,0,8),!e.c)return e.toString();if(l=e.c[0],u=e.e,n==null)t=coeffToString(e.c),t=c==1||c==2&&(u<=G||u>=m)?toExponential(t,u):toFixedPoint(t,u,"0");else if(e=R(new h(e),n,i),s=e.e,t=coeffToString(e.c),r=t.length,c==1||c==2&&(n<=s||s<=G)){for(;r<n;t+="0",r++);t=toExponential(t,s)}else if(n-=u,t=toFixedPoint(t,s,"0"),s+1>r){if(--n>0)for(t+=".";n--;t+="0");}else if(n+=s-r,n>0)for(s+1==r&&(t+=".");n--;t+="0");return e.s<0&&l?"-"+t:t}function Y(e,n){for(var i,c,l=1,s=new h(e[0]);l<e.length;l++)c=new h(e[l]),(!c.s||(i=compare(s,c))===n||i===0&&s.s===n)&&(s=c);return s}function V(e,n,i){for(var c=1,l=n.length;!n[--l];n.pop());for(l=n[0];l>=10;l/=10,c++);return(i=c+i*LOG_BASE-1)>k?e.c=e.e=null:i<L?e.c=[e.e=0]:(e.e=i,e.c=n),e}T=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,i=/^\.([^.]+)$/,c=/^-?(Infinity|NaN)$/,l=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(s,u,r,t){var f,o=r?u:u.replace(l,"");if(c.test(o))s.s=isNaN(o)?null:o<0?-1:1;else{if(!r&&(o=o.replace(e,function(a,g,p){return f=(p=p.toLowerCase())=="x"?16:p=="b"?2:8,!t||t==f?g:a}),t&&(f=t,o=o.replace(n,"$1").replace(i,"0.$1")),u!=o))return new h(o,f);if(h.DEBUG)throw Error(bignumberError+"Not a"+(t?" base "+t:"")+" number: "+u);s.s=null}s.c=s.e=null}}();function R(e,n,i,c){var l,s,u,r,t,f,o,a=e.c,g=POWS_TEN;if(a){e:{for(l=1,r=a[0];r>=10;r/=10,l++);if(s=n-l,s<0)s+=LOG_BASE,u=n,t=a[f=0],o=mathfloor(t/g[l-u-1]%10);else if(f=mathceil((s+1)/LOG_BASE),f>=a.length)if(c){for(;a.length<=f;a.push(0));t=o=0,l=1,s%=LOG_BASE,u=s-LOG_BASE+1}else break e;else{for(t=r=a[f],l=1;r>=10;r/=10,l++);s%=LOG_BASE,u=s-LOG_BASE+l,o=u<0?0:mathfloor(t/g[l-u-1]%10)}if(c=c||n<0||a[f+1]!=null||(u<0?t:t%g[l-u-1]),c=i<4?(o||c)&&(i==0||i==(e.s<0?3:2)):o>5||o==5&&(i==4||c||i==6&&(s>0?u>0?t/g[l-u]:0:a[f-1])%10&1||i==(e.s<0?8:7)),n<1||!a[0])return a.length=0,c?(n-=e.e+1,a[0]=g[(LOG_BASE-n%LOG_BASE)%LOG_BASE],e.e=-n||0):a[0]=e.e=0,e;if(s==0?(a.length=f,r=1,f--):(a.length=f+1,r=g[LOG_BASE-s],a[f]=u>0?mathfloor(t/g[l-u]%g[u])*r:0),c)for(;;)if(f==0){for(s=1,u=a[0];u>=10;u/=10,s++);for(u=a[0]+=r,r=1;u>=10;u/=10,r++);s!=r&&(e.e++,a[0]==BASE&&(a[0]=1));break}else{if(a[f]+=r,a[f]!=BASE)break;a[f--]=0,r=1}for(s=a.length;a[--s]===0;a.pop());}e.e>k?e.c=e.e=null:e.e<L&&(e.c=[e.e=0])}return e}function U(e){var n,i=e.e;return i===null?e.toString():(n=coeffToString(e.c),n=i<=G||i>=m?toExponential(n,i):toFixedPoint(n,i,"0"),e.s<0?"-"+n:n)}return d.absoluteValue=d.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},d.comparedTo=function(e,n){return compare(this,new h(e,n))},d.decimalPlaces=d.dp=function(e,n){var i,c,l,s=this;if(e!=null)return intCheck(e,0,MAX),n==null?n=v:intCheck(n,0,8),R(new h(s),e+s.e+1,n);if(!(i=s.c))return null;if(c=((l=i.length-1)-bitFloor(this.e/LOG_BASE))*LOG_BASE,l=i[l])for(;l%10==0;l/=10,c--);return c<0&&(c=0),c},d.dividedBy=d.div=function(e,n){return E(this,new h(e,n),N,v)},d.dividedToIntegerBy=d.idiv=function(e,n){return E(this,new h(e,n),0,1)},d.exponentiatedBy=d.pow=function(e,n){var i,c,l,s,u,r,t,f,o,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(bignumberError+"Exponent not an integer: "+U(e));if(n!=null&&(n=new h(n)),r=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return o=new h(Math.pow(+U(a),r?e.s*(2-isOdd(e)):+U(e))),n?o.mod(n):o;if(t=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new h(NaN);c=!t&&a.isInteger()&&n.isInteger(),c&&(a=a.mod(n))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||r&&a.c[1]>=24e7:a.c[0]<8e13||r&&a.c[0]<=9999975e7)))return s=a.s<0&&isOdd(e)?-0:0,a.e>-1&&(s=1/s),new h(t?1/s:s);D&&(s=mathceil(D/LOG_BASE+2))}for(r?(i=new h(.5),t&&(e.s=1),f=isOdd(e)):(l=Math.abs(+U(e)),f=l%2),o=new h(y);;){if(f){if(o=o.times(a),!o.c)break;s?o.c.length>s&&(o.c.length=s):c&&(o=o.mod(n))}if(l){if(l=mathfloor(l/2),l===0)break;f=l%2}else if(e=e.times(i),R(e,e.e+1,1),e.e>14)f=isOdd(e);else{if(l=+U(e),l===0)break;f=l%2}a=a.times(a),s?a.c&&a.c.length>s&&(a.c.length=s):c&&(a=a.mod(n))}return c?o:(t&&(o=y.div(o)),n?o.mod(n):s?R(o,D,v,u):o)},d.integerValue=function(e){var n=new h(this);return e==null?e=v:intCheck(e,0,8),R(n,n.e+1,e)},d.isEqualTo=d.eq=function(e,n){return compare(this,new h(e,n))===0},d.isFinite=function(){return!!this.c},d.isGreaterThan=d.gt=function(e,n){return compare(this,new h(e,n))>0},d.isGreaterThanOrEqualTo=d.gte=function(e,n){return(n=compare(this,new h(e,n)))===1||n===0},d.isInteger=function(){return!!this.c&&bitFloor(this.e/LOG_BASE)>this.c.length-2},d.isLessThan=d.lt=function(e,n){return compare(this,new h(e,n))<0},d.isLessThanOrEqualTo=d.lte=function(e,n){return(n=compare(this,new h(e,n)))===-1||n===0},d.isNaN=function(){return!this.s},d.isNegative=function(){return this.s<0},d.isPositive=function(){return this.s>0},d.isZero=function(){return!!this.c&&this.c[0]==0},d.minus=function(e,n){var i,c,l,s,u=this,r=u.s;if(e=new h(e,n),n=e.s,!r||!n)return new h(NaN);if(r!=n)return e.s=-n,u.plus(e);var t=u.e/LOG_BASE,f=e.e/LOG_BASE,o=u.c,a=e.c;if(!t||!f){if(!o||!a)return o?(e.s=-n,e):new h(a?u:NaN);if(!o[0]||!a[0])return a[0]?(e.s=-n,e):new h(o[0]?u:v==3?-0:0)}if(t=bitFloor(t),f=bitFloor(f),o=o.slice(),r=t-f){for((s=r<0)?(r=-r,l=o):(f=t,l=a),l.reverse(),n=r;n--;l.push(0));l.reverse()}else for(c=(s=(r=o.length)<(n=a.length))?r:n,r=n=0;n<c;n++)if(o[n]!=a[n]){s=o[n]<a[n];break}if(s&&(l=o,o=a,a=l,e.s=-e.s),n=(c=a.length)-(i=o.length),n>0)for(;n--;o[i++]=0);for(n=BASE-1;c>r;){if(o[--c]<a[c]){for(i=c;i&&!o[--i];o[i]=n);--o[i],o[c]+=BASE}o[c]-=a[c]}for(;o[0]==0;o.splice(0,1),--f);return o[0]?V(e,o,f):(e.s=v==3?-1:1,e.c=[e.e=0],e)},d.modulo=d.mod=function(e,n){var i,c,l=this;return e=new h(e,n),!l.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||l.c&&!l.c[0]?new h(l):(C==9?(c=e.s,e.s=1,i=E(l,e,0,3),e.s=c,i.s*=c):i=E(l,e,0,C),e=l.minus(i.times(e)),!e.c[0]&&C==1&&(e.s=l.s),e)},d.multipliedBy=d.times=function(e,n){var i,c,l,s,u,r,t,f,o,a,g,p,A,S,O,w=this,x=w.c,F=(e=new h(e,n)).c;if(!x||!F||!x[0]||!F[0])return!w.s||!e.s||x&&!x[0]&&!F||F&&!F[0]&&!x?e.c=e.e=e.s=null:(e.s*=w.s,!x||!F?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(c=bitFloor(w.e/LOG_BASE)+bitFloor(e.e/LOG_BASE),e.s*=w.s,t=x.length,a=F.length,t<a&&(A=x,x=F,F=A,l=t,t=a,a=l),l=t+a,A=[];l--;A.push(0));for(S=BASE,O=SQRT_BASE,l=a;--l>=0;){for(i=0,g=F[l]%O,p=F[l]/O|0,u=t,s=l+u;s>l;)f=x[--u]%O,o=x[u]/O|0,r=p*f+o*g,f=g*f+r%O*O+A[s]+i,i=(f/S|0)+(r/O|0)+p*o,A[s--]=f%S;A[s]=i}return i?++c:A.splice(0,1),V(e,A,c)},d.negated=function(){var e=new h(this);return e.s=-e.s||null,e},d.plus=function(e,n){var i,c=this,l=c.s;if(e=new h(e,n),n=e.s,!l||!n)return new h(NaN);if(l!=n)return e.s=-n,c.minus(e);var s=c.e/LOG_BASE,u=e.e/LOG_BASE,r=c.c,t=e.c;if(!s||!u){if(!r||!t)return new h(l/0);if(!r[0]||!t[0])return t[0]?e:new h(r[0]?c:l*0)}if(s=bitFloor(s),u=bitFloor(u),r=r.slice(),l=s-u){for(l>0?(u=s,i=t):(l=-l,i=r),i.reverse();l--;i.push(0));i.reverse()}for(l=r.length,n=t.length,l-n<0&&(i=t,t=r,r=i,n=l),l=0;n;)l=(r[--n]=r[n]+t[n]+l)/BASE|0,r[n]=BASE===r[n]?0:r[n]%BASE;return l&&(r=[l].concat(r),++u),V(e,r,u)},d.precision=d.sd=function(e,n){var i,c,l,s=this;if(e!=null&&e!==!!e)return intCheck(e,1,MAX),n==null?n=v:intCheck(n,0,8),R(new h(s),e,n);if(!(i=s.c))return null;if(l=i.length-1,c=l*LOG_BASE+1,l=i[l]){for(;l%10==0;l/=10,c--);for(l=i[0];l>=10;l/=10,c++);}return e&&s.e+1>c&&(c=s.e+1),c},d.shiftedBy=function(e){return intCheck(e,-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER),this.times("1e"+e)},d.squareRoot=d.sqrt=function(){var e,n,i,c,l,s=this,u=s.c,r=s.s,t=s.e,f=N+4,o=new h("0.5");if(r!==1||!u||!u[0])return new h(!r||r<0&&(!u||u[0])?NaN:u?s:1/0);if(r=Math.sqrt(+U(s)),r==0||r==1/0?(n=coeffToString(u),(n.length+t)%2==0&&(n+="0"),r=Math.sqrt(+n),t=bitFloor((t+1)/2)-(t<0||t%2),r==1/0?n="5e"+t:(n=r.toExponential(),n=n.slice(0,n.indexOf("e")+1)+t),i=new h(n)):i=new h(r+""),i.c[0]){for(t=i.e,r=t+f,r<3&&(r=0);;)if(l=i,i=o.times(l.plus(E(s,l,f,1))),coeffToString(l.c).slice(0,r)===(n=coeffToString(i.c)).slice(0,r))if(i.e<t&&--r,n=n.slice(r-3,r+1),n=="9999"||!c&&n=="4999"){if(!c&&(R(l,l.e+N+2,0),l.times(l).eq(s))){i=l;break}f+=4,r+=4,c=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(R(i,i.e+N+2,1),e=!i.times(i).eq(s));break}}return R(i,i.e+N+1,v,e)},d.toExponential=function(e,n){return e!=null&&(intCheck(e,0,MAX),e++),H(this,e,n,1)},d.toFixed=function(e,n){return e!=null&&(intCheck(e,0,MAX),e=e+this.e+1),H(this,e,n)},d.toFormat=function(e,n,i){var c,l=this;if(i==null)e!=null&&n&&typeof n=="object"?(i=n,n=null):e&&typeof e=="object"?(i=e,e=n=null):i=W;else if(typeof i!="object")throw Error(bignumberError+"Argument not an object: "+i);if(c=l.toFixed(e,n),l.c){var s,u=c.split("."),r=+i.groupSize,t=+i.secondaryGroupSize,f=i.groupSeparator||"",o=u[0],a=u[1],g=l.s<0,p=g?o.slice(1):o,A=p.length;if(t&&(s=r,r=t,t=s,A-=s),r>0&&A>0){for(s=A%r||r,o=p.substr(0,s);s<A;s+=r)o+=f+p.substr(s,r);t>0&&(o+=f+p.slice(s)),g&&(o="-"+o)}c=a?o+(i.decimalSeparator||"")+((t=+i.fractionGroupSize)?a.replace(new RegExp("\\d{"+t+"}\\B","g"),"$&"+(i.fractionGroupSeparator||"")):a):o}return(i.prefix||"")+c+(i.suffix||"")},d.toFraction=function(e){var n,i,c,l,s,u,r,t,f,o,a,g,p=this,A=p.c;if(e!=null&&(r=new h(e),!r.isInteger()&&(r.c||r.s!==1)||r.lt(y)))throw Error(bignumberError+"Argument "+(r.isInteger()?"out of range: ":"not an integer: ")+U(r));if(!A)return new h(p);for(n=new h(y),f=i=new h(y),c=t=new h(y),g=coeffToString(A),s=n.e=g.length-p.e-1,n.c[0]=POWS_TEN[(u=s%LOG_BASE)<0?LOG_BASE+u:u],e=!e||r.comparedTo(n)>0?s>0?n:f:r,u=k,k=1/0,r=new h(g),t.c[0]=0;o=E(r,n,0,1),l=i.plus(o.times(c)),l.comparedTo(e)!=1;)i=c,c=l,f=t.plus(o.times(l=f)),t=l,n=r.minus(o.times(l=n)),r=l;return l=E(e.minus(i),c,0,1),t=t.plus(l.times(f)),i=i.plus(l.times(c)),t.s=f.s=p.s,s=s*2,a=E(f,c,s,v).minus(p).abs().comparedTo(E(t,i,s,v).minus(p).abs())<1?[f,c]:[t,i],k=u,a},d.toNumber=function(){return+U(this)},d.toPrecision=function(e,n){return e!=null&&intCheck(e,1,MAX),H(this,e,n,2)},d.toString=function(e){var n,i=this,c=i.s,l=i.e;return l===null?c?(n="Infinity",c<0&&(n="-"+n)):n="NaN":(e==null?n=l<=G||l>=m?toExponential(coeffToString(i.c),l):toFixedPoint(coeffToString(i.c),l,"0"):e===10&&q?(i=R(new h(i),N+l+1,v),n=toFixedPoint(coeffToString(i.c),i.e,"0")):(intCheck(e,2,I.length,"Base"),n=B(toFixedPoint(coeffToString(i.c),l,"0"),10,e,c,!0)),c<0&&i.c[0]&&(n="-"+n)),n},d.valueOf=d.toJSON=function(){return U(this)},d._isBigNumber=!0,d[Symbol.toStringTag]="BigNumber",d[Symbol.for("nodejs.util.inspect.custom")]=d.valueOf,_!=null&&h.set(_),h}function bitFloor(_){var E=_|0;return _>0||_===E?E:E-1}function coeffToString(_){for(var E,B,T=1,d=_.length,y=_[0]+"";T<d;){for(E=_[T++]+"",B=LOG_BASE-E.length;B--;E="0"+E);y+=E}for(d=y.length;y.charCodeAt(--d)===48;);return y.slice(0,d+1||1)}function compare(_,E){var B,T,d=_.c,y=E.c,N=_.s,v=E.s,G=_.e,m=E.e;if(!N||!v)return null;if(B=d&&!d[0],T=y&&!y[0],B||T)return B?T?0:-v:N;if(N!=v)return N;if(B=N<0,T=G==m,!d||!y)return T?0:!d^B?1:-1;if(!T)return G>m^B?1:-1;for(v=(G=d.length)<(m=y.length)?G:m,N=0;N<v;N++)if(d[N]!=y[N])return d[N]>y[N]^B?1:-1;return G==m?0:G>m^B?1:-1}function intCheck(_,E,B,T){if(_<E||_>B||_!==mathfloor(_))throw Error(bignumberError+(T||"Argument")+(typeof _=="number"?_<E||_>B?" out of range: ":" not an integer: ":" not a primitive number: ")+String(_))}function isOdd(_){var E=_.c.length-1;return bitFloor(_.e/LOG_BASE)==E&&_.c[E]%2!=0}function toExponential(_,E){return(_.length>1?_.charAt(0)+"."+_.slice(1):_)+(E<0?"e":"e+")+E}function toFixedPoint(_,E,B){var T,d;if(E<0){for(d=B+".";++E;d+=B);_=d+_}else if(T=_.length,++E>T){for(d=B,E-=T;--E;d+=B);_+=d}else E<T&&(_=_.slice(0,E)+"."+_.slice(E));return _}var BigNumber=clone();const textSpace=150,standSize=5,_sfc_main$1=defineComponent({__name:"coordinate",props:{fn:{type:Array,default:[]}},setup(_){const E=_;watch(()=>E.fn,()=>{l(),console.log(123)});const B=ref(null),T=ref(null),d=ref(null),y=ref(null);let N,v,G,m={x:0,y:0},L=BigNumber(150);const k=[1,2,5];let b=BigNumber(1),C=30;function D(t,f){const o=window.devicePixelRatio,a=B.value.offsetWidth,g=B.value.offsetHeight;t.width=a*o,t.height=g*o,t.style.width=a+"px",t.style.height=g+"px",f.scale(o,o)}let W=new ResizeObserver(()=>{D(T.value,N),D(d.value,v),D(y.value,G),l(),n()});onMounted(()=>{const t=B.value;N=T.value.getContext("2d"),v=d.value.getContext("2d"),G=y.value.getContext("2d"),m={x:Math.round(t.offsetWidth/2),y:Math.round(t.offsetHeight/2)},W.observe(t)}),onUnmounted(()=>{W.disconnect()});let I=null,q={x:0,y:0};function h(t){Math.abs(t.x)<.2&&Math.abs(t.y)<.2||(m={x:m.x+t.x,y:m.y+t.y},l(),I=requestAnimationFrame(()=>{h({x:t.x-q.x,y:t.y-q.y})}))}function H(t){I&&cancelAnimationFrame(I);const f=[t.clientX,t.clientY],o=[m.x,m.y];let a={x:t.clientX,y:t.clientY},g={x:0,y:0};function p(S){m={x:o[0]+S.clientX-f[0],y:o[1]+S.clientY-f[1]},g={x:S.clientX-a.x,y:S.clientY-a.y},a={x:S.clientX,y:S.clientY},l()}function A(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",A),I&&cancelAnimationFrame(I);const S=Math.sqrt(g.x**2+g.y**2);q={x:.14/S*g.x,y:.14/S*g.y},I=requestAnimationFrame(()=>{h(g)})}window.addEventListener("mousemove",p),window.addEventListener("mouseup",A)}function Y(t){const o={x:t.clientX-B.value.getBoundingClientRect().left,y:t.clientY-B.value.getBoundingClientRect().top},a=R(o);t.deltaY<0?L=L.times(1.1):L=L.div(1.1),m={x:o.x-a.x*L.toNumber(),y:o.y+a.y*L.toNumber()},n(),l()}function V(t,f){return typeof f=="number"?{x:m.x+t*L.toNumber(),y:m.y-f*L.toNumber()}:{x:m.x+t.x*L.toNumber(),y:m.y-t.y*L.toNumber()}}function R(t,f){return typeof f=="number"?{x:(t-m.x)/L.toNumber(),y:(m.y-f)/L.toNumber()}:{x:(t.x-m.x)/L.toNumber(),y:(m.y-t.y)/L.toNumber()}}function U(t){const f=Math.floor(Math.log10(t));return{value:t/Math.pow(10,f),count:f}}function e(t){const f=U(t),o=[k[k.length-1]/10,...k,k[0]*10];let a=k[0],g=1/0,p=0;for(let S=0;S<o.length;S++){const O=Math.abs(f.value-o[S]);O<g&&(g=O,a=o[S],p=S)}return p===0?(a*=10,f.count--):p===o.length-1&&(a/=10,f.count++),BigNumber(a).times(BigNumber(10).pow(f.count))}function n(){const t=textSpace/L.toNumber();b=e(t),C=b.toNumber()*L.toNumber()/standSize}function i(t,f){for(let o=Math.ceil(-m.x/C)-5;m.x+(o-5)*C<B.value.offsetWidth;o++)t(o);for(let o=Math.ceil(-m.y/C)-5;m.y+(o-5)*C<B.value.offsetHeight;o++)f(o)}function c(){return typeof E.fn=="function"?[E.fn]:E.fn===null?[]:E.fn}function l(){v.clearRect(0,0,window.innerWidth+1,window.innerHeight+1),N.clearRect(0,0,window.innerWidth+1,window.innerHeight+1),G.clearRect(0,0,window.innerWidth+1,window.innerHeight+1);const t=B.value.clientWidth,f=B.value.clientHeight;s(v,t-1,f-1),u(N,t-1,f-1),r()}function s(t,f,o){function a(){t.beginPath(),t.moveTo(0,m.y),t.lineTo(f,m.y),t.moveTo(m.x,0),t.lineTo(m.x,o),t.stroke()}function g(){const S="O";t.font="oblique 13px Arial",t.beginPath(),t.fillText(S,m.x-t.measureText(S).width-2,m.y+13)}function p(){t.beginPath(),t.moveTo(f,m.y),t.lineTo(f-8,m.y-8),t.moveTo(f,m.y),t.lineTo(f-8,m.y+8),t.moveTo(m.x,0),t.lineTo(m.x-8,8),t.moveTo(m.x,0),t.lineTo(m.x+8,8),t.stroke()}function A(){function S(O,w){return Math.max(Math.min(O,w[1]),w[0])}i(O=>{if(O===0||O%standSize!==0)return;t.font="oblique 13px Arial";let w=b.times(O/standSize).toString();(Math.abs(b.toNumber())>1e4||Math.abs(b.toNumber())<1e-4)&&(w=(+w).toExponential()),t.fillText(w,m.x+O*C-t.measureText(w).width/2,S(m.y+15,[15,o-5]))},O=>{if(O===0||O%standSize!==0)return;t.font="oblique 13px Arial";let w=b.times(-O/standSize).toString();(Math.abs(b.toNumber())>1e4||Math.abs(b.toNumber())<1e-4)&&(w=(+w).toExponential()),t.fillText(w,S(m.x-t.measureText(w).width-6,[2,f-t.measureText(w).width-4]),m.y+O*C+5)})}t.lineWidth=.8,a(),g(),p(),A()}function u(t,f,o){function a(){t.lineWidth=.5,t.strokeStyle="#ccc"}function g(){t.lineWidth=.8,t.strokeStyle="#bbb"}function p(){i(A=>{t.beginPath(),A%standSize===0?g():a(),t.moveTo(m.x+A*C,0),t.lineTo(m.x+A*C,o),t.stroke()},A=>{t.beginPath(),A%standSize===0?g():a(),t.moveTo(0,m.y+A*C),t.lineTo(f,m.y+A*C),t.stroke()})}p()}function r(){const f=c(),o=R(0,0).x,a=R(B.value.offsetWidth,0).x,g=G;g.lineWidth=1.5,g.strokeStyle="#379";for(let p=0;p<f.length;p++){g.beginPath(),g.moveTo(0,V(0,f[p](o)).y);for(let A=1;A<=3e3;A++){const S=o+(a-o)/3e3*A,O=f[p](S);if(O===1/0||O===-1/0||isNaN(O))continue;const w=V(S,O);g.lineTo(w.x,w.y)}g.stroke()}}return(t,f)=>(openBlock(),createElementBlock("div",{class:"container",ref_key:"container",ref:B,onMousedown:H,onWheel:Y},[createBaseVNode("canvas",{ref_key:"canvasGrid",ref:T},null,512),createBaseVNode("canvas",{ref_key:"canvasAxis",ref:d},null,512),createBaseVNode("canvas",{ref_key:"canvasFunction",ref:y},null,512)],544))}}),coordinate=_export_sfc(_sfc_main$1,[["__scopeId","data-v-896e77a4"]]),_hoisted_1={class:"view"},_hoisted_2={class:"input"},_sfc_main=defineComponent({__name:"bezier",setup(__props){let input=ref(""),fn=ref();return watch(input,()=>{try{fn.value=eval(input.value)}catch{}}),(_,E)=>(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(coordinate,{fn:unref(fn)},null,8,["fn"]),createBaseVNode("div",_hoisted_2,[createTextVNode(" 请使用 (x)=>表达式 的形式输入函数 "),withDirectives(createBaseVNode("input",{style:{width:"340px",height:"20px","font-size":"20px",padding:"5px"},"onUpdate:modelValue":E[0]||(E[0]=B=>isRef(input)?input.value=B:input=B)},null,512),[[vModelText,unref(input)]])])]))}}),bezier=_export_sfc(_sfc_main,[["__scopeId","data-v-31342350"]]);export{bezier as default};
