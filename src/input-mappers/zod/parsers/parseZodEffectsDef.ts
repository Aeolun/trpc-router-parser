import { zodSelectorFunction } from "@src/input-mappers/zod/selector.js";
import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes.js";
import type { ZodEffectsDef } from "zod";

export function parseZodEffectsDef(
	def: ZodEffectsDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return zodSelectorFunction(def.schema._def, refs);
}
