using { API_MANAGE_WORKFORCE_TIMESHEET as external } from './external/API_MANAGE_WORKFORCE_TIMESHEET';
service TimesheetService @(path: 'TimesheetService') {
    entity  MyTimesheet as projection on external.TimeSheetEntryCollection;
}