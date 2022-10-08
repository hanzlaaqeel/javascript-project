//ques 45

let make_car = (manufacturer, model, ...optionalFeature) => {
    const cars = {
        manufacturer: manufacturer,
        model: model,
        optionalFeature: optionalFeature
    }
    console.log(cars);
}
make_car('honda', 'honda civic 22', 'white')
make_car('chevrolet', 'camaro', 'orange', 'modified')
