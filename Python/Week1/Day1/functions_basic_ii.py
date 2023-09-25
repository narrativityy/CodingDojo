def countdown(start):
    for i in range (start,-1, -1):
        print(i)

countdown(5)

def print_and_return(list):
    print(list[0])
    return list[1]

x = print_and_return([0,1])
print(x)

def first_plus_length(list):
    return list[0] + len(list)

print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(list):
    return_list = []
    for i in list:
        if i > list[1]:
            return_list.append(i)

    print(len(return_list))
    return return_list

print(values_greater_than_second([5,2,3,2,1,4]))

def length_and_value(size, value):
    list = []
    for i in range(size):
        list.append(value)
    return list

print(length_and_value(4,7))