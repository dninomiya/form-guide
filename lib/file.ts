import fs from 'fs';
import path from 'path';

export const getFile = (filePath: string) => {
  return fs.readFileSync(path.join(process.cwd(), `/${filePath}`), 'utf-8');
};
