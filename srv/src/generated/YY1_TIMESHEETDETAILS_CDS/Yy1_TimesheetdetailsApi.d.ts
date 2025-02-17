/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Timesheetdetails } from './Yy1_Timesheetdetails';
import { Yy1_TimesheetdetailsRequestBuilder } from './Yy1_TimesheetdetailsRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class Yy1_TimesheetdetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Timesheetdetails<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_TimesheetdetailsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_Timesheetdetails;
  requestBuilder(): Yy1_TimesheetdetailsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Timesheetdetails<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_Timesheetdetails<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Yy1_Timesheetdetails, DeSerializersT>;
  private _schema?;
  get schema(): {
    TIME_SHEET_RECORD: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_DATE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WBS_ELEMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORDED_HOURS: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HOURS_UNIT_OF_MEASURE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORDED_AMOUNT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORDED_QUANTITY: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COST_CENTER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COST_CENTER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_ORDER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DOCUMENT_TYPE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DOCUMENT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DOCUMENT_ITEM: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROLLING_AREA: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_TYPE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_LEVEL: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_COMPONENT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_NOTE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_STATUS: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REJECTION_REASON: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_PREDECESSOR_RECORD: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_CREATION_DATE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TIME_SHEET_ENTRY_TIME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_APPROVED_BY_USER: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_APPROVED_DATE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TIME_SHEET_LAST_CHANGED_DATE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TIME_SHEET_LAST_CHANGED_TIME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    ACCOUNTING_INDICATOR_CODE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_TASK_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_WRK_LOC_CODE: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_ACCOUNTING_DOCUMENT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_REJECTION_REASON_TEXT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_STATUS_TEXT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_TYPE_TEXT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT_EXTERNAL_ID: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY_NAME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_BY_NAME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_BY_NAME: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COST_CENTER_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COST_CENTER_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_1: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DESCRIPTION_1: OrderableEdmTypeField<
      Yy1_Timesheetdetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Timesheetdetails<DeSerializers>>;
  };
}
