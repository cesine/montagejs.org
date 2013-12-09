---

layout: docs
title: Reusing MontageJS Components

prev-page: draw-cycle
this-page: resusing-components
next-page: extending-components

---


# Using Components inside of Components

## A Simple Component

```html
<link rel="stylesheet" type="text/css" href="foo.css">
<script type="text/montage-serialization">
{
    "owner": {
        "properties": {
            "element": {"#": "foo"}
        }
    },
    "title": {
        "prototype": "montage/ui/text.reel",
        "properties": {
            "element": { "#": "title" }
        },
        "bindings": {
            "value": { "<-": "@owner.fooDetails.title" }
        }
    },
    "description": {
        "prototype": "montage/ui/text.reel",
        "properties": {
            "element": { "#": "description" }
        },
        "bindings": {
            "value": { "<-": "@owner.fooDetails.description" }
        }
    }
}
</script>
<body>
    <div data-montage-id="foo" class="Foo">
        <h1 data-montage-id="title"></h1>
        <div data-montage-id="text"><div>
    </div>
</body>
```

## A component which uses the simple component

```html
<link rel="stylesheet" type="text/css" href="bar.css">
<script type="text/montage-serialization">
{
    "owner": {
        "properties": {
            "element": {"#": "bar"},
            "myfoo": {
                "title": "Foo",
                "description": "lorem ipsum..."
            }
        }
    },
    "foo": {
        "prototype": "ui/foo.reel",
        "properties": {
            "element": { "#": "foo" }
        },
        "bindings": {
            "fooDetails": { "<->": "@owner.myfoo" }
        }
    }
}
</script>
<body>
    <div data-montage-id="bar" class="Bar">
        <div data-montage-id="foo"></div>
    </div>
</body>
```

## Using data-param and data-arg

TODO
