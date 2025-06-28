import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { colors, getThemedColor, styles } from './utils';
import { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { FormInputProps, FormInputPropsFlat } from './props/formInputProps';
import Icon from './icon';
import DatePickerModal from './datePickerModal';

/**
 * FormInput Component
 * 
 * This component supports two styles of props:
 * 1. Flat props (legacy style) - All props at the top level (e.g., labelText, value, leftIcon)
 * 2. Grouped props (recommended) - Props organized into logical groups (e.g., text.labelText, icon.leftIcon)
 * 
 * The component automatically detects which style you're using and handles it accordingly.
 * For new code, we recommend using the grouped props approach for better organization and maintainability.
 *
 * Example with grouped props:
 * <FormInput 
 *   core={{ error: true }}
 *   text={{ labelText: "Username", value: username }} 
 *   style={{ inputStyle: { borderRadius: 8 } }}
 * />
 */

// Helper to check if props are using the flat structure (old style)
const isFlatProps = (props: any): props is FormInputPropsFlat => {
  // Check for properties that would only exist at the top level in flat props
  // and not in the grouped structure
  return (
    props &&
    typeof props === 'object' &&
    // Check if any typical flat props exist directly on the props object
    // instead of being nested in a group
    (('labelText' in props && !props.text) || 
     ('placeholderText' in props && !props.text) || 
     ('leftIcon' in props && !props.icon) ||
     ('errorText' in props && !props.core) ||
     ('value' in props && !props.text) ||
     ('inputType' in props && !props.core))
  );
};

const FormInput = (props: FormInputProps | FormInputPropsFlat) => {
  // Convert flat props to grouped props if using old style
  let groupedProps: FormInputProps;
  
  if (isFlatProps(props)) {
    // If using flat props, organize them into groups
    const flatProps = props as FormInputPropsFlat;
    groupedProps = {
      style: {
        mainContainerStyle: flatProps.mainContainerStyle,
        inputContainerStyle: flatProps.inputContainerStyle,
        inputContainerBackgroundColor: flatProps.inputContainerBackgroundColor,
        inputStyle: flatProps.inputStyle,
        labelTextStyle: flatProps.labelTextStyle,
        labelTextContainerStyle: flatProps.labelTextContainerStyle,
        requiredTextStyle: flatProps.requiredTextStyle,
        requiredTextColor: flatProps.requiredTextColor,
        errorTextStyle: flatProps.errorTextStyle,
        isRequired: flatProps.isRequired
      },
      text: {
        placeholderText: flatProps.placeholderText,
        placeholderTextColor: flatProps.placeholderTextColor,
        inputTextColor: flatProps.inputTextColor,
        labelText: flatProps.labelText,
        labelTextColor: flatProps.labelTextColor,
        requiredText: flatProps.requiredText,
        errorText: flatProps.errorText,
        value: flatProps.value,
        hideLabel: flatProps.hideLabel,
        characterLimit: flatProps.characterLimit,
        showCharacterLimit: flatProps.showCharacterLimit
      },
      icon: {
        leftIcon: flatProps.leftIcon,
        leftIconColor: flatProps.leftIconColor,
        leftIconStyle: flatProps.leftIconStyle,
        leftIconContainerStyle: flatProps.leftIconContainerStyle,
        renderLeftIcon: flatProps.renderLeftIcon,
        leftIconSource: flatProps.leftIconSource,
        leftIconSize: flatProps.leftIconSize,
        leftIconOnPress: flatProps.leftIconOnPress,
        rightIcon: flatProps.rightIcon,
        rightIconColor: flatProps.rightIconColor,
        rightIconStyle: flatProps.rightIconStyle,
        rightIconContainerStyle: flatProps.rightIconContainerStyle,
        renderRightIcon: flatProps.renderRightIcon,
        rightIconSource: flatProps.rightIconSource,
        rightIconSize: flatProps.rightIconSize,
        rightIconOnPress: flatProps.rightIconOnPress
      },
      core: {
        inputType: flatProps.inputType,
        autoCapitalize: flatProps.autoCapitalize,
        onTextChange: flatProps.onTextChange,
        error: flatProps.error,
        hiddenText: flatProps.hiddenText,
        disabled: flatProps.disabled,
        theme: flatProps.theme,
        multiline: flatProps.multiline,
        numberOfLines: flatProps.numberOfLines
      },
      componentProps: {
        textInputProps: flatProps.textInputProps,
        labelTextProps: flatProps.labelTextProps,
        requiredTextProps: flatProps.requiredTextProps,
        mainContainerViewProps: flatProps.mainContainerViewProps,
        inputContainerViewProps: flatProps.inputContainerViewProps,
        labelTextContainerViewProps: flatProps.labelTextContainerViewProps
      },
      datePicker: {
        enabled: flatProps.enabled,
        withTime: flatProps.withTime,
        disableFutureDates: flatProps.disableFutureDates,
        disablePastDates: flatProps.disablePastDates,
        initialDate: flatProps.initialDate,
        initialRange: flatProps.initialRange,
        initialDates: flatProps.initialDates,
        onDateChange: flatProps.onDateChange,
        sendDateValue: flatProps.sendDateValue,
        onDateRangeChange: flatProps.onDateRangeChange,
        sendDateRangeValues: flatProps.sendDateRangeValues,
        onDatesChange: flatProps.onDatesChange,
        sendDatesValues: flatProps.sendDatesValues,
        backgroundColor: flatProps.backgroundColor,
        showCloseButton: flatProps.showCloseButton,
        closeButtonColor: flatProps.closeButtonColor,
        mode: flatProps.mode,
        firstDayOfWeek: flatProps.firstDayOfWeek,
        placeholder: flatProps.placeholder,
        placeholderStyle: flatProps.placeholderStyle,
        animationType: flatProps.animationType,
        animationDuration: flatProps.animationDuration,
        hideConfirmButton: flatProps.hideConfirmButton,
        dateFormat: flatProps.dateFormat,
        dateTimeFormat: flatProps.dateTimeFormat,
        // Skip these properties as they don't exist in the flat structure
        // Users with flat props structure will need to use the grouped props for these specific features
        componentProps: undefined,
        styles: undefined
      },
      datePickerStyle: {
        selectedContainerStyle: flatProps.selectedContainerStyle,
        selectedTextStyle: flatProps.selectedTextStyle,
        todayContainerStyle: flatProps.todayContainerStyle,
        todayTextStyle: flatProps.todayTextStyle,
        weekDaysContainerStyle: flatProps.weekDaysContainerStyle,
        weekDaysTextStyle: flatProps.weekDaysTextStyle,
        yearContainerStyle: flatProps.yearContainerStyle,
        yearTextStyle: flatProps.yearTextStyle,
        activeYearContainerStyle: flatProps.activeYearContainerStyle,
        activeYearTextStyle: flatProps.activeYearTextStyle,
        selectedYearContainerStyle: flatProps.selectedYearContainerStyle,
        selectedYearTextStyle: flatProps.selectedYearTextStyle,
        monthContainerStyle: flatProps.monthContainerStyle,
        monthTextStyle: flatProps.monthTextStyle,
        selectedMonthContainerStyle: flatProps.selectedMonthContainerStyle,
        selectedMonthTextStyle: flatProps.selectedMonthTextStyle,
        leftButtonStyle: flatProps.leftButtonStyle,
        rightButtonStyle: flatProps.rightButtonStyle,
        dayContainerStyle: flatProps.dayContainerStyle,
        dayTextStyle: flatProps.dayTextStyle,
        yearSelectorTextStyle: flatProps.yearSelectorTextStyle,
        monthSelectorTextStyle: flatProps.monthSelectorTextStyle,
        timeSelectorTextStyle: flatProps.timeSelectorTextStyle,
        outsideDayTextStyle: flatProps.outsideDayTextStyle,
        timePickerIndicatorStyle: flatProps.timePickerIndicatorStyle,
        rangeStyle: flatProps.rangeStyle,
        timeTextStyle: flatProps.timeTextStyle,
        confirmButtonStyle: flatProps.confirmButtonStyle,
        confirmButtonTextStyle: flatProps.confirmButtonTextStyle
      }
    };
  } else {
    // If already using grouped props, use them as is
    groupedProps = props as FormInputProps;
  }
  
  // Now extract grouped props with defaults
  const {
    style = {},
    text = {},
    icon = {},
    datePicker = {},
    datePickerStyle = {},
    core = {},
    componentProps = {}
  } = groupedProps;

  // Destructure style props
    const {
        mainContainerStyle,
        inputContainerStyle,
        inputContainerBackgroundColor,
        inputStyle,
        labelTextStyle,
        labelTextContainerStyle,
        requiredTextStyle,
        requiredTextColor,
        errorTextStyle,
        isRequired
    } = style;

    // Destructure text props
    const {
        placeholderText,
        placeholderTextColor,
        inputTextColor,
        labelText,
        labelTextColor,
        requiredText = '*',
        errorText = 'Error',
        value,
        hideLabel,
        characterLimit,
        showCharacterLimit
    } = text;

    // Destructure icon props
    const {
        leftIcon,
        leftIconColor,
        leftIconStyle,
        leftIconContainerStyle,
        renderLeftIcon,
        leftIconSource = 'font-awesome',
        leftIconSize = 20,
        leftIconOnPress,
        rightIcon,
        rightIconColor,
        rightIconStyle,
        rightIconContainerStyle,
        renderRightIcon,
        rightIconSource = 'font-awesome',
        rightIconSize = 20,
        rightIconOnPress
    } = icon;

    // Destructure core props
    const {
        inputType,
        autoCapitalize,
        onTextChange,
        error,
        hiddenText,
        disabled,
        theme = 'system',
        multiline,
        numberOfLines
    } = core;

    // Destructure component props
    const {
        textInputProps,
        labelTextProps,
        requiredTextProps,
        mainContainerViewProps,
        inputContainerViewProps,
        labelTextContainerViewProps
    } = componentProps;

    // Destructure date picker props
    const {
        enabled: datePicker_enabled,
        withTime: datePickerWithTime,
        disableFutureDates,
        disablePastDates,
        initialDate,
        initialRange,
        initialDates,
        onDateChange,
        sendDateValue,
        onDateRangeChange,
        sendDateRangeValues,
        onDatesChange,
        sendDatesValues,
        backgroundColor: datePickerBackgroundColor,
        showCloseButton: showDatePickerCloseButton,
        closeButtonColor: datePickerCloseButtonColor,
        mode: datePickerMode,
        firstDayOfWeek,
        placeholder: datePlaceholder,
        placeholderStyle: datePlaceholderStyle,
        animationType: datePickerAnimationType,
        animationDuration,
        hideConfirmButton: hideDatePickerConfirmButton,
        dateFormat,
        dateTimeFormat,
        componentProps: datePickerProps,
        styles: datePickerStyles
    } = datePicker;

    // Extract datePickerStyle props
    const {
        selectedContainerStyle,
        selectedTextStyle,
        todayContainerStyle,
        todayTextStyle,
        weekDaysContainerStyle,
        weekDaysTextStyle,
        yearContainerStyle,
        yearTextStyle,
        activeYearContainerStyle,
        activeYearTextStyle,
        selectedYearContainerStyle,
        selectedYearTextStyle,
        monthContainerStyle,
        monthTextStyle,
        selectedMonthContainerStyle,
        selectedMonthTextStyle,
        leftButtonStyle: datePickerLeftButtonStyle,
        rightButtonStyle: datePickerRightButtonStyle,
        dayContainerStyle: datePickerDayContainerStyle,
        dayTextStyle: datePickerDayTextStyle,
        yearSelectorTextStyle,
        monthSelectorTextStyle,
        timeSelectorTextStyle,
        outsideDayTextStyle: datePickerOutsideDayTextStyle,
        timePickerIndicatorStyle,
        rangeStyle: datePickerRangeStyle,
        timeTextStyle,
        confirmButtonStyle: datePickerConfirmButtonStyle,
        confirmButtonTextStyle: datePickerConfirmButtonTextStyle,
    } = datePickerStyle;

    const [inputValue, setInputValue] = useState<string>(value || '');

    // For Single Date //
    const [date, setDate] = useState<DateType>(initialDate ?? undefined);

    // For Date Range //
    const [range, setRange] = useState<{
        startDate: DateType;
        endDate: DateType;
    }>({ startDate: initialRange?.startDate ?? undefined, endDate: initialRange?.endDate ?? undefined });

    // For Multiple Dates //
    const [dates, setDates] = useState<DateType[] | undefined>(initialDates ?? undefined);

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const [showDatePlaceholder, setShowDatePlaceholder] = useState<boolean>(false);

    const handleTextChange = (text: string) => {
        setInputValue(text);
        onTextChange && onTextChange(text);
    }

    useEffect(() => {
        if (datePlaceholder) {
            setShowDatePlaceholder(true);
        }
    }, [datePlaceholder]); useEffect(() => {
        if (datePicker_enabled && sendDateValue && date) {

            datePickerWithTime ? sendDateValue(dayjs(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A')) : sendDateValue(dayjs(date).format(dateFormat ?? 'DD-MM-YYYY'));
        }
    }, [date]);

    useEffect(() => {
        if (datePicker_enabled && sendDateRangeValues && range.startDate && range.endDate) {

            sendDateRangeValues(dayjs(range.startDate).format(dateFormat ?? 'DD-MM-YYYY'), dayjs(range.endDate).format(dateFormat ?? 'DD-MM-YYYY'));
        }
    }, [range]);

    useEffect(() => {
        if (datePicker_enabled && sendDatesValues && dates) {

            sendDatesValues(dates.map(date => dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')));
        }
    }, [dates]);


    return (
        <View
            style={{
                ...styles.defaultMainContainerStyle,
                ...mainContainerStyle
            }}
            {...mainContainerViewProps}
        >
            {datePicker && showDatePicker &&
                <DatePickerModal
                    date={date}
                    setDate={setDate}
                    range={range}
                    setRange={setRange}
                    dates={dates}
                    setDates={setDates}
                    onDateChange={onDateChange}
                    onDateRangeChange={onDateRangeChange}
                    onDatesChange={onDatesChange}
                    datePickerWithTime={datePickerWithTime}
                    showDatePicker={showDatePicker}
                    setShowDatePicker={setShowDatePicker}
                    disableFutureDates={disableFutureDates}
                    disablePastDates={disablePastDates}
                    datePickerBackgroundColor={datePickerBackgroundColor}
                    showDatePickerCloseButton={showDatePickerCloseButton}
                    datePickerCloseButtonColor={datePickerCloseButtonColor}
                    datePickerMode={datePickerMode}
                    firstDayOfWeek={firstDayOfWeek}
                    setShowDatePlaceholder={setShowDatePlaceholder}
                    animationType={datePickerAnimationType ?? 'zoomIn'}
                    animationDuration={animationDuration ?? 600}
                    hideConfirmButton={hideDatePickerConfirmButton}
                    theme={theme}

                    // Pass all style props from datePickerStyle
                    selectedContainerStyle={selectedContainerStyle}
                    selectedTextStyle={selectedTextStyle}
                    todayContainerStyle={todayContainerStyle}
                    todayTextStyle={todayTextStyle}
                    weekDaysContainerStyle={weekDaysContainerStyle}
                    weekDaysTextStyle={weekDaysTextStyle}
                    yearContainerStyle={yearContainerStyle}
                    yearTextStyle={yearTextStyle}
                    activeYearContainerStyle={activeYearContainerStyle}
                    activeYearTextStyle={activeYearTextStyle}
                    selectedYearContainerStyle={selectedYearContainerStyle}
                    selectedYearTextStyle={selectedYearTextStyle}
                    monthContainerStyle={monthContainerStyle}
                    monthTextStyle={monthTextStyle}
                    selectedMonthContainerStyle={selectedMonthContainerStyle}
                    selectedMonthTextStyle={selectedMonthTextStyle}
                    datePickerLeftButtonStyle={datePickerLeftButtonStyle}
                    datePickerRightButtonStyle={datePickerRightButtonStyle}
                    datePickerDayContainerStyle={datePickerDayContainerStyle}
                    datePickerDayTextStyle={datePickerDayTextStyle}
                    yearSelectorTextStyle={yearSelectorTextStyle}
                    monthSelectorTextStyle={monthSelectorTextStyle}
                    timeSelectorTextStyle={timeSelectorTextStyle}
                    datePickerOutsideDayTextStyle={datePickerOutsideDayTextStyle}
                    timePickerIndicatorStyle={timePickerIndicatorStyle}
                    timeTextStyle={timeTextStyle}
                    datePickerRangeStyle={datePickerRangeStyle}
                    datePickerProps={datePickerProps}
                    datePickerStyles={datePickerStyles}
                    datePickerConfirmButtonStyle={datePickerConfirmButtonStyle}
                    datePickerConfirmButtonTextStyle={datePickerConfirmButtonTextStyle}
                />
            }
            {!hideLabel &&
                <View
                    style={{
                        ...styles.defaultLabelTextContainerStyle,
                        ...labelTextContainerStyle,
                    }}
                    {...labelTextContainerViewProps}
                >
                    <Text
                        style={
                            [
                                styles.defaultLabelTextStyle,
                                getThemedColor(theme, 'labelTextStyle'),
                                labelTextColor ? { color: labelTextColor } : {},
                                { ...labelTextStyle }
                            ]
                        }
                        {...labelTextProps}
                    >
                        {labelText ?? 'Input Label'}
                    </Text>
                    {isRequired &&
                        <Text
                            style={
                                [
                                    styles.defaultRequiredTextStyle,
                                    requiredTextColor ? { color: requiredTextColor } : {},
                                    { ...requiredTextStyle }
                                ]
                            }
                            {...requiredTextProps}
                        >
                            {requiredText ?? '*'}
                        </Text>}
                </View>
            }
            <View
                style={
                    [styles.defaultInputContainerStyle,
                    getThemedColor(theme, 'inputContainerStyle'),
                    !showCharacterLimit && { borderBottomStartRadius: 10, borderBottomEndRadius: 10 },
                    inputContainerBackgroundColor ? { backgroundColor: inputContainerBackgroundColor } : {},
                    error && { backgroundColor: colors.lightError },
                    { ...inputContainerStyle }
                    ]
                }
                {...inputContainerViewProps}
            >
                {leftIcon &&
                    <Pressable
                        style={{
                            ...styles.defaultLeftIconContainerStyle,
                            ...{
                                top: showCharacterLimit ? 17 : 'auto',
                            },
                            ...leftIconContainerStyle
                        }} onPress={
                            datePicker_enabled && !disabled ?
                                () => setShowDatePicker(true) :
                                datePicker_enabled && disabled ? (() => { }) :
                                    leftIconOnPress ?? (() => { })
                        }
                    >
                        {
                            renderLeftIcon ?
                                renderLeftIcon :
                                <Icon
                                    name={leftIcon}
                                    iconSource={leftIconSource}
                                    size={leftIconSize}
                                    color={leftIconColor ?? colors.slightlyDarkGrey}
                                    style={leftIconStyle}
                                />
                        }
                    </Pressable>
                }

                {rightIcon &&
                    <Pressable
                        style={{
                            ...styles.defaultRightIconContainerStyle,
                            ...{
                                top: showCharacterLimit ? 17 : 'auto',
                            },
                            ...rightIconContainerStyle
                        }}
                        onPress={rightIconOnPress ?? (() => { })}
                    >
                        {
                            renderRightIcon ?
                                renderRightIcon :
                                <Icon
                                    name={rightIcon}
                                    iconSource={rightIconSource}
                                    size={rightIconSize}
                                    color={rightIconColor ?? colors.slightlyDarkGrey}
                                    style={rightIconStyle}
                                />
                        }
                    </Pressable>
                }
                {datePicker_enabled ?
                    <View style={styles.dateInputWrapperInner}>
                        <Pressable
                            style={
                                [styles.defaultInputStyle,
                                getThemedColor(theme, 'inputStyle'),
                                error ? { borderColor: colors.error } : {},
                                leftIcon ? { paddingLeft: 40 } : {},
                                rightIcon ? { paddingRight: 40 } : {},
                                { ...inputStyle }
                                ]
                            }
                            onPress={() => {
                                if (disabled) return;
                                setShowDatePicker(true);
                            }}
                        >
                            {showDatePlaceholder && datePlaceholder ?
                                <Text
                                    style={[
                                        inputTextColor ? { color: inputTextColor } : {
                                            color: colors.slightlyDarkGrey
                                        },
                                        disabled ? { color: colors.lightGrey } : {},
                                        { ...datePlaceholderStyle }
                                    ]}
                                >{datePlaceholder}</Text> :
                                date ?
                                    (<Text
                                        style={[
                                            inputTextColor ? { color: inputTextColor } : {
                                                color: colors.darkGrey
                                            },
                                            disabled ? { color: colors.lightGrey } : {},
                                            { ...inputStyle }
                                        ]}
                                    >{datePickerWithTime ? dayjs(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A') : dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')}</Text>) :
                                    range && range.startDate && range.endDate ?
                                        (<Text
                                            style={[
                                                inputTextColor ? { color: inputTextColor } : {
                                                    color: colors.darkGrey
                                                },
                                                disabled ? { color: colors.lightGrey } : {},
                                                { ...inputStyle }
                                            ]}
                                        >{`${dayjs(range.startDate).format(dateFormat ?? 'DD-MM-YYYY')} - ${dayjs(range.endDate).format(dateFormat ?? 'DD-MM-YYYY')}`}</Text>) :
                                        dates && dates.length ?
                                            (
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        flexWrap: 'wrap',
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {dates.slice(0, 3).map((date, index) => (
                                                        <Text
                                                            key={index}
                                                            style={[
                                                                inputTextColor ? { color: inputTextColor } : {
                                                                    color: colors.darkGrey
                                                                },
                                                                disabled ? { color: colors.lightGrey } : {},
                                                                { ...inputStyle }
                                                            ]}
                                                        >
                                                            {`${dayjs(date).format(dateFormat ?? 'DD-MM-YYYY')}${index < dates.length - 1 && index < 2 ? ', ' : index === 2 ? '...' : ''}`}
                                                        </Text>
                                                    ))}
                                                </View>
                                            ) : null
                            }
                        </Pressable>
                    </View>

                    :
                    <TextInput
                        placeholder={
                            placeholderText ?? 'Enter text'
                        }
                        placeholderTextColor={
                            placeholderTextColor ?? colors.grey
                        }
                        style={
                            [styles.defaultInputStyle,
                            getThemedColor(theme, 'inputStyle'),
                            inputTextColor ? { color: inputTextColor } : {},
                            error ? { borderColor: colors.error } : {},
                            leftIcon ? { paddingLeft: 40 } : {},
                            rightIcon ? { paddingRight: 40 } : {},
                            multiline && { height: 'auto', textAlignVertical: 'top' },
                            { ...inputStyle }
                            ]
                        }
                        onChangeText={handleTextChange}
                        maxLength={characterLimit}
                        keyboardType={inputType ?? 'default'}
                        value={value ?? inputValue}
                        autoCapitalize={autoCapitalize ?? 'sentences'}
                        secureTextEntry={hiddenText}
                        editable={!disabled}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        {...textInputProps}
                    />
                }


                {characterLimit && showCharacterLimit &&
                    <Text>{characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : ''}</Text>
                }
            </View>

            {error && errorText &&
                <Text style={{ ...styles.defaultErrorTextStyle, ...errorTextStyle }}>
                    {errorText}
                </Text>
            }
        </View>
    );
};

export default FormInput;