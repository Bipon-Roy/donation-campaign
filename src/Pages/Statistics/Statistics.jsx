import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
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
            <div>
                <h2>Pie Chart</h2>
                <ResponsiveContainer width="100%" height={500}>
                    <PieChart>
                        <Pie dataKey="value" data={data} cx="50%" cy="50%" fill="#8884d8">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `${((value / totalValue) * 100).toFixed(2)}%`}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
