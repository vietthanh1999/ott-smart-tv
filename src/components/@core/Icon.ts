import Blits from "@lightningjs/blits"

export interface IconProps {
  name: string
  size?: number
  color?: string
  x?: number
  y?: number
}

export default Blits.Component("Icon", {
  template: `
    <Element :w="$size" :h="$size" :x="$x" :y="$y">
      <Element :src="$iconPath" :w="$size" :h="$size" />
    </Element>
  `,

  props: ["name", "size", "color", "x", "y"],

  state() {
    return {
      size: this.size || 24,
      x: this.x || 0,
      y: this.y || 0,
    }
  },

  computed: {
    iconPath() {
      return `assets/icons/${this.name}.svg`
    },
  },
})
