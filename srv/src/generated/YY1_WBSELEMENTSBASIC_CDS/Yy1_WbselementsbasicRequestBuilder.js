"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_WbselementsbasicRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_Wbselementsbasic} entity.
 */
class Yy1_WbselementsbasicRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_Wbselementsbasic` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Wbselementsbasic` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_Wbselementsbasic` entity based on its keys.
     * @param wbsElementInternalId Key property. See {@link Yy1_Wbselementsbasic.wbsElementInternalId}.
     * @returns A request builder for creating requests to retrieve one `Yy1_Wbselementsbasic` entity based on its keys.
     */
    getByKey(wbsElementInternalId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { WBSElementInternalID: wbsElementInternalId });
    }
}
exports.Yy1_WbselementsbasicRequestBuilder = Yy1_WbselementsbasicRequestBuilder;
//# sourceMappingURL=Yy1_WbselementsbasicRequestBuilder.js.map