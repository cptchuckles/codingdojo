# basic
for i in range(50, 151):
    print(i)

# multiples of five
for i in range(5, 1001, 5):
    print(i)

# counting, the dojo way
for i in range(1, 101):
    word = ""
    if i % 5 == 0:
        word += "Coding"
    if i % 10 == 0:
        word += " Dojo"
    if len(word) == 0:
        word = str(i)
    print(word)


# whoa. that sucker's huge
import functools  # E402 lel, placed here for ez SnipRun
print(functools.reduce(lambda a, n: a+n, range(500001)))

# countdown by fours
[print(x) for x in range(2018, 0, -4)]

# flexible counter
low_num = 2
high_num = 9
mult = 3
[print(x) for x in range(low_num, high_num+1) if x % mult == 0]
