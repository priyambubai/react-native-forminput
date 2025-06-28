"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _icon = _interopRequireDefault(require("./icon"));
var _datePickerModal = _interopRequireDefault(require("./datePickerModal"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
const isFlatProps = props => {
  // Check for properties that would only exist at the top level in flat props
  // and not in the grouped structure
  return props && typeof props === 'object' && (
  // Check if any typical flat props exist directly on the props object
  // instead of being nested in a group
  'labelText' in props && !props.text || 'placeholderText' in props && !props.text || 'leftIcon' in props && !props.icon || 'errorText' in props && !props.core || 'value' in props && !props.text || 'inputType' in props && !props.core);
};
const FormInput = props => {
  // Convert flat props to grouped props if using old style
  let groupedProps;
  if (isFlatProps(props)) {
    // If using flat props, organize them into groups
    const flatProps = props;
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
    groupedProps = props;
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
    confirmButtonTextStyle: datePickerConfirmButtonTextStyle
  } = datePickerStyle;
  const [inputValue, setInputValue] = (0, _react.useState)(value || '');

  // For Single Date //
  const [date, setDate] = (0, _react.useState)(initialDate ?? undefined);

  // For Date Range //
  const [range, setRange] = (0, _react.useState)({
    startDate: initialRange?.startDate ?? undefined,
    endDate: initialRange?.endDate ?? undefined
  });

  // For Multiple Dates //
  const [dates, setDates] = (0, _react.useState)(initialDates ?? undefined);
  const [showDatePicker, setShowDatePicker] = (0, _react.useState)(false);
  const [showDatePlaceholder, setShowDatePlaceholder] = (0, _react.useState)(false);
  const handleTextChange = text => {
    setInputValue(text);
    onTextChange && onTextChange(text);
  };
  (0, _react.useEffect)(() => {
    if (datePlaceholder) {
      setShowDatePlaceholder(true);
    }
  }, [datePlaceholder]);
  (0, _react.useEffect)(() => {
    if (datePicker_enabled && sendDateValue && date) {
      datePickerWithTime ? sendDateValue((0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A')) : sendDateValue((0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [date]);
  (0, _react.useEffect)(() => {
    if (datePicker_enabled && sendDateRangeValues && range.startDate && range.endDate) {
      sendDateRangeValues((0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY'), (0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY'));
    }
  }, [range]);
  (0, _react.useEffect)(() => {
    if (datePicker_enabled && sendDatesValues && dates) {
      sendDatesValues(dates.map(date => (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')));
    }
  }, [dates]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      ..._utils.styles.defaultMainContainerStyle,
      ...mainContainerStyle
    },
    ...mainContainerViewProps,
    children: [datePicker && showDatePicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_datePickerModal.default, {
      date: date,
      setDate: setDate,
      range: range,
      setRange: setRange,
      dates: dates,
      setDates: setDates,
      onDateChange: onDateChange,
      onDateRangeChange: onDateRangeChange,
      onDatesChange: onDatesChange,
      datePickerWithTime: datePickerWithTime,
      showDatePicker: showDatePicker,
      setShowDatePicker: setShowDatePicker,
      disableFutureDates: disableFutureDates,
      disablePastDates: disablePastDates,
      datePickerBackgroundColor: datePickerBackgroundColor,
      showDatePickerCloseButton: showDatePickerCloseButton,
      datePickerCloseButtonColor: datePickerCloseButtonColor,
      datePickerMode: datePickerMode,
      firstDayOfWeek: firstDayOfWeek,
      setShowDatePlaceholder: setShowDatePlaceholder,
      animationType: datePickerAnimationType ?? 'zoomIn',
      animationDuration: animationDuration ?? 600,
      hideConfirmButton: hideDatePickerConfirmButton,
      theme: theme

      // Pass all style props from datePickerStyle
      ,
      selectedContainerStyle: selectedContainerStyle,
      selectedTextStyle: selectedTextStyle,
      todayContainerStyle: todayContainerStyle,
      todayTextStyle: todayTextStyle,
      weekDaysContainerStyle: weekDaysContainerStyle,
      weekDaysTextStyle: weekDaysTextStyle,
      yearContainerStyle: yearContainerStyle,
      yearTextStyle: yearTextStyle,
      activeYearContainerStyle: activeYearContainerStyle,
      activeYearTextStyle: activeYearTextStyle,
      selectedYearContainerStyle: selectedYearContainerStyle,
      selectedYearTextStyle: selectedYearTextStyle,
      monthContainerStyle: monthContainerStyle,
      monthTextStyle: monthTextStyle,
      selectedMonthContainerStyle: selectedMonthContainerStyle,
      selectedMonthTextStyle: selectedMonthTextStyle,
      datePickerLeftButtonStyle: datePickerLeftButtonStyle,
      datePickerRightButtonStyle: datePickerRightButtonStyle,
      datePickerDayContainerStyle: datePickerDayContainerStyle,
      datePickerDayTextStyle: datePickerDayTextStyle,
      yearSelectorTextStyle: yearSelectorTextStyle,
      monthSelectorTextStyle: monthSelectorTextStyle,
      timeSelectorTextStyle: timeSelectorTextStyle,
      datePickerOutsideDayTextStyle: datePickerOutsideDayTextStyle,
      timePickerIndicatorStyle: timePickerIndicatorStyle,
      timeTextStyle: timeTextStyle,
      datePickerRangeStyle: datePickerRangeStyle,
      datePickerProps: datePickerProps,
      datePickerStyles: datePickerStyles,
      datePickerConfirmButtonStyle: datePickerConfirmButtonStyle,
      datePickerConfirmButtonTextStyle: datePickerConfirmButtonTextStyle
    }), !hideLabel && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        ..._utils.styles.defaultLabelTextContainerStyle,
        ...labelTextContainerStyle
      },
      ...labelTextContainerViewProps,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [_utils.styles.defaultLabelTextStyle, (0, _utils.getThemedColor)(theme, 'labelTextStyle'), labelTextColor ? {
          color: labelTextColor
        } : {}, {
          ...labelTextStyle
        }],
        ...labelTextProps,
        children: labelText ?? 'Input Label'
      }), isRequired && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [_utils.styles.defaultRequiredTextStyle, requiredTextColor ? {
          color: requiredTextColor
        } : {}, {
          ...requiredTextStyle
        }],
        ...requiredTextProps,
        children: requiredText ?? '*'
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [_utils.styles.defaultInputContainerStyle, (0, _utils.getThemedColor)(theme, 'inputContainerStyle'), !showCharacterLimit && {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
      }, inputContainerBackgroundColor ? {
        backgroundColor: inputContainerBackgroundColor
      } : {}, error && {
        backgroundColor: _utils.colors.lightError
      }, {
        ...inputContainerStyle
      }],
      ...inputContainerViewProps,
      children: [leftIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        style: {
          ..._utils.styles.defaultLeftIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...leftIconContainerStyle
        },
        onPress: datePicker_enabled && !disabled ? () => setShowDatePicker(true) : datePicker_enabled && disabled ? () => {} : leftIconOnPress ?? (() => {}),
        children: renderLeftIcon ? renderLeftIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
          name: leftIcon,
          iconSource: leftIconSource,
          size: leftIconSize,
          color: leftIconColor ?? _utils.colors.slightlyDarkGrey,
          style: leftIconStyle
        })
      }), rightIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        style: {
          ..._utils.styles.defaultRightIconContainerStyle,
          ...{
            top: showCharacterLimit ? 17 : 'auto'
          },
          ...rightIconContainerStyle
        },
        onPress: rightIconOnPress ?? (() => {}),
        children: renderRightIcon ? renderRightIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
          name: rightIcon,
          iconSource: rightIconSource,
          size: rightIconSize,
          color: rightIconColor ?? _utils.colors.slightlyDarkGrey,
          style: rightIconStyle
        })
      }), datePicker_enabled ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _utils.styles.dateInputWrapperInner,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          style: [_utils.styles.defaultInputStyle, (0, _utils.getThemedColor)(theme, 'inputStyle'), error ? {
            borderColor: _utils.colors.error
          } : {}, leftIcon ? {
            paddingLeft: 40
          } : {}, rightIcon ? {
            paddingRight: 40
          } : {}, {
            ...inputStyle
          }],
          onPress: () => {
            if (disabled) return;
            setShowDatePicker(true);
          },
          children: showDatePlaceholder && datePlaceholder ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.slightlyDarkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...datePlaceholderStyle
            }],
            children: datePlaceholder
          }) : date ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.darkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...inputStyle
            }],
            children: datePickerWithTime ? (0, _dayjs.default)(date).format(dateTimeFormat ?? 'DD-MM-YYYY hh:mm:ss A') : (0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')
          }) : range && range.startDate && range.endDate ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [inputTextColor ? {
              color: inputTextColor
            } : {
              color: _utils.colors.darkGrey
            }, disabled ? {
              color: _utils.colors.lightGrey
            } : {}, {
              ...inputStyle
            }],
            children: `${(0, _dayjs.default)(range.startDate).format(dateFormat ?? 'DD-MM-YYYY')} - ${(0, _dayjs.default)(range.endDate).format(dateFormat ?? 'DD-MM-YYYY')}`
          }) : dates && dates.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center'
            },
            children: dates.slice(0, 3).map((date, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              style: [inputTextColor ? {
                color: inputTextColor
              } : {
                color: _utils.colors.darkGrey
              }, disabled ? {
                color: _utils.colors.lightGrey
              } : {}, {
                ...inputStyle
              }],
              children: `${(0, _dayjs.default)(date).format(dateFormat ?? 'DD-MM-YYYY')}${index < dates.length - 1 && index < 2 ? ', ' : index === 2 ? '...' : ''}`
            }, index))
          }) : null
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
        placeholder: placeholderText ?? 'Enter text',
        placeholderTextColor: placeholderTextColor ?? _utils.colors.grey,
        style: [_utils.styles.defaultInputStyle, (0, _utils.getThemedColor)(theme, 'inputStyle'), inputTextColor ? {
          color: inputTextColor
        } : {}, error ? {
          borderColor: _utils.colors.error
        } : {}, leftIcon ? {
          paddingLeft: 40
        } : {}, rightIcon ? {
          paddingRight: 40
        } : {}, multiline && {
          height: 'auto',
          textAlignVertical: 'top'
        }, {
          ...inputStyle
        }],
        onChangeText: handleTextChange,
        maxLength: characterLimit,
        keyboardType: inputType ?? 'default',
        value: value ?? inputValue,
        autoCapitalize: autoCapitalize ?? 'sentences',
        secureTextEntry: hiddenText,
        editable: !disabled,
        multiline: multiline,
        numberOfLines: numberOfLines,
        ...textInputProps
      }), characterLimit && showCharacterLimit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        children: characterLimit ? `${value?.length ?? inputValue?.length}/${characterLimit}` : ''
      })]
    }), errorText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: {
        ..._utils.styles.defaultErrorTextStyle,
        ...errorTextStyle
      },
      children: errorText
    })]
  });
};
var _default = exports.default = FormInput;
//# sourceMappingURL=formInput.js.map