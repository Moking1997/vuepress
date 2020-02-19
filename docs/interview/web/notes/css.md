## CSS
### CSS3 新特性有哪些？
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
