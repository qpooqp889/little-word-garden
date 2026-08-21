import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Sunlit Storybook analytics: keep the learning garden independent from optional analytics.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

if (analyticsEndpoint && analyticsWebsiteId && !analyticsEndpoint.includes("%") && !analyticsWebsiteId.includes("%")) {
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
  analyticsScript.dataset.websiteId = analyticsWebsiteId;
  document.head.appendChild(analyticsScript);
}

createRoot(document.getElementById("root")!).render(<App />);
