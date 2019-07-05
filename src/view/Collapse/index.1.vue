<template>
  <div>

    <div v-for="item in menu" :key="item.id" class="bigBox">
      <!-- 一级菜单 -->
      <div :class="{collapsed: item.collapse}" class="firstMenu" @click="item.collapse = !item.collapse">{{ item.name }}</div><!--展开加上 collapsed 类名-->
      <!-- 二级菜单 -->
      <div v-for="i in item.children" :key="i.id" class="secondMenu" :class="{in: item.collapse}">{{i.name}}</div><!--显示加上 in 类名-->
    </div>
  </div>
</template>
<script>
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
        {id: 7, name: '一级菜单7', collapse: false, children: [{id: 71, name: '一级菜单7-1'}, {id: 72, name: '一级菜单7-2'}]}
      ]
    }
  },
  methods: {

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
</style>
