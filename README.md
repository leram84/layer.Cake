# layer#Cake
layer#Cake is a theme engine for [Organizr](https://github.com/causefx/Organizr). It will take 7 user submitted colors (5 fill layers and 2 text layers) and apply a well thought out logic to generate your theme.

## Features

* ** **New** ** Live updates!! (more below)
* Complete color customization
* Intelligent color logic based on 7 user submitted color codes
* Fast color switching via color variables
* Highly modular and extensible via custom add-ons
* Custom buttons on homepage that take you directly to other tabs
* Recently Added background tile with webkit hover animations
* Login/logout pages, chat room, homepage, settings, and all miscellaneous pages included
* And much more to come!

## Installation Instructions

You now have 3 install paths to choose from: Basic Live Default, Advanced Live Custom, and Super Duper Advanced Static :)

### Basic Live Default
(I just wanna dark theme this thing and move on!)

Ok, SUPER simple. 
1) Copy and paste [Default.css](https://github.com/leram84/layer.Cake/blob/master/Live/Default.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon), and then edit the 7 colors with your own hex codes. 
2) Copy and paste [Homepage.html](https://github.com/leram84/layer.Cake/blob/master/Live/Homepage.html) to your HTML box in Organizr (Settings/Edit Homepage/Gear Icon).
3) All all done! You're probably gonna want to go eat some cake now :)

| Pros  | Cons |
| ------------- | ------------- |
| * Fast and Easy Install  | * Limited Customization  |
| * Live Updates so you don't have to adjust manually after every Organizr update  | * Live Updates also mean you are at the mercy of this repo  |

### Advanced Live Custom
(I need more colors!)

This setup will allow you to customize a bunch of stuff (Homepage, login, chat, miscellaneous, and Calendar) individually.
1) Copy and paste [Custom.css](https://github.com/leram84/layer.Cake/blob/master/Live/Custom.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon), and then edit the 32 colors with your own hex codes (though you will likely reuse many). 
2) Copy and paste [Homepage.html](https://github.com/leram84/layer.Cake/blob/master/Live/Homepage.html) to your HTML box in Organizr (Settings/Edit Homepage/Gear Icon).
3) ???
4) Profit

| Pros  | Cons |
| ------------- | ------------- |
| * Tons of Custom Colors!  | * Will take a little longer to configure  |
| * Live Updates so you don't have to adjust manually after every Organizr update  | * Live Updates also mean you are at the mercy of this repo  |

### Super Duper Advanced Static
(I fork cake like this for breakfast)

If for whatever reason you don't want to sync your theme to this repo and want to manually manage and update it on your own, you can simply copy and paste whatever [CSS](https://github.com/leram84/layer.Cake/tree/master/CSS) or [HTML](https://github.com/leram84/layer.Cake/tree/master/HTML) you would like directly into Organizr.


| Pros  | Cons |
| ------------- | ------------- |
| * God mode... you can have whatever you want  | * This is the most time consuming option  |
| * You have complete customization control over everything  | * Will have to manually update your theme after every new Organizr feature is added  |

## Add-Ons

Once your base theme is setup, you can also make some customization's and additions via [CSS](https://github.com/leram84/layer.Cake/tree/master/CSS/Add-Ons) and [HTML](https://github.com/leram84/layer.Cake/tree/master/HTML/Add-Ons) Add-ons

[Remove Blur Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Blur.css)
> **Description**:  Remove the Blur Effect that displays over ACTIVE icons in the sidebar. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/2949e3da/CSS/Add-Ons/Remove-Blur.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Close Button Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Close-iFrame-Button.css)
> **Description**:  Remove the Close iFrame Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/2949e3da/CSS/Add-Ons/Remove-Close-iFrame-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Popout Button Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Popout-Button.css)
> **Description**:  Remove the iFrame Popout Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/2949e3da/CSS/Add-Ons/Remove-Popout-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Homepage Background Image Add-On](https://github.com/leram84/layer.Cake/blob/master/HTML/Add-Ons/Homepage-Background-Image.html)
> **Description**:  Add an image as your homepage background. <br/>
> **Installation**: Copy and paste [this code](https://github.com/leram84/layer.Cake/blob/master/HTML/Add-Ons/Homepage-Background-Image.html) to the bottom of your HTML box, and edit the `<<User Edit>>` line.

[Custom Button Module Add-Ons](https://github.com/leram84/layer.Cake/tree/master/HTML/Add-Ons) 
> **Description**:  Adds Custom Buttons to the top of your homepage that will navigate to other tabs INSIDE Organizr <br/>
> **Installation**: Choose your layout from the [HTML Add-On Section](https://github.com/leram84/layer.Cake/tree/master/HTML/Add-Ons) and paste the code to the bottom of your HTML box. Then edit the 6-8 `<<User Edit>>` lines identified in the code.

## Roll Credits

* Obviously none of this would be possible without [@causefx](https://github.com/causefx) and the amazing work he has done with [Organizr](https://github.com/causefx/Organizr) But much more than that (and on a personal level) he has been one of the most altruistic devs I have yet to come across! On top of the one man show that is Organizr... the dude literally spends hours a day closing issues on git/reddit/gitter and is personally responsible for hundreds (thousands?) of running web servers. Cheers homie!

* Live updates are made possible by the awesome [Rawgit](https://github.com/rgrove/rawgit) project. 

* And finally the homepage js for live updates is courtesy of [w3schools](https://www.w3schools.com/lib/w3.js)
