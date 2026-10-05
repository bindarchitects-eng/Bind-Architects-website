import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['studio'];
export const metadata=meta(title,description,'/studio');
export default function Page(){return <EditorialPage slug="studio"/>}
