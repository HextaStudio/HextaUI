import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export const CodeBlock = ({ code, lang, filename }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 2000);
  };
  return (
    <div className="my-4">
      <div className="flex items-center justify-between codeblock-header">
        {filename && (
          <small
            style={{
              padding: "3px 6px",
              fontFamily: "monospace",
              fontSize: "13px",
              background: "#ffffff10",
              borderRadius: "5px",
            }}
          >
            {filename}
          </small>
        )}
        <CopyToClipboard
          text={code}
          onCopy={onCopyText}
          className="flex items-center justify-center"
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
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
        </CopyToClipboard>
      </div>
      <pre>
        <code lang={lang}>{code}</code>
      </pre>
    </div>
  );
};
