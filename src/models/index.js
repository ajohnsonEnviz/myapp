// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Personnel } = initSchema(schema);

export {
  Personnel
};