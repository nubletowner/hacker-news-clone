import { schema } from 'normalizr';

export const storySchema = new schema.Entity(
  'stories',
  {},
  { idAttribute: 'objectID' }
);
