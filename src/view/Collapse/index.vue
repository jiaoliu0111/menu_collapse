<template>
  <div class="container">

    <div class="top">
      <div class="fl">所有后台模块</div>
      <div class="fr">
        <!-- <input id="aL" class="look" type="checkbox"><span class="mr20">查看</span>
        <input id="aM" class="manage" type="checkbox"><span class="mr20">管理</span> -->
        <input id="aL"  type="checkbox"><span class="mr20">查看</span>
        <input id="aM" type="checkbox"><span class="mr20">管理</span>
      </div>
    </div>

    <div v-for="item in menu" :key="item.id" class="bigBox">
      <!-- 一级菜单 -->
      <div :class="{collapsed: !item.collapse}" class="firstMenu"><!--展开加上 collapsed 类名-->
        <div class="fl" @click="item.collapse = !item.collapse">{{ item.name }}</div>
        <div class="fr">
          <input class="fMLook look" type="checkbox"><span class="mr20">查看</span>
          <input class="fMManage manage" type="checkbox"><span class="mr20">管理</span>
        </div>
      </div>
      <!-- 二级菜单 -->
      <div>
        <div v-for="i in item.children" :key="i.id" class="secondMenu" :class="{in: !item.collapse}"><!--显示加上 in 类名-->
          <div class="fl">{{ i.name }}</div>
          <div class="fr">
            <input class="sMLook look" type="checkbox"><span class="mr20">查看</span>
            <input class="sMManage manage" type="checkbox"><span class="mr20">管理</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      menu: [
        {id: 1, name: '一级菜单1', collapse: false, children: [{id: 11, name: '一级菜单1-1'}, {id: 12, name: '一级菜单1-2'}]},
        {id: 2, name: '一级菜单2', collapse: false, children: [{id: 21, name: '一级菜单2-1'}, {id: 22, name: '一级菜单2-2'}, {id: 23, name: '一级菜单2-3'}]},
        {id: 3, name: '一级菜单3', collapse: false, children: [{id: 31, name: '一级菜单3-1'}, {id: 32, name: '一级菜单3-2'}, {id: 33, name: '一级菜单3-3'}]},
        {id: 4, name: '一级菜单4', collapse: false, children: [{id: 41, name: '一级菜单4-1'}, {id: 42, name: '一级菜单4-2'}]},
        {id: 5, name: '一级菜单5', collapse: false, children: [{id: 51, name: '一级菜单5-1'}, {id: 52, name: '一级菜单5-2'}, {id: 53, name: '一级菜单5-3'}]},
        {id: 6, name: '一级菜单6', collapse: false, children: [{id: 61, name: '一级菜单6-1'}, {id: 62, name: '一级菜单6-2'}]},
        // {id: 7, name: '一级菜单7', collapse: false, children: [{id: 71, name: '一级菜单7-1'}, {id: 72, name: '一级菜单7-2'}]}
      ]
    }
  },
  mounted () {
    this.changeCheck()
  },
  methods: {
    changeCheck () { // 监听check事件
      $(function () {
        let allLook = $('#aL')[0]
        let allManage = $('#aM')[0]
        let lookInputs = $('input.look')
        let manageInputs = $('input.manage')
        let fMLooks = $('.fMLook')
        let fMManage = $('.fMManage')
        let sMLooks = $('.sMLook')
        let sMManage = $('.sMManage')
        // 顶部 从上->下
        allLook.onclick = function () {
          lookInputs.each((index, ele) => { ele.checked = this.checked })
        }
        allManage.onclick = function () {
          manageInputs.each((index, ele) => { ele.checked = this.checked })
        }
        // 一级菜单 从上->下
        fMLooks.each((index, ele) => {
          ele.onclick = function () {
            // 让当前菜单下的二级菜单全部选中
            $(this).parent().parent().siblings().find('.sMLook').each((index, ele) => { ele.checked = this.checked })
            // 判断是否勾选全选
            isSelectAll(fMLooks, allLook)
          }
        })
        fMManage.each((index, ele) => {
          ele.onclick = function () {
            $(this).parent().parent().siblings().find('.sMManage').each((index, ele) => { ele.checked = this.checked })
            isSelectAll(fMManage, allManage)
          }
        })
        // 二级菜单 从下->上
        sMLooks.each((index, ele) => {
          ele.onclick = function () {
            // 判断是否勾选一级菜单
            var flag = true
            for (var i = 0; i < $(this).parent().parent().parent().find('.sMLook').length; i++) {
              if ($(this).parent().parent().parent().find('.sMLook')[i].checked === false) {
                flag = false
                break
              }
            }
            if (flag) {
              $(this).parent().parent().parent().parent().find('.fMLook')[0].checked = true
            } else {
              $(this).parent().parent().parent().parent().find('.fMLook')[0].checked = false
            }
            // 判断是否勾选全选菜单
            isSelectAll(fMLooks, allLook)
          }
        })
        sMManage.each((index, ele) => {
          ele.onclick = function () {
            var flag = true
            for (var i = 0; i < $(this).parent().parent().parent().find('.sMManage').length; i++) {
              if ($(this).parent().parent().parent().find('.sMManage')[i].checked === false) {
                flag = false
                break
              }
            }
            if (flag) {
              $(this).parent().parent().parent().parent().find('.fMManage')[0].checked = true
            } else {
              $(this).parent().parent().parent().parent().find('.fMManage')[0].checked = false
            }
            // 判断是否勾选全选菜单
            isSelectAll(fMManage, allManage)
          }
        })
        function isSelectAll (eles, targetEle) {
          var flag2 = true
          for (var j = 0; j < eles.length; j++) {
            if (eles[j].checked === false) {
              flag2 = false
              break
            }
          }
          if (flag2) {
            targetEle.checked = true
          } else {
            targetEle.checked = false
          }
        }
      })
    }
  }
}
</script>
<style scoped>
.bigBox {
  padding: 3px 20px;
}
.firstMenu,
.secondMenu {
  cursor: pointer;
  overflow: hidden;
}
.firstMenu {
  position: relative;
  padding-left: 20px;
}
.firstMenu.collapsed:before {
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  display: block;
  height: 15px;
  width: 15px;
  background-image: url('../../assets/images/minus.png');
  background-size: 15px 15px;
}
.firstMenu:before {
  /* content:  url('../../assets/images/plus.png'); */
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  display: block;
  height: 15px;
  width: 15px;
  background-image: url('../../assets/images/plus.png');
  background-size: 15px 15px;
}
.secondMenu {
  padding-left: 20px;
  display: none;
}
.in {
  display: block;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.mr20 {
  margin-right: 20px;
}
.top {
  overflow: hidden;
  padding: 3px 20px;
}
.container {
  width: 600px;
  padding: 30px;
  border: 1px solid #ccc;
}
</style>
