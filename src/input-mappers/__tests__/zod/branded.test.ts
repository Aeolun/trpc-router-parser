import { describe, expect, it } from "vitest";
import { type ZodBrandedDef, type ZodType, z } from "zod";
import type { ParsedInputNode } from "../../../parseNodeTypes.js";
import { defaultReferences } from "../../defaultReferences.js";
import { parseZodBrandedDef } from "../../zod/parsers/parseZodBrandedDef.js";

describe("Parsed ZodBranded", () => {
	it("should parse branded nodes as their base zod type", () => {
		const testCases: {
			node: ParsedInputNode;
			zodType: ZodType;
		}[] = [
			{
				node: {
					type: "number",
					path: [],
				},
				zodType: z.number().brand("number"),
			},
			{
				node: {
					type: "string",
					path: [],
				},
				zodType: z.string().brand("string"),
			},
		];
		for (const testCase of testCases) {
			const parsed = parseZodBrandedDef(
				// biome-ignore lint/suspicious/noExplicitAny: No proper way to type
				testCase.zodType._def as unknown as ZodBrandedDef<any>,
				defaultReferences(),
			);
			expect(parsed).toStrictEqual(testCase.node);
		}
	});
});
