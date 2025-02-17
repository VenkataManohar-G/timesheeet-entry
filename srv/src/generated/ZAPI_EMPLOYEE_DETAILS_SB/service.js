"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zapiEmployeeDetailsSb = zapiEmployeeDetailsSb;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Zi_Employee_DetsSetApi_1 = require("./Zi_Employee_DetsSetApi");
const Zi_Employee_DetsApi_1 = require("./Zi_Employee_DetsApi");
const Zi_Employee_Dets_AllApi_1 = require("./Zi_Employee_Dets_AllApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function zapiEmployeeDetailsSb(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ZapiEmployeeDetailsSb((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class ZapiEmployeeDetailsSb {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get zi_Employee_DetsSetApi() {
        const api = this.initApi('zi_Employee_DetsSetApi', Zi_Employee_DetsSetApi_1.Zi_Employee_DetsSetApi);
        const linkedApis = [
            this.initApi('zi_Employee_DetsApi', Zi_Employee_DetsApi_1.Zi_Employee_DetsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get zi_Employee_DetsApi() {
        const api = this.initApi('zi_Employee_DetsApi', Zi_Employee_DetsApi_1.Zi_Employee_DetsApi);
        const linkedApis = [
            this.initApi('zi_Employee_DetsSetApi', Zi_Employee_DetsSetApi_1.Zi_Employee_DetsSetApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get zi_Employee_Dets_AllApi() {
        return this.initApi('zi_Employee_Dets_AllApi', Zi_Employee_Dets_AllApi_1.Zi_Employee_Dets_AllApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map