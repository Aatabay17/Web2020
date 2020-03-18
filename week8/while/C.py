import math
a = int(input())

i = 0

while a >= i:
    if(pow(2,i) <= a):
        print(pow(2,i))
    i+=1