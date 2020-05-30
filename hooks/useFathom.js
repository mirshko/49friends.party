import { useEffect } from "react";

export default function useFathom() {
  useEffect(() => {
    let tracker = window.document.createElement("script");
    let firstScript = window.document.getElementsByTagName("script")[0];
    tracker.defer = true;
    tracker.setAttribute("site", "DYVZJBMF");
    tracker.setAttribute("spa", "auto");
    tracker.src = "https://cdn.usefathom.com/script.js";
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }, []);
}
