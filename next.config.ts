import type {NextConfig} from 'next';
const config:NextConfig={
 poweredByHeader:false,
 images:{formats:['image/avif','image/webp'],minimumCacheTTL:86400},
 async redirects(){return [{source:'/blank',destination:'/studio',permanent:true},{source:'/blank-2',destination:'/project/flora-diamonds',permanent:true},{source:'/projects',destination:'/works',permanent:true},{source:'/architects-in-tamil-nadu',destination:'/architects-in-tamilnadu',permanent:true}]},
 async headers(){return [{source:'/(.*)',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'DENY'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}]}]},
};
export default config;
