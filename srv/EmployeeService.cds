namespace srv;

using { ZAPI_EMPLOYEE_DETAILS_SB as Employee } from './external/ZAPI_EMPLOYEE_DETAILS_SB';
service EmployeeService @(path: 'EmployeeService') {
    entity MyEmployeeData as projection on Employee.ZI_EMPLOYEE_DETS_ALL;
}

