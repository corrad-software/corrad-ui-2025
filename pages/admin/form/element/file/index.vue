<script setup>
definePageMeta({
  title: "File Upload",
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
      name: "File Upload",
      type: "current",
    },
  ],
});

const basicValue = ref(null);
const multipleValue = ref([]);
const validationValue = ref(null);
const disabledValue = ref(null);

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="file"
    label="Upload File"
    accept=".jpg,.png,.pdf"
    help="Select a file to upload"
  />
</template>

<script setup>
const value = ref(null);
<\/script>`;

const multipleCode = `<template>
  <FormKit
    v-model="value"
    type="file"
    label="Upload Multiple Files"
    accept=".jpg,.png,.pdf"
    help="Select multiple files to upload"
    multiple
  />
</template>

<script setup>
const value = ref([]);
<\/script>`;

const validationCode = `<template>
  <FormKit
    v-model="value"
    type="file"
    label="Required File"
    accept=".jpg,.png,.pdf"
    validation="required|mime:image/jpeg,image/png,application/pdf|size:5"
    :validation-messages="{
      required: 'Please select a file',
      mime: 'File type must be JPG, PNG or PDF',
      size: 'File size must be less than 5MB'
    }"
    validation-visibility="live"
  />
</template>

<script setup>
const value = ref(null);
<\/script>`;

const disabledCode = `<template>
  <FormKit
    v-model="value"
    type="file"
    label="Disabled Upload"
    accept=".jpg,.png,.pdf"
    disabled
  />
</template>

<script setup>
const value = ref(null);
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">File Upload</h1>
      <p class="text-gray-600">
        FormKit file upload component for handling single and multiple file uploads with validation support.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple file upload input for single files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="basicValue"
            type="file"
            label="Upload File"
            accept=".jpg,.png,.pdf"
            help="Select a file to upload"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Multiple Files -->
    <Card>
      <CardHeader>
        <CardTitle>Multiple Files</CardTitle>
        <CardDescription>
          File upload that allows selecting multiple files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="multipleValue"
            type="file"
            label="Upload Multiple Files"
            accept=".jpg,.png,.pdf"
            help="Select multiple files to upload"
            multiple
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="multipleCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Validation -->
    <Card>
      <CardHeader>
        <CardTitle>Validation</CardTitle>
        <CardDescription>
          File upload with type, size and required validation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="validationValue"
            type="file"
            label="Required File"
            accept=".jpg,.png,.pdf"
            validation="required|mime:image/jpeg,image/png,application/pdf|size:5"
            :validation-messages="{
              required: 'Please select a file',
              mime: 'File type must be JPG, PNG or PDF',
              size: 'File size must be less than 5MB'
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
          File upload in disabled state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="disabledValue"
            type="file"
            label="Disabled Upload"
            accept=".jpg,.png,.pdf"
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
          Complete list of props and configuration options available for the File Upload component.
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
                  <TableCell>"file"</TableCell>
                  <TableCell>The type of input field</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>accept</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Allowed file types (e.g., ".jpg,.png,.pdf")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>multiple</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Allow multiple file selection</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Disable the file upload</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Validation Rules -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Validation Rules</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rule</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>mime</TableCell>
                  <TableCell>Validate file MIME type (e.g., "mime:image/jpeg,image/png")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>size</TableCell>
                  <TableCell>Maximum file size in MB (e.g., "size:5" for 5MB)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>required</TableCell>
                  <TableCell>Make file selection required</TableCell>
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
                  <TableCell>The outer wrapper of the file upload</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>input</TableCell>
                  <TableCell>The file input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>fileItem</TableCell>
                  <TableCell>Container for each selected file</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>fileRemove</TableCell>
                  <TableCell>Remove button for selected files</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>fileList</TableCell>
                  <TableCell>Container for list of selected files</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 