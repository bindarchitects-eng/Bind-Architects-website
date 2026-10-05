import type { Metadata } from 'next';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bindarchitects.com';
export const indexable = process.env.SITE_INDEXABLE === 'true' && process.env.VERCEL_ENV !== 'preview';
export function meta(title:string, description:string, path:string):Metadata {
 return {title:{absolute:`${title} | Studio Bind Architects`},description,alternates:{canonical:path},openGraph:{title:`${title} | Studio Bind Architects`,description,url:siteUrl+path,siteName:'Studio Bind Architects',type:'website',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image',title,description}};
}
