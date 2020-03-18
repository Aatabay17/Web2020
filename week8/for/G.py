a = int(input())

for i in range(1,a+1):
    if(i==1):
        continue
    elif(a%i==0):
        print(i)
        break