import cv2
import numpy as np
import math
from math import pi as PI




#functions to draw vertical line

# ------START------






def getAng(a, b, c): #a = [1,2]

    ang = math.degrees(math.atan2(c[1]-b[1], c[0]-b[0]) - math.atan2(a[1]-b[1], a[0]-b[0]))
    return ang + 360 if ang < 0 else ang

def findit(approx):
    yo = approx.copy()
    
    #appending duplicates for future problems
    yo.append(yo[0])
    yo.append(yo[1])
    yo.append(yo[2])
    yo.append(yo[3])
    ans={}

    #loop for all angles
    for i in range(0,7,1):
         ang = getAng(yo[i][0],yo[i+1][0],yo[i+2][0]) 
         if i == 6:
             j= 0
         else:
             j = i+1
         ans[j] = ang
    temp = max(ans.values())
    res = [key for key in ans if ans[key] == temp]

    if res[0]>=3:
        one = res[0]
        two = res[0]-4
        three = res[0] -3
    else:
        one = res[0]
        two = res[0]+3
        three = res[0] +4

    return one,two,three
#--------------END--------




def empty(a):
    pass


# def pts(ln):
#     pass


# Function to get the contours(corners), to plot the arrow and find the angle

#----------START----------

def getcont(img,imgcnt):
    contours,hierarchy = cv2.findContours(img,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)
    for cnt in contours:
        area= cv2.contourArea(cnt)
        # areamin= cv2.getTrackbarPos('area','Parameters')
        if area>1180:
            cv2.drawContours(imgcnt,cnt, -1,(0,255,255),7)
            perimeter = cv2.arcLength(cnt,True)
            approx=  cv2.approxPolyDP(cnt,0.02*perimeter,True)
            # print(len(approx))
            # x_,y_,W,h = cv2.boundingRect(approx)
            # cv2.rectangle(imageContour, (x_,y_),(x_+w,y_+h),(0,255,0),10)
            # print(approx)
            # cv2.putText(imageContour,"Points : " + str(len(approx)),(10,450),cv2.FONT_HERSHEY_COMPLEX,0.7,(0,255,0),2)
            if len(approx) == 7:

                mp,sp,dp = findit(approx.tolist())
                vertex_x,vertex_y = approx[mp][0]
                other_x,other_y = (approx[sp][0] + approx[dp][0])/2
                # other_x,other_y = approx[sp][0]
                # cv2.line(imageContour,(vertex_x,vertex_y ),(int(other_x),int(other_y)),(0,0,0),3)0
                try:
                    m= (other_y - vertex_y) /(other_x - vertex_x)
                except ZeroDivisionError:
                    m = (other_y - vertex_y) /(other_x - vertex_x + 0.001)

                # angle = fangle(vertex_x,vertex_y,other_x,other_y)
                PI = 3.14159265
                # M1 = m
                # M2= 999**9/10*(-10)

                myatan = lambda x,y: np.pi*(1.0-0.5*(1+np.sign(x))*(1-np.sign(y**2))\
                -0.25*(2+np.sign(x))*np.sign(y))\
                -np.sign(x*y)*np.arctan((np.abs(x)-np.abs(y))/(np.abs(x)+np.abs(y)))


           
            
                
                angle = np.arctan(m)
        
                angle = (angle * 180) / PI

               

                # angle = math.atan2(other_x,other_y) - math.atan2(vertex_x,vertex_y)
               

                if angle <0:
                    angle = 180 -abs(angle)

               
                angle = round(angle,2)
                
                cv2.rectangle(imageContour,(5,0),(190,30),(0,0,0),-1)
                cv2.putText(imageContour,"Angle : " + str(angle),(10,20),cv2.FONT_HERSHEY_COMPLEX,0.7,(0,0,255),2)

# ---------------- END-----------


#Main Program

cap= cv2.VideoCapture(0)

while True:
    _, frame =  cap.read()
    # thresh1= cv2.getTrackbarPos('t1','Parameters')
    # thresh2= cv2.getTrackbarPos('t2','Parameters')
    
    
    imageContour = frame.copy()


    hsv = cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    lower_red = np.array([140,80,80])
    upper_red = np.array([255,200,255])
    mask = cv2.inRange(hsv,lower_red,upper_red) #filtering out red color objects using a range
    kernel = np.ones((5,5),np.uint8) #declaring kernel for erosion,dilation,morphology
    
    erosion = cv2.erode(mask,kernel,iterations=1) #using erosion to reduce noise
    # opening = cv2.morphologyEx(mask,cv2.MORPH_OPEN,kernel) #eliminaing fake positives
    # closing = cv2.morphologyEx(mask,cv2.MORPH_CLOSE,kernel) #eliminating fake negatives






    # kernel = np.ones((5,5))

    edges = cv2.Canny(frame,160,154) #getting the edges
    # edges = cv2.Canny(frame,thresh1,thresh2) #getting the edges

    # imgDil = cv2.dilate(edges,kernel,iterations=1)

    getcont(erosion,imageContour) #Finally runnng the main funcn to get corners,plot the arrow and put angle on image as text



    #SHOWING FRAMES

    # cv2.imshow('dil',imgDil)
    cv2.imshow('cont',imageContour)
    # cv2.imshow('edges',edges)
    # cv2.imshow('original',frame)


    k = cv2.waitKey(1)
    if k==48:
        break



cv2.destroyAllWindows()
cap.release()