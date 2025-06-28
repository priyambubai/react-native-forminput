/**
 * Defines the text-related props for the FormInput component
 */
export interface TextContentProps {
    /**
     * Placeholder text for the input field
     * @example placeholderText="Enter your name"
     */
    placeholderText?: string;
    /**
     * Color of the placeholder text
     * @example placeholderTextColor="black"
     */
    placeholderTextColor?: string;
    /**
     * Color of the input text
     * @example inputTextColor="white"
     */
    inputTextColor?: string;
    /**
     * Text for the label
     * @example labelText="Name"
     */
    labelText?: string;
    /**
     * Color of the label text
     * @example labelTextColor="blue"
     */
    labelTextColor?: string;
    /**
     * Text to display instead of '*' when the input is required
     * @example requiredText="This field is required!"
     */
    requiredText?: string;
    /**
     * Text to display below input when there is an error
     * @example errorText="Invalid input"
     */
    errorText?: string;
    /**
     * Value of the input field
     * @example value="Initial value"
     */
    value?: string;
    /**
     * Boolean to hide the label
     * @example hideLabel={true}
     */
    hideLabel?: boolean;
    /**
     * Maximum number of characters allowed in the input
     * @example characterLimit={50}
     */
    characterLimit?: number;
    /**
     * Boolean to show the character limit below input field
     * @example showCharacterLimit={true}
     */
    showCharacterLimit?: boolean;
}
//# sourceMappingURL=textProps.d.ts.map