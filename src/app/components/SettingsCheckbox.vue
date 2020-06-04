<template>
  <div>
    <label class="checkbox" :for="option.alias">
      <span class="checkbox__icon">
        <font-awesome-icon v-if="option.value" :icon="['fas', 'check-square']" />
        <font-awesome-icon v-else :icon="['fas', 'square']" />
      </span>
      {{ option.name }}
    </label>
    <input
      :id="option.alias"
      type="checkbox"
      @change="toggleOption(option)"
      :checked="option.value ? 'checked' : ''"
    />
  </div>
</template>

<script>
export default {
  name: 'FgaSettingsCheckbox',
  props: {
    option: Object,
  },
  methods: {
    toggleOption(option) {
      // eslint-disable-next-line no-param-reassign
      option.value = !option.value;
      this.$store.dispatch('UPDATE_SETTINGS', {
        alias: option.alias,
        value: option.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
}

.checkbox__icon {
  margin-right: 0.6rem;
}

input[type='checkbox'] {
  display: none;
}
</style>
