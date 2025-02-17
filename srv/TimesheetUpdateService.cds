using { API_MANAGE_WORKFORCE_TIMESHEET as external } from './external/API_MANAGE_WORKFORCE_TIMESHEET';
service TimesheetUpdateService @(path: 'TimesheetUpdateService') {
    entity  MyTimesheetUpdate as projection on external.TimeSheetEntryCollection;
}