import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  lang: string;
  filename?: string;
  title?: string;
  free?: boolean;
}

export const CodeBlock = ({
  code,
  lang,
  filename,
  title,
  free,
}: CodeBlockProps) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const onCopyText = () => {
    try {
      // Try clipboard API first
      navigator.clipboard.writeText(code).then(() => {
        setCopyStatus(true);
        setTimeout(() => {
          setCopyStatus(false);
        }, 2000);
      });
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopyStatus(true);
      setTimeout(() => {
        setCopyStatus(false);
      }, 2000);
    }
  };
  const handleExpand = () => {
    setIsExpanded(true);
  };

  const displayedCode = isExpanded
    ? code
    : code.split("\n").slice(0, 10).join("\n");
  const shouldShowExpandButton = !isExpanded && code.split("\n").length > 10;

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div
          className={`my-4 code-block relative ${
            isExpanded || code.split("\n").length <= 10
              ? "expanded"
              : "collapsed"
          }`}
        >
          <div className="flex items-center justify-between codeblock-header relative z-[999]">
            {filename && (
              <small
                style={{
                  padding: "3px 6px",
                  fontFamily: "Fira Mono",
                  fontSize: "13px",
                  background: "#ffffff10",
                  borderRadius: "5px",
                }}
              >
                {filename}
              </small>
            )}
            <button onClick={onCopyText} className="copy-button">
              <div>
                {copyStatus ? (
                  <div className="flex items-center justify-center gap-1 copy-to-clipboard-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 copy-to-clipboard-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 18V2h13v16zm2-2h9V4H9zm-6 6V6h2v14h11v2zm6-6V4z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          </div>

          {shouldShowExpandButton && (
            <button
              className="absolute top-[15rem] left-[50%] translate-x-[-50%] primary-button"
              onClick={handleExpand}
            >
              Expand
            </button>
          )}
          <SyntaxHighlighter language={lang} style={oneDark}>
            {displayedCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};
