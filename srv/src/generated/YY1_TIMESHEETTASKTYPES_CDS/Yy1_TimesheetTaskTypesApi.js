"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_TimesheetTaskTypesApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_TimesheetTaskTypes_1 = require("./Yy1_TimesheetTaskTypes");
const Yy1_TimesheetTaskTypesRequestBuilder_1 = require("./Yy1_TimesheetTaskTypesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_TimesheetTaskTypesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_TimesheetTaskTypes_1.Yy1_TimesheetTaskTypes;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_TimesheetTaskTypesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_TimesheetTaskTypesRequestBuilder_1.Yy1_TimesheetTaskTypesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_TimesheetTaskTypes_1.Yy1_TimesheetTaskTypes, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeSheetTaskType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_TYPE: fieldBuilder.buildEdmTypeField('TimeSheetTaskType', 'Edm.String', false),
                /**
                 * Static representation of the {@link timeSheetTaskTypeText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_SHEET_TASK_TYPE_TEXT: fieldBuilder.buildEdmTypeField('TimeSheetTaskTypeText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_TimesheetTaskTypes_1.Yy1_TimesheetTaskTypes)
            };
        }
        return this._schema;
    }
}
exports.Yy1_TimesheetTaskTypesApi = Yy1_TimesheetTaskTypesApi;
//# sourceMappingURL=Yy1_TimesheetTaskTypesApi.js.map