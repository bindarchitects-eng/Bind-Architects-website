import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['professional-standards'];
export const metadata=meta(title,description,'/professional-standards');
export default function Page(){return <EditorialPage slug="professional-standards"/>}
