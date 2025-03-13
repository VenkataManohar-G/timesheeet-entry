"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultYy1WbselementsbasicCdsPath = void 0;
exports.batch = batch;
exports.changeset = changeset;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const util_1 = require("@sap-cloud-sdk/util");
function batch(first, ...rest) {
    return new odata_v2_1.ODataBatchRequestBuilder(exports.defaultYy1WbselementsbasicCdsPath, (0, util_1.transformVariadicArgumentToArray)(first, rest));
}
function changeset(first, ...rest) {
    return new odata_v2_1.BatchChangeSet((0, util_1.transformVariadicArgumentToArray)(first, rest));
}
exports.defaultYy1WbselementsbasicCdsPath = '/sap/opu/odata/sap/YY1_WBSELEMENTSBASIC_CDS';
//# sourceMappingURL=BatchRequest.js.map