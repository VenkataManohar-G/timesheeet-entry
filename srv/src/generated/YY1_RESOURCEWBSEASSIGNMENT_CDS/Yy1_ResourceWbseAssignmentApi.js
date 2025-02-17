"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_ResourceWbseAssignmentApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_ResourceWbseAssignment_1 = require("./Yy1_ResourceWbseAssignment");
const Yy1_ResourceWbseAssignmentRequestBuilder_1 = require("./Yy1_ResourceWbseAssignmentRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_ResourceWbseAssignmentApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_ResourceWbseAssignment_1.Yy1_ResourceWbseAssignment;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_ResourceWbseAssignmentApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_ResourceWbseAssignmentRequestBuilder_1.Yy1_ResourceWbseAssignmentRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_ResourceWbseAssignment_1.Yy1_ResourceWbseAssignment, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
                /**
                 * Static representation of the {@link planLineItemUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLAN_LINE_ITEM_UUID: fieldBuilder.buildEdmTypeField('PlanLineItemUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link resourceRequestUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESOURCE_REQUEST_UUID: fieldBuilder.buildEdmTypeField('ResourceRequestUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link fiscalPeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_PERIOD: fieldBuilder.buildEdmTypeField('FiscalPeriod', 'Edm.String', true),
                /**
                 * Static representation of the {@link fiscalYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_YEAR: fieldBuilder.buildEdmTypeField('FiscalYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT: fieldBuilder.buildEdmTypeField('EngagementProject', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPackage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE: fieldBuilder.buildEdmTypeField('WorkPackage', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectResourceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_RESOURCE_TYPE: fieldBuilder.buildEdmTypeField('EngagementProjectResourceType', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectResource} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_RESOURCE: fieldBuilder.buildEdmTypeField('EngagementProjectResource', 'Edm.String', true),
                /**
                 * Static representation of the {@link employmentInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('EmploymentInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link workItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ITEM: fieldBuilder.buildEdmTypeField('WorkItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingControlCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_CONTROL_CATEGORY: fieldBuilder.buildEdmTypeField('BillingControlCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_ORGANIZATION: fieldBuilder.buildEdmTypeField('DeliveryOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField('UnitOfMeasure', 'Edm.String', true),
                /**
                 * Static representation of the {@link plndEffortQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_EFFORT_QTY: fieldBuilder.buildEdmTypeField('PlndEffortQty', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('PersonExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPackageName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_NAME: fieldBuilder.buildEdmTypeField('WorkPackageName', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPackageStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_START_DATE: fieldBuilder.buildEdmTypeField('WorkPackageStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link workPackageEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_END_DATE: fieldBuilder.buildEdmTypeField('WorkPackageEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link wbsElementObject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_OBJECT: fieldBuilder.buildEdmTypeField('WBSElementObject', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField('WBSDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link workItemName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ITEM_NAME: fieldBuilder.buildEdmTypeField('WorkItemName', 'Edm.String', true),
                /**
                 * Static representation of the {@link workItemIsInactive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ITEM_IS_INACTIVE: fieldBuilder.buildEdmTypeField('WorkItemIsInactive', 'Edm.String', true),
                /**
                 * Static representation of the {@link person1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_1: fieldBuilder.buildEdmTypeField('Person_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjResourceText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJ_RESOURCE_TEXT: fieldBuilder.buildEdmTypeField('EngagementProjResourceText', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjResourceTypeText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJ_RESOURCE_TYPE_TEXT: fieldBuilder.buildEdmTypeField('EngagementProjResourceTypeText', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_NAME: fieldBuilder.buildEdmTypeField('EngagementProjectName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_ResourceWbseAssignment_1.Yy1_ResourceWbseAssignment)
            };
        }
        return this._schema;
    }
}
exports.Yy1_ResourceWbseAssignmentApi = Yy1_ResourceWbseAssignmentApi;
//# sourceMappingURL=Yy1_ResourceWbseAssignmentApi.js.map