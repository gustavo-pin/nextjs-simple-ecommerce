/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "files.stripe.com",
                protocol: "https" 
            }
        ]
    }
};

export default nextConfig;
