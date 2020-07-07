export default {
  name: 'FgaSettingsCheckbox',

  props: {
    option: Object
  },

  methods: {
    toggleOption(option) {
      // eslint-disable-next-line no-param-reassign
      option.value = !option.value;

      this.$store.dispatch('UPDATE_SETTINGS', {
        alias: option.alias,
        value: option.value
      });
    }
  }
};
