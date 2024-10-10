import { codeToHtml } from "shiki";

type CodeBlockProps = React.ComponentProps<"div"> & {
  code: string;
  lang?: "tsx";
};

export async function CodeBlock({
  code = "",
  lang = "tsx",
  className,
  ...props
}: CodeBlockProps) {
  const demoCode = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-dark",
    },
    transformers: [
      {
        name: "transparent background",
        pre(node) {
          if (typeof node.properties.style !== "string") {
            return node;
          }
          node.properties.style = node.properties.style
            .split(";")
            .filter((style) => !style.includes("-bg:"))
            .concat([
              "--shiki-dark-bg:transparent",
              "--shiki-light-bg:transparent",
              "background-color:transparent",
            ])
            .join(";");
          return node;
        },
      },
    ],
  });

  return <div dangerouslySetInnerHTML={{ __html: demoCode ?? "" }} />;
}
