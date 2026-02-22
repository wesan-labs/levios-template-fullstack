# Module Links

A module link forms an association between two data models of different modules, while maintaining module isolation.

> Learn more about links in [this documentation](https://docs.leviosjs.com/learn/fundamentals/module-links)

For example:

```ts
import BlogModule from "../modules/blog"
import ProductModule from "@wesan-labs/levios/product"
import { defineLink } from "@wesan-labs/levios-framework/utils"

export default defineLink(
  ProductModule.linkable.product,
  BlogModule.linkable.post
)
```

This defines a link between the Product Module's `product` data model and the Blog Module (custom module)'s `post` data model.

Then, in the Levios application, run the following command to sync the links to the database:

```bash
levios db:migrate
```
