<h1 align="center">ISAK DAHLING MUSIC</h1>

</br>
</br>
</br>

<h2>HOW TO START</h2>
<p>
  • Clone the repository.</br>
  • Navigate to the projects root folder in the terminal.</br>
  • Type "npm i" to install all required packages.</br>
  • Type "npm run dev" to run.</br>
  • Note: this website will NOT run locally without the .env file that is NOT provided in this repository.</br>
</p>

</br>
</br>
</br>

<h2>TABLE OF CONTENTS</h2>
<p>
  • <a href="#summary">Project idea summary</a>

  • <a href="#background">Background</a>

  &nbsp;&nbsp;&nbsp;• <a href="#personas">Personas and user stories</a>

  • <a href="#results">Results</a>

  &nbsp;&nbsp;&nbsp;• <a href="#resultsFromUserStories">Results from user stories</a>

  &nbsp;&nbsp;&nbsp;• <a href="#activity">Activity and time plan</a>

  &nbsp;&nbsp;&nbsp;• <a href="#technical">Technical evaluation and results</a>

  • <a href="#lessons">Lessons learned</a>

  • <a href="#references">References</a>
</p>

</br>
</br>
</br>

<h2 id="summary">Project idea summary</h2>
<p>My project was to create a website for my brother to show off his music to other artists and record labels. I decided to use a CMS to make it as easy as possible to update content. The website is designed to automatically update when a new song or news article is added.

I followed the plan with issues I had created on Trello and checked them off pretty quickly, but during the project new issues were often added. There were some parts I got stuck on like the “zoom” animations and sending emails from the email form but I eventually solved the problems after a lot of googling.

Overall, I’m very happy with the results and other people find my work impressive. This was the most fun project I’ve done during my time in school.</p>

<p>
  GitHub: https://github.com/MalcolmDahling/isak_dahling_music
  
  Live: https://isak-dahling-music.vercel.app/
</p>

</br>
</br>
</br>

<h2 id="background">Background</h2>
<strong>Describe your target audience and their interest in your project.</strong>

<p>The target audience are other artists and record labels and this website will make it easy for them to listen to my brothers music and contact him about deals and collaborations.</p>

<strong>Describe why you came up with the idea and why it was relevant for your target audience.</strong>

<p>My brother wanted a website and my other idea of creating a chess AI website seemed too difficult to achieve in 6 weeks.

It is relevant because all my brothers work is now collected in a single location which eliminates searching over many different platforms. It also contains an email form which makes it easier to contact him.</p>

<strong>Describe what kind of value your project brought.</strong>

<p>It brought value to my brother because he has something nice to show off. It brought value to me because I have something to show future employers. It brought value to fans of my brother’s music because they can now listen to all his songs from one place. It brought value to other artists and record labels because they can now listen to his music and contact him through the email form.</p>

</br>
</br>
</br>

<h2 id="personas">Personas and user stories</h2>
<strong>Summarize your user stories.</strong>

</br>
</br>

<p>
  <strong>UIfnar, 28, current user.</strong>
  </br>
  A regular listener to my brother’s music looking to find the latest song to listen to it.

  <strong>Rotheim, 33, new user.</strong>
  </br>
  Discovered the website on google and decides to look around and listen to a song or two. He wants the content easily available as the chance for him to leave the page is very high.

  <strong>Wulfborg, 19, artist.</strong>
  </br>
  Another artist looking to collaborate and wants to get in contact with my brother.

  <strong>Harrnard, 42, record label.</strong>
  </br>
  Works for a record label and is looking to find new artists to sign. Needs content and contact information easily available.

  <strong>Rognar, 37, wants information.</strong>
  </br>
  A CEO for a company looking to book my brother for a live performance, needs more information about the artist and an email address.

</p>

</br>
</br>
</br>

<h2 id="results">Results</h2>

<p>
  <strong>Summarize the results of your 6-week project.</strong>

  </br>

  <strong id="resultsFromUserStories">Results from user stories</strong></br>
  I tried to make the website fit all the user stories so that the website will be appropriate for all audiences. I believe that I did just that and I am happy with my work.
  
  </br>
  
  <strong id="activity">Activity and time plan</strong>
  </br>
  
  <strong>Summarize your activity and time plan. How did you work? Did it go according to plan? Hiccups?</strong>
  </br>
  I was way ahead of schedule from the start until the end, so I had lots of time to improve and change things. I got stuck a few times but 10 hours of googling later I managed to solve it.
  
  </br>
  
  <strong id="technical">Technical evaluation and results</strong>
  
  </br>
  
  <strong>Include a summary of your database, site map, function analysis, and how it panned out compared to the plan. Also, include a summary of your tech stack.</strong>
  </br>
  
  I do not have a site map as everything is on the same page, but I do have links in the menu that scrolls down the page when you click them.

  I would say the function analysis was successful. I managed to implement all the functionality that I wanted and everyone that tested the page found what they were looking for where they thought it would be.

  I use Contentful CMS as kind of a database, I use it to store images, news, links to music, etc. It will be easy for my brother to log in and update content.
  My tech stack is: React, Next, Typescript, Stitches, Sass, Contentful and various other libraries. I use Vercel to host the website.

  </br>
  
  <strong>Review and summarize your test plan; how did it work - did you find it useful?</strong>
  </br>
  I tested the website with my brother throughout the project and implemented his ideas. Not all of his feedback was useful as some of it involved changes that were too big and would have taken too long to implement but overall, I would say it was useful.
  I also let friends and family test the website both when it was done and throughout the project. Their feedback was different to my brothers as they focused more on accessibility than visuals. I would say it was even more useful than my brothers feedback and I implemented most of the changes they suggested.
  I also got feedback from the people at my LIA which was not as useful as previous feedback. This was because the website was mostly done at that point so there was not much to improve. I did however implement some small changes that was suggested to me from them.

  </br>
  
  <strong>Here are some of the changes I implemented in response to feedback I was given:</strong>
  </br>
  The top of the image and text in the menu was not lined up properly, fixed.
  Icons in the menu were too big in desktop mode, fixed.
  The layout in the menu did not work properly in certain laptop resolutions, fixed.
  The menu didn’t cover the whole page height in some resolutions, fixed.
  Disable scrolling after opening the menu, fixed.
  Intro was too long, fixed.
  Added arrow on hero page to show that there is content when you scroll down, fixed.
  Menu animation was too long, fixed.
  Improved performance of the “zoom in” animation, fixed.
  Changed the layout of Releases, fixed.
  Added animations to make the news section look better, fixed.
  Added a visual transition between the news and about page, fixed.
  Increased font size, fixed.
  Increased contrast in the menu, fixed.
  Changed the gap between links in the menu, fixed.
  Changed the hamburger icon to a solid white in mobile mode to fix issues with mix-blend-mode, fixed.
</p>

</br>
</br>
</br>

<h2 id="lessons">Lessons learned</h2>
<p>
  <strong>Summarize 5 lessons learned during the project.</strong>
  </br>
  Make sure to often take breaks.</br>
  Don’t be afraid to change things that already work.</br>
  Try to make the design uniform across the whole page.</br>
  Use existing libraries instead of writing all the code yourself.</br>
  Ask experienced people for advice.</br>
</p>

</br>
</br>
</br>

<h2 id="references">References</h2>
<p>
  <strong>Add references and credits where due.</strong>
  </br>
  Thanks to my brother, parents, friends and LIA-colleagues for their feedback.</br>
  Thanks to https://martingarrix.com/ for the inspiration for the design.
</p>
