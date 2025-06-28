"use strict";

import DateTimePicker, { useDefaultStyles } from "react-native-ui-datepicker";
import { useCallback, useEffect, useState } from "react";
import { Animated, Modal, Pressable, Text, View } from "react-native";
import { colors, getThemedColor, screenHeight, screenWidth, stylesDatePicker } from "./utils";
import Icon from "./icon";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
  const defaultStyles = useDefaultStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition] = useState(new Animated.Value(1)); // 1 is off screen, 0 is on screen

  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedRange, setSelectedRange] = useState(range);
  const [selectedDates, setSelectedDates] = useState(dates);
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
          outputRange: [screenHeight / 5, 0]
        });
      case 'slideUp':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, screenHeight]
        });
      case 'slideDown':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, -screenHeight / 5]
        });
      default:
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [screenHeight / 5, screenHeight / 5]
        });
    }
  };
  const getTranslateXAnimation = () => {
    switch (animationType) {
      case 'slideLeft':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, screenWidth]
        });
      case 'slideRight':
        return modalPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -screenWidth]
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
  const onChangeDate = useCallback(params => {
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
    Animated.timing(modalPosition, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };
  const closeModal = () => {
    Animated.timing(modalPosition, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true
    }).start(() => {
      setIsModalVisible(false);
      setShowDatePicker(false);
    });
  };
  useEffect(() => {
    if (showDatePicker) {
      openModal();
    }
  }, [showDatePicker]);
  return isModalVisible && /*#__PURE__*/_jsx(Modal, {
    visible: isModalVisible,
    transparent: true,
    animationType: "none",
    onRequestClose: () => closeModal(),
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: opacityAnimationOuter
      },
      children: /*#__PURE__*/_jsxs(View, {
        style: stylesDatePicker.datePickerModalContainer,
        children: [/*#__PURE__*/_jsx(Pressable, {
          style: {
            width: screenWidth,
            height: screenHeight,
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            // transform: 'translateX(-90%)',
            zIndex: 1
          },
          onPress: () => {
            closeModal();
          }
        }), /*#__PURE__*/_jsxs(Animated.View, {
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
          children: [/*#__PURE__*/_jsx(Pressable, {
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
          }), /*#__PURE__*/_jsxs(View, {
            style: [stylesDatePicker.datePickerModalInner, getThemedColor(theme, 'datePickerModalInner'), datePickerBackgroundColor ? {
              backgroundColor: datePickerBackgroundColor
            } : {}],
            children: [showDatePickerCloseButton && /*#__PURE__*/_jsx(Pressable, {
              style: [stylesDatePicker.datePickerModalCloseButton, datePickerCloseButtonColor ? {
                backgroundColor: datePickerCloseButtonColor
              } : {}],
              onPress: () => closeModal(),
              children: /*#__PURE__*/_jsx(Icon, {
                name: "times",
                size: 12,
                color: colors.offWhite
              })
            }), /*#__PURE__*/_jsx(DateTimePicker, {
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
                  ...stylesDatePicker.todayContainerStyleCustom,
                  ...todayContainerStyle
                },
                // Today Item Container Style
                today_label: {
                  ...getThemedColor(theme, 'todayTextStyle'),
                  ...todayTextStyle
                },
                // Today Item Text Style
                selected: {
                  ...stylesDatePicker.selectedContainerStyleCustom,
                  ...selectedContainerStyle
                },
                // Selected Item Container Style
                selected_label: {
                  ...stylesDatePicker.selectedTextStyleCustom,
                  ...selectedTextStyle
                },
                // Selected Item Text Style
                weekdays: {
                  ...stylesDatePicker.weekDaysContainerStyleCustom,
                  ...getThemedColor(theme, 'weekDaysContainerStyle'),
                  ...weekDaysContainerStyle
                },
                // Weekdays Container Style
                weekday_label: {
                  ...stylesDatePicker.weekDaysTextStyleCustom,
                  ...weekDaysTextStyle
                },
                // Weekday Text Style
                year: {
                  ...stylesDatePicker.yearMonthContainerStyleCustom,
                  ...getThemedColor(theme, 'yearMonthContainerStyle'),
                  ...yearContainerStyle
                },
                // Year Item Container Style
                year_label: {
                  ...stylesDatePicker.yearMonthTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTextStyle'),
                  ...yearTextStyle
                },
                // Year Item Text Style
                active_year: {
                  ...stylesDatePicker.activeYearMonthContainerStyleCustom,
                  ...activeYearContainerStyle
                },
                // Active Year Item Container Style
                active_year_label: {
                  ...stylesDatePicker.activeYearMonthTextStyleCustom,
                  ...activeYearTextStyle
                },
                // Active Year Item Text Style
                selected_year: {
                  ...stylesDatePicker.selectedYearMonthContainerStyleCustom,
                  ...selectedYearContainerStyle
                },
                // Selected Year Item Container Style
                selected_year_label: {
                  ...stylesDatePicker.selectedYearMonthTextStyleCustom,
                  ...selectedYearTextStyle
                },
                // Selected Year Item Text Style
                month: {
                  ...stylesDatePicker.yearMonthContainerStyleCustom,
                  ...getThemedColor(theme, 'yearMonthContainerStyle'),
                  ...monthContainerStyle
                },
                // Month Item Container Style
                month_label: {
                  ...stylesDatePicker.yearMonthTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTextStyle'),
                  ...monthTextStyle
                },
                // Month Item Text Style
                selected_month: {
                  ...stylesDatePicker.activeYearMonthContainerStyleCustom,
                  ...selectedMonthContainerStyle
                },
                // Selected Month Item Container Style
                selected_month_label: {
                  ...stylesDatePicker.activeYearMonthTextStyleCustom,
                  ...selectedMonthTextStyle
                },
                // Selected Month Item Text Style
                header: {
                  ...stylesDatePicker.headerContainerStyleCustom,
                  ...getThemedColor(theme, 'headerContainerStyle'),
                  ...headerContainerStyle
                },
                // Header Container Style
                button_prev: {
                  ...stylesDatePicker.datePickerModalLeftRightButtonIconOuter,
                  ...getThemedColor(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerLeftButtonStyle
                },
                // Left Button Style
                button_next: {
                  ...stylesDatePicker.datePickerModalLeftRightButtonIconOuter,
                  ...getThemedColor(theme, 'datePickerModalLeftRightButtonIconOuter'),
                  ...datePickerRightButtonStyle
                },
                // Right Button Style
                day: {
                  ...datePickerDayContainerStyle
                },
                // Day Button Container Style
                day_label: {
                  ...getThemedColor(theme, 'datePickerDayTextStyle'),
                  ...datePickerDayTextStyle
                },
                // Day Button Text Style
                month_selector_label: {
                  ...stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...monthSelectorTextStyle
                },
                // Month Selector Button Style
                year_selector_label: {
                  ...stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...yearSelectorTextStyle
                },
                // Year Selector Button Style
                time_selector_label: {
                  ...stylesDatePicker.yearMonthTimeSelectorTextStyleCustom,
                  ...getThemedColor(theme, 'yearMonthTimeSelectorTextStyle'),
                  ...timeSelectorTextStyle
                },
                // Time Selector Button Style
                outside_label: {
                  ...getThemedColor(theme, 'datePickerOutsideDayTextStyle'),
                  ...datePickerOutsideDayTextStyle
                },
                // Outside Day Button Style
                time_selected_indicator: {
                  ...stylesDatePicker.timePickerContainerStyleCustom,
                  ...getThemedColor(theme, 'timePickerContainerStyle'),
                  ...timePickerIndicatorStyle
                },
                // Time Picker Indicator Style
                range_fill: {
                  ...stylesDatePicker.datePickerRangeStyleCustom,
                  ...datePickerRangeStyle
                },
                // Range Fill Style
                time_label: {
                  ...stylesDatePicker.timeTextStyleCustom,
                  ...getThemedColor(theme, 'timeTextStyle'),
                  ...timeTextStyle
                },
                // Time Label Style
                ...datePickerStyles
              },
              ...datePickerProps
            }), !hideConfirmButton && /*#__PURE__*/_jsx(Pressable, {
              style: {
                ...stylesDatePicker.datePickerConfirmButton,
                ...datePickerConfirmButtonStyle
              },
              onPress: () => closeModal(),
              children: /*#__PURE__*/_jsx(Text, {
                style: {
                  ...stylesDatePicker.datePickerConfirmButtonText,
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
export default DatePickerModal;
//# sourceMappingURL=datePickerModal.js.map