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
import { Zi_Employee_Dets } from './Zi_Employee_Dets';
/**
 * Request builder class for operations supported on the {@link Zi_Employee_Dets} entity.
 */
export declare class Zi_Employee_DetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Zi_Employee_Dets<T>, T> {
  /**
   * Returns a request builder for querying all `Zi_Employee_Dets` entities.
   * @returns A request builder for creating requests to retrieve all `Zi_Employee_Dets` entities.
   */
  getAll(): GetAllRequestBuilder<Zi_Employee_Dets<T>, T>;
  /**
   * Returns a request builder for retrieving one `Zi_Employee_Dets` entity based on its keys.
   * @param pEmail Key property. See {@link Zi_Employee_Dets.pEmail}.
   * @returns A request builder for creating requests to retrieve one `Zi_Employee_Dets` entity based on its keys.
   */
  getByKey(
    pEmail: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Zi_Employee_Dets<T>, T>;
}
