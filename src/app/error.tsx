'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <section className="wrap error-page"><h1>Something interrupted<br/><em>this page.</em></h1><p>Please try again, or contact the studio at bindarchitects@gmail.com.</p><button className="button" onClick={reset}>Try again</button></section>}
