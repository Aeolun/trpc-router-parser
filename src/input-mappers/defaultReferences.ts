import type { ParseReferences } from "@src/parseNodeTypes.js";

export function defaultReferences(): ParseReferences {
	return {
		path: [],
		options: {},
		addDataFunctions: {
			addDescriptionIfExists: () => {},
		},
	};
}
