import 'dotenv/config';
import { serve } from '@hono/node-server';
import app from './src/app.js';

const port = process.env.PORT || 3030;

serve({
  fetch: app.fetch,
  port,
});

console.log(`🚀 Server started at http://localhost:${port}`);