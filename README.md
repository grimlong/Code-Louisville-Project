# Code-Louisville-Project
My project for Code Louisville

I made a travel site for a fictional place in the Dungeons & Dragons universe that a Dungeon Master can use to get their players prepared to start The Curse of Strahd adventure.

My navigation bar is a flexbox with icons from a site called Fontawesome. It is responsive and will move to the bottom of the screen and change from a drawer that pulls out on
hover to a banner that is fixed to the bottom. 

The navigation bar also has javaScript that changes the theme of the nav bar. I plan to have it alter the whole page but I am want to learn more about UX to determine which
colors that should be used.

Most of the links go to an under construction page I created or a page I intend to use as reference the bottom of the page has a link to a page that houses a character Stats 
Generator. 

 I spent way too much time on the Stat Generator. It started out as a function that pushed 3 random numbers made with Math.random into an array, then added them together and
 used document.write to print them to the page with less than desirable results. This was over 100 lines of code because it was around 20 lines repeated 6 times, one for each 
 stat. I used a for loop to shorten it but printing to the page was still not working for me.

The second iteration used getElementById to display the number. This shortened the code to around 25 lines. I brought this to class to show them my journey as it lined up with
what we watched in Treehouse that week. My mentor informed me that I could shorten my code even further if I pushed a variable to my function from my HTML.
This knocked it down to just 5 lines.

The CSS on the dice page I did after reading a UX article on darkmode. It has flexboxes to adjust the layout of the content and only allows it to display in two formations 
using media queries to restrict it. I had to put flexboxes inside my flexboxes to get the numbers to center nicely.

I used the Live Server extension for VS code when I was writing it so please use that to view the page.
