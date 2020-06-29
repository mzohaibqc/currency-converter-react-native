<img src="assets/exchange.svg" alt="Logo" width="100" style="text-align: center;" >

# Currency Converter (react-native)


## How to run
- Install nodejs
- Install react-native globally (npm i -g react-native)
- Install XCode or Android Studio
- cd appFolder
- npm i
- npm run ios or npm i android



This project contains react-native application to convert currencies with following features:

## Screens:

### Splash Screen

This page is shown for a very short duration before loading app state like saved auth state, theme, favorite currencies.

### Login
This screen contains username and password inputs and a button. When login button is pressed, credentials are matched and if valid credentials are provided, it will navigate to Home screen. 
Credentials:
username: Admin
password: Admin

<img src="assets/login1.png" alt="Login Screen Keyboard Closed" width="250"/>
<img src="assets/login2.png" alt="Login Screen Keyboard Open" width="250"/>

### Home
Home screen contains an animated logo showing base currency and target currency and two currency fields.
Writing in one input, 2nd input shows converted value for target currency. User can switch base and target currencies either by clicking on animated logo icon or a conversion icon between two inputs. Every input field has a addon which shows selecetd currency. On clicking/toching addOn, Currencies List screen is shown.

<img src="assets/home.png" alt="Home Screen" width="250"/>

### Currencies List
Currencies List screen contains all currencies supported by the currency api to fetch currencies exchange rates. 
Api url: https://api.exchangeratesapi.io 

<img src="assets/currencies.png" alt="Currencies Screen" width="250"/>

### Themes
Themes screen contains a FlatList which shows Theme item which contains name and color in every row. On clicking color circle/icon, app theme gets changed and applied all over app.

<span style="color: #ff7875">*Red*</span>

<span style="color: #ff7a45">*Volcano*</span>

<span style="color: #ffa940">*Orange*</span>

<span style="color: #ffc53d">*Gold*</span>

<span style="color: #bae637">*Lime*</span>

<span style="color: #73d13d">*Green*</span>

<span style="color: #36cfc9">*Cyan*</span>

<span style="color: #40a9ff">*Blue*</span>

<span style="color: #597ef7">*Geekblue*</span>

<span style="color: #9254de">*Purple*</span>

<span style="color: #f759ab">*Magenta*</span>

<span style="color: #737373">*Grey*</span>

<img src="assets/themes.png" alt="Themes Screen" width="250"/>

### Options
This screen contains links to other pages in app like Themes, Favorties, an external link to Api being used for currency conversion and logout button which removes auth state and moves users to Login screen.

<img src="assets/options.png" alt="Options Screen" width="250"/>

### Favorites
This page contains user's favorite currencies which user can mark favorite from Currency List screen.

<img src="assets/favorites.png" alt="Favorties Screen" width="250"/>


## Testing & Code Coverage
This is a work in progress.
