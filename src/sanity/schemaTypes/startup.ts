import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startups",
    type: "document",
    fields: [
        {
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        },
        {
            name: "title",
            type: "string",
        },
        {
            name: "author",
            type: "reference",
            to :{ type: "author"}
        },
        {
            name: "view",
            type: "number",
        },
        {
            name: "catagory",
            type: "string",
            validation: (Rule) => Rule.min(1).max(20).required().error("Catagory is required"),
        },
        {
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required().error("Image is required"),
        },
        {
            name: "pitch",
            type: "markdown",
        },
    ],
});
