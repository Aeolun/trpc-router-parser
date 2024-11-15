import { describe, expect, it } from "vitest";
import { z } from "zod";
import type { BooleanNode } from "../../../parseNodeTypes.js";
import { defaultReferences } from "../../defaultReferences.js";
import { parseZodBooleanFieldDef } from "../../zod/parsers/parseZodBooleanFieldDef.js";

describe("Parse Zod Boolean", () => {
	it("should parse a zod boolean as a boolean node", () => {
		const expected: BooleanNode = {
			type: "boolean",
			path: [],
		};
		const schema = z.boolean();
		const parsed = parseZodBooleanFieldDef(schema._def, defaultReferences());
		expect(parsed).toStrictEqual(expected);
	});
});
