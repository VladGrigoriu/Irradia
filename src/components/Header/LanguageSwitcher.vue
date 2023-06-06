<template>
    <section id="language-switcher-container">
        <div aria-label="Flag Icon" @click="dropdown ? closeDropdown() : openDropdown()" class="btn">{{ locale.toUpperCase() }} &nbsp;&nbsp;<FontAwesomeIcon icon="arrow-down"/></div>
        <section id="locales-dropdown">
            <div class="arrow-up"></div>
            <div class="single-locale-container" v-for="(locale, i) in localeStore.locales.sort()" :key="`locale-${i}`" role="button" @click="changeLocale(locale)">
                <div :id="localeStore.locales.length-1 === i ? 'last-flag' : ''" :class="locale === $i18n.locale ? 'flags-container flag-active' : 'flags-container'">
                    <!-- <img :src="`/assets/flags/${locale}.svg`" aria-label="Flag Icons" class="flag-icon" /> -->
                    <div class="locale-name">{{ locale.toUpperCase() }}</div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { useLocaleStore } from '../../stores/locale'

export default {
    data() {
        return { 
            dropdown: false,
            locale: localStorage.getItem('lang')
        };
    },
    setup(){
        const localeStore = useLocaleStore();
        return { localeStore };
    },
    methods: {
        changeLocale(locale){
            this.locale=locale;
            this.localeStore.setLocale(locale);
            document.getElementById('locales-dropdown').style.opacity=0;
            document.getElementById('locales-dropdown').style.pointerEvents='none';
        },
        closeDropdown(){
            document.getElementById('locales-dropdown').style.opacity=0;
            document.getElementById('locales-dropdown').style.pointerEvents='none';
            this.dropdown=false;
        },
        openDropdown(){
            document.getElementById('locales-dropdown').style.opacity=1;
            document.getElementById('locales-dropdown').style.pointerEvents='all';
            this.dropdown=true;
        }
    },
};
</script>

<style scoped>
.single-locale-container{
    width: 100%;
}
.flags-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* flex-direction: column; */
    padding: 10px 20px;
    /* border-radius: 10px; */
    border-radius: 20px;
    cursor: pointer;
}
#last-flag{
    border-right: none;
}
.flags-container:hover{
    background-color: var(--text-color-contrast);
    border-radius: 20px;
    outline: none;
}
.static-flag-icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    /* padding: 3px; */
    border: 1px solid var(--text-color);
    /* margin-top: -5px; */
}
.flag-icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
}
#language-switcher-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: show 500ms 750ms linear forwards;
    animation-delay: 3s;
    /* opacity: 0; */
    position: relative;
}
#locales-dropdown{
    pointer-events: none;
    transition: opacity 300ms ease;
    opacity: 0;
    position: absolute;
    top: 15px;
    right: auto;
    margin-top: 10px;
    background-color: var(--text-color-variant);
    border: 0.5px solid var(--text-color);
    border-radius: 10px;
    width: 10vh;
    box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    z-index: 99;
}
.locale-name{
    color: var(--text-color);
    font-size: 14px;
    margin-left: 5px;
}
.arrow-up {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;  
    border-bottom: 5px solid var(--primary-bg-color);
    box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: absolute;
    left: 45%;
    top: -2%;
  }
  .flag-active{
    background-color: var(--primary-border-color);
  }
  @media screen and (max-width:450px){

    #locales-dropdown{
        width: 100%;
        flex-direction: column;
    }
    .flags-container{
        padding: 5px 10px;
    }
    .flag-icon{
        width: 15px;
        height: 15px;
    }

  }
</style>