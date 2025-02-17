"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zi_Employee_DetsSetRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Zi_Employee_DetsSet} entity.
 */
class Zi_Employee_DetsSetRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Zi_Employee_DetsSet` entities.
     * @returns A request builder for creating requests to retrieve all `Zi_Employee_DetsSet` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Zi_Employee_DetsSet` entity based on its keys.
     * @param pEmail Key property. See {@link Zi_Employee_DetsSet.pEmail}.
     * @param personWorkAgreement Key property. See {@link Zi_Employee_DetsSet.personWorkAgreement}.
     * @returns A request builder for creating requests to retrieve one `Zi_Employee_DetsSet` entity based on its keys.
     */
    getByKey(pEmail, personWorkAgreement) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            p_email: pEmail,
            PersonWorkAgreement: personWorkAgreement
        });
    }
}
exports.Zi_Employee_DetsSetRequestBuilder = Zi_Employee_DetsSetRequestBuilder;
//# sourceMappingURL=Zi_Employee_DetsSetRequestBuilder.js.map