import{j as s,u as n,a as d,r as c,L as l}from"../main.js";const t=({post:r})=>s.jsxs("article",{className:"block",children:[s.jsx("h1",{children:r.title}),s.jsx("div",{children:r.body})]}),x=()=>{const{id:r}=n(),e=d(),i=c.useMemo(()=>e?Array.isArray(e)?e.map(a=>s.jsx(l,{to:`/posts/${a.id}`,className:"link",children:s.jsx(t,{post:a})},a.id)):s.jsx(t,{post:e}):null,[e]);return s.jsxs("div",{children:[r&&s.jsx("div",{className:"header",children:"Post"}),!r&&s.jsx("div",{className:"header",children:"Posts"}),s.jsx("div",{children:i})]})};export{x as Posts,x as default};