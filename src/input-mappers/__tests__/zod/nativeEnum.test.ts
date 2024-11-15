import { defaultReferences } from "@src/input-mappers/defaultReferences";
import { parseZodNativeEnumDef } from "@src/input-mappers/zod/parsers/parseZodNativeEnumDef";
import type { EnumNode } from "@src/parseNodeTypes";
import { describe, expect, it } from "vitest";
import { z } from "zod";

describe("Parse ZodNativeEnum", () => {
	it("should parse a zod native enum", () => {
		const expected: EnumNode = {
			type: "enum",
			enumValues: ["one", "two", "three"],
			path: [],
		};

		enum ExampleEnum {
			ONE = "one",
			TWO = "two",
			THREE = "three",
		}

		const parsed = parseZodNativeEnumDef(
			z.nativeEnum(ExampleEnum)._def,
			defaultReferences(),
		);
		expect(expected).toStrictEqual(parsed);
	});
});
