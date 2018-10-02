# caliBlur

caliBlur is a branch of project layer.Cake. This is a comprehensive plex-themed front end UI for [Calibre-Web](https://github.com/janeczku/calibre-web). Thanks for making such a great app! And massive thanks to @hexeth for joining the project and the immense amount of code he's contributed. All the JS is his work and needless to say this project could not have been completed without him!

## Screenshots
<img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP1.PNG" width="33.33%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP2.PNG" width="30%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP3.PNG" width="30%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP4.PNG" width="30%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP5.PNG" width="30%"> <img src="https://raw.githubusercontent.com/leram84/layer.Cake/Screenshots/caliBlurP6.PNG" width="30%">

## Instalation
### NGINX Subfilter (Recommended)
For now I'm going to leave this as the only install method, but feel free to open an issue or contact me on discord if this doesn't work for you as there are plenty of other options, I just haven't decided what I want to support officially yet. 

1) Make sure you don't have any themes turned on FOR ANY USER (the old caliBlur theme in the user settings page was experimental and will break this new installation so turn it off BEFORE going forward as you won't be able too once this is in place)
2) Paste this to the bottom of your calibre-web location block in nginx.conf:
```
proxy_set_header Accept-Encoding "";
sub_filter '</body>' '<script language="javascript" src="https://rawgit.com/leram84/layer.Cake/master/caliBlur/caliBlur.js"></script></body>';
sub_filter '</head>' ' <link rel="preload" href="https://rawgit.com/leram84/layer.Cake/master/caliBlur/caliBlur.min.css" as="style"><link rel="stylesheet" type="text/css" href="https://rawgit.com/leram84/layer.Cake/master/caliBlur/caliBlur.min.css"><link rel="preload" href="https://rawgit.com/leram84/layer.Cake/master/caliBlur/caliBlur.js" as="script"></head>';
sub_filter_once on;
```
3) Enjoy!
