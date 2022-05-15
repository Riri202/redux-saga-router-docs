"use strict";(self.webpackChunkredux_saga_router_docs=self.webpackChunkredux_saga_router_docs||[]).push([[162],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3,title:"Getting Started"},l=void 0,u={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Getting Started",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/redux-saga-router-docs/docs/getting-started",editUrl:"https://github.com/infonomic/redux-saga-router-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/redux-saga-router-docs/docs/overview"},next:{title:"Locations",permalink:"/redux-saga-router-docs/docs/locations"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install required dependencies",id:"install-required-dependencies",level:3},{value:"Import Infonomic&#39;s Redux-saga Router",id:"import-infonomics-redux-saga-router",level:3},{value:"Create a Root Reducer with router",id:"create-a-root-reducer-with-router",level:3},{value:"Create Location template with example page components",id:"create-location-template-with-example-page-components",level:3},{value:"Create Routes file",id:"create-routes-file",level:3},{value:"Create a Main Layout",id:"create-a-main-layout",level:3},{value:"Configure Redux Store and Redux Saga Middleware",id:"configure-redux-store-and-redux-saga-middleware",level:3},{value:"Create Root Saga",id:"create-root-saga",level:3},{value:"Add the Redux Store Provider to React",id:"add-the-redux-store-provider-to-react",level:3},{value:"Editing App.js",id:"editing-appjs",level:3},{value:"Result",id:"result",level:3}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Our notes below describe starting a new React project with our router. The router module and a working boilerplate application is available here... ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infonomic/redux-saga-router"},"https://github.com/infonomic/redux-saga-router"),"  "),(0,o.kt)("p",null,"Assuming you have everything you need to start a React App like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App")," then go ahead and initialize a new React application."),(0,o.kt)("p",null,"We're using classic Yarn here in our example, but of course npm would work fine as well."),(0,o.kt)("h3",{id:"install-required-dependencies"},"Install required dependencies"),(0,o.kt)("p",null,"After creating your project, install the following dependencies then start React."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd [project-name]\n$ yarn add redux react-redux redux-saga reselect immer lodash\n$ yarn start\n")),(0,o.kt)("p",null,"Open a browser ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),'.\nIt will render React Logo and display a message "Edit ',(0,o.kt)("code",null,"src/App.js"),' and save to reload." the page.'),(0,o.kt)("h3",{id:"import-infonomics-redux-saga-router"},"Import Infonomic's Redux-saga Router"),(0,o.kt)("p",null,"Download the router module from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infonomic/redux-saga-router"},"https://github.com/infonomic/redux-saga-router")," and place the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga-router")," folder in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-git"}," \u251c\u2500\u2500 README.md\n \u251c\u2500\u2500 package.json\n \u251c\u2500\u2500 public\n \u2502   \u251c\u2500\u2500 favicon.ico\n \u2502   \u2514\u2500\u2500 index.html\n \u251c\u2500\u2500 src\n \u2502   \u251c\u2500\u2500 App.css\n \u2502   \u251c\u2500\u2500 App.js\n \u2502   \u251c\u2500\u2500 App.test.js\n \u2502   \u251c\u2500\u2500 index.css\n \u2502   \u251c\u2500\u2500 index.js\n \u2502   \u251c\u2500\u2500 logo.svg\n+\u2502   \u2514\u2500\u2500 lib\n+\u2502       \u2514\u2500\u2500 redux-saga-router\n \u2514\u2500\u2500 yarn.lock\n")),(0,o.kt)("h3",{id:"create-a-root-reducer-with-router"},"Create a Root Reducer with router"),(0,o.kt)("p",null,"Create a rootReducer.js at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/store/rootReducer.js")," and import ",(0,o.kt)("inlineCode",{parentName:"p"},"createRouterReducer")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"../lib/redux-saga-router"),"\nAfter importing createRouterReducer file, write the rootReducer and export the root reducer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store/rootReducer.js"',title:'"src/store/rootReducer.js"'},"import { combineReducers } from 'redux'\nimport { createRouterReducer } from '../lib/redux-saga-router'\n\nconst rootReducer = combineReducers({\n    router: createRouterReducer(),\n})\n\nexport default rootReducer\n")),(0,o.kt)("h3",{id:"create-location-template-with-example-page-components"},"Create Location template with example page components"),(0,o.kt)("p",null,"Add location template file by creating a location.js ",(0,o.kt)("inlineCode",{parentName:"p"},"src/modules/home/location.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/modules/home/location.js"',title:'"src/modules/home/location.js"'},"import { createLocationTemplate } from '../../lib/redux-saga-router'\n\nexport default {\n  home: createLocationTemplate({\n    name: 'home',\n    path: '/',\n  }),\n}\n")),(0,o.kt)("p",null,"And HomePage component ",(0,o.kt)("inlineCode",{parentName:"p"},"src/modules/home/components/HomePage.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/modules/home/components/HomePage.js"',title:'"src/modules/home/components/HomePage.js"'},"import React from 'react'\n\nconst Hompage = () => (\n    <div>\n        <h1>Home Page</h1>\n    </div>\n)\n\nexport default Hompage\n")),(0,o.kt)("p",null,"You can create multiple templates. For instance, we will have two location templates files HomePage.js and NewsPage.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/modules/news/location.js"',title:'"src/modules/news/location.js"'},"import { createLocationTemplate } from '../../lib/redux-saga-router'\n\nexport default {\n  news: createLocationTemplate({\n    name: 'news',\n    path: '/news',\n  }),\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/modules/news/components/NewsPage.js"',title:'"src/modules/news/components/NewsPage.js"'},"import React from 'react'\n\nconst NewsPage = () => (\n    <div>\n        <h1>News Page</h1>\n    </div>\n)\n\nexport default NewsPage\n")),(0,o.kt)("p",null,"Create a route template file for HomePage at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/modules/home/route.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/modules/home/route.js"',title:'"src/modules/home/route.js"'},"import * as L from '../../locationTemplates'\nimport HomePage from './components/HomePage'\n\nexport default [\n  {\n    template: L.Home.home,\n    title: 'Home',\n    requiresAuth: false, // Access option\n    components: {\n      main: HomePage,\n    },\n  },\n]\n")),(0,o.kt)("p",null,"Create a route template file for NewsPage at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/modules/news/route.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/modules/news/route.js"',title:'"src/modules/news/route.js"'},"import * as L from '../../locationTemplates'\nimport NewsPage from './components/NewsPage'\n\nexport default [\n  {\n    template: L.News.news,\n    title: 'News',\n    requiresAuth: false, // Access option\n    components: {\n      main: NewsPage,\n    },\n  },\n]\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Location template including paths and parameters are defined separately from routes. ",(0,o.kt)("br",null),"\nFor more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"location.js")," file check this ",(0,o.kt)("a",{parentName:"p",href:"/docs/locations"},"doc"),"."))),(0,o.kt)("p",null,"Group Location template up by creating a locationTemplates.js file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/locationTemplates.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Home from './modules/home/location'\n\nexport { default as Home } from './modules/home/location'\nexport { default as News } from './modules/news/location'\n\nexport const defaultLocation = Home.home()\n")),(0,o.kt)("h3",{id:"create-routes-file"},"Create Routes file"),(0,o.kt)("p",null,"create a routes.js file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes.js")," by using ",(0,o.kt)("inlineCode",{parentName:"p"},"prepareRoutes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes.js"',title:'"src/routes.js"'},"import { prepareRoutes } from './lib/redux-saga-router'\n\nimport homeRoutes from './modules/home/route'\nimport newsRoutes from './modules/news/route'\n\nexport default prepareRoutes([...homeRoutes, ...newsRoutes])\n\n")),(0,o.kt)("h3",{id:"create-a-main-layout"},"Create a Main Layout"),(0,o.kt)("p",null,"Create a main layout file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/ui/MainLayout.js")," by using ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterView")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga-router")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/ui/MainLayout.js"',title:'"src/ui/MainLayout.js"'},"import { CLEAR, RouterLink, RouterView } from '../lib/redux-saga-router'\nimport * as L from '../locationTemplates'\n\nfunction MainLayout() {\n    return (\n            <div\n                style={{\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    flexDirection: 'column',\n                    height: '100vh'\n                }}\n            >\n                <RouterView name=\"main\" />\n                <div\n                    style={{\n                        display: 'flex',\n                        gap: '10px',\n                    }}\n                >\n                    <RouterLink to={L.Home.home()} mode={CLEAR} exact>\n                        Home\n                    </RouterLink>\n                    <RouterLink to={L.News.news()} mode={CLEAR} exact>\n                        News\n                    </RouterLink>\n                </div>\n            </div>\n    )\n}\n\nexport default MainLayout\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterLink")," see ",(0,o.kt)("a",{parentName:"p",href:"/docs/components#links"},"Link"),"."))),(0,o.kt)("p",null,"After completed creating all necessary files, add routes into the rootReducer.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-git",metastring:'title="src/store/rootReducer.js"',title:'"src/store/rootReducer.js"'},"  import { combineReducers } from 'redux'\n  import { createRouterReducer } from '../lib/redux-saga-router'\n+ import { defaultLocation } from '../locationTemplates'\n  \n  const rootReducer = combineReducers({\n-     router: createRouterReducer(),\n+     router: createRouterReducer(defaultLocation),\n  })\n  \n  export default rootReducer\n")),(0,o.kt)("h3",{id:"configure-redux-store-and-redux-saga-middleware"},"Configure Redux Store and Redux Saga Middleware"),(0,o.kt)("p",null,"Create index.js file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/store/configureStore.js")," ",(0,o.kt)("br",null),"\nimport the followings",(0,o.kt)("br",null)),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store/configureStore.js"',title:'"src/store/configureStore.js"'},"import { createStore, applyMiddleware } from 'redux'\nimport createSagaMiddleware from 'redux-saga'\nimport rootReducer from './rootReducer'\n\nexport default function configureStore(initialState) {\n    const sagaMiddleware = createSagaMiddleware()\n\n    const store = createStore(\n        rootReducer,\n        initialState,\n        applyMiddleware(\n            sagaMiddleware\n        )\n    )\n\n    store.runSaga = sagaMiddleware.run\n    return store\n}\n")),(0,o.kt)("h3",{id:"create-root-saga"},"Create Root Saga"),(0,o.kt)("p",null,"Create a rootSaga file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/store/rootSaga.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { all, call, fork } from 'redux-saga/effects'\n\nimport { watchers as routerWatchers, initializeRouteSaga } from '../lib/redux-saga-router'\n\nexport default (routes) =>\n    function* rootSaga() {\n        yield fork(routerWatchers, routes)\n        yield call(initializeRouteSaga, routes, undefined)\n    }\n\n")),(0,o.kt)("h3",{id:"add-the-redux-store-provider-to-react"},"Add the Redux Store Provider to React"),(0,o.kt)("p",null,"After store and saga is created, add ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," around the application in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js")," and pass store as a prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-git",metastring:'title="src/index.js"',title:'"src/index.js"'},"  import React from 'react'\n  import ReactDOM from 'react-dom/client'\n+ import { Provider } from 'react-redux'\n  \n  import './index.css'\n  import App from './App'\n  import reportWebVitals from './reportWebVitals'\n+ import configureStore from './store/configureStore'\n+ import rootSaga from './store/rootSaga'\n+ import routes from './routes'\n  \n  const root = ReactDOM.createRoot(document.getElementById('root'))\n+ const store = configureStore()\n+ store.runSaga(rootSaga(routes))\n\n  root.render(\n    <React.StrictMode>\n+     <Provider store={store}>\n        <App />\n+     </Provider>\n    </React.StrictMode>\n  )\n")),(0,o.kt)("h3",{id:"editing-appjs"},"Editing App.js"),(0,o.kt)("p",null,"Replace the entire code in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," with the snippet below. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { Router, RouterView } from './lib/redux-saga-router'\nimport routes from './routes'\nimport MainLayout from './ui/MainLayout'\n\nfunction App() {\n    return (\n        <Router routes={routes}>\n            <RouterView name=\"layout\" defaultComponent={MainLayout} />\n        </Router>\n    )\n}\n\nexport default App\n")),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result",src:r(1326).Z,width:"632",height:"610"})))}m.isMDXComponent=!0},1326:function(e,t,r){t.Z=r.p+"assets/images/result-194b55e69e80371ce46f4aa177b9c5bc.gif"}}]);