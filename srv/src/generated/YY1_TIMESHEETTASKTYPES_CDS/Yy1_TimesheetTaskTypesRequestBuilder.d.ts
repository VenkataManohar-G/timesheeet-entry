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
import { Yy1_TimesheetTaskTypes } from './Yy1_TimesheetTaskTypes';
/**
 * Request builder class for operations supported on the {@link Yy1_TimesheetTaskTypes} entity.
 */
export declare class Yy1_TimesheetTaskTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_TimesheetTaskTypes<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_TimesheetTaskTypes` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_TimesheetTaskTypes` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_TimesheetTaskTypes<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_TimesheetTaskTypes` entity based on its keys.
   * @param timeSheetTaskType Key property. See {@link Yy1_TimesheetTaskTypes.timeSheetTaskType}.
   * @returns A request builder for creating requests to retrieve one `Yy1_TimesheetTaskTypes` entity based on its keys.
   */
  getByKey(
    timeSheetTaskType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_TimesheetTaskTypes<T>, T>;
}
