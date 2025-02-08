# JavaScript Loose Equality Bug
This repository demonstrates a common error in JavaScript: the misuse of loose equality (`==`) when comparing values, specifically `null` and `undefined`.

## Bug Description
The function `foo` is intended to check if an argument is null and return 0 if it is; otherwise, it adds 1 to it. However, it incorrectly uses `==` instead of strict equality (`===`). This leads to unexpected behavior where `undefined` is also treated as 0.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the code.
3. Run the code. Notice that `foo(undefined)` also returns 0 even though it is not `null`.

## Solution
The solution is to replace the loose equality with the strict equality operator (`===`). This ensures that `null` is treated differently from `undefined`.

## Learning Point
Always use the strict equality operator (`===`) to prevent this kind of unexpected behavior.  Loose equality (`==`) can lead to confusing and hard-to-debug issues because of type coercion.