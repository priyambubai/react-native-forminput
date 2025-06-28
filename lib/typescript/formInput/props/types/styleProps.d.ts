import { ViewStyle, TextStyle } from 'react-native';
/**
 * Defines the style related props for the FormInput component
 */
export interface StyleProps {
    /**
     * Style object for the outermost main container
     * @example mainContainerStyle={{ justifyContent: "center" }}
     */
    mainContainerStyle?: ViewStyle;
    /**
     * Style object for the input container
     * @example inputContainerStyle={{ justifyContent: "center" }}
     */
    inputContainerStyle?: ViewStyle;
    /**
     * Color of the input container background
     * @example inputContainerBackgroundColor="transparent"
     */
    inputContainerBackgroundColor?: string;
    /**
     * Style object for the input field
     * @example inputStyle={{ borderWidth: 0 }}
     */
    inputStyle?: TextStyle | ViewStyle;
    /**
     * Style object for the label text
     * @example labelTextStyle={{ fontSize: 12 }}
     */
    labelTextStyle?: TextStyle;
    /**
     * Style object for the label text container
     * @example labelTextContainerStyle={{ flexDirection: "column" }}
     */
    labelTextContainerStyle?: ViewStyle;
    /**
     * Boolean to mark the input as required
     * @example isRequired={true}
     */
    isRequired?: boolean;
    /**
     * Style object for the required text
     * @example requiredTextStyle={{ fontSize: 5 }}
     */
    requiredTextStyle?: TextStyle;
    /**
     * Color of the required text
     * @example requiredTextColor="red"
     */
    requiredTextColor?: string;
    /**
     * Style object for the error text
     * @example errorTextStyle={{ color: "red" }}
     */
    errorTextStyle?: TextStyle;
}
//# sourceMappingURL=styleProps.d.ts.map