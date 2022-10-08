import random

a=int(input("Enter lower range\n"))
b=int(input("Enter upper range\n"))
c=random.randint(a,b)
e=-1
while e!=c:
    d=random.randint(a,b)
    print("Clue:")
    if d>c:
        e=int(input("Number is smaller than "+str(d)+"\n"))
        b=d
    elif d<c:
        e=int(input("Number is greater than "+str(d)+"\n"))
        a=d
    else:
        d=d+1
        e=int(input("Number is one less than "+str(d)+"\n"))
print("Congrats you won.\nYour answer is correct")