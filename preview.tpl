<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%=fontFamily%> preview</title>
    <style>
    *{margin:0;padding:0;list-style:none}blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}body,button,input,select,textarea{font:12px/1.5 tahoma,arial,sans-serif}h1,h2,h3,h4,h5,h6{font-size:100%}address,cite,dfn,em,var{font-style:normal}code,kbd,pre,samp{font-family:courier new,courier,monospace}small{font-size:12px}ol,ul{list-style:none}a{text-decoration:none}a:hover{text-decoration:underline}legend{color:#000}fieldset,img{border:0}button,input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}.main{padding:30px 100px}.main h1{font-size:36px;text-transform:capitalize;color:#333;text-align:left;margin-bottom:30px;border-bottom:1px solid #eee}.iconfont-list{overflow:hidden}.iconfont-list li{float:left;width:100px;height:150px;text-align:center}.iconfont-list .icon{font-size:42px;line-height:100px;margin:10px 0;color:#333;font-style:normal;-webkit-transition:font-size .25s ease-out 0s;-moz-transition:font-size .25s ease-out 0s;transition:font-size .25s ease-out 0s}.iconfont-list .icon:hover{font-size:100px}.iconfont-list .code{color:#008000;font-weight:bold}
    </style>
    <style>
    @font-face {
        font-family: '<%=fontFamily%>';
        src: url('<%=fontFamily%>.eot'); /* IE9*/
        src: url('<%=fontFamily%>.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('<%=fontFamily%>.woff') format('woff'), /* chrome, firefox */
        url('<%=fontFamily%>.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('<%=fontFamily%>.svg#ux<%=fontFamily%>') format('svg'); /* iOS 4.1- */
    }
    .icon {
        font-family: '<%=fontFamily%>';
    }
    </style>
</head>
<body>
    
<div class="main">
    <h1><%=fontFamily%> preview</h1>
    <ul class="iconfont-list">
        <%glyfList.forEach(function(glyf) {%>
        <li>
            <i class="icon"><%=glyf.code%></i>
            <div class="code"><%=glyf.codeName%></div>
            <div class="name"><%=glyf.name%></div>
        </li>
        <%});%>
    </ul>
    </div>
</div>

</body>
</html>
