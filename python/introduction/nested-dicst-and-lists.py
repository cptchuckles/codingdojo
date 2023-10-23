x = [[5,2,3], [10,8,9]] 
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]


# 1. Update values in dictionaries and lists
x[1][0] = 15
students[0]["last_name"] = "Bryant"
sports_directory["soccer"][0] = "Andres"
z[0]["y"] = 30

# 2. Iterate througha list of dictionaries
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(dicts):
    for d in dicts:
        print(", ".join(f"{k} - {d[k]}" for k in d))


iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# => first_name - Michael, last_name - Jordan
# => first_name - John, last_name - Rosales
# => first_name - Mark, last_name - Guillen
# => first_name - KB, last_name - Tonel


# 3. Get values form a list of dictionaries
def iterateDictionary2(key_name, dicts):
    for d in dicts:
        print(d[key_name])


iterateDictionary2("first_name", students)
iterateDictionary2("last_name", students)


# 4. Iterate through a dictionary with list values
def printInfo(some_dict):
    for k in some_dict:
        print(len(some_dict[k]), k.upper())
        for v in some_dict[k]:
            print(v)
        print()


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

printInfo(dojo)
