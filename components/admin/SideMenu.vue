<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isMinimized: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);
const layoutStore = useLayoutStore();
const { getAdminNavigation } = useNavigation();
const menuItems = getAdminNavigation();

// Initialize expanded items based on current route
const initializeExpandedItems = () => {
  const currentPath = useRoute().path;
  
  const checkAndExpandParents = (items, parentNames = []) => {
    items.forEach(item => {
      if (item.children) {
        const hasActiveChild = item.children.some(child => {
          if (child.path === currentPath) return true;
          if (child.children) {
            return checkAndExpandParents([child], [...parentNames, item.name]);
          }
          return false;
        });

        if (hasActiveChild) {
          // Expand all parent items in the chain
          parentNames.forEach(name => expandedItems.value.add(name));
          expandedItems.value.add(item.name);
        }
      }
      
      if (item.path === currentPath) {
        // Expand all parent items when current item is found
        parentNames.forEach(name => expandedItems.value.add(name));
        return true;
      }
      
      return false;
    });
    
    return items.some(item => item.path === currentPath);
  };

  menuItems.forEach(section => {
    checkAndExpandParents(section.items);
  });
};

// Call initialization on mount
onMounted(() => {
  initializeExpandedItems();
});

// Watch for route changes to update expanded state
watch(
  () => useRoute().path,
  () => {
    initializeExpandedItems();
  }
);

const handleOverlayClick = () => {
  emit("toggle");
};

// Compute layout-based properties
const isHorizontal = computed(() => layoutStore.sidebarLayout === "horizontal");
const isRTL = computed(() => layoutStore.isRTL);

// Compute effective isMinimized state based on screen size and layout
const effectiveIsMinimized = computed(() => {
  if (isHorizontal.value) return false;
  if (process.client && window.innerWidth < 768) {
    return false;
  }
  return props.isMinimized;
});

// Compute sidebar positioning classes
const sidebarPositionClasses = computed(() => {
  if (isHorizontal.value) {
    return "fixed top-14 left-0 right-0 h-auto";
  }

  return [
    "fixed inset-y-0",
    isRTL.value ? "right-0" : "left-0",
    props.isOpen ? "z-50" : "-translate-x-full md:translate-x-0",
    effectiveIsMinimized.value ? "w-14" : "w-56",
  ];
});

// Track expanded menu items
const expandedItems = ref(new Set());

const toggleExpand = (itemName) => {
  if (expandedItems.value.has(itemName)) {
    expandedItems.value.delete(itemName);
  } else {
    expandedItems.value.add(itemName);
  }
};

// Dynamic classes for navigation items
const navItemClasses = computed(() => {
  return "flex items-center w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md gap-3 transition-colors duration-200";
});

const sectionTitleClasses = computed(() => {
  return "px-3 text-xs font-medium text-muted-foreground tracking-wider uppercase";
});

const getNestedItemClasses = (level = 1) => {
  const baseClasses = "flex items-center w-full py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200 relative";
  // Use fixed padding classes instead of dynamic ones
  const levelPadding = {
    1: 'pl-10',  // First level indent
    2: 'pl-16',  // Second level indent
    3: 'pl-20'   // Third level indent
  };
  return `${baseClasses} ${levelPadding[level] || 'pl-10'} pr-3`;
};

const isActive = (path) => {
  if (!path) return false;
  const currentPath = useRoute().path;
  return currentPath === path;
};

const isParentActive = (item) => {
  const currentPath = useRoute().path;
  
  const checkChildrenActive = (items) => {
    return items.some(child => {
      if (child.path === currentPath) return true;
      if (child.children) {
        return checkChildrenActive(child.children);
      }
      return false;
    });
  };

  if (item.path) {
    return isActive(item.path);
  }
  if (item.children) {
    return checkChildrenActive(item.children);
  }
  return false;
};

// Add this to the script section
const activePopover = ref(null);

const handlePopoverTrigger = (itemName) => {
  if (activePopover.value === itemName) {
    activePopover.value = null;
  } else {
    activePopover.value = itemName;
  }
};

// Add this computed property to the script section
const dropdownPosition = computed(() => {
  return {
    placement: 'right-start',
    middleware: [{ name: 'offset', options: { mainAxis: 12 } }]
  };
});
</script>

<template>
  <div>
    <!-- Overlay (only for vertical layout) -->
    <div
      v-if="props.isOpen && !isHorizontal"
      @click="handleOverlayClick"
      class="fixed inset-0 backdrop-blur-sm backdrop-brightness-75 z-40 md:hidden"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'bg-sidebar border-r flex',
        isHorizontal ? 'flex-row' : 'flex-col',
        ...sidebarPositionClasses,
        'transition-all duration-200',
      ]"
    >
      <!-- Logo (only show in vertical layout) -->
      <div
        v-if="!isHorizontal"
        class="h-14 flex items-center px-3 border-b border-border"
      >
        <NuxtLink to="/admin" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div
            class="w-8 h-8 bg-primary rounded-md flex items-center justify-center"
          >
            <Icon name="lucide:box" class="w-5 h-5 text-primary-foreground" />
          </div>
          <div
            class="overflow-hidden transition-all duration-200"
            :style="{
              width: effectiveIsMinimized ? '0' : 'auto',
              opacity: effectiveIsMinimized ? '0' : '1',
              transform: effectiveIsMinimized ? 'translateX(-10px)' : 'translateX(0)'
            }"
          >
            <h2 class="text-sm font-semibold whitespace-nowrap">Corrad UI</h2>
            <p class="text-xs text-muted-foreground whitespace-nowrap">
              Enterprise
            </p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <div
        class="flex-1 overflow-y-auto py-4 px-2"
        :class="{ 'px-4': isHorizontal }"
      >
        <nav class="space-y-1">
          <template v-for="section in menuItems" :key="section.title">
            <!-- Section title (only in vertical layout when not minimized) -->
            <div
              v-if="!effectiveIsMinimized && !isHorizontal"
              class="pt-4 pb-2"
            >
              <h2 :class="sectionTitleClasses">
                {{ section.title }}
              </h2>
            </div>

            <!-- Navigation items -->
            <div
              :class="[
                'space-y-1',
                isHorizontal ? 'flex items-center gap-4' : '',
              ]"
            >
              <template v-for="item in section.items" :key="item.name">
                <!-- Items with children -->
                <template v-if="item.children">
                  <!-- Minimized state -->
                  <template v-if="effectiveIsMinimized">
                    <Dropdown 
                      v-model="activePopover" 
                      :model-value="activePopover === item.name"
                      placement="right"
                    >
                      <DropdownTrigger>
                        <button
                          @click="handlePopoverTrigger(item.name)"
                          class="submenu-trigger relative"
                          :class="[
                            navItemClasses,
                            activePopover === item.name ? 'bg-accent text-foreground' : ''
                          ]"
                        >
                          <Icon :name="item.icon" class="w-4 h-4 shrink-0" />
                        </button>
                      </DropdownTrigger>

                      <DropdownContent 
                        class="min-w-[200px]"
                        @select="() => activePopover = null"
                      >
                        <div class="py-1.5 px-2 text-sm font-medium border-b">
                          {{ item.name }}
                        </div>
                        <template
                          v-for="child in item.children"
                          :key="child.name"
                        >
                          <!-- Handle nested children -->
                          <template v-if="child.children">
                            <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                              {{ child.name }}
                            </div>
                            <NuxtLink
                              v-for="subChild in child.children"
                              :key="subChild.name"
                              :to="subChild.path"
                            >
                              <DropdownItem @click="activePopover = null">
                                {{ subChild.name }}
                              </DropdownItem>
                            </NuxtLink>
                            <DropdownSeparator v-if="child !== item.children[item.children.length - 1]" />
                          </template>
                          <!-- Regular child item -->
                          <NuxtLink
                            v-else
                            :to="child.path"
                          >
                            <DropdownItem @click="activePopover = null">
                              {{ child.name }}
                            </DropdownItem>
                          </NuxtLink>
                        </template>
                      </DropdownContent>
                    </Dropdown>
                  </template>

                  <!-- Non-minimized state -->
                  <template v-else>
                    <button
                      @click="toggleExpand(item.name)"
                      :class="[
                        navItemClasses,
                        isParentActive(item) ? 'bg-accent text-foreground' : '',
                        expandedItems.has(item.name) ? '' : '',
                      ]"
                    >
                      <Icon :name="item.icon" class="w-4 h-4 shrink-0" />
                      <span
                        class="flex-1"
                        :class="{ 'text-left': !isRTL, 'text-right': isRTL }"
                      >
                        {{ item.name }}
                      </span>
                      <Icon
                        :name="
                          isRTL
                            ? 'lucide:chevron-left'
                            : 'lucide:chevron-right'
                        "
                        class="w-4 h-4 shrink-0 transition-transform duration-300 ease-in-out"
                        :class="[
                          { 'ml-auto': !isRTL, 'mr-auto': isRTL },
                          expandedItems.has(item.name) ? 'rotate-90' : ''
                        ]"
                      />
                    </button>

                    <!-- Expanded menu in non-minimized state -->
                    <div
                      class="overflow-hidden transition-all duration-500 ease-in-out"
                      :style="{
                        maxHeight: expandedItems.has(item.name) ? '500px' : '0'
                      }"
                    >
                      <div class="mt-0.5 relative">
                        <!-- Vertical line for first level -->
                        <div class="absolute left-5 top-0 bottom-0 w-px bg-border"></div>
                        
                        <template
                          v-for="(child, childIndex) in item.children"
                          :key="child.name"
                        >
                          <!-- Handle nested children -->
                          <template v-if="child.children">
                            <div class="relative">
                              <button
                                @click="toggleExpand(child.name)"
                                :class="[
                                  getNestedItemClasses(1),
                                  'flex items-center justify-between group',
                                  { 
                                    'text-foreground font-medium': isParentActive(child)
                                  }
                                ]"
                              >
                                <span>{{ child.name }}</span>
                                <Icon
                                  :name="'lucide:chevron-right'"
                                  class="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100 transition-transform duration-300 ease-in-out"
                                  :class="expandedItems.has(child.name) ? 'rotate-90' : ''"
                                />
                              </button>
                              
                              <!-- Nested submenu -->
                              <div
                                class="overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{
                                  maxHeight: expandedItems.has(child.name) ? '500px' : '0'
                                }"
                              >
                                <div class="py-0.5 relative">
                                  <!-- Vertical line for second level -->
                                  <div class="absolute left-12 top-0 bottom-0 w-px bg-border"></div>
                                  
                                  <NuxtLink
                                    v-for="subChild in child.children"
                                    :key="subChild.name"
                                    :to="subChild.path"
                                    :class="[
                                      getNestedItemClasses(2),
                                      { 
                                        'text-foreground font-medium': isActive(subChild.path)
                                      }
                                    ]"
                                  >
                                    {{ subChild.name }}
                                  </NuxtLink>
                                </div>
                              </div>
                            </div>
                          </template>
                          <!-- Regular child item -->
                          <NuxtLink
                            v-else
                            :to="child.path"
                            :class="[
                              getNestedItemClasses(1),
                              { 
                                'text-foreground font-medium': isActive(child.path)
                              }
                            ]"
                          >
                            {{ child.name }}
                          </NuxtLink>
                        </template>
                      </div>
                    </div>
                  </template>
                </template>

                <!-- Regular item without children -->
                <NuxtLink
                  v-else
                  :to="item.path"
                  :class="[
                    navItemClasses,
                    isActive(item.path) ? 'bg-accent text-foreground' : '',
                  ]"
                >
                  <Icon :name="item.icon" class="w-4 h-4 shrink-0" />
                  <span v-if="!effectiveIsMinimized" class="flex-1">{{
                    item.name
                  }}</span>
                </NuxtLink>
              </template>
            </div>
          </template>
        </nav>
      </div>
    </aside>
  </div>
</template>

<style scoped>
aside {
  transition: width 200ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hide scrollbar but maintain functionality */
.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>
