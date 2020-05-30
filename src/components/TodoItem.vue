<template>
  <div class="todo_item">
    <div class="check" @click="handleTodoToggle">
      <i v-if="todoItem.complete" class="fa fa-check"></i>
    </div>
    <div
      v-if="!inAmend"
      class="todo_content"
      :class="{del_txt:todoItem.complete}"
      @dblclick="handleAmendTodo"
    >{{todoItem.txt}}</div>
    <input
      ref="inpRef"
      v-show="inAmend"
      type="text"
      v-model="inpVal"
      @keydown.enter="handleBlur"
      @blur="handleBlur"
    />
    <div v-if="!inAmend" class="del" @click="handleDelTodo">
      <i class="fa fa-trash-o"></i>
    </div>
  </div>
</template>

<script>
import { DELTODO, TOGTODO, AMENDTODO } from "../store/mutations-type.js";
import { mapMutations } from "vuex";
export default {
  props: {
    todoItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      inAmend: false,
      inpVal: ""
    };
  },
  methods: {
    ...mapMutations([DELTODO, TOGTODO, AMENDTODO]),
    handleDelTodo() {
      this[DELTODO](this.todoItem);
    },
    handleTodoToggle() {
      this[TOGTODO](this.todoItem);
    },
    handleAmendTodo() {
      console.log("双击修改");
      this.inAmend = true;

      /**
       * 获取焦点 2种方法 ：
       *    1. 直接操作Dom，不过该Dom要在nextTick改变
       *    2. 自定义指令
       */
      this.$nextTick(() => {
        this.$refs.inpRef.focus();
      });
    },
    handleBlur() {
      let val = this.inpVal.trim();
      this.inAmend = false;
      if (val == "") {
        this.inpVal = "";
        console.log("输入有误");
        return;
      }

      this.todoItem.txt = val;
      this[AMENDTODO](this.todoItem);
      this.inpVal = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.todo_item {
  height: 50px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #ccc;

  .check {
    margin-left: 10px;
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;

    i {
      font-size: 26px;
      line-height: 32px;

      color: #44bb44;
    }
  }

  .todo_content {
    padding: 0 30px;
    flex: 1;
  }
  .todo_content.del_txt {
    text-decoration: line-through;
    color: #ccc;
  }
  input {
    font-size: 32px;
    line-height: 50px;
    box-shadow: 0 1px 4px #ccc inset;
    margin: 0 30px;
    flex: 1;
  }

  .del {
    margin-right: 10px;
    cursor: pointer;
    i {
      display: none;
      font-size: 20px;
      color: #d52b2b;
    }
  }

  &:hover {
    .del i {
      display: inline-block;
    }
  }
}
</style>
