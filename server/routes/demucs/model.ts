import { defineHandler } from "nitro";
import { demucsModelResponse } from "../../../src/lib/demucs-model.server";

export default defineHandler(() => demucsModelResponse());
