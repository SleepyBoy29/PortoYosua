document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
//----------------------start of quote list------------------------------------------------------------------------------
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."',
	"- Walt Disney": '"All our dreams can come true, if we have the courage to pursue them."',
	"- Mark Twain": '"The secret of getting ahead is getting started."',
	"- Mary Kay Ash": '"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."',
	"- Babe Ruth": '"It’s hard to beat a person who never gives up."',
	"- Frank Ocean": '"Work hard in silence, let your success be your noise."',
	"- Michele Ruiz": '"If people are doubting how far you can go, go so far that you can’t hear them anymore."',
	"- Arianna Huffington": '"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success."',
	"- William W. Purkey": '"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth."',
	"- Neil Gaiman": '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."',
	"- Pablo Picasso": '"Everything you can imagine is real."',
	"- Helen Keller": '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."',
	"- Eleanor Roosevelt": '"Do one thing every day that scares you."',
	"- Lewis Carroll": '"It’s no use going back to yesterday, because I was a different person then."',
	"- Socrates": '"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."',
	"- Eleanor Roosevelt": '"Do what you feel in your heart to be right – for you’ll be criticized anyway."',
	"- Dalai Lama XIV": '"Happiness is not something ready made. It comes from your own actions."',
	"- Abraham Lincoln": '"Whatever you are, be a good one."',
	"- Jim Rohn": '"We suffer one of two things. Either the pain of discipline or the pain of regret."',
	"- Isabelle Lafleche": '"Your passion is waiting for your courage to catch up."',
	"- Johann Wolfgang Von Goethe": '"Magic is believing in yourself. If you can make that happen, you can make anything happen."',
	"- Elon Musk": '"If something is important enough, even if the odds are stacked against you, you should still do it."',
	"- Jaymin Shah": '"No one is to blame for your future situation but yourself. If you want to be successful, then become Successful."',
	"- Abraham Lincoln": '"Things may come to those who wait, but only the things left by those who hustle."',
	"- Gary Vaynerchuk": '"Without hustle, talent will only carry you so far."',
	"- Mark Cuban": '"Work like there is someone working twenty four hours a day to take it away from you."',
	"- Vincent Van Gogh": '"If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced."',
	"- Michael Jordan": '"Some people want it to happen, some wish it would happen, others make it happen."',
	"- Vincent Van Gogh": '"Great things are done by a series of small things brought together."',
	"- Aly Raisman": '"The hard days are what make you stronger."',
	"- Theodore Roosevelt": '"Keep your eyes on the stars, and your feet on the ground."',
	"- George Lorimer": '"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction."',
	"- Mahatma Gandhi": '"In a gentle way, you can shake the world."',
	"- Roy T. Bennett": '"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart."',
	"- H. Jackson Brown Jr.": '"Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein."',
	"- Tim Notke": '"Hard work beats talent when talent doesn’t work hard."',
	"- Mario Andretti": '"If everything seems to be under control, you’re not going fast enough."',
	"- Jimmy Johnson": '"The only difference between ordinary and extraordinary is that little extra."',
	"- Benjamin Hardy": '"Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be."',
	"- Kamari aka Lyrikal": '"Never stop doing your best just because someone doesn’t give you credit."',
	"- Dr. Seuss": '"Things are never quite as scary when you’ve got a best friend."',
	"- Dr. Seuss": '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
	"- Dr. Seuss": '"You do not like them. So you say. Try them! Try them! And you may!"',
	"- Dr. Seuss": '"Today was good. Today was fun. Tomorrow is another one."',
	"- Dr. Seuss": '"Don’t cry because it’s over, smile because it happened."',
	"- Dr. Seuss": '"Only you can control your future."',
	"- Dr. Seuss": '"I have heard there are troubles of more than one kind. Some come from ahead and some come from behind. But I’ve bought a big bat. I’m all ready you see. Now my troubles are going to have troubles with me!"',
	"- Dr. Seuss": '"You’re on your own. And you know what you know. And you are the one who’ll decide where to go."',
	"- Dr. Seuss": '"You have to be odd to be number one."',
	"- Dr. Seuss": '"It is better to know how to learn than to know."',
	"- Dr. Seuss": '"We are all a little weird and life’s a little weird, and when we find someone whose weirdness is compatible with ours, we join up with them and fall in mutual weirdness and call it love."',
	"- Dr. Seuss": '"You’re never too old, too wacky, too wild, to pick up a book and read to a child."',
	"- Dr. Seuss": '"I like nonsense, it wakes up the brain cells."',
	"- Dr. Seuss": '"I’m afraid that sometimes you’ll play lonely games too. Games you can’t win ’cause you’ll play against you."',
	"- Dr. Seuss": '"Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind."',
	"- Dr. Seuss": '"You know when you’re in love when you can’t fall asleep because reality is finally better than your dreams."',
	"- Dr. Seuss": '"Life is too short to wake up in the morning with regrets."',
	"- Dr. Seuss": '"Fantasy is a necessary ingredient in living—it’s a way of looking at life through the wrong end of a telescope."',
	"- Dr. Seuss": '"Reading can take you places you have never been before."',
	"- Dr. Seuss": '"When something bad happens you have three choices. You can either let it define you, let is destroy you, or you can let it strengthen you."',
	"- Dr. Seuss": '"I meant what I said and I said what I meant."',
	"- Dr. Seuss": '"Today you are you, that is truer than true. There is no one alive that is youer than you."',
	"- Dr. Seuss": '"Remember me and smile, for it’s better to forget than to remember me and cry."',
	"- Dr. Seuss": '"Kid, you’ll move mountains."',
	"- Dr. Seuss": '"I don’t care how you go. Just get."',
	"- Dr. Seuss": '"Always remember you are braver than you believe, stronger than you seem, smarter than you think and twice as beautiful as you’ve ever imagined."',
	"- Dr. Seuss": '"And will you succeed? Yes indeed, yes indeed! Ninety-eight and three-quarters percent guaranteed!"',
	"- Dr. Seuss": '"From there to here, and here to there, funny things are everywhere."',
	"- Dr. Seuss": '"Take every chance, drop every fear."',
	"- Dr. Seuss": '"Whenever things go a bit sour in a job I’m doing, I always tell myself, You can do better than this."',
	"- Dr. Seuss": '"Some people are much more… oh, ever so much more… oh, muchly much-much more unlucky than you!"',
	"- Dr. Seuss": '"The storm starts, when the drops start dropping. When the drops stop dropping then the storm starts stopping."',
	"- Dr. Seuss": '"Sometimes the questions are complicated and the answers are simple."',
	"- Dr. Seuss": '"You’ll never be bored when you try something new. There’s really no limit to what you can do."',
	"- Dr. Seuss": '"Cause when a guy does something stupid once, well that’s because he’s a guy. But if he does the same stupid thing twice, that’s usually to impress some girl."',
	"- Dr. Seuss": '"Why fit in when you were born to stand out."',
	"- Dr. Seuss": '"You can find magic wherever you look. Sit back and relax, all you need is a book."',
	"- Dr. Seuss": '"When he worked, he really worked. But when he played, he really played."',
	"- Dr. Seuss": '"All alone! Whether you like it or not, alone is something you’ll be quite a lot."',
	"- Dr. Seuss": '"It is fun to have fun, but you have to know how."',
	"- Dr. Seuss": '"Today I shall behave, as if this is the day I will be remembered."',
	"- Dr. Seuss": '"Nothing is going to change, unless someone does something soon."',
	"- Dr. Seuss": '"The more that you read, the more things you will know. The more that you learn, the more places you’ll go."',
	"- Conan O’Brien": '"Work hard, be kind, and amazing things will happen."',
	"- Dalai Lama": '"The purpose of our lives is to be happy."',
	"- Stephen King": '"Get busy living or get busy dying."',
	"- Mae West": '"You only live once, but if you do it right, once is enough."',
	"- Thomas A. Edison": '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
	"- Seneca": '"Not how long, but how well you have lived is the main thing."',
	"- Eleanor Roosevelt": '"If life were predictable it would cease to be life, and be without flavor."',
	"- Soren Kierkegaard": '"Life is not a problem to be solved, but a reality to be experienced."',
	"- Oprah Winfrey": '"Turn your wounds into wisdom."',
	"- Socrates": '"The unexamined life is not worth living."',
	"- Dolly Parton": '"The way I see it, if you want the rainbow, you gotta put up with the rain."',
	"- Kevin Hart": '"Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off."',
	"- LeBron James": '"I like criticism. It makes you strong."',
	"- Celine Dion": '"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."',
	"- George Clooney": '"You never really learn much from hearing yourself speak."',
	"- Elton John": '"Live for each second without hesitation."',
	"- Albert Einstein": '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
	"- Confucius": '"Life is really simple, but men insist on making it complicated."',
	"- Lao-Tze": '"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."',
	"- Sun Tzu": '"Know the enemy and know yourself in a hundred battles you will never be in peril. When you are ignorant of the enemy but know yourself, your chances of winning or losing are equal. If ignorant both of your enemy and of yourself, you are certain in every battle to be in peril."'
  };
//----------------------end of quote list------------------------------------------------------------------------------
  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

}


//--------------- start of color picker------------------------------------------------------


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default:'#ffffff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            hsla: true,
            hsva: true,
            input: true,
            clear: false,
            save: false
        }
    }
});


pickr.on('change', (color, source, instance) => {
    console.log(color.toRGBA().toString()); // Returns rgba(r, g, b, a) with highest precision
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.querySelector('body').style.background = rgbaColor;
});