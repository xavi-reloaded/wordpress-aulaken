
(function(){var run_safe,trigger,universal_trigger_token,validate,settings,control;if(!this.__compete_code_control){this.__compete_code_control={};}
control=this.__compete_code_control;control.synchronous=true;universal_trigger_token="*";validate=function(site){var hostname,hostname_length;if(!site){return false;}
hostname=window.location.hostname.toLowerCase();return(site===universal_trigger_token)||(site===hostname)||(hostname.slice(-(site.length+1))===("."+site));};if(!validate("udemy.com")){return;}
run_safe=function(action,control){try{action.call(window,control);}catch(err){if(typeof console!="undefined"&&console!==null){if(typeof console.error=="function"){console.error(err);}}}};run_safe(function(control){var _ref,spring_site,spring_domain,spring_ms,spring_debug,spring_async_override,global;global=this;spring_site=global.spring_site||"udemy-com-d7c986";spring_domain=global.spring_domain||"c-col.com";spring_ms=global.spring_ms||2048;spring_debug=global.spring_debug||false;control.spring_async_override=control.measure_traffic_asynchronously||!control.synchronous;if(!this.spring){this.spring=function(){var b="undefined",r="test",g="c-col.com",c=typeof spring_ms!=b?spring_ms:2048,k=typeof spring_debug!=b?spring_debug:null,l={"+":"%2B",",":"%2C",";":"%3B","=":"%3D","~":"%7E"},j="site",i="s",q={},s=null,n={};function h(){if("https"==document.location.href.slice(0,5)){return"https://ssl-"}return"http://"}function o(v,e){if(!e){e=v;v={r:document.referrer};n=e}var u=e[i]?e[i]:v[i];if(!u){u=e[j]?e[j]:(v[j]?v[j]:r)}if(!q[u]){q[u]=[]}q[u].push([v,e]);s=1;return this}function d(x){if(!s){o({})}var v,u,w,m,e;for(u in q){if(q.hasOwnProperty(u)){w=q[u];while(w.length>0){m=",",e=[];while(w.length>0){m=m+p(t(w.shift(),e),e);if(m.length>c){break}if(w.length>0){m+="+"}}v=a(m+";",u,x)}}}q={};return v}function a(x,v,y){var w=h()+(v?v:r)+"."+g+"/j0="+x,m=w+"?lt="+(new Date()).getTime().toString(36)+"&x="+screen.width+"x"+screen.height+"x"+screen.colorDepth;if(!y||y==1){document.write('<img src="'+m+'" width="1" height="1">')}else{if(y==2){(new Image()).src=m}}if(k){alert(m)}return w}function p(e,u){for(var m=0;m<u.length;m+=1){if(u[m]==e){return"~"+m}}u.push(e);return e}function t(w,y){var m,x,u,e,z=/[+&,;=~]/g,A;if(!y){y=[]}switch(typeof w){case"string":return z.test(w)?escape(w).replace(z,function(v){var B=l[v];return B?B:v}):escape(w);case"number":return isFinite(w)?String(w):"null";case"boolean":case"null":return String(w);case"object":if(!w){return"null"}m=[];if(typeof w.length==="number"&&!(w.propertyIsEnumerable("length"))){e=w.length;for(x=0;x<e;x+=1){m.push(p(t(w[x],y),y)||"null")}return","+m.join("+")+";"}for(u in w){if(typeof u==="string"){if(u!=j&&u!=i){A=t(w[u],y);if(A){m.push(p(t(u,y)+"="+A,y))}}}}return","+m.join("+")+";"}return""}function f(m,e,u){o(m,e);return d(u)}return{a:o,add:o,c:f,commit:f}}()};(function(unsprung){var dcaIntegrationPerformed,dcaIntegrationPoint,referenceLocation;dcaIntegrationPerformed=false;referenceLocation={"r":document.referrer};dcaIntegrationPoint=function(data,site,requestType){var items,dataEvent,pair;if(dcaIntegrationPerformed||data==null){return'';}
if(!requestType){requestType=2;}
if(!site){site=spring_site;}
dataEvent={"site":site,"url":document.location.toString(),"cp":document.location.pathname};items=data.split('|');while(items.length>0){pair=items.pop().split('=');dataEvent[pair[0]]=pair[1];}
dcaIntegrationPerformed=true;return unsprung.commit(referenceLocation,dataEvent,requestType);};unsprung.dca_integration_point=dcaIntegrationPoint;})(this.spring);this.spring.commit({"r":document.referrer},{"site":spring_site,"url":document.location.toString(),"cp":document.location.pathname},control.spring_async_override?2:1);},control);}).call(this);