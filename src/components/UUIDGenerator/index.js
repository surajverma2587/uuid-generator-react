import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const UUIDGenerator = () => {
  const [uuid, setUUID] = useState();
  const [copied, setCopied] = useState(false);

  const generateUUID = () => {
    setUUID(uuidv4());
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
    setCopied(true);
  };

  return (
    <section className="uuid-container">
      <div className="uuid-item">
        <button onClick={generateUUID} className="btn">
          Generate UUID
        </button>
      </div>
      <div className="uuid-item uuid-text-block">
        <h3 className="uuid-text">{uuid || "Generated UUID goes here..."}</h3>
      </div>
      {uuid && (
        <div className="uuid-item">
          <button
            onClick={copyToClipboard}
            className={copied ? "btn btn-copied" : "btn btn-clipboard"}
          >
            {copied ? "Copied to clipboard" : "Copy to clipboard"}
          </button>
        </div>
      )}
    </section>
  );
};
