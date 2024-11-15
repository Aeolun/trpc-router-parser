import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodNullableDef } from "@src/input-mappers/zod/parsers/parseZodNullableDef";
import type { NumberNode } from "@src/parseNodeTypes";
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
