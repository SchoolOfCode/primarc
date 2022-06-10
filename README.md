Hackathon eCommerce site built in <5 hours by the CABJ ("Cabbage") Team!
<p align="center">@jafcoder
@AmandaRichards
@theusufructuary
@bM7tcHF88GBxDni</p>

# Primarc
![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Primarc%20Demo.gif)
![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Screenshot%20and%20Live%20address.png)

### Spec, Ideation and Design Process
![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Figma%20UX.png)
 - Wrote user experiences to help design the journeys/pathing necessary for our MVP
 - Blocked out low to high fidelity designs using Figma
 - Mobile first design gives us flexibility and ease for desktop development at a later stage after MVP
 - Colour schemes, dark mode spec required
![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Ideadtion%20and%20Design%20Process%202.png)
 - Experimented with some features (carousel for items, categories for items, searchbar)
     - Researching and testing new npm module we found online in CodeSandBox
 - Exploring eCommerce API and new tech (e.g. carousel modules, libraries)
 - Breaking down design into components and creating a component structure that plans States and Behaviours

### Project Management and Workflow
<img src="https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Trello%20Mid%20Point.png">

 - Chose Trello over Jira as we only had a day
 - Greatly helped everyone know the direction we are heading in
 - User experience/journey assisted creating user acceptance criteria as tasks and features here
 - Helped us delegate tasks
 - Helped us see where everyone else is at with tasks
    - More granular columns (CSS, Testing) for programming tasks

![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Workflow.png)
 - Initially setup the repository boilerplate together, setup up a dev branch, delegated tasks, set the next stand up time and split into two teams to start with development
 - Frequent stand-ups, two per hour ish
     - Helped us reprioritise features as necessary e.g. sticking to display spec over carousel, light/dark mode over burger menu
 - Helped us communicate what all our feature branches were doing and greatly reduced conflicts for pull requests later

### Automated Unit Testing
![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Testing.png)
 - Automated unit testing of rendering using Jest and React Testing Library
 - Created a few high impact tests so we know that future changes aren’t breaking key features
 - Using dummy props data to test Card component

### Additinal Features we might not have mentioned
- Mobile and desktop responsive site
- We found the API was sometimes slow to load so there is a Loading Message when Category components are awaiting
- We test for image alt text
- Data is fetched in a reusable component (no prop drilling issues)

### Next steps
 - 1 hour - add basic search functionality using state to capture and render using user input
 - 1.5 hours - full automated testing of landing page
 - 1.5 hours - favourite button working
 - 3 hours - two extra web pages and include routes to other webpages on the website via the nav bar

![](https://github.com/bM7tcHF88GBxDni/README-GIF-Storage/blob/main/primarc/Team%20Cabbage%20(CABJ).png)
