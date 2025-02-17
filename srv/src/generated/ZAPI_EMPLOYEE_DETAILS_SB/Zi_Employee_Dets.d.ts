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
import type { Zi_Employee_DetsApi } from './Zi_Employee_DetsApi';
import {
  Zi_Employee_DetsSet,
  Zi_Employee_DetsSetType
} from './Zi_Employee_DetsSet';
/**
 * This class represents the entity "ZI_EMPLOYEE_DETS" of service "cds_zemployee_details_sd".
 */
export declare class Zi_Employee_Dets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Zi_Employee_DetsType<T>
{
  /**
   * Technical entity name for Zi_Employee_Dets.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Zi_Employee_Dets entity.
   */
  static _keys: string[];
  /**
   * Email Address.
   * Maximum length: 241.
   */
  pEmail: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link Zi_Employee_DetsSet} entity.
   */
  set: Zi_Employee_DetsSet<T>[];
  constructor(_entityApi: Zi_Employee_DetsApi<T>);
}
export interface Zi_Employee_DetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  pEmail: DeserializedType<T, 'Edm.String'>;
  set: Zi_Employee_DetsSetType<T>[];
}
