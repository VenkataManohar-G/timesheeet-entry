namespace srv;

using { YY1_TIMESHEETDETAILS_CDS as Details } from './external/YY1_TIMESHEETDETAILS_CDS';

service TimesheetPreviousService @(path: 'TimesheetPreviousService') {

    entity MyTimesheetPreviousDetails as projection on Details.YY1_TIMESHEETDETAILS;

}