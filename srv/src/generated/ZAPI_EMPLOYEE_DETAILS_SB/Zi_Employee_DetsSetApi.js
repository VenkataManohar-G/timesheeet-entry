"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zi_Employee_DetsSetApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Zi_Employee_DetsSet_1 = require("./Zi_Employee_DetsSet");
const Zi_Employee_DetsSetRequestBuilder_1 = require("./Zi_Employee_DetsSetRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Zi_Employee_DetsSetApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Zi_Employee_DetsSet_1.Zi_Employee_DetsSet;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Zi_Employee_DetsSetApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PARAMETERS: new odata_v2_1.OneToOneLink('Parameters', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new Zi_Employee_DetsSetRequestBuilder_1.Zi_Employee_DetsSetRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Zi_Employee_DetsSet_1.Zi_Employee_DetsSet, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link pEmail} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                P_EMAIL: fieldBuilder.buildEdmTypeField('p_email', 'Edm.String', false),
                /**
                 * Static representation of the {@link personWorkAgreement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField('PersonWorkAgreement', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link personWorkAgreementExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('PersonWorkAgreementExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link startDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_DATE: fieldBuilder.buildEdmTypeField('StartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('EndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link costCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER: fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenterDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER_DESCRIPTION: fieldBuilder.buildEdmTypeField('CostCenterDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCodeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', true),
                /**
                 * Static representation of the {@link email} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link userName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_NAME: fieldBuilder.buildEdmTypeField('UserName', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdon} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATEDON: fieldBuilder.buildEdmTypeField('createdon', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Zi_Employee_DetsSet_1.Zi_Employee_DetsSet)
            };
        }
        return this._schema;
    }
}
exports.Zi_Employee_DetsSetApi = Zi_Employee_DetsSetApi;
//# sourceMappingURL=Zi_Employee_DetsSetApi.js.map