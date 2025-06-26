# FormInput Component

The `FormInput` is a custom, reusable input component for React-Native applications. It supports both text input and date picker functionality, with extensive customization options.

▶️ [View Live on Expo Snack](https://snack.expo.dev/@priyam.websadroit/react-native-forminput?platform=android) ▶️ | [Full Documentation](https://react-native-forminput-docs.vercel.app)

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Prop Groups](#prop-groups)
- [Migration Guide](#migration-guide-v2)
- [Examples](#examples)
- [Component Previews](#component-previews)
  - [Text Input](#text-input-previews)
  - [Date Picker](#date-picker-previews)
- [Changelog](#changelog)

## Installation

```bash
npm install react-native-forminput
# or
yarn add react-native-forminput
```

## Basic Usage

```tsx
import { useState } from "react";
import { FormInput } from "react-native-forminput";

const App = () => {
  const [name, setName] = useState<string>("");

  // New grouped props approach (v2.0+)
  return (
    <FormInput
      text={{
        labelText: "Name",
        placeholderText: "Enter your name",
        value: name,
        characterLimit: 20,
      }}
      style={{
        isRequired: true,
      }}
      icon={{
        leftIcon: "user",
        rightIcon: "times-circle",
        rightIconColor: name ? "#999" : "#CCC",
        rightIconOnPress: () => setName("")
      }}
      core={{
        onTextChange: (text) => setName(text)
      }}
    />
  );
};
```

## Prop Groups

FormInput v2.0+ uses a modern grouped props approach for better organization and TypeScript support:

| Prop Group | Description | Example |
|------------|-------------|---------|
| `text` | Text content props like label, placeholder, and values | `text={{ labelText: "Name" }}` |
| `style` | Visual styling props | `style={{ inputContainerStyle: { borderRadius: 8 } }}` |
| `icon` | Left and right icon configuration | `icon={{ leftIcon: "user" }}` |
| `core` | Core functionality props | `core={{ onTextChange: (text) => setValue(text) }}` |
| `datePicker` | Date picker functionality | `datePicker={{ enabled: true }}` |
| `datePickerStyle` | Date picker styling | `datePickerStyle={{ selectedTextStyle: { color: "blue" } }}` |
| `componentProps` | Props passed to underlying components | `componentProps={{ textInputProps: { autoFocus: true } }}` |

For detailed documentation of all available props within each group, refer to:

- [Text Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/text-props)
- [Style Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/style-props)
- [Icon Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/icon-props)
- [Core Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/core-props)
- [Date Picker Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/datepicker-props)
- [Component Props Documentation](https://react-native-forminput-docs.vercel.app/api-reference/component-props)

## Migration Guide (v2)

### Breaking Changes

Version 2.0 introduces a new props structure that groups related props together. While the flat props structure is still supported for backward compatibility, we recommend migrating to the new grouped approach:

**Before (v1.x):**
```tsx
<FormInput 
  labelText="Name"
  value={name}
  onTextChange={(text) => setName(text)}
  leftIcon="user"
/>
```

**After (v2.x):**
```tsx
<FormInput 
  text={{
    labelText: "Name",
    value: name
  }}
  core={{
    onTextChange: (text) => setName(text)
  }}
  icon={{
    leftIcon: "user"
  }}
/>
```

## Examples

### Basic Text Input
```tsx
<FormInput
  text={{ labelText: "Email", placeholderText: "Enter your email" }}
  style={{ isRequired: true }}
  core={{ inputType: "email-address" }}
/>
```

### Date Picker
```tsx
<FormInput
  text={{ labelText: "Date of Birth", datePlaceholder: "Select Date" }}
  datePicker={{ 
    enabled: true,
    disableFutureDates: true,
    onDateChange: (date) => setSelectedDate(date)
  }}
  icon={{ leftIcon: "calendar" }}
/>
```

### Password Input
```tsx
<FormInput
  text={{ labelText: "Password", placeholderText: "Enter password" }}
  core={{ hiddenText: true }}
  icon={{ rightIcon: "eye", rightIconOnPress: () => togglePasswordVisibility() }}
/>
```

For complete documentation with all available props and advanced examples, please visit [our documentation website](https://react-native-forminput-docs.vercel.app).

## Component Previews

### Text Input Previews

<div align="center">
  <p><strong>Light Mode</strong></p>
  <img src="https://i.ibb.co/yQ0GZ5j/form-input-light.png" alt="FormInput Component Light Mode" width="300" />
  
  <p><strong>Dark Mode</strong></p>
  <img src="https://i.ibb.co/9TJsFS0/form-input-dark.png" alt="FormInput Component Dark Mode" width="300" />
</div>

### Date Picker Previews

<div align="center">
  <p><strong>Date Picker Input Field (Light & Dark)</strong></p>
  <img src="https://i.ibb.co/FVdj8jH/date-Picker-ref-1.png" alt="Date Picker Input Light" width="300" />
  <img src="https://i.ibb.co/MSqpL1s/form-input-datepicker-form-dark.png" alt="Date Picker Input Dark" width="300" />
    <details>
    <summary><strong>View Date Picker Modal Examples</strong> (Click to expand)</summary>

<p><strong>Single Date Selection (Light & Dark)</strong></p>
<img src="https://i.ibb.co/GtFZLVQ/date-Picker-single.png" alt="Date Picker Single Light" width="300" />
<img src="https://i.ibb.co/s6DNft6/date-picker-single-dark.png" alt="Date Picker Single Dark" width="300" />

<p><strong>Date & Time Selection (Light & Dark)</strong></p>
<img src="https://i.ibb.co/VYrS6kw/date-Time-Picker-single.png" alt="Date Time Picker Light" width="300" />
<img src="https://i.ibb.co/Tgy2Wm8/date-time-picker-dark.png" alt="Date Time Picker Dark" width="300" />

<p><strong>Date Range Selection (Light & Dark)</strong></p>
<img src="https://i.ibb.co/w4Gjjsz/date-Picker-range.png" alt="Date Range Picker Light" width="300" />
<img src="https://i.ibb.co/Jd2Rkv9/date-picker-range-dark.png" alt="Date Range Picker Dark" width="300" />

<p><strong>Multiple Date Selection (Light & Dark)</strong></p>
<img src="https://i.ibb.co/QJvmshf/date-Picker-multiple.png" alt="Multiple Date Picker Light" width="300" />
<img src="https://i.ibb.co/9WQRJTW/date-picker-multiple-dark.png" alt="Multiple Date Picker Dark" width="300" />
  </details>
</div>

## Changelog

> For a complete version history, see our [full changelog on the documentation website](https://react-native-forminput-docs.vercel.app/changelog).

### [2.0.0] - 2025-06-20

- **BREAKING CHANGE**: Introduced new grouped props structure for better organization and TypeScript support
- Added comprehensive JSDoc documentation to all prop types
- Maintained backward compatibility with flat props structure
- Improved TypeScript type definitions and intellisense support

### [1.9.3] - 2025-05-01

- Added `datePickerConfirmButtonStyle` and `datePickerConfirmButtonTextStyle` props to allow users to customize the confirm button's style and text style in the date picker.

### [1.9.2] - 2025-05-01

- Added `datePlaceholderStyle` prop to allow users to pass additional styles for the date placeholder text.
- Fixed minor styling issues in the date picker component.

### [1.9.0] - 2025-04-02

- Introduced several new styling props for the DatePicker, allowing greater customization of its appearance (e.g., `selectedContainerStyle`, `todayContainerStyle`, `datePickerLeftButtonStyle`, etc.).
- Added support for additional `datePickerProps` and `datePickerStyles` for advanced customization.
- Updated `datepicker` library to the latest version.
- Added `leftIconSource` and `rightIconSource` props: These props allow users to specify the source of their icons (e.g., FontAwesome, MaterialIcons, etc.). The default source is FontAwesome.
- Added `leftIconSize` and `rightIconSize` props: These props allow users to specify size of the icons.
- Added `multiline` and `numberOfLines` props: These props allow users to enable multiline input and specify the number of lines for the input field.

### [1.8.1] - 2024-09-11

- Fixed minor styling issue.

### [1.8.0] - 2024-09-11

- Updated code to be compatible with Latest React Native Version.

### [1.7.0] - 2024-07-15

#### Changed

- Updated visual style of the component.

#### Added

- `theme` prop: Introduced a new `theme` prop that allows users to set the theme of the component. The available options are `light`, `dark`, and `system`. The `system` option automatically matches the theme of the device.

### [1.6.0] - 2024-06-17

#### Changed

- Updated GIT Repository
- Updated various style props to `ViewStyle` and `TextStyle`: This change allows users to get style suggestions more easily. This applies to all components where style props were previously used.

### [1.5.0] - 2024-06-13

#### Added

- `inputContainerBackgroundColor` prop: This new prop allows you to customize the background color of the input container. You can pass any valid color string as the value.
- Disabled functionality for the datepicker: The datepicker can now be disabled, preventing user interaction. This can be controlled via the `disabled` prop. When `disabled` is set to `true`, the datepicker will be non-interactive.

---

## Documentation

This README provides a quick overview of the FormInput component. For comprehensive documentation including:

- Complete API reference for all props
- Advanced usage examples
- Styling guide
- Theming instructions
- Form validation techniques
- Interactive demos

Please visit our [documentation website](https://react-native-forminput-docs.vercel.app).