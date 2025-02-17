namespace srv;

using { YY1_TIMESHEETTASKTYPES_CDS as Tasks  } from './external/YY1_TIMESHEETTASKTYPES_CDS';

service TaskTypeService @(path: 'TaskTypeService') {

    entity  MyTasks as projection on Tasks.YY1_TimesheetTaskTypes;

}
