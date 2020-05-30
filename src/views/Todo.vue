<template>
  <div class="todo">
    <div class="header">
      <div class="inp_box">
        <i class="fa fa-angle-down"></i>
        <input
          v-focus
          v-model="inpVal"
          @keydown.enter="handlePushTodo"
          type="text"
          placeholder="提交代办事项？"
        />
      </div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer" v-show="allTodoLen">
      <span>剩余 {{needDoTodoLen}} 个待办事项</span>
      <div class="router_btn">
        <router-link active-class="active" tag="button" to="/all">全部</router-link>
        <router-link active-class="active" tag="button" to="/fail">未完成</router-link>
        <router-link active-class="active" tag="button" to="/completed">完成</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import { PUSHTODO, DELTODO } from "../store/mutations-type.js";
export default {
  data() {
    return {
      inpVal: ""
    };
  },
  methods: {
    ...mapMutations([PUSHTODO, DELTODO]),
    handlePushTodo() {
      let val = this.inpVal.trim();
      if (val == "") {
        console.log("输入不合法");
        this.inpVal = "";
        return;
      }

      this[PUSHTODO]({ txt: val });
      this.inpVal = "";
    }
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["needDoTodos", "allTodos"]),
    needDoTodoLen() {
      return this.needDoTodos.length;
    },
    allTodoLen() {
      return this.allTodos.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  width: 50%;
  max-width: 550px;
  margin: 150px auto;
  border: 1px solid #ccc;

  box-shadow: 0 1px 2px #ccc;
}
.header {
  .inp_box {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    box-shadow: 0 -1px 2px #ccc inset;

    i {
      font-size: 32px;
      padding: 0 20px;
      color: #ccc;
    }
    input {
      width: 100%;
      font-size: 32px;
    }
    input::-webkit-input-placeholder {
      font-style: italic;
      color: #ccc;
      font-weight: 100;
    }
  }
}

.footer {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    // 第四个 阴影的大小(上下左右都减去像数值)，就是为了让其 左右 可以向中间靠拢
    box-shadow: 0 1px 1px #ccc, 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px #ccc,
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px #ccc;
  }

  span {
    font-size: 15px;
    color: #aaa;
  }
  .router_btn {
    text-align: center;
    flex: 1;

    button {
      margin-right: 10px;
      color: #aaa;
      font-size: 16px;
      border: 1px solid transparent; //自定义边框
      border-radius: 4px;
      outline: none; //消除默认点击蓝色边框效果
      background-color: unset;
      cursor: pointer;

      &:hover {
        border: 1px solid #ccc;
      }
    }
    button.active {
      border: 1px solid #ccc;
    }
  }
}
</style>
