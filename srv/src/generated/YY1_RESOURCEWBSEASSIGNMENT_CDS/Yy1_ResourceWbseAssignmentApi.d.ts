/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_ResourceWbseAssignment } from './Yy1_ResourceWbseAssignment';
import { Yy1_ResourceWbseAssignmentRequestBuilder } from './Yy1_ResourceWbseAssignmentRequestBuilder';
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
export declare class Yy1_ResourceWbseAssignmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Yy1_ResourceWbseAssignment<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): Yy1_ResourceWbseAssignmentApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_ResourceWbseAssignment;
  requestBuilder(): Yy1_ResourceWbseAssignmentRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_ResourceWbseAssignment<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_ResourceWbseAssignment<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof Yy1_ResourceWbseAssignment,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_LINE_ITEM_UUID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    RESOURCE_REQUEST_UUID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    FISCAL_PERIOD: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PACKAGE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_RESOURCE_TYPE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_RESOURCE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_CONTROL_CATEGORY: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ORGANIZATION: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLND_EFFORT_QTY: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_EXTERNAL_ID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PACKAGE_NAME: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PACKAGE_START_DATE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WORK_PACKAGE_END_DATE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WBS_ELEMENT_OBJECT: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_DESCRIPTION: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM_NAME: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM_IS_INACTIVE: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_1: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJ_RESOURCE_TEXT: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJ_RESOURCE_TYPE_TEXT: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_NAME: OrderableEdmTypeField<
      Yy1_ResourceWbseAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_ResourceWbseAssignment<DeSerializers>>;
  };
}
