<template>
  <div class="wxc-btn"
       :style="mrBtnStyle"
       @click="onClicked">
    <text class="btn-text"
          :style="mrTextStyle">{{text}}</text>
  </div>
</template>

<script>
  import { STYLE_MAP, TEXT_STYLE_MAP } from './type'
  export default {
    props: {
      text: {
        type: String,
        default: '确认'
      },
      type: {
        type: String,
        default: 'taobao'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      btnStyle: Object,
      textStyle: Object
    },
    computed: {
      mrBtnStyle () {
        const { type, disabled, btnStyle } = this;
        const mrBtnStyle = {
          ...STYLE_MAP[type],
          ...btnStyle
        };
        return disabled ? {
          ...mrBtnStyle,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 0
        } : mrBtnStyle;
      },
      mrTextStyle () {
        const { type, disabled, textStyle } = this;
        const mrTextStyle = { ...TEXT_STYLE_MAP[type], ...textStyle };
        return disabled ? { ...mrTextStyle, color: '#FFFFFF' } : mrTextStyle;
      }
    },
    methods: {
      onClicked (e) {
        const { type, disabled } = this;
        this.$emit('wxcButtonClicked', { e, type, disabled })
      }
    }
  }
</script>

<style scoped>
  .wxc-btn {
    width: 702px;
    height: 88px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  .btn-text {
    text-overflow: ellipsis;
    lines: 1;
    font-size: 36px;
    color: #FFFFFF;
  }

</style>
