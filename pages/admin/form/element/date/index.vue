<script setup>
definePageMeta({
  title: "Date & Time Controls",
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
      name: "Date & Time Controls",
      type: "current",
    },
  ],
});

const dateValue = ref("");
const monthValue = ref("");
const weekValue = ref("");
const datetimeValue = ref("");
const rangeValue = ref("");
const validationValue = ref("");
const disabledValue = ref("");

const dateCode = `<template>
  <FormKit
    v-model="value"
    type="date"
    label="Date Input"
    placeholder="Select a date"
    help="Pick a date using the calendar"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const monthCode = `<template>
  <FormKit
    v-model="value"
    type="month"
    label="Month Input"
    placeholder="Select a month"
    help="Pick a month and year"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const weekCode = `<template>
  <FormKit
    v-model="value"
    type="week"
    label="Week Input"
    placeholder="Select a week"
    help="Pick a week from the calendar"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const datetimeCode = `<template>
  <FormKit
    v-model="value"
    type="datetime-local"
    label="Date and Time Input"
    placeholder="Select date and time"
    help="Pick both date and time"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const rangeCode = `<template>
  <FormKit
    v-model="value"
    type="date"
    label="Date Range"
    placeholder="Select a date"
    :min="new Date().toISOString().split('T')[0]"
    :max="new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]"
    help="Select a date within the next 3 months"
  />
</template>

<script setup>
const value = ref("");
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="date"
    label="Required Date"
    placeholder="Select a date"
    validation="required|date"
    :validation-messages="{
      required: 'Please select a date',
      date: 'Please enter a valid date'
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
    type="date"
    label="Disabled Date Input"
    placeholder="Cannot select date"
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
      <h1 class="text-2xl font-semibold">Date & Time Controls</h1>
      <p class="text-gray-600">
        FormKit date and time input components for selecting dates, months, weeks, and datetime values with validation support.
      </p>
    </div>

    <!-- Date Input -->
    <Card>
      <CardHeader>
        <CardTitle>Date Input</CardTitle>
        <CardDescription>
          Basic date input for selecting a specific date.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="dateValue"
            type="date"
            label="Date Input"
            placeholder="Select a date"
            help="Pick a date using the calendar"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="dateCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Month Input -->
    <Card>
      <CardHeader>
        <CardTitle>Month Input</CardTitle>
        <CardDescription>
          Input for selecting a specific month and year.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="monthValue"
            type="month"
            label="Month Input"
            placeholder="Select a month"
            help="Pick a month and year"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="monthCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Week Input -->
    <Card>
      <CardHeader>
        <CardTitle>Week Input</CardTitle>
        <CardDescription>
          Input for selecting a specific week of the year.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="weekValue"
            type="week"
            label="Week Input"
            placeholder="Select a week"
            help="Pick a week from the calendar"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="weekCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Datetime Input -->
    <Card>
      <CardHeader>
        <CardTitle>Date and Time Input</CardTitle>
        <CardDescription>
          Input for selecting both date and time together.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="datetimeValue"
            type="datetime-local"
            label="Date and Time Input"
            placeholder="Select date and time"
            help="Pick both date and time"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="datetimeCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Date Range -->
    <Card>
      <CardHeader>
        <CardTitle>Date Range</CardTitle>
        <CardDescription>
          Date input with minimum and maximum date constraints.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="rangeValue"
            type="date"
            label="Date Range"
            placeholder="Select a date"
            :min="new Date().toISOString().split('T')[0]"
            :max="new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]"
            help="Select a date within the next 3 months"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="rangeCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          Date input with required field validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="date"
            label="Required Date"
            placeholder="Select a date"
            validation="required|date"
            :validation-messages="{
              required: 'Please select a date',
              date: 'Please enter a valid date'
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
          Date input in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="date"
            label="Disabled Date Input"
            placeholder="Cannot select date"
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
          Complete list of props and configuration options available for Date & Time Controls.
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
                  <TableCell>"date"</TableCell>
                  <TableCell>Type of date input (date, month, week, datetime-local)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>min</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Minimum selectable date</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>max</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Maximum selectable date</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>step</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Step interval for datetime-local (in seconds)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Disable the input</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Input Types -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Available Input Types</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>date</TableCell>
                  <TableCell>Input for selecting a specific date</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>month</TableCell>
                  <TableCell>Input for selecting a month and year</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>week</TableCell>
                  <TableCell>Input for selecting a week of the year</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>datetime-local</TableCell>
                  <TableCell>Input for selecting both date and time</TableCell>
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
                  <TableCell>The outer wrapper of the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>inner</TableCell>
                  <TableCell>The inner container of the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The input element</TableCell>
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