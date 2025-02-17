const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { and } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', ( app ) => app.use(proxy()));
var oUserEmail;
module.exports = cds.service.impl(async function(srv) {
    const { MyEmployeeData } = this.entities;
    const getAllEmployees = async function (req) {
        const { zapiEmployeeDetailsSb } = require('./src/generated/ZAPI_EMPLOYEE_DETAILS_SB');
        const { zi_Employee_Dets_AllApi } = zapiEmployeeDetailsSb();
        const Employees = await zi_Employee_Dets_AllApi.requestBuilder().getAll().top(9999999).select(
                                                    zi_Employee_Dets_AllApi.schema.ALL_FIELDS
                                ).filter(
                                        and ( zi_Employee_Dets_AllApi.schema.EMAIL.equals(oUserEmail) )
                                ).execute({
                                    destinationName: 'MANAGEWORKFORCE'
                                });
        return Employees;
    }

    srv.on('READ', MyEmployeeData, async (req) => {
        var aFilter = req.query.SELECT.where;
        console.log(aFilter[2].val);
        var filterparameter1 = aFilter[2].val;
        oUserEmail = filterparameter1;
        var EmployeeTab = await getAllEmployees().then(
            Employees =>{
                var aRecord = [];
                Employees.forEach(element => {
                    var record = {};
                    record.PersonWorkAgreement = element.personWorkAgreement;
                    record.CompanyCode = element.companyCode;
                    record.PersonWorkAgreementExternalID = element.personWorkAgreementExternalId;
                    record.StartDate = element.startDate;
                    record.EndDate = element.endDate;
                    record.CostCenter = element.costCenter;
                    record.CostCenterDescription = element.costCenterDescription;
                    record.CompanyCodeName = element.companyCodeName;
                    record.BusinessPartner = element.businessPartner;
                    record.Email = element.email;
                    record.UserID = element.userId;
                    record.PersonFullName = element.personFullName;
                    record.UserName = element.userName;
                    record.createdon = element.createdon;
                    aRecord.push(record);
                });
              return aRecord;
            }
       );
        return EmployeeTab;
    })
});