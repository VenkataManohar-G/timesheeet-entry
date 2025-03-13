const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { and } = require('@sap-cloud-sdk/odata-v2');
const { parseZone } = require('moment');
cds.on('bootstrap', (app) => app.use(proxy()));
var oEmployee;
var oDatestart;
var oDateEnd;
module.exports = cds.service.impl(async function (srv) {
    const { MyTimesheet } = this.entities;
    /* POST */
    srv.on('POST', MyTimesheet, async (req) => {
        const { apiManageWorkforceTimesheet } = require('./src/generated/API_MANAGE_WORKFORCE_TIMESHEET');
        const { timeSheetEntryApi } = apiManageWorkforceTimesheet();
        try {
            console.log(req.data);
            var datereplace = parseZone(req.data.TimeSheetDate);
            var datavalue = datereplace;
            const dataaddentries = timeSheetEntryApi.entityBuilder()
                .personWorkAgreementExternalId(req.data.PersonWorkAgreementExternalID)
                .personWorkAgreement(req.data.PersonWorkAgreement)
                .companyCode(req.data.CompanyCode)
                .timeSheetStatus(req.data.TimeSheetStatus)
                .timeSheetDate(datavalue)
                .timeSheetIsReleasedOnSave(req.data.TimeSheetIsReleasedOnSave)
                .timeSheetOperation(req.data.TimeSheetOperation)
                .timeSheetIsExecutedInTestRun(req.data.TimeSheetIsExecutedInTestRun)
                .timeSheetDataFields({
                    timeSheetTaskType: req.data.TimeSheetDataFields_TimeSheetTaskType,
                    recordedHours: req.data.TimeSheetDataFields_RecordedHours,
                    recordedQuantity: req.data.TimeSheetDataFields_RecordedQuantity,
                    controllingArea: req.data.TimeSheetDataFields_ControllingArea,
                    receiverCostCenter: req.data.TimeSheetDataFields_ReceiverCostCenter,
                    wbsElement: req.data.TimeSheetDataFields_WBSElement,
                    workItem: req.data.TimeSheetDataFields_WorkItem,
                    receiverPubSecFuncnlArea: req.data.TimeSheetDataFields_ReceiverPubSecFuncnlArea,
                    hoursUnitOfMeasure: req.data.TimeSheetDataFields_HoursUnitOfMeasure,
                    activityType: req.data.TimeSheetDataFields_ActivityType,
                    timeSheetTaskLevel: req.data.TimeSheetDataFields_TimeSheetTaskLevel,
                    timeSheetTaskComponent: req.data.TimeSheetDataFields_TimeSheetTaskComponent
                })
                .build();
            console.log(dataaddentries);
           await timeSheetEntryApi.requestBuilder().create(dataaddentries).execute({
                destinationName: 'MANAGEWORKFORCE'
            });

            return req.data;
        } catch (error) {
            console.log(error.rootCause?.response?.data.error.message.value);
            var message = error.rootCause?.response?.data.error.message;
            return req.error(500,message.value);
        }

    });
});