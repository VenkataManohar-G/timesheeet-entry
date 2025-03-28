"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zi_Employee_DetsApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Zi_Employee_Dets_1 = require("./Zi_Employee_Dets");
const Zi_Employee_DetsRequestBuilder_1 = require("./Zi_Employee_DetsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Zi_Employee_DetsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Zi_Employee_Dets_1.Zi_Employee_Dets;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Zi_Employee_DetsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            SET: new odata_v2_1.Link('Set', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new Zi_Employee_DetsRequestBuilder_1.Zi_Employee_DetsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Zi_Employee_Dets_1.Zi_Employee_Dets, this.deSerializers);
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
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Zi_Employee_Dets_1.Zi_Employee_Dets)
            };
        }
        return this._schema;
    }
}
exports.Zi_Employee_DetsApi = Zi_Employee_DetsApi;
//# sourceMappingURL=Zi_Employee_DetsApi.js.map