import { zodSelectorFunction } from "@src/input-mappers/zod/selector.js";
import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes.js";
import type { ZodNullableDef } from "zod";

export function parseZodNullableDef(
	def: ZodNullableDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return zodSelectorFunction(def.innerType._def, refs);
}
