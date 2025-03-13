const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { and, replace } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', (app) => app.use(proxy()));
var oUser,oFiscalyear,oFiscalperiod;
module.exports = cds.service.impl(async function (srv) {
    const { MyWbsElementAll } = this.entities;
        const getWbsDetailsAll = async function (req) {
        const { yy1WbselementsbasicCds } = require('./src/generated/YY1_WBSELEMENTSBASIC_CDS');
        const { yy1_WbselementsbasicApi } = yy1WbselementsbasicCds();
        const WbsEntriesAll = await yy1_WbselementsbasicApi.requestBuilder().getAll().top(9999999).select(
            yy1_WbselementsbasicApi.schema.ALL_FIELDS
        ).execute({
            destinationName: 'MANAGEWORKFORCE'
        });
        return WbsEntriesAll;
    }

    srv.on('READ', MyWbsElementAll, async (req) => {
            wbsTab = await getWbsDetailsAll().then(
                WbsEntriesAll => {
                    var aRecord = [];
                    WbsEntriesAll.forEach(element => {
                        var record = {};
                        record.WBSElementInternalID = element.wbsElementInternalId;
                        record.WBSElementExternalID = element.wbsElementExternalId;
                        record.WBSElement = element.wbsElement;
                        record.WBSElementShortID = element.wbsElementShortId;
                        record.WBSDescription = element.wbsDescription;
                        record.CompanyCode = element.companyCode;
                        record.ControllingArea = element.controllingArea;
                        record.FunctionalArea = element.functionalArea;
                        record.ProfitCenter = element.profitCenter;
                        record.ResponsibleCostCenter = element.responsibleCostCenter;
                        record.Plant = element.plant;
                        record.CostCenter = element.costCenter;
                        record.ProjectInternalID_1 = element.projectInternalId1;
                        record.WBSElementObject = element.wbsElementObject;
                        record.ProjectType = element.projectType;
                        record.ProjectInternalID = element.projectInternalId;
                        record.ProjectExternalID = element.projectExternalId;
                        record.ProjectDescription = element.projectDescription;
                        record.PlannedStartDate = element.plannedStartDate;
                        record.PlannedEndDate = element.plannedEndDate;
                        aRecord.push(record);
                    });
                    return aRecord;
                }
            );

        return wbsTab;
    })

});