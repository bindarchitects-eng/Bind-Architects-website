import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['media'];
export const metadata=meta(title,description,'/media');
export default function Page(){return <EditorialPage slug="media"/>}
