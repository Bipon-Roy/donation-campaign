import { Chart } from "react-google-charts";
import { getStorageData } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const totalDonation = getStorageData();
    const allData = useLoaderData();
    const totalValue = allData.length;
    let donatedValue = totalDonation.length;

    if (donatedValue == 0) {
        donatedValue = 0.001;
    }

    const data = [
        ["Donation Type", "Count"],
        ["Your Donation", donatedValue],
        ["Total Donation", totalValue - donatedValue],
    ];

    const options = {
        colors: ["#00C49F", "#FF444A"],
        legend: "bottom",
        pieSliceText: "",
        pieSliceTextStyle: {
            color: "white",
            bold: true,
        },
        tooltip: {
            text: "percentage",
        },
        slices: {
            0: { offset: 0 },
        },
        pieStartAngle: 80,
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Chart
                    width={"100%"}
                    height={"600px"}
                    chartType="PieChart"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default Statistics;
