<script setup>
definePageMeta({
  title: "Form Section",
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
      name: "Section",
      type: "current",
    },
  ],
});

const basicValue = ref({
  firstName: "",
  lastName: "",
  email: "",
});

const collapsibleValue = ref({
  address: "",
  city: "",
  country: "",
});

const dividedValue = ref({
  username: "",
  password: "",
  confirmPassword: "",
});

const basicCode = `<template>
  <Card>
    <CardHeader>
      <CardTitle>Personal Information</CardTitle>
      <CardDescription>
        Enter your personal details below.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <FormKit type="form">
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
      </FormKit>
    </CardContent>
  </Card>
</template>`;

const collapsibleCode = `<template>
  <Accordion type="single" defaultValue="address" class="border rounded-lg">
    <AccordionItem value="address" class="px-6">
      <AccordionTrigger>
        <div>
          <h3 class="text-lg font-semibold">Address Information</h3>
          <p class="text-sm text-muted-foreground">
            Enter your address details.
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div class="space-y-4 pb-6">
          <FormKit type="form">
            <FormKit
              type="textarea"
              name="address"
              label="Street Address"
              validation="required"
            />
            <FormKit
              type="text"
              name="city"
              label="City"
              validation="required"
            />
            <FormKit
              type="text"
              name="country"
              label="Country"
              validation="required"
            />
          </FormKit>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>`;

const dividedCode = `<template>
  <Card>
    <CardHeader>
      <CardTitle>Account Credentials</CardTitle>
      <CardDescription>
        Create your account credentials.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <FormKit type="form">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormKit
            type="text"
            name="username"
            label="Username"
            validation="required"
          />
          <FormKit
            type="password"
            name="password"
            label="Password"
            validation="required|length:8"
            :validation-messages="{
              length: 'Password must be at least 8 characters'
            }"
          />
          <FormKit
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            validation="required|confirm:password"
            :validation-messages="{
              confirm: 'Passwords do not match'
            }"
          />
        </div>
      </FormKit>
    </CardContent>
  </Card>
</template>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Form Section</h1>
      <p class="text-gray-600">
        Organize form content into logical sections using cards and collapsible
        containers.
      </p>
    </div>

    <!-- Basic Section -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Section</CardTitle>
        <CardDescription>
          A simple form section using a card component.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Enter your personal details below.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <FormKit type="form" v-model="basicValue">
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
              </FormKit>
            </CardContent>
          </Card>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Collapsible Section -->
    <Card>
      <CardHeader>
        <CardTitle>Collapsible Section</CardTitle>
        <CardDescription>
          Form section that can be collapsed and expanded.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Accordion
            type="single"
            defaultValue="address"
            class="border rounded-lg"
          >
            <AccordionItem value="address" class="px-6">
              <AccordionTrigger>
                <div>
                  <h3 class="text-lg font-semibold">Address Information</h3>
                  <p class="text-sm text-muted-foreground">
                    Enter your address details.
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div class="space-y-4 pb-6">
                  <FormKit type="form" v-model="collapsibleValue">
                    <FormKit
                      type="textarea"
                      name="address"
                      label="Street Address"
                      validation="required"
                    />
                    <FormKit
                      type="text"
                      name="city"
                      label="City"
                      validation="required"
                    />
                    <FormKit
                      type="text"
                      name="country"
                      label="Country"
                      validation="required"
                    />
                  </FormKit>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="collapsibleCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Divided Section -->
    <Card>
      <CardHeader>
        <CardTitle>Divided Section</CardTitle>
        <CardDescription>
          Form section with grid layout for multiple columns.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Credentials</CardTitle>
              <CardDescription>
                Create your account credentials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormKit type="form" v-model="dividedValue">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormKit
                    type="text"
                    name="username"
                    label="Username"
                    validation="required"
                  />
                  <FormKit
                    type="password"
                    name="password"
                    label="Password"
                    validation="required|length:8"
                    :validation-messages="{
                      length: 'Password must be at least 8 characters',
                    }"
                  />
                  <FormKit
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    validation="required|confirm:password"
                    :validation-messages="{
                      confirm: 'Passwords do not match',
                    }"
                  />
                </div>
              </FormKit>
            </CardContent>
          </Card>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="dividedCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Components and utilities available for creating form sections.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <!-- Components -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Components</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Card</TableCell>
                  <TableCell>Container component for form sections</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CardHeader</TableCell>
                  <TableCell
                    >Header section for title and description</TableCell
                  >
                </TableRow>
                <TableRow>
                  <TableCell>CardContent</TableCell>
                  <TableCell>Content area for form inputs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Accordion</TableCell>
                  <TableCell
                    >Wrapper for expandable/collapsible sections</TableCell
                  >
                </TableRow>
                <TableRow>
                  <TableCell>AccordionItem</TableCell>
                  <TableCell>Individual accordion section</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AccordionTrigger</TableCell>
                  <TableCell
                    >Trigger element for expanding/collapsing</TableCell
                  >
                </TableRow>
                <TableRow>
                  <TableCell>AccordionContent</TableCell>
                  <TableCell>Content area for accordion section</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Utility Classes -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Utility Classes</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>grid</TableCell>
                  <TableCell>Create grid layouts for form fields</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>space-y-{size}</TableCell>
                  <TableCell
                    >Add vertical spacing between form fields</TableCell
                  >
                </TableRow>
                <TableRow>
                  <TableCell>gap-{size}</TableCell>
                  <TableCell>Add spacing between grid items</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>md:grid-cols-{n}</TableCell>
                  <TableCell>Responsive grid columns</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
