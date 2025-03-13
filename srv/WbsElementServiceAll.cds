namespace srv;

using { YY1_WBSELEMENTSBASIC_CDS as Wbs } from './external/YY1_WBSELEMENTSBASIC_CDS';
service WbsElementServiceAll @(path: 'WbsElementServiceAll') {
    entity  MyWbsElementAll as projection on Wbs.YY1_wbselementsbasic;
}