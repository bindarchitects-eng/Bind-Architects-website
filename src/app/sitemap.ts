import type {MetadataRoute} from 'next';
import {projects,services,locations,articles} from '@/lib/content';
import {siteUrl,indexable} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{
 if(!indexable)return [];
 const paths=['','/works','/studio','/services','/process','/why-an-architect','/faq','/contact','/insights','/professional-standards','/media','/privacy',...projects.map(p=>`/project/${encodeURIComponent(p.slug)}`),...services.map(s=>`/services/${s.slug}`),...locations.map(l=>`/${l.slug}`),...articles.map(a=>`/insights/${a.slug}`)];
 return paths.map(path=>({url:siteUrl+path,lastModified:'2026-10-05',changeFrequency:path.startsWith('/project')?'monthly':'yearly',priority:path===''?1:path==='/works'||path==='/contact'?.9:.7}));
}
