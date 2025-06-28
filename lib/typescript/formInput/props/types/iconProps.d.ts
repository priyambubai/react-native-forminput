import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { ReactNode } from 'react';
/**
 * Available icon library sources for FormInput icons
 */
export type IconSourceType = 'font-awesome' | 'font-awesome5' | 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'ant-design' | 'feather' | 'fontisto';
/**
 * Props related to the left and right icons in the FormInput component
 */
export interface IconProps {
    /**
     * Name of the left icon (Icon used: react-native-vector-icons/FontAwesome by default)
     * @example leftIcon="home"
     */
    leftIcon?: string;
    /**
     * Color of the left icon
     * @example leftIconColor="blue"
     */
    leftIconColor?: string;
    /**
     * Style object for the left icon
     * @example leftIconStyle={{ size: 20 }}
     */
    leftIconStyle?: StyleProp<TextStyle>;
    /**
     * Style object for the left icon container
     * @example leftIconContainerStyle={{ padding: 10 }}
     */
    leftIconContainerStyle?: ViewStyle;
    /**
     * Function to render a custom left icon
     * @example renderLeftIcon={() => <Icon name="home" />}
     */
    renderLeftIcon?: ReactNode;
    /**
     * Source of the left icon (e.g., FontAwesome, MaterialIcons, etc.)
     * @example leftIconSource="ionicon" // Default is 'font-awesome'
     */
    leftIconSource?: IconSourceType;
    /**
     * Size of the left icon
     * @example leftIconSize={20} // Default is 20
     */
    leftIconSize?: number;
    /**
     * Function to call when the left icon is pressed
     * @example leftIconOnPress={() => console.log("Left icon pressed")}
     */
    leftIconOnPress?: () => void;
    /**
     * Name of the right icon (Icon used: react-native-vector-icons/FontAwesome by default)
     * @example rightIcon="settings"
     */
    rightIcon?: string;
    /**
     * Color of the right icon
     * @example rightIconColor="green"
     */
    rightIconColor?: string;
    /**
     * Style object for the right icon
     * @example rightIconStyle={{ size: 20 }}
     */
    rightIconStyle?: StyleProp<TextStyle>;
    /**
     * Style object for the right icon container
     * @example rightIconContainerStyle={{ padding: 10 }}
     */
    rightIconContainerStyle?: ViewStyle;
    /**
     * Function to render a custom right icon
     * @example renderRightIcon={() => <Icon name="home" />}
     */
    renderRightIcon?: ReactNode;
    /**
     * Source of the right icon (e.g., FontAwesome, MaterialIcons, etc.)
     * @example rightIconSource="ionicon" // Default is 'font-awesome'
     */
    rightIconSource?: IconSourceType;
    /**
     * Size of the right icon
     * @example rightIconSize={20} // Default is 20
     */
    rightIconSize?: number;
    /**
     * Function to call when the right icon is pressed
     * @example rightIconOnPress={() => console.log("Right icon pressed")}
     */
    rightIconOnPress?: () => void;
}
//# sourceMappingURL=iconProps.d.ts.map