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
import { Yy1_Wbselementsbasic } from './Yy1_Wbselementsbasic';
/**
 * Request builder class for operations supported on the {@link Yy1_Wbselementsbasic} entity.
 */
export declare class Yy1_WbselementsbasicRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Wbselementsbasic<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Wbselementsbasic` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Wbselementsbasic` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Wbselementsbasic<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Wbselementsbasic` entity based on its keys.
   * @param wbsElementInternalId Key property. See {@link Yy1_Wbselementsbasic.wbsElementInternalId}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Wbselementsbasic` entity based on its keys.
   */
  getByKey(
    wbsElementInternalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Wbselementsbasic<T>, T>;
}
