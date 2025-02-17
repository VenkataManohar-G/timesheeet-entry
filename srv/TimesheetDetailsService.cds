namespace srv;

using { YY1_TIMESHEETDETAILS_CDS as Details } from './external/YY1_TIMESHEETDETAILS_CDS';

service TimesheetDetailsService @(path: 'TimesheetDetailsService') {

    entity MyTimesheetDetails as projection on Details.YY1_TIMESHEETDETAILS;

}