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
        <w-popover content='hello'>
          <w-button slot='reference' style='margin:100px;'>greeting from jsx</w-button>
        </w-popover>
      </div>
    )
  },
}
</script>
