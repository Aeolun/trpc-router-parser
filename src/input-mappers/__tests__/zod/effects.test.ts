import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodEffectsDef } from "@src/input-mappers/zod/parsers/parseZodEffectsDef";
import type { StringNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodEffects", () => {
	it("should parse a zod effects string as an string", () => {
		const expected: StringNode = {
			type: "string",
			path: [],
		};
		const schema = z.preprocess((val) => String(val), z.string());
		expect(parseZodEffectsDef(schema._def, defaultReferences())).toStrictEqual(
			expected,
		);
	});
});
