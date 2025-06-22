def  ArmstrongNumber(number):
    res = []
    for i in str(number):
        res.append(int(i) ** len(str(number)))

    return sum(res) == number

print(ArmstrongNumber(10))
