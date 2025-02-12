<script setup>
definePageMeta({
  title: "OTP Input",
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
      name: "OTP Input",
      type: "current",
    },
  ],
});

const otpValue = ref("");
const validatedOtpValue = ref("");

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="otp"
    label="OTP Code"
    :length="6"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="otp"
    label="OTP Code"
    :length="6"
    :validation="[['required'], ['length', 6, 6]]"
    :validation-messages="{
      required: 'OTP code is required',
      length: 'OTP code must be 6 digits'
    }"
    validation-visibility="live"
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
      <h1 class="text-2xl font-semibold">OTP Input</h1>
      <p class="text-gray-600">
        A custom FormKit input for one-time password (OTP) entry with individual digit boxes and auto-focus functionality.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple OTP input field with configurable length.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="otpValue"
            type="otp"
            label="OTP Code"
            :length="6"
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
          OTP input with validation rules and custom error messages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validatedOtpValue"
            type="otp"
            label="OTP Code"
            :length="6"
            :validation="[['required'], ['length', 6, 6]]"
            :validation-messages="{
              required: 'OTP code is required',
              length: 'OTP code must be 6 digits'
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

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props, events, and slots available for the OTP Input component.
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
                  <TableCell>length</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>Number of OTP input boxes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Label text for the input</TableCell>
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
                  <TableCell>Emitted when OTP value changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>complete</TableCell>
                  <TableCell>(value: string)</TableCell>
                  <TableCell>Emitted when all digits are filled</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Auto-focus on next input box when typing</li>
              <li>Supports paste functionality</li>
              <li>Keyboard navigation between boxes</li>
              <li>Mobile-friendly input experience</li>
              <li>Built-in validation support</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 