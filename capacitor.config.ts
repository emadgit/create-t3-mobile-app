import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.myt3mobileapp",
  appName: "myt3mobileapp",
  webDir: "out",
  server: {
    androidScheme: "https",
    // For communicate with the server Next.js application with tRPC must be deployed, for example if you are using
    // Vercel, url should be set to the domain YOURAPP.vercel.app
    url: "",
  },
};

export default config;
