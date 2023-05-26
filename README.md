# Clock App

A clock app built using React.js that displays both a digital clock and an analog clock. It also includes a sliding switch to toggle between day and night mode.
![2023-05-26 03 26 31](https://github.com/Shetteemah/digital_clock/assets/50025402/341c114c-a8b9-45e2-9b96-e432f2ec84c6)

## Frameworks, Language, and Tools Used

- React.js: A JavaScript library for building user interfaces.
- CSS: Used for styling the clock app.
- Git: Used for version control and collaboration.

## Functionality

The clock app provides the following functionality:

### Digital Clock

The digital clock displays the current time in a 12-hour format `HH:MM:SS`. The time updates every second.

### Analog Clock

The analog clock displays the current time using hour, minute, and second hands. The rotation of the hands is calculated based on the current time. The hour hand moves in a 12-hour cycle, the minute hand moves in a 60-minute cycle, and the second hand moves in a 60-second cycle. The clock updates every second.

### Sliding Switch

The `sliding switch` allows the user to `toggle` between day and night mode. It visually represents the current mode with a slider that moves between two states: day and night. The switch changes the background colors of the app to reflect the selected mode.

- Day Mode: The background color is set to a light blue color, representing the `day sky`.
- Night Mode: The background color is set to a dark color, representing the `night sky`.

Clicking on the slider toggles the mode between day and night.

## Getting Started

To run the clock app locally, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/Shetteemah/digital_clock
```
2. Navigate to the project directory:
```shell
cd digital_clock
```
3. Install the dependencies:
```shell
npm install
```
4. Start the development server:
```shell
npm start
```
5. Open your browser and visit http://localhost:3000 to see the clock app.
## License
This project is licensed under the MIT License. See the LICENSE file for more information.
