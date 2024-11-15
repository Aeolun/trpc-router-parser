import { nodePropertiesFromRef } from "@src/utils.js";
import type { ZodObjectDef } from "zod";
import type {
	ObjectNode,
	ParseFunction,
	ParsedInputNode,
	UnsupportedNode,
} from "../../../parseNodeTypes.js";
import { zodSelectorFunction } from "../selector.js";

export const parseZodObjectDef: ParseFunction<
	ZodObjectDef,
	ObjectNode | UnsupportedNode
> = (def, refs) => {
	const shape = def.shape();
	const children: { [propertyName: string]: ParsedInputNode } = {};
	for (const propertyName of Object.keys(shape)) {
		const node = zodSelectorFunction(shape[propertyName]?._def, {
			...refs,
			path: refs.path.concat([propertyName]),
		});
		children[propertyName] = node;
	}
	refs.addDataFunctions.addDescriptionIfExists(def, refs);
	return {
		type: "object",
		children,
		...nodePropertiesFromRef(refs),
	};
};
