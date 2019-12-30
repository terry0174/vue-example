# Step 1. 加入各生命週期事件

`js\app.js`

```javascript
    beforeCreate: function() {
      //vue instance 被 constructor 建立前
      alert('beforeCreate');
    },
    created: function() {
      //vue instance 被 constructor 建立後，在這裡完成 data binding
      alert('created');
    },
    beforeMount: function() {
      //綁定 DOM 之前
      alert('beforeMount');
    },
    mounted: function() {
      //綁定 DOM 之後
      alert('mounted');
    },
    beforeUpdate: function() {
      //資料更新，但尚未更新 DOM
      alert('beforeUpdate');
    },
    updated: function() {
      //因資料更新，而更新 DOM
      alert('updated');
    },
    beforeDestroy: function() {
      //移除 vue instance 之前
      alert('beforeDestroy');
    },
    destroyed: function() {
      //移除 vue instance 之後
      alert('destroyed');
    }
```