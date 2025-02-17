using { API_MANAGE_WORKFORCE_TIMESHEET as external } from './external/API_MANAGE_WORKFORCE_TIMESHEET';
service TimesheetDeleteService @(path: 'TimesheetDeleteService') {
    entity  MyTimesheetDelete as projection on external.TimeSheetEntryCollection;
}