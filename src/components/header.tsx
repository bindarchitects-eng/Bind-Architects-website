'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {Arrow} from './ui';
const links=[['Work','/works'],['Studio','/studio'],['Expertise','/services'],['Process','/process'],['Fieldnotes','/insights'],['FAQs','/faq']];
export function Header(){const path=usePathname();const [open,setOpen]=useState(false);const trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[open]);
 return <header className="site-header"><a className="skip-link" href="#main">Skip to content</a><div className="header-inner"><Link href="/" className="brand" aria-label="Studio Bind Architects home"><Image src="/images/logo.png" alt="BIND" width={100} height={41} priority/><span>STUDIO BIND<br/>ARCHITECTS</span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={path===href?'page':undefined}>{label}</Link>)}</nav><Link className="header-cta" href="/contact">Discuss a project<Arrow diagonal/></Link><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)} ref={trigger}><span>{open?'Close':'Menu'}</span><span className={open?'menu-lines open':'menu-lines'}><i/><i/></span></button></div><nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Mobile navigation">{links.map(([label,href],i)=><Link key={href} href={href} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}<Arrow diagonal/></Link>)}<Link href="/contact" onClick={()=>setOpen(false)}>Discuss your project<Arrow diagonal/></Link></nav></header>
}
