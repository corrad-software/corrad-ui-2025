// Base classifications for common styles
const baseStyles = {
  label:
    "block text-sm font-medium text-foreground mb-2 disabled:opacity-50 disabled:cursor-not-allowed",
  message: "text-sm text-danger mt-1",
  asterisk: "text-danger",
  inner:
    "relative flex items-center gap-2 border border-border rounded-md bg-background text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-within:border-foreground focus-within:ring-1 focus-within:ring-foreground focus:outline-0 focus:outline-transparent focus:border-primary focus:ring-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow rounded-[var(--radius)]",
};

// Input group classifications
const inputClassifications = {
  // Text-like inputs base styling
  text: {
    ...baseStyles,
    outer: "relative",
    input: `
      flex w-full
      border-none
      focus:border-none
      focus:ring-0
      focus:ring-transparent
      focus:outline-none
      bg-background text-sm
      text-foreground
      disabled:cursor-not-allowed disabled:opacity-50
      read-only:cursor-not-allowed read-only:opacity-50
    `
      .replace(/\s+/g, " ")
      .trim(),
    prefix: "absolute inset-y-0 left-0 flex items-center pl-3 text-foreground",
    suffix:
      "absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground pointer-events-none",
  },

  // Box-type inputs (checkbox/radio)
  box: {
    inner: "relative flex items-start",
    fieldset: "border-0 p-0 m-0",
    legend:
      "text-sm font-medium text-foreground mb-4 disabled:opacity-50 disabled:cursor-not-allowed",
    wrapper:
      "flex items-center h-4 mb-2 disabled:opacity-50 disabled:cursor-not-allowed",
    help: "text-sm text-muted-foreground",
    label:
      "ml-2 text-sm font-normal text-foreground cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    message: "text-sm text-danger mt-1",
  },

  // Special inputs
  button: {
    wrapper: "relative",
    input: `
      inline-flex items-center justify-center 
      rounded-[var(--radius)] text-sm font-medium 
      ring-offset-background transition-colors 
      focus-visible:outline-none focus-visible:ring-1 
      focus-visible:ring-ring focus-visible:ring-offset-0 
      disabled:pointer-events-none disabled:opacity-50 
      bg-primary text-primary-foreground 
      hover:bg-primary/90 px-4 py-2
    `
      .replace(/\s+/g, " ")
      .trim(),
  },

  otp: {
    ...baseStyles,
    inner: "flex gap-2",
    digit: `
      flex  w-10 
      rounded-[var(--radius)]
      border border-border 
      bg-background text-center text-sm 
      ring-offset-background 
      focus:outline-0	focus:outline-transparent
      focus:border-primary
      focus:ring-0 focus:ring-ring
      disabled:cursor-not-allowed disabled:opacity-50
    `
      .replace(/\s+/g, " ")
      .trim(),
  },

  color: {
    label:
      "block mb-1 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed",
    input:
      "w-16  cursor-pointer rounded-[var(--radius)] mb-2 border-none appearance-none bg-transparent",
  },

  file: {
    ...baseStyles,
    inner: "flex flex-col",
    input: `
      flex h-9 w-full 
      rounded-[var(--radius)]
      border border-border 
      bg-background text-sm 
      ring-offset-background 
      file:h-full
      file:mr-4
      file:px-4
      file:border-0
      file:bg-transparent
      file:text-sm
      file:font-medium 
      file:!bg-primary
      file:!text-primary-foreground
      file:hover:!bg-primary/90
      file:transition-colors
      file:cursor-pointer
      cursor-pointer
      focus-visible:outline-none focus-visible:ring-1 
      focus:ring-ring focus-visible:ring-offset-0 
      disabled:cursor-not-allowed disabled:opacity-50
      shadow
    `
      .replace(/\s+/g, " ")
      .trim(),
    fileList: "flex flex-col gap-1 mt-1",
    fileItem: "p-1 border-b border-border rounded-md",
    fileRemove: "flex text-danger mt-1",
    noFiles: "text-muted-foreground text-sm",
  },

  range: {
    input:
      "appearance-none w-full h-2 p-0 rounded-[var(--radius)] focus:outline-none focus:ring-0 focus:shadow-none bg-primary text-primary-foreground",
  },

  dropzone: {
    ...baseStyles,
    dropzone: `
      w-full
      rounded-lg
      border
      border-dashed
      border-border
      bg-background
      text-center
      hover:cursor-pointer
      hover:border-primary
      hover:bg-background/50
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-ring
      focus-visible:ring-offset-2
      disabled:cursor-not-allowed
      disabled:opacity-50
      transition-colors
      duration-200
    `
      .replace(/\s+/g, " ")
      .trim(),
    preview: `
      mt-4
      space-y-2
    `
      .replace(/\s+/g, " ")
      .trim(),
    fileItem: `
      flex
      items-center
      justify-between
      p-2
      rounded-md
      bg-muted
      text-sm
    `
      .replace(/\s+/g, " ")
      .trim(),
    fileInfo: `
      flex
      items-center
      space-x-2
      text-muted-foreground
    `
      .replace(/\s+/g, " ")
      .trim(),
    removeButton: `
      p-1
      hover:bg-background
      rounded-full
      transition-colors
    `
      .replace(/\s+/g, " ")
      .trim(),
  },

  switch: {
    wrapper: "flex flex-col gap-2",
    help: "text-sm text-muted-foreground",
    inner: "flex items-center gap-2",
    input: `
      relative inline-flex h-[20px] w-[36px] flex-shrink-0 cursor-pointer 
      rounded-full border-2 border-transparent 
      transition-colors duration-200 ease-in-out 
      focus:outline-none focus-visible:ring-2 
      focus-visible:ring-ring focus-visible:ring-offset-2 
      focus-visible:ring-offset-background 
      disabled:cursor-not-allowed disabled:opacity-50
    `
      .replace(/\s+/g, " ")
      .trim(),
    label:
      "text-sm font-medium text-foreground disabled:opacity-50 disabled:cursor-not-allowed",
    message: "text-sm text-danger mt-1",
  },

  // Add specific styles for date-like inputs
  date: {
    ...baseStyles,
    outer: "relative",
    input: `
      w-full rounded-md 
      border border-border 
      bg-background px-3 py-2 text-sm 
      text-foreground
      ring-offset-background 
      placeholder:text-muted-foreground 
      focus:outline-0	focus:outline-transparent
      focus:border-primary
      focus:ring-0 focus:ring-ring
      disabled:cursor-not-allowed disabled:opacity-50 shadow
      rounded-[var(--radius)]
    `
      .replace(/\s+/g, " ")
      .trim(),
    suffix:
      "absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground pointer-events-none",
  },

  combobox: {
    ...baseStyles,
    inner: "relative",
    outer: "relative",
    input: `
      group flex min- w-full flex-wrap items-center gap-1.5 
      rounded-md border border-border bg-background px-2
      text-sm ring-offset-background 
      focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-0 shadow
    `
      .replace(/\s+/g, " ")
      .trim(),
    inputWrapper: "flex flex-1 items-center gap-2 focus:border-none",
    searchInput: `
      flex-1 bg-transparent outline-none border-none
      placeholder:text-muted-foreground 
      disabled:cursor-not-allowed focus:border-none focus:ring-0 focus:outline-none focus:ring-transparent
    `
      .replace(/\s+/g, " ")
      .trim(),
    caret: "h-4 w-4 shrink-0 opacity-50 transition-transform",
    pill: `
      inline-flex items-center gap-1 rounded-md 
      bg-secondary px-2 py-0.5 text-sm 
      text-secondary-foreground
    `
      .replace(/\s+/g, " ")
      .trim(),
    removeButton: `
      p-0.5 
      hover:text-primary 
      focus:text-primary 
      focus:outline-none
    `
      .replace(/\s+/g, " ")
      .trim(),
    removeIcon: "h-3 w-3 text-secondary-foreground/70",
    dropdown: `
      absolute z-50 mt-2 max-h-[200px] w-full 
      overflow-auto rounded-md border 
      bg-popover text-popover-foreground shadow-md
    `
      .replace(/\s+/g, " ")
      .trim(),
    dropdownInner: "p-1",
    option: `
      relative flex w-full select-none items-center 
      rounded-sm px-2 py-1.5 text-sm outline-none 
      data-[highlighted]:bg-accent 
      data-[highlighted]:text-accent-foreground 
      hover:bg-accent hover:text-accent-foreground
    `
      .replace(/\s+/g, " ")
      .trim(),
  },
};

// Global styles that apply to all inputs
const globalStyles = {
  label:
    "block text-sm font-medium text-foreground disabled:opacity-50 disabled:cursor-not-allowed",
  outer: "mb-4",
  help: "text-sm text-muted-foreground mt-1",
  messages: "list-none p-0 mt-1 mb-2",
  message: "text-sm text-danger mt-1",
  wrapper: "relative",
};

// Export theme configuration
export default {
  global: globalStyles,

  // Text-like inputs
  text: inputClassifications.text,
  email: inputClassifications.text,
  password: inputClassifications.text,
  url: inputClassifications.text,
  tel: inputClassifications.text,
  search: inputClassifications.text,
  number: inputClassifications.text,
  date: {
    ...inputClassifications.date,
    suffix: `${inputClassifications.date.suffix} [&>svg]:h-4 [&>svg]:w-4`,
    inner: "relative",
  },
  time: {
    ...inputClassifications.date,
    suffix: `${inputClassifications.date.suffix} [&>svg]:h-4 [&>svg]:w-4`,
    inner: "relative",
  },
  month: {
    ...inputClassifications.date,
    suffix: `${inputClassifications.date.suffix} [&>svg]:h-4 [&>svg]:w-4`,
    inner: "relative",
  },
  week: {
    ...inputClassifications.date,
    suffix: `${inputClassifications.date.suffix} [&>svg]:h-4 [&>svg]:w-4`,
    inner: "relative",
  },
  "datetime-local": {
    ...inputClassifications.date,
    suffix: `${inputClassifications.date.suffix} [&>svg]:h-4 [&>svg]:w-4`,
    inner: "relative",
  },
  mask: inputClassifications.text,

  // Box-type inputs
  checkbox: {
    ...inputClassifications.box,
    input:
      "h-4 w-4 rounded-[calc(var(--radius)-2px)] border-border bg-background cursor-pointer checked:bg-primary focus:ring-1 focus:ring-offset-0 focus:ring-primary focus:checked:bg-primary hover:bg-transparent hover:checked:bg-primary disabled:cursor-not-allowed disabled:opacity-50",
  },
  radio: {
    ...inputClassifications.box,
    input:
      "h-4 w-4 rounded-full border-border bg-background cursor-pointer checked:bg-primary focus:ring-1 focus:ring-offset-0 focus:ring-primary focus:checked:bg-primary hover:bg-transparent hover:checked:bg-primary disabled:cursor-not-allowed disabled:opacity-50",
  },

  // Special inputs
  button: inputClassifications.button,
  submit: inputClassifications.button,
  color: inputClassifications.color,
  file: inputClassifications.file,
  range: inputClassifications.range,
  otp: inputClassifications.otp,

  // Complex inputs
  select: { ...inputClassifications.text, option: "p-2" },
  textarea: {
    ...inputClassifications.text,
  },
  dropzone: {
    ...inputClassifications.dropzone,
    inner: "formkit-inner-dropzone",
    dropzone: "formkit-dropzone",
  },

  switch: inputClassifications.switch,
  combobox: inputClassifications.combobox,
};
