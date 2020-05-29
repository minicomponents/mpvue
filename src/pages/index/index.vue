<template>
  <div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />
      <div class="userinfo-nickname">
        <card v-if="showCard" :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="vuex">
      <p class="p">Vuex示例</p>
      <p class="p">{{count}}</p>
      <div class="btn-box">
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      showCard: false,
      userInfo: {
        nickName: 'mpvue'
      }
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  components: {
    card
  },
  onShow () { // 页面初始化或者重新显示时执行
    console.log('page onShow2')
    setTimeout(() => {
      this.showCard = true
    }, 3000)
    setTimeout(() => {
      this.showCard = false
    }, 6000)
    setTimeout(() => {
      this.showCard = true
    }, 9000)
  },
  onReady () { // 页面初始化时执行
    console.log('page onReady3')
  },
  mounted () { // 页面初始化时执行
    console.log('page mounted4')
  },
  onUnload () { // 页面被卸载时（关闭时）执行。属于tabBar的页面永远不会被销毁，所以tabBar的页面不会被执行。
    console.log('page onUnload5')
  },
  onHide () { // 页面被隐藏时执行（注意页面还存留，如果没有留存则不会被执行。执行的是onUnload）
    console.log('page onHide6')
  },
  methods: {
    increment (e) {
      console.log('e:', e)
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped lang="less">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
.vuex{
  text-align: center;
  font-size: 28rpx;
  .p{
    margin-top: 40rpx;
  }
  .btn-box{
    margin-top: 40rpx;
    .btn{
      display: inline-block;
      width: 100rpx;
      height: 100rpx;
      margin: 0 40rpx;
    }
  }
}
</style>
