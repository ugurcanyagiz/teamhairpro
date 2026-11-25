"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number, number];
type Face = { points: Point[]; color: string; layer?: number; round?: boolean; skin?: boolean };
const booking = "https://www.vagaro.com/teamhairpro/book-now";

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
  box(-4.49+i*.409,-.07,0,.405,.15,9.8,["#a97950","#bd8a5e","#9f6d47","#c99768"][i%4],0,0);
}
box(0,1.87,-4.96,9.43,3.75,.13,"#c9bcab",0,0);
box(-4.70,1.87,-.06,.14,3.75,9.8,"#9d8977",0,0);
for(let i=0;i<14;i++) box(-4.598,.14+i*.25,-.1,.026,.021,9.58,"#8e7764",0,0);
for(const x of [-3.55,3.57]) {
  arch(x,-4.865,.79,1.58,2.58,"#4e382a",.20);
  arch(x,-4.846,.88,1.38,2.39,"#829499",.24);
  arch(x-.36,-4.830,1.03,.23,1.97,"#a6b1ae",.28);
  box(x,.74,-4.54,1.77,.14,.54,"#dcc5a7");
  box(x,.54,-4.59,1.70,.29,.38,"#644c3a");
}
for(const z of [-3.37,2.12]) {
  for(const [w,h,y,plane,color,layer] of [[1.35,2.28,.79,-4.597,"#4d362b",.20],[1.18,2.10,.88,-4.586,"#899e9d",.24]] as const){
    const points:Point[]=[[plane,y,z-w/2],[plane,y,z+w/2]];
    for(let i=0;i<=18;i++){
      const angle=i/18*Math.PI;
      points.push([plane,y+h-w/2+Math.sin(angle)*w/2,z+Math.cos(angle)*w/2]);
    }
    model.push({points,color,layer});
  }
  box(-4.38,.76,z,.51,.12,1.44,"#d0af8f");
}
box(0,1.47,-4.86,1.38,2.94,.05,"#503a30",0,.20);
box(0,1.65,-4.82,1.11,2.33,.027,"#8fa39c",0,.24);
box(0,1.59,-4.79,.055,2.28,.019,"#4a3631",0,.28);
for(const x of [-1.52,1.52]){
  box(x,1.74,-4.85,1.45,2.27,.05,"#543d30",0,.20);
  box(x,1.74,-4.81,1.30,2.11,.025,"#a0aba1",0,.24);
  box(x,1.42,-4.77,1.28,.052,.031,"#755b46",0,.28);
}
for(const x of [-.91,.91]) {
  box(x,1.47,-.21,.23,2.95,.24,"#4e382b");
  for(const q of [-.08,0,.08]) box(x+q,1.45,-.078,.023,2.74,.024,"#89644b");
  box(x,2.89,-.21,.36,.24,.35,"#987358");
  box(x,.18,-.21,.32,.36,.31,"#876548");
}
chair(-2.70,1.22,"#44352f");
chair(-3.38,-.72,"#443631");
chair(2.64,2.53,"#4c3d36");
chair(2.92,.61,"#463833");
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


// Small fixtures and warm backlighting give the room its material contrast.
for(const x of [-3.55,-1.23,1.20,3.57]){
  box(x,3.36,-4.75,.40,.12,.28,"#d1ab77");
  box(x,3.27,-4.65,.31,.082,.22,"#f9dca7");
  box(x-.63,.89,-4.31,.17,.14,.21,"#e3c8a6");
}
for(let i=0;i<5;i++) {
  box(-4.49,1.38+i*.32,-1.08,.38,.075,1.80,"#a57a55");
  for(let j=0;j<6;j++){
    box(-4.39,1.51+i*.32,-1.75+j*.24,.15,.20,.15,["#795044","#2a3f3d","#ba916d","#ded4bd"][j%4]);
  }
}

type Look = { top:string; bottom:string; skin:string; hair:string; shoes:string; style:"andy"|"crop"|"bun"|"waves"; cape?:string };
type Pose = { left?:Point; right?:Point; sitting?:boolean; stride?:number; nod?:number; tool?:"shears"|"dryer"|"brush"|"towel" };
const andy:Look={top:"#37353a",bottom:"#27262b",skin:"#b68162",hair:"#28262a",shoes:"#202124",style:"andy"};
const stylist:Look={top:"#917362",bottom:"#413b3d",skin:"#a16a51",hair:"#221a1d",shoes:"#302520",style:"bun"};
const assistant:Look={top:"#635c63",bottom:"#34323b",skin:"#bc8e70",hair:"#483028",shoes:"#2d2931",style:"crop"};
const guest:Look={top:"#b99282",bottom:"#443d43",skin:"#bb886c",hair:"#50342b",shoes:"#51493b",style:"waves",cape:"#746f80"};
const colorGuest:Look={top:"#b5958c",bottom:"#3a343d",skin:"#be907a",hair:"#92634a",shoes:"#3e3834",style:"waves",cape:"#544751"};
const washGuest:Look={top:"#566a72",bottom:"#625757",skin:"#a97458",hair:"#302528",shoes:"#564747",style:"crop",cape:"#71898b"};
const visitor:Look={top:"#bc9c81",bottom:"#6e5652",skin:"#ad785d",hair:"#5e4331",shoes:"#32272d",style:"waves"};
const tau=Math.PI*2;

function person(faces:Face[], x:number,z:number,yaw:number,look:Look,pose:Pose={}) {
  const side=Math.cos(yaw),front=Math.sin(yaw);
  const world=([a,b,c]:Point):Point=>[x+(a*side+c*front)*.91,b*(sitting ? .79 : .82)+(sitting ? .155 : 0),z+(-a*front+c*side)*.91];
  const sitting=!!pose.sitting;
  const step=pose.stride ?? 0;
  const swing=Math.sin(step);
  const bounce=step===0?Math.sin((pose.nod??0)*2)*.008:(1-Math.cos(step*2))*.017;
  const hip=(sitting ? .78 : .89)+bounce;
  const upper=hip+.59;
  const head=upper+.294+(pose.nod??0)*.03;

  function polygon(points:Point[],color:string) {
    faces.push({points:points.map(world),color,layer:1});
  }

  function oval(center:Point, size:Point, color:string, paint?:(latitude:number,azimuth:number)=>string, segments=7,bands=5) {
    if (!paint) {
      faces.push({
        points:[center,[center[0]+size[0],center[1],center[2]],[center[0],center[1]+size[1],center[2]],[center[0],center[1],center[2]+size[2]]].map(p=>world(p as Point)),
        color,layer:1,round:true
      });
      return;
    }
    for(let j=0;j<bands;j++) for(let i=0;i<segments;i++){
      const vertex=(a:number,b:number):Point=>{
        const theta=a/segments*tau,phi=(b/bands-.5)*Math.PI;
        return [center[0]+size[0]*Math.sin(theta)*Math.cos(phi),center[1]+size[1]*Math.sin(phi),center[2]+size[2]*Math.cos(theta)*Math.cos(phi)];
      };
      const az=(i+.5)/segments*tau, lat=(j+.5)/bands-.5;
      const tone=.79+.18*Math.sin((j+.5)/bands*Math.PI*.79)+.15*Math.cos(az+.65);
      faces.push({points:[vertex(i,j),vertex(i+1,j),vertex(i+1,j+1),vertex(i,j+1)].map(world),color:shade(paint(lat,az),tone),layer:1,skin:true});
    }
  }

  function limb(a:Point,b:Point,ra:number,rb:number,color:string) {
    const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2];
    const distance=Math.hypot(dx,dy,dz)||1;
    const y:Point=[dx/distance,dy/distance,dz/distance];
    const axis:Point=Math.abs(y[1])>.93?[1,0,0]:[0,1,0];
    const u:Point=[y[1]*axis[2]-y[2]*axis[1],y[2]*axis[0]-y[0]*axis[2],y[0]*axis[1]-y[1]*axis[0]];
    const length=Math.hypot(...u)||1;
    const s:Point=[u[0]/length,u[1]/length,u[2]/length];
    const t:Point=[y[1]*s[2]-y[2]*s[1],y[2]*s[0]-y[0]*s[2],y[0]*s[1]-y[1]*s[0]];
    function edge(center:Point,r:number,index:number):Point {
      const angle=index/6*tau,p=Math.cos(angle)*r,q=Math.sin(angle)*r;
      return [center[0]+s[0]*p+t[0]*q,center[1]+s[1]*p+t[1]*q,center[2]+s[2]*p+t[2]*q];
    }
    for(let i=0;i<6;i++) polygon([edge(a,ra,i),edge(a,ra,i+1),edge(b,rb,i+1),edge(b,rb,i)],shade(color,[.76,.92,1.09,1.14,.87,.71][i]));
    polygon(Array.from({length:6},(_,i)=>edge(b,rb,i)),shade(color,.94));
  }

  for(const sign of [-1,1]){
    const legX=sign*.111;
    const knee:Point=sitting?[legX,.62,.43]:[legX,.48,swing*sign*.22+.06];
    const foot:Point=sitting?[legX,.125,.50]:[legX,.115+Math.max(0,Math.sin(step+sign*Math.PI/2))*.13,swing*sign*.41];
    limb([legX,hip,0],knee,.106,.087,look.bottom);
    limb(knee,foot,.086,.064,look.bottom);
    oval([legX,.092,foot[2]+.069],[.085,.074,.145],look.shoes,undefined,5,3);
  }
  oval([0,hip+.28,-.006],[.262,.356,.151],look.cape??look.top,undefined,8,5);
  if(look.cape) {
    polygon([[-.262,upper-.055,.025],[.262,upper-.055,.025],[.31,hip-.085,.37],[-.31,hip-.085,.37]],shade(look.cape,.98));
    polygon([[-.22,upper-.10,.067],[-.11,upper-.10,.12],[-.22,hip-.08,.38],[-.29,hip-.08,.37]],shade(look.cape,1.13));
  }
  limb([0,upper-.035,0],[0,head-.14,.006],.087,.079,look.skin);
  if(look.style==="bun") oval([0,head+.095,-.154],[.106,.104,.104],look.hair,undefined,6,4);
  if(look.style==="waves") oval([0,head-.086,-.099],[.165,.218,.115],look.hair,undefined,7,4);
  const faceColor=(lat:number,az:number)=>{
    const facing=Math.cos(az);
    if(look.style==="andy"){
      if(lat<-.065&&lat>-.415&&facing>.15)return lat<-.17?"#2b2425":"#483533";
      if(facing<.43&&(lat>.04||facing<-.28&&lat>-.14))return lat>.16?"#594d4b":"#403734";
      return look.skin;
    }
    return lat>(facing > .35 ? .20 : .065)||facing<-.22&&lat>-.275?look.hair:look.skin;
  };
  oval([0,head,.012],[.192,.218,.165],look.skin,faceColor,18,12);
  for(const sign of [-1,1]){
    oval([sign*.172,head-.018,.011],[.026,.051,.032],look.skin);
    oval([sign*.069,head+.013,.163],[.037,.023,.012],"#ded0bd");
    oval([sign*.068,head+.012,.173],[.018,.020,.006],look.style==="andy"?"#4b3230":"#413532");
    oval([sign*.062,head+.019,.178],[.006,.007,.003],"#fbefda");
    if(look.style==="andy") {
      polygon([[sign*.033,head+.067,.146],[sign*.105,head+.060,.125],[sign*.099,head+.041,.134],[sign*.041,head+.049,.151]],"#3e3030");
    }
  }
  oval([0,head-.033,.161],[.036,.044,.040],look.skin);
  if(look.style==="andy"){
    polygon([[-.057,head-.092,.144],[.056,head-.092,.144],[.036,head-.107,.151],[-.033,head-.107,.151]],"#dbbdad");
    polygon([[-.081,upper-.017,.104],[-.005,upper-.085,.149],[-.068,upper-.19,.151],[-.155,upper-.043,.102]],"#25242a");
    polygon([[.081,upper-.017,.104],[.008,upper-.085,.149],[.068,upper-.19,.151],[.155,upper-.043,.102]],"#25242a");
    for(let i=0;i<3;i++) oval([0,upper-.22-i*.088,.150],[.013,.014,.012],"#807671",undefined,5,3);
  }

  for(const sign of [-1,1]){
    const shoulder:Point=[sign*.204,upper-.04,0];
    const hand=(sign<0?pose.left:pose.right)??(sitting?[sign*.22,hip+.15,.35]:[sign*.29,hip-.03,-sign*swing*.32+.06]);
    const elbow:Point=[sign*(.27+Math.abs(hand[0]-shoulder[0])*.22),upper-.25+(hand[1]-hip)*.24,hand[2]*.28-.08];
    oval(shoulder,[.093,.098,.089],look.cape??look.top);
    limb(shoulder,elbow,.089,.066,look.cape??look.top);
    oval(elbow,[.063,.061,.062],look.cape??look.skin);
    if(!look.cape)limb(elbow,hand,.060,.037,look.skin);
    else limb(elbow,hand,.061,.042,look.cape);
    oval(hand,[.042,.056,.038],look.skin,undefined,6,3);
    if(look.style==="andy"&&sign<0){
      oval([hand[0],hand[1]-.044,hand[2]-.025],[.041,.032,.040],"#1d2128",undefined,5,3);
    }
    if(sign===1&&pose.tool){
      const [hx,hy,hz]=hand;
      if(pose.tool==="shears"){
        const opening=.038+.032*Math.sin((pose.nod??0)*8);
        limb([hx-.011,hy+.021,hz],[hx+.082,hy+.065,hz+opening],.012,.003,"#d3d4d3");
        limb([hx-.012,hy+.018,hz],[hx+.086,hy+.043,hz-opening],.011,.003,"#bec8c7");
      }else if(pose.tool==="dryer"){
        limb([hx,hy+.018,hz],[hx,hy+.106,hz],.032,.037,"#2c2429");
        limb([hx,hy+.105,hz-.085],[hx,hy+.105,hz+.113],.056,.038,"#433842");
      }else if(pose.tool==="brush"){
        limb([hx,hy,hz],[hx,hy+.036,hz+.15],.024,.036,"#a47459");
      }else{
        oval([hx,hy-.037,hz+.064],[.11,.052,.118],"#e9dccc",undefined,7,4);
      }
    }
  }
}

const workers: {x:number;z:number;look:Look;tool:Pose["tool"];phase:number}[]=[
  {x:-2.70,z:1.22,look:andy,tool:"shears",phase:0},
  {x:2.64,z:2.53,look:stylist,tool:"dryer",phase:1.24}
];

function salonActors(t:number,faces:Face[]){
  person(faces,-2.70,1.13,Math.PI-.21,guest,{sitting:true,nod:Math.sin(t*.68)*.25});
  person(faces,2.64,2.43,Math.PI+.01,colorGuest,{sitting:true,nod:Math.sin(t*.54)*.24});
  person(faces,-2.72,-3.00,.16,washGuest,{sitting:true,nod:Math.sin(t*.42)*.16});
  for(const worker of workers){
    const a=t*1.08+worker.phase;
    const moving=.13*Math.sin(a*.81);
    const side=worker.look===andy?-.61:.63;
    const yaw=Math.atan2(-side,worker.look===andy ? .12 : -.19)+.40*Math.sin(a*.61);
    person(faces,worker.x+side+moving,worker.z+(worker.look===andy ? -.06 : .27)+.12*Math.sin(a),yaw,worker.look,{
      left:[-.18,1.45+.12*Math.sin(a*1.86),.35+.06*Math.cos(a)],
      right:[.18,1.49+.12*Math.cos(a*2.05),.39+.07*Math.sin(a)],
      nod:Math.sin(a*2.1),tool:worker.tool
    });
  }
  const path=t*.48+1;
  const ax=.57*Math.sin(path);
  const az=1.8+1.64*Math.cos(path);
  const ayaw=Math.atan2(.57*Math.cos(path),-1.64*Math.sin(path));
  person(faces,ax,az,ayaw,assistant,{stride:t*8.1,right:[.235,1.09,.28],left:[-.20,1.08,.27],tool:"towel"});

  const pace=t*.36+2.65;
  const gx=2.30+.75*Math.cos(pace);
  const gz=-.97+.65*Math.sin(pace);
  person(faces,gx,gz,Math.atan2(-.75*Math.sin(pace),.65*Math.cos(pace)),visitor,{stride:t*7.6});
  person(faces,-2.03,-3.50,-1.33,stylist,{
    left:[-.16,1.28,.36],right:[.18,1.35+.08*Math.sin(t*2.2),.43],
    nod:Math.sin(t*1.2)*.3,tool:"brush"
  });
}



type Service = { name:string; duration:string; price:string; summary:string; consultation?:boolean };

const stations = [
  {title:"Haircuts",point:[-2.72,1.71,1.15],services:[
    {name:"Men’s Haircut",duration:"30 min",price:"$45",summary:"A tailored haircut and clean finish based on your features, hair texture and routine."},
    {name:"Women’s Haircut",duration:"60 min",price:"$120",summary:"A personalized cut and shape refinement that suits your features and at-home styling routine."},
    {name:"Girl’s Haircut (Ages 10–15)",duration:"45 min",price:"$70",summary:"A gentle, age-appropriate cut with an easy-to-maintain shape."},
    {name:"Clean-Up Cut",duration:"30 min",price:"$70",summary:"A quick trim to refresh your shape and tidy split ends between full cuts."},
  ]},
  {title:"Color Services",point:[2.92,1.44,-2.58],services:[
    {name:"L’Oréal INOA Color",duration:"75 min",price:"$120",summary:"INOA color applied to create an even, rich tone."},
    {name:"L’Oréal Majirel Color",duration:"75 min",price:"$100",summary:"Long-wear color with dependable coverage and a smooth finish."},
    {name:"Highlights",duration:"180 min",price:"$225–$350",summary:"Custom-placed highlights to add dimension and brighten selected sections.",consultation:true},
    {name:"Balayage",duration:"180 min",price:"$225–$350",summary:"Hand-painted lightening for a blended, natural-looking transition.",consultation:true},
    {name:"Partial Highlights",duration:"120 min",price:"$225",summary:"Focused highlights in selected sections for a subtle lift.",consultation:true},
    {name:"Partial Balayage",duration:"120 min",price:"$225",summary:"Hand-painted lightening in selected sections for depth and brightness.",consultation:true},
  ]},
  {title:"Styling & Finish",point:[2.67,1.72,2.44],services:[
    {name:"Blow Dry (30 min)",duration:"30 min",price:"$50",summary:"A wash and blowout with brush styling for a smooth finish and movement."},
    {name:"Blow Dry (45 min)",duration:"45 min",price:"$75",summary:"An extended blowout with extra time for detailing and smoothing."},
    {name:"Blow Dry with Iron",duration:"45 min",price:"$75",summary:"A blowout finished with an iron for extra smoothness or definition."},
    {name:"Updo",duration:"60 min",price:"$150",summary:"An occasion hairstyle shaped and pinned for a secure finish."},
  ]},
  {title:"Treatments",point:[-2.73,1.68,-3.12],services:[
    {name:"Nourishing Treatment",duration:"15 min",price:"$35",summary:"A conditioning treatment to improve softness, shine and manageability."},
    {name:"Keratin Complex",duration:"180 min",price:"$350",summary:"A keratin smoothing treatment designed to reduce frizz and improve manageability."},
  ]},
] satisfies {title:string;point:Point;services:Service[]}[];

function paintRound(ctx:CanvasRenderingContext2D, points:Point[], color:string) {
  const [center,...axes]=points;
  let xx=0,xy=0,yy=0;
  for(const p of axes){
    const x=p[0]-center[0],y=p[1]-center[1];
    xx+=x*x;xy+=x*y;yy+=y*y;
  }
  const difference=Math.hypot(xx-yy,2*xy);
  const major=Math.sqrt(Math.max(.06,(xx+yy+difference)/2));
  const minor=Math.sqrt(Math.max(.06,(xx+yy-difference)/2));
  const angle=.5*Math.atan2(2*xy,xx-yy);
  const light=ctx.createRadialGradient(center[0]-major*.31,center[1]-major*.37,0,center[0],center[1],major*1.09);
  light.addColorStop(0,shade(color,1.29));
  light.addColorStop(.48,shade(color,1.01));
  light.addColorStop(.91,shade(color,.71));
  light.addColorStop(1,shade(color,.63));
  ctx.fillStyle=light;
  ctx.beginPath();
  ctx.ellipse(center[0],center[1],major,minor,angle,0,tau);
  ctx.fill();
}

function renderStudio(ctx:CanvasRenderingContext2D,width:number,height:number,time:number,turn:number,focus:{x:number;z:number;zoom:number}){
  const yaw=.65+Math.sin(time*.092)*.105+turn;
  const sy=Math.sin(yaw),cy=Math.cos(yaw);
  const pitch=.75,cp=Math.cos(pitch),sp=Math.sin(pitch);
  const scale=Math.min(width*(width<680?1.09:1.08),height*1.12)*1.15*focus.zoom;
  const project=([x,y,z]:Point):Point=>{
    const dx=x-focus.x,dz=z-focus.z,dy=y-.77;
    const forward=dx*sy+dz*cy;
    const depth=19-cp*forward-sp*dy;
    return [width*.5+(dx*cy-dz*sy)*scale/depth,height*(width < 680 ? .48 : .52)-(cp*dy-sp*forward)*scale/depth,depth];
  };
  const backdrop=ctx.createRadialGradient(width*.49,height*.46,0,width*.49,height*.46,Math.max(width,height)*.67);
  backdrop.addColorStop(0,"#796553");
  backdrop.addColorStop(.53,"#352922");
  backdrop.addColorStop(1,"#1b1514");
  ctx.fillStyle=backdrop;
  ctx.fillRect(0,0,width,height);

  const geometry=model.slice();
  salonActors(time,geometry);
  const depth=geometry.map(face=>{
    const points=face.points.map(project);
    return {...face,points,depth:face.round?points[0][2]:points.reduce((sum,v)=>sum+v[2],0)/points.length};
  }).sort((a,b)=>(a.layer??0)-(b.layer??0)||b.depth-a.depth);
  let shadows=false;
  for(const face of depth){
    if(!shadows&&(face.layer??0)>=1){
      shadows=true;
      for(const [x,z] of [[-2.70,1.20],[-3.38,-.72],[2.64,2.53],[2.92,.61],[-2.76,-3.1],[.91,-.21],[-.91,-.21],[2.70,-2.48]]){
        const [sx,sy]=project([x,.032,z]);
        const radius=Math.max(9,scale*.042);
        const shadow=ctx.createRadialGradient(sx,sy,0,sx,sy,radius);
        shadow.addColorStop(0,"#37241a69");
        shadow.addColorStop(1,"#37241a00");
        ctx.save();
        ctx.translate(sx,sy);
        ctx.scale(1,.49);
        ctx.translate(-sx,-sy);
        ctx.fillStyle=shadow;
        ctx.fillRect(sx-radius,sy-radius,radius*2,radius*2);
        ctx.restore();
      }
    }
    if(face.round){paintRound(ctx,face.points,face.color);continue;}
    ctx.beginPath();
    face.points.forEach(([x,y],i)=>i===0?ctx.moveTo(x,y):ctx.lineTo(x,y));
    ctx.closePath();
    ctx.fillStyle=face.color;
    ctx.fill();
    if(face.skin){
      ctx.strokeStyle=face.color;
      ctx.lineWidth=.53;
      ctx.stroke();
    }
  }
  for(const x of [-3.55,-1.23,1.20,3.57]){
    const [px,py]=project([x,3.22,-4.73]);
    const radius=Math.min(width,height)*.13;
    const light=ctx.createRadialGradient(px,py,0,px,py,radius);
    light.addColorStop(0,"#ffdb9f50");
    light.addColorStop(1,"#ffdb9f00");
    ctx.fillStyle=light;
    ctx.fillRect(px-radius,py-radius,radius*2,radius*2);
  }
  return stations.map(station=>project(station.point));
}

export default function LivingSalon() {
  const [open,setOpen]=useState<number|null>(null);
  const [service,setService]=useState<Service|null>(null);
  const serviceTrigger=useRef<HTMLButtonElement|null>(null);
  const backButton=useRef<HTMLButtonElement|null>(null);
  const selected=useRef<number|null>(null);
  const canvas=useRef<HTMLCanvasElement>(null);
  const anchors=useRef<(HTMLDivElement|null)[]>([]);
  const buttons=useRef<(HTMLButtonElement|null)[]>([]);
  const request=useRef<()=>void>(()=>{});
  const target=useRef(0);
  const drag=useRef<{id:number;x:number}|null>(null);

  function toggle(index:number) {
    const next=selected.current===index?null:index;
    selected.current=next;
    setOpen(next);
    setService(null);
    request.current();
  }

  function backToServices(){
    setService(null);
    requestAnimationFrame(()=>serviceTrigger.current?.focus());
  }

  useEffect(()=>{if(service)backButton.current?.focus();},[service]);

  useEffect(()=>{
    const node=canvas.current;
    const ctx=node?.getContext("2d",{alpha:false});
    if(!node||!ctx)return;
    const reduced=matchMedia("(prefers-reduced-motion: reduce)");
    let width=0,height=0,frame=0,previous=0,elapsed=0,turn=0;
    const focus={x:0,z:0,zoom:1};
    function schedule(){
      if(!frame&&!document.hidden)frame=requestAnimationFrame(draw);
    }
    function draw(now:number){
      frame=0;
      if(!ctx||!width||!height)return;
      if(!reduced.matches&&previous&&now-previous<22){schedule();return;}
      if(previous)elapsed+=Math.min((now-previous)/1000,.075);
      previous=now;
      turn+=(target.current-turn)*.12;
      const active=selected.current;
      const point=active===null?null:stations[active].point;
      const easing=reduced.matches?1:.085;
      focus.x+=((point?.[0]??0)*.18-focus.x)*easing;
      focus.z+=((point?.[2]??0)*.16-focus.z)*easing;
      focus.zoom+=((point&&width>680?1.08:1)-focus.zoom)*easing;
      const marks=renderStudio(ctx,width,height,reduced.matches?3.1:elapsed,reduced.matches?0:turn,focus);
      marks.forEach(([x,y],i)=>{
        const label=anchors.current[i];
        if(!label)return;
        const margin=width<680?60:85;
        const left=Math.max(margin,Math.min(width-margin,x));
        label.style.left=left+"px";
        const top=Math.max(82,Math.min(height-65,y-15));
        label.style.top=top+"px";
        label.style.setProperty("--panel-shift",Math.max(144,Math.min(width-144,left))-left+"px");
        label.dataset.rise=String(top>height*.47);
        label.dataset.side=left>width-320 || (left<width*.47 && left>310) ? "left" : "right";
      });
      if(!reduced.matches)schedule();
    }
    request.current=schedule;
    const resize=()=>{
      width=node.clientWidth;height=node.clientHeight;
      const dpi=Math.min(devicePixelRatio||1,1.5);
      node.width=Math.round(width*dpi);node.height=Math.round(height*dpi);
      ctx.setTransform(dpi,0,0,dpi,0,0);
      schedule();
    };
    const observer=new ResizeObserver(resize);
    observer.observe(node);
    const sync=()=>{previous=0;schedule();};
    reduced.addEventListener("change",sync);
    document.addEventListener("visibilitychange",sync);
    resize();
    return ()=>{
      request.current=()=>{};
      cancelAnimationFrame(frame);
      observer.disconnect();
      reduced.removeEventListener("change",sync);
      document.removeEventListener("visibilitychange",sync);
    };
  },[]);

  return (
    <main className="thp-film" onKeyDown={event=>{
      if(event.key==="Escape"&&selected.current!==null){
        if(service){backToServices();return;}
        const index=selected.current;
        toggle(index);
        buttons.current[index]?.focus();
      }
    }}>
      <meta name="robots" content="noindex, nofollow" />
      <style>{styles}</style>
      <canvas ref={canvas} role="img" aria-label="TeamHairPro’s animated salon, with Andy cutting hair while stylists and guests move between stations"
        onPointerDown={event=>{
          if(!event.isPrimary||event.button!==0||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
          drag.current={id:event.pointerId,x:event.clientX};
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event=>{
          if(drag.current?.id!==event.pointerId)return;
          target.current=Math.max(-.24,Math.min(.28,target.current+(event.clientX-drag.current.x)*.0035));
          drag.current.x=event.clientX;
        }}
        onPointerUp={()=>{drag.current=null;}} onPointerCancel={()=>{drag.current=null;}}
        onLostPointerCapture={()=>{drag.current=null;}} />
      <a className="thp-film-book" href={booking}>Book Now!</a>
      <nav aria-label="Salon services" className="thp-labels">
        {stations.map((station,index)=>(
          <div className="thp-anchor" key={station.title} data-open={open===index} data-detail={open===index&&!!service} ref={element=>{anchors.current[index]=element;}}>
            <button className="thp-heading" type="button" aria-expanded={open===index}
              aria-controls={open===index?"thp-services-"+index:undefined} onClick={()=>toggle(index)}
              ref={element=>{buttons.current[index]=element;}}>
              <span>{station.title}</span><span className="thp-toggle" aria-hidden="true">{open===index?"−":"+"}</span>
            </button>
            {open===index&&(
              <div className="thp-services" id={"thp-services-"+index}>
                <ul className="thp-service-list" hidden={!!service} aria-label={station.title}>
                  {station.services.map(item=>(
                    <li key={item.name}><button type="button" onClick={event=>{
                      serviceTrigger.current=event.currentTarget;
                      setService(item);
                    }}>{item.name}<span aria-hidden="true">›</span></button></li>
                  ))}
                </ul>
                {service&&(
                  <section className="thp-service-detail" aria-label={service.name}>
                    <button className="thp-back" type="button" ref={backButton} onClick={backToServices}>Back to {station.title}</button>
                    <h2>{service.name}</h2>
                    <p>{service.summary}</p>
                    <div className="thp-service-price"><strong>{service.price}</strong><span>{service.duration}</span></div>
                    {service.consultation&&<p className="thp-note">Consultation required.</p>}
                    <a className="thp-reserve" href={booking}>Book Now!</a>
                    <p className="thp-note">Salon menu price. Select your service and confirm pricing in Vagaro.</p>
                  </section>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </main>
  );
}

const styles=[
  ".thp-film{position:fixed;inset:0;isolation:isolate;background:#2c211a url('/andy.png') center/cover no-repeat;overflow:hidden;font-family:system-ui,sans-serif}",
  ".thp-film canvas{width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab}.thp-film canvas:active{cursor:grabbing}",
  ".thp-film .thp-film-book{position:absolute;z-index:4;left:max(20px,env(safe-area-inset-left));top:max(20px,env(safe-area-inset-top));background:#f7e5ca;color:#32221b;text-decoration:none;border:1px solid #fff0d6;border-radius:99px;display:inline-flex;align-items:center;min-height:48px;padding:.66rem 1.21rem;font-weight:720;box-shadow:0 6px 24px #21120960}",
  ".thp-labels{position:absolute;inset:0;pointer-events:none;z-index:3}",
  ".thp-anchor{position:absolute;transform:translate(-50%,-50%);left:35%;top:45%;pointer-events:auto}.thp-anchor:nth-child(2){left:73%;top:41%}.thp-anchor:nth-child(3){left:68%;top:66%}.thp-anchor:nth-child(4){left:45%;top:32%}.thp-anchor[data-open=true]{z-index:3}",
  ".thp-anchor::after{content:'';height:14px;width:1px;background:#ffe6baa6;position:absolute;top:100%;left:50%;pointer-events:none}",
  ".thp-heading{position:relative;display:flex;align-items:center;gap:.62rem;border-radius:99px;border:1px solid #f7d8ab91;background:#29201bed;color:#ffecd1;padding:.38rem .45rem .38rem .76rem;min-height:42px;white-space:nowrap;font-size:.83rem;font-weight:680;cursor:pointer;box-shadow:0 5px 18px #24150f67}",
  ".thp-heading[aria-expanded=true]{background:#f7deba;color:#392821;border-color:#fff0cf}.thp-toggle{height:22px;width:22px;display:grid;place-items:center;border-radius:50%;background:#b4916760;font-size:1rem;line-height:1}",
  ".thp-services{position:absolute;top:0;left:calc(100% + 9px);list-style:none;width:max-content;min-width:155px;margin:0;padding:.24rem .65rem;background:#fff0dc;color:#3a2a23;border:1px solid #fff6e6;border-radius:13px;box-shadow:0 10px 32px #28181171;font-size:.84rem;animation:thp-film-in .23s ease both}",
  ".thp-anchor[data-side=left] .thp-services{left:auto;right:calc(100% + 9px)}.thp-anchor[data-rise=true] .thp-services{top:auto;bottom:0}.thp-services ul{list-style:none;margin:0;padding:0}.thp-services li+li{border-top:1px solid #d2b99e9c}.thp-service-list button{display:flex;align-items:center;justify-content:space-between;gap:.7rem;text-align:left;width:100%;font:inherit;background:none;border:0;color:inherit;padding:.47rem .1rem;cursor:pointer}.thp-service-list button:hover{background:#ead4bb}.thp-service-list button span{font-size:1rem;color:#6d4c3b}.thp-anchor[data-detail=true] .thp-services{width:min(265px,calc(100vw - 30px));padding:.73rem .8rem}.thp-service-detail h2{font:650 1.08rem system-ui;margin:.36rem 0}.thp-service-detail p{font-size:.79rem;line-height:1.4;margin:.27rem 0 .5rem}.thp-service-price{display:flex;align-items:baseline;gap:.6rem;margin:.52rem 0;color:#402b1e}.thp-service-price strong{font-size:1.06rem}.thp-service-price span{font-size:.76rem}.thp-back{border:0;background:none;color:#624332;font:650 .72rem system-ui;text-decoration:underline;text-underline-offset:3px;padding:.25rem 0;cursor:pointer}.thp-reserve{background:#37291f;color:#fff0dc;text-decoration:none;font:700 .82rem system-ui;padding:.57rem .75rem;border-radius:999px;display:inline-block}.thp-service-detail .thp-note{font-size:.69rem;color:#624838;margin:.42rem 0 0}.thp-services :is(a,button):focus-visible{outline:2px solid #80583a;outline-offset:2px}",
  ".thp-film :is(a,button):focus-visible{outline:2px solid white;outline-offset:4px}@keyframes thp-film-in{from{opacity:0;translate:0 5px}to{opacity:1;translate:0 0}}",
  "@media(max-width:680px){.thp-heading{min-height:38px;font-size:.7rem;padding:.31rem .36rem .31rem .52rem;gap:.33rem}.thp-toggle{height:18px;width:18px;font-size:.85rem}.thp-labels:has([data-open=true]) .thp-anchor:not([data-open=true]){opacity:.64}.thp-anchor[data-open=true]{z-index:3}.thp-services,.thp-anchor[data-side=left] .thp-services{position:fixed;top:calc(100% + 10px);left:calc(50% + var(--panel-shift,0px));right:auto;translate:-50% 0;font-size:.77rem;max-height:45svh;overflow:auto;animation:none}.thp-anchor[data-rise=true] .thp-services{top:auto;bottom:calc(100% + 8px)}}",
  "@media(prefers-reduced-motion:reduce){.thp-services{animation:none}.thp-film canvas{cursor:default}}"
].join("\n");
