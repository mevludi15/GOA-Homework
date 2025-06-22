def Rotate(lst, k):
    return lst[:k:-1] + lst[:k+1]

print(Rotate([1,2,3,4], 4))