/**
 * deps.ts
 *
 * This module re-exports the required methods from dependant remote.
 */

export { EventEmitter } from "https://deno.land/std@0.175.0/node/events.ts";
export { createRequire } from "https://deno.land/std@0.175.0/node/module.ts";
export { DI } from "https://deno.land/x/dino@v2.0.1/mod.ts";
export * as dotenv from "npm:dotenv";
export * as path from "https://deno.land/std@0.219.0/path/mod.ts";
