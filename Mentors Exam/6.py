def SumNumbers(numbers):
    res = []
    for i in numbers:
        if i.isdigit():
            res.append(int(i))

    return sum(res)
print(SumNumbers("7 apples and 3 oranges"))

# სრულად არმუშაობს 