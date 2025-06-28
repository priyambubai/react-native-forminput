import { ViewProps, TextProps, TextInputProps } from 'react-native';
/**
 * Additional component props that can be passed to the internal React Native components
 */
export interface ComponentProps {
    /**
     * Additional props for the TextInput component
     * @example textInputProps={{ maxLength: 10 }}
     */
    textInputProps?: TextInputProps;
    /**
     * Additional props for the label text
     * @example labelTextProps={{ numberOfLines: 1 }}
     */
    labelTextProps?: TextProps;
    /**
     * Additional props for the required text
     * @example requiredTextProps={{ ellipsizeMode: "tail" }}
     */
    requiredTextProps?: TextProps;
    /**
     * Additional props for the main container view
     * @example mainContainerViewProps={{ accessibilityLabel: "main container" }}
     */
    mainContainerViewProps?: ViewProps;
    /**
     * Additional props for the text input container view
     * @example inputContainerViewProps={{ accessibilityLabel: "input container" }}
     */
    inputContainerViewProps?: ViewProps;
    /**
     * Additional props for the label text container view
     * @example labelTextContainerViewProps={{ accessibilityLabel: "label text container" }}
     */
    labelTextContainerViewProps?: ViewProps;
}
//# sourceMappingURL=componentProps.d.ts.map