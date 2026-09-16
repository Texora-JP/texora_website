import { Fragment } from "react";

/**
 * Japanese has no spaces, so the browser will happily break a line in the
 * middle of a phrase. Splitting after 、。！？ and making each chunk an
 * inline-block keeps those units intact: they sit side by side when there is
 * room and wrap at the punctuation when there is not.
 */
export function JaText({ text }: { text: string }) {
  const chunks = text.split(/(?<=[、。！？])/).filter(Boolean);

  return (
    <>
      {chunks.map((chunk, index) => (
        <Fragment key={index}>
          <span className="inline-block">{chunk}</span>
          {/* Lets the browser break here without adding a space. */}
          <wbr />
        </Fragment>
      ))}
    </>
  );
}
