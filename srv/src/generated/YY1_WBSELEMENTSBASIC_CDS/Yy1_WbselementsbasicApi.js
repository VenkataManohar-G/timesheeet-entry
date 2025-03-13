"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_WbselementsbasicApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Wbselementsbasic_1 = require("./Yy1_Wbselementsbasic");
const Yy1_WbselementsbasicRequestBuilder_1 = require("./Yy1_WbselementsbasicRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_WbselementsbasicApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Wbselementsbasic_1.Yy1_Wbselementsbasic;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_WbselementsbasicApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_WbselementsbasicRequestBuilder_1.Yy1_WbselementsbasicRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Wbselementsbasic_1.Yy1_Wbselementsbasic, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link wbsElementInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', false),
                /**
                 * Static representation of the {@link wbsElementExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT: fieldBuilder.buildEdmTypeField('WBSElement', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementShortId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_SHORT_ID: fieldBuilder.buildEdmTypeField('WBSElementShortID', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField('WBSDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link controllingArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTROLLING_AREA: fieldBuilder.buildEdmTypeField('ControllingArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link functionalArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUNCTIONAL_AREA: fieldBuilder.buildEdmTypeField('FunctionalArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link profitCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFIT_CENTER: fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link responsibleCostCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESPONSIBLE_COST_CENTER: fieldBuilder.buildEdmTypeField('ResponsibleCostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link plant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER: fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectInternalId1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_INTERNAL_ID_1: fieldBuilder.buildEdmTypeField('ProjectInternalID_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementObject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_OBJECT: fieldBuilder.buildEdmTypeField('WBSElementObject', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_TYPE: fieldBuilder.buildEdmTypeField('ProjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('ProjectInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('ProjectExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField('ProjectDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link plannedStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_START_DATE: fieldBuilder.buildEdmTypeField('PlannedStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link plannedEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_END_DATE: fieldBuilder.buildEdmTypeField('PlannedEndDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Wbselementsbasic_1.Yy1_Wbselementsbasic)
            };
        }
        return this._schema;
    }
}
exports.Yy1_WbselementsbasicApi = Yy1_WbselementsbasicApi;
//# sourceMappingURL=Yy1_WbselementsbasicApi.js.map