"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_TimesheetTaskTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_TimesheetTaskTypes} entity.
 */
class Yy1_TimesheetTaskTypesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_TimesheetTaskTypes` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_TimesheetTaskTypes` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_TimesheetTaskTypes` entity based on its keys.
     * @param timeSheetTaskType Key property. See {@link Yy1_TimesheetTaskTypes.timeSheetTaskType}.
     * @returns A request builder for creating requests to retrieve one `Yy1_TimesheetTaskTypes` entity based on its keys.
     */
    getByKey(timeSheetTaskType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { TimeSheetTaskType: timeSheetTaskType });
    }
}
exports.Yy1_TimesheetTaskTypesRequestBuilder = Yy1_TimesheetTaskTypesRequestBuilder;
//# sourceMappingURL=Yy1_TimesheetTaskTypesRequestBuilder.js.map