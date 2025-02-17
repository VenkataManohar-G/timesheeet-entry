namespace srv;

using { YY1_RESOURCEWBSEASSIGNMENT_CDS as Wbs } from './external/YY1_RESOURCEWBSEASSIGNMENT_CDS';
service WbsElementService @(path: 'WbsElementService') {
    entity  MyWbsElement as projection on Wbs.YY1_ResourceWBSEAssignment;
}