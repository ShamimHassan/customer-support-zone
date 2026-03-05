import sharp from 'sharp';
import { resolve } from 'node:path';

const src = resolve(process.cwd(), 'vector3.png');
const dest = resolve(process.cwd(), 'vector1.png');

try {
  // Flip horizontally (mirror) to get the left-oriented wave
  await sharp(src).flop().toFile(dest);
  console.log('vector1.png replaced from flipped vector3.png');
} catch (e) {
  console.error('Error replacing vector1.png from vector3.png:', e);
  process.exit(1);
}

