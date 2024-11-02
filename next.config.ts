import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },
    experimental: {
        ppr: "incremental",
    },
    devIndicators: {
        buildActivity: true,
        appIsrStatus: true,
        buildActivityPosition: "bottom-right",
    },
};

export default nextConfig;
