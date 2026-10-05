import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['process'];
export const metadata=meta(title,description,'/process');
export default function Page(){return <EditorialPage slug="process"/>}
