"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeUiDatepicker = _interopRequireWildcard(require("react-native-ui-datepicker"));
var _react = require("react");
var _reactNative = require("react-native");
var _utils = require("./utils");
var _icon = _interopRequireDefault(require("./icon"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const DatePickerModal = ({
  date,
  setDate,
  range,
  setRange,
  dates,
  setDates,
  datePickerWithTime,
  showDatePicker,
  setShowDatePicker,
  disableFutureDates,
  disablePastDates,
  onDateChange,
  onDateRangeChange,
  onDatesChange,
  datePickerBackgroundColor,
  showDatePickerCloseButton = false,
  datePickerCloseButtonColor,
  datePickerMode = 'single',
  firstDayOfWeek,
  headerContainerStyle,
  setShowDatePlaceholder,
  animationType,
  animationDuration,
  hideConfirmButton,
  theme = 'system',
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
  datePickerLeftButtonStyle,
  datePickerRightButtonStyle,
  datePickerDayContainerStyle,
  datePickerDayTextStyle,
  yearSelectorTextStyle,
  monthSelectorTextStyle,
  timeSelectorTextStyle,
  datePickerOutsideDayTextStyle,
  timePickerIndicatorStyle,
  timeTextStyle,
  datePickerRangeStyle,
  datePickerProps,
  datePickerStyles,
  datePickerConfirmButtonStyle,
  datePickerConfirmButtonTextStyle
}) => {
  const defaultStyles = (0, _reactNativeUiDatepicker.useDefaultStyles)();
  const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
  const [modalPosition] = (0, _react.useState)(new _reactNative.Animated.Value(1)); // 1 is off screen, 0 is on screen

  const [selectedDate, setSelectedDate] = (0, _react.useState)(date);
  const [selectedRange, setSelectedRange] = (0, _react.useState)(range);
  const [selectedDates, setSelectedDates] = (0, _react.useState)(dates);
  const getScaleAnimation = () => {
    switch (animationType) {
      case 'zoomIn':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0]
        });
      default:
        return 1;
    }
  };
  const getTranslateYAnimation = () => {
    switch (animationType) {
      case 'zoomIn':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, 0]
        });
      case 'slideUp':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, _utils.screenHeight]
        });
      case 'slideDown':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, -_utils.screenHeight / 5]
        });
      default:
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [_utils.screenHeight / 5, _utils.screenHeight / 5]
        });
    }
  };
  const getTranslateXAnimation = () => {
    switch (animationType) {
      case 'slideLeft':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, _utils.screenWidth]
        });
      case 'slideRight':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -_utils.screenWidth]
        });
      default:
        return 1;
    }
  };
  const translateYAnimation = getTranslateYAnimation();
  const translateXAnimation = getTranslateXAnimation();
  const scaleAnimation = getScaleAnimation();
  const opacityAnimationOuter = modalPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });
  const onChangeDate = (0, _react.useCallback)(params => {
    setShowDatePlaceholder && setShowDatePlaceholder(false);
    if (!params) return;
    if (datePickerMode === 'single' && setDate) {
      setSelectedDate(params.date);
      setDate && setDate(params.date);
      onDateChange && onDateChange(params.date);
    } else if (datePickerMode === 'range' && setRange) {
      setSelectedRange(params);
      setRange && setRange(params);
      onDateRangeChange && onDateRangeChange(params);
    } else if (datePickerMode === 'multiple' && setDates) {
      setSelectedDates(params.dates);
      setDates(params.dates);
      onDatesChange && onDatesChange(params.dates);
    }
  }, [datePickerMode]);
  const openModal = () => {
    setIsModalVisible(true);
    _reactNative.Animated.timing(modalPosition, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };
  const closeModal = () => {
    _reactNative.Animated.timing(modalPosition, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true
    }).start(() => {
      setIsModalVisible(false);
      setShowDatePicker(false);
    });
  };
  (0, _react.useEffect)(() => {
    if (showDatePicker) {
      openModal();
    }
  }, [showDatePicker]);
  return isModalVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Modal, {
    visible: isModalVisible,
    transparent: true,
    animationType: "none",
    onRequestClose: () => closeModal(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: opacityAnimationOuter
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _utils.stylesDatePicker.datePickerModalContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
          style: {
            width: _utils.screenWidth,
            height: _utils.screenHeight,
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            // transform: 'translateX(-90%)',
            zIndex: 1
          },
          onPress: () => {
            closeModal();
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
          style: {
            flex: 1,
            // backgroundColor: 'yellow',
            zIndex: 2,
            transform: [{
              translateY: translateYAnimation
            }, {
              translateX: translateXAnimation
            }, {
              scale: scaleAnimation
            }]
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
            style: {
              width: '100%',
              height: '100%',
              // backgroundColor: 'red',
              position: 'absolute',
              top: 0
              // transform: 'translateX(-90%)',
              // zIndex: 1,
            },
            onPress: () => {
              closeModal();
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: [_utils.stylesDatePicker.datePickerModalInner, (0, _utils.getThemedColor)(theme, 'datePickerModalInner'), datePickerBackgroundColor ? {
              backgroundColor: datePickerBackgroundColor
            } : {}],
            children: [showDatePickerCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              style: [_utils.stylesDatePicker.datePickerModalCloseButton, datePickerCloseButtonColor ? {
                backgroundColor: datePickerCloseButtonColor
              } : {}],
              onPress: () => closeModal(),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.default, {
                name: "times",
                size: 12,
                color: _utils.colors.offWhite
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeUiDatepicker.default, {
              mode: datePickerMode ?? 'single',
              date: selectedDate,
              startDate: selectedRange.startDate,
              endDate: selectedRange.endDate,
              dates: selectedDates,
              timePicker: datePickerWithTime,
              onChange: onChangeDate,
              firstDayOfWeek: firstDayOfWeek ?? 1,
              maxDate: disableFutureDates ? new Date() : undefined,
              minDate: disablePastDates ? new Date() : undefined,
              showOutsideDays: true,
              styles: {
                ...defaultStyles,
                today: {
                  ..._utils.stylesDatePicker.todayContainerStyleCustom,
                  ...todayContainerStyle
                },
                // Today Item Container Style
                today_label: {
                  ...(0, _utils.getThemedColor)(theme, 'todayTextStyle'),
                  ...todayTextStyle
                },
                // Today Item Text Style
                selected: {
                  ..._utils.stylesDatePicker.selectedContainerStyleCustom,
                  ...selectedContainerStyle
                },
                // Selected Item Container Style
                selected_label: {
                  ..._utils.stylesDatePicker.selectedTextStyleCustom,
                  ...selectedTextStyle
                },
                // Selected Item Text Style
                weekdays: {
                  ..._utils.stylesDatePicker.weekDaysContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'weekDaysContainerStyle'),
                  ...weekDaysContainerStyle
                },
                // Weekdays Container Style
                weekday_label: {
                  ..._utils.stylesDatePicker.weekDaysTextStyleCustom,
                  ...weekDaysTextStyle
                },
                // Weekday Text Style
                year: {
                  ..._utils.stylesDatePicker.yearMonthContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthContainerStyle'),
                  ...yearContainerStyle
                },
                // Year Item Container Style
                year_label: {
                  ..._utils.stylesDatePicker.yearMonthTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTextStyle'),
                  ...yearTextStyle
                },
                // Year Item Text Style
                active_year: {
                  ..._utils.stylesDatePicker.activeYearMonthContainerStyleCustom,
                  ...activeYearContainerStyle
                },
                // Active Year Item Container Style
                active_year_label: {
                  ..._utils.stylesDatePicker.activeYearMonthTextStyleCustom,
                  ...activeYearTextStyle
                },
                // Active Year Item Text Style
                selected_year: {
                  ..._utils.stylesDatePicker.selectedYearMonthContainerStyleCustom,
                  ...selectedYearContainerStyle
                },
                // Selected Year Item Container Style
                selected_year_label: {
                  ..._utils.stylesDatePicker.selectedYearMonthTextStyleCustom,
                  ...selectedYearTextStyle
                },
                // Selected Year Item Text Style
                month: {
                  ..._utils.stylesDatePicker.yearMonthContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthContainerStyle'),
                  ...monthContainerStyle
                },
                // Month Item Container Style
                month_label: {
                  ..._utils.stylesDatePicker.yearMonthTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTextStyle'),
                  ...monthTextStyle
                },
                // Month Item Text Style
                selected_month: {
                  ..._utils.stylesDatePicker.activeYearMonthContainerStyleCustom,
                  ...selectedMonthContainerStyle
                },
                // Selected Month Item Container Style
                selected_month_label: {
                  ..._utils.stylesDatePicker.activeYearMonthTextStyleCustom,
                  ...selectedMonthTextStyle
                },
                // Selected Month Item Text Style
                header: {
                  ..._utils.stylesDatePicker.headerContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'headerContainerStyle'),
                  ...headerContainerStyle
                },
                // Header Container Style
                button_prev: {
                  ..._utils.stylesDatePicker.datePickerModalLeftRightButtonIconOuter,
                  ...(0, _utils.getThemedColor)(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerLeftButtonStyle
                },
                // Left Button Style
                button_next: {
                  ..._utils.stylesDatePicker.datePickerModalLeftRightButtonIconOuter,
                  ...(0, _utils.getThemedColor)(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerRightButtonStyle
                },
                // Right Button Style
                day: {
                  ...datePickerDayContainerStyle
                },
                // Day Button Container Style
                day_label: {
                  ...(0, _utils.getThemedColor)(theme, 'datePickerDayTextStyle'),
                  ...datePickerDayTextStyle
                },
                // Day Button Text Style
                month_selector_label: {
                  ..._utils.stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...monthSelectorTextStyle
                },
                // Month Selector Button Style
                year_selector_label: {
                  ..._utils.stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...yearSelectorTextStyle
                },
                // Year Selector Button Style
                time_selector_label: {
                  ..._utils.stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...timeSelectorTextStyle
                },
                // Time Selector Button Style
                outside_label: {
                  ...(0, _utils.getThemedColor)(theme, 'datePickerOutsideDayTextStyle'),
                  ...datePickerOutsideDayTextStyle
                },
                // Outside Day Button Style
                time_selected_indicator: {
                  ..._utils.stylesDatePicker.timePickerContainerStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'timePickerContainerStyle'),
                  ...timePickerIndicatorStyle
                },
                // Time Picker Indicator Style
                range_fill: {
                  ..._utils.stylesDatePicker.datePickerRangeStyleCustom,
                  ...datePickerRangeStyle
                },
                // Range Fill Style
                time_label: {
                  ..._utils.stylesDatePicker.timeTextStyleCustom,
                  ...(0, _utils.getThemedColor)(theme, 'timeTextStyle'),
                  ...timeTextStyle
                },
                // Time Label Style
                ...datePickerStyles
              },
              ...datePickerProps
            }), !hideConfirmButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              style: {
                ..._utils.stylesDatePicker.datePickerConfirmButton,
                ...datePickerConfirmButtonStyle
              },
              onPress: () => closeModal(),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
                style: {
                  ..._utils.stylesDatePicker.datePickerConfirmButtonText,
                  ...datePickerConfirmButtonTextStyle
                },
                children: "Confirm"
              })
            })]
          })]
        })]
      })
    })
  });
};
var _default = exports.default = DatePickerModal;
//# sourceMappingURL=datePickerModal.js.map