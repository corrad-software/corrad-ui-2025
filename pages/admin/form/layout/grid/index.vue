<script setup>
definePageMeta({
  title: "Form Grid",
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
      name: "Grid",
      type: "current",
    },
  ],
});

const twoColumnsValue = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const responsiveValue = ref({
  company: "",
  department: "",
  role: "",
  startDate: "",
});

const mixedValue = ref({
  title: "",
  description: "",
  category: "",
  tags: "",
  status: "",
});

const twoColumnsCode = `<template>
  <Card>
    <CardHeader>
      <CardTitle>Personal Information</CardTitle>
      <CardDescription>Enter your contact details below.</CardDescription>
    </CardHeader>
    <CardContent>
      <FormKit type="form">
        <div class="grid grid-cols-2 gap-6">
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
    </CardContent>
  </Card>
</template>`;

const responsiveCode = `<template>
  <Card>
    <CardHeader>
      <CardTitle>Employment Details</CardTitle>
      <CardDescription>Enter your work information.</CardDescription>
    </CardHeader>
    <CardContent>
      <FormKit type="form">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FormKit
            type="text"
            name="company"
            label="Company"
            validation="required"
          />
          <FormKit
            type="text"
            name="department"
            label="Department"
            validation="required"
          />
          <FormKit
            type="text"
            name="role"
            label="Role"
            validation="required"
          />
          <FormKit
            type="date"
            name="startDate"
            label="Start Date"
            validation="required"
          />
        </div>
      </FormKit>
    </CardContent>
  </Card>
</template>`;

const mixedCode = `<template>
  <Card>
    <CardHeader>
      <CardTitle>Content Information</CardTitle>
      <CardDescription>Create your content details.</CardDescription>
    </CardHeader>
    <CardContent>
      <FormKit type="form">
        <div class="grid grid-cols-1 gap-6">
          <FormKit
            type="text"
            name="title"
            label="Title"
            validation="required"
          />
          <div class="grid grid-cols-2 gap-4">
            <FormKit
              type="select"
              name="category"
              label="Category"
              :options="['Blog', 'News', 'Tutorial']"
              validation="required"
            />
            <FormKit
              type="text"
              name="tags"
              label="Tags"
              validation="required"
            />
          </div>
          <FormKit
            type="textarea"
            name="description"
            label="Description"
            validation="required"
          />
          <FormKit
            type="select"
            name="status"
            label="Status"
            :options="['Draft', 'Published', 'Archived']"
            validation="required"
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
      <h1 class="text-2xl font-semibold">Form Grid</h1>
      <p class="text-gray-600">
        Create responsive and flexible form layouts using CSS Grid system.
      </p>
    </div>

    <!-- Two Columns Grid -->
    <Card>
      <CardHeader>
        <CardTitle>Two Columns Grid</CardTitle>
        <CardDescription>
          Basic two-column grid layout for forms.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Enter your contact details below.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormKit type="form" v-model="twoColumnsValue">
                <div class="grid grid-cols-2 gap-6">
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
            </CardContent>
          </Card>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="twoColumnsCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Responsive Grid -->
    <Card>
      <CardHeader>
        <CardTitle>Responsive Grid</CardTitle>
        <CardDescription>
          Grid layout that adapts to different screen sizes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Employment Details</CardTitle>
              <CardDescription>Enter your work information.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormKit type="form" v-model="responsiveValue">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <FormKit
                    type="text"
                    name="company"
                    label="Company"
                    validation="required"
                  />
                  <FormKit
                    type="text"
                    name="department"
                    label="Department"
                    validation="required"
                  />
                  <FormKit
                    type="text"
                    name="role"
                    label="Role"
                    validation="required"
                  />
                  <FormKit
                    type="date"
                    name="startDate"
                    label="Start Date"
                    validation="required"
                  />
                </div>
              </FormKit>
            </CardContent>
          </Card>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="responsiveCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Mixed Layout Grid -->
    <Card>
      <CardHeader>
        <CardTitle>Mixed Layout Grid</CardTitle>
        <CardDescription>
          Combining different grid layouts in a single form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Information</CardTitle>
              <CardDescription>Create your content details.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormKit type="form" v-model="mixedValue">
                <div class="grid grid-cols-1 gap-6">
                  <FormKit
                    type="text"
                    name="title"
                    label="Title"
                    validation="required"
                  />
                  <div class="grid grid-cols-2 gap-4">
                    <FormKit
                      type="select"
                      name="category"
                      label="Category"
                      :options="['Blog', 'News', 'Tutorial']"
                      validation="required"
                    />
                    <FormKit
                      type="text"
                      name="tags"
                      label="Tags"
                      validation="required"
                    />
                  </div>
                  <FormKit
                    type="textarea"
                    name="description"
                    label="Description"
                    validation="required"
                  />
                  <FormKit
                    type="select"
                    name="status"
                    label="Status"
                    :options="['Draft', 'Published', 'Archived']"
                    validation="required"
                  />
                </div>
              </FormKit>
            </CardContent>
          </Card>
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="mixedCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Grid system classes and utilities for form layouts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <!-- Grid Classes -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Grid Classes</h3>
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
                  <TableCell>Creates a grid container</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>grid-cols-{n}</TableCell>
                  <TableCell>Sets number of columns (1-12)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>gap-{size}</TableCell>
                  <TableCell>Sets gap between grid items</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>md:grid-cols-{n}</TableCell>
                  <TableCell>Responsive grid columns (md breakpoint)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>lg:grid-cols-{n}</TableCell>
                  <TableCell>Responsive grid columns (lg breakpoint)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Best Practices -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Best Practices</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Practice</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Responsive Design</TableCell>
                  <TableCell>Use breakpoint prefixes for different screen sizes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consistent Spacing</TableCell>
                  <TableCell>Maintain uniform gap sizes throughout the form</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Logical Grouping</TableCell>
                  <TableCell>Group related fields in the same grid section</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Accessibility</TableCell>
                  <TableCell>Ensure proper tab order in grid layouts</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 