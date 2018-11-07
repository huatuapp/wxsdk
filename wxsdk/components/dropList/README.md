> 插件名称：下拉菜单选择组件，在申请插件页面搜索即可，无需确认，即添即用。

# 属性

|    属性    |   类型   | 默认值 | 说明                     |
| :--------- | :------ | :----: | :-----------------------|
| tabTxt     | Object  |  {}    | 所需要的菜单列表数据      |


# 回调参数

|       属性       |  类型  | 说明       |
| :-------------- | :---- | :--------- |
| searchParamId    | array | 选择的选项id   |
| searchParamText  | array | 选择的选项的文字名称 |


# 示例
```json
{
  "usingComponents": {
    "drop-list": "/wxsdk/components/dropList/dropList"
  }
  }
```
```html
<drop-list tabTxt="{{tabTxt}}" catch:getList="getList"></drop-list>
```

```javascript
Page({
	data: {
    tabTxt: [{					 //tabTxt:下拉选项数据集合     【object】
        'text': '学习平台',       //text:默认显示的文字         【string】
        'active': false,         //active:下拉菜单是否直接显示  【Boolean】
        'child': [{              //child:下拉选项			  【object】
            'id': 1,			 //id:下拉选项的标识id         【int】
            'text': '学习平台'    //text:下拉选项的文本         【string】
          },
          {
            'id': 2,
            'text': '腰果'
          },
        ],
        'type': 1               //type：展开后高亮的选项文本,对应id    【int】
      },
      {
        'text': '全部',
        'active': false,
        'child': [{
            'id': -1,
            'text': '全部'
          }, {
            'id': 0,
            'text': '未付款'
          }, {
            'id': 1,
            'text': '已付款'
          },
          {
            'id': 2,
            'text': '已取消'
          },
          {
            'id': 3,
            'text': '已退款'
          }
        ],
        'type': -1
      },
    ], // 菜单选项列表

    getList({ detail }) {
        console.log(detail);
        /*
        {
           searchParamId:[1.-1],
           searchParamText:['学习平台','全部']
        }
        */
    }
});
```
