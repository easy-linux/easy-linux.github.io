import{u as a,r as n,j as s,L as o,O as i}from"../main.js";import{P as d}from"./Post-BL6IsOEB.js";const u=()=>{const t=a(),r=n.useMemo(()=>t?t.map(e=>s.jsx(o,{to:`/posts/${e.id}`,className:"link",children:s.jsx(d,{post:e})},e.id)):null,[t]);return s.jsxs("div",{children:[s.jsx("div",{className:"header",children:"Posts"}),s.jsx("div",{children:r}),s.jsx(i,{})]})};export{u as Posts,u as default};