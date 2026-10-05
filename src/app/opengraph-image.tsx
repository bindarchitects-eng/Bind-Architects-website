import {ImageResponse} from 'next/og';
export const alt='Studio Bind Architects — Spaces for living better.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#f5f3ee',padding:70,color:'#263a32'}}><div style={{fontSize:20,letterSpacing:5,display:'flex'}}>STUDIO BIND ARCHITECTS</div><div style={{fontSize:92,letterSpacing:-4,lineHeight:1.05,display:'flex',flexDirection:'column',marginTop:65}}><span>Spaces for</span><span style={{color:'#99482e'}}>living better.</span></div><div style={{display:'flex',fontSize:22,marginTop:'auto',justifyContent:'space-between',borderTop:'1px solid #c8ccbf',paddingTop:25}}><span>Architecture · Interiors · Chennai</span><span>bindarchitects.com</span></div></div>,size)}
