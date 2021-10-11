import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type personnelListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class personnelList {
  readonly id: string;
  readonly resource: string;
  readonly callOrder?: string;
  readonly lcat?: string;
  readonly rate?: string;
  readonly campin?: string;
  readonly approved?: string;
  readonly transfer?: string;
  readonly exitDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<personnelList, personnelListMetaData>);
  static copyOf(source: personnelList, mutator: (draft: MutableModel<personnelList, personnelListMetaData>) => MutableModel<personnelList, personnelListMetaData> | void): personnelList;
}