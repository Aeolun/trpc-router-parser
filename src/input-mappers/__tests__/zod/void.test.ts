import { describe, expect, it } from "vitest";
import { z } from "zod";
import type { LiteralNode } from "../../../parseNodeTypes.js";
import { defaultReferences } from "../../defaultReferences.js";
import { parseZodVoidDef } from "../../zod/parsers/parseZodVoidDef.js";
import { zodSelectorFunction } from "../../zod/selector.js";

describe("Parse ZodVoid", () => {
	it("should parse a void def as a literal node with undefined value", () => {
		const expected: LiteralNode = {
			type: "literal",
			path: [],
			value: undefined,
		};
		const zodSchema = z.void();
		const parsed = parseZodVoidDef(zodSchema._def, defaultReferences());
		expect(parsed).toStrictEqual(expected);
	});

	it("should be mapped correctly via the selector and parsed as a literal node", () => {
		const expected: LiteralNode = {
			type: "literal",
			path: [],
			value: undefined,
		};
		const zodSchema = z.void();
		const parsed = zodSelectorFunction(zodSchema._def, defaultReferences());
		expect(parsed).toStrictEqual(expected);
	});
});
