/**
 * Available keyboard types for the input field
 * @example inputType="numeric"
 */
export type InputTypeOptions = 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'visible-password' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter' | 'web-search' | undefined;
/**
 * Auto-capitalization options for the input field
 * @example autoCapitalize="words"
 */
export type CapitalizeOptions = 'none' | 'sentences' | 'words' | 'characters' | undefined;
/**
 * Theme options for the component
 * @example theme="dark"
 */
export type ThemeOptions = 'light' | 'dark' | 'system';
/**
 * Core functionality props for the FormInput component
 */
export interface CoreInputProps {
    /**
     * Type of input (e.g., 'default', 'numeric', 'email-address')
     * @example inputType="numeric"
     */
    inputType?: InputTypeOptions;
    /**
     * How to auto capitalize the input
     * @example autoCapitalize="words"
     */
    autoCapitalize?: CapitalizeOptions;
    /**
     * Function to call when the text changes
     * @example onTextChange={(text: string) => console.log(text)}
     */
    onTextChange?: (text: string) => void;
    /**
     * Boolean to indicate an error state
     * @example error={false}
     */
    error?: boolean;
    /**
     * Boolean to hide the text input (for password fields)
     * @example hiddenText={true}
     */
    hiddenText?: boolean;
    /**
     * Boolean to disable the input field and the datepicker functionality
     * @example disabled={true}
     */
    disabled?: boolean;
    /**
     * String to specify the theme of the input field and the datepicker
     * Options are 'light', 'dark', or 'system' (to automatically match the device's theme)
     * @example theme="dark"
     */
    theme?: ThemeOptions;
    /**
     * Boolean to enable multiline input
     * @example multiline={true}
     */
    multiline?: boolean;
    /**
     * Number of lines for multiline input
     * @example numberOfLines={4}
     */
    numberOfLines?: number;
}
//# sourceMappingURL=coreProps.d.ts.map