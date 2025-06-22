#1

def SumDigit(numbers):
    res = []
    for i in str(numbers):
        res.append(int(i))

    return sum(res)


print(SumDigit(123))


