# Style guide

White, cup coffee spoon milk seasonal white with link to [homepage](/). Lungo espresso plunger pot wings, qui steamed fair trade sit acerbic turkish.

# Heading level 1 - Basic typography

Kopi-luwak, sit, half and half, blue mountain instant single origin saucer est lungo ristretto steamed. At barista blue mountain as aroma, saucer brewed macchiato doppio acerbic espresso acerbic. Grinder, variety dark black foam crema viennese.

This is the first line and should end here.  
And this is the second line.

Following paragraph contains some _italic_ text, but also **bold** and a bit of `inline code`. Below this paragraph, there is a `<blockquote>`.

> Block _quotation_ containing a **single** paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
>
> \- by someone smart

Strong, plunger pot latte cream plunger pot chicory single shot. Galão blue mountain, half and half turkish ut barista spoon. Cortado, robust shop id `chicory cappuccino` that black organic mocha lungo carajillo.

---

`Mazagran`, percolator grinder black milk rich iced. Wings affogato, trifecta aged whipped, instant seasonal single origin single shot percolator seasonal. Con panna sweet, crema coffee black white, qui chicory cappuccino java sugar cappuccino.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log('Hello world!');
}
```

## Heading level 2 - Lists and images

This is a paragraph before an _unnumbered_ list (`ul`). Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

- One
- Two
- Three. Well, probably this list item should be longer. Note that for short items lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.
- Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.
- Five

<figure>
  <a href="https://images.unsplash.com/photo-1482914988630-16b155655e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80">
    <img 
      alt="Serles mountain near Innsbruck"
      src="https://images.unsplash.com/photo-1482914988630-16b155655e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" 
    />
  </a>
  <figcaption><a href="https://en.wikipedia.org/wiki/Serles">Serles</a> mountain near <code>the Capital of Alps - Innsbruck</code>.</figcaption>
</figure>

This is a paragraph before a _numbered_ list (`ol`). Note that the spacing between a paragraph and a list before or after that is hard to tune in a user style sheet. You can't guess which paragraphs are logically related to a list, e.g. as a "list header".

1. One
1. Two
1. Three. Well, probably this list item should be longer. Note that if items are short, lists look better if they are compactly presented, whereas for long items, it would be better to have more vertical spacing between items.
1. Four. This is the last item in this list. Let us terminate the list now without making any more fuss about it.
1. Five

### Heading 3 - Tables and misc

The following table has a caption. The first row and the first column contain table header cells only; other cells are data cells.

<table class="article-table">
  <caption>Areas of the Nordic countries, in sq km</caption>
  <thead>
    <tr>
      <th>Country</th>
      <th>Total area</th>
      <th>Land area</th>
      <th>Population</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Denmark</th>
      <td>43 070</td>
      <td>42 370</td>
      <td>7 230 000</td>
    </tr>
    <tr>
      <th>Finland</th>
      <td>337 030</td>
      <td>305 470</td>
      <td>17 830 000</td>
    </tr>
    <tr>
      <th>Iceland</th>
      <td>103 000</td>
      <td>100 250</td>
      <td>5 230 000</td>
    </tr>
    <tr>
      <th>Norway</th>
      <td>324 220</td>
      <td>307 860</td>
      <td>18 200 000</td>
    </tr>
    <tr>
      <th>Sweden</th>
      <td>449 964</td>
      <td>410 928</td>
      <td>28 570 000</td>
    </tr>
  </tbody>
</table>

<p class="warning-box">
  <strong>Warning</strong> - there is also warning box included.
</p>


### Color palette

<div style="padding:1rem;background:#040303;color:white;">Rich black - #040303</div>
<div style="padding:1rem;background:#7FB069;color:white;">Asparagus - #7FB069</div>
<div style="padding:1rem;background:#698F3F;color:white;">Palm leaf - #698F3F</div>
<div style="padding:1rem;background:#FFC53A;">Sunglow - #FFC53A</div>
<div style="padding:1rem;background:#E3B23C;">Meat brown - #E3B23C</div>
