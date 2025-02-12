<script setup>
definePageMeta({
  title: "Combobox",
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
      name: "Combobox",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const multiValue = ref([]);

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="combobox"
    label="Country"
    placeholder="Select a country"
    :options="countries"
  />
</template>

<script setup>
const value = ref("");
const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  // ...
];
<\/script>`;

const multiCode = `<template>
  <FormKit
    v-model="value"
    type="combobox"
    label="Countries"
    placeholder="Select countries"
    :options="countries"
    :validation="[['required']]"
    :validation-messages="{
      required: 'Please select at least one country'
    }"
  />
</template>

<script setup>
const value = ref([]);
const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  // ...
];
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Combobox</h1>
      <p class="text-gray-600">
        A custom FormKit input that provides a searchable dropdown with multi-select capability.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple combobox with static options.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="combobox"
            label="Country"
            placeholder="Select a country"
            :options="countries"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Multiple Selection -->
    <Card>
      <CardHeader>
        <CardTitle>Multiple Selection</CardTitle>
        <CardDescription>
          Combobox with multiple selection support.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="multiValue"
            type="combobox"
            label="Countries"
            placeholder="Select countries"
            :options="countries"
            :validation="[['required']]"
            :validation-messages="{
              required: 'Please select at least one country'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="multiCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props and options available for the Combobox component.
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
                  <TableCell>options</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>[]</TableCell>
                  <TableCell>Array of options with value and label properties</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>placeholder</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Placeholder text</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Whether the combobox is disabled</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Search filtering as you type</li>
              <li>Multiple selection with removable pills</li>
              <li>Keyboard navigation (Escape to close, Backspace to remove)</li>
              <li>Disabled state support</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 