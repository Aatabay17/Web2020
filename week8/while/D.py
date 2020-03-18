import math
a = int(input())
cnt = 0

i = 0

while a >= i:
    if(pow(2,i) == a):
        cnt+=1
    i+=1
if(cnt>=1):
    print('YES')
else:
    print('NO')