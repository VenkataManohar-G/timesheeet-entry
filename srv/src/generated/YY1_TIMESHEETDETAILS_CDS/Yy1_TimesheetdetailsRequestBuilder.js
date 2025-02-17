"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_TimesheetdetailsRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_Timesheetdetails} entity.
 */
class Yy1_TimesheetdetailsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_Timesheetdetails` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Timesheetdetails` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_Timesheetdetails` entity based on its keys.
     * @param timeSheetRecord Key property. See {@link Yy1_Timesheetdetails.timeSheetRecord}.
     * @returns A request builder for creating requests to retrieve one `Yy1_Timesheetdetails` entity based on its keys.
     */
    getByKey(timeSheetRecord) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { TimeSheetRecord: timeSheetRecord });
    }
}
exports.Yy1_TimesheetdetailsRequestBuilder = Yy1_TimesheetdetailsRequestBuilder;
//# sourceMappingURL=Yy1_TimesheetdetailsRequestBuilder.js.map