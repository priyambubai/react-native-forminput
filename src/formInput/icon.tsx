import { IconProps } from "./props/iconProps";
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const Icon: React.FC<IconProps> = ({
    iconSource = 'font-awesome',
    name = 'rocket',
    size = 30,
    color = '#900',
    style={},
}) => {
    switch (iconSource) {
        case 'font-awesome':
            return (
                <FontAwesomeIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'material':
            return (
                <MaterialIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'material-community':
            return (
                <MaterialCommunityIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'ionicon':
            return (
                <Ionicon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'octicon':
            return (
                <Octicon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'zocial':
            return (
                <ZocialIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'simple-line-icon':
            return (
                <SimpleLineIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'entypo':
            return (
                <EntypoIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'evil':
            return (
                <EvilIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'feather':
            return (
                <FeatherIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'ant-design':
            return (
                <AntDesignIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'foundation':
            return (
                <FoundationIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'font-awesome5':
            return (
                <FontAwesome5Icon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        case 'fontisto':
            return (
                <FontistoIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );

        default:
            return (
                <FontAwesomeIcon
                    name={name}
                    size={size}
                    color={color}
                    style={style}
                />
            );
    }
};

export default Icon;