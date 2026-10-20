// Language + starter-deck content. Each row: [native word, transliteration, English meaning, emoji]
// NOTE: kinship terms vary by region/family — users can edit any card. Have a native speaker review before launch.

export const LANGS = {
  hi: { name: 'Hindi',   native: 'हिन्दी',  font: "'Baloo 2'",        tts: 'hi-IN' },
  mr: { name: 'Marathi', native: 'मराठी',   font: "'Baloo 2'",        tts: 'mr-IN' },
  gu: { name: 'Gujarati',native: 'ગુજરાતી', font: "'Baloo Bhai 2'",   tts: 'gu-IN' },
  pa: { name: 'Punjabi', native: 'ਪੰਜਾਬੀ',  font: "'Baloo Paaji 2'",  tts: 'pa-IN' },
  ta: { name: 'Tamil',   native: 'தமிழ்',   font: "'Baloo Thambi 2'", tts: 'ta-IN' },
  te: { name: 'Telugu',  native: 'తెలుగు',  font: "'Baloo Tammudu 2'",tts: 'te-IN' },
  bn: { name: 'Bengali', native: 'বাংলা',   font: "'Baloo Da 2'",     tts: 'bn-IN' },
};

export const TEMPLATES = [
  { key: 'family',  title: 'My Family', emoji: '👵', pro: false, blurb: 'Dadi, Nani, Chacha… with real photos' },
  { key: 'animals', title: 'Animals',   emoji: '🐘',     pro: false, blurb: '10 everyday animals' },
  { key: 'food',    title: 'Food',      emoji: '🥭',     pro: true,  blurb: 'Doodh, roti, aam…' },
];

const W = {
  hi: {
    family: [
      ['माँ','maa','Mother','👩'],['पापा','papa','Father','👨'],
      ['दादी','daadi',"Grandmother (father's mother)",'👵'],['दादा','daada',"Grandfather (father's father)",'👴'],
      ['नानी','naani',"Grandmother (mother's mother)",'👵'],['नाना','naana',"Grandfather (mother's father)",'👴'],
      ['भैया','bhaiya','Elder brother','👦'],['दीदी','didi','Elder sister','👧'],
      ['चाचा','chaacha',"Uncle (father's younger brother)",'🧔'],['चाची','chaachi',"Aunt (chacha's wife)",'👩‍🦱'],
      ['मामा','maama',"Uncle (mother's brother)",'🧔'],['मामी','maami',"Aunt (mama's wife)",'👩‍🦱'],
      ['बुआ','bua',"Aunt (father's sister)",'👩‍🦰'],['मौसी','mausi',"Aunt (mother's sister)",'👩‍🦰'],
    ],
    animals: [
      ['कुत्ता','kutta','Dog','🐕'],['बिल्ली','billi','Cat','🐈'],['गाय','gaay','Cow','🐄'],['हाथी','haathi','Elephant','🐘'],
      ['शेर','sher','Lion','🦁'],['बंदर','bandar','Monkey','🐒'],['घोड़ा','ghoda','Horse','🐎'],['मछली','machhli','Fish','🐟'],
      ['चिड़िया','chidiya','Bird','🐦'],['खरगोश','khargosh','Rabbit','🐇'],
    ],
    food: [
      ['पानी','paani','Water','💧'],['दूध','doodh','Milk','🥛'],['चावल','chaawal','Rice','🍚'],['रोटी','roti','Flatbread','🫓'],
      ['आम','aam','Mango','🥭'],['केला','kela','Banana','🍌'],['सेब','seb','Apple','🍎'],['अंडा','anda','Egg','🥚'],
    ],
  },
  mr: {
    family: [
      ['आई','aai','Mother','👩'],['बाबा','baba','Father','👨'],['आजी','aaji','Grandmother','👵'],['आजोबा','aajoba','Grandfather','👴'],
      ['दादा','dada','Elder brother','👦'],['ताई','tai','Elder sister','👧'],
      ['काका','kaka',"Uncle (father's brother)",'🧔'],['काकू','kaku',"Aunt (kaka's wife)",'👩‍🦱'],
      ['मामा','mama',"Uncle (mother's brother)",'🧔'],['मामी','mami',"Aunt (mama's wife)",'👩‍🦱'],
      ['आत्या','aatya',"Aunt (father's sister)",'👩‍🦰'],['मावशी','maavshi',"Aunt (mother's sister)",'👩‍🦰'],
    ],
    animals: [
      ['कुत्रा','kutra','Dog','🐕'],['मांजर','maanjar','Cat','🐈'],['गाय','gaay','Cow','🐄'],['हत्ती','hatti','Elephant','🐘'],
      ['सिंह','sinha','Lion','🦁'],['माकड','maakad','Monkey','🐒'],['घोडा','ghoda','Horse','🐎'],['मासा','maasa','Fish','🐟'],
      ['पक्षी','pakshi','Bird','🐦'],['ससा','sasa','Rabbit','🐇'],
    ],
    food: [
      ['पाणी','paani','Water','💧'],['दूध','doodh','Milk','🥛'],['भात','bhaat','Rice','🍚'],['पोळी','poli','Flatbread','🫓'],
      ['आंबा','aamba','Mango','🥭'],['केळं','kela','Banana','🍌'],['सफरचंद','safarchand','Apple','🍎'],['अंडं','anda','Egg','🥚'],
    ],
  },
  gu: {
    family: [
      ['મમ્મી','mammi','Mother','👩'],['પપ્પા','pappa','Father','👨'],
      ['દાદી','daadi',"Grandmother (father's mother)",'👵'],['દાદા','daada',"Grandfather (father's father)",'👴'],
      ['નાની','naani',"Grandmother (mother's mother)",'👵'],['નાના','naana',"Grandfather (mother's father)",'👴'],
      ['મોટાભાઈ','motabhai','Elder brother','👦'],['બેન','ben','Sister','👧'],
      ['કાકા','kaka',"Uncle (father's brother)",'🧔'],['કાકી','kaki',"Aunt (kaka's wife)",'👩‍🦱'],
      ['મામા','mama',"Uncle (mother's brother)",'🧔'],['મામી','mami',"Aunt (mama's wife)",'👩‍🦱'],
      ['ફોઈ','foi',"Aunt (father's sister)",'👩‍🦰'],['માસી','maasi',"Aunt (mother's sister)",'👩‍🦰'],
    ],
    animals: [
      ['કૂતરો','kutro','Dog','🐕'],['બિલાડી','bilaadi','Cat','🐈'],['ગાય','gaay','Cow','🐄'],['હાથી','haathi','Elephant','🐘'],
      ['સિંહ','sinh','Lion','🦁'],['વાંદરો','vaandro','Monkey','🐒'],['ઘોડો','ghodo','Horse','🐎'],['માછલી','maachhli','Fish','🐟'],
      ['પક્ષી','pakshi','Bird','🐦'],['સસલું','saslu','Rabbit','🐇'],
    ],
    food: [
      ['પાણી','paani','Water','💧'],['દૂધ','doodh','Milk','🥛'],['ભાત','bhaat','Rice','🍚'],['રોટલી','rotli','Flatbread','🫓'],
      ['કેરી','keri','Mango','🥭'],['કેળું','kelu','Banana','🍌'],['સફરજન','safarjan','Apple','🍎'],['ઈંડું','indu','Egg','🥚'],
    ],
  },
  pa: {
    family: [
      ['ਮਾਂ','maa','Mother','👩'],['ਪਾਪਾ','papa','Father','👨'],
      ['ਦਾਦੀ','daadi',"Grandmother (father's mother)",'👵'],['ਦਾਦਾ','daada',"Grandfather (father's father)",'👴'],
      ['ਨਾਨੀ','naani',"Grandmother (mother's mother)",'👵'],['ਨਾਨਾ','naana',"Grandfather (mother's father)",'👴'],
      ['ਵੀਰ','veer','Brother','👦'],['ਭੈਣ','bhain','Sister','👧'],
      ['ਚਾਚਾ','chaacha',"Uncle (father's younger brother)",'🧔'],['ਤਾਇਆ','taaya',"Uncle (father's elder brother)",'🧔'],
      ['ਮਾਮਾ','maama',"Uncle (mother's brother)",'🧔'],['ਭੂਆ','bhua',"Aunt (father's sister)",'👩‍🦰'],
      ['ਮਾਸੀ','maasi',"Aunt (mother's sister)",'👩‍🦰'],
    ],
    animals: [
      ['ਕੁੱਤਾ','kutta','Dog','🐕'],['ਬਿੱਲੀ','billi','Cat','🐈'],['ਗਾਂ','gaan','Cow','🐄'],['ਹਾਥੀ','haathi','Elephant','🐘'],
      ['ਸ਼ੇਰ','sher','Lion','🦁'],['ਬਾਂਦਰ','baandar','Monkey','🐒'],['ਘੋੜਾ','ghoda','Horse','🐎'],['ਮੱਛੀ','machhi','Fish','🐟'],
      ['ਚਿੜੀ','chidi','Bird','🐦'],['ਖਰਗੋਸ਼','khargosh','Rabbit','🐇'],
    ],
    food: [
      ['ਪਾਣੀ','paani','Water','💧'],['ਦੁੱਧ','duddh','Milk','🥛'],['ਚੌਲ','chaul','Rice','🍚'],['ਰੋਟੀ','roti','Flatbread','🫓'],
      ['ਅੰਬ','amb','Mango','🥭'],['ਕੇਲਾ','kela','Banana','🍌'],['ਸੇਬ','seb','Apple','🍎'],['ਆਂਡਾ','aanda','Egg','🥚'],
    ],
  },
  ta: {
    family: [
      ['அம்மா','amma','Mother','👩'],['அப்பா','appa','Father','👨'],['பாட்டி','paatti','Grandmother','👵'],['தாத்தா','thaatha','Grandfather','👴'],
      ['அண்ணா','anna','Elder brother','👦'],['அக்கா','akka','Elder sister','👧'],['தம்பி','thambi','Younger brother','👦'],['தங்கை','thangai','Younger sister','👧'],
      ['பெரியப்பா','periyappa',"Uncle (father's elder brother)",'🧔'],['சித்தப்பா','chithappa',"Uncle (father's younger brother)",'🧔'],
      ['மாமா','maama',"Uncle (mother's brother)",'🧔'],['அத்தை','athai',"Aunt (father's sister)",'👩‍🦰'],['சித்தி','chithi',"Aunt (mother's younger sister)",'👩‍🦰'],
    ],
    animals: [
      ['நாய்','naai','Dog','🐕'],['பூனை','poonai','Cat','🐈'],['பசு','pasu','Cow','🐄'],['யானை','yaanai','Elephant','🐘'],
      ['சிங்கம்','singam','Lion','🦁'],['குரங்கு','kurangu','Monkey','🐒'],['குதிரை','kuthirai','Horse','🐎'],['மீன்','meen','Fish','🐟'],
      ['பறவை','paravai','Bird','🐦'],['முயல்','muyal','Rabbit','🐇'],
    ],
    food: [
      ['தண்ணீர்','thanneer','Water','💧'],['பால்','paal','Milk','🥛'],['சோறு','soru','Rice','🍚'],['சப்பாத்தி','chappathi','Flatbread','🫓'],
      ['மாம்பழம்','maambazham','Mango','🥭'],['வாழைப்பழம்','vaazhaippazham','Banana','🍌'],['ஆப்பிள்','aappil','Apple','🍎'],['முட்டை','muttai','Egg','🥚'],
    ],
  },
  te: {
    family: [
      ['అమ్మ','amma','Mother','👩'],['నాన్న','naanna','Father','👨'],
      ['నాయనమ్మ','naayanamma',"Grandmother (father's mother)",'👵'],['అమ్మమ్మ','ammamma',"Grandmother (mother's mother)",'👵'],['తాత','thaatha','Grandfather','👴'],
      ['అన్న','anna','Elder brother','👦'],['అక్క','akka','Elder sister','👧'],['తమ్ముడు','thammudu','Younger brother','👦'],['చెల్లి','chelli','Younger sister','👧'],
      ['బాబాయ్','baabaay',"Uncle (father's younger brother)",'🧔'],['పిన్ని','pinni',"Aunt (mother's younger sister)",'👩‍🦱'],
      ['మావయ్య','maavayya',"Uncle (mother's brother)",'🧔'],['అత్త','attha',"Aunt (father's sister)",'👩‍🦰'],
    ],
    animals: [
      ['కుక్క','kukka','Dog','🐕'],['పిల్లి','pilli','Cat','🐈'],['ఆవు','aavu','Cow','🐄'],['ఏనుగు','enugu','Elephant','🐘'],
      ['సింహం','simham','Lion','🦁'],['కోతి','kothi','Monkey','🐒'],['గుర్రం','gurram','Horse','🐎'],['చేప','chepa','Fish','🐟'],
      ['పక్షి','pakshi','Bird','🐦'],['కుందేలు','kundelu','Rabbit','🐇'],
    ],
    food: [
      ['నీళ్ళు','neellu','Water','💧'],['పాలు','paalu','Milk','🥛'],['అన్నం','annam','Rice','🍚'],['రొట్టె','rotte','Flatbread','🫓'],
      ['మామిడి పండు','maamidi pandu','Mango','🥭'],['అరటి పండు','arati pandu','Banana','🍌'],['ఆపిల్','aapil','Apple','🍎'],['గుడ్డు','guddu','Egg','🥚'],
    ],
  },
  bn: {
    family: [
      ['মা','maa','Mother','👩'],['বাবা','baba','Father','👨'],
      ['ঠাকুমা','thakuma',"Grandmother (father's mother)",'👵'],['ঠাকুরদা','thakurda',"Grandfather (father's father)",'👴'],
      ['দিদা','dida',"Grandmother (mother's mother)",'👵'],['দাদু','dadu',"Grandfather (mother's father)",'👴'],
      ['দাদা','dada','Elder brother','👦'],['দিদি','didi','Elder sister','👧'],
      ['কাকা','kaka',"Uncle (father's brother)",'🧔'],['কাকিমা','kakima',"Aunt (kaka's wife)",'👩‍🦱'],
      ['মামা','mama',"Uncle (mother's brother)",'🧔'],['মামী','mami',"Aunt (mama's wife)",'👩‍🦱'],
      ['পিসি','pishi',"Aunt (father's sister)",'👩‍🦰'],['মাসি','mashi',"Aunt (mother's sister)",'👩‍🦰'],
    ],
    animals: [
      ['কুকুর','kukur','Dog','🐕'],['বিড়াল','biral','Cat','🐈'],['গরু','goru','Cow','🐄'],['হাতি','hati','Elephant','🐘'],
      ['সিংহ','singho','Lion','🦁'],['বানর','banor','Monkey','🐒'],['ঘোড়া','ghora','Horse','🐎'],['মাছ','machh','Fish','🐟'],
      ['পাখি','pakhi','Bird','🐦'],['খরগোশ','khorgosh','Rabbit','🐇'],
    ],
    food: [
      ['জল','jol','Water','💧'],['দুধ','dudh','Milk','🥛'],['ভাত','bhaat','Rice','🍚'],['রুটি','ruti','Flatbread','🫓'],
      ['আম','aam','Mango','🥭'],['কলা','kola','Banana','🍌'],['আপেল','apel','Apple','🍎'],['ডিম','dim','Egg','🥚'],
    ],
  },
};

// Built-in art, keyed by a card's emoji, so it also works for decks saved before art existed
// and for custom cards. Animals/food reuse Khola Labs' phonics-pack illustrations; family = flat SVG avatars.
// Rebuild with `node tools/art.mjs`. Anything not listed falls back to the emoji.
const A = (n, ext = 'svg') => `img/art/${n}.${ext}`;
export const ART = {
  '👩': A('mother'), '👨': A('father'), '👵': A('grandmother'), '👴': A('grandfather'),
  '👦': A('boy'), '👧': A('girl'), '🧔': A('uncle'), '👩‍🦱': A('aunt'), '👩‍🦰': A('aunt2'),
  '🐈': A('cat', 'webp'), '🐘': A('elephant', 'webp'), '🦁': A('lion', 'webp'), '🐟': A('fish', 'webp'),
  '🐦': A('bird', 'webp'), '🐇': A('rabbit', 'webp'), '🥭': A('mango', 'webp'), '🍎': A('apple', 'webp'), '🥚': A('egg', 'webp'),
};
export const artFor = (emoji) => ART[(emoji || '').trim()] || null;

export function templateCards(lang, key) {
  return (W[lang]?.[key] || []).map(([word, translit, meaning, emoji]) => ({ word, translit, meaning, emoji }));
}
