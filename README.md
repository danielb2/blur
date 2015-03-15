# Blur
A library for filtering information from objects such as credit card information or other things which may be logged"

## Usage


``` javascript
var obj = {
    creditcard: {
        number: 'ABCDEFGHIJKLMNOP',
        year: 17,
        month: 4
    }
};

var result = Blur(obj, { number: Blur.creditCard });
```


Will result in

```
{
    creditcard: {
        number: 'XXXXXXXXXXXXMNOP',
        year: 17,
        month: 4
    }
}
```
