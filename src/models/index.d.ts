import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PersonnelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Personnel {
  readonly id: string;
  readonly resource?: string;
  readonly callOrder?: number;
  readonly lcat?: number;
  readonly rate?: number;
  readonly campin?: string;
  readonly transfer?: string;
  readonly approved?: string;
  readonly exitDate?: string;
  readonly birthCity?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Personnel, PersonnelMetaData>);
  static copyOf(source: Personnel, mutator: (draft: MutableModel<Personnel, PersonnelMetaData>) => MutableModel<Personnel, PersonnelMetaData> | void): Personnel;
}