import {EditorialPage,editorialMeta} from '@/components/editorial-pages';
import {meta} from '@/lib/seo';
const [title,description]=editorialMeta['privacy'];
export const metadata=meta(title,description,'/privacy');
export default function Page(){return <EditorialPage slug="privacy"/>}
