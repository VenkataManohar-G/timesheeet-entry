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
import { Yy1_ResourceWbseAssignment } from './index';

/**
 * Batch builder for operations supported on the Yy1 Resourcewbseassignment Cds.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultYy1ResourcewbseassignmentCdsPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Yy1 Resourcewbseassignment Cds.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
    | Array<WriteYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>>,
  ...rest: Array<
    WriteYy1ResourcewbseassignmentCdsRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultYy1ResourcewbseassignmentCdsPath =
  '/sap/opu/odata/sap/YY1_RESOURCEWBSEASSIGNMENT_CDS';
export type ReadYy1ResourcewbseassignmentCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >;
export type WriteYy1ResourcewbseassignmentCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >;
