/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Zi_Employee_DetsSet,
  Zi_Employee_Dets,
  Zi_Employee_Dets_All
} from './index';

/**
 * Batch builder for operations supported on the Zapi Employee Details Sb.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultZapiEmployeeDetailsSbPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Zapi Employee Details Sb.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>
    | Array<WriteZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteZapiEmployeeDetailsSbRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultZapiEmployeeDetailsSbPath =
  '/sap/opu/odata/sap/ZAPI_EMPLOYEE_DETAILS_SB';
export type ReadZapiEmployeeDetailsSbRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Zi_Employee_Dets_All<DeSerializersT>,
      DeSerializersT
    >;
export type WriteZapiEmployeeDetailsSbRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>;
