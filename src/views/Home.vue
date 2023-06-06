<template>
  <main id="hero-section">
    <div class="hero-grid">
      <div id="first-card">
        <img src="../assets/hero_img.jpg" class="card-images" />

        <div id="first-card-left-section">
          <h1 class="title">{{ $t('home.hero_title') }}</h1>
          <p class="description">{{ $t('home.hero_description') }}</p>
          <button class="hero-btn">{{ $t('home.hero_cta_text') }}</button>
        </div>
        <div id="first-card-right-section">
          <div id="glass-box">
            <h2 class="secondary-title">{{ $t('home.hero_glassbox_title') }}</h2>
            <p class="description p-right">{{ $t('home.hero_glassbox_description') }}</p>  
            <FontAwesomeIcon class="arrow-icon arrow-icon-top-right-position" icon="arrow-up" />
          </div>

          <div class="label-grid">
            <Label label="branding" />
            <Label label="web design" />
            <Label label="web development" />
            <Label label="ui/ux" />
            <Label label="marketing" />
            <Label label="front-end development" />
          </div>

        </div>
      </div>
      <div id="two">
        <img src="../assets/hero_img2.jpg" class="card-images" />
        <div>
          <Label :label="$t('home.how_we_work')" />
          <h2 class="secondary-title">{{ $t('home.how_we_work') }}</h2>
          <p class="description p-right">{{ $t('home.how_we_work_description') }}</p>
          <FontAwesomeIcon class="arrow-icon arrow-icon-down-right-position" icon="arrow-up" />
        </div>
      </div>
      <div id="three">
        <img src="../assets/hero_img3.jpg" class="card-images-variant" />
        <h2 class="secondary-title">{{ $t('home.case_studies') }}</h2>
        <p class="description p-right">{{ $t('home.case_studies_description') }}</p>
        <FontAwesomeIcon class="arrow-icon arrow-icon-down-right-position" icon="arrow-up" />
      </div>
      <div id="four">
        <img src="../assets/hero_img4.jpg" class="card-images" />
        <h2 class="secondary-title">{{ $t('home.newsletter_title') }}</h2><br>
        <div id="newsletter">
          <input type="text" placeholder="email address" class="input" />
          <button class="hero-btn" style="margin-top: 0;">{{ $t('home.subscribe') }}</button>
        </div><br>

        <div id="members">
          <h2 class="secondary-title">12</h2>
          <p class="description">{{ $t('home.active_users') }}</p>
        </div>
        <FontAwesomeIcon class="arrow-icon arrow-icon-down-right-position" icon="arrow-up" />
      </div>
    </div>
  </main>


  <section class="section">

    <div class="section-description">
      <h1 class="section-titles">Irradia</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium asperiores, ab tempora reprehenderit illo molestias molestiae sed possimus debitis quidem voluptas, corporis voluptates error aperiam mollitia perferendis sunt. Amet, dignissimos!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium asperiores, ab tempora reprehenderit illo molestias molestiae sed possimus debitis quidem voluptas, corporis voluptates error aperiam mollitia perferendis sunt. Amet, dignissimos!
      </p>
    </div>

    <div class="section-images">
      <img src="../assets/hero_img3.jpg" class="masked-image" />
      <img src="../assets/hero_img.jpg" class="masked-image" />
      <img src="../assets/hero_img4.jpg" class="masked-image" />
    </div>

  </section>
</template>

<script>
import Label from '@/components/Home/Label.vue'

export default {
  components: {
    Label
  }
}

</script>

<style>
#hero-section{
  height: 90vh;
  background-color: var(--background-color);
}
.hero-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: var(--text-color-contrast);
}

.hero-grid > div {
  margin: 10px;
  border-radius: 15px;
  text-align: center;
  height: calc(40vh - 10px);
  position: relative;
}

.hero-grid :first-child {
  grid-column: 1 / -1;
  height: calc(50vh - 10px);
  margin-bottom: 0;
  margin-top: 0;
}
#two>img, #three>img, #four>img{
  max-height: calc(40vh - 10px);
}
#two, #three , #four{
  margin-right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 40px;
}
#four{
  margin-right: 10px;
}
.card-images{
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  filter: brightness(30%);
}
.card-images-variant{
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  filter: brightness(60%);
}
#first-card{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 7%;
  padding-bottom: 7%;
  padding-left: 3.5%;
  padding-right: 3.5%;
  
}
#first-card-left-section{
  position: relative;
  width: 50%;
  text-align: start;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  height: -webkit-fill-available;
}
#first-card-right-section{
  position: relative;
  width: 50%;
  text-align: start;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  height: -webkit-fill-available;
}
#glass-box{
  background-color: #dbdbdb10;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 50%;
  border-radius: 10px;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}
.p-right{
  padding-right: 40%;
}
.label-grid{
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 5px;
  width: 50%;
  margin-top: 10px;
  align-items: end;
  justify-items: end;
}
#newsletter{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto !important;
  position: relative;
}
#members{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: auto !important;
}
.section{
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3%;
}
.section-description{
  width: 60%;
}
.section-images{
  width: 40%;
}
.masked-image{
  -webkit-mask-image: url(../assets/irradia_icon.svg);
  mask-image: url(../assets/irradia_icon.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 50%;
}
</style>