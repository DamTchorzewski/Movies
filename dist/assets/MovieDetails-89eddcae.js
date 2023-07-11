import{r as i,c as u,u as B,Q as b,j as e,L as g,N as d,d as w,a as h,O}from"./index-51b8e8f6.js";import{u as S,A as T}from"./api-4db73f6a.js";const G="_backBtnBox_19w95_1",A="_backBtn_19w95_1",y="_backLink_19w95_21",M="_movie_19w95_25",P="_movieImg_19w95_36",D="_noPhoto_19w95_43",E="_movieSection_19w95_52",R="_movieTitle_19w95_59",$="_movieScore_19w95_65",U="_movieScoreText_19w95_69",z="_movieOverviewBox_19w95_73",C="_movieOverview_19w95_73",F="_movieOverviewText_19w95_83",Q="_movieGenres_19w95_87",q="_movieGenresList_19w95_92",H="_moreInfoBox_19w95_100",J="_moreInfo_19w95_100",K="_moreInfoList_19w95_111",V="_moreInfoItem_19w95_116",W="_moreInfoLink_19w95_120",X="_isActive_19w95_128",o={backBtnBox:G,backBtn:A,backLink:y,movie:M,movieImg:P,noPhoto:D,movieSection:E,movieTitle:R,movieScore:$,movieScoreText:U,movieOverviewBox:z,movieOverview:C,movieOverviewText:F,movieGenres:Q,movieGenresList:q,moreInfoBox:H,moreInfo:J,moreInfoList:K,moreInfoItem:V,moreInfoLink:W,isActive:X},ee=()=>{var r;const[f,t]=i.useState([]),[n,c]=S(!0),{id:m}=u(),I=B(),j=i.useRef(((r=I.state)==null?void 0:r.from)??"/");return i.useEffect(()=>{(async()=>{try{const s=await T.getMovieDetails(m);t([s])}catch(s){console.error(s.stack),b.error("Ups, something went wrong 🙁")}finally{c(!1)}})()},[t,c,m]),e.jsxs(e.Fragment,{children:[!n&&e.jsx("div",{className:o.backBtnBox,children:e.jsx("button",{type:"button",className:o.backBtn,children:e.jsx(g,{to:j.current,className:o.backLink,children:"Go back"})})}),f.map(({id:s,poster_path:a,tagline:v,title:k,release_date:l,vote_average:N,overview:_,genres:x})=>e.jsxs("div",{className:o.movie,children:[a?e.jsx("img",{src:`https://image.tmdb.org/t/p/original${a}`,alt:v||"Movie photo",className:o.movieImg,loading:"lazy"}):e.jsx("p",{className:o.noPhoto,children:"No photo"}),e.jsxs("section",{className:o.movieSection,children:[e.jsx("h1",{className:o.movieTitle,children:`${k} (${l?l.slice(0,4):"No date"})`}),e.jsxs("div",{className:o.movieOverviewBox,children:[e.jsx("p",{className:o.movieOverview,children:"Overview"}),e.jsx("p",{className:o.movieOverviewText,children:_||"No description"})]}),e.jsxs("p",{className:o.movieScore,children:[e.jsx("span",{className:o.movieScoreText,children:"User score:"})," ",Math.round(N*10),"%"]}),e.jsx("p",{className:o.movieGenres,children:"Genres"}),x.length>0?e.jsx("ul",{className:o.movieGenresList,children:x.map(({id:L,name:p})=>e.jsx("li",{children:p},L))}):e.jsx("p",{children:"No genres"})]})]},s)),!n&&e.jsxs("div",{className:o.moreInfoBox,children:[e.jsx("p",{className:o.moreInfo,children:"Additional information"}),e.jsxs("ul",{className:o.moreInfoList,children:[e.jsx("li",{className:o.moreInfoItem,children:e.jsx(d,{to:"cast",className:({isActive:s})=>w(o.moreInfoLink,s&&o.isActive),children:"Cast"})}),e.jsx("li",{className:o.moreInfoItem,children:e.jsx(d,{to:"reviews",className:({isActive:s})=>w(o.moreInfoLink,s&&o.isActive),children:"Reviews"})})]})]}),e.jsx(i.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(O,{})}),e.jsx(h,{isLoading:n})]})};export{ee as default};
