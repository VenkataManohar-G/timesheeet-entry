/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_ResourceWbseAssignment } from './Yy1_ResourceWbseAssignment';
import { Yy1_ResourceWbseAssignmentRequestBuilder } from './Yy1_ResourceWbseAssignmentRequestBuilder';
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
export class Yy1_ResourceWbseAssignmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Yy1_ResourceWbseAssignment<DeSerializersT>, DeSerializersT>
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
  ): Yy1_ResourceWbseAssignmentApi<DeSerializersT> {
    return new Yy1_ResourceWbseAssignmentApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_ResourceWbseAssignment;

  requestBuilder(): Yy1_ResourceWbseAssignmentRequestBuilder<DeSerializersT> {
    return new Yy1_ResourceWbseAssignmentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_ResourceWbseAssignment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Yy1_ResourceWbseAssignment<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_ResourceWbseAssignment<DeSerializersT>,
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
    typeof Yy1_ResourceWbseAssignment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_ResourceWbseAssignment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link planLineItemUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_LINE_ITEM_UUID: fieldBuilder.buildEdmTypeField(
          'PlanLineItemUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link resourceRequestUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_REQUEST_UUID: fieldBuilder.buildEdmTypeField(
          'ResourceRequestUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'EngagementProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE: fieldBuilder.buildEdmTypeField(
          'WorkPackage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectResourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_RESOURCE_TYPE: fieldBuilder.buildEdmTypeField(
          'EngagementProjectResourceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_RESOURCE: fieldBuilder.buildEdmTypeField(
          'EngagementProjectResource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM: fieldBuilder.buildEdmTypeField(
          'WorkItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingControlCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CONTROL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillingControlCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'DeliveryOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plndEffortQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLND_EFFORT_QTY: fieldBuilder.buildEdmTypeField(
          'PlndEffortQty',
          'Edm.Decimal',
          true
        ),
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
         * Static representation of the {@link personExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'PersonExternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPackageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_NAME: fieldBuilder.buildEdmTypeField(
          'WorkPackageName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPackageStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkPackageStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link workPackageEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_END_DATE: fieldBuilder.buildEdmTypeField(
          'WorkPackageEndDate',
          'Edm.DateTime',
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
         * Static representation of the {@link wbsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'WBSDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'WorkItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workItemIsInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_IS_INACTIVE: fieldBuilder.buildEdmTypeField(
          'WorkItemIsInactive',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link person1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_1: fieldBuilder.buildEdmTypeField(
          'Person_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElementInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjResourceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJ_RESOURCE_TEXT: fieldBuilder.buildEdmTypeField(
          'EngagementProjResourceText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjResourceTypeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJ_RESOURCE_TYPE_TEXT: fieldBuilder.buildEdmTypeField(
          'EngagementProjResourceTypeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'EngagementProjectName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_ResourceWbseAssignment)
      };
    }

    return this._schema;
  }
}
