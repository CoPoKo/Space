!function(e){var n={};function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(r,s,function(n){return e[n]}.bind(null,s));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=24)}([function(e,n,t){"use strict";t.r(n),t.d(n,"dash_nav",(function(){return r}));const r=["home","search","setting"]},function(e,n){e.exports='<!DOCTYPE html>\r\n<html lang="en" class="no-js">\r\n\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <meta robots="noindex, nofollow" />\r\n  <meta http-equiv="x-dns-prefetch-control" content="on" />\r\n  <link rel="dns-prefetch" href="::PRECONNECT::" />\r\n  <link rel="preconnect" href="::PRECONNECT::" crossorigin />\r\n  <meta name="renderer" content="webkit" />\r\n  <meta name="force-rendering" content="webkit" />\r\n  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />\r\n  <meta name="HandheldFriendly" content="True" />\r\n  <meta name="apple-mobile-web-app-capable" content="yes" />\r\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />\r\n  <meta content="no-transform" http-equiv="Cache-Control" />\r\n  <meta content="no-siteapp" http-equiv="Cache-Control" />\r\n  <title>Error</title>\r\n  <link rel="icon" type="image/png" sizes="16x16" href="::CDN_SPACE::/favicon/favicon-16x16.png" />\r\n  <link rel="icon" type="image/png" sizes="32x32" href="::CDN_SPACE::/favicon/favicon-32x32.png" />\r\n  <link rel="icon" type="image/png" sizes="96x96" href="::CDN_SPACE::/favicon/favicon-96x96.png" />\r\n  <link rel="stylesheet" type="text/css" href="::CDN_SPACE::/css/error.css" />\r\n</head>\r\n\r\n<body>\r\n  <div class="container">\r\n    <div class="content">\r\n      <div id="large-header" class="large-header">\r\n        <div id="parallax-window"></div>\r\n        <canvas id="header-canvas"></canvas>\r\n      </div>\r\n      <div class="codrops-header">\r\n        <h1>Error<span>::ErrorInfo::</span></h1>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\r\n        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">\r\n        <defs>\r\n          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />\r\n        </defs>\r\n        <g class="parallax">\r\n          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(135,206,235,0.7)" />\r\n          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(135,206,235,0.5)" />\r\n          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(135,206,235,0.3)" />\r\n          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(135,206,235,1)" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n  <script src="::CDN_SPACE::/js/error.js"><\/script>\r\n</body>\r\n\r\n</html>'},function(e,n){e.exports='<!DOCTYPE html>\r\n<html lang="zh">\r\n\r\n<head>\r\n  <meta charset="UTF-8" />\r\n  <meta robots="noindex, nofollow" />\r\n  <meta http-equiv="x-dns-prefetch-control" content="on" />\r\n  <link rel="dns-prefetch" href="::PRECONNECT::" />\r\n  <link rel="preconnect" href="::PRECONNECT::" crossorigin />\r\n  <meta name="renderer" content="webkit" />\r\n  <meta name="force-rendering" content="webkit" />\r\n  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />\r\n  <meta name="HandheldFriendly" content="True" />\r\n  <meta name="apple-mobile-web-app-capable" content="yes" />\r\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />\r\n  <title>Auth | CoPoKo Space</title>\r\n  <link rel="icon" type="image/png" sizes="16x16" href="::CDN_SPACE::/favicon/favicon-16x16.png" />\r\n  <link rel="icon" type="image/png" sizes="32x32" href="::CDN_SPACE::/favicon/favicon-32x32.png" />\r\n  <link rel="icon" type="image/png" sizes="96x96" href="::CDN_SPACE::/favicon/favicon-96x96.png" />\r\n  <link rel="stylesheet" href="::CDN_SPACE::/css/auth.css" />\r\n  <style>\r\n    .grecaptcha-badge {\r\n      display: none;\r\n    }\r\n    body{\r\n      background: black;\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <main class="auth-main wrapper">\r\n    <div id="auth-block" class="auth-block">\r\n      <h1>Welcome</h1>\r\n      <div id="form" class="form-horizontal" method="POST" action="/space/auth">\r\n        <div class="form-group">\r\n          <label for="inputName" class="col-sm-2 control-label">Name</label>\r\n          <div class="col-sm-10">\r\n            <input type="text" name="name" class="form-control" id="inputName" placeholder="Name" required="required"\r\n              autocomplete="off" />\r\n          </div>\r\n        </div>\r\n        <div class="form-group">\r\n          <label for="inputPassword" class="col-sm-2 control-label">Password</label>\r\n          <div class="col-sm-10">\r\n            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password"\r\n              required="required" autocomplete="off" />\r\n          </div>\r\n        </div>\r\n        <div class="form-group">\r\n          <div class="col-sm-offset-5 col-sm-8">\r\n            <button type="submit" id="signin" class="btn btn-default btn-auth">\r\n              Sign in\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ul class="bg-bubbles">\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n      <li></li>\r\n    </ul>\r\n  </main>\r\n  <script src="https://recaptcha.net/recaptcha/api.js?render=::reCAPTCHA_CLIENT::"><\/script>\r\n  <script>\r\n    document.getElementById("signin").addEventListener("click", async () => {\r\n      const name = document.getElementById("inputName").value;\r\n      const password = document.getElementById("inputPassword").value;\r\n      document.getElementById("auth-block").innerHTML =\r\n        "<h1>我们正在进行人机验证...</h1>";\r\n      grecaptcha.ready(() => {\r\n        grecaptcha\r\n          .execute("::reCAPTCHA_CLIENT::", { action: "space" })\r\n          .then(async (t) => {\r\n            document.getElementById("auth-block").innerHTML =\r\n              "<h1>我们正在验证您的登录凭据...</h1>";\r\n            const res = await (\r\n              await fetch(\r\n                new Request("/space/auth", {\r\n                  method: "POST",\r\n                  headers: {\r\n                    "Content-Type": "application/x-www-form-urlencoded",\r\n                  },\r\n                  body: `name=${name}&password=${password}&token=${t}`,\r\n                })\r\n              )\r\n            ).json();\r\n            if (res.success) {\r\n              document.getElementById("auth-block").innerHTML =\r\n                "<h1>登录成功，即将跳转！</h1>";\r\n              document.location.href = `${document.location.origin}/space/dash`;\r\n            } else {\r\n              document.getElementById("auth-block").innerHTML =\r\n                "<h1>无效的登录凭据 :(</h1>";\r\n            }\r\n          });\r\n      });\r\n    });\r\n  <\/script>\r\n</body>\r\n\r\n</html>'},function(e,n){e.exports="User-agent: * \r\nDisallow: /"},function(e,n){e.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta robots="noindex, nofollow" />\n  <meta http-equiv="x-dns-prefetch-control" content="on" />\n  <link rel="dns-prefetch" href="::PRECONNECT::" />\n  <link rel="preconnect" href="::PRECONNECT::" crossorigin />\n  <meta name="renderer" content="webkit" />\n  <meta name="force-rendering" content="webkit" />\n  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />\n  <meta name="HandheldFriendly" content="True" />\n  <meta name="apple-mobile-web-app-capable" content="yes" />\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />\n  <meta content="no-transform" http-equiv="Cache-Control" />\n  <meta content="no-siteapp" http-equiv="Cache-Control" />\n  <title>CoPoKo Space</title>\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">\n  <link rel="stylesheet" href="::CDN::/@fortawesome/fontawesome-free@6/css/all.min.css">\n  <link rel="stylesheet" href="::CDN::/@sweetalert2/theme-bootstrap-4@5.0.11/bootstrap-4.min.css">\n  <link rel="stylesheet" href="::CDN::/admin-lte@3.1.0/dist/css/adminlte.min.css">\n  <style>\n    ::-webkit-scrollbar-track-piece {\n      background-color: #f8f8f8;\n    }\n    ::-webkit-scrollbar {\n      width: 9px;\n      height: 9px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background-color: #49b1f5;\n      background-image: -webkit--webkit-linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.4) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.4) 50%,\n        rgba(255, 255, 255, 0.4) 75%,\n        transparent 75%,\n        transparent\n      );\n      background-image: -webkit--moz-linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.4) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.4) 50%,\n        rgba(255, 255, 255, 0.4) 75%,\n        transparent 75%,\n        transparent\n      );\n      background-image: -webkit--o-linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.4) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.4) 50%,\n        rgba(255, 255, 255, 0.4) 75%,\n        transparent 75%,\n        transparent\n      );\n      background-image: -webkit--ms-linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.4) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.4) 50%,\n        rgba(255, 255, 255, 0.4) 75%,\n        transparent 75%,\n        transparent\n      );\n      background-image: -webkit-linear-gradient(\n        45deg,\n        rgba(255, 255, 255, 0.4) 25%,\n        transparent 25%,\n        transparent 50%,\n        rgba(255, 255, 255, 0.4) 50%,\n        rgba(255, 255, 255, 0.4) 75%,\n        transparent 75%,\n        transparent\n      );\n      border-radius: 2em;\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      background-color: #49b1f6;\n    }\n    .brand-text{\n      text-align: center !important;\n      display: block !important;\n    }\n    input{\n      color: inherit !important;\n    }\n  </style>\n</head>\n<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">\n<div class="wrapper">\n\n  \x3c!-- Navbar --\x3e\n  <nav class="main-header navbar navbar-expand navbar-dark">\n    \x3c!-- Left navbar links --\x3e\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>\n      </li>\n    </ul>\n\n    \x3c!-- Right navbar links --\x3e\n    <ul class="navbar-nav ml-auto">\n\n    </ul>\n  </nav>\n  \x3c!-- /.navbar --\x3e\n\n  \x3c!-- Main Sidebar Container --\x3e\n  <aside class="main-sidebar sidebar-dark-primary elevation-4">\n    \x3c!-- Brand Logo --\x3e\n    <a href="/space/dash" class="brand-link">\n      <span class="brand-text font-weight-light">CoPoKo Space</span>\n    </a>\n\n    \x3c!-- Sidebar --\x3e\n    <div class="sidebar">\n\n      \x3c!-- Sidebar Menu --\x3e\n      <nav class="mt-2">\n        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">\n          ::DASH_NAV::\n        </ul>\n      </nav>\n      \x3c!-- /.sidebar-menu --\x3e\n\n  \n    </div>\n    \x3c!-- /.sidebar --\x3e\n  </aside>\n\n  \x3c!-- Content Wrapper. Contains page content --\x3e\n  <div class="content-wrapper">\n    \x3c!-- Main content --\x3e\n    ::DASH_CONTENT::\n    \x3c!-- /.content --\x3e\n  </div>\n  \x3c!-- /.content-wrapper --\x3e\n\n</div>\n\x3c!-- ./wrapper --\x3e\n\n\x3c!-- REQUIRED SCRIPTS --\x3e\n<script src="::CDN::/jquery@3.6.0/dist/jquery.min.js"><\/script>\n<script src="::CDN::/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"><\/script>\n<script src="::CDN::/sweetalert2@11.4.14/dist/sweetalert2.min.js"><\/script>\n<script src="::CDN::/admin-lte@3.1.0/dist/js/adminlte.min.js"><\/script>\n\n\n::DASH_UTIL::\n\n::DASH_BODYEND::\n\n</body>\n</html>\n'},function(e,n,t){"use strict";t.r(n),t.d(n,"space_static_version",(function(){return r})),t.d(n,"space_cdn",(function(){return s})),t.d(n,"space_dns_prefetch",(function(){return a}));const r="1.0.1653038935402",s="https://fastly.jsdelivr.net/npm",a="https://fastly.jsdelivr.net"},function(e,n,t){var r={"./home/nav-item.html":7,"./search/nav-item.html":8,"./setting/nav-item.html":9};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=6},function(e,n){e.exports=""},function(e,n){e.exports='<li class="nav-item">\r\n  <a href="/space/dash/search" class="nav-link">\r\n    <i class="nav-icon fas fa-search"></i>\r\n    <p>\r\n      Search\r\n    </p>\r\n  </a>\r\n</li>'},function(e,n){e.exports='<li class="nav-item">\r\n  <a href="/space/dash/setting" class="nav-link">\r\n    <i class="nav-icon fas fa-gear"></i>\r\n    <p>\r\n      Setting\r\n    </p>\r\n  </a>\r\n</li>'},function(e,n,t){var r={"./home/content.html":11,"./search/content.html":12,"./setting/content.html":13};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=10},function(e,n){e.exports='<div class="container-fluid">\r\n  <h2 class="text-center display-4">Home</h2>\r\n</div>'},function(e,n){e.exports='\x3c!-- Content Header (Page header) --\x3e\r\n<section class="content-header">\r\n  <div class="container-fluid">\r\n    <h2 class="text-center display-4">Search</h2>\r\n  </div>\r\n</section>\r\n\r\n\x3c!-- Main content --\x3e\r\n<section class="content">\r\n  <div class="container-fluid">\r\n    <div class="row">\r\n      <div class="col-md-8 offset-md-2">\r\n        <form action="simple-results.html">\r\n          <div class="input-group input-group-lg">\r\n            <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here">\r\n            <div class="input-group-append">\r\n              <button type="submit" class="btn btn-lg btn-default">\r\n                <i class="fa fa-search"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class="row mt-3">\r\n      <div class="col-md-10 offset-md-1">\r\n        <div class="list-group">\r\n\r\n          <div class="list-group-item">\r\n            <div class="row">\r\n              <div class="col px-4">\r\n                <div>\r\n                  <h3>Lorem ipsum dolor sit amet</h3>\r\n                  <p class="mb-0">consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\r\n                    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>'},function(e,n){e.exports='\x3c!-- Content Header (Page header) --\x3e\r\n<section class="content-header">\r\n  <div class="container-fluid">\r\n    <h2 class="text-center display-4">Setting</h2>\r\n  </div>\r\n</section>\r\n\r\n\x3c!-- Main content --\x3e\r\n<section class="content">\r\n  <div id="card-set"></div>\r\n  <button id="add-project" type="button" class="btn btn-block btn-primary btn-lg">Add Project</button>\r\n</section>\r\n'},function(e,n,t){var r={"./home/bodyend.html":15,"./search/bodyend.html":16,"./setting/bodyend.html":17};function s(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=14},function(e,n){e.exports=""},function(e,n){e.exports=""},function(e,n){e.exports='<script>\r\nfunction rendererProjects(){\r\n  Space.KV.Get("setting").then(function (response) {\r\n  console.log(response);\r\n  Space.Setting=JSON.parse(response.value);\r\n  if (response.sucess&&!response.value) {\r\n    Space.KV.Put("setting","{}")\r\n    Space.Setting={};\r\n  }\r\n  CARD_HTML="";\r\n  Object.keys(Space.Setting).forEach(e=>{\r\n    CARD_HTML+=getCard(e);\r\n  });\r\n  document.getElementById("card-set").innerHTML=CARD_HTML;\r\n});\r\n}\r\nrendererProjects();\r\n\r\nfunction getKVItem(it,key,value){\r\n  return `<tr>\r\n    <td>\r\n      <p>${key}</p>\r\n    </td>\r\n    <td>\r\n      <p>${value}</p>\r\n    </td>\r\n    <td class="project-actions text-right">\r\n      <a id="edit-${it}-${key}" onclick="EditKVItem(this)" class="btn btn-info btn-sm">\r\n        <i class="fas fa-pencil-alt"> </i>\r\n        Edit\r\n      </a>\r\n      <a id="delete-${it}-${key}" onclick="DeleteKVItem(this)" class="btn btn-danger btn-sm">\r\n        <i class="fas fa-trash"> </i>\r\n        Delete\r\n      </a>\r\n    </td>\r\n  </tr>`;\r\n}\r\nfunction getCard(it){\r\n  KVItem_HTML=""\r\n  Object.keys(Space.Setting[it]).forEach(e=>{\r\n    KVItem_HTML+=getKVItem(it,e,Space.Setting[it][e]);\r\n  });\r\n  return `<div class="card collapsed-card">\r\n  <div class="card-header">\r\n    <h3 class="card-title">${it}</h3>\r\n    <div class="card-tools">\r\n      <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">\r\n        <i class="fas fa-plus"></i>\r\n      </button>\r\n      <button id="delete-project-${it}" type="button" class="btn btn-tool" title="Remove" onclick="ProjectDelete(this)">\r\n        <i class="fas fa-times"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class="card-body p-0" style="display: none;">\r\n    <table class="table table-striped projects">\r\n      <thead>\r\n        <tr>\r\n          <th>Key</th>\r\n          <th>Value</th>\r\n          <th style="width: 20%"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        ${KVItem_HTML}\r\n      </tbody>\r\n    </table>\r\n    <button id="add-kv-${it}" type="button" class="btn btn-block btn-primary btn-lg" onclick="ProjectAddKV(this)">Add KV</button>\r\n  </div>\r\n</div>`\r\n}\r\n\r\n$("#add-project").click((e)=>{\r\n  Swal.fire({\r\n    title: \'Type your project name\',\r\n    input: \'text\',\r\n    inputAttributes: {\r\n      autocapitalize: \'off\'\r\n    },\r\n    showCancelButton: true,\r\n    confirmButtonText: \'Add\',\r\n    showLoaderOnConfirm: true,\r\n    preConfirm: (key) => {\r\n      Space.Setting[key]={}\r\n      return Space.KV.Put("setting",JSON.stringify(Space.Setting)).then(function (response) {\r\n          console.log(response);\r\n          return response;\r\n        })\r\n        .catch(error => {\r\n          Swal.showValidationMessage(\r\n            `Request failed: ${error}`\r\n          )\r\n        })\r\n    },\r\n    allowOutsideClick: () => !Swal.isLoading()\r\n  }).then((result) => {\r\n    console.log(result);\r\n    if (result.isConfirmed) {\r\n      if (result.value.sucess) {\r\n        rendererProjects();\r\n        Toast.fire({\r\n          icon: \'success\',\r\n          title: `Add Project Success`\r\n        })\r\n      }\r\n    }\r\n  })\r\n})\r\nfunction ProjectAddKV(it){\r\n  let project=it.id.split("-")[2];\r\n  Swal.fire({\r\n    title: \'Type your key Value\',\r\n    html: \'<input id="swal-input1" class="swal2-input" placeholder="Key"><br/>\' +\r\n    \'<input id="swal-input2" class="swal2-input" placeholder="Value">\',\r\n    inputAttributes: {\r\n      autocapitalize: \'off\'\r\n    },\r\n    showCancelButton: true,\r\n    confirmButtonText: \'Add\',\r\n    showLoaderOnConfirm: true,\r\n    preConfirm: () => {\r\n      let key = document.getElementById(\'swal-input1\').value;\r\n      let value = document.getElementById(\'swal-input2\').value;\r\n      Space.Setting[project][key]=value;\r\n      console.log(Space.Setting);\r\n      return Space.KV.Put("setting",JSON.stringify(Space.Setting)).then(function (response) {\r\n          console.log(response);\r\n          return response;\r\n        })\r\n        .catch(error => {\r\n          Swal.showValidationMessage(\r\n            `Request failed: ${error}`\r\n          )\r\n        })\r\n    },\r\n    allowOutsideClick: () => !Swal.isLoading()\r\n  }).then((result) => {\r\n    console.log(result);\r\n    if (result.isConfirmed) {\r\n      if (result.value.sucess) {\r\n        rendererProjects();\r\n        Toast.fire({\r\n          icon: \'success\',\r\n          title: `Add KV Success`\r\n        })\r\n      }\r\n    }\r\n  })\r\n}\r\nfunction ProjectDelete(it) {\r\n  let project=it.id.split("-")[2];\r\n  Swal.fire({\r\n    title: \'Are you sure?\',\r\n    text: "You won\'t be able to revert this!",\r\n    icon: \'warning\',\r\n    showCancelButton: true,\r\n    confirmButtonColor: \'#3085d6\',\r\n    cancelButtonColor: \'#d33\',\r\n    confirmButtonText: \'Yes, delete it!\'\r\n  }).then((result) => {\r\n    if (result.value) {\r\n      delete Space.Setting[project];\r\n      Space.KV.Put("setting",JSON.stringify(Space.Setting)).then(function (response) {\r\n        console.log(response);\r\n        if (response.sucess) {\r\n          rendererProjects();\r\n          Toast.fire({\r\n            icon: \'success\',\r\n            title: `Deleted Project ${project}`\r\n          })\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\nfunction EditKVItem(it) {\r\n  let project=it.id.split("-")[1];\r\n  let key=it.id.split("-")[2];\r\n  let value = Space.Setting[project][key];\r\n  Swal.fire({\r\n    title: \'Type your key Value\',\r\n    html: \'<input id="swal-input1" class="swal2-input" placeholder="Key" value="\'+key+\'"><br/>\' +\r\n    \'<input id="swal-input2" class="swal2-input" placeholder="Value" value="\'+value+\'">\',\r\n    inputAttributes: {\r\n      autocapitalize: \'off\'\r\n    },\r\n    showCancelButton: true,\r\n    confirmButtonText: \'Edit\',\r\n    showLoaderOnConfirm: true,\r\n    preConfirm: () => {\r\n      delete Space.Setting[project][it.id.split("-")[2]];\r\n      let key = document.getElementById(\'swal-input1\').value;\r\n      let value = document.getElementById(\'swal-input2\').value;\r\n      Space.Setting[project][key]=value;\r\n      console.log(Space.Setting);\r\n      return Space.KV.Put("setting",JSON.stringify(Space.Setting)).then(function (response) {\r\n          console.log(response);\r\n          return response;\r\n        })\r\n        .catch(error => {\r\n          Swal.showValidationMessage(\r\n            `Request failed: ${error}`\r\n          )\r\n        })\r\n    },\r\n    allowOutsideClick: () => !Swal.isLoading()\r\n  }).then((result) => {\r\n    console.log(result);\r\n    if (result.isConfirmed) {\r\n      if (result.value.sucess) {\r\n        rendererProjects();\r\n        Toast.fire({\r\n          icon: \'success\',\r\n          title: `Editd KV ${key}`\r\n        })\r\n      }\r\n    }\r\n  })\r\n}\r\nfunction DeleteKVItem(it) {\r\n  let project=it.id.split("-")[1];\r\n  let key=it.id.split("-")[2];\r\n  Swal.fire({\r\n    title: \'Are you sure?\',\r\n    text: "You won\'t be able to revert this!",\r\n    icon: \'warning\',\r\n    showCancelButton: true,\r\n    confirmButtonColor: \'#3085d6\',\r\n    cancelButtonColor: \'#d33\',\r\n    confirmButtonText: \'Yes, delete it!\'\r\n  }).then((result) => {\r\n    if (result.value) {\r\n      delete Space.Setting[project][key];\r\n      Space.KV.Put("setting",JSON.stringify(Space.Setting)).then(function (response) {\r\n        console.log(response);\r\n        if (response.sucess) {\r\n          rendererProjects();\r\n          Toast.fire({\r\n            icon: \'success\',\r\n            title: `Deleted KV ${key}`\r\n          })\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n<\/script>'},function(e,n){e.exports='<script>\r\nSpace={}\r\nSpace.helper={\r\n  headers_json: {\r\n    "content-type": "application/json",\r\n    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",\r\n  }\r\n}\r\nSpace.KV={}\r\nSpace.KV.Get=(key)=>{\r\n  return fetch("/space/api/kv/get",{\r\n    method:"POST",\r\n    headers: Space.helper.headers_json,\r\n    body: JSON.stringify({\r\n      "key": key,\r\n    })\r\n  }).then(function(response){\r\n    return response.json();\r\n  })\r\n}\r\nSpace.KV.Delete=(key)=>{\r\n  return fetch("/space/api/kv/delete",{\r\n    method:"POST",\r\n    headers: Space.helper.headers_json,\r\n    body: JSON.stringify({\r\n      "key": key,\r\n    })\r\n  }).then(function(response){\r\n    return response.json();\r\n  })\r\n}\r\nSpace.KV.Put=(key,value)=>{\r\n  return fetch("/space/api/kv/put",{\r\n    method:"POST",\r\n    headers: Space.helper.headers_json,\r\n    body: JSON.stringify({\r\n      "key": key,\r\n      "value": value,\r\n    })\r\n  }).then(function(response){\r\n    return response.json();\r\n  })\r\n}\r\nvar Toast = Swal.mixin({\r\n  toast: true,\r\n  position: \'top-end\',\r\n  showConfirmButton: false,\r\n  timer: 3000\r\n});\r\n<\/script>'},function(e,n,t){var r;e.exports=(r=t(20),function(e){var n=r,t=n.lib,s=t.WordArray,a=t.Hasher,i=n.algo,o=[],c=[];!function(){function n(n){for(var t=e.sqrt(n),r=2;r<=t;r++)if(!(n%r))return!1;return!0}function t(e){return 4294967296*(e-(0|e))|0}for(var r=2,s=0;s<64;)n(r)&&(s<8&&(o[s]=t(e.pow(r,.5))),c[s]=t(e.pow(r,1/3)),s++),r++}();var l=[],u=i.SHA256=a.extend({_doReset:function(){this._hash=new s.init(o.slice(0))},_doProcessBlock:function(e,n){for(var t=this._hash.words,r=t[0],s=t[1],a=t[2],i=t[3],o=t[4],u=t[5],p=t[6],d=t[7],h=0;h<64;h++){if(h<16)l[h]=0|e[n+h];else{var f=l[h-15],m=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,g=l[h-2],y=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;l[h]=m+l[h-7]+y+l[h-16]}var v=r&s^r&a^s&a,w=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),b=d+((o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25))+(o&u^~o&p)+c[h]+l[h];d=p,p=u,u=o,o=i+b|0,i=a,a=s,s=r,r=b+(w+v)|0}t[0]=t[0]+r|0,t[1]=t[1]+s|0,t[2]=t[2]+a|0,t[3]=t[3]+i|0,t[4]=t[4]+o|0,t[5]=t[5]+u|0,t[6]=t[6]+p|0,t[7]=t[7]+d|0},_doFinalize:function(){var n=this._data,t=n.words,r=8*this._nDataBytes,s=8*n.sigBytes;return t[s>>>5]|=128<<24-s%32,t[14+(s+64>>>9<<4)]=e.floor(r/4294967296),t[15+(s+64>>>9<<4)]=r,n.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=a.clone.call(this);return e._hash=this._hash.clone(),e}});n.SHA256=a._createHelper(u),n.HmacSHA256=a._createHmacHelper(u)}(Math),r.SHA256)},function(e,n,t){(function(n){var r;e.exports=(r=r||function(e,r){var s;if("undefined"!=typeof window&&window.crypto&&(s=window.crypto),"undefined"!=typeof self&&self.crypto&&(s=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(s=globalThis.crypto),!s&&"undefined"!=typeof window&&window.msCrypto&&(s=window.msCrypto),!s&&void 0!==n&&n.crypto&&(s=n.crypto),!s)try{s=t(22)}catch(e){}var a=function(){if(s){if("function"==typeof s.getRandomValues)try{return s.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof s.randomBytes)try{return s.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function e(){}return function(n){var t;return e.prototype=n,t=new e,e.prototype=null,t}}(),o={},c=o.lib={},l=c.Base={extend:function(e){var n=i(this);return e&&n.mixIn(e),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=c.WordArray=l.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=null!=n?n:4*e.length},toString:function(e){return(e||d).stringify(this)},concat:function(e){var n=this.words,t=e.words,r=this.sigBytes,s=e.sigBytes;if(this.clamp(),r%4)for(var a=0;a<s;a++){var i=t[a>>>2]>>>24-a%4*8&255;n[r+a>>>2]|=i<<24-(r+a)%4*8}else for(var o=0;o<s;o+=4)n[r+o>>>2]=t[o>>>2];return this.sigBytes+=s,this},clamp:function(){var n=this.words,t=this.sigBytes;n[t>>>2]&=4294967295<<32-t%4*8,n.length=e.ceil(t/4)},clone:function(){var e=l.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var n=[],t=0;t<e;t+=4)n.push(a());return new u.init(n,e)}}),p=o.enc={},d=p.Hex={stringify:function(e){for(var n=e.words,t=e.sigBytes,r=[],s=0;s<t;s++){var a=n[s>>>2]>>>24-s%4*8&255;r.push((a>>>4).toString(16)),r.push((15&a).toString(16))}return r.join("")},parse:function(e){for(var n=e.length,t=[],r=0;r<n;r+=2)t[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new u.init(t,n/2)}},h=p.Latin1={stringify:function(e){for(var n=e.words,t=e.sigBytes,r=[],s=0;s<t;s++){var a=n[s>>>2]>>>24-s%4*8&255;r.push(String.fromCharCode(a))}return r.join("")},parse:function(e){for(var n=e.length,t=[],r=0;r<n;r++)t[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new u.init(t,n)}},f=p.Utf8={stringify:function(e){try{return decodeURIComponent(escape(h.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return h.parse(unescape(encodeURIComponent(e)))}},m=c.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(n){var t,r=this._data,s=r.words,a=r.sigBytes,i=this.blockSize,o=a/(4*i),c=(o=n?e.ceil(o):e.max((0|o)-this._minBufferSize,0))*i,l=e.min(4*c,a);if(c){for(var p=0;p<c;p+=i)this._doProcessBlock(s,p);t=s.splice(0,c),r.sigBytes-=l}return new u.init(t,l)},clone:function(){var e=l.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),g=(c.Hasher=m.extend({cfg:l.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(n,t){return new e.init(t).finalize(n)}},_createHmacHelper:function(e){return function(n,t){return new g.HMAC.init(e,t).finalize(n)}}}),o.algo={});return o}(Math),r)}).call(this,t(21))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){},function(e,n,t){"use strict";t.r(n),t.d(n,"dash_nav",(function(){return r}));const r=["home","search","setting"]},function(e,n,t){"use strict";t.r(n);var r={KV:{Put:async(e,n)=>await SpaceKV.put(e,n),Delete:async e=>await SpaceKV.delete(e),Get:async e=>await SpaceKV.get(e)},GoogleTranslate:async function(e,n){let t=(await E.Helpers.Setting("GoogleTranslate")).API;return await(await fetch(t,{method:"POST",headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"},body:JSON.stringify({s:e,conf:n})})).json()}};var s={js:{headers:{"content-type":"application/javascript; charset=utf-8","Access-Control-Allow-Origin":"*"}},html:{headers:{"content-type":"text/html; charset=utf-8","Access-Control-Allow-Origin":"*"}},json:{headers:{"content-type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}},stream:{headers:{"content-type":"application/octet-stream","Access-Control-Allow-Origin":"*"}},xml:{headers:{"content-type":"application/xml; charset=utf-8","Access-Control-Allow-Origin":"*"}},text:{headers:{"content-type":"text/plain; charset=utf-8","Access-Control-Allow-Origin":"*"}}};var a=async function(e){return new Response(E.Renderers.erorr.replace(/::ErrorInfo::/g,e),E.Helpers.Headers.html)};var i={Headers:s,ErrorResponse:a,Router:class{constructor(e){this.event=e,this.request=this.event.request,this.urlObj=new URL(this.request.url),this.pathname=this.urlObj.pathname,this.searchParams=this.urlObj.searchParams,this.method=this.request.method,this.ip=this.request.headers.get("CF-Connecting-IP")||this.request.headers.get("x-real-ip"),this.status={action:0,filterPath:0,auth:0,path:0},this.setStatus=(e,n)=>(this.status[e]=n,this),this.getParam=e=>this.searchParams.get(e),this.get=e=>(this.status.action||this.status.filterPath||"GET"==this.method&&this.pathname.startsWith(e)&&(this.status.filterPath=1,this.status.path=e),this),this.post=e=>(this.status.action||this.status.filterPath||"POST"==this.method&&this.pathname.startsWith(e)&&(this.status.filterPath=1,this.status.path=e),this),this.action=function(e){return this.status.action||this.status.filterPath&&(this.status.action=1,this.run=async()=>await e(this)),this}}},Cookie:{set:async function(e,n,t,r="/"){return e.headers.append("Set-Cookie",`${n}=${t}; path=${r};Max-Age=86400`),e},get:async function(e,n){const t=e.headers.get("Cookie");if(!t)return"";const r=n+"=",s=t.indexOf(r);if(-1===s)return"";const a=t.substring(s+r.length,t.length),i=a.indexOf(";");return-1===i?a:a.substring(0,i)}},ReadRequest:{Body:async function(e){const{headers:n}=e,t=n.get("content-type")||"";if(t.includes("application/json"))return JSON.stringify(await e.json());if(t.includes("application/text"))return await e.text();if(t.includes("text/html"))return await e.text();if(t.includes("form")){const n=await e.formData(),t={};for(const e of n.entries())t[e[0]]=e[1];return JSON.stringify(t)}return await e.blob()},URLParameters:function(e){return(e.url.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((e,n)=>(e[n.slice(0,n.indexOf("="))]=n.slice(n.indexOf("=")+1),e),{})}},Captcha:{recaptcha:async(e,n,t)=>{let r=await fetch(new Request("https://www.google.com/recaptcha/api/siteverify",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`secret=${e}&response=${n}&remoteip=${t}`}));return r=await r.json(),!!(r.success&&r.score>=.6)}},Setting:async function(e){let n=await E.API.KV.Get("setting");return n?(n=JSON.parse(n),n[e]):null},Fetch:{Text:async function(e){return await(await fetch(e)).text()},JSON:async function(e){return await(await fetch(e)).json()}}},o=t(1),c=t.n(o),l=t(2),u=t.n(l),p=t(3),d=t.n(p),h=t(4),f=t.n(h);const{space_static_version:m,space_cdn:g,space_dns_prefetch:y}=t(5);function v(e){return e=(e=(e=e.replace(/::CDN_SPACE::/g,g+"/@copoko/space-static@"+m)).replace(/::CDN::/g,g)).replace(/::PRECONNECT::/g,y)}const{dash_nav:w}=t(0);let b="";w.forEach(e=>{b+=t(6)(`./${e}/nav-item.html`)});let S={};w.forEach(e=>{S[e]=v(function(e){let n=f.a.replace(/::DASH_NAV::/g,b);return n=n.replace(/::DASH_CONTENT::/g,t(10)(`./${e}/content.html`)),n=n.replace(/::DASH_BODYEND::/g,t(14)(`./${e}/bodyend.html`)),n=n.replace(/::DASH_UTIL::/g,t(18)),n}(e))});var x={erorr:v(c.a),auth:v(u.a),robots:d.a,dash:S};let k=t(19);var C={CheckAuth:async function(e){let n=await E.Helpers.ReadRequest.Body(e.request);n=JSON.parse(n);let t=n.token,r=reCAPTCHA_SERVER,s=e.ip;if(await E.Helpers.Captcha.recaptcha(r,t,s)){let e=`${k(SpaceName).toString()}::${k(SpacePassword).toString()}`,t=`${k(n.name).toString()}::${k(n.password).toString()}`;if(t==e)return new Response(JSON.stringify({success:1}),{headers:{"content-type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","set-cookie":"_copoko_space_cookie_auth="+t+";HttpOnly;Secure;SameSite=Strict"}})}return new Response(JSON.stringify({success:0}),E.Helpers.Headers.json)},CheckCookieAuth:async function(e){return E.Helpers.Cookie.get(e.request,"_copoko_space_cookie_auth").then(async e=>{if(e){if(e==`${k(SpaceName).toString()}::${k(SpacePassword).toString()}`)return"PASS"}return await E.Helpers.ErrorResponse("NO PERMISSION TO ACCESS THE SERVICE")})},AuthPage:async function(e){return new Response(E.Renderers.auth.replace(/::reCAPTCHA_CLIENT::/g,reCAPTCHA_CLIENT),E.Helpers.Headers.html)}};var A=async function(e){return new Response(E.Renderers.robots,E.Helpers.Headers.text)};function P(e){return new Response(E.Renderers.dash[e.status.path.replace("/space/dash/","")],E.Helpers.Headers.html)}const{dash_nav:_}=t(0);let O={};_.forEach(e=>{O[e]=P});var E={API:r,Helpers:i,Renderers:x,Actions:{Auth:C,Robots:A,Dash:O,API:{KV:{Get:async function(e){try{let n=await E.Helpers.ReadRequest.Body(e.request);n=JSON.parse(n);let t=n.key,r=await E.API.KV.Get(t);return new Response(JSON.stringify({sucess:1,key:t,value:r}),E.Helpers.Headers.json)}catch(e){return new Response(JSON.stringify({sucess:0,error:e}),{status:500,headers:E.Helpers.Headers.json})}},Put:async function(e){try{let n=await E.Helpers.ReadRequest.Body(e.request);n=JSON.parse(n);let t=n.key,r=n.value;return await E.API.KV.Put(t,r),new Response(JSON.stringify({sucess:1,key:t,value:r}),E.Helpers.Headers.json)}catch(e){return new Response(JSON.stringify({sucess:0,error:e}),{status:500,headers:E.Helpers.Headers.json})}},Delete:async function(e){try{let n=await E.Helpers.ReadRequest.Body(e.request);n=JSON.parse(n);let t=n.key;return await E.API.KV.Delete(t),new Response(JSON.stringify({sucess:1,key:t}),E.Helpers.Headers.json)}catch(e){return new Response(JSON.stringify({sucess:0,error:e}),{status:500,headers:E.Helpers.Headers.json})}}},GoogleTranslate:async function(e){let n=E.Helpers.ReadRequest.URLParameters(e.request).s,t=await E.API.GoogleTranslate(n,{to:"zh-cn",domain:"com"});return new Response(t.text,E.Helpers.Headers.json)}}}};var T=async function(e){try{let n=new E.Helpers.Router(e);if(n.get("/robots.txt").action(E.Actions.Robots),n.get("/"+START).action(E.Actions.Auth.AuthPage),n.post("/space/auth").action(E.Actions.Auth.CheckAuth),!n.status.action){let t=await E.Actions.Auth.CheckCookieAuth(e);if("PASS"!=t)return t;n.setStatus("auth",1)}const{dash_nav:r}=t(23);return r.forEach(e=>{n.get("/space/dash/"+e).action(E.Actions.Dash[e])}),n.post("/space/api/kv/get").action(E.Actions.API.KV.Get),n.post("/space/api/kv/put").action(E.Actions.API.KV.Put),n.post("/space/api/kv/delete").action(E.Actions.API.KV.Delete),n.get("/space/api/GoogleTranslate").action(E.Actions.API.GoogleTranslate),n.status.action?await n.run():n.status.auth&&e.request.url!=`https://${e.request.url.split("/")[2]}/space/dash/home`?Response.redirect(`https://${e.request.url.split("/")[2]}/space/dash/home`,302):await E.Helpers.ErrorResponse("Ooops...")}catch(e){return await E.Helpers.ErrorResponse(e)}};addEventListener("fetch",e=>{e.respondWith(T(e).catch(e=>new Response(e.stack,{status:500})))})}]);