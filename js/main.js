


function quotePress () {
    var quotes = [
        {image:`<img class="w-100 " src="Images/Oscar Wilde.jpg" alt="Oscar Wilde">`,quote:"“Be yourself; everyone else is already taken.”" , writer : "Oscar Wilde"},
        {image:`<img class="w-100 " src="Images/Marilyn Monroe.jpg" alt="Marilyn Monroe">`,quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , writer : "Marilyn Monroe"},
        {image:`<img class="w-100 " src="Images/Albert Einstein.jpg" alt="Albert Einstein">`,quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , writer : "Albert Einstein"},
        {image:`<img class="w-100 " src="Images/Frank Zappa.jpg" alt="Frank Zappa">`,quote:"“So many books, so little time.”" , writer : "Frank Zappa"},
        {image:`<img class="w-100 " src="Images/Marcus Tullius Cicero.jpg" alt="Marcus Tullius Cicero">`,quote:"“A room without books is like a body without a soul.”" , writer : "Marcus Tullius Cicero"},
        {image:`<img class="w-100 " src="Images/Bernard M. Baruch.jpg" alt="Bernard M. Baruch">`,quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" , writer : "Bernard M. Baruch"},
        {image:`<img class="w-100 " src="Images/Mae West.jpg" alt="Mae West">`,quote:"“You only live once, but if you do it right, once is enough.”" , writer : "Mae West"},
        {image:`<img class="w-100 " src="Images/Mahatma Gandhi.jpg" alt="Mahatma Gandhi">`,quote:"“Be the change that you wish to see in the world.”" , writer : "Mahatma Gandhi"},
        {image:`<img class="w-100 " src="Images/Robert Frost.jpg" alt="Robert Frost">`,quote:"“In three words I can sum up everything I've learned about life: it goes on.”" , writer : "Robert Frost"},
        {image:`<img class="w-100 " src="Images/Albert Camus.jpg" alt="Albert Camus">`,quote:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”" , writer : "Albert Camus"},
        {image:`<img class="w-100 " src="Images/Mark Twain.jpg" alt="Mark Twain">`,quote:"“If you tell the truth, you don't have to remember anything.”" , writer : "Mark Twain"},
        {image:`<img class="w-100 " src="Images/Maya Angelou.jpg" alt="Maya Angelou">`,quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”" , writer : "Maya Angelou"},
        {image:`<img class="w-100 " src="Images/Elbert Hubbard.jpg" alt="Elbert Hubbard">`,quote:"“A friend is someone who knows all about you and still loves you.”" , writer : "Elbert Hubbard"},
        {image:`<img class="w-100 " src="Images/Andre Gide.jpg" alt="Andre Gide">`,quote:"““It is better to be hated for what you are than to be loved for what you are not.”" , writer : "Andre Gide"},
    ]
    
    var quote = document.getElementById("quote") ;
    var writer = document.getElementById("writer");
    var quoteImage = document.getElementById("quote-image");
    var ran = Math.floor(Math.random() * quotes.length);
    quote .innerHTML = quotes[ran].quote ;
    writer .innerHTML = quotes[ran].writer;
    quoteImage .innerHTML = quotes[ran].image;
}