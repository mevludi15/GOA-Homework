def  MinimumWindow(s, t):
    res = ""
    if len(t) > len(s):
        return ""
    else:
        for i in t:
            if i in s:
                res += i
        return res

print(MinimumWindow("ADOBECODEBANC", "ABC"))
