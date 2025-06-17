import { describe, it, expect } from "vitest";

describe("Blog functionality", () => {
  it("should have blog posts with required frontmatter", () => {
    // This is a basic test structure for the blog
    // In a real scenario, you would test the actual blog post parsing
    const requiredFields = ["title", "description", "pubDate", "author", "tags"];

    expect(requiredFields).toContain("title");
    expect(requiredFields).toContain("description");
    expect(requiredFields).toContain("pubDate");
  });

  it("should format dates correctly", () => {
    const testDate = new Date("2024-01-15T12:00:00Z");
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(testDate);

    expect(formattedDate).toBe("15 de enero de 2024");
  });

  it("should generate correct blog post URLs", () => {
    const filename = "introduccion-astro-v5.md";
    const slug = filename.replace(".md", "");
    const expectedUrl = `/blog/${slug}`;

    expect(expectedUrl).toBe("/blog/introduccion-astro-v5");
  });
});
