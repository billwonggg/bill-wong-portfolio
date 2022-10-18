import { useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import styles from "./Collapse.module.scss";

export interface CollapseProps {
  headline: string;
  content: JSX.Element;
}

const Collapse = ({ headline, content }: CollapseProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className={styles.collapseBar} onClick={() => setOpen(!open)}>
        {headline}
        <div
          className={styles.collapseIcon}
          style={{
            transform: open ? "rotate(360deg)" : "rotate(0deg)",
            transition: "all 0.8s ease",
          }}
        >
          {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
      </div>
      <div
        ref={contentRef}
        className={styles.collapseWrapper}
        style={{ height: open ? contentRef?.current?.scrollHeight + "px" : "0px" }}
      >
        <div className={styles.collapseContent}>{content}</div>
      </div>
    </>
  );
};

export default Collapse;
