import "./_syllabus.scss";

import { AiFillLeftCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Syllabus = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      PSPDFKit.unload(container);

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: "basic.pdf",
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <main className="syllabus d-flex flex-column">
      <nav className="d-flex sticky-top bg-primary justify-content-between align-items-center px-2 text-white ">
        <Link to="/course" className="text-decoration-none">
          <AiFillLeftCircle className="left-arrow text-white" />
        </Link>
        <h5 className="my-0 text-center ">Syllabus</h5>
        <p className="invisible">empty</p>
      </nav>
      <div ref={containerRef} className="pdf" />
    </main>
  );
};
