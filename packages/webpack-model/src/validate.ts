import Ajv, { ErrorObject } from 'ajv';
import { Webpack } from '../webpack';
import { ValidationResult } from '../types';
import schema from './schema/stats.json';

export default function validateStats(stats: Webpack.Compilation): ValidationResult {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(stats);

  if (!valid) {
    return { result: false, errors: validate.errors as ErrorObject[] };
  }

  return { result: true };
}
