<template>
    <label id="switch" class="switch">
            <input type="checkbox" @change="setTheme(theme)" id="slider">
            <span class="slider round"></span>
        </label>
</template>

<script>
import { useThemeStore } from '../../stores/theme'

export default {
    setup(){
        const themeStore = useThemeStore();
        return { themeStore };
    },
    data(){
        return {
            activeTheme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
        }
    },
    mounted(){
        if(this.activeTheme === 'light'){
            document.getElementById("slider").checked=true;
        }else{
            document.getElementById("slider").checked = false;
        }
    },
    computed: {
        theme(){
            return this.activeTheme === 'light' ? 'dark' : 'light';
        }
    },
    methods:{
        setTheme(theme){
        //   document.getElementById(localStorage.getItem('theme')).classList.remove('active');
        //   document.getElementById(theme).classList.add('active');
            this.activeTheme = theme;
            this.themeStore.setTheme(theme);
        }
    }
}
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  transform: scale(0.7);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 40px;
  width: 40px;
  left: 0px;
  bottom: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0 0px 15px #2020203d;
  background: white url('https://i.ibb.co/FxzBYR9/night.png');
  background-repeat: no-repeat;
  background-position: center;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
  /* background: white url('https://i.ibb.co/7JfqXxB/sunny.png'); */
  background: white url('../../assets/irradia_icon.svg');
  background-repeat: no-repeat;
  background-position: center;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>