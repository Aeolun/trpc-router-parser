import type {
	ParseReferences,
	SharedInputNodeProperties,
} from "@src/parseNodeTypes.js";

export function nodePropertiesFromRef(
	references: ParseReferences,
): SharedInputNodeProperties {
	return {
		path: references.path,
		...(references.optional && { optional: true }),
	};
}
