def WordBreak(str,dict):
    return str == "".join(dict)

print(WordBreak("catsandog",  ["cats","dog","sand","and","cat"]))