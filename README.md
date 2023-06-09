# Higher or Lower

This card-guessing game is a simple and engaging game that requires players to predict whether the next card drawn from the deck will be higher or lower than the card they are faced with. It offers a straightforward gameplay experience that appeals to a broad audience. Its accessible and quick gameplay makes it an ideal choice for some light entertainment when a person has a minutes spare or can be incorporated into a more competetitive game for family and friends.

![Screenshot of the different displays](assets/images/Responsiveness.jpg)


## Features

### The Header
  - Positioned above the main game the header displays the name of the game in large letters that contrast clearly with the background. The title describes clearly the nature of the game.
  - The image is symbolic of the instruments of the game which are of course playing cards. It shows three cards with backs facing to the front.

![Screenshot of the title of the game with a 3 backward facing cards logo positioned to its left](assets/images/header.jpg)

### Main Section
 - Displays clearly the current card image against a dark green background.
 - The next card is displayed once the user makes their choice on the buttons below.

![Screenshot of the display card area with current card against a green background](assets/images/display_card.jpg)

### Game Options

- The game options are the two choices mentioned in the game title: Higher or Lower. These choices are made with interactive buttons which highlight in green when hovered over and red when the choice is clicked.

![Screenshot of the two game buttons - Higher and Lower](assets/images/buttons.jpg)

### Game Results

- After a player makes their choice the game reveals the next card from the deck and increments and displays the score by one for each correct guess.
- When an incorrect guess is made the game displays a message at the top of the screen to state that the game is over and to start another game.
- A new game is started and the score reset when the 'OK' is clicked in the 'game over' alert.
- When two cards values are the same the computer displays a message at the top of the screen to state this and encourages the user to make another choice.
- The score is clearly displayed underneath the card image in clear and contrasting colours which tie in the red of the heading and the green background in the display card area.

![Screenshot of the incorrect guess/game over message](assets/images/game_over_alert.jpg)

![Screenshot of the same card message](assets/images/same_card_alert.jpg)

![Screenshot of the player score area](assets/images/score.jpg)

### The Footer

- The footer is located beneath the game score.
- It is valuable as it shows the game rules and an encouraging message alluding to the nature of the game. Luck!

![Screenshot of the footer shoing the gameplay rules](assets/images/rules.jpg)

## Testing

 - Tested game in Google Chrome, Microsoft Edge and Mozzila Firefox and it works and views correctly
 - I confirmed that game results are correct and consistent
 - I confirmed that each section is visible and easy to understand
 - I confirmed that the colours and fonts chosen are easily readable and accessible by running it thoough Lighthouse.

![Screenshot of the JSHint results](assets/images/lighthouse.jpg)

## Validator Testing

- No errors were found when passing through W3C Validator
- No errors were found when paaing through official (Jigsaw) validator
- No significant errors were found when passing through JSHint, but there were some warnings included

![First screenshot of the JSHint results](assets/images/JSHint.jpg)
![Second screenshot of the JSHint results](assets/images/JSHint1.jpg)

## Deployment

- Site deployed to GitHub pages by the following steps:

  - Go Github repository

  - Open settings

  - Go to Pages

  - From the Source drop-down menu select to deploy from a branch

  - From the branch drop-down menu select main

  - Click Save and the site link to the website is provided

## Left to Implement

 - I would like to adjust the size of the game on the smaller screens in the future

## Bugs

- None

## Credits

- The Love Maths Project and Rock, Paper, Scissors were both inspirations for the code in this project.

- Google, W3C Tutorial and Youtube were also excellent resources for the code in this project

- Mentor sessions through Code Institute

- The logo image credit - href="http://www.freepik.com">Designed by brgfx / Freepik

- The card credit - freesvg.org