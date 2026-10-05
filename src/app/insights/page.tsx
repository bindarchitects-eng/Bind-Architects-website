import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['insights'];
export const metadata=meta(title,description,'/insights');
export default function Page(){return <EditorialPage slug="insights"/>}
