/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Zi_Employee_Dets } from './Zi_Employee_Dets';
import { Zi_Employee_DetsRequestBuilder } from './Zi_Employee_DetsRequestBuilder';
import { Zi_Employee_DetsSetApi } from './Zi_Employee_DetsSetApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class Zi_Employee_DetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Zi_Employee_DetsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [Zi_Employee_DetsSetApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Zi_Employee_Dets;
  requestBuilder(): Zi_Employee_DetsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Zi_Employee_Dets<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Zi_Employee_Dets<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Zi_Employee_Dets, DeSerializersT>;
  private _schema?;
  get schema(): {
    P_EMAIL: OrderableEdmTypeField<
      Zi_Employee_Dets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link set} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SET: Link<
      Zi_Employee_Dets<DeSerializersT>,
      DeSerializersT,
      Zi_Employee_DetsSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Zi_Employee_Dets<DeSerializers>>;
  };
}
