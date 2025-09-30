import Blits from '@lightningjs/blits'
import theme from '../lib/theme'


export default Blits.Component('Loader', {
  template: `
    <Element>
      <Circle size="40" :color="$loaderColor || theme.colors.muted" :alpha.transition="{value: $alpha, delay: 200}" />
      <Circle size="40" :color="$loaderColor || theme.colors.muted" x="60" :alpha.transition="{value: $alpha, delay: 300}" />
      <Circle size="40" :color="$loaderColor || theme.colors.muted" x="120" :alpha.transition="{value: $alpha, delay: 400}" />
    </Element>
    `,
  props: ['loaderColor'] as const,
  state() {
    return {
      theme,
      /**
       * Alpha of the circles, used to create a fade-in / fade-out transition
       */
      alpha: 0 as number,
    }
  },
  hooks: {
    ready() {
      this.start()
    },
  },
  methods: {
    /**
     * Starts the loading transition in an interval
     */
    start(): void {
      this.$setInterval(() => {
        this.alpha = this.alpha === 1 ? 0 : 1
      }, 800)
    },
  },
})
