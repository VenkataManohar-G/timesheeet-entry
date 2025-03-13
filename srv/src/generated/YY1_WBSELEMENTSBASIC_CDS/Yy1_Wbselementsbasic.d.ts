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
import type { Yy1_WbselementsbasicApi } from './Yy1_WbselementsbasicApi';
/**
 * This class represents the entity "YY1_wbselementsbasic" of service "YY1_WBSELEMENTSBASIC_CDS".
 */
export declare class Yy1_Wbselementsbasic<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_WbselementsbasicType<T>
{
  /**
   * Technical entity name for Yy1_Wbselementsbasic.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Wbselementsbasic entity.
   */
  static _keys: string[];
  /**
   * WBS Element.
   * Maximum length: 8.
   */
  wbsElementInternalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Breakdown Structure Element (WBS Element) Edited.
   * Maximum length: 24.
   * @nullable
   */
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element (WBS Element).
   * Maximum length: 24.
   * @nullable
   */
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS element short identification.
   * Maximum length: 16.
   * @nullable
   */
  wbsElementShortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element Name.
   * Maximum length: 40.
   * @nullable
   */
  wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  responsibleCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost center to which costs are actually posted.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current number of the appropriate project.
   * Maximum length: 24.
   * @nullable
   */
  projectInternalId1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Number.
   * Maximum length: 22.
   * @nullable
   */
  wbsElementObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Type.
   * Maximum length: 2.
   * @nullable
   */
  projectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project (internal).
   * Maximum length: 8.
   * @nullable
   */
  projectInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Number (External) Edited.
   * Maximum length: 24.
   * @nullable
   */
  projectExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * Maximum length: 40.
   * @nullable
   */
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project planned start date.
   * @nullable
   */
  plannedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Project planned finish date.
   * @nullable
   */
  plannedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  constructor(_entityApi: Yy1_WbselementsbasicApi<T>);
}
export interface Yy1_WbselementsbasicType<
  T extends DeSerializers = DefaultDeSerializers
> {
  wbsElementInternalId: DeserializedType<T, 'Edm.String'>;
  wbsElementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementShortId?: DeserializedType<T, 'Edm.String'> | null;
  wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  responsibleCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  projectInternalId1?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementObject?: DeserializedType<T, 'Edm.String'> | null;
  projectType?: DeserializedType<T, 'Edm.String'> | null;
  projectInternalId?: DeserializedType<T, 'Edm.String'> | null;
  projectExternalId?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  plannedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  plannedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
