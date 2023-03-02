import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// set the directory to the projects folder
const projectsDirectory = path.join(process.cwd(), "projects");

export function getAllProjectIds() {
    // read the directory
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                // remove the .md extension
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    // combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
