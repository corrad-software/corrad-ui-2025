<script setup>
definePageMeta({
  title: "Color Picker",
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
      name: "Color Picker",
      type: "current",
    },
  ],
});

const basicValue = ref("#4f46e5");
const formatValue = ref("#4f46e5");
const validationValue = ref("");
const disabledValue = ref("#4f46e5");

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="color"
    label="Choose Color"
    help="Click to open color picker"
  />
</template>

<script setup>
const value = ref("#4f46e5");
<\/script>`;

const formatCode = `<template>
  <FormKit
    v-model="value"
    type="color"
    label="Color with Format"
    help="Shows color value in different formats"
    :classes="{
      input: 'w-full'
    }"
  />
</template>

<script setup>
const value = ref("#4f46e5");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="color"
    label="Required Color"
    help="Please select a color"
    validation="required"
    :validation-messages="{
      required: 'Please select a color'
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
    type="color"
    label="Disabled Color Picker"
    help="Cannot change color"
    disabled
  />
</template>

<script setup>
const value = ref("#4f46e5");
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Color Picker</h1>
      <p class="text-gray-600">
        FormKit color picker component for selecting and displaying colors with various formats and validation support.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple color picker with default settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="color"
            label="Choose Color"
            help="Click to open color picker"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Color Format -->
    <Card>
      <CardHeader>
        <CardTitle>Color Format</CardTitle>
        <CardDescription>
          Color picker with value display in different formats.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="formatValue"
            type="color"
            label="Color with Format"
            help="Shows color value in different formats"
            :classes="{
              input: 'w-full'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="formatCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Color picker with required field validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="color"
            label="Required Color"
            help="Please select a color"
            validation="required"
            :validation-messages="{
              required: 'Please select a color'
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
          Color picker in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="color"
            label="Disabled Color Picker"
            help="Cannot change color"
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
          Complete list of props and configuration options available for the Color Picker component.
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
                  <TableCell>"color"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Label for the color picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Help text below the color picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Disable the color picker</TableCell>
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
                  <TableCell>(value: string)</TableCell>
                  <TableCell>Emitted when color value changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>change</TableCell>
                  <TableCell>(value: string)</TableCell>
                  <TableCell>Emitted when color selection is confirmed</TableCell>
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
                  <TableCell>The outer wrapper of the color picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>inner</TableCell>
                  <TableCell>The inner container of the color picker</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The color input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>preview</TableCell>
                  <TableCell>The color preview swatch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>value</TableCell>
                  <TableCell>The color value display</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 