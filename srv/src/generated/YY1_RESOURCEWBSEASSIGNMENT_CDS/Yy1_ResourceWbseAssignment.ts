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
import type { Yy1_ResourceWbseAssignmentApi } from './Yy1_ResourceWbseAssignmentApi';

/**
 * This class represents the entity "YY1_ResourceWBSEAssignment" of service "YY1_RESOURCEWBSEASSIGNMENT_CDS".
 */
export class Yy1_ResourceWbseAssignment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_ResourceWbseAssignmentType<T>
{
  /**
   * Technical entity name for Yy1_ResourceWbseAssignment.
   */
  static override _entityName = 'YY1_ResourceWBSEAssignment';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/YY1_RESOURCEWBSEASSIGNMENT_CDS';
  /**
   * All key fields of the Yy1_ResourceWbseAssignment entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Line GUID.
   * @nullable
   */
  declare planLineItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Demand Key.
   * @nullable
   */
  declare resourceRequestUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Period.
   * Maximum length: 3.
   * @nullable
   */
  declare fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  declare fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engagement Project ID.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Item.
   * Maximum length: 50.
   * @nullable
   */
  declare workPackage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Type ID.
   * Maximum length: 4.
   * @nullable
   */
  declare engagementProjectResourceType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Resource ID.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProjectResource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object ID.
   * Maximum length: 8.
   * @nullable
   */
  declare employmentInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item ID.
   * Maximum length: 10.
   * @nullable
   */
  declare workItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Control Category.
   * Maximum length: 8.
   * @nullable
   */
  declare billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Organization.
   * Maximum length: 5.
   * @nullable
   */
  declare deliveryOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Quantity.
   * @nullable
   */
  declare plndEffortQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  declare personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  declare personExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Item Description.
   * Maximum length: 60.
   * @nullable
   */
  declare workPackageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  declare workPackageStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  declare workPackageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Object ID.
   * Maximum length: 50.
   * @nullable
   */
  declare wbsElementObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Name.
   * Maximum length: 80.
   * @nullable
   */
  declare wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item Name.
   * Maximum length: 40.
   * @nullable
   */
  declare workItemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Element for Work Item is Inactive.
   * Maximum length: 1.
   * @nullable
   */
  declare workItemIsInactive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  declare person1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS Element.
   * Maximum length: 8.
   * @nullable
   */
  declare wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Description.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProjResourceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Type Description.
   * Maximum length: 30.
   * @nullable
   */
  declare engagementProjResourceTypeText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Project Name.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProjectName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Yy1_ResourceWbseAssignmentApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_ResourceWbseAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  planLineItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  resourceRequestUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  engagementProject?: DeserializedType<T, 'Edm.String'> | null;
  workPackage?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectResourceType?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectResource?: DeserializedType<T, 'Edm.String'> | null;
  employmentInternalId?: DeserializedType<T, 'Edm.String'> | null;
  workItem?: DeserializedType<T, 'Edm.String'> | null;
  billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  deliveryOrganization?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  plndEffortQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  personExternalId?: DeserializedType<T, 'Edm.String'> | null;
  workPackageName?: DeserializedType<T, 'Edm.String'> | null;
  workPackageStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  workPackageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  wbsElementObject?: DeserializedType<T, 'Edm.String'> | null;
  wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  workItemName?: DeserializedType<T, 'Edm.String'> | null;
  workItemIsInactive?: DeserializedType<T, 'Edm.String'> | null;
  person1?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjResourceText?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjResourceTypeText?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectName?: DeserializedType<T, 'Edm.String'> | null;
}
