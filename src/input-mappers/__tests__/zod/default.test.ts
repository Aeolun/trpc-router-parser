import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodDefaultDef } from "@src/input-mappers/zod/parsers/parseZodDefaultDef";
import type { ParsedInputNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodDefault", () => {
	it("should parse zod number with default as number", () => {
		const expected: ParsedInputNode = {
			type: "number",
			path: [],
		};
		const zodSchema = z.number().default(5);
		const parsed = parseZodDefaultDef(zodSchema._def, defaultReferences());
		expect(parsed).toStrictEqual(expected);
	});
});
