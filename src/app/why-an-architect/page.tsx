import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['why-an-architect'];
export const metadata=meta(title,description,'/why-an-architect');
export default function Page(){return <EditorialPage slug="why-an-architect"/>}
