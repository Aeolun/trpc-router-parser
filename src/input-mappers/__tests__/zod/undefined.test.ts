import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodUndefinedDef } from "@src/input-mappers/zod/parsers/parseZodUndefinedDef";
import type { LiteralNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodUndefined", () => {
	it("should parse zod undefined as a literal with value undefined", () => {
		const unexpected: LiteralNode = {
			type: "literal",
			value: undefined,
			path: [],
		};
		const schema = z.undefined();
		expect(
			parseZodUndefinedDef(schema._def, defaultReferences()),
		).toStrictEqual(unexpected);
	});
});
