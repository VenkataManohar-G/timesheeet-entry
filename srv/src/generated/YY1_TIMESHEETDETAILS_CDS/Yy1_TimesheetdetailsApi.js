"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_TimesheetdetailsApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Timesheetdetails_1 = require("./Yy1_Timesheetdetails");
const Yy1_TimesheetdetailsRequestBuilder_1 = require("./Yy1_TimesheetdetailsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_TimesheetdetailsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Timesheetdetails_1.Yy1_Timesheetdetails;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_TimesheetdetailsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_TimesheetdetailsRequestBuilder_1.Yy1_TimesheetdetailsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Timesheetdetails_1.Yy1_Timesheetdetails, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeSheetRecord} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_RECORD: fieldBuilder.buildEdmTypeField('TimeSheetRecord', 'Edm.String', false),
                /**
                 * Static representation of the {@link personWorkAgreement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField('PersonWorkAgreement', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_DATE: fieldBuilder.buildEdmTypeField('TimeSheetDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link wbsElementInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link activityType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField('ActivityType', 'Edm.String', true),
                /**
                 * Static representation of the {@link workItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ITEM: fieldBuilder.buildEdmTypeField('WorkItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link recordedHours} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECORDED_HOURS: fieldBuilder.buildEdmTypeField('RecordedHours', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link hoursUnitOfMeasure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOURS_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField('HoursUnitOfMeasure', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER: fieldBuilder.buildEdmTypeField('PurchaseOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('PurchaseOrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link recordedAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECORDED_AMOUNT: fieldBuilder.buildEdmTypeField('RecordedAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link recordedQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECORDED_QUANTITY: fieldBuilder.buildEdmTypeField('RecordedQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link unitOfMeasure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField('UnitOfMeasure', 'Edm.String', true),
                /**
                 * Static representation of the {@link receiverCostCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECEIVER_COST_CENTER: fieldBuilder.buildEdmTypeField('ReceiverCostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link senderCostCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SENDER_COST_CENTER: fieldBuilder.buildEdmTypeField('SenderCostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link internalOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNAL_ORDER: fieldBuilder.buildEdmTypeField('InternalOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocumentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField('ServiceDocumentType', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT: fieldBuilder.buildEdmTypeField('ServiceDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('ServiceDocumentItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link controllingArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTROLLING_AREA: fieldBuilder.buildEdmTypeField('ControllingArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetTaskType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_TYPE: fieldBuilder.buildEdmTypeField('TimeSheetTaskType', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetTaskLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_LEVEL: fieldBuilder.buildEdmTypeField('TimeSheetTaskLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetTaskComponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_COMPONENT: fieldBuilder.buildEdmTypeField('TimeSheetTaskComponent', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetNote} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_NOTE: fieldBuilder.buildEdmTypeField('TimeSheetNote', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_STATUS: fieldBuilder.buildEdmTypeField('TimeSheetStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link rejectionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REJECTION_REASON: fieldBuilder.buildEdmTypeField('RejectionReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetPredecessorRecord} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_PREDECESSOR_RECORD: fieldBuilder.buildEdmTypeField('TimeSheetPredecessorRecord', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetCreationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_CREATION_DATE: fieldBuilder.buildEdmTypeField('TimeSheetCreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link timeSheetEntryTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_ENTRY_TIME: fieldBuilder.buildEdmTypeField('TimeSheetEntryTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetApprovedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_APPROVED_BY_USER: fieldBuilder.buildEdmTypeField('TimeSheetApprovedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetApprovedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_APPROVED_DATE: fieldBuilder.buildEdmTypeField('TimeSheetApprovedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link timeSheetLastChangedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_LAST_CHANGED_DATE: fieldBuilder.buildEdmTypeField('TimeSheetLastChangedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link timeSheetLastChangedTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_LAST_CHANGED_TIME: fieldBuilder.buildEdmTypeField('TimeSheetLastChangedTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link accountingIndicatorCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_INDICATOR_CODE: fieldBuilder.buildEdmTypeField('AccountingIndicatorCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link workflowTaskInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORKFLOW_TASK_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WorkflowTaskInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetWrkLocCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_WRK_LOC_CODE: fieldBuilder.buildEdmTypeField('TimeSheetWrkLocCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetAccountingDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField('TimeSheetAccountingDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetRejectionReasonText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_REJECTION_REASON_TEXT: fieldBuilder.buildEdmTypeField('TimeSheetRejectionReasonText', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetStatusText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_STATUS_TEXT: fieldBuilder.buildEdmTypeField('TimeSheetStatusText', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeSheetTaskTypeText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_TYPE_TEXT: fieldBuilder.buildEdmTypeField('TimeSheetTaskTypeText', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personWorkAgreementExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('PersonWorkAgreementExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link project} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField('ProjectDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdByName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_NAME: fieldBuilder.buildEdmTypeField('CreatedByName', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedByName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_BY_NAME: fieldBuilder.buildEdmTypeField('ChangedByName', 'Edm.String', true),
                /**
                 * Static representation of the {@link approvedByName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPROVED_BY_NAME: fieldBuilder.buildEdmTypeField('ApprovedByName', 'Edm.String', true),
                /**
                 * Static representation of the {@link receiverCostCenterDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECEIVER_COST_CENTER_DESCRIPTION: fieldBuilder.buildEdmTypeField('ReceiverCostCenterDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link senderCostCenterDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SENDER_COST_CENTER_DESCRIPTION: fieldBuilder.buildEdmTypeField('SenderCostCenterDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField('WBSDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link project1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_1: fieldBuilder.buildEdmTypeField('Project_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectDescription1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_DESCRIPTION_1: fieldBuilder.buildEdmTypeField('ProjectDescription_1', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Timesheetdetails_1.Yy1_Timesheetdetails)
            };
        }
        return this._schema;
    }
}
exports.Yy1_TimesheetdetailsApi = Yy1_TimesheetdetailsApi;
//# sourceMappingURL=Yy1_TimesheetdetailsApi.js.map