n = int(input())

cnt = 0 

for i in range(1,n+1):
    temp = int(input())
    if(temp==0):
        cnt+=1
print(cnt)