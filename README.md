# Image Part Picker

This application can be used to assign coordinates to an image part and to handle clicks on the image part.

# How to use

## Preparation
1. Create a local copy of this repository
2. Provide the image that should be divided into parts by uploading it the app into folder assets. The image must be of type svg (vector)
3. Provide an enum that should be used and provide the parts of that image. Like in the example the enum 'Part' with 'Body', 'Chest', etc.
4. Import the image into App.tsx, like currently done for PersonImage.

## Define image parts
1. Call npm install and start the application (npm start).
2. Select a part of the image from the dropdown and assign coordinates by clicking into the image at the specific part. Repeat that for each part of the image.
3. Copy the generated code from the textbox.

## Prepare usage
1. Copy folder src/components/imagePartPicker and all its files into your project, where the ImagePartPicker should be used
2. Provide the image to your project too
3. Provide the enum with the image parts into your project too
4. Call component ImagePartPicker. Fill property image and provide the enum type as <typeOf <EnumName>> and paste the copied code into property gridConfig
5. Implement function onSelect to handle click event

```
<ImagePartPicker<typeof Part>
  gridConfig={(grid) => {
    grid.setWidth(20);
    grid.setHeight(20);
    grid.data.set(Part.Head, [
      { x: 8, y: 0 },
      { x: 9, y: 0 },
    ]);
    grid.data.set(Part.LeftArm, [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
    ]);
    return grid;
  }}
  gridHeight={20}
  gridWidth={20}
  image={<PersonImage style={{ width: "30rem", height: "auto" }} />}
  onSelect={(part) => {
    switch (part) {
      case Part.Body: {
        // ...
      }
    }
  }}
/>
```
