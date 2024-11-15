import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodNumberDef } from "@src/input-mappers/zod/parsers/parseZodNumberDef";
import type { NumberNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodNumber", () => {
	it("should parse a number node", () => {
		const expected: NumberNode = {
			type: "number",
			path: [],
		};
		const schema = z.number();
		expect(parseZodNumberDef(schema._def, defaultReferences())).toStrictEqual(
			expected,
		);
	});
});
