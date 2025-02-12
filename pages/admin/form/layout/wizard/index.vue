<script setup>
definePageMeta({
  title: "Form Wizard",
  layout: "admin",
  breadcrumb: [
    {
      name: "Forms",
      path: "/admin/form",
    },
    {
      name: "Layout",
      path: "/admin/form/layout",
    },
    {
      name: "Wizard",
      type: "current",
    },
  ],
});

const formData = ref({
  // Personal Info
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  // References
  reference1: "",
  reference2: "",
  // Supplemental
  comments: "",
  terms: false,
});

const basicCode = `<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
      <FormKit type="step" name="personalInfo" label="Personal Info">
        <div class="grid grid-cols-2 gap-4">
          <FormKit
            type="text"
            name="firstName"
            label="First Name"
            validation="required"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Last Name"
            validation="required"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            validation="required|email"
          />
          <FormKit
            type="tel"
            name="phone"
            label="Phone"
            validation="required"
          />
        </div>
      </FormKit>

      <FormKit type="step" name="references" label="References">
        <div class="space-y-4">
          <FormKit
            type="textarea"
            name="reference1"
            label="First Reference"
            validation="required"
          />
          <FormKit
            type="textarea"
            name="reference2"
            label="Second Reference"
            validation="required"
          />
        </div>
      </FormKit>

      <FormKit type="step" name="supplemental" label="Supplemental">
        <div class="space-y-4">
          <FormKit
            type="textarea"
            name="comments"
            label="Additional Comments"
          />
          <FormKit
            type="checkbox"
            name="terms"
            label="I agree to the terms"
            validation="required"
          />
        </div>
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>`;

const progressCode = `<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="progress">
      <FormKit type="step" name="personalInfo" label="Personal Info">
        <div class="grid grid-cols-2 gap-4">
          <FormKit
            type="text"
            name="firstName"
            label="First Name"
            validation="required"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Last Name"
            validation="required"
          />
        </div>
      </FormKit>

      <FormKit type="step" name="references" label="References">
        <div class="space-y-4">
          <FormKit
            type="textarea"
            name="reference1"
            label="Reference"
            validation="required"
          />
        </div>
      </FormKit>

      <FormKit type="step" name="supplemental" label="Complete">
        <div class="space-y-4">
          <FormKit
            type="checkbox"
            name="terms"
            label="I agree to the terms"
            validation="required"
          />
        </div>
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Form Wizard</h1>
      <p class="text-gray-600">
        Create multi-step forms with FormKit's built-in wizard functionality.
      </p>
    </div>

    <!-- Basic Wizard -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Wizard</CardTitle>
        <CardDescription>
          A three-step form wizard with tab navigation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit type="form" :actions="false" v-model="formData">
            <FormKit type="multi-step" tab-style="tab">
              <FormKit type="step" name="personalInfo" label="Personal Info">
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="text"
                    name="firstName"
                    label="First Name"
                    validation="required"
                  />
                  <FormKit
                    type="text"
                    name="lastName"
                    label="Last Name"
                    validation="required"
                  />
                  <FormKit
                    type="email"
                    name="email"
                    label="Email"
                    validation="required|email"
                  />
                  <FormKit
                    type="tel"
                    name="phone"
                    label="Phone"
                    validation="required"
                  />
                </div>
              </FormKit>

              <FormKit type="step" name="references" label="References">
                <div class="space-y-4">
                  <FormKit
                    type="textarea"
                    name="reference1"
                    label="First Reference"
                    validation="required"
                  />
                  <FormKit
                    type="textarea"
                    name="reference2"
                    label="Second Reference"
                    validation="required"
                  />
                </div>
              </FormKit>

              <FormKit type="step" name="supplemental" label="Supplemental">
                <div class="space-y-4">
                  <FormKit
                    type="textarea"
                    name="comments"
                    label="Additional Comments"
                  />
                  <FormKit
                    type="checkbox"
                    name="terms"
                    label="I agree to the terms"
                    validation="required"
                  />
                </div>
                <template #stepNext>
                  <FormKit type="submit" />
                </template>
              </FormKit>
            </FormKit>
          </FormKit>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Progress Style -->
    <Card>
      <CardHeader>
        <CardTitle>Progress Style</CardTitle>
        <CardDescription>
          A multi-step form with progress bar navigation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit type="form" :actions="false">
            <FormKit type="multi-step" tab-style="progress">
              <FormKit type="step" name="personalInfo" label="Personal Info">
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="text"
                    name="firstName"
                    label="First Name"
                    validation="required"
                  />
                  <FormKit
                    type="text"
                    name="lastName"
                    label="Last Name"
                    validation="required"
                  />
                </div>
              </FormKit>

              <FormKit type="step" name="references" label="References">
                <div class="space-y-4">
                  <FormKit
                    type="textarea"
                    name="reference1"
                    label="Reference"
                    validation="required"
                  />
                </div>
              </FormKit>

              <FormKit type="step" name="supplemental" label="Complete">
                <div class="space-y-4">
                  <FormKit
                    type="checkbox"
                    name="terms"
                    label="I agree to the terms"
                    validation="required"
                  />
                </div>
                <template #stepNext>
                  <FormKit type="submit" />
                </template>
              </FormKit>
            </FormKit>
          </FormKit>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="progressCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Available props and configurations for the multi-step form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <!-- Multi-step Props -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Multi-step Props</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>tab-style</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>tab</TableCell>
                  <TableCell>Style of navigation (tab or progress)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>allow-incomplete</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>true</TableCell>
                  <TableCell>Allow navigation to incomplete steps</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Step Props -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Step Props</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>required</TableCell>
                  <TableCell>Unique identifier for the step</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>label</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>Display label for the step</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Slots -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Available Slots</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Slot</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#stepNext</TableCell>
                  <TableCell
                    >Customize the next/submit button for a step</TableCell
                  >
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
