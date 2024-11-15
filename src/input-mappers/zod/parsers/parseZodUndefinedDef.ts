import type { ParseReferences, ParsedInputNode } from "@src/parseNodeTypes";
import { nodePropertiesFromRef } from "@src/utils";
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
