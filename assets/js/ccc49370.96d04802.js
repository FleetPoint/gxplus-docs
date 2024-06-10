"use strict";(self.webpackChunkgxplus_docs=self.webpackChunkgxplus_docs||[]).push([[249],{4410:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(6372);var i=t(3394),s=t(5827),a=t(943),o=t(8515),l=t(6387),r=t(4615),c=t(7985),d=t(1416),u=t(216);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.e)(),{title:t,description:i,date:a,tags:l,authors:r,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.be,{title:t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=t(9862),f=t(7143);function p(){const e=(0,f.J)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=t(8187),x=t(6956);function b(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:s}=(0,o.e)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:p}=d;return(0,u.jsxs)(l.A,{sidebar:n,toc:!h&&s.length>0?(0,u.jsx)(v.A,{toc:s,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(x.A,{}),(0,u.jsx)(r.A,{children:t}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function j(e){const n=e.content;return(0,u.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.e3,{className:(0,i.A)(a.G.wrapper.blogPages,a.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},8187:(e,n,t)=>{t.d(n,{A:()=>c});t(6372);var i=t(3394),s=t(8615);const a={tableOfContents:"tableOfContents_Mg1b",docItemContainer:"docItemContainer_aMSI"};var o=t(216);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,i.A)(a.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(s.A,{...t,linkClassName:l,linkActiveClassName:r})})}},8615:(e,n,t)=>{t.d(n,{A:()=>f});var i=t(6372),s=t(6862);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>l(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(3240),m=t(216);function g(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,s.p)(),p=c??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>o({toc:a(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:v}}),[l,r,p,v])),(0,m.jsx)(h,{toc:x,className:t,linkClassName:l,...g})}},6956:(e,n,t)=>{t.d(n,{A:()=>g});t(6372);var i=t(3394),s=t(7985),a=t(9862),o=t(216);function l(){return(0,o.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(943),u=t(2801);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);