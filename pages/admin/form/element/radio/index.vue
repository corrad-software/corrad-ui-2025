<script setup>
definePageMeta({
  title: "Radio",
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
      name: "Radio",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const inlineValue = ref("");
const validationValue = ref("");
const disabledValue = ref("");
const customValue = ref("");

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="radio"
    label="Basic Radio Group"
    name="radio-basic"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const inlineCode = `<template>
  <FormKit
    v-model="value"
    type="radio"
    label="Inline Radio Group"
    name="radio-inline"
    :options="options"
    :classes="{
      options: 'flex gap-4'
    }"
  />
</template>

<script setup>
const value = ref("");
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="radio"
    label="Required Radio Group"
    name="radio-validation"
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
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
<\/script>`;

const disabledCode = `<template>
  <FormKit
    v-model="value"
    type="radio"
    label="Disabled Radio Group"
    name="radio-disabled"
    :options="options"
    disabled
  />
</template>

<script setup>
const value = ref("");
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
<\/script>`;

const customCode = `<template>
  <FormKit
    v-model="value"
    type="radio"
    label="Custom Radio Group"
    name="radio-custom"
    :options="[
      { label: 'Small', value: 'sm', help: 'Good for small screens' },
      { label: 'Medium', value: 'md', help: 'Default size' },
      { label: 'Large', value: 'lg', help: 'Good for large screens' }
    ]"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Radio</h1>
      <p class="text-gray-600">
        FormKit radio component for single selection from a list of options with various styling and validation capabilities.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple radio group with vertical layout.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="radio"
            label="Basic Radio Group"
            name="radio-basic"
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

    <!-- Inline Layout -->
    <Card>
      <CardHeader>
        <CardTitle>Inline Layout</CardTitle>
        <CardDescription>
          Radio group with horizontal layout using flex utilities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="inlineValue"
            type="radio"
            label="Inline Radio Group"
            name="radio-inline"
            :options="options"
            :classes="{
              options: 'flex gap-4'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="inlineCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Radio group with required field validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="radio"
            label="Required Radio Group"
            name="radio-validation"
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
          Radio group in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="radio"
            label="Disabled Radio Group"
            name="radio-disabled"
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

    <!-- Custom Options -->
    <Card>
      <CardHeader>
        <CardTitle>Custom Options</CardTitle>
        <CardDescription>
          Radio group with help text for each option.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="customValue"
            type="radio"
            label="Custom Radio Group"
            name="radio-custom"
            :options="[
              { label: 'Small', value: 'sm', help: 'Good for small screens' },
              { label: 'Medium', value: 'md', help: 'Default size' },
              { label: 'Large', value: 'lg', help: 'Good for large screens' }
            ]"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="customCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props and configuration options available for the Radio component.
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
                  <TableCell>"radio"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>required</TableCell>
                  <TableCell>Name attribute for the radio group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>[]</TableCell>
                  <TableCell>Array of radio options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Disable the entire radio group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>validation</TableCell>
                  <TableCell>string|array</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Validation rules to apply</TableCell>
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
                  <TableCell>Display text for the radio option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>value</TableCell>
                  <TableCell>any</TableCell>
                  <TableCell>Value of the radio option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>Help text displayed below the option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>Disable individual radio option</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Classes -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Available Classes</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>wrapper</TableCell>
                  <TableCell>The outer wrapper of the radio group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>Container for all radio options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>option</TableCell>
                  <TableCell>Individual radio option wrapper</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The radio input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>The label element for each option</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 