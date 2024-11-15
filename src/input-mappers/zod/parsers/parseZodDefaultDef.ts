import { zodSelectorFunction } from "@src/input-mappers/zod/selector";
import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes";
import type { ZodDefaultDef } from "zod";

export function parseZodDefaultDef(
	def: ZodDefaultDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return zodSelectorFunction(def.innerType._def, refs);
}
