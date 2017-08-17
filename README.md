# layer#Cake
layer#Cake is a theme engine for [Organizr](https://github.com/causefx/Organizr). It will take 7 user submitted colors (5 fill layers and 2 text layers) and apply a well thought out logic to generate your theme. There is a lot of extensibility here, but if you just want to skin your site, it can be done in seconds.

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/leram84/layer.Cake/blob/master/LICENSE) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/layer-Cake/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![PM](https://img.shields.io/badge/Reddit-Message-lightgrey.svg)](https://www.reddit.com/message/compose?to=leram84&subject=layer.Cake) 

## Features

* ** **New** ** Live updates NOW WITH OFFICIAL ORGANIZR SUPPORT!! (Please update if you're still using the old rawgit links so you don't have to wait 24 hours for each updated to propagate)
* Complete color customization
* Intelligent color logic based on 7 user submitted color codes
* Fast color switching via color variables
* Highly modular and extensible via custom add-ons
* Custom buttons on homepage that take you directly to other tabs
* Media hover animations
* Login/logout pages, chat room, homepage, settings, and all miscellaneous pages included
* And much much more!

## Screenshots

<img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin3.png" width="33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/WeylandHP.png" width="33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin4.png" width="33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin1.png" width="33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/settings.PNG" width="33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin2.png" width="33%">

Thanks [gilbN](https://github.com/gilbN) and [prof](https://github.com/jonfinley)!

If anyone else would like to submit screenshots please do so in issues. I love seeing what you guys come up with!

## Installation Instructions

You now have 3 install paths to choose from: Basic Live Default, Advanced Live Custom, and Super Duper Advanced Static :)

### 1) Default (Live)
(I just wanna dark theme this thing and move on!)

Ok, SUPER simple. 
1) Copy and paste the complete contents of [Default.css](https://github.com/leram84/layer.Cake/blob/master/Live/Default.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon).
2) Edit the 7 colors with your own hex codes.... Let me say that again. EDIT THE 7 COLORS WITH YOUR OWN HEX CODES. If you need help choosing colors I highly recommend you check out [coolors.co](https://coolors.co/).
3) That's it... seriously, you're all done! You're probably gonna want to go eat some cake now :)

| Pros  | Cons |
| ------------- | ------------- |
| <ul><li>Fast and Easy Install</li><li>Live Updates so you don't have to adjust <br/> manually after every Organizr update</li></ul> | <ul><li>Limited Customization</li><li>Live Updates also mean you <br/> are at the mercy of this repo</li></ul> |


### 2) Custom (Live)
(I need more colors!)

This setup will allow you to customize a bunch of stuff (Homepage, login, chat, miscellaneous, and Calendar) individually. It is identical to the default installation, you just have more colors you can set. 
1) Copy and paste the complete contents of [Custom.css](https://github.com/leram84/layer.Cake/blob/master/Live/Custom.css) to your CSS box in Organizr (Settings/Edit Colors/Gear Icon).
2) Edit the 32 colors with your own hex codes (though you will likely reuse many). 
3) ????
4) Profit

**** Disclaimer: Please note that this option comes with an extra set of colors labeled "extraLayer". These serve no function other than to act as a placeholder for future addons. You can leave them as is and they won't cause any trouble :)


| Pros  | Cons |
| ------------- | ------------- |
| <ul><li>Tons of Custom Colors!</li><li>Live Updates so you don't have to adjust <br/> manually after every Organizr update</li></ul> | <ul><li>Will take a little longer to configure</li><li>Live Updates also mean you <br/> are at the mercy of this repo</li></ul> |

### 3) Static
(I fork cake like this for breakfast)

If for whatever reason you don't want to sync your theme to this repo and want to manually manage and update it on your own, I've setup a static version of the css [here](https://github.com/leram84/layer.Cake/blob/master/CSS/Static.css). I will keep this updated, but there won't be any versioning so you're on your own for following commits. If you do want to go this route but need a little hand holding, [gilbN](https://github.com/gilbN) has made some pretty extensive documentation [here](https://blog.weyland.tech/blog/customizing-organizr-with-layer-cake). 


| Pros  | Cons |
| ------------- | ------------- |
| <ul><li>God mode... you can have whatever you want</li><li>You have complete customization <br/> control over everything</li></ul> | <ul><li>This is the most time consuming option</li><li>Will have to manually update your theme <br/> after every new Organizr feature is added</li></ul> |

## Add-Ons

Once your base theme is setup, you can also make some customization's and additions via [Add-ons](https://github.com/leram84/layer.Cake/tree/master/Add-Ons)

[Remove Blur Add-On](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Remove-Blur.css)
> **Description**:  Remove the Blur Effect that displays over ACTIVE icons in the sidebar. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="ajax.php?a=show-file&file=https://raw.githubusercontent.com/leram84/layer.Cake/master/Add-Ons/Remove-Blur.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Close Button Add-On](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Remove-Close-iFrame-Button.css) <br/>
**Disclaimer**: I'll leave this up, but I don't recommend you use this anymore since I just realized it will also hide the X when in split screen view. In that case you won't have any on screen promts to close the second screen, only refresh and the `Esc + Esc` shortcut will work. Buyer beware.
> **Description**:  Remove the Close iFrame Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="ajax.php?a=show-file&file=https://raw.githubusercontent.com/leram84/layer.Cake/master/Add-Ons/Remove-Close-iFrame-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Remove Popout Button Add-On](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Remove-Popout-Button.css)
> **Description**:  Remove the iFrame Popout Button from the top bar of Organizr. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="ajax.php?a=show-file&file=https://raw.githubusercontent.com/leram84/layer.Cake/master/Add-Ons/Remove-Popout-Button.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

[Homepage Background Image Add-On](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Homepage-Background-Image.html)
> **Description**:  Add an image as your homepage background. <br/>
> **Installation**: Copy and paste [this code](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Homepage-Background-Image.html) to the bottom of your HTML box, and edit the `<<User Edit>>` line.

[Custom Button Module Add-Ons](https://github.com/leram84/layer.Cake/tree/master/Add-Ons) 
> **Description**:  Adds Custom Buttons to the top of your homepage that will navigate to other tabs INSIDE Organizr <br/>
> **Installation**: Choose your layout from the [HTML Add-On Section](https://github.com/leram84/layer.Cake/tree/master/Add-Ons) and paste the code to the bottom of your HTML box. Then edit the 6-8 `<<User Edit>>` lines identified in the code.

[Rounded DL Tab Buttons](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Rounded-DL-Tabs.css) (**User Request**)
> **Description**:  This will change the Download Panels tabs from square buttons to rounded. <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="ajax.php?a=show-file&file=https://raw.githubusercontent.com/leram84/layer.Cake/master/Add-Ons/Rounded-DL-Tabs.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

## Roll Credits

* Obviously none of this would be possible without [@causefx](https://github.com/causefx) and the amazing work he has done with [Organizr](https://github.com/causefx/Organizr) But much more than that (and on a personal level) he has been one of the most altruistic devs I have yet to come across! On top of the one man show that is Organizr... the dude literally spends hours a day closing issues on git/reddit/gitter and is personally responsible for hundreds (thousands?) of running web servers.... Also he literally taught me everything I needed to know to make this repo. Cheers homie!

* Shout out to team Organizr on [gitte](https://gitter.im/Organizrr/Lobby) and [reddit](https://www.reddit.com/r/organizr/). Best online community I've ever had the privilege of being a part of, and an incredible learning experience. layer#Cake is my way of payin it back :)
