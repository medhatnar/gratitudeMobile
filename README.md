# Daily Gratitude ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Stand In Logo")
gratitude + meditation app

### Overview:
Daily Gratitude is a simple app created to help the user start their day on a calming and positive note.

Upon opening the app the user is prompted to choose between one of various meditation themes, such as Ocean, Nature, White Noise, or even Guided Meditation for beginners.

Once a selection is made, the user is brought to a page where a timer, set to the user's time of choice, will start to countdown. The countdown is the amount of time the user will have to meditate or, without doing anything else, relax to the themed selected sounds.

After the meditation timer is up, the user will be brought to a page which contains an input field to enter something you are grateful for. The gratitude entry only occurs once per day.

The user is then brought back to the home page where they can optionally select another meditation or take a look at their gratitude calendar, which shows all of their past daily gratitude entries.

### Motivation:
   The original idea came from Malika Butler, a colleague who thought a gratitude app would be a great learning tool when learning new technologies that revolve around persistence, different platforms, and styling.   
We decided to include the meditation portion because there are a handful of meditation and gratitude apps out there, but none that combine the two. We believe meditation can help bring the user to a calm state which will help when reflecting on the things that make them happy.

### Tech Stack:
Frontend: Javascript, React Native, Styled-Components
Backend: Python, Flask

### Specs:

* Design Inspiration - https://dribbble.com/shots/6754418-Meditation-App

* Landing Page:

   1. Contains Logo Image
   2. Have a sign in form and an option to skip sign in.


* Menu + Menu icon that produces a side collapse with the following options:
  
  
  The options here will be:
          1. Login/Logout
          2. About
          3. Gratitude Calendar (only available if user is loggedin).
   
* Home Page:

    1. Contains a splash image that alternates per day.
    2. A greeting that will be generic for new users, but specific to logged in users.
    3. Menu "cards" to select the meditation theme you would like.

* Meditation Page:


   1. Background Image and color scheme matching the selected theme.
   2. A timer set to user's selected meditation time.
   3. A pause and play button. 
   4. Alternating inspirational quotes on a "half-card" at the end of the view page.


* Gratitude Input:
   1. Once the meditation is over, an input field will appear with a submit button.
   2. Above the input field will be a stylized prompt stating, "Enter something you are grateful for".
   3. Once the user enters the gratitude and hits submit, they will be rerouted to the home page if logged in. If not logged in, they will have the option to log in or return to the home page.
   
* Calendar Page:
   1. Roughly based on the design of the far left view: https://dribbble.com/shots/6685452-Diary-UI
   2. Should have a dot below the dates where a gratitude was entered.
   3. When selecting a day, the entry appears at the bottom with the meditation you did that day as well.
