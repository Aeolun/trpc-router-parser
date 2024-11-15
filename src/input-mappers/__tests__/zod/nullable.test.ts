import { defaultReferences } from "@src/input-mappers/defaultReferences.js";
import { parseZodNullableDef } from "@src/input-mappers/zod/parsers/parseZodNullableDef.js";
import type { NumberNode } from "@src/parseNodeTypes.js";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodNullable", () => {
	it("should parse a nullable as it's underlying type", () => {
		const expected: NumberNode = {
			type: "number",
			path: [],
		};
		const schema = z.number().nullable();
		expect(parseZodNullableDef(schema._def, defaultReferences())).toStrictEqual(
			expected,
		);
	});
});
