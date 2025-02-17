/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Timesheetdetails } from './Yy1_Timesheetdetails';
/**
 * Request builder class for operations supported on the {@link Yy1_Timesheetdetails} entity.
 */
export declare class Yy1_TimesheetdetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Timesheetdetails<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Timesheetdetails` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Timesheetdetails` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Timesheetdetails<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Timesheetdetails` entity based on its keys.
   * @param timeSheetRecord Key property. See {@link Yy1_Timesheetdetails.timeSheetRecord}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Timesheetdetails` entity based on its keys.
   */
  getByKey(
    timeSheetRecord: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Timesheetdetails<T>, T>;
}
