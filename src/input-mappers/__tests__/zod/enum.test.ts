import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodEnumDef } from "@src/input-mappers/zod/parsers/parseZodEnumDef";
import type { EnumNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodEnum", () => {
	it("should parse a zod enum", () => {
		const expected: EnumNode = {
			type: "enum",
			enumValues: ["one", "two", "three"],
			path: [],
		};
		const parsed = parseZodEnumDef(
			z.enum(["one", "two", "three"])._def,
			defaultReferences(),
		);
		expect(expected).toStrictEqual(parsed);
	});
});
