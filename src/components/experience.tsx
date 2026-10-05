'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import Script from 'next/script';
declare global {interface Window {dataLayer?:unknown[];gtag?:(...args:unknown[])=>void;}}
export function track(name:string){try{if(localStorage.getItem('bind-analytics')==='yes'){window.gtag?.('event',name,{page_path:window.location.pathname})}}catch{}}
export function Experience(){const path=usePathname();
 useEffect(()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced||!('IntersectionObserver' in window))return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('reveal-pending');obs.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('[data-reveal]').forEach(el=>{if(el.getBoundingClientRect().top>window.innerHeight){el.classList.add('reveal-pending');obs.observe(el)}});return()=>{obs.disconnect();document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.remove('reveal-pending'))}},[path]);
 return null;
}
export function AnalyticsChoice(){const id=process.env.NEXT_PUBLIC_GA_ID;const [consent,setConsent]=useState<string|null>(null);const [loaded,setLoaded]=useState(false);const path=usePathname();
 useEffect(()=>{try{setConsent(localStorage.getItem('bind-analytics')||'unset')}catch{setConsent('no')}},[]);
 useEffect(()=>{if(loaded&&consent==='yes')window.gtag?.('event','page_view',{page_path:path,page_title:document.title})},[path,loaded,consent]);
 if(!id||!/^G-[A-Z0-9]+$/.test(id))return null;
 function choose(value:string){try{localStorage.setItem('bind-analytics',value)}catch{}setConsent(value);if(value==='no')window.location.reload()}
 return <>{consent==='yes'?<Script id="bind-ga" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" onLoad={()=>{window.dataLayer=window.dataLayer||[];window.gtag=function(...args:unknown[]){window.dataLayer?.push(arguments)};window.gtag('js',new Date());window.gtag('config',id,{send_page_view:false});setLoaded(true)}}/>:null}{consent==='unset'?<aside className="consent-bar" aria-label="Optional analytics"><p>May we use optional analytics to understand which pages help visitors? Your project brief is never sent to analytics.</p><button onClick={()=>choose('no')}>No thanks</button><button onClick={()=>choose('yes')}>Allow analytics</button></aside>:<button className="analytics-settings" onClick={()=>setConsent('unset')}>Analytics preferences</button>}</>;
}
