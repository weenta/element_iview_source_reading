<script>
export default {
  name: 'WTooltip',
  props: {
    title: {
      type: String,
      default: 'tooltip'
    }
  },

  data() {
    return {
      msg: 'message'
    }
  },
  computed: {
    // ?
    tooltipId() {
      return 'id-a'
    }
  },

  mounted() {
    console.log(this)
  },

  methods: {
    greeting() {
      console.log('greeting from wtooltip')
    },

    setExpectedState(falg) {
      console.log('setExpectedState',falg)
    },

    debounceClose() {
      console.log('debounceClose')
    }
    
  },

  render(h) {
    return (
      <div class="w-tooltip" 
        onClick={ this.greeting }
        onMouseleave={ () => { this.setExpectedState(false); this.debounceClose() } }
        onMouseenter= { () => { this.setExpectedState(true) } }
        id={ this.tooltipId }
        ref='tooltip'
        
      >
        { this.$slots.default }
      </div>
    )
  },

}
</script>
