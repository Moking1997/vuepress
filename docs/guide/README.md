# 前端

## CSS
### CSS3 新特性有哪些？
答:
1. 颜色:新增 RGBA，HSLA 模式
2. 文字阴影（text-shadow、）
3. 边框: 圆角（border-radius）边框阴影: box-shadow
4. 盒子模型:box-sizing
5. 背景:background-size 设置背景图片的尺寸 background-origin 设置背景图片的原点 background-clip 设置背景图片的裁切区域，以”，”分隔可以设置多背景，用于自适应布局
6. 渐变:linear-gradient、radial-gradient
7. 过渡:transition，可实现动画
8. 自定义动画
9. 在 CSS3 中唯一引入的伪元素是 ::selection.
10. 媒体查询，多栏布局
11. border-image
12.2D 转换:transform:translate(x，y) rotate(x，y) skew(x，y) scale(x，y)
13. 3D 转换

### 怎么让一个不定宽高的 DIV,垂直水平居中?
- 使用 `CSS` 表格方法:
```css
.parent{
    width: 100px;
    height: 100px;
    background:yellow;
    display: table-cell;
    text-align:center;
    vertical-align:middle;
}
.child{
    display:inline-block;
    vertical-align:middle;
}
```
- 使用 `CSS3 transform`:
```css
.parent{
      position: relative;
      width: 100px;
      height: 100px;
      background:yellow;
    }
    .child{
     background:red;
     transform:translate(-50%,-50%);
     position:absolute;
     top:50%;
     left:50%;
    }
```
### box-sizing、transition、translate 分别是什么？
1. `Box-sizing`: 用来指定盒模型的大小的计算方式。主要分为 `boreder-box`（从边框固定盒子大小）、`content-box` （从内容固定盒子大小）两种计算方式。
2. `transition`: 当前元素只要有“属性”发生变化时，可以平滑的进行过渡。通过 `transtion-propety` 设置过渡属 性;`transtion-duration` 设置过渡时间;`trantion-timing-function` 设置过渡速度;`trantion-delay` 设置过渡延时 
3. `translate`:通过移动改变元素的位置;有 x、y、z 三个属性

### 什么是 BFC？
1. 定义: BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level box 参 与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。 

2. 布局规则: 
    - 内部的 Box 会在垂直方向，一个接一个地放置。
    - Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
    - 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。 即使存在浮动也是如此。
    - BFC 的区域不会与 float box 重叠。
    - BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
    - 计算 BFC 的高度时，浮动元素也参与计算。
3. 哪些元素会生成 BFC:
    - 根元素
    - float 属性不为 none
    - position 为 absolute 或 fixed
    - display 为 inline-block， table-cell， table-caption， flex， inline-flex
    - overflow 不为 visible
4. 作用：
    - 可以包含浮动元素
    - 不被浮动元素覆盖
    - 阻止父子元素的 margin 折叠
### 清除浮动的几种方式
答:
1. 父级 `div` 定义 `height` 原理:父级 `div` 手动定义 `height`，就解决了父级 `div` 无法自动获取到高度的问题。 简单、代码少、容易掌握 ，但只适合高度固定的布局.

2. 结尾处加空 `div` 标签 `clear:both` 原理:在浮动元素的后面添加一个空 div 兄弟元素，利用 `css` 提高的 `clear:both` 清除浮动，让父级 `div` 能自动获 取到高度 ，如果页面浮动布局多，就要增加很多空 `div`，让人感觉很不好 .

3. 父级 `div` 定义 伪类:`after` 和 `zoom`
```css
/*清除浮动代码*/ 
.clearfix:after{ 
    content:"" ;
    display:block;
    visibility:hidden;
    height:0; 
    line-height:0;
    clear:both; 
} 
.clearfix{
    zoom:1;
}
```
原理:`IE8` 以上和非 IE 浏览器才支持`:after`，原理和方法 2 有点类似，`zoom`(IE 转有属性)可解决 `ie6`，`ie7` 浮动问题 ， 推荐使用，建议定义公共类，以减少 CSS 代码。 

4. 父级 `div` 定义 `overflow:hidden` 超出盒子部分会被隐藏，不推荐使用.

5. 双伪元素法:
```css
.clearfix:before，.clearfix:after {
    content:"" ;
    display:block;
    clear:both;
}

.clearfix { 
    zoom:1;
}
```

### `css sprite` 是什么,有什么优缺点
概念：将多个小图片拼接到一个图片中。通过 `background-position` 和元素尺寸调节需要显示的背景图案。

优点：

1. 减少 HTTP 请求数，极大地提高页面加载速度
2. 增加图片信息重复度，提高压缩比，减少图片大小
3. 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：
1. 图片合并麻烦
2. 维护麻烦，修改一个图片可能需要重新布局整个图片，样式

### `display: none;`与`visibility: hidden;`的区别
联系：它们都能让元素不可见

区别：

- `display：none；` 使用该属性后，HTML 元素（对象）的宽度、高度等各种属性值都将“丢失”
- `visibility：hidden；` 使用该属性后，HTML 元素（对象）仅仅是在视觉上看不见（完全透明），而它所 占据的空间位置仍然存在，也即是说它仍具有高度、宽度等属性值。
### css 有哪些继承属性
- 关于文字排版的属性如：
    - font
    - word-break
    - letter-spacing
    - text-align
    - text-rendering
    - word-spacing
    - white-space
    - text-indent
    - text-transform
    - text-shadow
- line-height
- color
- visibility
- cursor

## JavaScript
### javascript 有哪几种数据类型
- 基本类型: `null`，`undefined`，`boolean`，`number`，`string`，`symbol`
    - 每个从`Symbol()`返回的`symbol`值都是唯一的。一个`symbol`值能作为对象属性的标识符；这是该数据类型仅有的目的
    - `Symbol`作用
        - `Symbol` 作为属性名
        - `Symbol` 对象元素的保护作用
- 对象:`object`

PS:其中数字类型是浮点类型的，没有整型。并且浮点类型基于 IEEE 754标准实现，在使用中会遇到某些 Bug。`NaN` 也属于 `number` 类型，并且 `NaN` 不等于自身。

### cookies sessionStorage和localstorage区别
相同点：都存储在客户端
不同点：
1.存储大小
- `cookie`数据大小不能超过4k。
- `sessionStorage`和`localStorage` 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
2. 有效时间
- `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
- `sessionStorage` 数据在当前浏览器窗口关闭后自动删除。
- `cookie` 设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭
3. 数据与服务器之间的交互方式
- `cookie`的数据会自动的传递到服务器，服务器端也可以写`cookie`到客户端
- `sessionStorage`和localStorage`不会自动把数据发给服务器，仅在本地保存。
### 什么是事件冒泡/捕获？
- 事件冒泡：子元素事件的触发会影响父元素事件； 开关事件冒泡： 
    1. 开启事件冒泡：`element.addEventListener(eventName，handler，false)`
    2. 关闭事件冒泡：假设传统方式事件的返回值为 e，就可以通过 `e.stopPropagation()`来关闭事件冒泡； 
    3. 事件捕获：父元素的事件会影响子元素的事件； 开启事件捕获：`element.addEventListener(eventName，handler，true)`
### 什么是事件委托机制？这样做有什么好处？
事件委托，就是某个事件本来该自己干的，但是自己不干，交给别人来干。就叫事件委托。打个比方：一个 button 对象，本来自己需要监控自身的点击事件，但是自己不来监控这个点击事件，让自己的父节点来监控自己 的点击事件。

好处：
1. 提高性能：列如，当有很多 li 同时需要注册事件的时候，如果使用传统方法来注册事件的话，需要给每 一个 li 注册事件。然而如果使用委托事件的话，就只需要将事件委托给该一个元素即可。这样就能提高性能。
2. 新添加的元素还会有之前的事件；

### 1、AJAX 请求数据步骤是什么？传输的数据是用的暗文还是明文？
```JavaScript
var xhr； xhr = new XMLHttpRequest()； 
//创建一个异步对象 
xhr.open("Get"， "test.ashx"， true)；
//Get 方式括号中的三个参数分别为：1.发送请求的方式 2. 样请求的页面 3.是否异步 
//xhr.open("post"，"test.ashx"，true)；
//xhr.setRequestHeader("Content-Type"， "application/x-www-form-urlencoded")； Post 方式发送数据

//这个回调函数主要用来检测服务器是否把数据返回给异步对象 
xhr.setRequestHeader("If-Modified-Since"，"0")；//设置浏览器不使用缓存 
xhr.onreadystatechange = function () { if (xhr.readystate == 4) { 
    //readyState 属 性 指 出 了 XMLHttpRequest 对 象 在 发 送 / 接 收 数 据 过 程 中 所 处 的 几 个 状 态 。 XMLHttpRequest 对象会经历 5 种不同的状态。
    //0：未初始化。对象已经创建，但还未初始化，即还没调用 open 方法； 
    //1：已打开。对象已经创建并初始化，但还未调用 send 方法； 
    //2：已发送。已经调用 send 方法，但该对象正在等待状态码和头的返回； 
    //3：正在接收。已经接收了部分数据，但还不能使用该对象的属性和方法，因为状态和响应头不完整； 
    //4：已加载。所有数据接收完毕

if(xhr.status==200){ 
    //检测服务器返回的响应报文的状态码是否为 200 alert(xhr.responseText)；
    //服务器返回的 Response 数据 
    //解析服务器返回的 jason 格式的数据 
    var s=xhr.responseText； 
    var json=eval("("+s+")")； 
    alert(jason.data)； } 
    }；

}； 
xhr.send(null)；
//异步对象发送请求 
//xhr.send("txtName=roger&txtPwd=123")； 以 post 方式发送数据

// ajax 中 get 和 post 方式请求数据都是明文的。
```

### 作用域和闭包
答：简单的说，作用域是针对变量的，比如我们创建一个函数 a1，函数里面又包了一个子函数 a2。此时就存 在三个作用域： 全局作用域－a1 作用域－a2 作用域；即全局作用域包含了 a1 的作用域，a2 的作用域包含了 a1 的作用域。 当 a1 在查找变量的时候会先从自身的作用域区查找，找不到再到上一级 a2 的作用域查找，如果还没找到就 到全局作用域区查找，这样就形成了一个作用域链。 理解闭包首先要理解，js 垃圾回收机制，也就是当一个函数被执行完后，其作用域会被收回，如果形成了闭包，执行完后其作用域就不会被收回。
```JavaScript
var a1 = function(){
    let a = 1
    let a2 = function(){
        console.log(a)
    }
    a2()
}
a1()
```
如果某个函数被他的父函数之外的一个变量引用，就会形成闭包。 

闭包的作用，就是保存自己私有的变量，通过提供的接口（方法）给外部使用，但外部不能直接访问该变量。