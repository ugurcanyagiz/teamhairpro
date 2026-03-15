"use client";

import { useEffect, useRef } from "react";

const VAGARO_SCRIPT_SRC =
  "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqC3avDZScT3qnV3avV34mC2PeFJ4mC30m9dSycvCu7gevEhAJDXwPapcUbfY?v=EjR1slLOtteJ7Oytc5o3zknprqZpzM47VHNFH0pia3z0#";

export function VagaroWidget() {
  const scriptHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "vagaro-widget-loader";
    const previousScript = document.getElementById(scriptId);

    if (previousScript) {
      previousScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = VAGARO_SCRIPT_SRC;
    script.async = true;

    scriptHostRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full">
      <div
        id="frameTitle"
        className="embedded-widget-title"
        style={{
          fontSize: "23px",
          color: "#333",
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "24px",
          padding: "18px 10px 8px",
          textAlign: "center",
          WebkitBoxSizing: "border-box",
          MozBoxSizing: "border-box",
          boxSizing: "border-box",
        }}
      />
      <div className="vagaro" style={{ width: "250px", padding: 0, border: 0, margin: "0 auto", textAlign: "center" }}>
        <style>{`.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}`}</style>
        <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
        <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
        <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
        <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        <div ref={scriptHostRef} />
      </div>
    </div>
  );
}
