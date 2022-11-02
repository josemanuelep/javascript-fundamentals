let images = [
  { height: 10, width: 30 },
  { height: 1, width: 90 },
  { height: 10, width: 10 },
];
let areas = [];

const getAreas = (images) => {
  let totalArea = 0;
  let areas = {
    totalObjetcs: images.length,
    largestImagetIndex: images.indexOf(Math.max(images)),
    areasEachImage: [],
  };

  images.forEach((image) => {
    let area = image.height * image.width;
    totalArea += area;
    areas.areasEachImage.push(image.height * image.width);
  });

  areas.totalArea = totalArea;

  return areas;
};

console.log(getAreas(images));
