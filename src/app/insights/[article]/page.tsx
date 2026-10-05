import {notFound} from 'next/navigation';
import Link from 'next/link';
import {articles} from '@/lib/content';
import {PageIntro,ContactCTA} from '@/components/ui';
import {meta} from '@/lib/seo';
export function generateStaticParams(){return articles.map(a=>({article:a.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{article:string}>}){const {article}=await params;const a=articles.find(a=>a.slug===article);return a?meta(a.title,a.description,`/insights/${a.slug}`):{title:'Article not found'}}
export default async function Article({params}:{params:Promise<{article:string}>}){const {article}=await params;const a=articles.find(a=>a.slug===article);if(!a)notFound();return <><PageIntro label={`${a.tag} / ${a.read}`} title={a.title} description={a.description}/><article className="wrap article-body"><p className="article-byline">Studio Bind Architects · Reviewed 5 October 2026</p>{a.sections.map(([title,text])=><section key={title}><h2>{title}</h2><p>{text}</p></section>)}<div className="reference-note">Further reading: <a href={a.source} target="_blank" rel="noreferrer">official professional / planning guidance ↗</a>. Check the applicable current provisions for your project.</div><Link href="/insights" className="text-link">← All fieldnotes</Link></article><ContactCTA/></>}
