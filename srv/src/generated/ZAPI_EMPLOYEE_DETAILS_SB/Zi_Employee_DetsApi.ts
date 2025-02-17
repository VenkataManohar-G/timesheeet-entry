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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class Zi_Employee_DetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): Zi_Employee_DetsApi<DeSerializersT> {
    return new Zi_Employee_DetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link set} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SET: Link<
      Zi_Employee_Dets<DeSerializersT>,
      DeSerializersT,
      Zi_Employee_DetsSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [Zi_Employee_DetsSetApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SET: new Link('Set', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Zi_Employee_Dets;

  requestBuilder(): Zi_Employee_DetsRequestBuilder<DeSerializersT> {
    return new Zi_Employee_DetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Zi_Employee_Dets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Zi_Employee_Dets<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Zi_Employee_Dets<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Zi_Employee_Dets, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Zi_Employee_Dets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link pEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        P_EMAIL: fieldBuilder.buildEdmTypeField('p_email', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Zi_Employee_Dets)
      };
    }

    return this._schema;
  }
}
