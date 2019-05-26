## PlantR App Project - React Native
Ever think your green thumb isn't so green? Hate the idea of going away and possibly starving your plants, or if you're like me, you need a reminder to water your plants and even then sometimes forget? Fret no more, we have built an easy to use app to take the guesswork and worry away! 

This was a group project using React Native to automatically water your plants from your phone using a Raspberry Pi, arduinos, water pumps, hoses, a water receptacle, and of course...water and plants to water.  

The project is still being iterated on to add more features and functionalit for the user. 

**Current features:**
* Create an account and register your Raspberry Pi
* Secure login 
* Dashboard where listener is running to pick up newly plugged in devices (Arduinos) to set to your account
* Dashboard to display status of device (Arduinos), if functional, on, or other status (some sensor not working)
* Dashboard to show all devices (Arduinos) and set device details, plant to water, watering schedule, amount of water
* Realtime update to database when editing/adding to schedule, one API call when saving changes
* Easy to use and intuitive! Set it and forget it

**Roadmap:**
* Allow more sensor data reporting (temperature, humidity, moisture, light, water amount)
* More robust statuses
* Ability to see historical data in easy to digest graph format
* Reset password
* Enhanced data reporting

**Additional Project Code Repositories:**
* [API code](https://github.com/eblouin876/project-x-api)
* [Raspberry Pi and Arduino code](https://github.com/eblouin876/project-x-pi)

**To Demo the App:**
Phone: (must have expo App downloaded on your phone) 
  1. Log into Expo with the credentials: 
      user: nkanderson86
      pw: 1234
  2. Scan the QR code below with your phone and open in Expo
  3. Use the credentials below to log in:
      user: Bret
      pw: bret
      
Browser (not recommended, very slow with the emulator): 
  1. Click the [Expo project link](https://expo.io/@nkanderson86/projectx)
  2. Click tap to play and wait for your turn in the queue
  3. When page loads, scroll down to click the button 'Open project using Expo'
  4. Log in to the app using the credentials below: 
      user: Bret
      pw: bret
