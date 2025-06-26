import { StyleProps } from './types/styleProps';
import { TextContentProps } from './types/textProps';
import { IconProps } from './types/iconProps';
import { DatePickerProps, DatePickerStyleProps } from './types/datePickerProps';
import { CoreInputProps } from './types/coreProps';
import { ComponentProps } from './types/componentProps';

/**
 * Combined interface for all props - traditional approach (exposes all props individually)
 * This approach is maintained for backward compatibility
 */
export interface FormInputPropsFlat extends 
  StyleProps,
  TextContentProps,
  IconProps,
  DatePickerProps,
  DatePickerStyleProps,
  CoreInputProps,
  ComponentProps {}

/**
 * Modern grouped approach (significantly reduces prop signature)
 * Organizes props into logical groups for better readability and maintainability
 */
export interface FormInputProps {
  /**
   * Style-related props for the FormInput component
   * @see StyleProps for all available style options
   */
  style?: StyleProps;
  
  /**
   * Text content props for the FormInput component
   * @see TextContentProps for all available text options
   */
  text?: TextContentProps;
  
  /**
   * Icon props for both left and right icons
   * @see IconProps for all available icon options
   */
  icon?: IconProps;
  
  /**
   * Date picker functionality props
   * @see DatePickerProps for all available date picker options
   */
  datePicker?: DatePickerProps;
  
  /**
   * Style props specific to the date picker
   * @see DatePickerStyleProps for all available date picker style options
   */
  datePickerStyle?: DatePickerStyleProps;
  
  /**
   * Core functionality props like input type, error state, etc.
   * @see CoreInputProps for all available core options
   */
  core?: CoreInputProps;
  
  /**
   * Props that get passed directly to the underlying React Native components
   * @see ComponentProps for all available component options
   */
  componentProps?: ComponentProps;
}

// Re-export all the individual types for consumers
export * from './types/styleProps';
export * from './types/textProps';
export * from './types/iconProps';
export * from './types/datePickerProps';
export * from './types/coreProps';
export * from './types/componentProps';