import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes.js";
import { nodePropertiesFromRef } from "@src/utils.js";
import type { ZodUndefinedDef } from "zod";

export function parseZodUndefinedDef(
	def: ZodUndefinedDef,
	refs: ParseReferences,
): ParsedInputNode {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return {
		type: "literal",
		value: undefined,
		...nodePropertiesFromRef(refs),
	};
}
