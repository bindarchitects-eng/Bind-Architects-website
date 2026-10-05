import {PageIntro,ContactCTA} from '@/components/ui';
import {ProjectExplorer} from '@/components/explorers';
import {meta} from '@/lib/seo';
export const metadata=meta('Architecture & Interior Design Projects','Explore Studio Bind’s residential, healthcare, commercial and interior portfolio, with proposals, ongoing projects and completed work clearly identified.','/works');
export default function Works(){return <><PageIntro label="The portfolio" title={<>Places shaped<br/>by <em>people.</em></>} description="Homes, spaces for care, places to work and places to gather. A selection of our architectural and interior work."/><section className="wrap portfolio-section"><ProjectExplorer/></section><ContactCTA/></>}
