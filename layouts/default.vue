<template>
  <div>
    <Header />
    <Nuxt />
    <notifications classes="notifications-wrap" group="foo" />
  </div>
</template>

<style>
.notifications-wrap {
  padding: 15px;
  margin: 15px;
  background: #228c22;
  color: white;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  transition: .3s;
}

html {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  background: url('~static/images/bgd.jpeg') center no-repeat;
  background-size: cover;
  margin: 0 auto;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

a, a:visited {
  color: black;
  text-decoration: none;
}
</style>
