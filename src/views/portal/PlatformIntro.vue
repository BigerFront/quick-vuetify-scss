<template>
  <div class="pl-intro__wrapper">
    <div class="pl-intro__subtitle">
      <span>{{ subTitle }}</span>
    </div>
    <div
      v-if="paragraphs && paragraphs.length > 0"
      class="pl-intro__content--wrapper"
    >
      <div v-for="(ph, idx) in paragraphs" :key="idx" class="pl-intro__content">
        <p>{{ ph.content || '' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformIntro',
  components: {},
  data() {
    return {
      subTitle: '平台介绍',
      paragraphs: [
        {
          title: 'HHHH',
          content:
            '山不在3高，有仙则名4。水不在深，有龙则灵5。斯是陋室6，惟吾德馨7。苔痕上阶绿，草色入帘青8。谈笑有鸿儒9，往来无白丁10。可以调素琴11，阅金经12。无丝竹13之14乱耳15，无案牍16之劳形17。南阳诸葛庐，西蜀子云亭。 [12]  18孔子云19：何陋之有',
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
.pl-intro {
  &__wrapper {
    width: 65%;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }

  &__subtitle {
    font-size: 1.05rem;
    text-align: left;
  }

  &__content p {
    font-size: 0.9rem;
  }

  &__content--wrapper {
    justify-content: center;
    align-items: center;
  }
}
</style>
