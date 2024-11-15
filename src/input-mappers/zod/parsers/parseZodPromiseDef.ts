import { zodSelectorFunction } from "@src/input-mappers/zod/selector.js";
import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes.js";
import type { ZodPromiseDef } from "zod";

export function parseZodPromiseDef(
	def: ZodPromiseDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return zodSelectorFunction(def.type._def, refs);
}
