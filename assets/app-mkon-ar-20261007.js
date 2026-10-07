'use strict';

const copy = {
  ar: {
    title:'تجربة | تطبيقات وألعاب من السعودية', skip:'انتقل إلى المحتوى', brandSub:'تطبيقات تستحق التجربة', navLabel:'التنقل الرئيسي', navHome:'الرئيسية', navApps:'تطبيقاتنا', navAbout:'عن تجربة', navContact:'تواصل معنا', filterLabel:'تصفية التطبيقات', all:'كل التجارب', games:'الألعاب', applications:'التطبيقات', search:'ابحث عن تجربة…', searchLabel:'ابحث عن تطبيق', madeInSaudi:'من السعودية، إلى العالم',
    heroEyebrow:'أهلًا، نحن تجربة', heroLine1:'أفكار من هنا.', heroLine2:'تجارب لكل العالم.', heroDescription:'نصنع تطبيقات وألعابًا تجد مكانها في يومك. من متعة اللعب إلى تفاصيل الحياة، لكل فكرة تجربة.', explore:'اكتشف تطبيقاتنا', appleProfile:'ملفنا في Apple', heroFootnote:'تطبيقات. ألعاب. والكثير من الشغف.', followX:'تابعنا على X', verified:'حساب أعمال موثق على X', coverAlt:'هوية تجربة — شركة سعودية مهتمة في مجال التطبيقات', profileBio:'شركة سعودية مهتمة بالتطبيقات والألعاب. هنا نشارككم جديد تجربة.', saudi:'المملكة العربية السعودية',
    selectedTitle:'لكل اهتمام، تجربة.', selectedSub:'مجموعة من أعمالنا، صُنعت لتُكتشف.', viewAll:'استعرض جميع التطبيقات', stripTitle:'الفكرة بداية. التجربة هي الفرق.', stripText:'نؤمن بالتطبيقات التي تضيف شيئًا ليومك، والألعاب التي تمنحك سببًا للعودة. تعرّف على أعمالنا، وكن جزءًا من تجربتنا القادمة.', sayHello:'خلّنا نسمع منك', portfolioEyebrow:'معرض أعمالنا', appsHeading:'تجارب مختلفة. شغف واحد.', appsDescription:'اكتشف تطبيقاتنا وألعابنا، واختر التجربة الأقرب لك.', emptySearch:'ما لقينا تطبيقًا بهذا الاسم. جرّب كلمة ثانية.', resetSearch:'عرض جميع التطبيقات', developerTitle:'تجربة على App Store', developerDescription:'تابع التطبيقات والإصدارات المتاحة في ملف تجربة للمطوّر.', openDeveloper:'زيارة ملف المطوّر',
    aboutEyebrow:'حكايتنا تبدأ بتجربة', aboutLine1:'من فكرة صغيرة،', aboutLine2:'إلى عالم في جيبك.', aboutBody:'تجربة شركة سعودية مهتمة بتطوير التطبيقات والألعاب. تجمع أعمالنا بين اللعب، والرياضة، والذكاء الاصطناعي، والحياة اليومية. نحب أن نأخذ الفكرة خطوة أبعد، ونترك لك متعة اكتشافها.', stayClose:'خلك قريب من التجربة.', stayCloseBody:'جديد تطبيقاتنا، وتحديثاتنا، وما نعمل عليه. تابع حسابنا الرسمي على X.',
    contactEyebrow:'باب التجربة مفتوح', contactLine1:'عندك كلمة؟', contactLine2:'نحب نسمعها.', contactDescription:'ملاحظة على تطبيق، سؤال، أو فكرة حاب تشاركها. اكتب لنا، ورسالتك توصل لفريق تجربة.', supportEmail:'بريد الدعم', formTitle:'رسالة جديدة', yourName:'اسمك', namePlaceholder:'كيف نناديك؟', yourEmail:'بريدك الإلكتروني', aboutMessage:'بخصوص', subjectGeneral:'استفسار عام', aljnyName:'الجني', caloriesName:'سعراتي', yourMessage:'رسالتك', messagePlaceholder:'احكِ لنا…', privacyNote:'نستخدم اسمك وبريدك للرد على رسالتك فقط.', sendMessage:'إرسال الرسالة', sending:'جارٍ الإرسال…', sentTitle:'شكرًا، تم إرسال رسالتك.', sentBody:'وصل طلبك إلى خدمة البريد. نرد عليك عبر البريد الذي كتبته.', sendAnother:'كتابة رسالة أخرى', rights:'جميع الحقوق محفوظة.', findUs:'تجدنا هنا', website:'اكتشف اللعبة', sports:'رياضة', ai:'ذكاء اصطناعي', lifestyle:'حياة يومية', resultCount:(n)=>`${n} من ${apps.length} تجارب`,
    errors:{idempotency_conflict:'تغيّرت الرسالة. راجعها واضغط إرسال مرة أخرى.',network:'تعذّر الاتصال. رسالتك ما زالت محفوظة هنا؛ حاول مجددًا.',unavailable:'خدمة الرسائل غير متاحة حاليًا. حاول لاحقًا أو راسل support@tajroba.sa.',validation:'راجع الاسم والبريد والرسالة، ثم حاول مجددًا.',csrf:'انتهت صلاحية النموذج. اضغط إرسال مرة أخرى لتجديده.',rate_limit:'وصلت للحد المؤقت للرسائل. حاول مرة أخرى بعد ساعة.',too_fast:'انتظر لحظة ثم اضغط إرسال.',origin:'تعذّر التحقق من الطلب. افتح الموقع مباشرة وحاول مجددًا.'}
  },
  en: {
    title:'Tajroba | Apps & games, made in Saudi Arabia', skip:'Skip to content', brandSub:'Experiences worth trying', navLabel:'Main navigation', navHome:'Home', navApps:'Our apps', navAbout:'About', navContact:'Contact', filterLabel:'Filter apps', all:'All experiences', games:'Games', applications:'Apps', search:'Find your next experience…', searchLabel:'Search apps', madeInSaudi:'From Saudi Arabia, to the world',
    heroEyebrow:'HELLO, WE ARE TAJROBA', heroLine1:'Ideas born here.', heroLine2:'Experiences for everyone.', heroDescription:'We create apps and games that find a place in your day. From the joy of playing to the everyday, every idea starts an experience.', explore:'Explore our apps', appleProfile:'Our Apple profile', heroFootnote:'Apps. Games. A whole lot of passion.', followX:'Follow us on X', verified:'Verified business account on X', coverAlt:'Tajroba brand — a Saudi company focused on applications', profileBio:'A Saudi company with a passion for apps and games. Follow the latest from Tajroba.', saudi:'Saudi Arabia',
    selectedTitle:'Find your kind of experience.', selectedSub:'A selection of our work, made to be discovered.', viewAll:'View all apps', stripTitle:'An idea is a start. Experience makes it matter.', stripText:'We believe in apps that add something to your day, and games that give you a reason to return. Explore our work and be part of what comes next.', sayHello:'Say hello', portfolioEyebrow:'OUR PORTFOLIO', appsHeading:'Different experiences. One passion.', appsDescription:'Explore our apps and games. Find the experience that feels like you.', emptySearch:'No matching apps. Try a different word.', resetSearch:'Show all apps', developerTitle:'Tajroba on the App Store', developerDescription:'Discover the apps and releases available on our Apple developer profile.', openDeveloper:'Visit developer profile',
    aboutEyebrow:'IT STARTS WITH AN EXPERIENCE', aboutLine1:'From a small idea,', aboutLine2:'to a world in your pocket.', aboutBody:'Tajroba is a Saudi company focused on apps and games. Our portfolio spans gaming, sports, artificial intelligence and everyday life. We love taking an idea a little further, and leaving the discovery to you.', stayClose:'Stay close to what’s next.', stayCloseBody:'Our apps, our updates and what we are working on. Follow our official account on X.',
    contactEyebrow:'LET’S START A CONVERSATION', contactLine1:'Something to share?', contactLine2:'We’re listening.', contactDescription:'Feedback on an app, a question, or an idea you’d like to share. Write to the Tajroba team right here.', supportEmail:'Support email', formTitle:'A new message', yourName:'Your name', namePlaceholder:'What should we call you?', yourEmail:'Email address', aboutMessage:'Regarding', subjectGeneral:'General enquiry', aljnyName:'Aljny', caloriesName:'My Calories', yourMessage:'Your message', messagePlaceholder:'Tell us what’s on your mind…', privacyNote:'We use your name and email only to respond to your message.', sendMessage:'Send message', sending:'Sending…', sentTitle:'Thank you. Your message was sent.', sentBody:'Your request was accepted by the mail service. We’ll reply using the email address you provided.', sendAnother:'Write another message', rights:'All rights reserved.', findUs:'Find us on', website:'Explore the game', sports:'Sports', ai:'AI', lifestyle:'Lifestyle', resultCount:(n)=>`${n} of ${apps.length} experiences`,
    errors:{idempotency_conflict:'The message changed. Review it and press send again.',network:'Could not connect. Your message is still here; please try again.',unavailable:'Messaging is unavailable right now. Please try later or email support@tajroba.sa.',validation:'Check your name, email and message, then try again.',csrf:'This form has expired. Press send again to refresh it.',rate_limit:'You’ve reached the temporary message limit. Please try again in an hour.',too_fast:'Please wait a moment and send again.',origin:'We could not verify this request. Open the website directly and try again.'}
  }
};

const apps = [
  {id:'almkon',name:{ar:'المكون',en:'المكون'},artName:'المكون',tagline:'HUNT. COMPETE. EXPLORE.',type:'games',category:'games',icon:'almkon-20261007.jpg',bg:'#f0e5ce',ink:'#6a450c',description:{ar:'صيد بالواقع المعزز ومواجهات أونلاين في القرية النجدية. طوّر مستواك ونافس على الصدارة.',en:'Augmented reality hunting and online matches in a Najdi village. Level up and compete for the top.'},url:'https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D9%83%D9%88%D9%86/id6815615707',link:'store',keywords:'المكون مكون صياد صيد ضب ضبان نجد حرب اونلاين almkon almakoon mkon dhab hunting ar online'},
  {id:'kora',name:{ar:'كوره',en:'KORA'},artName:'KORA',tagline:'BEACH FOOTBALL',type:'games',category:'games',icon:'kora.png',bg:'#e8eee6',ink:'#396553',description:{ar:'كرة قدم شاطئية، تسديدات مقوّسة، ومهارات في الهواء. العب بأسلوبك وطوّر بطلك.',en:'Beach football, curved shots and aerial skills. Play your way and develop your hero.'},url:'https://kora.tajroba.sa/',link:'website',keywords:'kora كورة كوره كرة القدم شاطئ football beach'},
  {id:'overcity',name:{ar:'OverCity',en:'OverCity'},artName:'OverCity',tagline:'OWN THE CITY',type:'games',category:'games',icon:'overcity.jpg',bg:'#f0e9e3',ink:'#685044',description:{ar:'مدينة تنتظر من يسيطر عليها. لعبة استراتيجية بأجواء المافيا لبناء نفوذك وصناعة اسمك.',en:'A city waiting to be claimed. Build your influence in a mafia-themed strategy game.'},url:'https://apps.apple.com/sa/app/overcity/id6759204862',link:'store',keywords:'overcity mafia مافيا استراتيجية اوفر سيتي'},
  {id:'kortna',name:{ar:'كورتنا',en:'Kortna'},artName:'Kortna',tagline:'BE PART OF THE GAME',type:'apps',category:'sports',icon:'kortna.jpg',bg:'#e5ecf0',ink:'#426a79',description:{ar:'لجمهور الدوري السعودي. توقّع نتائج المباريات، نافس في الترتيب، وشارك حماس الكرة.',en:'For Saudi football fans. Predict match results, climb the rankings and share the excitement.'},url:'https://apps.apple.com/sa/app/kortna/id6753901469',link:'store',keywords:'kortna كورتنا كرتنا كرة دوري سعودي football sports'},
  {id:'aljny',name:{ar:'الجني',en:'Aljny'},artName:'Aljny',tagline:'A LITTLE EVERYDAY HELP',type:'apps',category:'ai',icon:'aljny.jpg',bg:'#ece8f4',ink:'#715597',description:{ar:'مساعدك بالذكاء الاصطناعي. اسأل، اكتب، وخذ خطوة أسهل في مهامك اليومية.',en:'Your AI assistant for questions, writing and a helping hand with everyday tasks.'},url:'https://apps.apple.com/sa/app/aljny-%D8%A7%D9%84%D8%AC%D9%86%D9%8A/id1672793991',link:'store',keywords:'aljny الجني ذكاء اصطناعي ai assistant'},
  {id:'calories',name:{ar:'سعراتي',en:'My Calories'},artName:'سعراتي',tagline:'SMALL STEPS, EVERY DAY',type:'apps',category:'lifestyle',icon:'calories.jpg',bg:'#edf0e1',ink:'#77834f',description:{ar:'افهم يومك الغذائي. تتبّع السعرات والعناصر الغذائية، حلّل صورة وجبتك، وتابع أهدافك.',en:'Know your daily nutrition. Track calories and nutrients, analyse meal photos and follow your goals.'},url:'https://apps.apple.com/sa/app/%D8%B3%D8%B9%D8%B1%D8%A7%D8%AA%D9%8A/id6754000641',link:'store',keywords:'سعراتي سعرات calories health nutrition صحة غذاء'}
];

let language = 'ar';
try { if (localStorage.getItem('tajroba-language') === 'en') language = 'en'; } catch {}
let route = 'home';
let filter = 'all';
let csrfToken = null;
let tokenRequest = null;
let sending = false;
let pendingSubmission = null;
let feedbackCode = null;
const main = document.querySelector('#main');
const search = document.querySelector('#app-search');
const form = document.querySelector('#contact-form');
const routes = ['home','apps','about','contact'];
const scrollPositions = Object.fromEntries(routes.map(r=>[r,0]));
const icon = (name, size=16, cls='') => `<svg width="${size}" height="${size}" class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
function card(app,index) {
  const t=copy[language];
  return `<article class="project-card" aria-label="${app.name[language]}"><div class="project-art" style="--art-bg:${app.bg};--art-ink:${app.ink}"><img class="app-art-icon" src="assets/images/${app.icon}" width="512" height="512" alt="" loading="lazy"><span class="project-art-label" dir="ltr">${app.artName}<small>${app.tagline}</small></span></div><div class="project-content"><div class="project-title-row"><h3 class="project-title">${app.name[language]}</h3><span class="project-category">${t[app.category]}</span></div><p class="project-description">${app.description[language]}</p><div class="project-links"><a class="store-link" href="${app.url}" target="_blank" rel="noopener noreferrer" aria-label="${app.name[language]} — ${app.link==='store'?'App Store':t.website}">${icon(app.link==='store'?'apple':'globe',17)}<span>${app.link==='store'?'App Store':t.website}</span>${icon('external',12)}</a><span class="project-number">${String(index+1).padStart(2,'0')} / ${String(apps.length).padStart(2,'0')}</span></div></div></article>`;
}
function normalize(value){return value.normalize('NFKD').replace(/[\u064B-\u065F\u0300-\u036f]/g,'').replace(/[أإآ]/g,'ا').toLowerCase().trim();}
function renderApps(){
  const query=normalize(search.value);
  const visible=apps.filter(app=>(filter==='all'||app.type===filter)&&normalize(`${app.name.ar} ${app.name.en} ${app.keywords}`).includes(query));
  document.querySelector('#featured-grid').innerHTML=apps.slice(0,3).map(card).join('');
  document.querySelector('#apps-grid').innerHTML=visible.map(app=>card(app,apps.indexOf(app))).join('');
  document.querySelector('#result-count').textContent=copy[language].resultCount(visible.length);
  document.querySelector('#no-results').hidden=visible.length!==0;
  document.querySelectorAll('[data-filter]').forEach(button=>{const active=button.dataset.filter===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
function renderLanguage(){
  const t=copy[language];
  document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';
  document.title=t.title;
  document.querySelector('meta[name="description"]').content=t.profileBio;
  document.querySelectorAll('[data-i18n]').forEach(el=>{if(typeof t[el.dataset.i18n]==='string')el.textContent=t[el.dataset.i18n];});
  for(const [key,attr] of [['i18nLabel','aria-label'],['i18nPlaceholder','placeholder'],['i18nAlt','alt']])document.querySelectorAll(`[data-${key.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}]`).forEach(el=>el.setAttribute(attr,t[el.dataset[key]]));
  const switcher=document.querySelector('#language-switch');switcher.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
  const label=document.querySelector('#language-label');label.textContent=language==='ar'?'English':'العربية';label.lang=language==='ar'?'en':'ar';
  document.querySelector('.brand').setAttribute('aria-label',`Tajroba — ${t.navHome}`);
  document.querySelector('#context-title').textContent=t[route==='contact'?'navContact':'navAbout'];
  document.querySelector('#send-message span').textContent=t[sending?'sending':'sendMessage'];
  if(feedbackCode)showFeedback(feedbackCode);
  renderApps();
}
function showRoute(next,{updateHash=true,focus=false}={}){
  if(!routes.includes(next))next='home';
  scrollPositions[route]=main.scrollTop;
  route=next;
  document.querySelectorAll('.page-panel').forEach(panel=>panel.hidden=panel.id!==`view-${route}`);
  document.querySelectorAll('.nav-link').forEach(link=>{const active=link.dataset.route===route;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  const catalog=['home','apps'].includes(route);
  document.querySelector('#catalog-menu').hidden=!catalog;document.querySelector('#context-menu').hidden=catalog;
  document.querySelector('#context-title').textContent=copy[language][route==='contact'?'navContact':'navAbout'];
  if(updateHash&&location.hash!==`#${route}`)history.pushState(null,'',`#${route}`);
  main.scrollTo({top:scrollPositions[route],behavior:'instant'});
  if(focus)main.focus({preventScroll:true});
  if(route==='contact')loadToken().catch(()=>{});
}
document.querySelectorAll('[data-route]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();showRoute(link.dataset.route,{focus:true});}));
window.addEventListener('popstate',()=>showRoute(location.hash.slice(1),{updateHash:false}));
document.querySelector('#language-switch').addEventListener('click',()=>{language=language==='ar'?'en':'ar';try{localStorage.setItem('tajroba-language',language);}catch{}renderLanguage();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;renderApps();showRoute('apps');main.scrollTo({top:0,behavior:'instant'});}));
search.addEventListener('input',()=>{renderApps();if(route!=='apps')showRoute('apps');});
document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';filter='all';renderApps();search.focus();});
document.querySelector('#current-year').textContent=new Date().getFullYear();

async function loadToken(force=false){
  if(force)csrfToken=null;
  if(csrfToken)return csrfToken;
  if(tokenRequest)return tokenRequest;
  tokenRequest=(async()=>{
    const response=await fetch('contact.php',{credentials:'same-origin',cache:'no-store',headers:{Accept:'application/json'},signal:AbortSignal.timeout(12000)});
    if(!response.ok)throw new Error('unavailable');
    const data=await response.json();
    if(typeof data.csrf!=='string'||!/^[a-f0-9]{64}$/.test(data.csrf))throw new Error('unavailable');
    csrfToken=data.csrf;return csrfToken;
  })();
  try{return await tokenRequest;}finally{tokenRequest=null;}
}
function showFeedback(code){
  feedbackCode=code;const box=document.querySelector('#form-feedback');box.hidden=false;box.textContent=copy[language].errors[code]||copy[language].errors.unavailable;
}
form.addEventListener('submit',async event=>{
  event.preventDefault();if(sending||!form.reportValidity())return;
  const values=Object.fromEntries(new FormData(form));
  const fields=[...form.querySelectorAll('input,select,textarea')];
  fields.forEach(field=>field.disabled=true);
  sending=true;feedbackCode=null;document.querySelector('#form-feedback').hidden=true;
  const button=document.querySelector('#send-message');button.disabled=true;button.querySelector('span').textContent=copy[language].sending;
  try{
    const fingerprint=JSON.stringify([values.name,values.email,values.subject,values.message,values.website]);
    if(!pendingSubmission||pendingSubmission.fingerprint!==fingerprint){
      const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),byte=>byte.toString(16).padStart(2,'0')).join('');
      pendingSubmission={fingerprint,id};
    }
    const token=await loadToken();
    values.csrf=token;values.language=language;values.request_id=pendingSubmission.id;
    const response=await fetch('contact.php',{method:'POST',credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(values),signal:AbortSignal.timeout(30000)});
    const data=await response.json();
    if(!response.ok||data.ok!==true){if(data.code==='csrf'){csrfToken=null;loadToken().catch(()=>{});}if(data.code==='idempotency_conflict')pendingSubmission=null;throw new Error(data.code||'unavailable');}
    form.hidden=true;document.querySelector('#contact-success').hidden=false;
    form.reset();pendingSubmission=null;
  }catch(error){showFeedback(Object.hasOwn(copy[language].errors,error.message)?error.message:'network');}
  finally{sending=false;fields.forEach(field=>field.disabled=false);button.disabled=false;button.querySelector('span').textContent=copy[language].sendMessage;}
});
document.querySelector('#send-another').addEventListener('click',()=>{document.querySelector('#contact-success').hidden=true;form.hidden=false;feedbackCode=null;document.querySelector('#form-feedback').hidden=true;loadToken(true).catch(()=>{});document.querySelector('#contact-name').focus();});
renderLanguage();
showRoute(location.hash.slice(1)||'home',{updateHash:false});
