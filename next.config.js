/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const nextConfig = {
    reactStrictMode: true,
    env: {
      CUSTOM_VAR: process.env.CUSTOM_VAR, // if needed
    },
  };
  
  export default nextConfig;