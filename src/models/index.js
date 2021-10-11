// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { personnelList } = initSchema(schema);

export {
  personnelList
};