const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

const booksData = {
  books: [
    {
      id: "1",
      title: "Avatar: The Rise of Kyoshi",
      author: "F.C Yee",
      imageUrl:
        "https://www.abramsbooks.com/cover_images/2/9781419735042_s3.jpg",
      published_date: "Jul-2019",
      category: "Fantasy",
      pages: "442",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "After nine years of desperate searching for the next Avatar, the discovery of young, charming Avatar Yun has brought stability to the four nations—that is, until Earth Kingdom-born Kyoshi, Yun's unassuming friend and servant, demonstrates remarkable bending during a mission to the South Pole. With the identity of the true Avatar at stake and the growing unrest among her allies turning into violence, Kyoshi is forced to flee the Avatar mansion with her fiery friend Rangi, taking little more than the metal war fans and headdress her parents left behind.",
    },
    {
      id: "2",
      title: "Avatar: The Shadow of Kyoshi",
      author: "F.C Yee",
      imageUrl:
        "https://m.media-amazon.com/images/I/81GoYYAdMRL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jul-2020",
      category: "Fantasy",
      pages: "342",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Kyoshi's place as the true Avatar has finally been cemented—but at a heavy cost. With her mentors gone, Kyoshi voyages across the Four Nations, struggling to keep the peace",
    },
    {
      id: "3",
      title: "Avatar: The Dawn of Yangchen",
      author: "F.C Yee",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648140088i/58667490.jpg",
      published_date: "Jul-2022",
      category: "Fantasy",
      pages: "336",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Plagued by the voices of Avatars before her for as long as she can remember, Yangchen has not yet earned the respect felt for Avatar Szeto, her predecessor. In an era where loyalty is bought rather than earned, she has little reason to trust her counsel",
    },
    {
      id: "4",
      title: "Avatar: The Legacy of Yangchen",
      author: "F.C Yee",
      imageUrl:
        "https://m.media-amazon.com/images/I/71CsdHyqPJL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jul-2023",
      category: "Fantasy",
      pages: "336",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Avatar Yangchen has succeeded in bringing a measure of stability to Bin-Er, but her successes have been limited to a single city, and rumors concerning Unanimity–a weapon capable of total obliteration–have led to increasing tensions among the Four Nations.Desperate to restore diplomacy...",
    },
    {
      id: "5",
      title: "Samsara: Enter the Valley of The Gods",
      author: "Saksham Garg",
      imageUrl: "https://m.media-amazon.com/images/I/51ZDq06qU8L._SY780_.jpg",
      published_date: "Sep-2022",
      category: "Fantasy",
      pages: "298",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "WHAT IF YOU CAME FACE TO FACE WITH THE KING OF THE GODS?Phones stop working. Smartwatches die out. Arms start glowing with blue scars.And training begins the very next day for Aman Chandra and ten other Souls of Samsara, who are kidnapped from modern-day India and transported to a hidden valley in the Himalayas",
    },
    {
      id: "6",
      title: "Guardians of the Halahala",
      author: "Shatrujeet Nath",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWr0qCVARI84TQMC9fifDzOhRlUcppBSd-YQ&s.jpg",
      published_date: "Sep-2015",
      category: "Fantasy",
      pages: "428",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The deadly Halahala, the all-devouring poison churned from the depths of the White Lake by the devas and asuras, was swallowed by Shiva to save the universe from extinction. But was the Halahala truly destroyed? A small portion still remains – ",
    },
    {
      id: "7",
      title: "The Conspiracy at Meru",
      author: "Shatrujeet Nath",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7eDe_kOH8VndsSpa4HnqeYvGNzPH0tBn1w&s.jpg",
      published_date: "Oct-2016",
      category: "Fantasy",
      pages: "408",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Vikramaditya and his Council of Nine have fought valiantly to repel the rampaging hordes from Devaloka and Patala – but Avanti has been brought to its knees. Ujjayini lies battered; its citizens are scared, and morale is badly shaken",
    },
    {
      id: "8",
      title: "The Vengeance of Indra",
      author: "Shatrujeet Nath",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmu2dmPqLIqe-3CsWJz762geK4xqLicdxFw&s.jpg",
      published_date: "Jan-2018",
      category: "Fantasy",
      pages: "331",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "In their greed to possess the deadly Halahala, the devas and the asuras have employed every dirty trick against Vikramaditya and his Council of Nine. But the humans are still standing, bloodied but unbowed",
    },
    {
      id: "9",
      title: "Wrath of the Hellfires",
      author: "Shatrujeet Nath",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604031941i/55817621.jpg",
      published_date: "Dec-2020",
      category: "Fantasy",
      pages: "556",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Shukracharya’s plan to break the unity of Vikramaditya’s Council has borne bitter fruit. Friends have become sworn enemies, and brother has turned against brother, setting Avanti on the path to self-destruction. Even as Vikramaditya prepares to counter a Huna invasion...",
    },
    {
      id: "10",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VUUPc2wZQVeLOCQ95HlsS1CByZy9MNAMWw&s.jpg",
      published_date: "Mar-2007",
      category: "Fantasy",
      pages: "662",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Told in Kvothe’s own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city...",
    },
    {
      id: "11",
      title: "The Wise Man's Fear",
      author: "Patrick Rothfuss",
      imageUrl:
        "https://m.media-amazon.com/images/I/71knjFX7k7L._AC_UF1000,1000_QL80_.jpg",
      published_date: "Mar-2011",
      category: "Fantasy",
      pages: "994",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "'There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man', an escalating rivalry with a powerful member of the nobility forces Kvothe to leave the University and seek his fortune abroad. Adrift, penniless, and alone, he travels to Vintas, where he quickly becomes entangled in the politics of courtly society",
    },
    {
      id: "12",
      title: "An Ember in the Ashes",
      author: "Sabaa Tahir",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UxKNKVOkZNx9bMOsGANWJG3P--2bxqaKNA&s.jpg",
      published_date: "Apr-2015",
      category: "Fantasy",
      pages: "480",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Laia is a slave. Elias is a soldier. Neither is free. Under the Martial Empire, defiance is met with death. Those who do not vow their blood and bodies to the Emperor risk the execution of their loved ones and the destruction of all they hold dear. It is in this brutal world, inspired by ancient Rome, that Laia lives with her grandparents and older brother. The family ekes out an existence in the Empire’s impoverished backstreets...",
    },
    {
      id: "13",
      title: "A Torch against the Night",
      author: "Sabaa Tahir",
      imageUrl:
        "https://m.media-amazon.com/images/I/81IU-r2pfNL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Aug-2016",
      category: "Fantasy",
      pages: "460",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Elias and Laia are running for their lives. After the events of the Fourth Trial, Martial soldiers hunt the two fugitives as they flee the city of Serra and undertake a perilous journey through the heart of the Empire. Laia is determined to break into Kauf—the Empire’s most secure and dangerous prison",
    },
    {
      id: "14",
      title: "A Reaper at the Gates",
      author: "Sabaa Tahir",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOE4Un5sUFrpvBMjzBPk6zyqbMjSD5Vj5h1Q&s.jpg",
      published_date: "Jun-2018",
      category: "Fantasy",
      pages: "480",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Beyond the Empire and within it, the threat of war looms ever larger. The Blood Shrike, Helene Aquilla, is assailed on all sides. Emperor Marcus, haunted by his past, grows increasingly unstable, while the Commandant capitalizes on his madness to bolster her own power",
    },
    {
      id: "15",
      title: "A Sky beyond the Storm",
      author: "Sabaa Tahir",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2AMp7ymaxPORFif2uD8rLL-m1oLyHmxyNw&s.jpg",
      published_date: "Dec-2020",
      category: "Fantasy",
      pages: "528",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The long-imprisoned jinn are on the attack, wreaking bloody havoc in villages and cities alike. But for the Nightbringer, vengeance on his human foes is just the beginning. By his side, Commandant Keris Veturia declares herself Empress and calls for the heads of any and all who defy her rule. At the top of the list? The Blood Shrike and her remaining family. Laia of Serra, now allied with the Blood Shrike, struggles to recover from the loss of the two people most important to her.",
    },
    {
      id: "16",
      title: "A Game of Thrones",
      author: "G.R.R Martin",
      imageUrl:
        "https://m.media-amazon.com/images/I/714ExofeKJL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Aug-1996",
      category: "Fantasy",
      pages: "694",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to",
    },
    {
      id: "17",
      title: "A Clash of Kings",
      author: "G.R.R Martin",
      imageUrl:
        "https://m.media-amazon.com/images/I/7193zyz9thL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Nov-1998",
      category: "Fantasy",
      pages: "1009",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "A comet the color of blood and flame cuts across the sky. Two great leaders—Lord Eddard Stark and Robert Baratheon—who hold sway over an age of enforced peace are dead, victims of royal treachery. Now, from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns",
    },
    {
      id: "18",
      title: "A Storm of Swords",
      author: "G.R.R Martin",
      imageUrl:
        "https://m.media-amazon.com/images/I/819o5XLwuFL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Aug-2000",
      category: "Fantasy",
      pages: "1177",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as alliances are made and broken. Joffrey sits on the Iron Throne, the uneasy ruler of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, victim of the sorceress who holds him in her thrall",
    },
    {
      id: "19",
      title: "A Feast for Crows",
      author: "G.R.R Martin",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLXxLuv9pY-xz9IX2wEF3kGooEtSXPIyxCA&s.jpg",
      published_date: "Nov-2005",
      category: "Fantasy",
      pages: "3518",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Crows will fight over a dead man’s flesh, and kill each other for his eyes. Bloodthirsty, treacherous and cunning, the Lannisters are in power on the Iron Throne in the name of the boy-king Tommen. The war in the Seven Kingdoms has burned itself out, but in its bitter aftermath new conflicts spark to life",
    },
    {
      id: "20",
      title: "A Dance with Dragons",
      author: "G.R.R Martin",
      imageUrl:
        "https://m.media-amazon.com/images/I/71CrMiWhcDL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jul-2011",
      category: "Fantasy",
      pages: "1056",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her",
    },
    {
      id: "21",
      title: "Shadow and Bone",
      author: "Leigh Bardugo",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339533695i/10194157.jpg",
      published_date: "Jun-2012",
      category: "Fantasy",
      pages: "358",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Surrounded by enemies, the once-great nation of Ravka has been torn in two by the Shadow Fold, a swath of near impenetrable darkness crawling with monsters who feast on human flesh. Now its fate may rest on the shoulders of one lonely refugee. Alina Starkov has never been good at anything.",
    },
    {
      id: "22",
      title: "Siege and Storm",
      author: "Leigh Bardugo",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g3MN6aZeYIJLzCDX_yb1NpIjS9-T3SEy6A&s.jpg",
      published_date: "Jun-2013",
      category: "Fantasy",
      pages: "435",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Hunted across the True Sea, haunted by the lives she took on the Fold, Alina must try to make a life with Mal in an unfamiliar land, all while keeping her identity as the Sun Summoner a secret. But she can’t outrun her past or her destiny for long",
    },
    {
      id: "23",
      title: "Ruin and Rising",
      author: "Leigh Bardugo",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxWpykt-MNbmkoUio01nL-Ug3rZnaPdJcvA&s.jpg",
      published_date: "Jun-2014",
      category: "Fantasy",
      pages: "442",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The capital has fallen. The Darkling rules Ravka from his shadow throne. Now the nation’s fate rests with a broken Sun Summoner, a disgraced tracker, and the shattered remnants of a once-great magical army. Deep in an ancient network of tunnels and caverns, a weakened Alina must submit to the dubious protection of...",
    },
    {
      id: "24",
      title: "Six of Crows",
      author: "Leigh Bardugo",
      imageUrl: "https://images.gr-assets.com/books/1459349344l/23437156.jpg",
      published_date: "Sep-2015",
      category: "Fantasy",
      pages: "465",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . . . A convict with a thirst for revenge. A sharpshooter who can’t walk away from a wager. A runaway with a privileged past. A spy known as the Wraith. A Heartrender using her magic to survive the slums. A thief with a gift for unlikely escapes. Six dangerous outcasts. One impossible heist.",
    },
    {
      id: "25",
      title: "Crooked Kingdom",
      author: "Leigh Bardugo",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456172607i/22299763.jpg",
      published_date: "Sep-2016",
      category: "Fantasy",
      pages: "546",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        " Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn’t think they’d survive. But instead of divvying up a fat reward, they’re right back to fighting for their lives. Double-crossed and badly weakened, the crew is low on resources, allies, and hope.",
    },
    {
      id: "26",
      title: "Avatar: The Reckoning of Roku",
      author: "Randy Ribay",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_wRwzz5ov150oTaV9P-sMCwJAGhoXBvwPQ&s.jpg",
      published_date: "Jul-2024",
      category: "Fantasy",
      pages: "368",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "A young Avatar Roku has only just commenced his training at the Southern Air Temple when his erstwhile friend, Prince Sozin, requests his aid in preventing the Earth Kingdom from claiming a remote Fire Nation island. Despite his inexperience, Avatar Roku slips away with the help of an irritating young Airbender named Gyatso",
    },
    {
      id: "27",
      title: "Harry Potter and The Sorcerer's Stone",
      author: "J.K Rowling",
      imageUrl:
        "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0.jpg",
      published_date: "Jun-1997",
      category: "Fantasy",
      pages: "223",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The novel follows the eponymous protagonist, a young orphan living with his cruel aunt and uncle, who discovers on his eleventh birthday that he is a wizard. Harry is soon admitted to Hogwarts School of Witchcraft and Wizardry, where he begins to learn about his past",
    },
    {
      id: "28",
      title: "Harry Potter and The Chamber of Secrets",
      author: "J.K Rowling",
      imageUrl: "https://m.media-amazon.com/images/I/91WqeCn-PxL._SY385_.jpg",
      published_date: "Jul-1998",
      category: "Fantasy",
      pages: "251",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School of Witchcraft and Wizardry",
    },
    {
      id: "29",
      title: "Harry Potter and The Prisoner of Azkaban",
      author: "J.K Rowling",
      imageUrl:
        "https://m.media-amazon.com/images/I/91gCwbpuVWL._SL1500_.jpg.jpg",
      published_date: "Jul-1999",
      category: "Fantasy",
      pages: "435",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry",
    },
    {
      id: "30",
      title: "Harry Potter and The Goblet of Fire",
      author: "J.K Rowling",
      imageUrl:
        "https://th.bing.com/th/id/OIP.obH4iR7IFR_DyqNlC6kaMwHaLS?rs=1&pid=ImgDetMain.jpg",
      published_date: "Jul-2000",
      category: "Fantasy",
      pages: "734",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Harry Potter wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream).",
    },
    {
      id: "31",
      title: "Harry Potter and The Order of Pheonix",
      author: "J.K Rowling",
      imageUrl: "https://m.media-amazon.com/images/I/51JWOqs0YCL._SY346_.jpg",
      published_date: "Jun-2003",
      category: "Fantasy",
      pages: "576",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "There is a door at the end of a silent corridor. And it’s haunting Harry Potter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? It’s not just the upcoming O.W.L. exams; a new teacher with a personality like poisoned honey; a venomous, disgruntled house-elf; or even the growing threat of He-Who-Must-Not-Be-Named.",
    },
    {
      id: "32",
      title: "Harry Potter and The Half-Blood Prince",
      author: "J.K Rowling",
      imageUrl: "https://m.media-amazon.com/images/I/91g0m3EGvpL._SL1500_.jpg",
      published_date: "Jul-2005",
      category: "Fantasy",
      pages: "607",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "When Harry Potter and the Half-Blood Prince opens, the war against Voldemort has begun. The Wizarding world has split down the middle, and as the casualties mount, the effects even spill over onto the Muggles. Dumbledore is away from Hogwarts for long periods, and the Order of the Phoenix has suffered grievous losses.",
    },
    {
      id: "33",
      title: "Harry Potter and The Deathly Hallows",
      author: "J.K Rowling",
      imageUrl:
        "https://th.bing.com/th/id/OIP.3xzOEEUcHHhzPonKxv5SkQHaKm?rs=1&pid=ImgDetMain.jpg",
      published_date: "Jul-2007",
      category: "Fantasy",
      pages: "784",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Burdened with the dark, dangerous, and seemingly impossible task of locating and destroying Voldemort’s remaining Horcruxes, Harry, feeling alone and uncertain about his future, struggles to find the inner strength he needs to follow the path set out before him.",
    },
    {
      id: "34",
      title: "The Hobbit",
      author: "J.R.R Tolkien",
      imageUrl:
        "https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Sep-1937",
      category: "Fantasy",
      pages: "366",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Bilbo Baggins enjoys a quiet and contented life, with no desire to travel far from the comforts of home; then one day the wizard Gandalf and a band of dwarves arrive unexpectedly and enlist his services – as a burglar – on a dangerous expedition to raid the treasure-hoard of Smaug the dragon.",
    },
    {
      id: "35",
      title: "The Immortals of Meluha",
      author: "Amish Tripathi",
      imageUrl:
        "https://m.media-amazon.com/images/I/818bGgNn0EL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Feb-2010",
      category: "Fantasy",
      pages: "436",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "In what modern Indians mistakenly call the Indus Valley Civilisation. The inhabitants of that period called it the land of Meluha – a near perfect empire created many centuries earlier by Lord Ram, one of the greatest monarchs that ever lived. This once proud empire and its Suryavanshi rulers face severe perils as its primary river, the revered Saraswati, is slowly drying to extinction. ",
    },
    {
      id: "36",
      title: "The Secret of The Nagas",
      author: "Amish Tripathi",
      imageUrl:
        "https://m.media-amazon.com/images/I/51K6r+H68HL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Aug-2011",
      category: "Fantasy",
      pages: "398",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Today, He is a God. 4000 years ago, He was just a man. The hunt is on. The sinister Naga warrior has killed his friend Brahaspati and now stalks his wife Sati. Shiva, the Tibetan immigrant who is the prophesied destroyer of evil, will not rest till he finds his demonic adversary.",
    },
    {
      id: "37",
      title: "The Oath of the Vayuputras",
      author: "Amish Tripathi",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhs99sWtwrBG5Se-NilYH1lKp6JK6Emx74w&s.jpg",
      published_date: "Jan-2013",
      category: "Fantasy",
      pages: "575",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Shiva realizes that Nagas are not his enemies and determines to unveil the root of all evil and his true enemy. In this final part of the Shiva Trilogy, Shiva reaches to Panchvati, the capital of the Nagas and comes face to face with Evil, a name which instills fear in the hearts of the fiercest of warriors..",
    },
    {
      id: "38",
      title: "Stardust",
      author: "Neil Gaiman",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCBoM-nZMeIdaeQhCTCocpgxtqEAaVcPoyw&s.jpg",
      published_date: "Jan-1998",
      category: "Fantasy",
      pages: "256",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Young Tristran Thorn will do anything to win the cold heart of beautiful Victoria—even fetch her the star they watch fall from the night sky. But to do so, he must enter the unexplored lands on the other side of the ancient wall that gives their tiny village its name. Beyond that old stone wall, Tristran learns, lies Faerie—where nothing, not even a fallen star, is what he imagined. ",
    },
    {
      id: "39",
      title: "The Sword of Kaigen",
      author: "M.L Wang",
      imageUrl: "https://m.media-amazon.com/images/I/51dDO+Iv8sL._SY780_.jpg",
      published_date: "Jan-2018",
      category: "Fantasy",
      pages: "320",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "A mother struggling to repress her violent past, A son struggling to grasp his violent future, A father blind to the danger that threatens them all. When the winds of war reach their peninsula, will the Matsuda family have the strength to defend their empire? Or will they tear each other apart before the true enemies even reach their shores? High on a mountainside at the edge of the Kaigenese Empire live the most powerful warriors in the world, superhumans capable of raising the sea and wielding blades of ice. For hundreds of years, the fighters of the Kusanagi Peninsula have held the Empire’s enemies at bay, earning their frozen spit of land the name ‘The Sword of Kaigen.’",
    },
    {
      id: "40",
      title: "The Last Wish",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/91mXC-HDXzL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jan-1993",
      category: "Fantasy",
      pages: "384",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Geralt of Rivia is a witcher. A cunning sorcerer. A merciless assassin. And a cold-blooded killer. His sole purpose: to destroy the monsters that plague the world. But not everything monstrous-looking is evil and not everything fair is good. . . ",
    },
    {
      id: "41",
      title: "Sword of Destiny",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/71avLakYH8L._AC_UF1000,1000_QL80_.jpg",
      published_date: "May-1992",
      category: "Fantasy",
      pages: "405",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.",
    },
    {
      id: "42",
      title: "Season of Storms",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/71Dj+Kp8ERL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Nov-2013",
      category: "Fantasy",
      pages: "419",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        " Geralt of Rivia. A witcher whose mission is to protect ordinary people from the monsters created with magic. A mutant who has the task of killing unnatural beings. He uses a magical sign, potions and the pride of every witcher — two swords, steel and silver. But what would happen if Geralt lost his weapons?",
    },
    {
      id: "43",
      title: "Blood of Elves",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/81Al+uu84qL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jan-1994",
      category: "Fantasy",
      pages: "432",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "For over a century, humans, dwarves, gnomes, and elves have lived together in relative peace. But times have changed, the uneasy peace is over, and now the races are fighting once again. The only good elf, it seems, is a dead elf. Geralt of Rivia, the cunning assassin known as The Witcher, has been waiting for the birth of a prophesied child. This child has the power to change the world – for good, or for evil. ",
    },
    {
      id: "44",
      title: "Time of Contempt",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMvgCNaep-XPwyG9Uy9XNFH18jMNA7_h_ZQ&s.jpg",
      published_date: "Jan-1995",
      category: "Fantasy",
      pages: "352",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The Witcher Geralt is a witcher: guardian of the innocent; protector of those in need; a defender, in dark times, against some of the most frightening creatures of myth and legend. His task, now, is to protect Ciri. A child of prophecy, she will have the power to change the world for good or for ill — but only if she lives to use it.",
    },
    {
      id: "45",
      title: "Baptism of Fire",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/81v0DaTjnrL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jan-1996",
      category: "Fantasy",
      pages: "380",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The Witcher is supposed to be a guardian of the innocent, a protector of those in need, a defender against powerful and dangerous monsters that prey on men in dark times. But now that dark times have fallen upon the world, Geralt is helpless until he has recovered from his injuries. While war rages across all of the lands, the future of magic is under threat and those sorcerers who survive are determined to protect it. It’s an impossible situation in which to find one girl – Ciri, the heiress to the throne of Cintra, has vanished – until a rumor places her in the Niflgaard court, preparing to marry the Emperor.",
    },
    {
      id: "46",
      title: "The Tower of the Shallow",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://m.media-amazon.com/images/I/91fiAB9Y35L._AC_UF1000,1000_QL80_.jpg",
      published_date: "Jan-1997",
      category: "Fantasy",
      pages: "464",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The world has fallen into war. Ciri, the child of prophecy, has vanished. Hunted by friends and foes alike, she has taken on the guise of a petty bandit and lives free for the first time in her life. But the net around her is closing. Geralt, the Witcher, has assembled a group of allies determined to rescue her.",
    },
    {
      id: "47",
      title: "The Lady of the Lake",
      author: "Andrzej Sapkowski",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484410866i/32186143.jpg",
      published_date: "Jan-1999",
      category: "Fantasy",
      pages: "560",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "After walking through the portal in the Tower of Swallows while narrowly escaping death, Ciri finds herself in a completely different world… an Elven world. She is trapped with no way out. Time does not seem to exist and there are no obvious borders or portals to cross back into her home world.",
    },
    {
      id: "48",
      title: "Fire & Blood",
      author: "G.R.R Martin",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcBaW6BQU1s_s7P8ztUzCOCiJhUSj8AZEhg&s.jpg",
      published_date: "Nov-2018",
      category: "Fantasy",
      pages: "736",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Centuries before the events of A Game of Thrones, House Targaryen–the only family of dragonlords to survive the Doom of Valyria–took up residence on Dragonstone. Fire and Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart. What really happened during the Dance of the Dragons? Why did it become so deadly to visit Valyria after the Doom? What is the origin of Daenerys’s three dragon eggs? These are but a few of the questions answered in this essential chronicle, as related by a learned maester of the Citadel and featuring more than eighty all-new black-and-white illustrations by artist Doug Wheatley.",
    },
    {
      id: "49",
      title: "The God of Small Things",
      author: "Arundhati Roy",
      imageUrl:
        "https://m.media-amazon.com/images/I/91saO95VziL._AC_UF1000,1000_QL80_.jpg",
      published_date: "Apr-1997",
      category: "Fiction",
      pages: "356",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the 'Love Laws' prevalent in 1960s Kerala, India.",
    },
    {
      id: "50",
      title:
        "American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer",
      author: "Kai Bird and Martin J. Sherwin",
      imageUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686079247l/80571.jpg",
      published_date: "Apr-2005",
      category: "Biography",
      pages: "784",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Biography of theoretical physicist J. Robert Oppenheimer, the leader of the Manhattan Project which produced the first nuclear weapons.",
    },
    {
      id: "51",
      title: "Life of Pi",
      author: "Yann Martel",
      imageUrl: "https://m.media-amazon.com/images/I/81E9oNSK3bL.jpg",
      published_date: "Sep-2001",
      category: "Adventure fiction",
      pages: "356",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "Life of Pi tells the magical story of a young Indian, who finds himself shipwrecked and lost at sea in a large lifeboat. His companions are four wild animals: an orangutan, a zebra, a hyena, and, most notably, Richard Parker, a Bengal tiger.",
    },
    {
      id: "52",
      title: "Heir",
      author: "Sabaa Tahir",
      imageUrl:
        "https://m.media-amazon.com/images/I/91RgySeWB+L._AC_UF1000,1000_QL80_.jpg",
      published_date: "Oct-2024",
      category: "Fantasy",
      pages: "528",
      availability: "Goodreads, Amazon/Flipkart",
      overview:
        "The lives of three young people as they grapple with power, treachery, love, and the devastating consequences of unchecked greed, on a journey that may cost them their lives―and their hearts.",
    },
  ],
};

app.get("/books", (request, response) => {
  response.json(booksData);
});

app.get("/books/:id", (request, response) => {
  const id = request.params.id;
  const book = booksData.books.find((book) => book.id === id);
  if (!book) {
    response.status(404).send({ message: "Book not found in the Site" });
  } else {
    response.json({ book });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});