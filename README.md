# react-miniprojects

This application is about a "Choose your own adventure".

You will be presented with a text describing a situation and two options (A or B) to react to the situation. Each of these options will take you through the story in one way or another, depending on your choices.

Inside the "components" folder, you will find a file called "data.json" in which you will see an array of objects, which is the one used for the text of the story as well as for the options.

As you can see, it is a linear story. If you choose an option, it will give you a unique text. However, you will have the same consequences as if you had chosen the other option. This is to avoid having an extremely confusing JSON that you have to spend a lot of time deciphering.

You will have the possibility to see extra functionality:

As you make "A" or "B" choices, these will be recorded as follows:

The last choice the user made (e.g., "Previous choice: A") is shown on the screen.

All previous selections are displayed (e.g., "Previous: A B A").

