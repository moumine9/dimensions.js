# dimensions.js
A little script that I've created to adjust indivual elements positioning. margin and padding. While working on my projects, I've noticed that for indivual elements, I either had to create a style attribute (which can turn out to be messy when abused) or a class for each type of style ( padding50 to adjust padding to 50 for example). With the data-js selector, I found out I can do a lot of things : 
- First of all, I can set style either for one side or globally (difference between data-marginright and data-margin).
- I do not have to set a measure for the dimensioning. For example, I can do data-margin="30px" or data-margin="30%", it will be applied.

## Pros vs Cons

### Pros 
This way of setting style saves you a lot of css class. Also there is potential of extending it to new types of css.

### Cons
This is I believe, a huge impact on performance, but it has to be proved properly by unitary tests. Will do it later.

## Examples

### Padding
<div data-padding="30px"> </div>
<div data-padding="0 30px"> </div>
<div data-paddingtop="5%"> </div>
<div data-paddingbottom="30px"> </div>
<div data-paddingleft="2in"> </div>
<div data-paddingright="2em"> </div>

### Margin
<div data-margin="30px"> </div>
<div data-margin="0 30px"> </div>
<div data-margintop="5%"> </div>
<div data-marginbottom="30px"> </div>
<div data-marginleft="2in"> </div>
<div data-marginright="2em"> </div>

### Sizes
<div data-width="30px"> </div>
<div data-minwidth="5%"> </div>
<div data-maxwidth="30px"> </div>
<div data-height="2in"> </div>
<div data-minheight="2em"> </div>
<div data-maxheight="30px"> </div>


