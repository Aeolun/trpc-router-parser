import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes.js";
import { nodePropertiesFromRef } from "@src/utils.js";
import type { ZodNullDef } from "zod";

export function parseZodNullDef(
	def: ZodNullDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return {
		type: "literal",
		value: null,
		...nodePropertiesFromRef(refs),
	};
}
