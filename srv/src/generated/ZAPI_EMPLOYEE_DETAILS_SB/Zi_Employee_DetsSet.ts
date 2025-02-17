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
import type { Zi_Employee_DetsSetApi } from './Zi_Employee_DetsSetApi';
import { Zi_Employee_Dets, Zi_Employee_DetsType } from './Zi_Employee_Dets';

/**
 * This class represents the entity "ZI_EMPLOYEE_DETSSet" of service "cds_zemployee_details_sd".
 */
export class Zi_Employee_DetsSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Zi_Employee_DetsSetType<T>
{
  /**
   * Technical entity name for Zi_Employee_DetsSet.
   */
  static override _entityName = 'ZI_EMPLOYEE_DETSSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/ZAPI_EMPLOYEE_DETAILS_SB';
  /**
   * All key fields of the Zi_Employee_DetsSet entity.
   */
  static _keys = ['p_email', 'PersonWorkAgreement'];
  /**
   * Email Address.
   * Maximum length: 241.
   */
  declare pEmail: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * Maximum length: 8.
   */
  declare personWorkAgreement: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  declare personWorkAgreementExternalId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Start Date.
   * @nullable
   */
  declare startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  declare endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  declare costCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  declare companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  declare businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User ID.
   * Maximum length: 12.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  declare personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet user alias.
   * Maximum length: 40.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which the object was created.
   * @nullable
   */
  declare createdon?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link Zi_Employee_Dets} entity.
   */
  declare parameters?: Zi_Employee_Dets<T> | null;

  constructor(_entityApi: Zi_Employee_DetsSetApi<T>) {
    super(_entityApi);
  }
}

export interface Zi_Employee_DetsSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  pEmail: DeserializedType<T, 'Edm.String'>;
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
  parameters?: Zi_Employee_DetsType<T> | null;
}
