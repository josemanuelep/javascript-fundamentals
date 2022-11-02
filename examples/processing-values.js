let images = [
  { height: 50, width: 30 },
  { height: 1, width: 90 },
  { height: 150, width: 100 },
];
let areas = [];

const getAreas = (images) => {
  let totalArea = 0;
  let maxAt = 0;

  let areas = {
    totalObjetcs: images.length,
    largestImagetIndex: 0,
    areasEachImage: [],
    totalArea: 0,
  };

  images.forEach((image, index) => {
    let area = image.height * image.width;
    totalArea += area;
    areas.areasEachImage.push(image.height * image.width);
    maxAt =
    areas.areasEachImage[index] > areas.areasEachImage[maxAt] ? index : maxAt;
  });

  areas.totalArea = totalArea;
  areas.largestImagetIndex = maxAt;

  return areas;
};

console.log(getAreas(images));
