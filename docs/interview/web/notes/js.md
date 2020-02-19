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