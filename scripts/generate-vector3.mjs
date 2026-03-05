import sharp from 'sharp';
import { resolve } from 'node:path';

const input = resolve(process.cwd(), 'vector1.png');
const output = resolve(process.cwd(), 'vector3.png');

try {
  await sharp(input).flop().toFile(output);
  console.log('vector3.png created:', output);
} catch (err) {
  console.error('Failed to generate vector3.png:', err);
  process.exit(1);
}

