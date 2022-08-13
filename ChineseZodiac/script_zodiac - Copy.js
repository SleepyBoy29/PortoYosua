function scriptButton() {


    var birthdayM = month.value;
    var birthdayD = day.value;
    //Formatting to get a date as YYYYMMDD
    if(birthdayM<10)
    {
      birthdayM = "0" + month.value;
    }
    if(birthdayD<10)
    {
      birthdayD = "0" + day.value;
    }
    var birthday = year.value + birthdayM + birthdayD;

    //Array to match first day of the chinese year, which sign it is and its element
    var signs =
    [["20990121", "goat", "earth"],
    ["20980201", "horse", "earth"],
    ["20970212", "snake", "fire"],
    ["20960125", "dragon", "fire"],
    ["20950205", "rabbit", "wood"],
    ["20940215", "tiger", "wood"],
    ["20930127", "ox", "water","Hardworking, ambitious, tenacious, and able to endure hardship, with strong sense of justice and keen observational abilities"],
    ["20920207", "rat", "water"],
    ["20910218", "pig", "metal"],
    ["20900130", "dog", "metal"],
    ["20890210", "rooster", "earth"],
    ["20880124", "monkey", "earth"],
    ["20870203", "goat", "fire"],
    ["20860214", "horse", "fire"],
    ["20850126", "snake", "wood"],
    ["20840206", "dragon", "wood"],
    ["20830217", "rabbit", "water"],
    ["20820129", "tiger", "water"],
    ["20810209", "ox", "metal","Characteristics: Hardworking, active, always busy, and popular among friends"],
    ["20800122", "rat", "metal"],
    ["20790202", "pig", "earth"],
    ["20780212", "dog", "earth"],
    ["20770124", "rooster", "fire"],
    ["20760205", "monkey", "fire"],
    ["20750215", "goat", "wood"],
    ["20740127", "horse", "wood"],
    ["20730207", "snake", "water"],
    ["20720219", "dragon", "water"],
    ["20710131", "rabbit", "metal"],
    ["20700211", "tiger", "metal"],
    ["20690123", "ox", "earth","Honest and prudentive, with a strong sense of responsibility"],
    ["20680203", "rat", "earth"],
    ["20670214", "pig", "fire"],
    ["20660126", "dog", "fire"],
    ["20650205", "rooster", "wood"],
    ["20640217", "monkey", "wood"],
    ["20630129", "goat", "water"],
    ["20620209", "horse", "water"],
    ["20610121", "snake", "metal"],
    ["20600202", "dragon", "metal"],
    ["20590212", "rabbit", "earth"],
    ["20580124", "tiger", "earth"],
    ["20570204", "ox", "fire","Short-sighted, selfish, narrow-minded, impersonal, but practical"],
    ["20560215", "rat", "fire"],
    ["20550128", "pig", "wood"],
    ["20540208", "dog", "wood"],
    ["20530219", "rooster", "water"],
    ["20520201", "monkey", "water"],
    ["20510211", "goat", "metal"],
    ["20500123", "horse", "metal"],
    ["20490202", "snake", "earth"],
    ["20480214", "dragon", "earth"],
    ["20470126", "rabbit", "fire"],
    ["20460206", "tiger", "fire"],
    ["20450217", "ox", "wood","Restless, decisive, straightforward, and always ready to defend the weak and helpless"],
    ["20440130", "rat", "wood"],
    ["20430210", "pig", "water"],
    ["20420122", "dog", "water"],
    ["20410201", "rooster", "metal"],
    ["20400212", "monkey", "metal"],
    ["20390124", "goat", "earth"],
    ["20380204", "horse", "earth"],
    ["20370215", "snake", "fire"],
    ["20360128", "dragon", "fire"],
    ["20350208", "rabbit", "wood"],
    ["20340219", "tiger", "wood"],
    ["20330131", "ox", "water","Hardworking, ambitious, tenacious, and able to endure hardship, with strong sense of justice and keen observational abilities"],
    ["20320211", "rat", "water"],
    ["20310123", "pig", "metal"],
    ["20300203", "dog", "metal"],
    ["20290213", "rooster", "earth"],
    ["20280126", "monkey", "earth"],
    ["20270206", "goat", "fire"],
    ["20260217", "horse", "fire"],
    ["20250129", "snake", "wood"],
    ["20240210", "dragon", "wood"],
    ["20230122", "rabbit", "water"],
    ["20220201", "tiger", "water"],
    ["20210212", "ox", "metal","Characteristics: Hardworking, active, always busy, and popular among friends"],
    ["20200125", "rat", "metal"],
    ["20190205", "pig", "earth"],
    ["20180216", "dog", "earth"],
    ["20170128", "rooster", "fire"],
    ["20160208", "monkey", "fire"],
    ["20150219", "goat", "wood"],
    ["20140131", "horse", "wood"],
    ["20130210", "snake", "water"],
    ["20120123", "dragon", "water"],
    ["20110203", "rabbit", "metal"],
    ["20100214", "tiger", "metal"],
    ["20090126", "ox", "earth","Honest and prudentive, with a strong sense of responsibility"],
    ["20080207", "rat", "earth"],
    ["20070218", "pig", "fire"],
    ["20060129", "dog", "fire"],
    ["20050209", "rooster", "wood"],
    ["20040122", "monkey", "wood"],
    ["20030201", "goat", "water"],
    ["20020212", "horse", "water"],
    ["20010124", "snake", "metal"],
    ["20000205", "dragon", "metal"],
    ["19990216", "rabbit", "earth"],
    ["19980128", "tiger", "earth"],
    ["19970207", "ox", "fire","Short-sighted, selfish, narrow-minded, impersonal, but practical"],
    ["19960219", "rat", "fire"],
    ["19950131", "pig", "wood"],
    ["19940210", "dog", "wood"],
    ["19930123", "rooster", "water"],
    ["19920204", "monkey", "water"],
    ["19910215", "goat", "metal"],
    ["19900127", "horse", "metal"],
    ["19890206", "snake", "earth"],
    ["19880217", "dragon", "earth"],
    ["19870129", "rabbit", "fire"],
    ["19860209", "tiger", "fire"],
    ["19850220", "ox", "wood","Restless, decisive, straightforward, and always ready to defend the weak and helpless"],
    ["19840202", "rat", "wood"],
    ["19830213", "pig", "water"],
    ["19820125", "dog", "water"],
    ["19810205", "rooster", "metal"],
    ["19800216", "monkey", "metal"],
    ["19790128", "goat", "earth"],
    ["19780207", "horse", "earth"],
    ["19770218", "snake", "fire"],
    ["19760131", "dragon", "fire"],
    ["19750211", "rabbit", "wood"],
    ["19740123", "tiger", "wood"],
    ["19730203", "ox", "water","Hardworking, ambitious, tenacious, and able to endure hardship, with strong sense of justice and keen observational abilities"],
    ["19720215", "rat", "water"],
    ["19710127", "pig", "metal"],
    ["19700206", "dog", "metal"],
    ["19690217", "rooster", "earth"],
    ["19680130", "monkey", "earth"],
    ["19670209", "goat", "fire"],
    ["19660121", "horse", "fire"],
    ["19650202", "snake", "wood"],
    ["19640213", "dragon", "wood"],
    ["19630125", "rabbit", "water"],
    ["19620205", "tiger", "water"],
    ["19610215", "ox", "metal","Characteristics: Hardworking, active, always busy, and popular among friends"],
    ["19600128", "rat", "metal"],
    ["19590208", "pig", "earth"],
    ["19580218", "dog", "earth"],
    ["19570131", "rooster", "fire"],
    ["19560212", "monkey", "fire"],
    ["19550124", "goat", "wood"],
    ["19540203", "horse", "wood"],
    ["19530214", "snake", "water"],
    ["19520127", "dragon", "water"],
    ["19510206", "rabbit", "metal"],
    ["19500217", "tiger", "metal"],
    ["19490129", "ox", "earth","Honest and prudentive, with a strong sense of responsibility"],
    ["19480210", "rat", "earth"],
    ["19470122", "pig", "fire"],
    ["19460202", "dog", "fire"],
    ["19450213", "rooster", "wood"],
    ["19440125", "monkey", "wood"],
    ["19430205", "goat", "water"],
    ["19420215", "horse", "water"],
    ["19410127", "snake", "metal"],
    ["19400208", "dragon", "metal"],
    ["19390219", "rabbit", "earth"],
    ["19380131", "tiger", "earth"],
    ["19370211", "ox", "fire","Short-sighted, selfish, narrow-minded, impersonal, but practical"],
    ["19360124", "rat", "fire"],
    ["19350204", "pig", "wood"],
    ["19340214", "dog", "wood"],
    ["19330126", "rooster", "water"],
    ["19320206", "monkey", "water"],
    ["19310217", "goat", "metal"],
    ["19300130", "horse", "metal"],
    ["19290210", "snake", "earth"],
    ["19280123", "dragon", "earth"],
    ["19270202", "rabbit", "fire"],
    ["19260213", "tiger", "fire"],
    ["19250124", "ox", "wood","Restless, decisive, straightforward, and always ready to defend the weak and helpless"],
    ["19240205", "rat", "wood"],
    ["19230216", "pig", "water"],
    ["19220128", "dog", "water"],
    ["19210208", "rooster", "metal"],
    ["19200220", "monkey", "metal"],
    ["19190201", "goat", "earth"],
    ["19180211", "horse", "earth"],
    ["19170123", "snake", "fire"],
    ["19160203", "dragon", "fire"],
    ["19150214", "rabbit", "wood"],
    ["19140126", "tiger", "wood"],
    ["19130206", "ox", "water","Hardworking, ambitious, tenacious, and able to endure hardship, with strong sense of justice and keen observational abilities"],
    ["19120218", "rat", "water"],
    ["19110130", "pig", "metal"],
    ["19100210", "dog", "metal"],
    ["19090122", "rooster", "earth"],
    ["19080202", "monkey", "earth"],
    ["19070213", "goat", "fire"],
    ["19060125", "horse", "fire"],
    ["19050204", "snake", "wood"],
    ["19040216", "dragon", "wood"],
    ["19030129", "rabbit", "water"],
    ["19020208", "tiger", "water"],
    ["19010219", "ox", "metal","Characteristics: Hardworking, active, always busy, and popular among friends"],
    ["19000131", "rat", "metal"],
    ["19000000", "pig", "earth"]];

    //Description for each signs, sources from the site below
    //https://www.travelchinaguide.com/intro/social_customs/zodiac/
    //sign/description/strength/weakness
    var signsDescription =
    [["rat","People born in the Year of Rat are instinctive, acute and alert in nature which makes them to be brilliant businessmen. They can always react properly before the worst circumstances take place. They are also sophisticated and popular in social interaction. They are sanguine and very adaptable, being popular with others.","Adaptable, smart, cautious, acute, alert, positive, flexible, outgoing, cheerful","Timid, unstable, stubborn, picky, lack of persistence, querulous"],
    ["ox","Ranking second in Chinese zodiacal signs, the Ox is huge. People often use it to indicate something big in size or number. People born in the Year of Ox bear persistent, simple, honest, and straightforward characteristics. They are talent leaders with strong faith, and strong devotion to work. They are contemplative before taking actions, not easily affected by the surroundings but just follow their concept and ability. Being conservative with a lack of wit in speaking, they usually look silent and sometimes stubborn in their old ways.","honest, industrious, patient, cautious, level-headed, strong-willed, persistent","obstinate, inarticulate, prudish, distant"],
    ["tiger","In most cases, people with Chinese zodiac sign 'Tiger' are powerful, independent, confident and brave. They have strong sense of errantry, being frank and easy to win others' trust. In their middle age, their fate may be uneven, but after hardships, they will enjoy a bright prospect. While they are also likely to be dogmatic, and like showing off when accomplishing something.","Tolerant, loyal, valiant, courageous, trustworthy, intelligent, virtuous","Arrogant, short-tempered, hasty, traitorous"],
    ["rabbit","People born in Year of Rabbit usually impress others with an image of tenderness, grace and sensitive. They are romantic in relationship, having a high demand in life quality. They avoid arguing with others, and have a capability of converting an enemy into a friend. They are homebody and hospitable, and like house fitting-up. They can work with speed and efficiency, do not insist and get angry easily. But they also like hesitating, which makes them lose many chances.","Gentle, sensitive, compassionate, amiable, modest, and merciful","Amorous, hesitant, stubborn, timid, conservative"],
    ["dragon","People with Chinese zodiac sign 'Dragon' are usually a group of people who are lively, intellectual and excitable. They can clearly tell right from wrong. They are upright and frank. However, they are also a bit arrogant and impatient. Female Dragons tend to be overly confident. They hate hypocrisy, gossip and slander. They are not afraid of difficulties but hate to be used or controlled by others.","Decisive, inspiring, magnanimous, sensitive, ambitious, romantic","Eccentric, tactless, fiery, intolerant, unrealistic"],
    ["snake","Usually, people regard snake as a cunning and sly animal, which likes hanging out in darkness. In fact, this animal is also a symbol of wisdom and wit. Therefore, people with Chinese zodiac sign 'Snake', sensitive and humorous, and most of them are gifted in literature and art, such as Goethe and Picasso. Suspicion is their weakness, which makes them hesitant and a bit paranoid.","Soft-spoken, humorous, sympathetic, determined, passionate, smart","Jealous, suspicious, sly, fickle, nonchalant"],
    ["horse","They always impress upon people with dynamic, zealous and generous image. Although endowed with many shinning points, they have to face the weaknesses in their characteristics.","Most have nice personalities, such as warm-hearted, upright and easygoing. Hence, they usually have a lot of friends flocking around them. Independence and endurance makes them more powerful, and they do not easily give up when in difficulties. Positive attitude leads to a brighter direction.","The love of spending seems to be the biggest problem since they must be financially well off to support their social activities and outlook. Besides, their frank attitude at times leads to letting out secret easily. Persistence is what they lack on the path of success."],
    ["goat","People born in the Year of Sheep are tender, polite, filial, clever, and kind-hearted. They have special sensitivity to art and beauty and a special fondness for quiet living. They are wise, gentle and compassionate and can cope with business cautiously and circumspectly. In their daily life, they try to be economical. They are willing to take good care of others, but they should avoid pessimism and hesitation.","gentle, softhearted, considerate, attractive, hardworking, persistent, thrift","indecisive, timid, vain, pessimistic, moody, weak-willed"],
    ["monkey","The general image of people with Chinese zodiac sign 'Monkey' is of always being smart, clever and intelligent, especially in their career and wealth. They are lively, flexible, quick-witted and versatile. In addition, their gentleness and honesty bring them an everlasting love life. Although they were born with enviable skills, they still have several shortcomings, such as an impetuous temper and a tendency to look down upon others.","enthusiastic, self-assured, sociable, innovative","jealous, suspicious, cunning, selfish, arrogant"],
    ["rooster","People born in the Year of Rooster according to Chinese zodiac have many excellent characteristics, such as being honest, bright, communicative and ambitious. Most of them are born pretty or handsome, and prefer to dress up. In daily life, they seldom rely on others. However, they might be enthusiastic about something quickly, but soon be impassive. Thus, they need to have enough faiths and patience to insist on one thing.","Independent, capable, warm-hearted, self-respect, quick minded","Impatient, critical, eccentric, narrow-minded, selfish"],
    ["dog","They are usually independent, sincere, loyal and decisive according to Chinese zodiac analysis. They are not afraid of difficulties in daily life. These shining characteristics make them have harmonious relationship with people around.","Valiant, loyal, responsible, clever, courageous, lively","Sensitive, conservative, stubborn, emotional"],
    ["pig","People with Chinese zodiac sign Pig are considerate, responsible, independent and optimistic. They always show generousness and mercy to endure other people's mistakes, which help them gain harmonious interpersonal relationship. However, sometimes they would behave lazy and lack actions. In addition, pure hearts would let them be cheated easily in daily life.","Warm-hearted, good-tempered, loyal, honest, gentle","Naive, gullible, sluggish, short-tempered"]];

    //Description for the elements, sources from the site below
    //http://www.yourchineseastrology.com/five-elements.htm
    var elementsDescription =
    [["wood","Exceptionally gifted, Idealists, Planner, Owl"],
    ["water","Sympathetic, Perfectionist, Coordinator, Chameleon"],
    ["fire","Courageous, Passionate, Good at research, King, Koala"],
    ["earth","Kindness, Tolerant, Honest, Leader, Peacock"],
    ["metal","Determined, Persistent, Workaholic, Manager, Tiger"]];

    //Loop to know the sign and the element, considering the birthday
    var birthdaySign = "";
    var birthdayElement = "";
	let birthdayCharacteristics = "";
    for (var yearIndex = 0; yearIndex <signs.length; yearIndex++)
    {
        if (birthday >= signs[yearIndex][0])
        {
          birthdaySign = signs[yearIndex][1];
          birthdayElement = signs[yearIndex][2];
		  birthdayCharacteristics = signs[yearIndex][3];
          break;
        }

    }
    //Change of the image, to get a highlighted version on the sign
    var zodiacImage = "public/images/zodiac_" + birthdaySign + ".png";
    document.getElementById("zodiacImage").src= zodiacImage;
    var answer = "";
    var nameTyped = false;
    //Usecase : entry or not of the name, formatting
    if (firstname.value != "")
    {
      answer += firstname.value + " ";
      nameTyped= true;
    }
    if (lastname.value != "")
    {
      answer += lastname.value + " ";
      nameTyped= true;
    }
    if (nameTyped)
    {
      answer += ",";
    }
    //Update of the answer shown to the browser
    answer += "your Chinese Sign is " + birthdaySign + " of " + birthdayElement;
	//console.log(birthdayCharacteristics);
    document.getElementById("answer").innerHTML = answer;
	document.getElementById("answer2").innerHTML = birthdayCharacteristics;
	document.getElementById("answer3").innerHTML = birthdayCharacteristics;
	
	//Characteristics element
	let idx1 = signsDescription.flatMap((sub, idx) => sub.includes(birthdaySign) ? [idx] : []);
	let idx2 = elementsDescription.flatMap((sub, idx) => sub.includes(birthdayElement) ? [idx] : []);
	document.querySelector("#signsDescription").textContent = signsDescription[idx1][1];
	document.querySelector("#elementsDescription").textContent = elementsDescription[idx2][1];

}



//https://www.chinahighlights.com/travelguide/chinese-zodiac/rat.htm
//https://thewoksoflife.com/the-chinese-zodiac/
rat
Most compatible zodiac signs with the Rat: Rat, Ox, Dragon, or Monkey\n
Least compatible zodiac signs with the Rat: Rabbit, Horse, or Rooster
Lucky numbers: 2, 3, and numbers containing them (like 23 and 32)
Lucky days: the 4th and 13th of every Chinese lunar month
Lucky colors: blue, gold, green
Lucky flowers: lily, African violet
Lucky direction: west, northwest and southwest
Lucky months: the 2nd, 5th and 9th Chinese lunar months
Unlucky color: yellow, brown
Unlucky numbers: 5 and 9
Unlucky direction: south and southeast
Unlucky months: the 4th, 10th, and 12th Chinese lunar months

ox
Most compatible zodiac signs with the Ox: Rat, Snake, and Rooster
Least compatible zodiac signs with the Ox: Tiger, Horse, Goat, or Monkey 
Lucky numbers: 1, 4, and numbers containing them (like 14 and 41)
Lucky colors: white, yellow, green
Lucky flowers: tulip, peach blossom
Lucky directions: north, south
Unlucky numbers: 5 and 6, and numbers containing them (like 56 and 65)
Unlucky color: blue
Unlucky direction: southwest

tiger
Most compatible zodiac signs with the Tiger: Horse, Dog, or Pig
Least compatible zodiac signs with the Tiger: Ox, Snake, Goat, or Monkey
Lucky numbers: 1, 3, and 4 and numbers containing them (like 13 and 43)
Lucky days: the 16th and 27th of any Chinese lunar month
Lucky colors: blue, gray, orange
Lucky flowers: yellow lily, cineraria
Lucky direction: east, north, south
Lucky months: the 3rd, 7th, and 10th Chinese lunar months.
Unlucky numbers: 6, 7, and 8 and numbers containing them (like 67 and 87)
Unlucky color: brown
Unlucky direction: southwest
Unlucky months: the 1st, 4th, 5th, and 11th Chinese lunar months

rabbit
Most compatible zodiac signs with the Rabbit: Goat, Dog, or Pig
Least compatible zodiac signs with the Rabbit: Rat or Rooster
Lucky numbers: 3, 4, 6, and numbers containing them (like 34 and 46)
Lucky days: the 26th, 27th, and 29th of every Chinese lunar month
Lucky colors: red, pink, purple, blue
Lucky flowers: plantain lily, jasmine
Lucky directions: east, south and northwest
Lucky months: the 1st, 4th, 8th, and 11th Chinese lunar months
Unlucky numbers: 1, 7, and 8
Unlucky colors: dark brown, dark yellow, white
Unlucky directions: north, west, and southwest

Dragon
Most compatible zodiac signs with the Dragon: Rat, Monkey, or Rooster
Least compatible zodiac signs with the Dragon: Dog
Lucky numbers: 1, 6 and 7
Lucky days: the 1st and 16th of any Chinese lunar calendar month
Lucky colors: gold, silver, grayish white
Lucky flowers: bleeding-heart glory bower, dragon flowers
Lucky direction: east, north, south
Lucky months: the 3rd, 4th, and 7th Chinese lunar months.
Unlucky colors: blue, green
Unlucky numbers: 3 and 8
Unlucky direction: northwest
Unlucky months: the 5th and 6th Chinese lunar months

Snake
Most compatible zodiac signs with the Snake: Ox or Rooster
Least compatible zodiac signs with the Snake: Tiger, Horse, or Pig
Lucky numbers: 2, 8, 9, and numbers containing them (like 28 and 89)
Lucky days: the 1st and 23rd of Chinese lunar months
Lucky colors: black, red, and yellow
Lucky flowers: orchid and cactus
Lucky directions: east, west, and southwest
Lucky months: the 1st, 8th, and 11th lunar months
Unlucky colors: brown, gold, white
Unlucky numbers: 1, 6, and 7
Unlucky directions: northeast and northwest
Unlucky months: the 3rd, 9th and 12th lunar months

Horse
Most compatible zodiac signs with the Horse: Tiger, Goat, or Dog
Least compatible zodiac signs with the Horse: Rat, Ox, or Snake
Lucky numbers: 2, 3, 7, and numbers containing them (like 23 and 37)
Lucky days: the 5th and 20th of Chinese lunar months
Lucky colors: yellow and green
Lucky flowers: calla lily and jasmine
Lucky directions: east, west, and south
Lucky months: the 4th, 9th, and 12th Chinese lunar months
Unlucky color: blue, white
Unlucky numbers: 1, 5, and 6
Unlucky direction: north and northwest
Unlucky months: the 5th, 7th, and 11th Chinese lunar months

Goat
Most compatible zodiac signs with the Goat: Rabbit, Horse, Goat, or Pig
Least compatible zodiac signs with the Goat: Ox, Tiger, or Dog
Lucky numbers: 2, 7, or numbers containing 2 and 7 (like 27 and 72)
Lucky days: the 7th and 30th of any month according to the Chinese lunar calendar
Lucky colors: brown, red, and purple
Lucky flowers: carnations and primroses
Lucky direction: north
Unlucky colors: blue and black
Unlucky numbers: 4 and 9
Unlucky direction: southwest
Worst lunar months: third, sixth, and tenth. Avoid these months if you have some important business to do or want to plan an event.

Monkey
Most compatible zodiac signs with the Monkey: Rat, Dragon, or Dog
Least compatible zodiac signs with the Monkey: Ox or Tiger 
Lucky numbers: 4 and 9
Lucky days: the 14th and 28th of any Chinese lunar calendar month
Lucky colors: white, blue, gold
Lucky flowers: chrysanthemum, crape myrtle
Lucky directions: north, northwest, west
Lucky months: the 8th and 12th Chinese lunar months
Unlucky numbers: 2 and 7
Unlucky colors: red, pink
Unlucky directions: south, southeast
Unlucky months: the 7th and 11th Chinese lunar months

rooster
Most compatible zodiac signs with the Rooster: Ox, Dragon, or Snake
Least compatible zodiac signs with the Rooster: Rat, or Rabbit
Lucky numbers: 5, 7, and 8
Lucky days: the 4th and 26th of any Chinese lunar month
Lucky colors: gold, brown, and yellow
Lucky flowers: gladiola, cockscomb
Lucky directions: south, southeast
Lucky months: the 2nd, 5th, and 11th Chinese lunar months.
Unlucky color: red
Unlucky numbers: 1, 3, and 9
Unlucky direction: east
Unlucky months: the 3rd, 9th, and 12th Chinese lunar months

Dog
Most compatible zodiac signs with the Dog: Tiger, Rabbit, Horse, or Monkey
Least compatible zodiac signs with the Dog: Dragon or Goat
Lucky numbers: 3, 4, 9, and numbers containing them (like 34 and 49)
Lucky days: the 7th and 28th of every Chinese lunar month
Lucky colors: red, green, and purple
Lucky flowers: rose, cymbidium orchids
Lucky directions: east, south, and northeast
Lucky months: the 6th, 10th, and 12th Chinese lunar months
Unlucky colors: blue, white, gold
Unlucky numbers: 1, 6, and 7
Unlucky direction: southeast
Unlucky months: the 5th and 8th Chinese lunar months

pig
Most compatible zodiac signs with the Pig: Goat, Tiger, and Rabbit
Least compatible zodiac signs with the Pig: Snake
Lucky numbers: 2, 5, 8, and numbers containing them (like 25 and 58)
Lucky days: the 17th and 24th of every Chinese lunar month
Lucky colors: yellow, gray, brown, gold
Lucky flowers: hydrangea and daisy
Lucky direction: east and southwest
Lucky months: the 2nd, 7th, 10th, and 11th Chinese lunar months
Unlucky color: red, blue, green
Unlucky numbers: 1, 7, and numbers containing them (like 17 and 71)
Unlucky direction: southeast
Unlucky months: the 4th, 9th, and 12th Chinese lunar months

