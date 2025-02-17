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
import type { Zi_Employee_Dets_AllApi } from './Zi_Employee_Dets_AllApi';
/**
 * This class represents the entity "ZI_EMPLOYEE_DETS_ALL" of service "cds_zemployee_details_sd".
 */
export declare class Zi_Employee_Dets_All<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Zi_Employee_Dets_AllType<T>
{
  /**
   * Technical entity name for Zi_Employee_Dets_All.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Zi_Employee_Dets_All entity.
   */
  static _keys: string[];
  /**
   * Personnel Number.
   * Maximum length: 8.
   */
  personWorkAgreement: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  costCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User ID.
   * Maximum length: 12.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet user alias.
   * Maximum length: 40.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which the object was created.
   * @nullable
   */
  createdon?: DeserializedType<T, 'Edm.DateTime'> | null;
  constructor(_entityApi: Zi_Employee_Dets_AllApi<T>);
}
export interface Zi_Employee_Dets_AllType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personWorkAgreement: DeserializedType<T, 'Edm.String'>;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  costCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  createdon?: DeserializedType<T, 'Edm.DateTime'> | null;
}
