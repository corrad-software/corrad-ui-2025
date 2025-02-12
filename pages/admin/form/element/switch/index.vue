<script setup>
definePageMeta({
  title: "Switch",
  layout: "admin",
  breadcrumb: [
    {
      name: "Forms",
      path: "/admin/form",
    },
    {
      name: "Elements",
      path: "/admin/form/element",
    },
    {
      name: "Switch",
      type: "current",
    },
  ],
});

const switchValue = ref(false);
const labeledValue = ref(false);
const colorValue = ref(false);
const disabledValue = ref(true);

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="switch"
    label="Notifications"
  />
</template>

<script setup>
const value = ref(false);
<\/script>`;

const labeledCode = `<template>
  <FormKit
    v-model="value"
    type="switch"
    label="Airplane Mode"
  >
    <template #help>
      <span :class="value ? 'text-success' : 'text-gray-500'">
        {{ value ? 'Enabled' : 'Disabled' }}
      </span>
    </template>
  </FormKit>
</template>

<script setup>
const value = ref(false);
<\/script>`;

const colorCode = `<template>
  <FormKit
    v-model="value"
    type="switch"
    label="Dark Mode"
    color="primary"
  />
</template>

<script setup>
const value = ref(false);
<\/script>`;

const statesCode = `<template>
  <FormKit
    v-model="value"
    type="switch"
    label="Maintenance Mode"
    disabled
  />
</template>

<script setup>
const value = ref(true);
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Switch</h1>
      <p class="text-gray-600">
        A custom FormKit input for toggle switches with support for labels, colors, and states.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple switch input for boolean values.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="switchValue"
            type="switch"
            label="Notifications"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- With Labels -->
    <Card>
      <CardHeader>
        <CardTitle>With Labels</CardTitle>
        <CardDescription>
          Switch with dynamic labels showing the current state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="labeledValue"
            type="switch"
            label="Airplane Mode"
          >
            <template #help>
              <span :class="labeledValue ? 'text-success' : 'text-gray-500'">
                {{ labeledValue ? 'Enabled' : 'Disabled' }}
              </span>
            </template>
          </FormKit>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="labeledCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Colors -->
    <Card>
      <CardHeader>
        <CardTitle>Colors</CardTitle>
        <CardDescription>
          Switch with different color variants.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="colorValue"
            type="switch"
            label="Dark Mode"
            color="primary"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="colorCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- States -->
    <Card>
      <CardHeader>
        <CardTitle>States</CardTitle>
        <CardDescription>
          Switch in different states (disabled, readonly).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="switch"
            label="Maintenance Mode"
            disabled
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="statesCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props, events, and slots available for the Switch component.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <!-- Props -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Props</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Label text for the switch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>color</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>"default"</TableCell>
                  <TableCell>Color variant of the switch (default, primary, success, etc.)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Whether the switch is disabled</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>readonly</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Whether the switch is readonly</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Events -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Events</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Parameters</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>(value: boolean)</TableCell>
                  <TableCell>Emitted when switch value changes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Slots -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Slots</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>Custom label content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>Help text or additional content below the switch</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Smooth toggle animation</li>
              <li>Keyboard navigation support</li>
              <li>Color variants</li>
              <li>Disabled and readonly states</li>
              <li>Custom label support</li>
              <li>Help text slot</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 