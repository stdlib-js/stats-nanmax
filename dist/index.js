"use strict";var s=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var t=s(function(y,e){
var a=require('@stdlib/ndarray-dtypes/dist'),u=require('@stdlib/stats-base-ndarray-nanmax/dist'),v=require('@stdlib/stats-base-ndarray-dnanmax/dist'),o=require('@stdlib/stats-base-ndarray-snanmax/dist'),c=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),p=a("real_and_generic"),d=a("real_and_generic"),l={output:"same",casting:"none"},m={types:["float64","float32"],fcns:[v,o],default:u},q=c(m,[p],d,l);e.exports=q
});var x=t();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
