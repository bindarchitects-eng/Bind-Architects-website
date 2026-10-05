import {notFound} from 'next/navigation';
import Image from 'next/image';
import {services,projects} from '@/lib/content';
import {PageIntro,Label,ContactCTA,ProjectCard,TextLink} from '@/components/ui';
import {meta} from '@/lib/seo';
export function generateStaticParams(){return services.map(s=>({service:s.slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{service:string}>}){const {service}=await params;const s=services.find(s=>s.slug===service);return s?meta(`${s.title} in Chennai`,s.text,`/services/${s.slug}`):{title:'Service not found'}}
export default async function Service({params}:{params:Promise<{service:string}>}){const {service}=await params;const s=services.find(s=>s.slug===service);if(!s)notFound();const related=projects.filter(p=>s.projects.includes(p.slug)).slice(0,2);return <><PageIntro label={s.title} title={<>{s.intro}</>} description={s.text}/><div className="service-wide-image"><Image src={`/images/${s.image}.webp`} alt={`${s.title} — Studio Bind portfolio`} fill priority sizes="100vw"/></div><section className="wrap service-detail"><div><Label>A coordinated scope</Label><h2>What we<br/><em>consider.</em></h2><p>{s.outcome}</p></div><div>{s.details.map((d,i)=><div className="scope-row" key={d}><span>0{i+1}</span><h3>{d}</h3></div>)}<p className="form-hint">Final inclusions, exclusions and deliverables are defined in the written appointment.</p><TextLink href="/process">Explore the process</TextLink></div></section>{related.length?<section className="wrap related-projects"><Label>Related work</Label><div className="project-grid">{related.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>:null}<ContactCTA/></>}
