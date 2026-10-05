import type {MetadataRoute} from 'next';
import {siteUrl,indexable} from '@/lib/seo';
export default function robots():MetadataRoute.Robots{return indexable?{rules:{userAgent:'*',allow:'/'},sitemap:siteUrl+'/sitemap.xml'}:{rules:{userAgent:'*',disallow:'/'}}}
