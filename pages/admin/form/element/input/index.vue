<script setup>
definePageMeta({
  title: "Input",
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
      name: "Input",
      type: "current",
    },
  ],
});

const basicValue = ref("");
const validatedValue = ref("");
const prefixValue = ref("");
const suffixValue = ref("");
const iconValue = ref("");
const stateValue = ref("");

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="text"
    label="Username"
    placeholder="Enter your username"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="text"
    label="Username"
    placeholder="Enter your username"
    help="Username must be between 3-20 characters"
    :validation="[
      ['required'],
      ['length', 3, 20],
      ['matches', /^[A-Za-z0-9-]+$/]
    ]"
    :validation-messages="{
      required: 'Username is required',
      length: 'Username must be between 3-20 characters',
      matches: 'Username can only contain letters, numbers, and hyphens'
    }"
    validation-visibility="live"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const prefixSuffixCode = `<template>
  <FormKit
    v-model="value"
    type="text"
    label="Website"
    placeholder="your-site"
  >
    <template #prefix>https://</template>
    <template #suffix>.com</template>
  </FormKit>
</template>

<script setup>
const value = ref("");
<\/script>`;

const iconCode = `<template>
  <FormKit
    v-model="value"
    type="text"
    label="Search"
    placeholder="Search..."
  >
    <template #prefix>
      <Icon name="lucide:search" class="w-4 h-4 text-gray-500" />
    </template>
  </FormKit>
</template>

<script setup>
const value = ref("");
<\/script>`;

const statesCode = `<template>
  <FormKit
    v-model="value"
    type="text"
    label="Disabled Input"
    placeholder="This input is disabled"
    disabled
  />
  <FormKit
    v-model="value"
    type="text"
    label="Readonly Input"
    placeholder="This input is readonly"
    readonly
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
      <h1 class="text-2xl font-semibold">Input</h1>
      <p class="text-gray-600">
        FormKit input components for collecting user text input with built-in
        validation and customization options.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple text input field with label and placeholder.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="text"
            label="Username"
            placeholder="Enter your username"
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
          Input with built-in validation rules and custom error messages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validatedValue"
            type="text"
            label="Username"
            placeholder="Enter your username"
            help="Username must be between 3-20 characters"
            :validation="[
              ['required'],
              ['length', 3, 20],
              ['matches', /^[A-Za-z0-9-]+$/],
            ]"
            :validation-messages="{
              required: 'Username is required',
              length: 'Username must be between 3-20 characters',
              matches:
                'Username can only contain letters, numbers, and hyphens',
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

    <!-- Prefix and Suffix -->
    <Card>
      <CardHeader>
        <CardTitle>Prefix and Suffix</CardTitle>
        <CardDescription>
          Input with prefix and suffix slots for additional content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="prefixValue"
            type="text"
            label="Website"
            placeholder="your-site"
          >
            <template #prefix>
              <span
                class="px-3 py-2 bg-muted text-muted-foreground border-r border-border"
                >https://</span
              >
            </template>
            <template #suffix>
              <span
                class="px-3 py-2 bg-muted text-muted-foreground border-l border-border"
                >.com</span
              >
            </template>
          </FormKit>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="prefixSuffixCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Icons -->
    <Card>
      <CardHeader>
        <CardTitle>Icons</CardTitle>
        <CardDescription>
          Input with icon integration using prefix or suffix slots.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="iconValue"
            type="text"
            label="Search"
            placeholder="Search..."
          >
            <template #prefix>
              <span class="px-3 py-2 flex items-center">
                <Icon
                  name="lucide:search"
                  class="w-4 h-4 text-muted-foreground"
                />
              </span>
            </template>
          </FormKit>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="iconCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- States -->
    <Card>
      <CardHeader>
        <CardTitle>States</CardTitle>
        <CardDescription>
          Input states including disabled and readonly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6 space-y-4">
          <FormKit
            v-model="stateValue"
            type="text"
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
          />
          <FormKit
            v-model="stateValue"
            type="text"
            label="Readonly Input"
            placeholder="This input is readonly"
            readonly
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
          Complete list of props, events, and slots available for the Input
          component.
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
                  <TableCell>"text"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Label text for the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>placeholder</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Placeholder text</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Help text displayed below the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>validation</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>[]</TableCell>
                  <TableCell>Array of validation rules</TableCell>
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
                  <TableCell>Emitted when input value changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>blur</TableCell>
                  <TableCell>(event: FocusEvent)</TableCell>
                  <TableCell>Emitted when input loses focus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focus</TableCell>
                  <TableCell>(event: FocusEvent)</TableCell>
                  <TableCell>Emitted when input gains focus</TableCell>
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
                  <TableCell>prefix</TableCell>
                  <TableCell
                    >Content to be displayed before the input</TableCell
                  >
                </TableRow>
                <TableRow>
                  <TableCell>suffix</TableCell>
                  <TableCell>Content to be displayed after the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>Custom label content</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>help</TableCell>
                  <TableCell>Custom help text content</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
