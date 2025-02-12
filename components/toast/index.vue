<script setup>
import { toasts } from "~/composables/useToast";
import { TransitionGroup } from "vue";
import { computed } from "vue";

const props = defineProps({
  position: {
    type: String,
    default: "bottom-right",
    validator: (value) =>
      ["top-left", "top-right", "bottom-left", "bottom-right"].includes(value),
  },
});

const positionClasses = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

// Compute animation classes based on position
const getAnimationClasses = (position) => {
  const isTop = position.startsWith("top");
  return {
    enter: {
      active: "transition ease-out duration-300",
      from: `opacity-0 ${isTop ? "-translate-y-2" : "translate-y-2"}`,
      to: "opacity-100 translate-y-0",
    },
    leave: {
      active: "transition ease-in duration-200",
      from: "opacity-100 translate-y-0",
      to: `opacity-0 ${isTop ? "-translate-y-2" : "translate-y-2"}`,
    },
  };
};

const animations = computed(() => getAnimationClasses(props.position));

// Compute whether there are active toasts
const hasActiveToasts = computed(() => toasts[props.position].value.length > 0);
</script>

<template>
  <div
    :class="[
      'fixed z-[100] flex max-h-screen w-full flex-col gap-2 p-4 sm:max-w-[420px]',
      positionClasses[position],
      {
        'flex-col': position.startsWith('top'),
        'flex-col-reverse': position.startsWith('bottom'),
        'pointer-events-none': !hasActiveToasts,
      },
    ]"
  >
    <TransitionGroup
      :enter-active-class="animations.enter.active"
      :enter-from-class="animations.enter.from"
      :enter-to-class="animations.enter.to"
      :leave-active-class="animations.leave.active"
      :leave-from-class="animations.leave.from"
      :leave-to-class="animations.leave.to"
    >
      <div
        v-for="toast in toasts[position].value"
        :key="toast.id"
        class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all"
        :class="{
          'bg-background text-foreground': toast.type === 'default',
          'bg-danger text-danger-foreground': toast.type === 'error',
          'bg-primary text-primary-foreground': toast.type === 'success',
        }"
      >
        <div class="flex items-start gap-2">
          <Icon
            v-if="toast.type === 'error'"
            name="ph:x-circle"
            class="h-5 w-5 text-danger-foreground"
          />
          <Icon
            v-if="toast.type === 'success'"
            name="ph:check-circle"
            class="h-5 w-5 text-primary-foreground"
          />
          <div class="grid gap-1">
            <div class="text-sm font-semibold">{{ toast.title }}</div>
            <div class="text-sm opacity-90">{{ toast.description }}</div>
          </div>
        </div>
        <button
          class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          @click="useToast().remove(toast.id, toast.position)"
        >
          <Icon name="ph:x" class="h-4 w-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>
