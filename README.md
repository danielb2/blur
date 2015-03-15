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


### Blur.creditCard

This option is used to set any string to show only the last four characters
and blur out the rest with X's

### Blur.remove

Completely removes all matching keys

### Blur.censor

Replaces all matching keys with a string `[BLURRED]`
