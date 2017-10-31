# layer#Cake
layer#Cake is the theme engine for [Organizr](https://github.com/causefx/Organizr). The Basic and Advanced will take user submitted colors and apply a well thought out logic to generate your theme. There is a lot of extensibility here, but if you just want to skin your site, it can be done in seconds. The "themes" section will allow you to install entire UI mods on top of Organizr with a one click install. The first theme is theBlur, but more are comming!

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/leram84/layer.Cake/blob/master/LICENSE) [![Discord](https://img.shields.io/badge/Discord-PlexPy-738bd7.svg?style=flat-square)](https://discord.gg/rZXH7hu) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/layer-Cake/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![PM](https://img.shields.io/badge/Reddit-Message-lightgrey.svg)](https://www.reddit.com/message/compose?to=leram84&subject=layer.Cake) 

## Features

* ** **New** ** layer#Cake has now been integrated directly into Organizr!! You can still grab your addons and html from here, but all themes can be installed directly from Organizr from now on! (v1.5)
* Complete color customization
* Intelligent color logic based on user submitted color codes
* Fast color switching via color variables
* Highly modular and extensible via custom add-ons
* Custom buttons on homepage that take you directly to other tabs
* Media hover animations
* Login/logout pages, chat room, homepage, settings, and all miscellaneous pages included
* Full themes now with massive UI modifications
* And much much more!

## Screenshots

<img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin3.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin4.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/settings.PNG" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin1.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/Fin2.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/WeylandHP.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur1.jpg" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur2.jpg" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur3.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur4.jpg" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur5.png" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur6.PNG" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur7.PNG" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur8.PNG" width="24.5%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/theBlur9.PNG" width="24.5%">

Thanks [gilbN](https://github.com/gilbN) and [prof](https://github.com/jonfinley)!

If anyone else would like to submit screenshots please do so in issues. I love seeing what you guys come up with!

## Installation Instructions

As this project has now been integrated directly into Organizr, all installation can be done directly in Settings > Edit Colors > layer#Cake :)

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

[Numbered Playlist Fix Add-On](https://github.com/leram84/layer.Cake/blob/master/Add-Ons/Numbered-Plist-Fix.css)
> **Description**:  Hides the first letter of your Playlist Title. This is useful if you want to number your plex playlists but don't want the number to display on your homepage.  <br/>
> **Installation**: Paste `<link rel="stylesheet" type="text/css" href="ajax.php?a=show-file&file=https://raw.githubusercontent.com/leram84/layer.Cake/master/Add-Ons/Numbered-Plist-Fix.css">` into the "CSS Add-On Links Section" of your Organizr CSS box.

## Roll Credits

* Obviously none of this would be possible without [@causefx](https://github.com/causefx) and the amazing work he has done with [Organizr](https://github.com/causefx/Organizr) But much more than that (and on a personal level) he has been one of the most altruistic devs I have yet to come across! On top of the one man show that is Organizr... the dude literally spends hours a day closing issues on git/reddit/gitter and is personally responsible for hundreds (thousands?) of running web servers.... Also he literally taught me everything I needed to know to make this repo. Cheers homie!

* Shout out to team Organizr on [gitter](https://gitter.im/Organizrr/Lobby) and [reddit](https://www.reddit.com/r/organizr/). Best online community I've ever had the privilege of being a part of, and an incredible learning experience. layer#Cake is my way of payin it back :)
