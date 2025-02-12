<script setup>
definePageMeta({
  title: "Checkbox",
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
      name: "Checkbox",
      type: "current",
    },
  ],
});

const basicValue = ref(false);
const groupValue = ref([]);
const inlineValue = ref([]);
const validationValue = ref([]);
const disabledValue = ref(false);

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Accept terms and conditions"
    help="Please read and accept our terms"
  />
</template>

<script setup>
const value = ref(false);
<\/script>`;

const groupCode = `<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Select Options"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]"
  />
</template>

<script setup>
const value = ref([]);
<\/script>`;

const inlineCode = `<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Select Options"
    :options="options"
    :classes="{
      options: 'flex gap-4'
    }"
  />
</template>

<script setup>
const value = ref([]);
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Select at least two options"
    :options="options"
    validation="required|min:2,length"
    validation-visibility="live"
    :validation-messages="{
      required: 'Please select at least one option',
      min: 'Please select at least 2 options'
    }"
  />
</template>

<script setup>
const value = ref([]);
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];
<\/script>`;

const disabledCode = `<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Disabled Checkbox"
    disabled
  />
</template>

<script setup>
const value = ref(false);
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Checkbox</h1>
      <p class="text-gray-600">
        FormKit checkbox component for boolean input and multiple selection with support for grouping and validation.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple checkbox for boolean input.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="checkbox"
            label="Accept terms and conditions"
            help="Please read and accept our terms"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Checkbox Group -->
    <Card>
      <CardHeader>
        <CardTitle>Checkbox Group</CardTitle>
        <CardDescription>
          Multiple checkboxes grouped together for multiple selection.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="groupValue"
            type="checkbox"
            label="Select Options"
            :options="options"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="groupCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Inline Layout -->
    <Card>
      <CardHeader>
        <CardTitle>Inline Layout</CardTitle>
        <CardDescription>
          Checkbox group with horizontal layout using flex utilities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="inlineValue"
            type="checkbox"
            label="Select Options"
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
          Checkbox group with minimum selection validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="checkbox"
            label="Select at least two options"
            :options="options"
            validation="required|min:2,length"
            validation-visibility="live"
            :validation-messages="{
              required: 'Please select at least one option',
              min: 'Please select at least 2 options'
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
          Checkbox in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="checkbox"
            label="Disabled Checkbox"
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
          Complete list of props and configuration options available for the Checkbox component.
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
                  <TableCell>"checkbox"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Array of options for checkbox group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Disable the checkbox or group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Help text below the checkbox</TableCell>
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
                  <TableCell>Display text for the checkbox option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>value</TableCell>
                  <TableCell>any</TableCell>
                  <TableCell>Value when checkbox is checked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>Help text for individual option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>Disable individual checkbox option</TableCell>
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
                  <TableCell>The outer wrapper of the checkbox</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>options</TableCell>
                  <TableCell>Container for checkbox group options</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>option</TableCell>
                  <TableCell>Individual checkbox option wrapper</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The checkbox input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>The label element for the checkbox</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 