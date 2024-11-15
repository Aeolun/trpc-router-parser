import { zodSelectorFunction } from "@src/input-mappers/zod/selector";
import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes";
import type { AnyZodObject, ZodBrandedDef } from "zod";

export function parseZodBrandedDef(
	def: ZodBrandedDef<AnyZodObject>,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return zodSelectorFunction(def.type._def, refs);
}
