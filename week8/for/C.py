import math 
a = int(input())
b = int(input())

for i in range(a,b+1):
    sqr = int(math.sqrt(i))
    if(sqr * sqr == i):
        print(i)

