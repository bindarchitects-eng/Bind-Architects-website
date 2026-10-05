import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['services'];
export const metadata=meta(title,description,'/services');
export default function Page(){return <EditorialPage slug="services"/>}
