<script setup>
definePageMeta({
  title: "Textarea",
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
      name: "Textarea",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const resizableValue = ref("");
const autoGrowValue = ref("");
const validationValue = ref("");
const rowsValue = ref("");

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="textarea"
    label="Basic Textarea"
    placeholder="Enter your message"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const resizableCode = `<template>
  <FormKit
    v-model="value"
    type="textarea"
    label="Resizable Textarea"
    placeholder="This textarea can be resized"
    :classes="{
      input: 'resize-y'
    }"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const autoGrowCode = `<template>
  <FormKit
    v-model="value"
    type="textarea"
    label="Auto-height Textarea"
    placeholder="This textarea will grow with content"
    help="This textarea will grow as you type"
    auto-height
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="textarea"
    label="Message"
    placeholder="Enter your message"
    validation="required|length:10,500"
    :validation-messages="{
      required: 'Please enter your message',
      length: 'Message must be between 10 and 500 characters'
    }"
    help="Enter between 10 and 500 characters"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const rowsCode = `<template>
  <FormKit
    v-model="value"
    type="textarea"
    label="Fixed Height"
    placeholder="This textarea has a fixed number of rows"
    rows="5"
    :classes="{
      input: 'resize-none'
    }"
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
      <h1 class="text-2xl font-semibold">Textarea</h1>
      <p class="text-gray-600">
        FormKit textarea component for multi-line text input with various configuration options.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple textarea input with label and placeholder.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="textarea"
            label="Basic Textarea"
            placeholder="Enter your message"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Resizable -->
    <Card>
      <CardHeader>
        <CardTitle>Resizable</CardTitle>
        <CardDescription>
          Textarea that can be resized vertically by the user.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="resizableValue"
            type="textarea"
            label="Resizable Textarea"
            placeholder="This textarea can be resized"
            :classes="{
              input: 'resize-y'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="resizableCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Auto-growing -->
    <Card>
      <CardHeader>
        <CardTitle>Auto Height</CardTitle>
        <CardDescription>
          Textarea that automatically adjusts its height based on content using the auto-height plugin.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="autoGrowValue"
            type="textarea"
            label="Auto-height Textarea"
            placeholder="This textarea will grow with content"
            help="This textarea will grow as you type"
            auto-height
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="autoGrowCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Textarea with validation rules and custom messages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="textarea"
            label="Message"
            placeholder="Enter your message"
            validation="required|length:10,500"
            :validation-messages="{
              required: 'Please enter your message',
              length: 'Message must be between 10 and 500 characters'
            }"
            help="Enter between 10 and 500 characters"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="validationCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Fixed Height -->
    <Card>
      <CardHeader>
        <CardTitle>Fixed Height</CardTitle>
        <CardDescription>
          Textarea with a fixed number of rows.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="rowsValue"
            type="textarea"
            label="Fixed Height"
            placeholder="This textarea has a fixed number of rows"
            rows="5"
            :classes="{
              input: 'resize-none'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="rowsCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props and configuration options available for the Textarea component.
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
                  <TableCell>"textarea"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>auto-height</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Enables automatic height adjustment based on content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>rows</TableCell>
                  <TableCell>number|string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Number of visible text lines</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>placeholder</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Placeholder text</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>validation</TableCell>
                  <TableCell>string|array</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Validation rules to apply</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>classes</TableCell>
                  <TableCell>object</TableCell>
                  <TableCell>{}</TableCell>
                  <TableCell>Custom classes for textarea elements</TableCell>
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
                  <TableCell>resize-none</TableCell>
                  <TableCell>Disables textarea resizing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>resize-y</TableCell>
                  <TableCell>Enables vertical resizing only</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>resize</TableCell>
                  <TableCell>Enables both horizontal and vertical resizing</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 