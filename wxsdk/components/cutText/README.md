> 插件名称：截取字符串组件，在申请插件页面搜索即可，无需确认，即添即用。

# 属性

|    属性    |   类型   | 默认值 | 说明                     |
| :--------- | :------ | :----: | :-----------------------|
| cutText     | String  |  ''  | 所需要的截取的字符串数据   |
| length     | Number  |  0    | 所需要截取的字符串长度     |
| begin      | Number  |  0    | 所截取的字符串起始位置     |
| ellipsis   | Boolean |  false | 所截取字符串后是否加省略号…|


# 回调参数
无参数


# 示例
```json
{
  "usingComponents": {
    "cut-text": "/wxsdk/components/cutText/cutText"
  }
}
```
```html
<cut-text cutText="{{str}}" length='20' ellipsi="true"></cut-text>
```

```javascript

 onLoad: function (options) {
    var str ="这是一串很长的字符串，如果超过长度就自动截取，长度参数由length定义";
    this.setData({str})
  },

```
