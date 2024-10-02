---
id: methods
title: RxView360 Methods
sidebar_label: Methods
---

## RxView360 Methods

The main JavaScript object is called `RxCore`, and all following methods are referenced using `RxCore.<Method>`.

### 2.1 add3DViewAttribute

Adds a custom attribute to a 3D view that is stored with the 3D markup data view.

| **Syntax**  | `RxCore.add3DViewAttribute(attributeName, attributeValue)` |
|-------------|-------------------------------------------------------------|
| **Parameters** | <ul><li>`attributeName` (`String`): Name of the custom attribute.</li><li>`attributeValue` (`String`): Value of the custom attribute.</li></ul> |
| **Returns** | None |
| **Example** | ```js RxCore.add3DViewAttribute("description", "my description", annotation.name); ``` |

---

### 2.2 addFill

Populates various fill styles to use with CAD polygons using the `addFill` method.

| **Syntax**  | `RxCore.addFill(type, image, fill)` |
|-------------|-------------------------------------|
| **Parameters** | <ul><li>`type` (`String`): Name of the fill type.</li><li>`image` (`String`): Path to the image to use for fill. You can use `null` if not required.</li><li>`fill` (`String`): A string representing the color, e.g., `rgba(255,0,0,0.5)`.</li></ul> |
| **Returns** | None |
| **Example** | ```js RxCore.addFill("red fill color", null, "rgba(255,0,0,0.5)"); ``` |

---

### 2.3 addGlftoDoc

Adds a glTF or other 3D model to be used in RxView360. This function can be used to add a separate type of 3D entity to a 3D model like VRML.

| **Syntax**  | `RxCore.addGlftoDoc(URL)` |
|-------------|----------------------------|
| **Parameters** | <ul><li>`URL` (`String`): URL or path to the file you want to add to the current entity.</li></ul> |
| **Returns** | None |
| **Example** | ```js RxCore.addGlftoDoc("https://example.com/my3dmodel.glb"); ``` |

---

### 2.4 addHoverforBlock

Marks a vector 2D polygon with a different color. Used in combination with mouse-over events.

| **Syntax**  | `RxCore.addHoverforBlock(blockIndex, highlightColor)` |
|-------------|--------------------------------------------------------|
| **Parameters** | <ul><li>`blockIndex` (`Integer`): Index of the block you want to highlight.</li><li>`highlightColor` (`String`): Highlight color to use for the 2D vector polygon.</li></ul> |
| **Returns** | None |
| **Example** | ```js RxCore.addHoverforBlock(5, "rgba(0,255,0,0.7)"); ``` |

---

### 2.5 addMarkup

Adds one or more markup entities using XML encoded text.

| **Syntax**  | `RxCore.addMarkup(markupxml)` |
|-------------|--------------------------------|
| **Parameters** | <ul><li>`markupxml` (`String`): String in XML format that holds tags in accordance with RxView360 XML-based markup format.</li></ul> |
| **Returns** | None |
| **Example** | ```js RxCore.addMarkup("<markup><tag attribute='value'>Content</tag></markup>"); ``` |

---

### 2.6 alignCompare

Aligns two documents in an overlay compare. Takes an array of alignment objects returned by the GUI `CompareMeasure` callback.

| **Syntax**  | `RxCore.alignCompare(array)` |
|-------------|-------------------------------|
| **Parameters** | <ul><li>`array` (`Array` of align objects): Objects containing parameters such as:</li><ul><li>`dist`: Distance.</li><li>`angle`: Angle of alignment.</li><li>`offset`: Object containing `xOffset` and `yOffset`.</li></ul></ul> |
| **Returns** | None |
| **Example** | ```js const alignObjects = [ { dist: 5, angle: 10, offset: { xOffset: 3, yOffset: 2 } }, { dist: 7, angle: 15, offset: { xOffset: 1, yOffset: 1 } } ]; RxCore.alignCompare(alignObjects); ``` |

---

### Notes

- Rasterex Software a.s. - 17 of 108 - Limited Distribution
- RxView360 API Specification - Revision 27

---
