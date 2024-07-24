# Udemy_DataStructures.Algorithms 💻

<details>
<summary> DataStructures </summary>

### 1. Big O
[!image](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs0pox%2Fbtq6Mbphdwr%2Fs5K0D58hi5hiSrBuxmHHwk%2Fimg.png)

#### 1) O(n) - Linear time
#### 2) O(1) - Constant time 
<br>

🔑 rules
- Worst Case : Always consider the worst case
- Drop Constant : ex) O(2n) -> O(n), O(n + 1) -> O(n)
<br>

#### 3) O(n^2) - Quadratic time
``` js
const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array) {
    for(let i = 0; i < array.lenght; i++;) {
        for(let j = 0; j < array.length; j++>) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(array);
```
<br>

#### 🔑 rules
- Different terms of input
- Drop non Dominants : O(n^2 + 3x + 100 + x/2) -> O(n^2) **simplify!!**
<br>










</details>
