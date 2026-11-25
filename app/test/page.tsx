"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number, number];
type Face = { points: Point[]; color: string; layer?: number };
const booking = "https://www.vagaro.com/teamhairpro";
const stations = [
  { id: "haircuts", label: "Haircuts", name: "The cutting chair", copy: "Precision cuts shaped around your hair, features and everyday routine.", focus: [-2.55, .85, 1.1], yaw: .47, accent: "#e9bd82" },
  { id: "color-services", label: "Color Services", name: "The color bar", copy: "Explore balayage, highlights and all-over color. A consultation can help set your shade, timing and price.", focus: [2.7, .9, -2.4], yaw: .73, accent: "#e1a0a0" },
  { id: "styling-finish", label: "Styling & Finish", name: "The styling mirror", copy: "Explore blowouts, iron finishes and updos.", focus: [2.5, .8, 2.42], yaw: .42, accent: "#d7ba95" },
  { id: "treatments", label: "Treatments", name: "The wash station", copy: "Explore conditioning and smoothing treatments.", focus: [-2.62, .82, -2.8], yaw: .64, accent: "#a5d1c5" },
] as const;

function shade(hex: string, amount: number) {
  const n = parseInt(hex.slice(1), 16);
  return "rgb(" + [n>>16,(n>>8)&255,n&255].map(channel=>Math.min(255,Math.round(channel*amount))).join(",") + ")";
}

const model: Face[] = [];
function box(x:number,y:number,z:number,w:number,h:number,d:number,color:string,tilt=0,layer=1) {
  const points: Point[] = [];
  const cos=Math.cos(tilt), sin=Math.sin(tilt);
  for (const dz of [-d/2,d/2]) {
    for (const [dx,dy] of [[-w/2,-h/2],[w/2,-h/2],[w/2,h/2],[-w/2,h/2]]) {
      points.push([x+dx*cos-dy*sin,y+dx*sin+dy*cos,z+dz]);
    }
  }
  const sides = [[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]];
  sides.forEach((side,i)=>model.push({points:side.map(index=>points[index]),color:shade(color,[.74,.92,.69,.84,1.15,.62][i]),layer}));
}

function arch(x:number,z:number,base:number,w:number,h:number,color:string,layer:number) {
  const points: Point[]=[[x-w/2,base,z],[x+w/2,base,z]];
  for(let i=0;i<=16;i++) {
    const angle=i/16*Math.PI;
    points.push([x+Math.cos(angle)*w/2,base+h-w/2+Math.sin(angle)*w/2,z]);
  }
  model.push({points,color,layer});
}

function chair(x:number,z:number,tint:string) {
  box(x,.10,z,.86,.18,.85,"#585750");
  box(x,.38,z,.19,.46,.19,"#a59a86");
  box(x,.64,z,.88,.23,.83,tint);
  box(x,.96,z+.39,.87,.73,.20,tint,-.04);
  box(x-.47,.80,z,.12,.16,.65,"#483d33");
  box(x+.47,.80,z,.12,.16,.65,"#483d33");
}

for(let i=0;i<23;i++) {
  box(-4.49+i*.409,-.07,0,.405,.15,9.8,["#bda28a","#c6aa8e","#ad8d73","#d0b398"][i%4],0,0);
}
box(0,1.87,-4.96,9.43,3.75,.13,"#c9bcab",0,0);
box(-4.70,1.87,-.06,.14,3.75,9.8,"#9d8977",0,0);
for(let i=0;i<14;i++) box(-4.598,.14+i*.25,-.1,.026,.021,9.58,"#8e7764",0,0);
for(const x of [-3.55,-1.23,1.20,3.57]) {
  arch(x,-4.865,.79,1.58,2.58,"#4e382a",.20);
  arch(x,-4.846,.88,1.38,2.39,"#829499",.24);
  arch(x-.36,-4.830,1.03,.23,1.97,"#a6b1ae",.28);
  box(x,.74,-4.54,1.77,.14,.54,"#dcc5a7");
  box(x,.54,-4.59,1.70,.29,.38,"#644c3a");
}
for(const x of [-.91,.91]) {
  box(x,1.47,-.21,.23,2.95,.24,"#72513b");
  box(x,2.89,-.21,.36,.24,.35,"#987358");
  box(x,.18,-.21,.32,.36,.31,"#876548");
}
chair(-2.70,1.22,"#745750");
chair(-3.38,-.72,"#665450");
chair(2.64,2.53,"#b18e79");
chair(2.92,.61,"#877163");
box(-2.73,.83,-3.05,1.48,.21,1.25,"#62514b");
box(-2.76,1.07,-3.55,.91,.39,.66,"#dfd6c5");
box(-2.76,1.279,-3.55,.64,.025,.40,"#6b8585");
box(-2.77,.52,-2.90,.98,.57,1.07,"#8a6a60");
box(2.70,.47,-2.48,2.12,.94,.85,"#654d3c");
box(2.70,.97,-2.48,2.20,.12,.93,"#c9b19a");
for(let i=0;i<11;i++){
  const x=1.75+i*.18;
  box(x,1.125,-2.69,.12,.20,.13,["#a36362","#d4a27d","#d7c0a4","#598487"][i%4]);
  box(x,1.245,-2.69,.081,.050,.085,"#d9c6ac");
}
box(2.60,.87,1.48,1.67,.12,.65,"#ceb79d");
box(2.04,.43,1.50,.15,.86,.49,"#664d3e");
box(3.18,.43,1.50,.15,.86,.49,"#664d3e");
box(2.73,.96,1.63,.34,.12,.13,"#55463e",-.21);
for(const [x,z] of [[-3.96,3.35],[3.96,-3.83]]) {
  box(x,.28,z,.58,.56,.57,"#866955");
  box(x,.92,z,.07,1.23,.07,"#4a5c37");
  for(let i=0;i<8;i++){
    const off=(i%2===0?-1:1)*(.15+i*.024);
    box(x+off,.72+i*.103,z+(i%3-1)*.15,.48,.096,.29,["#697e55","#415a3a","#7e8a59"][i%3],off*1.6);
  }
}

function renderStudio(ctx: CanvasRenderingContext2D, width:number,height:number,camera:{x:number;y:number;z:number;yaw:number;zoom:number}, active:number,time:number, reduced:boolean) {
  const sy=Math.sin(camera.yaw), cy=Math.cos(camera.yaw);
  const pitch=.55, cp=Math.cos(pitch),sp=Math.sin(pitch);
  const scale=Math.min(width*.96,height*1.17)*1.46*camera.zoom;
  const project=([x,y,z]:Point):Point=>{
    const dx=x-camera.x,dy=y-camera.y,dz=z-camera.z;
    const forward=dx*sy+dz*cy;
    const depth=18-cp*forward-sp*dy;
    return [width*.52+(dx*cy-dz*sy)*scale/depth,height*.54-(cp*dy-sp*forward)*scale/depth,depth];
  };
  ctx.clearRect(0,0,width,height);
  const backdrop=ctx.createRadialGradient(width*.49,height*.48,0,width*.49,height*.48,width*.69);
  backdrop.addColorStop(0,"#524334");
  backdrop.addColorStop(.49,"#292320");
  backdrop.addColorStop(1,"#171513");
  ctx.fillStyle=backdrop;
  ctx.fillRect(0,0,width,height);
  const faces=model.map(face=>{
    const points=face.points.map(project);
    return {...face,points,depth:points.reduce((sum,v)=>sum+v[2],0)/points.length};
  }).sort((a,b)=>(a.layer??0)-(b.layer??0)||b.depth-a.depth);
  for(const face of faces){
    ctx.beginPath();
    face.points.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y));
    ctx.closePath();
    ctx.fillStyle=face.color;
    ctx.fill();
  }
  const marks:Point[]=[[-2.60,1.63,1.15],[2.70,1.68,-2.42],[2.60,1.55,2.51],[-2.71,1.66,-3.02]];
  marks.forEach((point,i)=>{
    const [x,y]=project(point);
    if(active!==i) {
      ctx.beginPath();
      ctx.arc(x,y,3.4,0,Math.PI*2);
      ctx.fillStyle="#fff3dc";
      ctx.fill();
      return;
    }
    const radius=Math.min(width,height)*.17;
    const glow=ctx.createRadialGradient(x,y,0,x,y,radius);
    glow.addColorStop(0,stations[i].accent+"72");
    glow.addColorStop(1,stations[i].accent+"00");
    ctx.fillStyle=glow;
    ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
    const clock=reduced ? .5 : time*.001;
    for(let j=0;j<4;j++){
      const phase=(clock*.48+j*.23)%1;
      ctx.beginPath();
      ctx.strokeStyle=stations[i].accent+(j%2?"a0":"58");
      ctx.lineWidth=1.2;
      if(i===1) {
        ctx.moveTo(x-27+9*j,y+12-phase*26);
        ctx.bezierCurveTo(x-19,y-20-phase*7,x+14,y+19-phase*25,x+25-6*j,y-15-phase*9);
      } else {
        ctx.ellipse(x,y+4,9+phase*23,4+phase*10,i===2?-.45:0,phase*3,phase*3+Math.PI*(i===3?1.8:.76));
      }
      ctx.stroke();
    }
  });
  return marks.map(project);
}

export default function StudioTest() {
  const [selected,setSelected]=useState(1);
  const current=useRef(1);
  const canvas=useRef<HTMLCanvasElement>(null);
  const stage=useRef<HTMLDivElement>(null);
  const pins=useRef<(HTMLButtonElement|null)[]>([]);
  const turn=useRef(0);
  const grab=useRef<{id:number;x:number}|null>(null);

  function select(index:number) {
    current.current=index;
    turn.current=0;
    setSelected(index);
  }

  useEffect(()=>{
    const node=canvas.current;
    const room=stage.current;
    const ctx=node?.getContext("2d");
    if(!node||!room||!ctx) return;
    const reduced=matchMedia("(prefers-reduced-motion: reduce)");
    const camera={x:0,y:.68,z:0,yaw:.55,zoom:1};
    let width=0,height=0,frame=0,last=0;
    const schedule=()=>{if(!frame&&!document.hidden)frame=requestAnimationFrame(draw);};
    function draw(time:number){
      frame=0;
      if(!width||!height)return;
      if(!reduced.matches && time-last<24){schedule();return;}
      last=time;
      const index=current.current;
      const chosen=stations[index];
      const [x,y,z]=chosen?.focus??[0,.68,0];
      const target={x,y,z,yaw:(chosen?.yaw??.55)+turn.current,zoom:chosen?1.34:1};
      for(const key of ["x","y","z","yaw","zoom"] as const){
        camera[key]+=(target[key]-camera[key])*(reduced.matches?1:.12);
      }
      if(!ctx) return;
      const markers=renderStudio(ctx,width,height,camera,index,time,reduced.matches);
      markers.forEach(([x,y],i)=>{
        const pin=pins.current[i];
        if(!pin)return;
        pin.style.left=x+"px";
        pin.style.top=(y-17)+"px";
        pin.hidden=x<24||x>width-24||y<38||y>height-25;
      });
      if(!reduced.matches)schedule();
    }
    const resize=()=>{
      width=room.clientWidth;height=room.clientHeight;
      const ratio=Math.min(devicePixelRatio||1,1.5);
      node.width=Math.round(width*ratio);node.height=Math.round(height*ratio);
      ctx.setTransform(ratio,0,0,ratio,0,0);
      schedule();
    };
    const redraw=()=>schedule();
    const motionChange=()=>schedule();
    const observer=new ResizeObserver(resize);
    observer.observe(room);
    room.addEventListener("studio-change",redraw);
    reduced.addEventListener("change",motionChange);
    document.addEventListener("visibilitychange",schedule);
    resize();
    return ()=>{
      cancelAnimationFrame(frame);
      observer.disconnect();
      room.removeEventListener("studio-change",redraw);
      reduced.removeEventListener("change",motionChange);
      document.removeEventListener("visibilitychange",schedule);
    };
  },[]);

  useEffect(()=>{stage.current?.dispatchEvent(new Event("studio-change"));},[selected]);

  const info=stations[selected];
  return (
    <main className="thp-test">
      <meta name="robots" content="noindex, nofollow" />
      <style>{styles}</style>
      <header className="thp-test-header">
        <a className="thp-home" href="/" aria-label="Team Hair Pro home">hair pro<span>all about hair</span></a>
        <a className="thp-book" href={booking}>Book Now</a>
      </header>
      <section className="thp-tour" aria-labelledby="studio-title">
        <div className="thp-intro">
          <p className="thp-kicker">TENAFLY STUDIO</p>
          <h1 id="studio-title">In the <br />stylist’s chair.</h1>
          <nav aria-label="Salon stations" className="thp-stations">
            {stations.map((station,i)=><button type="button" key={station.id} onClick={()=>select(i)} aria-pressed={selected===i}>{station.label}</button>)}
            <button type="button" onClick={()=>select(-1)} aria-pressed={selected===-1}>Studio view</button>
          </nav>
          <div className="thp-detail" aria-live="polite">
            <h2>{info?.name??"Explore the salon"}</h2>
            <p>{info?.copy??"Choose a station to see its services."}</p>
            <a href={info?"/services#"+info.id:"/services"}>View services</a>
          </div>
        </div>
        <div className="thp-scene" ref={stage}>
          <canvas ref={canvas} aria-hidden="true"
            onPointerDown={event=>{
              if(!event.isPrimary||event.button!==0||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
              grab.current={id:event.pointerId,x:event.clientX};
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={event=>{
              if(grab.current?.id!==event.pointerId)return;
              turn.current=Math.max(-.21,Math.min(.38,turn.current+(event.clientX-grab.current.x)*.005));
              grab.current.x=event.clientX;
            }}
            onPointerUp={()=>{grab.current=null;}} onPointerCancel={()=>{grab.current=null;}}
            onLostPointerCapture={()=>{grab.current=null;}} />
          {stations.map((station,i)=><button key={station.id} className="thp-pin" type="button"
            ref={element=>{pins.current[i]=element;}} aria-label={station.label} aria-pressed={selected===i}
            onClick={()=>select(i)}>{station.label}</button>)}
          <span className="thp-prototype">3D studio concept</span>
        </div>
      </section>
      <footer className="thp-test-footer">9 W Railroad Ave, Tenafly, NJ <a href="tel:+12019271711">(201) 927-1711</a></footer>
    </main>
  );
}

const styles = [
  ".thp-test{min-height:100vh;background:#f6f1e9;color:#271e18;font-family:system-ui,sans-serif;padding:0 clamp(17px,4vw,64px);}",
  ".thp-test *{box-sizing:border-box}.thp-test a{color:inherit}.thp-test :is(a,button):focus-visible{outline:2px solid #9b612a;outline-offset:4px}",
  ".thp-test-header{display:flex;align-items:center;justify-content:space-between;min-height:88px;border-bottom:1px solid #d9cbbd;margin:0 auto;max-width:1440px;}",
  ".thp-home{text-decoration:none;font-size:2.15rem;font-weight:800;letter-spacing:-.075em;line-height:.85;}.thp-home span{display:block;font-size:.55rem;letter-spacing:.22em;margin-top:.52rem;text-align:center;}",
  ".thp-test .thp-book{color:#fff7ec;background:#372720;text-decoration:none;border-radius:99px;padding:.68rem 1.28rem;font-weight:660;white-space:nowrap;}",
  ".thp-tour{margin:0 auto;display:grid;grid-template-columns:minmax(250px,.79fr) minmax(0,1.62fr);gap:clamp(20px,4vw,62px);max-width:1440px;align-items:center;padding:clamp(21px,4vw,59px) 0;}",
  ".thp-kicker{font-size:.71rem;font-weight:750;letter-spacing:.20em;color:#654e3a;margin:0 0 1.2rem;}",
  ".thp-intro h1{font:400 clamp(3.35rem,6.15vw,7rem)/.89 Georgia,serif;letter-spacing:-.072em;margin:0 0 2rem;}",
  ".thp-stations{display:flex;flex-wrap:wrap;gap:8px}.thp-stations button,.thp-pin{cursor:pointer;font:600 .83rem system-ui,sans-serif;}",
  ".thp-stations button{color:#3a2b21;background:transparent;border:1px solid #baa895;border-radius:999px;padding:.56rem .69rem;min-height:40px;}.thp-stations button[aria-pressed=true]{background:#3b2b21;color:#fff3e2;border-color:#3b2b21;}",
  ".thp-detail{margin-top:1.55rem;padding-top:1.15rem;border-top:1px solid #d9cbbd;min-height:127px;}.thp-detail h2{font:1.62rem Georgia;margin:0 0 .45rem}.thp-detail p{margin:.3rem 0 .5rem;font-size:.92rem;color:#5c4c40;line-height:1.53}.thp-detail a{font-size:.86rem;text-underline-offset:.2em;font-weight:650}",
  ".thp-scene{height:min(68vw,620px);min-height:460px;position:relative;isolation:isolate;border-radius:19px;overflow:hidden;background:#31271f url('/andy.png') center/cover no-repeat;box-shadow:0 18px 45px #281b202d;}",
  ".thp-scene canvas{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:pan-y;}.thp-scene canvas:active{cursor:grabbing;}",
  ".thp-pin{left:-9999px;position:absolute;transform:translate(-50%,-50%);border:1px solid #fff4d799;color:#fff4df;border-radius:99px;background:#2b201ce6;min-height:34px;padding:.28rem .56rem;white-space:nowrap;}.thp-pin[aria-pressed=true]{background:#f1cf9b;color:#271e18;border-color:#f1cf9b;}",
  ".thp-prototype{position:absolute;bottom:14px;left:16px;text-shadow:0 1px 8px black;font-size:.74rem;color:#ffe8ca;pointer-events:none;}",
  ".thp-test-footer{max-width:1440px;margin:0 auto;padding:12px 0 22px;border-top:1px solid #d9cbbd;font-size:.82rem;color:#675649;display:flex;gap:.65rem;justify-content:space-between;flex-wrap:wrap;}",
  "@media(max-width:760px){.thp-test-header{min-height:66px}.thp-tour{display:flex;flex-direction:column;align-items:stretch;gap:16px;padding:20px 0}.thp-intro{display:contents}.thp-kicker{margin:0}.thp-intro h1{font-size:clamp(2.8rem,11vw,4.7rem);margin:0}.thp-intro h1 br{display:none}.thp-intro h1 br:after{content:' '}.thp-scene{height:clamp(300px,76vw,460px);min-height:0;order:2}.thp-stations{order:1;gap:5px}.thp-stations button{min-height:38px;padding:.42rem .59rem;font-size:.74rem}.thp-detail{order:3;margin:0;min-height:0}.thp-pin{font-size:.65rem;min-height:30px;padding:.23rem .42rem}}"
].join("\n");
