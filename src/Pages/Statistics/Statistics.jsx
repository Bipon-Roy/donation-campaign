import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Label } from "recharts";
import { getStorageData } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const totalDonation = getStorageData();
    const allData = useLoaderData();
    const totalValue = allData.length;

    const donatedValue = totalDonation.length;

    const data = [
        { name: "Your Donation", value: donatedValue },
        { name: "Total Donation", value: totalValue - donatedValue },
    ];

    const COLORS = ["#00C49F", "#FF444A"];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:mt-10">
                <ResponsiveContainer width="100%" height={500}>
                    <PieChart>
                        <Pie
                            startAngle={-110}
                            dataKey="value"
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            {data.map((entry, index) => (
                                <Label
                                    key={`label-${index}`}
                                    position={
                                        entry.name === "Your Donation" ? "centerBottom" : "inside"
                                    }
                                    fill="white"
                                    dy={entry.name === "Your Donation" ? 70 : 10}
                                    dx={entry.name === "Your Donation" ? 60 : 0}
                                >
                                    {`${((entry.value / totalValue) * 100).toFixed(1)}%`}
                                </Label>
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `${((value / totalValue) * 100).toFixed(1)}%`}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
