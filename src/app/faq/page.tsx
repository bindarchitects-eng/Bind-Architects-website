import {PageIntro,ContactCTA,JsonLd} from '@/components/ui';
import {FAQExplorer} from '@/components/explorers';
import {faqs} from '@/lib/content';
import {meta} from '@/lib/seo';
export const metadata=meta('Chennai Architecture & Construction FAQs','Understand architects’ roles, consultancy fees, Chennai building approvals, FSI, setbacks and site support before starting your project.','/faq');
export default function FAQ(){return <><PageIntro label="Clarity before you begin" title={<>Good questions.<br/><em>Clearer decisions.</em></>} description="A practical starting point for clients planning architecture, interiors or construction in Chennai and Tamil Nadu."/><section className="wrap faq-section"><FAQExplorer/><p className="reference-note">General guidance, reviewed 5 October 2026. Development rules and charges can change. Confirm the current requirements for your particular site and proposal.</p></section><ContactCTA/><JsonLd data={{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))}}/></>}
