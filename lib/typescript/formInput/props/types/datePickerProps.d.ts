import { ViewStyle, TextStyle } from 'react-native';
/**
 * Style props for customizing the appearance of the date picker
 */
export interface DatePickerStyleProps {
    /**
     * Style object for the header text container in the date picker
     */
    headerTextContainerStyle?: ViewStyle;
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
    leftButtonStyle?: ViewStyle;
    /**
     * Style object for the right navigation button in the date picker
     * @example datePickerRightButtonStyle={{ backgroundColor: "blue" }}
     */
    rightButtonStyle?: ViewStyle;
    /**
     * Style object for the day container in the date picker in the calendar view
     * @example datePickerDayContainerStyle={{ backgroundColor: "blue" }}
     */
    dayContainerStyle?: ViewStyle;
    /**
     * Style object for the day text in the date picker in the calendar view
     * @example datePickerDayTextStyle={{ color: "red" }}
     */
    dayTextStyle?: TextStyle;
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
    outsideDayTextStyle?: TextStyle;
    /**
     * Style object for the time picker indicator in the date picker in time view
     * @example timePickerIndicatorStyle={{ backgroundColor: "blue" }}
     */
    timePickerIndicatorStyle?: ViewStyle;
    /**
     * Style object for the date picker range selection in the date picker in range view
     * @example datePickerRangeStyle={{ backgroundColor: "blue" }}
     */
    rangeStyle?: ViewStyle;
    /**
     * Style object for the time text in the date picker in time view
     * @example timeTextStyle={{ color: "red" }}
     */
    timeTextStyle?: TextStyle;
    /**
     * Style object for the date picker confirm button
     * @example datePickerConfirmButtonStyle={{ backgroundColor: "blue" }}
     */
    confirmButtonStyle?: ViewStyle;
    /**
     * Style object for the date picker confirm button text
     * @example datePickerConfirmButtonTextStyle={{ color: "white" }}
     */
    confirmButtonTextStyle?: TextStyle;
}
/**
 * Date picker mode options: single date, date range, or multiple dates
 */
export type DatePickerModeType = 'single' | 'range' | 'multiple';
/**
 * Animation types for the date picker modal
 */
export type DatePickerAnimationType = 'zoomIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'none';
/**
 * Date range structure with start and end dates
 */
export interface DateRange {
    startDate: Date | undefined;
    endDate: Date | undefined;
}
/**
 * Props for configuring the date picker functionality
 */
export interface DatePickerProps {
    /**
     * Boolean to enable the date picker functionality
     * @example datePicker={true}
     */
    enabled?: boolean;
    /**
     * Boolean to include time in the date picker. It will only work in datePickerMode="single"
     * @example datePickerWithTime={true}
     */
    withTime?: boolean;
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
     * Initial date for the date picker. (For datePickeMode: single)
     * @example initialDate={new Date()}
     */
    initialDate?: Date;
    /**
     * Initial date range for the date picker. (For datePickeMode: range)
     * @example initialRange={startDate: initialStartDate, endDate: initialEndDate}
     */
    initialRange?: DateRange;
    /**
     * Initial dates for the date picker. (For datePickeMode: multiple)
     * @example initialDates={[date_1, date_2, date_3]}
     */
    initialDates?: Date[];
    /**
     * Function to call when the date changes. (For datePickeMode: single)
     * @example onDateChange={(date: Date) => console.log(date)}
     */
    onDateChange?: (date: Date) => void;
    /**
     * Function to call with the selected date value. (For datePickeMode: single)
     * @example sendDateValue={(dateValue) => console.log(dateValue)}
     */
    sendDateValue?: (dateValue: string) => void;
    /**
     * Function to call when the date range changes. (For datePickeMode: range)
     * @example onDateRangeChange={({ startDate, endDate }) => { console.log("Start Date: ", startDate); console.log("End Date: ", endDate); }}
     */
    onDateRangeChange?: (range: DateRange) => void;
    /**
     * Function to call with the selected date range values. (For datePickeMode: range)
     * @example sendDateRangeValues={(startDate, endDate) => { console.log("Start Date: ", startDate); console.log("End Date: ", endDate); }}
     */
    sendDateRangeValues?: (startDateValue: string, endDateValue: string) => void;
    /**
     * Function to call when the dates change. (For datePickeMode: multiple)
     * @example onDatesChange={(dates) => console.log(dates);}
     */
    onDatesChange?: (dates: Date[] | undefined) => void;
    /**
     * Function to call with the selected dates values. (For datePickeMode: multiple)
     * @example sendDatesValues={(dates) => {console.log(dates)}}
     */
    sendDatesValues?: (datesValues: string[]) => void;
    /**
     * Background color for the date picker
     * @example datePickerBackgroundColor="red"
     */
    backgroundColor?: string;
    /**
     * Boolean to show the close button in the date picker
     * @example showDatePickerCloseButton={true}
     */
    showCloseButton?: boolean;
    /**
     * Color of the close button in the date picker
     * @example datePickerCloseButtonColor="blue"
     */
    closeButtonColor?: string;
    /**
     * Mode of the date picker (e.g., 'single', 'range', 'multiple')
     * @example datePickerMode="multiple"
     */
    mode?: DatePickerModeType;
    /**
     * Color for selected items in the date picker
     */
    selectedItemColor?: string;
    /**
     * First day of the week in the date picker
     * @example firstDayOfWeek={0}
     */
    firstDayOfWeek?: number;
    /**
     * Placeholder text for the date picker
     * @example datePlaceholder="Select Date of Birth"
     */
    placeholder?: string;
    /**
     * Style object for the date placeholder text
     * @example datePlaceholderStyle={{ color: "blue" }}
     */
    placeholderStyle?: TextStyle;
    /**
     * Animation type for the date picker
     * @example datePickerAnimationType="slideDown"
     */
    animationType?: DatePickerAnimationType;
    /**
     * Custom animation duration for the transition of date picker modal
     * @example animationDuration={300}
     */
    animationDuration?: number;
    /**
     * Boolean to hide the date picker confirm button
     * @example hideDatePickerConfirmButton={true}
     */
    hideConfirmButton?: boolean;
    /**
     * Custom format for the date / date range / dates
     * @example dateFormat="DD/MM/YYYY"
     */
    dateFormat?: string;
    /**
     * Custom format for the date and time for single date if datePickerWithTime is selected
     * @example dateTimeFormat="DD/MM/YYYY HH/MM/SS"
     */
    dateTimeFormat?: string;
    /**
     * Additional props for the date picker component
     * @example datePickerProps={{ date: new Date() }}
     */
    componentProps?: any;
    /**
     * Additional styles for the date picker component
     * @example datePickerStyles={{today: {backgroundColor: "red" }}}
     */
    styles?: DatePickerStyleProps;
}
//# sourceMappingURL=datePickerProps.d.ts.map