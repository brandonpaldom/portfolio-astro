import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("projects markdown files", () => {
  it("should have unique slugs", () => {
    const projectsDir = path.join(process.cwd(), "src/content/projects");
    const projectFiles = fs.readdirSync(projectsDir).filter(file => file.endsWith(".md"));
    
    const slugs = projectFiles.map(file => file.replace(".md", ""));
    const uniqueSlugs = new Set(slugs);

    expect(slugs.length).toBe(uniqueSlugs.size);

    // Log duplicate slugs if any
    if (slugs.length !== uniqueSlugs.size) {
      const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
      console.error("Duplicate slugs found:", duplicates);
    }
  });
});
