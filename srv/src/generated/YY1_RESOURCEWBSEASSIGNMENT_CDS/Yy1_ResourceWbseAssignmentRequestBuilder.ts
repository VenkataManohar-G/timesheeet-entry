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
import { Yy1_ResourceWbseAssignment } from './Yy1_ResourceWbseAssignment';

/**
 * Request builder class for operations supported on the {@link Yy1_ResourceWbseAssignment} entity.
 */
export class Yy1_ResourceWbseAssignmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_ResourceWbseAssignment<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_ResourceWbseAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_ResourceWbseAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_ResourceWbseAssignment<T>, T> {
    return new GetAllRequestBuilder<Yy1_ResourceWbseAssignment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `Yy1_ResourceWbseAssignment` entity based on its keys.
   * @param id Key property. See {@link Yy1_ResourceWbseAssignment.id}.
   * @returns A request builder for creating requests to retrieve one `Yy1_ResourceWbseAssignment` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_ResourceWbseAssignment<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_ResourceWbseAssignment<T>, T>(
      this.entityApi,
      { ID: id }
    );
  }
}
