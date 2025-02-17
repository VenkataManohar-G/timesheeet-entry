/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Zi_Employee_Dets_All } from './Zi_Employee_Dets_All';
import { Zi_Employee_Dets_AllRequestBuilder } from './Zi_Employee_Dets_AllRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class Zi_Employee_Dets_AllApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>
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
  ): Zi_Employee_Dets_AllApi<DeSerializersT> {
    return new Zi_Employee_Dets_AllApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Zi_Employee_Dets_All;

  requestBuilder(): Zi_Employee_Dets_AllRequestBuilder<DeSerializersT> {
    return new Zi_Employee_Dets_AllRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Zi_Employee_Dets_All<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Zi_Employee_Dets_All<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Zi_Employee_Dets_All<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Zi_Employee_Dets_All,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Zi_Employee_Dets_All,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personWorkAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personWorkAgreementExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreementExternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link costCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER: fieldBuilder.buildEdmTypeField(
          'CostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CostCenterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', true),
        /**
         * Static representation of the {@link personFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATEDON: fieldBuilder.buildEdmTypeField(
          'createdon',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Zi_Employee_Dets_All)
      };
    }

    return this._schema;
  }
}
