/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Wbselementsbasic } from './Yy1_Wbselementsbasic';
import { Yy1_WbselementsbasicRequestBuilder } from './Yy1_WbselementsbasicRequestBuilder';
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
export class Yy1_WbselementsbasicApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Wbselementsbasic<DeSerializersT>, DeSerializersT>
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
  ): Yy1_WbselementsbasicApi<DeSerializersT> {
    return new Yy1_WbselementsbasicApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Wbselementsbasic;

  requestBuilder(): Yy1_WbselementsbasicRequestBuilder<DeSerializersT> {
    return new Yy1_WbselementsbasicRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Wbselementsbasic<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Wbselementsbasic<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Wbselementsbasic<DeSerializersT>,
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
    typeof Yy1_Wbselementsbasic,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Wbselementsbasic,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link wbsElementInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementInternalID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wbsElementExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementExternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT: fieldBuilder.buildEdmTypeField(
          'WBSElement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElementShortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_SHORT_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementShortID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'WBSDescription',
          'Edm.String',
          true
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
         * Static representation of the {@link controllingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROLLING_AREA: fieldBuilder.buildEdmTypeField(
          'ControllingArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_AREA: fieldBuilder.buildEdmTypeField(
          'FunctionalArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibleCostCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_COST_CENTER: fieldBuilder.buildEdmTypeField(
          'ResponsibleCostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
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
         * Static representation of the {@link projectInternalId1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_INTERNAL_ID_1: fieldBuilder.buildEdmTypeField(
          'ProjectInternalID_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElementObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_OBJECT: fieldBuilder.buildEdmTypeField(
          'WBSElementObject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'ProjectInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'ProjectExternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProjectDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_START_DATE: fieldBuilder.buildEdmTypeField(
          'PlannedStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link plannedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_END_DATE: fieldBuilder.buildEdmTypeField(
          'PlannedEndDate',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Wbselementsbasic)
      };
    }

    return this._schema;
  }
}
