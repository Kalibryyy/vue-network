<template>
  <header class="header">
    <nuxt-link to="/">
      <Logo :title="logoText" />
    </nuxt-link>
    <div class="header__avatar">{{ avatar }}</div>
    <p>{{ userName }}</p>
    <div>
      <button class="header__del-button" @click="handleDeleteProfile"></button>
      <button class="header__edit-button" @click="handleEditProfile"></button>
    </div>
    <button class="button" @click="toggleModal">{{ text }}</button>
    <Modal
      v-if="showModal"
      @modalClose="toggleModal"
      @enterSubmit="handleEnterSubmit"
    />
  </header>
</template>

<script>
import Logo from "./header/logo";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      text: "Enter",
      logoText: "Network",
      logoColor: "dark",
      showModal: false,
      counter: 0,
      userName: "",
      avatar: "",
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    handleEnterSubmit(event) {
      // (event) {
      // отдать имя в userName и url в avatar картинки из инпутов в Header
      // отправить post запрос на сервер
      // }
    },
    handleDeleteProfile() {
      this.userName = "";
      this.avatar = "";
      this.toggleModal();
      // del запрос на сервер
    },
    handleEditProfile() {
      
    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
}

.header__weather {
  width: 25px;
  height: 25px;
}

.header__avatar {
  border-radius: 100%;
  margin-right: 30px;
  height: 120px;
  width: 120px;
  background-size: cover;
  background-position: 50%;
}

.header__edit-button {
  background-image: url("~static/images/edit-btn.svg");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  display: inline-block;
  border: 2px solid #000;
  background-color: #fff;
  background-position: 50%;
  padding: 0;
  cursor: pointer;
  margin-right: 10px;
}

.header__edit-button:hover {
  opacity: 0.6;
  transition: opacity 0.3s linear;
}

.header__del-button {
  background-image: url("~static/images/del-btn.svg");
  /* background-size: cover; */
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-position: 50%;
  border: 0;
  padding: 0;
}

.header__del-button:hover {
  opacity: 0.6;
  transition: opacity 0.3s linear;
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.button:hover {
  background: black;
  color: white;
  transition: 0.3s;
}

.link {
  color: black;
}
</style>