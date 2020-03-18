import math
a = int(input())

i = 1

while a >= i:
    sqr = int(math.sqrt(i))
    if(sqr*sqr==i):
        print(i)
    i+=1