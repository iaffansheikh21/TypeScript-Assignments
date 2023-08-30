var temperature:number = 50;

switch (true) {
    case (temperature <= 0):
        console.log("It's very cold. Wear heavy winter clothing and bundle up.");
        break;
    case (temperature <= 10):
        console.log("It's cold. Wear a warm jacket and layers.");
        break;
    case (temperature <= 20):
        console.log("It's cool. A light jacket or sweater would be appropriate.");
        break;
    case (temperature <= 30):
        console.log("It's mild. Wear comfortable clothing.");
        break;
    case (temperature <= 40):
        console.log("It's warm. Wear light and breathable clothes.");
        break;
    default:
        console.log("It's hot. Wear cool and loose-fitting clothing.");
        break;
}
