"use client";

import { useEffect, useRef } from "react";

const VAGARO_SCRIPT_SRC =
  "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqC3avDZScT3qmV35y79oz34mC2PeFJ4mC30m9dSycvCu7gevEhAJDXwOapcUbfY?v=UOe1zEnXh3J2p1uzcXEaU8SPPXUAqUPbrA6RzNTayhOW#";

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
      <div id="frameTitle" className="embedded-widget-title" />
      <div className="vagaro" style={{ width: "100%", maxWidth: "420px", padding: 0, border: 0, margin: "0 auto", textAlign: "center" }}>
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
