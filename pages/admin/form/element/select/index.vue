<script setup>
definePageMeta({
  title: "Select",
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
      name: "Select",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const groupValue = ref("");
const multiValue = ref([]);
const validationValue = ref("");
const disabledValue = ref("");

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' }
];

const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange' }
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' }
    ]
  }
];

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="select"
    label="Favorite Fruit"
    placeholder="Select a fruit"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange' },
      { label: 'Mango', value: 'mango' }
    ]"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const groupCode = `<template>
  <FormKit
    v-model="value"
    type="select"
    label="Food Item"
    placeholder="Select an item"
    :options="[
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' }
        ]
      },
      {
        label: 'Vegetables',
        options: [
          { label: 'Carrot', value: 'carrot' },
          { label: 'Broccoli', value: 'broccoli' },
          { label: 'Spinach', value: 'spinach' }
        ]
      }
    ]"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const multiCode = `<template>
  <FormKit
    v-model="value"
    type="select"
    label="Favorite Fruits"
    placeholder="Select fruits"
    :options="options"
    multiple
    validation="required|min:2,length"
    :validation-messages="{
      required: 'Please select at least one fruit',
      min: 'Please select at least 2 fruits'
    }"
  />
</template>

<script setup>
const value = ref([]);
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' }
];
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="select"
    label="Required Selection"
    placeholder="Please select an option"
    :options="options"
    validation="required"
    validation-visibility="live"
    :validation-messages="{
      required: 'Please select an option'
    }"
  />
</template>

<script setup>
const value = ref("");
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' }
];
<\/script>`;

const disabledCode = `<template>
  <FormKit
    v-model="value"
    type="select"
    label="Disabled Select"
    placeholder="Cannot select"
    :options="options"
    disabled
  />
</template>

<script setup>
const value = ref("");
const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' }
];
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Select</h1>
      <p class="text-gray-600">
        FormKit select component for single and multiple option selection with support for grouping and validation.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple select input with options.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="select"
            label="Favorite Fruit"
            placeholder="Select a fruit"
            :options="options"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Option Groups -->
    <Card>
      <CardHeader>
        <CardTitle>Option Groups</CardTitle>
        <CardDescription>
          Select with grouped options for better organization.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="groupValue"
            type="select"
            label="Food Item"
            placeholder="Select an item"
            :options="groupedOptions"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="groupCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Multiple Selection -->
    <Card>
      <CardHeader>
        <CardTitle>Multiple Selection</CardTitle>
        <CardDescription>
          Select that allows multiple options to be chosen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="multiValue"
            type="select"
            label="Favorite Fruits"
            placeholder="Select fruits"
            :options="options"
            multiple
            validation="required|min:2,length"
            :validation-messages="{
              required: 'Please select at least one fruit',
              min: 'Please select at least 2 fruits'
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

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Select with validation rules and custom messages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="select"
            label="Required Selection"
            placeholder="Please select an option"
            :options="options"
            validation="required"
            validation-visibility="live"
            :validation-messages="{
              required: 'Please select an option'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="validationCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Disabled State -->
    <Card>
      <CardHeader>
        <CardTitle>Disabled State</CardTitle>
        <CardDescription>
          Select in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="select"
            label="Disabled Select"
            placeholder="Cannot select"
            :options="options"
            disabled
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="disabledCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props and configuration options available for the Select component.
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
                  <TableCell>type</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>"select"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>[]</TableCell>
                  <TableCell>Array of options or option groups</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>multiple</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Enable multiple selection</TableCell>
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
                  <TableCell>Disable the select input</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Option Format -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Option Format</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>Display text for the option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>value</TableCell>
                  <TableCell>any</TableCell>
                  <TableCell>Value of the option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>Array of options for option groups</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 