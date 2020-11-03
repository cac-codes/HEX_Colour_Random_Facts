const express = require('express')
const app = express()
const _ = require('underscore')
const port = 3000




let colorTrivia =  [
    
    {fact: "Ultramarine's name comes from the Latin ultramarinus, literally 'beyond the sea', because the pigment was imported into Europe from mines in Afghanistan by Italian traders during the 14th and 15th centuries.",
    color: "#120A8F",
    link: "https://press.princeton.edu/books/hardcover/9780691181363/blue" },
    
   

    {fact: "This colour was introduced in 2014 to life of Rebecca Meyer, the daughter of Eric Meyer, a respected programmer and CSS writer. Rebecca died of brain cancer at the age of six; the hue was chosen to reflect her favorite color.",
    color: "#663399",
    link: "http://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/" },  

    {fact: "In 2001, the X11 colout set was presented which aimed to name colours in CSS similiar to crayon set rather than through Hex Code. this colour 'indian red' named taken from a Crayola colour(though the crayon has since been renamed in response to the ethical cconsiderations).",
    color: "#CD5C5C",
    link: "https://en.wikipedia.org/wiki/Web_colors" },  

    {fact: "In 1988, X11R2 arrived with the addition of three colors, including this identical shade of 'gray' and 'grey'. Apparently the programmers at Hewlett-Packard couldn’t remember the proper spelling so including both names, it was thought, would prevent errors.",
    color: "#808080",
    link: "https://en.wikipedia.org/wiki/X11_color_names#Shades_of_gray" },  

  
    {fact: "Carbon black is one of the oldest known color pigments.  Global consumption of carbon black, estimated to reach 19.2 million metric tons by 2022. 70% percent of the pigment is used in tyres",
    color: "#293542",
    link: "https://en.wikipedia.org/wiki/Carbon_black" },

    {fact:"Also known as 'Drunk tank pink,' this color has been used to calm violent prisoners in jails.",
    color: "#FF91AF",
    link: "http://orthomolecular.org/library/jom/1988/pdf/1988-v03n04-p202.pdf" },


    {fact: "Judges in the middle ages dressed in red",
    color: "#800020",
    link: "https://press.princeton.edu/books/hardcover/9780691181363/blue"},


    {fact: "In the 15th century painting Saint Wolfgang and the Devil by Michael Pacher, the Devil is green",
    color: "#228B22",
    link: "https://commons.wikimedia.org/wiki/File:Michael_Pacher_004.jpg"},
    
    {fact: "Early monochrome computer monitor used a green 'P1' phosphor as at the time green phosphors were the cheapest, brightest, and had the longest emission time.",
    color: "#66FF66",
    link: "http://www.labguysworld.com/crt_phosphor_research.pdf"},
  

    {fact:"The dark gray colour that your eyes sees just before complete darkness takes over when lights are turned off is called 'eigengrau'.",
    color: "#16161D",
    link: "https://en.wikipedia.org/wiki/Eigengrau"},
    

    {fact:"Yellow ochre pigment made from clay, was one of the first colors used in prehistoric cave art. The cave of Lascaux has an image of a horse colored with yellow estimated to be 17,300 years old.",
    color: "#c47b46",
    link: "https://en.wikipedia.org/wiki/Ochre"},

    
    {fact: "The ancient Greek word for a light blue ' glaukos' also could mean light green, grey, or yellow.",
    color: "#add8e6",
    link: "https://press.princeton.edu/books/hardcover/9780691181363/blue"},
    


    {fact: "The Greek word for dark blue 'kyaneos' could also mean dark green, violet, black or brown.",
    color: "#00008B",
    link: "https://press.princeton.edu/books/hardcover/9780691181363/blue"},

 
    
    {fact:"International orange is a color used in the aerospace industry to set objects apart from their surroundings. ",
    color: "#FF4F00",
    link: "https://en.wikipedia.org/wiki/International_orange"},
 


    {fact: "Before the 1500s, people europe referred to the colour orange as 'yellow-red'. It wasn’t until citrus fruits were brought from India to Europe the seventeenth century that a word was developed in europe. At first, Europeans recognized the color but didn’t yet know its name and often referred to oranges as ‘golden apples",
    color: "#FFA500",
    link: "https://www.theparisreview.org/blog/2018/10/31/blaze-orange-the-color-of-fear-warnings-and-the-artificial/"},
    
 

    {fact: "The Golden Gate Bridge is painted international orange to make it visible in the fog.",
    color: "#F04A00",
    link: "https://en.wikipedia.org/wiki/Golden_Gate_Bridge"},
 


    { fact: "In the Middle Ages, those who worked with blue and black dyes belonged to separate guilds from those who worked with red and yellow dyes, and were often forbidden to dye any other colors than those of their own guild. Consequently, most purple fabric was made by the dyers who worked with red so Medieval violet colors were inclined toward red.",
    color: "#8B008B",
    link: "https://en.wikipedia.org/wiki/The_Secret_Lives_of_Colour"},
 

    { fact: "Allura Red AC is by far the most commonly used red food dye in the United States, annual production in 1980 was greater than 2.3 million kilograms. In Norway and Iceland, it was banned between 1978 and 2001.",
    color: "#ED2E38",
    link: "https://en.wikipedia.org/wiki/Allura_Red_AC"},

  ]
  
//   colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  
  
  //remember sinatra - routes
  app.set('views', './views')
  app.set('view engine', 'ejs')
  
  
  app.get('/', (req, res) => {
      
      // var randomColor = _.sample(colors)
      // res.render('about', {quote: randomColor})   
      const keys = Object.keys(colorTrivia);
      const randomIndex = keys[Math.floor(Math.random() * keys.length)];
      const item = colorTrivia[randomIndex];
      const randomFact = item.fact
      const randomFactColor = item.color
      const randomFactLink = item.link

      // console.log(item.fact);

      res.render('about', {quote: randomFact, color: randomFactColor, link: randomFactLink }) 

   })


   app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
  

