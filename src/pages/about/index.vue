<template>
  <div>
    <div class="h1">西安叁浪信息科技有限公司</div>
    <div class="desc">
      西安叁浪信息科技有限公司是国内大型综合性软件与信息服务企业，
      具有极高的市场感召力和客户忠诚度，以领先的技术、丰富的经验、精湛的服务在中国 IT 行业享有极高的声誉。
      自成立以来，叁浪科技取得了业界瞩目的成就，并作为国内第一家专注于电子政务领域的 IT 服务商。
      在未来的发展中，将软件外包作为重点的业务发展方向。
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  onShow () { // 页面初始化或者重新显示时执行
    console.log('page order onShow2')
  },
  onReady () { // 页面初始化时执行
    console.log('page order onReady3')
  },
  mounted () { // 页面初始化时执行
    console.log('page order mounted4')
  },
  onUnload () { // 页面被卸载时（关闭时）执行。属于tabBar的页面永远不会被销毁，所以tabBar的页面不会被执行。
    console.log('page order onUnload5')
  },
  onHide () { // 页面被隐藏时执行（注意页面还存留，如果没有留存则不会被执行。执行的是onUnload）
    console.log('page order onHide6')
  }
}
</script>

<style lang="less">
.h1{
  margin: 40rpx;
  color: #666;
  font-size: 36rpx;
}
.desc{
  margin: 40rpx;
  color: #999;
  font-size: 28rpx;
}
</style>
