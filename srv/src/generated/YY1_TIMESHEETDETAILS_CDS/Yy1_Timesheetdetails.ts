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
import type { Yy1_TimesheetdetailsApi } from './Yy1_TimesheetdetailsApi';

/**
 * This class represents the entity "YY1_TIMESHEETDETAILS" of service "YY1_TIMESHEETDETAILS_CDS".
 */
export class Yy1_Timesheetdetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_TimesheetdetailsType<T>
{
  /**
   * Technical entity name for Yy1_Timesheetdetails.
   */
  static override _entityName = 'YY1_TIMESHEETDETAILS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/YY1_TIMESHEETDETAILS_CDS';
  /**
   * All key fields of the Yy1_Timesheetdetails entity.
   */
  static _keys = ['TimeSheetRecord'];
  /**
   * Counter for Records in Time Recording.
   * Maximum length: 12.
   */
  declare timeSheetRecord: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  declare personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   * @nullable
   */
  declare timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * WBS Element.
   * Maximum length: 8.
   * @nullable
   */
  declare wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  declare activityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item ID.
   * Maximum length: 10.
   * @nullable
   */
  declare workItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   * @nullable
   */
  declare recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measure for Display.
   * Maximum length: 3.
   * @nullable
   */
  declare hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sending purchase order.
   * Maximum length: 10.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sending purchase order item.
   * Maximum length: 5.
   * @nullable
   */
  declare purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CATS Amount.
   * @nullable
   */
  declare recordedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Sheet: Number (Unit of Measure).
   * @nullable
   */
  declare recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measurement.
   * Maximum length: 3.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Order.
   * Maximum length: 12.
   * @nullable
   */
  declare internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document Type.
   * Maximum length: 4.
   * @nullable
   */
  declare serviceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document ID.
   * Maximum length: 10.
   * @nullable
   */
  declare serviceDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document Item ID.
   * Maximum length: 6.
   * @nullable
   */
  declare serviceDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  declare controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Type.
   * Maximum length: 4.
   * @nullable
   */
  declare timeSheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Level.
   * Maximum length: 8.
   * @nullable
   */
  declare timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task component.
   * Maximum length: 8.
   * @nullable
   */
  declare timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Text.
   * Maximum length: 40.
   * @nullable
   */
  declare timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * Maximum length: 2.
   * @nullable
   */
  declare timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for rejection.
   * Maximum length: 4.
   * @nullable
   */
  declare rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Counter for Record to be Changed.
   * Maximum length: 12.
   * @nullable
   */
  declare timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare timeSheetCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time of Entry.
   * @nullable
   */
  declare timeSheetEntryTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * User Creating Record.
   * Maximum length: 12.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Person Who Changed Object.
   * Maximum length: 12.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of person who approved data.
   * Maximum length: 12.
   * @nullable
   */
  declare timeSheetApprovedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Approval.
   * @nullable
   */
  declare timeSheetApprovedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Last Change.
   * @nullable
   */
  declare timeSheetLastChangedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time of Last Change.
   * @nullable
   */
  declare timeSheetLastChangedTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Accounting Indicator.
   * Maximum length: 2.
   * @nullable
   */
  declare accountingIndicatorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work item ID.
   * Maximum length: 12.
   * @nullable
   */
  declare workflowTaskInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax area work center.
   * Maximum length: 4.
   * @nullable
   */
  declare timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * Maximum length: 10.
   * @nullable
   */
  declare timeSheetAccountingDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Timesheet Rejection Reason Text.
   * Maximum length: 50.
   * @nullable
   */
  declare timeSheetRejectionReasonText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Timesheet Status Text.
   * Maximum length: 60.
   * @nullable
   */
  declare timeSheetStatusText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 25.
   * @nullable
   */
  declare timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  declare personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Agreement External ID.
   * Maximum length: 20.
   * @nullable
   */
  declare personWorkAgreementExternalId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project definition.
   * Maximum length: 24.
   * @nullable
   */
  declare project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * Maximum length: 40.
   * @nullable
   */
  declare projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  declare createdByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  declare changedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  declare approvedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  declare receiverCostCenterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  declare senderCostCenterDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Breakdown Structure Element Name.
   * Maximum length: 40.
   * @nullable
   */
  declare wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Definition.
   * Maximum length: 24.
   * @nullable
   */
  declare project1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * Maximum length: 40.
   * @nullable
   */
  declare projectDescription1?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Yy1_TimesheetdetailsApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_TimesheetdetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeSheetRecord: DeserializedType<T, 'Edm.String'>;
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  activityType?: DeserializedType<T, 'Edm.String'> | null;
  workItem?: DeserializedType<T, 'Edm.String'> | null;
  recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  recordedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocument?: DeserializedType<T, 'Edm.String'> | null;
  serviceDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeSheetEntryTime?: DeserializedType<T, 'Edm.Time'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetApprovedByUser?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetApprovedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeSheetLastChangedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeSheetLastChangedTime?: DeserializedType<T, 'Edm.Time'> | null;
  accountingIndicatorCode?: DeserializedType<T, 'Edm.String'> | null;
  workflowTaskInternalId?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetAccountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetRejectionReasonText?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetStatusText?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  createdByName?: DeserializedType<T, 'Edm.String'> | null;
  changedByName?: DeserializedType<T, 'Edm.String'> | null;
  approvedByName?: DeserializedType<T, 'Edm.String'> | null;
  receiverCostCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  senderCostCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  project1?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription1?: DeserializedType<T, 'Edm.String'> | null;
}
