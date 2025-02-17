/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_TimesheetTaskTypes } from './Yy1_TimesheetTaskTypes';
import { Yy1_TimesheetTaskTypesRequestBuilder } from './Yy1_TimesheetTaskTypesRequestBuilder';
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
export declare class Yy1_TimesheetTaskTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_TimesheetTaskTypes<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_TimesheetTaskTypesApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_TimesheetTaskTypes;
  requestBuilder(): Yy1_TimesheetTaskTypesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_TimesheetTaskTypes<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_TimesheetTaskTypes<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof Yy1_TimesheetTaskTypes,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    TIME_SHEET_TASK_TYPE: OrderableEdmTypeField<
      Yy1_TimesheetTaskTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_SHEET_TASK_TYPE_TEXT: OrderableEdmTypeField<
      Yy1_TimesheetTaskTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_TimesheetTaskTypes<DeSerializers>>;
  };
}
