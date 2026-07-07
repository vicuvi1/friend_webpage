"use client";

import { useEffect, useRef, useState } from "react";
import { useEdit } from "./EditProvider";

/* Text care se poate edita cu dublu-click (după deblocarea cu codul secret).
 * `id` trebuie să fie unic și stabil (e cheia sub care se salvează editarea). */
export default function Editable({
  id,
  value,
  as = "span",
  className = "",
  multiline = false,
}: {
  id: string;
  value: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  multiline?: boolean;
}) {
  const { unlocked, get, set, requestUnlock } = useEdit();
  const text = get(id, value);
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  const onDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!unlocked) {
      requestUnlock();
      return;
    }
    setEditing(true);
  };

  const commit = () => {
    setEditing(false);
    const v = (ref.current?.innerText ?? text).trim();
    if (v && v !== text) set(id, v);
    else if (ref.current) ref.current.innerText = text;
  };

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      onDoubleClick={onDoubleClick}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={editing ? commit : undefined}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (!editing) return;
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          (ref.current as HTMLElement | null)?.blur();
        }
        if (e.key === "Escape" && ref.current) {
          ref.current.innerText = text;
          setEditing(false);
        }
      }}
      className={`${className} ${
        unlocked ? "cursor-text rounded outline-dashed outline-1 outline-transparent transition-[outline-color] hover:outline-[var(--gold)]/40" : ""
      } ${editing ? "outline-[var(--gold)]/80" : ""}`}
    >
      {text}
    </Tag>
  );
}
