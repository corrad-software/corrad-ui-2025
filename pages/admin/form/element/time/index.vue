<script setup>
definePageMeta({
  title: "Time Picker",
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
      name: "Time Picker",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const validationValue = ref("");
const disabledValue = ref("");

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="time"
    label="Time"
    placeholder="Select time"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="time"
    label="Required Time"
    placeholder="Select time"
    validation="required"
    :validation-messages="{
      required: 'Please select a time'
    }"
    validation-visibility="live"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const disabledCode = `<template>
  <FormKit
    v-model="value"
    type="time"
    label="Disabled Time"
    placeholder="Cannot select time"
    disabled
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
      <h1 class="text-2xl font-semibold">Time Picker</h1>
      <p class="text-gray-600">
        FormKit time picker component for selecting time values with validation support.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple time picker with default settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="time"
            label="Time"
            placeholder="Select time"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Time picker with required field validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="time"
            label="Required Time"
            placeholder="Select time"
            validation="required"
            :validation-messages="{
              required: 'Please select a time'
            }"
            validation-visibility="live"
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
          Time picker in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="time"
            label="Disabled Time"
            placeholder="Cannot select time"
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
          Complete list of props and configuration options available for the Time Picker component.
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
                  <TableCell>"time"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Label for the time picker</TableCell>
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
                  <TableCell>Disable the time picker</TableCell>
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
                  <TableCell>The outer wrapper of the time picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>inner</TableCell>
                  <TableCell>The inner container of the time picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The time input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>The label element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>The help text element</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 