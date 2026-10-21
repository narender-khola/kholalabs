// English deck content + MASTER LIST for the other languages' extra decks.
// Row: [word, transliteration, meaning, emoji]. English rows leave translit/meaning empty.
// Other languages translate these rows in the same order with the same emoji (art is keyed by emoji).
const r = (word, emoji) => [word, '', '', emoji];
export default {
  family: [r('Mother','👩'), r('Father','👨'), r('Grandmother','👵'), r('Grandfather','👴'), r('Brother','👦'), r('Sister','👧'), r('Uncle','🧔'), r('Aunt','👩‍🦱'), r('Baby','👶')],
  animals: [r('Dog','🐕'), r('Cat','🐈'), r('Cow','🐄'), r('Elephant','🐘'), r('Lion','🦁'), r('Monkey','🐒'), r('Horse','🐎'), r('Fish','🐟'), r('Bird','🐦'), r('Rabbit','🐇'),
    // extras (other languages translate from here)
    r('Goat','🐐'), r('Tiger','🐅'), r('Bear','🐻'), r('Snake','🐍'), r('Peacock','🦚'), r('Parrot','🦜'), r('Camel','🐫'), r('Frog','🐸'), r('Ant','🐜'), r('Butterfly','🦋'), r('Duck','🦆'), r('Hen','🐔')],
  food: [r('Water','💧'), r('Milk','🥛'), r('Rice','🍚'), r('Roti','🫓'), r('Mango','🥭'), r('Banana','🍌'), r('Apple','🍎'), r('Egg','🥚'),
    // extras
    r('Tea','☕'), r('Yogurt','🥣'), r('Butter','🧈'), r('Sweets','🍬'), r('Bread','🍞'), r('Lentils (dal)','🍲'), r('Salt','🧂'), r('Honey','🍯'), r('Biscuit','🍪'), r('Juice','🧃')],
  colours: [r('Red','🔴'), r('Blue','🔵'), r('Green','🟢'), r('Yellow','🟡'), r('Orange','🟠'), r('Purple','🟣'), r('Pink','🩷'), r('Black','⚫'), r('White','⚪'), r('Brown','🟤')],
  numbers: [r('One','1️⃣'), r('Two','2️⃣'), r('Three','3️⃣'), r('Four','4️⃣'), r('Five','5️⃣'), r('Six','6️⃣'), r('Seven','7️⃣'), r('Eight','8️⃣'), r('Nine','9️⃣'), r('Ten','🔟')],
  body: [r('Eye','👁️'), r('Nose','👃'), r('Ear','👂'), r('Mouth','👄'), r('Tooth','🦷'), r('Tongue','👅'), r('Hair','💇'), r('Hand','✋'), r('Finger','☝️'), r('Leg','🦵'), r('Foot','🦶')],
  fruitveg: [r('Orange','🍊'), r('Grapes','🍇'), r('Watermelon','🍉'), r('Pineapple','🍍'), r('Coconut','🥥'), r('Lemon','🍋'), r('Potato','🥔'), r('Tomato','🍅'), r('Onion','🧅'), r('Carrot','🥕'), r('Corn','🌽'), r('Cucumber','🥒'), r('Brinjal','🍆'), r('Chilli','🌶️')],
  home: [r('House','🏠'), r('Door','🚪'), r('Window','🪟'), r('Bed','🛏️'), r('Chair','🪑'), r('Spoon','🥄'), r('Plate','🍽️'), r('Book','📖'), r('Key','🔑'), r('Clock','🕰️'), r('Light','💡'), r('Phone','📱'), r('Toothbrush','🪥'), r('Soap','🧼')],
  clothes: [r('Shirt','👕'), r('Trousers','👖'), r('Dress','👗'), r('Sari','🥻'), r('Shoes','👟'), r('Socks','🧦'), r('Cap','🧢'), r('Glasses','👓'), r('School bag','🎒'), r('Scarf','🧣')],
  vehicles: [r('Car','🚗'), r('Bus','🚌'), r('Train','🚆'), r('Aeroplane','✈️'), r('Bicycle','🚲'), r('Scooter','🛵'), r('Auto-rickshaw','🛺'), r('Boat','⛵'), r('Truck','🚚'), r('Road','🛣️')],
  nature: [r('Sun','☀️'), r('Moon','🌙'), r('Star','🌟'), r('Cloud','☁️'), r('Rain','🌧️'), r('Rainbow','🌈'), r('Tree','🌳'), r('Flower','🌸'), r('Leaf','🍃'), r('Mountain','⛰️'), r('River','🏞️'), r('Wind','🌬️')],
  actions: [r('Eat','😋'), r('Drink','🥤'), r('Sleep','😴'), r('Wake up','⏰'), r('Walk','🚶'), r('Run','🏃'), r('Sit','🧘'), r('Jump','🤸'), r('Play','⚽'), r('Read','📚'), r('Write','✍️'), r('Bathe','🛀'), r('Dance','💃'), r('Sing','🎤')],
  feelings: [r('Happy','😊'), r('Sad','😢'), r('Angry','😠'), r('Scared','😨'), r('Tired','🥱'), r('Hungry','🤤'), r('Sleepy','😪'), r('Sick','🤒'), r('Shy','🙈'), r('Surprised','😮'), r('Love','❤️')],
  opposites: [r('Big','🐘'), r('Small','🐭'), r('Hot','🔥'), r('Cold','🧊'), r('Up','⬆️'), r('Down','⬇️'), r('Fast','🐆'), r('Slow','🐢'), r('Open','🔓'), r('Closed','🔒'), r('Day','🌞'), r('Night','🌃'), r('Full','🔋'), r('Empty','🪫')],
  phrases: [r('Hello','🙋'), r('Bye-bye','👋'), r('Thank you','🙏'), r('Sorry','😔'), r('Please','🥺'), r('Yes','👍'), r('No','🙅'), r('Good morning','🌅'), r('Good night','🌛'), r('I love you','🥰'), r('Well done!','👏'), r("Let's eat",'🍛')],
};
