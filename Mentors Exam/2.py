def ConvertList(list):
    res = {}
    for x,y in list:
        res.setdefault(x,y)
    return res
    

print(ConvertList([('one', 1), ('two', 2)]))