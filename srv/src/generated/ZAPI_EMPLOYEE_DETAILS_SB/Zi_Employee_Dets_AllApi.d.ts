/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Zi_Employee_Dets_All } from './Zi_Employee_Dets_All';
import { Zi_Employee_Dets_AllRequestBuilder } from './Zi_Employee_Dets_AllRequestBuilder';
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
export declare class Zi_Employee_Dets_AllApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Zi_Employee_Dets_AllApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Zi_Employee_Dets_All;
  requestBuilder(): Zi_Employee_Dets_AllRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Zi_Employee_Dets_All<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Zi_Employee_Dets_All<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Zi_Employee_Dets_All, DeSerializersT>;
  private _schema?;
  get schema(): {
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT_EXTERNAL_ID: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_DESCRIPTION: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_NAME: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATEDON: OrderableEdmTypeField<
      Zi_Employee_Dets_All<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Zi_Employee_Dets_All<DeSerializers>>;
  };
}
