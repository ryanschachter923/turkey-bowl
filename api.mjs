import { getStore } from "@netlify/blobs";
import Core from "../../core.mjs";

// Every /api/* request lands here. Data lives in the "turkey-bowl" Blobs store.
export default async (req) => Core.handle(req, getStore({ name: "turkey-bowl", consistency: "strong" }));

export const config = { path: "/api/*" };
