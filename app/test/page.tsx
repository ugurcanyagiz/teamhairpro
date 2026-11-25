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

const haircut: Point = [-3.12,1.70,1.46];
const color: Point = [3.10,1.70,-1.38];
const styling: Point = [3.10,1.70,1.42];
const treatment: Point = [-1.78,1.68,-4.03];
const lights = [[-3.5,-2.5],[3.5,-2.5],[-3.5,1.3],[3.5,1.3],[-2,-4.9],[2,-4.9]];

function rotateFixture(x:number,z:number,yaw:number,build:()=>void) {
  const start=model.length;
  const cos=Math.cos(yaw),sin=Math.sin(yaw);
  build();
  for(let i=start;i<model.length;i++){
    model[i].points=model[i].points.map(([dx,y,dz])=>[x+dx*cos+dz*sin,y,z-dx*sin+dz*cos]);
  }
}

for(let i=0;i<23;i++) {
  const x=-4.48+i*.407;
  for(let row=0;row<5;row++){
    const ends=row===0 ? -5.52 : -5.52+row*2.12+(i%3-1)*.56;
    const next=row===4 ? 5.52 : -5.52+(row+1)*2.12+(i%3-1)*.56;
    box(x,-.067,(ends+next)/2,.404,.13,next-ends-.014,["#a97950","#bd8a5e","#9f6d47","#c99768","#b78555"][(i+row*3)%5],0,0);
    box(x+(row%3-1)*.071,.005,(ends+next)/2,.009,.003,next-ends-.19,"#a9754b",0,.10);
  }
}
box(0,1.53,-5.56,9.38,3.06,.15,"#d5c6b3",0,0);
box(-4.69,1.53,0,.14,3.06,11.05,"#cbb6a0",0,0);
box(4.69,.20,0,.14,.40,11.05,"#b49c83",0,0);
box(-4.59,.12,0,.055,.22,11.02,"#776153",0,0);
box(4.59,.12,0,.055,.22,11.02,"#776153",0,0);
box(0,.12,-5.45,9.16,.22,.08,"#776153",0,0);

for(const side of [-1,1]){
  for(const z of [-1.38,1.44]){
    rotateFixture(side*4.36,z,-side*1.02,()=>{
      arch(0,.01,.68,1.17,2.29,"#342c28",1);
      arch(0,.035,.88,1.02,1.99,"#80918f",1);
      arch(0,-.028,.88,1.02,1.99,"#768784",1);
      model.push({points:[[-.33,1.10,.049],[-.15,1.10,.049],[.22,2.68,.049],[.03,2.73,.049]],color:"#afbbb0",layer:1});
      model.push({points:[[-.33,1.10,-.042],[-.15,1.10,-.042],[.22,2.68,-.042],[.03,2.73,-.042]],color:"#a7b2a8",layer:1});
      box(0,.81,.16,1.28,.09,.47,"#dec2a3");
      box(0,.58,-.025,1.18,.36,.23,"#645042");
      for(const x of [-.49,.49]) box(x,.32,.02,.052,.64,.14,"#392d28");
      for(const [x,tint] of [[-.43,"#b08965"],[-.29,"#604d45"]] as const) {
        box(x,.95,.25,.096,.19,.09,tint);
        box(x,1.06,.25,.06,.043,.063,"#3f3630");
      }
    });
    rotateFixture(side*3.10,z,-side*Math.PI/2,()=>chair(0,0,"#38312f"));
  }
}
for(const x of [-1.6,1.6]) {
  box(x,1.36,-.04,.17,2.72,.20,"#392b25");
  for(const q of [-.053,0,.053]) box(x+q,1.34,.071,.013,2.42,.021,"#755540");
  box(x,2.70,-.04,.29,.17,.30,"#533b2f");
  box(x,.12,-.04,.28,.24,.29,"#49362b");
}

for(const x of [-1.78,.19,2.16]){
  rotateFixture(x,-4.02,0,()=>chair(0,.33,"#443b35"));
  box(x,.44,-4.58,.70,.87,.59,"#443b35");
  box(x,.92,-4.56,1.07,.23,.82,"#dfd2bf");
  box(x,1.047,-4.59,.78,.03,.54,"#727e7b");
  box(x,1.09,-4.91,.072,.21,.071,"#b3aa9e");
  box(x,1.18,-4.83,.066,.05,.21,"#b3aa9e");
}
for(const x of [-2.95,-1.47,0,1.47,2.95]){
  box(x,1.71,-5.44,1.36,2.02,.065,"#beac97",0,.18);
  box(x,1.71,-5.393,1.29,1.94,.021,"#dec9ad",0,.22);
}
for(const [x,z] of [[-3.61,-4.35],[3.55,-3.52]]){
  for(let shelf=0;shelf<4;shelf++){
    box(x,.42+shelf*.42,z,1.07,.072,.51,"#856448");
    for(let item=0;item<5;item++){
      box(x-.38+item*.186,.55+shelf*.42,z,.10,.18,.11,["#61514e","#a48367","#d0b5a0","#68796b"][item%4]);
    }
  }
  for(const side of [-1,1])box(x+side*.51,1.05,z,.048,2.1,.49,"#453329");
}

box(-3.37,.29,4.25,1.82,.55,.78,"#4e4338");
box(-3.37,.60,4.56,1.83,.67,.16,"#44382f");
for(const x of [-4.26,-2.48])box(x,.50,4.24,.12,.42,.74,"#55463a");
for(const x of [-3.78,-2.96])box(x,.61,4.17,.76,.12,.57,"#786455");
box(-2.98,.25,3.38,.83,.42,.46,"#664a35");
box(-2.98,.49,3.38,.92,.095,.52,"#b49475");
box(3.44,.52,4.05,1.82,1.04,.86,"#594131");
box(3.44,1.07,4.05,1.94,.11,.98,"#d0b79a");
for(let i=0;i<11;i++)box(2.65+i*.158,.54,4.496,.045,.91,.023,"#957055");
box(3.43,1.19,4.06,.29,.12,.22,"#4c4038");
box(3.43,1.38,4.02,.55,.32,.075,"#302b2a",-.05);
box(3.86,1.16,4.33,.20,.09,.13,"#544940");
for(const x of [-1.05,1.05])box(x,1.17,5.44,.09,2.34,.12,"#3d3029");
box(0,.028,4.96,1.81,.043,.71,"#574c45");
for(const x of [-3.94,4.10]){
  const z=4.97;
  box(x,.23,z,.45,.46,.46,"#806553");
  box(x,.81,z,.065,.97,.065,"#4a5c37");
  for(let i=0;i<7;i++){
    const off=(i%2===0?-1:1)*(.13+i*.023);
    box(x+off,.58+i*.095,z+(i%3-1)*.13,.42,.084,.23,["#697e55","#415a3a","#7e8a59"][i%3],off*1.6);
  }
}
for(const [x,z] of lights){
  box(x,2.91,z,.43,.089,.29,"#513b31");
  box(x,2.82,z,.31,.095,.20,"#f6d49f");
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

const workers: {point:Point;look:Look;tool:Pose["tool"];phase:number}[]=[
  {point:haircut,look:andy,tool:"shears",phase:0},
  {point:styling,look:stylist,tool:"dryer",phase:1.24},
  {point:color,look:assistant,tool:"brush",phase:2.1}
];

function salonActors(t:number,faces:Face[]){
  person(faces,haircut[0],haircut[2],Math.PI/2,guest,{sitting:true,nod:Math.sin(t*.68)*.25});
  person(faces,styling[0],styling[2],-Math.PI/2,colorGuest,{sitting:true,nod:Math.sin(t*.54)*.24});
  person(faces,color[0],color[2],-Math.PI/2,guest,{sitting:true,nod:Math.sin(t*.85)*.18});
  person(faces,treatment[0],treatment[2]+.32,0,washGuest,{sitting:true,nod:Math.sin(t*.42)*.16});
  for(const worker of workers){
    const [x,,z]=worker.point;
    const a=t*1.08+worker.phase;
    const side=Math.sign(x)*.54;
    const offset=.63+.12*Math.sin(a*.81);
    const yaw=Math.atan2(-side,offset)+.22*Math.sin(a*.61);
    person(faces,x+side,z-offset,yaw,worker.look,{
      left:[-.18,1.45+.12*Math.sin(a*1.86),.35+.06*Math.cos(a)],
      right:[.18,1.49+.12*Math.cos(a*2.05),.39+.07*Math.sin(a)],
      nod:Math.sin(a*2.1),tool:worker.tool
    });
  }
  const path=t*.48+1;
  const ax=.62*Math.sin(path);
  const az=-.08+2.97*Math.cos(path);
  const ayaw=Math.atan2(.62*Math.cos(path),-2.97*Math.sin(path));
  person(faces,ax,az,ayaw,assistant,{stride:t*8.1,right:[.235,1.09,.28],left:[-.20,1.08,.27],tool:"towel"});

  const pace=t*.44+2.65;
  const gx=1.43+.64*Math.cos(pace);
  const gz=3.47+.97*Math.sin(pace);
  person(faces,gx,gz,Math.atan2(-.64*Math.sin(pace),.97*Math.cos(pace)),visitor,{stride:t*7.6});
  person(faces,-3.65,4.17,Math.PI,visitor,{sitting:true,nod:Math.sin(t*.69)*.22});
  person(faces,3.33,3.45,.12,assistant,{right:[.20,1.26,.42],nod:Math.sin(t*1.5)*.25});
  person(faces,treatment[0]+.72,treatment[2]-.32,-1.11,stylist,{
    left:[-.16,1.24,.36],right:[.18,1.26+.08*Math.sin(t*2.2),.43],
    nod:Math.sin(t*1.2)*.3,tool:"towel"
  });
}

type Service = { name:string; duration:string; price:string; summary:string; consultation?:boolean };

const stations = [
  {title:"Haircuts",point:haircut,services:[
    {name:"Men’s Haircut",duration:"30 min",price:"$45",summary:"A tailored haircut and clean finish based on your features, hair texture and routine."},
    {name:"Women’s Haircut",duration:"60 min",price:"$120",summary:"A personalized cut and shape refinement that suits your features and at-home styling routine."},
    {name:"Girl’s Haircut (Ages 10–15)",duration:"45 min",price:"$70",summary:"A gentle, age-appropriate cut with an easy-to-maintain shape."},
    {name:"Clean-Up Cut",duration:"30 min",price:"$70",summary:"A quick trim to refresh your shape and tidy split ends between full cuts."},
  ]},
  {title:"Color Services",point:color,services:[
    {name:"L’Oréal INOA Color",duration:"75 min",price:"$120",summary:"INOA color applied to create an even, rich tone."},
    {name:"L’Oréal Majirel Color",duration:"75 min",price:"$100",summary:"Long-wear color with dependable coverage and a smooth finish."},
    {name:"Highlights",duration:"180 min",price:"$225–$350",summary:"Custom-placed highlights to add dimension and brighten selected sections.",consultation:true},
    {name:"Balayage",duration:"180 min",price:"$225–$350",summary:"Hand-painted lightening for a blended, natural-looking transition.",consultation:true},
    {name:"Partial Highlights",duration:"120 min",price:"$225",summary:"Focused highlights in selected sections for a subtle lift.",consultation:true},
    {name:"Partial Balayage",duration:"120 min",price:"$225",summary:"Hand-painted lightening in selected sections for depth and brightness.",consultation:true},
  ]},
  {title:"Styling & Finish",point:styling,services:[
    {name:"Blow Dry (30 min)",duration:"30 min",price:"$50",summary:"A wash and blowout with brush styling for a smooth finish and movement."},
    {name:"Blow Dry (45 min)",duration:"45 min",price:"$75",summary:"An extended blowout with extra time for detailing and smoothing."},
    {name:"Blow Dry with Iron",duration:"45 min",price:"$75",summary:"A blowout finished with an iron for extra smoothness or definition."},
    {name:"Updo",duration:"60 min",price:"$150",summary:"An occasion hairstyle shaped and pinned for a secure finish."},
  ]},
  {title:"Treatments",point:treatment,services:[
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

function renderStudio(ctx:CanvasRenderingContext2D,width:number,height:number,time:number,turn:number,focus:{x:number;y:number;z:number;zoom:number;yaw:number;pitch:number}){
  const yaw=focus.yaw+Math.sin(time*.092)*.065/focus.zoom+turn/focus.zoom;
  const sy=Math.sin(yaw),cy=Math.cos(yaw);
  const cp=Math.cos(focus.pitch),sp=Math.sin(focus.pitch);
  const scale=Math.min(width*(width<680?1.09:1.08),height*1.12)*1.15*focus.zoom;
  const project=([x,y,z]:Point):Point=>{
    const dx=x-focus.x,dz=z-focus.z,dy=y-focus.y;
    const forward=dx*sy+dz*cy;
    const depth=19-cp*forward-sp*dy;
    return [width*.5+(dx*cy-dz*sy)*scale/depth,height*(width < 680 ? .46 : .50)-(cp*dy-sp*forward)*scale/depth,depth];
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
      for(const [x,z] of [[-3.10,1.44],[-3.10,-1.38],[3.10,1.44],[3.10,-1.38],[-1.78,-4.02],[.19,-4.02],[2.16,-4.02],[-3.37,4.25],[3.44,4.05]]){
        const [sx,sy]=project([x,.032,z]);
        const radius=Math.max(8,scale*.033);
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
  for(const [x,z] of lights){
    const [px,py]=project([x,2.77,z]);
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
    const focus={x:0,y:.77,z:0,zoom:1,yaw:.27,pitch:.79};
    function schedule(){
      if(!frame&&!document.hidden)frame=requestAnimationFrame(draw);
    }
    function draw(now:number){
      frame=0;
      if(!ctx||!width||!height)return;
      if(!reduced.matches&&previous&&now-previous<22){schedule();return;}
      const delta=previous?Math.min((now-previous)/1000,.075):1/30;
      elapsed+=delta;
      previous=now;
      turn+=(target.current-turn)*(1-Math.exp(-delta*6));
      const active=selected.current;
      const point=active===null?null:stations[active].point;
      const easing=reduced.matches?1:1-Math.exp(-delta*5.7);
      const closeZoom=width<680?2.22:2.16;
      focus.x+=((point?.[0]??0)-focus.x)*easing;
      focus.y+=((point?1.03:.77)-focus.y)*easing;
      focus.z+=((point?.[2]??0)-focus.z)*easing;
      focus.zoom+=((point?closeZoom:1)-focus.zoom)*easing;
      focus.yaw+=((point ? (point[0]>0 ? -.26 : .36) : .27)-focus.yaw)*easing;
      const pitch=point ? (point===treatment ? .74 : .66) : .79;
      focus.pitch+=(pitch-focus.pitch)*easing;
      const marks=renderStudio(ctx,width,height,reduced.matches?3.1:elapsed,reduced.matches?0:turn,focus);
      marks.forEach(([x,y],i)=>{
        const label=anchors.current[i];
        if(!label)return;
        const margin=width<680?72:85;
        const left=Math.max(margin,Math.min(width-margin,x));
        label.style.left=left+"px";
        const closeTop=Math.min(height*.39,height-170);
        const top=Math.max(82,Math.min(active===i&&width<680?Math.max(82,closeTop):height-76,y-15));
        label.style.top=top+"px";
        label.style.setProperty("--panel-shift",Math.max(144,Math.min(width-144,left))-left+"px");
        label.dataset.rise=String(top>height*.47&&width>=680);
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
  ".thp-labels:has([data-open=true]){display:flex;justify-content:center;align-items:flex-end;gap:clamp(4px,1.3vw,14px);padding:0 6px max(18px,env(safe-area-inset-bottom))}.thp-labels:has([data-open=true]) .thp-anchor:not([data-open=true]){position:relative;inset:auto!important;transform:none}.thp-labels:has([data-open=true]) .thp-anchor:not([data-open=true])::after{display:none}",
  ".thp-anchor::after{content:'';height:14px;width:1px;background:#ffe6baa6;position:absolute;top:100%;left:50%;pointer-events:none}",
  ".thp-heading{position:relative;display:flex;align-items:center;gap:.62rem;border-radius:99px;border:1px solid #f7d8ab91;background:#29201bed;color:#ffecd1;padding:.38rem .45rem .38rem .76rem;min-height:42px;white-space:nowrap;font-size:.83rem;font-weight:680;cursor:pointer;box-shadow:0 5px 18px #24150f67}",
  ".thp-heading[aria-expanded=true]{background:#f7deba;color:#392821;border-color:#fff0cf}.thp-toggle{height:22px;width:22px;display:grid;place-items:center;border-radius:50%;background:#b4916760;font-size:1rem;line-height:1}",
  ".thp-services{position:absolute;top:0;left:calc(100% + 9px);list-style:none;width:max-content;min-width:155px;max-height:min(320px,42svh);overflow:auto;margin:0;padding:.24rem .65rem;background:#fff0dc;color:#3a2a23;border:1px solid #fff6e6;border-radius:13px;box-shadow:0 10px 32px #28181171;font-size:.84rem;animation:thp-film-in .23s ease both}",
  ".thp-anchor[data-side=left] .thp-services{left:auto;right:calc(100% + 9px)}.thp-anchor[data-rise=true] .thp-services{top:auto;bottom:0}.thp-services ul{list-style:none;margin:0;padding:0}.thp-services li+li{border-top:1px solid #d2b99e9c}.thp-service-list button{display:flex;align-items:center;justify-content:space-between;gap:.7rem;text-align:left;width:100%;font:inherit;background:none;border:0;color:inherit;padding:.47rem .1rem;cursor:pointer}.thp-service-list button:hover{background:#ead4bb}.thp-service-list button span{font-size:1rem;color:#6d4c3b}.thp-anchor[data-detail=true] .thp-services{width:min(265px,calc(100vw - 30px));padding:.73rem .8rem}.thp-service-detail h2{font:650 1.08rem system-ui;margin:.36rem 0}.thp-service-detail p{font-size:.79rem;line-height:1.4;margin:.27rem 0 .5rem}.thp-service-price{display:flex;align-items:baseline;gap:.6rem;margin:.52rem 0;color:#402b1e}.thp-service-price strong{font-size:1.06rem}.thp-service-price span{font-size:.76rem}.thp-back{border:0;background:none;color:#624332;font:650 .72rem system-ui;text-decoration:underline;text-underline-offset:3px;padding:.25rem 0;cursor:pointer}.thp-reserve{background:#37291f;color:#fff0dc;text-decoration:none;font:700 .82rem system-ui;padding:.57rem .75rem;border-radius:999px;display:inline-block}.thp-service-detail .thp-note{font-size:.69rem;color:#624838;margin:.42rem 0 0}.thp-services :is(a,button):focus-visible{outline:2px solid #80583a;outline-offset:2px}",
  ".thp-film :is(a,button):focus-visible{outline:2px solid white;outline-offset:4px}@keyframes thp-film-in{from{opacity:0;translate:0 5px}to{opacity:1;translate:0 0}}",
  "@media(max-width:680px){.thp-heading{min-height:38px;font-size:.7rem;padding:.31rem .36rem .31rem .52rem;gap:.33rem}.thp-toggle{height:18px;width:18px;font-size:.85rem}.thp-labels:has([data-open=true]) .thp-anchor:not([data-open=true]) .thp-heading{gap:.15rem;padding-inline:.44rem}.thp-labels:has([data-open=true]) .thp-anchor:not([data-open=true]) .thp-toggle{display:none}.thp-anchor[data-open=true]{z-index:3}.thp-services,.thp-anchor[data-side=left] .thp-services{position:fixed;top:calc(100% + 10px);left:calc(50% + var(--panel-shift,0px));right:auto;translate:-50% 0;font-size:.77rem;max-height:45svh;overflow:auto;animation:none}.thp-anchor[data-rise=true] .thp-services{top:auto;bottom:calc(100% + 8px)}}",
  "@media(prefers-reduced-motion:reduce){.thp-services{animation:none}.thp-film canvas{cursor:default}}"
].join("\n");

