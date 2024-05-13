# Node Random Color Generator PERN Spring 2024

Generate random colors on the command line also with input from the user.

When user calls the index file on command line generate a block of # 31 by 9 across in a random color with an opening in the center of the block that shows the hex code of the current color

```
node index.js
###############################
###############################
###############################
#####                     #####
#####      (hex code)     #####
#####                     #####
###############################
###############################
###############################
(block will be a random color)

```

if given a hue (e.g. blue) and a luminosity (e.g. dark) then the block generated will be a random color associated with those arguments. The hex code in the block will still be the hex code of the displayed color.

```
node index.js blue dark
###############################
###############################
###############################
#####                     #####
#####      (hex code)     #####
#####                     #####
###############################
###############################
###############################
(block will be a random shade of dark blue)

```
