import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cfzjzbbbpholqeirmkrm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'wdvsvsxrxsdcmotpbloz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cdn/**',
      },
    ],
  },
};

export default nextConfig;