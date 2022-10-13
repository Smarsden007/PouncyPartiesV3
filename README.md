## Pouncy Parties V3 ##

This project is built using styled components with some css being used for a few components.

The focus is to fully automate the booking/checkout process and improve theuser experience.

PayPalCheckout.js located in the component folder holds all the different packages rendered for the drop down selection.( Project is currently using a client ID that is for testing only, ENV folder is created and will be used to ensure client id stays hidden)

TestComp.js soon to be renamed is the drop down function that returns the selected 'package' as explained above.

CastleCheckout.js (soon to be able to hold all bouncers.) holds the above components that are returned after user fills out the form and selects a date and start time. 

Calendly.js is where the booking process begins, holding instructions and the component that the user selects date, time and answers a series of questions.