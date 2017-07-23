# layer#Cake
layer#Cake is a theme engine for [Organizr](https://github.com/causefx/Organizr). It will take 7 user submitted colors (5 fill layers and 2 text layers) and apply a well thought out logic to generate your theme. There is a lot of extensibility here, but if you just want to skin your site, it can be done in seconds.

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
1) Copy and paste the contents of [Default.css](https://github.com/leram84/layer.Cake/blob/master/Live/Default.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon), and then edit the 7 colors with your own hex codes. 
2) That's it... seriously, you're all done! You're probably gonna want to go eat some cake now :)

| Pros  | Cons |
| ------------- | ------------- |
| * Fast and Easy Install  | * Limited Customization  |
| * Live Updates so you don't have to adjust manually after every Organizr update  | * Live Updates also mean you are at the mercy of this repo  |

### Advanced Live Custom
(I need more colors!)

This setup will allow you to customize a bunch of stuff (Homepage, login, chat, miscellaneous, and Calendar) individually.
1) Copy and paste the contents of [Custom.css](https://github.com/leram84/layer.Cake/blob/master/Live/Custom.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon), and then edit the 32 colors with your own hex codes (though you will likely reuse many). 
2) Profit

| Pros  | Cons |
| ------------- | ------------- |
| * Tons of Custom Colors!  | * Will take a little longer to configure  |
| * Live Updates so you don't have to adjust manually after every Organizr update  | * Live Updates also mean you are at the mercy of this repo  |

### Super Duper Advanced Static
(I fork cake like this for breakfast)

If for whatever reason you don't want to sync your theme to this repo and want to manually manage and update it on your own, I've setup a static version of the css [here](https://github.com/leram84/layer.Cake/blob/master/CSS/Static.css). I will keep this updated, but there won't be any versioning so you're on your own for following commits.


| Pros  | Cons |
| ------------- | ------------- |
| * God mode... you can have whatever you want  | * This is the most time consuming option  |
| * You have complete customization control over everything  | * Will have to manually update your theme after every new Organizr feature is added  |

## Add-Ons

Once your base theme is setup, you can also make some customization's and additions via [Add-ons](https://github.com/leram84/layer.Cake/tree/master/Add-Ons)

[Remove Blur Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Blur.css)
> **Description**:  Remove the Blur Effect that displays over ACTIVE icons in the sidebar. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/master/Add-Ons/Remove-Blur.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Close Button Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Close-iFrame-Button.css) <br/>
**Disclaimer**: I'll leave this up, but I don't recommend you use this anymore since I just realized it will also hide the X when in split screen view. In that case you won't have any on screen promts to close the second screen, only refresh and the `Esc + Esc` shortcut will work. Buyer beware.
> **Description**:  Remove the Close iFrame Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/master/Add-Ons/Remove-Close-iFrame-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Popout Button Add-On](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Popout-Button.css)
> **Description**:  Remove the iFrame Popout Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/master/Add-Ons/Remove-Popout-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Homepage Background Image Add-On](https://github.com/leram84/layer.Cake/blob/master/HTML/Add-Ons/Homepage-Background-Image.html)
> **Description**:  Add an image as your homepage background. <br/>
> **Installation**: Copy and paste [this code](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Homepage-Background-Image.html) to the bottom of your HTML box, and edit the `<<User Edit>>` line.

[Custom Button Module Add-Ons](https://github.com/leram84/layer.Cake/tree/master/HTML/Add-Ons) 
> **Description**:  Adds Custom Buttons to the top of your homepage that will navigate to other tabs INSIDE Organizr <br/>
> **Installation**: Choose your layout from the [HTML Add-On Section](https://github.com/leram84/layer.Cake/tree/master/Add-Ons) and paste the code to the bottom of your HTML box. Then edit the 6-8 `<<User Edit>>` lines identified in the code.

[Rounded DL Tab Buttons](https://github.com/leram84/layer.Cake/blob/master/CSS/Add-Ons/Remove-Popout-Button.css) (**User Request**)
> **Description**:  This will change the Download Panels tabs from square buttons to rounded. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="//cdn.rawgit.com/leram84/layer.Cake/master/Add-Ons/Rounded-DL-Tabs.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

## Roll Credits

* Obviously none of this would be possible without [@causefx](https://github.com/causefx) and the amazing work he has done with [Organizr](https://github.com/causefx/Organizr) But much more than that (and on a personal level) he has been one of the most altruistic devs I have yet to come across! On top of the one man show that is Organizr... the dude literally spends hours a day closing issues on git/reddit/gitter and is personally responsible for hundreds (thousands?) of running web servers.... Also he literally taught me everything I needed to know to make this repo. Cheers homie!

* Live updates are made possible by the awesome [Rawgit](https://github.com/rgrove/rawgit) project.
