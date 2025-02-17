/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Zi_Employee_DetsSet } from './Zi_Employee_DetsSet';
import { Zi_Employee_DetsSetRequestBuilder } from './Zi_Employee_DetsSetRequestBuilder';
import { Zi_Employee_DetsApi } from './Zi_Employee_DetsApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class Zi_Employee_DetsSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Zi_Employee_DetsSet<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Zi_Employee_DetsSetApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [Zi_Employee_DetsApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Zi_Employee_DetsSet;
  requestBuilder(): Zi_Employee_DetsSetRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Zi_Employee_DetsSet<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Zi_Employee_DetsSet<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Zi_Employee_DetsSet, DeSerializersT>;
  private _schema?;
  get schema(): {
    P_EMAIL: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT_EXTERNAL_ID: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_DESCRIPTION: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_NAME: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATEDON: OrderableEdmTypeField<
      Zi_Employee_DetsSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARAMETERS: OneToOneLink<
      Zi_Employee_DetsSet<DeSerializersT>,
      DeSerializersT,
      Zi_Employee_DetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Zi_Employee_DetsSet<DeSerializers>>;
  };
}
