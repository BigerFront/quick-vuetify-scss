<template>
  <v-container class="portal-page">
    <div class="portal-page__header">
      <h1>{{ appTitle }}</h1>
    </div>
    <div class="portal-page__icon--wrapper">
      <div class="logo">
        <!-- <v-img :src="logo" aspect-ratio="1"></v-img> -->
        <img :src="logo" :alt="appTitle" sizes="100px" width="80px" />
      </div>
    </div>
    <div class="portal-page__intros">
      <Intro class="intros--inbox" />
    </div>
  </v-container>
</template>

<script>
import Intro from './PlatformIntro';
import Logo from '~Assets/faster.png';
export default {
  name: 'PortalIndex',
  components: { Intro },
  data() {
    return {
      logo: Logo,
      appTitle: 'Quick VVW 平台',
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
@import '~/styles/main.scss';
.portal-page {
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;

  &__header {
    padding: 1.75rem 0;
    h1 {
      @include H1;
      text-align: center;
    }
  }

  &__icon--wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  &__intros {
    display: flex;
    width: 100%;
    justify-self: center;
    justify-content: center;
    align-items: center;

    .intros--inbox {
      width: 55%;
    }
  }
}
</style>
