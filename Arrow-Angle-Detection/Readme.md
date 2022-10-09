# Arrow-Detection

## Problem Statement:
Build a software system which detects a RED arrow in a video feed captured by the web camera and prints the angle of its head with respect to the vertical axis. The system should work in varying backgrounds and varying lighting conditions. Time limit - 1 week.

## Summary
The program captures the live feed and detects the arrow, makes an outline of the arrow and detects the angle made by that arrow with the vertical axis and displays it on the top left of the screen. The arrow has to be dark reddish in color. The program works for 3-4 meter range. Everything is coded in python and the program is efficient and accurate upto 90%. 

## Approach
I used OpenCV module in python to capture the live feed. Made a mask of everything reddish in the frame. Used edge detection functions to detect edges in the mask. Used erosion to clear off fake positives. Detected contours. if the number of corners in the closed contour is equal to 7 (because arrow has 7 corners), and the area occupied  by the figure is above 1000 units, then I drew the contour around it. Made a function that takes in the list of coordinates and returns the angle made by the arrow and displays on the top left of the screen.

## Installation

Just clone the repository

```
git clone <repo link>
```

Install Numpy next

```
pip install numpy
```

Finally Install Opencv

```
pip install opencv-python
```

You're ready to go! Just get an arrow and run the program!

