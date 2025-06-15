module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      register: {
        allowedFields: ["firstName", "country", "trialExpiry", "enterpriseAccount", "enterpriseAccountRole", "enterpriseAccountActive"],
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'support@icelandicwithmax.com',
        defaultReplyTo: 'support@icelandicwithmax.com',
      },
    },
  },
  'strapi-cache': {
    enabled: true,
    config: {
      debug: false, // Enable debug logs
      max: 1000, // Maximum number of items in the cache (only for memory cache)
      ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
      size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB) (only for memory cache)
      allowStale: false, // Allow stale cache items (only for memory cache)
      cacheableRoutes: ['/api/texts', '/api/text-words'], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
      provider: 'memory', // Cache provider ('memory' or 'redis')
      redisConfig: env('REDIS_URL', 'redis://localhost:6379'), // Redis config takes either a string or an object see https://ioredis.readthedocs.io/en/stable/README for references to what object is available, the object or string is passed directly to ioredis client (if using Redis)
      redisClusterNodes: [], // If provided any cluster node (this list is not empty), initialize ioredis redis cluster client. Each object must have keys 'host' and 'port'. See https://ioredis.readthedocs.io/en/stable/README for references
      redisClusterOptions: {}, // Options for ioredis redis cluster client. redisOptions key is taken from redisConfig parameter above if not set here. See https://ioredis.readthedocs.io/en/stable/README for references
      cacheHeaders: true, // Plugin also stores response headers in the cache (set to false if you don't want to cache headers)
      cacheAuthorizedRequests: false, // Cache requests with authorization headers (set to true if you want to cache authorized requests)
      cacheGetTimeoutInMs: 1000, // Timeout for getting cached data in milliseconds (default is 1 seconds)
    },
  },
});
