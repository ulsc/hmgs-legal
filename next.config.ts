import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";
const staticBasePath = process.env.STATIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(staticExport
    ? {
        output: "export",
        ...(staticBasePath
          ? {
              basePath: staticBasePath,
              assetPrefix: staticBasePath,
            }
          : {}),
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
