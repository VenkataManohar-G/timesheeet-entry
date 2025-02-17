/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { Yy1_TimesheetTaskTypesApi } from './Yy1_TimesheetTaskTypesApi';

/**
 * This class represents the entity "YY1_TimesheetTaskTypes" of service "YY1_TIMESHEETTASKTYPES_CDS".
 */
export class Yy1_TimesheetTaskTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_TimesheetTaskTypesType<T>
{
  /**
   * Technical entity name for Yy1_TimesheetTaskTypes.
   */
  static override _entityName = 'YY1_TimesheetTaskTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/YY1_TIMESHEETTASKTYPES_CDS';
  /**
   * All key fields of the Yy1_TimesheetTaskTypes entity.
   */
  static _keys = ['TimeSheetTaskType'];
  /**
   * Task Type.
   * Maximum length: 4.
   */
  declare timeSheetTaskType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 25.
   * @nullable
   */
  declare timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Yy1_TimesheetTaskTypesApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_TimesheetTaskTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeSheetTaskType: DeserializedType<T, 'Edm.String'>;
  timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
}
