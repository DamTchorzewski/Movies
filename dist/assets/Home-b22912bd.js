import{u as c,r as l,Q as v,j as e,L as x,a as d}from"./index-51b8e8f6.js";import{u}from"./useMovies-51f72b0a.js";import{u as _,A as g}from"./api-4db73f6a.js";const L="_moviesList_16gxn_1",f="_moviesItem_16gxn_6",p="_moviesTitle_16gxn_10",h="_title_16gxn_19",t={moviesList:L,moviesItem:f,moviesTitle:p,title:h},y=()=>{const[n,i]=u(),[a,o]=_(),m=c();return l.useEffect(()=>{(async()=>{try{o(!0);const s=await g.getTrendingMovies();i(s)}catch(s){console.error(s.stack),v.error("Ups, something went wrong 🙁")}finally{o(!1)}})()},[i,o]),e.jsxs("section",{children:[e.jsx("h1",{className:t.title,children:"Trending today"}),e.jsx("ul",{className:t.moviesList,children:n.map(({id:s,title:r})=>e.jsx("li",{className:t.moviesItem,children:e.jsx(x,{to:`movies/${s}`,state:{from:m},className:t.moviesTitle,children:r})},s))}),e.jsx(d,{isLoading:a})]})};export{y as default};
