import math

def solution(s):
    mid = math.floor(len(s) / 2)
    return s[mid-1] + s[mid] if len(s) % 2 == 0 else s[mid]
