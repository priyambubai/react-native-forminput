import { TextStyle, ViewStyle } from "react-native";
import { DateType } from "react-native-ui-datepicker";
/**
 * Props definition for the DatePickerModal component
 * These props control the internal behavior and appearance of the date picker modal
 */
export type DatePickerModalPropTypes = {
    /**
     * Selected date for single date picker mode
     */
    date?: DateType;
    /**
     * Function to set the selected date in single date picker mode
     */
    setDate?: (date: DateType) => void;
    /**
     * Selected date range for range date picker mode
     */
    range: {
        startDate: DateType;
        endDate: DateType;
    };
    /**
     * Function to set the selected date range in range date picker mode
     */
    setRange: (range: {
        startDate: DateType;
        endDate: DateType;
    }) => void;
    /**
     * Selected dates for multiple date picker mode
     */
    dates: DateType[] | undefined;
    /**
     * Function to set the selected dates in multiple date picker mode
     */
    setDates: (dates: Date[] | undefined) => void;
    /**
     * Boolean to include time in the date picker. It will only work in datePickerMode="single"
     * @example datePickerWithTime={true}
     */
    datePickerWithTime?: boolean;
    /**
     * Boolean to control the visibility of the date picker modal
     */
    showDatePicker?: boolean;
    /**
     * Function to control the visibility of the date picker modal
     */
    setShowDatePicker: (showDatePicker: boolean) => void;
    /**
     * Boolean to disable future dates in the date picker
     * @example disableFutureDates={true}
     */
    disableFutureDates?: boolean;
    /**
     * Boolean to disable past dates in the date picker
     * @example disablePastDates={true}
     */
    disablePastDates?: boolean;
    /**
     * Function to call when the date changes. (For datePickeMode: single)
     * @example onDateChange={(date: Date) => console.log(date)}
     */
    onDateChange?: (date: Date) => void;
    /**
     * Function to call when the date range changes. (For datePickeMode: range)
     * @example onDateRangeChange={({ startDate, endDate }) => { console.log("Start Date: ", startDate); console.log("End Date: ", endDate); }}
     */
    onDateRangeChange?: (range: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    }) => void;
    /**
     * Function to call when the dates change. (For datePickeMode: multiple)
     * @example onDatesChange={(dates) => console.log(dates);}
     */
    onDatesChange?: (dates: Date[] | undefined) => void;
    /**
     * Background color for the date picker
     * @example datePickerBackgroundColor="red"
     */
    datePickerBackgroundColor?: string;
    /**
     * Boolean to show the close button in the date picker
     * @example showDatePickerCloseButton={true}
     */
    showDatePickerCloseButton?: boolean;
    /**
     * Color of the close button in the date picker
     * @example datePickerCloseButtonColor="blue"
     */
    datePickerCloseButtonColor?: string;
    /**
     * Mode of the date picker (e.g., 'single', 'range', 'multiple')
     * @example datePickerMode="multiple"
     */
    datePickerMode?: 'single' | 'range' | 'multiple';
    /**
     * First day of the week in the date picker
     * @example firstDayOfWeek={0}
     */
    firstDayOfWeek?: number;
    /**
     * @deprecated This property will be removed in a future version
     */
    headerContainerStyle?: ViewStyle;
    /**
     * Function to control the visibility of the date placeholder
     */
    setShowDatePlaceholder?: (showDatePlaceholder: boolean) => void;
    /**
     * Animation type for the date picker
     * @example animationType="slideDown"
     */
    animationType?: 'zoomIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'none';
    /**
     * Custom animation duration for the transition of date picker modal
     * @example animationDuration={300}
     */
    animationDuration?: number;
    /**
     * Boolean to hide the date picker confirm button
     * @example hideConfirmButton={true}
     */
    hideConfirmButton?: boolean;
    /**
     * String to specify the theme of the input field and the datepicker
     * Options are 'light', 'dark', or 'system' (to automatically match the device's theme)
     * @example theme="dark"
     */
    theme?: 'light' | 'dark' | 'system';
    /**
     * Style object for the selected date container in the date picker
     * @example selectedContainerStyle={{ backgroundColor: "blue" }}
     */
    selectedContainerStyle?: ViewStyle;
    /**
     * Style object for the selected date text in the date picker
     * @example selectedTextStyle={{ color: "white" }}
     */
    selectedTextStyle?: TextStyle;
    /**
     * Style object for the today's date container in the date picker
     * @example todayContainerStyle={{ backgroundColor: "green" }}
     */
    todayContainerStyle?: ViewStyle;
    /**
     * Style object for the today's date text in the date picker
     * @example todayTextStyle={{ color: "white" }}
     */
    todayTextStyle?: TextStyle;
    /**
     * Style object for the week days names container in the date picker
     * @example weekDaysContainerStyle={{ backgroundColor: "yellow" }}
     */
    weekDaysContainerStyle?: ViewStyle;
    /**
     * Style object for the week days names text in the date picker
     * @example weekDaysTextStyle={{ color: "red" }}
     */
    weekDaysTextStyle?: TextStyle;
    /**
     * Style object for the years container in the date picker in the year view
     * @example yearContainerStyle={{ backgroundColor: "purple" }}
     */
    yearContainerStyle?: ViewStyle;
    /**
     * Style object for the years text in the date picker in the year view
     * @example yearTextStyle={{ color: "orange" }}
     */
    yearTextStyle?: TextStyle;
    /**
     * Style object for the active year container in the date picker in the year view
     * @example activeYearContainerStyle={{ backgroundColor: "purple" }}
     */
    activeYearContainerStyle?: ViewStyle;
    /**
     * Style object for the active year text in the date picker in the year view
     * @example activeYearTextStyle={{ color: "white" }}
     */
    activeYearTextStyle?: TextStyle;
    /**
     * Style object for the selected year container (Current Year) in the date picker in the year view
     * @example selectedYearContainerStyle={{ backgroundColor: "purple" }}
     */
    selectedYearContainerStyle?: ViewStyle;
    /**
     * Style object for the selected year text (Current Year) in the date picker in the year view
     * @example selectedYearTextStyle={{ color: "white" }}
     */
    selectedYearTextStyle?: TextStyle;
    /**
     * Style object for the months container in the date picker in the month view
     * @example monthContainerStyle={{ backgroundColor: "purple" }}
     */
    monthContainerStyle?: ViewStyle;
    /**
     * Style object for the months text in the date picker in the month view
     * @example monthTextStyle={{ color: "orange" }}
     */
    monthTextStyle?: TextStyle;
    /**
     * Style object for the selected month container in the date picker in the month view
     * @example selectedMonthContainerStyle={{ backgroundColor: "purple" }}
     */
    selectedMonthContainerStyle?: ViewStyle;
    /**
     * Style object for the selected month text in the date picker in the month view
     * @example selectedMonthTextStyle={{ color: "white" }}
     */
    selectedMonthTextStyle?: TextStyle;
    /**
     * Style object for the left navigation button in the date picker
     * @example datePickerLeftButtonStyle={{ backgroundColor: "blue" }}
     */
    datePickerLeftButtonStyle?: ViewStyle;
    /**
     * Style object for the right navigation button in the date picker
     * @example datePickerRightButtonStyle={{ backgroundColor: "blue" }}
     */
    datePickerRightButtonStyle?: ViewStyle;
    /**
     * Style object for the day container in the date picker in the calendar view
     * @example datePickerDayContainerStyle={{ backgroundColor: "blue" }}
     */
    datePickerDayContainerStyle?: ViewStyle;
    /**
     * Style object for the day text in the date picker in the calendar view
     * @example datePickerDayTextStyle={{ color: "red" }}
     */
    datePickerDayTextStyle?: TextStyle;
    /**
     * Style object for the year selector text in the date picker in the calendar view
     * @example yearSelectorTextStyle={{ color: "red" }}
     */
    yearSelectorTextStyle?: TextStyle;
    /**
     * Style object for the month selector text in the date picker in the calendar view
     * @example monthSelectorTextStyle={{ color: "red" }}
     */
    monthSelectorTextStyle?: TextStyle;
    /**
     * Style object for the time selector text in the date picker in the calendar view
     * @example timeSelectorTextStyle={{ color: "red" }}
     */
    timeSelectorTextStyle?: TextStyle;
    /**
     * Style object for the outside day text in the date picker in the calendar view
     * (e.g., days that are not in the current month)
     * @example datePickerOutsideDayTextStyle={{ color: "red" }}
     */
    datePickerOutsideDayTextStyle?: TextStyle;
    /**
     * Style object for the time picker indicator in the date picker in time view
     * @example timePickerIndicatorStyle={{ backgroundColor: "blue" }}
     */
    timePickerIndicatorStyle?: ViewStyle;
    /**
     * Style object for the date picker range selection in the date picker in range view
     * @example datePickerRangeStyle={{ backgroundColor: "blue" }}
     */
    datePickerRangeStyle?: ViewStyle;
    /**
     * Additional props for the date picker component
     * @example datePickerProps={{ date: new Date() }}
     */
    datePickerProps?: any;
    /**
     * Additional styles for the date picker component
     * @example datePickerStyles={{today: {backgroundColor: "red" }}}
     */
    datePickerStyles?: any;
    /**
     * Style object for the time text in the date picker in time view
     * @example timeTextStyle={{ color: "red" }}
     */
    timeTextStyle?: TextStyle;
    /**
     * Style object for the date picker confirm button
     * @example datePickerConfirmButtonStyle={{ backgroundColor: "blue" }}
     */
    datePickerConfirmButtonStyle?: ViewStyle;
    /**
     * Style object for the date picker confirm button text
     * @example datePickerConfirmButtonTextStyle={{ color: "white" }}
     */
    datePickerConfirmButtonTextStyle?: TextStyle;
};
//# sourceMappingURL=datePickerModalProps.d.ts.map