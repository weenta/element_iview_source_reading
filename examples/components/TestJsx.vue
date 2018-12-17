<script>
export default {
 
  data() {
    return {
      test: 123
    }
  },
  methods: {
    onClick() {
      console.log('hello jsx')
    }
  },
 
  render() {
    return (
      <div class="test" onClick={ this.onClick }>
        <w-button>from jsx</w-button>
      </div>
    )
  },
}
</script>
