<script setup>
definePageMeta({
  title: "Input Mask",
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
      name: "Input Mask",
      type: "current",
    },
  ],
});

const phoneValue = ref("");
const dateValue = ref("");
const currencyValue = ref("");
const customValue = ref("");

const phoneCode = `<template>
  <FormKit
    v-model="value"
    type="mask"
    label="Phone Number"
    mask="(###) ###-####"
    placeholder="(555) 555-5555"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const dateCode = `<template>
  <FormKit
    v-model="value"
    type="mask"
    label="Date"
    mask="##/##/####"
    placeholder="MM/DD/YYYY"
    :validation="[
      ['required'],
      ['matches', /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/]
    ]"
    :validation-messages="{
      required: 'Date is required',
      matches: 'Please enter a valid date in MM/DD/YYYY format'
    }"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const currencyCode = `<template>
  <FormKit
    v-model="value"
    type="mask"
    label="Amount"
    mask="$###,###.##"
    placeholder="$0.00"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const customCode = `<template>
  <FormKit
    v-model="value"
    type="mask"
    label="Custom Pattern"
    mask="AAA-###-***"
    placeholder="ABC-123-xyz"
    help="A = letter, # = number, * = alphanumeric"
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
      <h1 class="text-2xl font-semibold">Input Mask</h1>
      <p class="text-gray-600">
        A custom FormKit input that enforces specific input patterns for formatted data entry.
      </p>
    </div>

    <!-- Phone Number -->
    <Card>
      <CardHeader>
        <CardTitle>Phone Number</CardTitle>
        <CardDescription>
          Input mask for phone number formatting.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="phoneValue"
            type="mask"
            label="Phone Number"
            mask="(###) ###-####"
            placeholder="(555) 555-5555"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="phoneCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Date -->
    <Card>
      <CardHeader>
        <CardTitle>Date</CardTitle>
        <CardDescription>
          Input mask for date formatting with validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="dateValue"
            type="mask"
            label="Date"
            mask="##/##/####"
            placeholder="MM/DD/YYYY"
            :validation="[
              ['required'],
              ['matches', /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/]
            ]"
            :validation-messages="{
              required: 'Date is required',
              matches: 'Please enter a valid date in MM/DD/YYYY format'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="dateCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Currency -->
    <Card>
      <CardHeader>
        <CardTitle>Currency</CardTitle>
        <CardDescription>
          Input mask for currency formatting.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="currencyValue"
            type="mask"
            label="Amount"
            mask="$###,###.##"
            placeholder="$0.00"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="currencyCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Custom Pattern -->
    <Card>
      <CardHeader>
        <CardTitle>Custom Pattern</CardTitle>
        <CardDescription>
          Input mask with custom pattern using different mask characters.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="customValue"
            type="mask"
            label="Custom Pattern"
            mask="AAA-###-***"
            placeholder="ABC-123-xyz"
            help="A = letter, # = number, * = alphanumeric"
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
          Complete list of props, events, and slots available for the Input Mask component.
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
                  <TableCell>mask</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>required</TableCell>
                  <TableCell>The mask pattern to apply</TableCell>
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
                  <TableCell>Placeholder text showing the expected format</TableCell>
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

          <!-- Mask Characters -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Mask Characters</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Character</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Numeric character (0-9)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A</TableCell>
                  <TableCell>Alphabetic character (A-Z, a-z)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>*</TableCell>
                  <TableCell>Alphanumeric character (0-9, A-Z, a-z)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other</TableCell>
                  <TableCell>Any other character is treated as a literal</TableCell>
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
                  <TableCell>complete</TableCell>
                  <TableCell>(value: string)</TableCell>
                  <TableCell>Emitted when the mask is completely filled</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Automatic formatting as you type</li>
              <li>Support for various mask patterns</li>
              <li>Built-in validation support</li>
              <li>Placeholder support</li>
              <li>Copy/paste handling</li>
              <li>Mobile-friendly input</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 