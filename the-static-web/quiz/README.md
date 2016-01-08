# The Static Web HTML + CSS Quiz

## Setup

```bash
mkdir -p ~/workspace/quizzes/the-static-web && cd $_
touch index.html
touch quiz.js
```

## Instructions

Your task is to build a grid of cards for a company's products. Here's the requirements for the basic structure of the cards.

1. Each product card should be an `article`.
1. Each card should take up 30% of the width of the browser window.
1. The each product should contain a `header` element that, itself, contains an `h1` element where the product's title will be written.
1. Each product should have three sections.
1. The first section should contain three child block elements.
    1. The first element contains the product image.
    1. The second element contains the product description.
    1. The third element contains the product availability (e.g. "Available" or "Not Available")
1. The second section contains product specifications.
    1. This section should have a header containing the word "Specifications"
    1. This section should contain two block elements
    1. The first block element specifies the size.
    1. The second block element specifies the weight.
    1. This section should contain a footer.
    1. The footer contains text stating when the product specifications become invalid.
1. The third section contains the product pricing.
    1. This section should contain a header.
    1. This section should contain three block elements.
    1. Each block element contains information about the price for different quantities.

### Addition style requirements

1. The entire card has a solid 1px border that is light blue.
1. The card title has a dotted 1px border that is light grey.
1. The title and product image are centered.
1. Notice that the text for the description in the image is justified.
1. The text for the product specification details and pricing details is bold.
1. The availability element extends the full width of the card, with a dark grey background and yellow text.

### Visual example

Here's an image that shows how the cards should appear.

![Static Web Quiz Example](https://raw.githubusercontent.com/nashville-software-school/front-end-milestones/static-web-quiz/the-static-web/static-web-quiz.png)
