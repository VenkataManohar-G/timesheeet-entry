/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Zi_Employee_DetsSetApi } from './Zi_Employee_DetsSetApi';
import { Zi_Employee_DetsApi } from './Zi_Employee_DetsApi';
import { Zi_Employee_Dets_AllApi } from './Zi_Employee_Dets_AllApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function zapiEmployeeDetailsSb<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): ZapiEmployeeDetailsSb<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new ZapiEmployeeDetailsSb(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class ZapiEmployeeDetailsSb<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get zi_Employee_DetsSetApi(): Zi_Employee_DetsSetApi<DeSerializersT> {
    const api = this.initApi('zi_Employee_DetsSetApi', Zi_Employee_DetsSetApi);
    const linkedApis = [
      this.initApi('zi_Employee_DetsApi', Zi_Employee_DetsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get zi_Employee_DetsApi(): Zi_Employee_DetsApi<DeSerializersT> {
    const api = this.initApi('zi_Employee_DetsApi', Zi_Employee_DetsApi);
    const linkedApis = [
      this.initApi('zi_Employee_DetsSetApi', Zi_Employee_DetsSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get zi_Employee_Dets_AllApi(): Zi_Employee_Dets_AllApi<DeSerializersT> {
    return this.initApi('zi_Employee_Dets_AllApi', Zi_Employee_Dets_AllApi);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
