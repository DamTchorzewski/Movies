import{r as h,c as _,Q as j,j as s,a as d}from"./index-51b8e8f6.js";import{u as g,A as p}from"./api-4db73f6a.js";const x="_castList_4yj2z_1",C="_castItem_4yj2z_9",N="_castImg_4yj2z_23",y="_noPhoto_4yj2z_31",u="_castName_4yj2z_38",I="_castCharacter_4yj2z_44",z="_noCast_4yj2z_49",t={castList:x,castItem:C,castImg:N,noPhoto:y,castName:u,castCharacter:I,noCast:z},w=()=>{const[o,e]=h.useState([]),[n,r]=g(!0),{id:i}=_();return h.useEffect(()=>{(async()=>{try{const a=await p.getMovieCredits(i);e(a.cast)}catch(a){console.error(a.stack),j.error("Ups, something went wrong 🙁")}finally{r(!1)}})()},[e,r,i]),s.jsxs(s.Fragment,{children:[o.length>0&&s.jsx("ul",{className:t.castList,children:o.map(({id:a,profile_path:m,name:c,character:l})=>s.jsxs("li",{className:t.castItem,children:[m?s.jsx("img",{src:`https://image.tmdb.org/t/p/original${m}`,alt:`${c||"Actor"}'s photo`,className:t.castImg,loading:"lazy"}):s.jsx("p",{className:t.noPhoto,children:"No photo"}),s.jsx("p",{className:t.castName,children:c||"Unknown"}),s.jsxs("p",{className:t.castCharacter,children:["Character: ",l||"Unknown"]})]},a))}),!o.length&&!n&&s.jsx("p",{className:t.noCast,children:"There is no cast for this movie"}),s.jsx(d,{isLoading:n})]})};export{w as default};
