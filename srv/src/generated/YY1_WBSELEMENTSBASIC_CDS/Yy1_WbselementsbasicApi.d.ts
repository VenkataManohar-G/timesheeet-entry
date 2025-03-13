/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Wbselementsbasic } from './Yy1_Wbselementsbasic';
import { Yy1_WbselementsbasicRequestBuilder } from './Yy1_WbselementsbasicRequestBuilder';
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
export declare class Yy1_WbselementsbasicApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Wbselementsbasic<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_WbselementsbasicApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_Wbselementsbasic;
  requestBuilder(): Yy1_WbselementsbasicRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Wbselementsbasic<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_Wbselementsbasic<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Yy1_Wbselementsbasic, DeSerializersT>;
  private _schema?;
  get schema(): {
    WBS_ELEMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WBS_ELEMENT_EXTERNAL_ID: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT_SHORT_ID: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROLLING_AREA: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_AREA: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_COST_CENTER: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_INTERNAL_ID_1: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT_OBJECT: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TYPE: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_EXTERNAL_ID: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_START_DATE: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PLANNED_END_DATE: OrderableEdmTypeField<
      Yy1_Wbselementsbasic<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Wbselementsbasic<DeSerializers>>;
  };
}
