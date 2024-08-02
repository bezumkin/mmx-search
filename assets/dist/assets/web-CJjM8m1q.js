import{d as ce,z as F,A as ge,D as pe,o as C,b as ee,w as E,i as z,u as I,q as j,a6 as te,c as $,F as we,p as ve,a as be,f as L,h as se,e as D,V as ye,y as ze}from"./vue-hfjAzT99.js";import{c as xe,E as Se,a as Ie,e as ke}from"./api-CKyfD95E.js";import{m as Oe,$ as Fe,s as Ve,A as Me}from"./vue-bootstrap-CJ-2MBel.js";function B(i,e,t,s){function n(o){return o instanceof t?o:new t(function(c){c(o)})}return new(t||(t=Promise))(function(o,c){function r(d){try{u(s.next(d))}catch(h){c(h)}}function a(d){try{u(s.throw(d))}catch(h){c(h)}}function u(d){d.done?o(d.value):n(d.value).then(r,a)}u((s=s.apply(i,[])).next())})}const Ce="ENTRIES",ae="KEYS",ue="VALUES",x="";class J{constructor(e,t){const s=e._tree,n=Array.from(s.keys());this.set=e,this._type=t,this._path=n.length>0?[{node:s,keys:n}]:[]}next(){const e=this.dive();return this.backtrack(),e}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:e,keys:t}=M(this._path);if(M(t)===x)return{done:!1,value:this.result()};const s=e.get(M(t));return this._path.push({node:s,keys:Array.from(s.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const e=M(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:e})=>M(e)).filter(e=>e!==x).join("")}value(){return M(this._path).node.get(x)}result(){switch(this._type){case ue:return this.value();case ae:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const M=i=>i[i.length-1],Te=(i,e,t)=>{const s=new Map;if(e===void 0)return s;const n=e.length+1,o=n+t,c=new Uint8Array(o*n).fill(t+1);for(let r=0;r<n;++r)c[r]=r;for(let r=1;r<o;++r)c[r*n]=r;return de(i,e,t,s,c,1,n,""),s},de=(i,e,t,s,n,o,c,r)=>{const a=o*c;e:for(const u of i.keys())if(u===x){const d=n[a-1];d<=t&&s.set(r,[i.get(u),d])}else{let d=o;for(let h=0;h<u.length;++h,++d){const l=u[h],m=c*d,g=m-c;let f=n[m];const _=Math.max(0,d-t-1),k=Math.min(c-1,d+t);for(let S=_;S<k;++S){const w=l!==e[S],p=n[g+S]+ +w,b=n[g+S+1]+1,y=n[m+S]+1,v=n[m+S+1]=Math.min(p,b,y);v<f&&(f=v)}if(f>t)continue e}de(i.get(u),e,t,s,n,d,c,r+u)}};class V{constructor(e=new Map,t=""){this._size=void 0,this._tree=e,this._prefix=t}atPrefix(e){if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");const[t,s]=W(this._tree,e.slice(this._prefix.length));if(t===void 0){const[n,o]=H(s);for(const c of n.keys())if(c!==x&&c.startsWith(o)){const r=new Map;return r.set(c.slice(o.length),n.get(c)),new V(r,e)}}return new V(t,e)}clear(){this._size=void 0,this._tree.clear()}delete(e){return this._size=void 0,Ee(this._tree,e)}entries(){return new J(this,Ce)}forEach(e){for(const[t,s]of this)e(t,s,this)}fuzzyGet(e,t){return Te(this._tree,e,t)}get(e){const t=G(this._tree,e);return t!==void 0?t.get(x):void 0}has(e){const t=G(this._tree,e);return t!==void 0&&t.has(x)}keys(){return new J(this,ae)}set(e,t){if(typeof e!="string")throw new Error("key must be a string");return this._size=void 0,U(this._tree,e).set(x,t),this}get size(){if(this._size)return this._size;this._size=0;const e=this.entries();for(;!e.next().done;)this._size+=1;return this._size}update(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;const s=U(this._tree,e);return s.set(x,t(s.get(x))),this}fetch(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;const s=U(this._tree,e);let n=s.get(x);return n===void 0&&s.set(x,n=t()),n}values(){return new J(this,ue)}[Symbol.iterator](){return this.entries()}static from(e){const t=new V;for(const[s,n]of e)t.set(s,n);return t}static fromObject(e){return V.from(Object.entries(e))}}const W=(i,e,t=[])=>{if(e.length===0||i==null)return[i,t];for(const s of i.keys())if(s!==x&&e.startsWith(s))return t.push([i,s]),W(i.get(s),e.slice(s.length),t);return t.push([i,e]),W(void 0,"",t)},G=(i,e)=>{if(e.length===0||i==null)return i;for(const t of i.keys())if(t!==x&&e.startsWith(t))return G(i.get(t),e.slice(t.length))},U=(i,e)=>{const t=e.length;e:for(let s=0;i&&s<t;){for(const o of i.keys())if(o!==x&&e[s]===o[0]){const c=Math.min(t-s,o.length);let r=1;for(;r<c&&e[s+r]===o[r];)++r;const a=i.get(o);if(r===o.length)i=a;else{const u=new Map;u.set(o.slice(r),a),i.set(e.slice(s,s+r),u),i.delete(o),i=u}s+=r;continue e}const n=new Map;return i.set(e.slice(s),n),n}return i},Ee=(i,e)=>{const[t,s]=W(i,e);if(t!==void 0){if(t.delete(x),t.size===0)le(s);else if(t.size===1){const[n,o]=t.entries().next().value;he(s,n,o)}}},le=i=>{if(i.length===0)return;const[e,t]=H(i);if(e.delete(t),e.size===0)le(i.slice(0,-1));else if(e.size===1){const[s,n]=e.entries().next().value;s!==x&&he(i.slice(0,-1),s,n)}},he=(i,e,t)=>{if(i.length===0)return;const[s,n]=H(i);s.set(n+e,t),s.delete(n)},H=i=>i[i.length-1],X="or",fe="and",Le="and_not";class T{constructor(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');const t=e.autoVacuum==null||e.autoVacuum===!0?K:e.autoVacuum;this._options=Object.assign(Object.assign(Object.assign({},q),e),{autoVacuum:t,searchOptions:Object.assign(Object.assign({},ne),e.searchOptions||{}),autoSuggestOptions:Object.assign(Object.assign({},Re),e.autoSuggestOptions||{})}),this._index=new V,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=Z,this.addFields(this._options.fields)}add(e){const{extractField:t,tokenize:s,processTerm:n,fields:o,idField:c}=this._options,r=t(e,c);if(r==null)throw new Error(`MiniSearch: document does not have ID field "${c}"`);if(this._idToShortId.has(r))throw new Error(`MiniSearch: duplicate ID ${r}`);const a=this.addDocumentId(r);this.saveStoredFields(a,e);for(const u of o){const d=t(e,u);if(d==null)continue;const h=s(d.toString(),u),l=this._fieldIds[u],m=new Set(h).size;this.addFieldLength(a,l,this._documentCount-1,m);for(const g of h){const f=n(g,u);if(Array.isArray(f))for(const _ of f)this.addTerm(l,a,_);else f&&this.addTerm(l,a,f)}}}addAll(e){for(const t of e)this.add(t)}addAllAsync(e,t={}){const{chunkSize:s=10}=t,n={chunk:[],promise:Promise.resolve()},{chunk:o,promise:c}=e.reduce(({chunk:r,promise:a},u,d)=>(r.push(u),(d+1)%s===0?{chunk:[],promise:a.then(()=>new Promise(h=>setTimeout(h,0))).then(()=>this.addAll(r))}:{chunk:r,promise:a}),n);return c.then(()=>this.addAll(o))}remove(e){const{tokenize:t,processTerm:s,extractField:n,fields:o,idField:c}=this._options,r=n(e,c);if(r==null)throw new Error(`MiniSearch: document does not have ID field "${c}"`);const a=this._idToShortId.get(r);if(a==null)throw new Error(`MiniSearch: cannot remove document with ID ${r}: it is not in the index`);for(const u of o){const d=n(e,u);if(d==null)continue;const h=t(d.toString(),u),l=this._fieldIds[u],m=new Set(h).size;this.removeFieldLength(a,l,this._documentCount,m);for(const g of h){const f=s(g,u);if(Array.isArray(f))for(const _ of f)this.removeTerm(l,a,_);else f&&this.removeTerm(l,a,f)}}this._storedFields.delete(a),this._documentIds.delete(a),this._idToShortId.delete(r),this._fieldLength.delete(a),this._documentCount-=1}removeAll(e){if(e)for(const t of e)this.remove(t);else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new V,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}}discard(e){const t=this._idToShortId.get(e);if(t==null)throw new Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);this._idToShortId.delete(e),this._documentIds.delete(t),this._storedFields.delete(t),(this._fieldLength.get(t)||[]).forEach((s,n)=>{this.removeFieldLength(t,n,this._documentCount,s)}),this._fieldLength.delete(t),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()}maybeAutoVacuum(){if(this._options.autoVacuum===!1)return;const{minDirtFactor:e,minDirtCount:t,batchSize:s,batchWait:n}=this._options.autoVacuum;this.conditionalVacuum({batchSize:s,batchWait:n},{minDirtCount:t,minDirtFactor:e})}discardAll(e){const t=this._options.autoVacuum;try{this._options.autoVacuum=!1;for(const s of e)this.discard(s)}finally{this._options.autoVacuum=t}this.maybeAutoVacuum()}replace(e){const{idField:t,extractField:s}=this._options,n=s(e,t);this.discard(n),this.add(e)}vacuum(e={}){return this.conditionalVacuum(e)}conditionalVacuum(e,t){return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(()=>{const s=this._enqueuedVacuumConditions;return this._enqueuedVacuumConditions=Z,this.performVacuuming(e,s)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)}performVacuuming(e,t){return B(this,void 0,void 0,function*(){const s=this._dirtCount;if(this.vacuumConditionsMet(t)){const n=e.batchSize||Y.batchSize,o=e.batchWait||Y.batchWait;let c=1;for(const[r,a]of this._index){for(const[u,d]of a)for(const[h]of d)this._documentIds.has(h)||(d.size<=1?a.delete(u):d.delete(h));this._index.get(r).size===0&&this._index.delete(r),c%n===0&&(yield new Promise(u=>setTimeout(u,o))),c+=1}this._dirtCount-=s}yield null,this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null})}vacuumConditionsMet(e){if(e==null)return!0;let{minDirtCount:t,minDirtFactor:s}=e;return t=t||K.minDirtCount,s=s||K.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=s}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}has(e){return this._idToShortId.has(e)}getStoredFields(e){const t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)}search(e,t={}){const s=this.executeQuery(e,t),n=[];for(const[o,{score:c,terms:r,match:a}]of s){const u=r.length||1,d={id:this._documentIds.get(o),score:c*u,terms:Object.keys(a),queryTerms:r,match:a};Object.assign(d,this._storedFields.get(o)),(t.filter==null||t.filter(d))&&n.push(d)}return e===T.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||n.sort(oe),n}autoSuggest(e,t={}){t=Object.assign(Object.assign({},this._options.autoSuggestOptions),t);const s=new Map;for(const{score:o,terms:c}of this.search(e,t)){const r=c.join(" "),a=s.get(r);a!=null?(a.score+=o,a.count+=1):s.set(r,{score:o,terms:c,count:1})}const n=[];for(const[o,{score:c,terms:r,count:a}]of s)n.push({suggestion:o,terms:r,score:c/a});return n.sort(oe),n}get documentCount(){return this._documentCount}get termCount(){return this._index.size}static loadJSON(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)}static loadJSONAsync(e,t){return B(this,void 0,void 0,function*(){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJSAsync(JSON.parse(e),t)})}static getDefault(e){if(q.hasOwnProperty(e))return Q(q,e);throw new Error(`MiniSearch: unknown option "${e}"`)}static loadJS(e,t){const{index:s,documentIds:n,fieldLength:o,storedFields:c,serializationVersion:r}=e,a=this.instantiateMiniSearch(e,t);a._documentIds=N(n),a._fieldLength=N(o),a._storedFields=N(c);for(const[u,d]of a._documentIds)a._idToShortId.set(d,u);for(const[u,d]of s){const h=new Map;for(const l of Object.keys(d)){let m=d[l];r===1&&(m=m.ds),h.set(parseInt(l,10),N(m))}a._index.set(u,h)}return a}static loadJSAsync(e,t){return B(this,void 0,void 0,function*(){const{index:s,documentIds:n,fieldLength:o,storedFields:c,serializationVersion:r}=e,a=this.instantiateMiniSearch(e,t);a._documentIds=yield R(n),a._fieldLength=yield R(o),a._storedFields=yield R(c);for(const[d,h]of a._documentIds)a._idToShortId.set(h,d);let u=0;for(const[d,h]of s){const l=new Map;for(const m of Object.keys(h)){let g=h[m];r===1&&(g=g.ds),l.set(parseInt(m,10),yield R(g))}++u%1e3===0&&(yield me(0)),a._index.set(d,l)}return a})}static instantiateMiniSearch(e,t){const{documentCount:s,nextId:n,fieldIds:o,averageFieldLength:c,dirtCount:r,serializationVersion:a}=e;if(a!==1&&a!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");const u=new T(t);return u._documentCount=s,u._nextId=n,u._idToShortId=new Map,u._fieldIds=o,u._avgFieldLength=c,u._dirtCount=r||0,u._index=new V,u}executeQuery(e,t={}){if(e===T.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){const l=Object.assign(Object.assign(Object.assign({},t),e),{queries:void 0}),m=e.queries.map(g=>this.executeQuery(g,l));return this.combineResults(m,l.combineWith)}const{tokenize:s,processTerm:n,searchOptions:o}=this._options,c=Object.assign(Object.assign({tokenize:s,processTerm:n},o),t),{tokenize:r,processTerm:a}=c,h=r(e).flatMap(l=>a(l)).filter(l=>!!l).map(Ne(c)).map(l=>this.executeQuerySpec(l,c));return this.combineResults(h,c.combineWith)}executeQuerySpec(e,t){const s=Object.assign(Object.assign({},this._options.searchOptions),t),n=(s.fields||this._options.fields).reduce((f,_)=>Object.assign(Object.assign({},f),{[_]:Q(s.boost,_)||1}),{}),{boostDocument:o,weights:c,maxFuzzy:r,bm25:a}=s,{fuzzy:u,prefix:d}=Object.assign(Object.assign({},ne.weights),c),h=this._index.get(e.term),l=this.termResults(e.term,e.term,1,e.termBoost,h,n,o,a);let m,g;if(e.prefix&&(m=this._index.atPrefix(e.term)),e.fuzzy){const f=e.fuzzy===!0?.2:e.fuzzy,_=f<1?Math.min(r,Math.round(e.term.length*f)):f;_&&(g=this._index.fuzzyGet(e.term,_))}if(m)for(const[f,_]of m){const k=f.length-e.term.length;if(!k)continue;g==null||g.delete(f);const S=d*f.length/(f.length+.3*k);this.termResults(e.term,f,S,e.termBoost,_,n,o,a,l)}if(g)for(const f of g.keys()){const[_,k]=g.get(f);if(!k)continue;const S=u*f.length/(f.length+k);this.termResults(e.term,f,S,e.termBoost,_,n,o,a,l)}return l}executeWildcardQuery(e){const t=new Map,s=Object.assign(Object.assign({},this._options.searchOptions),e);for(const[n,o]of this._documentIds){const c=s.boostDocument?s.boostDocument(o,"",this._storedFields.get(n)):1;t.set(n,{score:c,terms:[],match:{}})}return t}combineResults(e,t=X){if(e.length===0)return new Map;const s=t.toLowerCase(),n=je[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map}toJSON(){const e=[];for(const[t,s]of this._index){const n={};for(const[o,c]of s)n[o]=Object.fromEntries(c);e.push([t,n])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:e,serializationVersion:2}}termResults(e,t,s,n,o,c,r,a,u=new Map){if(o==null)return u;for(const d of Object.keys(c)){const h=c[d],l=this._fieldIds[d],m=o.get(l);if(m==null)continue;let g=m.size;const f=this._avgFieldLength[l];for(const _ of m.keys()){if(!this._documentIds.has(_)){this.removeTerm(l,_,t),g-=1;continue}const k=r?r(this._documentIds.get(_),t,this._storedFields.get(_)):1;if(!k)continue;const S=m.get(_),w=this._fieldLength.get(_)[l],p=De(S,g,this._documentCount,w,f,a),b=s*n*h*k*p,y=u.get(_);if(y){y.score+=b,$e(y.terms,e);const v=Q(y.match,t);v?v.push(d):y.match[t]=[d]}else u.set(_,{score:b,terms:[e],match:{[t]:[d]}})}}return u}addTerm(e,t,s){const n=this._index.fetch(s,re);let o=n.get(e);if(o==null)o=new Map,o.set(t,1),n.set(e,o);else{const c=o.get(t);o.set(t,(c||0)+1)}}removeTerm(e,t,s){if(!this._index.has(s)){this.warnDocumentChanged(t,e,s);return}const n=this._index.fetch(s,re),o=n.get(e);o==null||o.get(t)==null?this.warnDocumentChanged(t,e,s):o.get(t)<=1?o.size<=1?n.delete(e):o.delete(t):o.set(t,o.get(t)-1),this._index.get(s).size===0&&this._index.delete(s)}warnDocumentChanged(e,t,s){for(const n of Object.keys(this._fieldIds))if(this._fieldIds[n]===t){this._options.logger("warn",`MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${s}" was not present in field "${n}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}}addDocumentId(e){const t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t}addFields(e){for(let t=0;t<e.length;t++)this._fieldIds[e[t]]=t}addFieldLength(e,t,s,n){let o=this._fieldLength.get(e);o==null&&this._fieldLength.set(e,o=[]),o[t]=n;const r=(this._avgFieldLength[t]||0)*s+n;this._avgFieldLength[t]=r/(s+1)}removeFieldLength(e,t,s,n){if(s===1){this._avgFieldLength[t]=0;return}const o=this._avgFieldLength[t]*s-n;this._avgFieldLength[t]=o/(s-1)}saveStoredFields(e,t){const{storeFields:s,extractField:n}=this._options;if(s==null||s.length===0)return;let o=this._storedFields.get(e);o==null&&this._storedFields.set(e,o={});for(const c of s){const r=n(t,c);r!==void 0&&(o[c]=r)}}}T.wildcard=Symbol("*");const Q=(i,e)=>Object.prototype.hasOwnProperty.call(i,e)?i[e]:void 0,je={[X]:(i,e)=>{for(const t of e.keys()){const s=i.get(t);if(s==null)i.set(t,e.get(t));else{const{score:n,terms:o,match:c}=e.get(t);s.score=s.score+n,s.match=Object.assign(s.match,c),ie(s.terms,o)}}return i},[fe]:(i,e)=>{const t=new Map;for(const s of e.keys()){const n=i.get(s);if(n==null)continue;const{score:o,terms:c,match:r}=e.get(s);ie(n.terms,c),t.set(s,{score:n.score+o,terms:n.terms,match:Object.assign(n.match,r)})}return t},[Le]:(i,e)=>{for(const t of e.keys())i.delete(t);return i}},Ae={k:1.2,b:.7,d:.5},De=(i,e,t,s,n,o)=>{const{k:c,b:r,d:a}=o;return Math.log(1+(t-e+.5)/(e+.5))*(a+i*(c+1)/(i+c*(1-r+r*s/n)))},Ne=i=>(e,t,s)=>{const n=typeof i.fuzzy=="function"?i.fuzzy(e,t,s):i.fuzzy||!1,o=typeof i.prefix=="function"?i.prefix(e,t,s):i.prefix===!0,c=typeof i.boostTerm=="function"?i.boostTerm(e,t,s):1;return{term:e,fuzzy:n,prefix:o,termBoost:c}},q={idField:"id",extractField:(i,e)=>i[e],tokenize:i=>i.split(Be),processTerm:i=>i.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(i,e)=>{typeof(console==null?void 0:console[i])=="function"&&console[i](e)},autoVacuum:!0},ne={combineWith:X,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Ae},Re={combineWith:fe,prefix:(i,e,t)=>e===t.length-1},Y={batchSize:1e3,batchWait:10},Z={minDirtFactor:.1,minDirtCount:20},K=Object.assign(Object.assign({},Y),Z),$e=(i,e)=>{i.includes(e)||i.push(e)},ie=(i,e)=>{for(const t of e)i.includes(t)||i.push(t)},oe=({score:i},{score:e})=>e-i,re=()=>new Map,N=i=>{const e=new Map;for(const t of Object.keys(i))e.set(parseInt(t,10),i[t]);return e},R=i=>B(void 0,void 0,void 0,function*(){const e=new Map;let t=0;for(const s of Object.keys(i))e.set(parseInt(s,10),i[s]),++t%1e3===0&&(yield me(0));return e}),me=i=>new Promise(e=>setTimeout(e,i)),Be=/[\n\r\p{Z}\p{P}]+/u,We={class:"search-actions prepend"},Pe=["title"],Je=z("i",{class:"search-icon magnifying-glass"},null,-1),Ue=[Je],Qe=z("i",{class:"search-icon arrow-down rotate-90"},null,-1),qe={class:"search-actions append"},Ke=z("i",{class:"search-icon xmark"},null,-1),Ge={key:0,class:"search-results",role:"listbox"},Ye={key:0,class:"small"},Ze={class:"search-shortcuts"},He=z("kbd",{"aria-label":"up"},[z("i",{class:"search-icon arrow-down"})],-1),Xe=z("kbd",{"aria-label":"down"},[z("i",{class:"search-icon arrow-up"})],-1),et=z("kbd",{"aria-label":"enter"},[z("i",{class:"search-icon arrow-turn-down rotate-90"})],-1),tt=z("kbd",{"aria-label":"escape"},"esc",-1),st=60*10,nt=ce({__name:"search",setup(i,{expose:e}){const t=xe,s=F(),n=F(!1),o=F(),c=F(""),r=F([]),a=F(-1),u=F({title:"",fields:[],fuzzy:0,boost:{},prefix:!0,pages:[],timestamp:0}),d=ge(()=>c.value.length>0);function h(){a.value=-1,!c.value.length||!s.value?r.value=[]:r.value=s.value.search(c.value)}function l(){c.value="",r.value=[],a.value=-1,o.value&&o.value.$el.focus()}function m(w){n.value||g(w),n.value=!n.value}async function g(w){const p=await f(w),b=[],y={};p.fields.forEach(v=>{b.push(v.field),y[v.field]=Number(v.weight)}),s.value=new T({fields:b,storeFields:["id","pagetitle","menutitle","uri","parent"],searchOptions:{boost:y,fuzzy:p.fuzzy,prefix:p.prefix}}),p.pages&&s.value.addAll(p.pages)}async function f(w){const p=new Date().getTime()/1e3;if(u.value.title!==w||u.value.timestamp+st<p){u.value.title=w,u.value.timestamp=p;const b={};try{const y=await Se("web/index",{title:w});y.pages.forEach(v=>{b[v.resource_id]||(b[v.resource_id]=v.resource,b[v.resource_id].parent=v.parent),b[v.resource_id][v.field]=v.value}),u.value.fields=y.fields,u.value.pages=Object.values(b),u.value.fuzzy=y.fuzzy,u.value.prefix=y.prefix}catch{}}return u.value}function _(w){const p=w.key;if(p==="ArrowDown")w.preventDefault(),a.value++,a.value>=r.value.length&&(a.value=0),k();else if(p==="ArrowUp")w.preventDefault(),a.value--,a.value<0&&(a.value=r.value.length-1),k();else if(p==="Enter"&&(w.preventDefault(),a.value>-1)){const b=r.value[a.value];b&&(document.location="/"+b.uri)}}function k(){setTimeout(()=>{const w=document.querySelector(".search-results > .selected");w&&w.scrollIntoView({block:"nearest"})},100)}function S(){o.value.$el.focus()}return pe(()=>r.value,w=>{w.forEach(p=>{console.info({...p})})}),e({showSearch:m}),(w,p)=>{const b=Oe,y=Fe,v=Ve,_e=Me;return C(),ee(_e,{modelValue:I(n),"onUpdate:modelValue":p[1]||(p[1]=P=>te(n)?n.value=P:null),"hide-footer":"","hide-header":"","teleport-disabled":"",size:"lg",onShown:S},{default:E(({close:P})=>[z("div",{class:"search-form",onKeydown:_},[z("div",We,[z("label",{title:I(t)("search.title"),for:"search-input"},Ue,8,Pe),j(b,{variant:null,title:I(t)("search.close"),class:"p-0",onClick:P},{default:E(()=>[Qe]),_:2},1032,["title","onClick"])]),j(y,{ref_key:"input",ref:o,modelValue:I(c),"onUpdate:modelValue":p[0]||(p[0]=O=>te(c)?c.value=O:null),placeholder:I(t)("search.title"),class:"search-input",autofocus:"",onInput:h},null,8,["modelValue","placeholder"]),z("div",qe,[j(b,{title:I(t)("search.reset"),disabled:!I(d),onClick:l},{default:E(()=>[Ke]),_:1},8,["title","disabled"])])],32),j(ye,{name:"fade"},{default:E(()=>[I(r).length?(C(),$("div",Ge,[(C(!0),$(we,null,ve(I(r),(O,A)=>(C(),ee(v,{key:A,href:"/"+O.uri,class:be({selected:I(a)===A}),role:"option","aria-selected":String(I(a)===A),onMouseenter:ot=>a.value=A},{default:E(()=>[O.parent?(C(),$("div",Ye,L(O.parent.menutitle||O.parent.pagetitle)+" /",1)):se("",!0),D(" "+L(O.menutitle||O.pagetitle),1)]),_:2},1032,["href","class","aria-selected","onMouseenter"]))),128))])):se("",!0)]),_:1}),z("div",Ze,[z("span",null,[He,Xe,D(" "+L(I(t)("search.to_navigate")),1)]),z("span",null,[et,D(" "+L(I(t)("search.to_select")),1)]),z("span",null,[tt,D(" "+L(I(t)("search.to_close")),1)])])]),_:1},8,["modelValue"])}}}),it=ce({__name:"app",setup(i){const e=F();function t(s){e.value.showSearch(s)}return window.mmxSearch.run=t,(s,n)=>(C(),$("div",null,[j(nt,{ref_key:"search",ref:e},null,512)]))}});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("mmx-search-root");i&&(Ie("mmx-search"),ze(it).use(ke()).mount(i))});
