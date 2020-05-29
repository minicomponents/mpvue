<template>
  <div>
    <p class="card">
      {{texts}} {{test}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () { // 组件每次被创建时data都是初始化值
    return {
      test: '测试1'
    }
  },
  computed: {
    texts: function () {
      return this.text + 'heheh'
    }
  },
  components: {},
  created () {
    console.log('组件每次创建时都会被执行。次序：1')
  },
  onLoad () {
    console.log('组件每次创建时都会被执行。次序：2')
  },
  onReady () {
    console.log('组件每次创建时都会被执行。次序：3')
  },
  mounted () {
    console.log('组件每次创建时都会被执行。次序：4')
  },
  methods: {}
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
