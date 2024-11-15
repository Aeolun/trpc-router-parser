import { nodePropertiesFromRef } from "@src/utils";
import type { ZodStringDef } from "zod";
import type { ParseFunction, StringNode } from "../../../parseNodeTypes.js";

export const parseZodStringDef: ParseFunction<ZodStringDef, StringNode> = (
	def,
	refs,
) => {
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return {
		type: "string",
		...nodePropertiesFromRef(refs),
	};
};
