const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { and } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', (app) => app.use(proxy()));
var oEmployee;
var oDatestart;
var oDateEnd;
var hours;
module.exports = cds.service.impl(async function (srv) {
    const { MyTimesheetDetails } = this.entities;
    const getAllTimesheetdetails = async function (req) {
        const { yy1TimesheetdetailsCds } = require('./src/generated/YY1_TIMESHEETDETAILS_CDS');
        const { yy1_TimesheetdetailsApi } = yy1TimesheetdetailsCds();
        const Timesheetdetails = await yy1_TimesheetdetailsApi.requestBuilder().getAll().top(9999999).select(
            yy1_TimesheetdetailsApi.schema.ALL_FIELDS
        ).filter(
            and(yy1_TimesheetdetailsApi.schema.PERSON_WORK_AGREEMENT_EXTERNAL_ID.equals(oEmployee),
                and(yy1_TimesheetdetailsApi.schema.TIME_SHEET_DATE.lessOrEqual(oDateEnd),
                    yy1_TimesheetdetailsApi.schema.TIME_SHEET_DATE.greaterOrEqual(oDatestart)),
                and(yy1_TimesheetdetailsApi.schema.RECORDED_HOURS.notEquals(0.00)))
        ).execute({
            destinationName: 'MANAGEWORKFORCE'
        });
        return Timesheetdetails;
    }

    srv.on('READ', MyTimesheetDetails, async (req) => {
        const aFilter = req.query.SELECT.where;
        const filterparameter1 = aFilter[2].val;
        const aFilterDate = aFilter[4];
        var jsonData = JSON.stringify(aFilterDate);
        var oDatestart1 = aFilterDate.xpr[2].val;
        var oDateEnd1 = aFilterDate.xpr[6].val;
        var oDate1 = new Date(oDatestart1);
        var oDate2 = new Date(oDateEnd1);
        oDatestart = oDate1;
        oDateEnd = oDate2;
        oEmployee = filterparameter1;
        var timesheetdetailsTab = await getAllTimesheetdetails().then(
            Timesheetdetails => {
                var aRecord = [];
                Timesheetdetails.forEach(element => {
                    var record = {};
                    record.TimeSheetRecord = element.timeSheetRecord;
                    record.PersonWorkAgreement = element.personWorkAgreement;
                    record.PersonWorkAgreementExternalID = element.personWorkAgreementExternalId;
                    record.Project_1 = element.project1;
                    record.ProjectDescription_1 = element.projectDescription1;
                    record.WBSElementInternalID = element.wbsElementInternalId;
                    record.WBSDescription = element.wbsDescription;
                    record.ReceiverCostCenter = element.receiverCostCenter;
                    record.ReceiverCostCenterDescription = element.receiverCostCenterDescription;
                    record.SenderCostCenter = element.senderCostCenter;
                    record.SenderCostCenterDescription = element.senderCostCenterDescription;
                    record.RecordedHours = element.recordedHours;
                    record.TimeSheetDate = element.timeSheetDate;
                    record.TimeSheetStatus = element.timeSheetStatus;
                    record.TimeSheetStatusText = element.timeSheetStatusText;
                    record.CreatedByUser = element.createdByUser;
                    record.CreatedByName = element.createdByName;
                    record.TimeSheetApprovedByUser = element.timeSheetApprovedByUser;
                    record.ApprovedByName = element.approvedByName;
                    record.TimeSheetTaskComponent = element.timeSheetTaskComponent;
                    record.TimeSheetTaskType = element.timeSheetTaskType;
                    record.TimeSheetTaskTypeText = element.timeSheetTaskTypeText
                    record.TimeSheetTaskLevel = element.timeSheetTaskLevel;
                    record.ControllingArea = element.controllingArea;
                    record.CompanyCode = element.companyCode;
                    aRecord.push(record);
                });
                return aRecord;
            }
        );
        return timesheetdetailsTab;
    })
});