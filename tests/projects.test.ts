import { describe, it, expect } from "vitest";
import projects from "../src/data/projects.json";

describe("projects.json", () => {
  it("should have unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    const uniqueSlugs = new Set(slugs);

    expect(slugs.length).toBe(uniqueSlugs.size);

    // Log duplicate slugs if any
    if (slugs.length !== uniqueSlugs.size) {
      const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
      console.error("Duplicate slugs found:", duplicates);
    }
  });
});
