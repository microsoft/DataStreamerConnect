﻿"use strict";
var e=function(){"use strict";function r(e,r){postMessage({action:xt,cbn:r,result:e})}function t(e){var r=[];return r[e-1]=void 0,r}function o(e,r){return i(e[0]+r[0],e[1]+r[1])}function n(e,r){return u(~~Math.max(Math.min(e[1]/Ot,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/Ot,2147483647),-2147483648),c(e)&c(r))}function s(e,r){var t,o;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],o=0>r[1],t&&!o?-1:!t&&o?1:h(e,r)[1]<0?-1:1)}function i(e,r){var t,o;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%Ot,o=Math.floor(e/Ot)*Ot,r=r-t+o,e=e-o+t;0>e;)e+=Ot,r-=Ot;for(;e>4294967295;)e-=Ot,r+=Ot;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function _(e,r){return e[0]==r[0]&&e[1]==r[1]}function a(e){return e>=0?[e,0]:[e+Ot,-Ot]}function c(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-Ot,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function u(e,r){var t,o;return t=e*Ot,o=r,0>r&&(o+=Ot),[o,t]}function f(e){return 30>=e?1<<e:f(30)*f(e-30)}function m(e,r){var t,o,n,s;if(r&=63,_(e,Ht))return r?Gt:e;if(0>e[1])throw Error("Neg");return s=f(r),o=e[1]*s%0x10000000000000000,n=e[0]*s,t=n-n%Ot,o+=t,n-=t,o>=0x8000000000000000&&(o-=0x10000000000000000),[n,o]}function d(e,r){var t;return r&=63,t=f(r),i(Math.floor(e[0]/t),e[1]/t)}function p(e,r){var t;return r&=63,t=d(e,r),0>e[1]&&(t=o(t,m([2,0],63-r))),t}function h(e,r){return i(e[0]-r[0],e[1]-r[1])}function P(e,r){return e.Mc=r,e.Lc=0,e.Yb=r.length,e}function l(e){return e.Lc>=e.Yb?-1:255&e.Mc[e.Lc++]}function v(e,r,t,o){return e.Lc>=e.Yb?-1:(o=Math.min(o,e.Yb-e.Lc),M(e.Mc,e.Lc,r,t,o),e.Lc+=o,o)}function B(e){return e.Mc=t(32),e.Yb=0,e}function S(e){var r=e.Mc;return r.length=e.Yb,r}function g(e,r){e.Mc[e.Yb++]=r<<24>>24}function k(e,r,t,o){M(r,t,e.Mc,e.Yb,o),e.Yb+=o}function R(e,r,t,o,n){var s;for(s=r;t>s;++s)o[n++]=e.charCodeAt(s)}function M(e,r,t,o,n){for(var s=0;n>s;++s)t[o+s]=e[r+s]}function D(e,r){Ar(r,1<<e.s),r.n=e.f,Hr(r,e.m),r.eb=0,r.fb=3,r.Y=2,r.y=3}function b(r,t,o,n,i){var _,a;if(s(n,At)<0)throw Error("invalid length "+n);for(r.Tb=n,_=Dr({}),D(i,_),_.Gc=void 0===e.disableEndMark,Gr(_,o),a=0;64>a;a+=8)g(o,255&c(d(n,a)));r.yb=(_.W=0,_.oc=t,_.pc=0,Mr(_),_.d.Ab=o,Fr(_),wr(_),br(_),_.$.rb=_.n+1-2,Qr(_.$,1<<_.Y),_.i.rb=_.n+1-2,Qr(_.i,1<<_.Y),void(_.g=Gt),X({},_))}function w(e,r,t){return e.Nb=B({}),b(e,P({},r),e.Nb,a(r.length),t),e}function E(e,r,t){var o,n,s,i,_="",c=[];for(n=0;5>n;++n){if(s=l(r),-1==s)throw Error("truncated input");c[n]=s<<24>>24}if(o=ir({}),!ar(o,c))throw Error("corrupted input");for(n=0;64>n;n+=8){if(s=l(r),-1==s)throw Error("truncated input");s=s.toString(16),1==s.length&&(s="0"+s),_=s+""+_}/^0+$|^f+$/i.test(_)?e.Tb=At:(i=parseInt(_,16),e.Tb=i>4294967295?At:a(i)),e.yb=nr(o,r,t,e.Tb)}function L(e,r){return e.Nb=B({}),E(e,P({},r),e.Nb),e}function y(e,r,o,n){var s;e.Bc=r,e._b=o,s=r+o+n,(null==e.c||e.Kb!=s)&&(e.c=null,e.Kb=s,e.c=t(e.Kb)),e.H=e.Kb-o}function C(e,r){return e.c[e.f+e.o+r]}function z(e,r,t,o){var n,s;for(e.T&&e.o+r+o>e.h&&(o=e.h-(e.o+r)),++t,s=e.f+e.o+r,n=0;o>n&&e.c[s+n]==e.c[s+n-t];++n);return n}function F(e){return e.h-e.o}function I(e){var r,t,o;for(o=e.f+e.o-e.Bc,o>0&&--o,t=e.f+e.h-o,r=0;t>r;++r)e.c[r]=e.c[o+r];e.f-=o}function x(e){var r;++e.o,e.o>e.zb&&(r=e.f+e.o,r>e.H&&I(e),N(e))}function N(e){var r,t,o;if(!e.T)for(;;){if(o=-e.f+e.Kb-e.h,!o)return;if(r=v(e.cc,e.c,e.f+e.h,o),-1==r)return e.zb=e.h,t=e.f+e.zb,t>e.H&&(e.zb=e.H-e.f),void(e.T=1);e.h+=r,e.h>=e.o+e._b&&(e.zb=e.h-e._b)}}function O(e,r){e.f+=r,e.zb-=r,e.o-=r,e.h-=r}function A(e,r,o,n,s){var i,_,a;1073741567>r&&(e.Fc=16+(n>>1),a=~~((r+o+n+s)/2)+256,y(e,r+o,n+s,a),e.ob=n,i=r+1,e.p!=i&&(e.L=t(2*(e.p=i))),_=65536,e.qb&&(_=r-1,_|=_>>1,_|=_>>2,_|=_>>4,_|=_>>8,_>>=1,_|=65535,_>16777216&&(_>>=1),e.Ec=_,++_,_+=e.R),_!=e.rc&&(e.ub=t(e.rc=_)))}function H(e,r){var t,o,n,s,i,_,a,c,u,f,m,d,p,h,P,l,v,B,S,g,k;if(e.h>=e.o+e.ob)h=e.ob;else if(h=e.h-e.o,e.xb>h)return W(e),0;for(v=0,P=e.o>e.p?e.o-e.p:0,o=e.f+e.o,l=1,c=0,u=0,e.qb?(k=Tt[255&e.c[o]]^255&e.c[o+1],c=1023&k,k^=(255&e.c[o+2])<<8,u=65535&k,f=(k^Tt[255&e.c[o+3]]<<5)&e.Ec):f=255&e.c[o]^(255&e.c[o+1])<<8,n=e.ub[e.R+f]||0,e.qb&&(s=e.ub[c]||0,i=e.ub[1024+u]||0,e.ub[c]=e.o,e.ub[1024+u]=e.o,s>P&&e.c[e.f+s]==e.c[o]&&(r[v++]=l=2,r[v++]=e.o-s-1),i>P&&e.c[e.f+i]==e.c[o]&&(i==s&&(v-=2),r[v++]=l=3,r[v++]=e.o-i-1,s=i),0!=v&&s==n&&(v-=2,l=1)),e.ub[e.R+f]=e.o,S=(e.k<<1)+1,g=e.k<<1,d=p=e.w,0!=e.w&&n>P&&e.c[e.f+n+e.w]!=e.c[o+e.w]&&(r[v++]=l=e.w,r[v++]=e.o-n-1),t=e.Fc;;){if(P>=n||0==t--){e.L[S]=e.L[g]=0;break}if(a=e.o-n,_=(e.k>=a?e.k-a:e.k-a+e.p)<<1,B=e.f+n,m=p>d?d:p,e.c[B+m]==e.c[o+m]){for(;++m!=h&&e.c[B+m]==e.c[o+m];);if(m>l&&(r[v++]=l=m,r[v++]=a-1,m==h)){e.L[g]=e.L[_],e.L[S]=e.L[_+1];break}}(255&e.c[o+m])>(255&e.c[B+m])?(e.L[g]=n,g=_+1,n=e.L[g],p=m):(e.L[S]=n,S=_,n=e.L[S],d=m)}return W(e),v}function G(e){e.f=0,e.o=0,e.h=0,e.T=0,N(e),e.k=0,O(e,-1)}function W(e){var r;++e.k>=e.p&&(e.k=0),x(e),1073741823==e.o&&(r=e.o-e.p,T(e.L,2*e.p,r),T(e.ub,e.rc,r),O(e,r))}function T(e,r,t){var o,n;for(o=0;r>o;++o)n=e[o]||0,t>=n?n=0:n-=t,e[o]=n}function Z(e,r){e.qb=r>2,e.qb?(e.w=0,e.xb=4,e.R=66560):(e.w=2,e.xb=3,e.R=0)}function Y(e,r){var t,o,n,s,i,_,a,c,u,f,m,d,p,h,P,l,v;do{if(e.h>=e.o+e.ob)d=e.ob;else if(d=e.h-e.o,e.xb>d){W(e);continue}for(p=e.o>e.p?e.o-e.p:0,o=e.f+e.o,e.qb?(v=Tt[255&e.c[o]]^255&e.c[o+1],_=1023&v,e.ub[_]=e.o,v^=(255&e.c[o+2])<<8,a=65535&v,e.ub[1024+a]=e.o,c=(v^Tt[255&e.c[o+3]]<<5)&e.Ec):c=255&e.c[o]^(255&e.c[o+1])<<8,n=e.ub[e.R+c],e.ub[e.R+c]=e.o,P=(e.k<<1)+1,l=e.k<<1,f=m=e.w,t=e.Fc;;){if(p>=n||0==t--){e.L[P]=e.L[l]=0;break}if(i=e.o-n,s=(e.k>=i?e.k-i:e.k-i+e.p)<<1,h=e.f+n,u=m>f?f:m,e.c[h+u]==e.c[o+u]){for(;++u!=d&&e.c[h+u]==e.c[o+u];);if(u==d){e.L[l]=e.L[s],e.L[P]=e.L[s+1];break}}(255&e.c[o+u])>(255&e.c[h+u])?(e.L[l]=n,l=s+1,n=e.L[l],m=u):(e.L[P]=n,P=s,n=e.L[P],f=u)}W(e)}while(0!=--r)}function V(e,r,t){var o=e.o-r-1;for(0>o&&(o+=e.M);0!=t;--t)o>=e.M&&(o=0),e.Lb[e.o++]=e.Lb[o++],e.o>=e.M&&$(e)}function j(e,r){(null==e.Lb||e.M!=r)&&(e.Lb=t(r)),e.M=r,e.o=0,e.h=0}function $(e){var r=e.o-e.h;r&&(k(e.cc,e.Lb,e.h,r),e.o>=e.M&&(e.o=0),e.h=e.o)}function K(e,r){var t=e.o-r-1;return 0>t&&(t+=e.M),e.Lb[t]}function q(e,r){e.Lb[e.o++]=r,e.o>=e.M&&$(e)}function J(e){$(e),e.cc=null}function Q(e){return e-=2,4>e?e:3}function U(e){return 4>e?0:10>e?e-3:e-6}function X(e,r){return e.cb=r,e.Z=null,e.zc=1,e}function er(e,r){return e.Z=r,e.cb=null,e.zc=1,e}function rr(e){if(!e.zc)throw Error("bad state");return e.cb?or(e):tr(e),e.zc}function tr(e){var r=sr(e.Z);if(-1==r)throw Error("corrupted input");e.Pb=At,e.Pc=e.Z.g,(r||s(e.Z.Nc,Gt)>=0&&s(e.Z.g,e.Z.Nc)>=0)&&($(e.Z.B),J(e.Z.B),e.Z.e.Ab=null,e.zc=0)}function or(e){Rr(e.cb,e.cb.Xb,e.cb.uc,e.cb.Kc),e.Pb=e.cb.Xb[0],e.cb.Kc[0]&&(Or(e.cb),e.zc=0)}function nr(e,r,t,o){return e.e.Ab=r,J(e.B),e.B.cc=t,_r(e),e.U=0,e.ib=0,e.Jc=0,e.Ic=0,e.Qc=0,e.Nc=o,e.g=Gt,e.jc=0,er({},e)}function sr(e){var r,t,n,i,_,u;if(u=c(e.g)&e.Dc,vt(e.e,e.Gb,(e.U<<4)+u)){if(vt(e.e,e.Zb,e.U))n=0,vt(e.e,e.Cb,e.U)?(vt(e.e,e.Db,e.U)?(vt(e.e,e.Eb,e.U)?(t=e.Qc,e.Qc=e.Ic):t=e.Ic,e.Ic=e.Jc):t=e.Jc,e.Jc=e.ib,e.ib=t):vt(e.e,e.pb,(e.U<<4)+u)||(e.U=7>e.U?9:11,n=1),n||(n=mr(e.sb,e.e,u)+2,e.U=7>e.U?8:11);else if(e.Qc=e.Ic,e.Ic=e.Jc,e.Jc=e.ib,n=2+mr(e.Rb,e.e,u),e.U=7>e.U?7:10,_=at(e.kb[Q(n)],e.e),_>=4){if(i=(_>>1)-1,e.ib=(2|1&_)<<i,14>_)e.ib+=ut(e.kc,e.ib-_-1,e.e,i);else if(e.ib+=Bt(e.e,i-4)<<4,e.ib+=ct(e.Fb,e.e),0>e.ib)return-1==e.ib?1:-1}else e.ib=_;if(s(a(e.ib),e.g)>=0||e.ib>=e.nb)return-1;V(e.B,e.ib,n),e.g=o(e.g,a(n)),e.jc=K(e.B,0)}else r=Pr(e.gb,c(e.g),e.jc),e.jc=7>e.U?vr(r,e.e):Br(r,e.e,K(e.B,e.ib)),q(e.B,e.jc),e.U=U(e.U),e.g=o(e.g,Wt);return 0}function ir(e){e.B={},e.e={},e.Gb=t(192),e.Zb=t(12),e.Cb=t(12),e.Db=t(12),e.Eb=t(12),e.pb=t(192),e.kb=t(4),e.kc=t(114),e.Fb=_t({},4),e.Rb=dr({}),e.sb=dr({}),e.gb={};for(var r=0;4>r;++r)e.kb[r]=_t({},6);return e}function _r(e){e.B.h=0,e.B.o=0,gt(e.Gb),gt(e.pb),gt(e.Zb),gt(e.Cb),gt(e.Db),gt(e.Eb),gt(e.kc),lr(e.gb);for(var r=0;4>r;++r)gt(e.kb[r].G);pr(e.Rb),pr(e.sb),gt(e.Fb.G),St(e.e)}function ar(e,r){var t,o,n,s,i,_,a;if(5>r.length)return 0;for(a=255&r[0],n=a%9,_=~~(a/9),s=_%5,i=~~(_/5),t=0,o=0;4>o;++o)t+=(255&r[1+o])<<8*o;return t>99999999||!ur(e,n,s,i)?0:cr(e,t)}function cr(e,r){return 0>r?0:(e.Ob!=r&&(e.Ob=r,e.nb=Math.max(e.Ob,1),j(e.B,Math.max(e.nb,4096))),1)}function ur(e,r,t,o){if(r>8||t>4||o>4)return 0;hr(e.gb,t,r);var n=1<<o;return fr(e.Rb,n),fr(e.sb,n),e.Dc=n-1,1}function fr(e,r){for(;r>e.O;++e.O)e.ec[e.O]=_t({},3),e.hc[e.O]=_t({},3)}function mr(e,r,t){if(!vt(r,e.wc,0))return at(e.ec[t],r);var o=8;return o+=vt(r,e.wc,1)?8+at(e.tc,r):at(e.hc[t],r)}function dr(e){return e.wc=t(2),e.ec=t(16),e.hc=t(16),e.tc=_t({},8),e.O=0,e}function pr(e){gt(e.wc);for(var r=0;e.O>r;++r)gt(e.ec[r].G),gt(e.hc[r].G);gt(e.tc.G)}function hr(e,r,o){var n,s;if(null==e.V||e.u!=o||e.I!=r)for(e.I=r,e.qc=(1<<r)-1,e.u=o,s=1<<e.u+e.I,e.V=t(s),n=0;s>n;++n)e.V[n]=Sr({})}function Pr(e,r,t){return e.V[((r&e.qc)<<e.u)+((255&t)>>>8-e.u)]}function lr(e){var r,t;for(t=1<<e.u+e.I,r=0;t>r;++r)gt(e.V[r].Ib)}function vr(e,r){var t=1;do t=t<<1|vt(r,e.Ib,t);while(256>t);return t<<24>>24}function Br(e,r,t){var o,n,s=1;do if(n=t>>7&1,t<<=1,o=vt(r,e.Ib,(1+n<<8)+s),s=s<<1|o,n!=o){for(;256>s;)s=s<<1|vt(r,e.Ib,s);break}while(256>s);return s<<24>>24}function Sr(e){return e.Ib=t(768),e}function gr(e,r){var t,o,n,s;e.jb=r,n=e.a[r].r,o=e.a[r].j;do e.a[r].t&&(st(e.a[n]),e.a[n].r=n-1,e.a[r].Ac&&(e.a[n-1].t=0,e.a[n-1].r=e.a[r].r2,e.a[n-1].j=e.a[r].j2)),s=n,t=o,o=e.a[s].j,n=e.a[s].r,e.a[s].j=t,e.a[s].r=r,r=s;while(r>0);return e.mb=e.a[0].j,e.q=e.a[0].r}function kr(e){e.l=0,e.J=0;for(var r=0;4>r;++r)e.v[r]=0}function Rr(e,r,t,n){var i,u,f,m,d,p,P,l,v,B,S,g,k,R,M;if(r[0]=Gt,t[0]=Gt,n[0]=1,e.oc&&(e.b.cc=e.oc,G(e.b),e.W=1,e.oc=null),!e.pc){if(e.pc=1,R=e.g,_(e.g,Gt)){if(!F(e.b))return void Er(e,c(e.g));xr(e),k=c(e.g)&e.y,kt(e.d,e.C,(e.l<<4)+k,0),e.l=U(e.l),f=C(e.b,-e.s),rt(Xr(e.A,c(e.g),e.J),e.d,f),e.J=f,--e.s,e.g=o(e.g,Wt)}if(!F(e.b))return void Er(e,c(e.g));for(;;){if(P=Lr(e,c(e.g)),B=e.mb,k=c(e.g)&e.y,u=(e.l<<4)+k,1==P&&-1==B)kt(e.d,e.C,u,0),f=C(e.b,-e.s),M=Xr(e.A,c(e.g),e.J),7>e.l?rt(M,e.d,f):(v=C(e.b,-e.v[0]-1-e.s),tt(M,e.d,v,f)),e.J=f,e.l=U(e.l);else{if(kt(e.d,e.C,u,1),4>B){if(kt(e.d,e.bb,e.l,1),B?(kt(e.d,e.hb,e.l,1),1==B?kt(e.d,e.Ub,e.l,0):(kt(e.d,e.Ub,e.l,1),kt(e.d,e.vc,e.l,B-2))):(kt(e.d,e.hb,e.l,0),1==P?kt(e.d,e._,u,0):kt(e.d,e._,u,1)),1==P?e.l=7>e.l?9:11:(Kr(e.i,e.d,P-2,k),e.l=7>e.l?8:11),m=e.v[B],0!=B){for(p=B;p>=1;--p)e.v[p]=e.v[p-1];e.v[0]=m}}else{for(kt(e.d,e.bb,e.l,0),e.l=7>e.l?7:10,Kr(e.$,e.d,P-2,k),B-=4,g=Tr(B),l=Q(P),mt(e.K[l],e.d,g),g>=4&&(d=(g>>1)-1,i=(2|1&g)<<d,S=B-i,14>g?Pt(e.Sb,i-g-1,e.d,d,S):(Rt(e.d,S>>4,d-4),pt(e.S,e.d,15&S),++e.Qb)),m=B,p=3;p>=1;--p)e.v[p]=e.v[p-1];e.v[0]=m,++e.Mb}e.J=C(e.b,P-1-e.s)}if(e.s-=P,e.g=o(e.g,a(P)),!e.s){if(e.Mb>=128&&wr(e),e.Qb>=16&&br(e),r[0]=e.g,t[0]=Mt(e.d),!F(e.b))return void Er(e,c(e.g));if(s(h(e.g,R),[4096,0])>=0)return e.pc=0,void(n[0]=0)}}}}function Mr(e){var r,t;e.b||(r={},t=4,e.X||(t=2),Z(r,t),e.b=r),Ur(e.A,e.eb,e.fb),(e.ab!=e.wb||e.Hb!=e.n)&&(A(e.b,e.ab,4096,e.n,274),e.wb=e.ab,e.Hb=e.n)}function Dr(e){var r;for(e.v=t(4),e.a=[],e.d={},e.C=t(192),e.bb=t(12),e.hb=t(12),e.Ub=t(12),e.vc=t(12),e._=t(192),e.K=[],e.Sb=t(114),e.S=ft({},4),e.$=qr({}),e.i=qr({}),e.A={},e.m=[],e.P=[],e.lb=[],e.nc=t(16),e.x=t(4),e.Q=t(4),e.Xb=[Gt],e.uc=[Gt],e.Kc=[0],e.fc=t(5),e.yc=t(128),e.vb=0,e.X=1,e.D=0,e.Hb=-1,e.mb=0,r=0;4096>r;++r)e.a[r]={};for(r=0;4>r;++r)e.K[r]=ft({},6);return e}function br(e){for(var r=0;16>r;++r)e.nc[r]=ht(e.S,r);e.Qb=0}function wr(e){var r,t,o,n,s,i,_,a;for(n=4;128>n;++n)i=Tr(n),o=(i>>1)-1,r=(2|1&i)<<o,e.yc[n]=lt(e.Sb,r-i-1,o,n-r);for(s=0;4>s;++s){for(t=e.K[s],_=s<<6,i=0;e.$b>i;++i)e.P[_+i]=dt(t,i);for(i=14;e.$b>i;++i)e.P[_+i]+=(i>>1)-1-4<<6;for(a=128*s,n=0;4>n;++n)e.lb[a+n]=e.P[_+n];for(;128>n;++n)e.lb[a+n]=e.P[_+Tr(n)]+e.yc[n]}e.Mb=0}function Er(e,r){Nr(e),Wr(e,r&e.y);for(var t=0;5>t;++t)bt(e.d)}function Lr(e,r){var t,o,n,s,i,_,a,c,u,f,m,d,p,h,P,l,v,B,S,g,k,R,M,D,b,w,E,L,y,I,x,N,O,A,H,G,W,T,Z,Y,V,j,$,K,q,J,Q,X,er,rr;if(e.jb!=e.q)return p=e.a[e.q].r-e.q,e.mb=e.a[e.q].j,e.q=e.a[e.q].r,p;if(e.q=e.jb=0,e.N?(d=e.vb,e.N=0):d=xr(e),E=e.D,b=F(e.b)+1,2>b)return e.mb=-1,1;for(b>273&&(b=273),Y=0,u=0;4>u;++u)e.x[u]=e.v[u],e.Q[u]=z(e.b,-1,e.x[u],273),e.Q[u]>e.Q[Y]&&(Y=u);if(e.Q[Y]>=e.n)return e.mb=Y,p=e.Q[Y],Ir(e,p-1),p;if(d>=e.n)return e.mb=e.m[E-1]+4,Ir(e,d-1),d;if(a=C(e.b,-1),v=C(e.b,-e.v[0]-1-1),2>d&&a!=v&&2>e.Q[Y])return e.mb=-1,1;if(e.a[0].Hc=e.l,A=r&e.y,e.a[1].z=Yt[e.C[(e.l<<4)+A]>>>2]+nt(Xr(e.A,r,e.J),e.l>=7,v,a),st(e.a[1]),B=Yt[2048-e.C[(e.l<<4)+A]>>>2],Z=B+Yt[2048-e.bb[e.l]>>>2],v==a&&(V=Z+zr(e,e.l,A),e.a[1].z>V&&(e.a[1].z=V,it(e.a[1]))),m=d>=e.Q[Y]?d:e.Q[Y],2>m)return e.mb=e.a[1].j,1;e.a[1].r=0,e.a[0].bc=e.x[0],e.a[0].ac=e.x[1],e.a[0].dc=e.x[2],e.a[0].lc=e.x[3],f=m;do e.a[f--].z=268435455;while(f>=2);for(u=0;4>u;++u)if(T=e.Q[u],!(2>T)){G=Z+Cr(e,u,e.l,A);do s=G+Jr(e.i,T-2,A),x=e.a[T],x.z>s&&(x.z=s,x.r=0,x.j=u,x.t=0);while(--T>=2)}if(D=B+Yt[e.bb[e.l]>>>2],f=e.Q[0]>=2?e.Q[0]+1:2,d>=f){for(L=0;f>e.m[L];)L+=2;for(;c=e.m[L+1],s=D+yr(e,c,f,A),x=e.a[f],x.z>s&&(x.z=s,x.r=0,x.j=c+4,x.t=0),f!=e.m[L]||(L+=2,L!=E);++f);}for(t=0;;){if(++t,t==m)return gr(e,t);if(S=xr(e),E=e.D,S>=e.n)return e.vb=S,e.N=1,gr(e,t);if(++r,O=e.a[t].r,e.a[t].t?(--O,e.a[t].Ac?($=e.a[e.a[t].r2].Hc,$=4>e.a[t].j2?7>$?8:11:7>$?7:10):$=e.a[O].Hc,$=U($)):$=e.a[O].Hc,O==t-1?$=e.a[t].j?U($):7>$?9:11:(e.a[t].t&&e.a[t].Ac?(O=e.a[t].r2,N=e.a[t].j2,$=7>$?8:11):(N=e.a[t].j,$=4>N?7>$?8:11:7>$?7:10),I=e.a[O],4>N?N?1==N?(e.x[0]=I.ac,e.x[1]=I.bc,e.x[2]=I.dc,e.x[3]=I.lc):2==N?(e.x[0]=I.dc,e.x[1]=I.bc,e.x[2]=I.ac,e.x[3]=I.lc):(e.x[0]=I.lc,e.x[1]=I.bc,e.x[2]=I.ac,e.x[3]=I.dc):(e.x[0]=I.bc,e.x[1]=I.ac,e.x[2]=I.dc,e.x[3]=I.lc):(e.x[0]=N-4,e.x[1]=I.bc,e.x[2]=I.ac,e.x[3]=I.dc)),e.a[t].Hc=$,e.a[t].bc=e.x[0],e.a[t].ac=e.x[1],e.a[t].dc=e.x[2],e.a[t].lc=e.x[3],_=e.a[t].z,a=C(e.b,-1),v=C(e.b,-e.x[0]-1-1),A=r&e.y,o=_+Yt[e.C[($<<4)+A]>>>2]+nt(Xr(e.A,r,C(e.b,-2)),$>=7,v,a),R=e.a[t+1],g=0,R.z>o&&(R.z=o,R.r=t,R.j=-1,R.t=0,g=1),B=_+Yt[2048-e.C[($<<4)+A]>>>2],Z=B+Yt[2048-e.bb[$]>>>2],v!=a||t>R.r&&!R.j||(V=Z+(Yt[e.hb[$]>>>2]+Yt[e._[($<<4)+A]>>>2]),R.z>=V&&(R.z=V,R.r=t,R.j=0,R.t=0,g=1)),w=F(e.b)+1,w=w>4095-t?4095-t:w,b=w,!(2>b)){if(b>e.n&&(b=e.n),!g&&v!=a&&(q=Math.min(w-1,e.n),P=z(e.b,0,e.x[0],q),P>=2)){for(K=U($),H=r+1&e.y,M=o+Yt[2048-e.C[(K<<4)+H]>>>2]+Yt[2048-e.bb[K]>>>2],y=t+1+P;y>m;)e.a[++m].z=268435455;s=M+(J=Jr(e.i,P-2,H),J+Cr(e,0,K,H)),x=e.a[y],x.z>s&&(x.z=s,x.r=t+1,x.j=0,x.t=1,x.Ac=0)}for(j=2,W=0;4>W;++W)if(h=z(e.b,-1,e.x[W],b),!(2>h)){l=h;do{for(;t+h>m;)e.a[++m].z=268435455;s=Z+(Q=Jr(e.i,h-2,A),Q+Cr(e,W,$,A)),x=e.a[t+h],x.z>s&&(x.z=s,x.r=t,x.j=W,x.t=0)}while(--h>=2);if(h=l,W||(j=h+1),w>h&&(q=Math.min(w-1-h,e.n),P=z(e.b,h,e.x[W],q),P>=2)){for(K=7>$?8:11,H=r+h&e.y,n=Z+(X=Jr(e.i,h-2,A),X+Cr(e,W,$,A))+Yt[e.C[(K<<4)+H]>>>2]+nt(Xr(e.A,r+h,C(e.b,h-1-1)),1,C(e.b,h-1-(e.x[W]+1)),C(e.b,h-1)),K=U(K),H=r+h+1&e.y,k=n+Yt[2048-e.C[(K<<4)+H]>>>2],M=k+Yt[2048-e.bb[K]>>>2],y=h+1+P;t+y>m;)e.a[++m].z=268435455;s=M+(er=Jr(e.i,P-2,H),er+Cr(e,0,K,H)),x=e.a[t+y],x.z>s&&(x.z=s,x.r=t+h+1,x.j=0,x.t=1,x.Ac=1,x.r2=t,x.j2=W)}}if(S>b){for(S=b,E=0;S>e.m[E];E+=2);e.m[E]=S,E+=2}if(S>=j){for(D=B+Yt[e.bb[$]>>>2];t+S>m;)e.a[++m].z=268435455;for(L=0;j>e.m[L];)L+=2;for(h=j;;++h)if(i=e.m[L+1],s=D+yr(e,i,h,A),x=e.a[t+h],x.z>s&&(x.z=s,x.r=t,x.j=i+4,x.t=0),h==e.m[L]){if(w>h&&(q=Math.min(w-1-h,e.n),P=z(e.b,h,i,q),P>=2)){for(K=7>$?7:10,H=r+h&e.y,n=s+Yt[e.C[(K<<4)+H]>>>2]+nt(Xr(e.A,r+h,C(e.b,h-1-1)),1,C(e.b,h-(i+1)-1),C(e.b,h-1)),K=U(K),H=r+h+1&e.y,k=n+Yt[2048-e.C[(K<<4)+H]>>>2],M=k+Yt[2048-e.bb[K]>>>2],y=h+1+P;t+y>m;)e.a[++m].z=268435455;s=M+(rr=Jr(e.i,P-2,H),rr+Cr(e,0,K,H)),x=e.a[t+y],x.z>s&&(x.z=s,x.r=t+h+1,x.j=0,x.t=1,x.Ac=1,x.r2=t,x.j2=i+4)}if(L+=2,L==E)break}}}}}function yr(e,r,t,o){var n,s=Q(t);return n=128>r?e.lb[128*s+r]:e.P[(s<<6)+Zr(r)]+e.nc[15&r],n+Jr(e.$,t-2,o)}function Cr(e,r,t,o){var n;return r?(n=Yt[2048-e.hb[t]>>>2],1==r?n+=Yt[e.Ub[t]>>>2]:(n+=Yt[2048-e.Ub[t]>>>2],n+=wt(e.vc[t],r-2))):(n=Yt[e.hb[t]>>>2],n+=Yt[2048-e._[(t<<4)+o]>>>2]),n}function zr(e,r,t){return Yt[e.hb[r]>>>2]+Yt[e._[(r<<4)+t]>>>2]}function Fr(e){kr(e),Dt(e.d),gt(e.C),gt(e._),gt(e.bb),gt(e.hb),gt(e.Ub),gt(e.vc),gt(e.Sb),et(e.A);for(var r=0;4>r;++r)gt(e.K[r].G);jr(e.$,1<<e.Y),jr(e.i,1<<e.Y),gt(e.S.G),e.N=0,e.jb=0,e.q=0,e.s=0}function Ir(e,r){r>0&&(Y(e.b,r),e.s+=r)}function xr(e){var r=0;return e.D=H(e.b,e.m),e.D>0&&(r=e.m[e.D-2],r==e.n&&(r+=z(e.b,r-1,e.m[e.D-1],273-r))),++e.s,r}function Nr(e){e.b&&e.W&&(e.b.cc=null,e.W=0)}function Or(e){Nr(e),e.d.Ab=null}function Ar(e,r){e.ab=r;for(var t=0;r>1<<t;++t);e.$b=2*t}function Hr(e,r){var t=e.X;e.X=r,e.b&&t!=e.X&&(e.wb=-1,e.b=null)}function Gr(e,r){e.fc[0]=9*(5*e.Y+e.eb)+e.fb<<24>>24;for(var t=0;4>t;++t)e.fc[1+t]=e.ab>>8*t<<24>>24;k(r,e.fc,0,5)}function Wr(e,r){if(e.Gc){kt(e.d,e.C,(e.l<<4)+r,1),kt(e.d,e.bb,e.l,0),e.l=7>e.l?7:10,Kr(e.$,e.d,0,r);var t=Q(2);mt(e.K[t],e.d,63),Rt(e.d,67108863,26),pt(e.S,e.d,15)}}function Tr(e){return 2048>e?Zt[e]:2097152>e?Zt[e>>10]+20:Zt[e>>20]+40}function Zr(e){return 131072>e?Zt[e>>6]+12:134217728>e?Zt[e>>16]+32:Zt[e>>26]+52}function Yr(e,r,t,o){8>t?(kt(r,e.db,0,0),mt(e.Vb[o],r,t)):(t-=8,kt(r,e.db,0,1),8>t?(kt(r,e.db,1,0),mt(e.Wb[o],r,t)):(kt(r,e.db,1,1),mt(e.ic,r,t-8)))}function Vr(e){e.db=t(2),e.Vb=t(16),e.Wb=t(16),e.ic=ft({},8);for(var r=0;16>r;++r)e.Vb[r]=ft({},3),e.Wb[r]=ft({},3);return e}function jr(e,r){gt(e.db);for(var t=0;r>t;++t)gt(e.Vb[t].G),gt(e.Wb[t].G);gt(e.ic.G)}function $r(e,r,t,o,n){var s,i,_,a,c;for(s=Yt[e.db[0]>>>2],i=Yt[2048-e.db[0]>>>2],_=i+Yt[e.db[1]>>>2],a=i+Yt[2048-e.db[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;o[n+c]=s+dt(e.Vb[r],c)}for(;16>c;++c){if(c>=t)return;o[n+c]=_+dt(e.Wb[r],c-8)}for(;t>c;++c)o[n+c]=a+dt(e.ic,c-8-8)}function Kr(e,r,t,o){Yr(e,r,t,o),0==--e.sc[o]&&($r(e,o,e.rb,e.Cc,272*o),e.sc[o]=e.rb)}function qr(e){return Vr(e),e.Cc=[],e.sc=[],e}function Jr(e,r,t){return e.Cc[272*t+r]}function Qr(e,r){for(var t=0;r>t;++t)$r(e,t,e.rb,e.Cc,272*t),e.sc[t]=e.rb}function Ur(e,r,o){var n,s;if(null==e.V||e.u!=o||e.I!=r)for(e.I=r,e.qc=(1<<r)-1,e.u=o,s=1<<e.u+e.I,e.V=t(s),n=0;s>n;++n)e.V[n]=ot({})}function Xr(e,r,t){return e.V[((r&e.qc)<<e.u)+((255&t)>>>8-e.u)]}function et(e){var r,t=1<<e.u+e.I;for(r=0;t>r;++r)gt(e.V[r].tb)}function rt(e,r,t){var o,n,s=1;for(n=7;n>=0;--n)o=t>>n&1,kt(r,e.tb,s,o),s=s<<1|o}function tt(e,r,t,o){var n,s,i,_,a=1,c=1;for(s=7;s>=0;--s)n=o>>s&1,_=c,a&&(i=t>>s&1,_+=1+i<<8,a=i==n),kt(r,e.tb,_,n),c=c<<1|n}function ot(e){return e.tb=t(768),e}function nt(e,r,t,o){var n,s,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(s=t>>_&1,n=o>>_&1,a+=wt(e.tb[(1+s<<8)+i],n),i=i<<1|n,s!=n){--_;break}for(;_>=0;--_)n=o>>_&1,a+=wt(e.tb[i],n),i=i<<1|n;return a}function st(e){e.j=-1,e.t=0}function it(e){e.j=0,e.t=0}function _t(e,r){return e.F=r,e.G=t(1<<r),e}function at(e,r){var t,o=1;for(t=e.F;0!=t;--t)o=(o<<1)+vt(r,e.G,o);return o-(1<<e.F)}function ct(e,r){var t,o,n=1,s=0;for(o=0;e.F>o;++o)t=vt(r,e.G,n),n<<=1,n+=t,s|=t<<o;return s}function ut(e,r,t,o){var n,s,i=1,_=0;for(s=0;o>s;++s)n=vt(t,e,r+i),i<<=1,i+=n,_|=n<<s;return _}function ft(e,r){return e.F=r,e.G=t(1<<r),e}function mt(e,r,t){var o,n,s=1;for(n=e.F;0!=n;)--n,o=t>>>n&1,kt(r,e.G,s,o),s=s<<1|o}function dt(e,r){var t,o,n=1,s=0;for(o=e.F;0!=o;)--o,t=r>>>o&1,s+=wt(e.G[n],t),n=(n<<1)+t;return s}function pt(e,r,t){var o,n,s=1;for(n=0;e.F>n;++n)o=1&t,kt(r,e.G,s,o),s=s<<1|o,t>>=1}function ht(e,r){var t,o,n=1,s=0;for(o=e.F;0!=o;--o)t=1&r,r>>>=1,s+=wt(e.G[n],t),n=n<<1|t;return s}function Pt(e,r,t,o,n){var s,i,_=1;for(i=0;o>i;++i)s=1&n,kt(t,e,r+_,s),_=_<<1|s,n>>=1}function lt(e,r,t,o){var n,s,i=1,_=0;for(s=t;0!=s;--s)n=1&o,o>>>=1,_+=Yt[(2047&(e[r+i]-n^-n))>>>2],i=i<<1|n;return _}function vt(e,r,t){var o,n=r[t];return o=(e.E>>>11)*n,(-2147483648^o)>(-2147483648^e.Bb)?(e.E=o,r[t]=n+(2048-n>>>5)<<16>>16,-16777216&e.E||(e.Bb=e.Bb<<8|l(e.Ab),e.E<<=8),0):(e.E-=o,e.Bb-=o,r[t]=n-(n>>>5)<<16>>16,-16777216&e.E||(e.Bb=e.Bb<<8|l(e.Ab),e.E<<=8),1)}function Bt(e,r){var t,o,n=0;for(t=r;0!=t;--t)e.E>>>=1,o=e.Bb-e.E>>>31,e.Bb-=e.E&o-1,n=n<<1|1-o,-16777216&e.E||(e.Bb=e.Bb<<8|l(e.Ab),e.E<<=8);return n}function St(e){e.Bb=0,e.E=-1;for(var r=0;5>r;++r)e.Bb=e.Bb<<8|l(e.Ab)}function gt(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function kt(e,r,t,s){var i,_=r[t];i=(e.E>>>11)*_,s?(e.xc=o(e.xc,n(a(i),[4294967295,0])),e.E-=i,r[t]=_-(_>>>5)<<16>>16):(e.E=i,r[t]=_+(2048-_>>>5)<<16>>16),-16777216&e.E||(e.E<<=8,bt(e))}function Rt(e,r,t){for(var n=t-1;n>=0;--n)e.E>>>=1,1==(r>>>n&1)&&(e.xc=o(e.xc,a(e.E))),-16777216&e.E||(e.E<<=8,bt(e))}function Mt(e){return o(o(a(e.Jb),e.mc),[4,0])}function Dt(e){e.mc=Gt,e.xc=Gt,e.E=-1,e.Jb=1,e.Oc=0}function bt(e){var r,t=c(p(e.xc,32));if(0!=t||s(e.xc,[4278190080,0])<0){e.mc=o(e.mc,a(e.Jb)),r=e.Oc;do g(e.Ab,r+t),r=255;while(0!=--e.Jb);e.Oc=c(e.xc)>>>24}++e.Jb,e.xc=m(n(e.xc,[16777215,0]),8)}function wt(e,r){return Yt[(2047&(e-r^-r))>>>2]}function Et(e){for(var r,t,o,n=0,s=0,i=e.length,_=[],a=[];i>n;++n,++s){if(r=255&e[n],128&r)if(192==(224&r)){if(n+1>=i)return e;if(t=255&e[++n],128!=(192&t))return e;a[s]=(31&r)<<6|63&t}else{if(224!=(240&r))return e;
if(n+2>=i)return e;if(t=255&e[++n],128!=(192&t))return e;if(o=255&e[++n],128!=(192&o))return e;a[s]=(15&r)<<12|(63&t)<<6|63&o}else{if(!r)return e;a[s]=r}16383==s&&(_.push(String.fromCharCode.apply(String,a)),s=-1)}return s>0&&(a.length=s,_.push(String.fromCharCode.apply(String,a))),_.join("")}function Lt(e){var r,t,o,n=[],s=0,i=e.length;if("object"==typeof e)return e;for(R(e,0,i,n,0),o=0;i>o;++o)r=n[o],r>=1&&127>=r?++s:s+=!r||r>=128&&2047>=r?2:3;for(t=[],s=0,o=0;i>o;++o)r=n[o],r>=1&&127>=r?t[s++]=r<<24>>24:!r||r>=128&&2047>=r?(t[s++]=(192|r>>6&31)<<24>>24,t[s++]=(128|63&r)<<24>>24):(t[s++]=(224|r>>12&15)<<24>>24,t[s++]=(128|r>>6&63)<<24>>24,t[s++]=(128|63&r)<<24>>24);return t}function yt(e){return e[1]+e[0]}function Ct(e,t,o,n){function s(){try{for(var e,r=(new Date).getTime();rr(a.c.yb);)if(i=yt(a.c.yb.Pb)/yt(a.c.Tb),(new Date).getTime()-r>200)return n(i),Nt(s,0),0;n(1),e=S(a.c.Nb),Nt(o.bind(null,e),0)}catch(t){o(null,t)}}var i,_,a={},c=void 0===o&&void 0===n;if("function"!=typeof o&&(_=o,o=n=0),n=n||function(e){return void 0!==_?r(e,_):void 0},o=o||function(e,r){return void 0!==_?postMessage({action:Ft,cbn:_,result:e,error:r}):void 0},c){for(a.c=w({},Lt(e),Vt(t));rr(a.c.yb););return S(a.c.Nb)}try{a.c=w({},Lt(e),Vt(t)),n(0)}catch(u){return o(null,u)}Nt(s,0)}function zt(e,t,o){function n(){try{for(var e,r=0,i=(new Date).getTime();rr(c.d.yb);)if(++r%1e3==0&&(new Date).getTime()-i>200)return _&&(s=yt(c.d.yb.Z.g)/a,o(s)),Nt(n,0),0;o(1),e=Et(S(c.d.Nb)),Nt(t.bind(null,e),0)}catch(u){t(null,u)}}var s,i,_,a,c={},u=void 0===t&&void 0===o;if("function"!=typeof t&&(i=t,t=o=0),o=o||function(e){return void 0!==i?r(_?e:-1,i):void 0},t=t||function(e,r){return void 0!==i?postMessage({action:It,cbn:i,result:e,error:r}):void 0},u){for(c.d=L({},e);rr(c.d.yb););return Et(S(c.d.Nb))}try{c.d=L({},e),a=yt(c.d.Tb),_=a>-1,o(0)}catch(f){return t(null,f)}Nt(n,0)}var Ft=1,It=2,xt=3,Nt="function"==typeof setImmediate?setImmediate:setTimeout,Ot=4294967296,At=[4294967295,-Ot],Ht=[0,-0x8000000000000000],Gt=[0,0],Wt=[1,0],Tt=function(){var e,r,t,o=[];for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;o[e]=t}return o}(),Zt=function(){var e,r,t,o=2,n=[0,1];for(t=2;22>t;++t)for(r=1<<(t>>1)-1,e=0;r>e;++e,++o)n[o]=t<<24>>24;return n}(),Yt=function(){var e,r,t,o,n=[];for(r=8;r>=0;--r)for(o=1<<9-r-1,e=1<<9-r,t=o;e>t;++t)n[t]=(r<<6)+(e-t<<6>>>9-r-1);return n}(),Vt=function(){var e=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.gc&&(r.gc.action==It?e.decompress(r.gc.gc,r.gc.cbn):r.gc.action==Ft&&e.compress(r.gc.gc,r.gc.Rc,r.gc.cbn))}}(),{compress:Ct,decompress:zt}}();this.LZMA=this.LZMA_WORKER=e;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/// <reference path="../localtypings/mscc" />
var pxt;
(function (pxt) {
})(pxt || (pxt = {}));
(function (pxt) {
    var analytics;
    (function (analytics) {
        function enable() {
            if (!pxt.aiTrackException || !pxt.aiTrackEvent)
                return;
            pxt.debug('setting up app insights');
            var te = pxt.tickEvent;
            pxt.tickEvent = function (id, data, opts) {
                if (te)
                    te(id, data, opts);
                if (opts && opts.interactiveConsent && typeof mscc !== "undefined" && !mscc.hasConsent()) {
                    mscc.setConsent();
                }
                if (!data)
                    pxt.aiTrackEvent(id);
                else {
                    var props = {};
                    var measures = {};
                    for (var k in data)
                        if (typeof data[k] == "string")
                            props[k] = data[k];
                        else
                            measures[k] = data[k];
                    pxt.aiTrackEvent(id, props, measures);
                }
            };
            var rexp = pxt.reportException;
            pxt.reportException = function (err, data) {
                if (rexp)
                    rexp(err, data);
                var props = {
                    target: pxt.appTarget.id,
                    version: pxt.appTarget.versions.target
                };
                if (data)
                    pxt.Util.jsonMergeFrom(props, data);
                pxt.aiTrackException(err, 'exception', props);
            };
            var re = pxt.reportError;
            pxt.reportError = function (cat, msg, data) {
                if (re)
                    re(cat, msg, data);
                try {
                    throw msg;
                }
                catch (err) {
                    var props = {
                        target: pxt.appTarget.id,
                        version: pxt.appTarget.versions.target,
                        category: cat,
                        message: msg
                    };
                    if (data)
                        pxt.Util.jsonMergeFrom(props, data);
                    pxt.aiTrackException(err, 'error', props);
                }
            };
        }
        analytics.enable = enable;
        function isCookieBannerVisible() {
            return typeof mscc !== "undefined" && !mscc.hasConsent();
        }
        analytics.isCookieBannerVisible = isCookieBannerVisible;
        function enableCookies() {
            if (isCookieBannerVisible()) {
                mscc.setConsent();
            }
        }
        analytics.enableCookies = enableCookies;
    })(analytics = pxt.analytics || (pxt.analytics = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
})(pxt || (pxt = {}));
// Needs to be in its own file to avoid a circular dependency: util.ts -> main.ts -> util.ts
var pxt;
(function (pxt) {
    /**
     * Track an event.
     */
    pxt.tickEvent = function (id) { };
})(pxt || (pxt = {}));
/// <reference path="./tickEvent.ts" />
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        pxtc.__dummy = 42;
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxtc = ts.pxtc;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var Util;
        (function (Util) {
            function assert(cond, msg) {
                if (msg === void 0) { msg = "Assertion failed"; }
                if (!cond) {
                    debugger;
                    throw new Error(msg);
                }
            }
            Util.assert = assert;
            function flatClone(obj) {
                if (obj == null)
                    return null;
                var r = {};
                Object.keys(obj).forEach(function (k) { r[k] = obj[k]; });
                return r;
            }
            Util.flatClone = flatClone;
            function clone(v) {
                if (v == null)
                    return null;
                return JSON.parse(JSON.stringify(v));
            }
            Util.clone = clone;
            function htmlEscape(_input) {
                if (!_input)
                    return _input; // null, undefined, empty string test
                return _input.replace(/([^\w .!?\-$])/g, function (c) { return "&#" + c.charCodeAt(0) + ";"; });
            }
            Util.htmlEscape = htmlEscape;
            function jsStringQuote(s) {
                return s.replace(/[^\w .!?\-$]/g, function (c) {
                    var h = c.charCodeAt(0).toString(16);
                    return "\\u" + "0000".substr(0, 4 - h.length) + h;
                });
            }
            Util.jsStringQuote = jsStringQuote;
            function jsStringLiteral(s) {
                return "\"" + jsStringQuote(s) + "\"";
            }
            Util.jsStringLiteral = jsStringLiteral;
            // Localization functions. Please port any modifications over to pxtsim/localization.ts
            var _localizeLang = "en";
            var _localizeStrings = {};
            var _translationsCache = {};
            var _didSetlocalizations = false;
            var _didReportLocalizationsNotSet = false;
            Util.localizeLive = false;
            var MemTranslationDb = /** @class */ (function () {
                function MemTranslationDb() {
                    this.translations = {};
                }
                MemTranslationDb.prototype.key = function (lang, filename, branch) {
                    return lang + "|" + filename + "|" + (branch || "");
                };
                MemTranslationDb.prototype.getAsync = function (lang, filename, branch) {
                    return Promise.resolve(this.translations[this.key(lang, filename, branch)]);
                };
                MemTranslationDb.prototype.setAsync = function (lang, filename, branch, etag, strings) {
                    this.translations[this.key(lang, filename, branch)] = {
                        etag: etag,
                        strings: strings,
                        cached: true
                    };
                    return Promise.resolve();
                };
                return MemTranslationDb;
            }());
            // wired up in the app to store translations in pouchdb. MAY BE UNDEFINED!
            Util.translationDb = new MemTranslationDb();
            /**
             * Returns the current user language, prepended by "live-" if in live mode
             */
            function localeInfo() {
                return "" + (Util.localizeLive ? "live-" : "") + userLanguage();
            }
            Util.localeInfo = localeInfo;
            /**
             * Returns current user language iSO-code. Default is `en`.
             */
            function userLanguage() {
                return _localizeLang;
            }
            Util.userLanguage = userLanguage;
            function setUserLanguage(localizeLang) {
                _localizeLang = localizeLang;
            }
            Util.setUserLanguage = setUserLanguage;
            function isUserLanguageRtl() {
                // ar: Arabic
                // dv: Divehi
                // fa: Farsi
                // ha: Hausa
                // he: Hebrew
                // ks: Kashmiri
                // ku: Kurdish
                // ps: Pashto
                // ur: Urdu
                // yi: Yiddish
                return /^ar|dv|fa|ha|he|ks|ku|ps|ur|yi/i.test(_localizeLang);
            }
            Util.isUserLanguageRtl = isUserLanguageRtl;
            function _localize(s) {
                // Needs to be test in localhost / CLI
                /*if (!_didSetlocalizations && !_didReportLocalizationsNotSet) {
                    _didReportLocalizationsNotSet = true;
                    pxt.tickEvent("locale.localizationsnotset");
                    // pxt.reportError can't be used here because of order of file imports
                    // Just use console.error instead, and use an Error so stacktrace is reported
                    console.error(new Error("Attempted to translate a string before localizations were set"));
                }*/
                return _localizeStrings[s] || s;
            }
            Util._localize = _localize;
            function getLocalizedStrings() {
                return _localizeStrings;
            }
            Util.getLocalizedStrings = getLocalizedStrings;
            function setLocalizedStrings(strs) {
                _didSetlocalizations = true;
                _localizeStrings = strs;
            }
            Util.setLocalizedStrings = setLocalizedStrings;
            function translationsCache() {
                return _translationsCache;
            }
            Util.translationsCache = translationsCache;
            function fmt_va(f, args) {
                if (args.length == 0)
                    return f;
                return f.replace(/\{([0-9]+)(\:[^\}]+)?\}/g, function (s, n, spec) {
                    var v = args[parseInt(n)];
                    var r = "";
                    var fmtMatch = /^:f(\d*)\.(\d+)/.exec(spec);
                    if (fmtMatch) {
                        var precision = parseInt(fmtMatch[2]);
                        var len = parseInt(fmtMatch[1]) || 0;
                        var fillChar = /^0/.test(fmtMatch[1]) ? "0" : " ";
                        var num = v.toFixed(precision);
                        if (len > 0 && precision > 0)
                            len += precision + 1;
                        if (len > 0) {
                            while (num.length < len) {
                                num = fillChar + num;
                            }
                        }
                        r = num;
                    }
                    else if (spec == ":x") {
                        r = "0x" + v.toString(16);
                    }
                    else if (v === undefined)
                        r = "(undef)";
                    else if (v === null)
                        r = "(null)";
                    else if (v.toString)
                        r = v.toString();
                    else
                        r = v + "";
                    if (spec == ":a") {
                        if (/^\s*[euioah]/.test(r.toLowerCase()))
                            r = "an " + r;
                        else if (/^\s*[bcdfgjklmnpqrstvwxz]/.test(r.toLowerCase()))
                            r = "a " + r;
                    }
                    else if (spec == ":s") {
                        if (v == 1)
                            r = "";
                        else
                            r = "s";
                    }
                    else if (spec == ":q") {
                        r = Util.htmlEscape(r);
                    }
                    else if (spec == ":jq") {
                        r = Util.jsStringQuote(r);
                    }
                    else if (spec == ":uri") {
                        r = encodeURIComponent(r).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    else if (spec == ":url") {
                        r = encodeURI(r).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    else if (spec == ":%") {
                        r = (v * 100).toFixed(1).toString() + '%';
                    }
                    return r;
                });
            }
            Util.fmt_va = fmt_va;
            function fmt(f) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return fmt_va(f, args);
            }
            Util.fmt = fmt;
            var locStats = {};
            function dumpLocStats() {
                var r = {};
                Object.keys(locStats).sort(function (a, b) { return locStats[b] - locStats[a]; })
                    .forEach(function (k) { return r[k] = k; });
                console.log('prioritized list of strings:');
                console.log(JSON.stringify(r, null, 2));
            }
            Util.dumpLocStats = dumpLocStats;
            var sForPlural = true;
            function lf_va(format, args) {
                locStats[format] = (locStats[format] || 0) + 1;
                var lfmt = Util._localize(format);
                if (!sForPlural && lfmt != format && /\d:s\}/.test(lfmt)) {
                    lfmt = lfmt.replace(/\{\d+:s\}/g, "");
                }
                lfmt = lfmt.replace(/\{(id|loc):[^\}]+\}/g, '');
                return fmt_va(lfmt, args);
            }
            Util.lf_va = lf_va;
            function lf(format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return lf_va(format, args);
            }
            Util.lf = lf;
            /**
             * Similar to lf but the string do not get extracted into the loc file.
             */
            function rlf(format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return lf_va(format, args);
            }
            Util.rlf = rlf;
            function lookup(m, key) {
                if (m.hasOwnProperty(key))
                    return m[key];
                return null;
            }
            Util.lookup = lookup;
            function isoTime(time) {
                var d = new Date(time * 1000);
                return Util.fmt("{0}-{1:f02.0}-{2:f02.0} {3:f02.0}:{4:f02.0}:{5:f02.0}", d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
            }
            Util.isoTime = isoTime;
            function userError(msg) {
                var e = new Error(msg);
                e.isUserError = true;
                throw e;
            }
            Util.userError = userError;
        })(Util = pxtc.Util || (pxtc.Util = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var lf = ts.pxtc.Util.lf;
/// <reference path="tickEvent.ts" />
/// <reference path="apptarget.ts"/>
/// <reference path="commonutil.ts"/>
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        /**
         * atob replacement
         * @param s
         */
        pxtc.decodeBase64 = function (s) { return atob(s); };
        /**
         * bota replacement
         * @param s
         */
        pxtc.encodeBase64 = function (s) { return btoa(s); };
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var Util;
        (function (Util) {
            function bufferSerial(buffers, data, source, maxBufLen) {
                if (data === void 0) { data = ""; }
                if (source === void 0) { source = "?"; }
                if (maxBufLen === void 0) { maxBufLen = 255; }
                for (var i = 0; i < data.length; ++i) {
                    var char = data[i];
                    buffers[source] = (buffers[source] || "") + char;
                    if (char === "\n" || buffers[source].length > maxBufLen) {
                        var buffer = buffers[source];
                        buffers[source] = "";
                        window.postMessage({
                            type: "serial",
                            id: source,
                            data: buffer
                        }, "*");
                    }
                }
            }
            Util.bufferSerial = bufferSerial;
            function fileReadAsBufferAsync(f) {
                if (!f)
                    return Promise.resolve(null);
                else {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = function (ev) { return resolve(null); };
                        reader.onload = function (ev) { return resolve(new Uint8Array(reader.result)); };
                        reader.readAsArrayBuffer(f);
                    });
                }
            }
            Util.fileReadAsBufferAsync = fileReadAsBufferAsync;
            function fileReadAsTextAsync(f) {
                if (!f)
                    return Promise.resolve(null);
                else {
                    return new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.onerror = function (ev) { return resolve(null); };
                        reader.onload = function (ev) { return resolve(reader.result); };
                        reader.readAsText(f);
                    });
                }
            }
            Util.fileReadAsTextAsync = fileReadAsTextAsync;
            function repeatMap(n, fn) {
                n = n || 0;
                var r = [];
                for (var i = 0; i < n; ++i)
                    r.push(fn(i));
                return r;
            }
            Util.repeatMap = repeatMap;
            function listsEqual(a, b) {
                if (!a || !b || a.length !== b.length) {
                    return false;
                }
                for (var i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        return false;
                    }
                }
                return true;
            }
            Util.listsEqual = listsEqual;
            function oops(msg) {
                if (msg === void 0) { msg = "OOPS"; }
                debugger;
                throw new Error(msg);
            }
            Util.oops = oops;
            function reversed(arr) {
                arr = arr.slice(0);
                arr.reverse();
                return arr;
            }
            Util.reversed = reversed;
            function iterMap(m, f) {
                Object.keys(m).forEach(function (k) { return f(k, m[k]); });
            }
            Util.iterMap = iterMap;
            function mapMap(m, f) {
                var r = {};
                Object.keys(m).forEach(function (k) { return r[k] = f(k, m[k]); });
                return r;
            }
            Util.mapMap = mapMap;
            function mapStringMapAsync(m, f) {
                var r = {};
                return Promise.all(Object.keys(m).map(function (k) { return f(k, m[k]).then(function (v) { return r[k] = v; }); }))
                    .then(function () { return r; });
            }
            Util.mapStringMapAsync = mapStringMapAsync;
            function values(m) {
                return Object.keys(m || {}).map(function (k) { return m[k]; });
            }
            Util.values = values;
            function pushRange(trg, src) {
                for (var i = 0; i < src.length; ++i)
                    trg.push(src[i]);
            }
            Util.pushRange = pushRange;
            function concat(arrays) {
                var r = [];
                for (var i = 0; i < arrays.length; ++i) {
                    pushRange(r, arrays[i]);
                }
                return r;
            }
            Util.concat = concat;
            function isKV(v) {
                return !!v && typeof v === "object" && !Array.isArray(v);
            }
            function memcpy(trg, trgOff, src, srcOff, len) {
                if (srcOff === void 0)
                    srcOff = 0;
                if (len === void 0)
                    len = src.length - srcOff;
                for (var i = 0; i < len; ++i)
                    trg[trgOff + i] = src[srcOff + i];
            }
            Util.memcpy = memcpy;
            function uint8ArrayConcat(chunks) {
                var numbytes = 0;
                for (var _i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
                    var c = chunks_1[_i];
                    numbytes += c.length;
                }
                var r = new Uint8Array(numbytes);
                var ptr = 0;
                for (var _a = 0, chunks_2 = chunks; _a < chunks_2.length; _a++) {
                    var c = chunks_2[_a];
                    memcpy(r, ptr, c);
                    ptr += c.length;
                }
                return r;
            }
            Util.uint8ArrayConcat = uint8ArrayConcat;
            function jsonMergeFrom(trg, src) {
                if (!src)
                    return;
                Object.keys(src).forEach(function (k) {
                    if (isKV(trg[k]) && isKV(src[k]))
                        jsonMergeFrom(trg[k], src[k]);
                    else
                        trg[k] = Util.clone(src[k]);
                });
            }
            Util.jsonMergeFrom = jsonMergeFrom;
            function jsonCopyFrom(trg, src) {
                var v = Util.clone(src);
                for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
                    var k = _a[_i];
                    trg[k] = v[k];
                }
            }
            Util.jsonCopyFrom = jsonCopyFrom;
            // { a: { b: 1 }, c: 2} => { "a.b": 1, c: 2 }
            function jsonFlatten(v) {
                var res = {};
                var loop = function (pref, v) {
                    if (v !== null && typeof v == "object") {
                        Util.assert(!Array.isArray(v));
                        if (pref)
                            pref += ".";
                        for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                            var k = _a[_i];
                            loop(pref + k, v[k]);
                        }
                    }
                    else {
                        res[pref] = v;
                    }
                };
                loop("", v);
                return res;
            }
            Util.jsonFlatten = jsonFlatten;
            function jsonUnFlatten(v) {
                var res = {};
                for (var _i = 0, _a = Object.keys(v); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var ptr = res;
                    var parts = k.split(".");
                    for (var i = 0; i < parts.length; ++i) {
                        var part = parts[i];
                        if (i == parts.length - 1)
                            ptr[part] = v[k];
                        else {
                            if (typeof ptr[part] != "object")
                                ptr[part] = {};
                            ptr = ptr[part];
                        }
                    }
                }
                return res;
            }
            Util.jsonUnFlatten = jsonUnFlatten;
            function strcmp(a, b) {
                if (a == b)
                    return 0;
                if (a < b)
                    return -1;
                else
                    return 1;
            }
            Util.strcmp = strcmp;
            function stringMapEq(a, b) {
                var ak = Object.keys(a);
                var bk = Object.keys(b);
                if (ak.length != bk.length)
                    return false;
                for (var _i = 0, ak_1 = ak; _i < ak_1.length; _i++) {
                    var k = ak_1[_i];
                    if (!b.hasOwnProperty(k))
                        return false;
                    if (a[k] !== b[k])
                        return false;
                }
                return true;
            }
            Util.stringMapEq = stringMapEq;
            function endsWith(str, suffix) {
                if (str.length < suffix.length)
                    return false;
                if (suffix.length == 0)
                    return true;
                return str.slice(-suffix.length) == suffix;
            }
            Util.endsWith = endsWith;
            function startsWith(str, prefix) {
                if (str.length < prefix.length)
                    return false;
                if (prefix.length == 0)
                    return true;
                return str.slice(0, prefix.length) == prefix;
            }
            Util.startsWith = startsWith;
            function contains(str, contains) {
                if (str.length < contains.length)
                    return false;
                if (contains.length == 0)
                    return true;
                return str.indexOf(contains) > -1;
            }
            Util.contains = contains;
            function replaceAll(str, old, new_) {
                if (!old)
                    return str;
                return str.split(old).join(new_);
            }
            Util.replaceAll = replaceAll;
            function sortObjectFields(o) {
                var keys = Object.keys(o);
                keys.sort(strcmp);
                var r = {};
                keys.forEach(function (k) { return r[k] = o[k]; });
                return r;
            }
            Util.sortObjectFields = sortObjectFields;
            function chopArray(arr, chunkSize) {
                var res = [];
                for (var i = 0; i < arr.length; i += chunkSize)
                    res.push(arr.slice(i, i + chunkSize));
                return res;
            }
            Util.chopArray = chopArray;
            function unique(arr, f) {
                var v = [];
                var r = {};
                arr.forEach(function (e) {
                    var k = f(e);
                    if (!r.hasOwnProperty(k)) {
                        r[k] = null;
                        v.push(e);
                    }
                });
                return v;
            }
            Util.unique = unique;
            function groupBy(arr, f) {
                var r = {};
                arr.forEach(function (e) {
                    var k = f(e);
                    if (!r.hasOwnProperty(k))
                        r[k] = [];
                    r[k].push(e);
                });
                return r;
            }
            Util.groupBy = groupBy;
            function toDictionary(arr, f) {
                var r = {};
                arr.forEach(function (e) { r[f(e)] = e; });
                return r;
            }
            Util.toDictionary = toDictionary;
            function toArray(a) {
                if (Array.isArray(a)) {
                    return a;
                }
                var r = [];
                for (var i = 0; i < a.length; ++i)
                    r.push(a[i]);
                return r;
            }
            Util.toArray = toArray;
            function indexOfMatching(arr, f) {
                for (var i = 0; i < arr.length; ++i)
                    if (f(arr[i]))
                        return i;
                return -1;
            }
            Util.indexOfMatching = indexOfMatching;
            function nextTick(f) {
                Promise._async._schedule(f);
            }
            Util.nextTick = nextTick;
            function memoizeString(createNew) {
                return memoize(function (s) { return s; }, createNew);
            }
            Util.memoizeString = memoizeString;
            function memoize(getId, createNew) {
                var cache = {};
                return function (v) {
                    var id = getId(v);
                    if (cache.hasOwnProperty(id))
                        return cache[id];
                    return (cache[id] = createNew(v));
                };
            }
            Util.memoize = memoize;
            // Returns a function, that, as long as it continues to be invoked, will not
            // be triggered. The function will be called after it stops being called for
            // N milliseconds. If `immediate` is passed, trigger the function on the
            // leading edge, instead of the trailing.
            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this;
                    var args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate)
                            func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow)
                        func.apply(context, args);
                };
            }
            Util.debounce = debounce;
            // Returns a function, that, as long as it continues to be invoked, will only
            // trigger every N milliseconds. If `immediate` is passed, trigger the
            // function on the leading edge, instead of the trailing.
            function throttle(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this;
                    var args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate)
                            func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    if (!timeout)
                        timeout = setTimeout(later, wait);
                    if (callNow)
                        func.apply(context, args);
                };
            }
            Util.throttle = throttle;
            function randomPermute(arr) {
                for (var i = 0; i < arr.length; ++i) {
                    var j = randomUint32() % arr.length;
                    var tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
            Util.randomPermute = randomPermute;
            function randomPick(arr) {
                if (arr.length == 0)
                    return null;
                return arr[randomUint32() % arr.length];
            }
            Util.randomPick = randomPick;
            function timeSince(time) {
                var now = Date.now();
                time *= 1000;
                var diff = (now - time) / 1000;
                if (isNaN(diff))
                    return "";
                if (diff < -30) {
                    diff = -diff;
                    if (diff < 60)
                        return Util.lf("in a few seconds");
                    if (diff < 2 * 60)
                        return Util.lf("in a minute");
                    if (diff < 60 * 60)
                        return Util.lf("in {0} minute{0:s}", Math.floor(diff / 60));
                    if (diff < 2 * 60 * 60)
                        return Util.lf("in an hour");
                    if (diff < 60 * 60 * 24)
                        return Util.lf("in {0} hour{0:s}", Math.floor(diff / 60 / 60));
                    if (diff < 60 * 60 * 24 * 30)
                        return Util.lf("in {0} day{0:s}", Math.floor(diff / 60 / 60 / 24));
                    if (diff < 60 * 60 * 24 * 365)
                        return Util.lf("in {0} month{0:s}", Math.floor(diff / 60 / 60 / 24 / 30));
                    return Util.lf("in {0} year{0:s}", Math.floor(diff / 60 / 60 / 24 / 365));
                }
                else {
                    if (diff < 0)
                        return Util.lf("now");
                    if (diff < 10)
                        return Util.lf("a few seconds ago");
                    if (diff < 60)
                        return Util.lf("{0} second{0:s} ago", Math.floor(diff));
                    if (diff < 2 * 60)
                        return Util.lf("a minute ago");
                    if (diff < 60 * 60)
                        return Util.lf("{0} minute{0:s} ago", Math.floor(diff / 60));
                    if (diff < 2 * 60 * 60)
                        return Util.lf("an hour ago");
                    if (diff < 60 * 60 * 24)
                        return Util.lf("{0} hour{0:s} ago", Math.floor(diff / 60 / 60));
                    if (diff < 60 * 60 * 24 * 30)
                        return Util.lf("{0} day{0:s} ago", Math.floor(diff / 60 / 60 / 24));
                    if (diff < 60 * 60 * 24 * 365)
                        return Util.lf("{0} month{0:s} ago", Math.floor(diff / 60 / 60 / 24 / 30));
                    return Util.lf("{0} year{0:s} ago", Math.floor(diff / 60 / 60 / 24 / 365));
                }
            }
            Util.timeSince = timeSince;
            function unicodeToChar(text) {
                var r = /\\u([\d\w]{4})/gi;
                return text.replace(r, function (match, grp) {
                    return String.fromCharCode(parseInt(grp, 16));
                });
            }
            Util.unicodeToChar = unicodeToChar;
            function escapeForRegex(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
            Util.escapeForRegex = escapeForRegex;
            function stripUrlProtocol(str) {
                return str.replace(/.*?:\/\//g, "");
            }
            Util.stripUrlProtocol = stripUrlProtocol;
            function normalizePath(path) {
                if (path) {
                    path = path.replace(/\\/g, "/");
                }
                return path;
            }
            Util.normalizePath = normalizePath;
            function pathJoin(a, b) {
                normalizePath(a);
                normalizePath(b);
                if (!a && !b)
                    return undefined;
                else if (!a)
                    return b;
                else if (!b)
                    return a;
                if (a.charAt(a.length - 1) !== "/") {
                    a += "/";
                }
                if (b.charAt(0) == "/") {
                    b = b.substring(1);
                }
                return a + b;
            }
            Util.pathJoin = pathJoin;
            Util.isNodeJS = false;
            function requestAsync(options) {
                return Util.httpRequestCoreAsync(options)
                    .then(function (resp) {
                    if ((resp.statusCode != 200 && resp.statusCode != 304) && !options.allowHttpErrors) {
                        var msg = Util.lf("Bad HTTP status code: {0} at {1}; message: {2}", resp.statusCode, options.url, (resp.text || "").slice(0, 500));
                        var err = new Error(msg);
                        err.statusCode = resp.statusCode;
                        return Promise.reject(err);
                    }
                    if (resp.text && /application\/json/.test(resp.headers["content-type"]))
                        resp.json = JSON.parse(resp.text);
                    return resp;
                });
            }
            Util.requestAsync = requestAsync;
            function httpGetTextAsync(url) {
                return requestAsync({ url: url }).then(function (resp) { return resp.text; });
            }
            Util.httpGetTextAsync = httpGetTextAsync;
            function httpGetJsonAsync(url) {
                return requestAsync({ url: url }).then(function (resp) { return resp.json; });
            }
            Util.httpGetJsonAsync = httpGetJsonAsync;
            function httpPostJsonAsync(url, data) {
                return requestAsync({ url: url, data: data || {} }).then(function (resp) { return resp.json; });
            }
            Util.httpPostJsonAsync = httpPostJsonAsync;
            // this will take lower 8 bits from each character
            function stringToUint8Array(input) {
                var len = input.length;
                var res = new Uint8Array(len);
                for (var i = 0; i < len; ++i)
                    res[i] = input.charCodeAt(i) & 0xff;
                return res;
            }
            Util.stringToUint8Array = stringToUint8Array;
            function uint8ArrayToString(input) {
                var len = input.length;
                var res = "";
                for (var i = 0; i < len; ++i)
                    res += String.fromCharCode(input[i]);
                return res;
            }
            Util.uint8ArrayToString = uint8ArrayToString;
            function fromUTF8(binstr) {
                if (!binstr)
                    return "";
                // escape function is deprecated
                var escaped = "";
                for (var i = 0; i < binstr.length; ++i) {
                    var k = binstr.charCodeAt(i) & 0xff;
                    if (k == 37 || k > 0x7f) {
                        escaped += "%" + k.toString(16);
                    }
                    else {
                        escaped += binstr.charAt(i);
                    }
                }
                // decodeURIComponent does the actual UTF8 decoding
                return decodeURIComponent(escaped);
            }
            Util.fromUTF8 = fromUTF8;
            function toUTF8(str) {
                var res = "";
                if (!str)
                    return res;
                for (var i = 0; i < str.length; ++i) {
                    var code = str.charCodeAt(i);
                    if (code <= 0x7f)
                        res += str.charAt(i);
                    else if (code <= 0x7ff) {
                        res += String.fromCharCode(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
                    }
                    else {
                        if (0xd800 <= code && code <= 0xdbff) {
                            var next = str.charCodeAt(++i);
                            if (!isNaN(next))
                                code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
                        }
                        if (code <= 0xffff)
                            res += String.fromCharCode(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                        else
                            res += String.fromCharCode(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
                    }
                }
                return res;
            }
            Util.toUTF8 = toUTF8;
            function toHex(bytes) {
                var r = "";
                for (var i = 0; i < bytes.length; ++i)
                    r += ("0" + bytes[i].toString(16)).slice(-2);
                return r;
            }
            Util.toHex = toHex;
            function fromHex(hex) {
                var r = new Uint8Array(hex.length >> 1);
                for (var i = 0; i < hex.length; i += 2)
                    r[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
                return r;
            }
            Util.fromHex = fromHex;
            var PromiseQueue = /** @class */ (function () {
                function PromiseQueue() {
                    this.promises = {};
                }
                PromiseQueue.prototype.enqueue = function (id, f) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var arr = _this.promises[id];
                        if (!arr) {
                            arr = _this.promises[id] = [];
                        }
                        arr.push(function () {
                            return f()
                                .finally(function () {
                                arr.shift();
                                if (arr.length == 0)
                                    delete _this.promises[id];
                                else
                                    arr[0]();
                            })
                                .then(resolve, reject);
                        });
                        if (arr.length == 1)
                            arr[0]();
                    });
                };
                return PromiseQueue;
            }());
            Util.PromiseQueue = PromiseQueue;
            var PromiseBuffer = /** @class */ (function () {
                function PromiseBuffer() {
                    this.waiting = [];
                    this.available = [];
                }
                PromiseBuffer.prototype.drain = function () {
                    for (var _i = 0, _a = this.waiting; _i < _a.length; _i++) {
                        var f = _a[_i];
                        f(new Error("Promise Buffer Reset"));
                    }
                    this.waiting = [];
                    this.available = [];
                };
                PromiseBuffer.prototype.pushError = function (v) {
                    this.push(v);
                };
                PromiseBuffer.prototype.push = function (v) {
                    var f = this.waiting.shift();
                    if (f)
                        f(v);
                    else
                        this.available.push(v);
                };
                PromiseBuffer.prototype.shiftAsync = function (timeout) {
                    var _this = this;
                    if (timeout === void 0) { timeout = 0; }
                    if (this.available.length > 0) {
                        var v = this.available.shift();
                        if (v instanceof Error)
                            return Promise.reject(v);
                        else
                            return Promise.resolve(v);
                    }
                    else
                        return new Promise(function (resolve, reject) {
                            var f = function (v) {
                                if (v instanceof Error)
                                    reject(v);
                                else
                                    resolve(v);
                            };
                            _this.waiting.push(f);
                            if (timeout > 0) {
                                Promise.delay(timeout)
                                    .then(function () {
                                    var idx = _this.waiting.indexOf(f);
                                    if (idx >= 0) {
                                        _this.waiting.splice(idx, 1);
                                        reject(new Error("Timeout"));
                                    }
                                });
                            }
                        });
                };
                return PromiseBuffer;
            }());
            Util.PromiseBuffer = PromiseBuffer;
            function now() {
                return Date.now();
            }
            Util.now = now;
            function nowSeconds() {
                return Math.round(now() / 1000);
            }
            Util.nowSeconds = nowSeconds;
            function getMime(filename) {
                var m = /\.([a-zA-Z0-9]+)$/.exec(filename);
                if (m)
                    switch (m[1].toLowerCase()) {
                        case "txt": return "text/plain";
                        case "html":
                        case "htm": return "text/html";
                        case "css": return "text/css";
                        case "js": return "application/javascript";
                        case "jpg":
                        case "jpeg": return "image/jpeg";
                        case "png": return "image/png";
                        case "ico": return "image/x-icon";
                        case "manifest": return "text/cache-manifest";
                        case "webmanifest": return "application/manifest+json";
                        case "json": return "application/json";
                        case "svg": return "image/svg+xml";
                        case "eot": return "application/vnd.ms-fontobject";
                        case "ttf": return "font/ttf";
                        case "woff": return "application/font-woff";
                        case "woff2": return "application/font-woff2";
                        case "md": return "text/markdown";
                        case "xml": return "application/xml";
                        case "m4a": return "audio/m4a";
                        case "mp3": return "audio/mp3";
                        default: return "application/octet-stream";
                    }
                else
                    return "application/octet-stream";
            }
            Util.getMime = getMime;
            function randomUint32() {
                var buf = new Uint8Array(4);
                Util.getRandomBuf(buf);
                return new Uint32Array(buf.buffer)[0];
            }
            Util.randomUint32 = randomUint32;
            function guidGen() {
                function f() { return (randomUint32() | 0x10000).toString(16).slice(-4); }
                return f() + f() + "-" + f() + "-4" + f().slice(-3) + "-" + f() + "-" + f() + f() + f();
            }
            Util.guidGen = guidGen;
            function downloadLiveTranslationsAsync(lang, filename, branch, etag) {
                // hitting the cloud
                function downloadFromCloudAsync() {
                    // https://pxt.io/api/translations?filename=strings.json&lang=pl&approved=true&branch=v0
                    var url = "https://makecode.com/api/translations?lang=" + encodeURIComponent(lang) + "&filename=" + encodeURIComponent(filename) + "&approved=true";
                    if (branch)
                        url += '&branch=' + encodeURIComponent(branch);
                    var headers = {};
                    if (etag)
                        headers["If-None-Match"] = etag;
                    return requestAsync({ url: url, headers: headers }).then(function (resp) {
                        // if 304, translation not changed, skipe
                        if (resp.statusCode == 304)
                            return undefined;
                        else if (resp.statusCode == 200) {
                            // store etag and translations
                            etag = resp.headers["ETag"] || "";
                            return Util.translationDb.setAsync(lang, filename, branch, etag, resp.json)
                                .then(function () { return resp.json; });
                        }
                        return resp.json;
                    }, function (e) {
                        console.log("failed to load translations from " + url);
                        return undefined;
                    });
                }
                // check for cache
                return Util.translationDb.getAsync(lang, filename, branch)
                    .then(function (entry) {
                    // if cached, return immediately
                    if (entry) {
                        etag = entry.etag;
                        // background update
                        if (!entry.cached)
                            downloadFromCloudAsync().done();
                        return entry.strings;
                    }
                    else
                        return downloadFromCloudAsync();
                });
            }
            Util.downloadLiveTranslationsAsync = downloadLiveTranslationsAsync;
            function normalizeLanguageCode(code) {
                var langParts = /^(\w{2})-(\w{2}$)/i.exec(code);
                if (langParts && langParts[1] && langParts[2]) {
                    return langParts[1].toLowerCase() + "-" + langParts[2].toUpperCase();
                }
                else {
                    return code.toLowerCase();
                }
            }
            Util.normalizeLanguageCode = normalizeLanguageCode;
            function isLocaleEnabled(code) {
                code = normalizeLanguageCode(code);
                return pxt.appTarget.appTheme && pxt.appTarget.appTheme.availableLocales && pxt.appTarget.appTheme.availableLocales.indexOf(code) > -1;
            }
            Util.isLocaleEnabled = isLocaleEnabled;
            function updateLocalizationAsync(targetId, simulator, baseUrl, code, pxtBranch, targetBranch, live, force) {
                code = normalizeLanguageCode(code);
                if (code === Util.userLanguage() || (!isLocaleEnabled(code) && !force))
                    return Promise.resolve();
                return downloadTranslationsAsync(targetId, simulator, baseUrl, code, pxtBranch, targetBranch, live)
                    .then(function (translations) {
                    if (translations) {
                        Util.setUserLanguage(code);
                        Util.setLocalizedStrings(translations);
                        if (live) {
                            Util.localizeLive = true;
                        }
                    }
                    return Promise.resolve();
                });
            }
            Util.updateLocalizationAsync = updateLocalizationAsync;
            function downloadSimulatorLocalizationAsync(targetId, baseUrl, code, pxtBranch, targetBranch, live, force) {
                code = normalizeLanguageCode(code);
                if (code === Util.userLanguage() || (!isLocaleEnabled(code) && !force))
                    return Promise.resolve(undefined);
                return downloadTranslationsAsync(targetId, true, baseUrl, code, pxtBranch, targetBranch, live);
            }
            Util.downloadSimulatorLocalizationAsync = downloadSimulatorLocalizationAsync;
            function downloadTranslationsAsync(targetId, simulator, baseUrl, code, pxtBranch, targetBranch, live) {
                code = normalizeLanguageCode(code);
                var translationsCacheId = code + "/" + live + "/" + simulator;
                if (Util.translationsCache()[translationsCacheId]) {
                    return Promise.resolve(Util.translationsCache()[translationsCacheId]);
                }
                var stringFiles = simulator
                    ? [{ branch: targetBranch, path: targetId + "/sim-strings.json" }]
                    : [
                        { branch: pxtBranch, path: "strings.json" },
                        { branch: targetBranch, path: targetId + "/target-strings.json" }
                    ];
                var translations;
                function mergeTranslations(tr) {
                    if (!tr)
                        return;
                    if (!translations) {
                        translations = {};
                    }
                    Object.keys(tr)
                        .filter(function (k) { return !!tr[k]; })
                        .forEach(function (k) { return translations[k] = tr[k]; });
                }
                if (live) {
                    var errorCount_1 = 0;
                    var pAll = Promise.mapSeries(stringFiles, function (file) { return downloadLiveTranslationsAsync(code, file.path, file.branch)
                        .then(mergeTranslations, function (e) {
                        console.log(e.message);
                        ++errorCount_1;
                    }); });
                    return pAll.then(function () {
                        // Cache translations unless there was an error for one of the files
                        if (errorCount_1) {
                            Util.translationsCache()[translationsCacheId] = translations;
                        }
                        if (errorCount_1 === stringFiles.length || !translations) {
                            // Retry with non-live translations by setting live to false
                            pxt.tickEvent("translations.livetranslationsfailed");
                            return downloadTranslationsAsync(targetId, simulator, baseUrl, code, pxtBranch, targetBranch, false);
                        }
                        return Promise.resolve(translations);
                    });
                }
                else {
                    return Util.httpGetJsonAsync(baseUrl + "locales/" + code + "/strings.json")
                        .then(function (tr) {
                        if (tr) {
                            translations = tr;
                            Util.translationsCache()[translationsCacheId] = translations;
                        }
                    }, function (e) {
                        console.error('failed to load localizations');
                    })
                        .then(function () { return translations; });
                }
            }
            Util.downloadTranslationsAsync = downloadTranslationsAsync;
            function capitalize(n) {
                return n ? (n[0].toLocaleUpperCase() + n.slice(1)) : n;
            }
            Util.capitalize = capitalize;
            function uncapitalize(n) {
                return (n || "").split(/(?=[A-Z])/g).join(" ").toLowerCase();
            }
            Util.uncapitalize = uncapitalize;
            function range(len) {
                var r = [];
                for (var i = 0; i < len; ++i)
                    r.push(i);
                return r;
            }
            Util.range = range;
            function multipartPostAsync(uri, data, filename, filecontents) {
                if (data === void 0) { data = {}; }
                if (filename === void 0) { filename = null; }
                if (filecontents === void 0) { filecontents = null; }
                var boundary = "--------------------------0461489f461126c5";
                var form = "";
                function add(name, val) {
                    form += boundary + "\r\n";
                    form += "Content-Disposition: form-data; name=\"" + name + "\"\r\n\r\n";
                    form += val + "\r\n";
                }
                function addF(name, val) {
                    var fn = name.split('/').reverse()[0];
                    form += boundary + "\r\n";
                    form += "Content-Disposition: form-data; name=\"files[" + name + "]\"; filename=\"" + fn + "\"\r\n";
                    form += "\r\n";
                    form += val + "\r\n";
                }
                Object.keys(data).forEach(function (k) { return add(k, data[k]); });
                if (filename)
                    addF(filename, filecontents);
                form += boundary + "--\r\n";
                var req = {
                    url: uri,
                    method: "POST",
                    headers: {
                        "Content-Type": "multipart/form-data; boundary=" + boundary.slice(2)
                    },
                    data: form
                };
                return Util.httpRequestCoreAsync(req);
            }
            Util.multipartPostAsync = multipartPostAsync;
            function toDataUri(data, mimetype) {
                // TODO does this only support trusted data?
                // weed out urls
                if (/^https?:/i.test(data))
                    return data;
                // already a data uri?
                if (/^data:/i.test(data))
                    return data;
                // infer mimetype
                if (!mimetype) {
                    if (/^<svg/i.test(data))
                        mimetype = "image/svg+xml";
                }
                // encode
                if (/xml|svg/.test(mimetype))
                    return "data:" + mimetype + "," + encodeURIComponent(data);
                else
                    return "data:" + (mimetype || "image/png") + ";base64," + pxtc.encodeBase64(toUTF8(data));
            }
            Util.toDataUri = toDataUri;
        })(Util = pxtc.Util || (pxtc.Util = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var BrowserImpl;
        (function (BrowserImpl) {
            pxtc.Util.httpRequestCoreAsync = httpRequestCoreAsync;
            pxtc.Util.sha256 = sha256string;
            pxtc.Util.getRandomBuf = function (buf) {
                if (window.crypto)
                    window.crypto.getRandomValues(buf);
                else {
                    for (var i = 0; i < buf.length; ++i)
                        buf[i] = Math.floor(Math.random() * 255);
                }
            };
            function httpRequestCoreAsync(options) {
                return new Promise(function (resolve, reject) {
                    var client;
                    var resolved = false;
                    var headers = pxtc.Util.clone(options.headers) || {};
                    client = new XMLHttpRequest();
                    if (options.responseArrayBuffer)
                        client.responseType = "arraybuffer";
                    client.onreadystatechange = function () {
                        if (resolved)
                            return; // Safari/iOS likes to call this thing more than once
                        if (client.readyState == 4) {
                            resolved = true;
                            var res_1 = {
                                statusCode: client.status,
                                headers: {},
                                buffer: client.responseBody || client.response,
                                text: options.responseArrayBuffer ? undefined : client.responseText,
                            };
                            client.getAllResponseHeaders().split(/\r?\n/).forEach(function (l) {
                                var m = /^\s*([^:]+): (.*)/.exec(l);
                                if (m)
                                    res_1.headers[m[1].toLowerCase()] = m[2];
                            });
                            resolve(res_1);
                        }
                    };
                    var data = options.data;
                    var method = options.method || (data == null ? "GET" : "POST");
                    var buf;
                    if (data == null) {
                        buf = null;
                    }
                    else if (data instanceof Uint8Array) {
                        buf = data;
                    }
                    else if (typeof data == "object") {
                        buf = JSON.stringify(data);
                        headers["content-type"] = "application/json; charset=utf8";
                    }
                    else if (typeof data == "string") {
                        buf = data;
                    }
                    else {
                        pxtc.Util.oops("bad data");
                    }
                    client.open(method, options.url);
                    Object.keys(headers).forEach(function (k) {
                        client.setRequestHeader(k, headers[k]);
                    });
                    if (buf == null)
                        client.send();
                    else
                        client.send(buf);
                });
            }
            var sha256_k = new Uint32Array([
                0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
                0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
                0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
                0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
                0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
                0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
                0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
                0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
            ]);
            function rotr(v, b) {
                return (v >>> b) | (v << (32 - b));
            }
            function sha256round(hs, w) {
                pxtc.Util.assert(hs.length == 8);
                pxtc.Util.assert(w.length == 64);
                for (var i = 16; i < 64; ++i) {
                    var s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
                    var s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
                    w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
                }
                var a = hs[0];
                var b = hs[1];
                var c = hs[2];
                var d = hs[3];
                var e = hs[4];
                var f = hs[5];
                var g = hs[6];
                var h = hs[7];
                for (var i = 0; i < 64; ++i) {
                    var s1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
                    var ch = (e & f) ^ (~e & g);
                    var temp1 = (h + s1 + ch + sha256_k[i] + w[i]) | 0;
                    var s0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
                    var maj = (a & b) ^ (a & c) ^ (b & c);
                    var temp2 = (s0 + maj) | 0;
                    h = g;
                    g = f;
                    f = e;
                    e = (d + temp1) | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = (temp1 + temp2) | 0;
                }
                hs[0] += a;
                hs[1] += b;
                hs[2] += c;
                hs[3] += d;
                hs[4] += e;
                hs[5] += f;
                hs[6] += g;
                hs[7] += h;
            }
            function sha256buffer(buf) {
                var h = new Uint32Array(8);
                h[0] = 0x6a09e667;
                h[1] = 0xbb67ae85;
                h[2] = 0x3c6ef372;
                h[3] = 0xa54ff53a;
                h[4] = 0x510e527f;
                h[5] = 0x9b05688c;
                h[6] = 0x1f83d9ab;
                h[7] = 0x5be0cd19;
                var work = new Uint32Array(64);
                var chunkLen = 16 * 4;
                function addBuf(buf) {
                    var end = buf.length - (chunkLen - 1);
                    for (var i = 0; i < end; i += chunkLen) {
                        for (var j = 0; j < 16; j++) {
                            var off = (j << 2) + i;
                            work[j] = (buf[off] << 24) | (buf[off + 1] << 16) | (buf[off + 2] << 8) | buf[off + 3];
                        }
                        sha256round(h, work);
                    }
                }
                addBuf(buf);
                var padSize = 64 - (buf.length + 9) % 64;
                if (padSize == 64)
                    padSize = 0;
                var endPos = buf.length - (buf.length % chunkLen);
                var padBuf = new Uint8Array((buf.length - endPos) + 1 + padSize + 8);
                var dst = 0;
                while (endPos < buf.length)
                    padBuf[dst++] = buf[endPos++];
                padBuf[dst++] = 0x80;
                while (padSize-- > 0)
                    padBuf[dst++] = 0x00;
                var len = buf.length * 8;
                dst = padBuf.length;
                while (len > 0) {
                    padBuf[--dst] = len & 0xff;
                    len >>= 8;
                }
                addBuf(padBuf);
                var res = "";
                for (var i = 0; i < h.length; ++i)
                    res += ("000000000" + h[i].toString(16)).slice(-8);
                return res.toLowerCase();
            }
            BrowserImpl.sha256buffer = sha256buffer;
            function sha256string(s) {
                return sha256buffer(pxtc.Util.stringToUint8Array(pxtc.Util.toUTF8(s)));
            }
            BrowserImpl.sha256string = sha256string;
        })(BrowserImpl = pxtc.BrowserImpl || (pxtc.BrowserImpl = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
/// <reference path="../localtypings/pxtpackage.d.ts"/>
/// <reference path="../localtypings/pxtparts.d.ts"/>
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="util.ts"/>
/// <reference path="apptarget.ts"/>
/// <reference path="tickEvent.ts"/>
var pxt;
(function (pxt) {
    pxt.U = pxtc.Util;
    pxt.Util = pxtc.Util;
    var savedAppTarget;
    function setAppTarget(trg) {
        pxt.appTarget = trg || {};
        patchAppTarget();
        savedAppTarget = pxt.U.clone(pxt.appTarget);
    }
    pxt.setAppTarget = setAppTarget;
    function patchAppTarget() {
        // patch-up the target
        var comp = pxt.appTarget.compile;
        if (!comp)
            comp = pxt.appTarget.compile = { isNative: false, hasHex: false };
        if (comp.hasHex && comp.jsRefCounting === undefined)
            comp.jsRefCounting = true;
        if (!comp.hasHex && comp.floatingPoint === undefined)
            comp.floatingPoint = true;
        if (comp.hasHex && !comp.nativeType)
            comp.nativeType = pxtc.NATIVE_TYPE_THUMB;
        if (comp.nativeType == pxtc.NATIVE_TYPE_AVR || comp.nativeType == pxtc.NATIVE_TYPE_AVRVM) {
            comp.shortPointers = true;
            comp.flashCodeAlign = 0x10;
        }
        if (comp.nativeType == pxtc.NATIVE_TYPE_CS) {
            comp.floatingPoint = true;
            comp.needsUnboxing = true;
            comp.jsRefCounting = false;
        }
        if (comp.taggedInts) {
            comp.floatingPoint = true;
            comp.needsUnboxing = true;
        }
        if (!comp.vtableShift)
            comp.vtableShift = 2;
        if (!comp.useUF2 && !comp.useELF && comp.noSourceInFlash == undefined)
            comp.noSourceInFlash = true; // no point putting sources in hex to be flashed
        if (!pxt.appTarget.appTheme)
            pxt.appTarget.appTheme = {};
        if (!pxt.appTarget.appTheme.embedUrl)
            pxt.appTarget.appTheme.embedUrl = pxt.appTarget.appTheme.homeUrl;
        var cs = pxt.appTarget.compileService;
        if (cs) {
            if (cs.yottaTarget && !cs.yottaBinary)
                cs.yottaBinary = "pxt-microbit-app-combined.hex";
        }
        // patch logo locations
        var theme = pxt.appTarget.appTheme;
        if (theme) {
            Object.keys(theme)
                .filter(function (k) { return /(logo|hero)$/i.test(k) && /^@cdnUrl@/.test(theme[k]); })
                .forEach(function (k) { return theme[k] = pxt.BrowserUtils.patchCdn(theme[k]); });
        }
        // patching simulator images
        var sim = pxt.appTarget.simulator;
        if (sim
            && sim.boardDefinition
            && sim.boardDefinition.visual) {
            var boardDef = sim.boardDefinition.visual;
            if (boardDef.image) {
                boardDef.image = pxt.BrowserUtils.patchCdn(boardDef.image);
                if (boardDef.outlineImage)
                    boardDef.outlineImage = pxt.BrowserUtils.patchCdn(boardDef.outlineImage);
            }
        }
        // patch icons in bundled packages
        Object.keys(pxt.appTarget.bundledpkgs).forEach(function (pkgid) {
            var res = pxt.appTarget.bundledpkgs[pkgid];
            // path config before storing
            var config = JSON.parse(res[pxt.CONFIG_NAME]);
            if (config.icon)
                config.icon = pxt.BrowserUtils.patchCdn(config.icon);
            res[pxt.CONFIG_NAME] = JSON.stringify(config, null, 4);
        });
    }
    // this is set by compileServiceVariant in pxt.json
    function setAppTargetVariant(variant) {
        pxt.appTargetVariant = variant;
        pxt.appTarget = pxt.U.clone(savedAppTarget);
        if (variant) {
            if (pxt.appTarget.variants) {
                var v = pxt.appTarget.variants[variant];
                if (v) {
                    pxt.U.jsonMergeFrom(pxt.appTarget, v);
                    return;
                }
            }
            pxt.U.userError(lf("Variant '{0}' not defined in pxtarget.json", variant));
        }
        patchAppTarget();
    }
    pxt.setAppTargetVariant = setAppTargetVariant;
    // This causes the `hw` package to be replaced with `hw---variant` upon package load
    // the pxt.json of hw---variant would generally specify compileServiceVariant
    // This is controlled by ?hw=variant or by configuration created by dragging `config.bin`
    // into editor.
    function setHwVariant(variant) {
        if (/^[\w\-]+$/.test(variant))
            pxt.hwVariant = variant;
        else
            pxt.hwVariant = null;
    }
    pxt.setHwVariant = setHwVariant;
    function getHwVariants() {
        if (!pxt.appTarget.variants)
            return [];
        var hws = Object.keys(pxt.appTarget.bundledpkgs).filter(function (pkg) { return /^hw---/.test(pkg); });
        return hws.map(function (pkg) { return JSON.parse(pxt.appTarget.bundledpkgs[pkg][pxt.CONFIG_NAME]); });
    }
    pxt.getHwVariants = getHwVariants;
    pxt.options = {};
    // general error reported
    pxt.debug = typeof console !== "undefined" && !!console.debug
        ? function (msg) {
            if (pxt.options.debug)
                console.debug(msg);
        } : function () { };
    pxt.log = typeof console !== "undefined" && !!console.log
        ? function (msg) {
            console.log(msg);
        } : function () { };
    pxt.reportException = function (e, d) {
        if (console) {
            console.error(e);
            if (d) {
                try {
                    // log it as object, so native object inspector can be used
                    console.log(d);
                    //pxt.log(JSON.stringify(d, null, 2))
                }
                catch (e) { }
            }
        }
    };
    pxt.reportError = function (cat, msg, data) {
        if (console) {
            console.error(cat + ": " + msg);
            if (data) {
                try {
                    pxt.log(JSON.stringify(data, null, 2));
                }
                catch (e) { }
            }
        }
    };
    var activityEvents = {};
    var tickActivityDebounced = pxt.Util.debounce(function () {
        pxt.tickEvent("activity", activityEvents);
        activityEvents = {};
    }, 10000, false);
    /**
     * Ticks activity events. This event gets aggregated and eventually gets sent.
     */
    function tickActivity() {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        ids.filter(function (id) { return !!id; }).map(function (id) { return id.slice(0, 64); })
            .forEach(function (id) { return activityEvents[id] = (activityEvents[id] || 0) + 1; });
        tickActivityDebounced();
    }
    pxt.tickActivity = tickActivity;
    function localWebConfig() {
        var r = {
            relprefix: "/--",
            workerjs: "/worker.js",
            monacoworkerjs: "/monacoworker.js",
            pxtVersion: "local",
            pxtRelId: "",
            pxtCdnUrl: "/cdn/",
            commitCdnUrl: "/cdn/",
            blobCdnUrl: "/blb/",
            cdnUrl: "/cdn/",
            targetUrl: "",
            targetVersion: "local",
            targetRelId: "",
            targetId: pxt.appTarget ? pxt.appTarget.id : "",
            simUrl: "/sim/simulator.html",
            partsUrl: "/sim/siminstructions.html"
        };
        return r;
    }
    pxt.localWebConfig = localWebConfig;
    function getOnlineCdnUrl() {
        if (!pxt.webConfig)
            return null;
        var m = /^(https:\/\/[^\/]+)/.exec(pxt.webConfig.commitCdnUrl);
        if (m)
            return m[1];
        else
            return null;
    }
    pxt.getOnlineCdnUrl = getOnlineCdnUrl;
    function setupWebConfig(cfg) {
        if (cfg)
            pxt.webConfig = cfg;
        else if (!pxt.webConfig)
            pxt.webConfig = localWebConfig();
    }
    pxt.setupWebConfig = setupWebConfig;
    function getEmbeddedScript(id) {
        return pxt.U.lookup(pxt.appTarget.bundledpkgs || {}, id);
    }
    pxt.getEmbeddedScript = getEmbeddedScript;
    var _targetConfigPromise = undefined;
    function targetConfigAsync() {
        if (!_targetConfigPromise)
            _targetConfigPromise = pxt.Cloud.downloadTargetConfigAsync()
                .then(function (js) { return js || {}; }, function (err) { return {}; });
        return _targetConfigPromise;
    }
    pxt.targetConfigAsync = targetConfigAsync;
    function packagesConfigAsync() {
        return targetConfigAsync().then(function (config) { return config ? config.packages : undefined; });
    }
    pxt.packagesConfigAsync = packagesConfigAsync;
    pxt.CONFIG_NAME = "pxt.json";
    pxt.SERIAL_EDITOR_FILE = "serial.txt";
    pxt.CLOUD_ID = "pxt/";
    pxt.BLOCKS_PROJECT_NAME = "blocksprj";
    pxt.JAVASCRIPT_PROJECT_NAME = "tsprj";
    function outputName(trg) {
        if (trg === void 0) { trg = null; }
        if (!trg)
            trg = pxt.appTarget.compile;
        if (trg.nativeType == ts.pxtc.NATIVE_TYPE_CS)
            return ts.pxtc.BINARY_CS;
        if (trg.useUF2)
            return ts.pxtc.BINARY_UF2;
        else if (trg.useELF)
            return ts.pxtc.BINARY_ELF;
        else
            return ts.pxtc.BINARY_HEX;
    }
    pxt.outputName = outputName;
    function isOutputText(trg) {
        if (trg === void 0) { trg = null; }
        return outputName(trg) == ts.pxtc.BINARY_HEX || outputName(trg) == ts.pxtc.BINARY_CS;
    }
    pxt.isOutputText = isOutputText;
})(pxt || (pxt = {}));
/// <reference path="main.ts"/>
var pxt;
(function (pxt) {
    var blocks;
    (function (blocks) {
        var THIS_NAME = "this";
        // The JS Math functions supported in the blocks. The order of this array
        // determines the order of the dropdown in the math_js_op block
        blocks.MATH_FUNCTIONS = {
            unary: ["sqrt", "sin", "cos", "tan"],
            binary: ["atan2"],
            infix: ["idiv", "imul"]
        };
        // Like MATH_FUNCTIONS, but used only for rounding operations
        blocks.ROUNDING_FUNCTIONS = ["round", "ceil", "floor", "trunc"];
        // Information for blocks that compile to function calls but are defined by vanilla Blockly
        // and not dynamically by BlocklyLoader
        blocks.builtinFunctionInfo = {
            "Math.abs": { blockId: "math_op3", params: ["x"] },
            "Math.min": { blockId: "math_op2", params: ["x", "y"] },
            "Math.max": { blockId: "math_op2", params: ["x", "y"] }
        };
        function normalizeBlock(b) {
            if (!b)
                return b;
            // normalize and validate common errors
            // made while translating
            var nb = b.replace(/%\s+/g, '%');
            if (nb != b) {
                pxt.log("block has extra spaces: " + b);
                return b;
            }
            nb = nb.replace(/\s*\|\s*/g, '|');
            return nb;
        }
        blocks.normalizeBlock = normalizeBlock;
        function compileInfo(fn) {
            var res = {
                parameters: [],
                actualNameToParam: {},
                definitionNameToParam: {},
                handlerArgs: []
            };
            var instance = (fn.kind == ts.pxtc.SymbolKind.Method || fn.kind == ts.pxtc.SymbolKind.Property) && !fn.attributes.defaultInstance;
            var hasBlockDef = !!fn.attributes._def;
            var defParameters = hasBlockDef ? fn.attributes._def.parameters.slice(0) : undefined;
            var optionalStart = hasBlockDef ? defParameters.length : (fn.parameters ? fn.parameters.length : 0);
            var bInfo = blocks.builtinFunctionInfo[fn.qName];
            if (hasBlockDef && fn.attributes._expandedDef) {
                defParameters.push.apply(defParameters, fn.attributes._expandedDef.parameters);
            }
            var refMap = {};
            var definitionsWithoutRefs = defParameters ? defParameters.filter(function (p) {
                if (p.ref) {
                    refMap[p.name] = p;
                    return false;
                }
                return true;
            }) : [];
            if (instance && hasBlockDef && defParameters.length) {
                var def = refMap[THIS_NAME] || defParameters[0];
                var defName = def.name;
                var isVar = !def.shadowBlockId || def.shadowBlockId === "variables_get";
                res.thisParameter = {
                    actualName: THIS_NAME,
                    definitionName: defName,
                    shadowBlockId: def.shadowBlockId,
                    type: fn.namespace,
                    defaultValue: isVar ? def.varName : undefined,
                    // Normally we pass ths actual parameter name, but the "this" parameter doesn't have one
                    fieldEditor: fieldEditor(defName, THIS_NAME),
                    fieldOptions: fieldOptions(defName, THIS_NAME),
                    shadowOptions: shadowOptions(defName, THIS_NAME),
                };
            }
            if (fn.parameters) {
                var defIndex_1 = (instance && !refMap[THIS_NAME]) ? 1 : 0;
                fn.parameters.forEach(function (p, i) {
                    var def;
                    if (refMap[p.name]) {
                        def = refMap[p.name];
                    }
                    else if (defIndex_1 < definitionsWithoutRefs.length) {
                        def = definitionsWithoutRefs[defIndex_1];
                        ++defIndex_1;
                    }
                    if (def || !hasBlockDef) {
                        var range = undefined;
                        if (p.options && p.options["min"] && p.options["max"]) {
                            range = { min: p.options["min"].value, max: p.options["max"].value };
                        }
                        var defName = def ? def.name : (bInfo ? bInfo.params[defIndex_1++] : p.name);
                        var isVar = (def && def.shadowBlockId) === "variables_get";
                        res.parameters.push({
                            actualName: p.name,
                            type: p.type,
                            defaultValue: isVar ? (def.varName || p.default) : p.default,
                            definitionName: defName,
                            shadowBlockId: def && def.shadowBlockId,
                            isOptional: defParameters ? defParameters.indexOf(def) >= optionalStart : false,
                            fieldEditor: fieldEditor(defName, p.name),
                            fieldOptions: fieldOptions(defName, p.name),
                            shadowOptions: shadowOptions(defName, p.name),
                            range: range
                        });
                    }
                    if (p.handlerParameters) {
                        p.handlerParameters.forEach(function (arg) {
                            res.handlerArgs.push({
                                name: arg.name,
                                type: arg.type,
                                inBlockDef: defParameters ? defParameters.some(function (def) { return def.ref && def.name === arg.name; }) : false
                            });
                        });
                    }
                });
            }
            res.parameters.forEach(function (p) {
                res.actualNameToParam[p.actualName] = p;
                res.definitionNameToParam[p.definitionName] = p;
            });
            return res;
            function fieldEditor(defName, actualName) {
                return fn.attributes.paramFieldEditor &&
                    (fn.attributes.paramFieldEditor[defName] || fn.attributes.paramFieldEditor[actualName]);
            }
            function fieldOptions(defName, actualName) {
                return fn.attributes.paramFieldEditorOptions &&
                    (fn.attributes.paramFieldEditorOptions[defName] || fn.attributes.paramFieldEditorOptions[actualName]);
            }
            function shadowOptions(defName, actualName) {
                return fn.attributes.paramShadowOptions &&
                    (fn.attributes.paramShadowOptions[defName] || fn.attributes.paramShadowOptions[actualName]);
            }
        }
        blocks.compileInfo = compileInfo;
        function parseFields(b) {
            // normalize and validate common errors
            // made while translating
            return b.split('|').map(function (n, ni) {
                var m = /([^%]*)\s*%([a-zA-Z0-9_]+)/.exec(n);
                if (!m)
                    return { n: n, ni: ni };
                var pre = m[1];
                if (pre)
                    pre = pre.trim();
                var p = m[2];
                return { n: n, ni: ni, pre: pre, p: p };
            });
        }
        blocks.parseFields = parseFields;
        var _blockDefinitions;
        function blockDefinitions() {
            if (!_blockDefinitions)
                cacheBlockDefinitions();
            return _blockDefinitions;
        }
        blocks.blockDefinitions = blockDefinitions;
        function getBlockDefinition(blockId) {
            if (!_blockDefinitions)
                cacheBlockDefinitions();
            return _blockDefinitions[blockId];
        }
        blocks.getBlockDefinition = getBlockDefinition;
        // Resources for built-in and extra blocks
        function cacheBlockDefinitions() {
            _blockDefinitions = {
                'device_while': {
                    name: pxt.Util.lf("a loop that repeats while the condition is true"),
                    tooltip: pxt.Util.lf("Run the same sequence of actions while the condition is met."),
                    url: '/blocks/loops/while',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("while %1"),
                        appendField: pxt.Util.lf("{id:while}do")
                    }
                },
                'pxt_controls_for': {
                    name: pxt.Util.lf("a loop that repeats the number of times you say"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take on the values from 0 to the end number, counting by 1, and do the specified blocks."),
                    url: 'blocks/loops/for',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for %1 from 0 to %2"),
                        variable: pxt.Util.lf("{id:var}index"),
                        appendField: pxt.Util.lf("{id:for}do")
                    }
                },
                'controls_simple_for': {
                    name: pxt.Util.lf("a loop that repeats the number of times you say"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take on the values from 0 to the end number, counting by 1, and do the specified blocks."),
                    url: 'blocks/loops/for',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for %1 from 0 to %2"),
                        variable: pxt.Util.lf("{id:var}index"),
                        appendField: pxt.Util.lf("{id:for}do")
                    }
                },
                'pxt_controls_for_of': {
                    name: pxt.Util.lf("a loop that repeats for each value in an array"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take the value of each item in the array one by one, and do the specified blocks."),
                    url: 'blocks/loops/for-of',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for element %1 of %2"),
                        variable: pxt.Util.lf("{id:var}value"),
                        appendField: pxt.Util.lf("{id:for_of}do")
                    }
                },
                'controls_for_of': {
                    name: pxt.Util.lf("a loop that repeats for each value in an array"),
                    tooltip: pxt.Util.lf("Have the variable '{0}' take the value of each item in the array one by one, and do the specified blocks."),
                    url: 'blocks/loops/for-of',
                    category: 'loops',
                    block: {
                        message0: pxt.Util.lf("for element %1 of %2"),
                        variable: pxt.Util.lf("{id:var}value"),
                        appendField: pxt.Util.lf("{id:for_of}do")
                    }
                },
                'math_op2': {
                    name: pxt.Util.lf("minimum or maximum of 2 numbers"),
                    tooltip: {
                        "min": pxt.Util.lf("smaller value of 2 numbers"),
                        "max": pxt.Util.lf("larger value of 2 numbers")
                    },
                    url: '/blocks/math',
                    operators: {
                        'op': ["min", "max"]
                    },
                    category: 'math'
                },
                'math_op3': {
                    name: pxt.Util.lf("absolute number"),
                    tooltip: pxt.Util.lf("absolute value of a number"),
                    url: '/reference/math',
                    category: 'math',
                    block: {
                        message0: pxt.Util.lf("absolute of %1")
                    }
                },
                'math_number': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: (pxt.appTarget && pxt.appTarget.compile && pxt.appTarget.compile.floatingPoint) ?
                        pxt.Util.lf("a decimal number") : pxt.Util.lf("an integer number")
                },
                'math_integer': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: pxt.Util.lf("an integer number")
                },
                'math_whole_number': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math',
                    tooltip: pxt.Util.lf("an whole number")
                },
                'math_number_minmax': {
                    name: pxt.Util.lf("{id:block}number"),
                    url: '/blocks/math/random',
                    category: 'math'
                },
                'math_arithmetic': {
                    name: pxt.Util.lf("arithmetic operation"),
                    url: '/blocks/math',
                    tooltip: {
                        ADD: pxt.Util.lf("Return the sum of the two numbers."),
                        MINUS: pxt.Util.lf("Return the difference of the two numbers."),
                        MULTIPLY: pxt.Util.lf("Return the product of the two numbers."),
                        DIVIDE: pxt.Util.lf("Return the quotient of the two numbers."),
                        POWER: pxt.Util.lf("Return the first number raised to the power of the second number."),
                    },
                    operators: {
                        'OP': ["ADD", "MINUS", "MULTIPLY", "DIVIDE", "POWER"]
                    },
                    category: 'math',
                    block: {
                        MATH_ADDITION_SYMBOL: pxt.Util.lf("{id:op}+"),
                        MATH_SUBTRACTION_SYMBOL: pxt.Util.lf("{id:op}-"),
                        MATH_MULTIPLICATION_SYMBOL: pxt.Util.lf("{id:op}×"),
                        MATH_DIVISION_SYMBOL: pxt.Util.lf("{id:op}÷"),
                        MATH_POWER_SYMBOL: pxt.Util.lf("{id:op}**")
                    }
                },
                'math_modulo': {
                    name: pxt.Util.lf("division remainder"),
                    tooltip: pxt.Util.lf("Return the remainder from dividing the two numbers."),
                    url: '/blocks/math',
                    category: 'math',
                    block: {
                        MATH_MODULO_TITLE: pxt.Util.lf("remainder of %1 ÷ %2")
                    }
                },
                'math_js_op': {
                    name: pxt.Util.lf("math function"),
                    tooltip: {
                        "sqrt": pxt.Util.lf("Returns the square root of the argument"),
                        "sin": pxt.Util.lf("Returns the sine of the argument"),
                        "cos": pxt.Util.lf("Returns the cosine of the argument"),
                        "tan": pxt.Util.lf("Returns the tangent of the argument"),
                        "atan2": pxt.Util.lf("Returns the arctangent of the quotient of the two arguments"),
                        "idiv": pxt.Util.lf("Returns the integer portion of the division operation on the two arguments"),
                        "imul": pxt.Util.lf("Returns the integer portion of the multiplication operation on the two arguments")
                    },
                    url: '/blocks/math',
                    operators: {
                        'OP': ["sqrt", "sin", "cos", "tan", "atan2", "idiv", "imul"]
                    },
                    category: 'math',
                    block: {
                        "sqrt": pxt.Util.lf("{id:op}square root"),
                        "sin": pxt.Util.lf("{id:op}sin"),
                        "cos": pxt.Util.lf("{id:op}cos"),
                        "tan": pxt.Util.lf("{id:op}tan"),
                        "atan2": pxt.Util.lf("{id:op}atan2"),
                        "idiv": pxt.Util.lf("{id:op}integer ÷"),
                        "imul": pxt.Util.lf("{id:op}integer ×"),
                    }
                },
                "math_js_round": {
                    name: pxt.Util.lf("rounding functions"),
                    tooltip: {
                        "round": pxt.Util.lf("Increases the argument to the next higher whole number if its fractional part is more than one half"),
                        "ceil": pxt.Util.lf("Increases the argument to the next higher whole number"),
                        "floor": pxt.Util.lf("Decreases the argument to the next lower whole number"),
                        "trunc": pxt.Util.lf("Removes the fractional part of the argument")
                    },
                    url: '/blocks/math',
                    operators: {
                        "OP": ["round", "ceil", "floor", "trunc"]
                    },
                    category: 'math',
                    block: {
                        "round": pxt.Util.lf("{id:op}round"),
                        "ceil": pxt.Util.lf("{id:op}ceiling"),
                        "floor": pxt.Util.lf("{id:op}floor"),
                        "trunc": pxt.Util.lf("{id:op}truncate"),
                    }
                },
                'variables_change': {
                    name: pxt.Util.lf("update the value of a number variable"),
                    tooltip: pxt.Util.lf("Changes the value of the variable by this amount"),
                    url: '/blocks/variables/change',
                    category: 'variables',
                    block: {
                        message0: pxt.Util.lf("change %1 by %2")
                    }
                },
                'controls_repeat_ext': {
                    name: pxt.Util.lf("a loop that repeats and increments an index"),
                    tooltip: pxt.Util.lf("Do some statements several times."),
                    url: '/blocks/loops/repeat',
                    category: 'loops',
                    block: {
                        CONTROLS_REPEAT_TITLE: pxt.Util.lf("repeat %1 times"),
                        CONTROLS_REPEAT_INPUT_DO: pxt.Util.lf("{id:repeat}do")
                    }
                },
                'variables_get': {
                    name: pxt.Util.lf("get the value of a variable"),
                    tooltip: pxt.Util.lf("Returns the value of this variable."),
                    url: '/blocks/variables',
                    category: 'variables',
                    block: {
                        VARIABLES_GET_CREATE_SET: pxt.Util.lf("Create 'set %1'")
                    }
                },
                'variables_get_reporter': {
                    name: pxt.Util.lf("get the value of a variable"),
                    tooltip: pxt.Util.lf("Returns the value of this variable."),
                    url: '/blocks/variables',
                    category: 'variables',
                    block: {
                        VARIABLES_GET_CREATE_SET: pxt.Util.lf("Create 'set %1'")
                    }
                },
                'variables_set': {
                    name: pxt.Util.lf("assign the value of a variable"),
                    tooltip: pxt.Util.lf("Sets this variable to be equal to the input."),
                    url: '/blocks/variables/assign',
                    category: 'variables',
                    block: {
                        VARIABLES_SET: pxt.Util.lf("set %1 to %2")
                    }
                },
                'controls_if': {
                    name: pxt.Util.lf("a conditional statement"),
                    tooltip: {
                        CONTROLS_IF_TOOLTIP_1: pxt.Util.lf("If a value is true, then do some statements."),
                        CONTROLS_IF_TOOLTIP_2: pxt.Util.lf("If a value is true, then do the first block of statements. Otherwise, do the second block of statements."),
                        CONTROLS_IF_TOOLTIP_3: pxt.Util.lf("If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements."),
                        CONTROLS_IF_TOOLTIP_4: pxt.Util.lf("If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.")
                    },
                    tooltipSearch: "CONTROLS_IF_TOOLTIP_2",
                    url: '/blocks/logic/if',
                    category: 'logic',
                    block: {
                        CONTROLS_IF_MSG_IF: pxt.Util.lf("{id:logic}if"),
                        CONTROLS_IF_MSG_THEN: pxt.Util.lf("{id:logic}then"),
                        CONTROLS_IF_MSG_ELSE: pxt.Util.lf("{id:logic}else"),
                        CONTROLS_IF_MSG_ELSEIF: pxt.Util.lf("{id:logic}else if")
                    }
                },
                'lists_create_with': {
                    name: pxt.Util.lf("create an array"),
                    tooltip: pxt.Util.lf("Creates a new array."),
                    url: '/reference/arrays/create',
                    category: 'arrays',
                    blockTextSearch: "LISTS_CREATE_WITH_INPUT_WITH",
                    block: {
                        LISTS_CREATE_EMPTY_TITLE: pxt.Util.lf("empty array"),
                        LISTS_CREATE_WITH_INPUT_WITH: pxt.Util.lf("array of"),
                        LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: pxt.Util.lf("array"),
                        LISTS_CREATE_WITH_ITEM_TITLE: pxt.Util.lf("value")
                    }
                },
                'lists_length': {
                    name: pxt.Util.lf("array length"),
                    tooltip: pxt.Util.lf("Returns the number of items in an array."),
                    url: '/reference/arrays/length',
                    category: 'arrays',
                    block: {
                        LISTS_LENGTH_TITLE: pxt.Util.lf("length of array %1")
                    }
                },
                'lists_index_get': {
                    name: pxt.Util.lf("get a value in an array"),
                    tooltip: pxt.Util.lf("Returns the value at the given index in an array."),
                    url: '/reference/arrays/get',
                    category: 'arrays',
                    block: {
                        message0: pxt.Util.lf("%1 get value at %2")
                    }
                },
                'lists_index_set': {
                    name: pxt.Util.lf("set a value in an array"),
                    tooltip: pxt.Util.lf("Sets the value at the given index in an array"),
                    url: '/reference/arrays/set',
                    category: 'arrays',
                    block: {
                        message0: pxt.Util.lf("%1 set value at %2 to %3")
                    }
                },
                'logic_compare': {
                    name: pxt.Util.lf("comparing two numbers"),
                    tooltip: {
                        LOGIC_COMPARE_TOOLTIP_EQ: pxt.Util.lf("Return true if both inputs equal each other."),
                        LOGIC_COMPARE_TOOLTIP_NEQ: pxt.Util.lf("Return true if both inputs are not equal to each other."),
                        LOGIC_COMPARE_TOOLTIP_LT: pxt.Util.lf("Return true if the first input is smaller than the second input."),
                        LOGIC_COMPARE_TOOLTIP_LTE: pxt.Util.lf("Return true if the first input is smaller than or equal to the second input."),
                        LOGIC_COMPARE_TOOLTIP_GT: pxt.Util.lf("Return true if the first input is greater than the second input."),
                        LOGIC_COMPARE_TOOLTIP_GTE: pxt.Util.lf("Return true if the first input is greater than or equal to the second input.")
                    },
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        search: "= ≠ < ≤ > ≥" // Only used for search; this string is not surfaced in the block's text
                    }
                },
                'logic_operation': {
                    name: pxt.Util.lf("boolean operation"),
                    tooltip: {
                        LOGIC_OPERATION_TOOLTIP_AND: pxt.Util.lf("Return true if both inputs are true."),
                        LOGIC_OPERATION_TOOLTIP_OR: pxt.Util.lf("Return true if at least one of the inputs is true.")
                    },
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_OPERATION_AND: pxt.Util.lf("{id:op}and"),
                        LOGIC_OPERATION_OR: pxt.Util.lf("{id:op}or")
                    }
                },
                'logic_negate': {
                    name: pxt.Util.lf("logical negation"),
                    tooltip: pxt.Util.lf("Returns true if the input is false. Returns false if the input is true."),
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_NEGATE_TITLE: pxt.Util.lf("not %1")
                    }
                },
                'logic_boolean': {
                    name: pxt.Util.lf("a `true` or `false` value"),
                    tooltip: pxt.Util.lf("Returns either true or false."),
                    url: '/blocks/logic/boolean',
                    category: 'logic',
                    block: {
                        LOGIC_BOOLEAN_TRUE: pxt.Util.lf("{id:boolean}true"),
                        LOGIC_BOOLEAN_FALSE: pxt.Util.lf("{id:boolean}false")
                    }
                },
                'text': {
                    name: pxt.Util.lf("a piece of text"),
                    tooltip: pxt.Util.lf("A letter, word, or line of text."),
                    url: 'types/string',
                    category: 'text',
                    block: {
                        search: pxt.Util.lf("a piece of text") // Only used for search; this string is not surfaced in the block's text
                    }
                },
                'text_length': {
                    name: pxt.Util.lf("number of characters in the string"),
                    tooltip: pxt.Util.lf("Returns the number of letters (including spaces) in the provided text."),
                    url: 'reference/text/length',
                    category: 'text',
                    block: {
                        TEXT_LENGTH_TITLE: pxt.Util.lf("length of %1")
                    }
                },
                'text_join': {
                    name: pxt.Util.lf("join items to create text"),
                    tooltip: pxt.Util.lf("Create a piece of text by joining together any number of items."),
                    url: 'reference/text/join',
                    category: 'text',
                    block: {
                        TEXT_JOIN_TITLE_CREATEWITH: pxt.Util.lf("join")
                    }
                },
                'procedures_defnoreturn': {
                    name: pxt.Util.lf("define the function"),
                    tooltip: pxt.Util.lf("Create a function."),
                    url: 'types/function/define',
                    category: 'functions',
                    block: {
                        PROCEDURES_DEFNORETURN_TITLE: pxt.Util.lf("function"),
                        PROCEDURE_ALREADY_EXISTS: pxt.Util.lf("A function named '%1' already exists.")
                    }
                },
                'procedures_callnoreturn': {
                    name: pxt.Util.lf("call the function"),
                    tooltip: pxt.Util.lf("Call the user-defined function."),
                    url: 'types/function/call',
                    category: 'functions',
                    block: {
                        PROCEDURES_CALLNORETURN_TITLE: pxt.Util.lf("call function")
                    }
                }
            };
            _blockDefinitions[pxtc.ON_START_TYPE] = {
                name: pxt.Util.lf("on start event"),
                tooltip: pxt.Util.lf("Run code when the program starts"),
                url: '/blocks/on-start',
                category: "loops",
                block: {
                    message0: pxt.Util.lf("on start %1 %2")
                }
            };
            _blockDefinitions[pxtc.PAUSE_UNTIL_TYPE] = {
                name: pxt.Util.lf("pause until"),
                tooltip: pxt.Util.lf("Pause execution of code until the given boolean expression is true"),
                url: '/blocks/pause-until',
                category: "loops",
                block: {
                    message0: pxt.Util.lf("pause until %1")
                }
            };
        }
    })(blocks = pxt.blocks || (pxt.blocks = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var BrowserUtils;
    (function (BrowserUtils) {
        function isIFrame() {
            try {
                return window && window.self !== window.top;
            }
            catch (e) {
                return true;
            }
        }
        BrowserUtils.isIFrame = isIFrame;
        function hasNavigator() {
            return typeof navigator !== "undefined";
        }
        BrowserUtils.hasNavigator = hasNavigator;
        function isWindows() {
            return hasNavigator() && /(Win32|Win64|WOW64)/i.test(navigator.platform);
        }
        BrowserUtils.isWindows = isWindows;
        function isWindows10() {
            return hasNavigator() && /(Win32|Win64|WOW64)/i.test(navigator.platform) && /Windows NT 10/i.test(navigator.userAgent);
        }
        BrowserUtils.isWindows10 = isWindows10;
        function isMobile() {
            return hasNavigator() && /mobi/i.test(navigator.userAgent);
        }
        BrowserUtils.isMobile = isMobile;
        //MacIntel on modern Macs
        function isMac() {
            return hasNavigator() && /Mac/i.test(navigator.platform);
        }
        BrowserUtils.isMac = isMac;
        //This is generally appears for Linux
        //Android *sometimes* returns this
        function isLinux() {
            return !!navigator && /Linux/i.test(navigator.platform);
        }
        BrowserUtils.isLinux = isLinux;
        // Detects if we are running on ARM (Raspberry pi)
        function isARM() {
            return hasNavigator() && /arm/i.test(navigator.platform);
        }
        BrowserUtils.isARM = isARM;
        // Detects if we are running inside the UWP runtime (Edge)
        function isUwpEdge() {
            return typeof window !== "undefined" && !!window.Windows;
        }
        BrowserUtils.isUwpEdge = isUwpEdge;
        /*
        Notes on browser detection
    
        Actually:   Claims to be:
                    IE  Edge    Chrome  Safari  Firefox
        IE          X                   X?
        Edge            X       X       X
        Chrome                  X       X
        Safari                          X       X
        Firefox                                 X
    
        I allow Opera to go about claiming to be Chrome because it might as well be
        */
        //Edge lies about its user agent and claims to be Chrome, but Edge/Version
        //is always at the end
        function isEdge() {
            return hasNavigator() && /Edge/i.test(navigator.userAgent);
        }
        BrowserUtils.isEdge = isEdge;
        //IE11 also lies about its user agent, but has Trident appear somewhere in
        //the user agent. Detecting the different between IE11 and Edge isn't
        //super-important because the UI is similar enough
        function isIE() {
            return hasNavigator() && /Trident/i.test(navigator.userAgent);
        }
        BrowserUtils.isIE = isIE;
        //Edge and IE11 lie about being Chrome
        function isChrome() {
            return !isEdge() && !isIE() && !!navigator && (/Chrome/i.test(navigator.userAgent) || /Chromium/i.test(navigator.userAgent));
        }
        BrowserUtils.isChrome = isChrome;
        //Chrome and Edge lie about being Safari
        function isSafari() {
            //Could also check isMac but I don't want to risk excluding iOS
            //Checking for iPhone, iPod or iPad as well as Safari in order to detect home screen browsers on iOS
            return !isChrome() && !isEdge() && !!navigator && /(Safari|iPod|iPhone|iPad)/i.test(navigator.userAgent);
        }
        BrowserUtils.isSafari = isSafari;
        //Safari and WebKit lie about being Firefox
        function isFirefox() {
            return !isSafari() && !!navigator && (/Firefox/i.test(navigator.userAgent) || /Seamonkey/i.test(navigator.userAgent));
        }
        BrowserUtils.isFirefox = isFirefox;
        //These days Opera's core is based on Chromium so we shouldn't distinguish between them too much
        function isOpera() {
            return hasNavigator() && /Opera|OPR/i.test(navigator.userAgent);
        }
        BrowserUtils.isOpera = isOpera;
        //Midori *was* the default browser on Raspbian, however isn't any more
        function isMidori() {
            return hasNavigator() && /Midori/i.test(navigator.userAgent);
        }
        BrowserUtils.isMidori = isMidori;
        //Epiphany (code name for GNOME Web) is the default browser on Raspberry Pi
        //Epiphany also lies about being Chrome, Safari, and Chromium
        function isEpiphany() {
            return hasNavigator() && /Epiphany/i.test(navigator.userAgent);
        }
        BrowserUtils.isEpiphany = isEpiphany;
        function isTouchEnabled() {
            return typeof window !== "undefined" &&
                ('ontouchstart' in window // works on most browsers
                    || navigator.maxTouchPoints > 0); // works on IE10/11 and Surface);
        }
        BrowserUtils.isTouchEnabled = isTouchEnabled;
        function hasPointerEvents() {
            return typeof window != "undefined" && !!window.PointerEvent;
        }
        BrowserUtils.hasPointerEvents = hasPointerEvents;
        function hasSaveAs() {
            return isEdge() || isIE() || isFirefox();
        }
        BrowserUtils.hasSaveAs = hasSaveAs;
        function os() {
            if (isWindows())
                return "windows";
            else if (isMac())
                return "mac";
            else if (isLinux() && isARM())
                return "rpi";
            else if (isLinux())
                return "linux";
            else
                return "unknown";
        }
        BrowserUtils.os = os;
        function browser() {
            if (isEdge())
                return "edge";
            if (isEpiphany())
                return "epiphany";
            else if (isMidori())
                return "midori";
            else if (isOpera())
                return "opera";
            else if (isIE())
                return "ie";
            else if (isChrome())
                return "chrome";
            else if (isSafari())
                return "safari";
            else if (isFirefox())
                return "firefox";
            else
                return "unknown";
        }
        BrowserUtils.browser = browser;
        function browserVersion() {
            if (!hasNavigator())
                return null;
            //Unsurprisingly browsers also lie about this and include other browser versions...
            var matches = [];
            if (isOpera()) {
                matches = /(Opera|OPR)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            if (isEpiphany()) {
                matches = /Epiphany\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isMidori()) {
                matches = /Midori\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isSafari()) {
                matches = /Version\/([0-9\.]+)/i.exec(navigator.userAgent);
                // pinned web site have a different user agent
                // Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27
                // Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60
                if (!matches)
                    matches = /(iPod|iPhone|iPad); CPU .*?OS (\d+)/i.exec(navigator.userAgent);
            }
            else if (isChrome()) {
                matches = /(Chrome|Chromium)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isEdge()) {
                matches = /Edge\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else if (isIE()) {
                matches = /(MSIE |rv:)([0-9\.]+)/i.exec(navigator.userAgent);
            }
            else {
                matches = /(Firefox|Seamonkey)\/([0-9\.]+)/i.exec(navigator.userAgent);
            }
            if (!matches || matches.length == 0) {
                return null;
            }
            return matches[matches.length - 1];
        }
        BrowserUtils.browserVersion = browserVersion;
        var hasLoggedBrowser = false;
        function isBrowserSupported() {
            if (!navigator) {
                return true; //All browsers define this, but we can't make any predictions if it isn't defined, so assume the best
            }
            // allow bots in general
            if (/bot|crawler|spider|crawling/i.test(navigator.userAgent))
                return true;
            // testing browser versions
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            var isRecentChrome = isChrome() && v >= 38;
            var isRecentFirefox = isFirefox() && v >= 31;
            var isRecentEdge = isEdge();
            var isRecentSafari = isSafari() && v >= 9;
            var isRecentOpera = (isOpera() && isChrome()) && v >= 21;
            var isRecentIE = isIE() && v >= 11;
            var isModernBrowser = isRecentChrome || isRecentFirefox || isRecentEdge || isRecentSafari || isRecentOpera || isRecentIE;
            //In the future this should check for the availability of features, such
            //as web workers
            var isSupported = isModernBrowser;
            var isUnsupportedRPI = isMidori() || (isLinux() && isARM() && isEpiphany());
            var isNotSupported = isUnsupportedRPI;
            isSupported = isSupported && !isNotSupported;
            //Bypass
            isSupported = isSupported || /anybrowser=(true|1)/.test(window.location.href);
            if (!hasLoggedBrowser) {
                pxt.log("Browser: " + browser() + " " + versionString + " on " + os());
                if (!isSupported) {
                    pxt.tickEvent("browser.unsupported." + navigator.userAgent);
                }
                hasLoggedBrowser = true;
            }
            return isSupported;
        }
        BrowserUtils.isBrowserSupported = isBrowserSupported;
        function devicePixelRatio() {
            if (typeof window === "undefined" || !window.screen)
                return 1;
            if (window.screen.systemXDPI !== undefined
                && window.screen.logicalXDPI !== undefined
                && window.screen.systemXDPI > window.screen.logicalXDPI) {
                return window.screen.systemXDPI / window.screen.logicalXDPI;
            }
            else if (window && window.devicePixelRatio !== undefined) {
                return window.devicePixelRatio;
            }
            return 1;
        }
        BrowserUtils.devicePixelRatio = devicePixelRatio;
        function browserDownloadBinText(text, name, contentType, userContextWindow, onError) {
            if (contentType === void 0) { contentType = "application/octet-stream"; }
            return browserDownloadBase64(ts.pxtc.encodeBase64(text), name, contentType, userContextWindow, onError);
        }
        BrowserUtils.browserDownloadBinText = browserDownloadBinText;
        function browserDownloadText(text, name, contentType, userContextWindow, onError) {
            if (contentType === void 0) { contentType = "application/octet-stream"; }
            return browserDownloadBase64(ts.pxtc.encodeBase64(pxt.Util.toUTF8(text)), name, contentType, userContextWindow, onError);
        }
        BrowserUtils.browserDownloadText = browserDownloadText;
        function isBrowserDownloadInSameWindow() {
            var windowOpen = isMobile() && isSafari() && !/downloadWindowOpen=0/i.test(window.location.href);
            return windowOpen;
        }
        BrowserUtils.isBrowserDownloadInSameWindow = isBrowserDownloadInSameWindow;
        // for browsers that strictly require that a download gets initiated within a user click
        function isBrowserDownloadWithinUserContext() {
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            var r = (isMobile() && isSafari() && v >= 11) || /downloadUserContext=1/i.test(window.location.href);
            return r;
        }
        BrowserUtils.isBrowserDownloadWithinUserContext = isBrowserDownloadWithinUserContext;
        function browserDownloadDataUri(uri, name, userContextWindow) {
            var windowOpen = isBrowserDownloadInSameWindow();
            var versionString = browserVersion();
            var v = parseInt(versionString || "0");
            if (windowOpen) {
                if (userContextWindow)
                    userContextWindow.location.href = uri;
                else
                    window.open(uri, "_self");
            }
            else if (pxt.BrowserUtils.isSafari()
                && (v < 10 || (versionString.indexOf('10.0') == 0) || isMobile())) {
                // For Safari versions prior to 10.1 and all Mobile Safari versions
                // For mysterious reasons, the "link" trick closes the
                // PouchDB database
                var iframe = document.getElementById("downloader");
                if (!iframe) {
                    pxt.debug('injecting downloader iframe');
                    iframe = document.createElement("iframe");
                    iframe.id = "downloader";
                    iframe.style.position = "absolute";
                    iframe.style.right = "0";
                    iframe.style.bottom = "0";
                    iframe.style.zIndex = "-1";
                    iframe.style.width = "1px";
                    iframe.style.height = "1px";
                    document.body.appendChild(iframe);
                }
                iframe.src = uri;
            }
            else if (pxt.BrowserUtils.isEdge() || pxt.BrowserUtils.isIE()) {
                //Fix for edge
                var byteString = atob(uri.split(',')[1]);
                var ia = pxt.Util.stringToUint8Array(byteString);
                var blob = new Blob([ia], { type: "img/png" });
                window.navigator.msSaveOrOpenBlob(blob, name);
            }
            else {
                var link = window.document.createElement('a');
                if (typeof link.download == "string") {
                    link.href = uri;
                    link.download = name;
                    document.body.appendChild(link); // for FF
                    link.click();
                    document.body.removeChild(link);
                }
                else {
                    document.location.href = uri;
                }
            }
        }
        BrowserUtils.browserDownloadDataUri = browserDownloadDataUri;
        function browserDownloadUInt8Array(buf, name, contentType, userContextWindow, onError) {
            if (contentType === void 0) { contentType = "application/octet-stream"; }
            return browserDownloadBase64(ts.pxtc.encodeBase64(pxt.Util.uint8ArrayToString(buf)), name, contentType, userContextWindow, onError);
        }
        BrowserUtils.browserDownloadUInt8Array = browserDownloadUInt8Array;
        function toDownloadDataUri(b64, contentType) {
            var protocol = "data";
            if (isMobile() && isSafari() && pxt.appTarget.appTheme.mobileSafariDownloadProtocol)
                protocol = pxt.appTarget.appTheme.mobileSafariDownloadProtocol;
            var m = /downloadProtocol=([a-z0-9:/?]+)/i.exec(window.location.href);
            if (m)
                protocol = m[1];
            var dataurl = protocol + ":" + contentType + ";base64," + b64;
            return dataurl;
        }
        BrowserUtils.toDownloadDataUri = toDownloadDataUri;
        function browserDownloadBase64(b64, name, contentType, userContextWindow, onError) {
            if (contentType === void 0) { contentType = "application/octet-stream"; }
            pxt.debug('trigger download');
            var saveBlob = window.navigator.msSaveOrOpenBlob && !pxt.BrowserUtils.isMobile();
            var dataurl = toDownloadDataUri(b64, name);
            try {
                if (saveBlob) {
                    var b = new Blob([pxt.Util.stringToUint8Array(atob(b64))], { type: contentType });
                    var result = window.navigator.msSaveOrOpenBlob(b, name);
                }
                else
                    browserDownloadDataUri(dataurl, name, userContextWindow);
            }
            catch (e) {
                if (onError)
                    onError(e);
                pxt.debug("saving failed");
            }
            return dataurl;
        }
        BrowserUtils.browserDownloadBase64 = browserDownloadBase64;
        function loadImageAsync(data) {
            var img = document.createElement("img");
            return new Promise(function (resolve, reject) {
                img.onload = function () { return resolve(img); };
                img.onerror = function () { return resolve(undefined); };
                img.crossOrigin = "anonymous";
                img.src = data;
            });
        }
        BrowserUtils.loadImageAsync = loadImageAsync;
        function resolveCdnUrl(path) {
            // don't expand full urls
            if (/^https?:\/\//i.test(path))
                return path;
            var monacoPaths = window.MonacoPaths || {};
            var blobPath = monacoPaths[path];
            // find compute blob url
            if (blobPath)
                return blobPath;
            // might have been exanded already
            if (pxt.U.startsWith(path, pxt.webConfig.commitCdnUrl))
                return path;
            // append CDN
            return pxt.webConfig.commitCdnUrl + path;
        }
        function loadStyleAsync(path, rtl) {
            if (rtl)
                path = "rtl" + path;
            var id = "style-" + path;
            if (document.getElementById(id))
                return Promise.resolve();
            var url = resolveCdnUrl(path);
            var links = pxt.Util.toArray(document.head.getElementsByTagName("link"));
            var link = links.filter(function (l) { return l.getAttribute("href") == url; })[0];
            if (link) {
                if (!link.id)
                    link.id = id;
                return Promise.resolve();
            }
            return new Promise(function (resolve, reject) {
                var el = document.createElement("link");
                el.href = url;
                el.rel = "stylesheet";
                el.type = "text/css";
                el.id = id;
                el.addEventListener('load', function () { return resolve(); });
                el.addEventListener('error', function (e) { return reject(e); });
                document.head.appendChild(el);
            });
        }
        BrowserUtils.loadStyleAsync = loadStyleAsync;
        function loadScriptAsync(path) {
            var url = resolveCdnUrl(path);
            pxt.debug("script: loading " + url);
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                script.async = true;
                script.addEventListener('load', function () { return resolve(); });
                script.addEventListener('error', function (e) { return reject(e); });
                document.body.appendChild(script);
            });
        }
        BrowserUtils.loadScriptAsync = loadScriptAsync;
        function loadAjaxAsync(url) {
            return new Promise(function (resolve, reject) {
                var httprequest = new XMLHttpRequest();
                httprequest.onreadystatechange = function () {
                    if (httprequest.readyState == XMLHttpRequest.DONE) {
                        if (httprequest.status == 200) {
                            resolve(httprequest.responseText);
                        }
                        else {
                            reject(httprequest.status);
                        }
                    }
                };
                httprequest.open("GET", url, true);
                httprequest.send();
            });
        }
        BrowserUtils.loadAjaxAsync = loadAjaxAsync;
        var loadBlocklyPromise;
        function loadBlocklyAsync() {
            if (!loadBlocklyPromise) {
                pxt.debug("blockly: delay load");
                var p = pxt.BrowserUtils.loadStyleAsync("blockly.css", ts.pxtc.Util.isUserLanguageRtl());
                // js not loaded yet?
                if (typeof Blockly === "undefined")
                    p = p.then(function () { return pxt.BrowserUtils.loadScriptAsync("pxtblockly.js"); });
                p = p.then(function () {
                    pxt.debug("blockly: loaded");
                });
                loadBlocklyPromise = p;
            }
            return loadBlocklyPromise;
        }
        BrowserUtils.loadBlocklyAsync = loadBlocklyAsync;
        function patchCdn(url) {
            if (!url)
                return url;
            var online = pxt.getOnlineCdnUrl();
            if (online)
                return url.replace("@cdnUrl@", online);
            else
                return url.replace(/@cdnUrl@\/(blob|commit)\/[a-f0-9]{40}\//, "./");
        }
        BrowserUtils.patchCdn = patchCdn;
        function initTheme() {
            var theme = pxt.appTarget.appTheme;
            if (theme) {
                if (theme.accentColor) {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.appendChild(document.createTextNode(".ui.accent { color: " + theme.accentColor + "; }\n                .ui.inverted.menu .accent.active.item, .ui.inverted.accent.menu  { background-color: " + theme.accentColor + "; }"));
                    document.getElementsByTagName('head')[0].appendChild(style);
                }
            }
            // RTL languages
            if (pxt.Util.isUserLanguageRtl()) {
                pxt.debug("rtl layout");
                document.body.classList.add("rtl");
                document.body.style.direction = "rtl";
                // replace semantic.css with rtlsemantic.css
                var links = pxt.Util.toArray(document.head.getElementsByTagName("link"));
                var semanticLink = links.filter(function (l) { return pxt.Util.endsWith(l.getAttribute("href"), "semantic.css"); })[0];
                if (semanticLink) {
                    var semanticHref = semanticLink.getAttribute("data-rtl");
                    if (semanticHref) {
                        pxt.debug("swapping to " + semanticHref);
                        semanticLink.setAttribute("href", semanticHref);
                    }
                }
                // replace blockly.css with rtlblockly.css if possible
                var blocklyLink = links.filter(function (l) { return pxt.Util.endsWith(l.getAttribute("href"), "blockly.css"); })[0];
                if (blocklyLink) {
                    var blocklyHref = blocklyLink.getAttribute("data-rtl");
                    if (blocklyHref) {
                        pxt.debug("swapping to " + blocklyHref);
                        blocklyLink.setAttribute("href", blocklyHref);
                        blocklyLink.removeAttribute("data-rtl");
                    }
                }
            }
        }
        BrowserUtils.initTheme = initTheme;
        /**
         * Utility method to change the hash.
         * Pass keepHistory to retain an entry of the change in the browser history.
         */
        function changeHash(hash, keepHistory) {
            if (hash.charAt(0) != '#')
                hash = '#' + hash;
            if (keepHistory) {
                window.location.hash = hash;
            }
            else {
                window.history.replaceState('', '', hash);
            }
        }
        BrowserUtils.changeHash = changeHash;
        /**
         * Simple utility method to join urls.
         */
        function urlJoin(urlPath1, urlPath2) {
            if (!urlPath1)
                return urlPath2;
            if (!urlPath2)
                return urlPath1;
            var normalizedUrl1 = (urlPath1.indexOf('/') == urlPath1.length - 1) ?
                urlPath1.substring(0, urlPath1.length - 1) : urlPath1;
            var normalizedUrl2 = (urlPath2.indexOf('/') == 0) ?
                urlPath2.substring(1) : urlPath2;
            return normalizedUrl1 + "/" + normalizedUrl2;
        }
        BrowserUtils.urlJoin = urlJoin;
        /**
         * Simple utility method to join multiple urls.
         */
        function joinURLs() {
            var parts = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parts[_i] = arguments[_i];
            }
            var result;
            if (parts) {
                for (var i = 0; i < parts.length; i++) {
                    result = urlJoin(result, parts[i]);
                }
            }
            return result;
        }
        BrowserUtils.joinURLs = joinURLs;
    })(BrowserUtils = pxt.BrowserUtils || (pxt.BrowserUtils = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var commands;
    (function (commands) {
        // overriden by targets
        commands.deployCoreAsync = undefined;
        commands.patchCompileResultAsync = undefined;
        commands.browserDownloadAsync = undefined;
        commands.saveOnlyAsync = undefined;
        commands.showUploadInstructionsAsync = undefined;
        commands.saveProjectAsync = undefined;
        commands.electronDeployAsync = undefined; // A pointer to the Electron deploy function, so that targets can access it in their extension.ts
    })(commands = pxt.commands || (pxt.commands = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtarget.d.ts"/>
var pxt;
(function (pxt) {
    var lzmaPromise;
    function getLzmaAsync() {
        var lzmaPromise;
        if (!lzmaPromise) {
            if (pxt.U.isNodeJS)
                lzmaPromise = Promise.resolve(require("lzma"));
            else
                lzmaPromise = Promise.resolve(window.LZMA);
            lzmaPromise.then(function (res) {
                if (!res)
                    pxt.reportError('lzma', 'failed to load');
                return res;
            });
        }
        return lzmaPromise;
    }
    function lzmaDecompressAsync(buf) {
        return getLzmaAsync()
            .then(function (lzma) { return new Promise(function (resolve, reject) {
            try {
                lzma.decompress(buf, function (res, error) {
                    if (error)
                        pxt.debug("lzma decompression failed");
                    resolve(error ? undefined : res);
                });
            }
            catch (e) {
                if (e)
                    pxt.debug("lzma decompression failed");
                resolve(undefined);
            }
        }); });
    }
    pxt.lzmaDecompressAsync = lzmaDecompressAsync;
    function lzmaCompressAsync(text) {
        return getLzmaAsync()
            .then(function (lzma) { return new Promise(function (resolve, reject) {
            try {
                lzma.compress(text, 7, function (res, error) {
                    if (error)
                        pxt.reportException(error);
                    resolve(error ? undefined : new Uint8Array(res));
                });
            }
            catch (e) {
                pxt.reportException(e);
                resolve(undefined);
            }
        }); });
    }
    pxt.lzmaCompressAsync = lzmaCompressAsync;
})(pxt || (pxt = {}));
// preprocess C++ file to find functions exposed to pxt
(function (pxt) {
    var cpp;
    (function (cpp) {
        var U = pxtc.Util;
        var lf = U.lf;
        function parseExpr(e) {
            e = e.trim();
            e = e.replace(/^\(/, "");
            e = e.replace(/\)$/, "");
            e = e.trim();
            if (/^-/.test(e) && parseExpr(e.slice(1)) != null)
                return -parseExpr(e.slice(1));
            if (/^0x[0-9a-f]+$/i.exec(e))
                return parseInt(e.slice(2), 16);
            if (/^0b[01]+$/i.exec(e))
                return parseInt(e.slice(2), 2);
            if (/^0\d+$/i.exec(e))
                return parseInt(e, 8);
            if (/^\d+$/i.exec(e))
                return parseInt(e, 10);
            return null;
        }
        function nsWriter(nskw) {
            if (nskw === void 0) { nskw = "namespace"; }
            var text = "";
            var currNs = "";
            var setNs = function (ns, over) {
                if (over === void 0) { over = ""; }
                if (currNs == ns)
                    return;
                if (currNs)
                    text += "}\n";
                if (ns)
                    text += over || (nskw + " " + ns + " {\n");
                currNs = ns;
            };
            var indent = "    ";
            return {
                setNs: setNs,
                clear: function () {
                    text = "";
                    currNs = "";
                },
                write: function (s) {
                    if (!s.trim())
                        text += "\n";
                    else {
                        s = s.trim()
                            .replace(/^\s*/mg, indent)
                            .replace(/^(\s*)\*/mg, function (f, s) { return s + " *"; });
                        text += s + "\n";
                    }
                },
                incrIndent: function () {
                    indent += "    ";
                },
                decrIndent: function () {
                    indent = indent.slice(4);
                },
                finish: function () {
                    setNs("");
                    return text;
                }
            };
        }
        cpp.nsWriter = nsWriter;
        function parseCppInt(v) {
            if (!v)
                return null;
            v = v.trim();
            var mm = /^\((.*)\)/.exec(v);
            if (mm)
                v = mm[1];
            if (/^-?(\d+|0[xX][0-9a-fA-F]+)$/.test(v))
                return parseInt(v);
            return null;
        }
        cpp.parseCppInt = parseCppInt;
        var prevExtInfo;
        var prevSnapshot;
        var PkgConflictError = /** @class */ (function (_super) {
            __extends(PkgConflictError, _super);
            function PkgConflictError(msg) {
                var _this = _super.call(this, msg) || this;
                _this.isUserError = true;
                _this.message = msg;
                return _this;
            }
            return PkgConflictError;
        }(Error));
        cpp.PkgConflictError = PkgConflictError;
        function getExtensionInfo(mainPkg) {
            var pkgSnapshot = {};
            var constsName = "dal.d.ts";
            var sourcePath = "/source/";
            for (var _i = 0, _a = mainPkg.sortedDeps(); _i < _a.length; _i++) {
                var pkg = _a[_i];
                pkg.addSnapshot(pkgSnapshot, [constsName, ".h", ".cpp"]);
            }
            if (prevSnapshot && U.stringMapEq(pkgSnapshot, prevSnapshot)) {
                pxt.debug("Using cached extinfo");
                return prevExtInfo;
            }
            pxt.debug("Generating new extinfo");
            var res = pxtc.emptyExtInfo();
            var compileService = pxt.appTarget.compileService;
            if (!compileService)
                compileService = {
                    gittag: "none",
                    serviceId: "nocompile"
                };
            compileService = U.clone(compileService);
            var compile = pxt.appTarget.compile;
            if (!compile)
                compile = {
                    isNative: false,
                    hasHex: false,
                };
            var isCSharp = compile.nativeType == pxtc.NATIVE_TYPE_CS;
            var isPlatformio = !!compileService.platformioIni;
            var isCodal = compileService.buildEngine == "codal" || compileService.buildEngine == "dockercodal";
            var isDockerMake = compileService.buildEngine == "dockermake";
            var isYotta = !isCSharp && !isPlatformio && !isCodal && !isDockerMake;
            if (isPlatformio)
                sourcePath = "/src/";
            else if (isCodal || isDockerMake)
                sourcePath = "/pxtapp/";
            var pxtConfig = "// Configuration defines\n";
            var pointersInc = "\nPXT_SHIMS_BEGIN\n";
            var abiInc = "";
            var includesInc = "#include \"pxt.h\"\n";
            var fullCS = "";
            var thisErrors = "";
            var dTsNamespace = "";
            var err = function (s) { return thisErrors += "   " + fileName + "(" + lineNo + "): " + s + "\n"; };
            var lineNo = 0;
            var fileName = "";
            var protos = nsWriter("namespace");
            var shimsDTS = nsWriter("declare namespace");
            var enumsDTS = nsWriter("declare namespace");
            var allErrors = "";
            var knownEnums = {};
            var enumVals = {
                "true": "1",
                "false": "0",
                "null": "0",
                "NULL": "0",
            };
            // we sometimes append _ to C++ names to avoid name clashes
            function toJs(name) {
                return name.trim().replace(/[\_\*]$/, "");
            }
            var makefile = "";
            for (var _b = 0, _c = mainPkg.sortedDeps(); _b < _c.length; _b++) {
                var pkg = _c[_b];
                if (pkg.getFiles().indexOf(constsName) >= 0) {
                    var src = pkg.host().readFile(pkg, constsName);
                    pxt.Util.assert(!!src, constsName + " not found in " + pkg.id);
                    src.split(/\r?\n/).forEach(function (ln) {
                        var m = /^\s*(\w+) = (.*),/.exec(ln);
                        if (m) {
                            enumVals[m[1]] = m[2];
                        }
                    });
                }
                if (!makefile && pkg.getFiles().indexOf("Makefile") >= 0) {
                    makefile = pkg.host().readFile(pkg, "Makefile");
                }
            }
            function stripComments(ln) {
                return ln.replace(/\/\/.*/, "").replace(/\/\*/, "");
            }
            var enumVal = 0;
            var inEnum = false;
            var currNs = "";
            var currDocComment = "";
            var currAttrs = "";
            var inDocComment = false;
            var outp = "";
            function handleComments(ln) {
                if (inEnum) {
                    outp += ln + "\n";
                    return true;
                }
                if (/^\s*\/\*\*/.test(ln)) {
                    inDocComment = true;
                    currDocComment = ln + "\n";
                    if (/\*\//.test(ln))
                        inDocComment = false;
                    outp += "//\n";
                    return true;
                }
                if (inDocComment) {
                    currDocComment += ln + "\n";
                    if (/\*\//.test(ln)) {
                        inDocComment = false;
                    }
                    outp += "//\n";
                    return true;
                }
                if (/^\s*\/\/%/.test(ln)) {
                    currAttrs += ln + "\n";
                    outp += "//\n";
                    return true;
                }
                outp += ln + "\n";
                return false;
            }
            function enterEnum(cpname, brace) {
                inEnum = true;
                enumVal = -1;
                enumsDTS.write("");
                enumsDTS.write("");
                if (currAttrs || currDocComment) {
                    enumsDTS.write(currDocComment);
                    enumsDTS.write(currAttrs);
                    currAttrs = "";
                    currDocComment = "";
                }
                enumsDTS.write("declare const enum " + toJs(cpname) + " " + brace);
                knownEnums[cpname] = true;
            }
            function processEnumLine(ln) {
                var lnNC = stripComments(ln);
                if (inEnum && lnNC.indexOf("}") >= 0) {
                    inEnum = false;
                    enumsDTS.write("}");
                }
                if (!inEnum)
                    return;
                // parse the enum case, with lots of optional stuff (?)
                var mm = /^\s*(\w+)\s*(=\s*(.*?))?,?\s*$/.exec(lnNC);
                if (mm) {
                    var nm = mm[1];
                    var v = mm[3];
                    var opt = "";
                    if (v) {
                        // user-supplied value
                        v = v.trim();
                        var curr = U.lookup(enumVals, v);
                        if (curr != null) {
                            opt = "  // " + v;
                            v = curr;
                        }
                        enumVal = parseCppInt(v);
                        if (enumVal == null)
                            err("cannot determine value of " + lnNC);
                    }
                    else {
                        // no user-supplied value
                        enumVal++;
                        v = enumVal + "";
                    }
                    enumsDTS.write("    " + toJs(nm) + " = " + v + "," + opt);
                }
                else {
                    enumsDTS.write(ln);
                }
            }
            function finishNamespace() {
                shimsDTS.setNs("");
                shimsDTS.write("");
                shimsDTS.write("");
                if (currAttrs || currDocComment) {
                    shimsDTS.write(currDocComment);
                    shimsDTS.write(currAttrs);
                    currAttrs = "";
                    currDocComment = "";
                }
            }
            function parseArg(parsedAttrs, s) {
                s = s.trim();
                var m = /(.*)=\s*(-?\w+)$/.exec(s);
                var defl = "";
                var qm = "";
                if (m) {
                    defl = m[2];
                    qm = "?";
                    s = m[1].trim();
                }
                m = /^(.*?)(\w+)$/.exec(s);
                if (!m) {
                    err("invalid argument: " + s);
                    return {
                        name: "???",
                        type: "int"
                    };
                }
                var argName = m[2];
                if (parsedAttrs.paramDefl[argName]) {
                    defl = parsedAttrs.paramDefl[argName];
                    qm = "?";
                }
                var numVal = defl ? U.lookup(enumVals, defl) : null;
                if (numVal != null)
                    defl = numVal;
                if (defl) {
                    if (parseCppInt(defl) == null)
                        err("Invalid default value (non-integer): " + defl);
                    currAttrs += " " + argName + ".defl=" + defl;
                }
                return {
                    name: argName + qm,
                    type: m[1]
                };
            }
            function parseCpp(src, isHeader) {
                currNs = "";
                currDocComment = "";
                currAttrs = "";
                inDocComment = false;
                var indexedInstanceAttrs;
                var indexedInstanceIdx = -1;
                // replace #if 0 .... #endif with newlines
                src = src.replace(/^\s*#\s*if\s+0\s*$[^]*?^\s*#\s*endif\s*$/mg, function (f) { return f.replace(/[^\n]/g, ""); });
                // special handling of C++ namespace that ends with Methods (e.g. FooMethods)
                // such a namespace will be converted into a TypeScript interface
                // this enables simple objects with methods to be defined. See, for example:
                // https://github.com/Microsoft/pxt-microbit/blob/master/libs/core/buffer.cpp
                // within that namespace, the first parameter of each function should have
                // the type Foo
                function interfaceName() {
                    var n = currNs.replace(/Methods$/, "");
                    if (n == currNs)
                        return null;
                    return n;
                }
                lineNo = 0;
                // the C++ types we can map to TypeScript
                function mapType(tp) {
                    switch (tp.replace(/\s+/g, "")) {
                        case "void": return "void";
                        // TODO: need int16_t
                        case "int32_t":
                        case "int":
                            return "int32";
                        case "uint32_t":
                        case "unsigned":
                            return "uint32";
                        case "TNumber":
                        case "float":
                        case "double":
                            return "number";
                        case "uint16_t": return "uint16";
                        case "int16_t":
                        case "short": return "int16";
                        case "uint8_t":
                        case "byte": return "uint8";
                        case "int8_t":
                        case "sbyte": return "int8";
                        case "bool":
                            if (compile.shortPointers)
                                err("use 'boolean' not 'bool' on 8 bit targets");
                            return "boolean";
                        case "StringData*": return "string";
                        case "String": return "string";
                        case "ImageLiteral_": return "string";
                        case "ImageLiteral": return "string";
                        case "Action": return "() => void";
                        case "TValue": return "any";
                        default:
                            return toJs(tp);
                    }
                }
                function mapRunTimeType(tp) {
                    tp = tp.replace(/\s+/g, "");
                    switch (tp) {
                        case "int32_t":
                        case "uint32_t":
                        case "unsigned":
                        case "uint16_t":
                        case "int16_t":
                        case "short":
                        case "uint8_t":
                        case "byte":
                        case "int8_t":
                        case "sbyte":
                        case "int":
                            return "I";
                        case "void": return "V";
                        case "float": return "F";
                        case "TNumber": return "N";
                        case "TValue": return "T";
                        case "bool": return "B";
                        case "double": return "D";
                        case "ImageLiteral_":
                            return "T";
                        default:
                            if (U.lookup(knownEnums, tp))
                                return "I";
                            return "_";
                    }
                }
                outp = "";
                inEnum = false;
                enumVal = 0;
                enumsDTS.setNs("");
                shimsDTS.setNs("");
                src.split(/\r?\n/).forEach(function (ln) {
                    ++lineNo;
                    // remove comments (NC = no comments)
                    var lnNC = stripComments(ln);
                    processEnumLine(ln);
                    // "enum class" and "enum struct" is C++ syntax to force scoping of
                    // enum members
                    var enM = /^\s*enum\s+(|class\s+|struct\s+)(\w+)\s*({|$)/.exec(lnNC);
                    if (enM) {
                        enterEnum(enM[2], enM[3]);
                        if (!isHeader) {
                            protos.setNs(currNs);
                            protos.write("enum " + enM[2] + " : int;");
                        }
                    }
                    if (handleComments(ln))
                        return;
                    if (/^typedef.*;\s*$/.test(ln)) {
                        protos.setNs(currNs);
                        protos.write(ln);
                    }
                    var m = /^\s*namespace\s+(\w+)/.exec(ln);
                    if (m) {
                        //if (currNs) err("more than one namespace declaration not supported")
                        currNs = m[1];
                        if (interfaceName()) {
                            finishNamespace();
                            var tpName = interfaceName();
                            shimsDTS.setNs(currNs, "declare interface " + tpName + " {");
                        }
                        else if (currAttrs || currDocComment) {
                            finishNamespace();
                            shimsDTS.setNs(toJs(currNs));
                            enumsDTS.setNs(toJs(currNs));
                        }
                        return;
                    }
                    m = /^PXT_ABI\((\w+)\)/.exec(ln);
                    if (m) {
                        pointersInc += "PXT_FNPTR(::" + m[1] + "),\n";
                        abiInc += "extern \"C\" void " + m[1] + "();\n";
                        res.functions.push({
                            name: m[1],
                            argsFmt: "",
                            value: 0
                        });
                    }
                    m = /^#define\s+PXT_COMM_BASE\s+([0-9a-fx]+)/.exec(ln);
                    if (m)
                        res.commBase = parseInt(m[1]);
                    // function definition
                    m = /^\s*(\w+)([\*\&]*\s+[\*\&]*)(\w+)\s*\(([^\(\)]*)\)\s*(;\s*$|\{|$)/.exec(ln);
                    if (currAttrs && m) {
                        indexedInstanceAttrs = null;
                        var parsedAttrs_1 = pxtc.parseCommentString(currAttrs);
                        // top-level functions (outside of a namespace) are not permitted
                        if (!currNs)
                            err("missing namespace declaration");
                        var retTp = (m[1] + m[2]).replace(/\s+/g, "");
                        var funName = m[3];
                        var origArgs = m[4];
                        currAttrs = currAttrs.trim().replace(/ \w+\.defl=\w+/g, "");
                        var argsFmt_1 = mapRunTimeType(retTp);
                        var args = origArgs.split(/,/).filter(function (s) { return !!s; }).map(function (s) {
                            var r = parseArg(parsedAttrs_1, s);
                            argsFmt_1 += mapRunTimeType(r.type);
                            return r.name + ": " + mapType(r.type);
                        });
                        var numArgs = args.length;
                        var fi = {
                            name: currNs + "::" + funName,
                            argsFmt: argsFmt_1,
                            value: null
                        };
                        //console.log(`${ln.trim()} : ${argsFmt}`)
                        if (currDocComment) {
                            shimsDTS.setNs(toJs(currNs));
                            shimsDTS.write("");
                            shimsDTS.write(currDocComment);
                            if (/ImageLiteral/.test(m[4]) && !/imageLiteral=/.test(currAttrs))
                                currAttrs += " imageLiteral=1";
                            currAttrs += " shim=" + fi.name;
                            shimsDTS.write(currAttrs);
                            funName = toJs(funName);
                            if (interfaceName()) {
                                var tp0 = (args[0] || "").replace(/^.*:\s*/, "").trim();
                                if (tp0.toLowerCase() != interfaceName().toLowerCase()) {
                                    err(lf("Invalid first argument; should be of type '{0}', but is '{1}'", interfaceName(), tp0));
                                }
                                args.shift();
                                if (args.length == 0 && /\bproperty\b/.test(currAttrs))
                                    shimsDTS.write(funName + ": " + mapType(retTp) + ";");
                                else
                                    shimsDTS.write(funName + "(" + args.join(", ") + "): " + mapType(retTp) + ";");
                            }
                            else {
                                shimsDTS.write("function " + funName + "(" + args.join(", ") + "): " + mapType(retTp) + ";");
                            }
                        }
                        currDocComment = "";
                        currAttrs = "";
                        if (!isHeader) {
                            protos.setNs(currNs);
                            protos.write(retTp + " " + funName + "(" + origArgs + ");");
                        }
                        res.functions.push(fi);
                        if (isYotta)
                            pointersInc += "(uint32_t)(void*)::" + fi.name + ",\n";
                        else
                            pointersInc += "PXT_FNPTR(::" + fi.name + "),\n";
                        return;
                    }
                    m = /^\s*(\w+)\s+(\w+)\s*;/.exec(ln);
                    if (currAttrs && m) {
                        var parsedAttrs = pxtc.parseCommentString(currAttrs);
                        if (parsedAttrs.indexedInstanceNS) {
                            indexedInstanceAttrs = parsedAttrs;
                            shimsDTS.setNs(parsedAttrs.indexedInstanceNS);
                            indexedInstanceIdx = 0;
                        }
                        var tp = m[1];
                        var nm = m[2];
                        if (indexedInstanceAttrs) {
                            currAttrs = currAttrs.trim();
                            currAttrs += " fixedInstance shim=" + indexedInstanceAttrs.indexedInstanceShim + "(" + indexedInstanceIdx++ + ")";
                            shimsDTS.write("");
                            shimsDTS.write(currDocComment);
                            shimsDTS.write(currAttrs);
                            shimsDTS.write("const " + nm + ": " + mapType(tp) + ";");
                            currDocComment = "";
                            currAttrs = "";
                            return;
                        }
                    }
                    if (currAttrs && ln.trim()) {
                        err("declaration not understood: " + ln);
                        currAttrs = "";
                        currDocComment = "";
                        return;
                    }
                });
                return outp;
            }
            function parseCs(src) {
                currNs = "";
                currDocComment = "";
                currAttrs = "";
                inDocComment = false;
                // replace #if false .... #endif with newlines
                src = src.replace(/^\s*#\s*if\s+false\s*$[^]*?^\s*#\s*endif\s*$/mg, function (f) { return f.replace(/[^\n]/g, ""); });
                lineNo = 0;
                // the C# types we can map to TypeScript
                function mapType(tp) {
                    switch (tp.replace(/\s+/g, "")) {
                        case "void": return "void";
                        case "int": return "int32";
                        case "uint": return "uint32";
                        case "float":
                        case "double": return "number";
                        case "ushort": return "uint16";
                        case "short": return "int16";
                        case "byte": return "uint8";
                        case "sbyte": return "int8";
                        case "bool": return "boolean";
                        case "string":
                        case "String": return "string";
                        case "Function": return "() => void";
                        case "object": return "any";
                        default:
                            return toJs(tp);
                    }
                }
                function isNumberType(tp) {
                    tp = tp.replace(/\s+/g, "");
                    if (U.lookup(knownEnums, tp))
                        return true;
                    var mt = mapType(tp);
                    if (mt == "number" || /^u?int\d+$/.test(mt))
                        return true;
                    return false;
                }
                function mapRunTimeType(tp) {
                    tp = tp.replace(/\s+/g, "");
                    if (isNumberType(tp))
                        tp = "#" + tp;
                    return tp + ";";
                }
                outp = ""; // we don't really care about this one for C#
                inEnum = false;
                enumVal = 0;
                enumsDTS.setNs("");
                shimsDTS.setNs("");
                src.split(/\r?\n/).forEach(function (ln) {
                    ++lineNo;
                    // remove comments (NC = no comments)
                    var lnNC = stripComments(ln);
                    processEnumLine(ln);
                    var enM = /^\s*(public) enum\s+(\w+)\s*({|$)/.exec(lnNC);
                    if (enM) {
                        enterEnum(enM[2], enM[3]);
                    }
                    if (handleComments(ln))
                        return;
                    var m = /^\s*public (static\s+|partial\s+)*class\s+(\w+)/.exec(ln);
                    if (m) {
                        currNs = m[2];
                        if (currAttrs || currDocComment) {
                            finishNamespace();
                            shimsDTS.setNs(toJs(currNs));
                            enumsDTS.setNs(toJs(currNs));
                        }
                        return;
                    }
                    // function definition
                    m = /^\s*public static (async\s+)*([\w\[\]<>]+)\s+(\w+)\(([^\(\)]*)\)\s*(;\s*$|\{|$)/.exec(ln);
                    if (currAttrs && m) {
                        var parsedAttrs = pxtc.parseCommentString(currAttrs);
                        // top-level functions (outside of a namespace) are not permitted
                        if (!currNs)
                            err("missing namespace declaration");
                        var retTp = m[2];
                        var funName = m[3];
                        var origArgs = m[4];
                        var isAsync = false;
                        currAttrs = currAttrs.trim().replace(/ \w+\.defl=\w+/g, "");
                        if (retTp == "Task") {
                            retTp = "void";
                            isAsync = true;
                        }
                        else {
                            var mm = /^Task<(.*)>$/.exec(retTp);
                            if (mm) {
                                isAsync = true;
                                retTp = mm[1];
                            }
                        }
                        var argsFmt = mapRunTimeType(retTp);
                        if (isAsync) {
                            argsFmt = "async;" + argsFmt;
                            currAttrs += " async";
                        }
                        var args = [];
                        for (var _i = 0, _a = origArgs.split(/,/); _i < _a.length; _i++) {
                            var s = _a[_i];
                            if (!s)
                                continue;
                            var r = parseArg(parsedAttrs, s);
                            var mapped = mapRunTimeType(r.type);
                            argsFmt += mapped;
                            if (mapped != "CTX;")
                                args.push(r.name + ": " + mapType(r.type));
                        }
                        var fi = {
                            name: currNs + "::" + funName,
                            argsFmt: argsFmt,
                            value: null
                        };
                        //console.log(`${ln.trim()} : ${argsFmt}`)
                        if (currDocComment) {
                            shimsDTS.setNs(toJs(currNs));
                            shimsDTS.write("");
                            shimsDTS.write(currDocComment);
                            currAttrs += " shim=" + fi.name;
                            shimsDTS.write(currAttrs);
                            funName = toJs(funName);
                            shimsDTS.write("function " + funName + "(" + args.join(", ") + "): " + mapType(retTp) + ";");
                        }
                        currDocComment = "";
                        currAttrs = "";
                        res.functions.push(fi);
                        return;
                    }
                    if (currAttrs && ln.trim()) {
                        err("declaration not understood: " + ln);
                        currAttrs = "";
                        currDocComment = "";
                        return;
                    }
                });
                return outp;
            }
            var currSettings = U.clone(compileService.yottaConfig || {});
            var optSettings = {};
            var settingSrc = {};
            function parseJson(pkg) {
                var j0 = pkg.config.platformio;
                if (j0 && j0.dependencies) {
                    U.jsonCopyFrom(res.platformio.dependencies, j0.dependencies);
                }
                if (res.npmDependencies && pkg.config.npmDependencies)
                    U.jsonCopyFrom(res.npmDependencies, pkg.config.npmDependencies);
                var json = pkg.config.yotta;
                if (!json)
                    return;
                // TODO check for conflicts
                if (json.dependencies) {
                    U.jsonCopyFrom(res.yotta.dependencies, json.dependencies);
                }
                if (json.config) {
                    var cfg = U.jsonFlatten(json.config);
                    for (var _i = 0, _a = Object.keys(cfg); _i < _a.length; _i++) {
                        var settingName = _a[_i];
                        var prev = U.lookup(settingSrc, settingName);
                        var settingValue = cfg[settingName];
                        if (!prev || prev.config.yotta.configIsJustDefaults) {
                            settingSrc[settingName] = pkg;
                            currSettings[settingName] = settingValue;
                        }
                        else if (currSettings[settingName] === settingValue) {
                            // OK
                        }
                        else if (!pkg.parent.config.yotta || !pkg.parent.config.yotta.ignoreConflicts) {
                            var err_1 = new PkgConflictError(lf("conflict on yotta setting {0} between extensions {1} and {2}", settingName, pkg.id, prev.id));
                            err_1.pkg0 = prev;
                            err_1.pkg1 = pkg;
                            err_1.settingName = settingName;
                            throw err_1;
                        }
                    }
                }
                if (json.optionalConfig) {
                    var cfg = U.jsonFlatten(json.optionalConfig);
                    for (var _b = 0, _c = Object.keys(cfg); _b < _c.length; _b++) {
                        var settingName = _c[_b];
                        var settingValue = cfg[settingName];
                        // last one wins
                        optSettings[settingName] = settingValue;
                    }
                }
            }
            // This is overridden on the build server, but we need it for command line build
            if (isYotta && compile.hasHex) {
                var cs = compileService;
                U.assert(!!cs.yottaCorePackage);
                U.assert(!!cs.githubCorePackage);
                U.assert(!!cs.gittag);
                var tagged = cs.githubCorePackage + "#" + compileService.gittag;
                res.yotta.dependencies[cs.yottaCorePackage] = tagged;
            }
            if (mainPkg) {
                var seenMain = false;
                // TODO computeReachableNodes(pkg, true)
                for (var _d = 0, _e = mainPkg.sortedDeps(); _d < _e.length; _d++) {
                    var pkg = _e[_d];
                    thisErrors = "";
                    parseJson(pkg);
                    if (pkg == mainPkg) {
                        seenMain = true;
                        // we only want the main package in generated .d.ts
                        shimsDTS.clear();
                        enumsDTS.clear();
                    }
                    else {
                        U.assert(!seenMain);
                    }
                    var ext = isCSharp ? ".cs" : ".cpp";
                    for (var _f = 0, _g = pkg.getFiles(); _f < _g.length; _f++) {
                        var fn = _g[_f];
                        var isHeader = !isCSharp && U.endsWith(fn, ".h");
                        if (isHeader || U.endsWith(fn, ext)) {
                            var fullName = pkg.config.name + "/" + fn;
                            if ((pkg.config.name == "base" || /^core($|---)/.test(pkg.config.name)) && isHeader)
                                fullName = fn;
                            if (isHeader)
                                includesInc += "#include \"" + (isYotta ? sourcePath.slice(1) : "") + fullName + "\"\n";
                            var src = pkg.readFile(fn);
                            if (src == null)
                                U.userError(lf("C++ file {0} is missing in extension {1}.", fn, pkg.config.name));
                            fileName = fullName;
                            if (isCSharp) {
                                pxt.debug("Parse C#: " + fullName);
                                parseCs(src);
                                fullCS += "\n\n\n#line 1 \"" + fullName + "\"\n" + src;
                            }
                            else {
                                // parseCpp() will remove doc comments, to prevent excessive recompilation
                                pxt.debug("Parse C++: " + fullName);
                                src = parseCpp(src, isHeader);
                                res.extensionFiles[sourcePath + fullName] = src;
                            }
                            if (pkg.level == 0)
                                res.onlyPublic = false;
                            if (pkg.verProtocol() && pkg.verProtocol() != "pub" && pkg.verProtocol() != "embed")
                                res.onlyPublic = false;
                        }
                        if (!isCSharp && (U.endsWith(fn, ".c") || U.endsWith(fn, ".S") || U.endsWith(fn, ".s"))) {
                            var src = pkg.readFile(fn);
                            res.extensionFiles[sourcePath + pkg.config.name + "/" + fn.replace(/\.S$/, ".s")] = src;
                        }
                    }
                    if (thisErrors) {
                        allErrors += lf("Extension {0}:\n", pkg.id) + thisErrors;
                    }
                }
            }
            if (allErrors)
                U.userError(allErrors);
            fullCS += "\n#line default\n";
            // merge optional settings
            U.jsonCopyFrom(optSettings, currSettings);
            var configJson = U.jsonUnFlatten(optSettings);
            if (isCSharp) {
                res.extensionFiles["/lib.cs"] = fullCS;
                res.generatedFiles["/module.json"] = "{}";
            }
            else if (isDockerMake) {
                var packageJson = {
                    name: "pxt-app",
                    private: true,
                    dependencies: res.npmDependencies,
                };
                res.generatedFiles["/package.json"] = JSON.stringify(packageJson, null, 4) + "\n";
            }
            else if (isCodal) {
                var cs = compileService;
                var cfg_1 = U.clone(cs.codalDefinitions) || {};
                var trg = cs.codalTarget;
                if (typeof trg == "string")
                    trg = trg + ".json";
                var codalJson = {
                    "target": trg,
                    "definitions": cfg_1,
                    "config": cfg_1,
                    "application": "pxtapp",
                    "output_folder": "build",
                    // include these, because we use hash of this file to see if anything changed
                    "pxt_gitrepo": cs.githubCorePackage,
                    "pxt_gittag": cs.gittag,
                };
                U.iterMap(U.jsonFlatten(configJson), function (k, v) {
                    k = k.replace(/^codal\./, "device.").toUpperCase().replace(/\./g, "_");
                    cfg_1[k] = v;
                });
                res.generatedFiles["/codal.json"] = JSON.stringify(codalJson, null, 4) + "\n";
            }
            else if (isPlatformio) {
                var iniLines_1 = compileService.platformioIni.slice();
                // TODO merge configjson
                iniLines_1.push("lib_deps =");
                U.iterMap(res.platformio.dependencies, function (pkg, ver) {
                    var pkgSpec = /[@#\/]/.test(ver) ? ver : pkg + "@" + ver;
                    iniLines_1.push("  " + pkgSpec);
                });
                res.generatedFiles["/platformio.ini"] = iniLines_1.join("\n") + "\n";
            }
            else {
                res.yotta.config = configJson;
                var name_1 = "pxt-app";
                if (compileService.yottaBinary)
                    name_1 = compileService.yottaBinary.replace(/-combined/, "").replace(/\.hex$/, "");
                var moduleJson = {
                    "name": name_1,
                    "version": "0.0.0",
                    "description": "Auto-generated. Do not edit.",
                    "license": "n/a",
                    "dependencies": res.yotta.dependencies,
                    "targetDependencies": {},
                    "bin": "./source"
                };
                res.generatedFiles["/module.json"] = JSON.stringify(moduleJson, null, 4) + "\n";
            }
            if (compile.boxDebug) {
                pxtConfig += "#define PXT_BOX_DEBUG 1\n";
                pxtConfig += "#define PXT_MEMLEAK_DEBUG 1\n";
            }
            if (compile.vtableShift)
                pxtConfig += "#define PXT_VTABLE_SHIFT " + compile.vtableShift + "\n";
            if (compile.nativeType == pxtc.NATIVE_TYPE_AVRVM) {
                pxtConfig += "#define PXT_VM 1\n";
            }
            else {
                pxtConfig += "#define PXT_VM 0\n";
            }
            if (!isCSharp) {
                res.generatedFiles[sourcePath + "pointers.cpp"] = includesInc + protos.finish() + abiInc + pointersInc + "\nPXT_SHIMS_END\n";
                res.generatedFiles[sourcePath + "pxtconfig.h"] = pxtConfig;
                if (isYotta)
                    res.generatedFiles["/config.json"] = JSON.stringify(configJson, null, 4) + "\n";
                res.generatedFiles[sourcePath + "main.cpp"] = "\n#include \"pxt.h\"\n#ifdef PXT_MAIN\nPXT_MAIN\n#else\nint main() {\n    uBit.init();\n    pxt::start();\n    while (1) uBit.sleep(10000);\n    return 0;\n}\n#endif\n";
            }
            if (makefile) {
                var allfiles_1 = Object.keys(res.extensionFiles).concat(Object.keys(res.generatedFiles));
                var inc_1 = "";
                var objs = [];
                var add = function (name, ext) {
                    var files = allfiles_1.filter(function (f) { return U.endsWith(f, ext); }).map(function (s) { return s.slice(1); });
                    inc_1 += name + " = " + files.join(" ") + "\n";
                };
                add("PXT_C", ".c");
                add("PXT_CPP", ".cpp");
                add("PXT_S", ".s");
                add("PXT_HEADERS", ".h");
                inc_1 += "PXT_SOURCES = $(PXT_C) $(PXT_S) $(PXT_CPP)\n";
                inc_1 += "PXT_OBJS = $(addprefix bld/, $(PXT_C:.c=.o) $(PXT_S:.s=.o) $(PXT_CPP:.cpp=.o))\n";
                res.generatedFiles["/Makefile"] = makefile;
                res.generatedFiles["/Makefile.inc"] = inc_1;
            }
            var tmp = res.extensionFiles;
            U.jsonCopyFrom(tmp, res.generatedFiles);
            var creq = {
                config: compileService.serviceId,
                tag: compileService.gittag,
                replaceFiles: tmp,
                dependencies: (isYotta ? res.yotta.dependencies : null)
            };
            var data = JSON.stringify(creq);
            res.sha = U.sha256(data);
            res.compileData = ts.pxtc.encodeBase64(U.toUTF8(data));
            res.shimsDTS = shimsDTS.finish();
            res.enumsDTS = enumsDTS.finish();
            prevSnapshot = pkgSnapshot;
            prevExtInfo = res;
            return res;
        }
        cpp.getExtensionInfo = getExtensionInfo;
        function fromUTF8Bytes(binstr) {
            if (!binstr)
                return "";
            // escape function is deprecated
            var escaped = "";
            for (var i = 0; i < binstr.length; ++i) {
                var k = binstr[i] & 0xff;
                if (k == 37 || k > 0x7f) {
                    escaped += "%" + k.toString(16);
                }
                else {
                    escaped += String.fromCharCode(k);
                }
            }
            // decodeURIComponent does the actual UTF8 decoding
            return decodeURIComponent(escaped);
        }
        function swapBytes(str) {
            var r = "";
            var i = 0;
            for (; i < str.length; i += 2)
                r = str[i] + str[i + 1] + r;
            pxt.Util.assert(i == str.length);
            return r;
        }
        function extractSourceFromBin(bin) {
            var magic = [0x41, 0x14, 0x0E, 0x2F, 0xB8, 0x2F, 0xA2, 0xBB];
            outer: for (var p = 0; p < bin.length; p += 16) {
                if (bin[p] != magic[0])
                    continue;
                for (var i = 0; i < magic.length; ++i)
                    if (bin[p + i] != magic[i])
                        continue outer;
                var metaLen = bin[p + 8] | (bin[p + 9] << 8);
                var textLen = bin[p + 10] | (bin[p + 11] << 8) | (bin[p + 12] << 16) | (bin[p + 13] << 24);
                // TODO test in iOS Safari
                p += 16;
                var end = p + metaLen + textLen;
                if (end > bin.length)
                    continue;
                var bufmeta = bin.slice(p, p + metaLen);
                var buftext = bin.slice(p + metaLen, end);
                return {
                    meta: fromUTF8Bytes(bufmeta),
                    text: buftext
                };
            }
            return null;
        }
        function extractSource(hexfile) {
            if (!hexfile)
                return undefined;
            var metaLen = 0;
            var textLen = 0;
            var toGo = 0;
            var buf;
            var ptr = 0;
            hexfile.split(/\r?\n/).forEach(function (ln) {
                var m = /^:10....0041140E2FB82FA2BB(....)(....)(....)(....)(..)/.exec(ln);
                if (m) {
                    metaLen = parseInt(swapBytes(m[1]), 16);
                    textLen = parseInt(swapBytes(m[2]), 16);
                    toGo = metaLen + textLen;
                    buf = new Uint8Array(toGo);
                }
                else if (toGo > 0) {
                    m = /^:10....00(.*)(..)$/.exec(ln);
                    if (!m)
                        return;
                    var k = m[1];
                    while (toGo > 0 && k.length > 0) {
                        buf[ptr++] = parseInt(k[0] + k[1], 16);
                        k = k.slice(2);
                        toGo--;
                    }
                }
            });
            if (!buf || !(toGo == 0 && ptr == buf.length)) {
                return undefined;
            }
            var bufmeta = new Uint8Array(metaLen);
            var buftext = new Uint8Array(textLen);
            for (var i = 0; i < metaLen; ++i)
                bufmeta[i] = buf[i];
            for (var i = 0; i < textLen; ++i)
                buftext[i] = buf[metaLen + i];
            // iOS Safari doesn't seem to have slice() on Uint8Array
            return {
                meta: fromUTF8Bytes(bufmeta),
                text: buftext
            };
        }
        function unpackSourceFromHexFileAsync(file) {
            if (!file)
                return undefined;
            return pxt.Util.fileReadAsBufferAsync(file).then(function (data) {
                var a = new Uint8Array(data);
                return unpackSourceFromHexAsync(a);
            });
        }
        cpp.unpackSourceFromHexFileAsync = unpackSourceFromHexFileAsync;
        function unpackSourceFromHexAsync(dat) {
            function error(e) {
                pxt.debug(e);
                return Promise.reject(new Error(e));
            }
            var rawEmbed;
            // UF2?
            if (pxt.HF2.read32(dat, 0) == ts.pxtc.UF2.UF2_MAGIC_START0) {
                var bin = ts.pxtc.UF2.toBin(dat);
                if (bin)
                    rawEmbed = extractSourceFromBin(bin.buf);
            }
            // ELF?
            if (pxt.HF2.read32(dat, 0) == 0x464c457f) {
                rawEmbed = extractSourceFromBin(dat);
            }
            // HEX? (check for colon)
            if (dat[0] == 0x3a) {
                var str = fromUTF8Bytes(dat);
                rawEmbed = extractSource(str || "");
            }
            if (!rawEmbed || !rawEmbed.meta || !rawEmbed.text) {
                return error("This .hex file doesn't contain source.");
            }
            var hd = JSON.parse(rawEmbed.meta);
            if (!hd) {
                return error("This .hex file is not valid.");
            }
            else if (hd.compression == "LZMA") {
                return pxt.lzmaDecompressAsync(rawEmbed.text)
                    .then(function (res) {
                    if (!res)
                        return null;
                    var meta = res.slice(0, hd.headerSize || hd.metaSize || 0);
                    var text = res.slice(meta.length);
                    if (meta)
                        pxt.Util.jsonCopyFrom(hd, JSON.parse(meta));
                    return { meta: hd, source: text };
                });
            }
            else if (hd.compression) {
                return error("Compression type " + hd.compression + " not supported.");
            }
            else {
                return Promise.resolve({ source: fromUTF8Bytes(rawEmbed.text) });
            }
        }
        cpp.unpackSourceFromHexAsync = unpackSourceFromHexAsync;
    })(cpp = pxt.cpp || (pxt.cpp = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var hex;
    (function (hex_1) {
        var downloadCache = {};
        var cdnUrlPromise;
        hex_1.showLoading = function (msg) { };
        hex_1.hideLoading = function () { };
        function downloadHexInfoAsync(extInfo) {
            if (!downloadCache.hasOwnProperty(extInfo.sha))
                downloadCache[extInfo.sha] = downloadHexInfoCoreAsync(extInfo);
            return downloadCache[extInfo.sha];
        }
        function getCdnUrlAsync() {
            if (cdnUrlPromise)
                return cdnUrlPromise;
            else {
                var curr = pxt.getOnlineCdnUrl();
                if (curr)
                    return (cdnUrlPromise = Promise.resolve(curr));
                var forceLive = pxt.webConfig && pxt.webConfig.isStatic;
                return (cdnUrlPromise = pxt.Cloud.privateGetAsync("clientconfig", forceLive)
                    .then(function (r) { return r.primaryCdnUrl; }));
            }
        }
        function downloadHexInfoCoreAsync(extInfo) {
            var hexurl = "";
            hex_1.showLoading(pxt.U.lf("Compiling (this may take a minute)..."));
            return downloadHexInfoLocalAsync(extInfo)
                .then(function (hex) {
                if (hex) {
                    // Found the hex image in the local server cache, use that
                    return hex;
                }
                return getCdnUrlAsync()
                    .then(function (url) {
                    hexurl = url + "/compile/" + extInfo.sha;
                    return pxt.U.httpGetTextAsync(hexurl + ".hex");
                })
                    .then(function (r) { return r; }, function (e) {
                    return pxt.Cloud.privatePostAsync("compile/extension", { data: extInfo.compileData })
                        .then(function (ret) { return new Promise(function (resolve, reject) {
                        var tryGet = function () {
                            var url = ret.hex.replace(/\.hex/, ".json");
                            pxt.log("polling C++ build " + url);
                            return pxt.Util.httpGetJsonAsync(url)
                                .then(function (json) {
                                pxt.log("build log " + url.replace(/\.json$/, ".log"));
                                if (!json.success) {
                                    pxt.log("build failed");
                                    if (json.mbedresponse && json.mbedresponse.result && json.mbedresponse.result.exception)
                                        pxt.log(json.mbedresponse.result.exception);
                                    resolve(null);
                                }
                                else {
                                    pxt.log("fetching " + hexurl + ".hex");
                                    resolve(pxt.U.httpGetTextAsync(hexurl + ".hex"));
                                }
                            }, function (e) {
                                setTimeout(tryGet, 1000);
                                return null;
                            });
                        };
                        tryGet();
                    }); });
                })
                    .then(function (text) {
                    hex_1.hideLoading();
                    return {
                        hex: text && text.split(/\r?\n/)
                    };
                });
            }).finally(function () {
                hex_1.hideLoading();
            });
        }
        function downloadHexInfoLocalAsync(extInfo) {
            if (pxt.webConfig && pxt.webConfig.isStatic) {
                return pxt.Util.requestAsync({
                    url: pxt.webConfig.cdnUrl + "hexcache/" + extInfo.sha + ".hex"
                })
                    .then(function (resp) {
                    if (resp.text) {
                        var result = {
                            enums: [],
                            functions: [],
                            hex: resp.text.split(/\r?\n/)
                        };
                        return Promise.resolve(result);
                    }
                    pxt.log("Hex info not found in bundled hex cache");
                    return Promise.resolve();
                })
                    .catch(function (e) {
                    pxt.log("Error fetching hex info from bundled hex cache");
                    return Promise.resolve();
                });
            }
            if (!pxt.Cloud.localToken || !window || !pxt.Cloud.isLocalHost()) {
                return Promise.resolve(undefined);
            }
            return apiAsync("compile/" + extInfo.sha)
                .then(function (json) {
                if (!json || json.notInOfflineCache || !json.hex) {
                    return Promise.resolve(undefined);
                }
                json.hex = json.hex.split(/\r?\n/);
                return json;
            })
                .catch(function (e) {
                return Promise.resolve(undefined);
            });
        }
        function apiAsync(path, data) {
            return pxt.Cloud.localRequestAsync(path, data).then(function (r) { return r.json; });
        }
        function storeWithLimitAsync(host, idxkey, newkey, newval, maxLen) {
            if (maxLen === void 0) { maxLen = 10; }
            return host.cacheStoreAsync(newkey, newval)
                .then(function () { return host.cacheGetAsync(idxkey); })
                .then(function (res) {
                var keys;
                try {
                    keys = JSON.parse(res || "[]");
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.error('invalid cache entry, clearing entry');
                    keys = [];
                }
                keys = keys.filter(function (k) { return k != newkey; });
                keys.unshift(newkey);
                var todel = keys.slice(maxLen);
                keys = keys.slice(0, maxLen);
                return Promise.map(todel, function (e) { return host.cacheStoreAsync(e, null); })
                    .then(function () { return host.cacheStoreAsync(idxkey, JSON.stringify(keys)); });
            });
        }
        hex_1.storeWithLimitAsync = storeWithLimitAsync;
        function recordGetAsync(host, idxkey, newkey) {
            return host.cacheGetAsync(idxkey)
                .then(function (res) {
                var keys;
                try {
                    keys = JSON.parse(res || "[]");
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.error('invalid cache entry, clearing entry');
                    return host.cacheStoreAsync(idxkey, "[]");
                }
                if (keys[0] != newkey) {
                    keys = keys.filter(function (k) { return k != newkey; });
                    keys.unshift(newkey);
                    return host.cacheStoreAsync(idxkey, JSON.stringify(keys));
                }
                else {
                    return null;
                }
            });
        }
        hex_1.recordGetAsync = recordGetAsync;
        function getHexInfoAsync(host, extInfo, cloudModule) {
            if (!extInfo.sha)
                return Promise.resolve(null);
            if (pxtc.hex.isSetupFor(extInfo))
                return Promise.resolve(pxtc.hex.currentHexInfo);
            pxt.debug("get hex info: " + extInfo.sha);
            var key = "hex-" + extInfo.sha;
            return host.cacheGetAsync(key)
                .then(function (res) {
                var cachedMeta;
                try {
                    cachedMeta = res ? JSON.parse(res) : null;
                }
                catch (e) {
                    // cache entry is corrupted, clear cache so that it gets rebuilt
                    console.log('invalid cache entry, clearing entry');
                    cachedMeta = null;
                }
                if (cachedMeta && cachedMeta.hex) {
                    pxt.debug("cache hit, size=" + res.length);
                    cachedMeta.hex = decompressHex(cachedMeta.hex);
                    return recordGetAsync(host, "hex-keys", key)
                        .then(function () { return cachedMeta; });
                }
                else {
                    return downloadHexInfoAsync(extInfo)
                        .then(function (meta) {
                        var origHex = meta.hex;
                        meta.hex = compressHex(meta.hex);
                        var store = JSON.stringify(meta);
                        meta.hex = origHex;
                        return storeWithLimitAsync(host, "hex-keys", key, store)
                            .then(function () { return meta; });
                    }).catch(function (e) {
                        pxt.reportException(e, { sha: extInfo.sha });
                        return Promise.resolve(null);
                    });
                }
            });
        }
        hex_1.getHexInfoAsync = getHexInfoAsync;
        function decompressHex(hex) {
            var outp = [];
            for (var i = 0; i < hex.length; i++) {
                var m = /^([@!])(....)$/.exec(hex[i]);
                if (!m) {
                    outp.push(hex[i]);
                    continue;
                }
                var addr = parseInt(m[2], 16);
                var nxt = hex[++i];
                var buf = "";
                if (m[1] == "@") {
                    buf = "";
                    var cnt = parseInt(nxt, 16);
                    while (cnt-- > 0) {
                        /* tslint:disable:no-octal-literal */
                        buf += "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
                        /* tslint:enable:no-octal-literal */
                    }
                }
                else {
                    buf = ts.pxtc.decodeBase64(nxt);
                }
                pxt.Util.assert(buf.length > 0);
                pxt.Util.assert(buf.length % 16 == 0);
                for (var j = 0; j < buf.length;) {
                    var bytes = [0x10, (addr >> 8) & 0xff, addr & 0xff, 0];
                    addr += 16;
                    for (var k = 0; k < 16; ++k) {
                        bytes.push(buf.charCodeAt(j++));
                    }
                    var chk = 0;
                    for (var k = 0; k < bytes.length; ++k)
                        chk += bytes[k];
                    bytes.push((-chk) & 0xff);
                    var r = ":";
                    for (var k = 0; k < bytes.length; ++k) {
                        var b = bytes[k] & 0xff;
                        if (b <= 0xf)
                            r += "0";
                        r += b.toString(16);
                    }
                    outp.push(r.toUpperCase());
                }
            }
            return outp;
        }
        function compressHex(hex) {
            var outp = [];
            var j = 0;
            for (var i = 0; i < hex.length; i += j) {
                var addr = -1;
                var outln = "";
                j = 0;
                var zeroMode = false;
                while (j < 500) {
                    var m = /^:10(....)00(.{32})(..)$/.exec(hex[i + j]);
                    if (!m)
                        break;
                    var h = m[2];
                    var isZero = /^0+$/.test(h);
                    var newaddr = parseInt(m[1], 16);
                    if (addr == -1) {
                        zeroMode = isZero;
                        outp.push((zeroMode ? "@" : "!") + m[1]);
                        addr = newaddr - 16;
                    }
                    else {
                        if (isZero != zeroMode)
                            break;
                        if (addr + 16 != newaddr)
                            break;
                    }
                    if (!zeroMode)
                        outln += h;
                    addr = newaddr;
                    j++;
                }
                if (j == 0) {
                    outp.push(hex[i]);
                    j = 1;
                }
                else {
                    if (zeroMode) {
                        outp.push(j.toString(16));
                    }
                    else {
                        var bin = "";
                        for (var k = 0; k < outln.length; k += 2)
                            bin += String.fromCharCode(parseInt(outln.slice(k, k + 2), 16));
                        outp.push(ts.pxtc.encodeBase64(bin));
                    }
                }
            }
            return outp;
        }
    })(hex = pxt.hex || (pxt.hex = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var crowdin;
    (function (crowdin) {
        crowdin.KEY_VARIABLE = "CROWDIN_KEY";
        function apiUri(branch, prj, key, cmd, args) {
            pxt.Util.assert(!!prj && !!key && !!cmd);
            var apiRoot = "https://api.crowdin.com/api/project/" + prj + "/";
            var suff = "?key=" + key;
            if (branch) {
                if (!args)
                    args = {};
                args["branch"] = branch;
            }
            if (args)
                suff += "&" + Object.keys(args).map(function (k) { return k + "=" + encodeURIComponent(args[k]); }).join("&");
            return apiRoot + cmd + suff;
        }
        function downloadTranslationsAsync(branch, prj, key, filename, options) {
            if (options === void 0) { options = {}; }
            var q = { json: "true" };
            var infoUri = apiUri(branch, prj, key, "info", q);
            var r = {};
            filename = normalizeFileName(filename);
            return pxt.Util.httpGetTextAsync(infoUri).then(function (respText) {
                var info = JSON.parse(respText);
                if (!info)
                    throw new Error("info failed");
                var todo = info.languages;
                pxt.log('languages: ' + todo.map(function (l) { return l.code; }).join(', '));
                var nextFile = function () {
                    var item = todo.pop();
                    if (!item)
                        return Promise.resolve();
                    var exportFileUri = apiUri(branch, prj, key, "export-file", {
                        file: filename,
                        language: item.code,
                        export_translated_only: options.translatedOnly ? "1" : "0",
                        export_approved_only: options.validatedOnly ? "1" : "0"
                    });
                    pxt.log("downloading " + item.name + " - " + item.code + " (" + todo.length + " more)");
                    return pxt.Util.httpGetTextAsync(exportFileUri).then(function (transationsText) {
                        try {
                            var translations = JSON.parse(transationsText);
                            if (translations)
                                r[item.code] = translations;
                        }
                        catch (e) {
                            pxt.log(exportFileUri + ' ' + e);
                        }
                        return nextFile();
                    }).delay(1000); // throttling otherwise crowdin fails
                };
                return nextFile();
            }).then(function () { return r; });
        }
        crowdin.downloadTranslationsAsync = downloadTranslationsAsync;
        function mkIncr(filename) {
            var cnt = 0;
            return function incr() {
                if (cnt++ > 10) {
                    throw new Error("Too many API calls for " + filename);
                }
            };
        }
        function createDirectoryAsync(branch, prj, key, name, incr) {
            name = normalizeFileName(name);
            pxt.debug("create directory " + (branch || "") + "/" + name);
            if (!incr)
                incr = mkIncr(name);
            return pxt.Util.multipartPostAsync(apiUri(branch, prj, key, "add-directory"), { json: "true", name: name })
                .then(function (resp) {
                pxt.debug("crowdin resp: " + resp.statusCode);
                // 400 returned by folder already exists
                if (resp.statusCode == 200 || resp.statusCode == 400)
                    return Promise.resolve();
                if (resp.statusCode == 500 && resp.text) {
                    var json = JSON.parse(resp.text);
                    if (json.error.code === 50) {
                        pxt.log('directory already exists');
                        return Promise.resolve();
                    }
                }
                var data = resp.json || JSON.parse(resp.text) || { error: {} };
                if (resp.statusCode == 404 && data.error.code == 17) {
                    pxt.log("parent directory missing for " + name);
                    var par = name.replace(/\/[^\/]+$/, "");
                    if (par != name) {
                        return createDirectoryAsync(branch, prj, key, par, incr)
                            .then(function () { return createDirectoryAsync(branch, prj, key, name, incr); }); // retry
                    }
                }
                throw new Error("cannot create directory " + (branch || "") + "/" + name + ": " + resp.statusCode + " " + JSON.stringify(data));
            });
        }
        crowdin.createDirectoryAsync = createDirectoryAsync;
        function normalizeFileName(filename) {
            return filename.replace(/\\/g, '/');
        }
        function uploadTranslationAsync(branch, prj, key, filename, data) {
            pxt.Util.assert(!!prj);
            pxt.Util.assert(!!key);
            filename = normalizeFileName(filename);
            var incr = mkIncr(filename);
            function startAsync() {
                return uploadAsync("update-file", { update_option: "update_as_unapproved" });
            }
            function uploadAsync(op, opts) {
                opts["type"] = "auto";
                opts["json"] = "";
                opts["escape_quotes"] = "0";
                incr();
                return pxt.Util.multipartPostAsync(apiUri(branch, prj, key, op), opts, filename, data)
                    .then(function (resp) { return handleResponseAsync(resp); });
            }
            function handleResponseAsync(resp) {
                var code = resp.statusCode;
                var data = JSON.parse(resp.text);
                pxt.debug("upload result: " + code);
                if (code == 404 && data.error.code == 8) {
                    pxt.log("create new translation file: " + filename);
                    return uploadAsync("add-file", {});
                }
                else if (code == 404 && data.error.code == 17) {
                    return createDirectoryAsync(branch, prj, key, filename.replace(/\/[^\/]+$/, ""), incr)
                        .then(function () { return startAsync(); });
                }
                else if (code == 200) {
                    return Promise.resolve();
                }
                else {
                    throw new Error("Error, upload translation: " + filename + ", " + resp + ", " + JSON.stringify(data));
                }
            }
            return startAsync();
        }
        crowdin.uploadTranslationAsync = uploadTranslationAsync;
        function flatten(allFiles, files, parentDir, branch) {
            var n = files.name;
            var d = parentDir ? parentDir + "/" + n : n;
            files.fullName = d;
            files.branch = branch || "";
            switch (files.node_type) {
                case "file":
                    allFiles.push(files);
                    break;
                case "directory":
                    (files.files || []).forEach(function (f) { return flatten(allFiles, f, d); });
                    break;
                case "branch":
                    (files.files || []).forEach(function (f) { return flatten(allFiles, f, parentDir, files.name); });
                    break;
            }
        }
        function filterAndFlattenFiles(files, crowdinPath) {
            var pxtCrowdinBranch = pxt.appTarget.versions.pxtCrowdinBranch || "";
            var targetCrowdinBranch = pxt.appTarget.versions.targetCrowdinBranch || "";
            var allFiles = [];
            // flatten the files
            files.forEach(function (f) { return flatten(allFiles, f, ""); });
            // top level files are for PXT, subolder are targets
            allFiles = allFiles.filter(function (f) {
                if (f.fullName.indexOf('/') < 0)
                    return f.branch == pxtCrowdinBranch; // pxt file
                else
                    return f.branch == targetCrowdinBranch;
            });
            // folder filter
            if (crowdinPath) {
                // filter out crowdin folder
                allFiles = allFiles.filter(function (f) { return f.fullName.indexOf(crowdinPath) == 0; });
            }
            // filter out non-target files
            if (pxt.appTarget.id != "core") {
                var id_1 = pxt.appTarget.id + '/';
                allFiles = allFiles.filter(function (f) {
                    return f.fullName.indexOf('/') < 0 // top level file
                        || f.fullName.substr(0, id_1.length) == id_1 // from the target folder
                        || f.fullName.indexOf('common-docs') >= 0; // common docs
                });
            }
            return allFiles;
        }
        function projectInfoAsync(prj, key) {
            var q = { json: "true" };
            var infoUri = apiUri("", prj, key, "info", q);
            return pxt.Util.httpGetTextAsync(infoUri).then(function (respText) {
                var info = JSON.parse(respText);
                return info;
            });
        }
        crowdin.projectInfoAsync = projectInfoAsync;
        /**
         * Scans files in crowdin and report files that are not on disk anymore
         */
        function listFilesAsync(prj, key, crowdinPath) {
            pxt.log("crowdin: listing files under " + crowdinPath);
            return projectInfoAsync(prj, key)
                .then(function (info) {
                if (!info)
                    throw new Error("info failed");
                var allFiles = filterAndFlattenFiles(info.files, crowdinPath);
                pxt.debug("crowdin: found " + allFiles.length + " under " + crowdinPath);
                return allFiles.map(function (f) {
                    return {
                        fullName: f.fullName,
                        branch: f.branch || ""
                    };
                });
            });
        }
        crowdin.listFilesAsync = listFilesAsync;
        function languageStatsAsync(prj, key, lang) {
            var uri = apiUri("", prj, key, "language-status", { language: lang, json: "true" });
            return pxt.Util.httpGetJsonAsync(uri)
                .then(function (info) {
                var allFiles = filterAndFlattenFiles(info.files);
                return allFiles;
            });
        }
        crowdin.languageStatsAsync = languageStatsAsync;
    })(crowdin = pxt.crowdin || (pxt.crowdin = {}));
})(pxt || (pxt = {}));
/// <reference path='../localtypings/pxtarget.d.ts' />
/// <reference path="commonutil.ts"/>
var pxt;
(function (pxt) {
    var docs;
    (function (docs) {
        var U = pxtc.Util;
        var markedInstance;
        var stdboxes = {};
        var stdmacros = {};
        var stdSetting = "<!-- @CMD@ @ARGS@ -->";
        var stdsettings = {
            "parent": stdSetting,
            "short": stdSetting,
            "description": "<!-- desc -->"
        };
        function replaceAll(replIn, x, y) {
            return replIn.split(x).join(y);
        }
        function htmlQuote(s) {
            s = replaceAll(s, "&", "&amp;");
            s = replaceAll(s, "<", "&lt;");
            s = replaceAll(s, ">", "&gt;");
            s = replaceAll(s, "\"", "&quot;");
            s = replaceAll(s, "\'", "&#39;");
            return s;
        }
        docs.htmlQuote = htmlQuote;
        // the input already should be HTML-quoted but we want to make sure, and also quote quotes
        function html2Quote(s) {
            if (!s)
                return s;
            return htmlQuote(s.replace(/\&([#a-z0-9A-Z]+);/g, function (f, ent) {
                switch (ent) {
                    case "amp": return "&";
                    case "lt": return "<";
                    case "gt": return ">";
                    case "quot": return "\"";
                    default:
                        if (ent[0] == "#")
                            return String.fromCharCode(parseInt(ent.slice(1)));
                        else
                            return f;
                }
            }));
        }
        docs.html2Quote = html2Quote;
        //The extra YouTube macros are in case there is a timestamp on the YouTube URL.
        //TODO: Add equivalent support for youtu.be links
        var links = [
            {
                rx: /^vimeo\.com\/(\d+)/i,
                cmd: "### @vimeo $1"
            },
            {
                rx: /^(www\.youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+(\#t=([0-9]+m[0-9]+s|[0-9]+m|[0-9]+s))?)/i,
                cmd: "### @youtube $2"
            }
        ];
        docs.requireMarked = function () {
            if (typeof marked !== "undefined")
                return marked;
            if (typeof require === "undefined")
                return undefined;
            return require("marked");
        };
        function parseHtmlAttrs(s) {
            var attrs = {};
            while (s.trim()) {
                var m = /\s*([^=\s]+)=("([^"]*)"|'([^']*)'|(\S*))/.exec(s);
                if (m) {
                    var v = m[3] || m[4] || m[5] || "";
                    attrs[m[1].toLowerCase()] = v;
                }
                else {
                    m = /^\s*(\S+)/.exec(s);
                    attrs[m[1]] = "true";
                }
                s = s.slice(m[0].length);
            }
            return attrs;
        }
        var error = function (s) {
            return "<div class='ui negative message'>" + htmlQuote(s) + "</div>";
        };
        function prepTemplate(d) {
            var boxes = U.clone(stdboxes);
            var macros = U.clone(stdmacros);
            var settings = U.clone(stdsettings);
            var menus = {};
            var toc = {};
            var params = d.params;
            var theme = d.theme;
            d.boxes = boxes;
            d.macros = macros;
            d.settings = settings;
            d.html = d.html.replace(/<aside\s+([^<>]+)>([^]*?)<\/aside>/g, function (full, attrsStr, body) {
                var attrs = parseHtmlAttrs(attrsStr);
                var name = attrs["data-name"] || attrs["id"];
                if (!name)
                    return error("id or data-name missing on macro");
                if (/box/.test(attrs["class"])) {
                    boxes[name] = body;
                }
                else if (/aside/.test(attrs["class"])) {
                    boxes[name] = "<!-- BEGIN-ASIDE " + name + " -->" + body + "<!-- END-ASIDE -->";
                }
                else if (/setting/.test(attrs["class"])) {
                    settings[name] = body;
                }
                else if (/menu/.test(attrs["class"])) {
                    menus[name] = body;
                }
                else if (/toc/.test(attrs["class"])) {
                    toc[name] = body;
                }
                else {
                    macros[name] = body;
                }
                return "<!-- macro " + name + " -->";
            });
            var recMenu = function (m, lev) {
                var templ = menus["item"];
                var mparams = {
                    NAME: m.name,
                };
                if (m.subitems) {
                    if (lev == 0)
                        templ = menus["top-dropdown"];
                    else
                        templ = menus["inner-dropdown"];
                    mparams["ITEMS"] = m.subitems.map(function (e) { return recMenu(e, lev + 1); }).join("\n");
                }
                else {
                    if (/^-+$/.test(m.name)) {
                        templ = menus["divider"];
                    }
                    if (m.path && !/^(https?:|\/)/.test(m.path))
                        return error("Invalid link: " + m.path);
                    mparams["LINK"] = m.path;
                }
                return injectHtml(templ, mparams, ["ITEMS"]);
            };
            var breadcrumb = [{
                    name: lf("Docs"),
                    href: "/docs"
                }];
            var tocPath = [];
            var isCurrentTOC = function (m) {
                for (var _i = 0, _a = m.subitems || []; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (isCurrentTOC(c)) {
                        tocPath.push(m);
                        return true;
                    }
                }
                if (d.filepath && d.filepath.indexOf(m.path) == 0) {
                    tocPath.push(m);
                    return true;
                }
                return false;
            };
            (theme.TOC || []).forEach(isCurrentTOC);
            var currentTocEntry;
            var recTOC = function (m, lev) {
                var templ = toc["item"];
                var mparams = {
                    NAME: m.name,
                };
                if (m.path && !/^(https?:|\/)/.test(m.path))
                    return error("Invalid link: " + m.path);
                if (/^\//.test(m.path) && d.versionPath)
                    m.path = "/" + d.versionPath + m.path;
                mparams["LINK"] = m.path;
                if (tocPath.indexOf(m) >= 0) {
                    mparams["ACTIVE"] = 'active';
                    mparams["EXPANDED"] = 'true';
                    currentTocEntry = m;
                    breadcrumb.push({
                        name: m.name,
                        href: m.path
                    });
                }
                else {
                    mparams["EXPANDED"] = 'false';
                }
                if (m.subitems && m.subitems.length > 0) {
                    if (lev == 0) {
                        if (m.name !== "") {
                            templ = toc["top-dropdown"];
                        }
                        else {
                            templ = toc["top-dropdown-noHeading"];
                        }
                    }
                    else if (lev == 1)
                        templ = toc["inner-dropdown"];
                    else
                        templ = toc["nested-dropdown"];
                    mparams["ITEMS"] = m.subitems.map(function (e) { return recTOC(e, lev + 1); }).join("\n");
                }
                else {
                    if (/^-+$/.test(m.name)) {
                        templ = toc["divider"];
                    }
                }
                return injectHtml(templ, mparams, ["ITEMS"]);
            };
            params["menu"] = (theme.docMenu || []).map(function (e) { return recMenu(e, 0); }).join("\n");
            params["TOC"] = (theme.TOC || []).map(function (e) { return recTOC(e, 0); }).join("\n");
            if (theme.appStoreID)
                params["appstoremeta"] = "<meta name=\"apple-itunes-app\" content=\"app-id=" + U.htmlEscape(theme.appStoreID) + "\"/>";
            var breadcrumbHtml = '';
            if (breadcrumb.length > 1) {
                breadcrumbHtml = "\n            <nav class=\"ui breadcrumb\" aria-label=\"" + lf("Breadcrumb") + "\">\n                " + breadcrumb.map(function (b, i) {
                    return "<a class=\"" + (i == breadcrumb.length - 1 ? "active" : "") + " section\"\n                        href=\"" + html2Quote(b.href) + "\" aria-current=\"" + (i == breadcrumb.length - 1 ? "page" : "") + "\">" + html2Quote(b.name) + "</a>";
                })
                    .join('<i class="right chevron icon divider"></i>') + "\n            </nav>";
            }
            params["breadcrumb"] = breadcrumbHtml;
            if (currentTocEntry) {
                if (currentTocEntry.prevPath) {
                    params["prev"] = "<a href=\"" + currentTocEntry.prevPath + "\" class=\"navigation navigation-prev \" title=\"" + currentTocEntry.prevName + "\">\n                                    <i class=\"icon angle left\"></i>\n                                </a>";
                }
                if (currentTocEntry.nextPath) {
                    params["next"] = "<a href=\"" + currentTocEntry.nextPath + "\" class=\"navigation navigation-next \" title=\"" + currentTocEntry.nextName + "\">\n                                    <i class=\"icon angle right\"></i>\n                                </a>";
                }
            }
            if (theme.boardName)
                params["boardname"] = html2Quote(theme.boardName);
            if (theme.boardNickname)
                params["boardnickname"] = html2Quote(theme.boardNickname);
            if (theme.driveDisplayName)
                params["drivename"] = html2Quote(theme.driveDisplayName);
            if (theme.homeUrl)
                params["homeurl"] = html2Quote(theme.homeUrl);
            params["targetid"] = theme.id || "???";
            params["targetname"] = theme.name || "Microsoft MakeCode";
            params["targetlogo"] = theme.docsLogo ? "<img aria-hidden=\"true\" role=\"presentation\" class=\"ui mini image\" src=\"" + theme.docsLogo + "\" />" : "";
            var ghURLs = d.ghEditURLs || [];
            if (ghURLs.length) {
                var ghText = "<p style=\"margin-top:1em\">\n";
                var linkLabel = lf("Edit this page on GitHub");
                for (var _i = 0, ghURLs_1 = ghURLs; _i < ghURLs_1.length; _i++) {
                    var u = ghURLs_1[_i];
                    ghText += "<a href=\"" + u + "\"><i class=\"write icon\"></i>" + linkLabel + "</a><br>\n";
                    linkLabel = lf("Edit template of this page on GitHub");
                }
                ghText += "</p>\n";
                params["github"] = ghText;
            }
            else {
                params["github"] = "";
            }
            // Add accessiblity menu
            var accMenuHtml = "\n            <a href=\"#maincontent\" class=\"ui item link\" tabindex=\"0\" role=\"menuitem\">" + lf("Skip to main content") + "</a>\n        ";
            params['accMenu'] = accMenuHtml;
            // Add print button
            var printBtnHtml = "\n            <button id=\"printbtn\" class=\"circular ui icon right floated button hideprint\" title=\"" + lf("Print this page") + "\">\n                <i class=\"icon print\"></i>\n            </button>\n        ";
            params['printBtn'] = printBtnHtml;
            // Add sidebar toggle
            var sidebarToggleHtml = "\n            <a id=\"togglesidebar\" class=\"launch icon item\" tabindex=\"0\" title=\"Side menu\" aria-label=\"" + lf("Side menu") + "\" role=\"menu\" aria-expanded=\"false\">\n                <i class=\"content icon\"></i>\n            </a>\n        ";
            params['sidebarToggle'] = sidebarToggleHtml;
            // Add search bars
            var searchBarIds = ['tocsearch1', 'tocsearch2'];
            var searchBarsHtml = searchBarIds.map(function (searchBarId) {
                return "\n                <input type=\"search\" name=\"q\" placeholder=\"" + lf("Search...") + "\" aria-label=\"" + lf("Search Documentation") + "\">\n                <i onclick=\"document.getElementById('" + searchBarId + "').submit();\" tabindex=\"0\" class=\"search link icon\" aria-label=\"" + lf("Search") + "\" role=\"button\"></i>\n            ";
            });
            params["searchBar1"] = searchBarsHtml[0];
            params["searchBar2"] = searchBarsHtml[1];
            var style = '';
            if (theme.accentColor)
                style += "\n.ui.accent { color: " + theme.accentColor + "; }\n.ui.inverted.accent { background: " + theme.accentColor + "; }\n";
            params["targetstyle"] = style;
            for (var _a = 0, _b = Object.keys(theme); _a < _b.length; _a++) {
                var k = _b[_a];
                var v = theme[k];
                if (params[k] === undefined && typeof v == "string")
                    params[k] = v;
            }
            d.finish = function () { return injectHtml(d.html, params, [
                "body",
                "menu",
                "accMenu",
                "TOC",
                "prev",
                "next",
                "printBtn",
                "breadcrumb",
                "targetlogo",
                "github",
                "JSON",
                "appstoremeta",
                "sidebarToggle",
                "searchBar1",
                "searchBar2"
            ]); };
        }
        docs.prepTemplate = prepTemplate;
        function setupRenderer(renderer) {
            renderer.image = function (href, title, text) {
                var out = '<img class="ui centered image" src="' + href + '" alt="' + text + '"';
                if (title) {
                    out += ' title="' + title + '"';
                }
                out += this.options.xhtml ? '/>' : '>';
                return out;
            };
            renderer.listitem = function (text) {
                var m = /^\s*\[( |x)\]/i.exec(text);
                if (m)
                    return "<li class=\"" + (m[1] == ' ' ? 'unchecked' : 'checked') + "\">" + text.slice(m[0].length) + '</li>\n';
                return '<li>' + text + '</li>\n';
            };
            renderer.heading = function (text, level, raw) {
                var m = /(.*)#([\w\-]+)\s*$/.exec(text);
                var id = "";
                if (m) {
                    text = m[1];
                    id = m[2];
                }
                else {
                    id = raw.toLowerCase().replace(/[^\w]+/g, '-');
                }
                // remove tutorial macros
                if (text)
                    text = text.replace(/@(fullscreen|unplugged)/g, '');
                return "<h" + level + " id=\"" + this.options.headerPrefix + id + "\">" + text + "</h" + level + ">";
            };
        }
        docs.setupRenderer = setupRenderer;
        function renderMarkdown(opts) {
            var hasPubInfo = true;
            if (!opts.pubinfo) {
                hasPubInfo = false;
                opts.pubinfo = {};
            }
            var pubinfo = opts.pubinfo;
            if (!opts.theme)
                opts.theme = {};
            delete opts.pubinfo["private"]; // just in case
            if (pubinfo["time"]) {
                var tm = parseInt(pubinfo["time"]);
                if (!pubinfo["timems"])
                    pubinfo["timems"] = 1000 * tm + "";
                if (!pubinfo["humantime"])
                    pubinfo["humantime"] = U.isoTime(tm);
            }
            if (pubinfo["name"]) {
                pubinfo["dirname"] = pubinfo["name"].replace(/[^A-Za-z0-9_]/g, "-");
                pubinfo["title"] = pubinfo["name"];
            }
            if (hasPubInfo) {
                pubinfo["JSON"] = JSON.stringify(pubinfo, null, 4).replace(/</g, "\\u003c");
            }
            var template = opts.template;
            template = template
                .replace(/<!--\s*@include\s+(\S+)\s*-->/g, function (full, fn) {
                var cont = (opts.theme.htmlDocIncludes || {})[fn] || "";
                return "<!-- include " + fn + " -->\n" + cont + "\n<!-- end include -->\n";
            });
            template = template
                .replace(/<!--\s*@(ifn?def)\s+(\w+)\s*-->([^]*?)<!--\s*@endif\s*-->/g, function (full, cond, sym, inner) {
                if ((cond == "ifdef" && pubinfo[sym]) || (cond == "ifndef" && !pubinfo[sym]))
                    return "<!-- " + cond + " " + sym + " -->" + inner + "<!-- endif -->";
                else
                    return "<!-- " + cond + " " + sym + " endif -->";
            });
            if (opts.locale)
                template = translate(template, opts.locale).text;
            var d = {
                html: template,
                theme: opts.theme,
                filepath: opts.filepath,
                versionPath: opts.versionPath,
                ghEditURLs: opts.ghEditURLs,
                params: pubinfo,
            };
            prepTemplate(d);
            if (!markedInstance) {
                markedInstance = docs.requireMarked();
            }
            // We have to re-create the renderer every time to avoid the link() function's closure capturing the opts
            var renderer = new markedInstance.Renderer();
            setupRenderer(renderer);
            var linkRenderer = renderer.link;
            renderer.link = function (href, title, text) {
                var relative = href.indexOf('/') == 0;
                var target = !relative ? '_blank' : '';
                if (relative && d.versionPath)
                    href = "/" + d.versionPath + href;
                var html = linkRenderer.call(renderer, href, title, text);
                return html.replace(/^<a /, "<a " + (target ? "target=\"" + target + "\"" : '') + " rel=\"nofollow noopener\" ");
            };
            markedInstance.setOptions({
                renderer: renderer,
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: true
            });
            var markdown = opts.markdown;
            // append repo info if any
            if (opts.repo)
                markdown += "\n```package\n" + opts.repo.name.replace(/^pxt-/, '') + "=github:" + opts.repo.fullName + "#" + (opts.repo.tag || "master") + "\n```\n";
            //Uses the CmdLink definitions to replace links to YouTube and Vimeo (limited at the moment)
            markdown = markdown.replace(/^\s*https?:\/\/(\S+)\s*$/mg, function (f, lnk) {
                var _loop_1 = function (ent) {
                    var m = ent.rx.exec(lnk);
                    if (m) {
                        return { value: ent.cmd.replace(/\$(\d+)/g, function (f, k) {
                                return m[parseInt(k)] || "";
                            }) + "\n" };
                    }
                };
                for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                    var ent = links_1[_i];
                    var state_1 = _loop_1(ent);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return f;
            });
            // replace pre-template in markdown
            markdown = markdown.replace(/@([a-z]+)@/ig, function (m, param) {
                var macro = pubinfo[param];
                if (!macro && opts.throwOnError)
                    U.userError("unknown macro " + param);
                return macro || 'unknown macro';
            });
            var html = markedInstance(markdown);
            // support for breaks which somehow don't work out of the box
            html = html.replace(/&lt;br\s*\/&gt;/ig, "<br/>");
            var endBox = "";
            html = html.replace(/<h\d[^>]+>\s*([~@])\s*(.*?)<\/h\d>/g, function (f, tp, body) {
                var m = /^(\w+)\s+(.*)/.exec(body);
                var cmd = m ? m[1] : body;
                var args = m ? m[2] : "";
                var rawArgs = args;
                args = html2Quote(args);
                cmd = html2Quote(cmd);
                if (tp == "@") {
                    var expansion = U.lookup(d.settings, cmd);
                    if (expansion != null) {
                        pubinfo[cmd] = args;
                    }
                    else {
                        expansion = U.lookup(d.macros, cmd);
                        if (expansion == null) {
                            if (opts.throwOnError)
                                U.userError("Unknown command: @" + cmd);
                            return error("Unknown command: @" + cmd);
                        }
                    }
                    var ivars = {
                        ARGS: args,
                        CMD: cmd
                    };
                    return injectHtml(expansion, ivars, ["ARGS", "CMD"]);
                }
                else {
                    if (!cmd) {
                        var r = endBox;
                        endBox = "";
                        return r;
                    }
                    var box = U.lookup(d.boxes, cmd);
                    if (box) {
                        var parts = box.split("@BODY@");
                        endBox = parts[1];
                        return parts[0].replace("@ARGS@", args);
                    }
                    else {
                        if (opts.throwOnError)
                            U.userError("Unknown box: ~ " + cmd);
                        return error("Unknown box: ~ " + cmd);
                    }
                }
            });
            if (!pubinfo["title"]) {
                var titleM = /<h1[^<>]*>([^<>]+)<\/h1>/.exec(html);
                if (titleM)
                    pubinfo["title"] = html2Quote(titleM[1]);
            }
            if (!pubinfo["description"]) {
                var descM = /<p>([^]+?)<\/p>/.exec(html);
                if (descM)
                    pubinfo["description"] = html2Quote(descM[1]);
            }
            // try getting a better custom image for twitter
            var imgM = /<div class="ui embed mdvid"[^<>]+?data-placeholder="([^"]+)"[^>]*\/?>/i.exec(html)
                || /<img class="ui [^"]*image" src="([^"]+)"[^>]*\/?>/i.exec(html);
            if (imgM)
                pubinfo["cardLogo"] = html2Quote(imgM[1]);
            pubinfo["twitter"] = html2Quote(opts.theme.twitter || "@msmakecode");
            var registers = {};
            registers["main"] = ""; // first
            html = html.replace(/<!-- BEGIN-ASIDE (\S+) -->([^]*?)<!-- END-ASIDE -->/g, function (f, nam, cont) {
                var s = U.lookup(registers, nam);
                registers[nam] = (s || "") + cont;
                return "<!-- aside -->";
            });
            // fix up spourious newlines at the end of code blocks
            html = html.replace(/\n<\/code>/g, "</code>");
            registers["main"] = html;
            var injectBody = function (tmpl, body) {
                return injectHtml(d.boxes[tmpl] || "@BODY@", { BODY: body }, ["BODY"]);
            };
            html = "";
            for (var _i = 0, _a = Object.keys(registers); _i < _a.length; _i++) {
                var k = _a[_i];
                html += injectBody(k + "-container", registers[k]);
            }
            pubinfo["body"] = html;
            pubinfo["name"] = pubinfo["title"] + " - " + pubinfo["targetname"];
            for (var _b = 0, _c = Object.keys(opts.theme); _b < _c.length; _b++) {
                var k = _c[_b];
                var v = opts.theme[k];
                if (typeof v == "string")
                    pubinfo["theme_" + k] = v;
            }
            return d.finish();
        }
        docs.renderMarkdown = renderMarkdown;
        function injectHtml(template, vars, quoted) {
            if (quoted === void 0) { quoted = []; }
            if (!template)
                return '';
            return template.replace(/@(\w+)@/g, function (f, key) {
                var res = U.lookup(vars, key) || "";
                res += ""; // make sure it's a string
                if (quoted.indexOf(key) < 0) {
                    res = html2Quote(res);
                }
                return res;
            });
        }
        function embedUrl(rootUrl, tag, id, height) {
            var url = rootUrl + "#" + tag + ":" + id;
            var padding = '70%';
            return "<div style=\"position:relative;height:0;padding-bottom:" + padding + ";overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + url + "\" frameborder=\"0\" sandbox=\"allow-popups allow-forms allow-scripts allow-same-origin\"></iframe></div>";
        }
        docs.embedUrl = embedUrl;
        function runUrl(url, padding, id) {
            var embed = "<div style=\"position:relative;height:0;padding-bottom:" + padding + ";overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + url + "?id=" + encodeURIComponent(id) + "\" allowfullscreen=\"allowfullscreen\" sandbox=\"allow-popups allow-forms allow-scripts allow-same-origin\" frameborder=\"0\"></iframe></div>";
            return embed;
        }
        docs.runUrl = runUrl;
        function codeEmbedUrl(rootUrl, id, height) {
            var docurl = rootUrl + "---codeembed#pub:" + id;
            height = Math.ceil(height || 300);
            return "<div style=\"position:relative;height:calc(" + height + "px + 5em);width:100%;overflow:hidden;\"><iframe style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" src=\"" + docurl + "\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" sandbox=\"allow-scripts allow-same-origin\"></iframe></div>";
        }
        docs.codeEmbedUrl = codeEmbedUrl;
        var inlineTags = {
            b: 1,
            strong: 1,
            em: 1,
        };
        function translate(html, locale) {
            var missing = {};
            function translateOne(toTranslate) {
                var spm = /^(\s*)([^]*?)(\s*)$/.exec(toTranslate);
                var text = spm[2].replace(/\s+/g, " ");
                if (text == "" || /^((IE=edge,.*|width=device-width.*|(https?:\/\/|\/)[\w@\/\.]+|@[\-\w]+@|\{[^\{\}]+\}|[^a-zA-Z]*|(&nbsp;)+)\s*)+$/.test(text))
                    return null;
                var v = U.lookup(locale, text);
                if (v)
                    text = v;
                else
                    missing[text] = "";
                return spm[1] + text + spm[3];
            }
            html = html.replace(/<([\/\w]+)([^<>]*)>/g, function (full, tagname, args) {
                var key = tagname.replace(/^\//, "").toLowerCase();
                if (inlineTags[key] === 1)
                    return "&llt;" + tagname + args + "&ggt;";
                return full;
            });
            function ungt(s) {
                return s.replace(/&llt;/g, "<").replace(/&ggt;/g, ">");
            }
            html = "<start>" + html;
            html = html.replace(/(<([\/\w]+)([^<>]*)>)([^<>]+)/g, function (full, fullTag, tagname, args, str) {
                if (tagname == "script" || tagname == "style")
                    return ungt(full);
                var tr = translateOne(ungt(str));
                if (tr == null)
                    return ungt(full);
                return fullTag + tr;
            });
            html = html.replace(/(<[^<>]*)(content|placeholder|alt|title)="([^"]+)"/g, function (full, pref, attr, text) {
                var tr = translateOne(text);
                if (tr == null)
                    return full;
                return pref + attr + '="' + text.replace(/"/g, "''") + '"';
            });
            html = html.replace(/^<start>/g, "");
            return {
                text: html,
                missing: missing
            };
        }
        docs.translate = translate;
        function lookupSection(template, id) {
            if (template.id == id)
                return template;
            for (var _i = 0, _a = template.children; _i < _a.length; _i++) {
                var ch = _a[_i];
                var r = lookupSection(ch, id);
                if (r)
                    return r;
            }
            return null;
        }
        function splitMdSections(md, template) {
            var lineNo = 0;
            var openSections = [{
                    level: 0,
                    id: "",
                    title: "",
                    start: lineNo,
                    text: "",
                    children: []
                }];
            md = md.replace(/\r/g, "");
            var lines = md.split(/\n/);
            var skipThese = {};
            var _loop_2 = function (l) {
                var m = /^\s*(#+)\s*(.*?)(#(\S+)\s*)?$/.exec(l);
                var templSect = null;
                if (template && m) {
                    if (!m[4])
                        m = null;
                    else if (skipThese[m[4]])
                        m = null;
                    else {
                        templSect = lookupSection(template, m[4]);
                        var skip_1 = function (s) {
                            if (s.id)
                                skipThese[s.id] = true;
                            s.children.forEach(skip_1);
                        };
                        if (templSect)
                            skip_1(templSect);
                    }
                }
                if (m) {
                    var level = template ? 1 : m[1].length;
                    var s = {
                        level: level,
                        title: m[2].trim(),
                        id: m[4] || "",
                        start: lineNo,
                        text: "",
                        children: []
                    };
                    if (templSect) {
                        l = "";
                        for (var i = 0; i < templSect.level; ++i)
                            l += "#";
                        l += " ";
                        l += s.title || templSect.title;
                        l += " #" + s.id;
                    }
                    while (openSections[openSections.length - 1].level >= s.level)
                        openSections.pop();
                    var parent_1 = openSections[openSections.length - 1];
                    parent_1.children.push(s);
                    openSections.push(s);
                }
                openSections[openSections.length - 1].text += l + "\n";
                lineNo++;
            };
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var l = lines_1[_i];
                _loop_2(l);
            }
            return openSections[0];
        }
        function buildTOC(summaryMD) {
            if (!summaryMD)
                return null;
            var markedInstance = pxt.docs.requireMarked();
            var options = {
                renderer: new markedInstance.Renderer(),
                gfm: true,
                tables: false,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: false,
                smartypants: false
            };
            var dummy = { name: 'dummy', subitems: [] };
            var currentStack = [];
            currentStack.push(dummy);
            var tokens = markedInstance.lexer(summaryMD, options);
            tokens.forEach(function (token) {
                switch (token.type) {
                    case "heading":
                        if (token.depth == 3) {
                            // heading
                        }
                        break;
                    case "list_start":
                        break;
                    case "list_item_start":
                    case "loose_item_start":
                        var newItem = {
                            name: '',
                            subitems: []
                        };
                        currentStack.push(newItem);
                        break;
                    case "text":
                        token.text.replace(/^\[(.*)\]\((.*)\)$/i, function (full, name, path) {
                            currentStack[currentStack.length - 1].name = name;
                            currentStack[currentStack.length - 1].path = path.replace('.md', '');
                        });
                        break;
                    case "list_item_end":
                    case "loose_item_end":
                        var docEntry = currentStack.pop();
                        currentStack[currentStack.length - 1].subitems.push(docEntry);
                        break;
                    case "list_end":
                        break;
                    default:
                }
            });
            var TOC = dummy.subitems;
            if (!TOC || TOC.length == 0)
                return null;
            var previousNode;
            // Scan tree and build next / prev paths
            var buildPrevNext = function (node) {
                if (previousNode) {
                    node.prevName = previousNode.name;
                    node.prevPath = previousNode.path;
                    previousNode.nextName = node.name;
                    previousNode.nextPath = node.path;
                }
                if (node.path) {
                    previousNode = node;
                }
                node.subitems.forEach(function (tocItem, tocIndex) {
                    buildPrevNext(tocItem);
                });
            };
            TOC.forEach(function (tocItem, tocIndex) {
                buildPrevNext(tocItem);
            });
            return TOC;
        }
        docs.buildTOC = buildTOC;
        function visitTOC(toc, fn) {
            function visitEntry(entry) {
                fn(entry);
                if (entry.subitems)
                    entry.subitems.forEach(fn);
            }
            toc.forEach(visitEntry);
        }
        docs.visitTOC = visitTOC;
        var testedAugment = false;
        function augmentDocs(baseMd, childMd) {
            if (!testedAugment)
                testAugment();
            if (!childMd)
                return baseMd;
            var templ = splitMdSections(baseMd, null);
            var repl = splitMdSections(childMd, templ);
            var lookup = {};
            var used = {};
            for (var _i = 0, _a = repl.children; _i < _a.length; _i++) {
                var ch = _a[_i];
                U.assert(ch.children.length == 0);
                U.assert(!!ch.id);
                lookup[ch.id] = ch.text;
            }
            var replaceInTree = function (s) {
                if (s.id && lookup[s.id] !== undefined) {
                    used[s.id] = true;
                    s.text = lookup[s.id];
                    s.children = [];
                }
                s.children.forEach(replaceInTree);
            };
            replaceInTree(templ);
            var resMd = "";
            var flatten = function (s) {
                resMd += s.text;
                s.children.forEach(flatten);
            };
            flatten(templ);
            var leftover = "";
            var hd = repl.text
                .replace(/^\s*#+\s*@extends.*/mg, "")
                .replace(/^\s*\n/mg, "");
            if (hd.trim())
                leftover += hd.trim() + "\n";
            for (var _b = 0, _c = repl.children; _b < _c.length; _b++) {
                var s = _c[_b];
                if (!used[s.id])
                    leftover += s.text;
            }
            if (leftover) {
                resMd += "## Couldn't apply replacement logic to:\n" + leftover;
            }
            return resMd;
        }
        docs.augmentDocs = augmentDocs;
        function testAugment() {
            function test(a, b, c) {
                var r = augmentDocs(a, b).trim();
                c = c.trim();
                if (r != c) {
                    console.log("*** Template:\n" + a + "\n*** Input:\n" + b + "\n*** Expected:\n" + c + "\n*** Output:\n" + r);
                    throw new Error("augment docs test fail");
                }
            }
            testedAugment = true;
            var templ0 = "\n# T0\n## Examples #ex\n### Example 1\nTEx1\n### Example 2 #ex2\nTEx2\n### Example 3\nTEx3\n\n## See also #also\nTAlso\n";
            var inp0 = "\n# @extends\n# #ex2\nMy example\n## See Also These! #also\nMy links\n";
            var outp0 = "\n# T0\n## Examples #ex\n### Example 1\nTEx1\n### Example 2 #ex2\nMy example\n### Example 3\nTEx3\n\n## See Also These! #also\nMy links\n";
            var inp1 = "\n# @extends\n### #ex\nFoo\n#### Example 1\nEx1\n#### Example 2x #ex2\nEx2\n## See Also These! #also\nMy links\n";
            var outp1 = "\n# T0\n## Examples #ex\nFoo\n#### Example 1\nEx1\n#### Example 2x #ex2\nEx2\n## See Also These! #also\nMy links\n";
            test(templ0, "", templ0);
            test(templ0, " ", templ0);
            test(templ0, inp0, outp0);
            test(templ0, inp1, outp1);
        }
    })(docs = pxt.docs || (pxt.docs = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var gallery;
    (function (gallery) {
        function parseExampleMarkdown(name, md) {
            if (!md)
                return undefined;
            var m = /```(blocks?|typescript)\s+((.|\s)+?)\s*```/i.exec(md);
            if (!m)
                return undefined;
            var pm = /```package\s+((.|\s)+?)\s*```/i.exec(md);
            var dependencies = undefined;
            if (pm) {
                dependencies = {};
                pm[1].split('\n').map(function (s) { return s.replace(/\s*/g, ''); }).filter(function (s) { return !!s; })
                    .map(function (l) { return l.split('='); })
                    .forEach(function (kv) { return dependencies[kv[0]] = kv[1] || "*"; });
            }
            var src = m[2];
            // extract text between first sample and title
            //        let comment = md.substring(0, m.index)
            //            .replace(/^(#+.*|\s*)$/igm, '')
            //            .trim();
            //        if (comment) {
            //            src = `/**
            //${comment.split('\n').map(line => '* ' + line).join('\n')}
            //*/
            //` + src;
            //        }
            return {
                name: name,
                filesOverride: {
                    "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>",
                    "main.ts": src
                },
                dependencies: dependencies
            };
        }
        gallery.parseExampleMarkdown = parseExampleMarkdown;
        function parseGalleryMardown(md) {
            if (!md)
                return [];
            // second level titles are categories
            // ## foo bar
            // fenced code ```cards are sections of cards
            var galleries = [];
            var incard = false;
            var name = undefined;
            var cards = "";
            md.split(/\r?\n/).forEach(function (line) {
                // new category
                if (/^##/.test(line)) {
                    name = line.substr(2).trim();
                }
                else if (/^```codecard$/.test(line)) {
                    incard = true;
                }
                else if (/^```$/.test(line)) {
                    incard = false;
                    if (name && cards) {
                        try {
                            var cardsJSON = JSON.parse(cards);
                            if (cardsJSON && cardsJSON.length > 0)
                                galleries.push({ name: name, cards: cardsJSON });
                        }
                        catch (e) {
                            pxt.log('invalid card format in gallery');
                        }
                    }
                    cards = "";
                    name = undefined;
                }
                else if (incard)
                    cards += line + '\n';
            });
            return galleries;
        }
        gallery.parseGalleryMardown = parseGalleryMardown;
        function loadGalleryAsync(name) {
            return pxt.Cloud.downloadMarkdownAsync(name, pxt.Util.userLanguage(), pxt.Util.localizeLive)
                .then(function (md) { return parseGalleryMardown(md); });
        }
        gallery.loadGalleryAsync = loadGalleryAsync;
        function loadExampleAsync(name, path) {
            return pxt.Cloud.downloadMarkdownAsync(path, pxt.Util.userLanguage(), pxt.Util.localizeLive)
                .then(function (md) { return parseExampleMarkdown(name, md); });
        }
        gallery.loadExampleAsync = loadExampleAsync;
    })(gallery = pxt.gallery || (pxt.gallery = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    function hex2(n) {
        return ("0" + n.toString(16)).slice(-2);
    }
    var GDBServer = /** @class */ (function () {
        function GDBServer(io) {
            var _this = this;
            this.io = io;
            this.q = new pxt.U.PromiseQueue();
            this.dataBuf = "";
            this.onEvent = function (s) { };
            this.io.onData = function (b) { return _this.onData(b); };
        }
        GDBServer.prototype.onData = function (buf) {
            this.dataBuf += pxt.U.uint8ArrayToString(buf);
            while (this.dataBuf) {
                var ch = this.dataBuf[0];
                if (ch == '+')
                    this.dataBuf = this.dataBuf.slice(1);
                else if (ch == '$' || ch == '%') {
                    var resp = this.decodeResp(this.dataBuf.slice(1));
                    if (resp != null) {
                        if (ch == '$') {
                            this.sendCmdAsync("+", false).done();
                            if (this.onResponse)
                                this.onResponse(resp);
                            else
                                pxt.U.userError("unexpected response: " + resp);
                        }
                        else {
                            this.onEvent(resp);
                        }
                    }
                    else {
                        break;
                    }
                }
                else {
                    pxt.U.userError("invalid character: " + ch);
                }
            }
        };
        GDBServer.prototype.buildCmd = function (cmd) {
            if (cmd == "+")
                return pxt.U.stringToUint8Array(cmd);
            var r = "";
            for (var i = 0; i < cmd.length; ++i) {
                var ch_1 = cmd.charAt(i);
                if (ch_1 == '}' || ch_1 == '#' || ch_1 == '$') {
                    r += '}';
                    r += String.fromCharCode(ch_1.charCodeAt(0) ^ 0x20);
                }
                else {
                    r += ch_1;
                }
            }
            var ch = 0;
            cmd = r;
            for (var i = 0; i < cmd.length; ++i) {
                ch = (ch + cmd.charCodeAt(i)) & 0xff;
            }
            r = "$" + cmd + "#" + hex2(ch);
            return pxt.U.stringToUint8Array(r);
        };
        GDBServer.prototype.decodeResp = function (resp) {
            var r = "";
            for (var i = 0; i < resp.length; ++i) {
                var ch = resp[i];
                if (ch == '}') {
                    ++i;
                    r += String.fromCharCode(resp.charCodeAt(i) ^ 0x20);
                }
                else if (ch == '*') {
                    ++i;
                    var rep = resp.charCodeAt(i) - 29;
                    var ch_2 = r.charAt(r.length - 1);
                    while (rep-- > 0)
                        r += ch_2;
                }
                else if (ch == '#') {
                    var checksum = resp.slice(i + 1, i + 3);
                    if (checksum.length == 2) {
                        // TODO validate checksum?
                        this.dataBuf = resp.slice(i + 3);
                        return r;
                    }
                    else {
                        // incomplete
                        return null;
                    }
                }
                else {
                    r += ch;
                }
            }
            return null;
        };
        GDBServer.prototype.sendCmdAsync = function (cmd, resp) {
            var _this = this;
            if (resp === void 0) { resp = true; }
            var cmd2 = this.buildCmd(cmd);
            return this.q.enqueue("one", function () {
                return !resp ? _this.io.sendPacketAsync(cmd2).then(function () { return null; }) :
                    new Promise(function (resolve) {
                        _this.onResponse = function (v) {
                            _this.onResponse = null;
                            console.log("GDB: '" + cmd + "' -> '" + v + "'");
                            resolve(v);
                        };
                        _this.io.sendPacketAsync(_this.buildCmd(cmd)).done();
                    });
            });
        };
        GDBServer.prototype.initAsync = function () {
            var _this = this;
            return this.sendCmdAsync("qSupported")
                .then(function (res) {
                var caps = res.split(/;/);
                console.log("GDB-server caps: ", caps);
                // return this.sendCmdAsync("?") // reason for stop
            })
                .then(function (res) {
                return _this.sendCmdAsync("c", false); // continue; don't expect response
            })
                .then(function () { });
        };
        return GDBServer;
    }());
    pxt.GDBServer = GDBServer;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var github;
    (function (github) {
        github.token = null;
        function useProxy() {
            if (pxt.U.isNodeJS)
                return false; // bypass proxy for CLI
            if (github.token)
                return false;
            if (pxt.appTarget && pxt.appTarget.cloud && pxt.appTarget.cloud.noGithubProxy)
                return false; // target requests no proxy
            return true;
        }
        github.useProxy = useProxy;
        function ghRequestAsync(opts) {
            if (github.token) {
                if (opts.url.indexOf('?') > 0)
                    opts.url += "&";
                else
                    opts.url += "?";
                opts.url += "access_token=" + github.token;
                // Token in headers doesn't work with CORS, especially for githubusercontent.com
                //if (!opts.headers) opts.headers = {}
                //opts.headers['Authorization'] = `token ${token}`
            }
            return pxt.U.requestAsync(opts);
        }
        function ghGetJsonAsync(url) {
            return ghRequestAsync({ url: url }).then(function (resp) { return resp.json; });
        }
        function ghGetTextAsync(url) {
            return ghRequestAsync({ url: url }).then(function (resp) { return resp.text; });
        }
        var MemoryGithubDb = /** @class */ (function () {
            function MemoryGithubDb() {
                this.configs = {};
                this.packages = {};
            }
            MemoryGithubDb.prototype.proxyLoadPackageAsync = function (repopath, tag) {
                var _this = this;
                // cache lookup
                var key = repopath + "/" + tag;
                var res = this.packages[key];
                if (res) {
                    pxt.debug("github cache " + repopath + "/" + tag + "/text");
                    return Promise.resolve(res);
                }
                // load and cache
                return pxt.U.httpGetJsonAsync(pxt.Cloud.apiRoot + "gh/" + repopath + "/" + tag + "/text")
                    .then(function (v) { return _this.packages[key] = { files: v }; });
            };
            MemoryGithubDb.prototype.loadConfigAsync = function (repopath, tag) {
                var _this = this;
                if (!tag)
                    tag = "master";
                // cache lookup
                var key = repopath + "/" + tag;
                var res = this.configs[key];
                if (res) {
                    pxt.debug("github cache " + repopath + "/" + tag + "/config");
                    return Promise.resolve(pxt.U.clone(res));
                }
                var cacheConfig = function (v) {
                    var cfg = JSON.parse(v);
                    _this.configs[key] = cfg;
                    return pxt.U.clone(cfg);
                };
                // download and cache
                if (useProxy()) {
                    // this is a bit wasteful, we just need pxt.json and download everything
                    return this.proxyLoadPackageAsync(repopath, tag)
                        .then(function (v) { return cacheConfig(v.files[pxt.CONFIG_NAME]); });
                }
                var url = "https://raw.githubusercontent.com/" + repopath + "/" + tag + "/" + pxt.CONFIG_NAME;
                return ghGetTextAsync(url)
                    .then(function (cfg) { return cacheConfig(cfg); });
            };
            MemoryGithubDb.prototype.loadPackageAsync = function (repopath, tag) {
                var _this = this;
                if (!tag)
                    tag = "master";
                if (useProxy())
                    return this.proxyLoadPackageAsync(repopath, tag).then(function (v) { return pxt.U.clone(v); });
                return tagToShaAsync(repopath, tag)
                    .then(function (sha) {
                    // cache lookup
                    var key = repopath + "/" + sha;
                    var res = _this.packages[key];
                    if (res) {
                        pxt.debug("github cache " + repopath + "/" + tag + "/text");
                        return Promise.resolve(pxt.U.clone(res));
                    }
                    // load and cache
                    pxt.log("Downloading " + repopath + "/" + tag + " -> " + sha);
                    return downloadTextAsync(repopath, sha, pxt.CONFIG_NAME)
                        .then(function (pkg) {
                        var current = {
                            files: {}
                        };
                        current.files[pxt.CONFIG_NAME] = pkg;
                        var cfg = JSON.parse(pkg);
                        return Promise.map(pxt.allPkgFiles(cfg).slice(1), function (fn) { return downloadTextAsync(repopath, sha, fn)
                            .then(function (text) {
                            current.files[fn] = text;
                        }); })
                            .then(function () {
                            // cache!
                            _this.packages[key] = current;
                            return pxt.U.clone(current);
                        });
                    });
                });
            };
            return MemoryGithubDb;
        }());
        github.MemoryGithubDb = MemoryGithubDb;
        function downloadTextAsync(repopath, commitid, filepath) {
            return ghGetTextAsync("https://raw.githubusercontent.com/" + repopath + "/" + commitid + "/" + filepath);
        }
        github.downloadTextAsync = downloadTextAsync;
        // overriden by client
        github.db = new MemoryGithubDb();
        function getCommitAsync(repopath, sha) {
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/commits/" + sha)
                .then(function (commit) { return ghGetJsonAsync(commit.tree.url)
                .then(function (tree) {
                commit.tree = tree;
                return commit;
            }); });
        }
        github.getCommitAsync = getCommitAsync;
        function ghPostAsync(path, data) {
            return ghRequestAsync({
                url: /^https:/.test(path) ? path : "https://api.github.com/repos/" + path,
                method: "POST",
                allowHttpErrors: true,
                data: data
            }).then(function (resp) {
                if (resp.statusCode == 200 || resp.statusCode == 201 || resp.statusCode == 204)
                    return resp.json;
                throw pxt.U.userError(lf("Cannot create object at github.com/{0}; code: {1}", path, resp.statusCode));
            });
        }
        function createObjectAsync(repopath, type, data) {
            return ghPostAsync(repopath + "/git/" + type + "s", data)
                .then(function (resp) { return resp.sha; });
        }
        github.createObjectAsync = createObjectAsync;
        function fastForwardAsync(repopath, branch, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghRequestAsync({
                                url: "https://api.github.com/repos/" + repopath + "/git/refs/heads/" + branch,
                                method: "PATCH",
                                allowHttpErrors: true,
                                data: {
                                    sha: commitid,
                                    force: false
                                }
                            })];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/, (resp.statusCode == 200)];
                    }
                });
            });
        }
        github.fastForwardAsync = fastForwardAsync;
        function putFileAsync(repopath, path, content) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghRequestAsync({
                                url: "https://api.github.com/repos/" + repopath + "/contents/" + path,
                                method: "PUT",
                                allowHttpErrors: true,
                                data: {
                                    message: lf("Initialize empty repo"),
                                    content: btoa(pxt.U.toUTF8(content)),
                                    branch: "master"
                                }
                            })];
                        case 1:
                            resp = _a.sent();
                            if (resp.statusCode != 201)
                                pxt.U.userError("PUT file failed");
                            return [2 /*return*/];
                    }
                });
            });
        }
        github.putFileAsync = putFileAsync;
        function createTagAsync(repopath, tag, commitid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ghPostAsync(repopath + "/git/refs", {
                                ref: "refs/tags/" + tag,
                                sha: commitid
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        github.createTagAsync = createTagAsync;
        function createPRAsync(repopath, branch, commitid, msg) {
            return __awaiter(this, void 0, void 0, function () {
                var branchName, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            branchName = "pr-" + commitid.slice(0, 8);
                            return [4 /*yield*/, ghPostAsync(repopath + "/git/refs", {
                                    ref: "refs/heads/" + branchName,
                                    sha: commitid
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ghPostAsync(repopath + "/pulls", {
                                    title: msg,
                                    body: lf("Automatically created from MakeCode."),
                                    head: branchName,
                                    base: "master",
                                    maintainer_can_modify: true
                                })];
                        case 2:
                            res = _a.sent();
                            return [2 /*return*/, res.html_url];
                    }
                });
            });
        }
        github.createPRAsync = createPRAsync;
        function mergeAsync(repopath, branch, commitid) {
            return ghRequestAsync({
                url: "https://api.github.com/repos/" + repopath + "/merges",
                method: "POST",
                allowHttpErrors: true,
                data: {
                    base: branch,
                    head: commitid
                }
            }).then(function (resp) {
                if (resp.statusCode == 201 || resp.statusCode == 204)
                    return resp.json.sha;
                if (resp.statusCode == 409) {
                    // conflict
                    return null;
                }
                throw pxt.U.userError(lf("Cannot merge in github.com/{1}; code: {2}", repopath, resp.statusCode));
            });
        }
        github.mergeAsync = mergeAsync;
        function getRefAsync(repopath, branch) {
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/heads/" + branch)
                .then(resolveRefAsync);
        }
        github.getRefAsync = getRefAsync;
        function listRefsAsync(repopath, namespace) {
            if (namespace === void 0) { namespace = "tags"; }
            return listRefsExtAsync(repopath, namespace)
                .then(function (res) { return Object.keys(res.refs); });
        }
        github.listRefsAsync = listRefsAsync;
        function listRefsExtAsync(repopath, namespace) {
            if (namespace === void 0) { namespace = "tags"; }
            var head = null;
            var fetch = !useProxy() ?
                ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/" + namespace + "/?per_page=100") :
                pxt.U.httpGetJsonAsync(pxt.Cloud.apiRoot + "gh/" + repopath + "/refs")
                    .then(function (r) {
                    var res = Object.keys(r.refs)
                        .filter(function (k) { return pxt.U.startsWith(k, "refs/" + namespace + "/"); })
                        .map(function (k) { return ({ ref: k, object: { sha: r.refs[k] } }); });
                    head = r.refs["HEAD"];
                    return res;
                });
            var clean = function (x) { return x.replace(/^refs\/[^\/]+\//, ""); };
            return fetch.then(function (resp) {
                resp.sort(function (a, b) { return pxt.semver.strcmp(clean(a.ref), clean(b.ref)); });
                var r = {};
                for (var _i = 0, resp_1 = resp; _i < resp_1.length; _i++) {
                    var obj = resp_1[_i];
                    r[clean(obj.ref)] = obj.object.sha;
                }
                return { refs: r, head: head };
            }, function (err) {
                if (err.statusCode == 404)
                    return { refs: {} };
                else
                    return Promise.reject(err);
            });
        }
        github.listRefsExtAsync = listRefsExtAsync;
        function resolveRefAsync(r) {
            if (r.object.type == "commit")
                return Promise.resolve(r.object.sha);
            else if (r.object.type == "tag")
                return ghGetJsonAsync(r.object.url)
                    .then(function (r) {
                    return r.object.type == "commit" ? r.object.sha :
                        Promise.reject(new Error("Bad type (2nd order) " + r.object.type));
                });
            else
                return Promise.reject(new Error("Bad type " + r.object.type));
        }
        function tagToShaAsync(repopath, tag) {
            if (/^[a-f0-9]{40}$/.test(tag))
                return Promise.resolve(tag);
            return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/tags/" + tag)
                .then(resolveRefAsync, function (e) {
                return ghGetJsonAsync("https://api.github.com/repos/" + repopath + "/git/refs/heads/" + tag)
                    .then(resolveRefAsync);
            });
        }
        function pkgConfigAsync(repopath, tag) {
            if (tag === void 0) { tag = "master"; }
            return github.db.loadConfigAsync(repopath, tag);
        }
        github.pkgConfigAsync = pkgConfigAsync;
        function downloadPackageAsync(repoWithTag, config) {
            var p = parseRepoId(repoWithTag);
            if (!p) {
                pxt.log('Unknown github syntax');
                return Promise.resolve(undefined);
            }
            if (isRepoBanned(p, config)) {
                pxt.tickEvent("github.download.banned");
                pxt.log('Github repo is banned');
                return Promise.resolve(undefined);
            }
            return github.db.loadPackageAsync(p.fullName, p.tag);
        }
        github.downloadPackageAsync = downloadPackageAsync;
        var GitRepoStatus;
        (function (GitRepoStatus) {
            GitRepoStatus[GitRepoStatus["Unknown"] = 0] = "Unknown";
            GitRepoStatus[GitRepoStatus["Approved"] = 1] = "Approved";
            GitRepoStatus[GitRepoStatus["Banned"] = 2] = "Banned";
        })(GitRepoStatus = github.GitRepoStatus || (github.GitRepoStatus = {}));
        function listUserReposAsync() {
            return ghGetJsonAsync("https://api.github.com/user/repos?per_page=200&sort=updated&affiliation=owner,collaborator")
                .then(function (res) { return res.map(function (r) { return mkRepo(r, null); }); });
        }
        github.listUserReposAsync = listUserReposAsync;
        function createRepoAsync(name, description) {
            return ghPostAsync("https://api.github.com/user/repos", {
                name: name,
                description: description,
                private: false,
            }).then(function (v) { return mkRepo(v, null); });
        }
        github.createRepoAsync = createRepoAsync;
        function repoIconUrl(repo) {
            if (repo.status != GitRepoStatus.Approved)
                return undefined;
            return mkRepoIconUrl(repo);
        }
        github.repoIconUrl = repoIconUrl;
        function mkRepoIconUrl(repo) {
            return pxt.Cloud.apiRoot + ("gh/" + repo.fullName + "/icon");
        }
        github.mkRepoIconUrl = mkRepoIconUrl;
        function mkRepo(r, config, tag) {
            if (!r)
                return undefined;
            var rr = {
                owner: r.owner.login.toLowerCase(),
                fullName: r.full_name.toLowerCase(),
                name: r.name,
                description: r.description,
                defaultBranch: r.default_branch,
                tag: tag,
                updatedAt: Math.round(new Date(r.updated_at).getTime() / 1000)
            };
            rr.status = repoStatus(rr, config);
            return rr;
        }
        function repoStatus(rr, config) {
            return isRepoBanned(rr, config) ? GitRepoStatus.Banned
                : isRepoApproved(rr, config) ? GitRepoStatus.Approved
                    : GitRepoStatus.Unknown;
        }
        github.repoStatus = repoStatus;
        function isOrgBanned(repo, config) {
            if (!config)
                return false; // don't know
            if (!repo || !repo.owner)
                return true;
            if (config.bannedOrgs
                && config.bannedOrgs.some(function (org) { return org.toLowerCase() == repo.owner.toLowerCase(); }))
                return true;
            return false;
        }
        function isRepoBanned(repo, config) {
            if (isOrgBanned(repo, config))
                return true;
            if (!config)
                return false; // don't know
            if (!repo || !repo.fullName)
                return true;
            if (config.bannedRepos
                && config.bannedRepos.some(function (fn) { return fn.toLowerCase() == repo.fullName.toLowerCase(); }))
                return true;
            return false;
        }
        function isOrgApproved(repo, config) {
            if (!repo || !config)
                return false;
            if (repo.owner
                && config.approvedOrgs
                && config.approvedOrgs.some(function (org) { return org.toLowerCase() == repo.owner.toLowerCase(); }))
                return true;
            return false;
        }
        function isRepoApproved(repo, config) {
            if (isOrgApproved(repo, config))
                return true;
            if (!repo || !config)
                return false;
            if (repo.fullName
                && config.approvedRepos
                && config.approvedRepos.some(function (fn) { return fn.toLowerCase() == repo.fullName.toLowerCase(); }))
                return true;
            return false;
        }
        function repoAsync(id, config) {
            var rid = parseRepoId(id);
            var status = repoStatus(rid, config);
            if (status == GitRepoStatus.Banned)
                return Promise.resolve(undefined);
            if (!useProxy())
                return ghGetJsonAsync("https://api.github.com/repos/" + rid.fullName)
                    .then(function (r) { return mkRepo(r, config, rid.tag); });
            // always use proxy
            return pxt.Util.httpGetJsonAsync(pxt.Cloud.apiRoot + "gh/" + rid.fullName)
                .then(function (meta) {
                if (!meta)
                    return undefined;
                return {
                    github: true,
                    owner: rid.owner,
                    fullName: rid.fullName,
                    name: meta.name,
                    description: meta.description,
                    defaultBranch: "master",
                    tag: rid.tag,
                    status: status
                };
            });
        }
        github.repoAsync = repoAsync;
        function searchAsync(query, config) {
            if (!config)
                return Promise.resolve([]);
            var repos = query.split('|').map(parseRepoUrl).filter(function (repo) { return !!repo; });
            if (repos.length > 0)
                return Promise.all(repos.map(function (id) { return repoAsync(id.path, config); }))
                    .then(function (rs) { return rs.filter(function (r) { return r.status != GitRepoStatus.Banned; }); }); // allow deep links to github repos
            var fetch = function () { return useProxy()
                ? pxt.U.httpGetJsonAsync(pxt.Cloud.apiRoot + "ghsearch/" + pxt.appTarget.id + "/" + (pxt.appTarget.platformid || pxt.appTarget.id) + "?q="
                    + encodeURIComponent(query))
                : ghGetJsonAsync("https://api.github.com/search/repositories?q="
                    + encodeURIComponent(query + (" in:name,description,readme \"for PXT/" + (pxt.appTarget.platformid || pxt.appTarget.id) + "\""))); };
            return fetch()
                .then(function (rs) {
                return rs.items.map(function (item) { return mkRepo(item, config); })
                    .filter(function (r) { return r.status == GitRepoStatus.Approved || (config.allowUnapproved && r.status == GitRepoStatus.Unknown); })
                    .filter(function (r) { return !pxt.appTarget.appTheme.githubUrl || "https://github.com/" + r.fullName != pxt.appTarget.appTheme.githubUrl.toLowerCase(); });
            })
                .catch(function (err) { return []; }); // offline
        }
        github.searchAsync = searchAsync;
        function parseRepoUrl(url) {
            if (!url)
                return undefined;
            var m = /^((https:\/\/)?github.com\/)?([^/]+\/[^/#]+)(#(\w+))?$/i.exec(url.trim());
            if (!m)
                return undefined;
            var r = {
                repo: m ? m[3].toLowerCase() : null,
                tag: m ? m[5] : null
            };
            r.path = r.repo + (r.tag ? '#' + r.tag : '');
            return r;
        }
        github.parseRepoUrl = parseRepoUrl;
        function parseRepoId(repo) {
            if (!repo)
                return undefined;
            repo = repo.replace(/^github:/i, "");
            repo = repo.replace(/^https:\/\/github.com\//i, "");
            repo = repo.replace(/\.git\b/i, "");
            var m = /([^#]+)(#(.*))?/.exec(repo);
            var owner = m ? m[1].split('/')[0].toLowerCase() : undefined;
            return {
                owner: owner,
                fullName: m ? m[1].toLowerCase() : repo.toLowerCase(),
                tag: m ? m[3] : null
            };
        }
        github.parseRepoId = parseRepoId;
        function isGithubId(id) {
            if (!id)
                return false;
            return id.slice(0, 7) == "github:";
        }
        github.isGithubId = isGithubId;
        function stringifyRepo(p) {
            return p ? "github:" + p.fullName.toLowerCase() + "#" + (p.tag || "master") : undefined;
        }
        github.stringifyRepo = stringifyRepo;
        function noramlizeRepoId(id) {
            return stringifyRepo(parseRepoId(id));
        }
        github.noramlizeRepoId = noramlizeRepoId;
        function latestVersionAsync(path, config) {
            var parsed = parseRepoId(path);
            if (!parsed)
                return Promise.resolve(null);
            return repoAsync(parsed.fullName, config)
                .then(function (scr) {
                if (!scr)
                    return undefined;
                return listRefsExtAsync(scr.fullName, "tags")
                    .then(function (refsRes) {
                    var tags = Object.keys(refsRes.refs);
                    tags.reverse();
                    // only look for vxx.xx.xx tags
                    tags = tags.filter(function (t) { return /^v\d+(\.\d+(\.\d+)?)?$/i.test(t); });
                    if (tags[0])
                        return Promise.resolve(tags[0]);
                    else
                        return refsRes.head || tagToShaAsync(scr.fullName, scr.defaultBranch);
                });
            });
        }
        github.latestVersionAsync = latestVersionAsync;
        function publishGistAsync(token, forceNew, files, name, currentGistId) {
            // Github gist API: https://developer.github.com/v3/gists/
            var data = {
                "description": name,
                "public": false,
                "files": files
            };
            var headers = {};
            var method, url = "https://api.github.com/gists";
            if (token)
                headers['Authorization'] = "token " + token;
            if (currentGistId && token && !forceNew) {
                // Patch existing gist
                method = 'PATCH';
                url += "/" + currentGistId;
            }
            else {
                // Create new gist
                method = 'POST';
            }
            return pxt.U.requestAsync({
                url: url,
                allowHttpErrors: true,
                headers: headers,
                method: method,
                data: data || {}
            })
                .then(function (resp) {
                if ((resp.statusCode == 200 || resp.statusCode == 201) && resp.json.id) {
                    return Promise.resolve(resp.json.id);
                }
                else if (resp.statusCode == 404 && method == 'PATCH') {
                    return Promise.reject(resp.statusCode);
                }
                else if (resp.statusCode == 404) {
                    return Promise.reject("Make sure to add the ``gist`` scope to your token. " + resp.text);
                }
                return Promise.reject(resp.text);
            });
        }
        github.publishGistAsync = publishGistAsync;
        github.GIT_JSON = ".git.json";
    })(github = pxt.github || (pxt.github = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var HF2;
    (function (HF2) {
        // see https://github.com/Microsoft/uf2/blob/master/hf2.md for full spec
        HF2.HF2_CMD_BININFO = 0x0001; // no arguments
        HF2.HF2_MODE_BOOTLOADER = 0x01;
        HF2.HF2_MODE_USERSPACE = 0x02;
        /*
        struct HF2_BININFO_Result {
            uint32_t mode;
            uint32_t flash_page_size;
            uint32_t flash_num_pages;
            uint32_t max_message_size;
        };
        */
        HF2.HF2_CMD_INFO = 0x0002;
        // no arguments
        // results is utf8 character array
        HF2.HF2_CMD_RESET_INTO_APP = 0x0003; // no arguments, no result
        HF2.HF2_CMD_RESET_INTO_BOOTLOADER = 0x0004; // no arguments, no result
        HF2.HF2_CMD_START_FLASH = 0x0005; // no arguments, no result
        HF2.HF2_CMD_WRITE_FLASH_PAGE = 0x0006;
        /*
        struct HF2_WRITE_FLASH_PAGE_Command {
            uint32_t target_addr;
            uint32_t data[flash_page_size];
        };
        */
        // no result
        HF2.HF2_CMD_CHKSUM_PAGES = 0x0007;
        /*
        struct HF2_CHKSUM_PAGES_Command {
            uint32_t target_addr;
            uint32_t num_pages;
        };
        struct HF2_CHKSUM_PAGES_Result {
            uint16_t chksums[num_pages];
        };
        */
        HF2.HF2_CMD_READ_WORDS = 0x0008;
        /*
        struct HF2_READ_WORDS_Command {
            uint32_t target_addr;
            uint32_t num_words;
        };
        struct HF2_READ_WORDS_Result {
            uint32_t words[num_words];
        };
        */
        HF2.HF2_CMD_WRITE_WORDS = 0x0009;
        /*
        struct HF2_WRITE_WORDS_Command {
            uint32_t target_addr;
            uint32_t num_words;
            uint32_t words[num_words];
        };
        */
        // no result
        HF2.HF2_CMD_DMESG = 0x0010;
        // no arguments
        // results is utf8 character array
        HF2.HF2_FLAG_SERIAL_OUT = 0x80;
        HF2.HF2_FLAG_SERIAL_ERR = 0xC0;
        HF2.HF2_FLAG_CMDPKT_LAST = 0x40;
        HF2.HF2_FLAG_CMDPKT_BODY = 0x00;
        HF2.HF2_FLAG_MASK = 0xC0;
        HF2.HF2_SIZE_MASK = 63;
        HF2.HF2_STATUS_OK = 0x00;
        HF2.HF2_STATUS_INVALID_CMD = 0x01;
        HF2.HF2_STATUS_EXEC_ERR = 0x02;
        HF2.HF2_STATUS_EVENT = 0x80;
        // the eventId is overlayed on the tag+status; the mask corresponds
        // to the HF2_STATUS_EVENT above
        HF2.HF2_EV_MASK = 0x800000;
        function write32(buf, pos, v) {
            buf[pos + 0] = (v >> 0) & 0xff;
            buf[pos + 1] = (v >> 8) & 0xff;
            buf[pos + 2] = (v >> 16) & 0xff;
            buf[pos + 3] = (v >> 24) & 0xff;
        }
        HF2.write32 = write32;
        function write16(buf, pos, v) {
            buf[pos + 0] = (v >> 0) & 0xff;
            buf[pos + 1] = (v >> 8) & 0xff;
        }
        HF2.write16 = write16;
        function read32(buf, pos) {
            return (buf[pos] | (buf[pos + 1] << 8) | (buf[pos + 2] << 16) | (buf[pos + 3] << 24)) >>> 0;
        }
        HF2.read32 = read32;
        function read16(buf, pos) {
            return buf[pos] | (buf[pos + 1] << 8);
        }
        HF2.read16 = read16;
        function encodeU32LE(words) {
            var r = new Uint8Array(words.length * 4);
            for (var i = 0; i < words.length; ++i)
                write32(r, i * 4, words[i]);
            return r;
        }
        HF2.encodeU32LE = encodeU32LE;
        function decodeU32LE(buf) {
            var res = [];
            for (var i = 0; i < buf.length; i += 4)
                res.push(read32(buf, i));
            return res;
        }
        HF2.decodeU32LE = decodeU32LE;
        var logEnabled = false;
        function enableLog() {
            logEnabled = true;
        }
        HF2.enableLog = enableLog;
        function log(msg) {
            if (logEnabled)
                pxt.log("HF2: " + msg);
            else
                pxt.debug("HF2: " + msg);
        }
        var Wrapper = /** @class */ (function () {
            function Wrapper(io) {
                var _this = this;
                this.io = io;
                this.cmdSeq = pxt.U.randomUint32();
                this.lock = new pxt.U.PromiseQueue();
                this.rawMode = false;
                this.maxMsgSize = 63; // when running in forwarding mode, we do not really know
                this.bootloaderMode = false;
                this.reconnectTries = 0;
                this.autoReconnect = false;
                this.msgs = new pxt.U.PromiseBuffer();
                this.eventHandlers = {};
                this.onSerial = function (buf, isStderr) { };
                var frames = [];
                io.onSerial = function (b, e) { return _this.onSerial(b, e); };
                io.onData = function (buf) {
                    var tp = buf[0] & HF2.HF2_FLAG_MASK;
                    var len = buf[0] & 63;
                    //console.log(`msg tp=${tp} len=${len}`)
                    var frame = new Uint8Array(len);
                    pxt.U.memcpy(frame, 0, buf, 1, len);
                    if (tp & HF2.HF2_FLAG_SERIAL_OUT) {
                        _this.onSerial(frame, tp == HF2.HF2_FLAG_SERIAL_ERR);
                        return;
                    }
                    frames.push(frame);
                    if (tp == HF2.HF2_FLAG_CMDPKT_BODY) {
                        return;
                    }
                    else {
                        pxt.U.assert(tp == HF2.HF2_FLAG_CMDPKT_LAST);
                        var total = 0;
                        for (var _i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
                            var f = frames_1[_i];
                            total += f.length;
                        }
                        var r = new Uint8Array(total);
                        var ptr = 0;
                        for (var _a = 0, frames_2 = frames; _a < frames_2.length; _a++) {
                            var f = frames_2[_a];
                            pxt.U.memcpy(r, ptr, f);
                            ptr += f.length;
                        }
                        frames = [];
                        if (r[2] & HF2.HF2_STATUS_EVENT) {
                            // asynchronous event
                            io.onEvent(r);
                        }
                        else {
                            _this.msgs.push(r);
                        }
                    }
                };
                io.onEvent = function (buf) {
                    var evid = read32(buf, 0);
                    var f = pxt.U.lookup(_this.eventHandlers, evid + "");
                    if (f) {
                        f(buf.slice(4));
                    }
                    else {
                        log("unhandled event: " + evid.toString(16));
                    }
                };
                io.onError = function (err) {
                    log("recv error: " + err.message);
                    if (_this.autoReconnect) {
                        _this.autoReconnect = false;
                        _this.reconnectAsync()
                            .then(function () {
                            _this.autoReconnect = true;
                        }, function (err) {
                            log("reconnect error: " + err.message);
                        });
                    }
                    //this.msgs.pushError(err)
                };
            }
            Wrapper.prototype.resetState = function () {
                this.lock = new pxt.U.PromiseQueue();
                this.info = null;
                this.infoRaw = null;
                this.pageSize = null;
                this.flashSize = null;
                this.maxMsgSize = 63;
                this.bootloaderMode = false;
                this.msgs.drain();
            };
            Wrapper.prototype.onEvent = function (id, f) {
                pxt.U.assert(!!(id & HF2.HF2_EV_MASK));
                this.eventHandlers[id + ""] = f;
            };
            Wrapper.prototype.reconnectAsync = function (first) {
                var _this = this;
                if (first === void 0) { first = false; }
                this.resetState();
                if (first)
                    return this.initAsync();
                log("reconnect raw=" + this.rawMode);
                return this.io.reconnectAsync()
                    .then(function () { return _this.initAsync(); })
                    .catch(function (e) {
                    if (_this.reconnectTries < 5) {
                        _this.reconnectTries++;
                        log("error " + e.message + "; reconnecting attempt #" + _this.reconnectTries);
                        return Promise.delay(500)
                            .then(function () { return _this.reconnectAsync(); });
                    }
                    else {
                        throw e;
                    }
                });
            };
            Wrapper.prototype.disconnectAsync = function () {
                log("disconnect");
                return this.io.disconnectAsync();
            };
            Wrapper.prototype.error = function (m) {
                return this.io.error(m);
            };
            Wrapper.prototype.talkAsync = function (cmd, data) {
                var _this = this;
                if (this.io.talksAsync)
                    return this.io.talksAsync([{ cmd: cmd, data: data }])
                        .then(function (v) { return v[0]; });
                var len = 8;
                if (data)
                    len += data.length;
                var pkt = new Uint8Array(len);
                var seq = ++this.cmdSeq & 0xffff;
                write32(pkt, 0, cmd);
                write16(pkt, 4, seq);
                write16(pkt, 6, 0);
                if (data)
                    pxt.U.memcpy(pkt, 8, data, 0, data.length);
                var numSkipped = 0;
                var handleReturnAsync = function () {
                    return _this.msgs.shiftAsync(1000) // we wait up to a second
                        .then(function (res) {
                        if (read16(res, 0) != seq) {
                            if (numSkipped < 3) {
                                numSkipped++;
                                log("message out of sync, (" + seq + " vs " + read16(res, 0) + "); will re-try");
                                return handleReturnAsync();
                            }
                            _this.error("out of sync");
                        }
                        var info = "";
                        if (res[3])
                            info = "; info=" + res[3];
                        switch (res[2]) {
                            case HF2.HF2_STATUS_OK:
                                return res.slice(4);
                            case HF2.HF2_STATUS_INVALID_CMD:
                                _this.error("invalid command" + info);
                                break;
                            case HF2.HF2_STATUS_EXEC_ERR:
                                _this.error("execution error" + info);
                                break;
                            default:
                                _this.error("error " + res[2] + info);
                                break;
                        }
                        return null;
                    });
                };
                return this.sendMsgAsync(pkt)
                    .then(handleReturnAsync);
            };
            Wrapper.prototype.sendMsgAsync = function (buf) {
                return this.sendMsgCoreAsync(buf);
            };
            Wrapper.prototype.sendSerialAsync = function (buf, useStdErr) {
                if (useStdErr === void 0) { useStdErr = false; }
                if (this.io.sendSerialAsync)
                    return this.io.sendSerialAsync(buf, useStdErr);
                return this.sendMsgCoreAsync(buf, useStdErr ? 2 : 1);
            };
            Wrapper.prototype.sendMsgCoreAsync = function (buf, serial) {
                var _this = this;
                if (serial === void 0) { serial = 0; }
                // Util.assert(buf.length <= this.maxMsgSize)
                var frame = new Uint8Array(64);
                var loop = function (pos) {
                    var len = buf.length - pos;
                    if (len <= 0)
                        return Promise.resolve();
                    if (len > 63) {
                        len = 63;
                        frame[0] = HF2.HF2_FLAG_CMDPKT_BODY;
                    }
                    else {
                        frame[0] = HF2.HF2_FLAG_CMDPKT_LAST;
                    }
                    if (serial)
                        frame[0] = serial == 1 ? HF2.HF2_FLAG_SERIAL_OUT : HF2.HF2_FLAG_SERIAL_ERR;
                    frame[0] |= len;
                    for (var i = 0; i < len; ++i)
                        frame[i + 1] = buf[pos + i];
                    return _this.io.sendPacketAsync(frame)
                        .then(function () { return loop(pos + len); });
                };
                return this.lock.enqueue("out", function () { return loop(0); });
            };
            Wrapper.prototype.switchToBootloaderAsync = function () {
                var _this = this;
                if (this.bootloaderMode)
                    return Promise.resolve();
                log("Switching into bootloader mode");
                if (this.io.isSwitchingToBootloader) {
                    this.io.isSwitchingToBootloader();
                }
                return this.maybeReconnectAsync()
                    .then(function () { return _this.talkAsync(HF2.HF2_CMD_START_FLASH); })
                    .then(function () { return _this.initAsync(); })
                    .then(function () {
                    if (!_this.bootloaderMode)
                        _this.error("cannot switch into bootloader mode");
                });
            };
            Wrapper.prototype.reflashAsync = function (blocks) {
                var _this = this;
                log("reflash");
                return this.flashAsync(blocks)
                    .then(function () { return Promise.delay(100); })
                    .then(function () { return _this.reconnectAsync(); });
            };
            Wrapper.prototype.writeWordsAsync = function (addr, words) {
                pxt.U.assert(words.length <= 64); // just sanity check
                return this.talkAsync(HF2.HF2_CMD_WRITE_WORDS, encodeU32LE([addr, words.length].concat(words)))
                    .then(function () { });
            };
            Wrapper.prototype.readWordsAsync = function (addr, numwords) {
                var args = new Uint8Array(8);
                write32(args, 0, addr);
                write32(args, 4, numwords);
                pxt.U.assert(numwords <= 64); // just sanity check
                return this.talkAsync(HF2.HF2_CMD_READ_WORDS, args);
            };
            Wrapper.prototype.pingAsync = function () {
                if (this.rawMode)
                    return Promise.resolve();
                return this.talkAsync(HF2.HF2_CMD_BININFO)
                    .then(function (buf) { });
            };
            Wrapper.prototype.maybeReconnectAsync = function () {
                var _this = this;
                return this.pingAsync()
                    .catch(function (e) {
                    return _this.reconnectAsync()
                        .then(function () { return _this.pingAsync(); });
                });
            };
            Wrapper.prototype.flashAsync = function (blocks) {
                var _this = this;
                var start = Date.now();
                var fstart = 0;
                var loopAsync = function (pos) {
                    if (pos >= blocks.length)
                        return Promise.resolve();
                    var b = blocks[pos];
                    pxt.U.assert(b.payloadSize == _this.pageSize);
                    var buf = new Uint8Array(4 + b.payloadSize);
                    write32(buf, 0, b.targetAddr);
                    pxt.U.memcpy(buf, 4, b.data, 0, b.payloadSize);
                    return _this.talkAsync(HF2.HF2_CMD_WRITE_FLASH_PAGE, buf)
                        .then(function () { return loopAsync(pos + 1); });
                };
                return this.switchToBootloaderAsync()
                    .then(function () {
                    var size = blocks.length * _this.pageSize;
                    log("Starting flash (" + Math.round(size / 1024) + "kB).");
                    fstart = Date.now();
                    return onlyChangedBlocksAsync(blocks, function (a, l) { return _this.readWordsAsync(a, l); });
                })
                    .then(function (res) {
                    if (res.length != blocks.length) {
                        blocks = res;
                        var size = blocks.length * _this.pageSize;
                        log("Performing partial flash (" + Math.round(size / 1024) + "kB).");
                    }
                })
                    .then(function () { return loopAsync(0); })
                    .then(function () {
                    var n = Date.now();
                    var t0 = n - start;
                    var t1 = n - fstart;
                    log("Flashing done at " + Math.round(blocks.length * _this.pageSize / t1 * 1000 / 1024) + " kB/s in " + t0 + "ms (reset " + (t0 - t1) + "ms). Resetting.");
                })
                    .then(function () {
                    return _this.talkAsync(HF2.HF2_CMD_RESET_INTO_APP)
                        .catch(function (e) {
                        // error expected here - device is resetting
                    });
                })
                    .then(function () { });
            };
            Wrapper.prototype.initAsync = function () {
                var _this = this;
                if (this.rawMode)
                    return Promise.resolve();
                return Promise.resolve()
                    .then(function () { return _this.talkAsync(HF2.HF2_CMD_BININFO); })
                    .then(function (binfo) {
                    _this.bootloaderMode = binfo[0] == HF2.HF2_MODE_BOOTLOADER;
                    _this.pageSize = read32(binfo, 4);
                    _this.flashSize = read32(binfo, 8) * _this.pageSize;
                    _this.maxMsgSize = read32(binfo, 12);
                    log("Connected; msgSize " + _this.maxMsgSize + "B; flash " + _this.flashSize / 1024 + "kB; " + (_this.bootloaderMode ? "bootloader" : "application") + " mode");
                    return _this.talkAsync(HF2.HF2_CMD_INFO);
                })
                    .then(function (buf) {
                    _this.infoRaw = pxt.U.fromUTF8(pxt.U.uint8ArrayToString(buf));
                    var info = {};
                    ("Header: " + _this.infoRaw).replace(/^([\w\-]+):\s*([^\n\r]*)/mg, function (f, n, v) {
                        info[n.replace(/-/g, "")] = v;
                        return "";
                    });
                    _this.info = info;
                    var m = /v(\d\S+)\s+(\S+)/.exec(_this.info.Header);
                    _this.info.Parsed = {
                        Version: m[1],
                        Features: m[2],
                    };
                    log("Board-ID: " + _this.info.BoardID + " v" + _this.info.Parsed.Version + " f" + _this.info.Parsed.Features);
                })
                    .then(function () {
                    _this.reconnectTries = 0;
                });
            };
            return Wrapper;
        }());
        HF2.Wrapper = Wrapper;
        function readChecksumBlockAsync(readWordsAsync) {
            if (!pxt.appTarget.compile.flashChecksumAddr)
                return Promise.resolve(null);
            return readWordsAsync(pxt.appTarget.compile.flashChecksumAddr, 12)
                .then(function (buf) {
                var blk = pxtc.hex.parseChecksumBlock(buf);
                if (!blk)
                    return null;
                return readWordsAsync(blk.endMarkerPos, 1)
                    .then(function (w) {
                    if (read32(w, 0) != blk.endMarker) {
                        pxt.log("end-marker mismatch");
                        return null;
                    }
                    return blk;
                });
            });
        }
        function onlyChangedBlocksAsync(blocks, readWordsAsync) {
            if (!pxt.appTarget.compile.flashChecksumAddr)
                return Promise.resolve(blocks);
            var blBuf = pxtc.UF2.readBytes(blocks, pxt.appTarget.compile.flashChecksumAddr, 12 * 4);
            var blChk = pxtc.hex.parseChecksumBlock(blBuf);
            if (!blChk)
                return Promise.resolve(blocks);
            return readChecksumBlockAsync(readWordsAsync)
                .then(function (devChk) {
                if (!devChk)
                    return blocks;
                var regionsOk = devChk.regions.filter(function (r) {
                    var hasMatching = blChk.regions.some(function (r2) {
                        return r.checksum == r2.checksum &&
                            r.length == r2.length &&
                            r.start == r2.start;
                    });
                    return hasMatching;
                });
                if (regionsOk.length == 0)
                    return blocks;
                log("skipping flash at: " +
                    regionsOk.map(function (r) {
                        return pxtc.assembler.tohex(r.start) + " (" + r.length / 1024 + "kB)";
                    })
                        .join(", "));
                var unchangedAddr = function (a) {
                    return regionsOk.some(function (r) { return r.start <= a && a < r.start + r.length; });
                };
                return blocks.filter(function (b) {
                    return !(unchangedAddr(b.targetAddr) &&
                        unchangedAddr(b.targetAddr + b.payloadSize - 1));
                });
            });
        }
        HF2.onlyChangedBlocksAsync = onlyChangedBlocksAsync;
    })(HF2 = pxt.HF2 || (pxt.HF2 = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    // keep in sync with RefCounted.h in Codal
    pxt.REF_TAG_STRING = 1;
    pxt.REF_TAG_BUFFER = 2;
    pxt.REF_TAG_IMAGE = 3;
    pxt.REF_TAG_NUMBER = 32;
    pxt.REF_TAG_ACTION = 33;
})(pxt || (pxt = {}));
(function (pxt) {
    var HWDBG;
    (function (HWDBG) {
        var U = pxt.Util;
        var H = pxt.HF2;
        var HF2_DBG_GET_GLOBAL_STATE = 0x53fc66e0;
        var HF2_DBG_RESUME = 0x27a55931;
        var HF2_DBG_RESTART = 0x1120bd93;
        var HF2_DBG_GET_STACK = 0x70901510;
        var HF2_EV_DBG_PAUSED = 0x3692f9fd;
        var r32 = H.read32;
        var isHalted = false;
        var lastCompileResult;
        var onHalted;
        var haltHandler;
        var cachedStaticState;
        var currBreakpoint;
        var callInfos;
        var lastFlash;
        var hid;
        function taggedSpecialValue(n) { return (n << 2) | 2; }
        HWDBG.taggedUndefined = 0;
        HWDBG.taggedNull = taggedSpecialValue(1);
        HWDBG.taggedFalse = taggedSpecialValue(2);
        HWDBG.taggedTrue = taggedSpecialValue(16);
        HWDBG.postMessage = function (msg) { return console.log(msg); };
        function clearAsync() {
            isHalted = false;
            lastCompileResult = null;
            cachedStaticState = null;
            return Promise.resolve();
        }
        function decodeValue(n) {
            if (n & 1)
                return n >> 1;
            if (n == 0)
                return undefined;
            if (n & 2) {
                if (n == HWDBG.taggedNull)
                    return null;
                if (n == HWDBG.taggedFalse)
                    return false;
                if (n == HWDBG.taggedTrue)
                    return true;
                return { tagged: n >> 2 };
            }
            return { ptr: n };
        }
        HWDBG.decodeValue = decodeValue;
        function readMemAsync(addr, numbytes) {
            U.assert(!(addr & 3));
            U.assert(addr >= 0);
            if (addr < 2 * 1024 * 1024) {
                // assume these sit in flash
                var res = new Uint8Array(numbytes);
                addr -= lastFlash.start;
                U.memcpy(res, 0, lastFlash.buf, addr, numbytes);
                return Promise.resolve(res);
            }
            var maxBytes = hid.maxMsgSize - 32;
            if (numbytes > maxBytes) {
                var promises = [];
                while (numbytes > 0) {
                    var n = Math.min(maxBytes, numbytes);
                    promises.push(readMemAsync(addr, n));
                    numbytes -= n;
                    addr += n;
                }
                return Promise.all(promises)
                    .then(U.uint8ArrayConcat);
            }
            else {
                return hid.readWordsAsync(addr, Math.ceil(numbytes / 4))
                    .then(function (rr) {
                    if (rr.length > numbytes)
                        return rr.slice(0, numbytes);
                    else
                        return rr;
                });
            }
        }
        function heapExpandAsync(v) {
            if (typeof v != "object" || !v)
                return Promise.resolve(v);
            if (typeof v.ptr == "number") {
                // there should be no unaligned pointers
                if (v.ptr & 3)
                    return Promise.resolve({ unalignedPtr: v.ptr });
                var tag_1 = 0;
                // 56 bytes of data fit in one HID packet (with 5 bytes of header and 3 bytes of padding)
                return readMemAsync(v.ptr, 56)
                    .then(function (buf) {
                    tag_1 = H.read16(buf, 2);
                    var neededLength = buf.length;
                    if (tag_1 == pxt.REF_TAG_STRING || tag_1 == pxt.REF_TAG_BUFFER) {
                        neededLength = H.read16(buf, 4) + 6;
                    }
                    else if (tag_1 == pxt.REF_TAG_IMAGE) {
                        neededLength = H.read16(buf, 4) * H.read16(buf, 8) + 8;
                    }
                    else if (tag_1 == pxt.REF_TAG_NUMBER) {
                        neededLength = 8 + 4;
                    }
                    else {
                        // TODO
                    }
                    if (neededLength > buf.length) {
                        return readMemAsync(v.ptr + buf.length, neededLength - buf.length)
                            .then(function (secondary) { return U.uint8ArrayConcat([buf, secondary]); });
                    }
                    else if (neededLength < buf.length) {
                        return buf.slice(0, neededLength);
                    }
                    else {
                        return buf;
                    }
                })
                    .then(function (buf) {
                    if (tag_1 == pxt.REF_TAG_STRING)
                        return U.uint8ArrayToString(buf.slice(6));
                    else if (tag_1 == pxt.REF_TAG_STRING)
                        return { type: "buffer", data: buf.slice(6) };
                    else if (tag_1 == pxt.REF_TAG_IMAGE)
                        return {
                            type: "image",
                            data: buf.slice(8),
                            width: H.read16(buf, 4),
                            height: H.read16(buf, 8),
                        };
                    else if (tag_1 == pxt.REF_TAG_NUMBER)
                        return new Float64Array(buf.buffer.slice(4))[0];
                    else
                        return {
                            type: "unknown",
                            tag: tag_1,
                            refcnt: H.read16(buf, 0),
                            data: buf.slice(4)
                        };
                });
            }
            else {
                return Promise.resolve(v);
            }
        }
        HWDBG.heapExpandAsync = heapExpandAsync;
        function heapExpandMapAsync(vars) {
            var promises = [];
            var _loop_3 = function (k) {
                promises.push(heapExpandAsync(vars[k])
                    .then(function (r) {
                    vars[k] = r;
                    //console.log("set", k, "to", r, "prev", vars[k], "NOW", vars)
                }));
            };
            for (var _i = 0, _a = Object.keys(vars); _i < _a.length; _i++) {
                var k = _a[_i];
                _loop_3(k);
            }
            return Promise.all(promises)
                .then(function () {
                //console.log("FIN", vars)
            });
        }
        HWDBG.heapExpandMapAsync = heapExpandMapAsync;
        function buildFrames(stack, msg) {
            var currAddr = currBreakpoint.binAddr;
            var sp = 0;
            var pi = lastCompileResult.procDebugInfo.filter(function (p) {
                return p.codeStartLoc <= currAddr && currAddr <= p.codeEndLoc;
            })[0];
            while (true) {
                if (!pi)
                    break; // ???
                if (pi == lastCompileResult.procDebugInfo[0])
                    break; // main
                var bp = findPrevBrkp(currAddr);
                var info = U.clone(bp);
                info.functionName = pi.name;
                msg.stackframes.push({
                    locals: {},
                    funcInfo: info,
                    breakpointId: bp.id,
                });
                var frame = msg.stackframes[msg.stackframes.length - 1];
                var idx = 0;
                for (var _i = 0, _a = pi.locals; _i < _a.length; _i++) {
                    var l = _a[_i];
                    U.assert(l.index == idx++);
                    frame.locals[l.name] = decodeValue(stack[sp++]);
                }
                currAddr = stack[sp++] & 0x7ffffffe;
                var ci = callInfos[currAddr + ""];
                for (var _b = 0, _c = pi.args; _b < _c.length; _b++) {
                    var l = _c[_b];
                    frame.locals[l.name] = decodeValue(stack[sp + (pi.args.length - 1 - l.index)]);
                }
                if (!ci)
                    break;
                pi = ci.from;
                sp += ci.stack - pi.localsMark;
            }
        }
        function findPrevBrkp(addr) {
            var bb = lastCompileResult.breakpoints;
            var brkMatch = bb[0];
            var bestDelta = Infinity;
            for (var _i = 0, bb_1 = bb; _i < bb_1.length; _i++) {
                var b = bb_1[_i];
                var delta = addr - b.binAddr;
                // console.log(`${b.line+1}: addr=${b.binAddr} d=${delta}`)
                if (delta >= 0 && delta < bestDelta) {
                    bestDelta = delta;
                    brkMatch = b;
                }
            }
            return brkMatch;
        }
        function corePaused(buf) {
            if (isHalted)
                return Promise.resolve();
            isHalted = true;
            var msg;
            return getHwStateAsync()
                .then(function (st) {
                var w = H.decodeU32LE(buf);
                var pc = w[0];
                var globals = {};
                var _loop_4 = function (l) {
                    var gbuf = st.globals;
                    var readV = function () {
                        switch (l.type) {
                            case "uint32": return H.read32(gbuf, l.index);
                            case "int32": return H.read32(gbuf, l.index) | 0;
                            case "uint16": return H.read16(gbuf, l.index);
                            case "int16": return (H.read16(gbuf, l.index) << 16) >> 16;
                            case "uint8": return gbuf[l.index];
                            case "int8": return (gbuf[l.index] << 24) >> 24;
                            default: return null;
                        }
                    };
                    var v = readV();
                    if (v === null) {
                        U.assert((l.index & 3) == 0);
                        v = decodeValue(H.read32(gbuf, l.index));
                    }
                    globals[l.name] = v;
                };
                for (var _i = 0, _a = lastCompileResult.procDebugInfo[0].locals; _i < _a.length; _i++) {
                    var l = _a[_i];
                    _loop_4(l);
                }
                currBreakpoint = findPrevBrkp(pc);
                msg = {
                    type: 'debugger',
                    subtype: 'breakpoint',
                    breakpointId: currBreakpoint.id,
                    globals: globals,
                    stackframes: []
                };
                haltHandler();
                return hid.talkAsync(HF2_DBG_GET_STACK);
            })
                .then(function (stack) {
                buildFrames(H.decodeU32LE(stack), msg);
                var maps = [msg.globals].concat(msg.stackframes.map(function (s) { return s.locals; }));
                return Promise.map(maps, heapExpandMapAsync);
            })
                .then(function () { return HWDBG.postMessage(msg); });
        }
        function clearHalted() {
            isHalted = false;
            onHalted = new Promise(function (resolve, reject) {
                haltHandler = resolve;
            });
        }
        function startDebugAsync(compileRes, hidWr) {
            hid = hidWr;
            hid.onEvent(HF2_EV_DBG_PAUSED, corePaused);
            return clearAsync()
                .then(function () {
                lastCompileResult = compileRes;
                callInfos = {};
                var procLookup = [];
                for (var _i = 0, _a = compileRes.procDebugInfo; _i < _a.length; _i++) {
                    var pdi = _a[_i];
                    procLookup[pdi.idx] = pdi;
                }
                for (var _b = 0, _c = compileRes.procDebugInfo; _b < _c.length; _b++) {
                    var pdi = _c[_b];
                    //console.log(pdi)
                    for (var _d = 0, _e = pdi.calls; _d < _e.length; _d++) {
                        var ci = _e[_d];
                        callInfos[ci.addr + ""] = {
                            from: pdi,
                            to: procLookup[ci.procIndex],
                            stack: ci.stack
                        };
                    }
                }
            })
                .then(function () {
                var f = lastCompileResult.outfiles[pxtc.BINARY_UF2];
                var blockBuf = U.stringToUint8Array(atob(f));
                lastFlash = pxtc.UF2.toBin(blockBuf);
                var blocks = pxtc.UF2.parseFile(blockBuf);
                return hid.reflashAsync(blocks); // this will reset into app at the end
            })
                .then(function () { return hid.talkAsync(HF2_DBG_RESTART).catch(function (e) { }); })
                .then(function () { return Promise.delay(200); })
                .then(function () { return hid.reconnectAsync(); })
                .then(clearHalted)
                .then(waitForHaltAsync);
        }
        HWDBG.startDebugAsync = startDebugAsync;
        function handleMessage(msg) {
            console.log("HWDBGMSG", msg);
            if (msg.type != "debugger")
                return;
            var stepInto = false;
            switch (msg.subtype) {
                case 'stepinto':
                    stepInto = true;
                case 'stepover':
                    resumeAsync(stepInto);
                    break;
            }
        }
        HWDBG.handleMessage = handleMessage;
        function resumeAsync(into) {
            if (into === void 0) { into = false; }
            return Promise.resolve()
                .then(function () { return hid.talkAsync(HF2_DBG_RESUME, H.encodeU32LE([into ? 1 : 3])); })
                .then(clearHalted);
        }
        HWDBG.resumeAsync = resumeAsync;
        function waitForHaltAsync() {
            if (!onHalted)
                onHalted = Promise.resolve();
            return onHalted;
        }
        HWDBG.waitForHaltAsync = waitForHaltAsync;
        function getStaticStateAsync() {
            if (cachedStaticState)
                return Promise.resolve(cachedStaticState);
            return hid.talkAsync(HF2_DBG_GET_GLOBAL_STATE)
                .then(function (buf) { return (cachedStaticState = {
                numGlobals: r32(buf, 0),
                globalsPtr: r32(buf, 4)
            }); });
        }
        function getHwStateAsync() {
            return getStaticStateAsync()
                .then(function (st) { return hid.readWordsAsync(st.globalsPtr, st.numGlobals); })
                .then(function (buf) {
                var res = {
                    staticState: cachedStaticState,
                    globals: buf
                };
                return res;
            });
        }
        HWDBG.getHwStateAsync = getHwStateAsync;
    })(HWDBG = pxt.HWDBG || (pxt.HWDBG = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    pxt.defaultFiles = {
        "tsconfig.json": "{\n    \"compilerOptions\": {\n        \"target\": \"es5\",\n        \"noImplicitAny\": true,\n        \"outDir\": \"built\",\n        \"rootDir\": \".\"\n    },\n    \"exclude\": [\"pxt_modules/**/*test.ts\"]\n}\n",
        "test.ts": "// tests go here; this will not be compiled when this package is used as a library\n",
        "Makefile": "all: deploy\n\nbuild:\n\tpxt build\n\ndeploy:\n\tpxt deploy\n\ntest:\n\tpxt test\n",
        "README.md": "# @NAME@\n\n@DESCRIPTION@\n\n## TODO\n\n- [ ] Add a reference for your blocks here\n- [ ] Add \"icon.png\" image (300x200) in the root folder\n- [ ] Add \"- beta\" to the GitHub project description if you are still iterating it.\n- [ ] Turn on your automated build on https://travis-ci.org\n- [ ] Use \"pxt bump\" to create a tagged release on GitHub\n- [ ] Get your package reviewed and approved @DOCS@packages/approval\n\nRead more at @DOCS@packages/build-your-own\n\n## License\n\n@LICENSE@\n\n## Supported targets\n\n* for PXT/@TARGET@\n(The metadata above is needed for package search.)\n\n",
        ".gitignore": "built\nnode_modules\nyotta_modules\nyotta_targets\npxt_modules\n*.db\n*.tgz\n",
        ".vscode/settings.json": "{\n    \"editor.formatOnType\": true,\n    \"files.autoSave\": \"afterDelay\",\n    \"files.watcherExclude\": {\n        \"**/.git/objects/**\": true,\n        \"**/built/**\": true,\n        \"**/node_modules/**\": true,\n        \"**/yotta_modules/**\": true,\n        \"**/yotta_targets\": true,\n        \"**/pxt_modules/**\": true\n    },\n    \"files.associations\": {\n        \"*.blocks\": \"html\",\n        \"*.jres\": \"json\"\n    },\n    \"search.exclude\": {\n        \"**/built\": true,\n        \"**/node_modules\": true,\n        \"**/yotta_modules\": true,\n        \"**/yotta_targets\": true,\n        \"**/pxt_modules\": true\n    }\n}",
        ".travis.yml": "language: node_js\nnode_js:\n    - \"8.9.4\"\nscript:\n    - \"npm install -g pxt\"\n    - \"pxt target @TARGET@\"\n    - \"pxt install\"\n    - \"pxt build --cloud\"\nsudo: false\ncache:\n    directories:\n    - npm_modules\n    - pxt_modules",
        ".vscode/tasks.json": "\n// A task runner that calls the MakeCode (PXT) compiler\n{\n    \"version\": \"2.0.0\",\n    \"tasks\": [{\n        \"label\": \"pxt deploy\",\n        \"type\": \"shell\",\n        \"command\": \"pxt deploy\",\n        \"group\": \"build\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt build\",\n        \"type\": \"shell\",\n        \"command\": \"pxt build\",\n        \"group\": \"test\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt clean\",\n        \"type\": \"shell\",\n        \"command\": \"pxt clean\",\n        \"group\": \"test\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }, {\n        \"label\": \"pxt serial\",\n        \"type\": \"shell\",\n        \"command\": \"pxt serial\",\n        \"group\": \"test\",\n        \"problemMatcher\": [ \"$tsc\" ]\n    }]\n}\n"
    };
    function packageFiles(name) {
        var prj = pxt.appTarget.tsprj || pxt.appTarget.blocksprj;
        var config = pxt.U.clone(prj.config);
        // remove blocks file
        Object.keys(prj.files)
            .filter(function (f) { return /\.blocks$/.test(f); })
            .forEach(function (f) { return delete prj.files[f]; });
        config.files = config.files.filter(function (f) { return !/\.blocks$/.test(f); });
        config.name = name;
        // by default, projects are not public
        config.public = false;
        if (!config.version) {
            config.version = "0.0.0";
        }
        var files = {};
        for (var f in pxt.defaultFiles)
            files[f] = pxt.defaultFiles[f];
        for (var f in prj.files)
            if (f != "README.md")
                files[f] = prj.files[f];
        var pkgFiles = Object.keys(files).filter(function (s) {
            return /\.(md|ts|asm|cpp|h)$/.test(s);
        });
        var fieldsOrder = [
            "name",
            "version",
            "description",
            "license",
            "dependencies",
            "files",
            "testFiles",
            "testDependencies",
            "public",
            "targetVersions"
        ];
        config.files = pkgFiles.filter(function (s) { return !/test/.test(s); });
        config.testFiles = pkgFiles.filter(function (s) { return /test/.test(s); });
        var configMap = config;
        // make it look nice
        var newCfg = {};
        for (var _i = 0, fieldsOrder_1 = fieldsOrder; _i < fieldsOrder_1.length; _i++) {
            var f = fieldsOrder_1[_i];
            if (configMap.hasOwnProperty(f))
                newCfg[f] = configMap[f];
        }
        for (var _a = 0, _b = Object.keys(configMap); _a < _b.length; _a++) {
            var f = _b[_a];
            if (!newCfg.hasOwnProperty(f))
                newCfg[f] = configMap[f];
        }
        files[pxt.CONFIG_NAME] = JSON.stringify(newCfg, null, 4);
        return files;
    }
    pxt.packageFiles = packageFiles;
    function packageFilesFixup(files, removeSubdirs) {
        if (removeSubdirs === void 0) { removeSubdirs = false; }
        var configMap = JSON.parse(files[pxt.CONFIG_NAME]);
        configMap["target"] = pxt.appTarget.platformid || pxt.appTarget.id;
        configMap["docs"] = pxt.appTarget.appTheme.homeUrl || "./";
        if (removeSubdirs)
            for (var _i = 0, _a = Object.keys(files); _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.indexOf("/") >= 0)
                    delete files[k];
            }
        pxt.U.iterMap(files, function (k, v) {
            v = v.replace(/@([A-Z]+)@/g, function (f, n) { return configMap[n.toLowerCase()] || ""; });
            files[k] = v;
        });
    }
    pxt.packageFilesFixup = packageFilesFixup;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var blocks;
    (function (blocks) {
        var NT;
        (function (NT) {
            NT[NT["Prefix"] = 0] = "Prefix";
            NT[NT["Infix"] = 1] = "Infix";
            NT[NT["Block"] = 2] = "Block";
            NT[NT["NewLine"] = 3] = "NewLine";
        })(NT = blocks.NT || (blocks.NT = {}));
        var GlueMode;
        (function (GlueMode) {
            GlueMode[GlueMode["None"] = 0] = "None";
            GlueMode[GlueMode["WithSpace"] = 1] = "WithSpace";
            GlueMode[GlueMode["NoSpace"] = 2] = "NoSpace";
        })(GlueMode = blocks.GlueMode || (blocks.GlueMode = {}));
        var reservedWords = ["break", "case", "catch", "class", "const", "continue", "debugger",
            "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally",
            "for", "function", "if", "import", "in", "instanceof", "new", "null", "return",
            "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while",
            "with"];
        var placeholders = {};
        function stringLit(s) {
            if (s.length > 20 && /\n/.test(s))
                return "`" + s.replace(/[\\`${}]/g, function (f) { return "\\" + f; }) + "`";
            else
                return JSON.stringify(s);
        }
        blocks.stringLit = stringLit;
        function mkNode(tp, pref, children) {
            return {
                type: tp,
                op: pref,
                children: children
            };
        }
        blocks.mkNode = mkNode;
        function mkNewLine() {
            return mkNode(NT.NewLine, "", []);
        }
        blocks.mkNewLine = mkNewLine;
        function mkPrefix(pref, children) {
            return mkNode(NT.Prefix, pref, children);
        }
        blocks.mkPrefix = mkPrefix;
        function mkInfix(child0, op, child1) {
            return mkNode(NT.Infix, op, child0 == null ? [child1] : [child0, child1]);
        }
        blocks.mkInfix = mkInfix;
        function mkText(s) {
            return mkPrefix(s, []);
        }
        blocks.mkText = mkText;
        function mkBlock(nodes) {
            return mkNode(NT.Block, "", nodes);
        }
        blocks.mkBlock = mkBlock;
        function mkGroup(nodes) {
            return mkPrefix("", nodes);
        }
        blocks.mkGroup = mkGroup;
        function mkStmt() {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            var last = nodes[nodes.length - 1];
            if (last && last.type == NT.Block) {
                // OK - no newline needed
            }
            else {
                nodes.push(mkNewLine());
            }
            return mkGroup(nodes);
        }
        blocks.mkStmt = mkStmt;
        function mkCommaSep(nodes, withNewlines) {
            if (withNewlines === void 0) { withNewlines = false; }
            var r = [];
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var n = nodes_1[_i];
                if (withNewlines) {
                    if (r.length > 0)
                        r.push(mkText(","));
                    r.push(mkNewLine());
                }
                else if (r.length > 0) {
                    r.push(mkText(", "));
                }
                r.push(n);
            }
            if (withNewlines)
                r.push(mkNewLine());
            return mkGroup(r);
        }
        blocks.mkCommaSep = mkCommaSep;
        // A series of utility functions for constructing various J* AST nodes.
        var Helpers;
        (function (Helpers) {
            function mkArrayLiteral(args) {
                return mkGroup([
                    mkText("["),
                    mkCommaSep(args, false),
                    mkText("]")
                ]);
            }
            Helpers.mkArrayLiteral = mkArrayLiteral;
            function mkNumberLiteral(x) {
                return mkText(x.toString());
            }
            Helpers.mkNumberLiteral = mkNumberLiteral;
            function mkBooleanLiteral(x) {
                return mkText(x ? "true" : "false");
            }
            Helpers.mkBooleanLiteral = mkBooleanLiteral;
            function mkStringLiteral(x) {
                return mkText(stringLit(x));
            }
            Helpers.mkStringLiteral = mkStringLiteral;
            function mkPropertyAccess(name, thisArg) {
                return mkGroup([
                    mkInfix(thisArg, ".", mkText(name)),
                ]);
            }
            Helpers.mkPropertyAccess = mkPropertyAccess;
            function mkCall(name, args, externalInputs, method) {
                if (externalInputs === void 0) { externalInputs = false; }
                if (method === void 0) { method = false; }
                if (method)
                    return mkGroup([
                        mkInfix(args[0], ".", mkText(name)),
                        mkText("("),
                        mkCommaSep(args.slice(1), externalInputs),
                        mkText(")")
                    ]);
                else
                    return mkGroup([
                        mkText(name),
                        mkText("("),
                        mkCommaSep(args, externalInputs),
                        mkText(")")
                    ]);
            }
            Helpers.mkCall = mkCall;
            // Call function [name] from the standard device library with arguments
            // [args].
            function stdCall(name, args, externalInputs) {
                return mkCall(name, args, externalInputs);
            }
            Helpers.stdCall = stdCall;
            // Call extension method [name] on the first argument
            function extensionCall(name, args, externalInputs) {
                return mkCall(name, args, externalInputs, true);
            }
            Helpers.extensionCall = extensionCall;
            // Call function [name] from the specified [namespace] in the micro:bit
            // library.
            function namespaceCall(namespace, name, args, externalInputs) {
                return mkCall(namespace + "." + name, args, externalInputs);
            }
            Helpers.namespaceCall = namespaceCall;
            function mathCall(name, args) {
                return namespaceCall("Math", name, args, false);
            }
            Helpers.mathCall = mathCall;
            function mkGlobalRef(name) {
                return mkText(name);
            }
            Helpers.mkGlobalRef = mkGlobalRef;
            function mkSimpleCall(p, args) {
                pxt.U.assert(args.length == 2);
                return mkInfix(args[0], p, args[1]);
            }
            Helpers.mkSimpleCall = mkSimpleCall;
            function mkWhile(condition, body) {
                return mkGroup([
                    mkText("while ("),
                    condition,
                    mkText(")"),
                    mkBlock(body)
                ]);
            }
            Helpers.mkWhile = mkWhile;
            function mkComment(text) {
                return mkText("// " + text);
            }
            Helpers.mkComment = mkComment;
            function mkMultiComment(text) {
                var group = [
                    mkText("/**"),
                    mkNewLine()
                ];
                text.split("\n").forEach(function (c, i, arr) {
                    if (c) {
                        group.push(mkText(" * " + c));
                        group.push(mkNewLine());
                        // Add an extra line so we can convert it back to new lines
                        if (i < arr.length - 1) {
                            group.push(mkText(" * "));
                            group.push(mkNewLine());
                        }
                    }
                });
                return mkGroup(group.concat([
                    mkText(" */"),
                    mkNewLine()
                ]));
            }
            Helpers.mkMultiComment = mkMultiComment;
            function mkAssign(x, e) {
                return mkSimpleCall("=", [x, e]);
            }
            Helpers.mkAssign = mkAssign;
            function mkParenthesizedExpression(expression) {
                return mkGroup([
                    mkText("("),
                    expression,
                    mkText(")")
                ]);
            }
            Helpers.mkParenthesizedExpression = mkParenthesizedExpression;
        })(Helpers = blocks.Helpers || (blocks.Helpers = {}));
        blocks.H = Helpers;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
        var infixPriTable = {
            // 0 = comma/sequence
            // 1 = spread (...)
            // 2 = yield, yield*
            // 3 = assignment
            "=": 3,
            "+=": 3,
            "-=": 3,
            "?": 4,
            ":": 4,
            "||": 5,
            "&&": 6,
            "|": 7,
            "^": 8,
            "&": 9,
            // 10 = equality
            "==": 10,
            "!=": 10,
            "===": 10,
            "!==": 10,
            // 11 = comparison (excludes in, instanceof)
            "<": 11,
            ">": 11,
            "<=": 11,
            ">=": 11,
            // 12 = bitwise shift
            ">>": 12,
            ">>>": 12,
            "<<": 12,
            "+": 13,
            "-": 13,
            "*": 14,
            "/": 14,
            "%": 14,
            "**": 15,
            "!": 16,
            "~": 16,
            "P-": 16,
            "P+": 16,
            "++": 16,
            "--": 16,
            ".": 18,
        };
        function flattenNode(app) {
            var sourceMap = [];
            var sourceMapById = {};
            var output = "";
            var indent = "";
            var variables = [{}];
            function flatten(e0) {
                function rec(e, outPrio) {
                    if (e.type != NT.Infix) {
                        for (var _i = 0, _a = e.children; _i < _a.length; _i++) {
                            var c = _a[_i];
                            rec(c, -1);
                        }
                        return;
                    }
                    var r = [];
                    function pushOp(c) {
                        if (c[0] == "P")
                            c = c.slice(1);
                        r.push(mkText(c));
                    }
                    var infixPri = pxt.U.lookup(infixPriTable, e.op);
                    if (infixPri == null)
                        pxt.U.oops("bad infix op: " + e.op);
                    if (infixPri < outPrio)
                        pushOp("(");
                    if (e.children.length == 1) {
                        pushOp(e.op);
                        rec(e.children[0], infixPri);
                        r.push(e.children[0]);
                    }
                    else {
                        var bindLeft = infixPri != 3 && e.op != "**";
                        var letType = undefined;
                        rec(e.children[0], bindLeft ? infixPri : infixPri + 0.1);
                        r.push(e.children[0]);
                        if (letType && letType != "number") {
                            pushOp(": ");
                            pushOp(letType);
                        }
                        if (e.op == ".")
                            pushOp(".");
                        else
                            pushOp(" " + e.op + " ");
                        rec(e.children[1], !bindLeft ? infixPri : infixPri + 0.1);
                        r.push(e.children[1]);
                    }
                    if (infixPri < outPrio)
                        pushOp(")");
                    e.type = NT.Prefix;
                    e.op = "";
                    e.children = r;
                }
                rec(e0, -1);
            }
            var root = mkGroup(app);
            flatten(root);
            emit(root);
            // never return empty string - TS compiler service thinks it's an error
            if (!output)
                output += "\n";
            return { output: output, sourceMap: sourceMap };
            function emit(n) {
                if (n.glueToBlock) {
                    removeLastIndent();
                    if (n.glueToBlock == GlueMode.WithSpace) {
                        output += " ";
                    }
                }
                var start = getCurrentLine();
                switch (n.type) {
                    case NT.Infix:
                        pxt.U.oops("no infix should be left");
                        break;
                    case NT.NewLine:
                        output += "\n" + indent;
                        break;
                    case NT.Block:
                        block(n);
                        break;
                    case NT.Prefix:
                        if (n.canIndentInside)
                            output += n.op.replace(/\n/g, "\n" + indent + "    ");
                        else
                            output += n.op;
                        n.children.forEach(emit);
                        break;
                    default:
                        break;
                }
                var end = getCurrentLine();
                if (n.id) {
                    if (sourceMapById[n.id]) {
                        var node = sourceMapById[n.id];
                        node.start = Math.min(node.start, start);
                        node.end = Math.max(node.end, end);
                    }
                    else {
                        var interval = { id: n.id, start: start, end: end };
                        sourceMapById[n.id] = interval;
                        sourceMap.push(interval);
                    }
                }
            }
            function getCurrentLine() {
                var i = 0;
                output.replace(/\n/g, function (a) { i++; return a; });
                return i;
            }
            function write(s) {
                output += s.replace(/\n/g, "\n" + indent);
            }
            function removeLastIndent() {
                output = output.replace(/\n *$/, "");
            }
            function block(n) {
                var finalNl = n.noFinalNewline ? "" : "\n";
                if (n.children.length == 0) {
                    write(" {\n\t\n}" + finalNl);
                    return;
                }
                var vars = pxt.U.clone(variables[variables.length - 1] || {});
                variables.push(vars);
                indent += "    ";
                if (output[output.length - 1] != " ")
                    write(" ");
                write("{\n");
                for (var _i = 0, _a = n.children; _i < _a.length; _i++) {
                    var nn = _a[_i];
                    emit(nn);
                }
                indent = indent.slice(4);
                removeLastIndent();
                write("\n}" + finalNl);
                variables.pop();
            }
        }
        blocks.flattenNode = flattenNode;
        function isReservedWord(str) {
            return reservedWords.indexOf(str) !== -1;
        }
        blocks.isReservedWord = isReservedWord;
    })(blocks = pxt.blocks || (pxt.blocks = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtpackage.d.ts"/>
/// <reference path="../localtypings/pxtparts.d.ts"/>
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="util.ts"/>
var pxt;
(function (pxt) {
    var Package = /** @class */ (function () {
        function Package(id, _verspec, parent, addedBy) {
            this.id = id;
            this._verspec = _verspec;
            this.parent = parent;
            this.level = -1;
            this.isLoaded = false;
            this.ignoreTests = false;
            if (addedBy) {
                this.level = addedBy.level + 1;
            }
            this.addedBy = [addedBy];
        }
        Package.getConfigAsync = function (pkgTargetVersion, id, fullVers) {
            return Promise.resolve().then(function () {
                if (pxt.github.isGithubId(fullVers)) {
                    var repoInfo_1 = pxt.github.parseRepoId(fullVers);
                    return pxt.packagesConfigAsync()
                        .then(function (config) { return pxt.github.repoAsync(repoInfo_1.fullName, config); }) // Make sure repo exists and is whitelisted
                        .then(function (gitRepo) { return gitRepo ? pxt.github.pkgConfigAsync(repoInfo_1.fullName, repoInfo_1.tag) : null; });
                }
                else {
                    // If it's not from GH, assume it's a bundled package
                    // TODO: Add logic for shared packages if we enable that
                    var updatedRef = pxt.patching.upgradePackageReference(pkgTargetVersion, id, fullVers);
                    var bundledPkg = pxt.appTarget.bundledpkgs[updatedRef];
                    return JSON.parse(bundledPkg[pxt.CONFIG_NAME]);
                }
            });
        };
        Package.corePackages = function () {
            var pkgs = pxt.appTarget.bundledpkgs;
            return Object.keys(pkgs).map(function (id) { return JSON.parse(pkgs[id][pxt.CONFIG_NAME]); })
                .filter(function (cfg) { return !!cfg; });
        };
        Package.prototype.version = function () {
            return this.resolvedVersion || this._verspec;
        };
        Package.prototype.verProtocol = function () {
            var spl = this.version().split(':');
            if (spl.length > 1)
                return spl[0];
            else
                return "";
        };
        Package.prototype.verArgument = function () {
            var p = this.verProtocol();
            if (p)
                return this.version().slice(p.length + 1);
            return this.version();
        };
        Package.prototype.targetVersion = function () {
            return (this.parent && this.parent != this)
                ? this.parent.targetVersion()
                : this.config.targetVersions
                    ? this.config.targetVersions.target
                    : undefined;
        };
        Package.prototype.commonDownloadAsync = function () {
            var _this = this;
            var proto = this.verProtocol();
            if (proto == "pub") {
                return pxt.Cloud.downloadScriptFilesAsync(this.verArgument());
            }
            else if (proto == "github") {
                return pxt.packagesConfigAsync()
                    .then(function (config) { return pxt.github.downloadPackageAsync(_this.verArgument(), config); })
                    .then(function (resp) { return resp.files; });
            }
            else if (proto == "embed") {
                var resp = pxt.getEmbeddedScript(this.verArgument());
                return Promise.resolve(resp);
            }
            else
                return Promise.resolve(null);
        };
        Package.prototype.host = function () { return this.parent._host; };
        Package.prototype.readFile = function (fn) {
            return this.host().readFile(this, fn);
        };
        Package.prototype.resolveDep = function (id) {
            if (this.parent.deps.hasOwnProperty(id))
                return this.parent.deps[id];
            return null;
        };
        Package.prototype.saveConfig = function () {
            var cfg = JSON.stringify(this.config, null, 4) || "\n";
            this.host().writeFile(this, pxt.CONFIG_NAME, cfg);
        };
        Package.prototype.parseJRes = function (allres) {
            if (allres === void 0) { allres = {}; }
            for (var _i = 0, _a = this.getFiles(); _i < _a.length; _i++) {
                var f = _a[_i];
                if (pxt.U.endsWith(f, ".jres")) {
                    var js = JSON.parse(this.readFile(f));
                    var base = js["*"];
                    for (var _b = 0, _c = Object.keys(js); _b < _c.length; _b++) {
                        var k = _c[_b];
                        if (k == "*")
                            continue;
                        var v = js[k];
                        if (typeof v == "string") {
                            // short form
                            v = { data: v };
                        }
                        var ns = v.namespace || base.namespace || "";
                        if (ns)
                            ns += ".";
                        var id = v.id || ns + k;
                        var icon = v.icon;
                        var mimeType = v.mimeType || base.mimeType;
                        var dataEncoding = v.dataEncoding || base.dataEncoding || "base64";
                        if (!icon && dataEncoding == "base64" && (mimeType == "image/png" || mimeType == "image/jpeg")) {
                            icon = "data:" + mimeType + ";base64," + v.data;
                        }
                        allres[id] = {
                            id: id,
                            data: v.data,
                            dataEncoding: v.dataEncoding || base.dataEncoding || "base64",
                            icon: icon,
                            namespace: ns,
                            mimeType: mimeType
                        };
                    }
                }
            }
            return allres;
        };
        Package.prototype.resolveVersionAsync = function () {
            var v = this._verspec;
            if (pxt.getEmbeddedScript(this.id)) {
                this.resolvedVersion = v = "embed:" + this.id;
            }
            else if (!v || v == "*") {
                pxt.U.userError(lf("version not specified for {0}", this.id));
            }
            return Promise.resolve(v);
        };
        Package.prototype.downloadAsync = function () {
            var _this = this;
            var kindCfg = "";
            return this.resolveVersionAsync()
                .then(function (verNo) {
                if (!/^embed:/.test(verNo) &&
                    _this.config && _this.config.installedVersion == verNo)
                    return undefined;
                pxt.debug('downloading ' + verNo);
                return _this.host().downloadPackageAsync(_this)
                    .then(function () {
                    var confStr = _this.readFile(pxt.CONFIG_NAME);
                    if (!confStr)
                        pxt.U.userError("extension " + _this.id + " is missing " + pxt.CONFIG_NAME);
                    _this.parseConfig(confStr);
                    if (_this.level != 0)
                        _this.config.installedVersion = _this.version();
                    _this.saveConfig();
                })
                    .then(function () {
                    pxt.debug("installed " + _this.id + " /" + verNo);
                });
            });
        };
        Package.prototype.validateConfig = function () {
            if (!this.config.dependencies)
                pxt.U.userError("Missing dependencies in config of: " + this.id);
            if (!Array.isArray(this.config.files))
                pxt.U.userError("Missing files in config of: " + this.id);
            if (typeof this.config.name != "string" || !this.config.name ||
                (this.config.public && !/^[a-z][a-z0-9\-_]+$/i.test(this.config.name)))
                pxt.U.userError("Invalid extension name: " + this.config.name);
            if (this.config.targetVersions
                && this.config.targetVersions.target
                && pxt.semver.majorCmp(this.config.targetVersions.target, pxt.appTarget.versions.target) > 0)
                pxt.U.userError(lf("{0} requires target version {1} (you are running {2})", this.config.name, this.config.targetVersions.target, pxt.appTarget.versions.target));
        };
        Package.prototype.isPackageInUse = function (pkgId, ts) {
            if (ts === void 0) { ts = this.readFile("main.ts"); }
            // Build the RegExp that will determine whether the dependency is in use. Try to use upgrade rules,
            // otherwise fallback to the package's name
            var regex = null;
            var upgrades = pxt.patching.computePatches(this.targetVersion(), "missingPackage");
            if (upgrades) {
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        if (rule.map[match] === pkgId) {
                            regex = new RegExp(match, "g");
                        }
                    });
                });
            }
            if (!regex) {
                regex = new RegExp(pkgId + "\\.", "g");
            }
            return regex.test(ts);
        };
        Package.prototype.getMissingPackages = function (config, ts) {
            var upgrades = pxt.patching.computePatches(this.targetVersion(), "missingPackage");
            var missing = {};
            if (ts && upgrades)
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        var regex = new RegExp(match, 'g');
                        var pkg = rule.map[match];
                        ts.replace(regex, function (m) {
                            if (!config.dependencies[pkg]) {
                                missing[pkg] = "*";
                            }
                            return "";
                        });
                    });
                });
            return missing;
        };
        /**
         * For the given package config or ID, looks through all the currently installed packages to find conflicts in
         * Yotta settings and version spec
         */
        Package.prototype.findConflictsAsync = function (pkgOrId, version) {
            var _this = this;
            var conflicts = [];
            var pkgCfg;
            return Promise.resolve()
                .then(function () {
                // Get the package config if it's not already provided
                if (typeof pkgOrId === "string") {
                    return Package.getConfigAsync(_this.targetVersion(), pkgOrId, version);
                }
                else {
                    return Promise.resolve(pkgOrId);
                }
            })
                .then(function (cfg) {
                pkgCfg = cfg;
                // Iterate through all installed packages and check for conflicting settings
                if (pkgCfg) {
                    var yottaCfg_1 = pkgCfg.yotta ? pxt.U.jsonFlatten(pkgCfg.yotta.config) : null;
                    _this.parent.sortedDeps().forEach(function (depPkg) {
                        if (pkgCfg.core && depPkg.config.core &&
                            pkgCfg.name != depPkg.config.name) {
                            var conflict = new pxt.cpp.PkgConflictError(lf("conflict between core extensions {0} and {1}", pkgCfg.name, depPkg.id));
                            conflict.pkg0 = depPkg;
                            conflicts.push(conflict);
                            return;
                        }
                        var foundYottaConflict = false;
                        if (yottaCfg_1) {
                            var depConfig = depPkg.config || JSON.parse(depPkg.readFile(pxt.CONFIG_NAME));
                            var hasYottaSettings = !!depConfig && !!depConfig.yotta && !!depPkg.config.yotta.config;
                            if (hasYottaSettings) {
                                var depYottaCfg = pxt.U.jsonFlatten(depConfig.yotta.config);
                                for (var _i = 0, _a = Object.keys(yottaCfg_1); _i < _a.length; _i++) {
                                    var settingName = _a[_i];
                                    var depSetting = depYottaCfg[settingName];
                                    var isJustDefaults = pkgCfg.yotta.configIsJustDefaults || depConfig.yotta.configIsJustDefaults;
                                    if (depYottaCfg.hasOwnProperty(settingName) && depSetting !== yottaCfg_1[settingName] && !isJustDefaults && (!depPkg.parent.config.yotta || !depPkg.parent.config.yotta.ignoreConflicts)) {
                                        var conflict = new pxt.cpp.PkgConflictError(lf("conflict on yotta setting {0} between extensions {1} and {2}", settingName, pkgCfg.name, depPkg.id));
                                        conflict.pkg0 = depPkg;
                                        conflict.settingName = settingName;
                                        conflicts.push(conflict);
                                        foundYottaConflict = true;
                                    }
                                }
                            }
                        }
                        if (!foundYottaConflict && pkgCfg.name === depPkg.id && depPkg._verspec != version && !/^file:/.test(depPkg._verspec) && !/^file:/.test(version)) {
                            var conflict = new pxt.cpp.PkgConflictError(lf("version mismatch for extension {0} (installed: {1}, installing: {2})", depPkg, depPkg._verspec, version));
                            conflict.pkg0 = depPkg;
                            conflict.isVersionConflict = true;
                            conflicts.push(conflict);
                        }
                    });
                }
                // Also check for conflicts for all the specified package's dependencies (recursively)
                return Object.keys(pkgCfg.dependencies).reduce(function (soFar, pkgDep) {
                    return soFar
                        .then(function () { return _this.findConflictsAsync(pkgDep, pkgCfg.dependencies[pkgDep]); })
                        .then(function (childConflicts) { return conflicts.push.apply(conflicts, childConflicts); });
                }, Promise.resolve());
            })
                .then(function () {
                // For each conflicting package, we need to include their ancestor tree in the list of conflicts
                // For example, if package A depends on package B, and package B is in conflict with package C,
                // then package A is also technically in conflict with C
                var allAncestors = function (p) {
                    var ancestors = [];
                    p.addedBy.forEach(function (a) {
                        if (a.id !== _this.id) {
                            ancestors.push.apply(allAncestors(a));
                            ancestors.push(a);
                        }
                    });
                    return ancestors;
                };
                var additionalConflicts = [];
                conflicts.forEach(function (c) {
                    additionalConflicts.push.apply(additionalConflicts, allAncestors(c.pkg0).map(function (anc) {
                        var confl = new pxt.cpp.PkgConflictError(c.isVersionConflict ?
                            lf("a dependency of {0} has a version mismatch with extension {1} (installed: {1}, installing: {2})", anc.id, pkgCfg.name, c.pkg0._verspec, version) :
                            lf("conflict on yotta setting {0} between extensions {1} and {2}", c.settingName, pkgCfg.name, c.pkg0.id));
                        confl.pkg0 = anc;
                        return confl;
                    }));
                });
                conflicts.push.apply(conflicts, additionalConflicts);
                // Remove duplicate conflicts (happens if more than one package had the same ancestor)
                conflicts = conflicts.filter(function (c, index) {
                    for (var i = 0; i < index; ++i) {
                        if (c.pkg0.id === conflicts[i].pkg0.id) {
                            return false;
                        }
                    }
                    return true;
                });
                return conflicts;
            });
        };
        Package.prototype.upgradeFile = function (fn, cont) {
            var updatedCont = pxt.patching.patchJavaScript(this.targetVersion(), cont);
            if (updatedCont != cont) {
                // save file (force write)
                pxt.debug("patching javascript in " + fn + " (size=" + cont.length + ")...");
                this.host().writeFile(this, fn, updatedCont, true);
            }
            return updatedCont;
        };
        Package.prototype.parseConfig = function (cfgSrc, targetVersion) {
            var cfg = JSON.parse(cfgSrc);
            this.config = cfg;
            var currentConfig = JSON.stringify(this.config);
            for (var dep in this.config.dependencies) {
                var value = pxt.patching.upgradePackageReference(this.targetVersion(), dep, this.config.dependencies[dep]);
                if (value != dep) {
                    delete this.config.dependencies[dep];
                    if (value) {
                        this.config.dependencies[value] = "*";
                    }
                }
            }
            if (targetVersion) {
                this.config.targetVersions = {
                    target: targetVersion
                };
            }
            if (JSON.stringify(this.config) != currentConfig) {
                this.saveConfig();
            }
            this.validateConfig();
        };
        Package.prototype.patchCorePackage = function () {
            var _this = this;
            pxt.Util.assert(pxt.appTarget.simulator && pxt.appTarget.simulator.dynamicBoardDefinition);
            pxt.Util.assert(this.level == 0);
            // find all core packages in target
            var corePackages = Object.keys(this.config.dependencies)
                .filter(function (dep) { return !!dep && JSON.parse((pxt.appTarget.bundledpkgs[dep] || {})[pxt.CONFIG_NAME] || "{}").core; });
            // no core package? add the first one
            if (corePackages.length == 0) {
                var allCorePkgs = pxt.Package.corePackages();
                /* tslint:disable:no-unused-expression TODO(tslint): */
                if (allCorePkgs.length)
                    this.config.dependencies[allCorePkgs[0].name];
                /* tslint:enable:no-unused-expression */
            }
            else if (corePackages.length > 1) {
                // keep last package
                corePackages.pop();
                corePackages.forEach(function (dep) {
                    pxt.log("removing core package " + dep);
                    delete _this.config.dependencies[dep];
                });
            }
        };
        Package.prototype.dependencies = function () {
            if (!this.config)
                return {};
            var dependencies = pxt.Util.clone(this.config.dependencies || {});
            // add test dependencies if nedeed
            if (this.level == 0 && this.config.testDependencies) {
                pxt.Util.jsonMergeFrom(dependencies, this.config.testDependencies);
            }
            return dependencies;
        };
        Package.prototype.loadAsync = function (isInstall, targetVersion) {
            var _this = this;
            if (isInstall === void 0) { isInstall = false; }
            if (this.isLoaded)
                return Promise.resolve();
            var initPromise = Promise.resolve();
            if (this.level == 0)
                pxt.setAppTargetVariant(null);
            this.isLoaded = true;
            var str = this.readFile(pxt.CONFIG_NAME);
            if (str == null) {
                if (!isInstall)
                    pxt.U.userError("Package not installed: " + this.id + ", did you forget to run `pxt install`?");
            }
            else {
                initPromise = initPromise.then(function () { return _this.parseConfig(str); });
            }
            if (isInstall)
                initPromise = initPromise.then(function () { return _this.downloadAsync(); });
            if (isInstall && this.level == 0)
                initPromise = initPromise.then(function () {
                    pxt.debug("upgrading files, target version " + _this.targetVersion());
                    _this.getFiles().filter(function (fn) { return /\.ts$/.test(fn); })
                        .forEach(function (file) { return _this.upgradeFile(file, _this.readFile(file)); });
                });
            if (pxt.appTarget.simulator && pxt.appTarget.simulator.dynamicBoardDefinition) {
                if (this.level == 0)
                    initPromise = initPromise.then(function () { return _this.patchCorePackage(); });
                initPromise = initPromise.then(function () {
                    if (_this.config.compileServiceVariant)
                        pxt.setAppTargetVariant(_this.config.compileServiceVariant);
                    if (_this.config.files.indexOf("board.json") < 0)
                        return;
                    var def = pxt.appTarget.simulator.boardDefinition = JSON.parse(_this.readFile("board.json"));
                    def.id = _this.config.name;
                    pxt.appTarget.appTheme.boardName = def.boardName || lf("board");
                    pxt.appTarget.appTheme.driveDisplayName = def.driveDisplayName || lf("DRIVE");
                    var expandPkg = function (v) {
                        var m = /^pkg:\/\/(.*)/.exec(v);
                        if (m) {
                            var fn = m[1];
                            var content = _this.readFile(fn);
                            return pxt.U.toDataUri(content, pxt.U.getMime(fn));
                        }
                        else {
                            return v;
                        }
                    };
                    var bd = pxt.appTarget.simulator.boardDefinition;
                    if (typeof bd.visual == "object") {
                        var vis = bd.visual;
                        vis.image = expandPkg(vis.image);
                        vis.outlineImage = expandPkg(vis.outlineImage);
                    }
                });
            }
            var loadDepsRecursive = function (deps) {
                return pxt.U.mapStringMapAsync(deps, function (id, ver) {
                    if (id == "hw" && pxt.hwVariant)
                        id = "hw---" + pxt.hwVariant;
                    var mod = _this.resolveDep(id);
                    ver = ver || "*";
                    if (mod) {
                        if (mod._verspec != ver && !/^file:/.test(mod._verspec) && !/^file:/.test(ver))
                            pxt.U.userError("Version spec mismatch on " + id);
                        mod.level = Math.min(mod.level, _this.level + 1);
                        mod.addedBy.push(_this);
                        return Promise.resolve();
                    }
                    else {
                        mod = new Package(id, ver, _this.parent, _this);
                        _this.parent.deps[id] = mod;
                        // we can have "core---nrf52" to be used instead of "core" in other packages
                        _this.parent.deps[id.replace(/---.*/, "")] = mod;
                        return mod.loadAsync(isInstall);
                    }
                });
            };
            return initPromise
                .then(function () { return loadDepsRecursive(_this.dependencies()); })
                .then(function () {
                // get paletter config loading deps, so the more higher level packages take precedence
                if (_this.config.palette && pxt.appTarget.runtime)
                    pxt.appTarget.runtime.palette = pxt.U.clone(_this.config.palette);
                // get screen size loading deps, so the more higher level packages take precedence
                if (_this.config.screenSize && pxt.appTarget.runtime)
                    pxt.appTarget.runtime.screenSize = pxt.U.clone(_this.config.screenSize);
                if (_this.level === 0) {
                    // Check for missing packages. We need to add them 1 by 1 in case they conflict with eachother.
                    var mainTs = _this.readFile("main.ts");
                    if (!mainTs)
                        return Promise.resolve(null);
                    var missingPackages_1 = _this.getMissingPackages(_this.config, mainTs);
                    var didAddPackages_1 = false;
                    var addPackagesPromise = Promise.resolve();
                    Object.keys(missingPackages_1).reduce(function (addPackagesPromise, missing) {
                        return addPackagesPromise
                            .then(function () { return _this.findConflictsAsync(missing, missingPackages_1[missing]); })
                            .then(function (conflicts) {
                            if (conflicts.length) {
                                var conflictNames = conflicts.map(function (c) { return c.pkg0.id; }).join(", ");
                                var settingNames = conflicts.map(function (c) { return c.settingName; }).filter(function (s) { return !!s; }).join(", ");
                                pxt.log("skipping missing package " + missing + " because it conflicts with the following packages: " + conflictNames + " (conflicting settings: " + settingNames + ")");
                                return Promise.resolve(null);
                            }
                            else {
                                pxt.log("adding missing package " + missing);
                                didAddPackages_1 = true;
                                _this.config.dependencies[missing] = "*";
                                var addDependency = {};
                                addDependency[missing] = missingPackages_1[missing];
                                return loadDepsRecursive(addDependency);
                            }
                        });
                    }, Promise.resolve(null))
                        .then(function () {
                        if (didAddPackages_1) {
                            _this.saveConfig();
                            _this.validateConfig();
                        }
                        return Promise.resolve(null);
                    });
                }
                return Promise.resolve(null);
            })
                .then(function () { return null; });
        };
        Package.prototype.getFiles = function () {
            if (this.level == 0 && !this.ignoreTests)
                return this.config.files.concat(this.config.testFiles || []);
            else
                return this.config.files.slice(0);
        };
        Package.prototype.addSnapshot = function (files, exts) {
            if (exts === void 0) { exts = [""]; }
            var _loop_5 = function (fn) {
                if (exts.some(function (e) { return pxt.U.endsWith(fn, e); })) {
                    files[this_1.id + "/" + fn] = this_1.readFile(fn);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.getFiles(); _i < _a.length; _i++) {
                var fn = _a[_i];
                _loop_5(fn);
            }
            files[this.id + "/" + pxt.CONFIG_NAME] = this.readFile(pxt.CONFIG_NAME);
        };
        /**
         * Returns localized strings qName -> translation
         */
        Package.prototype.packageLocalizationStringsAsync = function (lang) {
            var _this = this;
            var targetId = pxt.appTarget.id;
            var filenames = [this.id + "-jsdoc", this.id];
            var r = {};
            var theme = pxt.appTarget.appTheme || {};
            // live loc of bundled packages
            if (pxt.Util.localizeLive && this.id != "this" && pxt.appTarget.bundledpkgs[this.id]) {
                pxt.log("loading live translations for " + this.id);
                var code_1 = pxt.Util.userLanguage();
                return Promise.all(filenames.map(function (fn) { return pxt.Util.downloadLiveTranslationsAsync(code_1, targetId + "/" + fn + "-strings.json", theme.crowdinBranch)
                    .then(function (tr) {
                    if (tr && Object.keys(tr).length) {
                        pxt.Util.jsonMergeFrom(r, tr);
                    }
                    else {
                        pxt.tickEvent("translations.livetranslationsfailed", { "filename": fn });
                        pxt.Util.jsonMergeFrom(r, _this.bundledStringsForFile(lang, fn));
                    }
                })
                    .catch(function (e) {
                    pxt.tickEvent("translations.livetranslationsfailed", { "filename": fn });
                    pxt.log("error while downloading " + targetId + "/" + fn + "-strings.json");
                    pxt.Util.jsonMergeFrom(r, _this.bundledStringsForFile(lang, fn));
                }); })).then(function () { return r; });
            }
            else {
                filenames.map(function (name) {
                    return _this.bundledStringsForFile(lang, name);
                }).filter(function (d) { return !!d; }).forEach(function (d) { return pxt.Util.jsonMergeFrom(r, d); });
                return Promise.resolve(r);
            }
        };
        Package.prototype.bundledStringsForFile = function (lang, filename) {
            var r = {};
            var files = this.config.files;
            var fn = "_locales/" + lang.toLowerCase() + "/" + filename + "-strings.json";
            if (files.indexOf(fn) > -1)
                r = JSON.parse(this.readFile(fn));
            if (lang.length > 2) {
                fn = "_locales/" + lang.substring(0, 2).toLowerCase() + "/" + filename + "-strings.json";
                if (files.indexOf(fn) > -1)
                    r = JSON.parse(this.readFile(fn));
            }
            return r;
        };
        return Package;
    }());
    pxt.Package = Package;
    var MainPackage = /** @class */ (function (_super) {
        __extends(MainPackage, _super);
        function MainPackage(_host) {
            var _this = _super.call(this, "this", "file:.", null, null) || this;
            _this._host = _host;
            _this.deps = {};
            _this.parent = _this;
            _this.addedBy = [_this];
            _this.level = 0;
            _this.deps[_this.id] = _this;
            return _this;
        }
        MainPackage.prototype.installAllAsync = function (targetVersion) {
            return this.loadAsync(true, targetVersion);
        };
        MainPackage.prototype.sortedDeps = function () {
            var _this = this;
            var visited = {};
            var ids = [];
            var rec = function (p) {
                if (!p || pxt.U.lookup(visited, p.id))
                    return;
                visited[p.id] = true;
                var dependencies = p.dependencies();
                var deps = Object.keys(dependencies);
                deps.sort(function (a, b) { return pxt.U.strcmp(a, b); });
                deps.forEach(function (id) { return rec(_this.resolveDep(id)); });
                ids.push(p.id);
            };
            rec(this);
            return ids.map(function (id) { return _this.resolveDep(id); });
        };
        MainPackage.prototype.localizationStringsAsync = function (lang) {
            var loc = {};
            return Promise.all(pxt.Util.values(this.deps).map(function (dep) {
                return dep.packageLocalizationStringsAsync(lang)
                    .then(function (depLoc) {
                    if (depLoc)
                        Object.keys(depLoc).forEach(function (k) {
                            if (!loc[k])
                                loc[k] = depLoc[k];
                        });
                });
            }))
                .then(function () {
                // Subcategories and groups are translated in their respective package, but are not really APIs so
                // there's no way for the translation to be saved with a block. To work around this, we copy the
                // translations to the editor translations.
                var strings = pxt.U.getLocalizedStrings();
                Object.keys(loc).forEach(function (l) {
                    if (pxt.U.startsWith(l, "{id:subcategory}") || pxt.U.startsWith(l, "{id:group}")) {
                        if (!strings[l]) {
                            strings[l] = loc[l];
                        }
                    }
                });
                pxt.U.setLocalizedStrings(strings);
                return Promise.resolve(loc);
            });
        };
        MainPackage.prototype.getTargetOptions = function () {
            var res = pxt.U.clone(pxt.appTarget.compile);
            pxt.U.assert(!!res);
            return res;
        };
        MainPackage.prototype.getJRes = function () {
            if (!this._jres) {
                this._jres = {};
                for (var _i = 0, _a = this.sortedDeps(); _i < _a.length; _i++) {
                    var pkg = _a[_i];
                    pkg.parseJRes(this._jres);
                }
                var palBuf = (pxt.appTarget.runtime && pxt.appTarget.runtime.palette ? pxt.appTarget.runtime.palette : ["#000000", "#ffffff"])
                    .map(function (s) { return ("000000" + parseInt(s.replace(/#/, ""), 16).toString(16)).slice(-6); })
                    .join("");
                this._jres["__palette"] = {
                    id: "__palette",
                    data: palBuf,
                    dataEncoding: "hex",
                    mimeType: "application/x-palette"
                };
            }
            return this._jres;
        };
        MainPackage.prototype.getCompileOptionsAsync = function (target) {
            var _this = this;
            if (target === void 0) { target = this.getTargetOptions(); }
            var opts = {
                sourceFiles: [],
                fileSystem: {},
                target: target,
                hexinfo: { hex: [] },
                name: this.config ? this.config.name : ""
            };
            var generateFile = function (fn, cont) {
                if (_this.config.files.indexOf(fn) < 0)
                    pxt.U.userError(lf("please add '{0}' to \"files\" in {1}", fn, pxt.CONFIG_NAME));
                cont = "// Auto-generated. Do not edit.\n" + cont + "\n// Auto-generated. Do not edit. Really.\n";
                if (_this.host().readFile(_this, fn, true) !== cont) {
                    pxt.debug("updating " + fn + " (size=" + cont.length + ")...");
                    _this.host().writeFile(_this, fn, cont, true);
                }
            };
            return this.loadAsync()
                .then(function () {
                pxt.debug("building: " + _this.sortedDeps().map(function (p) { return p.config.name; }).join(", "));
                var ext = pxt.cpp.getExtensionInfo(_this);
                if (ext.shimsDTS)
                    generateFile("shims.d.ts", ext.shimsDTS);
                if (ext.enumsDTS)
                    generateFile("enums.d.ts", ext.enumsDTS);
                return (target.isNative
                    ? _this.host().getHexInfoAsync(ext)
                    : Promise.resolve(null))
                    .then(function (inf) {
                    ext = pxt.U.flatClone(ext);
                    delete ext.compileData;
                    delete ext.generatedFiles;
                    delete ext.extensionFiles;
                    opts.extinfo = ext;
                    opts.hexinfo = inf;
                });
            })
                .then(function () { return _this.config.binaryonly || pxt.appTarget.compile.shortPointers || !opts.target.isNative ? null : _this.filesToBePublishedAsync(true); })
                .then(function (files) {
                if (files) {
                    files = pxt.U.mapMap(files, function (f, c) { return _this.upgradeFile(f, c); });
                    var headerString_1 = JSON.stringify({
                        name: _this.config.name,
                        comment: _this.config.description,
                        status: "unpublished",
                        scriptId: _this.config.installedVersion,
                        cloudId: pxt.CLOUD_ID + pxt.appTarget.id,
                        editor: target.preferredEditor ? target.preferredEditor : (pxt.U.lookup(files, "main.blocks") ? pxt.BLOCKS_PROJECT_NAME : pxt.JAVASCRIPT_PROJECT_NAME),
                        targetVersions: pxt.appTarget.versions
                    });
                    var programText_1 = JSON.stringify(files);
                    return pxt.lzmaCompressAsync(headerString_1 + programText_1)
                        .then(function (buf) {
                        if (buf) {
                            opts.embedMeta = JSON.stringify({
                                compression: "LZMA",
                                headerSize: headerString_1.length,
                                textSize: programText_1.length,
                                name: _this.config.name,
                                eURL: pxt.appTarget.appTheme.embedUrl,
                                eVER: pxt.appTarget.versions ? pxt.appTarget.versions.target : "",
                                pxtTarget: pxt.appTarget.id,
                            });
                            opts.embedBlob = ts.pxtc.encodeBase64(pxt.U.uint8ArrayToString(buf));
                        }
                    });
                }
                else {
                    return Promise.resolve();
                }
            })
                .then(function () {
                for (var _i = 0, _a = _this.sortedDeps(); _i < _a.length; _i++) {
                    var pkg = _a[_i];
                    for (var _b = 0, _c = pkg.getFiles(); _b < _c.length; _b++) {
                        var f = _c[_b];
                        if (/\.(ts|asm)$/.test(f)) {
                            var sn = f;
                            if (pkg.level > 0)
                                sn = "pxt_modules/" + pkg.id + "/" + f;
                            opts.sourceFiles.push(sn);
                            opts.fileSystem[sn] = pkg.readFile(f);
                        }
                    }
                }
                opts.jres = _this.getJRes();
                return opts;
            });
        };
        MainPackage.prototype.filesToBePublishedAsync = function (allowPrivate) {
            var _this = this;
            if (allowPrivate === void 0) { allowPrivate = false; }
            var files = {};
            return this.loadAsync()
                .then(function () {
                if (!allowPrivate && !_this.config.public)
                    pxt.U.userError('Only packages with "public":true can be published');
                var cfg = pxt.U.clone(_this.config);
                delete cfg.installedVersion;
                delete cfg.additionalFilePath;
                delete cfg.additionalFilePaths;
                if (!cfg.targetVersions)
                    cfg.targetVersions = pxt.appTarget.versions;
                pxt.U.iterMap(cfg.dependencies, function (k, v) {
                    if (!v || /^file:/.test(v) || /^workspace:/.test(v)) {
                        v = "*";
                        try {
                            var d = _this.resolveDep(k);
                            var gitjson = JSON.parse(d.readFile(pxt.github.GIT_JSON) || "{}");
                            if (gitjson.repo) {
                                var parsed = pxt.github.parseRepoId(gitjson.repo);
                                parsed.tag = gitjson.commit.tag || gitjson.commit.sha;
                                v = pxt.github.stringifyRepo(parsed);
                            }
                        }
                        catch (e) { }
                        cfg.dependencies[k] = v;
                    }
                });
                files[pxt.CONFIG_NAME] = JSON.stringify(cfg, null, 4);
                for (var _i = 0, _a = _this.getFiles(); _i < _a.length; _i++) {
                    var f = _a[_i];
                    var str = _this.readFile(f);
                    if (str == null)
                        pxt.U.userError("referenced file missing: " + f);
                    files[f] = str;
                }
                return pxt.U.sortObjectFields(files);
            });
        };
        MainPackage.prototype.saveToJsonAsync = function (editor) {
            var _this = this;
            return this.filesToBePublishedAsync(true)
                .then(function (files) {
                var project = {
                    meta: {
                        cloudId: pxt.CLOUD_ID + pxt.appTarget.id,
                        targetVersions: pxt.appTarget.versions,
                        editor: editor || pxt.BLOCKS_PROJECT_NAME,
                        name: _this.config.name
                    },
                    source: JSON.stringify(files, null, 2)
                };
                return project;
            });
        };
        MainPackage.prototype.compressToFileAsync = function (editor) {
            return this.saveToJsonAsync(editor)
                .then(function (project) { return pxt.lzmaCompressAsync(JSON.stringify(project, null, 2)); });
        };
        MainPackage.prototype.computePartDefinitions = function (parts) {
            if (!parts || !parts.length)
                return {};
            var res = {};
            this.sortedDeps().forEach(function (d) {
                var pjson = d.readFile("pxtparts.json");
                if (pjson) {
                    try {
                        var p_1 = JSON.parse(pjson);
                        Object.keys(p_1).forEach(function (k) {
                            if (parts.indexOf(k) >= 0) {
                                var part = res[k] = p_1[k];
                                if (typeof part.visual.image === "string" && /\.svg$/i.test(part.visual.image)) {
                                    var f = d.readFile(part.visual.image);
                                    if (!f)
                                        pxt.reportError("parts", "invalid part definition", { "error": "missing visual " + part.visual.image });
                                    part.visual.image = "data:image/svg+xml," + encodeURIComponent(f);
                                }
                            }
                        });
                    }
                    catch (e) {
                        pxt.reportError("parts", "invalid pxtparts.json file");
                    }
                }
            });
            return res;
        };
        return MainPackage;
    }(Package));
    pxt.MainPackage = MainPackage;
    function allPkgFiles(cfg) {
        return [pxt.CONFIG_NAME].concat(cfg.files || []).concat(cfg.testFiles || []);
    }
    pxt.allPkgFiles = allPkgFiles;
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var patching;
    (function (patching) {
        function computePatches(version, kind) {
            var patches = pxt.appTarget.compile ? pxt.appTarget.compile.patches : undefined;
            if (!patches)
                return undefined;
            var v = pxt.semver.tryParse(version || "0.0.0") || pxt.semver.tryParse("0.0.0");
            var r = [];
            Object.keys(patches)
                .filter(function (rng) { return pxt.semver.inRange(rng, v); })
                .forEach(function (rng) { return r = r.concat(patches[rng]); });
            if (kind)
                r = r.filter(function (p) { return p.type == kind; });
            return r.length ? r : undefined;
        }
        patching.computePatches = computePatches;
        function upgradePackageReference(pkgTargetVersion, pkg, val) {
            if (val != "*")
                return pkg;
            var upgrades = pxt.patching.computePatches(pkgTargetVersion, "package");
            var newPackage = pkg;
            if (upgrades) {
                upgrades.forEach(function (rule) {
                    Object.keys(rule.map).forEach(function (match) {
                        if (newPackage == match) {
                            newPackage = rule.map[match];
                        }
                    });
                });
            }
            return newPackage;
        }
        patching.upgradePackageReference = upgradePackageReference;
        function patchJavaScript(pkgTargetVersion, fileContents) {
            var upgrades = pxt.patching.computePatches(pkgTargetVersion, "api");
            var updatedContents = fileContents;
            if (upgrades) {
                upgrades.forEach(function (rule) {
                    for (var match in rule.map) {
                        var regex = new RegExp(match, 'g');
                        updatedContents = updatedContents.replace(regex, rule.map[match]);
                    }
                });
            }
            return updatedContents;
        }
        patching.patchJavaScript = patchJavaScript;
    })(patching = pxt.patching || (pxt.patching = {}));
})(pxt || (pxt = {}));
// see http://semver.org/
var pxt;
(function (pxt) {
    var semver;
    (function (semver) {
        function cmp(a, b) {
            if (!a)
                if (!b)
                    return 0;
                else
                    return 1;
            else if (!b)
                return -1;
            else {
                var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
                if (d)
                    return d;
                if (a.pre.length == 0 && b.pre.length > 0)
                    return 1;
                if (a.pre.length > 0 && b.pre.length == 0)
                    return -1;
                for (var i = 0; i < a.pre.length + 1; ++i) {
                    var aa = a.pre[i];
                    var bb = b.pre[i];
                    if (!aa)
                        if (!bb)
                            return 0;
                        else
                            return -1;
                    else if (!bb)
                        return 1;
                    else if (/^\d+$/.test(aa))
                        if (/^\d+$/.test(bb)) {
                            d = parseInt(aa) - parseInt(bb);
                            if (d)
                                return d;
                        }
                        else
                            return -1;
                    else if (/^\d+$/.test(bb))
                        return 1;
                    else {
                        d = pxt.U.strcmp(aa, bb);
                        if (d)
                            return d;
                    }
                }
                return 0;
            }
        }
        semver.cmp = cmp;
        function parse(v) {
            var r = tryParse(v);
            if (!r)
                pxt.U.userError(pxt.U.lf("'{0}' doesn't look like a semantic version number", v));
            return r;
        }
        semver.parse = parse;
        function tryParse(v) {
            if (/^v\d/i.test(v))
                v = v.slice(1);
            var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
            if (m)
                return {
                    major: parseInt(m[1]),
                    minor: parseInt(m[2]),
                    patch: parseInt(m[3]),
                    pre: m[5] ? m[5].split(".") : [],
                    build: m[7] ? m[7].split(".") : []
                };
            return null;
        }
        semver.tryParse = tryParse;
        function normalize(v) {
            return stringify(parse(v));
        }
        semver.normalize = normalize;
        function stringify(v) {
            var r = v.major + "." + v.minor + "." + v.patch;
            if (v.pre.length)
                r += "-" + v.pre.join(".");
            if (v.build.length)
                r += "+" + v.build.join(".");
            return r;
        }
        semver.stringify = stringify;
        function majorCmp(a, b) {
            var aa = tryParse(a);
            var bb = tryParse(b);
            return aa.major - bb.major;
        }
        semver.majorCmp = majorCmp;
        function strcmp(a, b) {
            var aa = tryParse(a);
            var bb = tryParse(b);
            if (!aa && !bb)
                return pxt.U.strcmp(a, b);
            else
                return cmp(aa, bb);
        }
        semver.strcmp = strcmp;
        function inRange(rng, v) {
            var rngs = rng.split(' - ');
            if (rngs.length != 2)
                return false;
            var minInclusive = tryParse(rngs[0]);
            var maxExclusive = tryParse(rngs[1]);
            if (!minInclusive || !maxExclusive)
                return false;
            if (!v)
                return true;
            var lwr = cmp(minInclusive, v);
            var hr = cmp(v, maxExclusive);
            return lwr <= 0 && hr < 0;
        }
        semver.inRange = inRange;
        function test() {
            console.log("Test semver");
            var d = [
                "0.9.0",
                "1.0.0-0.3.7",
                "1.0.0-alpha", "1.0.0-alpha.1",
                "1.0.0-alpha.beta", "1.0.0-beta",
                "1.0.0-beta.2", "1.0.0-beta.11",
                "1.0.0-rc.1",
                "1.0.0-x.7.z.92",
                "1.0.0",
                "1.0.1",
                "1.9.0", "1.10.0", "1.11.0"
            ];
            for (var i = 0; i < d.length; ++i) {
                var p = parse(d[i]);
                console.log(d[i], p);
                pxt.U.assert(stringify(p) == d[i]);
                for (var j = 0; j < d.length; ++j) {
                    var x = cmp(p, parse(d[j]));
                    console.log(d[i], d[j], x);
                    if (i < j)
                        pxt.U.assert(x < 0);
                    else if (i > j)
                        pxt.U.assert(x > 0);
                    else
                        pxt.U.assert(x == 0);
                }
            }
            var v = tryParse("1.2.3");
            pxt.U.assert(inRange("0.1.2 - 2.2.3", v));
            pxt.U.assert(inRange("1.2.3 - 2.2.3", v));
            pxt.U.assert(!inRange("0.0.0 - 1.2.3", v));
            pxt.U.assert(!inRange("1.2.4 - 4.2.3", v));
            pxt.U.assert(!inRange("0.0.0 - 0.0.1", v));
        }
        semver.test = test;
    })(semver = pxt.semver || (pxt.semver = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/pxtarget.d.ts"/>
/// <reference path="../localtypings/pxtpackage.d.ts"/>
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        pxtc.assert = pxtc.Util.assert;
        pxtc.oops = pxtc.Util.oops;
        pxtc.U = pxtc.Util;
        pxtc.ON_START_TYPE = "pxt-on-start";
        pxtc.ON_START_COMMENT = "on start"; // TODO: Localize? (adding lf doesn't work because this is run before translations are downloaded)
        pxtc.HANDLER_COMMENT = "code goes here"; // TODO: Localize? (adding lf doesn't work because this is run before translations are downloaded)
        pxtc.TS_STATEMENT_TYPE = "typescript_statement";
        pxtc.TS_DEBUGGER_TYPE = "debugger_keyword";
        pxtc.TS_OUTPUT_TYPE = "typescript_expression";
        pxtc.PAUSE_UNTIL_TYPE = "pxt_pause_until";
        pxtc.BINARY_JS = "binary.js";
        pxtc.BINARY_CS = "binary.cs";
        pxtc.BINARY_ASM = "binary.asm";
        pxtc.BINARY_HEX = "binary.hex";
        pxtc.BINARY_UF2 = "binary.uf2";
        pxtc.BINARY_ELF = "binary.elf";
        pxtc.NATIVE_TYPE_THUMB = "thumb";
        pxtc.NATIVE_TYPE_AVR = "AVR";
        pxtc.NATIVE_TYPE_CS = "C#";
        pxtc.NATIVE_TYPE_AVRVM = "AVRVM";
        var SymbolKind;
        (function (SymbolKind) {
            SymbolKind[SymbolKind["None"] = 0] = "None";
            SymbolKind[SymbolKind["Method"] = 1] = "Method";
            SymbolKind[SymbolKind["Property"] = 2] = "Property";
            SymbolKind[SymbolKind["Function"] = 3] = "Function";
            SymbolKind[SymbolKind["Variable"] = 4] = "Variable";
            SymbolKind[SymbolKind["Module"] = 5] = "Module";
            SymbolKind[SymbolKind["Enum"] = 6] = "Enum";
            SymbolKind[SymbolKind["EnumMember"] = 7] = "EnumMember";
            SymbolKind[SymbolKind["Class"] = 8] = "Class";
            SymbolKind[SymbolKind["Interface"] = 9] = "Interface";
        })(SymbolKind = pxtc.SymbolKind || (pxtc.SymbolKind = {}));
        function computeUsedParts(resp, ignoreBuiltin) {
            if (ignoreBuiltin === void 0) { ignoreBuiltin = false; }
            if (!resp.usedSymbols || !pxt.appTarget.simulator || !pxt.appTarget.simulator.parts)
                return [];
            var parts = [];
            Object.keys(resp.usedSymbols).forEach(function (symbol) {
                var info = resp.usedSymbols[symbol];
                if (info && info.attributes.parts) {
                    var partsRaw = info.attributes.parts;
                    if (partsRaw) {
                        var partsSplit = partsRaw.split(/[ ,]+/);
                        partsSplit.forEach(function (p) {
                            if (0 < p.length && parts.indexOf(p) < 0) {
                                parts.push(p);
                            }
                        });
                    }
                }
            });
            if (ignoreBuiltin) {
                var builtinParts_1 = pxt.appTarget.simulator.boardDefinition.onboardComponents;
                if (builtinParts_1)
                    parts = parts.filter(function (p) { return builtinParts_1.indexOf(p) < 0; });
            }
            //sort parts (so breadboarding layout is stable w.r.t. code ordering)
            parts.sort();
            parts = parts.reverse(); //not strictly necessary, but it's a little
            // nicer for demos to have "ledmatrix"
            // before "buttonpair"
            return parts;
        }
        pxtc.computeUsedParts = computeUsedParts;
        /**
         * Unlocalized category name for a symbol
         */
        function blocksCategory(si) {
            var n = !si ? undefined : (si.attributes.blockNamespace || si.namespace);
            return n ? pxtc.Util.capitalize(n.split('.')[0]) : undefined;
        }
        pxtc.blocksCategory = blocksCategory;
        function getBlocksInfo(info, categoryFilters) {
            var blocks = [];
            var combinedSet = {};
            var combinedGet = {};
            var combinedChange = {};
            var enumsByName = {};
            function addCombined(rtp, s) {
                var isGet = rtp == "get";
                var isSet = rtp == "set";
                var isNumberType = s.retType == "number";
                var m = isGet ? combinedGet : (isSet ? combinedSet : combinedChange);
                var mkey = s.namespace + "." + s.retType;
                var ex = pxtc.U.lookup(m, mkey);
                if (!ex) {
                    var tp = "@" + rtp + "@";
                    var paramNameShadow = void 0, paramValueShadow = void 0;
                    if (s.attributes.blockCombineShadow) {
                        // allowable %blockCombineShadow strings:-
                        //   '{name shadow},' or '{value shadow}' or ',{value shadow}' or '{name shadow},{value shadow}'
                        var attribute = s.attributes.blockCombineShadow;
                        var match = attribute.match(/^([^,.]*),?([^,.]*)$/);
                        if (match && match.length == 3) {
                            paramNameShadow = match[1].trim();
                            paramValueShadow = match[2].trim();
                            if (paramValueShadow.length == 0 && !pxtc.Util.endsWith(attribute, ",")) {
                                paramValueShadow = paramNameShadow;
                                paramNameShadow = "";
                            }
                        }
                    }
                    var varName = s.attributes.blockSetVariable || s.namespace.toLocaleLowerCase();
                    var paramName = varName + "=" + (paramNameShadow || "");
                    var paramValue = "value=" + (paramValueShadow || "");
                    ex = m[mkey] = {
                        attributes: {
                            blockId: (isNumberType ? s.namespace : mkey) + "_blockCombine_" + rtp,
                            callingConvention: pxtc.ir.CallingConvention.Plain,
                            group: s.attributes.group,
                            paramDefl: {},
                            jsDoc: isGet
                                ? pxtc.U.lf("Read value of a property on an object")
                                : pxtc.U.lf("Update value of property on an object")
                        },
                        name: tp,
                        namespace: s.namespace,
                        qName: mkey + "." + tp,
                        pkg: s.pkg,
                        kind: SymbolKind.Property,
                        parameters: [
                            {
                                name: "property",
                                description: isGet ?
                                    pxtc.U.lf("the name of the property to read") :
                                    pxtc.U.lf("the name of the property to change"),
                                isEnum: true,
                                type: "@combined@"
                            },
                            {
                                name: "value",
                                description: isSet ?
                                    pxtc.U.lf("the new value of the property") :
                                    pxtc.U.lf("the amount by which to change the property"),
                                type: s.retType,
                            }
                        ].slice(0, isGet ? 1 : 2),
                        retType: isGet ? s.retType : "void",
                        combinedProperties: []
                    };
                    ex.attributes.block =
                        isGet ? "%" + paramName + " %property" :
                            isSet ? "set %" + paramName + " %property to %" + paramValue :
                                "change %" + paramName + " %property by %" + paramValue;
                    updateBlockDef(ex.attributes);
                    blocks.push(ex);
                }
                ex.combinedProperties.push(s.qName);
            }
            for (var _i = 0, _a = pxtc.Util.values(info.byQName); _i < _a.length; _i++) {
                var s = _a[_i];
                if (s.attributes.shim === "ENUM_GET" && s.attributes.enumName && s.attributes.blockId) {
                    var didFail = false;
                    if (enumsByName[s.attributes.enumName]) {
                        console.warn("Enum block " + s.attributes.blockId + " trying to overwrite enum " + s.attributes.enumName);
                        didFail = true;
                    }
                    if (!s.attributes.enumMemberName) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumMemberName");
                        didFail = true;
                    }
                    if (!s.attributes.enumPromptHint) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumPromptHint");
                        didFail = true;
                    }
                    if (!s.attributes.enumInitialMembers || !s.attributes.enumInitialMembers.length) {
                        console.warn("Enum block " + s.attributes.blockId + " should specify enumInitialMembers");
                        didFail = true;
                    }
                    if (didFail) {
                        continue;
                    }
                    var firstValue = parseInt(s.attributes.enumStartValue);
                    enumsByName[s.attributes.enumName] = {
                        blockId: s.attributes.blockId,
                        name: s.attributes.enumName,
                        memberName: s.attributes.enumMemberName,
                        firstValue: isNaN(firstValue) ? undefined : firstValue,
                        isBitMask: s.attributes.enumIsBitMask,
                        initialMembers: s.attributes.enumInitialMembers,
                        promptHint: s.attributes.enumPromptHint
                    };
                }
                if (s.attributes.blockCombine) {
                    if (!/@set/.test(s.name)) {
                        addCombined("get", s);
                    }
                    if (!s.isReadOnly) {
                        if (s.retType == 'number') {
                            addCombined("change", s);
                        }
                        addCombined("set", s);
                    }
                }
                else if (!!s.attributes.block
                    && !s.attributes.fixedInstance
                    && s.kind != pxtc.SymbolKind.EnumMember
                    && s.kind != pxtc.SymbolKind.Module
                    && s.kind != pxtc.SymbolKind.Interface
                    && s.kind != pxtc.SymbolKind.Class) {
                    if (!s.attributes.blockId)
                        s.attributes.blockId = s.qName.replace(/\./g, "_");
                    if (s.attributes.block == "true") {
                        var b = pxtc.U.uncapitalize(s.name);
                        if (s.kind == SymbolKind.Method || s.kind == SymbolKind.Property) {
                            b += " %" + s.namespace.toLowerCase();
                        }
                        for (var _b = 0, _c = s.parameters || []; _b < _c.length; _b++) {
                            var p = _c[_b];
                            b += " %" + p.name;
                        }
                        s.attributes.block = b;
                        updateBlockDef(s.attributes);
                    }
                    blocks.push(s);
                }
            }
            // derive common block properties from namespace
            for (var _d = 0, blocks_1 = blocks; _d < blocks_1.length; _d++) {
                var b = blocks_1[_d];
                var parent_2 = pxtc.U.lookup(info.byQName, b.namespace);
                if (!parent_2)
                    continue;
                var pattr = parent_2.attributes;
                var battr = b.attributes;
                for (var _e = 0, _f = ["blockNamespace", "color", "blockGap"]; _e < _f.length; _e++) {
                    var n = _f[_e];
                    if (battr[n] === undefined && pattr[n])
                        battr[n] = pattr[n];
                }
            }
            if (pxt.appTarget && pxt.appTarget.runtime && Array.isArray(pxt.appTarget.runtime.bannedCategories)) {
                filterCategories(pxt.appTarget.runtime.bannedCategories);
            }
            if (categoryFilters) {
                filterCategories(categoryFilters);
            }
            return {
                apis: info,
                blocks: blocks,
                blocksById: pxt.Util.toDictionary(blocks, function (b) { return b.attributes.blockId; }),
                enumsByName: enumsByName
            };
            function filterCategories(banned) {
                if (banned.length) {
                    blocks = blocks.filter(function (b) {
                        var ns = (b.attributes.blockNamespace || b.namespace).split('.')[0];
                        return banned.indexOf(ns) === -1;
                    });
                }
            }
        }
        pxtc.getBlocksInfo = getBlocksInfo;
        function localizeApisAsync(apis, mainPkg) {
            var lang = pxtc.Util.userLanguage();
            if (pxtc.Util.userLanguage() == "en")
                return Promise.resolve(apis);
            return mainPkg.localizationStringsAsync(lang)
                .then(function (loc) { return pxtc.Util.values(apis.byQName).forEach(function (fn) {
                var jsDoc = loc[fn.qName];
                if (jsDoc) {
                    fn.attributes.jsDoc = jsDoc;
                    if (fn.parameters)
                        fn.parameters.forEach(function (pi) { return pi.description = loc[fn.qName + "|param|" + pi.name] || pi.description; });
                }
                var nsDoc = loc['{id:category}' + pxtc.Util.capitalize(fn.qName)];
                var locBlock = loc[fn.qName + "|block"];
                if (!locBlock && fn.attributes.useLoc) {
                    var otherFn = apis.byQName[fn.attributes.useLoc];
                    if (otherFn) {
                        var otherTranslation = loc[otherFn.qName + "|block"];
                        var isSameBlockDef = fn.attributes.block === (otherFn.attributes._untranslatedBlock || otherFn.attributes.block);
                        if (isSameBlockDef && !!otherTranslation) {
                            locBlock = otherTranslation;
                        }
                    }
                }
                if (nsDoc) {
                    // Check for "friendly namespace"
                    if (fn.attributes.block) {
                        fn.attributes.block = locBlock || fn.attributes.block;
                    }
                    else {
                        fn.attributes.block = nsDoc;
                    }
                }
                else if (fn.attributes.block && locBlock) {
                    var ps = pxt.blocks.compileInfo(fn);
                    var oldBlock = fn.attributes.block;
                    fn.attributes.block = pxt.blocks.normalizeBlock(locBlock);
                    fn.attributes._untranslatedBlock = oldBlock;
                    if (oldBlock != fn.attributes.block) {
                        var locps = pxt.blocks.compileInfo(fn);
                        if (JSON.stringify(ps) != JSON.stringify(locps)) {
                            pxt.log("block has non matching arguments: " + oldBlock + " vs " + fn.attributes.block);
                            fn.attributes.block = oldBlock;
                        }
                    }
                }
                updateBlockDef(fn.attributes);
            }); })
                .then(function () { return apis; });
        }
        pxtc.localizeApisAsync = localizeApisAsync;
        function emptyExtInfo() {
            var cs = pxt.appTarget.compileService;
            if (!cs)
                cs = {};
            var pio = !!cs.platformioIni;
            var docker = cs.buildEngine == "dockermake";
            var r = {
                functions: [],
                generatedFiles: {},
                extensionFiles: {},
                sha: "",
                compileData: "",
                shimsDTS: "",
                enumsDTS: "",
                onlyPublic: true
            };
            if (pio)
                r.platformio = { dependencies: {} };
            else if (docker)
                r.npmDependencies = {};
            else
                r.yotta = { config: {}, dependencies: {} };
            return r;
        }
        pxtc.emptyExtInfo = emptyExtInfo;
        var numberAttributes = ["weight", "imageLiteral"];
        var booleanAttributes = [
            "advanced",
            "handlerStatement",
            "afterOnStart",
            "optionalVariableArgs",
            "blockHidden",
            "constantShim",
            "blockCombine",
            "enumIsBitMask",
            "decompileIndirectFixedInstances",
            "draggableParameters"
        ];
        function parseCommentString(cmt) {
            var res = {
                paramDefl: {},
                callingConvention: pxtc.ir.CallingConvention.Plain,
                _source: cmt
            };
            var didSomething = true;
            while (didSomething) {
                didSomething = false;
                cmt = cmt.replace(/\/\/%[ \t]*([\w\.]+)(=(("[^"\n]*")|'([^'\n]*)'|([^\s]*)))?/, function (f, n, d0, d1, v0, v1, v2) {
                    var v = v0 ? JSON.parse(v0) : (d0 ? (v0 || v1 || v2) : "true");
                    if (!v)
                        v = "";
                    if (pxtc.U.endsWith(n, ".defl")) {
                        if (v.indexOf(" ") > -1) {
                            res.paramDefl[n.slice(0, n.length - 5)] = "\"" + v + "\"";
                        }
                        else {
                            res.paramDefl[n.slice(0, n.length - 5)] = v;
                        }
                    }
                    else if (pxtc.U.endsWith(n, ".fieldEditor")) {
                        if (!res.paramFieldEditor)
                            res.paramFieldEditor = {};
                        res.paramFieldEditor[n.slice(0, n.length - 12)] = v;
                    }
                    else if (pxtc.U.contains(n, ".fieldOptions.")) {
                        if (!res.paramFieldEditorOptions)
                            res.paramFieldEditorOptions = {};
                        var field = n.slice(0, n.indexOf('.fieldOptions.'));
                        var key = n.slice(n.indexOf('.fieldOptions.') + 14, n.length);
                        if (!res.paramFieldEditorOptions[field])
                            res.paramFieldEditorOptions[field] = {};
                        res.paramFieldEditorOptions[field][key] = v;
                    }
                    else if (pxtc.U.contains(n, ".shadowOptions.")) {
                        if (!res.paramShadowOptions)
                            res.paramShadowOptions = {};
                        var field = n.slice(0, n.indexOf('.shadowOptions.'));
                        var key = n.slice(n.indexOf('.shadowOptions.') + 15, n.length);
                        if (!res.paramShadowOptions[field])
                            res.paramShadowOptions[field] = {};
                        res.paramShadowOptions[field][key] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".min")) {
                        if (!res.paramMin)
                            res.paramMin = {};
                        res.paramMin[n.slice(0, n.length - 4)] = v;
                    }
                    else if (pxtc.U.endsWith(n, ".max")) {
                        if (!res.paramMax)
                            res.paramMax = {};
                        res.paramMax[n.slice(0, n.length - 4)] = v;
                    }
                    else {
                        res[n] = v;
                    }
                    didSomething = true;
                    return "//% ";
                });
            }
            for (var _i = 0, numberAttributes_1 = numberAttributes; _i < numberAttributes_1.length; _i++) {
                var n = numberAttributes_1[_i];
                if (typeof res[n] == "string")
                    res[n] = parseInt(res[n]);
            }
            for (var _a = 0, booleanAttributes_1 = booleanAttributes; _a < booleanAttributes_1.length; _a++) {
                var n = booleanAttributes_1[_a];
                if (typeof res[n] == "string")
                    res[n] = res[n] == 'true' || res[n] == '1' ? true : false;
            }
            if (res.trackArgs) {
                res.trackArgs = res.trackArgs.split(/[ ,]+/).map(function (s) { return parseInt(s) || 0; });
            }
            if (res.enumInitialMembers) {
                res.enumInitialMembers = res.enumInitialMembers.split(/[ ,]+/);
            }
            if (res.blockExternalInputs && !res.inlineInputMode) {
                res.inlineInputMode = "external";
            }
            res.paramHelp = {};
            res.jsDoc = "";
            cmt = cmt.replace(/\/\*\*([^]*?)\*\//g, function (full, doccmt) {
                doccmt = doccmt.replace(/\n\s*(\*\s*)?/g, "\n");
                doccmt = doccmt.replace(/^\s*@param\s+(\w+)\s+(.*)$/mg, function (full, name, desc) {
                    res.paramHelp[name] = desc;
                    if (!res.paramDefl[name]) {
                        var m = /\beg\.?:\s*(.+)/.exec(desc);
                        if (m && m[1]) {
                            var defaultValue = /(?:"([^"]*)")|(?:'([^']*)')|(?:([^\s,]+))/g.exec(m[1]);
                            if (defaultValue) {
                                var val = defaultValue[1] || defaultValue[2] || defaultValue[3];
                                if (!val)
                                    val = "";
                                // If there are spaces in the value, it means the value was surrounded with quotes, so add them back
                                if (val.indexOf(" ") > -1) {
                                    res.paramDefl[name] = "\"" + val + "\"";
                                }
                                else {
                                    res.paramDefl[name] = val;
                                }
                            }
                        }
                    }
                    return "";
                });
                res.jsDoc += doccmt;
                return "";
            });
            res.jsDoc = res.jsDoc.trim();
            if (res.async)
                res.callingConvention = pxtc.ir.CallingConvention.Async;
            if (res.promise)
                res.callingConvention = pxtc.ir.CallingConvention.Promise;
            if (res.jres)
                res.whenUsed = true;
            if (res.subcategories) {
                try {
                    res.subcategories = JSON.parse(res.subcategories);
                }
                catch (e) {
                    res.subcategories = undefined;
                }
            }
            if (res.groups) {
                try {
                    res.groups = JSON.parse(res.groups);
                }
                catch (e) {
                    res.groups = undefined;
                }
            }
            if (res.groupIcons) {
                try {
                    res.groupIcons = JSON.parse(res.groupIcons);
                }
                catch (e) {
                    res.groupIcons = undefined;
                }
            }
            updateBlockDef(res);
            return res;
        }
        pxtc.parseCommentString = parseCommentString;
        function updateBlockDef(attrs) {
            if (attrs.block) {
                var parts = attrs.block.split("||");
                attrs._def = parseBlockDefinition(parts[0]);
                if (!attrs._def)
                    pxt.debug("Unable to parse block def for id: " + attrs.blockId);
                if (parts[1])
                    attrs._expandedDef = parseBlockDefinition(parts[1]);
                if (parts[1] && !attrs._expandedDef)
                    pxt.debug("Unable to parse expanded block def for id: " + attrs.blockId);
            }
        }
        pxtc.updateBlockDef = updateBlockDef;
        function parseBlockDefinition(def) {
            var tokens = [];
            var currentWord;
            var strIndex = 0;
            var _loop_6 = function () {
                var char = def[strIndex];
                var restoreIndex = strIndex;
                var newToken = void 0;
                switch (char) {
                    case "*":
                    case "_":
                        var tk = eatToken(function (c) { return c == char; });
                        var offset = char === "_" ? 2 : 0;
                        if (tk.length === 1)
                            newToken = { kind: 1 /* SingleAsterisk */ << offset, content: tk };
                        else if (tk.length === 2)
                            newToken = { kind: 2 /* DoubleAsterisk */ << offset, content: tk };
                        else if (tk.length === 3)
                            newToken = { kind: 3 /* TripleAsterisk */ << offset, content: tk };
                        else
                            strIndex = restoreIndex; // error: no more than three style marks
                        break;
                    case "`":
                        var image = eatEnclosure("`");
                        if (image === undefined) {
                            strIndex = restoreIndex; // error: not terminated
                            break;
                        }
                        newToken = { kind: 256 /* Image */, content: image };
                        break;
                    case "|":
                        newToken = { kind: 32 /* Pipe */ };
                        break;
                    case "\\":
                        if (strIndex < (def.length - 1))
                            newToken = { kind: 16 /* Escape */, content: def[1 + (strIndex++)] };
                        break;
                    case "[":
                        var contentText = eatEnclosure("]");
                        if (contentText !== undefined && def[strIndex++ + 1] === "(") {
                            var contentClass = eatEnclosure(")");
                            if (contentClass !== undefined) {
                                newToken = { kind: 512 /* TaggedText */, content: contentText, type: contentClass };
                                break;
                            }
                        }
                        strIndex = restoreIndex; // error: format should be [text](class)
                        break;
                    case "$":
                    case "%":
                        var param = eatToken(function (c) { return /[a-zA-Z0-9_=]/.test(c); }, true).split("=");
                        if (param.length > 2) {
                            strIndex = restoreIndex; // error: too many equals signs
                            break;
                        }
                        var varName = void 0;
                        if (def[strIndex + 1] === "(") {
                            var oldIndex = strIndex;
                            ++strIndex;
                            varName = eatEnclosure(")");
                            if (!varName)
                                strIndex = oldIndex;
                        }
                        newToken = { kind: (char === "$") ? 1024 /* ParamRef */ : 64 /* Parameter */, content: param[0], type: param[1], name: varName };
                        break;
                }
                if (newToken) {
                    if (currentWord)
                        tokens.push({ kind: 128 /* Word */, content: currentWord });
                    currentWord = undefined;
                    tokens.push(newToken);
                }
                else if (!currentWord) {
                    currentWord = char;
                }
                else {
                    currentWord += char;
                }
            };
            for (; strIndex < def.length; strIndex++) {
                _loop_6();
            }
            if (currentWord)
                tokens.push({ kind: 128 /* Word */, content: currentWord });
            var parts = [];
            var parameters = [];
            var stack = [];
            var open = 0;
            var currentLabel = "";
            var labelStack = [];
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i].kind;
                var top_1 = stack[stack.length - 1];
                if (token & 15 /* StyleMarks */) {
                    pushCurrentLabel(tokens[i].content);
                    if (token & open) {
                        if (top_1 & token) {
                            stack.pop();
                            open ^= token;
                            // Handle triple tokens
                            var remainder = (top_1 & open) | (token & open);
                            if (remainder) {
                                stack.push(remainder);
                            }
                        }
                        else {
                            // We encountered a mismatched mark, so clear previous styles
                            collapseLabels();
                        }
                    }
                    else {
                        open |= token;
                        stack.push(token);
                    }
                }
                else if (token & 144 /* Text */) {
                    currentLabel += tokens[i].content;
                }
                else if (token & 1120 /* Unstylable */) {
                    pushLabels();
                }
                /* tslint:disable:possible-timing-attack  (tslint thinks all variables named token are passwords...) */
                if (token == 64 /* Parameter */) {
                    var param = { kind: "param", name: tokens[i].content, shadowBlockId: tokens[i].type, ref: false };
                    if (tokens[i].name)
                        param.varName = tokens[i].name;
                    parts.push(param);
                    parameters.push(param);
                }
                else if (token == 1024 /* ParamRef */) {
                    var param = { kind: "param", name: tokens[i].content, shadowBlockId: tokens[i].type, ref: true };
                    if (tokens[i].name)
                        param.varName = tokens[i].name;
                    parts.push(param);
                    parameters.push(param);
                }
                else if (token == 256 /* Image */) {
                    pushCurrentLabel();
                    labelStack.push({ kind: "image", uri: tokens[i].content });
                }
                else if (token == 512 /* TaggedText */) {
                    pushCurrentLabel();
                    labelStack.push({ kind: "label", text: tokens[i].content, cssClass: tokens[i].type });
                }
                else if (token == 32 /* Pipe */) {
                    parts.push({ kind: "break" });
                }
                /* tslint:enable:possible-timing-attack */
            }
            pushLabels();
            return { parts: parts, parameters: parameters };
            function eatToken(pred, skipCurrent) {
                if (skipCurrent === void 0) { skipCurrent = false; }
                var current = "";
                if (skipCurrent)
                    strIndex++;
                while (strIndex < def.length && pred(def[strIndex])) {
                    current += def[strIndex];
                    ++strIndex;
                }
                if (current)
                    strIndex--;
                return current;
            }
            function eatEnclosure(endMark) {
                var content = eatToken(function (c) { return c !== endMark; }, true);
                if (def[strIndex + 1] !== endMark)
                    return undefined;
                ++strIndex;
                return content;
            }
            function collapseLabels() {
                var combined = "";
                var newStack = [];
                for (var _i = 0, labelStack_1 = labelStack; _i < labelStack_1.length; _i++) {
                    var item = labelStack_1[_i];
                    if (isBlockPart(item)) {
                        newStack.push({
                            content: combined,
                            styles: 0
                        });
                        newStack.push(item);
                        combined = "";
                    }
                    else {
                        combined += item.content;
                        if (item.endingToken) {
                            combined += item.endingToken;
                        }
                    }
                }
                labelStack = newStack;
                if (combined) {
                    labelStack.push({
                        content: combined,
                        styles: 0
                    });
                }
                // Clear the style state as well
                stack = [];
                open = 0;
            }
            function pushLabels() {
                pushCurrentLabel();
                if (open) {
                    collapseLabels();
                }
                while (labelStack.length) {
                    var label = labelStack.shift();
                    if (isBlockPart(label)) {
                        parts.push(label);
                    }
                    else {
                        if (!label.content)
                            continue;
                        var styles = [];
                        if (label.styles & 10 /* Bold */)
                            styles.push("bold");
                        if (label.styles & 5 /* Italics */)
                            styles.push("italics");
                        parts.push({ kind: "label", text: label.content, style: styles });
                    }
                }
            }
            function pushCurrentLabel(endingToken) {
                labelStack.push({
                    content: currentLabel,
                    styles: open,
                    endingToken: endingToken
                });
                currentLabel = "";
            }
        }
        pxtc.parseBlockDefinition = parseBlockDefinition;
        function isBlockPart(p) {
            return !!(p.kind);
        }
        // TODO should be internal
        var hex;
        (function (hex) {
            function isSetupFor(extInfo) {
                return hex.currentSetup == extInfo.sha;
            }
            hex.isSetupFor = isSetupFor;
            hex.currentSetup = null;
            function parseChecksumBlock(buf, pos) {
                if (pos === void 0) { pos = 0; }
                var magic = pxt.HF2.read32(buf, pos);
                if ((magic & 0x7fffffff) != 0x07eeb07c) {
                    pxt.log("no checksum block magic");
                    return null;
                }
                var endMarkerPos = pxt.HF2.read32(buf, pos + 4);
                var endMarker = pxt.HF2.read32(buf, pos + 8);
                if (endMarkerPos & 3) {
                    pxt.log("invalid end marker position");
                    return null;
                }
                var pageSize = 1 << (endMarker & 0xff);
                if (pageSize != pxt.appTarget.compile.flashCodeAlign) {
                    pxt.log("invalid page size: " + pageSize);
                    return null;
                }
                var blk = {
                    magic: magic,
                    endMarkerPos: endMarkerPos,
                    endMarker: endMarker,
                    regions: []
                };
                for (var i = pos + 12; i < buf.length - 7; i += 8) {
                    var r = {
                        start: pageSize * pxt.HF2.read16(buf, i),
                        length: pageSize * pxt.HF2.read16(buf, i + 2),
                        checksum: pxt.HF2.read32(buf, i + 4)
                    };
                    if (r.length && r.checksum) {
                        blk.regions.push(r);
                    }
                    else {
                        break;
                    }
                }
                //console.log(hexDump(buf), blk)
                return blk;
            }
            hex.parseChecksumBlock = parseChecksumBlock;
        })(hex = pxtc.hex || (pxtc.hex = {}));
        var UF2;
        (function (UF2) {
            UF2.UF2_MAGIC_START0 = 0x0A324655; // "UF2\n"
            UF2.UF2_MAGIC_START1 = 0x9E5D5157; // Randomly selected
            UF2.UF2_MAGIC_END = 0x0AB16F30; // Ditto
            UF2.UF2_FLAG_NONE = 0x00000000;
            UF2.UF2_FLAG_NOFLASH = 0x00000001;
            UF2.UF2_FLAG_FILE = 0x00001000;
            function parseBlock(block) {
                var wordAt = function (k) {
                    return (block[k] + (block[k + 1] << 8) + (block[k + 2] << 16) + (block[k + 3] << 24)) >>> 0;
                };
                if (!block || block.length != 512 ||
                    wordAt(0) != UF2.UF2_MAGIC_START0 || wordAt(4) != UF2.UF2_MAGIC_START1 ||
                    wordAt(block.length - 4) != UF2.UF2_MAGIC_END)
                    return null;
                var flags = wordAt(8);
                var payloadSize = wordAt(16);
                if (payloadSize > 476)
                    payloadSize = 256;
                var filename = null;
                if (flags & UF2.UF2_FLAG_FILE) {
                    var fnbuf = block.slice(32 + payloadSize);
                    var len = fnbuf.indexOf(0);
                    if (len >= 0) {
                        fnbuf = fnbuf.slice(0, len);
                    }
                    filename = pxtc.U.fromUTF8(pxtc.U.uint8ArrayToString(fnbuf));
                }
                return {
                    flags: flags,
                    targetAddr: wordAt(12),
                    payloadSize: payloadSize,
                    blockNo: wordAt(20),
                    numBlocks: wordAt(24),
                    fileSize: wordAt(28),
                    data: block.slice(32, 32 + payloadSize),
                    filename: filename
                };
            }
            UF2.parseBlock = parseBlock;
            function parseFile(blocks) {
                var r = [];
                for (var i = 0; i < blocks.length; i += 512) {
                    var b = parseBlock(blocks.slice(i, i + 512));
                    if (b)
                        r.push(b);
                }
                return r;
            }
            UF2.parseFile = parseFile;
            function toBin(blocks) {
                if (blocks.length < 512)
                    return null;
                var curraddr = -1;
                var appstartaddr = -1;
                var bufs = [];
                for (var i = 0; i < blocks.length; ++i) {
                    var ptr = i * 512;
                    var bl = parseBlock(blocks.slice(ptr, ptr + 512));
                    if (!bl)
                        continue;
                    if (curraddr == -1) {
                        curraddr = bl.targetAddr;
                        appstartaddr = curraddr;
                    }
                    var padding = bl.targetAddr - curraddr;
                    if (padding < 0 || padding % 4 || padding > 1024 * 1024)
                        continue;
                    if (padding > 0)
                        bufs.push(new Uint8Array(padding));
                    bufs.push(blocks.slice(ptr + 32, ptr + 32 + bl.payloadSize));
                    curraddr = bl.targetAddr + bl.payloadSize;
                }
                var len = 0;
                for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
                    var b = bufs_1[_i];
                    len += b.length;
                }
                if (len == 0)
                    return null;
                var r = new Uint8Array(len);
                var dst = 0;
                for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
                    var b = bufs_2[_a];
                    for (var i = 0; i < b.length; ++i)
                        r[dst++] = b[i];
                }
                return {
                    buf: r,
                    start: appstartaddr,
                };
            }
            UF2.toBin = toBin;
            function hasAddr(b, a) {
                if (!b)
                    return false;
                return b.targetAddr <= a && a < b.targetAddr + b.payloadSize;
            }
            function readBytes(blocks, addr, length) {
                var res = new Uint8Array(length);
                var bl;
                for (var i = 0; i < length; ++i, ++addr) {
                    if (!hasAddr(bl, addr))
                        bl = blocks.filter(function (b) { return hasAddr(b, addr); })[0];
                    if (bl)
                        res[i] = bl.data[addr - bl.targetAddr];
                }
                return res;
            }
            UF2.readBytes = readBytes;
            function setWord(block, ptr, v) {
                block[ptr] = (v & 0xff);
                block[ptr + 1] = ((v >> 8) & 0xff);
                block[ptr + 2] = ((v >> 16) & 0xff);
                block[ptr + 3] = ((v >> 24) & 0xff);
            }
            function newBlockFile() {
                return {
                    currBlock: null,
                    currPtr: -1,
                    blocks: [],
                    ptrs: [],
                    filesize: 0
                };
            }
            UF2.newBlockFile = newBlockFile;
            function finalizeFile(f) {
                for (var i = 0; i < f.blocks.length; ++i) {
                    setWord(f.blocks[i], 20, i);
                    setWord(f.blocks[i], 24, f.blocks.length);
                    if (f.filename)
                        setWord(f.blocks[i], 28, f.filesize);
                }
            }
            UF2.finalizeFile = finalizeFile;
            function concatFiles(fs) {
                for (var _i = 0, fs_1 = fs; _i < fs_1.length; _i++) {
                    var f = fs_1[_i];
                    finalizeFile(f);
                    f.filename = null;
                }
                var r = newBlockFile();
                r.blocks = pxtc.U.concat(fs.map(function (f) { return f.blocks; }));
                for (var _a = 0, fs_2 = fs; _a < fs_2.length; _a++) {
                    var f = fs_2[_a];
                    f.blocks = [];
                }
                return r;
            }
            UF2.concatFiles = concatFiles;
            function serializeFile(f) {
                finalizeFile(f);
                var res = "";
                for (var _i = 0, _a = f.blocks; _i < _a.length; _i++) {
                    var b = _a[_i];
                    res += pxtc.Util.uint8ArrayToString(b);
                }
                return res;
            }
            UF2.serializeFile = serializeFile;
            function readBytesFromFile(f, addr, length) {
                //console.log(`read @${addr} len=${length}`)
                var needAddr = addr >> 8;
                var bl;
                if (needAddr == f.currPtr)
                    bl = f.currBlock;
                else {
                    for (var i = 0; i < f.ptrs.length; ++i) {
                        if (f.ptrs[i] == needAddr) {
                            bl = f.blocks[i];
                            break;
                        }
                    }
                    if (bl) {
                        f.currPtr = needAddr;
                        f.currBlock = bl;
                    }
                }
                if (!bl)
                    return null;
                var res = new Uint8Array(length);
                var toRead = Math.min(length, 256 - (addr & 0xff));
                pxtc.U.memcpy(res, 0, bl, (addr & 0xff) + 32, toRead);
                var leftOver = length - toRead;
                if (leftOver > 0) {
                    var le = readBytesFromFile(f, addr + toRead, leftOver);
                    pxtc.U.memcpy(res, toRead, le);
                }
                return res;
            }
            UF2.readBytesFromFile = readBytesFromFile;
            function writeBytes(f, addr, bytes, flags) {
                if (flags === void 0) { flags = 0; }
                var currBlock = f.currBlock;
                var needAddr = addr >> 8;
                // account for unaligned writes
                var thisChunk = 256 - (addr & 0xff);
                if (bytes.length > thisChunk) {
                    var b = new Uint8Array(bytes);
                    writeBytes(f, addr, b.slice(0, thisChunk));
                    while (thisChunk < bytes.length) {
                        var nextOff = Math.min(thisChunk + 256, bytes.length);
                        writeBytes(f, addr + thisChunk, b.slice(thisChunk, nextOff));
                        thisChunk = nextOff;
                    }
                    return;
                }
                if (needAddr != f.currPtr) {
                    var i = 0;
                    currBlock = null;
                    for (var i_1 = 0; i_1 < f.ptrs.length; ++i_1) {
                        if (f.ptrs[i_1] == needAddr) {
                            currBlock = f.blocks[i_1];
                            break;
                        }
                    }
                    if (!currBlock) {
                        currBlock = new Uint8Array(512);
                        if (f.filename)
                            flags |= UF2.UF2_FLAG_FILE;
                        setWord(currBlock, 0, UF2.UF2_MAGIC_START0);
                        setWord(currBlock, 4, UF2.UF2_MAGIC_START1);
                        setWord(currBlock, 8, flags);
                        setWord(currBlock, 12, needAddr << 8);
                        setWord(currBlock, 16, 256);
                        setWord(currBlock, 20, f.blocks.length);
                        setWord(currBlock, 512 - 4, UF2.UF2_MAGIC_END);
                        if (f.filename) {
                            pxtc.U.memcpy(currBlock, 32 + 256, pxtc.U.stringToUint8Array(pxtc.U.toUTF8(f.filename)));
                        }
                        f.blocks.push(currBlock);
                        f.ptrs.push(needAddr);
                    }
                    f.currPtr = needAddr;
                    f.currBlock = currBlock;
                }
                var p = (addr & 0xff) + 32;
                for (var i = 0; i < bytes.length; ++i)
                    currBlock[p + i] = bytes[i];
                f.filesize = Math.max(f.filesize, bytes.length + addr);
            }
            UF2.writeBytes = writeBytes;
            function writeHex(f, hex) {
                var upperAddr = "0000";
                for (var i = 0; i < hex.length; ++i) {
                    var m = /:02000004(....)/.exec(hex[i]);
                    if (m) {
                        upperAddr = m[1];
                    }
                    m = /^:..(....)00(.*)[0-9A-F][0-9A-F]$/.exec(hex[i]);
                    if (m) {
                        var newAddr = parseInt(upperAddr + m[1], 16);
                        var hh = m[2];
                        var arr = [];
                        for (var j = 0; j < hh.length; j += 2) {
                            arr.push(parseInt(hh[j] + hh[j + 1], 16));
                        }
                        writeBytes(f, newAddr, arr);
                    }
                }
            }
            UF2.writeHex = writeHex;
        })(UF2 = pxtc.UF2 || (pxtc.UF2 = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var ir;
        (function (ir) {
            var CallingConvention;
            (function (CallingConvention) {
                CallingConvention[CallingConvention["Plain"] = 0] = "Plain";
                CallingConvention[CallingConvention["Async"] = 1] = "Async";
                CallingConvention[CallingConvention["Promise"] = 2] = "Promise";
            })(CallingConvention = ir.CallingConvention || (ir.CallingConvention = {}));
        })(ir = pxtc.ir || (pxtc.ir = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
// See https://github.com/Microsoft/TouchDevelop-backend/blob/master/docs/streams.md
var pxt;
(function (pxt) {
    var streams;
    (function (streams) {
        function createStreamAsync(target, name) {
            return pxt.Cloud.privatePostAsync("streams", { target: target, name: name || 'data' }).then(function (j) { return j; });
        }
        streams.createStreamAsync = createStreamAsync;
        function postPayloadAsync(stream, data) {
            pxt.Util.assert(!!stream.privatekey);
            return pxt.Cloud.privatePostAsync(stream.id + "/data?privatekey=" + stream.privatekey, data);
        }
        streams.postPayloadAsync = postPayloadAsync;
    })(streams = pxt.streams || (pxt.streams = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var PatternUnits;
        (function (PatternUnits) {
            PatternUnits[PatternUnits["userSpaceOnUse"] = 0] = "userSpaceOnUse";
            PatternUnits[PatternUnits["objectBoundingBox"] = 1] = "objectBoundingBox";
        })(PatternUnits = svgUtil.PatternUnits || (svgUtil.PatternUnits = {}));
        var LengthUnit;
        (function (LengthUnit) {
            LengthUnit[LengthUnit["em"] = 0] = "em";
            LengthUnit[LengthUnit["ex"] = 1] = "ex";
            LengthUnit[LengthUnit["px"] = 2] = "px";
            LengthUnit[LengthUnit["in"] = 3] = "in";
            LengthUnit[LengthUnit["cm"] = 4] = "cm";
            LengthUnit[LengthUnit["mm"] = 5] = "mm";
            LengthUnit[LengthUnit["pt"] = 6] = "pt";
            LengthUnit[LengthUnit["pc"] = 7] = "pc";
            LengthUnit[LengthUnit["percent"] = 8] = "percent";
        })(LengthUnit = svgUtil.LengthUnit || (svgUtil.LengthUnit = {}));
        var BaseElement = /** @class */ (function () {
            function BaseElement(type) {
                this.el = elt(type);
            }
            BaseElement.prototype.attr = function (attributes) {
                var _this = this;
                Object.keys(attributes).forEach(function (at) {
                    _this.setAttribute(at, attributes[at]);
                });
                return this;
            };
            BaseElement.prototype.setAttribute = function (name, value) {
                this.el.setAttribute(name, value.toString());
                return this;
            };
            BaseElement.prototype.id = function (id) {
                return this.setAttribute("id", id);
            };
            BaseElement.prototype.setClass = function () {
                var classes = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    classes[_i] = arguments[_i];
                }
                return this.setAttribute("class", classes.join(" "));
            };
            BaseElement.prototype.appendClass = function (className) {
                addClass(this.el, className);
                return this;
            };
            BaseElement.prototype.removeClass = function (className) {
                removeClass(this.el, className);
            };
            BaseElement.prototype.title = function (text) {
                if (!this.titleElement) {
                    this.titleElement = elt("title");
                    // Title has to be the first child in the DOM
                    if (this.el.firstChild) {
                        this.el.insertBefore(this.titleElement, this.el.firstChild);
                    }
                    else {
                        this.el.appendChild(this.titleElement);
                    }
                }
                this.titleElement.textContent = text;
            };
            BaseElement.prototype.setVisible = function (visible) {
                return this.setAttribute("visibility", visible ? "visible" : "hidden");
            };
            return BaseElement;
        }());
        svgUtil.BaseElement = BaseElement;
        var DrawContext = /** @class */ (function (_super) {
            __extends(DrawContext, _super);
            function DrawContext() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DrawContext.prototype.draw = function (type) {
                var el = drawable(type /*FIXME?*/);
                this.el.appendChild(el.el);
                return el;
            };
            DrawContext.prototype.element = function (type, cb) {
                cb(this.draw(type /*FIXME?*/));
                return this;
            };
            DrawContext.prototype.group = function () {
                var g = new Group();
                this.el.appendChild(g.el);
                return g;
            };
            DrawContext.prototype.appendChild = function (child) {
                this.el.appendChild(child.el);
            };
            DrawContext.prototype.onDown = function (handler) {
                svgUtil.events.down(this.el, handler);
                return this;
            };
            DrawContext.prototype.onUp = function (handler) {
                svgUtil.events.up(this.el, handler);
                return this;
            };
            DrawContext.prototype.onMove = function (handler) {
                svgUtil.events.move(this.el, handler);
                return this;
            };
            DrawContext.prototype.onEnter = function (handler) {
                svgUtil.events.enter(this.el, handler);
                return this;
            };
            DrawContext.prototype.onLeave = function (handler) {
                svgUtil.events.leave(this.el, handler);
                return this;
            };
            DrawContext.prototype.onClick = function (handler) {
                svgUtil.events.click(this.el, handler);
                return this;
            };
            return DrawContext;
        }(BaseElement));
        svgUtil.DrawContext = DrawContext;
        var SVG = /** @class */ (function (_super) {
            __extends(SVG, _super);
            function SVG(parent) {
                var _this = _super.call(this, "svg") || this;
                if (parent) {
                    parent.appendChild(_this.el);
                }
                return _this;
            }
            SVG.prototype.define = function (cb) {
                if (!this.defs) {
                    this.defs = new DefsElement(this.el);
                }
                cb(this.defs);
                return this;
            };
            return SVG;
        }(DrawContext));
        svgUtil.SVG = SVG;
        var Group = /** @class */ (function (_super) {
            __extends(Group, _super);
            function Group(parent) {
                var _this = _super.call(this, "g") || this;
                if (parent) {
                    parent.appendChild(_this.el);
                }
                return _this;
            }
            Group.prototype.translate = function (x, y) {
                this.left = x;
                this.top = y;
                return this.updateTransform();
            };
            Group.prototype.scale = function (factor) {
                this.scaleFactor = factor;
                return this.updateTransform();
            };
            Group.prototype.def = function () {
                return new DefsElement(this.el);
            };
            Group.prototype.style = function () {
                return new StyleElement(this.el);
            };
            Group.prototype.updateTransform = function () {
                var transform = "";
                if (this.left != undefined) {
                    transform += "translate(" + this.left + " " + this.top + ")";
                }
                if (this.scaleFactor != undefined) {
                    transform += " scale(" + this.scaleFactor + ")";
                }
                this.setAttribute("transform", transform);
                return this;
            };
            return Group;
        }(DrawContext));
        svgUtil.Group = Group;
        var Pattern = /** @class */ (function (_super) {
            __extends(Pattern, _super);
            function Pattern() {
                return _super.call(this, "pattern") || this;
            }
            Pattern.prototype.units = function (kind) {
                return this.setAttribute("patternUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Pattern.prototype.contentUnits = function (kind) {
                return this.setAttribute("patternContentUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Pattern.prototype.size = function (width, height) {
                this.setAttribute("width", width);
                this.setAttribute("height", height);
                return this;
            };
            return Pattern;
        }(DrawContext));
        svgUtil.Pattern = Pattern;
        var DefsElement = /** @class */ (function (_super) {
            __extends(DefsElement, _super);
            function DefsElement(parent) {
                var _this = _super.call(this, "defs") || this;
                parent.appendChild(_this.el);
                return _this;
            }
            DefsElement.prototype.create = function (type, id) {
                var el;
                switch (type) {
                    case "path":
                        el = new Path();
                        break;
                    case "pattern":
                        el = new Pattern();
                        break;
                    case "radialGradient":
                        el = new RadialGradient();
                        break;
                    case "linearGradient":
                        el = new LinearGradient();
                        break;
                    case "clipPath":
                        el = new ClipPath();
                        break;
                    default: el = new BaseElement(type);
                }
                el.id(id);
                this.el.appendChild(el.el);
                return el;
            };
            return DefsElement;
        }(BaseElement));
        svgUtil.DefsElement = DefsElement;
        var StyleElement = /** @class */ (function (_super) {
            __extends(StyleElement, _super);
            function StyleElement(parent) {
                var _this = _super.call(this, "style") || this;
                parent.appendChild(_this.el);
                return _this;
            }
            StyleElement.prototype.content = function (css) {
                this.el.textContent = css;
            };
            return StyleElement;
        }(BaseElement));
        svgUtil.StyleElement = StyleElement;
        var Drawable = /** @class */ (function (_super) {
            __extends(Drawable, _super);
            function Drawable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Drawable.prototype.at = function (x, y) {
                this.setAttribute("x", x);
                this.setAttribute("y", y);
                return this;
            };
            Drawable.prototype.moveTo = function (x, y) {
                return this.at(x, y);
            };
            Drawable.prototype.fill = function (color, opacity) {
                this.setAttribute("fill", color);
                if (opacity != undefined) {
                    this.opacity(opacity);
                }
                return this;
            };
            Drawable.prototype.opacity = function (opacity) {
                return this.setAttribute("fill-opacity", opacity);
            };
            Drawable.prototype.stroke = function (color, width) {
                this.setAttribute("stroke", color);
                if (width != undefined) {
                    this.strokeWidth(width);
                }
                return this;
            };
            Drawable.prototype.strokeWidth = function (width) {
                return this.setAttribute("stroke-width", width);
            };
            Drawable.prototype.strokeOpacity = function (opacity) {
                return this.setAttribute("stroke-opacity", opacity);
            };
            Drawable.prototype.clipPath = function (url) {
                return this.setAttribute("clip-path", url);
            };
            return Drawable;
        }(DrawContext));
        svgUtil.Drawable = Drawable;
        var Text = /** @class */ (function (_super) {
            __extends(Text, _super);
            function Text(text) {
                var _this = _super.call(this, "text") || this;
                if (text != undefined) {
                    _this.text(text);
                }
                return _this;
            }
            Text.prototype.text = function (text) {
                this.el.textContent = text;
                return this;
            };
            Text.prototype.fontFamily = function (family) {
                return this.setAttribute("font-family", family);
            };
            Text.prototype.fontSize = function (size, units) {
                return this.setAttribute("font-size", lengthWithUnits(size, units));
            };
            Text.prototype.offset = function (dx, dy, units) {
                if (dx !== 0) {
                    this.setAttribute("dx", lengthWithUnits(dx, units));
                }
                if (dy !== 0) {
                    this.setAttribute("dy", lengthWithUnits(dy, units));
                }
                return this;
            };
            Text.prototype.anchor = function (type) {
                return this.setAttribute("text-anchor", type);
            };
            return Text;
        }(Drawable));
        svgUtil.Text = Text;
        var Rect = /** @class */ (function (_super) {
            __extends(Rect, _super);
            function Rect() {
                return _super.call(this, "rect") || this;
            }
            ;
            Rect.prototype.width = function (width, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("width", lengthWithUnits(width, unit));
            };
            Rect.prototype.height = function (height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("height", lengthWithUnits(height, unit));
            };
            Rect.prototype.corner = function (radius) {
                return this.corners(radius, radius);
            };
            Rect.prototype.corners = function (rx, ry) {
                this.setAttribute("rx", rx);
                this.setAttribute("ry", ry);
                return this;
            };
            Rect.prototype.size = function (width, height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                this.width(width, unit);
                this.height(height, unit);
                return this;
            };
            return Rect;
        }(Drawable));
        svgUtil.Rect = Rect;
        var Circle = /** @class */ (function (_super) {
            __extends(Circle, _super);
            function Circle() {
                return _super.call(this, "circle") || this;
            }
            Circle.prototype.at = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            Circle.prototype.radius = function (r) {
                return this.setAttribute("r", r);
            };
            return Circle;
        }(Drawable));
        svgUtil.Circle = Circle;
        var Ellipse = /** @class */ (function (_super) {
            __extends(Ellipse, _super);
            function Ellipse() {
                return _super.call(this, "ellipse") || this;
            }
            Ellipse.prototype.at = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            Ellipse.prototype.radius = function (rx, ry) {
                this.setAttribute("rx", rx);
                this.setAttribute("ry", ry);
                return this;
            };
            return Ellipse;
        }(Drawable));
        var Line = /** @class */ (function (_super) {
            __extends(Line, _super);
            function Line() {
                return _super.call(this, "line") || this;
            }
            Line.prototype.at = function (x1, y1, x2, y2) {
                this.from(x1, y1);
                if (x2 != undefined && y2 != undefined) {
                    this.to(x2, y2);
                }
                return this;
            };
            Line.prototype.from = function (x1, y1) {
                this.setAttribute("x1", x1);
                this.setAttribute("y1", y1);
                return this;
            };
            Line.prototype.to = function (x2, y2) {
                this.setAttribute("x2", x2);
                this.setAttribute("y2", y2);
                return this;
            };
            return Line;
        }(Drawable));
        svgUtil.Line = Line;
        var PolyElement = /** @class */ (function (_super) {
            __extends(PolyElement, _super);
            function PolyElement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PolyElement.prototype.points = function (points) {
                return this.setAttribute("points", points);
            };
            PolyElement.prototype.with = function (points) {
                return this.points(points.map(function (_a) {
                    var x = _a.x, y = _a.y;
                    return x + " " + y;
                }).join(","));
            };
            return PolyElement;
        }(Drawable));
        svgUtil.PolyElement = PolyElement;
        var Polyline = /** @class */ (function (_super) {
            __extends(Polyline, _super);
            function Polyline() {
                return _super.call(this, "polyline") || this;
            }
            return Polyline;
        }(PolyElement));
        svgUtil.Polyline = Polyline;
        var Polygon = /** @class */ (function (_super) {
            __extends(Polygon, _super);
            function Polygon() {
                return _super.call(this, "polygon") || this;
            }
            return Polygon;
        }(PolyElement));
        svgUtil.Polygon = Polygon;
        var Path = /** @class */ (function (_super) {
            __extends(Path, _super);
            function Path() {
                var _this = _super.call(this, "path") || this;
                _this.d = new PathContext();
                return _this;
            }
            Path.prototype.update = function () {
                return this.setAttribute("d", this.d.toAttribute());
            };
            Path.prototype.path = function (cb) {
                cb(this.d);
                return this.update();
            };
            return Path;
        }(Drawable));
        svgUtil.Path = Path;
        var Image = /** @class */ (function (_super) {
            __extends(Image, _super);
            function Image() {
                return _super.call(this, "image") || this;
            }
            Image.prototype.src = function (url) {
                return this.setAttribute("href", url);
            };
            Image.prototype.width = function (width, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("width", lengthWithUnits(width, unit));
            };
            Image.prototype.height = function (height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                return this.setAttribute("height", lengthWithUnits(height, unit));
            };
            Image.prototype.size = function (width, height, unit) {
                if (unit === void 0) { unit = LengthUnit.px; }
                this.width(width, unit);
                this.height(height, unit);
                return this;
            };
            return Image;
        }(Drawable));
        svgUtil.Image = Image;
        var Gradient = /** @class */ (function (_super) {
            __extends(Gradient, _super);
            function Gradient() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Gradient.prototype.units = function (kind) {
                return this.setAttribute("gradientUnits", kind === PatternUnits.objectBoundingBox ? "objectBoundingBox" : "userSpaceOnUse");
            };
            Gradient.prototype.stop = function (offset, color, opacity) {
                var s = elt("stop");
                s.setAttribute("offset", offset + "%");
                if (color != undefined) {
                    s.setAttribute("stop-color", color);
                }
                if (opacity != undefined) {
                    s.setAttribute("stop-opacity", opacity);
                }
                this.el.appendChild(s);
                return this;
            };
            return Gradient;
        }(BaseElement));
        svgUtil.Gradient = Gradient;
        var LinearGradient = /** @class */ (function (_super) {
            __extends(LinearGradient, _super);
            function LinearGradient() {
                return _super.call(this, "linearGradient") || this;
            }
            LinearGradient.prototype.start = function (x1, y1) {
                this.setAttribute("x1", x1);
                this.setAttribute("y1", y1);
                return this;
            };
            LinearGradient.prototype.end = function (x2, y2) {
                this.setAttribute("x2", x2);
                this.setAttribute("y2", y2);
                return this;
            };
            return LinearGradient;
        }(Gradient));
        svgUtil.LinearGradient = LinearGradient;
        var RadialGradient = /** @class */ (function (_super) {
            __extends(RadialGradient, _super);
            function RadialGradient() {
                return _super.call(this, "radialGradient") || this;
            }
            RadialGradient.prototype.center = function (cx, cy) {
                this.setAttribute("cx", cx);
                this.setAttribute("cy", cy);
                return this;
            };
            RadialGradient.prototype.focus = function (fx, fy, fr) {
                this.setAttribute("fx", fx);
                this.setAttribute("fy", fy);
                this.setAttribute("fr", fr);
                return this;
            };
            RadialGradient.prototype.radius = function (r) {
                return this.setAttribute("r", r);
            };
            return RadialGradient;
        }(Gradient));
        svgUtil.RadialGradient = RadialGradient;
        var ClipPath = /** @class */ (function (_super) {
            __extends(ClipPath, _super);
            function ClipPath() {
                return _super.call(this, "clipPath") || this;
            }
            ClipPath.prototype.clipPathUnits = function (objectBoundingBox) {
                if (objectBoundingBox) {
                    return this.setAttribute("clipPathUnits", "objectBoundingBox");
                }
                else {
                    return this.setAttribute("clipPathUnits", "userSpaceOnUse");
                }
            };
            return ClipPath;
        }(DrawContext));
        svgUtil.ClipPath = ClipPath;
        function elt(type) {
            var el = document.createElementNS("http://www.w3.org/2000/svg", type);
            return el;
        }
        function drawable(type) {
            switch (type) {
                case "text": return new Text();
                case "circle": return new Circle();
                case "rect": return new Rect();
                case "line": return new Line();
                case "polygon": return new Polygon();
                case "polyline": return new Polyline();
                case "path": return new Path();
                default: return new Drawable(type);
            }
        }
        var PathContext = /** @class */ (function () {
            function PathContext() {
                this.ops = [];
            }
            PathContext.prototype.clear = function () {
                this.ops = [];
            };
            PathContext.prototype.moveTo = function (x, y) {
                return this.op("M", x, y);
            };
            PathContext.prototype.moveBy = function (dx, dy) {
                return this.op("m", dx, dy);
            };
            PathContext.prototype.lineTo = function (x, y) {
                return this.op("L", x, y);
            };
            PathContext.prototype.lineBy = function (dx, dy) {
                return this.op("l", dx, dy);
            };
            PathContext.prototype.cCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
                return this.op("C", c1x, c1y, c2x, c2y, x, y);
            };
            PathContext.prototype.cCurveBy = function (dc1x, dc1y, dc2x, dc2y, dx, dy) {
                return this.op("c", dc1x, dc1y, dc2x, dc2y, dx, dy);
            };
            PathContext.prototype.qCurveTo = function (cx, cy, x, y) {
                return this.op("Q", cx, cy, x, y);
            };
            PathContext.prototype.qCurveBy = function (dcx, dcy, dx, dy) {
                return this.op("q", dcx, dcy, dx, dy);
            };
            PathContext.prototype.sCurveTo = function (cx, cy, x, y) {
                return this.op("S", cx, cy, x, y);
            };
            PathContext.prototype.sCurveBy = function (dcx, dcy, dx, dy) {
                return this.op("s", dcx, dcy, dx, dy);
            };
            PathContext.prototype.tCurveTo = function (x, y) {
                return this.op("T", x, y);
            };
            PathContext.prototype.tCurveBy = function (dx, dy) {
                return this.op("t", dx, dy);
            };
            PathContext.prototype.arcTo = function (rx, ry, xRotate, large, sweepClockwise, x, y) {
                return this.op("A", rx, ry, xRotate, large ? 1 : 0, sweepClockwise ? 1 : 0, x, y);
            };
            PathContext.prototype.arcBy = function (rx, ry, xRotate, large, sweepClockwise, x, y) {
                return this.op("a", rx, ry, xRotate, large ? 1 : 0, sweepClockwise ? 1 : 0, x, y);
            };
            PathContext.prototype.close = function () {
                return this.op("z");
            };
            PathContext.prototype.toAttribute = function () {
                return this.ops.map(function (op) { return op.op + " " + op.args.join(" "); }).join(" ");
            };
            PathContext.prototype.op = function (op) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.ops.push({
                    op: op,
                    args: args
                });
                return this;
            };
            return PathContext;
        }());
        svgUtil.PathContext = PathContext;
        function lengthWithUnits(value, unit) {
            switch (unit) {
                case LengthUnit.em: return value + "em";
                case LengthUnit.ex: return value + "ex";
                case LengthUnit.px: return value + "px";
                case LengthUnit.in: return value + "in";
                case LengthUnit.cm: return value + "cm";
                case LengthUnit.mm: return value + "mm";
                case LengthUnit.pt: return value + "pt";
                case LengthUnit.pc: return value + "pc";
                case LengthUnit.percent: return value + "%";
                default: return value.toString();
            }
        }
        function addClass(el, cls) {
            if (el.classList)
                el.classList.add(cls);
            else if (el.className.baseVal.indexOf(cls) < 0)
                el.className.baseVal += ' ' + cls;
        }
        function removeClass(el, cls) {
            if (el.classList)
                el.classList.remove(cls);
            else
                el.className.baseVal = el.className.baseVal.replace(cls, '').replace(/\s{2,}/, ' ');
        }
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var events;
        (function (events) {
            function isTouchEnabled() {
                return typeof window !== "undefined" &&
                    ('ontouchstart' in window // works on most browsers
                        || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
            }
            events.isTouchEnabled = isTouchEnabled;
            function hasPointerEvents() {
                return typeof window != "undefined" && !!window.PointerEvent;
            }
            events.hasPointerEvents = hasPointerEvents;
            function down(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerdown", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("mousedown", handler);
                    el.addEventListener("touchstart", handler);
                }
                else {
                    el.addEventListener("mousedown", handler);
                }
            }
            events.down = down;
            function up(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerup", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("mouseup", handler);
                }
                else {
                    el.addEventListener("mouseup", handler);
                }
            }
            events.up = up;
            function enter(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerover", function (e) {
                        handler(!!(e.buttons & 1));
                    });
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchstart", function (e) {
                        handler(true);
                    });
                }
                else {
                    el.addEventListener("mouseover", function (e) {
                        handler(!!(e.buttons & 1));
                    });
                }
            }
            events.enter = enter;
            function leave(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointerleave", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchend", handler);
                }
                else {
                    el.addEventListener("mouseleave", handler);
                }
            }
            events.leave = leave;
            function move(el, handler) {
                if (hasPointerEvents()) {
                    el.addEventListener("pointermove", handler);
                }
                else if (isTouchEnabled()) {
                    el.addEventListener("touchmove", handler);
                }
                else {
                    el.addEventListener("mousemove", handler);
                }
            }
            events.move = move;
            function click(el, handler) {
                el.addEventListener("click", handler);
            }
            events.click = click;
        })(events = svgUtil.events || (svgUtil.events = {}));
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
(function (pxt) {
    var svgUtil;
    (function (svgUtil) {
        var helpers;
        (function (helpers) {
            var CenteredText = /** @class */ (function (_super) {
                __extends(CenteredText, _super);
                function CenteredText() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CenteredText.prototype.at = function (cx, cy) {
                    this.cx = cx;
                    this.cy = cy;
                    this.rePosition();
                    return this;
                };
                CenteredText.prototype.text = function (text, fontSizePixels) {
                    if (fontSizePixels === void 0) { fontSizePixels = 12; }
                    _super.prototype.text.call(this, text);
                    this.fontSizePixels = fontSizePixels;
                    this.setAttribute("font-size", fontSizePixels + "px");
                    this.rePosition();
                    return this;
                };
                CenteredText.prototype.rePosition = function () {
                    if (this.cx == undefined || this.cy == undefined || this.fontSizePixels == undefined) {
                        return;
                    }
                    this.setAttribute("x", this.cx);
                    this.setAttribute("y", this.cy);
                    this.setAttribute("text-anchor", "middle");
                    this.setAttribute("alignment-baseline", "middle");
                };
                return CenteredText;
            }(svgUtil.Text));
            helpers.CenteredText = CenteredText;
        })(helpers = svgUtil.helpers || (svgUtil.helpers = {}));
    })(svgUtil = pxt.svgUtil || (pxt.svgUtil = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var toolbox;
    (function (toolbox) {
        toolbox.blockColors = {
            loops: '#107c10',
            logic: '#006970',
            math: '#712672',
            images: '#5C2D91',
            variables: '#A80000',
            functions: '#005a9e',
            text: '#996600',
            arrays: '#A94400',
            advanced: '#3c3c3c',
            addpackage: '#717171',
            search: '#000',
            debug: '#e03030',
            default: '#dddddd'
        };
        toolbox.blockIcons = {
            loops: '\uf01e',
            logic: '\uf074',
            math: '\uf1ec',
            variables: '\uf039',
            functions: '\uf109',
            text: '\uf035',
            arrays: '\uf0cb',
            advancedcollapsed: '\uf078',
            advancedexpanded: '\uf077',
            more: '\uf141',
            addpackage: '\uf055',
            search: '\uf002',
            debug: '\uf111',
            default: '\uf12e'
        };
        var toolboxStyle;
        var toolboxStyleBuffer = '';
        function appendToolboxIconCss(className, i) {
            if (toolboxStyleBuffer.indexOf(className) > -1)
                return;
            if (i.length === 1) {
                var icon = pxt.Util.unicodeToChar(i);
                toolboxStyleBuffer += "\n                .blocklyTreeIcon." + className + "::before {\n                    content: \"" + icon + "\";\n                }\n            ";
            }
            else {
                toolboxStyleBuffer += "\n                .blocklyTreeIcon." + className + " {\n                    background-image: url(\"" + pxt.Util.pathJoin(pxt.webConfig.commitCdnUrl, encodeURI(i)) + "\")!important;\n                    width: 30px;\n                    height: 100%;\n                    background-size: 20px !important;\n                    background-repeat: no-repeat !important;\n                    background-position: 50% 50% !important;\n                }\n            ";
            }
        }
        toolbox.appendToolboxIconCss = appendToolboxIconCss;
        function getNamespaceColor(ns) {
            ns = ns.toLowerCase();
            if (pxt.appTarget.appTheme.blockColors && pxt.appTarget.appTheme.blockColors[ns])
                return pxt.appTarget.appTheme.blockColors[ns];
            if (pxt.toolbox.blockColors[ns])
                return pxt.toolbox.blockColors[ns];
            return "";
        }
        toolbox.getNamespaceColor = getNamespaceColor;
        function getNamespaceIcon(ns) {
            ns = ns.toLowerCase();
            if (pxt.appTarget.appTheme.blockIcons && pxt.appTarget.appTheme.blockIcons[ns]) {
                return pxt.appTarget.appTheme.blockIcons[ns];
            }
            if (pxt.toolbox.blockIcons[ns]) {
                return pxt.toolbox.blockIcons[ns];
            }
            return "";
        }
        toolbox.getNamespaceIcon = getNamespaceIcon;
        function advancedTitle() { return pxt.Util.lf("{id:category}Advanced"); }
        toolbox.advancedTitle = advancedTitle;
        function addPackageTitle() { return pxt.Util.lf("{id:category}Extensions"); }
        toolbox.addPackageTitle = addPackageTitle;
        /**
         * Convert blockly hue to rgb
         */
        function convertColor(colour) {
            var hue = parseInt(colour);
            if (!isNaN(hue)) {
                console.error('hue style color not supported anymore, use #rrggbb');
            }
            // TODO: HSV support
            return colour;
        }
        toolbox.convertColor = convertColor;
        function fadeColor(hex, luminosity, lighten) {
            // #ABC => ABC
            hex = hex.replace(/[^0-9a-f]/gi, '');
            // ABC => AABBCC
            if (hex.length < 6)
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            // tweak
            var rgb = "#";
            for (var i = 0; i < 3; i++) {
                var c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, lighten ? c + (c * luminosity) : c - (c * luminosity)), 255));
                var cStr = c.toString(16);
                rgb += ("00" + cStr).substr(cStr.length);
            }
            return rgb;
        }
        toolbox.fadeColor = fadeColor;
    })(toolbox = pxt.toolbox || (pxt.toolbox = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var tutorial;
    (function (tutorial) {
        function parseTutorialSteps(tutorialId, tutorialmd) {
            // Download tutorial markdown
            var steps = tutorialmd.split(/^##[^#].*$/gmi);
            var newAuthoring = true;
            if (steps.length <= 1) {
                // try again, using old logic.
                steps = tutorialmd.split(/^###[^#].*$/gmi);
                newAuthoring = false;
            }
            if (steps[0].indexOf("# Not found") == 0) {
                pxt.log("Tutorial not found: " + tutorialId);
                throw new Error("Tutorial not found: " + tutorialId);
            }
            var stepInfo = [];
            tutorialmd.replace(newAuthoring ? /^##[^#](.*)$/gmi : /^###[^#](.*)$/gmi, function (f, s) {
                var info = {
                    fullscreen: /@(fullscreen|unplugged)/.test(s),
                    unplugged: /@unplugged/.test(s)
                };
                stepInfo.push(info);
                return "";
            });
            if (steps.length < 1)
                return undefined; // Promise.resolve();
            var options = steps[0];
            steps = steps.slice(1, steps.length); // Remove tutorial title
            for (var i = 0; i < steps.length; i++) {
                var stepContent = steps[i].trim();
                var contentLines = stepContent.split('\n');
                stepInfo[i].headerContentMd = contentLines[0];
                stepInfo[i].contentMd = stepContent;
                stepInfo[i].hasHint = contentLines.length > 1;
            }
            return stepInfo;
        }
        tutorial.parseTutorialSteps = parseTutorialSteps;
        function bundleTutorialCode(tutorialmd) {
            tutorialmd = tutorialmd.replace(/((?!.)\s)+/g, "\n");
            var regex = /```(sim|block|blocks|filterblocks)\s*\n([\s\S]*?)\n```/gmi;
            var code = '';
            // Concatenate all blocks in separate code blocks and decompile so we can detect what blocks are used (for the toolbox)
            tutorialmd.replace(regex, function (m0, m1, m2) {
                code += "\n { \n " + m2 + "\n } \n";
                return "";
            });
            return code;
        }
        tutorial.bundleTutorialCode = bundleTutorialCode;
    })(tutorial = pxt.tutorial || (pxt.tutorial = {}));
})(pxt || (pxt = {}));
/// <reference path='../built/typescriptServices.d.ts' />
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        function flattenDiagnosticMessageText(messageText, newLine) {
            if (typeof messageText === "string") {
                return messageText;
            }
            else {
                var diagnosticChain = messageText;
                var result = "";
                var indent = 0;
                while (diagnosticChain) {
                    if (indent) {
                        result += newLine;
                        for (var i = 0; i < indent; i++) {
                            result += "  ";
                        }
                    }
                    result += diagnosticChain.messageText;
                    indent++;
                    diagnosticChain = diagnosticChain.next;
                }
                return result;
            }
        }
        pxtc.flattenDiagnosticMessageText = flattenDiagnosticMessageText;
        var ScriptTarget;
        (function (ScriptTarget) {
            ScriptTarget[ScriptTarget["ES3"] = 0] = "ES3";
            ScriptTarget[ScriptTarget["ES5"] = 1] = "ES5";
            ScriptTarget[ScriptTarget["ES6"] = 2] = "ES6";
            ScriptTarget[ScriptTarget["ES2015"] = 2] = "ES2015";
            ScriptTarget[ScriptTarget["Latest"] = 2] = "Latest";
        })(ScriptTarget = pxtc.ScriptTarget || (pxtc.ScriptTarget = {}));
        function isIdentifierStart(ch, languageVersion) {
            return ch >= 65 /* A */ && ch <= 90 /* Z */ || ch >= 97 /* a */ && ch <= 122 /* z */ ||
                ch === 36 /* $ */ || ch === 95 /* _ */ ||
                ch > 127 /* maxAsciiCharacter */ && isUnicodeIdentifierStart(ch, languageVersion);
        }
        pxtc.isIdentifierStart = isIdentifierStart;
        function isIdentifierPart(ch, languageVersion) {
            return ch >= 65 /* A */ && ch <= 90 /* Z */ || ch >= 97 /* a */ && ch <= 122 /* z */ ||
                ch >= 48 /* _0 */ && ch <= 57 /* _9 */ || ch === 36 /* $ */ || ch === 95 /* _ */ ||
                ch > 127 /* maxAsciiCharacter */ && isUnicodeIdentifierPart(ch, languageVersion);
        }
        pxtc.isIdentifierPart = isIdentifierPart;
        pxtc.reservedWords = ["abstract", "any", "as", "break",
            "case", "catch", "class", "continue", "const", "constructor", "debugger",
            "declare", "default", "delete", "do", "else", "enum", "export", "extends",
            "false", "finally", "for", "from", "function", "get", "if", "implements",
            "import", "in", "instanceof", "interface", "is", "let", "module", "namespace",
            "new", "null", "package", "private", "protected", "public",
            "require", "global", "return", "set", "static", "super", "switch",
            "symbol", "this", "throw", "true", "try", "type", "typeof", "var", "void",
            "while", "with", "yield", "async", "await", "of",
            // PXT Specific
            "Math"];
        function escapeIdentifier(name) {
            if (!name)
                return '_';
            var n = name.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_$]/g, function (a) {
                return ts.pxtc.isIdentifierPart(a.charCodeAt(0), ts.pxtc.ScriptTarget.ES5) ? a : "";
            });
            if (!n || !ts.pxtc.isIdentifierStart(n.charCodeAt(0), ts.pxtc.ScriptTarget.ES5) || pxtc.reservedWords.indexOf(n) !== -1) {
                n = "_" + n;
            }
            return n;
        }
        pxtc.escapeIdentifier = escapeIdentifier;
        var unicodeES5IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES5IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520, 1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788, 1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112, 2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423, 2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929, 2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424, 3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028, 4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6000, 6002, 6003, 6016, 6099, 6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272, 6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155, 7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205, 8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417, 8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43047, 43072, 43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309, 43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584, 43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741, 43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES3IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1610, 1649, 1747, 1749, 1749, 1765, 1766, 1786, 1788, 1808, 1808, 1810, 1836, 1920, 1957, 2309, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2784, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3294, 3294, 3296, 3297, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3424, 3425, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3946, 3976, 3979, 4096, 4129, 4131, 4135, 4137, 4138, 4176, 4181, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6067, 6176, 6263, 6272, 6312, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8319, 8319, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12346, 12353, 12436, 12445, 12446, 12449, 12538, 12540, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65138, 65140, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        var unicodeES3IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 768, 846, 864, 866, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1155, 1158, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1441, 1443, 1465, 1467, 1469, 1471, 1471, 1473, 1474, 1476, 1476, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1621, 1632, 1641, 1648, 1747, 1749, 1756, 1759, 1768, 1770, 1773, 1776, 1788, 1808, 1836, 1840, 1866, 1920, 1968, 2305, 2307, 2309, 2361, 2364, 2381, 2384, 2388, 2392, 2403, 2406, 2415, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2492, 2494, 2500, 2503, 2504, 2507, 2509, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2562, 2562, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2649, 2652, 2654, 2654, 2662, 2676, 2689, 2691, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2784, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2876, 2883, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2913, 2918, 2927, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3031, 3031, 3047, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3134, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3168, 3169, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3262, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3297, 3302, 3311, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3390, 3395, 3398, 3400, 3402, 3405, 3415, 3415, 3424, 3425, 3430, 3439, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3805, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3946, 3953, 3972, 3974, 3979, 3984, 3991, 3993, 4028, 4038, 4038, 4096, 4129, 4131, 4135, 4137, 4138, 4140, 4146, 4150, 4153, 4160, 4169, 4176, 4185, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 4969, 4977, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6099, 6112, 6121, 6160, 6169, 6176, 6263, 6272, 6313, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8255, 8256, 8319, 8319, 8400, 8412, 8417, 8417, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12346, 12353, 12436, 12441, 12442, 12445, 12446, 12449, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65056, 65059, 65075, 65076, 65101, 65103, 65136, 65138, 65140, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65381, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
        function isUnicodeIdentifierStart(code, languageVersion) {
            return languageVersion >= ScriptTarget.ES5 ?
                lookupInUnicodeMap(code, unicodeES5IdentifierStart) :
                lookupInUnicodeMap(code, unicodeES3IdentifierStart);
        }
        pxtc.isUnicodeIdentifierStart = isUnicodeIdentifierStart;
        function isUnicodeIdentifierPart(code, languageVersion) {
            return languageVersion >= ScriptTarget.ES5 ?
                lookupInUnicodeMap(code, unicodeES5IdentifierPart) :
                lookupInUnicodeMap(code, unicodeES3IdentifierPart);
        }
        function lookupInUnicodeMap(code, map) {
            // Bail out quickly if it couldn't possibly be in the map.
            if (code < map[0]) {
                return false;
            }
            // Perform binary search in one of the Unicode range maps
            var lo = 0;
            var hi = map.length;
            var mid;
            while (lo + 1 < hi) {
                mid = lo + (hi - lo) / 2;
                // mid has to be even to catch a range's beginning
                mid -= mid % 2;
                if (map[mid] <= code && code <= map[mid + 1]) {
                    return true;
                }
                if (code < map[mid]) {
                    hi = mid;
                }
                else {
                    lo = mid + 2;
                }
            }
            return false;
        }
        var DiagnosticCategory;
        (function (DiagnosticCategory) {
            DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
            DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
            DiagnosticCategory[DiagnosticCategory["Message"] = 2] = "Message";
        })(DiagnosticCategory = pxtc.DiagnosticCategory || (pxtc.DiagnosticCategory = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxt;
(function (pxt) {
    var usb;
    (function (usb) {
        var USBError = /** @class */ (function (_super) {
            __extends(USBError, _super);
            function USBError(msg) {
                var _this = _super.call(this, msg) || this;
                _this.message = msg;
                return _this;
            }
            return USBError;
        }(Error));
        usb.USBError = USBError;
        var controlTransferGetReport = 0x01;
        var controlTransferSetReport = 0x09;
        var controlTransferOutReport = 0x200;
        var controlTransferInReport = 0x100;
        // this is for HF2
        usb.filters = [{
                classCode: 255,
                subclassCode: 42,
            }];
        function setFilters(f) {
            usb.filters = f;
        }
        usb.setFilters = setFilters;
        ;
        ;
        ;
        var HID = /** @class */ (function () {
            function HID(dev) {
                this.dev = dev;
                this.ready = false;
                this.onData = function (v) { };
                this.onError = function (e) { };
                this.onEvent = function (v) { };
            }
            HID.prototype.error = function (msg) {
                throw new USBError(pxt.U.lf("USB error on device {0} ({1})", this.dev.productName, msg));
            };
            HID.prototype.log = function (msg) {
                msg = "WebUSB: " + msg;
                pxt.log(msg);
                //pxt.debug(msg)
            };
            HID.prototype.disconnectAsync = function () {
                var _this = this;
                if (!this.dev)
                    return Promise.resolve();
                this.ready = false;
                this.log("close device");
                return this.dev.close()
                    .catch(function (e) {
                    // just ignore errors closing, most likely device just disconnected
                })
                    .then(function () {
                    _this.dev = null;
                    return Promise.delay(500);
                });
            };
            HID.prototype.reconnectAsync = function () {
                var _this = this;
                this.log("reconnect");
                return this.disconnectAsync()
                    .then(getDeviceAsync)
                    .then(function (dev) {
                    _this.log("got device: " + dev.manufacturerName + " " + dev.productName);
                    _this.dev = dev;
                    return _this.initAsync();
                });
            };
            HID.prototype.sendPacketAsync = function (pkt) {
                var _this = this;
                pxt.Util.assert(pkt.length <= 64);
                if (!this.epOut) {
                    return this.dev.controlTransferOut({
                        requestType: "class",
                        recipient: "interface",
                        request: controlTransferSetReport,
                        value: controlTransferOutReport,
                        index: this.iface.interfaceNumber
                    }, pkt).then(function (res) {
                        if (res.status != "ok")
                            _this.error("USB CTRL OUT transfer failed");
                        else
                            _this.recvOne();
                    });
                }
                return this.dev.transferOut(this.epOut.endpointNumber, pkt)
                    .then(function (res) {
                    if (res.status != "ok")
                        _this.error("USB OUT transfer failed");
                });
            };
            HID.prototype.recvOne = function () {
                var _this = this;
                this.recvPacketAsync()
                    .then(function (buf) {
                    _this.onData(buf);
                }, function (err) {
                    _this.onError(err);
                });
            };
            HID.prototype.readLoop = function () {
                var _this = this;
                var loop = function () {
                    if (!_this.ready)
                        Promise.delay(300).then(loop);
                    else
                        _this.recvPacketAsync()
                            .then(function (buf) {
                            _this.onData(buf);
                            loop();
                        }, function (err) {
                            _this.onError(err);
                            Promise.delay(300).then(loop);
                        });
                };
                loop();
            };
            HID.prototype.recvPacketAsync = function () {
                var _this = this;
                var final = function (res) {
                    if (res.status != "ok")
                        _this.error("USB IN transfer failed");
                    var arr = new Uint8Array(res.data.buffer);
                    if (arr.length == 0)
                        return _this.recvPacketAsync();
                    return arr;
                };
                if (!this.epIn)
                    return this.dev.controlTransferIn({
                        requestType: "class",
                        recipient: "interface",
                        request: controlTransferGetReport,
                        value: controlTransferInReport,
                        index: this.iface.interfaceNumber
                    }, 64).then(final);
                return this.dev.transferIn(this.epIn.endpointNumber, 64)
                    .then(final);
            };
            HID.prototype.initAsync = function () {
                var _this = this;
                var dev = this.dev;
                this.log("open device");
                return dev.open()
                    .then(function () {
                    _this.log("select configuration");
                    return dev.selectConfiguration(1);
                })
                    .then(function () {
                    var matchesFilters = function (iface) {
                        var a0 = iface.alternates[0];
                        for (var _i = 0, filters_1 = usb.filters; _i < filters_1.length; _i++) {
                            var f = filters_1[_i];
                            if (f.classCode == null || a0.interfaceClass === f.classCode) {
                                if (f.subclassCode == null || a0.interfaceSubclass === f.subclassCode) {
                                    if (f.protocolCode == null || a0.interfaceProtocol === f.protocolCode) {
                                        if (a0.endpoints.length == 0)
                                            return true;
                                        if (a0.endpoints.length == 2 &&
                                            a0.endpoints.every(function (e) { return e.packetSize == 64; }))
                                            return true;
                                    }
                                }
                            }
                        }
                        return false;
                    };
                    _this.log("got " + dev.configurations[0].interfaces.length + " interfaces");
                    var iface = dev.configurations[0].interfaces.filter(matchesFilters)[0];
                    if (!iface)
                        _this.error("cannot find supported USB interface");
                    _this.altIface = iface.alternates[0];
                    _this.iface = iface;
                    if (_this.altIface.endpoints.length) {
                        _this.epIn = _this.altIface.endpoints.filter(function (e) { return e.direction == "in"; })[0];
                        _this.epOut = _this.altIface.endpoints.filter(function (e) { return e.direction == "out"; })[0];
                        pxt.Util.assert(_this.epIn.packetSize == 64);
                        pxt.Util.assert(_this.epOut.packetSize == 64);
                    }
                    _this.log("claim interface");
                    return dev.claimInterface(iface.interfaceNumber);
                })
                    .then(function () {
                    _this.log("device ready");
                    _this.ready = true;
                    if (_this.epIn)
                        _this.readLoop();
                });
            };
            return HID;
        }());
        function pairAsync() {
            return navigator.usb.requestDevice({
                filters: usb.filters
            }).then(function (dev) {
                // try connecting to it
                return mkPacketIOAsync();
            }).then(function (io) { return io.reconnectAsync(); });
        }
        usb.pairAsync = pairAsync;
        function getDeviceAsync() {
            return navigator.usb.getDevices()
                .then(function (devs) {
                if (!devs || !devs.length)
                    return Promise.reject(new USBError(pxt.U.lf("No USB device selected or connected; try pairing!")));
                return devs[0];
            });
        }
        var getDevPromise;
        function mkPacketIOAsync() {
            if (!getDevPromise)
                getDevPromise = getDeviceAsync()
                    .then(function (dev) {
                    var h = new HID(dev);
                    return h.initAsync()
                        .then(function () { return h; });
                })
                    .catch(function (e) {
                    getDevPromise = null;
                    return Promise.reject(e);
                });
            return getDevPromise;
        }
        usb.mkPacketIOAsync = mkPacketIOAsync;
        usb.isEnabled = false;
        function setEnabled(v) {
            if (!isAvailable())
                v = false;
            usb.isEnabled = v;
        }
        usb.setEnabled = setEnabled;
        function isAvailable() {
            // TODO: support other Windows SKU than Windows 10
            return !!navigator.usb &&
                (!pxt.BrowserUtils.isWindows() || pxt.BrowserUtils.isWindows10());
        }
        usb.isAvailable = isAvailable;
    })(usb = pxt.usb || (pxt.usb = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var worker;
    (function (worker_1) {
        var U = pxt.Util;
        var workers = {};
        // Gets a cached worker for the given file
        function getWorker(workerFile) {
            var w = workers[workerFile];
            if (!w) {
                w = workers[workerFile] = makeWebWorker(workerFile);
            }
            return w;
        }
        worker_1.getWorker = getWorker;
        function wrap(send) {
            var pendingMsgs = {};
            var msgId = 0;
            var q = new U.PromiseQueue();
            var initPromise = new Promise(function (resolve, reject) {
                pendingMsgs["ready"] = resolve;
            });
            q.enqueue("main", function () { return initPromise; });
            var recvHandler = function (data) {
                if (pendingMsgs.hasOwnProperty(data.id)) {
                    var cb = pendingMsgs[data.id];
                    delete pendingMsgs[data.id];
                    cb(data.result);
                }
            };
            function opAsync(op, arg) {
                return q.enqueue("main", function () { return new Promise(function (resolve, reject) {
                    var id = "" + msgId++;
                    pendingMsgs[id] = function (v) {
                        if (!v) {
                            //pxt.reportError("worker", "no response")
                            reject(new Error("no response"));
                        }
                        else if (v.errorMessage) {
                            //pxt.reportError("worker", v.errorMessage)
                            reject(new Error(v.errorMessage));
                        }
                        else {
                            resolve(v);
                        }
                    };
                    send({ id: id, op: op, arg: arg });
                }); });
            }
            return { opAsync: opAsync, recvHandler: recvHandler };
        }
        worker_1.wrap = wrap;
        function makeWebWorker(workerFile) {
            var worker = new Worker(workerFile);
            var iface = wrap(function (v) { return worker.postMessage(v); });
            worker.onmessage = function (ev) {
                iface.recvHandler(ev.data);
            };
            return iface;
        }
        worker_1.makeWebWorker = makeWebWorker;
        function makeWebSocket(url, onOOB) {
            if (onOOB === void 0) { onOOB = null; }
            var ws = new WebSocket(url);
            var sendq = [];
            var iface = wrap(function (v) {
                var s = JSON.stringify(v);
                if (sendq)
                    sendq.push(s);
                else
                    ws.send(s);
            });
            ws.onmessage = function (ev) {
                var js = JSON.parse(ev.data);
                if (onOOB && js.id == null) {
                    onOOB(js);
                }
                else {
                    iface.recvHandler(js);
                }
            };
            ws.onopen = function (ev) {
                pxt.debug('socket opened');
                for (var _i = 0, sendq_1 = sendq; _i < sendq_1.length; _i++) {
                    var m = sendq_1[_i];
                    ws.send(m);
                }
                sendq = null;
            };
            ws.onclose = function (ev) {
                pxt.debug('socket closed');
            };
            ws.onerror = function (ev) {
                pxt.debug('socket errored');
            };
            return iface;
        }
        worker_1.makeWebSocket = makeWebSocket;
    })(worker = pxt.worker || (pxt.worker = {}));
})(pxt || (pxt = {}));
/* tslint:disable:no-conditional-assignment */
// TODO: add a macro facility to make 8-bit assembly easier?
var ts;
(function (ts) {
    var pxtc;
    (function (pxtc) {
        var assembler;
        (function (assembler) {
            assembler.debug = false;
            function lf(fmt) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return fmt.replace(/{(\d+)}/g, function (match, index) { return args[+index]; });
            }
            assembler.lf = lf;
            var badNameError = emitErr("opcode name doesn't match", "<name>");
            // An Instruction represents an instruction class with meta-variables
            // that should be substituted given an actually line (Line) of assembly
            // Thus, the Instruction helps us parse a sequence of tokens in a Line
            // as well as extract the relevant values to substitute for the meta-variables.
            // The Instruction also knows how to convert the particular instance into
            // machine code (EmitResult)
            var Instruction = /** @class */ (function () {
                function Instruction(ei, format, opcode, mask, is32bit) {
                    var _this = this;
                    this.opcode = opcode;
                    this.mask = mask;
                    this.is32bit = is32bit;
                    this.canBeShared = false;
                    pxtc.assert((opcode & mask) == opcode);
                    this.ei = ei;
                    this.code = format.replace(/\s+/g, " ");
                    this.friendlyFmt = format.replace(/\$\w+/g, function (m) {
                        if (_this.ei.encoders[m])
                            return _this.ei.encoders[m].pretty;
                        return m;
                    });
                    var words = tokenize(format);
                    this.name = words[0];
                    this.args = words.slice(1);
                }
                Instruction.prototype.emit = function (ln) {
                    var tokens = ln.words;
                    if (tokens[0] != this.name)
                        return badNameError;
                    var r = this.opcode;
                    var j = 1;
                    var stack = 0;
                    var numArgs = [];
                    var labelName = null;
                    var bit32_value = null;
                    var bit32_actual = null;
                    for (var i = 0; i < this.args.length; ++i) {
                        var formal = this.args[i];
                        var actual = tokens[j++];
                        if (formal[0] == "$") {
                            var enc = this.ei.encoders[formal];
                            var v = null;
                            if (enc.isRegister) {
                                v = this.ei.registerNo(actual);
                                if (v == null)
                                    return emitErr("expecting register name", actual);
                                if (this.ei.isPush(this.opcode))
                                    stack++;
                                else if (this.ei.isPop(this.opcode))
                                    stack--;
                            }
                            else if (enc.isImmediate) {
                                actual = actual.replace(/^#/, "");
                                v = ln.bin.parseOneInt(actual);
                                if (v == null) {
                                    return emitErr("expecting number", actual);
                                }
                                else {
                                    // explicit manipulation of stack pointer (SP)
                                    // ARM only
                                    if (this.ei.isAddSP(this.opcode))
                                        stack = -(v / this.ei.wordSize());
                                    else if (this.ei.isSubSP(this.opcode))
                                        stack = (v / this.ei.wordSize());
                                }
                            }
                            else if (enc.isRegList) {
                                // register lists are ARM-specific - this code not used in AVR 
                                if (actual != "{")
                                    return emitErr("expecting {", actual);
                                v = 0;
                                while (tokens[j] != "}") {
                                    actual = tokens[j++];
                                    if (!actual)
                                        return emitErr("expecting }", tokens[j - 2]);
                                    var no = this.ei.registerNo(actual);
                                    if (no == null)
                                        return emitErr("expecting register name", actual);
                                    if (v & (1 << no))
                                        return emitErr("duplicate register name", actual);
                                    v |= (1 << no);
                                    if (this.ei.isPush(this.opcode))
                                        stack++;
                                    else if (this.ei.isPop(this.opcode))
                                        stack--;
                                    if (tokens[j] == ",")
                                        j++;
                                }
                                actual = tokens[j++]; // skip close brace
                            }
                            else if (enc.isLabel) {
                                actual = actual.replace(/^#/, "");
                                if (/^[+-]?\d+$/.test(actual)) {
                                    v = parseInt(actual, 10);
                                    labelName = "rel" + v;
                                }
                                else if (/^0x[0-9a-fA-F]+$/.test(actual)) {
                                    v = parseInt(actual, 16);
                                    labelName = "abs" + v;
                                }
                                else {
                                    labelName = actual;
                                    v = this.ei.getAddressFromLabel(ln.bin, this, actual, enc.isWordAligned);
                                    if (v == null) {
                                        if (ln.bin.finalEmit)
                                            return emitErr("unknown label", actual);
                                        else
                                            // just need some value when we are 
                                            // doing some pass other than finalEmit
                                            v = 8; // needs to be divisible by 4 etc
                                    }
                                }
                                if (this.ei.is32bit(this)) {
                                    // console.log(actual + " " + v.toString())
                                    bit32_value = v;
                                    bit32_actual = actual;
                                    continue;
                                }
                            }
                            else {
                                pxtc.oops();
                            }
                            if (v == null)
                                return emitErr("didn't understand it", actual); // shouldn't happen
                            numArgs.push(v);
                            v = enc.encode(v);
                            // console.log("enc(v) = ",v)
                            if (v == null)
                                return emitErr("argument out of range or mis-aligned", actual);
                            pxtc.assert((r & v) == 0);
                            r |= v;
                        }
                        else if (formal == actual) {
                            // skip
                        }
                        else {
                            return emitErr("expecting " + formal, actual);
                        }
                    }
                    if (tokens[j])
                        return emitErr("trailing tokens", tokens[j]);
                    if (this.ei.is32bit(this)) {
                        return this.ei.emit32(r, bit32_value, ln.bin.normalizeExternalLabel(bit32_actual));
                    }
                    return {
                        stack: stack,
                        opcode: r,
                        numArgs: numArgs,
                        labelName: ln.bin.normalizeExternalLabel(labelName)
                    };
                };
                Instruction.prototype.toString = function () {
                    return this.friendlyFmt;
                };
                return Instruction;
            }());
            assembler.Instruction = Instruction;
            // represents a line of assembly from a file
            var Line = /** @class */ (function () {
                function Line(bin, text) {
                    this.bin = bin;
                    this.text = text;
                }
                Line.prototype.getOpExt = function () {
                    return this.instruction ? this.instruction.code : "";
                };
                Line.prototype.getOp = function () {
                    return this.instruction ? this.instruction.name : "";
                };
                Line.prototype.update = function (s) {
                    this.bin.peepOps++;
                    s = s.replace(/^\s*/, "");
                    if (!s)
                        this.bin.peepDel++;
                    if (s)
                        s += "      ";
                    s = "    " + s;
                    this.text = s + "; WAS: " + this.text.trim();
                    this.instruction = null;
                    this.numArgs = null;
                    this.words = tokenize(s) || [];
                    if (this.words.length == 0)
                        this.type = "empty";
                    else if (this.words[0][0] == "@")
                        this.type = "directive";
                };
                return Line;
            }());
            assembler.Line = Line;
            // File is the center of the action: parsing a file into a sequence of Lines
            // and also emitting the binary (buf)
            var File = /** @class */ (function () {
                function File(ei) {
                    this.baseOffset = 0;
                    this.checkStack = true;
                    this.inlineMode = false;
                    this.normalizeExternalLabel = function (n) { return n; };
                    this.currLineNo = 0;
                    this.scope = "";
                    this.scopeId = 0;
                    this.errors = [];
                    this.labels = {};
                    this.stackpointers = {};
                    this.stack = 0;
                    this.commPtr = 0;
                    this.peepOps = 0;
                    this.peepDel = 0;
                    this.peepCounts = {};
                    this.stats = "";
                    this.throwOnError = false;
                    this.disablePeepHole = false;
                    this.stackAtLabel = {};
                    this.currLine = new Line(this, "<start>");
                    this.currLine.lineNo = 0;
                    this.ei = ei;
                    this.ei.file = this;
                }
                File.prototype.emitShort = function (op) {
                    pxtc.assert(0 <= op && op <= 0xffff);
                    this.buf.push(op);
                };
                File.prototype.emitOpCode = function (op) {
                    this.emitShort(op);
                };
                File.prototype.location = function () {
                    // store one short (2 bytes) per buf location
                    return this.buf.length * 2;
                };
                File.prototype.pc = function () {
                    return this.location() + this.baseOffset;
                };
                // parsing of an "integer", well actually much more than 
                // just that
                File.prototype.parseOneInt = function (s) {
                    if (!s)
                        return null;
                    if (s == "0")
                        return 0;
                    var mul = 1;
                    // recursive-descent parsing of multiplication
                    if (s.indexOf("*") >= 0) {
                        var m_1 = null;
                        while (m_1 = /^([^\*]*)\*(.*)$/.exec(s)) {
                            var tmp = this.parseOneInt(m_1[1]);
                            if (tmp == null)
                                return null;
                            mul *= tmp;
                            s = m_1[2];
                        }
                    }
                    if (s[0] == "-") {
                        mul *= -1;
                        s = s.slice(1);
                    }
                    else if (s[0] == "+") {
                        s = s.slice(1);
                    }
                    var v = null;
                    // allow or'ing of 1 to least-signficant bit
                    if (pxtc.U.endsWith(s, "|1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) | 1;
                    }
                    // allow subtracting 1 too
                    if (pxtc.U.endsWith(s, "-1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) - 1;
                    }
                    // allow adding 1 too
                    if (pxtc.U.endsWith(s, "+1")) {
                        return this.parseOneInt(s.slice(0, s.length - 2)) + 1;
                    }
                    // handle hexadecimal and binary encodings
                    if (s[0] == "0") {
                        if (s[1] == "x" || s[1] == "X") {
                            var m_2 = /^0x([a-f0-9]+)$/i.exec(s);
                            if (m_2)
                                v = parseInt(m_2[1], 16);
                        }
                        else if (s[1] == "b" || s[1] == "B") {
                            var m_3 = /^0b([01]+)$/i.exec(s);
                            if (m_3)
                                v = parseInt(m_3[1], 2);
                        }
                    }
                    // decimal encoding
                    var m = /^(\d+)$/i.exec(s);
                    if (m)
                        v = parseInt(m[1], 10);
                    // stack-specific processing
                    // more special characters to handle
                    if (s.indexOf("@") >= 0) {
                        m = /^(\w+)@(-?\d+)$/.exec(s);
                        if (m) {
                            if (mul != 1)
                                this.directiveError(lf("multiplication not supported with saved stacks"));
                            if (this.stackpointers.hasOwnProperty(m[1])) {
                                // console.log(m[1] + ": " + this.stack + " " + this.stackpointers[m[1]] + " " + m[2])
                                v = this.ei.wordSize() * this.ei.computeStackOffset(m[1], this.stack - this.stackpointers[m[1]] + parseInt(m[2]));
                                // console.log(v)
                            }
                            else
                                this.directiveError(lf("saved stack not found"));
                        }
                        m = /^(.*)@(hi|lo|fn)$/.exec(s);
                        if (m && this.looksLikeLabel(m[1])) {
                            v = this.lookupLabel(m[1], true);
                            if (v != null) {
                                if (m[2] == "fn") {
                                    v = this.ei.toFnPtr(v, this.baseOffset, m[1]);
                                }
                                else {
                                    v >>= 1;
                                    if (0 <= v && v <= 0xffff) {
                                        if (m[2] == "hi")
                                            v = (v >> 8) & 0xff;
                                        else if (m[2] == "lo")
                                            v = v & 0xff;
                                        else
                                            pxtc.oops();
                                    }
                                    else {
                                        this.directiveError(lf("@hi/lo out of range"));
                                        v = null;
                                    }
                                }
                            }
                        }
                    }
                    if (v == null && this.looksLikeLabel(s)) {
                        v = this.lookupLabel(s, true);
                        if (v != null) {
                            if (this.ei.postProcessRelAddress(this, 1) == 1)
                                v += this.baseOffset;
                        }
                    }
                    if (v == null || isNaN(v))
                        return null;
                    return v * mul;
                };
                File.prototype.looksLikeLabel = function (name) {
                    if (/^(r\d|pc|sp|lr)$/i.test(name))
                        return false;
                    return /^[\.a-zA-Z_][\.:\w+]*$/.test(name);
                };
                File.prototype.scopedName = function (name) {
                    if (name[0] == "." && this.scope)
                        return this.scope + "$" + name;
                    else
                        return name;
                };
                File.prototype.lookupLabel = function (name, direct) {
                    if (direct === void 0) { direct = false; }
                    var v = null;
                    var scoped = this.scopedName(name);
                    if (this.labels.hasOwnProperty(scoped)) {
                        v = this.labels[scoped];
                        v = this.ei.postProcessRelAddress(this, v);
                    }
                    else if (this.lookupExternalLabel) {
                        v = this.lookupExternalLabel(name);
                        if (v != null) {
                            v = this.ei.postProcessAbsAddress(this, v);
                        }
                    }
                    if (v == null && direct) {
                        if (this.finalEmit)
                            this.directiveError(lf("unknown label: {0}", name));
                        else
                            // use a number over 1 byte
                            v = 33333;
                    }
                    return v;
                };
                File.prototype.align = function (n) {
                    pxtc.assert(n == 2 || n == 4 || n == 8 || n == 16);
                    while (this.location() % n != 0)
                        this.emitOpCode(0);
                };
                File.prototype.pushError = function (msg, hints) {
                    if (hints === void 0) { hints = ""; }
                    var err = {
                        scope: this.scope,
                        message: lf("  -> Line {2} ('{1}'), error: {0}\n{3}", msg, this.currLine.text, this.currLine.lineNo, hints),
                        lineNo: this.currLine.lineNo,
                        line: this.currLine.text,
                        coremsg: msg,
                        hints: hints
                    };
                    this.errors.push(err);
                    if (this.throwOnError)
                        throw new Error(err.message);
                };
                File.prototype.directiveError = function (msg) {
                    this.pushError(msg);
                    // this.pushError(lf("directive error: {0}", msg))
                };
                File.prototype.emitString = function (l) {
                    function byteAt(s, i) { return (s.charCodeAt(i) || 0) & 0xff; }
                    var m = /^\s*([\w\.]+\s*:\s*)?.\w+\s+(".*")\s*$/.exec(l);
                    var s;
                    if (!m || null == (s = parseString(m[2]))) {
                        this.directiveError(lf("expecting string"));
                    }
                    else {
                        this.align(2);
                        // s.length + 1 to NUL terminate
                        for (var i = 0; i < s.length + 1; i += 2) {
                            this.emitShort((byteAt(s, i + 1) << 8) | byteAt(s, i));
                        }
                    }
                };
                File.prototype.parseNumber = function (words) {
                    var v = this.parseOneInt(words.shift());
                    if (v == null)
                        return null;
                    return v;
                };
                File.prototype.parseNumbers = function (words) {
                    words = words.slice(1);
                    var nums = [];
                    while (true) {
                        var n = this.parseNumber(words);
                        if (n == null) {
                            this.directiveError(lf("cannot parse number at '{0}'", words[0]));
                            break;
                        }
                        else
                            nums.push(n);
                        if (words[0] == ",") {
                            words.shift();
                            if (words[0] == null)
                                break;
                        }
                        else if (words[0] == null) {
                            break;
                        }
                        else {
                            this.directiveError(lf("expecting number, got '{0}'", words[0]));
                            break;
                        }
                    }
                    return nums;
                };
                File.prototype.emitSpace = function (words) {
                    var nums = this.parseNumbers(words);
                    if (nums.length == 1)
                        nums.push(0);
                    if (nums.length != 2)
                        this.directiveError(lf("expecting one or two numbers"));
                    else if (nums[0] % 2 != 0)
                        this.directiveError(lf("only even space supported"));
                    else {
                        var f = nums[1] & 0xff;
                        f = f | (f << 8);
                        for (var i = 0; i < nums[0]; i += 2)
                            this.emitShort(f);
                    }
                };
                File.prototype.emitBytes = function (words) {
                    var nums = this.parseNumbers(words);
                    if (nums.length % 2 != 0) {
                        this.directiveError(".bytes needs an even number of arguments");
                        nums.push(0);
                    }
                    for (var i = 0; i < nums.length; i += 2) {
                        var n0 = nums[i];
                        var n1 = nums[i + 1];
                        if (0 <= n0 && n1 <= 0xff &&
                            0 <= n1 && n0 <= 0xff)
                            this.emitShort((n0 & 0xff) | ((n1 & 0xff) << 8));
                        else
                            this.directiveError(lf("expecting uint8"));
                    }
                };
                File.prototype.emitHex = function (words) {
                    var _this = this;
                    words.slice(1).forEach(function (w) {
                        if (w == ",")
                            return;
                        // TODO: why 4 and not 2?
                        if (w.length % 4 != 0)
                            _this.directiveError(".hex needs an even number of bytes");
                        else if (!/^[a-f0-9]+$/i.test(w))
                            _this.directiveError(".hex needs a hex number");
                        else
                            for (var i = 0; i < w.length; i += 4) {
                                var n = parseInt(w.slice(i, i + 4), 16);
                                n = ((n & 0xff) << 8) | ((n >> 8) & 0xff);
                                _this.emitShort(n);
                            }
                    });
                };
                File.prototype.handleDirective = function (l) {
                    var _this = this;
                    var words = l.words;
                    var expectOne = function () {
                        if (words.length != 2)
                            _this.directiveError(lf("expecting one argument"));
                    };
                    var num0;
                    switch (words[0]) {
                        case ".ascii":
                        case ".asciz":
                        case ".string":
                            this.emitString(l.text);
                            break;
                        case ".align":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                if (num0 == 0)
                                    return;
                                if (num0 <= 4) {
                                    this.align(1 << num0);
                                }
                                else {
                                    this.directiveError(lf("expecting 1, 2, 3 or 4 (for 2, 4, 8, or 16 byte alignment)"));
                                }
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".balign":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                if (num0 == 1)
                                    return;
                                if (num0 == 2 || num0 == 4 || num0 == 8 || num0 == 16) {
                                    this.align(num0);
                                }
                                else {
                                    this.directiveError(lf("expecting 2, 4, 8, or 16"));
                                }
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".p2align":
                            expectOne();
                            num0 = this.parseOneInt(words[1]);
                            if (num0 != null) {
                                this.align(1 << num0);
                            }
                            else
                                this.directiveError(lf("expecting number"));
                            break;
                        case ".byte":
                            this.emitBytes(words);
                            break;
                        case ".hex":
                            this.emitHex(words);
                            break;
                        case ".hword":
                        case ".short":
                        case ".2bytes":
                            this.parseNumbers(words).forEach(function (n) {
                                // we allow negative numbers
                                if (-0x8000 <= n && n <= 0xffff)
                                    _this.emitShort(n & 0xffff);
                                else
                                    _this.directiveError(lf("expecting int16"));
                            });
                            break;
                        case ".word":
                        case ".4bytes":
                        case ".long":
                            // TODO: a word is machine-dependent (16-bit for AVR, 32-bit for ARM)
                            this.parseNumbers(words).forEach(function (n) {
                                // we allow negative numbers
                                if (-0x80000000 <= n && n <= 0xffffffff) {
                                    _this.emitShort(n & 0xffff);
                                    _this.emitShort((n >> 16) & 0xffff);
                                }
                                else {
                                    _this.directiveError(lf("expecting int32"));
                                }
                            });
                            break;
                        case ".skip":
                        case ".space":
                            this.emitSpace(words);
                            break;
                        case ".startaddr":
                            if (this.location())
                                this.directiveError(lf(".startaddr can be only be specified at the beginning of the file"));
                            expectOne();
                            this.baseOffset = this.parseOneInt(words[1]);
                            break;
                        // The usage for this is as follows:
                        // push {...}
                        // @stackmark locals   ; locals := sp
                        // ... some push/pops ...
                        // ldr r0, [sp, locals@3] ; load local number 3
                        // ... some push/pops ...
                        // @stackempty locals ; expect an empty stack here
                        case "@stackmark":
                            expectOne();
                            this.stackpointers[words[1]] = this.stack;
                            break;
                        case "@stackempty":
                            if (this.checkStack) {
                                if (this.stackpointers[words[1]] == null)
                                    this.directiveError(lf("no such saved stack"));
                                else if (this.stackpointers[words[1]] != this.stack)
                                    this.directiveError(lf("stack mismatch"));
                            }
                            break;
                        case "@scope":
                            this.scope = words[1] || "";
                            this.currLineNo = this.scope ? 0 : this.realCurrLineNo;
                            break;
                        case ".syntax":
                        case "@nostackcheck":
                            this.checkStack = false;
                            break;
                        case "@dummystack":
                            expectOne();
                            this.stack += this.parseOneInt(words[1]);
                            break;
                        case ".section":
                        case ".global":
                            this.stackpointers = {};
                            this.stack = 0;
                            this.scope = "$S" + this.scopeId++;
                            break;
                        case ".comm": {
                            words = words.filter(function (x) { return x != ","; });
                            words.shift();
                            var sz = this.parseOneInt(words[1]);
                            var align = 0;
                            if (words[2])
                                align = this.parseOneInt(words[2]);
                            else
                                align = 4; // not quite what AS does...
                            var val = this.lookupLabel(words[0]);
                            if (val == null) {
                                if (!this.commPtr) {
                                    this.commPtr = this.lookupExternalLabel("_pxt_comm_base") || 0;
                                    if (!this.commPtr)
                                        this.directiveError(lf("PXT_COMM_BASE not defined"));
                                }
                                while (this.commPtr & (align - 1))
                                    this.commPtr++;
                                this.labels[this.scopedName(words[0])] = this.commPtr - this.baseOffset;
                                this.commPtr += sz;
                            }
                            break;
                        }
                        case ".file":
                        case ".text":
                        case ".cpu":
                        case ".fpu":
                        case ".eabi_attribute":
                        case ".code":
                        case ".thumb_func":
                        case ".type":
                        case ".fnstart":
                        case ".save":
                        case ".size":
                        case ".fnend":
                        case ".pad":
                        case ".globl": // TODO might need this one
                        case ".local":
                            break;
                        case "@":
                            // @ sp needed
                            break;
                        default:
                            if (/^\.cfi_/.test(words[0])) {
                                // ignore
                            }
                            else {
                                this.directiveError(lf("unknown directive"));
                            }
                            break;
                    }
                };
                File.prototype.handleOneInstruction = function (ln, instr) {
                    var op = instr.emit(ln);
                    if (!op.error) {
                        this.stack += op.stack;
                        if (this.checkStack && this.stack < 0)
                            this.pushError(lf("stack underflow"));
                        ln.location = this.location();
                        ln.opcode = op.opcode;
                        ln.stack = op.stack;
                        this.emitOpCode(op.opcode);
                        if (op.opcode2 != null)
                            this.emitOpCode(op.opcode2);
                        if (op.opcode3 != null)
                            this.emitOpCode(op.opcode3);
                        ln.instruction = instr;
                        ln.numArgs = op.numArgs;
                        return true;
                    }
                    return false;
                };
                File.prototype.handleInstruction = function (ln) {
                    var _this = this;
                    if (ln.instruction) {
                        if (this.handleOneInstruction(ln, ln.instruction))
                            return;
                    }
                    var getIns = function (n) { return _this.ei.instructions.hasOwnProperty(n) ? _this.ei.instructions[n] : []; };
                    if (!ln.instruction) {
                        var ins = getIns(ln.words[0]);
                        for (var i = 0; i < ins.length; ++i) {
                            if (this.handleOneInstruction(ln, ins[i]))
                                return;
                        }
                    }
                    var w0 = ln.words[0].toLowerCase().replace(/s$/, "").replace(/[^a-z]/g, "");
                    var hints = "";
                    var possibilities = getIns(w0).concat(getIns(w0 + "s"));
                    if (possibilities.length > 0) {
                        possibilities.forEach(function (i) {
                            var err = i.emit(ln);
                            hints += lf("   Maybe: {0} ({1} at '{2}')\n", i.toString(), err.error, err.errorAt);
                        });
                    }
                    this.pushError(lf("assembly error"), hints);
                };
                File.prototype.buildLine = function (tx, lst) {
                    var _this = this;
                    var mkLine = function (tx) {
                        var l = new Line(_this, tx);
                        l.scope = _this.scope;
                        l.lineNo = _this.currLineNo;
                        lst.push(l);
                        return l;
                    };
                    var l = mkLine(tx);
                    var words = tokenize(l.text) || [];
                    l.words = words;
                    var w0 = words[0] || "";
                    if (w0.charAt(w0.length - 1) == ":") {
                        var m = /^([\.\w]+):$/.exec(words[0]);
                        if (m) {
                            l.type = "label";
                            l.text = m[1] + ":";
                            l.words = [m[1]];
                            if (words.length > 1) {
                                words.shift();
                                l = mkLine(tx.replace(/^[^:]*:/, ""));
                                l.words = words;
                                w0 = words[0] || "";
                            }
                            else {
                                return;
                            }
                        }
                    }
                    var c0 = w0.charAt(0);
                    if (c0 == "." || c0 == "@") {
                        l.type = "directive";
                        if (l.words[0] == "@scope")
                            this.handleDirective(l);
                    }
                    else {
                        if (l.words.length == 0)
                            l.type = "empty";
                        else
                            l.type = "instruction";
                    }
                };
                File.prototype.prepLines = function (text) {
                    var _this = this;
                    this.currLineNo = 0;
                    this.realCurrLineNo = 0;
                    this.lines = [];
                    text.split(/\r?\n/).forEach(function (tx) {
                        if (_this.errors.length > 10)
                            return;
                        _this.currLineNo++;
                        _this.realCurrLineNo++;
                        _this.buildLine(tx, _this.lines);
                    });
                };
                File.prototype.iterLines = function () {
                    var _this = this;
                    this.stack = 0;
                    this.buf = [];
                    this.scopeId = 0;
                    this.lines.forEach(function (l) {
                        if (_this.errors.length > 10)
                            return;
                        _this.currLine = l;
                        if (l.words.length == 0)
                            return;
                        if (l.type == "label") {
                            var lblname = _this.scopedName(l.words[0]);
                            _this.prevLabel = lblname;
                            if (_this.finalEmit) {
                                var curr = _this.labels[lblname];
                                if (curr == null)
                                    pxtc.oops();
                                pxtc.assert(_this.errors.length > 0 || curr == _this.location());
                                if (_this.reallyFinalEmit) {
                                    _this.stackAtLabel[lblname] = _this.stack;
                                }
                            }
                            else {
                                if (_this.labels.hasOwnProperty(lblname))
                                    _this.directiveError(lf("label redefinition"));
                                else if (_this.inlineMode && /^_/.test(lblname))
                                    _this.directiveError(lf("labels starting with '_' are reserved for the compiler"));
                                else {
                                    _this.labels[lblname] = _this.location();
                                }
                            }
                            l.location = _this.location();
                        }
                        else if (l.type == "directive") {
                            _this.handleDirective(l);
                        }
                        else if (l.type == "instruction") {
                            _this.handleInstruction(l);
                        }
                        else if (l.type == "empty") {
                            // nothing
                        }
                        else {
                            pxtc.oops();
                        }
                    });
                };
                File.prototype.getSource = function (clean, numStmts, flashSize) {
                    var _this = this;
                    if (numStmts === void 0) { numStmts = 1; }
                    if (flashSize === void 0) { flashSize = 0; }
                    var lenTotal = this.buf ? this.location() : 0;
                    var lenThumb = this.labels["_program_end"] || lenTotal;
                    var lenFrag = this.labels["_frag_start"] || 0;
                    if (lenFrag)
                        lenFrag = this.labels["_js_end"] - lenFrag;
                    var lenLit = this.labels["_program_end"];
                    if (lenLit)
                        lenLit -= this.labels["_js_end"];
                    var totalSize = lenTotal + this.baseOffset;
                    if (flashSize && totalSize > flashSize)
                        pxtc.U.userError(lf("program too big by {0} bytes!", totalSize - flashSize));
                    flashSize = flashSize || 128 * 1024;
                    var totalInfo = lf("; total bytes: {0} ({1}% of {2}k flash with {3} free)", totalSize, (100 * totalSize / flashSize).toFixed(1), (flashSize / 1024).toFixed(1), flashSize - totalSize);
                    var res = 
                    // ARM-specific
                    lf("; code sizes (bytes): {0} (incl. {1} frags, and {2} lits); src size {3}\n", lenThumb, lenFrag, lenLit, lenTotal - lenThumb) +
                        lf("; assembly: {0} lines; density: {1} bytes/stmt\n", this.lines.length, Math.round(100 * (lenThumb - lenLit) / numStmts) / 100) +
                        totalInfo + "\n" +
                        this.stats + "\n\n";
                    var skipOne = false;
                    this.lines.forEach(function (ln, i) {
                        if (ln.words[0] == "_stored_program") {
                            res += "_stored_program: .string \"...\"\n";
                            skipOne = true;
                            return;
                        }
                        if (skipOne) {
                            skipOne = false;
                            return;
                        }
                        var text = ln.text;
                        if (clean) {
                            if (ln.words[0] == "@stackempty" &&
                                _this.lines[i - 1].text == ln.text)
                                return;
                            text = text.replace(/; WAS: .*/, "");
                            if (!text.trim())
                                return;
                        }
                        if (assembler.debug)
                            if (ln.type == "label" || ln.type == "instruction")
                                text += " \t; 0x" + (ln.location + _this.baseOffset).toString(16);
                        res += text + "\n";
                    });
                    return res;
                };
                File.prototype.peepHole = function () {
                    // TODO add: str X; ldr X -> str X ?
                    var mylines = this.lines.filter(function (l) { return l.type != "empty"; });
                    for (var i = 0; i < mylines.length; ++i) {
                        var ln = mylines[i];
                        if (/^user/.test(ln.scope))
                            continue;
                        var lnNext = mylines[i + 1];
                        if (!lnNext)
                            continue;
                        var lnNext2 = mylines[i + 2];
                        if (ln.type == "instruction") {
                            this.ei.peephole(ln, lnNext, lnNext2);
                        }
                    }
                };
                File.prototype.clearLabels = function () {
                    this.labels = {};
                    this.commPtr = 0;
                };
                File.prototype.peepPass = function (reallyFinal) {
                    if (this.disablePeepHole)
                        return;
                    this.peepOps = 0;
                    this.peepDel = 0;
                    this.peepCounts = {};
                    this.peepHole();
                    this.throwOnError = true;
                    this.finalEmit = false;
                    this.clearLabels();
                    this.iterLines();
                    pxtc.assert(!this.checkStack || this.stack == 0);
                    this.finalEmit = true;
                    this.reallyFinalEmit = reallyFinal || this.peepOps == 0;
                    this.iterLines();
                    this.stats += lf("; peep hole pass: {0} instructions removed and {1} updated\n", this.peepDel, this.peepOps - this.peepDel);
                };
                File.prototype.getLabels = function () {
                    var _this = this;
                    if (!this.userLabelsCache)
                        this.userLabelsCache = pxtc.U.mapMap(this.labels, function (k, v) { return v + _this.baseOffset; });
                    return this.userLabelsCache;
                };
                File.prototype.emit = function (text) {
                    pxtc.assert(this.buf == null);
                    this.prepLines(text);
                    if (this.errors.length > 0)
                        return;
                    this.clearLabels();
                    this.iterLines();
                    if (this.checkStack && this.stack != 0)
                        this.directiveError(lf("stack misaligned at the end of the file"));
                    if (this.errors.length > 0)
                        return;
                    this.ei.expandLdlit(this);
                    this.ei.commonalize(this);
                    this.clearLabels();
                    this.iterLines();
                    this.finalEmit = true;
                    this.reallyFinalEmit = this.disablePeepHole;
                    this.iterLines();
                    if (this.errors.length > 0)
                        return;
                    var maxPasses = 5;
                    for (var i = 0; i < maxPasses; ++i) {
                        pxt.debug("Peephole OPT, pass " + i);
                        this.peepPass(i == maxPasses);
                        if (this.peepOps == 0)
                            break;
                    }
                };
                return File;
            }());
            assembler.File = File;
            var VMFile = /** @class */ (function (_super) {
                __extends(VMFile, _super);
                function VMFile(ei) {
                    return _super.call(this, ei) || this;
                }
                VMFile.prototype.location = function () {
                    // the this.buf stores bytes here
                    return this.buf.length;
                };
                VMFile.prototype.emitShort = function (op) {
                    pxtc.assert(0 <= op && op <= 0xffff);
                    this.buf.push(op & 0xff);
                    this.buf.push(op >> 8);
                };
                VMFile.prototype.emitOpCode = function (op) {
                    pxtc.assert(0 <= op && op <= 0xff);
                    this.buf.push(op);
                };
                return VMFile;
            }(File));
            assembler.VMFile = VMFile;
            // an assembler provider must inherit from this
            // class and provide Encoders and Instructions
            var AbstractProcessor = /** @class */ (function () {
                function AbstractProcessor() {
                    var _this = this;
                    this.file = null;
                    this.addEnc = function (n, p, e) {
                        var ee = {
                            name: n,
                            pretty: p,
                            encode: e,
                            isRegister: /^\$r\d/.test(n),
                            isImmediate: /^\$i\d/.test(n),
                            isRegList: /^\$rl\d/.test(n),
                            isLabel: /^\$l[a-z]/.test(n),
                        };
                        _this.encoders[n] = ee;
                        return ee;
                    };
                    this.inrange = function (max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < 0)
                            return null;
                        if (v > max)
                            return null;
                        return e;
                    };
                    this.inminmax = function (min, max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < min)
                            return null;
                        if (v > max)
                            return null;
                        return e;
                    };
                    this.inseq = function (seq, v) {
                        var ind = seq.indexOf(v);
                        if (ind < 0)
                            return null;
                        return ind;
                    };
                    this.inrangeSigned = function (max, v, e) {
                        if (Math.floor(v) != v)
                            return null;
                        if (v < -(max + 1))
                            return null;
                        if (v > max)
                            return null;
                        var mask = (max << 1) | 1;
                        return e & mask;
                    };
                    this.addInst = function (name, code, mask, is32Bit) {
                        var ins = new Instruction(_this, name, code, mask, is32Bit);
                        if (!_this.instructions.hasOwnProperty(ins.name))
                            _this.instructions[ins.name] = [];
                        _this.instructions[ins.name].push(ins);
                        return ins;
                    };
                    this.encoders = {};
                    this.instructions = {};
                }
                AbstractProcessor.prototype.toFnPtr = function (v, baseOff, lbl) {
                    return v;
                };
                AbstractProcessor.prototype.wordSize = function () {
                    return -1;
                };
                AbstractProcessor.prototype.computeStackOffset = function (kind, offset) {
                    return offset;
                };
                AbstractProcessor.prototype.is32bit = function (i) {
                    return false;
                };
                AbstractProcessor.prototype.emit32 = function (v1, v2, actual) {
                    return null;
                };
                AbstractProcessor.prototype.postProcessRelAddress = function (f, v) {
                    return v;
                };
                AbstractProcessor.prototype.postProcessAbsAddress = function (f, v) {
                    return v;
                };
                AbstractProcessor.prototype.peephole = function (ln, lnNext, lnNext2) {
                    return;
                };
                AbstractProcessor.prototype.registerNo = function (actual) {
                    return null;
                };
                AbstractProcessor.prototype.getAddressFromLabel = function (f, i, s, wordAligned) {
                    if (wordAligned === void 0) { wordAligned = false; }
                    return null;
                };
                AbstractProcessor.prototype.isPop = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isPush = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isAddSP = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.isSubSP = function (opcode) {
                    return false;
                };
                AbstractProcessor.prototype.testAssembler = function () {
                    pxtc.assert(false);
                };
                AbstractProcessor.prototype.commonalize = function (file) {
                };
                AbstractProcessor.prototype.expandLdlit = function (f) {
                };
                return AbstractProcessor;
            }());
            assembler.AbstractProcessor = AbstractProcessor;
            // utility functions
            function tokenize(line) {
                var words = [];
                var w = "";
                loop: for (var i = 0; i < line.length; ++i) {
                    switch (line[i]) {
                        case "[":
                        case "]":
                        case "!":
                        case "{":
                        case "}":
                        case ",":
                            if (w) {
                                words.push(w);
                                w = "";
                            }
                            words.push(line[i]);
                            break;
                        case " ":
                        case "\t":
                        case "\r":
                        case "\n":
                            if (w) {
                                words.push(w);
                                w = "";
                            }
                            break;
                        case ";":
                            // drop the trailing comment
                            break loop;
                        default:
                            w += line[i];
                            break;
                    }
                }
                if (w) {
                    words.push(w);
                    w = "";
                }
                if (!words[0])
                    return null;
                return words;
            }
            function parseString(s) {
                s = s.replace(/\\\\/g, "\\B") // don't get confused by double backslash
                    .replace(/\\(['\?])/g, function (f, q) { return q; }) // these are not valid in JSON yet valid in C
                    .replace(/\\[z0]/g, "\u0000") // \0 is valid in C 
                    .replace(/\\x([0-9a-f][0-9a-f])/gi, function (f, h) { return "\\u00" + h; })
                    .replace(/\\B/g, "\\\\"); // undo anti-confusion above
                try {
                    return JSON.parse(s);
                }
                catch (e) {
                    return null;
                }
            }
            function emitErr(msg, tok) {
                return {
                    stack: null,
                    opcode: null,
                    error: msg,
                    errorAt: tok
                };
            }
            assembler.emitErr = emitErr;
            function testOne(ei, op, code) {
                var b = new File(ei);
                b.checkStack = false;
                b.emit(op);
                pxtc.assert(b.buf[0] == code);
            }
            function expectError(ei, asm) {
                var b = new File(ei);
                b.emit(asm);
                if (b.errors.length == 0) {
                    pxtc.oops("ASMTEST: expecting error for: " + asm);
                }
                // console.log(b.errors[0].message)
            }
            assembler.expectError = expectError;
            function tohex(n) {
                if (n < 0 || n > 0xffff)
                    return ("0x" + n.toString(16)).toLowerCase();
                else
                    return ("0x" + ("000" + n.toString(16)).slice(-4)).toLowerCase();
            }
            assembler.tohex = tohex;
            function expect(ei, disasm) {
                var exp = [];
                var asm = disasm.replace(/^([0-9a-fA-F]{4,8})\s/gm, function (w, n) {
                    exp.push(parseInt(n.slice(0, 4), 16));
                    if (n.length == 8)
                        exp.push(parseInt(n.slice(4, 8), 16));
                    return "";
                });
                var b = new File(ei);
                b.throwOnError = true;
                b.disablePeepHole = true;
                b.emit(asm);
                if (b.errors.length > 0) {
                    console.debug(b.errors[0].message);
                    pxtc.oops("ASMTEST: not expecting errors");
                }
                if (b.buf.length != exp.length)
                    pxtc.oops("ASMTEST: wrong buf len");
                for (var i = 0; i < exp.length; ++i) {
                    if (b.buf[i] != exp[i])
                        pxtc.oops("ASMTEST: wrong buf content at " + i + " , exp:" + tohex(exp[i]) + ", got: " + tohex(b.buf[i]));
                }
            }
            assembler.expect = expect;
        })(assembler = pxtc.assembler || (pxtc.assembler = {}));
    })(pxtc = ts.pxtc || (ts.pxtc = {}));
})(ts || (ts = {}));
var pxt;
(function (pxt) {
    var Cloud;
    (function (Cloud) {
        var Util = pxtc.Util;
        Cloud.apiRoot = "https://makecode.com/api/";
        Cloud.accessToken = "";
        Cloud.localToken = "";
        var _isOnline = true;
        Cloud.onOffline = function () { };
        function offlineError(url) {
            var e = new Error(Util.lf("Cannot access {0} while offline", url));
            e.isOffline = true;
            return Promise.delay(1000).then(function () { return Promise.reject(e); });
        }
        function hasAccessToken() {
            return !!Cloud.accessToken;
        }
        Cloud.hasAccessToken = hasAccessToken;
        function isLocalHost() {
            try {
                return /^http:\/\/(localhost|127\.0\.0\.1):\d+\//.test(window.location.href)
                    && !/nolocalhost=1/.test(window.location.href)
                    && !(pxt.webConfig && pxt.webConfig.isStatic);
            }
            catch (e) {
                return false;
            }
        }
        Cloud.isLocalHost = isLocalHost;
        function localRequestAsync(path, data) {
            return pxt.U.requestAsync({
                url: "/api/" + path,
                headers: { "Authorization": Cloud.localToken },
                method: data ? "POST" : "GET",
                data: data || undefined,
                allowHttpErrors: true
            });
        }
        Cloud.localRequestAsync = localRequestAsync;
        function privateRequestAsync(options) {
            options.url = pxt.webConfig && pxt.webConfig.isStatic && !options.forceLiveEndpoint ? pxt.webConfig.relprefix + options.url : Cloud.apiRoot + options.url;
            options.allowGzipPost = true;
            if (!Cloud.isOnline()) {
                return offlineError(options.url);
            }
            if (Cloud.accessToken) {
                if (!options.headers)
                    options.headers = {};
                options.headers["x-td-access-token"] = Cloud.accessToken;
            }
            return Util.requestAsync(options)
                .catch(function (e) {
                if (e.statusCode == 0) {
                    if (_isOnline) {
                        _isOnline = false;
                        Cloud.onOffline();
                    }
                    return offlineError(options.url);
                }
                else {
                    return Promise.reject(e);
                }
            });
        }
        Cloud.privateRequestAsync = privateRequestAsync;
        function privateGetTextAsync(path) {
            return privateRequestAsync({ url: path }).then(function (resp) { return resp.text; });
        }
        Cloud.privateGetTextAsync = privateGetTextAsync;
        function privateGetAsync(path, forceLiveEndpoint) {
            if (forceLiveEndpoint === void 0) { forceLiveEndpoint = false; }
            return privateRequestAsync({ url: path, forceLiveEndpoint: forceLiveEndpoint }).then(function (resp) { return resp.json; });
        }
        Cloud.privateGetAsync = privateGetAsync;
        function downloadTargetConfigAsync() {
            if (!Cloud.isOnline())
                return Promise.resolve(undefined);
            var targetVersion = pxt.appTarget.versions && pxt.appTarget.versions.target;
            var url = pxt.webConfig && pxt.webConfig.isStatic ? "targetconfig.json" : "config/" + pxt.appTarget.id + "/targetconfig" + (targetVersion ? "/v" + targetVersion : '');
            if (Cloud.isLocalHost())
                return localRequestAsync(url).then(function (r) { return r ? r.json : undefined; });
            else
                return Cloud.privateGetAsync(url);
        }
        Cloud.downloadTargetConfigAsync = downloadTargetConfigAsync;
        function downloadScriptFilesAsync(id) {
            return privateRequestAsync({ url: id + "/text", forceLiveEndpoint: true }).then(function (resp) {
                return JSON.parse(resp.text);
            });
        }
        Cloud.downloadScriptFilesAsync = downloadScriptFilesAsync;
        function downloadMarkdownAsync(docid, locale, live) {
            var packaged = pxt.webConfig && pxt.webConfig.isStatic;
            var targetVersion = pxt.appTarget.versions && pxt.appTarget.versions.target || '?';
            var url;
            if (packaged) {
                url = docid;
                var isUnderDocs = /\/docs\//.test(url);
                var hasExt = /\.\w+$/.test(url);
                if (!isUnderDocs) {
                    url = "docs/" + url;
                }
                if (!hasExt) {
                    url = url + ".md";
                }
            }
            else {
                url = "md/" + pxt.appTarget.id + "/" + docid.replace(/^\//, "") + "?targetVersion=" + encodeURIComponent(targetVersion);
            }
            if (!packaged && locale != "en") {
                url += "&lang=" + encodeURIComponent(Util.userLanguage());
                if (live)
                    url += "&live=1";
            }
            if (Cloud.isLocalHost() && !live)
                return localRequestAsync(url).then(function (resp) {
                    if (resp.statusCode == 404)
                        return privateGetTextAsync(url);
                    else
                        return resp.text;
                });
            else
                return privateGetTextAsync(url);
        }
        Cloud.downloadMarkdownAsync = downloadMarkdownAsync;
        function privateDeleteAsync(path) {
            return privateRequestAsync({ url: path, method: "DELETE" }).then(function (resp) { return resp.json; });
        }
        Cloud.privateDeleteAsync = privateDeleteAsync;
        function privatePostAsync(path, data, forceLiveEndpoint) {
            if (forceLiveEndpoint === void 0) { forceLiveEndpoint = false; }
            return privateRequestAsync({ url: path, data: data || {}, forceLiveEndpoint: forceLiveEndpoint }).then(function (resp) { return resp.json; });
        }
        Cloud.privatePostAsync = privatePostAsync;
        function isLoggedIn() { return !!Cloud.accessToken; }
        Cloud.isLoggedIn = isLoggedIn;
        function isNavigatorOnline() {
            return navigator && navigator.onLine;
        }
        Cloud.isNavigatorOnline = isNavigatorOnline;
        function isOnline() {
            if (typeof navigator !== "undefined" && isNavigatorOnline()) {
                _isOnline = true;
            }
            return _isOnline;
        }
        Cloud.isOnline = isOnline;
        function getServiceUrl() {
            return Cloud.apiRoot.replace(/\/api\/$/, "");
        }
        Cloud.getServiceUrl = getServiceUrl;
        function getUserId() {
            var m = /^0(\w+)\./.exec(Cloud.accessToken);
            if (m)
                return m[1];
            return null;
        }
        Cloud.getUserId = getUserId;
        function parseScriptId(uri) {
            var target = pxt.appTarget;
            if (!uri || !target.appTheme || !target.cloud || !target.cloud.sharing)
                return undefined;
            var domains = ["makecode.com"];
            if (target.appTheme.embedUrl)
                domains.push(target.appTheme.embedUrl);
            if (target.appTheme.shareUrl)
                domains.push(target.appTheme.shareUrl);
            domains = Util.unique(domains, function (d) { return d; }).map(function (d) { return Util.escapeForRegex(Util.stripUrlProtocol(d).replace(/\/$/, '')).toLowerCase(); });
            var rx = "^((https://)?(?:" + domains.join('|') + ")/)?(api/oembed?url=.*%2F([^&]*)&.*?|([a-z0-9-_]+))$";
            var m = new RegExp(rx, 'i').exec(uri.trim());
            var scriptid = m && (!m[1] || domains.indexOf(Util.escapeForRegex(m[1].replace(/https:\/\//, '').replace(/\/$/, '')).toLowerCase()) >= 0) && (m[3] || m[4]) ? (m[3] ? m[3] : m[4]) : null;
            if (!scriptid)
                return undefined;
            if (scriptid[0] == "_" && scriptid.length == 13)
                return scriptid;
            if (scriptid.length == 23 && /^[0-9\-]+$/.test(scriptid))
                return scriptid;
            return undefined;
        }
        Cloud.parseScriptId = parseScriptId;
    })(Cloud = pxt.Cloud || (pxt.Cloud = {}));
})(pxt || (pxt = {}));

/// <reference path="./winrtrefs.d.ts"/>
/// <reference path="../built/pxtlib.d.ts"/>
var pxt;
(function (pxt) {
    var winrt;
    (function (winrt) {
        function driveDeployCoreAsync(res) {
            var drives = pxt.appTarget.compile.deployDrives;
            pxt.Util.assert(!!drives);
            pxt.debug("deploying to drives " + drives);
            var drx = new RegExp(drives);
            var firmware = pxt.outputName();
            var r = res.outfiles[firmware];
            function writeAsync(folder) {
                pxt.debug("writing " + firmware + " to " + folder.displayName);
                return pxt.winrt.promisify(folder.createFileAsync(firmware, Windows.Storage.CreationCollisionOption.replaceExisting)
                    .then(function (file) { return Windows.Storage.FileIO.writeTextAsync(file, r); })).then(function (r) { }).catch(function (e) {
                    pxt.debug("failed to write " + firmware + " to " + folder.displayName + " - " + e);
                });
            }
            return pxt.winrt.promisify(Windows.Storage.KnownFolders.removableDevices.getFoldersAsync())
                .then(function (ds) {
                var df = ds.filter(function (d) { return drx.test(d.displayName); });
                var pdf = df.map(writeAsync);
                var all = Promise.join.apply(Promise, pdf);
                return all;
            }).then(function (r) { });
        }
        winrt.driveDeployCoreAsync = driveDeployCoreAsync;
        function browserDownloadAsync(text, name, contentType) {
            var file;
            return pxt.winrt.promisify(Windows.Storage.ApplicationData.current.temporaryFolder.createFileAsync(name, Windows.Storage.CreationCollisionOption.replaceExisting)
                .then(function (f) { return Windows.Storage.FileIO.writeTextAsync(file = f, text); })
                .then(function () { return Windows.System.Launcher.launchFileAsync(file); })
                .then(function (b) { }));
        }
        winrt.browserDownloadAsync = browserDownloadAsync;
        function saveOnlyAsync(res) {
            var useUf2 = pxt.appTarget.compile.useUF2;
            var fileTypes = useUf2 ? [".uf2"] : [".hex"];
            var savePicker = new Windows.Storage.Pickers.FileSavePicker();
            savePicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
            savePicker.fileTypeChoices.insert("MakeCode binary file", fileTypes);
            savePicker.suggestedFileName = res.downloadFileBaseName;
            return pxt.winrt.promisify(savePicker.pickSaveFileAsync()
                .then(function (file) {
                if (file) {
                    var fileContent = useUf2 ? res.outfiles[pxtc.BINARY_UF2] : res.outfiles[pxtc.BINARY_HEX];
                    if (!pxt.isOutputText()) {
                        fileContent = atob(fileContent);
                    }
                    var ar_1 = [];
                    var bytes = pxt.Util.stringToUint8Array(fileContent);
                    bytes.forEach(function (b) { return ar_1.push(b); });
                    return Windows.Storage.FileIO.writeBytesAsync(file, ar_1)
                        .then(function () { return true; });
                }
                // Save cancelled
                return Promise.resolve(false);
            }));
        }
        winrt.saveOnlyAsync = saveOnlyAsync;
    })(winrt = pxt.winrt || (pxt.winrt = {}));
})(pxt || (pxt = {}));
/// <reference path="./winrtrefs.d.ts"/>
/// <reference path="../built/pxtlib.d.ts"/>
var pxt;
(function (pxt) {
    var winrt;
    (function (winrt) {
        var WindowsRuntimeIO = /** @class */ (function () {
            function WindowsRuntimeIO() {
                this.onData = function (v) { };
                this.onEvent = function (v) { };
                this.onError = function (e) { };
            }
            WindowsRuntimeIO.prototype.error = function (msg) {
                throw new Error(pxt.U.lf("USB/HID error ({0})", msg));
            };
            WindowsRuntimeIO.prototype.reconnectAsync = function () {
                var _this = this;
                return this.disconnectAsync()
                    .then(function () { return _this.initAsync(); });
            };
            WindowsRuntimeIO.prototype.isSwitchingToBootloader = function () {
                isSwitchingToBootloader();
            };
            WindowsRuntimeIO.prototype.disconnectAsync = function () {
                if (this.dev) {
                    var d = this.dev;
                    delete this.dev;
                    d.close();
                }
                return Promise.resolve();
            };
            WindowsRuntimeIO.prototype.sendPacketAsync = function (pkt) {
                if (!this.dev)
                    return Promise.resolve();
                var ar = [0];
                for (var i = 0; i < Math.max(pkt.length, 64); ++i)
                    ar.push(pkt[i] || 0);
                var dataWriter = new Windows.Storage.Streams.DataWriter();
                dataWriter.writeBytes(ar);
                var buffer = dataWriter.detachBuffer();
                var report = this.dev.createOutputReport(0);
                report.data = buffer;
                return pxt.winrt.promisify(this.dev.sendOutputReportAsync(report)
                    .then(function (value) {
                    pxt.debug("hf2: " + value + " bytes written");
                }));
            };
            WindowsRuntimeIO.prototype.initAsync = function (isRetry) {
                var _this = this;
                if (isRetry === void 0) { isRetry = false; }
                pxt.Util.assert(!this.dev, "HID interface not properly reseted");
                var wd = Windows.Devices;
                var whid = wd.HumanInterfaceDevice.HidDevice;
                var rejectDeviceNotFound = function () {
                    var err = new Error(pxt.U.lf("Device not found"));
                    err.notifyUser = true;
                    err.type = "devicenotfound";
                    return Promise.reject(err);
                };
                var getDevicesPromise = hidSelectors.reduce(function (soFar, currentSelector) {
                    // Try all selectors, in order, until some devices are found
                    return soFar.then(function (devices) {
                        if (devices && devices.length) {
                            return Promise.resolve(devices);
                        }
                        return wd.Enumeration.DeviceInformation.findAllAsync(currentSelector, null);
                    });
                }, Promise.resolve(null));
                var deviceId;
                return getDevicesPromise
                    .then(function (devices) {
                    if (!devices || !devices[0]) {
                        pxt.debug("no hid device found");
                        return Promise.reject(new Error("no hid device found"));
                    }
                    pxt.debug("hid enumerate " + devices.length + " devices");
                    var device = devices[0];
                    pxt.debug("hid connect to " + device.name + " (" + device.id + ")");
                    deviceId = device.id;
                    return whid.fromIdAsync(device.id, Windows.Storage.FileAccessMode.readWrite);
                })
                    .then(function (r) {
                    _this.dev = r;
                    if (!_this.dev) {
                        pxt.debug("can't connect to hid device");
                        var status_1 = Windows.Devices.Enumeration.DeviceAccessInformation.createFromId(deviceId).currentStatus;
                        pxt.reportError("winrt_device", "could not connect to HID device; device status: " + status_1);
                        return Promise.reject(new Error("can't connect to hid device"));
                    }
                    pxt.debug("hid device version " + _this.dev.version);
                    _this.dev.addEventListener("inputreportreceived", function (e) {
                        pxt.debug("input report");
                        var dr = Windows.Storage.Streams.DataReader.fromBuffer(e.report.data);
                        var values = [];
                        while (dr.unconsumedBufferLength) {
                            values.push(dr.readByte());
                        }
                        if (values.length == 65 && values[0] === 0) {
                            values.shift();
                        }
                        _this.onData(new Uint8Array(values));
                    });
                    return Promise.resolve();
                })
                    .catch(function (e) {
                    if (isRetry) {
                        return rejectDeviceNotFound();
                    }
                    return winrt.bootloaderViaBaud()
                        .then(function () {
                        return _this.initAsync(true);
                    })
                        .catch(function () {
                        return rejectDeviceNotFound();
                    });
                });
            };
            return WindowsRuntimeIO;
        }());
        winrt.WindowsRuntimeIO = WindowsRuntimeIO;
        winrt.packetIO = undefined;
        function mkPacketIOAsync() {
            pxt.U.assert(!winrt.packetIO);
            winrt.packetIO = new WindowsRuntimeIO();
            return winrt.packetIO.initAsync()
                .catch(function (e) {
                winrt.packetIO = null;
                return Promise.reject(e);
            })
                .then(function () { return winrt.packetIO; });
        }
        winrt.mkPacketIOAsync = mkPacketIOAsync;
        function isSwitchingToBootloader() {
            expectingAdd = true;
            if (winrt.packetIO && winrt.packetIO.dev) {
                expectingRemove = true;
            }
        }
        winrt.isSwitchingToBootloader = isSwitchingToBootloader;
        var hidSelectors = [];
        var watchers = [];
        var deviceCount = 0;
        var expectingAdd = false;
        var expectingRemove = false;
        function initWinrtHid(reconnectUf2WrapperCb, disconnectUf2WrapperCb) {
            var wd = Windows.Devices;
            var wde = Windows.Devices.Enumeration.DeviceInformation;
            var whid = wd.HumanInterfaceDevice.HidDevice;
            if (pxt.appTarget && pxt.appTarget.compile && pxt.appTarget.compile.hidSelectors) {
                pxt.appTarget.compile.hidSelectors.forEach(function (s) {
                    var sel = whid.getDeviceSelector(parseInt(s.usagePage), parseInt(s.usageId), parseInt(s.vid), parseInt(s.pid));
                    hidSelectors.push(sel);
                });
            }
            hidSelectors.forEach(function (s) {
                var watcher = wde.createWatcher(s, null);
                watcher.addEventListener("added", function (e) {
                    pxt.debug("new hid device detected: " + e.id);
                    if (expectingAdd) {
                        expectingAdd = false;
                    }
                    else {
                        // A new device was plugged in. If it's the first one, then reconnect the UF2 wrapper. Otherwise,
                        // we're already connected to a plugged device, so don't do anything.
                        ++deviceCount;
                        if (deviceCount === 1 && reconnectUf2WrapperCb) {
                            reconnectUf2WrapperCb();
                        }
                    }
                });
                watcher.addEventListener("removed", function (e) {
                    pxt.debug("hid device closed: " + e.id);
                    if (expectingRemove) {
                        expectingRemove = false;
                    }
                    else {
                        // A device was unplugged. If there were more than 1 device, we don't know whether the unplugged
                        // one is the one we were connected to. In that case, reconnect the UF2 wrapper. If no more devices
                        // are left, disconnect the existing wrapper while we wait for a new device to be plugged in.
                        --deviceCount;
                        if (deviceCount > 0 && reconnectUf2WrapperCb) {
                            reconnectUf2WrapperCb();
                        }
                        else if (deviceCount === 0 && disconnectUf2WrapperCb) {
                            disconnectUf2WrapperCb();
                        }
                    }
                });
                watcher.addEventListener("updated", function (e) {
                    // As per MSDN doc, we MUST subscribe to this event, otherwise the watcher doesn't work
                });
                watchers.push(watcher);
            });
            watchers.forEach(function (w) { return w.start(); });
        }
        winrt.initWinrtHid = initWinrtHid;
    })(winrt = pxt.winrt || (pxt.winrt = {}));
})(pxt || (pxt = {}));
/// <reference path="./winrtrefs.d.ts"/>
var pxt;
(function (pxt) {
    var winrt;
    (function (winrt) {
        var watcher;
        var deviceNameFilter;
        var activePorts = {};
        function initSerial() {
            var hasDeviceFilter = !!pxt.appTarget.serial &&
                (!!pxt.appTarget.serial.nameFilter || (!!pxt.appTarget.serial.vendorId && !!pxt.appTarget.serial.productId));
            var canLogSerial = !!pxt.appTarget.serial && pxt.appTarget.serial.log;
            if (!canLogSerial || !hasDeviceFilter)
                return;
            var sd = Windows.Devices.SerialCommunication.SerialDevice;
            var serialDeviceSelector;
            if (!pxt.appTarget.serial.vendorId || !pxt.appTarget.serial.productId) {
                deviceNameFilter = new RegExp(pxt.appTarget.serial.nameFilter);
                serialDeviceSelector = sd.getDeviceSelector();
            }
            else {
                serialDeviceSelector = sd.getDeviceSelectorFromUsbVidPid(parseInt(pxt.appTarget.serial.vendorId), parseInt(pxt.appTarget.serial.productId));
            }
            // Create a device watcher to look for instances of the Serial device
            // As per MSDN doc, to use the correct overload, we pass null as 2nd argument
            watcher = Windows.Devices.Enumeration.DeviceInformation.createWatcher(serialDeviceSelector, null);
            watcher.addEventListener("added", deviceAdded);
            watcher.addEventListener("removed", deviceRemoved);
            watcher.addEventListener("updated", deviceUpdated);
            watcher.start();
        }
        winrt.initSerial = initSerial;
        function suspendSerialAsync() {
            if (watcher) {
                watcher.stop();
                watcher.removeEventListener("added", deviceAdded);
                watcher.removeEventListener("removed", deviceRemoved);
                watcher.removeEventListener("updated", deviceUpdated);
                watcher = undefined;
            }
            var stoppedReadingOpsPromise = Promise.resolve();
            Object.keys(activePorts).forEach(function (deviceId) {
                var port = activePorts[deviceId];
                var currentRead = port.readingOperation;
                if (currentRead) {
                    var deferred_1 = Promise.defer();
                    port.cancellingDeferred = deferred_1;
                    stoppedReadingOpsPromise = stoppedReadingOpsPromise.then(function () {
                        return deferred_1.promise
                            .timeout(500)
                            .catch(function (e) {
                            pxt.reportError("winrt_device", "could not cancel reading operation for a device: " + e.message);
                        });
                    });
                    currentRead.cancel();
                }
            });
            return stoppedReadingOpsPromise
                .then(function () {
                Object.keys(activePorts).forEach(function (deviceId) {
                    var port = activePorts[deviceId];
                    if (port.device) {
                        var device = port.device;
                        device.close();
                    }
                });
                activePorts = {};
            });
        }
        winrt.suspendSerialAsync = suspendSerialAsync;
        /**
         * Most Arduino devices support switching into bootloader by opening the COM port at 1200 baudrate.
         */
        function bootloaderViaBaud() {
            if (!pxt.appTarget || !pxt.appTarget.compile || !pxt.appTarget.compile.useUF2 ||
                !pxt.appTarget.simulator || !pxt.appTarget.simulator.boardDefinition || !pxt.appTarget.simulator.boardDefinition.bootloaderBaudSwitchInfo) {
                return Promise.reject(new Error("device does not support switching to bootloader via baudrate"));
            }
            var allSerialDevices;
            var vidPidInfo = pxt.appTarget.simulator.boardDefinition.bootloaderBaudSwitchInfo;
            var selector = {
                vid: vidPidInfo.vid,
                pid: vidPidInfo.pid,
                usageId: undefined,
                usagePage: undefined
            };
            return connectSerialDevicesAsync([selector])
                .then(function (serialDevices) {
                if (!serialDevices || serialDevices.length === 0) {
                    // No device found, it really looks like no device is plugged in. Bail out.
                    return Promise.reject(new Error("no serial devices to switch into bootloader"));
                }
                allSerialDevices = serialDevices;
                if (allSerialDevices.length) {
                    winrt.isSwitchingToBootloader();
                }
                allSerialDevices.forEach(function (dev) {
                    dev.baudRate = 1200;
                    dev.close();
                });
                // A long delay is needed before attempting to connect to the bootloader device, enough for the OS to
                // recognize the device has been plugged in. Without drivers, connection to the device might still fail
                // the first time, but drivers should be installed by the time the user clicks Download again, at which
                // point flashing will work without the user ever needing to manually set the device to bootloader
                return Promise.delay(1500);
            });
        }
        winrt.bootloaderViaBaud = bootloaderViaBaud;
        /**
         * Connects to all matching serial devices without initializing the full PXT serial stack. Returns the list of
         * devices that were successfully connected to, but doesn't do anything with these devices.
         */
        function connectSerialDevicesAsync(hidSelectors) {
            if (!hidSelectors) {
                return Promise.resolve([]);
            }
            var wd = Windows.Devices;
            var sd = wd.SerialCommunication.SerialDevice;
            var di = wd.Enumeration.DeviceInformation;
            var serialDeviceSelectors = [];
            hidSelectors.forEach(function (s) {
                var sel = sd.getDeviceSelectorFromUsbVidPid(parseInt(s.vid), parseInt(s.pid));
                serialDeviceSelectors.push(sel);
            });
            var allDevicesPromise = serialDeviceSelectors.reduce(function (promiseSoFar, sel) {
                var deviceInfoSoFar;
                return promiseSoFar
                    .then(function (diSoFar) {
                    deviceInfoSoFar = diSoFar;
                    return di.findAllAsync(sel, null);
                })
                    .then(function (foundDevices) {
                    if (deviceInfoSoFar) {
                        for (var i = 0; i < foundDevices.length; ++i) {
                            deviceInfoSoFar.push(foundDevices[i]);
                        }
                    }
                    else {
                        deviceInfoSoFar = foundDevices;
                    }
                    return Promise.resolve(deviceInfoSoFar);
                });
            }, Promise.resolve(null));
            return allDevicesPromise
                .then(function (allDeviceInfo) {
                if (!allDeviceInfo) {
                    return Promise.resolve([]);
                }
                return Promise.map(allDeviceInfo, function (devInfo) {
                    return sd.fromIdAsync(devInfo.id);
                });
            });
        }
        winrt.connectSerialDevicesAsync = connectSerialDevicesAsync;
        function deviceAdded(deviceInfo) {
            if (deviceNameFilter && !deviceNameFilter.test(deviceInfo.name)) {
                return;
            }
            pxt.debug("serial port added " + deviceInfo.name + " - " + deviceInfo.id);
            activePorts[deviceInfo.id] = {
                info: deviceInfo
            };
            Windows.Devices.SerialCommunication.SerialDevice.fromIdAsync(deviceInfo.id)
                .done(function (dev) {
                activePorts[deviceInfo.id].device = dev;
                startDevice(deviceInfo.id);
            });
        }
        function deviceRemoved(deviceInfo) {
            delete activePorts[deviceInfo.id];
        }
        function deviceUpdated(deviceInfo) {
            var port = activePorts[deviceInfo.id];
            if (port) {
                port.info.update(deviceInfo);
            }
        }
        var readingOpsCount = 0;
        function startDevice(id) {
            var port = activePorts[id];
            if (!port)
                return;
            if (!port.device) {
                var status_2 = Windows.Devices.Enumeration.DeviceAccessInformation.createFromId(id).currentStatus;
                pxt.reportError("winrt_device", "could not connect to serial device; device status: " + status_2);
                return;
            }
            var streams = Windows.Storage.Streams;
            port.device.baudRate = 115200;
            var stream = port.device.inputStream;
            var reader = new streams.DataReader(stream);
            reader.inputStreamOptions = streams.InputStreamOptions.partial;
            var serialBuffers = {};
            var readMore = function () {
                // Make sure the device is still active
                if (!activePorts[id] || !!port.cancellingDeferred) {
                    return;
                }
                port.readingOperation = reader.loadAsync(32);
                port.readingOperation.done(function (bytesRead) {
                    var msg = reader.readString(Math.floor(reader.unconsumedBufferLength / 4) * 4);
                    pxt.Util.bufferSerial(serialBuffers, msg, id);
                    setTimeout(function () { return readMore(); }, 1);
                }, function (e) {
                    var status = port.readingOperation.operation.status;
                    if (status === Windows.Foundation.AsyncStatus.canceled) {
                        reader.detachStream();
                        reader.close();
                        if (port.cancellingDeferred) {
                            setTimeout(function () { return port.cancellingDeferred.resolve(); }, 25);
                        }
                    }
                    else {
                        setTimeout(function () { return startDevice(id); }, 1000);
                    }
                });
            };
            setTimeout(function () { return readMore(); }, 100);
        }
    })(winrt = pxt.winrt || (pxt.winrt = {}));
})(pxt || (pxt = {}));
/// <reference path="./winrtrefs.d.ts"/>
var pxt;
(function (pxt) {
    var winrt;
    (function (winrt) {
        function promisify(p) {
            return new Promise(function (resolve, reject) {
                p.done(function (v) { return resolve(v); }, function (e) { return reject(e); });
            });
        }
        winrt.promisify = promisify;
        function toArray(v) {
            var r = [];
            var length = v.length;
            for (var i = 0; i < length; ++i)
                r.push(v[i]);
            return r;
        }
        winrt.toArray = toArray;
        /**
         * Detects if the script is running in a browser on windows
         */
        function isWindows() {
            return !!navigator && /Win32/i.test(navigator.platform);
        }
        winrt.isWindows = isWindows;
        function isWinRT() {
            return typeof Windows !== "undefined";
        }
        winrt.isWinRT = isWinRT;
        function initAsync(importHexImpl) {
            if (!isWinRT() || pxt.BrowserUtils.isIFrame())
                return Promise.resolve();
            var uiCore = Windows.UI.Core;
            var navMgr = uiCore.SystemNavigationManager.getForCurrentView();
            var app = Windows.UI.WebUI.WebUIApplication;
            app.addEventListener("suspending", suspendingHandler);
            app.addEventListener("resuming", resumingHandler);
            navMgr.onbackrequested = function (e) {
                // Ignore the built-in back button; it tries to back-navigate the sidedoc panel, but it crashes the
                // app if the sidedoc has been closed since the navigation happened
                pxt.log("BACK NAVIGATION");
                navMgr.appViewBackButtonVisibility = uiCore.AppViewBackButtonVisibility.collapsed;
                e.handled = true;
            };
            winrt.initSerial();
            return hasActivationProjectAsync()
                .then(function () {
                if (importHexImpl) {
                    importHex = importHexImpl;
                    app.removeEventListener("activated", initialActivationHandler);
                    app.addEventListener("activated", fileActivationHandler);
                }
            });
        }
        winrt.initAsync = initAsync;
        // Needed for when user double clicks a hex file without the app already running
        function captureInitialActivation() {
            if (!isWinRT()) {
                return;
            }
            initialActivationDeferred = Promise.defer();
            var app = Windows.UI.WebUI.WebUIApplication;
            app.addEventListener("activated", initialActivationHandler);
        }
        winrt.captureInitialActivation = captureInitialActivation;
        function loadActivationProject() {
            return initialActivationDeferred.promise
                .then(function (args) { return fileActivationHandler(args, /* createNewIfFailed */ true); });
        }
        winrt.loadActivationProject = loadActivationProject;
        function hasActivationProjectAsync() {
            if (!isWinRT()) {
                return Promise.resolve(false);
            }
            // By the time the webapp calls this, if the activation promise hasn't been settled yet, assume we missed the
            // activation event and pretend there were no activation args
            initialActivationDeferred.resolve(null); // This is no-op if the promise had been previously resolved
            return initialActivationDeferred.promise
                .then(function (args) {
                return Promise.resolve(args && args.kind === Windows.ApplicationModel.Activation.ActivationKind.file);
            });
        }
        winrt.hasActivationProjectAsync = hasActivationProjectAsync;
        function releaseAllDevicesAsync() {
            if (!isWinRT()) {
                return Promise.resolve();
            }
            return Promise.resolve()
                .then(function () {
                if (winrt.packetIO) {
                    pxt.log("disconnecting packetIO");
                    return winrt.packetIO.disconnectAsync();
                }
                return Promise.resolve();
            })
                .catch(function (e) {
                e.message = "error disconnecting packetIO: " + e.message;
                pxt.reportException(e);
            })
                .then(function () {
                pxt.log("suspending serial");
                return winrt.suspendSerialAsync();
            })
                .catch(function (e) {
                e.message = "error suspending serial: " + e.message;
                pxt.reportException(e);
            });
        }
        winrt.releaseAllDevicesAsync = releaseAllDevicesAsync;
        function initialActivationHandler(args) {
            Windows.UI.WebUI.WebUIApplication.removeEventListener("activated", initialActivationHandler);
            initialActivationDeferred.resolve(args);
        }
        function suspendingHandler(args) {
            pxt.log("suspending");
            var suspensionDeferral = args.suspendingOperation.getDeferral();
            return releaseAllDevicesAsync()
                .then(function () { return suspensionDeferral.complete(); }, function (e) { return suspensionDeferral.complete(); })
                .done();
        }
        function resumingHandler(args) {
            pxt.log("resuming");
            if (winrt.packetIO) {
                pxt.log("reconnet pack io");
                winrt.packetIO.reconnectAsync().done();
            }
            winrt.initSerial();
        }
        var initialActivationDeferred;
        var importHex;
        function fileActivationHandler(args, createNewIfFailed) {
            if (createNewIfFailed === void 0) { createNewIfFailed = false; }
            if (args.kind === Windows.ApplicationModel.Activation.ActivationKind.file) {
                var info = args;
                var file = info.files.getAt(0);
                if (file && file.isOfType(Windows.Storage.StorageItemTypes.file)) {
                    var f = file;
                    Windows.Storage.FileIO.readBufferAsync(f)
                        .then(function (buffer) {
                        var ar = [];
                        var dataReader = Windows.Storage.Streams.DataReader.fromBuffer(buffer);
                        while (dataReader.unconsumedBufferLength) {
                            ar.push(dataReader.readByte());
                        }
                        dataReader.close();
                        return pxt.cpp.unpackSourceFromHexAsync(new Uint8Array(ar));
                    })
                        .then(function (hex) { return importHex(hex, createNewIfFailed); });
                }
            }
        }
    })(winrt = pxt.winrt || (pxt.winrt = {}));
})(pxt || (pxt = {}));
/// <reference path="../built/pxtlib.d.ts"/>
/// <reference path="../built/pxteditor.d.ts"/>
/// <reference path="./winrtrefs.d.ts"/>
var pxt;
(function (pxt) {
    var winrt;
    (function (winrt) {
        var workspace;
        (function (workspace) {
            var U = pxt.Util;
            var folder;
            function fileApiAsync(path, data) {
                if (U.startsWith(path, "pkg/")) {
                    var id = path.slice(4);
                    if (data) {
                        return writePkgAsync(id, data);
                    }
                    else {
                        return readPkgAsync(id, true);
                    }
                }
                else if (path == "list") {
                    return initAsync()
                        .then(listPkgsAsync);
                }
                else {
                    throw throwError(404);
                }
            }
            workspace.fileApiAsync = fileApiAsync;
            function initAsync() {
                if (folder)
                    return Promise.resolve();
                var applicationData = Windows.Storage.ApplicationData.current;
                var localFolder = applicationData.localFolder;
                pxt.debug("winrt: initializing workspace");
                return winrt.promisify(localFolder.createFolderAsync(pxt.appTarget.id, Windows.Storage.CreationCollisionOption.openIfExists))
                    .then(function (fd) {
                    folder = fd;
                    pxt.debug("winrt: initialized workspace at " + folder.path);
                }).then(function () { });
            }
            function pathjoin() {
                var parts = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parts[_i] = arguments[_i];
                }
                return parts.join('\\');
            }
            function readFileAsync(path) {
                var fp = pathjoin(folder.path, path);
                pxt.debug("winrt: reading " + fp);
                return winrt.promisify(Windows.Storage.StorageFile.getFileFromPathAsync(fp)
                    .then(function (file) { return Windows.Storage.FileIO.readTextAsync(file); }));
            }
            function writeFileAsync(dir, name, content) {
                var fd = pathjoin(folder.path, dir);
                pxt.debug("winrt: writing " + pathjoin(fd, name));
                return winrt.promisify(Windows.Storage.StorageFolder.getFolderFromPathAsync(fd))
                    .then(function (dk) { return dk.createFileAsync(name, Windows.Storage.CreationCollisionOption.replaceExisting); })
                    .then(function (f) { return Windows.Storage.FileIO.writeTextAsync(f, content); })
                    .then(function () { });
            }
            function statOptAsync(path) {
                var fn = pathjoin(folder.path, path);
                pxt.debug("winrt: " + fn);
                return winrt.promisify(Windows.Storage.StorageFile.getFileFromPathAsync(fn)
                    .then(function (file) { return file.getBasicPropertiesAsync()
                    .then(function (props) {
                    return {
                        name: path,
                        mtime: props.dateModified.getTime()
                    };
                }); }));
            }
            function throwError(code, msg) {
                if (msg === void 0) { msg = null; }
                var err = new Error(msg || "Error " + code);
                err.statusCode = code;
                throw err;
            }
            var HEADER_JSON = ".header.json";
            function writePkgAsync(logicalDirname, data) {
                pxt.debug("winrt: writing package at " + logicalDirname);
                return winrt.promisify(folder.createFolderAsync(logicalDirname, Windows.Storage.CreationCollisionOption.openIfExists))
                    .then(function () { return Promise.map(data.files, function (f) { return readFileAsync(pathjoin(logicalDirname, f.name))
                    .then(function (text) {
                    if (f.name == pxt.CONFIG_NAME) {
                        try {
                            var cfg = JSON.parse(f.content);
                            if (!cfg.name) {
                                pxt.log("Trying to save invalid JSON config");
                                throwError(410);
                            }
                        }
                        catch (e) {
                            pxt.log("Trying to save invalid format JSON config");
                            throwError(410);
                        }
                    }
                    if (text !== f.prevContent) {
                        pxt.log("merge error for " + f.name + ": previous content changed...");
                        throwError(409);
                    }
                }, function (err) { }); }); })
                    .then(function () { return Promise.map(data.files, function (f) { return writeFileAsync(logicalDirname, f.name, f.content); }); })
                    .then(function () { return writeFileAsync(logicalDirname, HEADER_JSON, JSON.stringify(data.header, null, 4)); })
                    .then(function () { return readPkgAsync(logicalDirname, false); });
            }
            function readPkgAsync(logicalDirname, fileContents) {
                pxt.debug("winrt: reading package under " + logicalDirname);
                return readFileAsync(pathjoin(logicalDirname, pxt.CONFIG_NAME))
                    .then(function (text) {
                    var cfg = JSON.parse(text);
                    return Promise.map(pxt.allPkgFiles(cfg), function (fn) {
                        return statOptAsync(pathjoin(logicalDirname, fn))
                            .then(function (st) {
                            var rf = {
                                name: fn,
                                mtime: st ? st.mtime : null
                            };
                            if (st == null || !fileContents)
                                return rf;
                            else
                                return readFileAsync(pathjoin(logicalDirname, fn))
                                    .then(function (text) {
                                    rf.content = text;
                                    return rf;
                                });
                        });
                    })
                        .then(function (files) {
                        var rs = {
                            path: logicalDirname,
                            header: null,
                            config: cfg,
                            files: files
                        };
                        return readFileAsync(pathjoin(logicalDirname, HEADER_JSON))
                            .then(function (text) {
                            if (text)
                                rs.header = JSON.parse(text);
                        }, function (e) { })
                            .then(function () { return rs; });
                    });
                });
            }
            function listPkgsAsync() {
                return winrt.promisify(folder.getFoldersAsync())
                    .then(function (fds) { return Promise.map(fds, function (fd) { return readPkgAsync(fd.name, false); }); })
                    .then(function (fsPkgs) {
                    return Promise.resolve({ pkgs: fsPkgs });
                });
            }
            function resetAsync() {
                return winrt.promisify(folder.deleteAsync(Windows.Storage.StorageDeleteOption.default)
                    .then(function () {
                    folder = undefined;
                }));
            }
            function getProvider(base) {
                var r = {
                    listAsync: base.listAsync,
                    getAsync: base.getAsync,
                    setAsync: base.setAsync,
                    resetAsync: resetAsync,
                };
                return r;
            }
            workspace.getProvider = getProvider;
        })(workspace = winrt.workspace || (winrt.workspace = {}));
    })(winrt = pxt.winrt || (pxt.winrt = {}));
})(pxt || (pxt = {}));

var pxt;
(function (pxt) {
    var editor;
    (function (editor) {
        var FilterState;
        (function (FilterState) {
            FilterState[FilterState["Hidden"] = 0] = "Hidden";
            FilterState[FilterState["Visible"] = 1] = "Visible";
            FilterState[FilterState["Disabled"] = 2] = "Disabled";
        })(FilterState = editor.FilterState || (editor.FilterState = {}));
        editor.initExtensionsAsync = function (opts) { return Promise.resolve({}); };
        editor.initFieldExtensionsAsync = function (opts) { return Promise.resolve({}); };
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var editor;
    (function (editor_1) {
        var pendingRequests = {};
        /**
         * Binds incoming window messages to the project view.
         * Requires the "allowParentController" flag in the pxtarget.json/appTheme object.
         *
         * When the project view receives a request (EditorMessageRequest),
         * it starts the command and returns the result upon completion.
         * The response (EditorMessageResponse) contains the request id and result.
         * Some commands may be async, use the ``id`` field to correlate to the original request.
         */
        function bindEditorMessages(getEditorAsync) {
            var allowEditorMessages = (pxt.appTarget.appTheme.allowParentController || pxt.shell.isControllerMode())
                && pxt.BrowserUtils.isIFrame();
            var allowExtensionMessages = pxt.appTarget.appTheme.allowPackageExtensions;
            var allowSimTelemetry = pxt.appTarget.appTheme.allowSimulatorTelemetry;
            if (!allowEditorMessages && !allowExtensionMessages && !allowSimTelemetry)
                return;
            window.addEventListener("message", function (msg) {
                var data = msg.data;
                if (!data || !/^pxt(host|editor|pkgext|sim)$/.test(data.type))
                    return false;
                if (data.type === "pxtpkgext" && allowExtensionMessages) {
                    // Messages sent to the editor iframe from a child iframe containing an extension
                    getEditorAsync().then(function (projectView) {
                        projectView.handleExtensionRequest(data);
                    });
                }
                else if (data.type === "pxtsim" && allowSimTelemetry) {
                    var event_1 = data;
                    if (event_1.action === "event") {
                        if (event_1.category || event_1.message) {
                            pxt.reportError(event_1.category, event_1.message, event_1.data);
                        }
                        else {
                            pxt.tickEvent(event_1.tick, event_1.data);
                        }
                    }
                }
                else if (allowEditorMessages) {
                    // Messages sent to the editor from the parent frame
                    var p_1 = Promise.resolve();
                    var resp_1 = undefined;
                    if (data.type == "pxthost") {
                        var req_1 = pendingRequests[data.id];
                        if (!req_1) {
                            pxt.debug("pxthost: unknown request " + data.id);
                        }
                        else {
                            p_1 = p_1.then(function () { return req_1.resolve(data); });
                        }
                    }
                    else if (data.type == "pxteditor") {
                        getEditorAsync().then(function (projectView) {
                            var req = data;
                            pxt.debug("pxteditor: " + req.action);
                            switch (req.action.toLowerCase()) {
                                case "switchjavascript":
                                    p_1 = p_1.then(function () { return projectView.openJavaScript(); });
                                    break;
                                case "switchblocks":
                                    p_1 = p_1.then(function () { return projectView.openBlocks(); });
                                    break;
                                case "startsimulator":
                                    p_1 = p_1.then(function () { return projectView.startSimulator(); });
                                    break;
                                case "restartsimulator":
                                    p_1 = p_1.then(function () { return projectView.restartSimulator(); });
                                    break;
                                case "hidesimulator":
                                    p_1 = p_1.then(function () { return projectView.collapseSimulator(); });
                                    break;
                                case "showsimulator":
                                    p_1 = p_1.then(function () { return projectView.expandSimulator(); });
                                    break;
                                case "closeflyout":
                                    p_1 = p_1.then(function () { return projectView.closeFlyout(); });
                                    break;
                                case "redo":
                                    p_1 = p_1.then(function () {
                                        var editor = projectView.editor;
                                        if (editor && editor.hasRedo())
                                            editor.redo();
                                    });
                                    break;
                                case "undo":
                                    p_1 = p_1.then(function () {
                                        var editor = projectView.editor;
                                        if (editor && editor.hasUndo())
                                            editor.undo();
                                    });
                                    break;
                                case "setscale": {
                                    var zoommsg_1 = data;
                                    p_1 = p_1.then(function () { return projectView.editor.setScale(zoommsg_1.scale); });
                                    break;
                                }
                                case "stopsimulator": {
                                    var stop_1 = data;
                                    p_1 = p_1.then(function () { return projectView.stopSimulator(stop_1.unload); });
                                    break;
                                }
                                case "newproject": {
                                    var create_1 = data;
                                    p_1 = p_1.then(function () { return projectView.newProject(create_1.options); });
                                    break;
                                }
                                case "importproject": {
                                    var load_1 = data;
                                    p_1 = p_1.then(function () { return projectView.importProjectAsync(load_1.project, {
                                        filters: load_1.filters,
                                        searchBar: load_1.searchBar
                                    }); });
                                    break;
                                }
                                case "proxytosim": {
                                    var simmsg_1 = data;
                                    p_1 = p_1.then(function () { return projectView.proxySimulatorMessage(simmsg_1.content); });
                                    break;
                                }
                                case "renderblocks": {
                                    var rendermsg_1 = data;
                                    p_1 = p_1.then(function () { return projectView.renderBlocksAsync(rendermsg_1); })
                                        .then(function (r) { resp_1 = r.xml; });
                                    break;
                                }
                                case "toggletrace": {
                                    var togglemsg_1 = data;
                                    p_1 = p_1.then(function () { return projectView.toggleTrace(togglemsg_1.intervalSpeed); });
                                    break;
                                }
                                case "settracestate": {
                                    var trcmsg_1 = data;
                                    p_1 = p_1.then(function () { return projectView.setTrace(trcmsg_1.enabled, trcmsg_1.intervalSpeed); });
                                    break;
                                }
                            }
                        });
                    }
                    p_1.done(function () { return sendResponse(data, resp_1, true, undefined); }, function (err) { return sendResponse(data, resp_1, false, err); });
                }
                return true;
            }, false);
        }
        editor_1.bindEditorMessages = bindEditorMessages;
        /**
         * Sends analytics messages upstream to container if any
         */
        function enableControllerAnalytics() {
            if (!pxt.appTarget.appTheme.allowParentController || !pxt.BrowserUtils.isIFrame())
                return;
            var te = pxt.tickEvent;
            pxt.tickEvent = function (id, data) {
                if (te)
                    te(id, data);
                postHostMessageAsync({
                    type: 'pxthost',
                    action: 'event',
                    tick: id,
                    response: false,
                    data: data
                });
            };
            var rexp = pxt.reportException;
            pxt.reportException = function (err, data) {
                if (rexp)
                    rexp(err, data);
                try {
                    postHostMessageAsync({
                        type: 'pxthost',
                        action: 'event',
                        tick: 'error',
                        message: err.message,
                        response: false,
                        data: data
                    });
                }
                catch (e) {
                }
            };
            var re = pxt.reportError;
            pxt.reportError = function (cat, msg, data) {
                if (re)
                    re(cat, msg, data);
                postHostMessageAsync({
                    type: 'pxthost',
                    action: 'event',
                    tick: 'error',
                    category: cat,
                    message: msg,
                    data: data
                });
            };
        }
        editor_1.enableControllerAnalytics = enableControllerAnalytics;
        function sendResponse(request, resp, success, error) {
            if (request.response) {
                window.parent.postMessage({
                    type: request.type,
                    id: request.id,
                    resp: resp,
                    success: success,
                    error: error
                }, "*");
            }
        }
        /**
         * Posts a message from the editor to the host
         */
        function postHostMessageAsync(msg) {
            return new Promise(function (resolve, reject) {
                var env = pxt.Util.clone(msg);
                env.id = ts.pxtc.Util.guidGen();
                if (msg.response)
                    pendingRequests[env.id] = { resolve: resolve, reject: reject };
                window.parent.postMessage(env, "*");
                if (!msg.response)
                    resolve(undefined);
            });
        }
        editor_1.postHostMessageAsync = postHostMessageAsync;
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var editor;
    (function (editor) {
        var PermissionResponses;
        (function (PermissionResponses) {
            PermissionResponses[PermissionResponses["Granted"] = 0] = "Granted";
            PermissionResponses[PermissionResponses["Denied"] = 1] = "Denied";
            PermissionResponses[PermissionResponses["NotAvailable"] = 2] = "NotAvailable";
        })(PermissionResponses = editor.PermissionResponses || (editor.PermissionResponses = {}));
    })(editor = pxt.editor || (pxt.editor = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var storage;
    (function (storage) {
        var MemoryStorage = /** @class */ (function () {
            function MemoryStorage() {
                this.items = {};
            }
            MemoryStorage.prototype.removeItem = function (key) {
                delete this.items[key];
            };
            MemoryStorage.prototype.getItem = function (key) {
                return this.items[key];
            };
            MemoryStorage.prototype.setItem = function (key, value) {
                this.items[key] = value;
            };
            MemoryStorage.prototype.clear = function () {
                this.items = {};
            };
            return MemoryStorage;
        }());
        var LocalStorage = /** @class */ (function () {
            function LocalStorage(storageId) {
                this.storageId = storageId;
            }
            LocalStorage.prototype.targetKey = function (key) {
                return this.storageId + '/' + key;
            };
            LocalStorage.prototype.removeItem = function (key) {
                window.localStorage.removeItem(this.targetKey(key));
            };
            LocalStorage.prototype.getItem = function (key) {
                return window.localStorage[this.targetKey(key)];
            };
            LocalStorage.prototype.setItem = function (key, value) {
                window.localStorage[this.targetKey(key)] = value;
            };
            LocalStorage.prototype.clear = function () {
                var prefix = this.targetKey('');
                var keys = [];
                for (var i = 0; i < window.localStorage.length; ++i) {
                    var key = window.localStorage.key(i);
                    if (key.indexOf(prefix) == 0)
                        keys.push(key);
                }
                keys.forEach(function (key) { return window.localStorage.removeItem(key); });
            };
            return LocalStorage;
        }());
        function storageId() {
            if (pxt.appTarget)
                return pxt.appTarget.id;
            var cfg = window.pxtConfig;
            if (cfg)
                return cfg.targetId;
            var bndl = window.pxtTargetBundle;
            if (bndl)
                return bndl.id;
            return '';
        }
        storage.storageId = storageId;
        var impl;
        function init() {
            if (impl)
                return;
            // test if local storage is supported
            var sid = storageId();
            var supported = false;
            // no local storage in sandbox mode
            if (!pxt.shell.isSandboxMode()) {
                try {
                    window.localStorage[sid] = '1';
                    var v = window.localStorage[sid];
                    supported = true;
                }
                catch (e) { }
            }
            if (!supported) {
                impl = new MemoryStorage();
                pxt.debug('storage: in memory');
            }
            else {
                impl = new LocalStorage(sid);
                pxt.debug("storage: local under " + sid);
            }
        }
        function setLocal(key, value) {
            init();
            impl.setItem(key, value);
        }
        storage.setLocal = setLocal;
        function getLocal(key) {
            init();
            return impl.getItem(key);
        }
        storage.getLocal = getLocal;
        function removeLocal(key) {
            init();
            impl.removeItem(key);
        }
        storage.removeLocal = removeLocal;
        function clearLocal() {
            init();
            impl.clear();
        }
        storage.clearLocal = clearLocal;
    })(storage = pxt.storage || (pxt.storage = {}));
})(pxt || (pxt = {}));
/// <reference path="../localtypings/monaco.d.ts" />
/// <reference path="../built/pxtlib.d.ts"/>
var pxt;
(function (pxt) {
    var vs;
    (function (vs) {
        function syncModels(mainPkg, libs, currFile, readOnly) {
            if (readOnly)
                return;
            var extraLibs = monaco.languages.typescript.typescriptDefaults.getExtraLibs();
            var modelMap = {};
            mainPkg.sortedDeps().forEach(function (pkg) {
                pkg.getFiles().forEach(function (f) {
                    var fp = pkg.id + "/" + f;
                    var proto = "pkg:" + fp;
                    if (/\.(ts)$/.test(f) && fp != currFile) {
                        if (!monaco.languages.typescript.typescriptDefaults.getExtraLibs()[fp]) {
                            var content = pkg.readFile(f) || " ";
                            libs[fp] = monaco.languages.typescript.typescriptDefaults.addExtraLib(content, fp);
                        }
                        modelMap[fp] = "1";
                    }
                });
            });
            // dispose of any extra libraries, the typescript worker will be killed as a result of this
            Object.keys(extraLibs)
                .filter(function (lib) { return /\.(ts)$/.test(lib) && !modelMap[lib]; })
                .forEach(function (lib) {
                libs[lib].dispose();
            });
        }
        vs.syncModels = syncModels;
        function initMonacoAsync(element) {
            return new Promise(function (resolve, reject) {
                if (typeof (window.monaco) === 'object') {
                    // monaco is already loaded
                    resolve(createEditor(element));
                    return;
                }
                var monacoPaths = window.MonacoPaths;
                var onGotAmdLoader = function () {
                    var req = window.require;
                    req.config({ paths: monacoPaths });
                    // Load monaco
                    req(['vs/editor/editor.main'], function () {
                        setupMonaco();
                        resolve(createEditor(element));
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = monacoPaths['vs/loader'];
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onGotAmdLoader();
                }
            });
        }
        vs.initMonacoAsync = initMonacoAsync;
        function setupMonaco() {
            if (!monaco.languages.typescript)
                return;
            initAsmMonarchLanguage();
            // validation settings
            monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                noSyntaxValidation: true,
                noSemanticValidation: true
            });
            // compiler options
            monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                allowUnreachableCode: true,
                noImplicitAny: true,
                allowJs: false,
                allowUnusedLabels: true,
                target: monaco.languages.typescript.ScriptTarget.ES5,
                outDir: "built",
                rootDir: ".",
                noLib: true,
                mouseWheelZoom: false
            });
            // maximum idle time
            monaco.languages.typescript.typescriptDefaults.setMaximunWorkerIdleTime(20 * 60 * 1000);
        }
        function createEditor(element) {
            var inverted = pxt.appTarget.appTheme.invertedMonaco;
            var editor = monaco.editor.create(element, {
                model: null,
                ariaLabel: pxt.Util.lf("JavaScript editor"),
                fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'monospace'",
                scrollBeyondLastLine: false,
                language: "typescript",
                mouseWheelZoom: false,
                wordBasedSuggestions: true,
                lineNumbersMinChars: 3,
                formatOnPaste: true,
                minimap: {
                    enabled: false
                },
                autoIndent: true,
                dragAndDrop: true,
                matchBrackets: true,
                occurrencesHighlight: false,
                quickSuggestionsDelay: 200,
                theme: inverted ? 'vs-dark' : 'vs',
                //accessibilitySupport: 'on',
                accessibilityHelpUrl: "" //TODO: Add help url explaining how to use the editor with a screen reader
            });
            editor.layout();
            return editor;
        }
        vs.createEditor = createEditor;
        function initAsmMonarchLanguage() {
            monaco.languages.register({ id: 'asm', extensions: ['.asm'] });
            monaco.languages.setMonarchTokensProvider('asm', {
                // Set defaultToken to invalid to see what you do not tokenize yet
                // defaultToken: 'invalid',
                tokenPostfix: '',
                //Extracted from http://infocenter.arm.com/help/topic/com.arm.doc.qrc0006e/QRC0006_UAL16.pdf
                //Should be a superset of the instructions emitted
                keywords: [
                    'movs', 'mov', 'adds', 'add', 'adcs', 'adr', 'subs', 'sbcs', 'sub', 'rsbs',
                    'muls', 'cmp', 'cmn', 'ands', 'eors', 'orrs', 'bics', 'mvns', 'tst', 'lsls',
                    'lsrs', 'asrs', 'rors', 'ldr', 'ldrh', 'ldrb', 'ldrsh', 'ldrsb', 'ldm',
                    'str', 'strh', 'strb', 'stm', 'push', 'pop', 'cbz', 'cbnz', 'b', 'bl', 'bx', 'blx',
                    'sxth', 'sxtb', 'uxth', 'uxtb', 'rev', 'rev16', 'revsh', 'svc', 'cpsid', 'cpsie',
                    'setend', 'bkpt', 'nop', 'sev', 'wfe', 'wfi', 'yield',
                    'beq', 'bne', 'bcs', 'bhs', 'bcc', 'blo', 'bmi', 'bpl', 'bvs', 'bvc', 'bhi', 'bls',
                    'bge', 'blt', 'bgt', 'ble', 'bal',
                    //Registers
                    'r0', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r11', 'r12', 'r13', 'r14', 'r15',
                    'pc', 'sp', 'lr'
                ],
                typeKeywords: [
                    '.startaddr', '.hex', '.short', '.space', '.section', '.string', '.byte'
                ],
                operators: [],
                // Not all of these are valid in ARM Assembly
                symbols: /[:\*]+/,
                // C# style strings
                escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                // The main tokenizer for our languages
                tokenizer: {
                    root: [
                        // identifiers and keywords
                        [/(\.)?[a-z_$\.][\w$]*/, {
                                cases: {
                                    '@typeKeywords': 'keyword',
                                    '@keywords': 'keyword',
                                    '@default': 'identifier'
                                }
                            }],
                        // whitespace
                        { include: '@whitespace' },
                        // delimiters and operators
                        [/[{}()\[\]]/, '@brackets'],
                        [/[<>](?!@symbols)/, '@brackets'],
                        [/@symbols/, {
                                cases: {
                                    '@operators': 'operator',
                                    '@default': ''
                                }
                            }],
                        // @ annotations.
                        [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation' }],
                        // numbers
                        //[/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                        [/(#|(0[xX]))?[0-9a-fA-F]+/, 'number'],
                        // delimiter: after number because of .\d floats
                        [/[;,.]/, 'delimiter'],
                        // strings
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                        // characters
                        [/'[^\\']'/, 'string'],
                        [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                        [/'/, 'string.invalid']
                    ],
                    comment: [],
                    string: [
                        [/[^\\"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, 'white'],
                        [/\/\*/, 'comment', '@comment'],
                        [/;.*$/, 'comment'],
                    ],
                }
            });
        }
    })(vs = pxt.vs || (pxt.vs = {}));
})(pxt || (pxt = {}));
var pxt;
(function (pxt) {
    var shell;
    (function (shell) {
        var EditorLayoutType;
        (function (EditorLayoutType) {
            EditorLayoutType[EditorLayoutType["IDE"] = 0] = "IDE";
            EditorLayoutType[EditorLayoutType["Sandbox"] = 1] = "Sandbox";
            EditorLayoutType[EditorLayoutType["Widget"] = 2] = "Widget";
            EditorLayoutType[EditorLayoutType["Controller"] = 3] = "Controller";
        })(EditorLayoutType = shell.EditorLayoutType || (shell.EditorLayoutType = {}));
        var layoutType;
        var editorReadonly = false;
        function init() {
            if (layoutType !== undefined)
                return;
            var sandbox = /sandbox=1|#sandbox|#sandboxproject/i.test(window.location.href)
                // in iframe
                || pxt.BrowserUtils.isIFrame();
            var nosandbox = /nosandbox=1/i.test(window.location.href);
            var controller = /controller=1/i.test(window.location.href) && pxt.BrowserUtils.isIFrame();
            var readonly = /readonly=1/i.test(window.location.href);
            var layout = /editorlayout=(widget|sandbox|ide)/i.exec(window.location.href);
            layoutType = EditorLayoutType.IDE;
            if (nosandbox)
                layoutType = EditorLayoutType.Widget;
            else if (controller)
                layoutType = EditorLayoutType.Controller;
            else if (sandbox)
                layoutType = EditorLayoutType.Sandbox;
            if (controller && readonly)
                editorReadonly = true;
            if (layout) {
                switch (layout[1].toLowerCase()) {
                    case "widget":
                        layoutType = EditorLayoutType.Widget;
                        break;
                    case "sandbox":
                        layoutType = EditorLayoutType.Sandbox;
                        break;
                    case "ide":
                        layoutType = EditorLayoutType.IDE;
                        break;
                }
            }
            pxt.debug("shell: layout type " + EditorLayoutType[layoutType] + ", readonly " + isReadOnly());
        }
        function layoutTypeClass() {
            init();
            return pxt.shell.EditorLayoutType[layoutType].toLowerCase();
        }
        shell.layoutTypeClass = layoutTypeClass;
        function isSandboxMode() {
            init();
            return layoutType == EditorLayoutType.Sandbox;
        }
        shell.isSandboxMode = isSandboxMode;
        function isReadOnly() {
            return (isSandboxMode()
                && !/[?&]edit=1/i.test(window.location.href)) ||
                (isControllerMode() && editorReadonly);
        }
        shell.isReadOnly = isReadOnly;
        function isControllerMode() {
            init();
            return layoutType == EditorLayoutType.Controller;
        }
        shell.isControllerMode = isControllerMode;
    })(shell = pxt.shell || (pxt.shell = {}));
})(pxt || (pxt = {}));
/// <reference path="../built/pxtlib.d.ts"/>
var pxt;
(function (pxt) {
    var workspace;
    (function (workspace) {
        function freshHeader(name, modTime) {
            var header = {
                target: pxt.appTarget.id,
                targetVersion: pxt.appTarget.versions.target,
                name: name,
                meta: {},
                editor: pxt.JAVASCRIPT_PROJECT_NAME,
                pubId: "",
                pubCurrent: false,
                _rev: null,
                id: pxt.U.guidGen(),
                recentUse: modTime,
                modificationTime: modTime,
                blobId: null,
                blobVersion: null,
                blobCurrent: false,
                isDeleted: false,
            };
            return header;
        }
        workspace.freshHeader = freshHeader;
    })(workspace = pxt.workspace || (pxt.workspace = {}));
})(pxt || (pxt = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Helpers designed to help to make a simulator accessible.
var pxsim;
(function (pxsim) {
    var accessibility;
    (function (accessibility) {
        var liveRegion;
        function makeFocusable(elem) {
            elem.setAttribute("focusable", "true");
            elem.setAttribute("tabindex", "0");
        }
        accessibility.makeFocusable = makeFocusable;
        function enableKeyboardInteraction(elem, handlerKeyDown, handlerKeyUp) {
            if (handlerKeyDown) {
                elem.addEventListener('keydown', function (e) {
                    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                    if (charCode === 32 || charCode === 13) {
                        handlerKeyDown();
                    }
                });
            }
            if (handlerKeyUp) {
                elem.addEventListener('keyup', function (e) {
                    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                    if (charCode === 32 || charCode === 13) {
                        handlerKeyUp();
                    }
                });
            }
        }
        accessibility.enableKeyboardInteraction = enableKeyboardInteraction;
        function setAria(elem, role, label) {
            if (role && !elem.hasAttribute("role")) {
                elem.setAttribute("role", role);
            }
            if (label && !elem.hasAttribute("aria-label")) {
                elem.setAttribute("aria-label", label);
            }
        }
        accessibility.setAria = setAria;
        function setLiveContent(value) {
            if (!liveRegion) {
                var style = "position: absolute !important;" +
                    "display: block;" +
                    "visibility: visible;" +
                    "overflow: hidden;" +
                    "width: 1px;" +
                    "height: 1px;" +
                    "margin: -1px;" +
                    "border: 0;" +
                    "padding: 0;" +
                    "clip: rect(0 0 0 0);";
                liveRegion = document.createElement("div");
                liveRegion.setAttribute("role", "status");
                liveRegion.setAttribute("aria-live", "polite");
                liveRegion.setAttribute("aria-hidden", "false");
                liveRegion.setAttribute("style", style);
                document.body.appendChild(liveRegion);
            }
            if (liveRegion.textContent !== value) {
                liveRegion.textContent = value;
            }
        }
        accessibility.setLiveContent = setLiveContent;
    })(accessibility = pxsim.accessibility || (pxsim.accessibility = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var GROUND_COLOR = "blue";
    var POWER_COLOR = "red";
    ;
    ;
    ;
    ;
    ;
    ;
    function isOnBreadboardBottom(location) {
        var isBot = false;
        if (typeof location !== "string" && location.type === "breadboard") {
            var bbLoc = location;
            var row = bbLoc.row;
            isBot = 0 <= ["a", "b", "c", "d", "e"].indexOf(row);
        }
        return isBot;
    }
    var arrCount = function (a) { return a.reduce(function (p, n) { return p + (n ? 1 : 0); }, 0); };
    var arrAny = function (a) { return arrCount(a) > 0; };
    function computePowerUsage(wire) {
        var ends = [wire.start, wire.end];
        var endIsGround = ends.map(function (e) { return e === "ground"; });
        var endIsThreeVolt = ends.map(function (e) { return e === "threeVolt"; });
        var endIsBot = ends.map(function (e) { return isOnBreadboardBottom(e); });
        var hasGround = arrAny(endIsGround);
        var hasThreeVolt = arrAny(endIsThreeVolt);
        var hasBot = arrAny(endIsBot);
        return {
            topGround: hasGround && !hasBot,
            topThreeVolt: hasThreeVolt && !hasBot,
            bottomGround: hasGround && hasBot,
            bottomThreeVolt: hasThreeVolt && hasBot,
            singleGround: hasGround,
            singleThreeVolt: hasThreeVolt
        };
    }
    function mergePowerUsage(powerUsages) {
        var finalPowerUsage = powerUsages.reduce(function (p, n) { return ({
            topGround: p.topGround || n.topGround,
            topThreeVolt: p.topThreeVolt || n.topThreeVolt,
            bottomGround: p.bottomGround || n.bottomGround,
            bottomThreeVolt: p.bottomThreeVolt || n.bottomThreeVolt,
            singleGround: n.singleGround ? p.singleGround === null : p.singleGround,
            singleThreeVolt: n.singleThreeVolt ? p.singleThreeVolt === null : p.singleThreeVolt,
        }); }, {
            topGround: false,
            topThreeVolt: false,
            bottomGround: false,
            bottomThreeVolt: false,
            singleGround: null,
            singleThreeVolt: null,
        });
        if (finalPowerUsage.singleGround)
            finalPowerUsage.topGround = finalPowerUsage.bottomGround = false;
        if (finalPowerUsage.singleThreeVolt)
            finalPowerUsage.topThreeVolt = finalPowerUsage.bottomThreeVolt = false;
        return finalPowerUsage;
    }
    function copyDoubleArray(a) {
        return a.map(function (b) { return b.map(function (p) { return p; }); });
    }
    function merge2(a, b) {
        var res = {};
        for (var aKey in a)
            res[aKey] = a[aKey];
        for (var bKey in b)
            res[bKey] = b[bKey];
        return res;
    }
    function merge3(a, b, c) {
        return merge2(merge2(a, b), c);
    }
    function readPin(arg) {
        pxsim.U.assert(!!arg, "Invalid pin: " + arg);
        var pin = /^(\w+)\.\s*(?:[a-z]*)?([A-Z][A-Z\d_]+)$/.exec(arg);
        return pin ? pin[2] : undefined;
    }
    pxsim.readPin = readPin;
    function mkReverseMap(map) {
        var origKeys = [];
        var origVals = [];
        for (var key in map) {
            origKeys.push(key);
            origVals.push(map[key]);
        }
        var newMap = {};
        for (var i = 0; i < origKeys.length; i++) {
            var newKey = origVals[i];
            var newVal = origKeys[i];
            newMap[newKey] = newVal;
        }
        return newMap;
    }
    function isConnectedToBB(pin) {
        return pin.orientation === "-Z" && pin.style === "male";
    }
    var Allocator = /** @class */ (function () {
        function Allocator(opts) {
            this.availablePowerPins = {
                top: {
                    threeVolt: pxsim.mkRange(26, 51).map(function (n) { return ({ type: "breadboard", row: "+", col: "" + n }); }),
                    ground: pxsim.mkRange(26, 51).map(function (n) { return ({ type: "breadboard", row: "-", col: "" + n }); }),
                },
                bottom: {
                    threeVolt: pxsim.mkRange(1, 26).map(function (n) { return ({ type: "breadboard", row: "+", col: "" + n }); }),
                    ground: pxsim.mkRange(1, 26).map(function (n) { return ({ type: "breadboard", row: "-", col: "" + n }); }),
                },
            };
            this.opts = opts;
        }
        Allocator.prototype.allocPartIRs = function (def, name, bbFit) {
            var _this = this;
            var partIRs = [];
            var mkIR = function (def, name, instPins, partParams) {
                var pinIRs = [];
                for (var i = 0; i < def.numberOfPins; i++) {
                    var pinDef = def.pinDefinitions[i];
                    var pinTarget = void 0;
                    if (typeof pinDef.target === "string") {
                        pinTarget = pinDef.target;
                    }
                    else {
                        var instIdx = pinDef.target.pinInstantiationIdx;
                        pxsim.U.assert(!!instPins && instPins[instIdx] !== undefined, "No pin found for PinInstantiationIdx: " + instIdx + ". (Is the part missing an ArgumentRole or \"trackArgs=\" annotations?)");
                        pinTarget = instPins[instIdx];
                    }
                    var pinLoc = def.visual.pinLocations[i];
                    var adjustedY = bbFit.yOffset + pinLoc.y;
                    var relativeRowIdx = Math.round(adjustedY / def.visual.pinDistance);
                    var relativeYOffset = adjustedY - relativeRowIdx * def.visual.pinDistance;
                    var adjustedX = bbFit.xOffset + pinLoc.x;
                    var relativeColIdx = Math.round(adjustedX / def.visual.pinDistance);
                    var relativeXOffset = adjustedX - relativeColIdx * def.visual.pinDistance;
                    var pinBBFit = {
                        partRelativeRowIdx: relativeRowIdx,
                        partRelativeColIdx: relativeColIdx,
                        xOffset: relativeXOffset,
                        yOffset: relativeYOffset
                    };
                    pinIRs.push({
                        def: pinDef,
                        loc: pinLoc,
                        target: pinTarget,
                        bbFit: pinBBFit,
                    });
                }
                return {
                    name: name,
                    def: def,
                    pins: pinIRs,
                    partParams: partParams || {},
                    bbFit: bbFit
                };
            };
            if (def.instantiation.kind === "singleton") {
                partIRs.push(mkIR(def, name));
            }
            else if (def.instantiation.kind === "function") {
                var fnAlloc_1 = def.instantiation;
                var fnNms_1 = fnAlloc_1.fullyQualifiedName.split(',');
                var callsitesTrackedArgsHash_1 = {};
                fnNms_1.forEach(function (fnNm) { if (_this.opts.fnArgs[fnNm])
                    _this.opts.fnArgs[fnNm].forEach(function (targetArg) { callsitesTrackedArgsHash_1[targetArg] = 1; }); });
                var callsitesTrackedArgs = Object.keys(callsitesTrackedArgsHash_1);
                pxsim.U.assert(!!callsitesTrackedArgs && !!callsitesTrackedArgs.length, "Failed to read pin(s) from callsite for: " + fnNms_1);
                callsitesTrackedArgs.forEach(function (fnArgsStr) {
                    var fnArgsSplit = fnArgsStr.split(",");
                    pxsim.U.assert(fnArgsSplit.length === fnAlloc_1.argumentRoles.length, "Mismatch between number of arguments at callsite (function name: " + fnNms_1 + ") vs number of argument roles in part definition (part: " + name + ").");
                    var instPins = [];
                    var paramArgs = {};
                    fnArgsSplit.forEach(function (arg, idx) {
                        var role = fnAlloc_1.argumentRoles[idx];
                        if (role.partParameter !== undefined) {
                            paramArgs[role.partParameter] = arg;
                        }
                        if (role.pinInstantiationIdx !== undefined) {
                            var instIdx = role.pinInstantiationIdx;
                            var pin = readPin(arg);
                            instPins[instIdx] = pin;
                        }
                    });
                    partIRs.push(mkIR(def, name, instPins, paramArgs));
                });
            }
            return partIRs;
        };
        Allocator.prototype.computePartDimensions = function (def, name) {
            var pinLocs = def.visual.pinLocations;
            var pinDefs = def.pinDefinitions;
            var numPins = def.numberOfPins;
            pxsim.U.assert(pinLocs.length === numPins, "Mismatch between \"numberOfPins\" and length of \"visual.pinLocations\" for \"" + name + "\"");
            pxsim.U.assert(pinDefs.length === numPins, "Mismatch between \"numberOfPins\" and length of \"pinDefinitions\" for \"" + name + "\"");
            pxsim.U.assert(numPins > 0, "Part \"" + name + "\" has no pins");
            var pins = pinLocs.map(function (loc, idx) { return merge3({ idx: idx }, loc, pinDefs[idx]); });
            var bbPins = pins.filter(function (p) { return p.orientation === "-Z"; });
            var hasBBPins = bbPins.length > 0;
            var pinDist = def.visual.pinDistance;
            var xOff;
            var yOff;
            var colCount;
            var rowCount;
            if (hasBBPins) {
                var refPin = bbPins[0];
                var refPinColIdx = Math.ceil(refPin.x / pinDist);
                var refPinRowIdx = Math.ceil(refPin.y / pinDist);
                xOff = refPinColIdx * pinDist - refPin.x;
                yOff = refPinRowIdx * pinDist - refPin.y;
                colCount = Math.ceil((xOff + def.visual.width) / pinDist) + 1;
                rowCount = Math.ceil((yOff + def.visual.height) / pinDist) + 1;
            }
            else {
                colCount = Math.ceil(def.visual.width / pinDist);
                rowCount = Math.ceil(def.visual.height / pinDist);
                xOff = colCount * pinDist - def.visual.width;
                yOff = rowCount * pinDist - def.visual.height;
            }
            return {
                xOffset: xOff,
                yOffset: yOff,
                rowCount: rowCount,
                colCount: colCount
            };
        };
        Allocator.prototype.allocColumns = function (colCounts) {
            var partsCount = colCounts.length;
            var totalColumnsCount = pxsim.visuals.BREADBOARD_MID_COLS; //TODO allow multiple breadboards
            var totalSpaceNeeded = colCounts.map(function (d) { return d.colCount; }).reduce(function (p, n) { return p + n; }, 0);
            var extraSpace = totalColumnsCount - totalSpaceNeeded;
            if (extraSpace <= 0) {
                console.log("Not enough breadboard space!");
                //TODO
            }
            var padding = Math.floor(extraSpace / (partsCount - 1 + 2));
            var partSpacing = padding; //Math.floor(extraSpace/(partsCount-1));
            var totalPartPadding = extraSpace - partSpacing * (partsCount - 1);
            var leftPadding = Math.floor(totalPartPadding / 2);
            var rightPadding = Math.ceil(totalPartPadding / 2);
            var nextAvailableCol = 1 + leftPadding;
            var partStartCol = colCounts.map(function (part) {
                var col = nextAvailableCol;
                nextAvailableCol += part.colCount + partSpacing;
                return col;
            });
            return partStartCol;
        };
        Allocator.prototype.placeParts = function (parts) {
            var totalRowsCount = pxsim.visuals.BREADBOARD_MID_ROWS + 2; // 10 letters + 2 for the middle gap
            var startColumnIndices = this.allocColumns(parts.map(function (p) { return p.bbFit; }));
            var startRowIndicies = parts.map(function (p) {
                var extraRows = totalRowsCount - p.bbFit.rowCount;
                var topPad = Math.floor(extraRows / 2);
                var startIdx = topPad;
                if (startIdx > 4)
                    startIdx = 4;
                if (startIdx < 1)
                    startIdx = 1;
                return startIdx;
            });
            var placements = parts.map(function (p, idx) {
                var row = startRowIndicies[idx];
                var col = startColumnIndices[idx];
                return merge2({ startColumnIdx: col, startRowIdx: row }, p);
            });
            return placements;
        };
        Allocator.prototype.nextColor = function () {
            if (!this.availableWireColors || this.availableWireColors.length <= 0) {
                this.availableWireColors = pxsim.visuals.GPIO_WIRE_COLORS.map(function (c) { return c; });
            }
            return this.availableWireColors.pop();
        };
        Allocator.prototype.allocWireIRs = function (part) {
            var _this = this;
            var groupToColor = [];
            var wires = part.pins.map(function (pin, pinIdx) {
                var end = pin.target;
                var start;
                var colIdx = part.startColumnIdx + pin.bbFit.partRelativeColIdx;
                var colName = pxsim.visuals.getColumnName(colIdx);
                var pinRowIdx = part.startRowIdx + pin.bbFit.partRelativeRowIdx;
                if (pinRowIdx >= 7)
                    pinRowIdx -= 2;
                if (isConnectedToBB(pin.def)) {
                    //make a wire from bb top or bottom to target
                    var connectedToTop = pinRowIdx < 5;
                    var rowName = connectedToTop ? "j" : "a";
                    start = {
                        type: "breadboard",
                        row: rowName,
                        col: colName,
                        style: pin.def.style
                    };
                }
                else {
                    //make a wire directly from pin to target
                    var rowName = pxsim.visuals.getRowName(pinRowIdx);
                    start = {
                        type: "breadboard",
                        row: rowName,
                        col: colName,
                        xOffset: pin.bbFit.xOffset / part.def.visual.pinDistance,
                        yOffset: pin.bbFit.yOffset / part.def.visual.pinDistance,
                        style: pin.def.style
                    };
                }
                var color;
                if (end === "ground") {
                    color = GROUND_COLOR;
                }
                else if (end === "threeVolt") {
                    color = POWER_COLOR;
                }
                else if (typeof pin.def.colorGroup === "number") {
                    if (groupToColor[pin.def.colorGroup]) {
                        color = groupToColor[pin.def.colorGroup];
                    }
                    else {
                        color = groupToColor[pin.def.colorGroup] = _this.nextColor();
                    }
                }
                else {
                    color = _this.nextColor();
                }
                return {
                    start: start,
                    end: end,
                    color: color,
                    pinIdx: pinIdx,
                };
            });
            return merge2(part, { wires: wires });
        };
        Allocator.prototype.allocLocation = function (location, opts) {
            var _this = this;
            if (location === "ground" || location === "threeVolt") {
                //special case if there is only a single ground or three volt pin in the whole build
                if (location === "ground" && this.powerUsage.singleGround) {
                    var boardGroundPin = this.getBoardGroundPin();
                    return { type: "dalboard", pin: boardGroundPin };
                }
                else if (location === "threeVolt" && this.powerUsage.singleThreeVolt) {
                    var boardThreeVoltPin = this.getBoardThreeVoltPin();
                    return { type: "dalboard", pin: boardThreeVoltPin };
                }
                pxsim.U.assert(!!opts.referenceBBPin);
                var nearestCoord = this.opts.getBBCoord(opts.referenceBBPin);
                var firstTopAndBot = [
                    this.availablePowerPins.top.ground[0] || this.availablePowerPins.top.threeVolt[0],
                    this.availablePowerPins.bottom.ground[0] || this.availablePowerPins.bottom.threeVolt[0]
                ].map(function (loc) {
                    return _this.opts.getBBCoord(loc);
                });
                if (!firstTopAndBot[0] || !firstTopAndBot[1]) {
                    console.debug("No more available \"" + location + "\" locations!");
                    //TODO
                }
                var nearTop = pxsim.visuals.findClosestCoordIdx(nearestCoord, firstTopAndBot) == 0;
                var barPins = void 0;
                if (nearTop) {
                    if (location === "ground") {
                        barPins = this.availablePowerPins.top.ground;
                    }
                    else if (location === "threeVolt") {
                        barPins = this.availablePowerPins.top.threeVolt;
                    }
                }
                else {
                    if (location === "ground") {
                        barPins = this.availablePowerPins.bottom.ground;
                    }
                    else if (location === "threeVolt") {
                        barPins = this.availablePowerPins.bottom.threeVolt;
                    }
                }
                var pinCoords = barPins.map(function (rowCol) {
                    return _this.opts.getBBCoord(rowCol);
                });
                var closestPinIdx = pxsim.visuals.findClosestCoordIdx(nearestCoord, pinCoords);
                var pin = barPins[closestPinIdx];
                if (nearTop) {
                    this.availablePowerPins.top.ground.splice(closestPinIdx, 1);
                    this.availablePowerPins.top.threeVolt.splice(closestPinIdx, 1);
                }
                else {
                    this.availablePowerPins.bottom.ground.splice(closestPinIdx, 1);
                    this.availablePowerPins.bottom.threeVolt.splice(closestPinIdx, 1);
                }
                return pin;
            }
            else if (location.type === "breadboard") {
                return location;
            }
            else if (location === "MOSI" || location === "MISO" || location === "SCK") {
                if (!this.opts.boardDef.spiPins)
                    console.debug("No SPI pin mappings found!");
                var pin = this.opts.boardDef.spiPins[location];
                return { type: "dalboard", pin: pin };
            }
            else if (location === "SDA" || location === "SCL") {
                if (!this.opts.boardDef.i2cPins)
                    console.debug("No I2C pin mappings found!");
                var pin = this.opts.boardDef.i2cPins[location];
                return { type: "dalboard", pin: pin };
            }
            else {
                //it must be a MicrobitPin
                pxsim.U.assert(typeof location === "string", "Unknown location type: " + location);
                var mbPin = location;
                var boardPin = this.opts.boardDef.gpioPinMap[mbPin];
                if (!boardPin)
                    return undefined;
                return { type: "dalboard", pin: boardPin };
            }
        };
        Allocator.prototype.getBoardGroundPin = function () {
            var boardGround = this.opts.boardDef.groundPins[0] || null;
            if (!boardGround) {
                console.log("No available ground pin on board!");
                //TODO
            }
            return boardGround;
        };
        Allocator.prototype.getBoardThreeVoltPin = function () {
            var threeVoltPin = this.opts.boardDef.threeVoltPins[0] || null;
            if (!threeVoltPin) {
                console.log("No available 3.3V pin on board!");
                //TODO
            }
            return threeVoltPin;
        };
        Allocator.prototype.allocPowerWires = function (powerUsage) {
            var boardGroundPin = this.getBoardGroundPin();
            var threeVoltPin = this.getBoardThreeVoltPin();
            var topLeft = { type: "breadboard", row: "-", col: "26" };
            var botLeft = { type: "breadboard", row: "-", col: "1" };
            var topRight = { type: "breadboard", row: "-", col: "50" };
            var botRight = { type: "breadboard", row: "-", col: "25" };
            var top, bot;
            if (this.opts.boardDef.attachPowerOnRight) {
                top = topRight;
                bot = botRight;
            }
            else {
                top = topLeft;
                bot = botLeft;
            }
            var groundWires = [];
            var threeVoltWires = [];
            if (powerUsage.bottomGround && powerUsage.topGround) {
                //bb top - <==> bb bot -
                groundWires.push({
                    start: this.allocLocation("ground", { referenceBBPin: top }),
                    end: this.allocLocation("ground", { referenceBBPin: bot }),
                    color: GROUND_COLOR,
                });
            }
            if (powerUsage.topGround) {
                //board - <==> bb top -
                groundWires.push({
                    start: this.allocLocation("ground", { referenceBBPin: top }),
                    end: { type: "dalboard", pin: boardGroundPin },
                    color: GROUND_COLOR,
                });
            }
            else if (powerUsage.bottomGround) {
                //board - <==> bb bot -
                groundWires.push({
                    start: this.allocLocation("ground", { referenceBBPin: bot }),
                    end: { type: "dalboard", pin: boardGroundPin },
                    color: GROUND_COLOR,
                });
            }
            if (powerUsage.bottomThreeVolt && powerUsage.bottomGround) {
                //bb top + <==> bb bot +
                threeVoltWires.push({
                    start: this.allocLocation("threeVolt", { referenceBBPin: top }),
                    end: this.allocLocation("threeVolt", { referenceBBPin: bot }),
                    color: POWER_COLOR,
                });
            }
            if (powerUsage.topThreeVolt) {
                //board + <==> bb top +
                threeVoltWires.push({
                    start: this.allocLocation("threeVolt", { referenceBBPin: top }),
                    end: { type: "dalboard", pin: threeVoltPin },
                    color: POWER_COLOR,
                });
            }
            else if (powerUsage.bottomThreeVolt) {
                //board + <==> bb bot +
                threeVoltWires.push({
                    start: this.allocLocation("threeVolt", { referenceBBPin: bot }),
                    end: { type: "dalboard", pin: threeVoltPin },
                    color: POWER_COLOR,
                });
            }
            var assembly = [];
            if (groundWires.length > 0)
                assembly.push({ wireIndices: groundWires.map(function (w, i) { return i; }) });
            var numGroundWires = groundWires.length;
            if (threeVoltWires.length > 0)
                assembly.push({ wireIndices: threeVoltWires.map(function (w, i) { return i + numGroundWires; }) });
            return {
                wires: groundWires.concat(threeVoltWires),
                assembly: assembly
            };
        };
        Allocator.prototype.allocWire = function (wireIR) {
            var _this = this;
            var ends = [wireIR.start, wireIR.end];
            var endIsPower = ends.map(function (e) { return e === "ground" || e === "threeVolt"; });
            //allocate non-power first so we know the nearest pin for the power end
            var endInsts = ends.map(function (e, idx) { return !endIsPower[idx] ? _this.allocLocation(e, {}) : undefined; });
            //allocate power pins closest to the other end of the wire
            endInsts = endInsts.map(function (e, idx) {
                if (e)
                    return e;
                var locInst = endInsts[1 - idx]; // non-power end
                var l = _this.allocLocation(ends[idx], {
                    referenceBBPin: locInst,
                });
                return l;
            });
            // one of the pins is not accessible
            if (!endInsts[0] || !endInsts[1])
                return undefined;
            return { start: endInsts[0], end: endInsts[1], color: wireIR.color };
        };
        Allocator.prototype.allocPart = function (ir) {
            var bbConnections = ir.pins
                .filter(function (p) { return isConnectedToBB(p.def); })
                .map(function (p) {
                var rowIdx = ir.startRowIdx + p.bbFit.partRelativeRowIdx;
                if (rowIdx >= 7)
                    rowIdx -= 2;
                var rowName = pxsim.visuals.getRowName(rowIdx);
                var colIdx = ir.startColumnIdx + p.bbFit.partRelativeColIdx;
                var colName = pxsim.visuals.getColumnName(colIdx);
                return {
                    type: "breadboard",
                    row: rowName,
                    col: colName,
                };
            });
            var part = {
                name: ir.name,
                visual: ir.def.visual,
                bbFit: ir.bbFit,
                startColumnIdx: ir.startColumnIdx,
                startRowIdx: ir.startRowIdx,
                breadboardConnections: bbConnections,
                params: ir.partParams,
                simulationBehavior: ir.def.simulationBehavior
            };
            return part;
        };
        Allocator.prototype.allocAll = function () {
            var _this = this;
            var partNmAndDefs = this.opts.partsList
                .map(function (partName) { return { name: partName, def: _this.opts.partDefs[partName] }; })
                .filter(function (d) { return !!d.def; });
            if (partNmAndDefs.length > 0) {
                var partNmsList = partNmAndDefs.map(function (p) { return p.name; });
                var partDefsList = partNmAndDefs.map(function (p) { return p.def; });
                var dimensions_1 = partNmAndDefs.map(function (nmAndPart) { return _this.computePartDimensions(nmAndPart.def, nmAndPart.name); });
                var partIRs_1 = [];
                partNmAndDefs.forEach(function (nmAndDef, idx) {
                    var dims = dimensions_1[idx];
                    var irs = _this.allocPartIRs(nmAndDef.def, nmAndDef.name, dims);
                    partIRs_1 = partIRs_1.concat(irs);
                });
                // TODO filter parts that are not representable now
                var partPlacements = this.placeParts(partIRs_1);
                var partsAndWireIRs = partPlacements.map(function (p) { return _this.allocWireIRs(p); });
                var allWireIRs = partsAndWireIRs.map(function (p) { return p.wires; }).reduce(function (p, n) { return p.concat(n); }, []);
                var allPowerUsage = allWireIRs.map(function (w) { return computePowerUsage(w); });
                this.powerUsage = mergePowerUsage(allPowerUsage);
                var basicWires = this.allocPowerWires(this.powerUsage);
                var partsAndWires = partsAndWireIRs.map(function (irs, idx) {
                    var part = _this.allocPart(irs);
                    var wires = irs.wires.map(function (w) { return _this.allocWire(w); });
                    if (wires.some(function (w) { return !w; }))
                        return undefined;
                    var pinIdxToWireIdx = [];
                    irs.wires.forEach(function (wIR, idx) {
                        pinIdxToWireIdx[wIR.pinIdx] = idx;
                    });
                    var assembly = irs.def.assembly.map(function (stepDef) {
                        return {
                            part: stepDef.part,
                            wireIndices: (stepDef.pinIndices || []).map(function (i) { return pinIdxToWireIdx[i]; })
                        };
                    });
                    return {
                        part: part,
                        wires: wires,
                        assembly: assembly
                    };
                }).filter(function (p) { return !!p; });
                var all = [basicWires].concat(partsAndWires);
                // hide breadboard if not used
                var requiresBreadboard = all.some(function (r) {
                    return (r.part && r.part.breadboardConnections && r.part.breadboardConnections.length > 0)
                        || r.wires && r.wires.some(function (w) { return (w.end.type == "breadboard" && w.end.style != "croc") || (w.start.type == "breadboard" && w.start.style != "croc"); });
                });
                return {
                    partsAndWires: all,
                    requiresBreadboard: requiresBreadboard
                };
            }
            else {
                return {
                    partsAndWires: []
                };
            }
        };
        return Allocator;
    }());
    function allocateDefinitions(opts) {
        return new Allocator(opts).allocAll();
    }
    pxsim.allocateDefinitions = allocateDefinitions;
})(pxsim || (pxsim = {}));
/// <reference path="../localtypings/vscode-debug-protocol.d.ts" />
/**
 * Heavily adapted from https://github.com/Microsoft/vscode-debugadapter-node
 * and altered to run in a browser and communcate via JSON over a websocket
 * rather than through stdin and stdout
 */
var pxsim;
(function (pxsim) {
    var protocol;
    (function (protocol) {
        var Message = /** @class */ (function () {
            function Message(type) {
                this.seq = 0;
                this.type = type;
            }
            return Message;
        }());
        protocol.Message = Message;
        var Response = /** @class */ (function (_super) {
            __extends(Response, _super);
            function Response(request, message) {
                var _this = _super.call(this, 'response') || this;
                _this.request_seq = request.seq;
                _this.command = request.command;
                if (message) {
                    _this.success = false;
                    _this.message = message;
                }
                else {
                    _this.success = true;
                }
                return _this;
            }
            return Response;
        }(Message));
        protocol.Response = Response;
        var Event = /** @class */ (function (_super) {
            __extends(Event, _super);
            function Event(event, body) {
                var _this = _super.call(this, 'event') || this;
                _this.event = event;
                if (body) {
                    _this.body = body;
                }
                return _this;
            }
            return Event;
        }(Message));
        protocol.Event = Event;
        var Source = /** @class */ (function () {
            function Source(name, path, id, origin, data) {
                if (id === void 0) { id = 0; }
                this.name = name;
                this.path = path;
                this.sourceReference = id;
                if (origin) {
                    this.origin = origin;
                }
                if (data) {
                    this.adapterData = data;
                }
            }
            return Source;
        }());
        protocol.Source = Source;
        var Scope = /** @class */ (function () {
            function Scope(name, reference, expensive) {
                if (expensive === void 0) { expensive = false; }
                this.name = name;
                this.variablesReference = reference;
                this.expensive = expensive;
            }
            return Scope;
        }());
        protocol.Scope = Scope;
        var StackFrame = /** @class */ (function () {
            function StackFrame(i, nm, src, ln, col) {
                if (ln === void 0) { ln = 0; }
                if (col === void 0) { col = 0; }
                this.id = i;
                this.source = src;
                this.line = ln;
                this.column = col;
                this.name = nm;
            }
            return StackFrame;
        }());
        protocol.StackFrame = StackFrame;
        var Thread = /** @class */ (function () {
            function Thread(id, name) {
                this.id = id;
                if (name) {
                    this.name = name;
                }
                else {
                    this.name = 'Thread #' + id;
                }
            }
            return Thread;
        }());
        protocol.Thread = Thread;
        var Variable = /** @class */ (function () {
            function Variable(name, value, ref, indexedVariables, namedVariables) {
                if (ref === void 0) { ref = 0; }
                this.name = name;
                this.value = value;
                this.variablesReference = ref;
                if (typeof namedVariables === 'number') {
                    this.namedVariables = namedVariables;
                }
                if (typeof indexedVariables === 'number') {
                    this.indexedVariables = indexedVariables;
                }
            }
            return Variable;
        }());
        protocol.Variable = Variable;
        var Breakpoint = /** @class */ (function () {
            function Breakpoint(verified, line, column, source) {
                this.verified = verified;
                var e = this;
                if (typeof line === 'number') {
                    e.line = line;
                }
                if (typeof column === 'number') {
                    e.column = column;
                }
                if (source) {
                    e.source = source;
                }
            }
            return Breakpoint;
        }());
        protocol.Breakpoint = Breakpoint;
        var Module = /** @class */ (function () {
            function Module(id, name) {
                this.id = id;
                this.name = name;
            }
            return Module;
        }());
        protocol.Module = Module;
        var CompletionItem = /** @class */ (function () {
            function CompletionItem(label, start, length) {
                if (length === void 0) { length = 0; }
                this.label = label;
                this.start = start;
                this.length = length;
            }
            return CompletionItem;
        }());
        protocol.CompletionItem = CompletionItem;
        var StoppedEvent = /** @class */ (function (_super) {
            __extends(StoppedEvent, _super);
            function StoppedEvent(reason, threadId, exception_text) {
                if (exception_text === void 0) { exception_text = null; }
                var _this = _super.call(this, 'stopped') || this;
                _this.body = {
                    reason: reason,
                    threadId: threadId
                };
                if (exception_text) {
                    var e = _this;
                    e.body.text = exception_text;
                }
                return _this;
            }
            return StoppedEvent;
        }(Event));
        protocol.StoppedEvent = StoppedEvent;
        var ContinuedEvent = /** @class */ (function (_super) {
            __extends(ContinuedEvent, _super);
            function ContinuedEvent(threadId, allThreadsContinued) {
                var _this = _super.call(this, 'continued') || this;
                _this.body = {
                    threadId: threadId
                };
                if (typeof allThreadsContinued === 'boolean') {
                    _this.body.allThreadsContinued = allThreadsContinued;
                }
                return _this;
            }
            return ContinuedEvent;
        }(Event));
        protocol.ContinuedEvent = ContinuedEvent;
        var InitializedEvent = /** @class */ (function (_super) {
            __extends(InitializedEvent, _super);
            function InitializedEvent() {
                return _super.call(this, 'initialized') || this;
            }
            return InitializedEvent;
        }(Event));
        protocol.InitializedEvent = InitializedEvent;
        var TerminatedEvent = /** @class */ (function (_super) {
            __extends(TerminatedEvent, _super);
            function TerminatedEvent(restart) {
                var _this = _super.call(this, 'terminated') || this;
                if (typeof restart === 'boolean') {
                    var e = _this;
                    e.body = {
                        restart: restart
                    };
                }
                return _this;
            }
            return TerminatedEvent;
        }(Event));
        protocol.TerminatedEvent = TerminatedEvent;
        var OutputEvent = /** @class */ (function (_super) {
            __extends(OutputEvent, _super);
            function OutputEvent(output, category, data) {
                if (category === void 0) { category = 'console'; }
                var _this = _super.call(this, 'output') || this;
                _this.body = {
                    category: category,
                    output: output
                };
                if (data !== undefined) {
                    _this.body.data = data;
                }
                return _this;
            }
            return OutputEvent;
        }(Event));
        protocol.OutputEvent = OutputEvent;
        var ThreadEvent = /** @class */ (function (_super) {
            __extends(ThreadEvent, _super);
            function ThreadEvent(reason, threadId) {
                var _this = _super.call(this, 'thread') || this;
                _this.body = {
                    reason: reason,
                    threadId: threadId
                };
                return _this;
            }
            return ThreadEvent;
        }(Event));
        protocol.ThreadEvent = ThreadEvent;
        var BreakpointEvent = /** @class */ (function (_super) {
            __extends(BreakpointEvent, _super);
            function BreakpointEvent(reason, breakpoint) {
                var _this = _super.call(this, 'breakpoint') || this;
                _this.body = {
                    reason: reason,
                    breakpoint: breakpoint
                };
                return _this;
            }
            return BreakpointEvent;
        }(Event));
        protocol.BreakpointEvent = BreakpointEvent;
        var ModuleEvent = /** @class */ (function (_super) {
            __extends(ModuleEvent, _super);
            function ModuleEvent(reason, module) {
                var _this = _super.call(this, 'module') || this;
                _this.body = {
                    reason: reason,
                    module: module
                };
                return _this;
            }
            return ModuleEvent;
        }(Event));
        protocol.ModuleEvent = ModuleEvent;
        var ProtocolServer = /** @class */ (function () {
            function ProtocolServer() {
                this._pendingRequests = {};
            }
            ProtocolServer.prototype.start = function (host) {
                var _this = this;
                this._sequence = 1;
                this.host = host;
                this.host.onData(function (msg) {
                    if (msg.type === 'request') {
                        _this.dispatchRequest(msg);
                    }
                    else if (msg.type === 'response') {
                        var response = msg;
                        var clb = _this._pendingRequests[response.seq];
                        if (clb) {
                            delete _this._pendingRequests[response.seq];
                            clb(response);
                        }
                    }
                });
            };
            ProtocolServer.prototype.stop = function () {
                if (this.host) {
                    this.host.close();
                }
            };
            ProtocolServer.prototype.sendEvent = function (event) {
                this.send('event', event);
            };
            ProtocolServer.prototype.sendResponse = function (response) {
                if (response.seq > 0) {
                    console.error("attempt to send more than one response for command " + response.command);
                }
                else {
                    this.send('response', response);
                }
            };
            ProtocolServer.prototype.sendRequest = function (command, args, timeout, cb) {
                var _this = this;
                var request = {
                    command: command
                };
                if (args && Object.keys(args).length > 0) {
                    request.arguments = args;
                }
                this.send('request', request);
                if (cb) {
                    this._pendingRequests[request.seq] = cb;
                    var timer_1 = setTimeout(function () {
                        clearTimeout(timer_1);
                        var clb = _this._pendingRequests[request.seq];
                        if (clb) {
                            delete _this._pendingRequests[request.seq];
                            clb(new protocol.Response(request, 'timeout'));
                        }
                    }, timeout);
                }
            };
            ProtocolServer.prototype.send = function (typ, message) {
                message.type = typ;
                message.seq = this._sequence++;
                if (this.host) {
                    var json = JSON.stringify(message);
                    this.host.send(json);
                }
            };
            // ---- protected ----------------------------------------------------------
            ProtocolServer.prototype.dispatchRequest = function (request) {
            };
            return ProtocolServer;
        }());
        protocol.ProtocolServer = ProtocolServer;
        var DebugSession = /** @class */ (function (_super) {
            __extends(DebugSession, _super);
            function DebugSession() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._debuggerLinesStartAt1 = false;
                _this._debuggerColumnsStartAt1 = false;
                _this._clientLinesStartAt1 = true;
                _this._clientColumnsStartAt1 = true;
                return _this;
            }
            DebugSession.prototype.shutdown = function () {
            };
            DebugSession.prototype.dispatchRequest = function (request) {
                var response = new protocol.Response(request);
                try {
                    if (request.command === 'initialize') {
                        var args = request.arguments;
                        if (typeof args.linesStartAt1 === 'boolean') {
                            this._clientLinesStartAt1 = args.linesStartAt1;
                        }
                        if (typeof args.columnsStartAt1 === 'boolean') {
                            this._clientColumnsStartAt1 = args.columnsStartAt1;
                        }
                        if (args.pathFormat !== 'path') {
                            this.sendErrorResponse(response, 2018, 'debug adapter only supports native paths', null);
                        }
                        else {
                            var initializeResponse = response;
                            initializeResponse.body = {};
                            this.initializeRequest(initializeResponse, args);
                        }
                    }
                    else if (request.command === 'launch') {
                        this.launchRequest(response, request.arguments);
                    }
                    else if (request.command === 'attach') {
                        this.attachRequest(response, request.arguments);
                    }
                    else if (request.command === 'disconnect') {
                        this.disconnectRequest(response, request.arguments);
                    }
                    else if (request.command === 'setBreakpoints') {
                        this.setBreakPointsRequest(response, request.arguments);
                    }
                    else if (request.command === 'setFunctionBreakpoints') {
                        this.setFunctionBreakPointsRequest(response, request.arguments);
                    }
                    else if (request.command === 'setExceptionBreakpoints') {
                        this.setExceptionBreakPointsRequest(response, request.arguments);
                    }
                    else if (request.command === 'configurationDone') {
                        this.configurationDoneRequest(response, request.arguments);
                    }
                    else if (request.command === 'continue') {
                        this.continueRequest(response, request.arguments);
                    }
                    else if (request.command === 'next') {
                        this.nextRequest(response, request.arguments);
                    }
                    else if (request.command === 'stepIn') {
                        this.stepInRequest(response, request.arguments);
                    }
                    else if (request.command === 'stepOut') {
                        this.stepOutRequest(response, request.arguments);
                    }
                    else if (request.command === 'stepBack') {
                        this.stepBackRequest(response, request.arguments);
                    }
                    else if (request.command === 'restartFrame') {
                        this.restartFrameRequest(response, request.arguments);
                    }
                    else if (request.command === 'goto') {
                        this.gotoRequest(response, request.arguments);
                    }
                    else if (request.command === 'pause') {
                        this.pauseRequest(response, request.arguments);
                    }
                    else if (request.command === 'stackTrace') {
                        this.stackTraceRequest(response, request.arguments);
                    }
                    else if (request.command === 'scopes') {
                        this.scopesRequest(response, request.arguments);
                    }
                    else if (request.command === 'variables') {
                        this.variablesRequest(response, request.arguments);
                    }
                    else if (request.command === 'setVariable') {
                        this.setVariableRequest(response, request.arguments);
                    }
                    else if (request.command === 'source') {
                        this.sourceRequest(response, request.arguments);
                    }
                    else if (request.command === 'threads') {
                        this.threadsRequest(response);
                    }
                    else if (request.command === 'evaluate') {
                        this.evaluateRequest(response, request.arguments);
                    }
                    else if (request.command === 'stepInTargets') {
                        this.stepInTargetsRequest(response, request.arguments);
                    }
                    else if (request.command === 'gotoTargets') {
                        this.gotoTargetsRequest(response, request.arguments);
                    }
                    else if (request.command === 'completions') {
                        this.completionsRequest(response, request.arguments);
                    }
                    else {
                        this.customRequest(request.command, response, request.arguments);
                    }
                }
                catch (e) {
                    this.sendErrorResponse(response, 1104, '{_stack}', { _exception: e.message, _stack: e.stack });
                }
            };
            DebugSession.prototype.initializeRequest = function (response, args) {
                // This default debug adapter does not support conditional breakpoints.
                response.body.supportsConditionalBreakpoints = false;
                // This default debug adapter does not support hit conditional breakpoints.
                response.body.supportsHitConditionalBreakpoints = false;
                // This default debug adapter does not support function breakpoints.
                response.body.supportsFunctionBreakpoints = false;
                // This default debug adapter implements the 'configurationDone' request.
                response.body.supportsConfigurationDoneRequest = true;
                // This default debug adapter does not support hovers based on the 'evaluate' request.
                response.body.supportsEvaluateForHovers = false;
                // This default debug adapter does not support the 'stepBack' request.
                response.body.supportsStepBack = false;
                // This default debug adapter does not support the 'setVariable' request.
                response.body.supportsSetVariable = false;
                // This default debug adapter does not support the 'restartFrame' request.
                response.body.supportsRestartFrame = false;
                // This default debug adapter does not support the 'stepInTargetsRequest' request.
                response.body.supportsStepInTargetsRequest = false;
                // This default debug adapter does not support the 'gotoTargetsRequest' request.
                response.body.supportsGotoTargetsRequest = false;
                // This default debug adapter does not support the 'completionsRequest' request.
                response.body.supportsCompletionsRequest = false;
                this.sendResponse(response);
            };
            DebugSession.prototype.disconnectRequest = function (response, args) {
                this.sendResponse(response);
                this.shutdown();
            };
            DebugSession.prototype.launchRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.attachRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.setBreakPointsRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.setFunctionBreakPointsRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.setExceptionBreakPointsRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.configurationDoneRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.continueRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.nextRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.stepInRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.stepOutRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.stepBackRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.restartFrameRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.gotoRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.pauseRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.sourceRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.threadsRequest = function (response) {
                this.sendResponse(response);
            };
            DebugSession.prototype.stackTraceRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.scopesRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.variablesRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.setVariableRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.evaluateRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.stepInTargetsRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.gotoTargetsRequest = function (response, args) {
                this.sendResponse(response);
            };
            DebugSession.prototype.completionsRequest = function (response, args) {
                this.sendResponse(response);
            };
            /**
             * Override this hook to implement custom requests.
             */
            DebugSession.prototype.customRequest = function (command, response, args) {
                this.sendErrorResponse(response, 1014, 'unrecognized request', null);
            };
            DebugSession.prototype.sendErrorResponse = function (response, codeOrMessage, format, variables) {
                var msg;
                if (typeof codeOrMessage === 'number') {
                    msg = {
                        id: codeOrMessage,
                        format: format
                    };
                    if (variables) {
                        msg.variables = variables;
                    }
                    msg.showUser = true;
                }
                else {
                    msg = codeOrMessage;
                }
                response.success = false;
                DebugSession.formatPII(msg.format, true, msg.variables);
                if (!response.body) {
                    response.body = {};
                }
                response.body.error = msg;
                this.sendResponse(response);
            };
            DebugSession.prototype.convertClientLineToDebugger = function (line) {
                if (this._debuggerLinesStartAt1) {
                    return this._clientLinesStartAt1 ? line : line + 1;
                }
                return this._clientLinesStartAt1 ? line - 1 : line;
            };
            DebugSession.prototype.convertDebuggerLineToClient = function (line) {
                if (this._debuggerLinesStartAt1) {
                    return this._clientLinesStartAt1 ? line : line - 1;
                }
                return this._clientLinesStartAt1 ? line + 1 : line;
            };
            DebugSession.prototype.convertClientColumnToDebugger = function (column) {
                if (this._debuggerColumnsStartAt1) {
                    return this._clientColumnsStartAt1 ? column : column + 1;
                }
                return this._clientColumnsStartAt1 ? column - 1 : column;
            };
            DebugSession.prototype.convertDebuggerColumnToClient = function (column) {
                if (this._debuggerColumnsStartAt1) {
                    return this._clientColumnsStartAt1 ? column : column - 1;
                }
                return this._clientColumnsStartAt1 ? column + 1 : column;
            };
            DebugSession.prototype.convertClientPathToDebugger = function (clientPath) {
                if (this._clientPathsAreURIs != this._debuggerPathsAreURIs) {
                    if (this._clientPathsAreURIs) {
                        return DebugSession.uri2path(clientPath);
                    }
                    else {
                        return DebugSession.path2uri(clientPath);
                    }
                }
                return clientPath;
            };
            DebugSession.prototype.convertDebuggerPathToClient = function (debuggerPath) {
                if (this._debuggerPathsAreURIs != this._clientPathsAreURIs) {
                    if (this._debuggerPathsAreURIs) {
                        return DebugSession.uri2path(debuggerPath);
                    }
                    else {
                        return DebugSession.path2uri(debuggerPath);
                    }
                }
                return debuggerPath;
            };
            DebugSession.path2uri = function (str) {
                var pathName = str.replace(/\\/g, '/');
                if (pathName[0] !== '/') {
                    pathName = '/' + pathName;
                }
                return encodeURI('file://' + pathName);
            };
            DebugSession.uri2path = function (url) {
                return url;
                //return Url.parse(url).pathname;
            };
            /*
            * If argument starts with '_' it is OK to send its value to telemetry.
            */
            DebugSession.formatPII = function (format, excludePII, args) {
                return format.replace(DebugSession._formatPIIRegexp, function (match, paramName) {
                    if (excludePII && paramName.length > 0 && paramName[0] !== '_') {
                        return match;
                    }
                    return args[paramName] && args.hasOwnProperty(paramName) ?
                        args[paramName] :
                        match;
                });
            };
            DebugSession._formatPIIRegexp = /{([^}]+)}/g;
            return DebugSession;
        }(ProtocolServer));
        protocol.DebugSession = DebugSession;
    })(protocol = pxsim.protocol || (pxsim.protocol = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var util;
    (function (util) {
        function injectPolyphils() {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
            if (!Array.prototype.fill) {
                Object.defineProperty(Array.prototype, 'fill', {
                    writable: true,
                    enumerable: true,
                    value: function (value) {
                        // Steps 1-2.
                        if (this == null) {
                            throw new TypeError('this is null or not defined');
                        }
                        var O = Object(this);
                        // Steps 3-5.
                        var len = O.length >>> 0;
                        // Steps 6-7.
                        var start = arguments[1];
                        var relativeStart = start >> 0;
                        // Step 8.
                        var k = relativeStart < 0 ?
                            Math.max(len + relativeStart, 0) :
                            Math.min(relativeStart, len);
                        // Steps 9-10.
                        var end = arguments[2];
                        var relativeEnd = end === undefined ?
                            len : end >> 0;
                        // Step 11.
                        var final = relativeEnd < 0 ?
                            Math.max(len + relativeEnd, 0) :
                            Math.min(relativeEnd, len);
                        // Step 12.
                        while (k < final) {
                            O[k] = value;
                            k++;
                        }
                        // Step 13.
                        return O;
                    }
                });
            }
            // Polyfill for Uint8Array.slice for IE and Safari
            // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
            // TODO: Move this polyfill to a more appropriate file. It is left here for now because moving it causes a crash in IE; see PXT issue #1301.
            if (!Uint8Array.prototype.slice) {
                Object.defineProperty(Uint8Array.prototype, 'slice', {
                    value: Array.prototype.slice,
                    writable: true,
                    enumerable: true
                });
            }
            if (!Uint16Array.prototype.slice) {
                Object.defineProperty(Uint16Array.prototype, 'slice', {
                    value: Array.prototype.slice,
                    writable: true,
                    enumerable: true
                });
            }
            if (!Uint32Array.prototype.slice) {
                Object.defineProperty(Uint32Array.prototype, 'slice', {
                    value: Array.prototype.slice,
                    writable: true,
                    enumerable: true
                });
            }
            // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
            if (!Uint8Array.prototype.fill) {
                Object.defineProperty(Uint8Array.prototype, 'fill', {
                    value: Array.prototype.fill,
                    writable: true,
                    enumerable: true
                });
            }
            if (!Uint16Array.prototype.fill) {
                Object.defineProperty(Uint16Array.prototype, 'fill', {
                    value: Array.prototype.fill,
                    writable: true,
                    enumerable: true
                });
            }
            if (!Uint32Array.prototype.fill) {
                Object.defineProperty(Uint32Array.prototype, 'fill', {
                    value: Array.prototype.fill,
                    writable: true,
                    enumerable: true
                });
            }
        }
        util.injectPolyphils = injectPolyphils;
        var Lazy = /** @class */ (function () {
            function Lazy(_func) {
                this._func = _func;
                this._evaluated = false;
            }
            Object.defineProperty(Lazy.prototype, "value", {
                get: function () {
                    if (!this._evaluated) {
                        this._value = this._func();
                        this._evaluated = true;
                    }
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            return Lazy;
        }());
        util.Lazy = Lazy;
        function getNormalizedParts(path) {
            path = path.replace(/\\/g, "/");
            var parts = [];
            path.split("/").forEach(function (part) {
                if (part === ".." && parts.length) {
                    parts.pop();
                }
                else if (part && part !== ".") {
                    parts.push(part);
                }
            });
            return parts;
        }
        util.getNormalizedParts = getNormalizedParts;
        function normalizePath(path) {
            return getNormalizedParts(path).join("/");
        }
        util.normalizePath = normalizePath;
        function relativePath(fromDir, toFile) {
            var fParts = getNormalizedParts(fromDir);
            var tParts = getNormalizedParts(toFile);
            var i = 0;
            while (fParts[i] === tParts[i]) {
                i++;
                if (i === fParts.length || i === tParts.length) {
                    break;
                }
            }
            var fRemainder = fParts.slice(i);
            var tRemainder = tParts.slice(i);
            for (var i_1 = 0; i_1 < fRemainder.length; i_1++) {
                tRemainder.unshift("..");
            }
            return tRemainder.join("/");
        }
        util.relativePath = relativePath;
        function pathJoin() {
            var paths = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paths[_i] = arguments[_i];
            }
            var result = "";
            paths.forEach(function (path) {
                path.replace(/\\/g, "/");
                if (path.lastIndexOf("/") === path.length - 1) {
                    path = path.slice(0, path.length - 1);
                }
                result += "/" + path;
            });
            return result;
        }
        util.pathJoin = pathJoin;
        function toArray(a) {
            if (Array.isArray(a)) {
                return a;
            }
            var r = [];
            for (var i = 0; i < a.length; ++i)
                r.push(a[i]);
            return r;
        }
        util.toArray = toArray;
    })(util = pxsim.util || (pxsim.util = {}));
})(pxsim || (pxsim = {}));
/// <reference path="./debugProtocol.ts" />
/// <reference path="./utils.ts" />
var pxsim;
(function (pxsim) {
    function getWarningMessage(msg) {
        var r = {
            type: "debugger",
            subtype: "warning",
            breakpointIds: [],
            message: msg
        };
        var s = pxsim.runtime.currFrame;
        while (s != null) {
            r.breakpointIds.push(s.lastBrkId);
            s = s.parent;
        }
        return r;
    }
    pxsim.getWarningMessage = getWarningMessage;
    var BreakpointMap = /** @class */ (function () {
        function BreakpointMap(breakpoints) {
            var _this = this;
            this.fileMap = {};
            this.idMap = {};
            breakpoints.forEach(function (tuple) {
                var id = tuple[0], bp = tuple[1];
                if (!_this.fileMap[bp.source.path]) {
                    _this.fileMap[bp.source.path] = [];
                }
                _this.fileMap[bp.source.path].push(tuple);
                _this.idMap[id] = bp;
            });
            for (var file in this.fileMap) {
                var bps = this.fileMap[file];
                // Sort the breakpoints to make finding the closest breakpoint to a
                // given line easier later. Order first by start line and then from
                // worst to best choice for each line.
                this.fileMap[file] = bps.sort(function (_a, _b) {
                    var a = _a[1];
                    var b = _b[1];
                    if (a.line === b.line) {
                        if (b.endLine === a.endLine) {
                            return a.column - b.column;
                        }
                        // We want the closest breakpoint, so give preference to breakpoints
                        // that span fewer lines (i.e. breakpoints that are "tighter" around
                        // the line being searched for)
                        return b.endLine - a.endLine;
                    }
                    return a.line - b.line;
                });
            }
        }
        BreakpointMap.prototype.getById = function (id) {
            return this.idMap[id];
        };
        BreakpointMap.prototype.verifyBreakpoint = function (path, breakpoint) {
            var breakpoints = this.fileMap[path];
            var best;
            if (breakpoints) {
                // Breakpoints are pre-sorted for each file. The last matching breakpoint
                // in the list should be the best match
                for (var _i = 0, breakpoints_1 = breakpoints; _i < breakpoints_1.length; _i++) {
                    var _a = breakpoints_1[_i], id = _a[0], bp = _a[1];
                    if (bp.line <= breakpoint.line && bp.endLine >= breakpoint.line) {
                        best = [id, bp];
                    }
                }
            }
            if (best) {
                best[1].verified = true;
                return best;
            }
            return [-1, { verified: false }];
        };
        return BreakpointMap;
    }());
    pxsim.BreakpointMap = BreakpointMap;
    function dumpHeap(v, heap) {
        function valToJSON(v) {
            switch (typeof v) {
                case "string":
                case "number":
                case "boolean":
                    return v;
                case "function":
                    return { text: "(function)" };
                case "undefined":
                    return null;
                case "object":
                    if (!v)
                        return null;
                    if (v instanceof pxsim.RefObject) {
                        heap[v.id] = v;
                        return {
                            id: v.id,
                            preview: pxsim.RefObject.toDebugString(v)
                        };
                    }
                    return { text: "(object)" };
                default:
                    throw new Error();
            }
        }
        function frameVars(frame) {
            var r = {};
            for (var _i = 0, _a = Object.keys(frame); _i < _a.length; _i++) {
                var k = _a[_i];
                // skip members starting with __
                if (!/^__/.test(k) && /___\d+$/.test(k)) {
                    r[k.replace(/___\d+$/, '')] = valToJSON(frame[k]);
                }
            }
            return r;
        }
        return frameVars(v);
    }
    pxsim.dumpHeap = dumpHeap;
    function getBreakpointMsg(s, brkId) {
        var heap = {};
        var msg = {
            type: "debugger",
            subtype: "breakpoint",
            breakpointId: brkId,
            globals: dumpHeap(pxsim.runtime.globals, heap),
            stackframes: [],
        };
        while (s != null) {
            var info = s.fn ? s.fn.info : null;
            if (info)
                msg.stackframes.push({
                    locals: dumpHeap(s, heap),
                    funcInfo: info,
                    breakpointId: s.lastBrkId
                });
            s = s.parent;
        }
        return { msg: msg, heap: heap };
    }
    pxsim.getBreakpointMsg = getBreakpointMsg;
    var SimDebugSession = /** @class */ (function (_super) {
        __extends(SimDebugSession, _super);
        function SimDebugSession(container) {
            var _this = _super.call(this) || this;
            var options = {
                onDebuggerBreakpoint: function (b) { return _this.onDebuggerBreakpoint(b); },
                onDebuggerWarning: function (w) { return _this.onDebuggerWarning(w); },
                onDebuggerResume: function () { return _this.onDebuggerResume(); },
                onStateChanged: function (s) { return _this.onStateChanged(s); }
            };
            _this.driver = new pxsim.SimulatorDriver(container, options);
            return _this;
        }
        SimDebugSession.prototype.runCode = function (js, parts, fnArgs, breakpoints, board) {
            this.breakpoints = breakpoints;
            if (this.projectDir) {
                this.fixBreakpoints();
            }
            this.sendEvent(new pxsim.protocol.InitializedEvent());
            this.driver.run(js, {
                parts: parts,
                fnArgs: fnArgs,
                boardDefinition: board
            });
        };
        SimDebugSession.prototype.stopSimulator = function (unload) {
            if (unload === void 0) { unload = false; }
            this.driver.stop(unload);
        };
        SimDebugSession.prototype.initializeRequest = function (response, args) {
            response.body.supportsConditionalBreakpoints = false;
            response.body.supportsHitConditionalBreakpoints = false;
            response.body.supportsFunctionBreakpoints = false;
            response.body.supportsEvaluateForHovers = false;
            response.body.supportsStepBack = false;
            response.body.supportsSetVariable = false;
            response.body.supportsRestartFrame = false;
            response.body.supportsStepInTargetsRequest = false;
            response.body.supportsGotoTargetsRequest = false;
            response.body.supportsCompletionsRequest = false;
            // This default debug adapter implements the 'configurationDone' request.
            response.body.supportsConfigurationDoneRequest = true;
            this.sendResponse(response);
        };
        SimDebugSession.prototype.disconnectRequest = function (response, args) {
            this.sendResponse(response);
            this.shutdown();
        };
        SimDebugSession.prototype.launchRequest = function (response, args) {
            if (!this.projectDir) {
                this.projectDir = pxsim.util.normalizePath(args.projectDir);
                if (this.breakpoints) {
                    this.fixBreakpoints();
                }
            }
            this.sendResponse(response);
        };
        SimDebugSession.prototype.setBreakPointsRequest = function (response, args) {
            var _this = this;
            response.body = { breakpoints: [] };
            var ids = [];
            args.breakpoints.forEach(function (requestedBp) {
                if (_this.breakpoints) {
                    var _a = _this.breakpoints.verifyBreakpoint(pxsim.util.relativePath(_this.projectDir, args.source.path), requestedBp), id = _a[0], bp = _a[1];
                    response.body.breakpoints.push(bp);
                    if (bp.verified) {
                        ids.push(id);
                    }
                }
                else {
                    response.body.breakpoints.push({ verified: false });
                }
            });
            this.driver.setBreakpoints(ids);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.continueRequest = function (response, args) {
            this.driver.resume(pxsim.SimulatorDebuggerCommand.Resume);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.nextRequest = function (response, args) {
            this.driver.resume(pxsim.SimulatorDebuggerCommand.StepOver);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.stepInRequest = function (response, args) {
            this.driver.resume(pxsim.SimulatorDebuggerCommand.StepInto);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.stepOutRequest = function (response, args) {
            this.driver.resume(pxsim.SimulatorDebuggerCommand.StepOut);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.pauseRequest = function (response, args) {
            this.driver.resume(pxsim.SimulatorDebuggerCommand.Pause);
            this.sendResponse(response);
        };
        SimDebugSession.prototype.threadsRequest = function (response) {
            response.body = { threads: [{ id: SimDebugSession.THREAD_ID, name: "main" }] };
            this.sendResponse(response);
        };
        SimDebugSession.prototype.stackTraceRequest = function (response, args) {
            if (this.lastBreak) {
                var frames_1 = this.state.getFrames();
                response.body = { stackFrames: frames_1 };
            }
            this.sendResponse(response);
        };
        SimDebugSession.prototype.scopesRequest = function (response, args) {
            if (this.state) {
                response.body = { scopes: this.state.getScopes(args.frameId) };
            }
            this.sendResponse(response);
        };
        SimDebugSession.prototype.variablesRequest = function (response, args) {
            if (this.state) {
                response.body = { variables: this.state.getVariables(args.variablesReference) };
            }
            this.sendResponse(response);
        };
        SimDebugSession.prototype.onDebuggerBreakpoint = function (breakMsg) {
            this.lastBreak = breakMsg;
            this.state = new StoppedState(this.lastBreak, this.breakpoints, this.projectDir);
            if (breakMsg.exceptionMessage) {
                var message = breakMsg.exceptionMessage.replace(/___\d+/g, '');
                this.sendEvent(new pxsim.protocol.StoppedEvent("exception", SimDebugSession.THREAD_ID, message));
            }
            else {
                this.sendEvent(new pxsim.protocol.StoppedEvent("breakpoint", SimDebugSession.THREAD_ID));
            }
        };
        SimDebugSession.prototype.onDebuggerWarning = function (warnMsg) {
        };
        SimDebugSession.prototype.onDebuggerResume = function () {
            this.sendEvent(new pxsim.protocol.ContinuedEvent(SimDebugSession.THREAD_ID, true));
        };
        SimDebugSession.prototype.onStateChanged = function (state) {
            switch (state) {
                case pxsim.SimulatorState.Paused:
                    // Sending a stopped event here would be redundant
                    break;
                case pxsim.SimulatorState.Running:
                    this.sendEvent(new pxsim.protocol.ContinuedEvent(SimDebugSession.THREAD_ID, true));
                    break;
                case pxsim.SimulatorState.Stopped:
                    this.sendEvent(new pxsim.protocol.TerminatedEvent());
                    break;
                case pxsim.SimulatorState.Unloaded:
                default:
            }
        };
        SimDebugSession.prototype.fixBreakpoints = function () {
            // Fix breakpoint locations from the debugger's format to the client's
            for (var bpId in this.breakpoints.idMap) {
                var bp = this.breakpoints.idMap[bpId];
                bp.source.path = pxsim.util.pathJoin(this.projectDir, bp.source.path);
                bp.line = this.convertDebuggerLineToClient(bp.line);
                bp.endLine = this.convertDebuggerLineToClient(bp.endLine);
                bp.column = this.convertDebuggerColumnToClient(bp.column);
                bp.endColumn = this.convertDebuggerColumnToClient(bp.endColumn);
            }
        };
        // We only have one thread
        // TODO: We could theoretically visualize the individual fibers
        SimDebugSession.THREAD_ID = 1;
        return SimDebugSession;
    }(pxsim.protocol.DebugSession));
    pxsim.SimDebugSession = SimDebugSession;
    /**
     * Maintains the state at the current breakpoint and handles lazy
     * queries for stack frames, scopes, variables, etc. The protocol
     * expects requests to be made in the order:
     *      Frames -> Scopes -> Variables
     */
    var StoppedState = /** @class */ (function () {
        function StoppedState(_message, _map, _dir) {
            this._message = _message;
            this._map = _map;
            this._dir = _dir;
            this._currentId = 1;
            this._frames = {};
            this._vars = {};
            var globalId = this.nextId();
            this._vars[globalId] = this.getVariableValues(this._message.globals);
            this._globalScope = {
                name: "Globals",
                variablesReference: globalId,
                expensive: false
            };
        }
        /**
         * Get stack frames for current breakpoint.
         */
        StoppedState.prototype.getFrames = function () {
            var _this = this;
            return this._message.stackframes.map(function (s, i) {
                var bp = _this._map.getById(s.breakpointId);
                if (bp) {
                    _this._frames[s.breakpointId] = s;
                    return {
                        id: s.breakpointId,
                        name: s.funcInfo ? s.funcInfo.functionName : (i === 0 ? "main" : "anonymous"),
                        line: bp.line,
                        column: bp.column,
                        endLine: bp.endLine,
                        endColumn: bp.endLine,
                        source: bp.source
                    };
                }
                return undefined;
            }).filter(function (b) { return !!b; });
        };
        /**
         * Returns scopes visible to the given stack frame.
         *
         * TODO: Currently, we only support locals and globals (no closures)
         */
        StoppedState.prototype.getScopes = function (frameId) {
            var frame = this._frames[frameId];
            if (frame) {
                var localId = this.nextId();
                this._vars[localId] = this.getVariableValues(frame.locals);
                return [{
                        name: "Locals",
                        variablesReference: localId,
                        expensive: false
                    }, this._globalScope];
            }
            return [this._globalScope];
        };
        /**
         * Returns variable information (and object properties)
         */
        StoppedState.prototype.getVariables = function (variablesReference) {
            var lz = this._vars[variablesReference];
            return (lz && lz.value) || [];
        };
        StoppedState.prototype.getVariableValues = function (v) {
            var _this = this;
            return new pxsim.util.Lazy(function () {
                var result = [];
                for (var name_1 in v) {
                    var value = v[name_1];
                    var vString = void 0;
                    var variablesReference = 0;
                    if (value === null) {
                        vString = "null";
                    }
                    else if (value === undefined) {
                        vString = "undefined";
                    }
                    else if (typeof value === "object") {
                        vString = "(object)";
                        variablesReference = _this.nextId();
                        // Variables should be requested lazily, so reference loops aren't an issue
                        _this._vars[variablesReference] = _this.getVariableValues(value);
                    }
                    else {
                        vString = value.toString();
                    }
                    // Remove the metadata from the name
                    var displayName = name_1.substr(0, name_1.lastIndexOf("___"));
                    result.push({
                        name: displayName,
                        value: vString,
                        variablesReference: variablesReference
                    });
                }
                return result;
            });
        };
        StoppedState.prototype.nextId = function () {
            return this._currentId++;
        };
        return StoppedState;
    }());
})(pxsim || (pxsim = {}));
/// <reference path="../localtypings/pxtparts.d.ts"/>
var pxsim;
(function (pxsim) {
    function print(delay) {
        if (delay === void 0) { delay = 0; }
        function p() {
            try {
                window.print();
            }
            catch (e) {
                // oops
            }
        }
        if (delay)
            setTimeout(p, delay);
        else
            p();
    }
    pxsim.print = print;
    var Embed;
    (function (Embed) {
        function start() {
            window.addEventListener("message", receiveMessage, false);
            var frameid = window.location.hash.slice(1);
            initAppcache();
            pxsim.Runtime.postMessage({ type: 'ready', frameid: frameid });
        }
        Embed.start = start;
        function receiveMessage(event) {
            var origin = event.origin; // || (<any>event).originalEvent.origin;
            // TODO: test origins
            var data = event.data || {};
            var type = data.type || '';
            if (!type)
                return;
            switch (type || '') {
                case "run":
                    run(data);
                    break;
                case "instructions":
                    pxsim.instructions.renderInstructions(data);
                    break;
                case "stop":
                    stop();
                    break;
                case "mute":
                    mute(data.mute);
                    break;
                case "print":
                    print();
                    break;
                case "custom":
                    if (pxsim.handleCustomMessage)
                        pxsim.handleCustomMessage(data);
                    break;
                case 'pxteditor':
                    break; //handled elsewhere
                case 'debugger':
                    if (runtime) {
                        runtime.handleDebuggerMsg(data);
                    }
                    break;
                default:
                    queue(data);
                    break;
            }
        }
        // TODO remove this; this should be using Runtime.runtime which gets
        // set correctly depending on which runtime is currently running
        var runtime;
        function stop() {
            if (runtime) {
                runtime.kill();
                if (runtime.board)
                    runtime.board.kill();
            }
        }
        Embed.stop = stop;
        function run(msg) {
            stop();
            if (msg.mute)
                mute(msg.mute);
            if (msg.localizedStrings)
                pxsim.localization.setLocalizedStrings(msg.localizedStrings);
            runtime = new pxsim.Runtime(msg);
            runtime.board.initAsync(msg)
                .done(function () {
                runtime.run(function (v) {
                    pxsim.dumpLivePointers();
                    pxsim.Runtime.postMessage({ type: "toplevelcodefinished" });
                });
            });
        }
        Embed.run = run;
        function mute(mute) {
            pxsim.AudioContextManager.mute(mute);
        }
        function queue(msg) {
            if (!runtime || runtime.dead) {
                return;
            }
            runtime.board.receiveMessage(msg);
        }
    })(Embed = pxsim.Embed || (pxsim.Embed = {}));
    /**
     * Log an event to the parent editor (allowSimTelemetry must be enabled in target)
     * @param id The id of the event
     * @param data Any custom values associated with this event
     */
    function tickEvent(id, data) {
        postMessageToEditor({
            type: "pxtsim",
            action: "event",
            tick: id,
            data: data
        });
    }
    pxsim.tickEvent = tickEvent;
    /**
     * Log an error to the parent editor (allowSimTelemetry must be enabled in target)
     * @param cat The category of the error
     * @param msg The error message
     * @param data Any custom values associated with this event
     */
    function reportError(cat, msg, data) {
        postMessageToEditor({
            type: "pxtsim",
            action: "event",
            tick: "error",
            category: cat,
            message: msg,
            data: data
        });
    }
    pxsim.reportError = reportError;
    function postMessageToEditor(message) {
        if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
            window.parent.postMessage(message, "*");
        }
    }
    function initAppcache() {
        if (typeof window !== 'undefined' && window.applicationCache) {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY)
                reload();
            window.applicationCache.addEventListener("updateready", function () {
                if (window.applicationCache.status === window.applicationCache.UPDATEREADY)
                    reload();
            });
        }
    }
    function reload() {
        // Continuously send message just in case the editor isn't ready to handle it yet
        setInterval(function () {
            pxsim.Runtime.postMessage({ type: "simulator", command: "reload" });
        }, 3000);
    }
    pxsim.reload = reload;
})(pxsim || (pxsim = {}));
pxsim.util.injectPolyphils();
if (typeof window !== 'undefined') {
    window.addEventListener('load', function (ev) {
        pxsim.Embed.start();
    });
}
var pxsim;
(function (pxsim) {
    var instructions;
    (function (instructions) {
        var LOC_LBL_SIZE = 10;
        var QUANT_LBL_SIZE = 30;
        var QUANT_LBL = function (q) { return q + "x"; };
        var WIRE_QUANT_LBL_SIZE = 20;
        var LBL_VERT_PAD = 3;
        var LBL_RIGHT_PAD = 5;
        var LBL_LEFT_PAD = 5;
        var REQ_WIRE_HEIGHT = 40;
        var REQ_CMP_HEIGHT = 50;
        var REQ_CMP_SCALE = 0.5 * 3;
        var ORIENTATION = "portrait";
        var PPI = 96.0;
        var PAGE_SCALAR = 0.95;
        var _a = (ORIENTATION == "portrait" ? [PPI * 8.5 * PAGE_SCALAR, PPI * 11.0 * PAGE_SCALAR] : [PPI * 11.0 * PAGE_SCALAR, PPI * 8.5 * PAGE_SCALAR]), FULL_PAGE_WIDTH = _a[0], FULL_PAGE_HEIGHT = _a[1];
        var PAGE_MARGIN = PPI * 0.45;
        var PAGE_WIDTH = FULL_PAGE_WIDTH - PAGE_MARGIN * 2;
        var PAGE_HEIGHT = FULL_PAGE_HEIGHT - PAGE_MARGIN * 2;
        var BORDER_COLOR = "gray";
        var BORDER_RADIUS = 5 * 4;
        var BORDER_WIDTH = 2 * 2;
        var _b = [1, 1], PANEL_ROWS = _b[0], PANEL_COLS = _b[1];
        var PANEL_MARGIN = 20;
        var PANEL_PADDING = 8 * 3;
        var PANEL_WIDTH = PAGE_WIDTH / PANEL_COLS - (PANEL_MARGIN + PANEL_PADDING + BORDER_WIDTH) * PANEL_COLS;
        var PANEL_HEIGHT = PAGE_HEIGHT / PANEL_ROWS - (PANEL_MARGIN + PANEL_PADDING + BORDER_WIDTH) * PANEL_ROWS;
        var BOARD_WIDTH = 465;
        var BOARD_LEFT = (PANEL_WIDTH - BOARD_WIDTH) / 2.0 + PANEL_PADDING;
        var BOARD_BOT = PANEL_PADDING;
        var NUM_BOX_SIZE = 120;
        var NUM_FONT = 80;
        var NUM_MARGIN = 10;
        var FRONT_PAGE_BOARD_WIDTH = 400;
        var PART_SCALAR = 1.7;
        var PARTS_BOARD_SCALE = 0.17;
        var PARTS_BB_SCALE = 0.25;
        var PARTS_CMP_SCALE = 0.3;
        var PARTS_WIRE_SCALE = 0.23;
        var BACK_PAGE_BOARD_WIDTH = PANEL_WIDTH - PANEL_PADDING * 1.5;
        var STYLE = "\n            .instr-panel {\n                margin: " + PANEL_MARGIN + "px;\n                padding: " + PANEL_PADDING + "px;\n                border-width: " + BORDER_WIDTH + "px;\n                border-color: " + BORDER_COLOR + ";\n                border-style: solid;\n                border-radius: " + BORDER_RADIUS + "px;\n                display: inline-block;\n                width: " + PANEL_WIDTH + "px;\n                height: " + PANEL_HEIGHT + "px;\n                position: relative;\n                overflow: hidden;\n                page-break-inside: avoid;\n            }\n            .board-svg {\n                margin: 0 auto;\n                display: block;\n                position: absolute;\n                bottom: " + BOARD_BOT + "px;\n                left: " + BOARD_LEFT + "px;\n            }\n            .panel-num-outer {\n                position: absolute;\n                left: " + -BORDER_WIDTH + "px;\n                top: " + -BORDER_WIDTH + "px;\n                width: " + NUM_BOX_SIZE + "px;\n                height: " + NUM_BOX_SIZE + "px;\n                border-width: " + BORDER_WIDTH + "px;\n                border-style: solid;\n                border-color: " + BORDER_COLOR + ";\n                border-radius: " + BORDER_RADIUS + "px 0 " + BORDER_RADIUS + "px 0;\n            }\n            .panel-num {\n                margin: " + NUM_MARGIN + "px 0;\n                text-align: center;\n                font-size: " + NUM_FONT + "px;\n            }\n            .cmp-div {\n                display: inline-block;\n            }\n            .reqs-div {\n                margin-left: " + (PANEL_PADDING + NUM_BOX_SIZE) + "px;\n                margin-top: 5px;\n            }\n            .partslist-wire,\n            .partslist-cmp {\n                margin: 10px;\n            }\n            .partslist-wire {\n                display: inline-block;\n            }\n            ";
        function addClass(el, cls) {
            //TODO move to library
            if (el.classList)
                el.classList.add(cls);
            else if (el.className.indexOf(cls) < 0)
                el.className += " " + cls;
        }
        function mkTxt(p, txt, size) {
            var el = pxsim.svg.elt("text");
            var x = p[0], y = p[1];
            pxsim.svg.hydrate(el, { x: x, y: y, style: "font-size:" + size + "px;" });
            el.textContent = txt;
            return el;
        }
        function mkBoardImgSvg(def) {
            var boardView = pxsim.visuals.mkBoardView({
                visual: def
            });
            return boardView.getView();
        }
        function mkBBSvg() {
            var bb = new pxsim.visuals.Breadboard({});
            return bb.getSVGAndSize();
        }
        function wrapSvg(el, opts) {
            //TODO: Refactor this function; it is too complicated. There is a lot of error-prone math being done
            // to scale and place all elements which could be simplified with more forethought.
            var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var dims = { l: 0, t: 0, w: 0, h: 0 };
            var cmpSvgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgEl.appendChild(cmpSvgEl);
            cmpSvgEl.appendChild(el.el);
            var cmpSvgAtts = {
                "viewBox": el.x + " " + el.y + " " + el.w + " " + el.h,
                "preserveAspectRatio": "xMidYMid",
            };
            dims.w = el.w;
            dims.h = el.h;
            var scale = function (scaler) {
                dims.h *= scaler;
                dims.w *= scaler;
                cmpSvgAtts.width = dims.w;
                cmpSvgAtts.height = dims.h;
            };
            if (opts.cmpScale) {
                scale(opts.cmpScale);
            }
            if (opts.cmpWidth && opts.cmpWidth < dims.w) {
                scale(opts.cmpWidth / dims.w);
            }
            else if (opts.cmpHeight && opts.cmpHeight < dims.h) {
                scale(opts.cmpHeight / dims.h);
            }
            pxsim.svg.hydrate(cmpSvgEl, cmpSvgAtts);
            var elDims = { l: dims.l, t: dims.t, w: dims.w, h: dims.h };
            var updateL = function (newL) {
                if (newL < dims.l) {
                    var extraW = dims.l - newL;
                    dims.l = newL;
                    dims.w += extraW;
                }
            };
            var updateR = function (newR) {
                var oldR = dims.l + dims.w;
                if (oldR < newR) {
                    var extraW = newR - oldR;
                    dims.w += extraW;
                }
            };
            var updateT = function (newT) {
                if (newT < dims.t) {
                    var extraH = dims.t - newT;
                    dims.t = newT;
                    dims.h += extraH;
                }
            };
            var updateB = function (newB) {
                var oldB = dims.t + dims.h;
                if (oldB < newB) {
                    var extraH = newB - oldB;
                    dims.h += extraH;
                }
            };
            //labels
            var _a = [-0.3, 0.3], xOff = _a[0], yOff = _a[1]; //HACK: these constants tweak the way "mkTxt" knows how to center the text
            var txtAspectRatio = [1.4, 1.0];
            if (opts && opts.top) {
                var size = opts.topSize;
                var txtW = size / txtAspectRatio[0];
                var txtH = size / txtAspectRatio[1];
                var _b = [elDims.l + elDims.w / 2, elDims.t - LBL_VERT_PAD - txtH / 2], cx = _b[0], y = _b[1];
                var lbl = pxsim.visuals.mkTxt(cx, y, size, 0, opts.top, xOff, yOff);
                pxsim.svg.addClass(lbl, "cmp-lbl");
                svgEl.appendChild(lbl);
                var len = txtW * opts.top.length;
                updateT(y - txtH / 2);
                updateL(cx - len / 2);
                updateR(cx + len / 2);
            }
            if (opts && opts.bot) {
                var size = opts.botSize;
                var txtW = size / txtAspectRatio[0];
                var txtH = size / txtAspectRatio[1];
                var _c = [elDims.l + elDims.w / 2, elDims.t + elDims.h + LBL_VERT_PAD + txtH / 2], cx = _c[0], y = _c[1];
                var lbl = pxsim.visuals.mkTxt(cx, y, size, 0, opts.bot, xOff, yOff);
                pxsim.svg.addClass(lbl, "cmp-lbl");
                svgEl.appendChild(lbl);
                var len = txtW * opts.bot.length;
                updateB(y + txtH / 2);
                updateL(cx - len / 2);
                updateR(cx + len / 2);
            }
            if (opts && opts.right) {
                var size = opts.rightSize;
                var txtW = size / txtAspectRatio[0];
                var txtH = size / txtAspectRatio[1];
                var len = txtW * opts.right.length;
                var _d = [elDims.l + elDims.w + LBL_RIGHT_PAD + len / 2, elDims.t + elDims.h / 2], cx = _d[0], cy = _d[1];
                var lbl = pxsim.visuals.mkTxt(cx, cy, size, 0, opts.right, xOff, yOff);
                pxsim.svg.addClass(lbl, "cmp-lbl");
                svgEl.appendChild(lbl);
                updateT(cy - txtH / 2);
                updateR(cx + len / 2);
                updateB(cy + txtH / 2);
            }
            if (opts && opts.left) {
                var size = opts.leftSize;
                var txtW = size / txtAspectRatio[0];
                var txtH = size / txtAspectRatio[1];
                var len = txtW * opts.left.length;
                var _e = [elDims.l - LBL_LEFT_PAD - len / 2, elDims.t + elDims.h / 2], cx = _e[0], cy = _e[1];
                var lbl = pxsim.visuals.mkTxt(cx, cy, size, 0, opts.left, xOff, yOff);
                pxsim.svg.addClass(lbl, "cmp-lbl");
                svgEl.appendChild(lbl);
                updateT(cy - txtH / 2);
                updateL(cx - len / 2);
                updateB(cy + txtH / 2);
            }
            var svgAtts = {
                "viewBox": dims.l + " " + dims.t + " " + dims.w + " " + dims.h,
                "width": dims.w * PART_SCALAR,
                "height": dims.h * PART_SCALAR,
                "preserveAspectRatio": "xMidYMid",
            };
            pxsim.svg.hydrate(svgEl, svgAtts);
            var div = document.createElement("div");
            div.appendChild(svgEl);
            return div;
        }
        function mkCmpDiv(cmp, opts) {
            var state = pxsim.runtime.board;
            var el;
            if (cmp == "wire") {
                el = pxsim.visuals.mkWirePart([0, 0], opts.wireClr || "red", opts.crocClips);
            }
            else {
                var partVis = cmp;
                if (typeof partVis.builtIn == "string") {
                    var cnstr = state.builtinPartVisuals[partVis.builtIn];
                    el = cnstr([0, 0]);
                }
                else {
                    el = pxsim.visuals.mkGenericPartSVG(partVis);
                }
            }
            return wrapSvg(el, opts);
        }
        function mkBoardProps(allocOpts) {
            var allocRes = pxsim.allocateDefinitions(allocOpts);
            var stepToWires = [];
            var stepToCmps = [];
            var stepOffset = 1;
            allocRes.partsAndWires.forEach(function (cAndWs) {
                var part = cAndWs.part;
                var wires = cAndWs.wires;
                cAndWs.assembly.forEach(function (step, idx) {
                    if (step.part && part)
                        stepToCmps[stepOffset + idx] = [part];
                    if (step.wireIndices && step.wireIndices.length > 0 && wires)
                        stepToWires[stepOffset + idx] = step.wireIndices.map(function (i) { return wires[i]; });
                });
                stepOffset += cAndWs.assembly.length;
            });
            var numSteps = stepOffset;
            var lastStep = numSteps - 1;
            var allCmps = allocRes.partsAndWires.map(function (r) { return r.part; }).filter(function (p) { return !!p; });
            var allWires = allocRes.partsAndWires.map(function (r) { return r.wires || []; }).reduce(function (p, n) { return p.concat(n); }, []);
            var colorToWires = {};
            var allWireColors = [];
            allWires.forEach(function (w) {
                if (!colorToWires[w.color]) {
                    colorToWires[w.color] = [];
                    allWireColors.push(w.color);
                }
                colorToWires[w.color].push(w);
            });
            return {
                boardDef: allocOpts.boardDef,
                cmpDefs: allocOpts.partDefs,
                fnArgs: allocOpts.fnArgs,
                allAlloc: allocRes,
                stepToWires: stepToWires,
                stepToCmps: stepToCmps,
                allWires: allWires,
                allCmps: allCmps,
                lastStep: lastStep,
                colorToWires: colorToWires,
                allWireColors: allWireColors,
            };
        }
        function mkBlankBoardAndBreadboard(props, width, buildMode) {
            if (buildMode === void 0) { buildMode = false; }
            var state = pxsim.runtime.board;
            var opts = {
                state: state,
                boardDef: props.boardDef,
                forceBreadboardLayout: true,
                forceBreadboardRender: props.allAlloc.requiresBreadboard,
                partDefs: props.cmpDefs,
                maxWidth: width + "px",
                fnArgs: props.fnArgs,
                wireframe: buildMode,
                partsList: []
            };
            var boardHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: opts.boardDef.visual,
                wireframe: opts.wireframe
            }), opts);
            var view = boardHost.getView();
            pxsim.svg.addClass(view, "board-svg");
            //set smiley
            //HACK
            // let img = board.board.displayCmp.image;
            // img.set(1, 0, 255);
            // img.set(3, 0, 255);
            // img.set(0, 2, 255);
            // img.set(1, 3, 255);
            // img.set(2, 3, 255);
            // img.set(3, 3, 255);
            // img.set(4, 2, 255);
            // board.updateState();
            return boardHost;
        }
        function drawSteps(board, step, props) {
            var view = board.getView();
            if (step > 0) {
                pxsim.svg.addClass(view, "grayed");
            }
            var _loop_1 = function (i) {
                var cmps = props.stepToCmps[i];
                if (cmps) {
                    cmps.forEach(function (partInst) {
                        var cmp = board.addPart(partInst);
                        //last step
                        if (i === step) {
                            //highlight locations pins
                            partInst.breadboardConnections.forEach(function (bbLoc) { return board.highlightBreadboardPin(bbLoc); });
                            pxsim.svg.addClass(cmp.element, "notgrayed");
                        }
                    });
                }
                var wires = props.stepToWires[i];
                if (wires) {
                    wires.forEach(function (w) {
                        var wire = board.addWire(w);
                        //last step
                        if (i === step) {
                            //location highlights
                            if (w.start.type == "breadboard") {
                                var lbls = board.highlightBreadboardPin(w.start);
                            }
                            else {
                                board.highlightBoardPin(w.start.pin);
                            }
                            if (w.end.type == "breadboard") {
                                var lbls = board.highlightBreadboardPin(w.end);
                            }
                            else {
                                board.highlightBoardPin(w.end.pin);
                            }
                            //highlight wire
                            board.highlightWire(wire);
                        }
                    });
                }
            };
            for (var i = 0; i <= step; i++) {
                _loop_1(i);
            }
        }
        function mkPanel() {
            //panel
            var panel = document.createElement("div");
            addClass(panel, "instr-panel");
            return panel;
        }
        function mkPartsPanel(props) {
            var panel = mkPanel();
            // board and breadboard
            var boardImg = mkBoardImgSvg(props.boardDef.visual);
            var board = wrapSvg(boardImg, { left: QUANT_LBL(1), leftSize: QUANT_LBL_SIZE, cmpScale: PARTS_BOARD_SCALE });
            panel.appendChild(board);
            var bbRaw = mkBBSvg();
            var bb = wrapSvg(bbRaw, { left: QUANT_LBL(1), leftSize: QUANT_LBL_SIZE, cmpScale: PARTS_BB_SCALE });
            panel.appendChild(bb);
            // components
            var cmps = props.allCmps;
            cmps.forEach(function (c) {
                var quant = 1;
                // TODO: don't special case this
                if (c.visual.builtIn === "buttonpair") {
                    quant = 2;
                }
                var cmp = mkCmpDiv(c.visual, {
                    left: QUANT_LBL(quant),
                    leftSize: QUANT_LBL_SIZE,
                    cmpScale: PARTS_CMP_SCALE,
                });
                addClass(cmp, "partslist-cmp");
                panel.appendChild(cmp);
            });
            // wires
            props.allWireColors.forEach(function (clr) {
                var quant = props.colorToWires[clr].length;
                var style = props.boardDef.pinStyles[clr] || "female";
                var cmp = mkCmpDiv("wire", {
                    left: QUANT_LBL(quant),
                    leftSize: WIRE_QUANT_LBL_SIZE,
                    wireClr: clr,
                    cmpScale: PARTS_WIRE_SCALE,
                    crocClips: style == "croc"
                });
                addClass(cmp, "partslist-wire");
                panel.appendChild(cmp);
            });
            return panel;
        }
        function mkStepPanel(step, props) {
            var panel = mkPanel();
            //board
            var board = mkBlankBoardAndBreadboard(props, BOARD_WIDTH, true);
            drawSteps(board, step, props);
            panel.appendChild(board.getView());
            //number
            var numDiv = document.createElement("div");
            addClass(numDiv, "panel-num-outer");
            addClass(numDiv, "noselect");
            panel.appendChild(numDiv);
            var num = document.createElement("div");
            addClass(num, "panel-num");
            num.textContent = (step + 1) + "";
            numDiv.appendChild(num);
            // add requirements
            var reqsDiv = document.createElement("div");
            addClass(reqsDiv, "reqs-div");
            panel.appendChild(reqsDiv);
            var wires = (props.stepToWires[step] || []);
            var mkLabel = function (loc) {
                if (loc.type === "breadboard") {
                    var _a = loc, row = _a.row, col = _a.col;
                    return "(" + row + "," + col + ")";
                }
                else
                    return loc.pin;
            };
            wires.forEach(function (w) {
                var croc = false;
                if (w.end.type == "dalboard") {
                    croc = props.boardDef.pinStyles[w.end.pin] == "croc";
                }
                var cmp = mkCmpDiv("wire", {
                    top: mkLabel(w.end),
                    topSize: LOC_LBL_SIZE,
                    bot: mkLabel(w.start),
                    botSize: LOC_LBL_SIZE,
                    wireClr: w.color,
                    cmpHeight: REQ_WIRE_HEIGHT,
                    crocClips: croc
                });
                addClass(cmp, "cmp-div");
                reqsDiv.appendChild(cmp);
            });
            var cmps = (props.stepToCmps[step] || []);
            cmps.forEach(function (c) {
                var locs;
                if (c.visual.builtIn === "buttonpair") {
                    //TODO: don't special case this
                    locs = [c.breadboardConnections[0], c.breadboardConnections[2]];
                }
                else {
                    locs = [c.breadboardConnections[0]];
                }
                locs.forEach(function (l, i) {
                    var topLbl;
                    if (l) {
                        var row = l.row, col = l.col;
                        topLbl = "(" + row + "," + col + ")";
                    }
                    else {
                        topLbl = "";
                    }
                    var scale = REQ_CMP_SCALE;
                    if (c.visual.builtIn === "buttonpair")
                        scale *= 0.5; //TODO: don't special case
                    var cmp = mkCmpDiv(c.visual, {
                        top: topLbl,
                        topSize: LOC_LBL_SIZE,
                        cmpHeight: REQ_CMP_HEIGHT,
                        cmpScale: scale
                    });
                    addClass(cmp, "cmp-div");
                    reqsDiv.appendChild(cmp);
                });
            });
            return panel;
        }
        function updateFrontPanel(props) {
            var panel = document.getElementById("front-panel");
            var board = mkBlankBoardAndBreadboard(props, FRONT_PAGE_BOARD_WIDTH, false);
            board.addAll(props.allAlloc);
            panel.appendChild(board.getView());
            return [panel, props];
        }
        function mkFinalPanel(props) {
            var panel = mkPanel();
            addClass(panel, "back-panel");
            var board = mkBlankBoardAndBreadboard(props, BACK_PAGE_BOARD_WIDTH, false);
            board.addAll(props.allAlloc);
            panel.appendChild(board.getView());
            return panel;
        }
        function renderParts(container, options) {
            if (!options.boardDef.pinStyles)
                options.boardDef.pinStyles = {};
            if (options.configData)
                pxsim.setConfigData(options.configData.cfg, options.configData.cfgKey);
            var msg = {
                type: "run",
                code: "",
                boardDefinition: options.boardDef,
                partDefinitions: options.partDefinitions
            };
            pxsim.runtime = new pxsim.Runtime(msg);
            pxsim.runtime.board = null;
            pxsim.initCurrentRuntime(msg); // TODO it seems Runtime() ctor already calls this?
            var style = document.createElement("style");
            style.textContent += STYLE;
            document.head.appendChild(style);
            var cmpDefs = options.partDefinitions;
            //props
            var dummyBreadboard = new pxsim.visuals.Breadboard({});
            var props = mkBoardProps({
                boardDef: options.boardDef,
                partDefs: cmpDefs,
                partsList: options.parts,
                fnArgs: options.fnArgs,
                getBBCoord: dummyBreadboard.getCoord.bind(dummyBreadboard)
            });
            //front page
            var frontPanel = updateFrontPanel(props);
            //all required parts
            var partsPanel = mkPartsPanel(props);
            container.appendChild(partsPanel);
            //steps
            for (var s = 0; s <= props.lastStep; s++) {
                var p = mkStepPanel(s, props);
                container.appendChild(p);
            }
            //final
            var finalPanel = mkFinalPanel(props);
            container.appendChild(finalPanel);
        }
        instructions.renderParts = renderParts;
        function renderInstructions(msg) {
            document.getElementById("proj-title").innerText = msg.options.name || "";
            renderParts(document.body, msg.options);
        }
        instructions.renderInstructions = renderInstructions;
    })(instructions = pxsim.instructions || (pxsim.instructions = {}));
})(pxsim || (pxsim = {}));
// APIs for language/runtime support (records, locals, function values)
var pxsim;
(function (pxsim) {
    pxsim.quiet = false;
    function check(cond, msg) {
        if (msg === void 0) { msg = "sim: check failed"; }
        if (!cond) {
            debugger;
            throw new Error(msg);
        }
    }
    pxsim.check = check;
    pxsim.floatingPoint = false;
    pxsim.refCounting = true;
    pxsim.title = "";
    var cfgKey = {};
    var cfg = {};
    function noRefCounting() {
        pxsim.refCounting = false;
        if (pxsim.runtime)
            pxsim.runtime.refCounting = false;
    }
    pxsim.noRefCounting = noRefCounting;
    function getConfig(id) {
        if (cfg.hasOwnProperty(id + ""))
            return cfg[id + ""];
        return null;
    }
    pxsim.getConfig = getConfig;
    function getConfigKey(id) {
        if (cfgKey.hasOwnProperty(id))
            return cfgKey[id];
        return null;
    }
    pxsim.getConfigKey = getConfigKey;
    function getAllConfigKeys() {
        return Object.keys(cfgKey);
    }
    pxsim.getAllConfigKeys = getAllConfigKeys;
    function setConfig(id, val) {
        cfg[id] = val;
    }
    pxsim.setConfig = setConfig;
    function setConfigData(cfg_, cfgKey_) {
        cfg = cfg_;
        cfgKey = cfgKey_;
    }
    pxsim.setConfigData = setConfigData;
    function getConfigData() {
        return { cfg: cfg, cfgKey: cfgKey };
    }
    pxsim.getConfigData = getConfigData;
    function enableFloatingPoint() {
        pxsim.floatingPoint = true;
    }
    pxsim.enableFloatingPoint = enableFloatingPoint;
    function setTitle(t) {
        pxsim.title = t;
    }
    pxsim.setTitle = setTitle;
    var RefObject = /** @class */ (function () {
        function RefObject() {
            this.refcnt = 1;
            if (pxsim.runtime)
                this.id = pxsim.runtime.registerLiveObject(this);
            else
                this.id = 0;
        }
        RefObject.prototype.destroy = function () { };
        RefObject.prototype.print = function () {
            if (pxsim.runtime && pxsim.runtime.refCountingDebug)
                console.log("RefObject id:" + this.id + " refs:" + this.refcnt);
        };
        // render a debug preview string
        RefObject.prototype.toDebugString = function () {
            return "(object)";
        };
        RefObject.toAny = function (o) {
            if (o && o.toAny)
                return o.toAny();
            return o;
        };
        RefObject.toDebugString = function (o) {
            if (o === null)
                return "null";
            if (o === undefined)
                return "undefined;";
            if (o.toDebugString)
                return o.toDebugString();
            if (typeof o == "string")
                return JSON.stringify(o);
            return o.toString();
        };
        return RefObject;
    }());
    pxsim.RefObject = RefObject;
    var FnWrapper = /** @class */ (function () {
        function FnWrapper(func, caps, a0, a1, a2, cb) {
            this.func = func;
            this.caps = caps;
            this.a0 = a0;
            this.a1 = a1;
            this.a2 = a2;
            this.cb = cb;
        }
        return FnWrapper;
    }());
    pxsim.FnWrapper = FnWrapper;
    var RefRecord = /** @class */ (function (_super) {
        __extends(RefRecord, _super);
        function RefRecord() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fields = [];
            return _this;
        }
        RefRecord.prototype.destroy = function () {
            var refmask = this.vtable.refmask;
            for (var i = 0; i < refmask.length; ++i)
                if (refmask[i])
                    decr(this.fields[i]);
            this.fields = null;
            this.vtable = null;
        };
        RefRecord.prototype.isRef = function (idx) {
            check(0 <= idx && idx < this.fields.length);
            return !!this.vtable.refmask[idx];
        };
        RefRecord.prototype.print = function () {
            if (pxsim.runtime && pxsim.runtime.refCountingDebug)
                console.log("RefRecord id:" + this.id + " (" + this.vtable.name + ") len:" + this.fields.length);
        };
        return RefRecord;
    }(RefObject));
    pxsim.RefRecord = RefRecord;
    var RefAction = /** @class */ (function (_super) {
        __extends(RefAction, _super);
        function RefAction() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fields = [];
            return _this;
        }
        RefAction.prototype.isRef = function (idx) {
            check(0 <= idx && idx < this.fields.length);
            return idx < this.reflen;
        };
        RefAction.prototype.ldclo = function (n) {
            n >>= 2;
            check(0 <= n && n < this.fields.length);
            return this.fields[n];
        };
        RefAction.prototype.destroy = function () {
            for (var i = 0; i < this.reflen; ++i)
                decr(this.fields[i]);
            this.fields = null;
            this.func = null;
        };
        RefAction.prototype.print = function () {
            if (pxsim.runtime && pxsim.runtime.refCountingDebug)
                console.log("RefAction id:" + this.id + " refs:" + this.refcnt + " len:" + this.fields.length);
        };
        return RefAction;
    }(RefObject));
    pxsim.RefAction = RefAction;
    var pxtcore;
    (function (pxtcore) {
        function mkAction(reflen, len, fn) {
            var r = new RefAction();
            r.reflen = reflen;
            r.func = fn;
            for (var i = 0; i < len; ++i)
                r.fields.push(null);
            return r;
        }
        pxtcore.mkAction = mkAction;
        function runAction3(a, a0, a1, a2) {
            var cb = pxsim.getResume();
            if (a instanceof RefAction) {
                pxtrt.incr(a);
                cb(new FnWrapper(a.func, a.fields, a0, a1, a2, function () {
                    pxtrt.decr(a);
                }));
            }
            else {
                // no-closure case
                cb(new FnWrapper(a, null, a0, a1, a2, null));
            }
        }
        pxtcore.runAction3 = runAction3;
        function runAction2(a, a0, a1) {
            runAction3(a, a0, a1, null);
        }
        pxtcore.runAction2 = runAction2;
        function runAction1(a, v) {
            runAction3(a, v, null, null);
        }
        pxtcore.runAction1 = runAction1;
        function runAction0(a) {
            runAction3(a, null, null, null);
        }
        pxtcore.runAction0 = runAction0;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
    var RefLocal = /** @class */ (function (_super) {
        __extends(RefLocal, _super);
        function RefLocal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.v = 0;
            return _this;
        }
        RefLocal.prototype.print = function () {
            //console.log(`RefLocal id:${this.id} refs:${this.refcnt} v:${this.v}`)
        };
        return RefLocal;
    }(RefObject));
    pxsim.RefLocal = RefLocal;
    var RefRefLocal = /** @class */ (function (_super) {
        __extends(RefRefLocal, _super);
        function RefRefLocal() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.v = null;
            return _this;
        }
        RefRefLocal.prototype.destroy = function () {
            decr(this.v);
        };
        RefRefLocal.prototype.print = function () {
            if (pxsim.runtime && pxsim.runtime.refCountingDebug)
                console.log("RefRefLocal id:" + this.id + " refs:" + this.refcnt + " v:" + this.v);
        };
        return RefRefLocal;
    }(RefObject));
    pxsim.RefRefLocal = RefRefLocal;
    var RefMap = /** @class */ (function (_super) {
        __extends(RefMap, _super);
        function RefMap() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.vtable = 42;
            _this.data = [];
            return _this;
        }
        RefMap.prototype.findIdx = function (key) {
            for (var i = 0; i < this.data.length; ++i) {
                if (this.data[i].key >> 1 == key)
                    return i;
            }
            return -1;
        };
        RefMap.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            for (var i = 0; i < this.data.length; ++i) {
                if (this.data[i].key & 1) {
                    decr(this.data[i].val);
                }
                this.data[i].val = 0;
            }
            this.data = [];
        };
        RefMap.prototype.print = function () {
            if (pxsim.runtime && pxsim.runtime.refCountingDebug)
                console.log("RefMap id:" + this.id + " refs:" + this.refcnt + " size:" + this.data.length);
        };
        RefMap.prototype.toAny = function () {
            var r = {};
            this.data.forEach(function (d) {
                r[d.keyName] = RefObject.toAny(d.val);
            });
            return r;
        };
        return RefMap;
    }(RefObject));
    pxsim.RefMap = RefMap;
    function num(v) {
        if (!pxsim.floatingPoint && v === undefined)
            return 0;
        return v;
    }
    function ref(v) {
        if (v === undefined)
            return null;
        return v;
    }
    function decr(v) {
        if (!pxsim.runtime || !pxsim.runtime.refCounting)
            return;
        if (v instanceof RefObject) {
            var o = v;
            check(o.refcnt > 0);
            if (--o.refcnt == 0) {
                pxsim.runtime.unregisterLiveObject(o);
                o.destroy();
            }
        }
    }
    pxsim.decr = decr;
    function initString(v) {
        return v;
    }
    pxsim.initString = initString;
    function incr(v) {
        if (!pxsim.runtime || !pxsim.runtime.refCounting)
            return v;
        if (v instanceof RefObject) {
            var o = v;
            check(o.refcnt > 0);
            o.refcnt++;
        }
        return v;
    }
    pxsim.incr = incr;
    function dumpLivePointers() {
        if (pxsim.runtime)
            pxsim.runtime.dumpLivePointers();
    }
    pxsim.dumpLivePointers = dumpLivePointers;
    var numops;
    (function (numops) {
        function toString(v) {
            if (v === null)
                return "null";
            else if (v === undefined)
                return "undefined";
            return initString(v.toString());
        }
        numops.toString = toString;
        function toBoolDecr(v) {
            decr(v);
            return !!v;
        }
        numops.toBoolDecr = toBoolDecr;
        function toBool(v) {
            return !!v;
        }
        numops.toBool = toBool;
    })(numops = pxsim.numops || (pxsim.numops = {}));
    var langsupp;
    (function (langsupp) {
        function toInt(v) { return (v | 0); } // TODO
        langsupp.toInt = toInt;
        function toFloat(v) { return v; }
        langsupp.toFloat = toFloat;
        function ignore(v) { return v; }
        langsupp.ignore = ignore;
        function ptreqDecr(a, b) {
            return pxsim.Number_.eqDecr(a, b);
        }
        langsupp.ptreqDecr = ptreqDecr;
    })(langsupp = pxsim.langsupp || (pxsim.langsupp = {}));
    (function (pxtcore) {
        pxtcore.incr = pxsim.incr;
        pxtcore.decr = pxsim.decr;
        function ptrOfLiteral(v) {
            return v;
        }
        pxtcore.ptrOfLiteral = ptrOfLiteral;
        function debugMemLeaks() {
            dumpLivePointers();
        }
        pxtcore.debugMemLeaks = debugMemLeaks;
        function allocate() {
            pxsim.U.userError("allocate() called in simulator");
        }
        pxtcore.allocate = allocate;
        function templateHash() {
            return 0;
        }
        pxtcore.templateHash = templateHash;
        function programHash() {
            return 0;
        }
        pxtcore.programHash = programHash;
        function programSize() {
            return 0;
        }
        pxtcore.programSize = programSize;
        function afterProgramPage() {
            return 0;
        }
        pxtcore.afterProgramPage = afterProgramPage;
        function getConfig(key, defl) {
            var r = pxsim.getConfig(key);
            if (r == null)
                return defl;
            return r;
        }
        pxtcore.getConfig = getConfig;
        // these shouldn't generally be called when compiled for simulator
        // provide implementation to silence warnings and as future-proofing
        function toInt(n) { return n >> 0; }
        pxtcore.toInt = toInt;
        function toUInt(n) { return n >>> 0; }
        pxtcore.toUInt = toUInt;
        function toDouble(n) { return n; }
        pxtcore.toDouble = toDouble;
        function toFloat(n) { return n; }
        pxtcore.toFloat = toFloat;
        function fromInt(n) { return n; }
        pxtcore.fromInt = fromInt;
        function fromUInt(n) { return n; }
        pxtcore.fromUInt = fromUInt;
        function fromDouble(n) { return n; }
        pxtcore.fromDouble = fromDouble;
        function fromFloat(n) { return n; }
        pxtcore.fromFloat = fromFloat;
        function fromBool(n) { return !!n; }
        pxtcore.fromBool = fromBool;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
    var pxtrt;
    (function (pxtrt) {
        pxtrt.incr = pxsim.incr;
        pxtrt.decr = pxsim.decr;
        function toInt8(v) {
            return ((v & 0xff) << 24) >> 24;
        }
        pxtrt.toInt8 = toInt8;
        function toInt16(v) {
            return ((v & 0xffff) << 16) >> 16;
        }
        pxtrt.toInt16 = toInt16;
        function toInt32(v) {
            return v | 0;
        }
        pxtrt.toInt32 = toInt32;
        function toUInt32(v) {
            return v >>> 0;
        }
        pxtrt.toUInt32 = toUInt32;
        function toUInt8(v) {
            return v & 0xff;
        }
        pxtrt.toUInt8 = toUInt8;
        function toUInt16(v) {
            return v & 0xffff;
        }
        pxtrt.toUInt16 = toUInt16;
        function nullFix(v) {
            if (v === null || v === undefined || v === false)
                return 0;
            if (v === true)
                return 1;
            return v;
        }
        pxtrt.nullFix = nullFix;
        function nullCheck(v) {
            if (v === null || v === undefined)
                pxsim.U.userError("Dereferencing null/undefined value.");
        }
        pxtrt.nullCheck = nullCheck;
        function panic(code) {
            pxsim.U.userError("PANIC! Code " + code);
        }
        pxtrt.panic = panic;
        function stringToBool(s) {
            pxtrt.decr(s);
            return s ? 1 : 0;
        }
        pxtrt.stringToBool = stringToBool;
        function ptrToBool(v) {
            pxtrt.decr(v);
            return v ? 1 : 0;
        }
        pxtrt.ptrToBool = ptrToBool;
        function emptyToNull(s) {
            if (s == "")
                return 0;
            return s;
        }
        pxtrt.emptyToNull = emptyToNull;
        function ldfld(r, idx) {
            nullCheck(r);
            check(!r.isRef(idx));
            var v = num(r.fields[idx]);
            pxtrt.decr(r);
            return v;
        }
        pxtrt.ldfld = ldfld;
        function stfld(r, idx, v) {
            nullCheck(r);
            check(!r.isRef(idx));
            r.fields[idx] = v;
            pxtrt.decr(r);
        }
        pxtrt.stfld = stfld;
        function ldfldRef(r, idx) {
            nullCheck(r);
            check(r.isRef(idx));
            var v = pxtrt.incr(ref(r.fields[idx]));
            pxtrt.decr(r);
            return v;
        }
        pxtrt.ldfldRef = ldfldRef;
        function stfldRef(r, idx, v) {
            nullCheck(r);
            check(r.isRef(idx));
            pxtrt.decr(r.fields[idx]);
            r.fields[idx] = v;
            pxtrt.decr(r);
        }
        pxtrt.stfldRef = stfldRef;
        function ldloc(r) {
            return r.v;
        }
        pxtrt.ldloc = ldloc;
        function ldlocRef(r) {
            return pxtrt.incr(r.v);
        }
        pxtrt.ldlocRef = ldlocRef;
        function stloc(r, v) {
            r.v = v;
        }
        pxtrt.stloc = stloc;
        function stlocRef(r, v) {
            pxtrt.decr(r.v);
            r.v = v;
        }
        pxtrt.stlocRef = stlocRef;
        function mkloc() {
            return new RefLocal();
        }
        pxtrt.mkloc = mkloc;
        function mklocRef() {
            return new RefRefLocal();
        }
        pxtrt.mklocRef = mklocRef;
        // Store a captured local in a closure. It returns the action, so it can be chained.
        function stclo(a, idx, v) {
            check(0 <= idx && idx < a.fields.length);
            check(a.fields[idx] === null);
            //console.log(`STCLO [${idx}] = ${v}`)
            a.fields[idx] = v;
            return a;
        }
        pxtrt.stclo = stclo;
        function runtimeWarning(msg) {
            pxsim.Runtime.postMessage(pxsim.getWarningMessage(msg));
        }
        pxtrt.runtimeWarning = runtimeWarning;
        function mkMap() {
            return new RefMap();
        }
        pxtrt.mkMap = mkMap;
        function mapGet(map, key) {
            var i = map.findIdx(key);
            if (i < 0) {
                pxtrt.decr(map);
                return 0;
            }
            var r = map.data[i].val;
            pxtrt.decr(map);
            return r;
        }
        pxtrt.mapGet = mapGet;
        function mapGetRef(map, key) {
            var i = map.findIdx(key);
            if (i < 0) {
                pxtrt.decr(map);
                return 0;
            }
            var r = pxtrt.incr(map.data[i].val);
            pxtrt.decr(map);
            return r;
        }
        pxtrt.mapGetRef = mapGetRef;
        function mapSet(map, key, val, keyName) {
            var i = map.findIdx(key);
            if (i < 0) {
                map.data.push({
                    key: key << 1,
                    val: val,
                    keyName: keyName
                });
            }
            else {
                if (map.data[i].key & 1) {
                    pxtrt.decr(map.data[i].val);
                    map.data[i].key = key << 1;
                }
                map.data[i].val = val;
                map.data[i].keyName = keyName;
            }
            pxtrt.decr(map);
        }
        pxtrt.mapSet = mapSet;
        function mapSetRef(map, key, val, keyName) {
            var i = map.findIdx(key);
            if (i < 0) {
                map.data.push({
                    key: (key << 1) | 1,
                    val: val,
                    keyName: keyName
                });
            }
            else {
                if (map.data[i].key & 1) {
                    pxtrt.decr(map.data[i].val);
                }
                else {
                    map.data[i].key = (key << 1) | 1;
                }
                map.data[i].val = val;
                map.data[i].keyName = keyName;
            }
            pxtrt.decr(map);
        }
        pxtrt.mapSetRef = mapSetRef;
    })(pxtrt = pxsim.pxtrt || (pxsim.pxtrt = {}));
    (function (pxtcore) {
        function mkClassInstance(vtable) {
            check(!!vtable.methods);
            check(!!vtable.refmask);
            var r = new RefRecord();
            r.vtable = vtable;
            var len = vtable.refmask.length;
            for (var i = 0; i < len; ++i)
                r.fields.push(pxsim.floatingPoint ? undefined : 0);
            return r;
        }
        pxtcore.mkClassInstance = mkClassInstance;
        function switch_eq(a, b) {
            if (a == b) {
                pxtcore.decr(b);
                return true;
            }
            return false;
        }
        pxtcore.switch_eq = switch_eq;
    })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
    var thread;
    (function (thread) {
        thread.panic = pxtrt.panic;
        function pause(ms) {
            var cb = pxsim.getResume();
            setTimeout(function () { cb(); }, ms);
        }
        thread.pause = pause;
        function runInBackground(a) {
            pxsim.runtime.runFiberAsync(a).done();
        }
        thread.runInBackground = runInBackground;
        function forever(a) {
            function loop() {
                pxsim.runtime.runFiberAsync(a)
                    .then(function () { return Promise.delay(20); })
                    .then(loop)
                    .done();
            }
            pxtrt.nullCheck(a);
            incr(a);
            loop();
        }
        thread.forever = forever;
    })(thread = pxsim.thread || (pxsim.thread = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    // A ref-counted collection of either primitive or ref-counted objects (String, Image,
    // user-defined record, another collection)
    var RefCollection = /** @class */ (function (_super) {
        __extends(RefCollection, _super);
        //undefiend or null values need to be handled specially to support default values
        //default values of boolean, string, number & object arrays are respectively, false, null, 0, null
        //All of the default values are implemented by mapping undefined\null to zero.
        function RefCollection() {
            var _this = _super.call(this) || this;
            _this.data = [];
            return _this;
        }
        RefCollection.prototype.toArray = function () {
            return this.data.slice(0);
        };
        RefCollection.prototype.toAny = function () {
            return this.data.map(function (v) { return pxsim.RefObject.toAny(v); });
        };
        RefCollection.prototype.toDebugString = function () {
            var s = "[";
            for (var i = 0; i < this.data.length; ++i) {
                if (i > 0)
                    s += ",";
                s += pxsim.RefObject.toDebugString(this.data[i]);
                if (s.length > 15) {
                    s += "...";
                    break;
                }
            }
            s += "]";
            return s;
        };
        RefCollection.prototype.destroy = function () {
            var data = this.data;
            for (var i = 0; i < data.length; ++i) {
                pxsim.decr(data[i]);
                data[i] = 0;
            }
            this.data = [];
        };
        RefCollection.prototype.isValidIndex = function (x) {
            return (x >= 0 && x < this.data.length);
        };
        RefCollection.prototype.push = function (x) {
            this.data.push(x);
        };
        RefCollection.prototype.pop = function () {
            var x = this.data.pop();
            if (x == undefined) {
                return 0;
            }
            return x;
        };
        RefCollection.prototype.getLength = function () {
            return this.data.length;
        };
        RefCollection.prototype.setLength = function (x) {
            this.data.length = x;
        };
        RefCollection.prototype.getAt = function (x) {
            if (this.data[x] != undefined) {
                return this.data[x];
            }
            return 0;
        };
        RefCollection.prototype.setAt = function (x, y) {
            this.data[x] = y;
        };
        RefCollection.prototype.insertAt = function (x, y) {
            this.data.splice(x, 0, y);
        };
        RefCollection.prototype.removeAt = function (x) {
            var ret = this.data.splice(x, 1);
            if (ret[0] == undefined) {
                return 0;
            }
            return ret[0]; //return the deleted element.
        };
        RefCollection.prototype.indexOf = function (x, start) {
            if (x != 0) {
                return this.data.indexOf(x, start);
            }
            //As we treat undefined same as 0 which is default value for all the arrays, will need to search both.
            var defaultValueIndex = this.data.indexOf(x, start);
            var undefinedIndex = -1;
            for (var i = start; i < this.data.length; i++) {
                if (this.data[i] == undefined) {
                    undefinedIndex = i;
                    break;
                }
            }
            if (defaultValueIndex < undefinedIndex || undefinedIndex == -1) {
                return defaultValueIndex;
            }
            return undefinedIndex;
        };
        RefCollection.prototype.print = function () {
            //console.log(`RefCollection id:${this.id} refs:${this.refcnt} len:${this.data.length} d0:${this.data[0]}`)
        };
        return RefCollection;
    }(pxsim.RefObject));
    pxsim.RefCollection = RefCollection;
    var Array_;
    (function (Array_) {
        function mk() {
            return new RefCollection();
        }
        Array_.mk = mk;
        function length(c) {
            pxsim.pxtrt.nullCheck(c);
            return c.getLength();
        }
        Array_.length = length;
        function setLength(c, x) {
            pxsim.pxtrt.nullCheck(c);
            c.setLength(x);
        }
        Array_.setLength = setLength;
        function push(c, x) {
            pxsim.pxtrt.nullCheck(c);
            pxsim.incr(x);
            c.push(x);
        }
        Array_.push = push;
        function pop(c, x) {
            pxsim.pxtrt.nullCheck(c);
            var ret = c.pop();
            // no decr() since we're returning it
            return ret;
        }
        Array_.pop = pop;
        function getAt(c, x) {
            pxsim.pxtrt.nullCheck(c);
            var tmp = c.getAt(x);
            pxsim.incr(tmp);
            return tmp;
        }
        Array_.getAt = getAt;
        function removeAt(c, x) {
            pxsim.pxtrt.nullCheck(c);
            if (!c.isValidIndex(x))
                return;
            // no decr() since we're returning it
            return c.removeAt(x);
        }
        Array_.removeAt = removeAt;
        function insertAt(c, x, y) {
            pxsim.pxtrt.nullCheck(c);
            pxsim.incr(y);
            c.insertAt(x, y);
        }
        Array_.insertAt = insertAt;
        function setAt(c, x, y) {
            pxsim.pxtrt.nullCheck(c);
            if (c.isValidIndex(x)) {
                //if there is an existing element handle refcount
                pxsim.decr(c.getAt(x));
            }
            pxsim.incr(y);
            c.setAt(x, y);
        }
        Array_.setAt = setAt;
        function indexOf(c, x, start) {
            pxsim.pxtrt.nullCheck(c);
            return c.indexOf(x, start);
        }
        Array_.indexOf = indexOf;
        function removeElement(c, x) {
            pxsim.pxtrt.nullCheck(c);
            var idx = indexOf(c, x, 0);
            if (idx >= 0) {
                removeAt(c, idx);
                return 1;
            }
            return 0;
        }
        Array_.removeElement = removeElement;
    })(Array_ = pxsim.Array_ || (pxsim.Array_ = {}));
    var Math_;
    (function (Math_) {
        function imul(x, y) {
            return intMult(x, y);
        }
        Math_.imul = imul;
        function idiv(x, y) {
            return (x / y) >> 0;
        }
        Math_.idiv = idiv;
        function round(n) { return Math.round(n); }
        Math_.round = round;
        function roundWithPrecision(x, digits) {
            digits = digits | 0;
            // invalid digits input
            if (digits <= 0)
                return Math.round(x);
            if (x == 0)
                return 0;
            var r = 0;
            while (r == 0 && digits < 21) {
                var d = Math.pow(10, digits++);
                r = Math.round(x * d + Number.EPSILON) / d;
            }
            return r;
        }
        Math_.roundWithPrecision = roundWithPrecision;
        function ceil(n) { return Math.ceil(n); }
        Math_.ceil = ceil;
        function floor(n) { return Math.floor(n); }
        Math_.floor = floor;
        function sqrt(n) { return Math.sqrt(n); }
        Math_.sqrt = sqrt;
        function pow(x, y) {
            if (pxsim.floatingPoint)
                return Math.pow(x, y);
            else
                return Math.pow(x, y) | 0;
        }
        Math_.pow = pow;
        function clz32(n) { return Math.clz32(n); }
        Math_.clz32 = clz32;
        function log(n) { return Math.log(n); }
        Math_.log = log;
        function log10(n) { return Math.log10(n); }
        Math_.log10 = log10;
        function log2(n) { return Math.log2(n); }
        Math_.log2 = log2;
        function exp(n) { return Math.exp(n); }
        Math_.exp = exp;
        function sin(n) { return Math.sin(n); }
        Math_.sin = sin;
        function sinh(n) { return Math.sinh(n); }
        Math_.sinh = sinh;
        function cos(n) { return Math.cos(n); }
        Math_.cos = cos;
        function cosh(n) { return Math.cosh(n); }
        Math_.cosh = cosh;
        function tan(n) { return Math.tan(n); }
        Math_.tan = tan;
        function tanh(n) { return Math.tanh(n); }
        Math_.tanh = tanh;
        function asin(n) { return Math.asin(n); }
        Math_.asin = asin;
        function asinh(n) { return Math.asinh(n); }
        Math_.asinh = asinh;
        function acos(n) { return Math.acos(n); }
        Math_.acos = acos;
        function acosh(n) { return Math.acosh(n); }
        Math_.acosh = acosh;
        function atan(n) { return Math.atan(n); }
        Math_.atan = atan;
        function atanh(x) { return Math.atanh(x); }
        Math_.atanh = atanh;
        function atan2(y, x) { return Math.atan2(y, x); }
        Math_.atan2 = atan2;
        function trunc(x) { return x > 0 ? Math.floor(x) : Math.ceil(x); }
        Math_.trunc = trunc;
        function random() { return Math.random(); }
        Math_.random = random;
        function randomRange(min, max) {
            if (min == max)
                return min;
            if (min > max) {
                var t = min;
                min = max;
                max = t;
            }
            if (Math.floor(min) == min && Math.floor(max) == max)
                return min + Math.floor(Math.random() * (max - min + 1));
            else
                return min + Math.random() * (max - min);
        }
        Math_.randomRange = randomRange;
    })(Math_ = pxsim.Math_ || (pxsim.Math_ = {}));
    // for explanations see:
    // http://stackoverflow.com/questions/3428136/javascript-integer-math-incorrect-results (second answer)
    // (but the code below doesn't come from there; I wrote it myself)
    // TODO use Math.imul if available
    function intMult(a, b) {
        var ah = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
    }
    var Number_;
    (function (Number_) {
        function lt(x, y) { return x < y; }
        Number_.lt = lt;
        function le(x, y) { return x <= y; }
        Number_.le = le;
        function neq(x, y) { return !eq(x, y); }
        Number_.neq = neq;
        function eq(x, y) { return pxsim.pxtrt.nullFix(x) == pxsim.pxtrt.nullFix(y); }
        Number_.eq = eq;
        function eqDecr(x, y) {
            if (pxsim.pxtrt.nullFix(x) == pxsim.pxtrt.nullFix(y)) {
                pxsim.decr(y);
                return true;
            }
            else {
                return false;
            }
        }
        Number_.eqDecr = eqDecr;
        function gt(x, y) { return x > y; }
        Number_.gt = gt;
        function ge(x, y) { return x >= y; }
        Number_.ge = ge;
        function div(x, y) { return Math.floor(x / y) | 0; }
        Number_.div = div;
        function mod(x, y) { return x % y; }
        Number_.mod = mod;
        function bnot(x) { return ~x; }
        Number_.bnot = bnot;
        function toString(x) { return pxsim.initString(x + ""); }
        Number_.toString = toString;
    })(Number_ = pxsim.Number_ || (pxsim.Number_ = {}));
    var thumb;
    (function (thumb) {
        function adds(x, y) { return (x + y) | 0; }
        thumb.adds = adds;
        function subs(x, y) { return (x - y) | 0; }
        thumb.subs = subs;
        function divs(x, y) { return Math.floor(x / y) | 0; }
        thumb.divs = divs;
        function muls(x, y) { return intMult(x, y); }
        thumb.muls = muls;
        function ands(x, y) { return x & y; }
        thumb.ands = ands;
        function orrs(x, y) { return x | y; }
        thumb.orrs = orrs;
        function eors(x, y) { return x ^ y; }
        thumb.eors = eors;
        function lsls(x, y) { return x << y; }
        thumb.lsls = lsls;
        function lsrs(x, y) { return x >>> y; }
        thumb.lsrs = lsrs;
        function asrs(x, y) { return x >> y; }
        thumb.asrs = asrs;
        function bnot(x) { return ~x; }
        thumb.bnot = bnot;
        function ignore(v) { return v; }
        thumb.ignore = ignore;
    })(thumb = pxsim.thumb || (pxsim.thumb = {}));
    var avr;
    (function (avr) {
        function toInt(v) {
            return (v << 16) >> 16;
        }
        function adds(x, y) { return toInt(x + y); }
        avr.adds = adds;
        function subs(x, y) { return toInt(x - y); }
        avr.subs = subs;
        function divs(x, y) { return toInt(Math.floor(x / y)); }
        avr.divs = divs;
        function muls(x, y) { return toInt(intMult(x, y)); }
        avr.muls = muls;
        function ands(x, y) { return toInt(x & y); }
        avr.ands = ands;
        function orrs(x, y) { return toInt(x | y); }
        avr.orrs = orrs;
        function eors(x, y) { return toInt(x ^ y); }
        avr.eors = eors;
        function lsls(x, y) { return toInt(x << y); }
        avr.lsls = lsls;
        function lsrs(x, y) { return (x & 0xffff) >>> y; }
        avr.lsrs = lsrs;
        function asrs(x, y) { return toInt(x >> y); }
        avr.asrs = asrs;
        function bnot(x) { return ~x; }
        avr.bnot = bnot;
        function ignore(v) { return v; }
        avr.ignore = ignore;
    })(avr = pxsim.avr || (pxsim.avr = {}));
    var String_;
    (function (String_) {
        function mkEmpty() {
            return "";
        }
        String_.mkEmpty = mkEmpty;
        function fromCharCode(code) {
            return pxsim.initString(String.fromCharCode(code));
        }
        String_.fromCharCode = fromCharCode;
        function toNumber(s) {
            return parseFloat(s);
        }
        String_.toNumber = toNumber;
        // TODO check edge-conditions
        function concat(a, b) {
            return pxsim.initString(a + b);
        }
        String_.concat = concat;
        function substring(s, i, j) {
            pxsim.pxtrt.nullCheck(s);
            return pxsim.initString(s.slice(i, i + j));
        }
        String_.substring = substring;
        function equals(s1, s2) {
            return s1 == s2;
        }
        String_.equals = equals;
        function compare(s1, s2) {
            if (s1 == s2)
                return 0;
            if (s1 < s2)
                return -1;
            return 1;
        }
        String_.compare = compare;
        function compareDecr(s1, s2) {
            if (s1 == s2) {
                pxsim.decr(s2);
                return 0;
            }
            if (s1 < s2)
                return -1;
            return 1;
        }
        String_.compareDecr = compareDecr;
        function length(s) {
            return s.length;
        }
        String_.length = length;
        function isEmpty(s) {
            return s == null || s.length == 0;
        }
        String_.isEmpty = isEmpty;
        function substr(s, start, length) {
            return pxsim.initString(s.substr(start, length));
        }
        String_.substr = substr;
        function inRange(s, i) {
            pxsim.pxtrt.nullCheck(s);
            return 0 <= i && i < s.length;
        }
        function charAt(s, i) {
            return pxsim.initString(s.charAt(i));
        }
        String_.charAt = charAt;
        function charCodeAt(s, i) {
            pxsim.pxtrt.nullCheck(s);
            return inRange(s, i) ? s.charCodeAt(i) : 0;
        }
        String_.charCodeAt = charCodeAt;
    })(String_ = pxsim.String_ || (pxsim.String_ = {}));
    var Boolean_;
    (function (Boolean_) {
        function toString(v) {
            return v ? "true" : "false";
        }
        Boolean_.toString = toString;
        function bang(v) {
            return !v;
        }
        Boolean_.bang = bang;
    })(Boolean_ = pxsim.Boolean_ || (pxsim.Boolean_ = {}));
    var RefBuffer = /** @class */ (function (_super) {
        __extends(RefBuffer, _super);
        function RefBuffer(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            return _this;
        }
        RefBuffer.prototype.print = function () {
            // console.log(`RefBuffer id:${this.id} refs:${this.refcnt} len:${this.data.length} d0:${this.data[0]}`)
        };
        return RefBuffer;
    }(pxsim.RefObject));
    pxsim.RefBuffer = RefBuffer;
    var BufferMethods;
    (function (BufferMethods) {
        // keep in sync with C++!
        var NumberFormat;
        (function (NumberFormat) {
            NumberFormat[NumberFormat["Int8LE"] = 1] = "Int8LE";
            NumberFormat[NumberFormat["UInt8LE"] = 2] = "UInt8LE";
            NumberFormat[NumberFormat["Int16LE"] = 3] = "Int16LE";
            NumberFormat[NumberFormat["UInt16LE"] = 4] = "UInt16LE";
            NumberFormat[NumberFormat["Int32LE"] = 5] = "Int32LE";
            NumberFormat[NumberFormat["Int8BE"] = 6] = "Int8BE";
            NumberFormat[NumberFormat["UInt8BE"] = 7] = "UInt8BE";
            NumberFormat[NumberFormat["Int16BE"] = 8] = "Int16BE";
            NumberFormat[NumberFormat["UInt16BE"] = 9] = "UInt16BE";
            NumberFormat[NumberFormat["Int32BE"] = 10] = "Int32BE";
            NumberFormat[NumberFormat["UInt32LE"] = 11] = "UInt32LE";
            NumberFormat[NumberFormat["UInt32BE"] = 12] = "UInt32BE";
            NumberFormat[NumberFormat["Float32LE"] = 13] = "Float32LE";
            NumberFormat[NumberFormat["Float64LE"] = 14] = "Float64LE";
            NumberFormat[NumberFormat["Float32BE"] = 15] = "Float32BE";
            NumberFormat[NumberFormat["Float64BE"] = 16] = "Float64BE";
        })(NumberFormat = BufferMethods.NumberFormat || (BufferMethods.NumberFormat = {}));
        ;
        function fmtInfoCore(fmt) {
            switch (fmt) {
                case NumberFormat.Int8LE: return -1;
                case NumberFormat.UInt8LE: return 1;
                case NumberFormat.Int16LE: return -2;
                case NumberFormat.UInt16LE: return 2;
                case NumberFormat.Int32LE: return -4;
                case NumberFormat.UInt32LE: return 4;
                case NumberFormat.Int8BE: return -10;
                case NumberFormat.UInt8BE: return 10;
                case NumberFormat.Int16BE: return -20;
                case NumberFormat.UInt16BE: return 20;
                case NumberFormat.Int32BE: return -40;
                case NumberFormat.UInt32BE: return 40;
                case NumberFormat.Float32LE: return 4;
                case NumberFormat.Float32BE: return 40;
                case NumberFormat.Float64LE: return 8;
                case NumberFormat.Float64BE: return 80;
                default: throw pxsim.U.userError("bad format");
            }
        }
        function fmtInfo(fmt) {
            var size = fmtInfoCore(fmt);
            var signed = false;
            if (size < 0) {
                signed = true;
                size = -size;
            }
            var swap = false;
            if (size >= 10) {
                swap = true;
                size /= 10;
            }
            var isFloat = fmt >= NumberFormat.Float32LE;
            return { size: size, signed: signed, swap: swap, isFloat: isFloat };
        }
        function getNumber(buf, fmt, offset) {
            var inf = fmtInfo(fmt);
            if (inf.isFloat) {
                var subarray = buf.data.buffer.slice(offset, offset + inf.size);
                if (inf.swap) {
                    var u8 = new Uint8Array(subarray);
                    u8.reverse();
                }
                if (inf.size == 4)
                    return new Float32Array(subarray)[0];
                else
                    return new Float64Array(subarray)[0];
            }
            var r = 0;
            for (var i = 0; i < inf.size; ++i) {
                r <<= 8;
                var off = inf.swap ? offset + i : offset + inf.size - i - 1;
                r |= buf.data[off];
            }
            if (inf.signed) {
                var missingBits = 32 - (inf.size * 8);
                r = (r << missingBits) >> missingBits;
            }
            else {
                r = r >>> 0;
            }
            return r;
        }
        BufferMethods.getNumber = getNumber;
        function setNumber(buf, fmt, offset, r) {
            var inf = fmtInfo(fmt);
            if (inf.isFloat) {
                var arr = new Uint8Array(inf.size);
                if (inf.size == 4)
                    new Float32Array(arr.buffer)[0] = r;
                else
                    new Float64Array(arr.buffer)[0] = r;
                if (inf.swap)
                    arr.reverse();
                for (var i = 0; i < inf.size; ++i) {
                    buf.data[offset + i] = arr[i];
                }
                return;
            }
            for (var i = 0; i < inf.size; ++i) {
                var off = !inf.swap ? offset + i : offset + inf.size - i - 1;
                buf.data[off] = (r & 0xff);
                r >>= 8;
            }
        }
        BufferMethods.setNumber = setNumber;
        function createBuffer(size) {
            return new RefBuffer(new Uint8Array(size));
        }
        BufferMethods.createBuffer = createBuffer;
        function createBufferFromHex(hex) {
            var r = createBuffer(hex.length >> 1);
            for (var i = 0; i < hex.length; i += 2)
                r.data[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
            return r;
        }
        BufferMethods.createBufferFromHex = createBufferFromHex;
        function getBytes(buf) {
            // not sure if this is any useful...
            return buf.data;
        }
        BufferMethods.getBytes = getBytes;
        function inRange(buf, off) {
            return 0 <= off && off < buf.data.length;
        }
        function getByte(buf, off) {
            if (inRange(buf, off))
                return buf.data[off];
            else
                return 0;
        }
        BufferMethods.getByte = getByte;
        function setByte(buf, off, v) {
            if (inRange(buf, off))
                buf.data[off] = v;
        }
        BufferMethods.setByte = setByte;
        function length(buf) {
            return buf.data.length;
        }
        BufferMethods.length = length;
        function fill(buf, value, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = -1; }
            if (offset < 0 || offset > buf.data.length)
                return;
            if (length < 0)
                length = buf.data.length;
            length = Math.min(length, buf.data.length - offset);
            buf.data.fill(value, offset, offset + length);
        }
        BufferMethods.fill = fill;
        function slice(buf, offset, length) {
            offset = Math.min(buf.data.length, offset);
            if (length < 0)
                length = buf.data.length;
            length = Math.min(length, buf.data.length - offset);
            return new RefBuffer(buf.data.slice(offset, offset + length));
        }
        BufferMethods.slice = slice;
        function toHex(buf) {
            var hex = "0123456789abcdef";
            var res = "";
            for (var i = 0; i < buf.data.length; ++i) {
                res += hex[buf.data[i] >> 4];
                res += hex[buf.data[i] & 0xf];
            }
            return res;
        }
        BufferMethods.toHex = toHex;
        function memmove(dst, dstOff, src, srcOff, len) {
            if (src.buffer === dst.buffer) {
                memmove(dst, dstOff, src.slice(srcOff, srcOff + len), 0, len);
            }
            else {
                for (var i = 0; i < len; ++i)
                    dst[dstOff + i] = src[srcOff + i];
            }
        }
        var INT_MIN = -0x80000000;
        function shift(buf, offset, start, len) {
            if (len < 0)
                len = buf.data.length - start;
            if (start < 0 || start + len > buf.data.length || start + len < start
                || len == 0 || offset == 0 || offset == INT_MIN)
                return;
            if (len == 0 || offset == 0 || offset == INT_MIN)
                return;
            if (offset <= -len || offset >= len) {
                fill(buf, 0);
                return;
            }
            if (offset < 0) {
                offset = -offset;
                memmove(buf.data, start + offset, buf.data, start, len - offset);
                buf.data.fill(0, start, start + offset);
            }
            else {
                len = len - offset;
                memmove(buf.data, start, buf.data, start + offset, len);
                buf.data.fill(0, start + len, start + len + offset);
            }
        }
        BufferMethods.shift = shift;
        function rotate(buf, offset, start, len) {
            if (len < 0)
                len = buf.data.length - start;
            if (start < 0 || start + len > buf.data.length || start + len < start
                || len == 0 || offset == 0 || offset == INT_MIN)
                return;
            if (offset < 0)
                offset += len << 8; // try to make it positive
            offset %= len;
            if (offset < 0)
                offset += len;
            var data = buf.data;
            var n_first = offset;
            var first = 0;
            var next = n_first;
            var last = len;
            while (first != next) {
                var tmp = data[first + start];
                data[first++ + start] = data[next + start];
                data[next++ + start] = tmp;
                if (next == last) {
                    next = n_first;
                }
                else if (first == n_first) {
                    n_first = next;
                }
            }
        }
        BufferMethods.rotate = rotate;
        function write(buf, dstOffset, src, srcOffset, length) {
            if (srcOffset === void 0) { srcOffset = 0; }
            if (length === void 0) { length = -1; }
            if (length < 0)
                length = src.data.length;
            if (srcOffset < 0 || dstOffset < 0 || dstOffset > buf.data.length)
                return;
            length = Math.min(src.data.length - srcOffset, buf.data.length - dstOffset);
            if (length < 0)
                return;
            memmove(buf.data, dstOffset, src.data, srcOffset, length);
        }
        BufferMethods.write = write;
    })(BufferMethods = pxsim.BufferMethods || (pxsim.BufferMethods = {}));
})(pxsim || (pxsim = {}));
// Localization functions. Please port any modifications over to pxtlib/util.ts
var pxsim;
(function (pxsim) {
    var localization;
    (function (localization) {
        var _localizeStrings = {};
        function setLocalizedStrings(strs) {
            _localizeStrings = strs || {};
        }
        localization.setLocalizedStrings = setLocalizedStrings;
        function lf(s) {
            return _localizeStrings[s] || s;
        }
        localization.lf = lf;
    })(localization = pxsim.localization || (pxsim.localization = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../localtypings/pxtparts.d.ts"/>
var pxsim;
(function (pxsim) {
    var U;
    (function (U) {
        function addClass(element, classes) {
            if (!element)
                return;
            if (!classes || classes.length == 0)
                return;
            function addSingleClass(el, singleCls) {
                if (el.classList)
                    el.classList.add(singleCls);
                else if (el.className.indexOf(singleCls) < 0)
                    el.className += ' ' + singleCls;
            }
            classes.split(' ').forEach(function (cls) {
                addSingleClass(element, cls);
            });
        }
        U.addClass = addClass;
        function removeClass(element, classes) {
            if (!element)
                return;
            if (!classes || classes.length == 0)
                return;
            function removeSingleClass(el, singleCls) {
                if (el.classList)
                    el.classList.remove(singleCls);
                else
                    el.className = el.className.replace(singleCls, '').replace(/\s{2,}/, ' ');
            }
            classes.split(' ').forEach(function (cls) {
                removeSingleClass(element, cls);
            });
        }
        U.removeClass = removeClass;
        function remove(element) {
            element.parentElement.removeChild(element);
        }
        U.remove = remove;
        function removeChildren(element) {
            while (element.firstChild)
                element.removeChild(element.firstChild);
        }
        U.removeChildren = removeChildren;
        function clear(element) {
            removeChildren(element);
        }
        U.clear = clear;
        function assert(cond, msg) {
            if (msg === void 0) { msg = "Assertion failed"; }
            if (!cond) {
                debugger;
                throw new Error(msg);
            }
        }
        U.assert = assert;
        function repeatMap(n, fn) {
            n = n || 0;
            var r = [];
            for (var i = 0; i < n; ++i)
                r.push(fn(i));
            return r;
        }
        U.repeatMap = repeatMap;
        function userError(msg) {
            var e = new Error(msg);
            e.isUserError = true;
            throw e;
        }
        U.userError = userError;
        function now() {
            return Date.now();
        }
        U.now = now;
        // current time in microseconds
        function perfNowUs() {
            var perf = typeof performance != "undefined" ?
                performance.now.bind(performance) ||
                    performance.moznow.bind(performance) ||
                    performance.msNow.bind(performance) ||
                    performance.webkitNow.bind(performance) ||
                    performance.oNow.bind(performance) :
                Date.now;
            return perf() * 1000;
        }
        U.perfNowUs = perfNowUs;
        function nextTick(f) {
            Promise._async._schedule(f);
        }
        U.nextTick = nextTick;
    })(U = pxsim.U || (pxsim.U = {}));
    function getResume() { return pxsim.runtime.getResume(); }
    pxsim.getResume = getResume;
    var SERIAL_BUFFER_LENGTH = 16;
    var BaseBoard = /** @class */ (function () {
        function BaseBoard() {
            this.serialOutBuffer = '';
        }
        BaseBoard.prototype.updateView = function () { };
        BaseBoard.prototype.receiveMessage = function (msg) { };
        BaseBoard.prototype.initAsync = function (msg) {
            this.runOptions = msg;
            return Promise.resolve();
        };
        BaseBoard.prototype.kill = function () { };
        BaseBoard.prototype.writeSerial = function (s) {
            if (!s)
                return;
            this.serialOutBuffer += s;
            if (/\n/.test(this.serialOutBuffer) || this.serialOutBuffer.length > SERIAL_BUFFER_LENGTH) {
                Runtime.postMessage({
                    type: 'serial',
                    data: this.serialOutBuffer,
                    id: pxsim.runtime.id,
                    sim: true
                });
                this.serialOutBuffer = '';
            }
        };
        return BaseBoard;
    }());
    pxsim.BaseBoard = BaseBoard;
    var CoreBoard = /** @class */ (function (_super) {
        __extends(CoreBoard, _super);
        function CoreBoard() {
            var _this = _super.call(this) || this;
            _this.id = "b" + Math.round(Math.random() * 2147483647);
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            // updates
            _this.updateSubscribers = [];
            _this.updateView = function () {
                _this.updateSubscribers.forEach(function (sub) { return sub(); });
            };
            _this.builtinParts = {};
            _this.builtinVisuals = {};
            _this.builtinPartVisuals = {};
            return _this;
        }
        CoreBoard.prototype.kill = function () {
            _super.prototype.kill.call(this);
            pxsim.AudioContextManager.stop();
        };
        return CoreBoard;
    }(BaseBoard));
    pxsim.CoreBoard = CoreBoard;
    var BareBoard = /** @class */ (function (_super) {
        __extends(BareBoard, _super);
        function BareBoard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BareBoard;
    }(BaseBoard));
    function initBareRuntime() {
        pxsim.runtime.board = new BareBoard();
        var myRT = pxsim;
        myRT.basic = {
            pause: pxsim.thread.pause,
            showNumber: function (n) {
                var cb = getResume();
                console.log("SHOW NUMBER:", n);
                U.nextTick(cb);
            }
        };
        myRT.serial = {
            writeString: function (s) { return pxsim.runtime.board.writeSerial(s); },
        };
        myRT.pins = {
            createBuffer: pxsim.BufferMethods.createBuffer,
        };
        myRT.control = {
            inBackground: pxsim.thread.runInBackground
        };
    }
    pxsim.initBareRuntime = initBareRuntime;
    var EventQueue = /** @class */ (function () {
        function EventQueue(runtime, valueToArgs) {
            this.runtime = runtime;
            this.valueToArgs = valueToArgs;
            this.max = 5;
            this.events = [];
            this.awaiters = [];
        }
        EventQueue.prototype.push = function (e, notifyOne) {
            if (this.awaiters.length > 0) {
                if (notifyOne) {
                    var aw = this.awaiters.shift();
                    if (aw)
                        aw();
                }
                else {
                    var aws = this.awaiters.slice();
                    this.awaiters = [];
                    aws.forEach(function (aw) { return aw(); });
                }
            }
            if (!this.handler || this.events.length > this.max)
                return;
            this.events.push(e);
            // if this is the first event pushed - start processing
            if (this.events.length == 1 && !this.lock)
                this.poke();
        };
        EventQueue.prototype.poke = function () {
            var _this = this;
            this.lock = true;
            var value = this.events.shift();
            (_a = this.runtime).runFiberAsync.apply(_a, [this.handler].concat((this.valueToArgs ? this.valueToArgs(value) : [value]))).done(function () {
                // we're done processing the current event, if there is still something left to do, do it
                if (_this.events.length > 0) {
                    _this.poke();
                }
                else {
                    _this.lock = false;
                }
            });
            var _a;
        };
        Object.defineProperty(EventQueue.prototype, "handler", {
            get: function () {
                return this._handler;
            },
            set: function (a) {
                if (this._handler) {
                    pxsim.pxtcore.decr(this._handler);
                }
                this._handler = a;
                if (this._handler) {
                    pxsim.pxtcore.incr(this._handler);
                }
            },
            enumerable: true,
            configurable: true
        });
        EventQueue.prototype.addAwaiter = function (awaiter) {
            this.awaiters.push(awaiter);
        };
        return EventQueue;
    }());
    pxsim.EventQueue = EventQueue;
    // overriden at loadtime by specific implementation
    pxsim.initCurrentRuntime = undefined;
    pxsim.handleCustomMessage = undefined;
    function _leave(s, v) {
        s.parent.retval = v;
        if (s.finalCallback)
            s.finalCallback(v);
        return s.parent;
    }
    // wraps simulator code as STS code - useful for default event handlers
    function syntheticRefAction(f) {
        return pxsim.pxtcore.mkAction(0, 0, function (s) { return _leave(s, f(s)); });
    }
    pxsim.syntheticRefAction = syntheticRefAction;
    var Runtime = /** @class */ (function () {
        function Runtime(msg) {
            var _this = this;
            this.numGlobals = 1000;
            this.dead = false;
            this.running = false;
            this.startTime = 0;
            this.startTimeUs = 0;
            this.globals = {};
            this.loopLock = null;
            this.loopLockWaitList = [];
            this.refCountingDebug = false;
            this.refCounting = true;
            this.refObjId = 1;
            this.liveRefObjs = {};
            this.stringRefCounts = {};
            this.numDisplayUpdates = 0;
            U.assert(!!pxsim.initCurrentRuntime);
            this.id = msg.id;
            this.refCountingDebug = !!msg.refCountingDebug;
            var yieldMaxSteps = 100;
            // These variables are used by the generated code as well
            // ---
            var entryPoint;
            var pxtrt = pxsim.pxtrt;
            var breakpoints = null;
            var breakAlways = false;
            var globals = this.globals;
            var yieldSteps = yieldMaxSteps;
            // ---
            var currResume;
            var dbgHeap;
            var dbgResume;
            var breakFrame = null; // for step-over
            var lastYield = Date.now();
            var __this = this;
            var tracePauseMs = 0;
            function oops(msg) {
                throw new Error("sim error: " + msg);
            }
            // referenced from eval()ed code
            function doNothing(s) {
                s.pc = -1;
                return leave(s, s.parent.retval);
            }
            function flushLoopLock() {
                while (__this.loopLockWaitList.length > 0 && !__this.loopLock) {
                    var f = __this.loopLockWaitList.shift();
                    f();
                }
            }
            function maybeYield(s, pc, r0) {
                yieldSteps = yieldMaxSteps;
                var now = Date.now();
                if (now - lastYield >= 20) {
                    lastYield = now;
                    s.pc = pc;
                    s.r0 = r0;
                    var lock_1 = new Object();
                    __this.loopLock = lock_1;
                    var cont = function () {
                        if (__this.dead)
                            return;
                        U.assert(s.pc == pc);
                        U.assert(__this.loopLock === lock_1);
                        __this.loopLock = null;
                        loop(s);
                        flushLoopLock();
                    };
                    //U.nextTick(cont)
                    setTimeout(cont, 5);
                    return true;
                }
                return false;
            }
            function setupDebugger(numBreakpoints) {
                breakpoints = new Uint8Array(numBreakpoints);
                // start running and let user put a breakpoint on start
                // breakAlways = true
            }
            function isBreakFrame(s) {
                if (!breakFrame)
                    return true; // nothing specified
                for (var p = breakFrame; p; p = p.parent) {
                    if (p == s)
                        return true;
                }
                return false;
            }
            function breakpoint(s, retPC, brkId, r0) {
                U.assert(!dbgResume);
                U.assert(!dbgHeap);
                s.pc = retPC;
                s.r0 = r0;
                var _a = pxsim.getBreakpointMsg(s, brkId), msg = _a.msg, heap = _a.heap;
                dbgHeap = heap;
                Runtime.postMessage(msg);
                dbgResume = function (m) {
                    dbgResume = null;
                    dbgHeap = null;
                    if (__this.dead)
                        return;
                    pxsim.runtime = __this;
                    U.assert(s.pc == retPC);
                    breakAlways = false;
                    breakFrame = null;
                    switch (m.subtype) {
                        case "resume":
                            break;
                        case "stepover":
                            breakAlways = true;
                            breakFrame = s;
                            break;
                        case "stepinto":
                            breakAlways = true;
                            break;
                        case "stepout":
                            breakAlways = true;
                            breakFrame = s.parent || s;
                            break;
                    }
                    return loop(s);
                };
                return null;
            }
            function trace(brkId, s, retPc, info) {
                setupResume(s, retPc);
                if (info.functionName === "<main>" || info.fileName === "main.ts") {
                    Runtime.postMessage({
                        type: "debugger",
                        subtype: "trace",
                        breakpointId: brkId,
                    });
                    pxsim.thread.pause(tracePauseMs);
                }
                else {
                    pxsim.thread.pause(0);
                }
                checkResumeConsumed();
            }
            function handleDebuggerMsg(msg) {
                switch (msg.subtype) {
                    case "config":
                        var cfg = msg;
                        if (cfg.setBreakpoints) {
                            breakpoints.fill(0);
                            for (var _i = 0, _a = cfg.setBreakpoints; _i < _a.length; _i++) {
                                var n = _a[_i];
                                breakpoints[n] = 1;
                            }
                        }
                        break;
                    case "traceConfig":
                        var trc = msg;
                        tracePauseMs = trc.interval;
                        break;
                    case "pause":
                        breakAlways = true;
                        breakFrame = null;
                        break;
                    case "resume":
                    case "stepover":
                    case "stepinto":
                    case "stepout":
                        if (dbgResume)
                            dbgResume(msg);
                        break;
                    case "variables":
                        var vmsg = msg;
                        var vars = undefined;
                        if (dbgHeap) {
                            var v = dbgHeap[vmsg.variablesReference];
                            if (v !== undefined)
                                vars = pxsim.dumpHeap(v, dbgHeap);
                        }
                        Runtime.postMessage({
                            type: "debugger",
                            subtype: "variables",
                            req_seq: msg.seq,
                            variables: vars
                        });
                        break;
                }
            }
            function loop(p) {
                if (__this.dead) {
                    console.log("Runtime terminated");
                    return;
                }
                U.assert(!__this.loopLock);
                try {
                    pxsim.runtime = __this;
                    while (!!p) {
                        __this.currFrame = p;
                        __this.currFrame.overwrittenPC = false;
                        p = p.fn(p);
                        //if (yieldSteps-- < 0 && maybeYield(p, p.pc, 0)) break;
                        __this.maybeUpdateDisplay();
                        if (__this.currFrame.overwrittenPC)
                            p = __this.currFrame;
                    }
                }
                catch (e) {
                    if (__this.errorHandler)
                        __this.errorHandler(e);
                    else {
                        console.error("Simulator crashed, no error handler", e.stack);
                        var msg_1 = pxsim.getBreakpointMsg(p, p.lastBrkId).msg;
                        msg_1.exceptionMessage = e.message;
                        msg_1.exceptionStack = e.stack;
                        Runtime.postMessage(msg_1);
                        if (__this.postError)
                            __this.postError(e);
                    }
                }
            }
            function actionCall(s, cb) {
                if (cb)
                    s.finalCallback = cb;
                s.depth = s.parent.depth + 1;
                if (s.depth > 1000) {
                    U.userError("Stack overflow");
                }
                s.pc = 0;
                return s;
            }
            var leave = _leave;
            function setupTop(cb) {
                var s = setupTopCore(cb);
                setupResume(s, 0);
                return s;
            }
            function setupTopCore(cb) {
                var frame = {
                    parent: null,
                    pc: 0,
                    depth: 0,
                    fn: function () {
                        if (cb)
                            cb(frame.retval);
                        return null;
                    }
                };
                return frame;
            }
            function topCall(fn, cb) {
                U.assert(!!__this.board);
                U.assert(!__this.running);
                __this.setRunning(true);
                var topFrame = setupTopCore(cb);
                var frame = {
                    parent: topFrame,
                    fn: fn,
                    depth: 0,
                    pc: 0
                };
                loop(actionCall(frame));
            }
            function checkResumeConsumed() {
                if (currResume)
                    oops("getResume() not called");
            }
            function setupResume(s, retPC) {
                currResume = buildResume(s, retPC);
            }
            function buildResume(s, retPC) {
                if (currResume)
                    oops("already has resume");
                s.pc = retPC;
                var start = Date.now();
                var fn = function (v) {
                    if (__this.dead)
                        return;
                    if (__this.loopLock) {
                        __this.loopLockWaitList.push(function () { return fn(v); });
                        return;
                    }
                    pxsim.runtime = __this;
                    var now = Date.now();
                    if (now - start > 3)
                        lastYield = now;
                    U.assert(s.pc == retPC);
                    if (v instanceof pxsim.FnWrapper) {
                        var w = v;
                        var frame_1 = {
                            parent: s,
                            fn: w.func,
                            lambdaArgs: [w.a0, w.a1, w.a2],
                            pc: 0,
                            caps: w.caps,
                            depth: s.depth + 1,
                            finalCallback: w.cb,
                        };
                        // If the function we call never pauses, this would cause the stack
                        // to grow unbounded.
                        var lock_2 = {};
                        __this.loopLock = lock_2;
                        return U.nextTick(function () {
                            U.assert(__this.loopLock === lock_2);
                            __this.loopLock = null;
                            loop(actionCall(frame_1));
                            flushLoopLock();
                        });
                    }
                    s.retval = v;
                    return loop(s);
                };
                return fn;
            }
            // tslint:disable-next-line
            eval(msg.code);
            this.refCounting = pxsim.refCounting;
            this.run = function (cb) { return topCall(entryPoint, cb); };
            this.getResume = function () {
                if (!currResume)
                    oops("noresume");
                var r = currResume;
                currResume = null;
                return r;
            };
            this.setupTop = setupTop;
            this.handleDebuggerMsg = handleDebuggerMsg;
            this.entry = entryPoint;
            this.overwriteResume = function (retPC) {
                currResume = null;
                if (retPC >= 0)
                    _this.currFrame.pc = retPC;
                _this.currFrame.overwrittenPC = true;
            };
            pxsim.runtime = this;
            pxsim.initCurrentRuntime(msg);
        }
        Runtime.prototype.registerLiveObject = function (object) {
            var id = this.refObjId++;
            if (this.refCounting)
                this.liveRefObjs[id + ""] = object;
            return id;
        };
        Runtime.prototype.unregisterLiveObject = function (object, keepAlive) {
            if (!keepAlive)
                U.assert(object.refcnt == 0, "ref count is not 0");
            delete this.liveRefObjs[object.id + ""];
        };
        Runtime.prototype.runningTime = function () {
            return U.now() - this.startTime;
        };
        Runtime.prototype.runningTimeUs = function () {
            return 0xffffffff & ((U.perfNowUs() - this.startTimeUs) >> 0);
        };
        Runtime.prototype.runFiberAsync = function (a, arg0, arg1, arg2) {
            var _this = this;
            pxsim.incr(a);
            return new Promise(function (resolve, reject) {
                return U.nextTick(function () {
                    pxsim.runtime = _this;
                    _this.setupTop(resolve);
                    pxsim.pxtcore.runAction3(a, arg0, arg1, arg2);
                    pxsim.decr(a); // if it's still running, action.run() has taken care of incrementing the counter
                });
            });
        };
        Runtime.postMessage = function (data) {
            if (!data)
                return;
            // TODO: origins
            if (typeof window !== 'undefined' && window.parent && window.parent.postMessage) {
                window.parent.postMessage(data, "*");
            }
            if (Runtime.messagePosted)
                Runtime.messagePosted(data);
        };
        Runtime.prototype.kill = function () {
            this.dead = true;
            // TODO fix this
            this.setRunning(false);
        };
        Runtime.prototype.updateDisplay = function () {
            this.board.updateView();
        };
        Runtime.prototype.queueDisplayUpdate = function () {
            this.numDisplayUpdates++;
        };
        Runtime.prototype.maybeUpdateDisplay = function () {
            if (this.numDisplayUpdates) {
                this.numDisplayUpdates = 0;
                this.updateDisplay();
            }
        };
        Runtime.prototype.setRunning = function (r) {
            if (this.running != r) {
                this.running = r;
                if (this.running) {
                    this.startTime = U.now();
                    this.startTimeUs = U.perfNowUs();
                    Runtime.postMessage({ type: 'status', runtimeid: this.id, state: 'running' });
                }
                else {
                    Runtime.postMessage({ type: 'status', runtimeid: this.id, state: 'killed' });
                }
                if (this.stateChanged)
                    this.stateChanged();
            }
        };
        Runtime.prototype.dumpLivePointers = function () {
            var _this = this;
            if (!this.refCounting || !this.refCountingDebug)
                return;
            var liveObjectNames = Object.keys(this.liveRefObjs);
            var stringRefCountNames = Object.keys(this.stringRefCounts);
            console.log("Live objects: " + liveObjectNames.length + " objects, " + stringRefCountNames.length + " strings");
            liveObjectNames.forEach(function (k) { return _this.liveRefObjs[k].print(); });
            stringRefCountNames.forEach(function (k) {
                var n = _this.stringRefCounts[k];
                console.log("Live String:", JSON.stringify(k), "refcnt=", n);
            });
        };
        return Runtime;
    }());
    pxsim.Runtime = Runtime;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var SimulatorState;
    (function (SimulatorState) {
        SimulatorState[SimulatorState["Unloaded"] = 0] = "Unloaded";
        SimulatorState[SimulatorState["Stopped"] = 1] = "Stopped";
        SimulatorState[SimulatorState["Running"] = 2] = "Running";
        SimulatorState[SimulatorState["Paused"] = 3] = "Paused";
    })(SimulatorState = pxsim.SimulatorState || (pxsim.SimulatorState = {}));
    var SimulatorDebuggerCommand;
    (function (SimulatorDebuggerCommand) {
        SimulatorDebuggerCommand[SimulatorDebuggerCommand["StepInto"] = 0] = "StepInto";
        SimulatorDebuggerCommand[SimulatorDebuggerCommand["StepOver"] = 1] = "StepOver";
        SimulatorDebuggerCommand[SimulatorDebuggerCommand["StepOut"] = 2] = "StepOut";
        SimulatorDebuggerCommand[SimulatorDebuggerCommand["Resume"] = 3] = "Resume";
        SimulatorDebuggerCommand[SimulatorDebuggerCommand["Pause"] = 4] = "Pause";
    })(SimulatorDebuggerCommand = pxsim.SimulatorDebuggerCommand || (pxsim.SimulatorDebuggerCommand = {}));
    var SimulatorDriver = /** @class */ (function () {
        function SimulatorDriver(container, options) {
            if (options === void 0) { options = {}; }
            this.container = container;
            this.options = options;
            this.themes = ["blue", "red", "green", "yellow"];
            this.runId = '';
            this.nextFrameId = 0;
            this.frameCounter = 0;
            this.traceInterval = 0;
            this.runOptions = {};
            this.state = SimulatorState.Unloaded;
            this.frameCleanupTimeout = 0;
            this.debuggerSeq = 1;
            this.debuggerResolvers = {};
        }
        SimulatorDriver.prototype.setHwDebugger = function (hw) {
            if (hw) {
                // TODO set some visual on the simulator frame
                // in future the simulator frame could reflect changes in the hardware
                this.hwdbg = hw;
                this.setState(SimulatorState.Running);
                this.container.style.opacity = "0.3";
            }
            else {
                delete this.container.style.opacity;
                this.hwdbg = null;
                this.setState(SimulatorState.Running);
                this.stop();
            }
        };
        SimulatorDriver.prototype.handleHwDebuggerMsg = function (msg) {
            if (!this.hwdbg)
                return;
            this.handleMessage(msg);
        };
        SimulatorDriver.prototype.setThemes = function (themes) {
            pxsim.U.assert(themes && themes.length > 0);
            this.themes = themes;
        };
        SimulatorDriver.prototype.setState = function (state) {
            if (this.state != state) {
                this.state = state;
                this.freeze(this.state == SimulatorState.Paused); // don't allow interaction when pause
                if (this.options.onStateChanged)
                    this.options.onStateChanged(this.state);
            }
        };
        SimulatorDriver.prototype.freeze = function (value) {
            var cls = "pause-overlay";
            if (!value) {
                pxsim.util.toArray(this.container.querySelectorAll("div.simframe div." + cls))
                    .forEach(function (overlay) { return overlay.parentElement.removeChild(overlay); });
            }
            else {
                pxsim.util.toArray(this.container.querySelectorAll("div.simframe"))
                    .forEach(function (frame) {
                    if (frame.querySelector("div." + cls))
                        return;
                    var div = document.createElement("div");
                    div.className = cls;
                    div.onclick = function (ev) {
                        ev.preventDefault();
                        return false;
                    };
                    frame.appendChild(div);
                });
            }
        };
        SimulatorDriver.prototype.postMessage = function (msg, source) {
            if (this.hwdbg) {
                this.hwdbg.postMessage(msg);
                return;
            }
            // dispatch to all iframe besides self
            var frames = this.container.getElementsByTagName("iframe");
            if (source && (msg.type === 'eventbus' || msg.type == 'radiopacket' || msg.type == 'irpacket' || msg.type == 'blepacket')) {
                if (frames.length < 2) {
                    this.container.appendChild(this.createFrame());
                    frames = this.container.getElementsByTagName("iframe");
                }
                else if (frames[1].dataset['runid'] != this.runId) {
                    this.startFrame(frames[1]);
                }
            }
            for (var i = 0; i < frames.length; ++i) {
                var frame = frames[i];
                if (source && frame.contentWindow == source)
                    continue;
                frame.contentWindow.postMessage(msg, "*");
            }
        };
        SimulatorDriver.prototype.createFrame = function (light) {
            var wrapper = document.createElement("div");
            wrapper.className = 'simframe';
            var frame = document.createElement('iframe');
            frame.id = 'sim-frame-' + this.nextId();
            frame.allowFullscreen = true;
            frame.setAttribute('allow', 'autoplay');
            frame.setAttribute('sandbox', 'allow-same-origin allow-scripts');
            frame.sandbox.value = "allow-scripts allow-same-origin";
            var simUrl = this.options.simUrl || (window.pxtConfig || {}).simUrl || "/sim/simulator.html";
            frame.className = 'no-select';
            if (this.runOptions.aspectRatio)
                wrapper.style.paddingBottom = (100 / this.runOptions.aspectRatio) + "%";
            frame.src = simUrl + '#' + frame.id;
            frame.frameBorder = "0";
            frame.dataset['runid'] = this.runId;
            wrapper.appendChild(frame);
            return wrapper;
        };
        SimulatorDriver.prototype.stop = function (unload) {
            if (unload === void 0) { unload = false; }
            this.clearDebugger();
            this.postMessage({ type: 'stop' });
            this.setState(SimulatorState.Stopped);
            if (unload)
                this.unload();
            else {
                var frames_2 = this.container.getElementsByTagName("iframe");
                for (var i = 0; i < frames_2.length; ++i) {
                    var frame = frames_2[i];
                    pxsim.U.addClass(frame, this.getStoppedClass());
                }
                this.scheduleFrameCleanup();
            }
        };
        SimulatorDriver.prototype.unload = function () {
            this.cancelFrameCleanup();
            pxsim.U.removeChildren(this.container);
            this.setState(SimulatorState.Unloaded);
        };
        SimulatorDriver.prototype.mute = function (mute) {
            this.postMessage({ type: 'mute', mute: mute });
        };
        SimulatorDriver.prototype.cancelFrameCleanup = function () {
            if (this.frameCleanupTimeout) {
                clearTimeout(this.frameCleanupTimeout);
                this.frameCleanupTimeout = 0;
            }
        };
        SimulatorDriver.prototype.scheduleFrameCleanup = function () {
            var _this = this;
            this.cancelFrameCleanup();
            this.frameCleanupTimeout = setTimeout(function () {
                _this.frameCleanupTimeout = 0;
                _this.cleanupFrames();
            }, 5000);
        };
        SimulatorDriver.prototype.applyAspectRatio = function () {
            var frames = this.container.getElementsByTagName("iframe");
            for (var i = 0; i < frames.length; ++i) {
                frames[i].parentElement.style.paddingBottom =
                    (100 / this.runOptions.aspectRatio) + "%";
            }
        };
        SimulatorDriver.prototype.cleanupFrames = function () {
            // drop unused extras frames after 5 seconds
            var frames = this.container.getElementsByTagName("iframe");
            for (var i = 1; i < frames.length; ++i) {
                var frame = frames[i];
                if (this.state == SimulatorState.Stopped
                    || frame.dataset['runid'] != this.runId) {
                    if (this.options.removeElement)
                        this.options.removeElement(frame.parentElement);
                    else
                        frame.parentElement.remove();
                }
            }
        };
        SimulatorDriver.prototype.hide = function (completeHandler) {
            if (!this.options.removeElement)
                return;
            var frames = this.container.getElementsByTagName("iframe");
            for (var i = 0; i < frames.length; ++i) {
                var frame = frames[i];
                this.options.removeElement(frame.parentElement, completeHandler);
            }
            // Execute the complete handler if there are no frames in sim view
            if (frames.length == 0 && completeHandler) {
                completeHandler();
            }
        };
        SimulatorDriver.prototype.unhide = function () {
            if (!this.options.unhideElement)
                return;
            var frames = this.container.getElementsByTagName("iframe");
            for (var i = 0; i < frames.length; ++i) {
                var frame = frames[i];
                this.options.unhideElement(frame.parentElement);
            }
        };
        SimulatorDriver.prototype.run = function (js, opts) {
            if (opts === void 0) { opts = {}; }
            this.clearDebugger();
            this.runOptions = opts;
            this.runId = this.nextId();
            this.addEventListeners();
            // store information
            this.currentRuntime = {
                type: "run",
                boardDefinition: opts.boardDefinition,
                parts: opts.parts,
                fnArgs: opts.fnArgs,
                code: js,
                partDefinitions: opts.partDefinitions,
                mute: opts.mute,
                highContrast: opts.highContrast,
                light: opts.light,
                cdnUrl: opts.cdnUrl,
                localizedStrings: opts.localizedStrings,
                refCountingDebug: opts.refCountingDebug,
                version: opts.version
            };
            this.applyAspectRatio();
            this.scheduleFrameCleanup();
            // first frame
            var frame = this.container.getElementsByTagName("iframe").item(0);
            // lazy allocate iframe
            if (!frame) {
                var wrapper = this.createFrame(opts.light);
                this.container.appendChild(wrapper);
                frame = wrapper.firstElementChild;
            }
            else
                this.startFrame(frame);
            this.setState(SimulatorState.Running);
            this.setTraceInterval(this.traceInterval);
        };
        SimulatorDriver.prototype.startFrame = function (frame) {
            var msg = JSON.parse(JSON.stringify(this.currentRuntime));
            var mc = '';
            var m = /player=([A-Za-z0-9]+)/i.exec(window.location.href);
            if (m)
                mc = m[1];
            msg.frameCounter = ++this.frameCounter;
            msg.options = {
                theme: this.themes[this.nextFrameId++ % this.themes.length],
                player: mc
            };
            msg.id = msg.options.theme + "-" + this.nextId();
            frame.dataset['runid'] = this.runId;
            frame.contentWindow.postMessage(msg, "*");
            pxsim.U.removeClass(frame, this.getStoppedClass());
        };
        SimulatorDriver.prototype.removeEventListeners = function () {
            if (this.listener) {
                window.removeEventListener('message', this.listener, false);
                this.listener = undefined;
            }
        };
        SimulatorDriver.prototype.handleMessage = function (msg, source) {
            switch (msg.type || '') {
                case 'ready':
                    var frameid = msg.frameid;
                    var frame = document.getElementById(frameid);
                    if (frame) {
                        this.startFrame(frame);
                        if (this.options.revealElement)
                            this.options.revealElement(frame);
                    }
                    break;
                case 'simulator':
                    this.handleSimulatorCommand(msg);
                    break; //handled elsewhere
                case 'serial': break; //handled elsewhere
                case 'pxteditor':
                case 'custom':
                    break; //handled elsewhere
                case 'debugger':
                    this.handleDebuggerMessage(msg);
                    break;
                case 'toplevelcodefinished':
                    if (this.options.onTopLevelCodeEnd)
                        this.options.onTopLevelCodeEnd();
                    break;
                default:
                    this.postMessage(msg, source);
                    break;
            }
        };
        SimulatorDriver.prototype.addEventListeners = function () {
            var _this = this;
            if (!this.listener) {
                this.listener = function (ev) {
                    if (_this.hwdbg)
                        return;
                    _this.handleMessage(ev.data, ev.source);
                };
                window.addEventListener('message', this.listener, false);
            }
        };
        SimulatorDriver.prototype.resume = function (c) {
            var msg;
            switch (c) {
                case SimulatorDebuggerCommand.Resume:
                    msg = 'resume';
                    this.setState(SimulatorState.Running);
                    break;
                case SimulatorDebuggerCommand.StepInto:
                    msg = 'stepinto';
                    this.setState(SimulatorState.Running);
                    break;
                case SimulatorDebuggerCommand.StepOut:
                    msg = 'stepout';
                    this.setState(SimulatorState.Running);
                    break;
                case SimulatorDebuggerCommand.StepOver:
                    msg = 'stepover';
                    this.setState(SimulatorState.Running);
                    break;
                case SimulatorDebuggerCommand.Pause:
                    msg = 'pause';
                    break;
                default:
                    console.debug('unknown command');
                    return;
            }
            this.postMessage({ type: 'debugger', subtype: msg });
        };
        SimulatorDriver.prototype.setBreakpoints = function (breakPoints) {
            this.postDebuggerMessage("config", { setBreakpoints: breakPoints });
        };
        SimulatorDriver.prototype.setTraceInterval = function (intervalMs) {
            this.traceInterval = intervalMs;
            this.postDebuggerMessage("traceConfig", { interval: intervalMs });
        };
        SimulatorDriver.prototype.variablesAsync = function (id) {
            return this.postDebuggerMessageAsync("variables", { variablesReference: id })
                .then(function (msg) { return msg; }, function (e) { return undefined; });
        };
        SimulatorDriver.prototype.handleSimulatorCommand = function (msg) {
            if (this.options.onSimulatorCommand)
                this.options.onSimulatorCommand(msg);
        };
        SimulatorDriver.prototype.clearDebugger = function () {
            var _this = this;
            var e = new Error("Debugging cancelled");
            Object.keys(this.debuggerResolvers)
                .forEach(function (k) {
                var reject = _this.debuggerResolvers[k].reject;
                reject(e);
            });
            this.debuggerResolvers = {};
            this.debuggerSeq++;
        };
        SimulatorDriver.prototype.handleDebuggerMessage = function (msg) {
            if (msg.subtype !== "trace") {
                console.log("DBG-MSG", msg.subtype, msg);
            }
            // resolve any request
            if (msg.seq) {
                var resolve = this.debuggerResolvers[msg.seq].resolve;
                if (resolve)
                    resolve(msg);
            }
            switch (msg.subtype) {
                case "warning":
                    if (this.options.onDebuggerWarning)
                        this.options.onDebuggerWarning(msg);
                    break;
                case "breakpoint":
                    var brk = msg;
                    if (this.state == SimulatorState.Running) {
                        if (brk.exceptionMessage)
                            this.stop();
                        else
                            this.setState(SimulatorState.Paused);
                        if (this.options.onDebuggerBreakpoint)
                            this.options.onDebuggerBreakpoint(brk);
                    }
                    else {
                        console.error("debugger: trying to pause from " + this.state);
                    }
                    break;
                case "trace":
                    if (this.options.onTraceMessage) {
                        this.options.onTraceMessage(msg);
                    }
                    break;
                default:
                    var seq = msg.req_seq;
                    if (seq) {
                        var resolve = this.debuggerResolvers[seq].resolve;
                        if (resolve) {
                            delete this.debuggerResolvers[seq];
                            resolve(msg);
                        }
                    }
                    break;
            }
        };
        SimulatorDriver.prototype.postDebuggerMessageAsync = function (subtype, data) {
            var _this = this;
            if (data === void 0) { data = {}; }
            return new Promise(function (resolve, reject) {
                var seq = _this.debuggerSeq++;
                _this.debuggerResolvers[seq.toString()] = { resolve: resolve, reject: reject };
                _this.postDebuggerMessage(subtype, data, seq);
            });
        };
        SimulatorDriver.prototype.postDebuggerMessage = function (subtype, data, seq) {
            if (data === void 0) { data = {}; }
            var msg = JSON.parse(JSON.stringify(data));
            msg.type = "debugger";
            msg.subtype = subtype;
            if (seq)
                msg.seq = seq;
            this.postMessage(msg);
        };
        SimulatorDriver.prototype.nextId = function () {
            return this.nextFrameId++ + (Math.random() + '' + Math.random()).replace(/[^\d]/, '');
        };
        SimulatorDriver.prototype.getStoppedClass = function () {
            if (this.options && this.options.stoppedClass) {
                return this.options.stoppedClass;
            }
            return "grayscale";
        };
        return SimulatorDriver;
    }());
    pxsim.SimulatorDriver = SimulatorDriver;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    ;
    ;
    function mkRange(a, b) {
        var res = [];
        for (; a < b; a++)
            res.push(a);
        return res;
    }
    pxsim.mkRange = mkRange;
    var EventBusGeneric = /** @class */ (function () {
        function EventBusGeneric(runtime, valueToArgs) {
            this.runtime = runtime;
            this.valueToArgs = valueToArgs;
            this.queues = {};
            this.nextNotifyEvent = 1024;
        }
        EventBusGeneric.prototype.setNotify = function (notifyID, notifyOneID) {
            this.notifyID = notifyID;
            this.notifyOneID = notifyOneID;
        };
        EventBusGeneric.prototype.start = function (id, evid, create) {
            var k = id + ":" + evid;
            var queue = this.queues[k];
            if (!queue)
                queue = this.queues[k] = new pxsim.EventQueue(this.runtime, this.valueToArgs);
            return queue;
        };
        EventBusGeneric.prototype.listen = function (id, evid, handler) {
            var q = this.start(id, evid, true);
            q.handler = handler;
        };
        EventBusGeneric.prototype.queue = function (id, evid, value) {
            if (value === void 0) { value = null; }
            // special handling for notify one
            var notifyOne = this.notifyID && this.notifyOneID && id == this.notifyOneID;
            if (notifyOne)
                id = this.notifyID;
            // grab queue and handle
            var q = this.start(id, evid, false);
            if (q) {
                this.lastEventValue = evid;
                this.lastEventTimestampUs = pxsim.U.perfNowUs();
                q.push(value, notifyOne);
            }
        };
        EventBusGeneric.prototype.wait = function (id, evid, cb) {
            var q = this.start(id, evid, true);
            q.addAwaiter(cb);
        };
        EventBusGeneric.prototype.getLastEventValue = function () {
            return this.lastEventValue;
        };
        EventBusGeneric.prototype.getLastEventTime = function () {
            return 0xffffffff & (this.lastEventTimestampUs - pxsim.runtime.startTimeUs);
        };
        return EventBusGeneric;
    }());
    pxsim.EventBusGeneric = EventBusGeneric;
    var EventBus = /** @class */ (function (_super) {
        __extends(EventBus, _super);
        function EventBus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EventBus;
    }(EventBusGeneric));
    pxsim.EventBus = EventBus;
    var AnimationQueue = /** @class */ (function () {
        function AnimationQueue(runtime) {
            var _this = this;
            this.runtime = runtime;
            this.queue = [];
            this.process = function () {
                var top = _this.queue[0];
                if (!top)
                    return;
                if (_this.runtime.dead)
                    return;
                runtime = _this.runtime;
                var res = top.frame();
                runtime.queueDisplayUpdate();
                runtime.maybeUpdateDisplay();
                if (res === false) {
                    _this.queue.shift();
                    // if there is already something in the queue, start processing
                    if (_this.queue[0]) {
                        _this.queue[0].setTimeoutHandle = setTimeout(_this.process, _this.queue[0].interval);
                    }
                    // this may push additional stuff
                    top.whenDone(false);
                }
                else {
                    top.setTimeoutHandle = setTimeout(_this.process, top.interval);
                }
            };
        }
        AnimationQueue.prototype.cancelAll = function () {
            var q = this.queue;
            this.queue = [];
            for (var _i = 0, q_1 = q; _i < q_1.length; _i++) {
                var a = q_1[_i];
                a.whenDone(true);
                if (a.setTimeoutHandle) {
                    clearTimeout(a.setTimeoutHandle);
                }
            }
        };
        AnimationQueue.prototype.cancelCurrent = function () {
            var top = this.queue[0];
            if (top) {
                this.queue.shift();
                top.whenDone(true);
                if (top.setTimeoutHandle) {
                    clearTimeout(top.setTimeoutHandle);
                }
            }
        };
        AnimationQueue.prototype.enqueue = function (anim) {
            if (!anim.whenDone)
                anim.whenDone = function () { };
            this.queue.push(anim);
            // we start processing when the queue goes from 0 to 1
            if (this.queue.length == 1)
                this.process();
        };
        AnimationQueue.prototype.executeAsync = function (anim) {
            var _this = this;
            pxsim.U.assert(!anim.whenDone);
            return new Promise(function (resolve, reject) {
                anim.whenDone = resolve;
                _this.enqueue(anim);
            });
        };
        return AnimationQueue;
    }());
    pxsim.AnimationQueue = AnimationQueue;
    var AudioContextManager;
    (function (AudioContextManager) {
        var _frequency = 0;
        var _context; // AudioContext
        var _vco; // OscillatorNode;
        var _vca; // GainNode;
        var _mute = false; //mute audio
        function context() {
            if (!_context)
                _context = freshContext();
            return _context;
        }
        function freshContext() {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            if (window.AudioContext) {
                try {
                    // this call my crash.
                    // SyntaxError: audio resources unavailable for AudioContext construction
                    return new window.AudioContext();
                }
                catch (e) { }
            }
            return undefined;
        }
        function mute(mute) {
            _mute = mute;
            stop();
        }
        AudioContextManager.mute = mute;
        function stop() {
            if (_vca)
                _vca.gain.value = 0;
            _frequency = 0;
            if (audio) {
                audio.pause();
            }
        }
        AudioContextManager.stop = stop;
        function frequency() {
            return _frequency;
        }
        AudioContextManager.frequency = frequency;
        function tone(frequency, gain) {
            if (_mute)
                return;
            if (frequency <= 0)
                return;
            _frequency = frequency;
            var ctx = context();
            if (!ctx)
                return;
            if (_vco) {
                _vco.stop();
                _vco.disconnect();
                _vco = undefined;
            }
            gain = Math.max(0, Math.min(1, gain));
            try {
                _vco = ctx.createOscillator();
                _vca = ctx.createGain();
                _vco.type = 'triangle';
                _vco.connect(_vca);
                _vca.connect(ctx.destination);
                _vca.gain.value = gain;
                _vco.start(0);
            }
            catch (e) {
                _vco = undefined;
                _vca = undefined;
                return;
            }
            _vco.frequency.value = frequency;
            _vca.gain.value = gain;
        }
        AudioContextManager.tone = tone;
        function uint8ArrayToString(input) {
            var len = input.length;
            var res = "";
            for (var i = 0; i < len; ++i)
                res += String.fromCharCode(input[i]);
            return res;
        }
        var audio;
        function playBufferAsync(buf) {
            if (!buf)
                return Promise.resolve();
            return new Promise(function (resolve) {
                function res() {
                    if (resolve)
                        resolve();
                    resolve = undefined;
                }
                var url = "data:audio/wav;base64," + window.btoa(uint8ArrayToString(buf.data));
                audio = new Audio(url);
                if (_mute)
                    audio.volume = 0;
                audio.onended = function () { return res(); };
                audio.onpause = function () { return res(); };
                audio.onerror = function () { return res(); };
                audio.play();
            });
        }
        AudioContextManager.playBufferAsync = playBufferAsync;
    })(AudioContextManager = pxsim.AudioContextManager || (pxsim.AudioContextManager = {}));
    function isTouchEnabled() {
        return typeof window !== "undefined" &&
            ('ontouchstart' in window // works on most browsers
                || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
    }
    pxsim.isTouchEnabled = isTouchEnabled;
    function hasPointerEvents() {
        return typeof window != "undefined" && !!window.PointerEvent;
    }
    pxsim.hasPointerEvents = hasPointerEvents;
    pxsim.pointerEvents = hasPointerEvents() ? {
        up: "pointerup",
        down: ["pointerdown"],
        move: "pointermove",
        enter: "pointerenter",
        leave: "pointerleave"
    } : isTouchEnabled() ?
        {
            up: "mouseup",
            down: ["mousedown", "touchstart"],
            move: "touchmove",
            enter: "touchenter",
            leave: "touchend"
        } :
        {
            up: "mouseup",
            down: ["mousedown"],
            move: "mousemove",
            enter: "mouseenter",
            leave: "mouseleave"
        };
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var visuals;
    (function (visuals) {
        function translateEl(el, xy) {
            //TODO append translation instead of replacing the full transform
            pxsim.svg.hydrate(el, { transform: "translate(" + xy[0] + " " + xy[1] + ")" });
        }
        visuals.translateEl = translateEl;
        function composeSVG(opts) {
            var _a = [opts.el1, opts.el2], a = _a[0], b = _a[1];
            pxsim.U.assert(a.x == 0 && a.y == 0 && b.x == 0 && b.y == 0, "el1 and el2 x,y offsets not supported");
            var setXY = function (e, x, y) { return pxsim.svg.hydrate(e, { x: x, y: y }); };
            var setWH = function (e, w, h) {
                if (w)
                    pxsim.svg.hydrate(e, { width: w });
                if (h)
                    pxsim.svg.hydrate(e, { height: h });
            };
            var setWHpx = function (e, w, h) { return pxsim.svg.hydrate(e, { width: w + "px", height: h + "px" }); };
            var scaleUnit = opts.scaleUnit2;
            var aScalar = opts.scaleUnit2 / opts.scaleUnit1;
            var bScalar = 1.0;
            var aw = a.w * aScalar;
            var ah = a.h * aScalar;
            setWHpx(a.el, aw, ah);
            var bw = b.w * bScalar;
            var bh = b.h * bScalar;
            setWHpx(b.el, bw, bh);
            var _b = opts.margin, mt = _b[0], mr = _b[1], mb = _b[2], ml = _b[3];
            var mm = opts.middleMargin;
            var innerW = Math.max(aw, bw);
            var ax = mr + (innerW - aw) / 2.0;
            var ay = mt;
            setXY(a.el, ax, ay);
            var bx = mr + (innerW - bw) / 2.0;
            var by = ay + ah + mm;
            setXY(b.el, bx, by);
            var edges = [ay, ay + ah, by, by + bh];
            var w = mr + innerW + ml;
            var h = mt + ah + mm + bh + mb;
            var host = pxsim.svg.elt("svg", {
                "version": "1.0",
                "viewBox": "0 0 " + w + " " + h,
                "class": "sim-bb",
            });
            setWH(host, opts.maxWidth, opts.maxHeight);
            setXY(host, 0, 0);
            var under = pxsim.svg.child(host, "g");
            host.appendChild(a.el);
            host.appendChild(b.el);
            var over = pxsim.svg.child(host, "g");
            var toHostCoord1 = function (xy) {
                var x = xy[0], y = xy[1];
                return [x * aScalar + ax, y * aScalar + ay];
            };
            var toHostCoord2 = function (xy) {
                var x = xy[0], y = xy[1];
                return [x * bScalar + bx, y * bScalar + by];
            };
            return {
                under: under,
                over: over,
                host: host,
                edges: edges,
                scaleUnit: scaleUnit,
                toHostCoord1: toHostCoord1,
                toHostCoord2: toHostCoord2,
            };
        }
        visuals.composeSVG = composeSVG;
        function mkScaleFn(originUnit, targetUnit) {
            return function (n) { return n * (targetUnit / originUnit); };
        }
        visuals.mkScaleFn = mkScaleFn;
        function mkImageSVG(opts) {
            var scaleFn = mkScaleFn(opts.imageUnitDist, opts.targetUnitDist);
            var w = scaleFn(opts.width);
            var h = scaleFn(opts.height);
            var img = pxsim.svg.elt("image", {
                width: w,
                height: h
            });
            var href = img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "" + opts.image);
            return { el: img, w: w, h: h, x: 0, y: 0 };
        }
        visuals.mkImageSVG = mkImageSVG;
        function findDistSqrd(a, b) {
            var x = a[0] - b[0];
            var y = a[1] - b[1];
            return x * x + y * y;
        }
        visuals.findDistSqrd = findDistSqrd;
        function findClosestCoordIdx(a, bs) {
            var dists = bs.map(function (b) { return findDistSqrd(a, b); });
            var minIdx = dists.reduce(function (prevIdx, currDist, currIdx, arr) {
                return currDist < arr[prevIdx] ? currIdx : prevIdx;
            }, 0);
            return minIdx;
        }
        visuals.findClosestCoordIdx = findClosestCoordIdx;
        function mkTxt(cx, cy, size, rot, txt, txtXOffFactor, txtYOffFactor) {
            var el = pxsim.svg.elt("text");
            //HACK: these constants (txtXOffFactor, txtYOffFactor) tweak the way this algorithm knows how to center the text
            txtXOffFactor = txtXOffFactor || -0.33333;
            txtYOffFactor = txtYOffFactor || 0.3;
            var xOff = txtXOffFactor * size * txt.length;
            var yOff = txtYOffFactor * size;
            pxsim.svg.hydrate(el, {
                style: "font-size:" + size + "px;",
                transform: "translate(" + cx + " " + cy + ") rotate(" + rot + ") translate(" + xOff + " " + yOff + ")"
            });
            pxsim.svg.addClass(el, "noselect");
            el.textContent = txt;
            return el;
        }
        visuals.mkTxt = mkTxt;
        visuals.GPIO_WIRE_COLORS = ["pink", "orange", "yellow", "green", "purple"];
        visuals.WIRE_COLOR_MAP = {
            black: "#514f4d",
            white: "#fcfdfc",
            gray: "#acabab",
            purple: "#a772a1",
            blue: "#01a6e8",
            green: "#3cce73",
            yellow: "#ece600",
            orange: "#fdb262",
            red: "#f44f43",
            brown: "#c89764",
            pink: "#ff80fa"
        };
        function mapWireColor(clr) {
            return visuals.WIRE_COLOR_MAP[clr] || clr;
        }
        visuals.mapWireColor = mapWireColor;
        ;
        visuals.PIN_DIST = 15;
        //expects rgb from 0,255, gives h in [0,360], s in [0, 100], l in [0, 100]
        function rgbToHsl(rgb) {
            var r = rgb[0], g = rgb[1], b = rgb[2];
            var _a = [r / 255, g / 255, b / 255], r$ = _a[0], g$ = _a[1], b$ = _a[2];
            var cMin = Math.min(r$, g$, b$);
            var cMax = Math.max(r$, g$, b$);
            var cDelta = cMax - cMin;
            var h, s, l;
            var maxAndMin = cMax + cMin;
            //lum
            l = (maxAndMin / 2) * 100;
            if (cDelta === 0)
                s = h = 0;
            else {
                //hue
                if (cMax === r$)
                    h = 60 * (((g$ - b$) / cDelta) % 6);
                else if (cMax === g$)
                    h = 60 * (((b$ - r$) / cDelta) + 2);
                else if (cMax === b$)
                    h = 60 * (((r$ - g$) / cDelta) + 4);
                //sat
                if (l > 50)
                    s = 100 * (cDelta / (2 - maxAndMin));
                else
                    s = 100 * (cDelta / maxAndMin);
            }
            return [Math.floor(h), Math.floor(s), Math.floor(l)];
        }
        visuals.rgbToHsl = rgbToHsl;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var svg;
    (function (svg_1) {
        function parseString(xml) {
            return new DOMParser().parseFromString(xml, "image/svg+xml").getElementsByTagName("svg").item(0);
        }
        svg_1.parseString = parseString;
        function toDataUri(xml) {
            return 'data:image/svg+xml,' + encodeURI(xml);
        }
        svg_1.toDataUri = toDataUri;
        var pt;
        function cursorPoint(pt, svg, evt) {
            pt.x = evt.clientX;
            pt.y = evt.clientY;
            return pt.matrixTransform(svg.getScreenCTM().inverse());
        }
        svg_1.cursorPoint = cursorPoint;
        function rotateElement(el, originX, originY, degrees) {
            el.setAttribute('transform', "translate(" + originX + "," + originY + ") rotate(" + (degrees + 90) + ") translate(" + -originX + "," + -originY + ")");
        }
        svg_1.rotateElement = rotateElement;
        function hasClass(el, cls) {
            if (el.classList)
                return el.classList.contains(cls);
            else
                return el.className.baseVal.indexOf(cls) > -1;
        }
        svg_1.hasClass = hasClass;
        function addClass(el, cls) {
            if (el.classList)
                el.classList.add(cls);
            else if (el.className.baseVal.indexOf(cls) < 0)
                el.className.baseVal += ' ' + cls;
        }
        svg_1.addClass = addClass;
        function removeClass(el, cls) {
            if (el.classList)
                el.classList.remove(cls);
            else
                el.className.baseVal = el.className.baseVal.replace(cls, '').replace(/\s{2,}/, ' ');
        }
        svg_1.removeClass = removeClass;
        function hydrate(el, props) {
            for (var k in props) {
                if (k == "title") {
                    svg.title(el, props[k]);
                }
                else
                    el.setAttributeNS(null, k, props[k]);
            }
        }
        svg_1.hydrate = hydrate;
        function elt(name, props) {
            var el = document.createElementNS("http://www.w3.org/2000/svg", name);
            if (props)
                svg.hydrate(el, props);
            return el;
        }
        svg_1.elt = elt;
        function child(parent, name, props) {
            var el = svg.elt(name, props);
            parent.appendChild(el);
            return el;
        }
        svg_1.child = child;
        function mkPath(cls, data, title) {
            var p = { class: cls, d: data };
            if (title)
                p["title"] = title;
            var el = svg.elt("path");
            svg.hydrate(el, p);
            return el;
        }
        svg_1.mkPath = mkPath;
        function path(parent, cls, data, title) {
            var el = mkPath(cls, data, title);
            parent.appendChild(el);
            return el;
        }
        svg_1.path = path;
        function fill(el, c) {
            el.style.fill = c;
        }
        svg_1.fill = fill;
        function filter(el, c) {
            el.style.filter = c;
        }
        svg_1.filter = filter;
        function fills(els, c) {
            els.forEach(function (el) { return el.style.fill = c; });
        }
        svg_1.fills = fills;
        function isTouchEnabled() {
            return typeof window !== "undefined" &&
                ('ontouchstart' in window // works on most browsers
                    || navigator.maxTouchPoints > 0); // works on IE10/11 and Surface);
        }
        svg_1.isTouchEnabled = isTouchEnabled;
        function onClick(el, click) {
            var captured = false;
            pxsim.pointerEvents.down.forEach(function (evid) { return el.addEventListener(evid, function (ev) {
                captured = true;
                return true;
            }, false); });
            el.addEventListener(pxsim.pointerEvents.up, function (ev) {
                if (captured) {
                    captured = false;
                    click(ev);
                    ev.preventDefault();
                    return false;
                }
                return true;
            }, false);
        }
        svg_1.onClick = onClick;
        function buttonEvents(el, move, start, stop, keydown) {
            var captured = false;
            pxsim.pointerEvents.down.forEach(function (evid) { return el.addEventListener(evid, function (ev) {
                captured = true;
                if (start)
                    start(ev);
                return true;
            }, false); });
            el.addEventListener(pxsim.pointerEvents.move, function (ev) {
                if (captured) {
                    if (move)
                        move(ev);
                    ev.preventDefault();
                    return false;
                }
                return true;
            }, false);
            el.addEventListener(pxsim.pointerEvents.up, function (ev) {
                captured = false;
                if (stop)
                    stop(ev);
            }, false);
            el.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                captured = false;
                if (stop)
                    stop(ev);
            }, false);
            el.addEventListener('keydown', function (ev) {
                captured = false;
                if (keydown)
                    keydown(ev);
            });
        }
        svg_1.buttonEvents = buttonEvents;
        function mkLinearGradient(id, horizontal) {
            if (horizontal === void 0) { horizontal = false; }
            var gradient = svg.elt("linearGradient");
            svg.hydrate(gradient, { id: id, x1: "0%", y1: "0%", x2: horizontal ? "100%" : "0%", y2: horizontal ? "0%" : "100%" });
            var stop1 = svg.child(gradient, "stop", { offset: "0%" });
            var stop2 = svg.child(gradient, "stop", { offset: "100%" });
            var stop3 = svg.child(gradient, "stop", { offset: "100%" });
            var stop4 = svg.child(gradient, "stop", { offset: "100%" });
            return gradient;
        }
        svg_1.mkLinearGradient = mkLinearGradient;
        function linearGradient(defs, id, horizontal) {
            if (horizontal === void 0) { horizontal = false; }
            var lg = mkLinearGradient(id, horizontal);
            defs.appendChild(lg);
            return lg;
        }
        svg_1.linearGradient = linearGradient;
        function setGradientColors(lg, start, end) {
            if (!lg)
                return;
            lg.childNodes[0].style.stopColor = start;
            lg.childNodes[1].style.stopColor = start;
            lg.childNodes[2].style.stopColor = end;
            lg.childNodes[3].style.stopColor = end;
        }
        svg_1.setGradientColors = setGradientColors;
        function setGradientValue(lg, percent) {
            if (lg.childNodes[1].getAttribute("offset") != percent) {
                lg.childNodes[1].setAttribute("offset", percent);
                lg.childNodes[2].setAttribute("offset", percent);
            }
        }
        svg_1.setGradientValue = setGradientValue;
        function animate(el, cls) {
            svg.addClass(el, cls);
            var p = el.parentElement;
            if (p) {
                p.removeChild(el);
                p.appendChild(el);
            }
        }
        svg_1.animate = animate;
        function mkTitle(txt) {
            var t = svg.elt("title");
            t.textContent = txt;
            return t;
        }
        svg_1.mkTitle = mkTitle;
        function title(el, txt) {
            var t = mkTitle(txt);
            el.appendChild(t);
            return t;
        }
        svg_1.title = title;
        function toHtmlColor(c) {
            var b = c & 0xFF;
            var g = (c >> 8) & 0xFF;
            var r = (c >> 16) & 0xFF;
            var a = (c >> 24) & 0xFF / 255;
            return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }
        svg_1.toHtmlColor = toHtmlColor;
    })(svg = pxsim.svg || (pxsim.svg = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var Button = /** @class */ (function () {
        function Button(id) {
            this.id = id;
        }
        return Button;
    }());
    pxsim.Button = Button;
    var ButtonPairState = /** @class */ (function () {
        function ButtonPairState(props) {
            this.props = props;
            this.usesButtonAB = false;
            this.aBtn = new Button(this.props.ID_BUTTON_A);
            this.bBtn = new Button(this.props.ID_BUTTON_B);
            this.abBtn = new Button(this.props.ID_BUTTON_AB);
            this.abBtn.virtual = true;
        }
        return ButtonPairState;
    }());
    pxsim.ButtonPairState = ButtonPairState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var CompassState = /** @class */ (function () {
        function CompassState() {
            this.usesHeading = false;
            this.heading = 90;
        }
        return CompassState;
    }());
    pxsim.CompassState = CompassState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var FileSystemState = /** @class */ (function () {
        function FileSystemState() {
            this.files = {};
        }
        FileSystemState.prototype.append = function (file, content) {
            this.files[file] = (this.files[file] || "") + content;
        };
        FileSystemState.prototype.remove = function (file) {
            delete this.files[file];
        };
        return FileSystemState;
    }());
    pxsim.FileSystemState = FileSystemState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var LightSensorState = /** @class */ (function () {
        function LightSensorState() {
            this.usesLightLevel = false;
            this.lightLevel = 128;
        }
        return LightSensorState;
    }());
    pxsim.LightSensorState = LightSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var NeoPixelMode;
    (function (NeoPixelMode) {
        NeoPixelMode[NeoPixelMode["RGB"] = 0] = "RGB";
        NeoPixelMode[NeoPixelMode["RGBW"] = 1] = "RGBW";
    })(NeoPixelMode = pxsim.NeoPixelMode || (pxsim.NeoPixelMode = {}));
    ;
    var NeoPixelState = /** @class */ (function () {
        function NeoPixelState() {
            this.buffers = {};
            this.colors = {};
            this.dirty = {};
        }
        NeoPixelState.prototype.updateBuffer = function (buffer, pin) {
            this.buffers[pin] = buffer;
            this.dirty[pin] = true;
        };
        NeoPixelState.prototype.getColors = function (pin, mode) {
            var outColors = this.colors[pin] || (this.colors[pin] = []);
            if (this.dirty[pin]) {
                var buf = this.buffers[pin] || (this.buffers[pin] = new Uint8Array([]));
                this.readNeoPixelBuffer(buf, outColors, mode);
                this.dirty[pin] = false;
            }
            return outColors;
        };
        NeoPixelState.prototype.readNeoPixelBuffer = function (inBuffer, outColors, mode) {
            var buf = inBuffer;
            var stride = mode === NeoPixelMode.RGBW ? 4 : 3;
            var pixelCount = Math.floor(buf.length / stride);
            for (var i = 0; i < pixelCount; i++) {
                // NOTE: for whatever reason, NeoPixels pack GRB not RGB
                var r = buf[i * stride + 1];
                var g = buf[i * stride + 0];
                var b = buf[i * stride + 2];
                var w = 0;
                if (stride === 4)
                    w = buf[i * stride + 3];
                outColors[i] = [r, g, b, w];
            }
        };
        return NeoPixelState;
    }());
    pxsim.NeoPixelState = NeoPixelState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = function (opts) {
            var boardVis = opts.visual;
            return new visuals.GenericBoardSvg({
                visualDef: boardVis,
                wireframe: opts.wireframe,
            });
        };
        var BoardHost = /** @class */ (function () {
            function BoardHost(view, opts) {
                var _this = this;
                this.parts = [];
                this.boardView = view;
                this.opts = opts;
                if (!opts.boardDef.pinStyles)
                    opts.boardDef.pinStyles = {};
                this.state = opts.state;
                var activeComponents = opts.partsList;
                var useBreadboard = 0 < activeComponents.length || opts.forceBreadboardLayout;
                if (useBreadboard) {
                    this.breadboard = new visuals.Breadboard({
                        wireframe: opts.wireframe,
                    });
                    var bMarg = opts.boardDef.marginWhenBreadboarding || [0, 0, 40, 0];
                    var composition = visuals.composeSVG({
                        el1: this.boardView.getView(),
                        scaleUnit1: this.boardView.getPinDist(),
                        el2: this.breadboard.getSVGAndSize(),
                        scaleUnit2: this.breadboard.getPinDist(),
                        margin: [bMarg[0], bMarg[1], 20, bMarg[3]],
                        middleMargin: bMarg[2],
                        maxWidth: opts.maxWidth,
                        maxHeight: opts.maxHeight,
                    });
                    var under = composition.under;
                    var over = composition.over;
                    this.view = composition.host;
                    var edges = composition.edges;
                    this.fromMBCoord = composition.toHostCoord1;
                    this.fromBBCoord = composition.toHostCoord2;
                    var pinDist = composition.scaleUnit;
                    this.partGroup = over;
                    this.partOverGroup = pxsim.svg.child(this.view, "g");
                    this.style = pxsim.svg.child(this.view, "style", {});
                    this.defs = pxsim.svg.child(this.view, "defs", {});
                    this.wireFactory = new visuals.WireFactory(under, over, edges, this.style, this.getLocCoord.bind(this), this.getPinStyle.bind(this));
                    var allocRes = pxsim.allocateDefinitions({
                        boardDef: opts.boardDef,
                        partDefs: opts.partDefs,
                        fnArgs: opts.fnArgs,
                        getBBCoord: this.breadboard.getCoord.bind(this.breadboard),
                        partsList: activeComponents,
                    });
                    this.addAll(allocRes);
                    if (!allocRes.requiresBreadboard && !opts.forceBreadboardRender)
                        this.breadboard.hide();
                }
                else {
                    var el = this.boardView.getView().el;
                    this.view = el;
                    this.partGroup = pxsim.svg.child(this.view, "g");
                    this.partOverGroup = pxsim.svg.child(this.view, "g");
                    if (opts.maxWidth)
                        pxsim.svg.hydrate(this.view, { width: opts.maxWidth });
                    if (opts.maxHeight)
                        pxsim.svg.hydrate(this.view, { height: opts.maxHeight });
                }
                this.state.updateSubscribers.push(function () { return _this.updateState(); });
            }
            BoardHost.prototype.highlightBoardPin = function (pinNm) {
                this.boardView.highlightPin(pinNm);
            };
            BoardHost.prototype.highlightBreadboardPin = function (rowCol) {
                this.breadboard.highlightLoc(rowCol);
            };
            BoardHost.prototype.highlightWire = function (wire) {
                //TODO: move to wiring.ts
                //underboard wires
                wire.wires.forEach(function (e) {
                    pxsim.svg.addClass(e, "highlight");
                    e.style["visibility"] = "visible";
                });
                //un greyed out
                pxsim.svg.addClass(wire.endG, "highlight");
            };
            BoardHost.prototype.getView = function () {
                return this.view;
            };
            BoardHost.prototype.updateState = function () {
                this.parts.forEach(function (c) { return c.updateState(); });
            };
            BoardHost.prototype.getBBCoord = function (rowCol) {
                var bbCoord = this.breadboard.getCoord(rowCol);
                return this.fromBBCoord(bbCoord);
            };
            BoardHost.prototype.getPinCoord = function (pin) {
                var boardCoord = this.boardView.getCoord(pin);
                pxsim.U.assert(!!boardCoord, "Unable to find coord for pin: " + pin);
                return this.fromMBCoord(boardCoord);
            };
            BoardHost.prototype.getLocCoord = function (loc) {
                var coord;
                if (loc.type === "breadboard") {
                    var rowCol = loc;
                    coord = this.getBBCoord(rowCol);
                }
                else {
                    var pinNm = loc.pin;
                    coord = this.getPinCoord(pinNm);
                }
                if (!coord) {
                    console.error("Unknown location: " + name);
                    return [0, 0];
                }
                return coord;
            };
            BoardHost.prototype.getPinStyle = function (loc) {
                if (loc.type == "breadboard")
                    return "female";
                else
                    return this.opts.boardDef.pinStyles[loc.pin] || "female";
            };
            BoardHost.prototype.addPart = function (partInst) {
                var _this = this;
                var part = null;
                var colOffset = 0;
                if (partInst.simulationBehavior) {
                    //TODO: seperate simulation behavior from builtin visual
                    var builtinBehavior = partInst.simulationBehavior;
                    var cnstr = this.state.builtinVisuals[builtinBehavior];
                    var stateFn = this.state.builtinParts[builtinBehavior];
                    part = cnstr();
                    part.init(this.state.bus, stateFn, this.view, partInst.params);
                }
                else {
                    var vis = partInst.visual;
                    part = new visuals.GenericPart(vis);
                }
                this.parts.push(part);
                this.partGroup.appendChild(part.element);
                if (part.overElement)
                    this.partOverGroup.appendChild(part.overElement);
                if (part.defs)
                    part.defs.forEach(function (d) { return _this.defs.appendChild(d); });
                this.style.textContent += part.style || "";
                var colIdx = partInst.startColumnIdx;
                var rowIdx = partInst.startRowIdx;
                var row = visuals.getRowName(rowIdx);
                var col = visuals.getColumnName(colIdx);
                var xOffset = partInst.bbFit.xOffset / partInst.visual.pinDistance;
                var yOffset = partInst.bbFit.yOffset / partInst.visual.pinDistance;
                var rowCol = {
                    type: "breadboard",
                    row: row,
                    col: col,
                    xOffset: xOffset,
                    yOffset: yOffset
                };
                var coord = this.getBBCoord(rowCol);
                part.moveToCoord(coord);
                var getCmpClass = function (type) { return "sim-" + type + "-cmp"; };
                var cls = getCmpClass(partInst.name);
                pxsim.svg.addClass(part.element, cls);
                pxsim.svg.addClass(part.element, "sim-cmp");
                part.updateTheme();
                part.updateState();
                return part;
            };
            BoardHost.prototype.addWire = function (inst) {
                return this.wireFactory.addWire(inst.start, inst.end, inst.color);
            };
            BoardHost.prototype.addAll = function (allocRes) {
                var _this = this;
                allocRes.partsAndWires.forEach(function (pAndWs) {
                    var part = pAndWs.part;
                    if (part)
                        _this.addPart(part);
                    var wires = pAndWs.wires;
                    if (wires)
                        wires.forEach(function (w) { return _this.addWire(w); });
                });
            };
            return BoardHost;
        }());
        visuals.BoardHost = BoardHost;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        // The distance between the center of two pins. This is the constant on which everything else is based.
        var PIN_DIST = 15;
        // CSS styling for the breadboard
        var BLUE = "#1AA5D7";
        var RED = "#DD4BA0";
        var BREADBOARD_CSS = "\n        /* bread board */\n        .sim-bb-background {\n            fill:#E0E0E0;\n        }\n        .sim-bb-pin {\n            fill:#999;\n        }\n        .sim-bb-pin-hover {\n            visibility: hidden;\n            pointer-events: all;\n            stroke-width: " + PIN_DIST / 2 + "px;\n            stroke: transparent;\n            fill: #777;\n        }\n        .sim-bb-pin-hover:hover {\n            visibility: visible;\n            fill:#444;\n        }\n        .sim-bb-group-wire {\n            stroke: #999;\n            stroke-width: " + PIN_DIST / 4 + "px;\n            visibility: hidden;\n        }\n        .sim-bb-pin-group {\n            pointer-events: all;\n        }\n        .sim-bb-label,\n        .sim-bb-label-hover {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            fill:#555;\n            pointer-events: all;\n            stroke-width: 0;\n            cursor: default;\n        }\n        .sim-bb-label-hover {\n            visibility: hidden;\n            fill:#000;\n            font-weight: bold;\n        }\n        .sim-bb-bar {\n            stroke-width: 0;\n        }\n        .sim-bb-blue {\n            fill:" + BLUE + ";\n            stroke:" + BLUE + "\n        }\n        .sim-bb-red {\n            fill:" + RED + ";\n            stroke:" + RED + ";\n        }\n        .sim-bb-pin-group:hover .sim-bb-pin-hover,\n        .sim-bb-pin-group:hover .sim-bb-group-wire,\n        .sim-bb-pin-group:hover .sim-bb-label-hover {\n            visibility: visible;\n        }\n        .sim-bb-pin-group:hover .sim-bb-label {\n            visibility: hidden;\n        }\n        /* outline mode */\n        .sim-bb-outline .sim-bb-background {\n            stroke-width: " + PIN_DIST / 7 + "px;\n            fill: #FFF;\n            stroke: #000;\n        }\n        .sim-bb-outline .sim-bb-mid-channel {\n            fill: #FFF;\n            stroke: #888;\n            stroke-width: 2px;\n        }\n        /* grayed out */\n        .grayed .sim-bb-background {\n            stroke-width: " + PIN_DIST / 5 + "px;\n        }\n        .grayed .sim-bb-red,\n        .grayed .sim-bb-blue {\n            fill: #BBB;\n        }\n        .grayed .sim-bb-bar {\n            fill: #FFF;\n        }\n        .grayed .sim-bb-pin {\n            fill: #000;\n            stroke: #FFF;\n            stroke-width: 3px;\n        }\n        .grayed .sim-bb-label {\n            fill: none;\n        }\n        .grayed .sim-bb-background {\n            stroke-width: " + PIN_DIST / 2 + "px;\n            stroke: #555;\n        }\n        .grayed .sim-bb-group-wire {\n            stroke: #DDD;\n        }\n        .grayed .sim-bb-channel {\n            visibility: hidden;\n        }\n        /* highlighted */\n        .sim-bb-label.highlight {\n            visibility: hidden;\n        }\n        .sim-bb-label-hover.highlight {\n            visibility: visible;\n        }\n        .sim-bb-blue.highlight {\n            fill:" + BLUE + ";\n        }\n        .sim-bb-red.highlight {\n            fill:" + RED + ";\n        }\n        .sim-bb-bar.highlight {\n            stroke-width: 0px;\n        }\n        ";
        // Pin rows and coluns
        visuals.BREADBOARD_MID_ROWS = 10;
        visuals.BREADBOARD_MID_COLS = 30;
        var MID_ROW_GAPS = [4, 4];
        var MID_ROW_AND_GAPS = visuals.BREADBOARD_MID_ROWS + MID_ROW_GAPS.length;
        var BAR_ROWS = 2;
        var BAR_COLS = 25;
        var POWER_ROWS = BAR_ROWS * 2;
        var POWER_COLS = BAR_COLS * 2;
        var BAR_COL_GAPS = [4, 9, 14, 19];
        var BAR_COL_AND_GAPS = BAR_COLS + BAR_COL_GAPS.length;
        // Essential dimensions
        var WIDTH = PIN_DIST * (visuals.BREADBOARD_MID_COLS + 3);
        var HEIGHT = PIN_DIST * (MID_ROW_AND_GAPS + POWER_ROWS + 5.5);
        var MID_RATIO = 2.0 / 3.0;
        var BAR_RATIO = (1.0 - MID_RATIO) * 0.5;
        var MID_HEIGHT = HEIGHT * MID_RATIO;
        var BAR_HEIGHT = HEIGHT * BAR_RATIO;
        // Pin grids
        var MID_GRID_WIDTH = (visuals.BREADBOARD_MID_COLS - 1) * PIN_DIST;
        var MID_GRID_HEIGHT = (MID_ROW_AND_GAPS - 1) * PIN_DIST;
        var MID_GRID_X = (WIDTH - MID_GRID_WIDTH) / 2.0;
        var MID_GRID_Y = BAR_HEIGHT + (MID_HEIGHT - MID_GRID_HEIGHT) / 2.0;
        var BAR_GRID_HEIGHT = (BAR_ROWS - 1) * PIN_DIST;
        var BAR_GRID_WIDTH = (BAR_COL_AND_GAPS - 1) * PIN_DIST;
        var BAR_TOP_GRID_X = (WIDTH - BAR_GRID_WIDTH) / 2.0;
        var BAR_TOP_GRID_Y = (BAR_HEIGHT - BAR_GRID_HEIGHT) / 2.0;
        var BAR_BOT_GRID_X = BAR_TOP_GRID_X;
        var BAR_BOT_GRID_Y = BAR_TOP_GRID_Y + BAR_HEIGHT + MID_HEIGHT;
        // Individual pins
        var PIN_HOVER_SCALAR = 1.3;
        var PIN_WIDTH = PIN_DIST / 2.5;
        var PIN_ROUNDING = PIN_DIST / 7.5;
        // Labels
        var PIN_LBL_SIZE = PIN_DIST * 0.7;
        var PIN_LBL_HOVER_SCALAR = 1.3;
        var PLUS_LBL_SIZE = PIN_DIST * 1.7;
        var MINUS_LBL_SIZE = PIN_DIST * 2;
        var POWER_LBL_OFFSET = PIN_DIST * 0.8;
        var MINUS_LBL_EXTRA_OFFSET = PIN_DIST * 0.07;
        var LBL_ROTATION = -90;
        // Channels
        var CHANNEL_HEIGHT = PIN_DIST * 1.0;
        var SMALL_CHANNEL_HEIGHT = PIN_DIST * 0.05;
        // Background
        var BACKGROUND_ROUNDING = PIN_DIST * 0.3;
        // Row and column helpers
        var alphabet = "abcdefghij".split("").reverse();
        function getColumnName(colIdx) { return "" + (colIdx + 1); }
        visuals.getColumnName = getColumnName;
        ;
        function getRowName(rowIdx) { return alphabet[rowIdx]; }
        visuals.getRowName = getRowName;
        ;
        ;
        ;
        function mkGrid(opts) {
            var xOff = opts.xOffset || 0;
            var yOff = opts.yOffset || 0;
            var allPins = [];
            var grid = pxsim.svg.elt("g");
            var colIdxOffset = opts.colStartIdx || 0;
            var rowIdxOffset = opts.rowStartIdx || 0;
            var copyArr = function (arr) { return arr ? arr.slice(0, arr.length) : []; };
            var removeAll = function (arr, e) {
                var res = 0;
                var idx;
                /* tslint:disable:no-conditional-assignment */
                while (0 <= (idx = arr.indexOf(e))) {
                    /* tslint:enable:no-conditional-assignment */
                    arr.splice(idx, 1);
                    res += 1;
                }
                return res;
            };
            var rowGaps = 0;
            var rowIdxsWithGap = copyArr(opts.rowIdxsWithGap);
            var _loop_2 = function (i) {
                var colGaps = 0;
                var colIdxsWithGap = copyArr(opts.colIdxsWithGap);
                var cy = yOff + i * opts.pinDist + rowGaps * opts.pinDist;
                var rowIdx = i + rowIdxOffset;
                var _loop_3 = function (j) {
                    var cx = xOff + j * opts.pinDist + colGaps * opts.pinDist;
                    var colIdx = j + colIdxOffset;
                    var addEl = function (pin) {
                        var pinX = cx - pin.w * 0.5;
                        var pinY = cy - pin.h * 0.5;
                        pxsim.svg.hydrate(pin.el, { x: pinX, y: pinY });
                        grid.appendChild(pin.el);
                        return pin.el;
                    };
                    var el = addEl(opts.mkPin());
                    var hoverEl = addEl(opts.mkHoverPin());
                    var row = opts.getRowName(rowIdx);
                    var col = opts.getColName(colIdx);
                    var group = opts.getGroupName ? opts.getGroupName(rowIdx, colIdx) : null;
                    var gridPin = { el: el, hoverEl: hoverEl, cx: cx, cy: cy, row: row, col: col, group: group };
                    allPins.push(gridPin);
                    //column gaps
                    colGaps += removeAll(colIdxsWithGap, colIdx);
                };
                for (var j = 0; j < opts.colCount; j++) {
                    _loop_3(j);
                }
                //row gaps
                rowGaps += removeAll(rowIdxsWithGap, rowIdx);
            };
            for (var i = 0; i < opts.rowCount; i++) {
                _loop_2(i);
            }
            return { g: grid, allPins: allPins };
        }
        visuals.mkGrid = mkGrid;
        function mkBBPin() {
            var el = pxsim.svg.elt("rect");
            var width = PIN_WIDTH;
            pxsim.svg.hydrate(el, {
                class: "sim-bb-pin",
                rx: PIN_ROUNDING,
                ry: PIN_ROUNDING,
                width: width,
                height: width
            });
            return { el: el, w: width, h: width, x: 0, y: 0 };
        }
        function mkBBHoverPin() {
            var el = pxsim.svg.elt("rect");
            var width = PIN_WIDTH * PIN_HOVER_SCALAR;
            pxsim.svg.hydrate(el, {
                class: "sim-bb-pin-hover",
                rx: PIN_ROUNDING,
                ry: PIN_ROUNDING,
                width: width,
                height: width,
            });
            return { el: el, w: width, h: width, x: 0, y: 0 };
        }
        ;
        function mkBBLabel(cx, cy, size, rotation, txt, group, extraClasses) {
            //lbl
            var el = visuals.mkTxt(cx, cy, size, rotation, txt);
            pxsim.svg.addClass(el, "sim-bb-label");
            if (extraClasses)
                extraClasses.forEach(function (c) { return pxsim.svg.addClass(el, c); });
            //hover lbl
            var hoverEl = visuals.mkTxt(cx, cy, size * PIN_LBL_HOVER_SCALAR, rotation, txt);
            pxsim.svg.addClass(hoverEl, "sim-bb-label-hover");
            if (extraClasses)
                extraClasses.forEach(function (c) { return pxsim.svg.addClass(hoverEl, c); });
            var lbl = { el: el, hoverEl: hoverEl, txt: txt, group: group };
            return lbl;
        }
        ;
        var Breadboard = /** @class */ (function () {
            function Breadboard(opts) {
                //truth
                this.allPins = [];
                this.allLabels = [];
                this.allPowerBars = [];
                //quick lookup caches
                this.rowColToPin = {};
                this.rowColToLbls = {};
                this.buildDom();
                if (opts.wireframe)
                    pxsim.svg.addClass(this.bb, "sim-bb-outline");
            }
            Breadboard.prototype.hide = function () {
                this.bb.style.display = 'none';
            };
            Breadboard.prototype.updateLocation = function (x, y) {
                pxsim.svg.hydrate(this.bb, {
                    x: x + "px",
                    y: y + "px",
                });
            };
            Breadboard.prototype.getPin = function (row, col) {
                var colToPin = this.rowColToPin[row];
                if (!colToPin)
                    return null;
                var pin = colToPin[col];
                if (!pin)
                    return null;
                return pin;
            };
            Breadboard.prototype.getCoord = function (rowCol) {
                var row = rowCol.row, col = rowCol.col, xOffset = rowCol.xOffset, yOffset = rowCol.yOffset;
                var pin = this.getPin(row, col);
                if (!pin)
                    return null;
                var xOff = (xOffset || 0) * PIN_DIST;
                var yOff = (yOffset || 0) * PIN_DIST;
                return [pin.cx + xOff, pin.cy + yOff];
            };
            Breadboard.prototype.getPinDist = function () {
                return PIN_DIST;
            };
            Breadboard.prototype.buildDom = function () {
                var _this = this;
                this.bb = pxsim.svg.elt("svg", {
                    "version": "1.0",
                    "viewBox": "0 0 " + WIDTH + " " + HEIGHT,
                    "class": "sim-bb",
                    "width": WIDTH + "px",
                    "height": HEIGHT + "px",
                });
                this.styleEl = pxsim.svg.child(this.bb, "style", {});
                this.styleEl.textContent += BREADBOARD_CSS;
                this.defs = pxsim.svg.child(this.bb, "defs", {});
                //background
                pxsim.svg.child(this.bb, "rect", { class: "sim-bb-background", width: WIDTH, height: HEIGHT, rx: BACKGROUND_ROUNDING, ry: BACKGROUND_ROUNDING });
                //mid channel
                var channelGid = "sim-bb-channel-grad";
                var channelGrad = pxsim.svg.elt("linearGradient");
                pxsim.svg.hydrate(channelGrad, { id: channelGid, x1: "0%", y1: "0%", x2: "0%", y2: "100%" });
                this.defs.appendChild(channelGrad);
                var channelDark = "#AAA";
                var channelLight = "#CCC";
                var stop1 = pxsim.svg.child(channelGrad, "stop", { offset: "0%", style: "stop-color: " + channelDark + ";" });
                var stop2 = pxsim.svg.child(channelGrad, "stop", { offset: "20%", style: "stop-color: " + channelLight + ";" });
                var stop3 = pxsim.svg.child(channelGrad, "stop", { offset: "80%", style: "stop-color: " + channelLight + ";" });
                var stop4 = pxsim.svg.child(channelGrad, "stop", { offset: "100%", style: "stop-color: " + channelDark + ";" });
                var mkChannel = function (cy, h, cls) {
                    var channel = pxsim.svg.child(_this.bb, "rect", { class: "sim-bb-channel " + (cls || ""), y: cy - h / 2, width: WIDTH, height: h });
                    channel.setAttribute("fill", "url(#" + channelGid + ")");
                    return channel;
                };
                mkChannel(BAR_HEIGHT + MID_HEIGHT / 2, CHANNEL_HEIGHT, "sim-bb-mid-channel");
                mkChannel(BAR_HEIGHT, SMALL_CHANNEL_HEIGHT, "sim-bb-sml-channel");
                mkChannel(BAR_HEIGHT + MID_HEIGHT, SMALL_CHANNEL_HEIGHT, "sim-bb-sml-channel");
                //-----pins
                var getMidTopOrBot = function (rowIdx) { return rowIdx < visuals.BREADBOARD_MID_ROWS / 2.0 ? "b" : "t"; };
                var getBarTopOrBot = function (colIdx) { return colIdx < POWER_COLS / 2.0 ? "b" : "t"; };
                var getMidGroupName = function (rowIdx, colIdx) {
                    var botOrTop = getMidTopOrBot(rowIdx);
                    var colNm = getColumnName(colIdx);
                    return "" + botOrTop + colNm;
                };
                var getBarRowName = function (rowIdx) { return rowIdx === 0 ? "-" : "+"; };
                var getBarGroupName = function (rowIdx, colIdx) {
                    var botOrTop = getBarTopOrBot(colIdx);
                    var rowName = getBarRowName(rowIdx);
                    return "" + rowName + botOrTop;
                };
                //mid grid
                var midGridRes = mkGrid({
                    xOffset: MID_GRID_X,
                    yOffset: MID_GRID_Y,
                    rowCount: visuals.BREADBOARD_MID_ROWS,
                    colCount: visuals.BREADBOARD_MID_COLS,
                    pinDist: PIN_DIST,
                    mkPin: mkBBPin,
                    mkHoverPin: mkBBHoverPin,
                    getRowName: getRowName,
                    getColName: getColumnName,
                    getGroupName: getMidGroupName,
                    rowIdxsWithGap: MID_ROW_GAPS,
                });
                var midGridG = midGridRes.g;
                this.allPins = this.allPins.concat(midGridRes.allPins);
                //bot bar
                var botBarGridRes = mkGrid({
                    xOffset: BAR_BOT_GRID_X,
                    yOffset: BAR_BOT_GRID_Y,
                    rowCount: BAR_ROWS,
                    colCount: BAR_COLS,
                    pinDist: PIN_DIST,
                    mkPin: mkBBPin,
                    mkHoverPin: mkBBHoverPin,
                    getRowName: getBarRowName,
                    getColName: getColumnName,
                    getGroupName: getBarGroupName,
                    colIdxsWithGap: BAR_COL_GAPS,
                });
                var botBarGridG = botBarGridRes.g;
                this.allPins = this.allPins.concat(botBarGridRes.allPins);
                //top bar
                var topBarGridRes = mkGrid({
                    xOffset: BAR_TOP_GRID_X,
                    yOffset: BAR_TOP_GRID_Y,
                    rowCount: BAR_ROWS,
                    colCount: BAR_COLS,
                    colStartIdx: BAR_COLS,
                    pinDist: PIN_DIST,
                    mkPin: mkBBPin,
                    mkHoverPin: mkBBHoverPin,
                    getRowName: getBarRowName,
                    getColName: getColumnName,
                    getGroupName: getBarGroupName,
                    colIdxsWithGap: BAR_COL_GAPS.map(function (g) { return g + BAR_COLS; }),
                });
                var topBarGridG = topBarGridRes.g;
                this.allPins = this.allPins.concat(topBarGridRes.allPins);
                //tooltip
                this.allPins.forEach(function (pin) {
                    var el = pin.el, row = pin.row, col = pin.col, hoverEl = pin.hoverEl;
                    var title = "(" + row + "," + col + ")";
                    pxsim.svg.hydrate(el, { title: title });
                    pxsim.svg.hydrate(hoverEl, { title: title });
                });
                //catalog pins
                this.allPins.forEach(function (pin) {
                    var colToPin = _this.rowColToPin[pin.row];
                    if (!colToPin)
                        colToPin = _this.rowColToPin[pin.row] = {};
                    colToPin[pin.col] = pin;
                });
                //-----labels
                var mkBBLabelAtPin = function (row, col, xOffset, yOffset, txt, group) {
                    var size = PIN_LBL_SIZE;
                    var rotation = LBL_ROTATION;
                    var loc = _this.getCoord({ type: "breadboard", row: row, col: col });
                    var cx = loc[0], cy = loc[1];
                    var t = mkBBLabel(cx + xOffset, cy + yOffset, size, rotation, txt, group);
                    return t;
                };
                //columns
                for (var colIdx = 0; colIdx < visuals.BREADBOARD_MID_COLS; colIdx++) {
                    var colNm = getColumnName(colIdx);
                    //top
                    var rowTIdx = 0;
                    var rowTNm = getRowName(rowTIdx);
                    var groupT = getMidGroupName(rowTIdx, colIdx);
                    var lblT = mkBBLabelAtPin(rowTNm, colNm, 0, -PIN_DIST, colNm, groupT);
                    this.allLabels.push(lblT);
                    //bottom
                    var rowBIdx = visuals.BREADBOARD_MID_ROWS - 1;
                    var rowBNm = getRowName(rowBIdx);
                    var groupB = getMidGroupName(rowBIdx, colIdx);
                    var lblB = mkBBLabelAtPin(rowBNm, colNm, 0, +PIN_DIST, colNm, groupB);
                    this.allLabels.push(lblB);
                }
                //rows
                for (var rowIdx = 0; rowIdx < visuals.BREADBOARD_MID_ROWS; rowIdx++) {
                    var rowNm = getRowName(rowIdx);
                    //top
                    var colTIdx = 0;
                    var colTNm = getColumnName(colTIdx);
                    var lblT = mkBBLabelAtPin(rowNm, colTNm, -PIN_DIST, 0, rowNm);
                    this.allLabels.push(lblT);
                    //top
                    var colBIdx = visuals.BREADBOARD_MID_COLS - 1;
                    var colBNm = getColumnName(colBIdx);
                    var lblB = mkBBLabelAtPin(rowNm, colBNm, +PIN_DIST, 0, rowNm);
                    this.allLabels.push(lblB);
                }
                //+- labels
                var botPowerLabels = [
                    //BL
                    mkBBLabel(0 + POWER_LBL_OFFSET + MINUS_LBL_EXTRA_OFFSET, BAR_HEIGHT + MID_HEIGHT + POWER_LBL_OFFSET, MINUS_LBL_SIZE, LBL_ROTATION, "-", getBarGroupName(0, 0), ["sim-bb-blue"]),
                    mkBBLabel(0 + POWER_LBL_OFFSET, BAR_HEIGHT + MID_HEIGHT + BAR_HEIGHT - POWER_LBL_OFFSET, PLUS_LBL_SIZE, LBL_ROTATION, "+", getBarGroupName(1, 0), ["sim-bb-red"]),
                    //BR
                    mkBBLabel(WIDTH - POWER_LBL_OFFSET + MINUS_LBL_EXTRA_OFFSET, BAR_HEIGHT + MID_HEIGHT + POWER_LBL_OFFSET, MINUS_LBL_SIZE, LBL_ROTATION, "-", getBarGroupName(0, BAR_COLS - 1), ["sim-bb-blue"]),
                    mkBBLabel(WIDTH - POWER_LBL_OFFSET, BAR_HEIGHT + MID_HEIGHT + BAR_HEIGHT - POWER_LBL_OFFSET, PLUS_LBL_SIZE, LBL_ROTATION, "+", getBarGroupName(1, BAR_COLS - 1), ["sim-bb-red"]),
                ];
                this.allLabels = this.allLabels.concat(botPowerLabels);
                var topPowerLabels = [
                    //TL
                    mkBBLabel(0 + POWER_LBL_OFFSET + MINUS_LBL_EXTRA_OFFSET, 0 + POWER_LBL_OFFSET, MINUS_LBL_SIZE, LBL_ROTATION, "-", getBarGroupName(0, BAR_COLS), ["sim-bb-blue"]),
                    mkBBLabel(0 + POWER_LBL_OFFSET, BAR_HEIGHT - POWER_LBL_OFFSET, PLUS_LBL_SIZE, LBL_ROTATION, "+", getBarGroupName(1, BAR_COLS), ["sim-bb-red"]),
                    //TR
                    mkBBLabel(WIDTH - POWER_LBL_OFFSET + MINUS_LBL_EXTRA_OFFSET, 0 + POWER_LBL_OFFSET, MINUS_LBL_SIZE, LBL_ROTATION, "-", getBarGroupName(0, POWER_COLS - 1), ["sim-bb-blue"]),
                    mkBBLabel(WIDTH - POWER_LBL_OFFSET, BAR_HEIGHT - POWER_LBL_OFFSET, PLUS_LBL_SIZE, LBL_ROTATION, "+", getBarGroupName(1, POWER_COLS - 1), ["sim-bb-red"]),
                ];
                this.allLabels = this.allLabels.concat(topPowerLabels);
                //catalog lbls
                var lblNmToLbls = {};
                this.allLabels.forEach(function (lbl) {
                    var el = lbl.el, txt = lbl.txt;
                    var lbls = lblNmToLbls[txt] = lblNmToLbls[txt] || [];
                    lbls.push(lbl);
                });
                var isPowerPin = function (pin) { return pin.row === "-" || pin.row === "+"; };
                this.allPins.forEach(function (pin) {
                    var row = pin.row, col = pin.col, group = pin.group;
                    var colToLbls = _this.rowColToLbls[row] || (_this.rowColToLbls[row] = {});
                    var lbls = colToLbls[col] || (colToLbls[col] = []);
                    if (isPowerPin(pin)) {
                        //power pins
                        var isBot = Number(col) <= BAR_COLS;
                        if (isBot)
                            botPowerLabels.filter(function (l) { return l.group == pin.group; }).forEach(function (l) { return lbls.push(l); });
                        else
                            topPowerLabels.filter(function (l) { return l.group == pin.group; }).forEach(function (l) { return lbls.push(l); });
                    }
                    else {
                        //mid pins
                        var rowLbls = lblNmToLbls[row];
                        rowLbls.forEach(function (l) { return lbls.push(l); });
                        var colLbls = lblNmToLbls[col];
                        colLbls.forEach(function (l) { return lbls.push(l); });
                    }
                });
                //-----blue & red lines
                var lnLen = BAR_GRID_WIDTH + PIN_DIST * 1.5;
                var lnThickness = PIN_DIST / 5.0;
                var lnYOff = PIN_DIST * 0.6;
                var lnXOff = (lnLen - BAR_GRID_WIDTH) / 2.0;
                var mkPowerLine = function (x, y, group, cls) {
                    var ln = pxsim.svg.elt("rect");
                    pxsim.svg.hydrate(ln, {
                        class: "sim-bb-bar " + cls,
                        x: x,
                        y: y - lnThickness / 2.0,
                        width: lnLen,
                        height: lnThickness
                    });
                    var bar = { el: ln, group: group };
                    return bar;
                };
                var barLines = [
                    //top
                    mkPowerLine(BAR_BOT_GRID_X - lnXOff, BAR_BOT_GRID_Y - lnYOff, getBarGroupName(0, POWER_COLS - 1), "sim-bb-blue"),
                    mkPowerLine(BAR_BOT_GRID_X - lnXOff, BAR_BOT_GRID_Y + PIN_DIST + lnYOff, getBarGroupName(1, POWER_COLS - 1), "sim-bb-red"),
                    //bot
                    mkPowerLine(BAR_TOP_GRID_X - lnXOff, BAR_TOP_GRID_Y - lnYOff, getBarGroupName(0, 0), "sim-bb-blue"),
                    mkPowerLine(BAR_TOP_GRID_X - lnXOff, BAR_TOP_GRID_Y + PIN_DIST + lnYOff, getBarGroupName(1, 0), "sim-bb-red"),
                ];
                this.allPowerBars = this.allPowerBars.concat(barLines);
                //attach power bars
                this.allPowerBars.forEach(function (b) { return _this.bb.appendChild(b.el); });
                //-----electrically connected groups
                //make groups
                var allGrpNms = this.allPins.map(function (p) { return p.group; }).filter(function (g, i, a) { return a.indexOf(g) == i; });
                var groups = allGrpNms.map(function (grpNm) {
                    var g = pxsim.svg.elt("g");
                    return g;
                });
                groups.forEach(function (g) { return pxsim.svg.addClass(g, "sim-bb-pin-group"); });
                groups.forEach(function (g, i) { return pxsim.svg.addClass(g, "group-" + allGrpNms[i]); });
                var grpNmToGroup = {};
                allGrpNms.forEach(function (g, i) { return grpNmToGroup[g] = groups[i]; });
                //group pins and add connecting wire
                var grpNmToPins = {};
                this.allPins.forEach(function (p, i) {
                    var g = p.group;
                    var pins = grpNmToPins[g] || (grpNmToPins[g] = []);
                    pins.push(p);
                });
                //connecting wire
                allGrpNms.forEach(function (grpNm) {
                    var pins = grpNmToPins[grpNm];
                    var _a = [pins.map(function (p) { return p.cx; }), pins.map(function (p) { return p.cy; })], xs = _a[0], ys = _a[1];
                    var minFn = function (arr) { return arr.reduce(function (a, b) { return a < b ? a : b; }); };
                    var maxFn = function (arr) { return arr.reduce(function (a, b) { return a > b ? a : b; }); };
                    var _b = [minFn(xs), maxFn(xs), minFn(ys), maxFn(ys)], minX = _b[0], maxX = _b[1], minY = _b[2], maxY = _b[3];
                    var wire = pxsim.svg.elt("rect");
                    var width = Math.max(maxX - minX, 0.0001 /*rects with no width aren't displayed*/);
                    var height = Math.max(maxY - minY, 0.0001);
                    pxsim.svg.hydrate(wire, { x: minX, y: minY, width: width, height: height });
                    pxsim.svg.addClass(wire, "sim-bb-group-wire");
                    var g = grpNmToGroup[grpNm];
                    g.appendChild(wire);
                });
                //group pins
                this.allPins.forEach(function (p) {
                    var g = grpNmToGroup[p.group];
                    g.appendChild(p.el);
                    g.appendChild(p.hoverEl);
                });
                //group lbls
                var miscLblGroup = pxsim.svg.elt("g");
                pxsim.svg.hydrate(miscLblGroup, { class: "sim-bb-group-misc" });
                groups.push(miscLblGroup);
                this.allLabels.forEach(function (l) {
                    if (l.group) {
                        var g = grpNmToGroup[l.group];
                        g.appendChild(l.el);
                        g.appendChild(l.hoverEl);
                    }
                    else {
                        miscLblGroup.appendChild(l.el);
                        miscLblGroup.appendChild(l.hoverEl);
                    }
                });
                //attach to bb
                groups.forEach(function (g) { return _this.bb.appendChild(g); }); //attach to breadboard
            };
            Breadboard.prototype.getSVGAndSize = function () {
                return { el: this.bb, y: 0, x: 0, w: WIDTH, h: HEIGHT };
            };
            Breadboard.prototype.highlightLoc = function (rowCol) {
                var row = rowCol.row, col = rowCol.col;
                var pin = this.rowColToPin[row][col];
                var cx = pin.cx, cy = pin.cy;
                var lbls = this.rowColToLbls[row][col];
                var highlightLbl = function (lbl) {
                    pxsim.svg.addClass(lbl.el, "highlight");
                    pxsim.svg.addClass(lbl.hoverEl, "highlight");
                };
                lbls.forEach(highlightLbl);
            };
            return Breadboard;
        }());
        visuals.Breadboard = Breadboard;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.BOARD_SYTLE = "\n        .noselect {\n            -webkit-touch-callout: none; /* iOS Safari */\n            -webkit-user-select: none;   /* Chrome/Safari/Opera */\n            -khtml-user-select: none;    /* Konqueror */\n            -moz-user-select: none;      /* Firefox */\n            -ms-user-select: none;       /* Internet Explorer/Edge */\n            user-select: none;           /* Non-prefixed version, currently\n                                            not supported by any browser */\n        }\n\n        .sim-board-pin {\n            fill:#999;\n            stroke:#000;\n            stroke-width:" + visuals.PIN_DIST / 3.0 + "px;\n        }\n        .sim-board-pin-lbl {\n            fill: #333;\n        }\n        .gray-cover {\n            fill:#FFF;\n            opacity: 0.3;\n            stroke-width:0;\n            visibility: hidden;\n        }\n        .sim-board-pin-hover {\n            visibility: hidden;\n            pointer-events: all;\n            stroke-width:" + visuals.PIN_DIST / 6.0 + "px;\n        }\n        .sim-board-pin-hover:hover {\n            visibility: visible;\n        }\n        .sim-board-pin-lbl {\n            visibility: hidden;\n        }\n        .sim-board-outline .sim-board-pin-lbl {\n            visibility: visible;\n        }\n        .sim-board-pin-lbl {\n            fill: #555;\n        }\n        .sim-board-pin-lbl-hover {\n            fill: red;\n        }\n        .sim-board-outline .sim-board-pin-lbl-hover {\n            fill: black;\n        }\n        .sim-board-pin-lbl,\n        .sim-board-pin-lbl-hover {\n            font-family:\"Lucida Console\", Monaco, monospace;\n            pointer-events: all;\n            stroke-width: 0;\n        }\n        .sim-board-pin-lbl-hover {\n            visibility: hidden;\n        }\n        .sim-board-outline .sim-board-pin-hover:hover + .sim-board-pin-lbl,\n        .sim-board-pin-lbl.highlight {\n            visibility: hidden;\n        }\n        .sim-board-outline .sim-board-pin-hover:hover + * + .sim-board-pin-lbl-hover,\n        .sim-board-pin-lbl-hover.highlight {\n            visibility: visible;\n        }\n        /* Graying out */\n        .grayed .sim-board-pin-lbl:not(.highlight) {\n            fill: #AAA;\n        }\n        .grayed .sim-board-pin:not(.highlight) {\n            fill:#BBB;\n            stroke:#777;\n        }\n        .grayed .gray-cover {\n            visibility: inherit;\n        }\n        .grayed .sim-cmp:not(.notgrayed) {\n            opacity: 0.3;\n        }\n        /* Highlighting */\n        .sim-board-pin-lbl.highlight {\n            fill: #000;\n            font-weight: bold;\n        }\n        .sim-board-pin.highlight {\n            fill:#999;\n            stroke:#000;\n        }\n        ";
        var PIN_LBL_SIZE = visuals.PIN_DIST * 0.7;
        var PIN_LBL_HOVER_SIZE = PIN_LBL_SIZE * 1.5;
        var SQUARE_PIN_WIDTH = visuals.PIN_DIST * 0.66666;
        var SQUARE_PIN_HOVER_WIDTH = visuals.PIN_DIST * 0.66666 + visuals.PIN_DIST / 3.0;
        var nextBoardId = 0;
        var GenericBoardSvg = /** @class */ (function () {
            function GenericBoardSvg(props) {
                var _this = this;
                this.props = props;
                // pins & labels
                //(truth)
                this.allPins = [];
                this.allLabels = [];
                //(cache)
                this.pinNmToLbl = {};
                this.pinNmToPin = {};
                //TODO: handle wireframe mode
                this.id = nextBoardId++;
                var visDef = props.visualDef;
                var imgHref = props.wireframe && visDef.outlineImage ? visDef.outlineImage : visDef.image;
                var boardImgAndSize = visuals.mkImageSVG({
                    image: imgHref,
                    width: visDef.width,
                    height: visDef.height,
                    imageUnitDist: visDef.pinDist,
                    targetUnitDist: visuals.PIN_DIST
                });
                var scaleFn = visuals.mkScaleFn(visDef.pinDist, visuals.PIN_DIST);
                this.width = boardImgAndSize.w;
                this.height = boardImgAndSize.h;
                var img = boardImgAndSize.el;
                this.element = pxsim.svg.elt("svg");
                pxsim.svg.hydrate(this.element, {
                    "version": "1.0",
                    "viewBox": "0 0 " + this.width + " " + this.height,
                    "class": "sim sim-board-id-" + this.id,
                    "x": "0px",
                    "y": "0px"
                });
                if (props.wireframe)
                    pxsim.svg.addClass(this.element, "sim-board-outline");
                this.style = pxsim.svg.child(this.element, "style", {});
                this.style.textContent += visuals.BOARD_SYTLE;
                this.defs = pxsim.svg.child(this.element, "defs", {});
                this.g = pxsim.svg.elt("g");
                this.element.appendChild(this.g);
                // main board
                this.g.appendChild(img);
                this.background = img;
                pxsim.svg.hydrate(img, { class: "sim-board" });
                // does not look great
                //let backgroundCover = this.mkGrayCover(0, 0, this.width, this.height);
                //this.g.appendChild(backgroundCover);
                // ----- pins
                var mkSquarePin = function () {
                    var el = pxsim.svg.elt("rect");
                    var width = SQUARE_PIN_WIDTH;
                    pxsim.svg.hydrate(el, {
                        class: "sim-board-pin",
                        width: width,
                        height: width,
                    });
                    return { el: el, w: width, h: width, x: 0, y: 0 };
                };
                var mkSquareHoverPin = function () {
                    var el = pxsim.svg.elt("rect");
                    var width = SQUARE_PIN_HOVER_WIDTH;
                    pxsim.svg.hydrate(el, {
                        class: "sim-board-pin-hover",
                        width: width,
                        height: width
                    });
                    return { el: el, w: width, h: width, x: 0, y: 0 };
                };
                var mkPinBlockGrid = function (pinBlock, blockIdx) {
                    var xOffset = scaleFn(pinBlock.x) + visuals.PIN_DIST / 2.0;
                    var yOffset = scaleFn(pinBlock.y) + visuals.PIN_DIST / 2.0;
                    var rowCount = 1;
                    var colCount = pinBlock.labels.length;
                    var getColName = function (colIdx) { return pinBlock.labels[colIdx]; };
                    var getRowName = function () { return "" + (blockIdx + 1); };
                    var getGroupName = function () { return pinBlock.labels.join(" "); };
                    var gridRes = visuals.mkGrid({
                        xOffset: xOffset,
                        yOffset: yOffset,
                        rowCount: rowCount,
                        colCount: colCount,
                        pinDist: visuals.PIN_DIST,
                        mkPin: mkSquarePin,
                        mkHoverPin: mkSquareHoverPin,
                        getRowName: getRowName,
                        getColName: getColName,
                        getGroupName: getGroupName,
                    });
                    var pins = gridRes.allPins;
                    var pinsG = gridRes.g;
                    pxsim.svg.addClass(gridRes.g, "sim-board-pin-group");
                    return gridRes;
                };
                var pinBlocks = visDef.pinBlocks.map(mkPinBlockGrid);
                var pinToBlockDef = [];
                pinBlocks.forEach(function (blk, blkIdx) { return blk.allPins.forEach(function (p, pIdx) {
                    _this.allPins.push(p);
                    pinToBlockDef.push(visDef.pinBlocks[blkIdx]);
                }); });
                //tooltip
                this.allPins.forEach(function (p) {
                    var tooltip = p.col;
                    pxsim.svg.hydrate(p.el, { title: tooltip });
                    pxsim.svg.hydrate(p.hoverEl, { title: tooltip });
                });
                //catalog pins
                this.allPins.forEach(function (p) {
                    _this.pinNmToPin[p.col] = p;
                });
                // ----- labels
                var mkLabelTxtEl = function (pinX, pinY, size, txt, pos) {
                    //TODO: extract constants
                    var lblY;
                    var lblX;
                    if (pos === "below") {
                        var lblLen = size * 0.25 * txt.length;
                        lblX = pinX;
                        lblY = pinY + 12 + lblLen;
                    }
                    else {
                        var lblLen = size * 0.32 * txt.length;
                        lblX = pinX;
                        lblY = pinY - 11 - lblLen;
                    }
                    var el = visuals.mkTxt(lblX, lblY, size, -90, txt);
                    return el;
                };
                var mkLabel = function (pinX, pinY, txt, pos) {
                    var el = mkLabelTxtEl(pinX, pinY, PIN_LBL_SIZE, txt, pos);
                    pxsim.svg.addClass(el, "sim-board-pin-lbl");
                    var hoverEl = mkLabelTxtEl(pinX, pinY, PIN_LBL_HOVER_SIZE, txt, pos);
                    pxsim.svg.addClass(hoverEl, "sim-board-pin-lbl-hover");
                    var label = { el: el, hoverEl: hoverEl, txt: txt };
                    return label;
                };
                this.allLabels = this.allPins.map(function (p, pIdx) {
                    var blk = pinToBlockDef[pIdx];
                    return mkLabel(p.cx, p.cy, p.col, blk.labelPosition);
                });
                //catalog labels
                this.allPins.forEach(function (pin, pinIdx) {
                    var lbl = _this.allLabels[pinIdx];
                    _this.pinNmToLbl[pin.col] = lbl;
                });
                //attach pins & labels
                this.allPins.forEach(function (p, idx) {
                    var lbl = _this.allLabels[idx];
                    //pins and labels must be adjacent for hover CSS
                    _this.g.appendChild(p.el);
                    _this.g.appendChild(p.hoverEl);
                    _this.g.appendChild(lbl.el);
                    _this.g.appendChild(lbl.hoverEl);
                });
            }
            GenericBoardSvg.prototype.getCoord = function (pinNm) {
                var pin = this.pinNmToPin[pinNm];
                if (!pin)
                    return null;
                return [pin.cx, pin.cy];
            };
            GenericBoardSvg.prototype.mkGrayCover = function (x, y, w, h) {
                var rect = pxsim.svg.elt("rect");
                pxsim.svg.hydrate(rect, { x: x, y: y, width: w, height: h, class: "gray-cover" });
                return rect;
            };
            GenericBoardSvg.prototype.getView = function () {
                return { el: this.element, w: this.width, h: this.height, x: 0, y: 0 };
            };
            GenericBoardSvg.prototype.getPinDist = function () {
                return visuals.PIN_DIST;
            };
            GenericBoardSvg.prototype.highlightPin = function (pinNm) {
                var lbl = this.pinNmToLbl[pinNm];
                var pin = this.pinNmToPin[pinNm];
                if (lbl && pin) {
                    pxsim.svg.addClass(lbl.el, "highlight");
                    pxsim.svg.addClass(lbl.hoverEl, "highlight");
                    pxsim.svg.addClass(pin.el, "highlight");
                    pxsim.svg.addClass(pin.hoverEl, "highlight");
                }
            };
            return GenericBoardSvg;
        }());
        visuals.GenericBoardSvg = GenericBoardSvg;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        function mkGenericPartSVG(partVisual) {
            var imgAndSize = visuals.mkImageSVG({
                image: partVisual.image,
                width: partVisual.width,
                height: partVisual.height,
                imageUnitDist: partVisual.pinDistance,
                targetUnitDist: visuals.PIN_DIST
            });
            return imgAndSize;
        }
        visuals.mkGenericPartSVG = mkGenericPartSVG;
        var GenericPart = /** @class */ (function () {
            function GenericPart(partVisual) {
                this.style = "";
                this.defs = [];
                var imgAndSize = mkGenericPartSVG(partVisual);
                var img = imgAndSize.el;
                this.element = pxsim.svg.elt("g");
                this.element.appendChild(img);
            }
            GenericPart.prototype.moveToCoord = function (xy) {
                visuals.translateEl(this.element, xy);
            };
            //unused
            GenericPart.prototype.init = function (bus, state, svgEl) { };
            GenericPart.prototype.updateState = function () { };
            GenericPart.prototype.updateTheme = function () { };
            return GenericPart;
        }());
        visuals.GenericPart = GenericPart;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var WIRE_WIDTH = visuals.PIN_DIST / 2.5;
        var BB_WIRE_SMOOTH = 0.7;
        var INSTR_WIRE_SMOOTH = 0.8;
        var WIRE_PART_CURVE_OFF = 15;
        var WIRE_PART_LENGTH = 100;
        visuals.WIRES_CSS = "\n        .sim-bb-wire {\n            fill:none;\n            stroke-linecap: round;\n            stroke-width:" + WIRE_WIDTH + "px;\n            pointer-events: none;\n        }\n        .sim-bb-wire-end {\n            stroke:#333;\n            fill:#333;\n        }\n        .sim-bb-wire-bare-end {\n            fill: #ccc;\n        }\n        .sim-bb-wire-hover {\n            stroke-width: " + WIRE_WIDTH + "px;\n            visibility: hidden;\n            stroke-dasharray: " + visuals.PIN_DIST / 10.0 + "," + visuals.PIN_DIST / 1.5 + ";\n            /*stroke-opacity: 0.4;*/\n        }\n        .grayed .sim-bb-wire-ends-g:not(.highlight) .sim-bb-wire-end {\n            stroke: #777;\n            fill: #777;\n        }\n        .grayed .sim-bb-wire:not(.highlight) {\n            stroke: #CCC;\n        }\n        .sim-bb-wire-ends-g:hover .sim-bb-wire-end {\n            stroke: red;\n            fill: red;\n        }\n        .sim-bb-wire-ends-g:hover .sim-bb-wire-bare-end {\n            stroke: #FFF;\n            fill: #FFF;\n        }\n        ";
        function cssEncodeColor(color) {
            //HACK/TODO: do real CSS encoding.
            return color
                .replace(/\#/g, "-")
                .replace(/\(/g, "-")
                .replace(/\)/g, "-")
                .replace(/\,/g, "-")
                .replace(/\./g, "-")
                .replace(/\s/g, "");
        }
        var WireEndStyle;
        (function (WireEndStyle) {
            WireEndStyle[WireEndStyle["BBJumper"] = 0] = "BBJumper";
            WireEndStyle[WireEndStyle["OpenJumper"] = 1] = "OpenJumper";
            WireEndStyle[WireEndStyle["Croc"] = 2] = "Croc";
        })(WireEndStyle = visuals.WireEndStyle || (visuals.WireEndStyle = {}));
        function mkWirePart(cp, clr, croc) {
            if (croc === void 0) { croc = false; }
            var g = pxsim.svg.elt("g");
            var cx = cp[0], cy = cp[1];
            var offset = WIRE_PART_CURVE_OFF;
            var p1 = [cx - offset, cy - WIRE_PART_LENGTH / 2];
            var p2 = [cx + offset, cy + WIRE_PART_LENGTH / 2];
            clr = visuals.mapWireColor(clr);
            var e1;
            if (croc)
                e1 = mkCrocEnd(p1, true, clr);
            else
                e1 = mkOpenJumperEnd(p1, true, clr);
            var s = mkWirePartSeg(p1, p2, clr);
            var e2 = mkOpenJumperEnd(p2, false, clr);
            g.appendChild(s.el);
            g.appendChild(e1.el);
            g.appendChild(e2.el);
            var l = Math.min(e1.x, e2.x);
            var r = Math.max(e1.x + e1.w, e2.x + e2.w);
            var t = Math.min(e1.y, e2.y);
            var b = Math.max(e1.y + e1.h, e2.y + e2.h);
            return { el: g, x: l, y: t, w: r - l, h: b - t };
        }
        visuals.mkWirePart = mkWirePart;
        function mkCurvedWireSeg(p1, p2, smooth, clrClass) {
            var coordStr = function (xy) { return xy[0] + ", " + xy[1]; };
            var x1 = p1[0], y1 = p1[1];
            var x2 = p2[0], y2 = p2[1];
            var yLen = (y2 - y1);
            var c1 = [x1, y1 + yLen * smooth];
            var c2 = [x2, y2 - yLen * smooth];
            var w = pxsim.svg.mkPath("sim-bb-wire", "M" + coordStr(p1) + " C" + coordStr(c1) + " " + coordStr(c2) + " " + coordStr(p2));
            pxsim.svg.addClass(w, "wire-stroke-" + clrClass);
            return w;
        }
        function mkWirePartSeg(p1, p2, clr) {
            //TODO: merge with mkCurvedWireSeg
            var coordStr = function (xy) { return xy[0] + ", " + xy[1]; };
            var x1 = p1[0], y1 = p1[1];
            var x2 = p2[0], y2 = p2[1];
            var yLen = (y2 - y1);
            var c1 = [x1, y1 + yLen * .8];
            var c2 = [x2, y2 - yLen * .8];
            var e = pxsim.svg.mkPath("sim-bb-wire", "M" + coordStr(p1) + " C" + coordStr(c1) + " " + coordStr(c2) + " " + coordStr(p2));
            e.style["stroke"] = clr;
            return { el: e, x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x1 - x2), h: Math.abs(y1 - y2) };
        }
        function mkWireSeg(p1, p2, clrClass) {
            var coordStr = function (xy) { return xy[0] + ", " + xy[1]; };
            var w = pxsim.svg.mkPath("sim-bb-wire", "M" + coordStr(p1) + " L" + coordStr(p2));
            pxsim.svg.addClass(w, "wire-stroke-" + clrClass);
            return w;
        }
        function mkBBJumperEnd(p, clrClass) {
            var endW = visuals.PIN_DIST / 4;
            var w = pxsim.svg.elt("circle");
            var x = p[0];
            var y = p[1];
            var r = WIRE_WIDTH / 2 + endW / 2;
            pxsim.svg.hydrate(w, { cx: x, cy: y, r: r, class: "sim-bb-wire-end" });
            pxsim.svg.addClass(w, "wire-fill-" + clrClass);
            w.style["stroke-width"] = endW + "px";
            return w;
        }
        function mkOpenJumperEnd(p, top, clr) {
            var k = visuals.PIN_DIST * 0.24;
            var plasticLength = k * 10;
            var plasticWidth = k * 2;
            var metalLength = k * 6;
            var metalWidth = k;
            var strokeWidth = visuals.PIN_DIST / 4.0;
            var cx = p[0], cy = p[1];
            var o = top ? -1 : 1;
            var g = pxsim.svg.elt("g");
            var el = pxsim.svg.elt("rect");
            var h1 = plasticLength;
            var w1 = plasticWidth;
            var x1 = cx - w1 / 2;
            var y1 = cy - (h1 / 2);
            pxsim.svg.hydrate(el, { x: x1, y: y1, width: w1, height: h1, rx: 0.5, ry: 0.5, class: "sim-bb-wire-end" });
            el.style["stroke-width"] = strokeWidth + "px";
            var el2 = pxsim.svg.elt("rect");
            var h2 = metalLength;
            var w2 = metalWidth;
            var cy2 = cy + o * (h1 / 2 + h2 / 2);
            var x2 = cx - w2 / 2;
            var y2 = cy2 - (h2 / 2);
            pxsim.svg.hydrate(el2, { x: x2, y: y2, width: w2, height: h2, class: "sim-bb-wire-bare-end" });
            el2.style["fill"] = "#bbb";
            g.appendChild(el2);
            g.appendChild(el);
            return { el: g, x: x1 - strokeWidth, y: Math.min(y1, y2), w: w1 + strokeWidth * 2, h: h1 + h2 };
        }
        function mkSmallMBPinEnd(p, top, clr) {
            //HACK
            //TODO: merge with mkOpenJumperEnd()
            var k = visuals.PIN_DIST * 0.24;
            var plasticLength = k * 4;
            var plasticWidth = k * 1.2;
            var metalLength = k * 10;
            var metalWidth = k;
            var strokeWidth = visuals.PIN_DIST / 4.0;
            var cx = p[0], cy = p[1];
            var yOffset = 10;
            var o = top ? -1 : 1;
            var g = pxsim.svg.elt("g");
            var el = pxsim.svg.elt("rect");
            var h1 = plasticLength;
            var w1 = plasticWidth;
            var x1 = cx - w1 / 2;
            var y1 = cy + yOffset - (h1 / 2);
            pxsim.svg.hydrate(el, { x: x1, y: y1, width: w1, height: h1, rx: 0.5, ry: 0.5, class: "sim-bb-wire-end" });
            el.style["stroke-width"] = strokeWidth + "px";
            var el2 = pxsim.svg.elt("rect");
            var h2 = metalLength;
            var w2 = metalWidth;
            var cy2 = cy + yOffset + o * (h1 / 2 + h2 / 2);
            var x2 = cx - w2 / 2;
            var y2 = cy2 - (h2 / 2);
            pxsim.svg.hydrate(el2, { x: x2, y: y2, width: w2, height: h2, class: "sim-bb-wire-bare-end" });
            el2.style["fill"] = "#bbb";
            g.appendChild(el2);
            g.appendChild(el);
            return { el: g, x: x1 - strokeWidth, y: Math.min(y1, y2), w: w1 + strokeWidth * 2, h: h1 + h2 };
        }
        function mkCrocEnd(p, top, clr) {
            //TODO: merge with mkOpenJumperEnd()
            var k = visuals.PIN_DIST * 0.24;
            var plasticWidth = k * 4;
            var plasticLength = k * 10.0;
            var metalWidth = k * 3.5;
            var metalHeight = k * 3.5;
            var pointScalar = .15;
            var baseScalar = .3;
            var taperScalar = .7;
            var strokeWidth = visuals.PIN_DIST / 4.0;
            var cx = p[0], cy = p[1];
            var o = top ? -1 : 1;
            var g = pxsim.svg.elt("g");
            var el = pxsim.svg.elt("polygon");
            var h1 = plasticLength;
            var w1 = plasticWidth;
            var x1 = cx - w1 / 2;
            var y1 = cy - (h1 / 2);
            var mkPnt = function (xy) { return xy[0] + "," + xy[1]; };
            var mkPnts = function () {
                var xys = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    xys[_i] = arguments[_i];
                }
                return xys.map(function (xy) { return mkPnt(xy); }).join(" ");
            };
            var topScalar = top ? pointScalar : baseScalar;
            var midScalar = top ? taperScalar : (1 - taperScalar);
            var botScalar = top ? baseScalar : pointScalar;
            pxsim.svg.hydrate(el, {
                points: mkPnts([x1 + w1 * topScalar, y1], //TL
                [x1 + w1 * (1 - topScalar), y1], //TR
                [x1 + w1, y1 + h1 * midScalar], //MR
                [x1 + w1 * (1 - botScalar), y1 + h1], //BR
                [x1 + w1 * botScalar, y1 + h1], //BL
                [x1, y1 + h1 * midScalar]) //ML
            });
            pxsim.svg.hydrate(el, { rx: 0.5, ry: 0.5, class: "sim-bb-wire-end" });
            el.style["stroke-width"] = strokeWidth + "px";
            var el2 = pxsim.svg.elt("rect");
            var h2 = metalWidth;
            var w2 = metalHeight;
            var cy2 = cy + o * (h1 / 2 + h2 / 2);
            var x2 = cx - w2 / 2;
            var y2 = cy2 - (h2 / 2);
            pxsim.svg.hydrate(el2, { x: x2, y: y2, width: w2, height: h2, class: "sim-bb-wire-bare-end" });
            g.appendChild(el2);
            g.appendChild(el);
            return { el: g, x: x1 - strokeWidth, y: Math.min(y1, y2), w: w1 + strokeWidth * 2, h: h1 + h2 };
        }
        //TODO: make this stupid class obsolete
        var WireFactory = /** @class */ (function () {
            function WireFactory(underboard, overboard, boardEdges, styleEl, getLocCoord, getPinStyle) {
                this.nextWireId = 0;
                this.styleEl = styleEl;
                this.styleEl.textContent += visuals.WIRES_CSS;
                this.underboard = underboard;
                this.overboard = overboard;
                this.boardEdges = boardEdges;
                this.getLocCoord = getLocCoord;
                this.getPinStyle = getPinStyle;
            }
            WireFactory.prototype.indexOfMin = function (vs) {
                var minIdx = 0;
                var min = vs[0];
                for (var i = 1; i < vs.length; i++) {
                    if (vs[i] < min) {
                        min = vs[i];
                        minIdx = i;
                    }
                }
                return minIdx;
            };
            WireFactory.prototype.closestEdgeIdx = function (p) {
                var dists = this.boardEdges.map(function (e) { return Math.abs(p[1] - e); });
                var edgeIdx = this.indexOfMin(dists);
                return edgeIdx;
            };
            WireFactory.prototype.closestEdge = function (p) {
                return this.boardEdges[this.closestEdgeIdx(p)];
            };
            WireFactory.prototype.drawWire = function (pin1, pin2, color) {
                var _this = this;
                var wires = [];
                var g = pxsim.svg.child(this.overboard, "g", { class: "sim-bb-wire-group" });
                var closestPointOffBoard = function (p) {
                    var offset = visuals.PIN_DIST / 2;
                    var e = _this.closestEdge(p);
                    var y;
                    if (e - p[1] < 0)
                        y = e - offset;
                    else
                        y = e + offset;
                    return [p[0], y];
                };
                var wireId = this.nextWireId++;
                var clrClass = cssEncodeColor(color);
                var end1 = mkBBJumperEnd(pin1, clrClass);
                var end2 = mkBBJumperEnd(pin2, clrClass);
                var endG = pxsim.svg.child(g, "g", { class: "sim-bb-wire-ends-g" });
                endG.appendChild(end1);
                endG.appendChild(end2);
                var edgeIdx1 = this.closestEdgeIdx(pin1);
                var edgeIdx2 = this.closestEdgeIdx(pin2);
                if (edgeIdx1 == edgeIdx2) {
                    var seg = mkWireSeg(pin1, pin2, clrClass);
                    g.appendChild(seg);
                    wires.push(seg);
                }
                else {
                    var offP1 = closestPointOffBoard(pin1);
                    var offP2 = closestPointOffBoard(pin2);
                    var offSeg1 = mkWireSeg(pin1, offP1, clrClass);
                    var offSeg2 = mkWireSeg(pin2, offP2, clrClass);
                    var midSeg = void 0;
                    var midSegHover = void 0;
                    var isBetweenMiddleTwoEdges = (edgeIdx1 == 1 || edgeIdx1 == 2) && (edgeIdx2 == 1 || edgeIdx2 == 2);
                    if (isBetweenMiddleTwoEdges) {
                        midSeg = mkCurvedWireSeg(offP1, offP2, BB_WIRE_SMOOTH, clrClass);
                        midSegHover = mkCurvedWireSeg(offP1, offP2, BB_WIRE_SMOOTH, clrClass);
                    }
                    else {
                        midSeg = mkWireSeg(offP1, offP2, clrClass);
                        midSegHover = mkWireSeg(offP1, offP2, clrClass);
                    }
                    pxsim.svg.addClass(midSegHover, "sim-bb-wire-hover");
                    g.appendChild(offSeg1);
                    wires.push(offSeg1);
                    g.appendChild(offSeg2);
                    wires.push(offSeg2);
                    this.underboard.appendChild(midSeg);
                    wires.push(midSeg);
                    g.appendChild(midSegHover);
                    wires.push(midSegHover);
                    //set hover mechanism
                    var wireIdClass_1 = "sim-bb-wire-id-" + wireId;
                    var setId = function (e) { return pxsim.svg.addClass(e, wireIdClass_1); };
                    setId(endG);
                    setId(midSegHover);
                    this.styleEl.textContent += "\n                    ." + wireIdClass_1 + ":hover ~ ." + wireIdClass_1 + ".sim-bb-wire-hover {\n                        visibility: visible;\n                    }";
                }
                // wire colors
                var colorCSS = "\n                .wire-stroke-" + clrClass + " {\n                    stroke: " + visuals.mapWireColor(color) + ";\n                }\n                .wire-fill-" + clrClass + " {\n                    fill: " + visuals.mapWireColor(color) + ";\n                }\n                ";
                this.styleEl.textContent += colorCSS;
                return { endG: endG, end1: end1, end2: end2, wires: wires };
            };
            WireFactory.prototype.drawWireWithCrocs = function (pin1, pin2, color, smallPin) {
                var _this = this;
                if (smallPin === void 0) { smallPin = false; }
                //TODO: merge with drawWire()
                var PIN_Y_OFF = 40;
                var CROC_Y_OFF = -17;
                var wires = [];
                var g = pxsim.svg.child(this.overboard, "g", { class: "sim-bb-wire-group" });
                var closestPointOffBoard = function (p) {
                    var offset = visuals.PIN_DIST / 2;
                    var e = _this.closestEdge(p);
                    var y;
                    if (e - p[1] < 0)
                        y = e - offset;
                    else
                        y = e + offset;
                    return [p[0], y];
                };
                var wireId = this.nextWireId++;
                var clrClass = cssEncodeColor(color);
                var end1 = mkBBJumperEnd(pin1, clrClass);
                var pin2orig = pin2;
                var x2 = pin2[0], y2 = pin2[1];
                pin2 = [x2, y2 + PIN_Y_OFF]; //HACK
                x2 = pin2[0], y2 = pin2[1];
                var endCoord2 = [x2, y2 + CROC_Y_OFF];
                var end2AndSize;
                if (smallPin)
                    end2AndSize = mkSmallMBPinEnd(endCoord2, true, color);
                else
                    end2AndSize = mkCrocEnd(endCoord2, true, color);
                var end2 = end2AndSize.el;
                var endG = pxsim.svg.child(g, "g", { class: "sim-bb-wire-ends-g" });
                endG.appendChild(end1);
                //endG.appendChild(end2);
                var edgeIdx1 = this.closestEdgeIdx(pin1);
                var edgeIdx2 = this.closestEdgeIdx(pin2orig);
                if (edgeIdx1 == edgeIdx2) {
                    var seg = mkWireSeg(pin1, pin2, clrClass);
                    g.appendChild(seg);
                    wires.push(seg);
                }
                else {
                    var offP1 = closestPointOffBoard(pin1);
                    //let offP2 = closestPointOffBoard(pin2orig);
                    var offSeg1 = mkWireSeg(pin1, offP1, clrClass);
                    //let offSeg2 = mkWireSeg(pin2, offP2, clrClass);
                    var midSeg = void 0;
                    var midSegHover = void 0;
                    var isBetweenMiddleTwoEdges = (edgeIdx1 == 1 || edgeIdx1 == 2) && (edgeIdx2 == 1 || edgeIdx2 == 2);
                    if (isBetweenMiddleTwoEdges) {
                        midSeg = mkCurvedWireSeg(offP1, pin2, BB_WIRE_SMOOTH, clrClass);
                        midSegHover = mkCurvedWireSeg(offP1, pin2, BB_WIRE_SMOOTH, clrClass);
                    }
                    else {
                        midSeg = mkWireSeg(offP1, pin2, clrClass);
                        midSegHover = mkWireSeg(offP1, pin2, clrClass);
                    }
                    pxsim.svg.addClass(midSegHover, "sim-bb-wire-hover");
                    g.appendChild(offSeg1);
                    wires.push(offSeg1);
                    // g.appendChild(offSeg2);
                    // wires.push(offSeg2);
                    this.underboard.appendChild(midSeg);
                    wires.push(midSeg);
                    //g.appendChild(midSegHover);
                    //wires.push(midSegHover);
                    //set hover mechanism
                    var wireIdClass_2 = "sim-bb-wire-id-" + wireId;
                    var setId = function (e) { return pxsim.svg.addClass(e, wireIdClass_2); };
                    setId(endG);
                    setId(midSegHover);
                    this.styleEl.textContent += "\n                    ." + wireIdClass_2 + ":hover ~ ." + wireIdClass_2 + ".sim-bb-wire-hover {\n                        visibility: visible;\n                    }";
                }
                endG.appendChild(end2); //HACK
                // wire colors
                var colorCSS = "\n                .wire-stroke-" + clrClass + " {\n                    stroke: " + visuals.mapWireColor(color) + ";\n                }\n                .wire-fill-" + clrClass + " {\n                    fill: " + visuals.mapWireColor(color) + ";\n                }\n                ";
                this.styleEl.textContent += colorCSS;
                return { endG: endG, end1: end1, end2: end2, wires: wires };
            };
            WireFactory.prototype.addWire = function (start, end, color) {
                var startLoc = this.getLocCoord(start);
                var endLoc = this.getLocCoord(end);
                var startStyle = this.getPinStyle(start);
                var endStyle = this.getPinStyle(end);
                var wireEls;
                if (end.type == "dalboard" && endStyle == "croc") {
                    wireEls = this.drawWireWithCrocs(startLoc, endLoc, color);
                }
                else {
                    wireEls = this.drawWire(startLoc, endLoc, color);
                }
                return wireEls;
            };
            return WireFactory;
        }());
        visuals.WireFactory = WireFactory;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
