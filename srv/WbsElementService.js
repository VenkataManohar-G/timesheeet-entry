const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { and, replace } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', (app) => app.use(proxy()));
var oUser,oFiscalyear,oFiscalperiod;
module.exports = cds.service.impl(async function (srv) {
    const { MyWbsElement } = this.entities;
    const getEmployeeWbsDetails = async function (req) {
        const { yy1ResourcewbseassignmentCds } = require('./src/generated/YY1_RESOURCEWBSEASSIGNMENT_CDS');
        const { yy1_ResourceWbseAssignmentApi } = yy1ResourcewbseassignmentCds();
        const WbsEntries = await yy1_ResourceWbseAssignmentApi.requestBuilder().getAll().top(9999999).select(
            yy1_ResourceWbseAssignmentApi.schema.ALL_FIELDS
        ).filter(
            and(yy1_ResourceWbseAssignmentApi.schema.PERSON_EXTERNAL_ID.equals(oUser),
                yy1_ResourceWbseAssignmentApi.schema.FISCAL_YEAR.equals(oFiscalyear),
                yy1_ResourceWbseAssignmentApi.schema.FISCAL_PERIOD.equals(oFiscalperiod))
        ).execute({
            destinationName: 'MANAGEWORKFORCE'
        });
        return WbsEntries;
    }

    const getAllWbsDetails = async function (req) {
        const { yy1ResourcewbseassignmentCds } = require('./src/generated/YY1_RESOURCEWBSEASSIGNMENT_CDS');
        const { yy1_ResourceWbseAssignmentApi } = yy1ResourcewbseassignmentCds();
        const WbsEntries = await yy1_ResourceWbseAssignmentApi.requestBuilder().getAll().top(9999999).select(
            yy1_ResourceWbseAssignmentApi.schema.ALL_FIELDS
        ).filter(
            and(yy1_ResourceWbseAssignmentApi.schema.FISCAL_YEAR.equals(oFiscalyear),
                yy1_ResourceWbseAssignmentApi.schema.FISCAL_PERIOD.equals(oFiscalperiod))
        ).execute({
            destinationName: 'MANAGEWORKFORCE'
        });
        return WbsEntries;
    }

    srv.on('READ', MyWbsElement, async (req) => {
        var aFilter = req.query.SELECT.where;
        console.log(aFilter);
        var afieldName = aFilter[0].ref;
        var afieldValue = JSON.stringify(afieldName);
        var afield = afieldValue.replace(/[^\w\s]/g, '');
        var wbsTab;
        console.log(aFilter);
        if (afield === "PersonExternalID") {
            oUser = aFilter[2].val;
            oFiscalyear = aFilter[6].val;
            oFiscalperiod = aFilter[10].val;
            console.log(oFiscalyear);
            console.log(oFiscalperiod);
            wbsTab = await getEmployeeWbsDetails().then(
                WbsEntries => {
                    var aRecord = [];
                    WbsEntries.forEach(element => {
                        var record = {};
                        record.EngagementProject = element.engagementProject;
                        record.WorkPackage = element.workPackage;
                        record.FiscalPeriod = element.fiscalPeriod;
                        record.FiscalYear = element.fiscalYear;
                        record.WorkPackage = element.workPackage;
                        record.EngagementProjectResourceType = element.engagementProjectResourceType;
                        record.EngagementProjectResource = element.engagementProjectResource;
                        record.EmploymentInternalID = element.employmentInternalId;
                        record.WorkItem = element.workItem;
                        record.PersonExternalID = element.personExternalId;
                        record.WorkPackageName = element.workPackageName;
                        record.WorkPackageStartDate = element.workPackageStartDate;
                        record.WorkPackageEndDate = element.workPackageEndDate;
                        record.WBSElementObject = element.wbsElementObject;
                        record.WBSDescription = element.wbsDescription;
                        record.WorkItemName = element.workItemName;
                        record.Person_1 = element.person1;
                        record.WBSElementInternalID = element.wbsElementInternalId;
                        record.EngagementProjResourceText = element.engagementProjResourceText;
                        record.EngagementProjResourceTypeText = element.engagementProjResourceTypeText;
                        record.EngagementProjectName = element.engagementProjectName;
                        aRecord.push(record);
                    });
                    return aRecord;
                }
            );
        }else{
            oFiscalyear = aFilter[2].val;
            oFiscalperiod = aFilter[6].val;
            console.log(oFiscalyear);
            console.log(oFiscalperiod);
            wbsTab = await getAllWbsDetails().then(
                WbsEntries => {
                    var aRecord = [];
                    WbsEntries.forEach(element => {
                        var record = {};
                        record.EngagementProject = element.engagementProject;
                        record.WorkPackage = element.workPackage;
                        record.FiscalPeriod = element.fiscalPeriod;
                        record.FiscalYear = element.fiscalYear;
                        record.WorkPackage = element.workPackage;
                        record.EngagementProjectResourceType = element.engagementProjectResourceType;
                        record.EngagementProjectResource = element.engagementProjectResource;
                        record.EmploymentInternalID = element.employmentInternalId;
                        record.WorkItem = element.workItem;
                        record.PersonExternalID = element.personExternalId;
                        record.WorkPackageName = element.workPackageName;
                        record.WorkPackageStartDate = element.workPackageStartDate;
                        record.WorkPackageEndDate = element.workPackageEndDate;
                        record.WBSElementObject = element.wbsElementObject;
                        record.WBSDescription = element.wbsDescription;
                        record.WorkItemName = element.workItemName;
                        record.Person_1 = element.person1;
                        record.WBSElementInternalID = element.wbsElementInternalId;
                        record.EngagementProjResourceText = element.engagementProjResourceText;
                        record.EngagementProjResourceTypeText = element.engagementProjResourceTypeText;
                        record.EngagementProjectName = element.engagementProjectName;
                        aRecord.push(record);
                    });
                    return aRecord;
                }
            );
        }

        return wbsTab;
    })

});