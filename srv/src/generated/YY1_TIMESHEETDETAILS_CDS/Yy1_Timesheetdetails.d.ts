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
export declare class Yy1_Timesheetdetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_TimesheetdetailsType<T>
{
  /**
   * Technical entity name for Yy1_Timesheetdetails.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Timesheetdetails entity.
   */
  static _keys: string[];
  /**
   * Counter for Records in Time Recording.
   * Maximum length: 12.
   */
  timeSheetRecord: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   * @nullable
   */
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * WBS Element.
   * Maximum length: 8.
   * @nullable
   */
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  activityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item ID.
   * Maximum length: 10.
   * @nullable
   */
  workItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   * @nullable
   */
  recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measure for Display.
   * Maximum length: 3.
   * @nullable
   */
  hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sending purchase order.
   * Maximum length: 10.
   * @nullable
   */
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sending purchase order item.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CATS Amount.
   * @nullable
   */
  recordedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Sheet: Number (Unit of Measure).
   * @nullable
   */
  recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measurement.
   * Maximum length: 3.
   * @nullable
   */
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Order.
   * Maximum length: 12.
   * @nullable
   */
  internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document Type.
   * Maximum length: 4.
   * @nullable
   */
  serviceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document ID.
   * Maximum length: 10.
   * @nullable
   */
  serviceDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Document Item ID.
   * Maximum length: 6.
   * @nullable
   */
  serviceDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Type.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Level.
   * Maximum length: 8.
   * @nullable
   */
  timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task component.
   * Maximum length: 8.
   * @nullable
   */
  timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Text.
   * Maximum length: 40.
   * @nullable
   */
  timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * Maximum length: 2.
   * @nullable
   */
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for rejection.
   * Maximum length: 4.
   * @nullable
   */
  rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Counter for Record to be Changed.
   * Maximum length: 12.
   * @nullable
   */
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  timeSheetCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time of Entry.
   * @nullable
   */
  timeSheetEntryTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * User Creating Record.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Person Who Changed Object.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of person who approved data.
   * Maximum length: 12.
   * @nullable
   */
  timeSheetApprovedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Approval.
   * @nullable
   */
  timeSheetApprovedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Last Change.
   * @nullable
   */
  timeSheetLastChangedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time of Last Change.
   * @nullable
   */
  timeSheetLastChangedTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Accounting Indicator.
   * Maximum length: 2.
   * @nullable
   */
  accountingIndicatorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work item ID.
   * Maximum length: 12.
   * @nullable
   */
  workflowTaskInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax area work center.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * Maximum length: 10.
   * @nullable
   */
  timeSheetAccountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timesheet Rejection Reason Text.
   * Maximum length: 50.
   * @nullable
   */
  timeSheetRejectionReasonText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timesheet Status Text.
   * Maximum length: 60.
   * @nullable
   */
  timeSheetStatusText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 25.
   * @nullable
   */
  timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Agreement External ID.
   * Maximum length: 20.
   * @nullable
   */
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project definition.
   * Maximum length: 24.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * Maximum length: 40.
   * @nullable
   */
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  createdByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  changedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Description.
   * Maximum length: 80.
   * @nullable
   */
  approvedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  receiverCostCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Cost Center.
   * Maximum length: 40.
   * @nullable
   */
  senderCostCenterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Breakdown Structure Element Name.
   * Maximum length: 40.
   * @nullable
   */
  wbsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Definition.
   * Maximum length: 24.
   * @nullable
   */
  project1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * Maximum length: 40.
   * @nullable
   */
  projectDescription1?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: Yy1_TimesheetdetailsApi<T>);
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
