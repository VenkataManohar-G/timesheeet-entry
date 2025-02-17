"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zi_Employee_Dets_AllRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Zi_Employee_Dets_All} entity.
 */
class Zi_Employee_Dets_AllRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Zi_Employee_Dets_All` entities.
     * @returns A request builder for creating requests to retrieve all `Zi_Employee_Dets_All` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Zi_Employee_Dets_All` entity based on its keys.
     * @param personWorkAgreement Key property. See {@link Zi_Employee_Dets_All.personWorkAgreement}.
     * @returns A request builder for creating requests to retrieve one `Zi_Employee_Dets_All` entity based on its keys.
     */
    getByKey(personWorkAgreement) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { PersonWorkAgreement: personWorkAgreement });
    }
}
exports.Zi_Employee_Dets_AllRequestBuilder = Zi_Employee_Dets_AllRequestBuilder;
//# sourceMappingURL=Zi_Employee_Dets_AllRequestBuilder.js.map