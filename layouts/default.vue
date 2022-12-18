<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: '首页',
    link: [
      {rel:'stylesheet',href: '/style/base.css'},
      {rel:'stylesheet',href: '/style/global.css'},
      {rel:'stylesheet',href: '/style/header.css'},
      {rel:'stylesheet',href: '/style/footer.css'}
    ],
    script: [
      { type: 'text/javascript', src: '/js/jquery-1.8.3.min.js' }
    ]
  }
}
</script>

<style>

</style>

