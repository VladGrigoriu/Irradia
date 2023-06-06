<template>
    <header id="header">
       <div>
            <Logo />
       </div>

       <div id="menu">
        <router-link to="/" class="main-links">{{ $t('menu.home') }}</router-link>
        <router-link to="/" class="main-links">{{ $t('menu.who_we_are') }}</router-link>
        <router-link to="/" class="main-links">{{ $t('home.case_studies') }}</router-link>
        <router-link to="/" class="main-links">{{ $t('menu.blog') }}</router-link>
        <router-link to="/" class="main-links">{{ $t('menu.contacts') }}</router-link>
       </div>

       <div id="cta">
          <div class="btn">{{ $t('menu.connect') }}</div>
          <LanguageSwitcher  />
          <ThemeSwitcher />
       </div>
    </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
import Logo from './Logo.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
export default {
  components:{
    Logo,
    ThemeSwitcher,
    LanguageSwitcher
}
}
</script>

<style>
#header{
  height: 10vh;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  z-index: 999;
}
#header>div{
  width: 33.3%;
}
#menu{
  display: flex;
  align-items: center;
  justify-content: space-evenly;

}
#cta{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>