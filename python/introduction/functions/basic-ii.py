def countdown(n):
    return [n for n in range(n, -1, -1)]
print(countdown(5))


def print_and_return(two_nums):
    print(two_nums[0])
    return two_nums[1]
print(print_and_return([1, 2]))


def first_plus_length(nums):
    return nums[0] + len(nums)
print(first_plus_length([1,2,3,4,5]))


def values_greater_than_second(nums):
    if len(nums) < 2:
        return False
    result = [n for n in nums if n > nums[1]]
    print(len(result))
    return result
print(values_greater_than_second([5,2,3,2,1,4]), "should print", 3, "and return", [5,3,4])
print(values_greater_than_second([3]), "should be", False)


def this_length_that_value(size, value):
    return [value for _ in range(size)]
print(this_length_that_value(4,7), "should be", [7,7,7,7])
print(this_length_that_value(6,2), "should be", [2,2,2,2,2,2])
