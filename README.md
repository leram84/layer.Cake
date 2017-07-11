# layer#Cake
layer#Cake is a theme engine for Organizr
It will take 7 user submitted colors (5 fill layers and 2 text layers) and appply a well thought out logic to generate your theme.

## Features

* Complete color customization
* Intelligent color logic based on 7 user submitted color codes
* Fast color switching via color variables
* Highly modular and extensible via custom modules
* Custom buttons on homepage that take you directly to other tabs
* Recently Added background tile with webkit hover animations

## Installation Instructions

1) Copy and paste [user-settings.css](https://github.com/leram84/layer.Cake/blob/master/Theme/user-settings.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon), and then edit the 7 colors with your own hex codes. 
2) Copy and paste [global-settings.css](https://github.com/leram84/layer.Cake/blob/master/Theme/global.css) to your CSS box BELOW the user settings.
3) Copy and paste [homepage.html](https://github.com/leram84/layer.Cake/blob/master/Theme/homepage.html) to your HTML box in Organizr (Settings/Edit Homepage/Gear Icon).
4) ???
5) Profit

## Adding Custom Modules

Once your base theme is setup, you can also make some customizations and additions via [custom modules](https://github.com/leram84/layer.Cake/tree/master/Modules).

[The Custom Chat Page Module](https://github.com/leram84/layer.Cake/blob/master/Modules/custom-chat-page.css) and [The Custom Login Page Module](https://github.com/leram84/layer.Cake/blob/master/Modules/custom-login-page.css) (to use different color sets than homepage) can be installed by OVERWRITTING the default modules in the CSS box.

[The Remove Blur Module](https://github.com/leram84/layer.Cake/blob/master/Modules/remove-blur.css) (to remove the blur effect that shows when a tab is active) can be installed by pasting it to the very bottom of your css box.

And any of [The Custom Button Modules](https://github.com/leram84/layer.Cake/tree/master/Modules) can be installed by pasting to the very bottom of the HTML box and editing the 6 or 8 user edit lines that are identified in the code. 
