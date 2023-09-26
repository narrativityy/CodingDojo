# update values in dictionaries and lists
x = [ [5,2,3], [10,8,9] ] 

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}

z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)

students[0]['last_name'] = 'Bryant'
print (students[0])

sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

z[0]['y'] = 30
print(z)

# iterate through a list of dictionaries
def iterateDictionary(list):
    for i in list:
        print(f"first_name - {i['first_name']}, last_name - {i['last_name']}")

def iterate_dictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students) 
iterate_dictionary2('first_name', students)
iterate_dictionary2('last_name', students)

# iterate through a dictionary with list values
def printInfo(dict):
    print(f"{len(dict['locations'])} LOCATIONS")
    for i in dict['locations']:
        print(i)
    print(f"\n{len(dict['instructors'])} INSTRUCTORS")
    for i in dict['instructors']:
        print(i)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
