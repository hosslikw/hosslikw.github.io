export default defineComponent({
  setup () {
    return () => {
      return createVNode(
        'div',
        {
          class: 'btn'
        },
        'dynamicBtn'
      )
    }
  }
})
