import{a as o,e as t,g as r,_ as a,l as s}from"./index-a799cd14.js";import{P as l}from"./page-1f10ad41.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-11a51fd9.js"),["./appDialogsManager-11a51fd9.js","./avatar-3c8676df.js","./button-08cde191.js","./index-a799cd14.js","./index-23920502.css","./page-1f10ad41.js","./wrapEmojiText-6ff3c175.js","./scrollable-2876b35d.js","./putPreloader-f36182d4.js","./htmlToSpan-9779ccdf.js","./countryInputField-f3603a41.js","./textToSvgURL-c6ebb454.js","./codeInputField-7cee29f9.js","./appDialogsManager-ef67a5b9.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-5f54f21b.js.map