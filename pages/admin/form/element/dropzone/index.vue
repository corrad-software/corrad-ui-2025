<script setup>
definePageMeta({
  title: "Dropzone",
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
      name: "Dropzone",
      type: "current",
    },
  ],
});

const dropzoneValue = ref([]);
const restrictedValue = ref([]);

const basicCode = `<template>
  <FormKit
    v-model="value"
    type="dropzone"
    label="Upload Files"
    help="Drag and drop files here or click to browse"
  />
</template>

<script setup>
const value = ref([]);
<\/script>`;

const restrictedCode = `<template>
  <FormKit
    v-model="value"
    type="dropzone"
    label="Upload Images"
    help="Only images up to 5MB are allowed"
    :multiple="true"
    accept="image/*"
    :maxSize="5242880"
    :maxFiles="3"
    :validation="[
      ['required'],
      ['max_size', 5242880],
      ['max_files', 3]
    ]"
    :validation-messages="{
      required: 'Please upload at least one file',
      max_size: 'File size must not exceed 5MB',
      max_files: 'You can upload maximum 3 files'
    }"
  />
</template>

<script setup>
const value = ref([]);
<\/script>`;
</script>

<template>
  <div class="space-y-6">
    <!-- Introduction -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold">Dropzone</h1>
      <p class="text-gray-600">
        A custom FormKit input for file uploads with drag and drop support, file preview, and validation capabilities.
      </p>
    </div>

    <!-- Basic Usage -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Usage</CardTitle>
        <CardDescription>
          A simple dropzone for file uploads with drag and drop support.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="dropzoneValue"
            type="dropzone"
            label="Upload Files"
            help="Drag and drop files here or click to browse"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="basicCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- Restricted Upload -->
    <Card>
      <CardHeader>
        <CardTitle>Restricted Upload</CardTitle>
        <CardDescription>
          Dropzone with file type, size, and count restrictions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-6">
          <FormKit
            v-model="restrictedValue"
            type="dropzone"
            label="Upload Images"
            help="Only images up to 5MB are allowed"
            :multiple="true"
            accept="image/*"
            :maxSize="5242880"
            :maxFiles="3"
            :validation="[
              ['required'],
              ['max_size', 5242880],
              ['max_files', 3]
            ]"
            :validation-messages="{
              required: 'Please upload at least one file',
              max_size: 'File size must not exceed 5MB',
              max_files: 'You can upload maximum 3 files'
            }"
          />
        </div>
        <div class="mt-4">
          <ClientOnly>
            <CodeBlock :code="restrictedCode" language="markup" />
          </ClientOnly>
        </div>
      </CardContent>
    </Card>

    <!-- API Reference -->
    <Card>
      <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>
          Complete list of props, events, and slots available for the Dropzone component.
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
                  <TableCell>multiple</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>Allow multiple file uploads</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>accept</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Accepted file types (e.g., "image/*")</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>maxSize</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Maximum file size in bytes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>maxFiles</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell>Maximum number of files</TableCell>
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
                  <TableCell>(files: File[])</TableCell>
                  <TableCell>Emitted when files are added or removed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>drop</TableCell>
                  <TableCell>(event: DragEvent)</TableCell>
                  <TableCell>Emitted when files are dropped</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>error</TableCell>
                  <TableCell>(error: Error)</TableCell>
                  <TableCell>Emitted when an error occurs</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <!-- Features -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Features</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Drag and drop file upload</li>
              <li>File preview support</li>
              <li>Multiple file upload</li>
              <li>File type restrictions</li>
              <li>File size validation</li>
              <li>Maximum file count limit</li>
              <li>Progress indication</li>
              <li>Error handling</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template> 